const findShortestPath = (graph, startNode, endNode) => {

    //usar um objeto para calcular o grafo com o PoP inicial
	let distances = {};
	distances[endNode] = "Infinity";
	distances = Object.assign(distances, graph[startNode]);

    //calculo do grafo usando um hash object
	let parents = { endNode: null };
	for (let child in graph[startNode]) {
		parents[child] = startNode;
	}	

    //array para guardar todos os PoP visitados
	let visited = [];

    //achar o PoP mais próximo do ultimo PoP adicionado ao "visited"
	let node = distanceNode(distances, visited);

    //para esse PoP:
	while (node) {
        //recupera a distância e os seus enlaces
		let distance = distances[node];
		let children = graph[node];

        //para cada enlace presente no nó pesquisado
		for (let child in children) {
            //ter certeza que o enlace não é o PoP inicial
			if (String(child) === String(startNode)) {
				continue;
			} else {
                //salvar a distância no array principal
				let newdistance = distance + children[child];
				if (!distances[child] || distances[child] > newdistance) {
					distances[child] = newdistance;
					parents[child] = node;
				}
			}
		}
        //enviar o PoP ao arrat Push
		visited.push(node);

        //continuar com o algoritmo até achar o PoP final
		node = distanceNode(distances, visited);
	}

    //guardar o menor caminho em um array para impressão
	let shortestPath = [endNode];
	let parent = parents[endNode];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();

    //variavel com o resultado final
	let results = {
		"A menor distância é": distances[endNode],
		"O menor caminho é": shortestPath.join('  →  '),
	};

	return results;
};


//função para achar o menor caminho entre PoP
function distanceNode(distances, visited) {
    //criação de variavel de controle
    let shortest = null;

    //para cada PoP, comparar todos os caminhos para menor caminho e guardar o caminho na variável de controle 
    for (let node in distances) {
        let currentIsShortest =
            shortest === null || distances[node] < distances[shortest];
        if (currentIsShortest && !visited.includes(node)) {
            shortest = node;
        }
    }
    return shortest;
}

//métricas do projeto base
let graphA = {
    "POA" : {"FLO":1, "BLU":1},
    "FLO" : {"BLU":1, "CUR":1, "RJO":1, "POA":1},
    "BLU" : {"CUR":1, "POA":1, "FLO":1},
    "CUR" : {"LON":1, "SPO":1, "FLO":1, "BLU":1},
    "LON" : {"SPO":1, "BAU":1, "CUR":1},
    "SPO" : {"RJO":1, "CMP":1, "SJC":1, "CUR":1, "LON":1},
    "SJC" : {"CMP":1, "SPO":1, "RJO":1, "BHO":1},
    "RJO" : {"SJC":1, "BHO":1, "SLV":1, "FLO":1, "SPO":1},
    "BHO" : {"SJC":1, "BSB":1, "RJO":1},
    "CMP" : {"BAU":1, "RBP":1, "SPO":1, "SJC":1},
    "RBP" : {"BSB":1, "CMP":1},
    "BAU" : {"CPG":1, "CMP":1, "LON":1},
    "CPG" : {"CUI":1, "BAU":1},
    "CUI" : {"MAN":1, "CPG":1},
    "MAN" : {"BEL":1, "CUI":1, "BSB":1},
    "BEL" : {"NTL":1, "MAN":1},
    "BSB" : {"MAN":1, "NTL":1, "BHO":1, "RBP":1},
    "NTL" : {"REC":1, "BEL":1, "BSB":1, "SLV":1},
    "REC" : {"SLV":1, "NTL":1},
    "SLV" : {"NTL":1, "RJO":1, "REC":1} 
        };

let graphB = {
    "POA" : {"FLO":6, "BLU":7},
    "FLO" : {"BLU":1, "CUR":2, "RJO":12, "POA":6},
    "BLU" : {"CUR":2, "POA":7, "FLO":1},
    "CUR" : {"LON":6, "SPO":5, "FLO":2, "BLU":2},
    "LON" : {"SPO":7, "BAU":3, "CUR":6},
    "SPO" : {"RJO":5, "CMP":1, "SJC":2, "CUR":5, "LON":7},
    "SJC" : {"CMP":2, "SPO":2, "RJO":3, "BHO":7},
    "RJO" : {"SJC":3, "BHO":7, "SLV":20, "FLO":12, "SPO":5},
    "BHO" : {"SJC":7, "BSB":9, "RJO":7},
    "CMP" : {"BAU":3, "RBP":2, "SPO":1, "SJC":2},
    "RBP" : {"BSB":8, "CMP":2},
    "BAU" : {"CPG":10, "CMP":3, "LON":3},
    "CPG" : {"CUI":8, "BAU":10},
    "CUI" : {"MAN":20, "CPG":8},
    "MAN" : {"BEL":18, "CUI":20, "BSB":22},
    "BEL" : {"NTL":21, "MAN":18},
    "BSB" : {"MAN":22, "NTL":22, "BHO":9, "RBP":8},
    "NTL" : {"REC":4, "BEL":21, "BSB":22, "SLV":15},
    "REC" : {"SLV":8, "NTL":4},
    "SLV" : {"NTL":15, "RJO":20, "REC":8} 
}

let graphC = {
    "POA" : {"FLO":2, "BLU":2},
    "FLO" : {"BLU":3, "CUR":5, "RJO":10, "POA":2},
    "BLU" : {"CUR":5, "POA":2, "FLO":3},
    "CUR" : {"LON":2, "SPO":10, "FLO":5, "BLU":5},
    "LON" : {"SPO":2, "BAU":2, "CUR":2},
    "SPO" : {"RJO":15, "CMP":7, "SJC":16, "CUR":10, "LON":2},
    "SJC" : {"CMP":10, "SPO":16, "RJO":10, "BHO":8},
    "RJO" : {"SJC":10, "BHO":6, "SLV":6, "FLO":10, "SPO":15},
    "BHO" : {"SJC":8, "BSB":6, "RJO":6},
    "CMP" : {"BAU":6, "RBP":4, "SPO":7, "SJC":10},
    "RBP" : {"BSB":4, "CMP":4},
    "BAU" : {"CPG":3, "CMP":6, "LON":2},
    "CPG" : {"CUI":2, "BAU":3},
    "CUI" : {"MAN":3, "CPG":2},
    "MAN" : {"BEL":2, "CUI":3, "BSB":6},
    "BEL" : {"NTL":3, "MAN":2},
    "BSB" : {"MAN":6, "NTL":7, "BHO":6, "RBP":4},
    "NTL" : {"REC":3, "BEL":3, "BSB":7, "SLV":4},
    "REC" : {"SLV":5, "NTL":3},
    "SLV" : {"NTL":4, "RJO":6, "REC":5} 
}
