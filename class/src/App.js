import React, { useState } from 'react'
import "./App.css"


const Child = ({ sendData }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue(value)
    sendData(value)
    console.log(value);
  }

  return (
    <div className='button_component'>
      <h3>Eu sou um componente Filho</h3>
      <input type="text" value={value} placeholder="Insira um texto aqui" onChange={(e) => setValue(e.target.value)} />
      <input type="button" value="Inseri" onClick={handleClick} className='button' />
    </div>
  )

}

const Parent = () => {
  const [data, setData] = useState("");

  const sendDataFromChild = (childData) => {
    setData(childData)
    console.log(`Mensagem filho = ${childData}`);

  }

  return (
    <>
      <h3>Dados Recebido: {data}</h3>
      <Child sendData={sendDataFromChild} />

    </>

  )

}



// Componente Filho (Props)
const Button = ({ value, data }) => {
  return (
    <div className='button_component'>
      <ul>
        <li>{data.name}</li>
        <li>{data.message}</li>
      </ul>
    </div>)
}



// Componente Pai
const App = () => {
  const data = {
    name: "Ana Julia",
    message: "Hello World"
  }

  return (
    <div className='app'>
      <h1>App component</h1>
      <div className='appBox'>
        <div className='box'>
          <h2>Propriedades</h2>
          <p>Aqui vai uma caixa de entrada com dados recebidos do componente pai</p>
          <Button value={"Enviar"} data={data} />
        </div>
        <div className='box'>
          <h2>Call Back</h2>
          <p>Componente pai que recebe dados do componente filho</p>
          <Parent />
        </div>

      </div>


    </div>
  )

}

export default App;