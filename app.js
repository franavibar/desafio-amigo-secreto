let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("nomeAmigo");
  let nome = input.value.trim(); 

  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;// para a função aqui
  }

  amigos.push(nome);
  input.value = "";
  mostrarLista();
}

function mostrarLista() {

  let lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
 
    let item = document.createElement("li");

    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear.");
    return; // para a função aqui
  }

  let sorteado = Math.floor(Math.random() * amigos.length);

  let resultado = document.getElementById("resultado");
  resultado.textContent = "O amigo secreto é: " + amigos[sorteado];
}
