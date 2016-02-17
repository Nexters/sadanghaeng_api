"use strict";

var codes = {
  Success: {
    code: 0,
    summary: 'success'
  },
  UnknownError: {
    code: 1,
    summary: 'Unknown Error has occured! We are doomed!'
  },
  InsufficientParameter: {
    code: 10,
    summary: 'Supplied parameters were not sufficient for' +
    'handling request'
  },

  /* ---------------------------User------------------------- */
  UserNotFound: {
    code: 101,
    summary: 'Requested User was not found on DB'
  },
  UserUpdateFailed: {
    code: 102,
    summary: 'User update failed'
  },
  UserTokenMismatch: {
    code: 103,
    summary: 'provided token mismatch'
  },
  UserTokenAlreadyExpired: {
    code: 104,
    summary: 'provided token is already expired'
  },
  UserAlreadyVerified: {
    code: 105,
    summary: 'user already verified oneself'
  },
  UserPermissionNotAllowed: {
    code: 106,
    summary: 'permission current user posesses is not enough to perform selected action'
  },

  UserAuthRequired: {
    code: 111,
    summary: 'user authentication is required'
  },
  UserAlreadyLoggedIn: {
    code: 112,
    summary: 'user is trying to login but this user' +
    'was already logged in as an user'
  },
  UserLoggingOutWhenNotLoggedIn: {
    code: 113,
    summary: 'user is trying to logout but this user' +
    'is not logged in as any user'
  },
  UserCredentialsNotMatch: {
    code: 114,
    summary: 'provided user credential is not correct'
  },
  UserNotVerified: {
    code: 115,
    summary: 'provided user is not yet verified'
  },
  UserEmailAlreadyInUse: {
    code: 116,
    summary: 'provided user email is already in use'
  },
  CantReportSelf: {
    code: 117,
    summary: 'user cannot report oneself'
  },
  UserRemovalFailed: {
    code: 119,
    summary: 'user removal failed'
  },
  EmailSendFailed: {
    code: 119,
    summary: 'sending email to user failed'
  },

  /* ---------------------University-------------------------- */
  UnivNotFound: {
    code: 201,
    summary: 'Requested University is not found'
  },
  UnivUpdateFailed: {
    code: 202,
    summary: 'University update failed'
  },
  UnivRemovalFailed: {
    code: 203,
    summary: 'University removal failed'
  },
  NotAcceptedEmailAddress: {
    code: 204,
    summary: 'none of universities we support accepts provided email domain'
  },
  MultipleAcceptedEmailAddress: {
    code: 205,
    summary: 'many of universities we support accepts provided email domain'
  },
  UserNotInThisUniversity: {
    code: 206,
    summary: 'current user is not member of requested university'
  },
  InvalidEmailAddress: {
    code: 207,
    summary: 'not valid email address'
  },
  InvalidEmailDomain: {
    code: 208,
    summary: 'not valid email domain'
  },
  UnivAlreadyExisting: {
    code: 209,
    summary: 'university with given name is already existing'
  },
  InvalidPageNumberRequested: {
    code: 250,
    summary: 'requested page number is invalid'
  },
  InvalidSortRequested: {
    code: 251,
    summary: 'requested sort type is invalid'
  },
  InvalidFilterRequested: {
    code: 252,
    summary: 'requested filter type is invalid'
  },
  InvalidSearchFieldRequested: {
    code: 253,
    summary: 'one of requested search field type is invalid'
  },
  InvalidAgeRequested: {
    code: 254,
    summary: 'requested post age range is invalid'
  },
  EmptyQueryStringRequested: {
    code: 255,
    summary: 'requested query string is empty'
  },
  InvalidPerPageRequested: {
    code: 256,
    summary: 'requested per page is invalid'
  },

  /* ---------------------Post-------------------------- */
  PostNotFound: {
    code: 400,
    summary: 'Requested Post was not found on DB'
  },
  CommentsOnPostGottenFailed: {
    code: 401,
    summary: 'fail to get comments on the post'
  },
  UpdateVoteFailed: {
    code: 402,
    summary: 'fail to update votes on the post'
  },
  GetPostsFailed: {
    code: 403,
    summary: 'failed to get posts'
  },
  CouldNotFindPost: {
    code: 404,
    summary: 'failed to find individual post'
  },
  PostRemoveFailed: {
    code: 405,
    summary: 'failed to remove post'
  },
  PostAddedFailed: {
    code: 406,
    summary: 'fail to add the post'
  },
  TitleOfPostIsInvalid: {
    code: 407,
    summary: 'title of the post is continuum of whitespace and newline'
  },
  TextOfPostIsInvalid: {
    code: 408,
    summary: 'text of the post is continuum group of whitespace and newline'
  },
  PostVotedAlready: {
    code: 409,
    summary: 'the post is already voted by the user'
  },
  UpdateVoteInDBFailed: {
    code: 410,
    summary: 'update vote in DB failed'
  },

  /* ---------------------Comment-------------------------- */
  CommentNotFound: {
    code: 500,
    summary: 'Requested comment was not found on DB'
  },
  CommentRemovalFailed: {
    code: 501,
    summary: 'fail to remove the comment'
  },
  CommentUpdateFailed: {
    code: 502,
    summary: 'fail to update the comment'
  },
  CommentAddFailed: {
    code: 503,
    summary: 'failed to add comment'
  },
  CommentReportFailed: {
    code: 504,
    summary: 'fail to report the comment'
  },
  CommentReportAlready: {
    code: 505,
    summary: 'already report the comment'
  },
  

  /* ------------------ Common -------------------------------- */

  AlreadyReported: {
    code: 600,
    summary: 'user can only get reported once'
  },
  AlreadyVoted: {
    code: 601,
    summary: 'user can only vote once'
  },
  AddVoteFailed: {
    code: 602,
    summary: 'adding vote failed'
  },
  AddReportFailed: {
    code: 603,
    summary: 'adding report failed'
  },
  RateLimitExceeded: {
    code: 40004,
    summary: 'Too many requests, please try again later.'
  },

    /* ------------------ Stat -------------------------------- */

  CouldNotFetchCount: {
    code: 700,
    summary: 'error when calling db'
  }
};

if (typeof module !== "undefined") {
  module.exports.codes = codes;
  module.exports.getSummaryByCode = function (code) {
    code = parseInt(code, 10);
    for (var c in codes) {
      if (typeof codes[c].code !== "undefined" && codes[c].code === code) {
        return codes[c].summary;
      }
    }
    return 'An error occurred';
  };
}