//timer porque e legal saber a hora do momento
//timer = function () {}
function timer() {
    let d = new Date();
    var htmltimer = "<p>Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</p>";
    document.getElementById("relogio").innerHTML = htmltimer;
    setTimeout('timer()', 500);
}
timer();

//pegar uma entrada de palavra do user
var form = document.getElementById('form');
var word = document.getElementById('word')

form.addEventListener('submit', function (e) {
    if (word.value == "") {
        var msginvalid = `<p>Por favor, insira uma palavra!</p>`;
        document.getElementById('wordprint').innerHTML = msginvalid;
    }else {
        sessionStorage.setItem("word", word.value);
        var htmlword = `<p>Palavra: <b>${sessionStorage.getItem("word")}</b> salva!</p>`
        document.getElementById('wordprint').innerHTML = htmlword;
    }
})

//spoiler para mostrar a palavra escolhida pelo usuario
function spoiler() {
    //estilos do botao
    if (document.getElementById('spoilerbutton').value == "mostrar") {
        document.getElementById('spoilerbutton').value = "ocultar";
    } else {
        document.getElementById('spoilerbutton').value = "mostrar";
    }
    //valor do spoiler que sera mostrado
    if (sessionStorage.getItem("word") != null) {
        var printspoiler = `<p>Word: ${sessionStorage.getItem("word")}</p>`
        document.getElementById('spoiler').innerHTML = printspoiler;
    }
    //mostrar ou nao o spoiler
    if (document.getElementById('spoiler').style.display == 'none') {
        document.getElementById('spoiler').style.display = ''
    } else {
        document.getElementById('spoiler').style.display = 'none'
    }


}
//colocar a entrada em um array
//medir esse array e mostar a array.length


/*

var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(campo.value);

    // impede o envio do form
    e.preventDefault();
});




var square = function (numero) {

    return numero * numero

};
square(5);


timer();


*/