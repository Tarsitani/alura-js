


// var peso = 80.0;
// var altura = 1.86;

//DOM, document object model: When an HTML document is loaded into a web browser, it becomes a document object.
// var tdPeso = document.getElementById('peso-1'); //pega do documento HTML o elemento inteiro que possui o id='peso-1'
// var tdAltura = document.getElementById('altura-1');

//objeto
// var paciente = {'peso' : tdPeso.textContent, 'altura' : tdAltura.textContent}; //com suas chaves
//textContent pega apenas o texto contido no elemento

//funcão global
//function calculaIMC(pacienteAtual){} ou var calculaIMC = function(){}


function montaPaciente(pacienteTr){
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
        var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
        var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

        var paciente = {
            nome: tdNome.textContent,
            peso: tdPeso.textContent,
            altura: tdAltura.textContent,
            pegaIMC: function(){ //declaradando a função dentro do objeto não é necessario passar nada como referencia pra ele. É possível acessar suas informações com o this, referenciando a si mesmo
                if(this.altura != 0){

                    var imc = this.peso / (this.altura * this.altura); //23.12406058503873
                    return imc;

                } else { alert("Altura = 0. Favor colocar um valor válido!"); }
            }
        };

        return paciente;
}

var trsPacientes = document.getElementsByClassName('paciente');//array de trs

percorreArray(trsPacientes, function ImprimeEModificaTdDeIMC(pacienteTr){


    var paciente = montaPaciente(pacienteTr);

    var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];

    var imc = paciente.pegaIMC();
    tdImc.textContent = imc;


    console.log(imc);

});

var botao = document.getElementsById("calcula-imcs");
