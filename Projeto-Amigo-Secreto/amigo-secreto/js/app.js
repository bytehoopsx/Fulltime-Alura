let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    //caso não colocar nada no nome
    if(amigo.value == '') {
    alert('Informe o nome do seu amigo!');
    return;
    }
    //caso nomes iguais
    if(amigos.includes(amigo.value)) {
    alert('Nome do amigo já adicionado! Coloque Sobrenome ou algo que identifique ele(a).');
    return;
    }
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if (lista.textContent == '') {
    lista.textContent = amigo.value;
    } else {
    lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    //ao clicar no botão de reiniciar atualiza o site
    amigo.value = '';
    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    //se não adicionar 4 amigos dá alert
    if(amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos na sua lista!');
        return;
    }
    //função de embaralhar amigos
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
    sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
    } else {
    sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
    }
}

}

//excluir amigos ao clicar no nome
function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
//function att sorteio e lista do site
function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
    //cria um elemento de parágrafo para cada amigo
    let paragrafo = document.createElement('p');
    paragrafo.textContent = amigos[i];
       
    // Add de clique para excluir um amigo
    paragrafo.addEventListener('click', function() {
    excluirAmigo(i);
    });

    // Add parágrafo à lista
    lista.appendChild(paragrafo);
    }
}
//reinicia tudo
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}