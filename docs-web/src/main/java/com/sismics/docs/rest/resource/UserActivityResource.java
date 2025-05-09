package com.sismics.docs.rest.resource;

import com.sismics.docs.rest.constant.BaseFunction;
import com.sismics.rest.exception.ClientException;
import com.sismics.rest.exception.ForbiddenClientException;
import com.sismics.rest.util.ValidationUtil;
import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObjectBuilder;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

/**
 * User activity REST resources.
 * 
 * @author dev
 */
@Path("/useractivity")
public class UserActivityResource extends BaseResource {
    /**
     * Logger.
     */
    private static final Logger log = LoggerFactory.getLogger(UserActivityResource.class);

    /**
     * Get user activities.
     *
     * @api {get} /useractivity/list Get user activities
     * @apiName GetUserActivityList
     * @apiGroup UserActivity
     * @apiParam {Number} date_range Date range (in days)
     * @apiParam {Number} [limit] Maximum number of activities to return
     * @apiParam {Number} [sort_column] Column number to sort on
     * @apiParam {Boolean} [asc] If true, sort in ascending order
     * @apiSuccess {Object[]} activities List of activities
     * @apiSuccess {String} activities.username Username
     * @apiSuccess {String} activities.entity_name Entity name
     * @apiSuccess {String} activities.entity_type Entity type
     * @apiSuccess {String} activities.type Activity type
     * @apiSuccess {String} activities.create_date Creation date (timestamp)
     * @apiSuccess {String} activities.message Activity message
     * @apiError (client) ForbiddenError Access denied
     * @apiError (client) ValidationError Validation error
     * @apiPermission admin
     * @apiVersion 1.5.0
     *
     * @param dateRange Date range in days
     * @param limit Maximum number of activities to return
     * @param sortColumn Column number to sort on
     * @param asc If true, sort in ascending order
     * @return Response
     */
    @GET
    @Path("list")
    public Response list(
            @QueryParam("date_range") Integer dateRange,
            @QueryParam("limit") Integer limit,
            @QueryParam("sort_column") Integer sortColumn,
            @QueryParam("asc") Boolean asc) {
        if (!authenticate()) {
            throw new ForbiddenClientException();
        }
        checkBaseFunction(BaseFunction.ADMIN);

        // Validate input
        ValidationUtil.validateRequired(dateRange, "date_range");
        if (dateRange <= 0) {
            throw new ClientException("ValidationError", "date_range must be positive");
        }

        // Generate mock activities for the requested date range
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DAY_OF_MONTH, -dateRange);
        Date startDate = calendar.getTime();
        
        List<Map<String, Object>> activities = generateMockActivities(startDate, new Date(), 100);
        
        // Apply sorting if requested
        if (sortColumn != null) {
            final int column = sortColumn;
            final boolean ascending = asc != null ? asc : false;
            
            activities.sort((a1, a2) -> {
                Object v1 = getValueByColumn(a1, column);
                Object v2 = getValueByColumn(a2, column);
                
                if (v1 == null || v2 == null) {
                    return 0;
                }
                
                if (v1 instanceof String && v2 instanceof String) {
                    return ascending ? 
                            ((String) v1).compareTo((String) v2) : 
                            ((String) v2).compareTo((String) v1);
                } else if (v1 instanceof Date && v2 instanceof Date) {
                    return ascending ? 
                            ((Date) v1).compareTo((Date) v2) : 
                            ((Date) v2).compareTo((Date) v1);
                }
                
                return 0;
            });
        }
        
        // Limit results if requested
        if (limit != null && limit > 0 && activities.size() > limit) {
            activities = activities.subList(0, limit);
        }

        // Build the response
        JsonObjectBuilder response = Json.createObjectBuilder();
        JsonArrayBuilder activitiesArray = Json.createArrayBuilder();
        
        for (Map<String, Object> activity : activities) {
            JsonObjectBuilder activityObj = Json.createObjectBuilder()
                    .add("username", (String) activity.get("username"))
                    .add("entity_name", (String) activity.get("entity_name"))
                    .add("entity_type", (String) activity.get("entity_type"))
                    .add("type", (String) activity.get("type"))
                    .add("create_date", ((Date) activity.get("create_date")).getTime())
                    .add("message", (String) activity.get("message"));
            
            activitiesArray.add(activityObj);
        }
        
        response.add("activities", activitiesArray);
        
        return Response.ok().entity(response.build()).build();
    }

    /**
     * Get the value from an activity map based on the column index.
     * 
     * @param activity Activity map
     * @param column Column index
     * @return Value
     */
    private Object getValueByColumn(Map<String, Object> activity, int column) {
        switch (column) {
            case 0: return activity.get("create_date");
            case 1: return activity.get("username");
            case 2: return activity.get("entity_name");
            case 3: return activity.get("entity_type");
            case 4: return activity.get("type");
            case 5: return activity.get("message");
            default: return null;
        }
    }

    /**
     * Get Gantt chart data.
     *
     * @api {get} /useractivity/gantt Get Gantt chart data
     * @apiName GetUserActivityGantt
     * @apiGroup UserActivity
     * @apiParam {Number} date_range Date range (in days)
     * @apiSuccess {Object[]} tasks List of Gantt tasks
     * @apiSuccess {String} tasks.id Task ID
     * @apiSuccess {String} tasks.text Task text
     * @apiSuccess {String} tasks.start_date Start date (timestamp)
     * @apiSuccess {String} tasks.end_date End date (timestamp)
     * @apiSuccess {Number} tasks.duration Task duration (in minutes)
     * @apiSuccess {String} tasks.entity_type Entity type
     * @apiSuccess {String} tasks.username Username
     * @apiSuccess {String} tasks.details Task details
     * @apiSuccess {Object[]} users List of users
     * @apiSuccess {String} users.id User ID
     * @apiSuccess {String} users.name Username
     * @apiError (client) ForbiddenError Access denied
     * @apiError (client) ValidationError Validation error
     * @apiPermission admin
     * @apiVersion 1.5.0
     *
     * @param dateRange Date range in days
     * @return Response
     */
    @GET
    @Path("gantt")
    public Response gantt(@QueryParam("date_range") Integer dateRange) {
        if (!authenticate()) {
            throw new ForbiddenClientException();
        }
        checkBaseFunction(BaseFunction.ADMIN);

        // Validate input
        ValidationUtil.validateRequired(dateRange, "date_range");
        if (dateRange <= 0) {
            throw new ClientException("ValidationError", "date_range must be positive");
        }

        // Generate mock data for the requested date range
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DAY_OF_MONTH, -dateRange);
        Date startDate = calendar.getTime();
        
        List<Map<String, Object>> tasks = generateMockGanttTasks(startDate, new Date(), 50);
        List<Map<String, Object>> users = generateMockUsers();

        // Build the response
        JsonObjectBuilder response = Json.createObjectBuilder();
        JsonArrayBuilder tasksArray = Json.createArrayBuilder();
        
        for (Map<String, Object> task : tasks) {
            JsonObjectBuilder taskObj = Json.createObjectBuilder()
                    .add("id", (String) task.get("id"))
                    .add("text", (String) task.get("text"))
                    .add("start_date", ((Date) task.get("start_date")).getTime())
                    .add("end_date", ((Date) task.get("end_date")).getTime())
                    .add("duration", (Integer) task.get("duration"))
                    .add("entity_type", (String) task.get("entity_type"))
                    .add("username", (String) task.get("username"))
                    .add("details", (String) task.get("details"));
            
            tasksArray.add(taskObj);
        }
        
        JsonArrayBuilder usersArray = Json.createArrayBuilder();
        for (Map<String, Object> user : users) {
            JsonObjectBuilder userObj = Json.createObjectBuilder()
                    .add("id", (String) user.get("id"))
                    .add("name", (String) user.get("name"));
            
            usersArray.add(userObj);
        }
        
        response.add("tasks", tasksArray);
        response.add("users", usersArray);
        
        return Response.ok().entity(response.build()).build();
    }

    /**
     * Generate mock activities.
     * 
     * @param startDate Start date
     * @param endDate End date
     * @param count Number of activities to generate
     * @return List of activities
     */
    private List<Map<String, Object>> generateMockActivities(Date startDate, Date endDate, int count) {
        List<Map<String, Object>> activities = new ArrayList<>();
        
        String[] usernames = {"admin", "guest", "john.doe", "jane.smith"};
        String[] entityTypes = {"document", "file", "comment", "tag"};
        String[] actionTypes = {"created", "updated", "deleted", "viewed", "commented"};
        
        Random random = new Random();
        long startTime = startDate.getTime();
        long endTime = endDate.getTime();
        
        for (int i = 0; i < count; i++) {
            Map<String, Object> activity = new HashMap<>();
            
            String username = usernames[random.nextInt(usernames.length)];
            String entityType = entityTypes[random.nextInt(entityTypes.length)];
            String actionType = actionTypes[random.nextInt(actionTypes.length)];
            String entityName = entityType + "_" + (random.nextInt(20) + 1);
            
            long randomTime = startTime + (long) (random.nextDouble() * (endTime - startTime));
            Date createDate = new Date(randomTime);
            
            activity.put("username", username);
            activity.put("entity_type", entityType);
            activity.put("entity_name", entityName);
            activity.put("type", actionType);
            activity.put("create_date", createDate);
            activity.put("message", username + " " + actionType + " " + entityType + " " + entityName);
            
            activities.add(activity);
        }
        
        // Sort by date descending by default
        activities.sort((a1, a2) -> ((Date) a2.get("create_date")).compareTo((Date) a1.get("create_date")));
        
        return activities;
    }

    /**
     * Generate mock Gantt tasks.
     * 
     * @param startDate Start date
     * @param endDate End date
     * @param count Number of tasks to generate
     * @return List of tasks
     */
    private List<Map<String, Object>> generateMockGanttTasks(Date startDate, Date endDate, int count) {
        List<Map<String, Object>> tasks = new ArrayList<>();
        
        String[] usernames = {"admin", "guest", "john.doe", "jane.smith"};
        String[] entityTypes = {"document", "file", "comment", "tag"};
        
        Random random = new Random();
        long startTime = startDate.getTime();
        long endTime = endDate.getTime();
        
        for (int i = 0; i < count; i++) {
            Map<String, Object> task = new HashMap<>();
            
            String username = usernames[random.nextInt(usernames.length)];
            String entityType = entityTypes[random.nextInt(entityTypes.length)];
            String taskName = "Task " + (i + 1);
            
            // Generate random start and end dates within the range
            long randomStartTime = startTime + (long) (random.nextDouble() * (endTime - startTime));
            Date taskStartDate = new Date(randomStartTime);
            
            // Task duration between 10 minutes and 3 hours
            int durationMinutes = 10 + random.nextInt(170);
            
            // Calculate end date based on duration
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(taskStartDate);
            calendar.add(Calendar.MINUTE, durationMinutes);
            Date taskEndDate = calendar.getTime();
            
            task.put("id", "task_" + (i + 1));
            task.put("text", taskName);
            task.put("start_date", taskStartDate);
            task.put("end_date", taskEndDate);
            task.put("duration", durationMinutes);
            task.put("entity_type", entityType);
            task.put("username", username);
            task.put("details", "User " + username + " working on " + entityType);
            
            tasks.add(task);
        }
        
        return tasks;
    }

    /**
     * Generate mock users.
     * 
     * @return List of users
     */
    private List<Map<String, Object>> generateMockUsers() {
        List<Map<String, Object>> users = new ArrayList<>();
        
        Map<String, Object> user1 = new HashMap<>();
        user1.put("id", "user1");
        user1.put("name", "admin");
        users.add(user1);
        
        Map<String, Object> user2 = new HashMap<>();
        user2.put("id", "user2");
        user2.put("name", "guest");
        users.add(user2);
        
        Map<String, Object> user3 = new HashMap<>();
        user3.put("id", "user3");
        user3.put("name", "john.doe");
        users.add(user3);
        
        Map<String, Object> user4 = new HashMap<>();
        user4.put("id", "user4");
        user4.put("name", "jane.smith");
        users.add(user4);
        
        return users;
    }
} 