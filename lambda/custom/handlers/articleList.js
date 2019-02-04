const secrets = require('../secrets.json')
const butter = require('buttercms')(secrets.BUTTER_CMS_API_KEY)

const ArticleListIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
        handlerInput.requestEnvelope.request.intent.name === 'ArticleListIntent'
  },
  async handle (handlerInput) {
    const response = await butter.post.list({ page: 1, page_size: 5 })
    const posts = response.data.data

    const message = `<speak>
      This is the list of the last ${posts.length} posts.
      ${posts.map(p => `<p>${p.title}</p>`)}
    </speak>`

    return handlerInput.responseBuilder
      .speak(message)
      .getResponse()
  }
}

module.exports = ArticleListIntentHandler
