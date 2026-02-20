const botoes = document.querySelectorAll (".btn-adicionar");
const listaCarrinho = document.getElementById("lista-carrinho");
const totalElemento = document.getElementById("total");

let total = 0;

botoes.forEach(botao => {
  botao.addEventListener("click", () => {

    const nome = botao.getAttribute("data-nome");
    const preco = parseFloat(botao.getAttribute("data-preco"));

    // Criar item da lista
    const item = document.createElement("li");
    item.innerHTML = `
      ${nome} - R$ ${preco.toFixed(2)}
    `;

    listaCarrinho.appendChild(item);

    // Atualizar total
    total += preco;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

  });
});
