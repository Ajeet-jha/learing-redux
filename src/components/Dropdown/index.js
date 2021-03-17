import React, { Component } from 'react'
import Form from '../Form'

class Dropdwon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selects : [
                "Volvo",
                "Saab",
                "Mercedes",
                "Audi"
            ]
        };
      }

    render() {
        const options = this.state.selects;
        return (
            <div>
                <label htmlFor="cars">Choose a car:</label>
                <select name="cars">
                    {options && options.map((option, index)=>{
                        let value = option.toLowerCase()
                        return <option key= {index} value={value}>{option}</option>
                    })}
                </select>
                <Form options={options}/>
            </div>
        )
    }
}

export default Dropdwon