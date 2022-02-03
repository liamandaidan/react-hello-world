import React from "react";

const Prop = (props) => {
    //console.log(props)
    return (
        <div>
            <h1>Hello, {props.name} AKA {props.heroName}</h1>
            {props.childern}
        </div>
    )
}

export default Prop;