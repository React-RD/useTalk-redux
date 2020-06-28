import React from "react";
import AwesomeButton from "./components/AwesomeButton";
import {useDispatch, useSelector} from 'react-redux'
import { colors } from './utils/consts'

const App = () => {
    const dispatcher = useDispatch()
    const bgColor = useSelector(state => state.layoutColor)

    const handleChangeColor = () => {
        const randomIndex = Math.floor((Math.random() * 9) + 1);
        const colorToSet = colors[randomIndex]

        dispatcher({
            type: 'change_color',
            payload: colorToSet
        })
    }

    return (
        <div className={'app center-flex '}>
            <AwesomeButton bgColor={bgColor} onClick={handleChangeColor} />
        </div>
    )
}

export default App
