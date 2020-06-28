// STEP 2 el reducer, es una función pura que recibe el State actual y la Actions.
// Cuando haces un dispatch, es aquí donde termina manejado

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_color':
            return {...state, layoutColor: action.payload}
        default:
            return state
    }
}

export default reducer
