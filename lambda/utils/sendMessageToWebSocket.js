const WebSocket = require('ws');
const getAttribute = require('./getAttribute');
module.exports = function sendMessageToWebSocket(message, image1, image2,  handlerInput) {
	const password = getAttribute('password', handlerInput);
	const ws = new WebSocket('wss://k7ufl4i82h.execute-api.eu-west-3.amazonaws.com/Prod');

	const data = `{ \"message\": \"${message}\", \"password\": \"${password}\", \"image1\": \"${image1}\", \"image2\": \"${image2}\" }` ;

	ws.on('open', function open() {
		console.log('opened');
		const payload = {"message": "sendmessage", "data": data};
		ws.send(JSON.stringify(payload));
		ws.close()
	});

};



