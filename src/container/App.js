import React, { Component } from 'react';
import  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';
//import ErrorBoundary from '../errorBoundary/errorBoundary';
class App extends Component {

  constructor(props) {
    super(props);
   console.log('[App.js] Inside constructor',props);
   this.state = {
    persons :[
      {name:'ugendar',age:25,id:1000},
      {name:'ugi',age:25,id:1001},
      {name:'lion',age:27,id:1002}
    ],
    showPersons:false
  };
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps,nextState);
  //  return nextProps !== this.props.persons;
  
    return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;  
}

  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps,nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate()');
  }

  // state = {
  //   persons :[
  //     {name:'ugendar',age:25,id:1000},
  //     {name:'ugi',age:25,id:1001},
  //     {name:'lion',age:27,id:1002}
  //   ],
  //   showPersons:false
  // }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  toggleNameHandler = () => {
    this.setState({showPersons:!this.state.showPersons})
  }

  deletePersonHandler = (deleteIndex) => {
   // const persons = this.state.persons.slice();
    const persons =[...this.state.persons];
     persons.splice(deleteIndex,1);
    this.setState({persons:persons});
  };


  render() {
    console.log('[App.js] Inside render()')
    let persons = null;
if (this.state.showPersons) {
  persons = (
  <div> {
     <Persons persons = {this.state.persons}
     clicked =  { this.deletePersonHandler} 
     changed = {this.nameChangedHandler} />
  }
  </div>  
    ) 
      }
    
    return (
      <div className='App'>
      <button onClick = {() => this.setState({showPersons:true})}>Show persons</button>
      <Cockpit persons = {this.state.persons} showPersons = {this.state.showPersons} clicked = {this.toggleNameHandler} appTitle = {this.props.appTitle}/>
    {persons}
    </div>
      );
 // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m react app'));
}

}

export default App;
