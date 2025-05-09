'use strict';

/**
 * Settings user activity page controller.
 */
angular.module('docs').controller('SettingsUserActivity', function($scope, $http, Restangular) {
  // Initialize date ranges
  $scope.dateRanges = [
    { name: 'Last 7 days', value: 7 },
    { name: 'Last 30 days', value: 30 },
    { name: 'Last 90 days', value: 90 }
  ];
  
  $scope.selectedDateRange = $scope.dateRanges[1]; // Default to 30 days
  
  /**
   * Load user activities with the current date range.
   */
  $scope.loadActivities = function() {
    Restangular.one('useractivity/list').get({
      limit: 100,
      sort_column: 0,
      asc: false,
      date_range: $scope.selectedDateRange.value
    }).then(function(data) {
      $scope.activities = data.activities;
      $scope.renderActivityChart(data.activities);
    });
  };
  
  /**
   * Load Gantt chart data.
   */
  $scope.loadGanttData = function() {
    Restangular.one('useractivity/gantt').get({
      date_range: $scope.selectedDateRange.value
    }).then(function(data) {
      $scope.ganttData = data.tasks;
      $scope.users = data.users;
      $scope.renderGanttChart(data.tasks);
    });
  };
  
  /**
   * Render activity chart using Chart.js.
   */
  $scope.renderActivityChart = function(activities) {
    if (!activities || activities.length === 0) return;
    
    // Prepare data for the chart
    var userActivities = {};
    var entityActivities = {};
    var labels = [];
    
    // Get the date labels (last n days)
    var today = new Date();
    for (var i = $scope.selectedDateRange.value - 1; i >= 0; i--) {
      var date = new Date(today);
      date.setDate(date.getDate() - i);
      labels.push(date.toISOString().substring(0, 10));
    }
    
    // Initialize data
    activities.forEach(function(activity) {
      // User activities count
      if (!userActivities[activity.username]) {
        userActivities[activity.username] = {};
        labels.forEach(function(label) {
          userActivities[activity.username][label] = 0;
        });
      }
      
      // Entity activities count
      if (!entityActivities[activity.entity_name]) {
        entityActivities[activity.entity_name] = {};
        labels.forEach(function(label) {
          entityActivities[activity.entity_name][label] = 0;
        });
      }
    });
    
    // Count activities by date
    activities.forEach(function(activity) {
      var activityDate = new Date(activity.create_date).toISOString().substring(0, 10);
      
      if (labels.includes(activityDate)) {
        userActivities[activity.username][activityDate]++;
        entityActivities[activity.entity_name][activityDate]++;
      }
    });
    
    // Prepare datasets for users
    var userDatasets = [];
    var colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];
    var colorIndex = 0;
    
    for (var user in userActivities) {
      var userData = [];
      labels.forEach(function(date) {
        userData.push(userActivities[user][date]);
      });
      
      userDatasets.push({
        label: user,
        data: userData,
        backgroundColor: colors[colorIndex % colors.length],
        borderColor: colors[colorIndex % colors.length],
        fill: false
      });
      
      colorIndex++;
    }
    
    // Prepare datasets for entities
    var entityDatasets = [];
    colorIndex = 0;
    
    for (var entity in entityActivities) {
      var entityData = [];
      labels.forEach(function(date) {
        entityData.push(entityActivities[entity][date]);
      });
      
      entityDatasets.push({
        label: entity,
        data: entityData,
        backgroundColor: colors[colorIndex % colors.length],
        borderColor: colors[colorIndex % colors.length],
        fill: false
      });
      
      colorIndex++;
    }
    
    // Clear previous charts
    if ($scope.userChart) {
      $scope.userChart.destroy();
    }
    
    if ($scope.entityChart) {
      $scope.entityChart.destroy();
    }
    
    // Create user activity chart
    var userCtx = document.getElementById('userActivityChart').getContext('2d');
    $scope.userChart = new Chart(userCtx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: userDatasets
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'User Activities Over Time'
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
    // Create entity activity chart
    var entityCtx = document.getElementById('entityActivityChart').getContext('2d');
    $scope.entityChart = new Chart(entityCtx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: entityDatasets
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Entity Activities Over Time'
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };
  
  /**
   * Render Gantt chart.
   */
  $scope.renderGanttChart = function(tasks) {
    if (!tasks || tasks.length === 0) return;
    
    // Initialize Gantt chart
    gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
    gantt.config.columns = [
      {name: "text", label: "Task name", width: 200, tree: true},
      {name: "start_date", label: "Start date", width: 130, align: "center"},
      {name: "duration", label: "Duration", width: 70, align: "center"}
    ];
    
    gantt.config.scale_unit = "day";
    gantt.config.date_scale = "%d %M";
    gantt.config.subscales = [
      {unit: "hour", step: 6, date: "%H:%i"}
    ];
    gantt.config.scale_height = 50;
    
    // Clear previous chart
    gantt.clearAll();
    
    // Initialize data
    var ganttTasks = {
      data: []
    };
    
    // Group tasks by user
    var userGroups = {};
    tasks.forEach(function(task) {
      if (!userGroups[task.user_id]) {
        userGroups[task.user_id] = {
          id: task.user_id,
          text: task.username,
          type: "project",
          open: true,
          children: []
        };
      }
      
      userGroups[task.user_id].children.push({
        id: task.id,
        text: task.entity_name,
        start_date: new Date(parseInt(task.start_date)),
        end_date: new Date(parseInt(task.end_date)),
        details: task.details
      });
    });
    
    // Add user groups and tasks
    for (var userId in userGroups) {
      ganttTasks.data.push(userGroups[userId]);
      userGroups[userId].children.forEach(function(child) {
        ganttTasks.data.push(child);
      });
    }
    
    // Initialize gantt
    gantt.init("ganttChart");
    
    // Load data
    gantt.parse(ganttTasks);
  };
  
  // Initial load
  $scope.loadActivities();
  $scope.loadGanttData();
  
  // Update when date range changes
  $scope.$watch('selectedDateRange', function() {
    $scope.loadActivities();
    $scope.loadGanttData();
  });
}); 