import React from "react";

import { connect } from "react-redux";

class PanelA extends React.Component {
    handleClick = () => {
        console.log('PanelA', this.props);
        this.props.sendAction()
    }
    render() {
        return <button onClick={this.handleClick}>+</button>
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendAction: () => {
            dispatch({ type: 'ADD_COUNT' })
        }
    }
}
export default connect(null, mapDispatchToProps)(PanelA)