import React from "react";

import { connect } from "react-redux";

class PanelB extends React.Component {
    render() {
        console.log('PanelB', this.props);
        return <div>{this.props.count}</div>
    }
}
const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(PanelB)