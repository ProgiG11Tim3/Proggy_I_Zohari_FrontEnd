import React from "react";
import Template from "../components/Template";
import Input from "../components/components/Input";
import "../index.css"
import viewLogo from "../images/viewLogo.png";

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: false,
            input_type: "password"
        }
    }

    viewPass() {
        if(this.state.view == false) {
            this.setState({
                view: true,
                input_type: "text"
            })
        } else {
            this.setState({
                view: false,
                input_type: "password"
            })
        }
    }

    render(){
        return <Template>
                <div id="login_bigboy_main">
                    <div className={"login_naslov"}>Prijava</div>
                    <div id={"login_main_container"}>
                        <div className="login_input_container">
                            <Input tag="Korisničko ime" name="username" placeholder={"Korisničko ime"} type="text"/>
                            <div id="login_pass_container">
                                <Input tag={"Lozinka"} name={"lozinka"} placeholder={"Lozinka"} type={this.state.input_type}/>
                                <img src={viewLogo} alt="viewlogo" id="view_logo" onClick={() => {this.viewPass()}}/>
                            </div>


                            <button id={"login_button"}>Prijavi se</button>
                        </div>
                    </div>


                </div>

        </Template>
    }
}

export default LoginPage