import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import NavbarButtons from "../components/components/components/NavbarButtons";

class ProfilePediatricianSpecialistExam extends React.Component {
    render(){
        return <Template buttons={<NavbarButtons role="Pedijatar" oib={window.location.href.split('/')[5]}/>}>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Specijalistički pregled </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div id={"doctor_specexam_box"} className={"flexbox"}>
                        <div className={"lom_podnaslovi doctor_newexam_titles1"}>OIB pacijenta</div>
                        <div id="doctor_specexam_input">
                            <Input name="doctor_specexam_oib" placeholder={"OIB AUTOMATSKI"} type="text"/>
                        </div>
                    </div>
                    <div className={"lom_podnaslovi"}>Vrsta specijalističkog pregleda</div>
                    <div id="doctor_specexam_type_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_specexam_type" placeholder={"Vrsta specijalističkog pregleda"} type="text"/>
                    </div>
                    <div className={"lom_podnaslovi"}>Popis mogućih lokacija pregleda</div>
                    <div id="doctor_specexam_location_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_specexam_location" placeholder={"Popis mogućih lokacija pregleda"} type="text"/>
                    </div>
                    <div id={"doctor_specexam_button_submitbox"} className={"button_boxes_together"}>
                        <button id={"ped_specexam_button_submit"}>Učitaj</button>
                    </div>
                </div>
                <div className={"smallboi_right"}>
                    <div className={"smallboi_infobox"}>
                        <div id={"patient_name_textbox"}>Prezime Ime</div>
                        <div id={"patient_oib_textbox"}>OIB</div>
                    </div>
                </div>
            </div>
        </Template>
    }
}

export default ProfilePediatricianSpecialistExam