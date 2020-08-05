import { combineReducers } from 'redux'

const INIT_STATE = {
    total:0,
    groupSize:0
}


const counter = (state = INIT_STATE, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                total:state.total + 1,
                groupSize: state.groupSize
            }
        case 'DECREMENT':
            return {
                total:state.total - 1,
                groupSize: state.groupSize
            }
        case 'CHANGE_SIZE':

            return {
                total:0,
                groupSize: action.value
            }
        default:
            return state
    }
}

export default combineReducers({counter})