const utils = require('../../utils');

const screen = "pasoTres2";
const dataTableImageSource = "https://i.ibb.co/HDrgZ71/tres2.png";
const graphImageSource = "https://i.ibb.co/7XR1fgJ/grafo-Segunda.png";

module.exports = {
	canHandle(handlerInput) {
		return (
			utils.requestTypeIs(handlerInput, 'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'ContinuarIntent')
			&& utils.attributeIs('explicacion', 'pasoTres1', handlerInput)
		)
			|| (utils.requestTypeIs(handlerInput,'IntentRequest') &&
				utils.intentNameIs(handlerInput,'volverEnunciadoIntent')
				&& utils.attributeIs("explicacion", screen, handlerInput));
	},
	handle(handlerInput) {

		let filePath = `explicaciones/${screen}`;
		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		utils.showAPLWithScreen(handlerInput, filePath);

		utils.setAttributeWithValue("explicacion", screen, handlerInput);

		utils.sendMessageToWebSocket(speakOutput, graphImageSource, dataTableImageSource,  handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
