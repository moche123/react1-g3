import React from 'react'

import './container.css'

const Container = (props) => {

    let styleExperienceOscuro = {
        backgroundColor: 'black',
        padding: '20px',
        color: 'yellow',
        fontWeight: 'bold'

    }
    let styleExperienceClaro = {
        backgroundColor: 'yellow',
        padding: '20px',
        color: 'black',
        fontWeight: 'bold'

    }

    return (
        <div style={ props.modo ? styleExperienceClaro : styleExperienceOscuro }>

            {/* <div className='textRed'>Containers</div> */}
            {props.modo ? 'true':'false'}
            {props.children}
        </div>
    )
}

export default Container