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
	novaTarefa.appendChild(ConcluirBtn());
	listaTarefasUl.appendChild(novaTarefa);

	novaTarefaInput.value = "";
}

const ConcluirBtn = () => {
	const concluirBtn = document.createElement("button");
	concluirBtn.classList.add("check-button");
	concluirBtn.innerText = "Concluir";
	
	concluirBtn.addEventListener("click", (event) => {
		const tarefaConcluida = event.currentTarget.parentElement;
		tarefaConcluida.classList.toggle("done");
	});

	return concluirBtn;
};
