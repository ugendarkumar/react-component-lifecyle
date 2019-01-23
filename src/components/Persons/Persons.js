import  React,{Component} from "react";

import Person from './Person/Person';

class Persons extends Component{
  constructor(props) {
    super(props);
   console.log('[Persons.js] Inside constructor',props);
  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount()');
  }


  componentWillReceiveProps(nextProps){
    console.log('[UPDATE persons.js] inside componentWillReceiveProps()', nextProps);
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[UPDATE persons.js] inside shouldComponentUpdate()', nextProps,nextState);
    return nextProps !== this.props.persons;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE persons.js] inside componentWillUpdate()', nextProps,nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE persons.js] inside componentDidUpdate()');
  }

  render () {
    console.log('[Persons.js] Inside render()');
    return this.props.persons.map((person,index) => {
        return (<Person click = {this.props.clicked} 
        change = {this.props.changed}
        name = {person.name} age = {person.age}
        index = {index}
        personId={person.id}
        key = {person.id}> </Person>    
  )
    })
}
}



export default Persons;