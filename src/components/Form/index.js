import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
    state = {
        input:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            input:""
        })
        this.state.input && this.props.dispatch({
            type: "ADD_ONE",
            payload: this.state.input
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="input" onChange={this.handleChange} value={this.state.input} />
                <input type="submit" value="save" />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        selects : state.selects
    }
}

export default connect(mapStateToProps)(Form);