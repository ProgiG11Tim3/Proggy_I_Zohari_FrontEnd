import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";

class ProfileDoctorNewPatient extends React.Component {
    render(){
        return <Template>
            <div id="login_bigboy_main">
                <div id={"new_patient_title"}>Novi pacijent</div>
                <div id={"new_patient_main_container"}>
                    <div id="new_patient_inputic">
                        <Input tag="OIB pacijenta" name="username" placeholder={"OIB"} type="text"/>
                        <button id={"new_patient_button"}>Unesi</button>
                    </div>
                </div>
            </div>
        </Template>
    }
}

export default ProfileDoctorNewPatient