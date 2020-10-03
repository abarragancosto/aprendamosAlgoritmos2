const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'algoritmoIntent');
		},
	handle(handlerInput) {
		let filePath = 'algoritmo';

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		utils.showAPLWithScreen(handlerInput, filePath);
		utils.sendMessageToWebSocket(speakOutput,"https://i.ibb.co/MBW2HyL/algoritmo.png", "", handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
