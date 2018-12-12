import React,{Component} from 'react';
import './Person.css';

class Person extends Component{
    render(){
        return (
            <div className = "Person">
            <p onClick = {this.props.click}>I am {this.props.name} and I am {this.props.age} </p>
            <input type = "text" onChange = {this.props.change} value = {this.props.name} />
            <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Person;