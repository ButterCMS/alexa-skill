const secrets = require('../secrets.json')
const butter = require('buttercms')(secrets.BUTTER_CMS_API_KEY)

const ArticleListIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
        handlerInput.requestEnvelope.request.intent.name === 'ArticleListIntent'
  },
  async handle (handlerInput) {
    const response = await butter.post.list({ page: 1, page_size: 10 })

    const posts = response.data.data.map(post => post.title).join('')

    return handlerInput.responseBuilder
      .speak(posts)
      .getResponse()
  }
}

module.exports = ArticleListIntentHandler
