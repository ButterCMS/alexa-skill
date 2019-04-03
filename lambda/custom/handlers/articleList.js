const secrets = require('../secrets.json')
const butter = require('buttercms')(secrets.BUTTER_CMS_API_KEY)

const ArticleListIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
        handlerInput.requestEnvelope.request.intent.name === 'ArticleListIntent'
  },
  async handle (handlerInput) {
    const response = await butter.post.list({ page: 1, page_size: 5 })
    const titles = response.data.data.map(p => p.title)

    const message = `<speak>
      <p>This is the list of the last ${titles.length} posts.</p>
      ${titles.map(t => `<p>${t}</p>`)}
    </speak>`

    return handlerInput.responseBuilder
      .speak(message)
      .withSimpleCard(
        'Artcile List',
        titles.join('\n'))
      .getResponse()
  }
}

module.exports = ArticleListIntentHandler
