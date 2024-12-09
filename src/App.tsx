import React, { useState } from "react";
import "./App.css";
import { Fragment } from "react";
import SignUp from "./components/SignUp.tsx";
import Login from "./components/Login.tsx";
function App() {
  let [toggle,settoggle] = useState(true)
  const toggleSwitch = ()=>{
    settoggle(!toggle)
  }
  return (
    <Fragment>
      {toggle && <div>
        <SignUp />
        <p className="signup" onClick={toggleSwitch}>Already an User. Login Here</p>
      </div>}
      {!toggle && <div>
        <Login />
        <p className="signup" onClick={toggleSwitch}>Not An User. SignUp Here</p>
      </div>}
    </Fragment>
  );
}

export default App;
