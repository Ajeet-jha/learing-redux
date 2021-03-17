import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
    
    handleChange = (e) => {
        
    }

    handleSubmit = e => {
        e.preventDefault();
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="input" onChange={this.handleChange} value={this.props.input} />
                <input type="submit" value="save" />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        selects : state.selects,
        input: state.input
    }
}

export default connect(mapStateToProps)(Form);