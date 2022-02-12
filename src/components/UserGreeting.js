import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
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
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>
    //         <h1>Welcome Liam</h1>
    //        </div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return(message)
    //method 3 can be used in jsx
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Liam!</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    //method 4 shortcircut op, if you want to render or not at all
    return this.state.isLoggedIn && <div>Welcome Liam</div>;
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
