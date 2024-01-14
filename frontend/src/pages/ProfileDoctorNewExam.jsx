import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
class ProfileDoctorNewExam extends React.Component {
    render(){
        return <Template>
            <div id={"doctor_newexam_naslovbox"} >
                <div id={"doctor_newexam_naslov"} className={"lom_naslovi"}> Novi pregled </div>
            </div>


            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div className={"doctor_newexam_flexbox"}>
                        <div id={"doctor_newexam_oibbox"}>
                            <div className={"lom_podnaslovi doctor_newexam_titles1"}>OIB pacijenta</div>
                            <div id="doctor_newexam_input">
                                <Input name="doctor_newexam_oib" placeholder={"OIB AUTOMATSKI"} type="text"/>
                            </div>
                        </div>
                        <div id={"doctor_newexam_datebox"}>
                            <div className={"lom_podnaslovi doctor_newexam_titles1"}>Datum pregleda</div>
                            <div id="doctor_newexam_input">
                                <Input name="doctor_newexam_date" placeholder={"Broj dana"} type="date"/>
                            </div>
                        </div>
                    </div>
                    <div className={"lom_podnaslovi"}>Opis dijagnoze</div>
                    <div id="doctor_newexam_diagnosis_input">
                        <textarea name="doctor_newexam_diagnosis" placeholder={"Opis dijagnoze"} type="text"/>
                    </div>

                    <div className={"doctor_newexam_flexbox"}>
                        <div className={"lom_podnaslovi doctor_newexam_titles1"}>Dodati dijagnozu u medicinski karton: </div>
                        <div id="doctor_newexam_currentdiagnosis">
                            <Input name="doctor_newexam_currentdiagnosis" type="checkbox"/>
                        </div>
                    </div>

                    <div className={"button_boxes_together"}>
                        <div id={"doctor_newexam_button_giveupbox"}>
                            <button id={"doctor_newexam_button_giveup"}>Odustani</button>
                        </div>
                        <div id={"doctor_newexam_button_submitbox"}>
                            <button id={"doctor_newexam_button_submit"}>Učitaj</button>
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

export default ProfileDoctorNewExam