const Alexa = require('ask-sdk-core/dist/index');
const utils = require('../utils');


const screen = "pasoInicioNodo";

module.exports = {
	canHandle(handlerInput) {
		return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
			&& Alexa.getIntentName(handlerInput.requestEnvelope) === 'levelHardIntent')
			&& utils.attributeIs("screen", "resolveProblem", handlerInput );
	},
	handle(handlerInput) {

		utils.setAttributeWithValue("level", "dificil", handlerInput);

		const problem = utils.selectProblemRandom("dificil");
		utils.setAttributeWithValue("problem", problem.name, handlerInput);

		let filePath = `dificil/${problem.name}/pasoInicioNodo`;

		let speakOutput = problem.text;

		utils.showAPLWithScreen(handlerInput, filePath);

		utils.setAttributeWithValue("solucion", screen, handlerInput);

		utils.sendMessageToWebSocket(speakOutput, problem.graphImageSource, problem.dataTableImageSource,  handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
