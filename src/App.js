import React from "react";
import AwesomeButton from "./components/AwesomeButton";
import {useDispatch, useSelector} from 'react-redux'
import { colors } from './utils/consts'

// STEP 4 puedes hacer que cualquier componente se suscriba a tu store.
// Si el Store se actualiza, actualizará consigo este componente

const App = () => {
    // useDispatch te permite crear dispatcher para hacer acciones en ciertos eventos
    // useSelector te permite acceder a elementos de tu store y automaticamente suscribe el componente a ese key

    const dispatcher = useDispatch()
    const bgColor = useSelector(state => state.layoutColor)

    const handleChangeColor = () => {
        const randomIndex = Math.floor((Math.random() * 9) + 1);
        const colorToSet = colors[randomIndex]

        // dispatcher es una función que recibe un objeto.
        // el key type de ese objeto es obligatorio, puesto que se usara en el reducer (STEP 2)
        // el payload, es opcional, despues del key type, puedes enviar toda la información que necesites para
        // hacer el update

        dispatcher({
            type: 'change_color',
            payload: colorToSet
        })
    }

    return (
        <div className={'app center-flex '}>
            {/* STEP 5 Recuerda que bgColor es un key del store, sacado con useSelector*/}
            <AwesomeButton bgColor={bgColor} onClick={handleChangeColor} />
        </div>
    )
}

export default App
