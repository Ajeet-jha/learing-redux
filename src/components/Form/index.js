import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
      }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            selects : [...this.props.options, this.state.input],
            input: ""
        })
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

export default Form;