const novaTarefaBtn = document.querySelector(
	'[data-form-button="nova-tarefa"]'
);
const novaTarefaInput = document.querySelector(
	'[data-form-input="nova-tarefa"]'
);
const listaTarefasUl = document.querySelector('[data-list="tarefas"]');

novaTarefaBtn.addEventListener("click", novaTarefa);

function novaTarefa() {
	event.preventDefault();
	const novaTarefaTexto = novaTarefaInput.value;
	const novaTarefa = document.createElement("li");
	novaTarefa.classList.add("task");
	const novaTarefaConteudo = `<p class="content">${novaTarefaTexto}</p>`;

	novaTarefa.innerHTML = novaTarefaConteudo;
	listaTarefasUl.appendChild(novaTarefa);

	novaTarefaInput.value = "";
}
