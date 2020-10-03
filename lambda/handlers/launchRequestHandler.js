const Alexa = require('ask-sdk-core');
const utils = require('../utils');

module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        let filePath = 'launchRequest';
        let speakOutput = 'Hola y bienvenido a aprendamos algoritmos. La primera pregunta que debo hacerte es si deseas continuar con el progreso llevado anteriormente o no. ' +
            'Para contestarme debes decir, si o no.';

        const screen = 'launch';
        utils.setScreenAttributeWithValue(screen, handlerInput);
        utils.showAPLWithScreen(handlerInput, filePath);
        utils.sendMessageToWebSocket(speakOutput,"","", handlerInput);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
