const Alexa = require('ask-sdk-core')
const LaunchRequestHandler = require('./handlers/launch')
const ErrorHandler = require('./handlers/error')
const SessionEndedRequestHandler = require('./handlers/sessionEnded')
const ArticleListIntentHandler = require('./handlers/articleList')
const CancelAndStopIntentHandler = require('./handlers/cancel')

const skillBuilder = Alexa.SkillBuilders.custom()

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    ArticleListIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda()
