import produce from "immer";

const initState = {
    msg: 'reducers-msg',
    list: []
}
export default function (state = initState, { type, payload }) {

    // const newState = JSON.parse(JSON.stringify(state))
    const newState = null
    switch (type) {
        case 'update':
            newState.msg = payload
            produce(state, (newState) => {
                newState.msg = payload
            })
            break
        default:
            newState = state
    }
    return newState
}