import React from 'react'

const NavBar = (totalCounters) => { // Destructuring aurguments 
     return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href=''>Counters 
                        <span className='badge bg-pill bg-secondary'>{totalCounters}</span>
                    </a>
                </nav>
            </div>
        )
    }
export default NavBar;

// class Navbar extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-light bg-light">
//                     <a className="navbar-brand" href="#">Counters 
//                         <span className='badge bg-pill bg-secondary'>{this.props.totalCounters}</span>
//                     </a>
//                 </nav>
//             </div>
//         )
//     }
// }

// export default Navbar;
