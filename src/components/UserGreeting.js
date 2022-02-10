import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }
  render() {
      //method 1
    //   if(this.state.isLoggedIn){
    //       return(
    //           <div>
    //               Welcome Liam
    //           </div>
    //       )
    //   }else{
    //       return(
    //           <div>
    //               Welcome Guest
    //           </div>
    //       )
    //   }
    //method 2
    let message 
    if(this.state.isLoggedIn){
        message = <div>Welcome Liam</div>
    }else{
        message = <div>Welcome Guest</div>
    }
    return(message)
    //ignore
    // return (
    //   <div>
    //     <div>Welcome Liam</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
