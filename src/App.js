import React, { useState } from "react";
import Main from "./component/main"
import Login from"./component/Login"

//Main event
function App() {
const [loginned, setLogin] = useState(false);
const [loginEmail, setLoginEmail] = useState(null);
console.log(loginEmail)
  return (
    <div>
      {!loginned && <Login onChangeForm={setLoginEmail}  onChangeLogin={setLogin}/>}
      {loginned && <Main  onChangeLogin={setLogin} playName={loginEmail}/>}
    </div>
  );
}

export default App;
