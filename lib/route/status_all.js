"use strict";

/**
 * @api {get} / Status Codes
 * @apiName StatusCodes
 * @apiGroup StatusCodes
 *
 * @apiUse UnknownError
 * @apiUse InsufficientParameter
 * @apiUse UserNotFound
 * @apiUse UserUpdateFailed
 * @apiUse UserTokenMismatch
 * @apiUse UserTokenAlreadyExpired
 * @apiUse UserAlreadyVerified
 * @apiUse UserPermissionNotAllowed
 * @apiUse UserAuthRequired
 * @apiUse UserAlreadyLoggedIn
 * @apiUse UserLoggingOutWhenNotLoggedIn
 * @apiUse UserCredentialsNotMatch
 * @apiUse UserNotVerified
 * @apiUse UserEmailAlreadyInUse
 * @apiUse CantReportSelf
 * @apiUse UserRemovalFailed
 * @apiUse EmailSendFailed
 * @apiUse UnivNotFound
 * @apiUse UnivUpdateFailed
 * @apiUse UnivRemovalFailed
 * @apiUse NotAcceptedEmailAddress
 * @apiUse MultipleAcceptedEmailAddress
 * @apiUse UserNotInThisUniversity
 * @apiUse InvalidEmailAddress
 * @apiUse InvalidEmailDomain
 * @apiUse UnivAlreadyExisting
 * @apiUse InvalidPageNumberRequested
 * @apiUse InvalidSortRequested
 * @apiUse InvalidFilterRequested
 * @apiUse InvalidSearchFieldRequested
 * @apiUse InvalidAgeRequested
 * @apiUse EmptyQueryStringRequested
 * @apiUse InvalidPerPageRequested
 * @apiUse PostNotFound
 * @apiUse CommentsOnPostGottenFailed
 * @apiUse UpdateVoteFailed
 * @apiUse GetPostsFailed
 * @apiUse PostRemoveFailed
 * @apiUse PostAddedFailed
 * @apiUse TitleOfPostIsInvalid
 * @apiUse TextOfPostIsInvalid
 * @apiUse PostVotedAlready
 * @apiUse UpdateVoteInDBFailed
 * @apiUse PostOwnerCanNotVote
 * @apiUse CommentNotFound
 * @apiUse CommentRemovalFailed
 * @apiUse CommentUpdateFailed
 * @apiUse CommentAddFailed
 * @apiUse CommentReportFailed
 * @apiUse CommentReportAlready
 * @apiUse CommentOwnerCanNotVote
 * @apiUse AlreadyReported
 * @apiUse AlreadyVoted
 * @apiUse AddVoteFailed
 * @apiUse AddReportFailed
 * @apiUse EmptyComment
 * @apiUse EmptyVote
 * @apiUse WrongVote
 * @apiUse RateLimitExceeded
 * @apiUse CouldNotFetchCount
 */
