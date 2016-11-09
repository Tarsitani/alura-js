

//funcção que recebe um array e um comportamento (outra função) como parametros, para percorrer o array e aplicar o comportamento necessário apra cada posição desse array

function percorreArray(arrayTrs, comportamento){

    for(var i = 0; i <= (arrayTrs.length - 1); i++){

        var pacienteAtual = arrayTrs[i];
        comportamento(pacienteAtual);

    }

}