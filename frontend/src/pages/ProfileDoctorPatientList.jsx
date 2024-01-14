import React from "react";
import Template from "../components/Template";
import "../index.css";

class ProfileDoctorPatientList extends React.Component {
    render(){
        return <Template>
            <div id={"patient_list_naslov"} className={"lom_naslovi"}> Popis pacijenata </div>
            <div id={"patient_list_bigboy"}>
                <div className={"patient_list_instance"}>
                    <div className={"patient_list_infobox"}>
                        <div className={"patient_list_ime_prezime"}>Prezime Ime</div>
                        <div className={"patient_list_oib"}>12345678910</div>
                    </div>
                    <div className={"patient_list_buttonbox"}>
                        <button className={"patient_list_button"}>Profil</button>
                    </div>
                </div>
                <div className={"patient_list_instance"}>
                    <div className={"patient_list_infobox"}>
                        <div className={"patient_list_ime_prezime"}>Prezime Ime</div>
                        <div className={"patient_list_oib"}>12345678910</div>
                    </div>
                    <div className={"patient_list_buttonbox"}>
                        <button className={"patient_list_button"}>Profil</button>
                    </div>
                </div>


            </div>
        </Template>
    }
}

export default ProfileDoctorPatientList