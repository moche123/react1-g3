import React from 'react'

const Ejercicio = ({numero,setNumero}) => {


    let increment = (num)=>{
        setNumero(numero+num)
    }

    let decrement = (num)=>{
        if (numero-num < 0) {
            alert('Numero menor a 0')
        }else{
            setNumero(numero-num)
        }
    }

  return (
    <div>

        <div>******************Ejercicio***************</div>
        <div>{numero}</div>
        <button onClick={()=>increment(1)}>+1</button>
        <button onClick={()=>increment(2)}>+2</button>
        <button onClick={()=>decrement(1)}>-1</button>
        <button onClick={()=>decrement(2)}>-2</button>
        <div>******************END Ejercicio***************</div>
    </div>

  )
}

export default Ejercicio