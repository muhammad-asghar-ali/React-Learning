// import React, { Component } from 'react'

// class Like extends Component {
//     render() {
//         let classes = 'fa fa-heart' 
//         if(!this.props.liked) classes += '-o'
//         return (
//             <div>
//                 <i className={classes} aria-hidden="true"
//                    onClick={this.props.onClick} style={{cursor:'pointer'}}
//                 ></i>
//             </div>
//         )
//     }
// }

// export default Like

import React from 'react'

function Like(props) {
        let classes = 'fa fa-heart' 
        if(! props.liked) classes += '-o'
        return (
            <div>
                <i className={classes} aria-hidden="true"
                   onClick={props.onClick} style={{cursor:'pointer'}}
                ></i>
            </div>
        )
}
export default Like   
