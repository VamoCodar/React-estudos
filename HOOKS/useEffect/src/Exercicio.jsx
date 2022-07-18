import React from 'react'
import Produto from './Produto'

const Exercicio = () => {
	const [data, setData] = React.useState(false)
	const [produto, setProduto] = React.useState(() => {
		const storage = localStorage.getItem("produto")
		if (storage) return storage
		else return null
	})

	// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
	// https://ranekapi.origamid.dev/json/api/produto/notebook
	// https://ranekapi.origamid.dev/json/api/produto/smartphone
	// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
	// Defina o produto clicado como uma preferência do usuário no localStorage
	// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

	const getData = async (id) => {
		try {
			const request = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
			const json = await request.json()
			return json

		}
		catch (er) {
			console.log(er);
			alert("Algo de Elado")

		}
	}


	const handleRequest = async (produto) => {
		const data = await getData(produto)
		setData(await data)
	}

	React.useEffect(() => {
		if (produto !== null) {
			localStorage.setItem("produto", produto)
			handleRequest(produto)
		}

	}, [produto])

	return (
		<>
			<div className='flex gap-3'>
				<button onClick={(e) => setProduto(e.currentTarget.innerText)}>notebook</button>
				<button onClick={(e) => setProduto(e.currentTarget.innerText)}>smartphone</button>
			</div>
			{data && <Produto data={data} />}

		</>

	)
}

export default Exercicio
