import { createStore } from 'redux'

// import test from "./reducers/test";  
import { reducer } from "./reducers";

// const rootReducer = combineReducers({ test })

export default createStore(reducer)

// const initState = {
//     msg: 'hello redux',
//     list: []
// }
//reducer用于修改store
// function reducer(state, action) {
//     console.log('-------', action);
//     state = initState
//     const newState = JSON.parse(JSON.stringify(state))
//     if (action.type === 'update') {
//         newState.msg = action.payload
//     }
//     return newState
// }
