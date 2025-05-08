'use strict';

/**
 * Settings user activity controller.
 */
angular.module('docs').controller('SettingsUserActivity', function($scope, Restangular, $filter, $timeout) {
  // Date time format
  $scope.dateTimeFormat = 'yyyy-MM-dd HH:mm:ss';
  
  // Initialize dates to last 7 days by default
  var today = new Date();
  $scope.endDate = today;
  $scope.startDate = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000)); // 7 days ago
  
  // Array to store unique usernames
  $scope.users = [];
  
  /**
   * Load activities based on current filters
   */
  $scope.loadActivities = function() {
    if (!$scope.startDate || !$scope.endDate) {
      $scope.activities = [];
      return;
    }
    
    // Format dates for API call
    var startDate = $scope.startDate.toISOString().split('T')[0]; // YYYY-MM-DD format
    var endDate = $scope.endDate.toISOString().split('T')[0];
    
    // Get logs from server
    Restangular.one('app/log').get({
      limit: 100,
      // Add additional parameters if needed for filtering
      startDate: startDate,
      endDate: endDate,
      user: $scope.userFilter || null
    }).then(function(data) {
      $scope.activities = processLogsToActivities(data.logs);
      
      // Extract unique usernames
      var usernames = {};
      $scope.activities.forEach(function(activity) {
        if (activity.username && !usernames[activity.username]) {
          usernames[activity.username] = true;
        }
      });
      $scope.users = Object.keys(usernames).sort();
      
      // Render Gantt chart with processed data
      $timeout(function() {
        renderGanttChart($scope.activities);
      }, 100);
    });
  };
  
  /**
   * Process logs to extract user activities
   */
  function processLogsToActivities(logs) {
    return logs.map(function(log) {
      var parts = log.message.split(' ');
      var username = '';
      var entity = '';
      var action = '';
      
      // Try to extract username, entity and action from log message
      if (log.message.indexOf('User') > -1) {
        // Extract username - assume format "User {username} did something"
        var userIndex = log.message.indexOf('User ');
        if (userIndex > -1) {
          var usernameStart = userIndex + 5; // "User " length
          var nextSpace = log.message.indexOf(' ', usernameStart);
          if (nextSpace > -1) {
            username = log.message.substring(usernameStart, nextSpace);
          }
        }
        
        // Extract action and entity
        if (log.message.indexOf('created') > -1) {
          action = 'created';
        } else if (log.message.indexOf('updated') > -1) {
          action = 'updated';
        } else if (log.message.indexOf('deleted') > -1) {
          action = 'deleted';
        } else if (log.message.indexOf('logged in') > -1) {
          action = 'logged in';
        }
        
        // Try to extract entity
        var entities = ['document', 'file', 'tag', 'user', 'group', 'comment'];
        entities.forEach(function(e) {
          if (log.message.indexOf(e) > -1) {
            entity = e;
          }
        });
      }
      
      return {
        date: new Date(log.date),
        username: username || log.tag,
        entity: entity,
        type: action || log.level,
        message: log.message,
        level: log.level
      };
    });
  }
  
  /**
   * Render Gantt chart with user activities
   */
  function renderGanttChart(activities) {
    if (!activities || activities.length === 0) return;
    
    // Define custom templates for gantt chart
    if (!$scope.ganttInitialized) {
      gantt.templates.task_text = function(start, end, task) {
        return task.text;
      };
      
      gantt.templates.task_class = function(start, end, task) {
        var classes = {
          'created': 'gantt-created',
          'updated': 'gantt-updated',
          'deleted': 'gantt-deleted',
          'logged in': 'gantt-login',
          'INFO': 'gantt-info',
          'DEBUG': 'gantt-debug',
          'WARN': 'gantt-warn',
          'ERROR': 'gantt-error',
          'FATAL': 'gantt-fatal'
        };
        return classes[task.type] || 'gantt-info';
      };
      
      gantt.templates.tooltip_text = function(start, end, task) {
        return '<b>时间:</b> ' + $filter('date')(start, $scope.dateTimeFormat) + '<br/>' +
               '<b>用户:</b> ' + task.username + '<br/>' +
               '<b>类型:</b> ' + task.type + '<br/>' +
               '<b>详情:</b> ' + task.details;
      };
      
      // Add custom CSS to gantt
      var style = document.createElement('style');
      style.innerHTML = '.gantt-created { background-color: #5cb85c; }' +
        '.gantt-updated { background-color: #5bc0de; }' +
        '.gantt-deleted { background-color: #d9534f; }' +
        '.gantt-login { background-color: #f0ad4e; }' +
        '.gantt-info { background-color: #5bc0de; }' +
        '.gantt-debug { background-color: #999999; }' +
        '.gantt-warn { background-color: #f0ad4e; }' +
        '.gantt-error { background-color: #d9534f; }' +
        '.gantt-fatal { background-color: #800000; }';
      document.head.appendChild(style);
      
      $scope.ganttInitialized = true;
    }
    
    // Configure gantt
    gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
    gantt.config.columns = [
      {name: "text", label: "活动内容", width: 300, tree: true},
      {name: "type", label: "类型", width: 80, align: "center"},
      {name: "username", label: "用户", width: 100, align: "center"}
    ];
    
    // Set time scale based on date range
    var daysDiff = Math.round((new Date($scope.endDate) - new Date($scope.startDate)) / (1000 * 60 * 60 * 24));
    if (daysDiff <= 1) {
      // For 1 day or less, show hours
      gantt.config.scale_unit = "hour";
      gantt.config.date_scale = "%H:%i";
      gantt.config.subscales = [
        {unit: "minute", step: 15, date: "%i"}
      ];
    } else if (daysDiff <= 7) {
      // For 1 week or less, show days with hours
      gantt.config.scale_unit = "day";
      gantt.config.date_scale = "%m/%d";
      gantt.config.subscales = [
        {unit: "hour", step: 6, date: "%H:%i"}
      ];
    } else {
      // For more than a week, show days
      gantt.config.scale_unit = "day";
      gantt.config.date_scale = "%m/%d";
      gantt.config.subscales = [
        {unit: "day", step: 1, date: "%j"}
      ];
    }
    gantt.config.scale_height = 50;
    
    // Initialize gantt data
    var ganttData = {
      data: []
    };
    
    // Group activities by user
    var userGroups = {};
    activities.forEach(function(activity, index) {
      if (!activity.username) return;
      
      if (!userGroups[activity.username]) {
        userGroups[activity.username] = {
          id: 'user_' + activity.username,
          text: activity.username,
          open: true
        };
        ganttData.data.push(userGroups[activity.username]);
      }
      
      // Create a task for each activity
      var activityEndTime = new Date(activity.date.getTime() + 60000); // Add 1 minute for visualization
      
      ganttData.data.push({
        id: 'activity_' + index,
        text: activity.message.length > 60 ? activity.message.substring(0, 60) + '...' : activity.message,
        start_date: activity.date,
        end_date: activityEndTime,
        parent: 'user_' + activity.username,
        username: activity.username,
        type: activity.type,
        details: activity.message,
        level: activity.level || 'INFO'
      });
    });
    
    // Initialize gantt
    gantt.init("ganttChart");
    gantt.parse(ganttData);
  }
  
  /**
   * Download activities as CSV
   */
  $scope.downloadCsv = function() {
    if ($scope.activities.length === 0) {
      return;
    }
    
    var csvContent = "Date,Username,Entity,Type,Message\n";
    $scope.activities.forEach(function(activity) {
      var date = new Date(activity.date).toISOString().replace('T', ' ').substring(0, 19);
      // Escape CSV values properly
      var row = [
        date,
        '"' + (activity.username || '').replace(/"/g, '""') + '"',
        '"' + (activity.entity || '').replace(/"/g, '""') + '"',
        '"' + (activity.type || '').replace(/"/g, '""') + '"',
        '"' + (activity.message || '').replace(/"/g, '""') + '"'
      ].join(',');
      csvContent += row + "\n";
    });
    
    // Create download link
    var encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "user_activities.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Load activities on controller initialization
  $scope.loadActivities();
}); 