let amigo = [];

function adicionarAmigos() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value;

    //Se o campo de texto estiver vazio
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome válido!');
        return;  //Usando o return para sair da condição
}

//Para adicionar o nome a lista
    adicionarAmigos.push(nomeAmigo);

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = listaAmigos.join(', ')
    amigoInput.value = '';
    mostrarAmigosNaTela();
}

function mostrarAmigosNaTela() {
    let listaDeAmigosElemento = document.getElementById('listaAmigos');
    listaDeAmigosElemento.innerHTML = '';

    //Loop para percorrer a lista 'amigos'
    for (let i = 0; i < amigos.length; i++) {
        let itemDeLista = document.createElement('li');
        itemDeLista.textContent = amigos[i];
        listaDeAmigosElemento.appendChild(itemDeLista);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para fazer o sorteio!');
        return
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoElenebto = document.getElementById('resultado');
    resultadoElemento.innerHTML = 'O amigo sorteado foi:' + amigoSorteado;

}
