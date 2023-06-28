const ConcluirBtn = () => {
	const concluirBtn = document.createElement("button");
	concluirBtn.classList.add("check-button");
	concluirBtn.innerText = "Concluir";

	concluirBtn.addEventListener("click", (event) => {
		const tarefaConcluida = event.target.parentElement;
		tarefaConcluida.classList.toggle("done");
	});

	return concluirBtn;
};

export default ConcluirBtn;
