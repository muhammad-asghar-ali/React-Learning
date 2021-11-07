import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
// import Counter from './components/Counter';
// import Movies from './components/Movies';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// const peoples =[
//   {name:'Asghar'},
//   {name:'Ali'},
//   {name:'Aayan'},
//   {name: 'Asghar'}
// ]

// const element = React.createElement('ol', null, 
//   peoples.map((person, index) => (
//     React.createElement('li', {key: index}, person.name)
//   ))
// );

// JSX

// const element = <ol>
//   {peoples.map((person, index) => (
//     <li key={index} >{person.name}</li>
//   ))}
// </ol>

// Creating Components

// class ContactList extends React.Component{
//   render(){
//     const peoples =[
//       {name:'Asghar'},
//       {name:'Ali'},
//       {name:'Aayan'},
//       {name: 'Asghar'}
//     ]

//     return(
//       <ol>
//         {peoples.map((person, index) => (
//         <li key={index} >{person.name}</li>
//         ))}
//       </ol>
//     );
//  }
// }

// ReactDOM.render(
//     <ContactList />,
//     document.getElementById('root') 
// );



// const massage = (
//   <div style={{color:'green', margin:'10px', textAlign:'center'}}>
//     <h1>React Learning</h1>
//     <p>React is a Java Script Library</p>
//   </div>
// )

// ReactDOM.render(
//     massage,
//     document.getElementById('root') 
// );

reportWebVitals();
