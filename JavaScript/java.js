
let elemento = document.getElementById("titulo_01");
elemento.textContent = "Manipulação do DOM - JavaScript";

let classe = document.getElementsByClassName("tit-02");
classe[0].textContent = "Este texto foi alterado pela classe!";

let paragrafos = document.getElementsByTagName("p");
paragrafos[1].textContent = "Parágrafo alterado usando getElementsByTagName!";

let titulo = document.querySelector(".conteudo h2");
titulo.style.color = "blue";

let caixas = document.querySelectorAll(".caixa");

caixas[0].style.border = "2px solid blue";
caixas[1].style.border = "2px solid green";
caixas[2].style.border = "2px solid red";

let caixaTitulo = document.querySelector(".caixa h3");
caixaTitulo.innerHTML = "<strong>Caixa 1 - Alterada!</strong>";

let botaoPrincipal = document.getElementById("botaoPrincipal");

botaoPrincipal.addEventListener("click", function() {
    alert("Você clicou no botão principal!");
});

let botaoSecundario = document.getElementById("botaoSecundario");

botaoSecundario.addEventListener("click", function() {
    alert("Você clicou no botão secundário!");
});

let segundaDiv = document.querySelector(".segunda-div");

segundaDiv.addEventListener("click", function() {
    segundaDiv.classList.toggle("estilo");
});

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este parágrafo foi criado com JavaScript!";

segundaDiv.appendChild(novoParagrafo);

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let curso = document.getElementById("curso").value;
    let comentario = document.getElementById("comentario").value;

    alert(
        "Formulário enviado!\n\n" +
        "Nome: " + nome +
        "\nE-mail: " + email +
        "\nCurso: " + curso +
        "\nComentário: " + comentario
    );
});
