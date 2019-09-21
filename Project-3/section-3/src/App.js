import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Parent />
      </header>
    </div>
    );
  }
}

App.propTypes = { 
  propObject : React.propTypes.object 
}


class Parent extends Component{
  render(){
    return(
      <div>
        <h2>I am from Parent Component</h2>
        <Cars msg = "Cars are really really cool !!!" model ="12321" coolcars = {this.props.cars} modelNo = {this.props.model} />
        
      </div>
    );
  }
}

Parent.defaultProps = { 
  cars : [ "santro", "alto", "city", "i10"],
  model : 2010,
}


class Cars extends Component{
  render(){
    console.log(this.props);
    return(
      <div>
        <h3>I am from Cars Component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <p>{this.props.coolcars.map((item,i) =>{
          return i + " " + item + " " ;
        })}</p>
      </div>
    );
  }
}


export default App;
