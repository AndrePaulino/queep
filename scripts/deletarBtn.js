const DeletarBtn = () => {
	const deletarBtn = document.createElement("button");
	deletarBtn.innerText = "Deletar";

	deletarBtn.addEventListener("click", (event) => {
		const tarefaDeletada = event.currentTarget.parentElement;
		tarefaDeletada.remove();
	});

	return deletarBtn;
};

export default DeletarBtn;
