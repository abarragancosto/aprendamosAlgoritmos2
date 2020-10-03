const utils = require('../../utils');

const screen = "pasoInicio1";
const dataTableImageSource = "https://i.ibb.co/MVtrmkX/inicio1.png";
const graphImageSource = "https://i.ibb.co/7XR1fgJ/grafo-Segunda.png";

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'ExplicacionIntent'))
			|| (utils.requestTypeIs(handlerInput,'IntentRequest') &&
				utils.intentNameIs(handlerInput,'volverEnunciadoIntent')
				&& utils.attributeIs("explicacion", screen, handlerInput));
	},
	handle(handlerInput) {

		let speakOutput = utils.getSpeakOutput(handlerInput, 'explicaciones/pasoInicio1');

		utils.showAPLWithScreen(handlerInput, 'explicaciones/pasoInicio1');

		utils.setAttributeWithValue("explicacion", screen, handlerInput);

		utils.sendMessageToWebSocket(speakOutput, graphImageSource, dataTableImageSource,  handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
