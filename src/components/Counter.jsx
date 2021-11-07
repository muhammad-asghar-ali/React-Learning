import React, { Component } from 'react';

class Counter extends Component {
    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value
    };

    getBadgeClasses() {
        let classes = 'badge  m-2 bg-';
        classes += this.props.counter.value === 0 ? 'danger' : 'primary';
        return classes;
    }
    render() { 
        return (
            <div className='row'>
                <div className='col-1'>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className='col'>
                    {/* passing argument to events using arrow function or wrapper function */}
                    <button 
                        onClick={() => this.props.onIncrement(this.props.counter)} 
                        className='btn btn-secondary btn-sm'>+
                    </button>

                    <button 
                        onClick={() => this.props.onDecrement(this.props.counter)} 
                        className='btn btn-secondary btn-sm m-2'
                        disabled={this.props.counter.value===0 ? 'disabled' : ''}>-
                    </button>

                    <button 
                        className='btn btn-danger btm-sm'
                        onClick={() => this.props.onDelete(this.props.counter.id)}>Delete          
                    </button>
                    </div>
            </div>
        );
    }
}
 
export default Counter;



// state ={
//     value: this.props.counter.value
//  };

//  // formal approach to use the this in the functions
//  // bind the function inside the constractor function

//  // constructor() {
//  //     super();

//  //     this.handleIncreament = this.handleIncreament.bind(this); 
//  // }




//  // other way to bind the this keyword 
//  // use arrow function beceasue it inherit the this keyword automatically
//  handleIncreament = () => {
//      // console.log(product);
//      this.setState({
//          value: this.state.value + 1 
//      })
//  };

