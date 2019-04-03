const secrets = require('../secrets.json')
const butter = require('buttercms')(secrets.BUTTER_CMS_API_KEY)

const ArticleListIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
       (handlerInput.requestEnvelope.request.intent.name === 'PodcastIntent' ||
       handlerInput.requestEnvelope.request.intent.name === 'AMAZON.ResumeIntent')
  },
  async handle (handlerInput) {
    const response = await butter.page.list('podcast', { page: 1, page_size: 1 })
    const file = response.data.data[0].fields.podcast_file

    return handlerInput.responseBuilder
      .addAudioPlayerPlayDirective('REPLACE_ALL', file, 'podcast')
      .withShouldEndSession(true)
      .getResponse()
  }
}

module.exports = ArticleListIntentHandler
