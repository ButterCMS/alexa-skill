
const CancelAndStopIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
        (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' ||
          handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent' ||
          handlerInput.requestEnvelope.request.intent.name === 'AMAZON.PauseIntent')
  },
  handle (handlerInput) {
    const speechText = 'Goodbye!'

    return handlerInput.responseBuilder
      .speak(speechText)
      .addAudioPlayerStopDirective()
      .withSimpleCard('Hello World', speechText)
      .getResponse()
  }
}

module.exports = CancelAndStopIntentHandler
