import React,{Component} from 'react';
import './Person.css';

class Person extends Component{

    constructor(props) {
        super(props);
       console.log('[Person.js] Inside constructor',props);
      }
    
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
      }
    
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
      }
    render(){
        console.log('[Person.js] Inside render()');
       return (
            <div className = "Person">
            <p onClick = {(event) => this.props.click(this.props.index)}>I am {this.props.name} and I am {this.props.age} </p>
            <input type = "text" onChange = {(event) => this.props.change(event,this.props.personId)} value = {this.props.name} />
            <p>{this.props.children}</p>
            </div>
       )
        //  return   [
        //     <p key = "1" onClick = {(event) => this.props.click(this.props.index)}>I am {this.props.name} and I am {this.props.age} </p>,
        //     <input key ="2" type = "text" onChange = {(event) => this.props.change(event,this.props.personId)} value = {this.props.name} />,
        //     <p key ="3">{this.props.children}</p>
        //     ]
        
    }
}

export default Person;

// click = {(event) => this.props.clicked(index)} 
//         change = {(event) => this.props.changed(event,person.id)}
