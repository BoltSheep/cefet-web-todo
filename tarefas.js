const tarefas = [{
    nome: 'Fazer dever de Kotlin',
    categoria: 'estudos',
    realizada: false
}, {
    nome: 'Concertar DSlite',
    categoria: 'lazer',
    realizada: true
}];

function main() {
    tarefas.forEach(element => insereTarefaNaPagina(element))
}

function insereTarefaNaPagina(objeto) {
    let listaEl = document.querySelector('#lista-tarefas');
    const li = document.createElement('li');
    li.innerHTML = objeto.nome;
    li.classList.add('item-tarefa');
    if(objeto.realizada){
        li.classList.add('marcado')
    }
    li.classList.add(`categoria-${objeto.categoria}`)
    listaEl.appendChild(li);
}

function criarNovaTarefa() {
    const novoNome = document.querySelector('#nova-tarefa-nome');
    const novaCategoria = document.querySelector('#nova-tarefa-categoria');

    const objeto = new Object();
    objeto.nome = novoNome.value
    objeto.categoria = novaCategoria.value 
    objeto.realizada = false
    insereTarefaNaPagina(objeto)
    novoNome.value = '';
    novoNome.focus();
}

function filtro() {
    const novoFiltro = document.querySelector('#filtro-de-categoria');
    let listaEl = document.querySelector('#lista-tarefas');
    if (novoFiltro.value !== ""){
        Object.keys(listaEl.children).forEach(element => {
            if (element.categoria !== novoFiltro.value){
                element.classList.add('retido-no-filtro');
            } else {
                element.classList.remove('retido-no-filtro');
            }
        })
    }
}

function clickMarcado(e) { // opcional 5
    if (e.classList.contains('marcado')){
        e.classList.remove('marcado');
    } else {
        e.classList.add('marcado');
    }
}

function funcaoEnter(evento){
    console.log(evento)
}

main();