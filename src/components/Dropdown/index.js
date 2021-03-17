import React, { Component } from 'react'

class Dropdwon extends Component {
    state = {
        selects : [
            "Volvo",
            "Saab",
            "Mercedes",
            "Audi"
        ],
        input: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            selects : [...this.state.selects, this.state.input],
            input: ""
        })
    }

    render() {
        const options = this.state.selects;
        return (
            <div>
                <label for="cars">Choose a car:</label>
                <select name="cars">
                    {options && options.map((option, index)=>{
                        let value = option.toLowerCase()
                        return <option key= {index} value={value}>{option}</option>
                    })}
                </select>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="input" onChange={this.handleChange} value={this.state.input} />
                    <input type="submit" value="save"/>
                </form>
            </div>
        )
    }
}

export default Dropdwon