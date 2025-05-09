package com.sismics.docs.core.dao.dto;

import java.util.Date;

/**
 * User activity DTO.
 * 
 * @author admin-dashboard
 */
public class UserActivityDto {
    /**
     * User ID.
     */
    private String userId;
    
    /**
     * Username.
     */
    private String username;
    
    /**
     * Entity ID.
     */
    private String entityId;
    
    /**
     * Entity name.
     */
    private String entityName;
    
    /**
     * Activity type.
     */
    private String type;
    
    /**
     * Create date.
     */
    private Date createDate;
    
    /**
     * Message.
     */
    private String message;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEntityId() {
        return entityId;
    }

    public void setEntityId(String entityId) {
        this.entityId = entityId;
    }

    public String getEntityName() {
        return entityName;
    }

    public void setEntityName(String entityName) {
        this.entityName = entityName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
} 