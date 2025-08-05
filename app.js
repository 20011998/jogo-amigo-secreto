let amigo [];

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
}
