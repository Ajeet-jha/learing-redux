import React, { Component } from 'react'
import Form from '../Form'
import { connect } from 'react-redux'

class Dropdwon extends Component {

    componentDidMount = () => {
        this.props.dispatch({
            type: "SHOW_LISTS"
        });
    }

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
                <Form />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        selects : state.selects
    }
}

export default connect(mapStateToProps)(Dropdwon)