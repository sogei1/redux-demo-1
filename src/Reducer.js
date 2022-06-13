
const defaultState = {
    value: 10
}

export const reducer = (state = defaultState, action) => {

    switch(action.type) {

        case "add": {
            const value = action.payload;
            return { ...state, value: state.value + value }
        }

        case "sub": {
            const value = action.payload;
            return { ...state, value: state.value - value }
        }
        
        default:
            return state;
    }
}