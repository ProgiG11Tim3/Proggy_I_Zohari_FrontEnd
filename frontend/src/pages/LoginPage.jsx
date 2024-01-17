import React from "react";
import axios from "axios"
import { Navigate } from 'react-router-dom';

import Template from "../components/Template";
import Input from "../components/components/Input";

import "../index.css"
import viewLogo from "../images/viewLogo.png";
import viewLogoHidden from "../images/viewLogoHidden.png";

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: false,
            input_type: "password",
            viewIcon: viewLogo,
            username: null,
            password: null
        }
        this.submit = this.submit.bind(this)
        this.element = null
    }

    viewPass() {
        if(this.state.view == false) {
            this.setState({
                view: true,
                input_type: "text",
                viewIcon: viewLogoHidden
            })
        } else {
            this.setState({
                view: false,
                input_type: "password",
                viewIcon: viewLogo
            })
        }
    }

    submit() {
        if (this.state.username == null) {
            alert("Molimo da upišete korisničko ime.")
        } else if (this.state.password == null) {
            alert("Molimo da upišete lozinku.")
        } else {
            axios.post("/api/login", {
                username: this.state.username,
                password: this.state.password
            }).then(res => {
                if (res.data == "PARENT") {
                    this.element = <Navigate to="/home" replace={true}/>
                    this.forceUpdate()
                } else {
                    alert("Neispravno korisničko ime ili lozinka.")
                }
            }).catch((e) => {
                console.log(e)
            })
        }
    }

    render(){
        return <Template>
            {this.element}
            <div id="login_bigboy_main">
                <div className={"login_naslov"}>Prijava</div>
                <div id={"login_main_container"}>
                    <div className="login_inputic">
                        <Input tag="Korisničko ime" name="username" placeholder={"Korisničko ime"} type="text"
                               handleChange={e => {this.setState({username: e.target.value})}} />
                        <div id="login_pass_container">
                            <Input tag={"Lozinka"} name={"lozinka"} placeholder={"Lozinka"} type={this.state.input_type}
                                   handleChange={e => {this.setState({password: e.target.value})}} />
                            <img src={this.state.viewIcon} alt="viewlogo" id="view_logo" onClick={() => {this.viewPass()}}/>
                        </div>
                        <button id={"login_button"} onClick={this.submit}>Prijavi se</button>
                    </div>
                </div>
            </div>
        </Template>
    }
}

export default LoginPage