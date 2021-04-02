import React from "react";
import './App.css';
import './components/App.scss';
import Login from './components/login.js';
import SignUp from "./components/Signup";
import { render } from "@testing-library/react";
import ForgotPassword from "./components/ForgotPassword";
class App extends React.Component {

  render(){
    return(
      <div className="App">
        <div className="container">
          <ForgotPassword/>
        </div>
      </div>
    );
  }
  /*constructor(props)
  {
    super(props);
    this.state={
      isSignupActive:true,
    }
  }

  render() {
    const{isSignupActive}=this.state;
     return (
      <div className="App">
       <div className="container">
        {/*isSignupActive && <SignUp containerRef={(ref)=>this.curreny =ref}/>}
        <SignUp/>
       </div>
      </div>
  );
  }
}

const RightSide =props =>{
  return (
  <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
     <div className="inner-container">
        <div className="text">{props.current}</div>
     </div>
  </div>
  );
};*/
};
export default App;
