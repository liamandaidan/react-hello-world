import React from 'react';

//functional component
const Greet = props => {
    const { name, heroName } = props
    return (<div>
        <h1>Hello {name} AKA {heroName}!</h1>
    </div>)

}



export default Greet;