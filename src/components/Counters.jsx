import React, { Component } from 'react'
import Counter from './Counter'

export class Counters extends Component {
    render() {
            // Destructuring Arguments
            const { onReset, onDelete, counters, onIncrement, onDecrement} = this.props
        return (
            <div>
            <button className='btn btn-primary btn-sm m-2' onClick={onReset}>Reset</button>
                {counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}  />)}
            </div>
        )
    }
}

export default Counters


// handleIncreament = counter => {
//     const counters = [...this.state.counters]
//     const index = counters.indexOf(counter)
//     counters[index] = {...counter}
//     counters[index].value++

//     this.setState({counters})
// }

// handleReset = () => {
//     const counters = this.state.counters.map(c => {
//         c.value = 0
//         return c
//     });
//     this.setState({counters}) 
// }

// handelDelete = (counterId) => {
//     const counters = this.state.counters.filter(i => i.id !== counterId) 
//     this.setState({counters})
// }