import { useEffect, useState } from 'react';
import './App.css';
import Header from './partials/Header';
import Hijo from './Hijo';
import Container from './Composition/Container';
import Render from './Renderizado/Render';

function App() {
  let nameVariable = 'Daniel'
  // let counter = 0
  //const [state, setstate] = useState(initialState);
  const [counter, setCounter] = useState(0)
  const [modo, setModo] = useState(true) //modo es claro en true


  //! USE EFFECT 

  // useEffect(() => {

  //  console.log('Aqui cambio algo')
  // }, [modo,counter]);


  useEffect(() => {
    function checkUserData(ev) {
      switch(ev.key){
        case 'userData': alert('CHANGE IN USERDATA');break;
        case 'userData2': alert('CHANGE IN USERDATA2');break;

      }
    
      
    }

    window.addEventListener('storage', checkUserData)

    return () => {
      window.removeEventListener('storage', checkUserData)
    }
  }, [])

  //! END USE EFFECT


  let showNumber = () => {
    console.log('HELLO 3')
  }
  let showNumberWithParameters = (number) => {
    console.log(`HELLO, I have ${number}`)
  }
  let incrementNumber = () => {
    // counter++;
    // setCounter( (state) => {
    //     console.log(state)
    //     state++
    // } )

    setCounter(counter + 5)

    // setCounter( (state) => {
    //   return state+2
    // } )

    //console.log(counter)
  }

  let cambiarColor = () => {
    setModo(!modo)
  }


  return (
    <div className="App">
      <Header name="Carlos" nameVariable={nameVariable} />
      {counter}
      <button onClick={incrementNumber}>INCREMENT</button>

      <hr />
      {/* <button onClick={showNumber}>SHOW NUMBER WITHOUT PARAMETERS</button>
      <button onClick={()=>showNumberWithParameters(3)}>SHOW NUMBER WITHOUT PARAMETERS</button> */}

      <Hijo counter={counter} setCounter={setCounter} />

      <hr />

      <button onClick={cambiarColor}>CAMBIAR COLOR</button>

      <Container modo={modo}>
        <h4>Hello</h4>
      </Container>

      <hr />

      {
        modo &&
        <div>
          <Render />
          <p>Hello</p>

        </div>


      }




    </div>
  );
}

export default App;
