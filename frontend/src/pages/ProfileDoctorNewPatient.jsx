import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import axios from "axios";
import {Navigate} from "react-router-dom";
import NavbarButtons from "../components/components/components/NavbarButtons";

class ProfileDoctorNewPatient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            oib: null,
        }
        this.submit = this.submit.bind(this)
        this.element = null
    }
    submit() {
        if (this.state.oib == null) {
            alert("Molimo da upišete OIB novog pacijenta.");
        } else {
            axios.post(`/api/unospacijentabyoib${this.state.oib}`)
                .then(res => {
                    if (res.data === "OK") {
                        this.element = <Navigate to="/doctor/patientlist" replace={true}/>
                        this.forceUpdate();
                    } else {
                        console.log("Neispravan OIB.");
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }
    render(){
        return <Template buttons={<NavbarButtons role="LOM"/>}>
            <div id="login_bigboy_main">
                <div id={"new_patient_title"}>Novi pacijent</div>
                <div id={"new_patient_main_container"}>
                    <div id="new_patient_inputic">
                        <Input tag="OIB pacijenta" name="new_patient_parent_oib" placeholder={"OIB"} type="text"
                               handleChange={e => {this.setState({oib: e.target.value})}}/>
                        <button id={"new_patient_button"} onClick={this.submit}>Unesi</button>
                    </div>
                </div>
            </div>
        </Template>
    }
}

export default ProfileDoctorNewPatient