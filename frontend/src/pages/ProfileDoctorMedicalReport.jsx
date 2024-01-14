import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
class ProfileDoctorMedicalReport extends React.Component {
    render(){
        return <Template>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Nalazi privatnih ustanova </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div className={"patient_list_instance"}>
                        <div className={"patient_list_infobox"}>
                            <div className={"patient_list_ime_prezime"}>Prezime Ime</div>
                            <div className={"patient_list_oib"}>datum nalaza</div>
                        </div>
                        <div className={"patient_list_buttonbox"}>
                            <button className={"patient_list_button"}>Otvori</button>
                        </div>
                    </div>
                    <div className={"patient_list_instance"}>
                        <div className={"patient_list_infobox"}>
                            <div className={"patient_list_ime_prezime"}>Prezime Ime</div>
                            <div className={"patient_list_oib"}>datum nalaza</div>
                        </div>
                        <div className={"patient_list_buttonbox"}>
                            <button className={"patient_list_button"}>Otvori</button>
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

export default ProfileDoctorMedicalReport