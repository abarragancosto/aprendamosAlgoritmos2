

const dificil = ["problema1"];
const medio = ["problema1", "problema2"];


const problemDetails = {
	"dificil": {
		"problema1": {
			"name": "problemaUno",
			"dataTableImageSource": "https://i.ibb.co/Jk6wFZr/paso-Inicio-Nodo-P3.png",
			"graphImageSource": "https://i.ibb.co/PWdcJKs/grafoP3.png",
			"text": "Este es el enunciado del problema de nivel dificil. ¿cual sería el conjunto de candidatos para el paso de inicialización de este nodo? Para dar una respuesta debes decir la solución es, seguida de los nodos de solución"
		}
	},
	"medio": {
		"problema1": {
			"name": "problemaUno",
			"dataTableImageSource": "https://i.ibb.co/KsBMcpn/inicio-Nodo.png",
			"graphImageSource": "https://i.ibb.co/xG0Pb4d/enunciado.png",
			"text": "Este es el enunciado del problema de nivel medio. ¿cual sería el conjunto de candidatos para el paso de inicialización de este nodo? Para dar una respuesta debes decir la solución es, seguida de los nodos de solución"
		},
		"problema2": {
			"name": "problemaDos",
			"dataTableImageSource": "https://i.ibb.co/48MScqb/paso-Inicio-Nodo-P2.png",
			"graphImageSource": "https://i.ibb.co/qs3B61w/grafo-dirigido.png",
			"text": "Este es el enunciado del problema de nivel medio. ¿cual sería el conjunto de candidatos para el paso de inicialización de este nodo? Para dar una respuesta debes decir la solución es, seguida de los nodos de solución"
		}
	}
}


const problems = {
	dificil,
	medio
};

module.exports = function (level) {


	const random = Math.floor(Math.random() * problems[level].length);

	return problemDetails[level][problems[level][random]];
};


