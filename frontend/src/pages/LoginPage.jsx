import React from "react";
import Template from "../components/Template";
import Input from "../components/Input";
import "../index.css"

class LoginPage extends React.Component {
    render(){
        return <div>
            <Template>
                <div className="naslov">Prijava</div>
                <div id={"signin_main_container"}>
                    <div className="signin_input_container">
                        <Input tag="Korisničko ime" name="username" placeholder={"Korisničko ime"}/>
                        <Input tag={"Lozinka"} name={"lozinka"} placeholder={"Lozinka"}/>

                    </div>
                </div>
            </Template>
        </div>
    }
}