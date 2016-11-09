// var table - document.getElementsByTagName("table")[0];

// var table = document.querySelectorAll("table"); //pega todos os elementos "table" e coloca em um array



var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){

    event.preventDefault(); //impede comportamento padrão

    var campoNome = document.querySelector("#campo-nome");
    var campoPeso = document.querySelector("#campo-peso");
    var campoAltura = document.querySelector("#campo-altura");


    var pacienteNovo = "<tr class='paciente'>"+
                        "<td class='info-nome'>"+ campoNome.value +"</td>"+
                        "<td class='info-peso' id='peso-1'>"+ campoPeso.value +"</td>"+
                        "<td class='info-altura' id='altura-1'>"+ campoAltura.value +"</td>"+
                        "<td class='info-imc' id='imc-1'>"+ campoPeso.value / (campoAltura.value*campoAltura.value) +"</td>"+
                    "</tr>";

    var tabela = document.querySelector("table"); //pega só o primeiro elemento
    tabela.innerHTML += pacienteNovo;//adiciona o elemento HTML com o .innerHTML

    campoNome.value = "";
    campoPeso.value = "";
    campoAltura.value = "";
});