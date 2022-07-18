import React from 'react'
import './index.css'
import './App.css'

function operacaoLenta() {
  let c;
  for (let i = 0; i < 10000000000; i++) {
    c = 1 + 1 / 10
  }
}

function App() {
  const [contar, setContar] = React.useState(0)

  // const valor = React.useMemo(() => {
  //   const localItem = window.localStorage.getItem("preferido")
  //   console.log("MEMO");
  //   return localItem

  const t1 = performance.now()
  const valor = operacaoLenta()
  console.log(valor);
  console.log(performance.now() - t1);

  console.log(valor);

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  )


}

export default App
