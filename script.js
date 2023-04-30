// e - enter
// o = ober
// i = imes 
// a= ai
//u = ufat

function encriptado(){

    var texto = document.getElementById("input-texto").value.toLowerCase();

var txtCifrado = texto.replace (/e/igm, "enter");
var txtCifrado = txtCifrado.replace(/o/igm,"ober");
var txtCifrado = txtCifrado.replace(/i/igm,"imes");
var txtCifrado = txtCifrado.replace(/a/igm,"ai");
var txtCifrado = txtCifrado.replace(/u/igm,"ufat");


document.getElementById("dibujo").style.display = "none";
document.getElementById("textmid").style.display = "none";
document.getElementById("textarea").innerHTML = txtCifrado;
document.getElementById("copiar").style.display = "show" ;
document.getElementById("copiar").style.display = "inherit" ;

}

function desencriptado(){

    var texto = document.getElementById("input-texto").value.toLowerCase();
    
    var txtCifrado = texto.replace (/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    
    
    document.getElementById("dibujo").style.display = "none";
    document.getElementById("textmid").style.display = "none";
    document.getElementById("textarea").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show" ;
    document.getElementById("copiar").style.display = "inherit" ;
    
    }

    function copiar(){

        var contenido = document.querySelector("textarea");
        contenido.select();
        document.execCommand("copy");
    }
