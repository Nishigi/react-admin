//处理发送过来的action
/*------redux----- */

// const initstate = {
//     value: "default val"
// }
// const reducer = (state = initstate, action) => {
//     console.log('reducer', state, action);
//     switch (action.type) {
//         case 'SEND_TYPE':
//             return Object.assign({}, state, action)
//         default:
//             return state
//     }
// }
// module.exports = {
//     reducer
// }

/*  ----react-redux--------*/

const initstate = {
    count: 0
}
const reducer = (state = initstate, action) => {
    console.log('reducer', state);
    switch (action.type) {
        case 'ADD_COUNT':
            return {
                count: state.count + 1
            }
        default:
            return state
    }
}
module.exports = {
    reducer
}