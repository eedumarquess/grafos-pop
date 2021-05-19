//SCRIPT PARA FUNÇÕES DE INSERÇÃO, EXCLUSÃO E CRIAÇÃO.

//função para recuperar o PoP selecionado nos selects e fazer o algoritmo presente no arquivo main.js
function setPoP(option1, option2) {
    //variavel para recuperar a métrica selecionada
    let checkNull = document.querySelector("input[type='radio']:checked");

    //verificar qual métrica será usada no caminho
    if (document.getElementById("metricaA").checked) {
        graphValue = graphA;
    }

    if (document.getElementById("metricaB").checked) {
        graphValue = graphB;
    }

    if (document.getElementById("metricaC").checked) {
        graphValue = graphC;
    }

    //se não selecionou nenhuma métrica, sistema alerta e não prossegue com a função
    if (!checkNull) {
        alert("Você precisa selecionar uma métrica!")
    }

    //mandar pops + metricas selecionadas, recebendo o resultado limpo para print
    var result = Object.values(findShortestPath(graphValue, option1.value, option2.value))

    let menorDistancia = (result.slice(0, 1).toString())
    let menorCaminho = (result.slice(1, 2).toString())

    let distanciaHTML = document.getElementById("menorDistancia")
    let caminhoHTML = document.getElementById("menorCaminho")

    //seleção do elemento para impressão
    distanciaHTML.innerHTML = menorDistancia
    caminhoHTML.innerHTML = menorCaminho
}

//função para inserir um PoP na métrica
function insertPoP(pop, metricaA, metricaB, metricaC) {
    //recuperar select que o usuário digitou junto com sua função
    let popEnlace = optionList_0_1.value;

    //verificar se todos os campos estão preenchidos, caso sim, continuar com a função
    if(!pop.value || !metricaA.value || !metricaB.value || !metricaC.value ) {
        alert('Campos em branco!')
    } else {
        //recuperar o pop + valor enviado pelo usuário e inserir nas métricas
        graphA[pop.value] = `${pop.value}`
        graphA[pop.value] = { [popEnlace] : parseInt(metricaA.value) }

        graphB[pop.value] = `${pop.value}`
        graphB[pop.value] = { [popEnlace] : parseInt(metricaB.value) }

        graphC[pop.value] = `${pop.value}`
        graphC[pop.value] = { [popEnlace] : parseInt(metricaC.value) }

        //depois de inserido, atualizar TODOS os SELECT com o novo PoP selecionado
        Object.keys(graphA).forEach(element => {
            var el = document.createElement("option")
            el.textContent = element;
            el.value = element;
            inputPopDatalist.append(el)
        })

        Object.keys(graphA).forEach(element => {
            var el = document.createElement("option")
            el.textContent = element;
            el.value = element;
            optionList_0_1.append(el)
        })

        Object.keys(graphA).forEach(element => {
            var el = document.createElement("option")
            el.textContent = element;
            el.value = element;
            optionList_0.append(el)
        })

        Object.keys(graphA).forEach(element => {
            var el = document.createElement("option")
            el.textContent = element;
            el.value = element;
            optionList_1.append(el)
        })

        Object.keys(graphA).forEach(element => {
            var el = document.createElement("option")
            el.textContent = element;
            el.value = element;
            optionList_2.append(el)
        })

        Object.keys(graphA).forEach(element => {
            var el = document.createElement("option")
            el.textContent = element;
            el.value = element;
            optionList_3.append(el)
        })

        Object.keys(graphA).forEach(element => {
            var el = document.createElement("option")
            el.textContent = element;
            el.value = element;
            optionList_4.append(el)
        })

        alert(`O Ponto ${pop.value} foi adicionado!`)
        
    }
}


//função de exclusão de um PoP
function popDelete(pop) {
    let value = pop.value

    graphA[value] = undefined;
    graphB[value] = undefined;
    graphC[value] = undefined;

    alert(`O PoP "${value}" foi deletado`)
}

//função para falha de algum PoP
function popFault(pop) {
    let value = pop.value

    graphA[value] = undefined;
    graphB[value] = undefined;
    graphC[value] = undefined;

    alert(`O PoP "${value}" está com falha!`)
}

//função para encontrar o enlace de um PoP
function enlaceFind(pop) {
    //aparecer div com as métricas daquele PoP quando clicar no botão
    document.getElementById("divFind").style.visibility = "visible"

    //mostrar em um select apenas os enlaces presentes naquele PoP
    Object.keys(graphA[pop.value]).forEach(element => {
        var el = document.createElement("option")
        el.textContent = element;
        el.value = element;
        optionList_enlaces.append(el)
    })
}

//função para falha em algum enlace
function enlaceFault(popCity, popEnlace) {
    //recuperar os PoPs e enlaces escolhidos pelo usuário
    let valueCity = popCity.value;
    let valueEnlace = popEnlace.value;

    //fazer com que o enlace não tenha valor, para ser excluído do calculo
    graphA[valueCity][valueEnlace] = undefined
    graphB[valueCity][valueEnlace] = undefined
    graphC[valueCity][valueEnlace] = undefined

    alert(`O Enlace "${valueCity}" → "${valueEnlace}" está com falha!`)
}

