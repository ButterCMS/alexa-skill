const Alexa = require('ask-sdk-core')
const LaunchRequestHandler = require('./handlers/launch')
const ErrorHandler = require('./handlers/error')
const ArticleListIntentHandler = require('./handlers/articleList')
const CancelAndStopIntentHandler = require('./handlers/cancel')
const HelpIntentHandler = require('./handlers/help')
const PodcastIntentHandler = require('./handlers/podcast')

const skillBuilder = Alexa.SkillBuilders.custom()

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    ArticleListIntentHandler,
    CancelAndStopIntentHandler,
    HelpIntentHandler,
    PodcastIntentHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda()
