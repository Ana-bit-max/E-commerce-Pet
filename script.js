// =========================
// CARRINHO
// =========================

const botoes = document.querySelectorAll(".btn-adicionar");
const listaCarrinho = document.getElementById("lista-carrinho");
const totalElemento = document.getElementById("total");

let total = 0;

botoes.forEach(botao => {
  botao.addEventListener("click", () => {

    const nome = botao.getAttribute("data-nome");
    const preco = parseFloat(botao.getAttribute("data-preco"));

    const item = document.createElement("li");
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

    listaCarrinho.appendChild(item);

    total += preco;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

    // ✨ Animação
    botao.classList.add("botao-animado");
    setTimeout(() => {
      botao.classList.remove("botao-animado");
    }, 300);

  });
});


// =========================
// MENU HAMBURGUER
// =========================

const toggle = document.getElementById("menu-toggle");
const headerDireita = document.querySelector(".header-direita");

toggle.addEventListener("click", () => {
  headerDireita.classList.toggle("active");
});

