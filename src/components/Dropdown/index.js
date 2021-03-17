import React, { Component } from 'react'
import Form from '../Form'
import { connect } from 'react-redux'

class Dropdwon extends Component {

    render() {
        const options = this.props.selects;
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

const mapStateToProps = (state) => {
    return{
        selects : state.selects,
        input: state.input
    }
}

export default connect(mapStateToProps)(Dropdwon)