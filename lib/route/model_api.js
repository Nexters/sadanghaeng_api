"use strict";

/**
 * @apiDefine SuccessCode
 * @apiSuccess {Number} status  status of request
 *
 */

/**
 * @apiDefine UserModel
 * @apiSuccess {Object} value   User Information
 * @apiSuccess {String} value._id User unique id
 * @apiSuccess {String} value.email   User email address
 * @apiSuccess {String} value.nickname  User nickname
 * @apiSuccess {Boolean} value.verified is verified User
 * @apiSuccess {Boolean} value.admin is admin User
 * @apiSuccess {String} value.reset_token User password reset token
 * @apiSuccess {Date}   value.reset_token_expires password reset token expiration date
 * @apiSuccess {String} value.verify_token User verification token
 * @apiSuccess {Date}   value.verify_token_expires verification token expiration date
 * @apiSuccess {String} value.university  University ID User is in
 * @apiSuccess {Date}   value.memberSince When user registered
 * @apiSuccess {Number} value.reportCounts The number of times this user was reported by other users
 *
 */

/**
 * @apiDefine UniversityModel
 * @apiSuccess {Object} value University Information
 * @apiSuccess {String} value._id University unique id
 * @apiSuccess {String} value.name University name
 * @apiSuccess {String} value.displayName How each students in this university will be represented
 * @apiSuccess {String[]} value.emailDomainList list of email domains (string after @) this university accepts
 */

/**
 * @apiDefine Posts
 * @apiSuccess {Object[]} value Post Information
 * @apiSuccess {String} value[].pid Post unique id
 * @apiSuccess {String} value[].title Post title
 * @apiSuccess {String} value[].author author's nickname
 * @apiSuccess {Date} value[].written when this post was written
 * @apiSuccess {Number} value[].voteCount vote score for this post
 * @apiSuccess {Number} value[].commentCount number of comments on this post
 * @apiSuccess {Number} value[].reportCount number of reports this post got
 */