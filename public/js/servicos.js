async function carregarServicos() {
	const lista = document.getElementById('lista-servicos');

	try {
		const resposta = await fetch('/api/servicos');

		if (!resposta.ok) {
			lista.innerHTML = '<li>Erro ao carregar serviços.</li>';
			return;
		}

		const servicos = await resposta.json();

		lista.innerHTML = '';

		if (servicos.length === 0) {
			lista.innerHTML = '<li>Nenhum serviço cadastrado.</li>';
			return;
		}

		servicos.forEach((servico) => {
			const item = document.createElement('li');

			item.textContent = `${servico.nome} - R$ ${servico.preco}`;

			lista.appendChild(item);
		});
	} catch (erro) {
		console.error(erro);
		lista.innerHTML = '<li>Erro de conexão com a API.</li>';
	}
}

carregarServicos();