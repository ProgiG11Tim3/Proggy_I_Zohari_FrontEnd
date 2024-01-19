import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import NavbarButtons from "../components/components/components/NavbarButtons";

class ProfilePediatricianMedicalReport extends React.Component {
    render(){
        return <Template buttons={<NavbarButtons role="Pedijatar" oib={window.location.href.split('/')[5]}/>}>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Nalazi privatnih ustanova </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div className={"patient_list_instance"}>
                        <div className={"patient_list_infobox"}>
                            <div className={"patient_list_ime_prezime ped_text_color"}>Prezime Ime</div>
                            <div className={"patient_list_oib"}>datum nalaza</div>
                        </div>
                        <div className={"patient_list_buttonbox"}>
                            <button className={"patient_list_button ped_button_color"}>Otvori</button>
                        </div>
                    </div>
                    <div className={"patient_list_instance"}>
                        <div className={"patient_list_infobox"}>
                            <div className={"patient_list_ime_prezime ped_text_color"}>Prezime Ime</div>
                            <div className={"patient_list_oib"}>datum nalaza</div>
                        </div>
                        <div className={"patient_list_buttonbox"}>
                            <button className={"patient_list_button ped_button_color"}>Otvori</button>
                        </div>
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

export default ProfilePediatricianMedicalReport