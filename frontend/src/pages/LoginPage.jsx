import React from "react";
import Template from "../components/Template";
import Input from "../components/Input";
import "../index.css"
import MainPage from "./MainPage";
import viewLogo from "../images/viewLogo.png";

class LoginPage extends React.Component {
    render(){
        return <Template>
                <div id="login_bigboy_main">
                    <div className={"login_naslov"}>Prijava</div>
                    <div id={"login_main_container"}>
                        <div className="login_input_container">
                            <Input className="login_input_container" tag="Korisničko ime" name="username" placeholder={"Korisničko ime"}/>
                            <div>

                                <Input tag={"Lozinka"} name={"lozinka"} placeholder={"Lozinka"}/>
                                <img src={viewLogo} alt="viewlogo" id="viewLogo"/>
                            </div>


                            <button id={"login_button"}>Prijavi se</button>
                        </div>
                    </div>


                </div>

        </Template>
    }
}

export default LoginPage