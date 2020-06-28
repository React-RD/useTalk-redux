const reducer = (state, action) => {
    switch (action.type) {
        case 'change_color':
            return {...state, layoutColor: action.payload}
        default:
            return state
    }
}

export default reducer
