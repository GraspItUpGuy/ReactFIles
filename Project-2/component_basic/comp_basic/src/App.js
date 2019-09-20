import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);

  this.yourName = "Rajesh";
  this.state = {};
}


  sayHello(name) {
    return "Hello " + name;
  }
render(){
  const myName = "Puneet";
  return(
    <div className="App">
      <div>
        <h2>Sample Data : {this.sayHello("Puneet")} </h2>
        <h2>Sample Data : {this.yourName} </h2>

        <h1>time is : {} </h1>
      </div>
    </div>
  );
}
}
export default App;
