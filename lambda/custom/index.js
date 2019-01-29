const Alexa = require('ask-sdk-core')
const LaunchRequestHandler = require('./handlers/launch')
const ErrorHandler = require('./handlers/error')
const SessionEndedRequestHandler = require('./handlers/sessionEnded')
const HelloWorldIntentHandler = require('./handlers/hello')
const HelpIntentHandler = require('./handlers/help')
const CancelAndStopIntentHandler = require('./handlers/cancel')

const skillBuilder = Alexa.SkillBuilders.custom()

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda()
