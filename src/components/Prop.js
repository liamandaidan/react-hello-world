import React, { Component } from "react";

// const Prop = (props) => {
//     //console.log(props)
//     return (
//         <div>
//             <h1>Hello, {props.name} AKA {props.heroName}</h1>
//             {props.childern}
//         </div>
//     )
// }

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name}, also known as: {this.props.heroName}</h1>
    }
}

export default Prop;