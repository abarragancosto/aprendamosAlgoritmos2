const utils = require('../utils');

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'AMAZON.YesIntent')
			&& utils.attributeScreenIs(handlerInput, "launch"));
	},
	handle(handlerInput) {
		let filePath = 'launchRequest';

		//let speakOutput = utils.getSpeakOutput(handlerInput, filePath);
		let speakOutput = 'Todo el progreso que llevabas en la anterior sesión continúa estando disponible. Puedes continuar navegando por la aplicación.';

		return utils.loadAttributes(handlerInput).then(() => {
			utils.showAPLWithScreen(handlerInput, filePath);
			utils.sendMessageToWebSocket(speakOutput,"", "", handlerInput);
			utils.setScreenAttributeWithValue('', handlerInput);
			return handlerInput.responseBuilder
				.speak(speakOutput)
				.reprompt(speakOutput)
				.getResponse();
		});



		// return handlerInput.responseBuilder
		// 	.speak(speakOutput)
		// 	.reprompt(speakOutput)
		// 	.getResponse();
	}
};
