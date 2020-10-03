const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'creditosIntent');
	},
	handle(handlerInput) {
		let filePath = 'creditos';

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		utils.showAPLWithScreen(handlerInput, filePath);
		utils.sendMessageToWebSocket(speakOutput,"https://i.ibb.co/QQF75x2/creditos.png", "", handlerInput);
		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
