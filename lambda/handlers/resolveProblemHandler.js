const Alexa = require('ask-sdk-core/dist/index');
const utils = require('../utils');


module.exports = {
	canHandle(handlerInput) {
		return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
			&& Alexa.getIntentName(handlerInput.requestEnvelope) === 'ResolverIntent');
	},
	handle(handlerInput) {

		let filePath = "resolveProblem";

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		// utils.showAPLWithScreen(handlerInput, filePath);

		utils.setAttributeWithValue("screen", filePath, handlerInput);
		utils.sendMessageToWebSocket(speakOutput,"", "", handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
