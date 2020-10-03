const LaunchRequestHandler = require('./launchRequestHandler');
const HelpIntentHandler = require('./helpIntentHandler');
const ErrorHandler = require('./errorHandler');
const CancelAndStopIntentHandler = require('./cancelAndStopIntentHandler');
const SessionEndedRequestHandler = require('./sessionEndedRequestHandler');
const IntentReflectorHandler = require('./intentReflectorHandler');
const algoritmos = require('./algoritmos');
const creditos = require('./creditos');
const pasoCuatro = require('./explicaciones/pasoCuatro');
const pasoDos1 = require('./explicaciones/pasoDos1');
const pasoDos2 = require('./explicaciones/pasoDos2');
const pasoInicio1 = require('./explicaciones/pasoInicio1');
const pasoInicio2 = require('./explicaciones/pasoInicio2');
const pasoInicio3 = require('./explicaciones/pasoInicio3');
const pasoTres1 = require('./explicaciones/pasoTres1');
const pasoTres2 = require('./explicaciones/pasoTres2');
const pasoUno1 = require('./explicaciones/pasoUno1');
const pasoUno2 = require('./explicaciones/pasoUno2');
const silenciarIntent = require('./silenciarIntent');
const medioproblemaUnopasoDosCandidatos = require('./medio/problemaUno/pasoDosCandidatos');
const medioproblemaUnopasoDosCandidatosFallo = require('./medio/problemaUno/pasoDosCandidatosFallo');
const medioproblemaUnopasoDosDistancias = require('./medio/problemaUno/pasoDosDistancias');
const medioproblemaUnopasoDosDistanciasFallo = require('./medio/problemaUno/pasoDosDistanciasFallo');
const medioproblemaUnopasoDosNodo = require('./medio/problemaUno/pasoDosNodo');
const medioproblemaUnopasoDosNodoFallo = require('./medio/problemaUno/pasoDosNodoFallo');
const medioproblemaUnopasoInicioCandidatos = require('./medio/problemaUno/pasoInicioCandidatos');
const medioproblemaUnopasoInicioCandidatosFallo = require('./medio/problemaUno/pasoInicioCandidatosFallo');
const medioproblemaUnopasoInicioDistancias = require('./medio/problemaUno/pasoInicioDistancias');
const medioproblemaUnopasoInicioDistanciasFallo = require('./medio/problemaUno/pasoInicioDistanciasFallo');
const medioproblemaUnopasoTresCandidatos = require('./medio/problemaUno/pasoTresCandidatos');
const medioproblemaUnopasoTresCandidatosFallo = require('./medio/problemaUno/pasoTresCandidatosFallo');
const medioproblemaUnopasoTresDistancias = require('./medio/problemaUno/pasoTresDistancias');
const medioproblemaUnopasoTresDistanciasFallo = require('./medio/problemaUno/pasoTresDistanciasFallo');
const medioproblemaUnopasoTresNodo = require('./medio/problemaUno/pasoTresNodo');
const medioproblemaUnopasoTresNodoFallo = require('./medio/problemaUno/pasoTresNodoFallo');
const medioproblemaUnopasoUnoCandidatos = require('./medio/problemaUno/pasoUnoCandidatos');
const medioproblemaUnopasoUnoCandidatosFallo = require('./medio/problemaUno/pasoUnoCandidatosFallo');
const medioproblemaUnopasoUnoDistancias = require('./medio/problemaUno/pasoUnoDistancias');
const medioproblemaUnopasoUnoDistanciasFallo = require('./medio/problemaUno/pasoUnoDistanciasFallo');
const medioproblemaUnopasoUnoNodo = require('./medio/problemaUno/pasoUnoNodo');
const medioproblemaUnopasoUnoNodoFallo = require('./medio/problemaUno/pasoUnoNodoFallo');
const medioproblemaDospasoDosCandidatos = require('./medio/problemaDos/pasoDosCandidatos');
const medioproblemaDospasoDosCandidatosFallo = require('./medio/problemaDos/pasoDosCandidatosFallo');
const medioproblemaDospasoDosDistancias = require('./medio/problemaDos/pasoDosDistancias');
const medioproblemaDospasoDosDistanciasFallo = require('./medio/problemaDos/pasoDosDistanciasFallo');
const medioproblemaDospasoDosNodo = require('./medio/problemaDos/pasoDosNodo');
const medioproblemaDospasoDosNodoFallo = require('./medio/problemaDos/pasoDosNodoFallo');
const medioproblemaDospasoInicioCandidatos = require('./medio/problemaDos/pasoInicioCandidatos');
const medioproblemaDospasoInicioCandidatosFallo = require('./medio/problemaDos/pasoInicioCandidatosFallo');
const medioproblemaDospasoInicioDistancias = require('./medio/problemaDos/pasoInicioDistancias');
const medioproblemaDospasoInicioDistanciasFallo = require('./medio/problemaDos/pasoInicioDistanciasFallo');
const medioproblemaDospasoTresCandidatos = require('./medio/problemaDos/pasoTresCandidatos');
const medioproblemaDospasoTresCandidatosFallo = require('./medio/problemaDos/pasoTresCandidatosFallo');
const medioproblemaDospasoTresDistancias = require('./medio/problemaDos/pasoTresDistancias');
const medioproblemaDospasoTresDistanciasFallo = require('./medio/problemaDos/pasoTresDistanciasFallo');
const medioproblemaDospasoTresNodo = require('./medio/problemaDos/pasoTresNodo');
const medioproblemaDospasoTresNodoFallo = require('./medio/problemaDos/pasoTresNodoFallo');
const medioproblemaDospasoUnoCandidatos = require('./medio/problemaDos/pasoUnoCandidatos');
const medioproblemaDospasoUnoCandidatosFallo = require('./medio/problemaDos/pasoUnoCandidatosFallo');
const medioproblemaDospasoUnoDistancias = require('./medio/problemaDos/pasoUnoDistancias');
const medioproblemaDospasoUnoDistanciasFallo = require('./medio/problemaDos/pasoUnoDistanciasFallo');
const medioproblemaDospasoUnoNodo = require('./medio/problemaDos/pasoUnoNodo');
const medioproblemaDospasoUnoNodoFallo = require('./medio/problemaDos/pasoUnoNodoFallo');
const dificilproblemaUnopasoDosCandidatos = require('./dificil/problemaUno/pasoDosCandidatos');
const dificilproblemaUnopasoDosCandidatosFallo = require('./dificil/problemaUno/pasoDosCandidatosFallo');
const dificilproblemaUnopasoDosDistancias = require('./dificil/problemaUno/pasoDosDistancias');
const dificilproblemaUnopasoDosDistanciasFallo = require('./dificil/problemaUno/pasoDosDistanciasFallo');
const dificilproblemaUnopasoDosNodo = require('./dificil/problemaUno/pasoDosNodo');
const dificilproblemaUnopasoDosNodoFallo = require('./dificil/problemaUno/pasoDosNodoFallo');
const dificilproblemaUnopasoInicioCandidatos = require('./dificil/problemaUno/pasoInicioCandidatos');
const dificilproblemaUnopasoInicioCandidatosFallo = require('./dificil/problemaUno/pasoInicioCandidatosFallo');
const dificilproblemaUnopasoInicioDistancias = require('./dificil/problemaUno/pasoInicioDistancias');
const dificilproblemaUnopasoInicioDistanciasFallo = require('./dificil/problemaUno/pasoInicioDistanciasFallo');
const dificilproblemaUnopasoTresCandidatos = require('./dificil/problemaUno/pasoTresCandidatos');
const dificilproblemaUnopasoTresCandidatosFallo = require('./dificil/problemaUno/pasoTresCandidatosFallo');
const dificilproblemaUnopasoTresDistancias = require('./dificil/problemaUno/pasoTresDistancias');
const dificilproblemaUnopasoTresDistanciasFallo = require('./dificil/problemaUno/pasoTresDistanciasFallo');
const dificilproblemaUnopasoTresNodo = require('./dificil/problemaUno/pasoTresNodo');
const dificilproblemaUnopasoTresNodoFallo = require('./dificil/problemaUno/pasoTresNodoFallo');
const dificilproblemaUnopasoUnoCandidatos = require('./dificil/problemaUno/pasoUnoCandidatos');
const dificilproblemaUnopasoUnoCandidatosFallo = require('./dificil/problemaUno/pasoUnoCandidatosFallo');
const dificilproblemaUnopasoUnoDistancias = require('./dificil/problemaUno/pasoUnoDistancias');
const dificilproblemaUnopasoUnoDistanciasFallo = require('./dificil/problemaUno/pasoUnoDistanciasFallo');
const dificilproblemaUnopasoUnoNodo = require('./dificil/problemaUno/pasoUnoNodo');
const dificilproblemaUnopasoUnoNodoFallo = require('./dificil/problemaUno/pasoUnoNodoFallo');
const dificilproblemaUnopasoCuatroNodo = require('./dificil/problemaUno/pasoCuatroNodo');
const dificilproblemaUnopasoCuatroNodoFallo = require('./dificil/problemaUno/pasoCuatroNodoFallo');
const dificilproblemaUnopasoCuatroCandidatos = require('./dificil/problemaUno/pasoCuatroCandidatos');
const dificilproblemaUnopasoCuatroCandidatosFallo = require('./dificil/problemaUno/pasoCuatroCandidatosFallo');
const dificilproblemaUnopasoCuatroDistancias = require('./dificil/problemaUno/pasoCuatroDistancias');
const dificilproblemaUnopasoCuatroDistanciasFallo = require('./dificil/problemaUno/pasoCuatroDistanciasFallo');
const enunciado = require('./explicaciones/enunciado');
const passwordHandlerWhenStart = require('./passwordHandlerWhenStart');
const defaultAfterLaunch = require('./defaultAfterLaunch');
const rememberProgress = require('./rememberProgress');
const starNewProgress = require('./starNewProgress');
const changePassword = require('./changePassword');
const needPassword = require('./needPassword');
const resolveProblemHandler = require('./resolveProblemHandler');
const levelHard = require('./levelHard');
const levelMedium = require('./levelMedium');


module.exports = {
    LaunchRequestHandler,
    HelpIntentHandler,
    ErrorHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    IntentReflectorHandler,
    silenciarIntent,
    medioproblemaUnopasoDosCandidatos,
    medioproblemaUnopasoDosCandidatosFallo,
    medioproblemaUnopasoDosDistancias,
    medioproblemaUnopasoDosDistanciasFallo,
    medioproblemaUnopasoDosNodo,
    medioproblemaUnopasoDosNodoFallo,
    medioproblemaUnopasoInicioCandidatos,
    medioproblemaUnopasoInicioCandidatosFallo,
    medioproblemaUnopasoInicioDistancias,
    medioproblemaUnopasoInicioDistanciasFallo,
    medioproblemaUnopasoTresCandidatos,
    medioproblemaUnopasoTresCandidatosFallo,
    medioproblemaUnopasoTresDistancias,
    medioproblemaUnopasoTresDistanciasFallo,
    medioproblemaUnopasoTresNodo,
    medioproblemaUnopasoTresNodoFallo,
    medioproblemaUnopasoUnoCandidatos,
    medioproblemaUnopasoUnoCandidatosFallo,
    medioproblemaUnopasoUnoDistancias,
    medioproblemaUnopasoUnoDistanciasFallo,
    medioproblemaUnopasoUnoNodo,
    medioproblemaUnopasoUnoNodoFallo,
    medioproblemaDospasoDosCandidatos,
    medioproblemaDospasoDosCandidatosFallo,
    medioproblemaDospasoDosDistancias,
    medioproblemaDospasoDosDistanciasFallo,
    medioproblemaDospasoDosNodo,
    medioproblemaDospasoDosNodoFallo,
    medioproblemaDospasoInicioCandidatos,
    medioproblemaDospasoInicioCandidatosFallo,
    medioproblemaDospasoInicioDistancias,
    medioproblemaDospasoInicioDistanciasFallo,
    medioproblemaDospasoTresCandidatos,
    medioproblemaDospasoTresCandidatosFallo,
    medioproblemaDospasoTresDistancias,
    medioproblemaDospasoTresDistanciasFallo,
    medioproblemaDospasoTresNodo,
    medioproblemaDospasoTresNodoFallo,
    medioproblemaDospasoUnoCandidatos,
    medioproblemaDospasoUnoCandidatosFallo,
    medioproblemaDospasoUnoDistancias,
    medioproblemaDospasoUnoDistanciasFallo,
    medioproblemaDospasoUnoNodo,
    medioproblemaDospasoUnoNodoFallo,
    dificilproblemaUnopasoDosCandidatos,
    dificilproblemaUnopasoDosCandidatosFallo,
    dificilproblemaUnopasoDosDistancias,
    dificilproblemaUnopasoDosDistanciasFallo,
    dificilproblemaUnopasoDosNodo,
    dificilproblemaUnopasoDosNodoFallo,
    dificilproblemaUnopasoInicioCandidatos,
    dificilproblemaUnopasoInicioCandidatosFallo,
    dificilproblemaUnopasoInicioDistancias,
    dificilproblemaUnopasoInicioDistanciasFallo,
    dificilproblemaUnopasoTresCandidatos,
    dificilproblemaUnopasoTresCandidatosFallo,
    dificilproblemaUnopasoTresDistancias,
    dificilproblemaUnopasoTresDistanciasFallo,
    dificilproblemaUnopasoTresNodo,
    dificilproblemaUnopasoTresNodoFallo,
    dificilproblemaUnopasoUnoCandidatos,
    dificilproblemaUnopasoUnoCandidatosFallo,
    dificilproblemaUnopasoUnoDistancias,
    dificilproblemaUnopasoUnoDistanciasFallo,
    dificilproblemaUnopasoUnoNodo,
    dificilproblemaUnopasoUnoNodoFallo,
    dificilproblemaUnopasoCuatroNodo,
    dificilproblemaUnopasoCuatroNodoFallo,
    dificilproblemaUnopasoCuatroCandidatos,
    dificilproblemaUnopasoCuatroCandidatosFallo,
    dificilproblemaUnopasoCuatroDistancias,
    dificilproblemaUnopasoCuatroDistanciasFallo,
    algoritmos,
    creditos,
    pasoCuatro,
    pasoDos1,
    pasoDos2,
    pasoInicio1,
    pasoInicio2,
    pasoInicio3,
    pasoTres1,
    pasoTres2,
    pasoUno1,
    pasoUno2,
    enunciado,
    levelMedium,
    levelHard,
    resolveProblemHandler,
    passwordHandlerWhenStart,
    defaultAfterLaunch,
    rememberProgress,
    starNewProgress,
    changePassword,
    needPassword
};
