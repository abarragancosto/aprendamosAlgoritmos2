const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.attributeScreenIs(handlerInput, "launch"));
	},
	handle(handlerInput) {
		let filePath = 'launchRequest';

		//let speakOutput = utils.getSpeakOutput(handlerInput, filePath);
		let speakOutput = 'Lo primero que debo conocer es si deseas continuar con el progreso llevado anteriormente o no. Para ello tienes que decir, Si o no';


		utils.showAPLWithScreen(handlerInput, filePath);
		utils.sendMessageToWebSocket(speakOutput,"","", handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
