import React from "react";

import store from "../../store";
import { sendAction } from "../../store/actions";
// import { connect,Provider } from 'react-redux'

export default class StudyRedux extends React.Component {
    handleClick = () => {
        const action = sendAction()
        store.dispatch(action)
    }
    componentDidMount() {
        store.subscribe(() => {
            console.log('--subscribe--', store.getState());
            this.setState({})
        })
    }
    render() {
        return <div>
            <h1>类组件中使用Redux</h1>
            <h4>{store.getState().value}</h4>
            <button onClick={this.handleClick}>点击发送一个action</button>

            {/* react-redux */}
        </div>
    }
}