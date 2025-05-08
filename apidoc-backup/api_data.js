define({ "api": [
  {
    "type": "delete",
    "url": "/acl/:source/:perm/:target",
    "title": "Delete an ACL",
    "name": "DeleteAcl",
    "group": "Acl",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Source ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"READ\"",
              "\"WRITE\""
            ],
            "optional": false,
            "field": "perm",
            "description": "<p>Permission</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "target",
            "description": "<p>Target ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "AclError",
            "description": "<p>Cannot delete base ACL on a document or a tag</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AclResource.java",
    "groupTitle": "Acl"
  },
  {
    "type": "get",
    "url": "/acl/target/search",
    "title": "Search in ACL targets",
    "name": "GetAclTargetSearch",
    "group": "Acl",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Search query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>List of groups</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.name",
            "description": "<p>Group name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AclResource.java",
    "groupTitle": "Acl"
  },
  {
    "type": "put",
    "url": "/acl",
    "title": "Add an ACL",
    "name": "PutAcl",
    "group": "Acl",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Source ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"READ\"",
              "\"WRITE\""
            ],
            "optional": false,
            "field": "perm",
            "description": "<p>Permission</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "target",
            "description": "<p>Target ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"USER\"",
              "\"GROUP\"",
              "\"SHARE\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Target type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Acl ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "perm",
            "description": "<p>Permission</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Target name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"USER\"",
              "\"GROUP\"",
              "\"SHARE\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Target type</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "InvalidTarget",
            "description": "<p>This target does not exist</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AclResource.java",
    "groupTitle": "Acl"
  },
  {
    "type": "get",
    "url": "/app",
    "title": "Get application information",
    "name": "GetApp",
    "group": "App",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "current_version",
            "description": "<p>API current version</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "min_version",
            "description": "<p>API minimum version</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "guest_login",
            "description": "<p>True if guest login is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "default_language",
            "description": "<p>Default platform language</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "queued_tasks",
            "description": "<p>Number of queued tasks waiting to be processed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total_memory",
            "description": "<p>Allocated JVM memory (in bytes)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "free_memory",
            "description": "<p>Free JVM memory (in bytes)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "document_count",
            "description": "<p>Number of documents</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active_user_count",
            "description": "<p>Number of active users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "global_storage_current",
            "description": "<p>Global storage currently used (in bytes)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "global_storage_quota",
            "description": "<p>Maximum global storage (in bytes)</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "get",
    "url": "/app/config_inbox",
    "title": "Get the inbox scanning configuration",
    "name": "GetAppConfigInbox",
    "group": "App",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>True if the inbox scanning is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hostname",
            "description": "<p>IMAP hostname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "port",
            "description": "<p>IMAP port</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>IMAP username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>IMAP password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "folder",
            "description": "<p>IMAP folder</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Tag for created documents</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "get",
    "url": "/app/config_ldap",
    "title": "Get the LDAP authentication configuration",
    "name": "GetAppConfigLdap",
    "group": "App",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>LDAP authentication enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>LDAP server host</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "port",
            "description": "<p>LDAP server port</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin_dn",
            "description": "<p>Admin DN</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin_password",
            "description": "<p>Admin password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "base_dn",
            "description": "<p>Base DN</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>LDAP filter</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "default_email",
            "description": "<p>LDAP default email</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "default_storage",
            "description": "<p>LDAP default storage</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.9.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "get",
    "url": "/app/config_smtp",
    "title": "Get the SMTP server configuration",
    "name": "GetAppConfigSmtp",
    "group": "App",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hostname",
            "description": "<p>SMTP hostname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "port",
            "description": "<p>SMTP port</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>SMTP username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>SMTP password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>From address</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "get",
    "url": "/app/log",
    "title": "Get application logs",
    "name": "GetAppLog",
    "group": "App",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"FATAL\"",
              "\"ERROR\"",
              "\"WARN\"",
              "\"INFO\"",
              "\"DEBUG\""
            ],
            "optional": false,
            "field": "level",
            "description": "<p>Minimum log level</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Filter on this logger tag</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Filter on this message</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Total number of logs to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Start at this index</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of logs</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "logs",
            "description": "<p>List of logs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logs.date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logs.level",
            "description": "<p>Level</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logs.tag",
            "description": "<p>Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logs.message",
            "description": "<p>Message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "ServerError",
            "description": "<p>MEMORY appender not configured</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/app/batch/clean_storage",
    "title": "Clean the file and DB storage",
    "name": "PostAppBatchCleanStorage",
    "group": "App",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "FileError",
            "description": "<p>Error deleting orphan files</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/app/batch/reindex",
    "title": "Rebuild the search index",
    "name": "PostAppBatchReindex",
    "group": "App",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "IndexingError",
            "description": "<p>Error rebuilding the index</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/app/config",
    "title": "General application configuration",
    "name": "PostAppConfig",
    "group": "App",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "default_language",
            "description": "<p>Default language</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/app/config_inbox",
    "title": "Configure the inbox scanning",
    "name": "PostAppConfigInbox",
    "group": "App",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>True if the inbox scanning is enabled</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "autoTagsEnabled",
            "description": "<p>If true automatically add tags to document (prefixed by #)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deleteImported",
            "description": "<p>If true delete message from mailbox after import</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hostname",
            "description": "<p>IMAP hostname</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "port",
            "description": "<p>IMAP port</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>IMAP username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>IMAP password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "folder",
            "description": "<p>IMAP folder</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Tag for created documents</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/app/config_ldap",
    "title": "Configure the LDAP authentication",
    "name": "PostAppConfigLdap",
    "group": "App",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>LDAP authentication enabled</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>LDAP server host</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "port",
            "description": "<p>LDAP server port</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "use",
            "description": "<p>SSL (ldaps)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "admin_dn",
            "description": "<p>Admin DN</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "admin_password",
            "description": "<p>Admin password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "base_dn",
            "description": "<p>Base DN</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>LDAP filter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "default_email",
            "description": "<p>LDAP default email</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "default_storage",
            "description": "<p>LDAP default storage</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.9.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/app/config_smtp",
    "title": "Configure the SMTP server",
    "name": "PostAppConfigSmtp",
    "group": "App",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hostname",
            "description": "<p>SMTP hostname</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "port",
            "description": "<p>SMTP port</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>SMTP username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>SMTP password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>From address</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/app/guest_login",
    "title": "Enable/disable guest login",
    "name": "PostAppGuestLogin",
    "group": "App",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>If true, enable guest login</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/app/ocr",
    "title": "Enable/disable OCR",
    "name": "PostAppOcr",
    "group": "App",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>If true, enable OCR</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/app/test_inbox",
    "title": "Test the inbox scanning",
    "name": "PostAppTestInbox",
    "group": "App",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Number",
            "description": "<p>of unread emails in the inbox</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AppResource.java",
    "groupTitle": "App"
  },
  {
    "type": "get",
    "url": "/auditlog",
    "title": "Get audit logs",
    "description": "<p>If no document ID is provided, logs for the current user will be returned.</p>",
    "name": "GetAuditlog",
    "group": "Auditlog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "document",
            "description": "<p>Document ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of logs</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "logs",
            "description": "<p>List of logs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logs.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logs.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logs.target",
            "description": "<p>Entity ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"Acl\"",
              "\"Comment\"",
              "\"Document\"",
              "\"File\"",
              "\"Group\"",
              "\"Tag\"",
              "\"User\"",
              "\"RouteModel\"",
              "\"Route\""
            ],
            "optional": false,
            "field": "logs.class",
            "description": "<p>Entity type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"CREATE\"",
              "\"UPDATE\"",
              "\"DELETE\""
            ],
            "optional": false,
            "field": "logs.type",
            "description": "<p>Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logs.message",
            "description": "<p>Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "logs.create_date",
            "description": "<p>Create date (timestamp)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/AuditLogResource.java",
    "groupTitle": "Auditlog"
  },
  {
    "type": "delete",
    "url": "/comment/:id",
    "title": "Delete a comment",
    "name": "DeleteComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Comment or document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/CommentResource.java",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/:id",
    "title": "Get comments",
    "name": "GetComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share",
            "description": "<p>Share ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comments",
            "description": "<p>List of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.id",
            "description": "<p>Comment ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.creator",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.creator_gravatar",
            "description": "<p>Creator Gravatar hash</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.create_date",
            "description": "<p>Create date (timestamp)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/CommentResource.java",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment",
    "title": "Add a comment",
    "name": "PutComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Comment content</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Comment ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator_gravatar",
            "description": "<p>Creator Gravatar hash</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "create_date",
            "description": "<p>Create date (timestamp)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/CommentResource.java",
    "groupTitle": "Comment"
  },
  {
    "type": "delete",
    "url": "/document/:id",
    "title": "Delete a document",
    "name": "DeleteDocument",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/DocumentResource.java",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/document/:id",
    "title": "Get a document",
    "name": "GetDocument",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "share",
            "description": "<p>Share ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "files",
            "description": "<p>If true includes files information</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "create_date",
            "description": "<p>Create date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "update_date",
            "description": "<p>Update date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "shared",
            "description": "<p>True if the document is shared</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "file_count",
            "description": "<p>Number of files in this document</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of tags</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.color",
            "description": "<p>Color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Subject</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>Identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>Format</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Source</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coverage",
            "description": "<p>Coverage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rights",
            "description": "<p>Rights</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>Username of the creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file_id",
            "description": "<p>Main file ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "writable",
            "description": "<p>True if the document is writable by the current user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "acls",
            "description": "<p>List of ACL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acls.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"READ\"",
              "\"WRITE\""
            ],
            "optional": false,
            "field": "acls.perm",
            "description": "<p>Permission</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acls.name",
            "description": "<p>Target name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"USER\"",
              "\"GROUP\"",
              "\"SHARE\""
            ],
            "optional": false,
            "field": "acls.type",
            "description": "<p>Target type</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "inherited_acls",
            "description": "<p>List of ACL not directly applied to this document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"READ\"",
              "\"WRITE\""
            ],
            "optional": false,
            "field": "inherited_acls.perm",
            "description": "<p>Permission</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inherited_acls.source_id",
            "description": "<p>Source ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inherited_acls.source_name",
            "description": "<p>Source name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inherited_acls.source_color",
            "description": "<p>The color of the Source</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inherited_acls.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inherited_acls.name",
            "description": "<p>Target name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"USER\"",
              "\"GROUP\"",
              "\"SHARE\""
            ],
            "optional": false,
            "field": "inherited_acls.type",
            "description": "<p>Target type</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "contributors",
            "description": "<p>List of users having contributed to this document</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contributors.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contributors.email",
            "description": "<p>E-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "relations",
            "description": "<p>List of document related to this one</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relations.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relations.title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "relations.source",
            "description": "<p>True if this document is the source of the relation</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "route_step",
            "description": "<p>The current active route step</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "route_step.name",
            "description": "<p>Route step name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"APPROVE\"",
              "\"VALIDATE\""
            ],
            "optional": false,
            "field": "route_step.type",
            "description": "<p>Route step type</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "route_step.transitionable",
            "description": "<p>True if the route step is actionable by the current user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "files",
            "description": "<p>List of files</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.version",
            "description": "<p>Zero-based version number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.mimetype",
            "description": "<p>MIME type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.create_date",
            "description": "<p>Create date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "metadata",
            "description": "<p>List of metadata</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"STRING\"",
              "\"INTEGER\"",
              "\"FLOAT\"",
              "\"DATE\"",
              "\"BOOLEAN\""
            ],
            "optional": false,
            "field": "metadata.type",
            "description": "<p>Type</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata.value",
            "description": "<p>Value</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/DocumentResource.java",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/document/list",
    "title": "Get documents",
    "name": "GetDocumentList",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "limit",
            "description": "<p>Total number of documents to return (default is <code>10</code>)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "offset",
            "description": "<p>Start at this index (default is <code>0</code>)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sort_column",
            "description": "<p>Column index to sort on</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "asc",
            "description": "<p>If <code>true</code> sorts in ascending order</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search query (see &quot;Document search syntax&quot; on the top of the page for explanations) when the input is entered by a human.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "files",
            "description": "<p>If <code>true</code> includes files information</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[after]",
            "description": "<p>The document must have been created after or at the value moment, accepted format is <code>yyyy-MM-dd</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[before]",
            "description": "<p>The document must have been created before or at the value moment, accepted format is <code>yyyy-MM-dd</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[by]",
            "description": "<p>The document must have been created by the specified creator's username with an exact match, the user must not be deleted</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[full]",
            "description": "<p>Used as a search criteria for all fields including the document's files content, several comma-separated values can be specified and the document must match any of them</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[lang]",
            "description": "<p>The document must be of the specified language (example: <code>en</code>)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[mime]",
            "description": "<p>The document must be of the specified mime type (example: <code>image/png</code>)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[simple]",
            "description": "<p>Used as a search criteria for all fields except the document's files content, several comma-separated values can be specified and the document must match any of them</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "search[shared]",
            "description": "<p>If <code>true</code> the document must be shared, else it is ignored</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[tag]",
            "description": "<p>The document must contain a tag or a child of a tag that starts with the value, case is ignored, several comma-separated values can be specified and the document must match all tag filters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[nottag]",
            "description": "<p>The document must not contain a tag or a child of a tag that starts with the value, case is ignored, several comma-separated values can be specified and the document must match all tag filters</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[title]",
            "description": "<p>The document's title must be the value, several comma-separated values can be specified and the document must match any of the titles</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[uafter]",
            "description": "<p>The document must have been updated after or at the value moment, accepted format is <code>yyyy-MM-dd</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[ubefore]",
            "description": "<p>The document must have been updated before or at the value moment, accepted format is <code>yyyy-MM-dd</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search[workflow]",
            "description": "<p>If the value is <code>me</code> the document must have an active route, for other values the criteria is ignored</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of documents</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "documents",
            "description": "<p>List of documents</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.highlight",
            "description": "<p>Search highlight (for fulltext search)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.file_id",
            "description": "<p>Main file ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "documents.create_date",
            "description": "<p>Create date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "documents.update_date",
            "description": "<p>Update date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.language",
            "description": "<p>Language</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "documents.shared",
            "description": "<p>True if the document is shared</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "documents.active_route",
            "description": "<p>True if a route is active on this document</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "documents.current_step_name",
            "description": "<p>Name of the current route step</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "documents.file_count",
            "description": "<p>Number of files in this document</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "documents.tags",
            "description": "<p>List of tags</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.tags.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.tags.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.tags.color",
            "description": "<p>Color</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "documents.files",
            "description": "<p>List of files</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.files.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.files.name",
            "description": "<p>File name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.files.version",
            "description": "<p>Zero-based version number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.files.mimetype",
            "description": "<p>MIME type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "documents.files.create_date",
            "description": "<p>Create date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "suggestions",
            "description": "<p>List of search suggestions</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "SearchError",
            "description": "<p>Error searching in documents</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/DocumentResource.java",
    "groupTitle": "Document"
  },
  {
    "type": "get",
    "url": "/document/:id/pdf",
    "title": "Export a document to PDF",
    "name": "GetDocumentPdf",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share",
            "description": "<p>Share ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "metadata",
            "description": "<p>If true, export metadata</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "fitimagetopage",
            "description": "<p>If true, fit the images to pages</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "margin",
            "description": "<p>Margin around the pages, in millimeter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pdf",
            "description": "<p>The whole response is the PDF file</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/DocumentResource.java",
    "groupTitle": "Document"
  },
  {
    "type": "post",
    "url": "/document/:id",
    "title": "Update a document",
    "name": "PostDocument",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subject",
            "description": "<p>Subject</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "identifier",
            "description": "<p>Identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "publisher",
            "description": "<p>Publisher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "description": "<p>Format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>Source</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "coverage",
            "description": "<p>Coverage</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rights",
            "description": "<p>Rights</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tags",
            "description": "<p>List of tags ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "relations",
            "description": "<p>List of related documents ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "metadata_id",
            "description": "<p>List of metadata ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "metadata_value",
            "description": "<p>List of metadata values</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language",
            "description": "<p>Language</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "create_date",
            "description": "<p>Create date (timestamp)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied or document not writable</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/DocumentResource.java",
    "groupTitle": "Document"
  },
  {
    "type": "post",
    "url": "/document/list",
    "title": "Get documents",
    "description": "<p>Get documents exposed as a POST endpoint to allow longer search parameters, see the GET endpoint for the API info</p>",
    "name": "PostDocumentList",
    "group": "Document",
    "version": "1.12.0",
    "filename": "../java/com/sismics/docs/rest/resource/DocumentResource.java",
    "groupTitle": "Document"
  },
  {
    "type": "put",
    "url": "/document",
    "title": "Add a document",
    "name": "PutDocument",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subject",
            "description": "<p>Subject</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "identifier",
            "description": "<p>Identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "publisher",
            "description": "<p>Publisher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "description": "<p>Format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>Source</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "coverage",
            "description": "<p>Coverage</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rights",
            "description": "<p>Rights</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tags",
            "description": "<p>List of tags ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "relations",
            "description": "<p>List of related documents ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "metadata_id",
            "description": "<p>List of metadata ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "metadata_value",
            "description": "<p>List of metadata values</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "create_date",
            "description": "<p>Create date (timestamp)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/DocumentResource.java",
    "groupTitle": "Document"
  },
  {
    "type": "put",
    "url": "/document/eml",
    "title": "Import a new document from an EML file",
    "name": "PutDocumentEml",
    "group": "Document",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>File data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "QuotaReached",
            "description": "<p>Quota limit reached</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "StreamError",
            "description": "<p>Error reading the input file</p>"
          },
          {
            "group": "server",
            "optional": false,
            "field": "ErrorGuessMime",
            "description": "<p>Error guessing mime type</p>"
          },
          {
            "group": "server",
            "optional": false,
            "field": "FileError",
            "description": "<p>Error adding a file</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/DocumentResource.java",
    "groupTitle": "Document"
  },
  {
    "type": "delete",
    "url": "/file/:id",
    "title": "Delete a file",
    "name": "DeleteFile",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>File ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>File or document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/file/:id/data",
    "title": "Get a file data",
    "name": "GetFile",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>File ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share",
            "description": "<p>Share ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"web\"",
              "\"thumb\"",
              "\"content\""
            ],
            "optional": true,
            "field": "size",
            "description": "<p>Size variation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>The file data is the whole response</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "SizeError",
            "description": "<p>Size must be web or thumb</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied or document not visible</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>File not found</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "ServiceUnavailable",
            "description": "<p>Error reading the file</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/file/list",
    "title": "Get files",
    "name": "GetFileList",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "share",
            "description": "<p>Share ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "files",
            "description": "<p>List of files</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.processing",
            "description": "<p>True if the file is currently processing</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.version",
            "description": "<p>Zero-based version number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.mimetype",
            "description": "<p>MIME type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.document_id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.create_date",
            "description": "<p>Create date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.size",
            "description": "<p>File size (in bytes)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "FileError",
            "description": "<p>Unable to get the size of a file</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/file/:id/versions",
    "title": "Get versions of a file",
    "name": "GetFileVersions",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>File ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "files",
            "description": "<p>List of files</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.name",
            "description": "<p>File name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.version",
            "description": "<p>Zero-based version number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.mimetype",
            "description": "<p>MIME type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.create_date",
            "description": "<p>Create date (timestamp)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>File not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/file/zip",
    "title": "Returns all files from a document, zipped.",
    "name": "GetFileZip",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "share",
            "description": "<p>Share ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>The ZIP file is the whole response</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "NotFoundException",
            "description": "<p>Document not found</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Error creating the ZIP file</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/zip",
    "title": "Returns a list of files, zipped",
    "name": "GetFilesZip",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "files",
            "description": "<p>IDs</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>The ZIP file is the whole response</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "NotFoundException",
            "description": "<p>Files not found</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Error creating the ZIP file</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.11.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/:id",
    "title": "Update a file",
    "name": "PostFile",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>File ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.6.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/:fileId/attach",
    "title": "Attach a file to a document",
    "name": "PostFileAttach",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileId",
            "description": "<p>File ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "IllegalFile",
            "description": "<p>File not orphan</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "AttachError",
            "description": "<p>Error attaching file to document</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/:id/process",
    "title": "Process a file manually",
    "name": "PostFileProcess",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>File ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "ProcessingError",
            "description": "<p>Processing error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.6.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/:reorder",
    "title": "Reorder files",
    "name": "PostFileReorder",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "order",
            "description": "<p>List of files ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "put",
    "url": "/file",
    "title": "Add a file",
    "description": "<p>A file can be added without associated document, and will go in a temporary storage waiting for one. This resource accepts only multipart/form-data.</p>",
    "name": "PutFile",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "previousFileId",
            "description": "<p>ID of the file to replace by this new version</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>File data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>File ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>File size (in bytes)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "QuotaReached",
            "description": "<p>Quota limit reached</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "StreamError",
            "description": "<p>Error reading the input file</p>"
          },
          {
            "group": "server",
            "optional": false,
            "field": "ErrorGuessMime",
            "description": "<p>Error guessing mime type</p>"
          },
          {
            "group": "server",
            "optional": false,
            "field": "FileError",
            "description": "<p>Error adding a file</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/FileResource.java",
    "groupTitle": "File"
  },
  {
    "type": "delete",
    "url": "/group/:name",
    "title": "Delete a group",
    "name": "DeleteGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Group not found</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "GroupUsedInRouteModel",
            "description": "<p>The group is used in a route model</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/GroupResource.java",
    "groupTitle": "Group"
  },
  {
    "type": "delete",
    "url": "/group/:name/:username",
    "title": "Remove a user from a group",
    "name": "DeleteGroupMember",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Group or user not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/GroupResource.java",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/group/:name",
    "title": "Get a group",
    "name": "GetGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent name</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "members",
            "description": "<p>List of members</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Group not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/GroupResource.java",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/group",
    "title": "Get groups",
    "name": "GetGroupList",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort_column",
            "description": "<p>Column index to sort on</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "asc",
            "description": "<p>If true, sort in ascending order</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>List of groups</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.parent",
            "description": "<p>Parent name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/GroupResource.java",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/group/:name",
    "title": "Update a group",
    "name": "PostGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent",
            "description": "<p>Parent group name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "GroupAlreadyExists",
            "description": "<p>This group already exists</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ParentGroupNotFound",
            "description": "<p>Parent group not found</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Group not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/GroupResource.java",
    "groupTitle": "Group"
  },
  {
    "type": "put",
    "url": "/group",
    "title": "Add a group",
    "name": "PutGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent",
            "description": "<p>Parent group name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "GroupAlreadyExists",
            "description": "<p>This group already exists</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ParentGroupNotFound",
            "description": "<p>Parent group not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/GroupResource.java",
    "groupTitle": "Group"
  },
  {
    "type": "put",
    "url": "/group/:name",
    "title": "Add a user to a group",
    "name": "PutGroupMember",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Group or user not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/GroupResource.java",
    "groupTitle": "Group"
  },
  {
    "type": "delete",
    "url": "/metadata/:id",
    "title": "Delete a custom metadata",
    "name": "DeleteMetadataId",
    "group": "Metadata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Metadata ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Metadata not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.7.0",
    "filename": "../java/com/sismics/docs/rest/resource/MetadataResource.java",
    "groupTitle": "Metadata"
  },
  {
    "type": "get",
    "url": "/metadata",
    "title": "Get configured metadata",
    "name": "GetMetadata",
    "group": "Metadata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort_column",
            "description": "<p>Column index to sort on</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "asc",
            "description": "<p>If true, sort in ascending order</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "metadata",
            "description": "<p>List of metadata</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"STRING\"",
              "\"INTEGER\"",
              "\"FLOAT\"",
              "\"DATE\"",
              "\"BOOLEAN\""
            ],
            "optional": false,
            "field": "metadata.type",
            "description": "<p>Type</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.7.0",
    "filename": "../java/com/sismics/docs/rest/resource/MetadataResource.java",
    "groupTitle": "Metadata"
  },
  {
    "type": "post",
    "url": "/metadata/:id",
    "title": "Update a custom metadata",
    "name": "PostMetadataId",
    "group": "Metadata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Metadata ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..50",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"STRING\"",
              "\"INTEGER\"",
              "\"FLOAT\"",
              "\"DATE\"",
              "\"BOOLEAN\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Metadata not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.7.0",
    "filename": "../java/com/sismics/docs/rest/resource/MetadataResource.java",
    "groupTitle": "Metadata"
  },
  {
    "type": "put",
    "url": "/metadata",
    "title": "Add a custom metadata",
    "name": "PutMetadata",
    "group": "Metadata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..50",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"STRING\"",
              "\"INTEGER\"",
              "\"FLOAT\"",
              "\"DATE\"",
              "\"BOOLEAN\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"STRING\"",
              "\"INTEGER\"",
              "\"FLOAT\"",
              "\"DATE\"",
              "\"BOOLEAN\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.7.0",
    "filename": "../java/com/sismics/docs/rest/resource/MetadataResource.java",
    "groupTitle": "Metadata"
  },
  {
    "type": "delete",
    "url": "/route",
    "title": "Cancel a route",
    "name": "DeleteRoute",
    "group": "Route",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "documentId",
            "description": "<p>Document ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document or route not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/RouteResource.java",
    "groupTitle": "Route"
  },
  {
    "type": "get",
    "url": "/route",
    "title": "Get the routes on a document",
    "name": "GetRoutes",
    "group": "Route",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "documentId",
            "description": "<p>Document ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "routes",
            "description": "<p>List of routes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routes.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "routes.create_date",
            "description": "<p>Create date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "routes.steps",
            "description": "<p>Route steps</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routes.steps.name",
            "description": "<p>Route step name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"APPROVE\"",
              "\"VALIDATE\""
            ],
            "optional": false,
            "field": "routes.steps.type",
            "description": "<p>Route step type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routes.steps.comment",
            "description": "<p>Route step comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "routes.steps.end_date",
            "description": "<p>Route step end date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"APPROVED\"",
              "\"REJECTED\"",
              "\"VALIDATED\""
            ],
            "optional": false,
            "field": "routes.steps.transition",
            "description": "<p>Route step transition</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "routes.steps.validator_username",
            "description": "<p>Validator username</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "routes.steps.target",
            "description": "<p>Route step target</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routes.steps.target.id",
            "description": "<p>Route step target ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routes.steps.target.name",
            "description": "<p>Route step target name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"USER\"",
              "\"GROUP\""
            ],
            "optional": false,
            "field": "routes.steps.target.type",
            "description": "<p>Route step target type</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/RouteResource.java",
    "groupTitle": "Route"
  },
  {
    "type": "delete",
    "url": "/routemodel/:id",
    "title": "Delete a route model",
    "name": "DeleteRouteModel",
    "group": "RouteModel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Route model ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Route model not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/RouteModelResource.java",
    "groupTitle": "RouteModel"
  },
  {
    "type": "get",
    "url": "/routemodel",
    "title": "Get route models",
    "name": "GetRouteModel",
    "group": "RouteModel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort_column",
            "description": "<p>Column index to sort on</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "asc",
            "description": "<p>If true, sort in ascending order</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "routemodels",
            "description": "<p>List of route models</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routemodels.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routemodels.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "routemodels.create_date",
            "description": "<p>Create date (timestamp)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/RouteModelResource.java",
    "groupTitle": "RouteModel"
  },
  {
    "type": "get",
    "url": "/routemodel/:id",
    "title": "Get a route model",
    "name": "GetRouteModel",
    "group": "RouteModel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Route model ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Route model ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Route model name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_date",
            "description": "<p>Create date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "steps",
            "description": "<p>Steps data in JSON</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Route model not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/RouteModelResource.java",
    "groupTitle": "RouteModel"
  },
  {
    "type": "post",
    "url": "/routemodel/:id",
    "title": "Update a route model",
    "name": "PostRouteModel",
    "group": "RouteModel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Route model name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps",
            "description": "<p>Steps data in JSON</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Route model not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/RouteModelResource.java",
    "groupTitle": "RouteModel"
  },
  {
    "type": "put",
    "url": "/routemodel",
    "title": "Add a route model",
    "name": "PutRouteModel",
    "group": "RouteModel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Route model name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "steps",
            "description": "<p>Steps data in JSON</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Route model ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/RouteModelResource.java",
    "groupTitle": "RouteModel"
  },
  {
    "type": "post",
    "url": "/route/start",
    "title": "Start a route on a document",
    "name": "PostRouteStart",
    "group": "Route",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routeModelId",
            "description": "<p>Route model ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "documentId",
            "description": "<p>Document ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "InvalidRouteModel",
            "description": "<p>Invalid route model</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "RunningRoute",
            "description": "<p>A running route already exists on this document</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Route model or document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/RouteResource.java",
    "groupTitle": "Route"
  },
  {
    "type": "post",
    "url": "/route/validate",
    "title": "Validate the current step of a route",
    "name": "PostRouteValidate",
    "group": "Route",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "documentId",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transition",
            "description": "<p>Route step transition</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Route step comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document or route not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/RouteResource.java",
    "groupTitle": "Route"
  },
  {
    "type": "delete",
    "url": "/share/:id",
    "title": "Unshare a document",
    "name": "DeleteShare",
    "group": "Share",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Acl ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ShareNotFound",
            "description": "<p>Share not found</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "DocumentNotFound",
            "description": "<p>Document not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/ShareResource.java",
    "groupTitle": "Share"
  },
  {
    "type": "put",
    "url": "/share",
    "title": "Share a document",
    "name": "PutShare",
    "group": "Share",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Document ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Share name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Acl ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"READ\"",
              "\"WRITE\""
            ],
            "optional": false,
            "field": "perm",
            "description": "<p>Permission</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Share name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"SHARE\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>ACL type (always SHARE)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Share not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/ShareResource.java",
    "groupTitle": "Share"
  },
  {
    "type": "delete",
    "url": "/tag/:id",
    "title": "Delete a tag",
    "name": "DeleteTag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Tag ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Tag not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/TagResource.java",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "/tag/:id",
    "title": "Get a tag",
    "name": "GetTag",
    "group": "Tag",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>Username of the creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "writable",
            "description": "<p>True if the tag is writable by the current user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "acls",
            "description": "<p>List of ACL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acls.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"READ\"",
              "\"WRITE\""
            ],
            "optional": false,
            "field": "acls.perm",
            "description": "<p>Permission</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acls.name",
            "description": "<p>Target name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"USER\"",
              "\"GROUP\"",
              "\"SHARE\""
            ],
            "optional": false,
            "field": "acls.type",
            "description": "<p>Target type</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Tag not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/TagResource.java",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "/tag/list",
    "title": "Get tags",
    "name": "GetTagList",
    "group": "Tag",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>List of tags</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.color",
            "description": "<p>Color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tags.parent",
            "description": "<p>Parent</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/TagResource.java",
    "groupTitle": "Tag"
  },
  {
    "type": "post",
    "url": "/tag/:id",
    "title": "Update a tag",
    "name": "PostTag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Tag ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Tag ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "IllegalTagName",
            "description": "<p>Spaces and colons are not allowed in tag name</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ParentNotFound",
            "description": "<p>Parent not found</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "CircularReference",
            "description": "<p>Circular reference in parent tag</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Tag not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/TagResource.java",
    "groupTitle": "Tag"
  },
  {
    "type": "put",
    "url": "/tag",
    "title": "Create a tag",
    "name": "PutTag",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Color</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Tag ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "IllegalTagName",
            "description": "<p>Spaces and colons are not allowed in tag name</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ParentNotFound",
            "description": "<p>Parent not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/TagResource.java",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "/theme",
    "title": "Get the theme configuration",
    "name": "GetTheme",
    "group": "Theme",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Application name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Main color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "css",
            "description": "<p>Custom CSS</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/ThemeResource.java",
    "groupTitle": "Theme"
  },
  {
    "type": "get",
    "url": "/theme/image/:type",
    "title": "Get a theme image",
    "name": "GetThemeImage",
    "group": "Theme",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"logo\"",
              "\"background\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Image type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>The whole response is the image</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/ThemeResource.java",
    "groupTitle": "Theme"
  },
  {
    "type": "get",
    "url": "/theme/stylesheet",
    "title": "Get the CSS stylesheet",
    "name": "GetThemeStylesheet",
    "group": "Theme",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stylesheet",
            "description": "<p>The whole response is the stylesheet</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/ThemeResource.java",
    "groupTitle": "Theme"
  },
  {
    "type": "post",
    "url": "/theme",
    "title": "Change the theme configuration",
    "name": "PostTheme",
    "group": "Theme",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Application name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Main color</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "css",
            "description": "<p>Custom CSS</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/ThemeResource.java",
    "groupTitle": "Theme"
  },
  {
    "type": "put",
    "url": "/theme/image/:type",
    "title": "Change a theme image",
    "description": "<p>This resource accepts only multipart/form-data.</p>",
    "name": "PutThemeImage",
    "group": "Theme",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"logo\"",
              "\"background\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Image type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NoImageProvided",
            "description": "<p>An image is required</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "CopyError",
            "description": "<p>Error copying the image to the theme directory</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/ThemeResource.java",
    "groupTitle": "Theme"
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "Delete the current user",
    "description": "<p>All associated entities will be deleted as well.</p>",
    "name": "DeleteUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied or the user cannot be deleted</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "UserUsedInRouteModel",
            "description": "<p>The user is used in a route model</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/session",
    "title": "Delete all sessions",
    "description": "<p>This resource deletes all active token linked to this account, except the one used to make this request.</p>",
    "name": "DeleteUserSession",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied or connected as guest</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:username",
    "title": "Delete a user",
    "description": "<p>All associated entities will be deleted as well.</p>",
    "name": "DeleteUserUsername",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied or the user cannot be deleted</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user does not exist</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "UserUsedInRouteModel",
            "description": "<p>The user is used in a route model</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get the current user",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "anonymous",
            "description": "<p>True if no user is connected</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_default_password",
            "description": "<p>True if the admin has the default password</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "onboarding",
            "description": "<p>True if the UI needs to display the onboarding</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "storage_quota",
            "description": "<p>Storage quota (in bytes)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "storage_current",
            "description": "<p>Quota used (in bytes)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "totp_enabled",
            "description": "<p>True if TOTP authentication is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "base_functions",
            "description": "<p>Base functions</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Groups</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/list",
    "title": "Get users",
    "name": "GetUserList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort_column",
            "description": "<p>Column index to sort on</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "asc",
            "description": "<p>If true, sort in ascending order</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>Filter on this group</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": "<p>E-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "users.totp_enabled",
            "description": "<p>True if TOTP authentication is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.storage_quota",
            "description": "<p>Storage quota (in bytes)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.storage_current",
            "description": "<p>Quota used (in bytes)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.create_date",
            "description": "<p>Create date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.disabled",
            "description": "<p>True if the user is disabled</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/session",
    "title": "Get active sessions",
    "description": "<p>This resource lists all active token which can be used to log in to the current user account.</p>",
    "name": "GetUserSession",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "sessions",
            "description": "<p>List of sessions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "create_date",
            "description": "<p>Create date of this token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP used to log in</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_agent",
            "description": "<p>User agent used to log in</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "last_connection_date",
            "description": "<p>Last connection date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "current",
            "description": "<p>If true, this token is the current one</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:username",
    "title": "Get a user",
    "name": "GetUserUsername",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "totp_enabled",
            "description": "<p>True if TOTP authentication is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "storage_quota",
            "description": "<p>Storage quota (in bytes)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "storage_current",
            "description": "<p>Quota used (in bytes)</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Groups</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "disabled",
            "description": "<p>True if the user is disabled</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The user does not exist</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Update the current user",
    "name": "PostUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..50",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..100",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied or connected as guest</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/disable_totp",
    "title": "Disable TOTP authentication for the current user",
    "name": "PostUserDisableTotp",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..100",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied or connected as guest</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/enable_totp",
    "title": "Enable TOTP authentication",
    "description": "<p>This resource enables the Time-based One-time Password authentication. All following login will need a validation code generated from the given secret seed.</p>",
    "name": "PostUserEnableTotp",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secret",
            "description": "<p>Secret TOTP seed to initiate the algorithm</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied or connected as guest</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login a user",
    "description": "<p>This resource creates an authentication token and gives it back in a cookie. All authenticated resources will check this cookie to find the user currently logged in.</p>",
    "name": "PostUserLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password (optional for guest login)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>TOTP validation code</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "remember",
            "description": "<p>If true, create a long lasted token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>A cookie named auth_token containing the token ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationCodeRequired",
            "description": "<p>A TOTP validation code is required</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/logout",
    "title": "Logout a user",
    "description": "<p>This resource deletes the authentication token created by POST /user/login and removes the cookie.</p>",
    "name": "PostUserLogout",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>An expired cookie named auth_token containing no value</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "AuthenticationTokenError",
            "description": "<p>Error deleting the authentication token</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/onboarded",
    "title": "Mark the onboarding experience as passed",
    "description": "<p>Once the onboarding experience has been passed by the user, this resource prevent it from being displayed again.</p>",
    "name": "PostUserOnboarded",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.7.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/password_lost",
    "title": "Create a key to reset a password and send it by email",
    "name": "PostUserPasswordLost",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/password_reset",
    "title": "Reset the user's password",
    "name": "PostUserPasswordReset",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Password recovery key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "KeyNotFound",
            "description": "<p>Password recovery key not found</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none",
        "title": "Anonymous user",
        "description": "<p>This resource can be accessed anonymously</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/test_totp",
    "title": "Test TOTP authentication",
    "description": "<p>Test a TOTP validation code.</p>",
    "name": "PostUserTestTotp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>TOTP validation code</p>"
          }
        ]
      }
    },
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>The validation code is not valid or access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.6.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/:username",
    "title": "Update a user",
    "name": "PostUserUsername",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..50",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..100",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "storage_quota",
            "description": "<p>Storage quota (in bytes)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disabled",
            "description": "<p>Disabled status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/:username/disable_totp",
    "title": "Disable TOTP authentication for a specific user",
    "name": "PostUserUsernameDisableTotp",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied or connected as guest</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user",
    "title": "Register a new user",
    "name": "PutUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..50",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..100",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "storage_quota",
            "description": "<p>Storage quota (in bytes)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "AlreadyExistingUsername",
            "description": "<p>Login already used</p>"
          }
        ],
        "Server error": [
          {
            "group": "server",
            "optional": false,
            "field": "PrivateKeyError",
            "description": "<p>Error while generating a private key</p>"
          },
          {
            "group": "server",
            "optional": false,
            "field": "UnknownError",
            "description": "<p>Unknown server error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserResource.java",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/vocabulary/:id",
    "title": "Delete a vocabulary entry",
    "name": "DeleteVocabularyId",
    "group": "Vocabulary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Entry ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Vocabulary not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/VocabularyResource.java",
    "groupTitle": "Vocabulary"
  },
  {
    "type": "get",
    "url": "/vocabulary/:name",
    "title": "Get a vocabulary",
    "name": "GetVocabularyName",
    "group": "Vocabulary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Vocabulary name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entries",
            "description": "<p>List of vocabulary entries</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entries.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entries.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entries.value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entries.order",
            "description": "<p>Order</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user",
        "title": "Authenticated user",
        "description": "<p>All authenticated users can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/VocabularyResource.java",
    "groupTitle": "Vocabulary"
  },
  {
    "type": "post",
    "url": "/vocabulary/:id",
    "title": "Update a vocabulary entry",
    "name": "PostVocabularyId",
    "group": "Vocabulary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Entry ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..50",
            "optional": false,
            "field": "name",
            "description": "<p>Vocabulary name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..500",
            "optional": false,
            "field": "value",
            "description": "<p>Entry value</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>Entry order</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>Order</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Vocabulary not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/VocabularyResource.java",
    "groupTitle": "Vocabulary"
  },
  {
    "type": "put",
    "url": "/vocabulary",
    "title": "Add a vocabulary entry",
    "name": "PutVocabulary",
    "group": "Vocabulary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..50",
            "optional": false,
            "field": "name",
            "description": "<p>Vocabulary name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..500",
            "optional": false,
            "field": "value",
            "description": "<p>Entry value</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>Entry order</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>Order</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/VocabularyResource.java",
    "groupTitle": "Vocabulary"
  },
  {
    "type": "delete",
    "url": "/webhook/:id",
    "title": "Delete a webhook",
    "name": "DeleteWebhook",
    "group": "Webhook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Webhook ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Webhook not found</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.6.0",
    "filename": "../java/com/sismics/docs/rest/resource/WebhookResource.java",
    "groupTitle": "Webhook"
  },
  {
    "type": "get",
    "url": "/webhook",
    "title": "Get webhooks",
    "name": "GetWebhook",
    "group": "Webhook",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "webhooks",
            "description": "<p>List of webhooks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "webhooks.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "webhooks.event",
            "description": "<p>Event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "webhooks.url",
            "description": "<p>URL</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.6.0",
    "filename": "../java/com/sismics/docs/rest/resource/WebhookResource.java",
    "groupTitle": "Webhook"
  },
  {
    "type": "put",
    "url": "/webhook",
    "title": "Add a webhook",
    "description": "<p>Each time the specified event is raised, the webhook URL will be POST-ed with the following JSON payload: {&quot;event&quot;: &quot;Event name&quot;, &quot;id&quot;: &quot;ID of the document or file&quot;}</p>",
    "name": "PutWebhook",
    "group": "Webhook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"DOCUMENT_CREATED\"",
              "\"DOCUMENT_UPDATED\"",
              "\"DOCUMENT_DELETED\"",
              "\"FILE_CREATED\"",
              "\"FILE_UPDATED\"",
              "\"FILE_DELETED\""
            ],
            "optional": false,
            "field": "event",
            "description": "<p>Event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.6.0",
    "filename": "../java/com/sismics/docs/rest/resource/WebhookResource.java",
    "groupTitle": "Webhook"
  },
  {
    "type": "get",
    "url": "/useractivity/list",
    "title": "Get user activities",
    "name": "GetUserActivityList",
    "group": "UserActivity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "date_range",
            "description": "<p>Date range (in days)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Maximum number of activities to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sort_column",
            "description": "<p>Column number to sort on</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "asc",
            "description": "<p>If true, sort in ascending order</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "activities",
            "description": "<p>List of activities</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.entity_name",
            "description": "<p>Entity name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.entity_type",
            "description": "<p>Entity type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.type",
            "description": "<p>Activity type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.create_date",
            "description": "<p>Creation date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activities.message",
            "description": "<p>Activity message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserActivityResource.java",
    "groupTitle": "UserActivity"
  },
  {
    "type": "get",
    "url": "/useractivity/gantt",
    "title": "Get Gantt chart data",
    "name": "GetUserActivityGantt",
    "group": "UserActivity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "date_range",
            "description": "<p>Date range (in days)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>List of Gantt tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Task ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.text",
            "description": "<p>Task text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.start_date",
            "description": "<p>Start date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.end_date",
            "description": "<p>End date (timestamp)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.duration",
            "description": "<p>Task duration (in minutes)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.entity_type",
            "description": "<p>Entity type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.details",
            "description": "<p>Task details</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.name",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Client error": [
          {
            "group": "client",
            "optional": false,
            "field": "ForbiddenError",
            "description": "<p>Access denied</p>"
          },
          {
            "group": "client",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation error</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>Only the admin user can access this resource</p>"
      }
    ],
    "version": "1.5.0",
    "filename": "../java/com/sismics/docs/rest/resource/UserActivityResource.java",
    "groupTitle": "UserActivity"
  }
] });
