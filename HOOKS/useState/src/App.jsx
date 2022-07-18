import React from 'react'
import Produto from './Produto'
import './index.css'
import './App.css'


function App() {
  const [data, setData] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado


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


  const handleClick = async (e) => {
    const target = e.currentTarget
    const id = target.dataset.id

    setLoading(true)
    const response = await getData(id)
    setData(response)
    setTimeout(() => { setLoading(false) }, 300);

  }



  return (
    <div className="App ">

      <div className='flex gap-8'>
        <button onClick={handleClick} data-id="tablet">Tablet</button>
        <button onClick={handleClick} data-id="smartphone">Smartphone</button>
        <button onClick={handleClick} data-id="notebook">Notebook</button>
      </div>
      {loading && <p>Carregando...</p>}
      {!loading && data && <Produto data={data} />}



    </div>
  )


}

export default App
