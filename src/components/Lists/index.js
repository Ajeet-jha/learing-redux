import React, { Component } from 'react'
import {connect} from 'react-redux'

class Lists extends Component {

    handleClick = (option) => {
        this.props.dispatch({
            type:"DELETE_LIST",
            payload: option
        })
    }
    render() {
        const options = this.props.options
        return (
            <ul>
                {options && options.map((option,i)=> {
                    return <li key={i} 
                    onClick={this.handleClick.bind(this,option)}
                    style={{
                        listStyle:"none",
                        padding:"10px",
                        background:"#80808029",
                        margin:"15px"
                    }}>{option}</li>
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return{
        options: state.selects
    }
}

export default connect(mapStateToProps)(Lists)
