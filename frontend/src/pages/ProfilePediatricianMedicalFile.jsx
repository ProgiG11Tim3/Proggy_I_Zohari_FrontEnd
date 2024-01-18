import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
class ProfilePediatricianMedicalFile extends React.Component {
    render(){
        return <Template>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Liječnički karton </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div id={"medical_file_title"} className={"lom_podnaslovi"}>Aktivne dijagnoze</div>
                    <div className={"medical_file_instance"}>
                        <div className={"medical_file_instance_info ped_text_color"}>Currentdiagnosis povucena</div>
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

export default ProfilePediatricianMedicalFile