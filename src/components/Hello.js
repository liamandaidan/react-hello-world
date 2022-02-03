import React from "react";

const Hello = () => {
    //jsx component
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Liam! Hello!</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Liam no jsx')
    )
}

export default Hello;