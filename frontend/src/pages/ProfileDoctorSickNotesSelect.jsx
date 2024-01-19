import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import Profile from "../components/components/components/Profile";

class ProfileDoctorSickNotesSelect extends React.Component {
    render(){
        return <Template profil={
            <Profile />}>
            <div id={"patient_list_naslov"} className={"lom_naslovi"}> Preporuka za bolovanje </div>
            <div id={"patient_list_bigboy"}>
                <div id={"sickleave_infobox"} className={"flexbox"}>
                        <div className={"lom_podnaslovi"}>Pacijent:</div>
                    <div id={"sickleave_info_subbox"} className={"flexbox"}>
                        <div id={"doctor_sickleave_patient_name"}>Prezime Ime</div>
                        <div className={"patient_list_buttonbox"}>
                            <button id={"sickleave_profile_button"} className={"patient_list_button"}>Profil</button>
                        </div>
                    </div>


                </div>
                <div className={"lom_podnaslovi"}>Opis razloga za preporuku</div>
                <div id="doctor_sickleave_box_recdata">
                       Opis povucen
                </div>
                <div className={"lom_podnaslovi"}>Trajanje bolovanja</div>
                <div id="doctor_sickleave_duration">
                        Trajanje povuceno
                </div>
                <div className={"button_boxes_apart"}>
                    <div id={"doctor_sickleave_button_backbox"}>
                        <button id={"doctor_sickleave_button_back"}>Natrag</button>
                    </div>
                    <div id={"doctor_sickleave_button_submitbox"}>
                        <button id={"doctor_sickleave_button_submit"}>Potvrdi</button>
                    </div>

                </div>


            </div>
        </Template>
    }
}

export default ProfileDoctorSickNotesSelect