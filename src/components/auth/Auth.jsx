import { useState } from "react";
import Login from "./login";
import Register from "./register";

export default function Auth() {
    const [login, setlogin] = useState(true)
    function modeSwitch() {
        setlogin(prev => !prev)
    }
    return (
        <main className="auth">
            <h1 className="auth--title">Authentication Page</h1>
         {login && <Login login = {login} switchMode = {modeSwitch}/>}
         {!login && <Register login = {login} switchMode = {modeSwitch}/>}

        </main>
    )
}