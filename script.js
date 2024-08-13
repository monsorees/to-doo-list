const btnAdd = document.querySelector('.btn-add');
const lista = document.querySelector('.list');
const input = document.querySelector('.input');

function btnAd() {
  btnAdd.addEventListener('click', () => {
  //  criando os botões e adionando ao lado do texto da lista
  const li = document.createElement('li');
  const btnRemove = document.createElement('button');
  const btnConcluido = document.createElement('button');
  li.textContent =  input.value;
  li.appendChild(btnRemove);
  li.appendChild(btnConcluido);
  lista.appendChild(li);
  //  setando atributos para estilizar os botões no css
  btnRemove.setAttribute('class', "remove");
  btnConcluido.setAttribute('class', 'concluido');
  btnRemov(btnRemove)
  btnConcluid(btnConcluido)
  })}

function btnRemov(btnRemove) {
  //  aplicando os eventos aos botões
  btnRemove.addEventListener('click', (e) => {
    btnRemove.parentElement.remove();
  })}

function btnConcluid(btnConcluido) {
  btnConcluido.addEventListener('click', (e) => {
    const element = e.target;
    element.parentElement.style.textDecoration = 'line-through';
  })}

  btnAd()