// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// // import FunctionalComponent from './components/FunctionalComponent';
// // import data from './components/data';

// function App() {
//   // const [people, setPeople] = useState(data)
//   // return (
//   //   <main>
//   //     <section className='container'>
//   //       <h3>{people.length} People Info</h3>
//   //       <FunctionalComponent people={people} />
//   //       {/* <button onClick={() => setPeople([])}>clear all</button> */}
//   //     </section>
//   //   </main>
//   // )
//   const obj = [
//     {
//       id: 1,
//       name: 'Bertie Yates',
//       age: 29,
//       email: 'abc@gmail.com'
//     },
//     {
//       id: 2,
//       name: 'Hester Hogan',
//       age: 32,
//       email: 'abtc@gmail.com'
//     },
//     {
//       id: 3,
//       name: 'Larry Little',
//       age: 36,
//       email: 'abhhc@gmail.com'
//     },
//     {
//       id: 4,
//       name: 'Sean Walsh',
//       age: 34,
//       email: 'abbc@gmail.com'
//     },
//     {
//       id: 5,
//       name: 'Lola Gardner',
//       age: 29,
//       email: 'asbc@gmail.com'
//     },
//   ];
// return (
//     <div>
//       {obj.map((obj) => {
//         const { id, name, age, email} = obj;
//         return (
//           <article key={id} className='obj'>
//             <div>
//               <h4>{name}</h4>
//               <p>{age} years</p>
//               <p>{email}</p>
//             </div>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default App;


// import React, { Component } from 'react'

// class ContactList extends Component{
//     render(){
//         const peoples = this.props.contacts

//         return(
//             <ol>
//                 {peoples.map(people => (
//                     <li>{people.name}</li>
//                 ))}
//             </ol>
//         );
//     }
// } 

// class App extends Component{
//     render() {
//         return (
//           <div className="App">
//               <ContactList contacts={[
//                   {name:'Rehan'},
//                   {name:'Abu'},
//                   {name:'Vicky'},
//               ]} />
//               <ContactList contacts={[{name:'Ali'}, {name:'Asghar'}, {name:'Aayan'}]} />
//           </div>
//         );  
//     }
// }

// export default App;


// import React, { Component } from 'react';
// // import Movies from './components/Movies'
// import 'bootstrap/dist/css/bootstrap.css';
// import Counters from './components/Counters';
// import Navbar from './components/Navbar'

// class App extends Component {
        
//     constructor(){
//         super();
//         this.state = {
//             counters: [
//                 { id: 1, value: 0 },
//                 { id: 2, value: 0 },
//                 { id: 3, value: 0 },
//                 { id: 4, value: 0 },
//                 { id: 5, value: 0 }
//             ]
//         }
//     }
    
//     handleIncrement = counter => {
//         const counters = [...this.state.counters]
//         const index = counters.indexOf(counter)
//         counters[index] = {...counter}
//         counters[index].value++

//         this.setState({counters})
//     }

//     handleDecrement = counter => {
//         const counters = [...this.state.counters]
//         const index = counters.indexOf(counter)
//         counters[index] = {...counter}
//         counters[index].value--

//         this.setState({counters})
//     }

//     handleReset = () => {
//         const counters = this.state.counters.map(c => {
//             c.value = 0
//             return c
//         });
//         this.setState({counters}) 
//     }
    
//     handelDelete = (counterId) => {
//         const counters = this.state.counters.filter(i => i.id !== counterId) 
//         this.setState({counters})
//     }
    
//     render() { 
//         return (
//             <React.Fragment>
//                 <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
//                 <main className='container'>
//                     <Counters 
//                         counters={this.state.counters}
//                         onIncrement={this.handleIncrement}
//                         onDecrement={this.handleDecrement}
//                         onDelete={this.handelDelete}
//                         onReset={this.handleReset} 
//                     />
//                 </main>
//             </React.Fragment>

//         )
//     }
// }
 
// export default App;

import React, { Component } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Movies from './components/Movies'; 
import MoviesForm from './components/MovieForm';
import Customers from './components/Customer';
import Rantals from './components/Rantals';
import NotFound from './components/NotFound';
import NavBar from './components/MovieNavBar';
import LoginForm from './components/LoginForm';
import RegisterFrom from './components/RegisterForm';
import './App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>

                <main className='container'>
                <Switch>
                    <Route path='/register' component={RegisterFrom}></Route>
                    <Route path='/login' component={LoginForm}></Route>
                    <Route path='/movies/:id' component={MoviesForm}></Route>
                    <Route path='/movies' component={Movies}></Route> 
                    <Route path='/customers' component={Customers}></Route>
                    <Route path='/rantals' component={Rantals}></Route>
                    <Route path='/notFound' component={NotFound}></Route>  
                    <Redirect from='/' to='movies' exact/> 
                    <Redirect to='/notFound' />  
                </Switch>              
                </main>
            </React.Fragment>        
        );
    }
}

export default App;
