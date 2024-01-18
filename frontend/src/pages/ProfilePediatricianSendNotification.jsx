import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
class ProfilePediatricianSendNotification extends React.Component {
    render(){
        return <Template>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Obavijest roditelju </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div className={"lom_podnaslovi"}>Naslov obavijesti</div>
                    <div id="doctor_medrep_msg_title_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_medrep_msg_title" placeholder={"Naslov obavijesti"} type="text"/>
                    </div>
                    <div className={"lom_podnaslovi"}>Tekst obavijesti</div>
                    <div id="doctor_medrep_msg_text_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_medrep_msg_text" placeholder={"Tekst obavijesti"} type="text"/>
                    </div>
                    <div id={"doctor_specexam_button_submitbox"} className={"button_boxes_together"}>
                        <button id={"ped_medrep_msg_button_submit"}>Pošalji</button>
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

export default ProfilePediatricianSendNotification