function App(props) {

  return (
    <div>

      <h1>JSON with Array Handling and also check null</h1>
      <h2>Roll Number: {props.data.rno}</h2>
      <h2>Name: {props.data.sname}</h2>
      <h2>Mark 1: {props.data.marks[0]}</h2>
      <h2>Mark 2: {props.data.marks[1]}</h2>
      <h2>Mark 3: {props.data.marks[2]}</h2>
      <h3>Result:{(props.data.marks[0] > 34 && props.data.marks[1] > 34 &&
          props.data.marks[2] > 34)? "PASS":"FAIL"}</h3>

    </div>
  )
}

  export default App

















import React from 'react'

export default function App(props) {
  
  var arr=[]
  for(var k in props.data)
  {
    arr.push(k)
  }

  return (
    <div>
      <h1>props using JSON data</h1>

      <h2>Roll No: {props.data.rno}</h2>
      <h2>Name: {props.data.sname}</h2>
      <h2>Mark: {props.data.mark}</h2>
      <h2>Result: {props.data.mark>=35?"pass":"fail"}</h2>
      <h2>is eligible to study: {props.data.iseligible?"eligible":"not eligible"}</h2>

      <br></br>
      <h2>============================================================</h2>
      {arr.map((v)=><h2>{v}----&gt; {props.data[v]}</h2>)}
      <h2>==================extra=============================</h2>
      {arr.map((v)=><h2>{v}----&gt; {(props.data[v]===true &&
        "Eligible") || (props.data[v]===false && "Not Eligible") || 
        props.data[v]}</h2>)}
      
    
    </div>
  )
}


















/*
import React from 'react';

function App(props) {
  return (
        
          sno={1001}
          sname="Sathya"
           marks=
          tamil: 99,
          english: 40,
          maths: 100,
          science: 88,
          social: 68

     <div>
      <h1>Student Details</h1>

      <h2>Student Number: {props.sno}</h2>
      <h2>Student Name: {props.sname}</h2>

      <h2>{props.marks.tamil}</h2>
      <h2>{props.marks.english}</h2>
      <h2>{props.marks.maths}</h2>
      <h2>{props.marks.science}</h2>
      <h2>Social: {props.marks.social}</h2>
    </div>
  );
}

export default App
*/














import React from 'react'
function App(props) {

return (
  <div>
    <h1>props: properties</h1>
    <h2>share data from one Component to another Component</h2>
    <h2>Your Name:{props.data}</h2>
  </div>
)
}

export default App



import React from 'react'
function App() {
  var stud={
    sno:1001,
    sname:'sathya',
    marks:{tamil:99,
      english:40,
      maths:100,
      science:88,
      social:68
    },
    rank:2,
    result:"pass"

  }
  return (
    <div>
      <h1>JSON</h1>
      <h2>student number:{stud.sno}</h2>
      <h2>student name:{stud.sname}</h2>
      <h2>student tamil mark:{stud.marks["tamil"]}</h2>
      <h2>student english mark:{stud.marks['english']}</h2>
      <h2>student maths mark:{stud.marks.maths}</h2>
      <h2>student science mark:{stud.marks.science}</h2>
      <h2>student social mark:{stud.marks.social}</h2>
      <h2>student rank:{stud.rank}</h2>
      <h2>student result:{stud.result}</h2>
      
      
    </div>
  )
}

export default App;

















import React from 'react'
function App() {
  var stud={
    sno:1001,
    sname:"sathya",
    mark:99,
    rank:2,
    result:"pass"
  }
  return (
    <div>
      <h1>JSON</h1>
      <h2>student number:{stud.sno}</h2>
      <h2>student name:{stud.sname}</h2>
      <h2>student mark:{stud.mark}</h2>
      <h2>student rank:{stud.rank}</h2>
      <h2>student result:{stud.result}</h2>
    </div>
  )
}

export default App;
















import React from 'react';

function App() {
  var arr = [11, 22, 33, 44, 55, 66, 77, 88, 99,110,112,334,56,19,13];

  var big = arr[0];
  
  return (
    <div>
      <h1>Array Demo</h1>

      {arr.map((item) => item)}
      <br />

      {arr.map((item) => <>{item}</>)}

      {arr.map((item) => <><br />{item}</>)}

      <ol type="A">
        {arr.map((v) => <li>{v}</li>)}
      </ol>

      <br />

      <h1>Highest Number in Array:</h1>

      <h1>Biggest Number: {big}</h1>
    </div>
  );
}

export default App;














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
