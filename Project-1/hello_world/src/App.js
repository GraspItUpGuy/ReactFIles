import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro from './Intro';
import Ptag from './Ptag';

class App extends Component {
  render(){
    return (
      <div className="App">
      
      <Ptag />
      <Header />
      <Intro />
      
    </div>
    );
  }
}



  

  


export default App;
