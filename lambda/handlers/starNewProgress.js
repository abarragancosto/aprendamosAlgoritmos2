const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'AMAZON.NoIntent')
			&& utils.attributeScreenIs(handlerInput, "launch"));
	},
	handle(handlerInput) {
		let filePath = 'startNewProgress';

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		utils.showAPLWithScreen(handlerInput, 'launchRequest');
		utils.sendMessageToWebSocket(speakOutput,"","", handlerInput);
		utils.setScreenAttributeWithValue('startNewProgress', handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
