import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    //previous increment that does not use parameter call in
    // increment() {
    //     //setstate will rerender component
    //     this.setState({
    //         count: this.state.count + 1
    //     },
    //         () => {
    //             //do not put code right after setstate. you want it in this created block
    //             console.log('Callback value', this.state.count)
    //         })
    //         //never have code below
    //         // / console.log('Callback value', this.state.count)
    // }
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>IncrementFive</button>
            </div>);
    }
}

export default Counter;
