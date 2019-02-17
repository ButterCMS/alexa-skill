const Alexa = require('ask-sdk-core')
const LaunchRequestHandler = require('./handlers/launch')
const ErrorHandler = require('./handlers/error')
const ArticleListIntentHandler = require('./handlers/articleList')
const CancelAndStopIntentHandler = require('./handlers/cancel')

const skillBuilder = Alexa.SkillBuilders.custom()

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    ArticleListIntentHandler,
    CancelAndStopIntentHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda()
