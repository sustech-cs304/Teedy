'use strict';

/**
 * Settings user activity controller.
 */
angular.module('docs').controller('SettingsUserActivity', function($scope, Restangular, $filter, $timeout, $uibModal, $sce) {
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
      var eventCategory = 'other'; // Default category
      
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
      
      // Categorize event based on message content, not case sensitive
      var lowerMessage = log.message.toLowerCase();
      if (lowerMessage.indexOf('document') > -1 || lowerMessage.indexOf('file') > -1) {
        eventCategory = 'document';
      } else if (lowerMessage.indexOf('found') > -1) {
        eventCategory = 'found';
      }
      
      return {
        date: new Date(log.date),
        username: username || log.tag,
        entity: entity,
        type: action || log.level,
        message: log.message,
        level: log.level,
        eventCategory: eventCategory
      };
    });
  }
  
  /**
   * Open modal with full activity details
   */
  $scope.openActivityDetails = function(activity) {
    $uibModal.open({
      template: '<div class="modal-header">' +
                '<h3 class="modal-title">活动详情</h3>' +
                '</div>' +
                '<div class="modal-body">' +
                '<p><strong>时间:</strong> {{ activity.date | date: dateTimeFormat }}</p>' +
                '<p><strong>用户:</strong> {{ activity.username }}</p>' +
                '<p><strong>类型:</strong> {{ activity.type }}</p>' +
                '<p><strong>实体:</strong> {{ activity.entity }}</p>' +
                '<p><strong>消息:</strong> {{ activity.message }}</p>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button class="btn btn-default" ng-click="$dismiss()">关闭</button>' +
                '</div>',
      controller: function($scope, $uibModalInstance, activity, dateTimeFormat) {
        $scope.activity = activity;
        $scope.dateTimeFormat = dateTimeFormat;
      },
      resolve: {
        activity: function() {
          return activity;
        },
        dateTimeFormat: function() {
          return $scope.dateTimeFormat;
        }
      }
    });
  };
  
  /**
   * Render Gantt chart with user activities
   */
  function renderGanttChart(activities) {
    if (!activities || activities.length === 0) return;
    
    // Define custom templates for gantt chart
    if (!$scope.ganttInitialized) {
      gantt.templates.task_text = function(start, end, task) {
        // 限制文本长度，防止溢出
        return task.text.length > 30 ? task.text.substring(0, 30) + '...' : task.text;
      };
      
      gantt.templates.task_class = function(start, end, task) {
        // 基于事件类别分配不同的颜色类
        var classes = {
          'created': 'gantt-created',
          'updated': 'gantt-updated',
          'deleted': 'gantt-deleted',
          'logged in': 'gantt-login',
          'INFO': 'gantt-info',
          'DEBUG': 'gantt-debug',
          'WARN': 'gantt-warn',
          'ERROR': 'gantt-error',
          'FATAL': 'gantt-fatal',
          'document': 'gantt-document',
          'found': 'gantt-found'
        };
        
        // 首先检查事件类别，然后是活动类型
        if (task.eventCategory && classes[task.eventCategory]) {
          return classes[task.eventCategory];
        }
        return classes[task.type] || 'gantt-info';
      };
      
      gantt.templates.tooltip_text = function(start, end, task) {
        return '<b>时间:</b> ' + $filter('date')(start, $scope.dateTimeFormat) + '<br/>' +
               '<b>用户:</b> ' + task.username + '<br/>' +
               '<b>类型:</b> ' + task.type + '<br/>' +
               '<b>详情:</b> ' + task.details + '<br/>' +
               '<span style="font-style: italic; color: #777;">点击查看完整信息</span>';
      };
      
      // 添加自定义CSS样式
      var style = document.createElement('style');
      style.innerHTML = '.gantt-created { background-color: #5cb85c; }' +
        '.gantt-updated { background-color: #5bc0de; }' +
        '.gantt-deleted { background-color: #d9534f; }' +
        '.gantt-login { background-color: #f0ad4e; }' +
        '.gantt-info { background-color: #5bc0de; }' +
        '.gantt-debug { background-color: #999999; }' +
        '.gantt-warn { background-color: #f0ad4e; }' +
        '.gantt-error { background-color: #d9534f; }' +
        '.gantt-fatal { background-color: #800000; }' +
        '.gantt-document { background-color: #f0ad4e; }' + // 黄色
        '.gantt-found { background-color: #d9534f; }'; // 红色
      document.head.appendChild(style);
      
      // 注册任务点击事件处理程序
      gantt.attachEvent("onTaskClick", function(id, e){
        var task = gantt.getTask(id);
        if (task && task.originalActivity) {
          $scope.openActivityDetails(task.originalActivity);
        }
        return true; // 允许默认操作继续
      });
      
      $scope.ganttInitialized = true;
    }
    
    // 配置甘特图
    gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
    gantt.config.columns = [
      {name: "text", label: "活动内容", width: 300, tree: true},
      {name: "type", label: "类型", width: 80, align: "center"},
      {name: "username", label: "用户", width: 100, align: "center"}
    ];
    
    // 设置时间轴比例 - 缩小到小时和分钟级别
    gantt.config.scale_unit = "hour";
    gantt.config.date_scale = "%H:%i";
    gantt.config.subscales = [
      {unit: "minute", step: 10, date: "%i"}
    ];
    gantt.config.scale_height = 50;
    
    // 调整时间轴以显示更精细的时间单位
    gantt.config.min_column_width = 20; // 缩小列宽度，显示更多时间点
    
    // 初始化甘特图数据
    var ganttData = {
      data: []
    };
    
    // 按事件类型分组活动
    var eventCategoryGroups = {};
    activities.forEach(function(activity, index) {
      var categoryName = '';
      var categoryId = '';
      
      // 确定类别名称和ID
      if (activity.eventCategory === 'document') {
        categoryName = '文档和文件操作';
        categoryId = 'category_document';
      } else if (activity.eventCategory === 'found') {
        categoryName = '查找操作';
        categoryId = 'category_found';
      } else if (activity.type === 'created') {
        categoryName = '创建操作';
        categoryId = 'category_created';
      } else if (activity.type === 'updated') {
        categoryName = '更新操作';
        categoryId = 'category_updated';
      } else if (activity.type === 'deleted') {
        categoryName = '删除操作';
        categoryId = 'category_deleted';
      } else if (activity.type === 'logged in') {
        categoryName = '登录操作';
        categoryId = 'category_login';
      } else {
        categoryName = '其他操作';
        categoryId = 'category_other';
      }
      
      // 创建或获取类别组
      if (!eventCategoryGroups[categoryId]) {
        eventCategoryGroups[categoryId] = {
          id: categoryId,
          text: categoryName,
          open: true
        };
        ganttData.data.push(eventCategoryGroups[categoryId]);
      }
      
      // 计算一个合理的结束时间 - 为每个活动添加1分钟
      var activityEndTime = new Date(activity.date.getTime() + 60000);
      
      // 为每个活动创建任务
      ganttData.data.push({
        id: 'activity_' + index,
        text: activity.message.length > 60 ? activity.message.substring(0, 60) + '...' : activity.message,
        start_date: activity.date,
        end_date: activityEndTime,
        parent: categoryId,
        username: activity.username,
        type: activity.type,
        eventCategory: activity.eventCategory,
        details: activity.message,
        level: activity.level || 'INFO',
        originalActivity: activity // 存储原始活动数据以供点击时使用
      });
    });
    
    // 初始化甘特图
    gantt.init("ganttChart");
    gantt.parse(ganttData);
    
    // 自动调整时间轴以显示全部数据
    gantt.createDataProcessor();
    gantt.render();
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