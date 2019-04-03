const IMAGE_URL = 'https://d2devwt40at1e2.cloudfront.net/api/file/tdt3s1OHRO6wfQOpmAHw'

const LaunchRequestHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
  },
  handle (handlerInput) {
    const speechText = 'Welcome the Butter CMS Example Skill. You can ask me to read a list of articles or you can listen to the podcast.'

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
