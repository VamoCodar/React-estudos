import React from 'react'

const Produto = ({ data: { nome, preco } }) => {
	console.log(nome, preco);

	return (
		<div>
			<p>Nome: {nome}</p>
			<p>Preço: {preco}</p>
		</div>
	)
}

export default Produto
