
/* SAUDAÇÃO DINÂMICA */
const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

if (hora >= 5 && hora < 12) {
    saudacao.textContent = "Bom dia! Seja bem-vindo(a).";
} else if (hora >= 12 && hora < 18) {
    saudacao.textContent = "Boa tarde! Seja bem-vindo(a).";
} else {
    saudacao.textContent = "Boa noite! Seja bem-vindo(a).";
}

/* MENU HAMBÚRGUER */
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

function fecharMenu() {
    menu.classList.remove("aberto");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", function () {
    const estaAberto = menu.classList.toggle("aberto");

    menuToggle.setAttribute("aria-expanded", estaAberto);
    menuToggle.setAttribute(
        "aria-label",
        estaAberto ? "Fechar menu" : "Abrir menu"
    );
});

// Fecha o menu depois de clicar em um link.
menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
});

// Fecha o menu quando a tecla Escape é pressionada.
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharMenu();
        menuToggle.focus();
    }
});

/* MODO CLARO E ESCURO */
const temaToggle = document.getElementById("tema-toggle");

temaToggle.addEventListener("click", function () {
    const modoClaro = document.body.classList.toggle("tema-claro");

    temaToggle.setAttribute("aria-pressed", modoClaro);

    if (modoClaro) {
        temaToggle.innerHTML = '<span aria-hidden="true">☀</span>';
        temaToggle.setAttribute("aria-label", "Ativar modo escuro");
    } else {
        temaToggle.innerHTML = '<span aria-hidden="true">☾</span>';
        temaToggle.setAttribute("aria-label", "Ativar modo claro");
    }
});

/* ANO AUTOMÁTICO NO RODAPÉ */
const ano = document.getElementById("ano");
ano.textContent = new Date().getFullYear();

/* VALIDAÇÃO DO FORMULÁRIO */
const formulario = document.getElementById("formulario");
const retorno = document.getElementById("retorno-formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Verifica se os campos e o consentimento são válidos.
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Impede o envio de campos compostos apenas por espaços.
    if (!nome || !mensagem) {
        retorno.textContent =
            "Preencha seu nome e sua mensagem corretamente.";
        retorno.style.color = "#e05252";
        return;
    }

    // O formulário é demonstrativo e não envia dados para um servidor.
    retorno.textContent =
        "Validação concluída! Este formulário ainda não envia mensagens.";
    retorno.style.color = "#48c78e";
});
