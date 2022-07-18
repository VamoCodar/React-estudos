import React from 'react'

const Produto = ({ data: { id, fotos, nome, preco, descricao } }) => {
	console.log(fotos);
	return (
		<ul className='flex-col gap-7'>
			<li className='flex gap-8'><span>ID :</span> <span>{id}</span></li>
			<li className='flex gap-8 h-24 my-5'><span>Fotos :</span> <img className='h-24 object-contain'   src={fotos[0]?.src} /></li>
			<li className='flex gap-8'><span>Nome :</span> <span> {nome}</span></li>
			<li className='flex gap-8'><span>Preco :</span> <span>{preco}</span> </li>
			<li className='flex gap-8'><span>Descricao :</span> <span>{descricao}</span> </li>
		</ul>
	)
}

export default Produto
