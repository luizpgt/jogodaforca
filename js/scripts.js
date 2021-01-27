//timer porque e legal saber a hora do momento
//timer = function () {}
function timer() {
    let d = new Date();
    var htmltimer = "<p>Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "</p>";
    document.getElementById("relogio").innerHTML = htmltimer;
    setTimeout('timer()', 500);
}
//recebendo input do usuario
var form = document.getElementById('form');
var word = document.getElementById('word')

form.addEventListener('submit', function (e) {
    if (word.value == "") {
        var msginvalid = `<p>Por favor, insira uma palavra!</p>`;
        document.getElementById('wordprint').innerHTML = msginvalid;
    } else {
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
//colocar a palavra entrada dentro de um array /medir esse array e mostar a array.length
function armazen() {
    var word = sessionStorage.getItem("word");
    sessionStorage.setItem("wordlength", sessionStorage.getItem("word").length);
    var wordarray = [];
    for (let index = 0; index < word.length; index++) {
        wordarray.push(word.substr(index, 1));
        console.log(wordarray[index]);
        //console.log(word.substr(index, 1));
    }
    sessionStorage.setItem("wordarray", wordarray);
    //console.log(word.substr(1));
}
//exibindo a palavra na tela 
function showword() {
    var htmlshowspace = "";
    for (let index = 0; index < sessionStorage.getItem("wordlength"); index++) {
        //console.log(index);
        //console.log('x');
        var htmlshowpart = `${sessionStorage.getItem("word").substr(index, 1).toUpperCase()}&nbsp;&nbsp;&nbsp;`
        htmlshowspace += htmlshowpart;
        console.log(sessionStorage.getItem("word").substr(index, 1));
    }
    document.getElementById('wordspace').innerHTML = htmlshowspace;

    //var htmlshowword = `< p > ${ sessionStorage.getItem("wordarray") }</p > `
    //document.getElementById('wordspace').innerHTML = htmlshowword;
}

//exibindo somente x ao inves da palavra
function showspaces() {
    var htmlshowspaces = "";
    for (let index = 0; index < sessionStorage.getItem("wordlength"); index++) {
        var htmlshow = "&nbsp;x";
        htmlshowspaces += htmlshow;
    }
    document.getElementById('wordspace').innerHTML = htmlshowspaces;
}

//funcao inutil
function mostrar() {

    console.log(sessionStorage.getItem("wordarray"));
    console.log(sessionStorage.getItem("wordarray").length)
}



timer();
armazen();
mostrar();
//showword();
showspaces();