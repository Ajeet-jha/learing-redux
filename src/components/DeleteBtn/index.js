import React, { Component } from 'react'
import {connect} from 'react-redux'

class DeleteBtn extends Component {
    deleteAll = () => {
        this.props.dispatch({
            type:"DELETE_LISTS"
        })
    }
    render() {
        return (
            <button onClick={this.deleteAll}>DeleteAll</button>
        )
    }
}

export default connect()(DeleteBtn)