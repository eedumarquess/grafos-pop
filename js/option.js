        //SCRIPT COM RECUPERAÇÃO DOS INPUTS EM VARIAVEIS

        //recuperação de todos os inputs presentes no html
        let optionList_0 = document.getElementById('pop_mode0');
        let optionList_1 = document.getElementById('pop_mode1');
        let optionList_2 = document.getElementById('pop_mode2');
        let optionList_3 = document.getElementById('pop_mode3');
        let optionList_4 = document.getElementById('pop_mode4');
        let optionList_0_1 = document.getElementById('pop_mode0_1');

        let optionList_enlaces = document.getElementById('pop_mode2_enlaces');
    
        let inputPop = document.getElementById("popInput");
        let inputPopDatalist = document.getElementById("inputPop")
        let inputMetricaA = document.getElementById("aInput");
        let inputMetricaB = document.getElementById("bInput");
        let inputMetricaC = document.getElementById("cInput");

        //atualizar todos os selects com os PoP base
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
        