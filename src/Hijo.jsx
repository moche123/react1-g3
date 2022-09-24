import React from 'react'

const Hijo = ({counter,setCounter}) => {

    let incrementNumber = ()=>{
        setCounter(counter+5)
    }
  return (
    <div>

        <div>******************HIJO***************</div>
        <div>{counter}</div>
        <button onClick={incrementNumber}>INCREMENTAR DESDE EL HIJO</button>
        <div>******************END HIJO***************</div>
    </div>

  )
}

export default Hijo