import React from 'react'

const AwesomeButton = ({ onClick, bgColor }) => {
    return (
        <div className={`awesome-button ${bgColor} center-flex`} onClick={onClick}>
            <div className={'a-b-mask full-cont'}/>
            <h3 className={'h3 light'}>Cambiar Color</h3>
        </div>
    )
}

export default AwesomeButton
