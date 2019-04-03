const IMAGE_URL = 'https://d2devwt40at1e2.cloudfront.net/api/file/tdt3s1OHRO6wfQOpmAHw'

const LaunchRequestHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
        handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent'
  },
  handle (handlerInput) {
    const speechText = 'This is the help section of our example skill'

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withStandardCard(
        'Butter CMS Alexa Skill',
        speechText,
        IMAGE_URL)
      .getResponse()
  }
}

module.exports = LaunchRequestHandler
