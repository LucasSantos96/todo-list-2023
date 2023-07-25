const input = document.querySelector('.input-tarefa')
const button = document.querySelector('.button-adc')
const listaCompleta = document.querySelector('.lista')
let minhaListaDeItens = []


function adicionaraoInput() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false

    })
    input.value = ''
    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + `
        <li class="tarefas ${item.concluida && "feito"}">
          <img class="img img-check" src="imagem/check.png" alt="Check" onclick="concluirTarefa(${index})">
              <p contenteditable="true" >${item.tarefa}</p>
              <img class="img img-lixeira" src="imagem/lixeira.png" alt="lixeira" onclick="deletarItem(${index})" >
              </li>
              `
    })

    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}
function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefas()
}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)
    mostrarTarefas()
}
function recarregarTarefas() {
    const tarefasLocalStorage = localStorage.getItem('lista')
    if (tarefasLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasLocalStorage)  }
        mostrarTarefas()
  
}
recarregarTarefas()

button.addEventListener('click', adicionaraoInput)

