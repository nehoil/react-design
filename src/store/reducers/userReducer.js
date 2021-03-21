const INITAL_STATE = {
    user: {}
}

export function userReducer(state = INITAL_STATE, action){
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'LOAD_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        case 'ADD_MOVE':
            return {
                ...state,
                user: {
                    moves: [...state.user.moves, action.move]
                }
            }    
        default:
            return state;
    }
}