import React from 'react'

function  App(){

var arr=[11,22,33,44,55,66,77];
return (
  <div>
    <h1>Array Demo</h1>
    <h2>array value index : 0 : {arr[0]}</h2>
    <h2>array value index : 1 : {arr[1]}</h2>
    <h2>array value index : 2 : {arr[2]}</h2>
    <h2>array value index : 3 : {arr[3]}</h2>
    <h2>array value index : 4 : {arr[4]}</h2>
    <h2>array value index : 5 : {arr[5]}</h2>
    
    
  </div>
)
}
export default App;









/*
import React from "react";

function App() {
  var avg = 90;
  var res="fail"; 
  return (
    <div>
      <h1>Grade system:</h1>
      <h2>{(res==="pass" && ((avg>=85 && "outstanding") ||
          (avg >= 75 && "excellent") ||
          (avg>=65 && "very good") ||
          (avg>=55 && "good") ||
          "fair")) || "no grade"
      }</h2>
      </div>
  )
}
  

export default App;










/*
import React from 'react'
function App() {
var n=-5
return (
  <div>
    <h1>3.if else if statement or else if ladder</h1>
    <h2> {n} is {(n>0 && "+ve") || (n<0 && "-ve") || "zero" }</h2>
  </div>
    )
  }

  export default App;












/*
import React from 'react'

function App() {
  var n=8;
  return (
    <div>
      <h1>Find given no. is even or odd using if else</h1>
      <h2>Number: {n}</h2>

      <h2>{n} is {( n%2===0 && "Even") || "Odd" } Number </h2>
    </div>
  )
}
export default  App;
  








/*
import React from "react";

function App() {
  var n1 = 40;
  var n2 = 40;
  return (
    <div>
      <h1> find given gratest number</h1>
      <h2>number one:{n1}</h2>
      <h2>number two:{n2}</h2>

      <h2>{(n1>n2 && n1 ) || n2 }is biggest number</h2>
     </div>
  )
}
export default App;
*/
  




/*
import React from "react";
function App() {
var mark = 35;

  return (
    <div>
      <h1>Mark: {mark}</h1>

      <h2>2.If else Statement Result:</h2>

      <h2>{(mark>34 && "PASS") || "FAIL"}</h2>

    </div>
  )
}
export default App
*/




/*
import React from "react"

function App() {

var mark=40; // simple if statement
return (
  <div>
    <h1>mark :{mark}</h1>
    <h2>1.simple If statement Result:</h2>
    <h2>{mark>34 && "PASS"}</h2>
    <h2>{mark<=34 && "FAIl"}</h2>
    </div>
)
}

export default App
*/







/*
import './App.css'
import React from "react"
import myimg from './images/cat.jpg'
function App() {
return (
  <div align="center">
    <img src={myimg} width="90%" alt="not found"></img>
  </div>
)

}
export default App
*/






/*
var App=()=>{
  var a=10
  var b=20
  var c=30
  return(
    <>
    <h1>Addition of two numbers</h1>
    <h2>A value:{a}</h2>
    <h2>B value:{b}</h2>
    <h2>C value:{c}</h2>
    <h2>total value:{a+b+c}</h2>
    </>
  )
}
export default App; // react expresion

/*
import React from "react";
class App extends React.Component
{
  render(){
   return(

    <>
    <h1>welcome to class Component</h1>
    <h1>welcome to class Component</h1>
    <h1>welcome to class Component</h1> 
    <h1>welcome to class Component</h1>
    </>
   )
}

}
export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
*/
