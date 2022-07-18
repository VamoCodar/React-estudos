import React from 'react'
import './index.css'
import './App.css'
import Exercicio from './Exercicio';

/* https://pt-br.reactjs.org/docs/hooks-effect.html */

function App() {
  const [contar, setContar] = React.useState(0)
  console.log("Component renderizou");

  const handleClick = () => console.log("click");


  // useEffect nos deixa expressar diferentes tipos de efeitos 
  // colaterais depois que o componente renderiza.
  // Alguns efeitos podem requerer limpeza, então eles retornam uma função

  React.useEffect(() => {
    document.addEventListener("click", handleClick)
    console.log(contar, "UseEffect ocorreu"); // aqui o contar ja foi atualizado

    return () => { // LIMPEZA

      // O React executa a limpeza quando o componente desmonta
      // Contudo, como aprendemos anteriormente, efeitos rodam em todas as 
      // renderizações e não apenas uma vez. É por isso que o React também limpa os 
      // efeitos da renderização anterior antes de rodar os efeitos da próxima vez. 

      console.log("return", contar) //aqui contar ainda é o valor antigo
      document.removeEventListener("click", handleClick)
    }
  }, [contar]) //dependencia

  // [] com dependencia, atualiza somente 1 vez quando monta
  // sem dependencia causa loop
  // pode receber multiplas dependencias [valor, count, tal, fulano, ciclano]


  return (
    <div className="App" >
      <p onClick={() => setContar((contar) => contar + 1)}>clicou {contar}</p>
      <Exercicio />
    </div>
  )

}

export default App
