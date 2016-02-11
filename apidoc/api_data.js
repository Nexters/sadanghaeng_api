define({ "api": [
  {
    "type": "get",
    "url": "/users/reset_password",
    "title": "Generate reset token for password reset",
    "name": "GenerateResetToken",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotVerified",
            "description": "<p>User is trying to use not verified account.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>requested User is not found in our database.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/verify",
    "title": "Generate verification token for User",
    "name": "GenerateVerificationToken",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyVerified",
            "description": "<p>User account you are trying to verify its email address has already done a verification.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>requested User is not found in our database.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:userid",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "owner"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":userid",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>User Information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>User unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.email",
            "description": "<p>User email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.nickname",
            "description": "<p>User nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "value.verified",
            "description": "<p>is verified User</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "value.admin",
            "description": "<p>is admin User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.reset_token",
            "description": "<p>User password reset token</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "value.reset_token_expires",
            "description": "<p>password reset token expiration date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.verify_token",
            "description": "<p>User verification token</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "value.verify_token_expires",
            "description": "<p>verification token expiration date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.univID",
            "description": "<p>University ID User is in</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "value.memberSince",
            "description": "<p>When user registered</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value.reportCounts",
            "description": "<p>The number of times this user was reported by other users</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>Selected request requires a valid logged-in user session.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>requested User is not found in our database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotVerified",
            "description": "<p>User is trying to use not verified account.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Request Login session",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's unique ID (email address).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"test@test.com\",\n  \"password\": \"test\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": \"114\",\n  \"value\":\n  {\n     \"message\": \"provided user credential is not correct\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserCredentialsNotMatch",
            "description": "<p>Provided user credentials do not match to those on our database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyLoggedIn",
            "description": "<p>User is trying to login, but the user was already logged in and had valid session.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotVerified",
            "description": "<p>User is trying to use not verified account.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>requested User is not found in our database.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/route/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "Request Logout from session",
    "name": "Logout",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"0\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": \"113\",\n  \"value\":\n  {\n     \"message\": \"user is trying to logout but this user is not logged in as any user\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserLoggingOutWhenNotLoggedIn",
            "description": "<p>You are trying to logout when you are not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/route/v1/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Register new User",
    "name": "RegisterUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
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
            "field": "value",
            "description": "<p>user id of newly registered user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/route/v1/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserEmailAlreadyInUse",
            "description": "<p>The email address you are trying to use is already in use.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users/reset_password",
    "title": "Reset User's password",
    "name": "ResetPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetToken",
            "description": "<p>password reset token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>new password</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotVerified",
            "description": "<p>User is trying to use not verified account.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>requested User is not found in our database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserTokenAlreadyExpired",
            "description": "<p>Provided token has already expired, generate new one and try again.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserTokenMismatch",
            "description": "<p>Provided token for behavior does not match with our database hence not permitting operation.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserUpdateFailed",
            "description": "<p>Our database failed to update user information.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/users/:userid",
    "title": "Update User information",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":userid",
            "description": "<p>User's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>User's new nickname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>User Information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>User unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.email",
            "description": "<p>User email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.nickname",
            "description": "<p>User nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "value.verified",
            "description": "<p>is verified User</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "value.admin",
            "description": "<p>is admin User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.reset_token",
            "description": "<p>User password reset token</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "value.reset_token_expires",
            "description": "<p>password reset token expiration date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.verify_token",
            "description": "<p>User verification token</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "value.verify_token_expires",
            "description": "<p>verification token expiration date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.univID",
            "description": "<p>University ID User is in</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "value.memberSince",
            "description": "<p>When user registered</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value.reportCounts",
            "description": "<p>The number of times this user was reported by other users</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>Selected request requires a valid logged-in user session.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>requested User is not found in our database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserUpdateFailed",
            "description": "<p>Our database failed to update user information.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotVerified",
            "description": "<p>User is trying to use not verified account.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Verify User's email address",
    "name": "VerifyUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verifyToken",
            "description": "<p>verification token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyVerified",
            "description": "<p>User account you are trying to verify its email address has already done a verification.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>requested User is not found in our database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserTokenAlreadyExpired",
            "description": "<p>Provided token has already expired, generate new one and try again.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserTokenMismatch",
            "description": "<p>Provided token for behavior does not match with our database hence not permitting operation.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserUpdateFailed",
            "description": "<p>Our database failed to update user information.</p>"
          }
        ]
      }
    }
  }
] });
