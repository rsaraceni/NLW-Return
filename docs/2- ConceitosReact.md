# Componente (aula 1: 55:25)
- É uma função que retorna html
- O componente sempre tem que ter a primeira letra maiuscula e manter 
o nome do arquivo igual o da function por boas práticas

- Ex: function App{    
    return(
        <div>Hello World!</div>
    )
}

- Arquivo: App.tsx

#

# Propriedades (aula 1: 58:40)

- Passa uma propriedade para o componente assim como passamos um atributo para uma tag img do html



- Pegando as props 

function Button(props) {
  console.log(props.text)

  return (
    <button>Enviar</button>
  )
}

function App() {
  return (
    <>
      <Button text="Enviar"/>
      <Button text="Ok"/>
    </>
  )
}

export default App


- ou com desestruturação


function Button(props) {
  console.log({ text })

  return (
    <button>Enviar</button>
  )
}

function App() {
  return (
    <>
      <Button text="Enviar"/>
      <Button text="Ok"/>
    </>
  )
}

export default App

# Para envolver codigo Js no meu HTML é só envolver detro de {} (Aula 1: 1.01:23)
- Ex: <button>{props.text}</button>

