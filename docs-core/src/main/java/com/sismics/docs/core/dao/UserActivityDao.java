package com.sismics.docs.core.dao;

import com.sismics.docs.core.dao.dto.UserActivityDto;
import com.sismics.docs.core.util.jpa.PaginatedList;
import com.sismics.docs.core.util.jpa.PaginatedLists;
import com.sismics.docs.core.util.jpa.QueryParam;
import com.sismics.docs.core.util.jpa.SortCriteria;
import com.sismics.util.context.ThreadLocalContext;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * User activity DAO.
 * 
 * @author admin-dashboard
 */
public class UserActivityDao {
    /**
     * Get user activities by criteria.
     * 
     * @param paginatedList Paginated list
     * @param sortCriteria Sort criteria
     * @param fromDate From date
     * @param toDate To date
     * @param userId User ID for filtering (optional)
     * @return User activities
     */
    public PaginatedList<UserActivityDto> findByCriteria(PaginatedList<UserActivityDto> paginatedList,
            SortCriteria sortCriteria, Date fromDate, Date toDate, String userId) {
        Map<String, Object> parameterMap = new HashMap<>();
        
        StringBuilder sb = new StringBuilder(
                "select l.LOG_ID_C, l.LOG_IDUSER_C, l.LOG_IDENTITY_C, l.LOG_CLASSENTITY_C, l.LOG_TYPE_C, l.LOG_MESSAGE_C, l.LOG_CREATEDATE_D, u.USE_USERNAME_C ");
        sb.append(" from T_AUDIT_LOG l ");
        sb.append(" join T_USER u on l.LOG_IDUSER_C = u.USE_ID_C ");
        sb.append(" where 1=1 ");
        
        if (fromDate != null) {
            sb.append(" and l.LOG_CREATEDATE_D >= :fromDate ");
            parameterMap.put("fromDate", fromDate);
        }
        
        if (toDate != null) {
            sb.append(" and l.LOG_CREATEDATE_D <= :toDate ");
            parameterMap.put("toDate", toDate);
        }
        
        if (userId != null) {
            sb.append(" and l.LOG_IDUSER_C = :userId ");
            parameterMap.put("userId", userId);
        }
        
        // Create the paginated list
        EntityManager em = ThreadLocalContext.get().getEntityManager();
        
        // Create the QueryParam
        QueryParam queryParam = new QueryParam(sb.toString(), parameterMap);
        
        // Execute paginated query
        @SuppressWarnings("unchecked")
        List<Object[]> resultList = PaginatedLists.executePaginatedQuery(paginatedList, queryParam, sortCriteria);
        
        // Transform the result to DTO
        List<UserActivityDto> activitiesList = new ArrayList<>();
        
        for (Object[] o : resultList) {
            int i = 0;
            UserActivityDto activityDto = new UserActivityDto();
            activityDto.setUserId((String) o[1]);
            activityDto.setEntityId((String) o[2]);
            activityDto.setEntityName((String) o[3]);
            activityDto.setType((String) o[4]);
            activityDto.setMessage((String) o[5]);
            activityDto.setCreateDate(((Timestamp) o[6]).getTime() > 0 ? new Date(((Timestamp) o[6]).getTime()) : null);
            activityDto.setUsername((String) o[7]);
            activitiesList.add(activityDto);
        }
        
        paginatedList.setResultList(activitiesList);
        return paginatedList;
    }
    
    /**
     * Find user activities by user for Gantt chart display.
     * 
     * @param fromDate From date
     * @param toDate To date
     * @return User activities
     */
    public List<UserActivityDto> findActivitiesForGantt(Date fromDate, Date toDate) {
        Map<String, Object> parameterMap = new HashMap<>();
        
        StringBuilder sb = new StringBuilder(
                "select l.LOG_IDUSER_C, u.USE_USERNAME_C, l.LOG_CLASSENTITY_C, count(l.LOG_ID_C) as activity_count, min(l.LOG_CREATEDATE_D) as start_date, max(l.LOG_CREATEDATE_D) as end_date ");
        sb.append(" from T_AUDIT_LOG l ");
        sb.append(" join T_USER u on l.LOG_IDUSER_C = u.USE_ID_C ");
        sb.append(" where 1=1 ");
        
        if (fromDate != null) {
            sb.append(" and l.LOG_CREATEDATE_D >= :fromDate ");
            parameterMap.put("fromDate", fromDate);
        }
        
        if (toDate != null) {
            sb.append(" and l.LOG_CREATEDATE_D <= :toDate ");
            parameterMap.put("toDate", toDate);
        }
        
        sb.append(" group by l.LOG_IDUSER_C, u.USE_USERNAME_C, l.LOG_CLASSENTITY_C ");
        sb.append(" order by u.USE_USERNAME_C, l.LOG_CLASSENTITY_C ");
        
        EntityManager em = ThreadLocalContext.get().getEntityManager();
        
        // Create the query
        Query q = em.createNativeQuery(sb.toString());
        
        // Populate the parameters
        for (Map.Entry<String, Object> entry : parameterMap.entrySet()) {
            q.setParameter(entry.getKey(), entry.getValue());
        }
        
        // Get the results
        @SuppressWarnings("unchecked")
        List<Object[]> resultList = q.getResultList();
        List<UserActivityDto> activitiesList = new ArrayList<>();
        
        for (Object[] o : resultList) {
            int i = 0;
            UserActivityDto activityDto = new UserActivityDto();
            activityDto.setUserId((String) o[0]);
            activityDto.setUsername((String) o[1]);
            activityDto.setEntityName((String) o[2]);
            activityDto.setCreateDate(((Timestamp) o[4]).getTime() > 0 ? new Date(((Timestamp) o[4]).getTime()) : null);
            activityDto.setMessage("Count: " + o[3] + " - From: " + o[4] + " To: " + o[5]);
            activitiesList.add(activityDto);
        }
        
        return activitiesList;
    }
} 