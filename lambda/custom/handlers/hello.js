const secrets = require('../secrets.json')
const butter = require('buttercms')(secrets.BUTTER_CMS_API_KEY)

const HelloWorldIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
        handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent'
  },
  async handle (handlerInput) {
    const response = await butter.post.list({ page: 1, page_size: 10 })

    const posts = response.data.data.map(post => {
      return {
        title: post.title
      }
    })

    return handlerInput.responseBuilder
      .speak(posts[0].title)
      .getResponse()
  }
}

module.exports = HelloWorldIntentHandler
