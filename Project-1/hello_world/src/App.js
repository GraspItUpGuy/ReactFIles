import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
      <Header />
    </div>
    );
  }
}

class  Header extends Component {
  render(){
    return(
      <div>
      <Intro /> 
         <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ptag />
      </header>
      </div>
    );
  }
}

class Ptag extends Component {
  render(){
    return(
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}


class Intro extends Component {
  render(){
    return(
      <div>
        <h1> My First Component</h1>
      </div>
    );
  }
}


export default App;
