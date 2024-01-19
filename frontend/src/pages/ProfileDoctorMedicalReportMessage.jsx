import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import axios from "axios";
import {Navigate} from "react-router-dom";
import Profile from "../components/components/components/Profile";

class ProfileDoctorMedicalReportMessage extends React.Component {
    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
            notificationTitle: null,
            notificationInformation: null,
            parent: null
        };
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        const OIB = window.location.href.split('/')[5];

        axios.get(`/api/doctor/getPatient/${OIB}`).then(res => {
            console.log(res.data);
            this.setState({ patientData: res.data });
        })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });

    }

    submit() {
        if (this.state.notificationTitle == null || this.state.notificationInformation == null) {
            alert("Molimo da upišete i naslov obavijesti i tekst obavijesti.");
        } else {
            axios.post(`/api/addNotification`, {
                parent: this.state.patientData,
                child: null,
                notificationTitle: this.state.notificationTitle,
                notificationInformation: this.state.notificationInformation,

            })
                .then(res => {
                    if (res.data == "200") {
                        alert("Uspješno!");
                    } else {
                        console.log(res);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }
    render(){
        const patient = this.state.patientData;
        this.state.parentOib = patient.oib;

        return <Template profil={
            <Profile />}>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Nalaz privatne ustanove - poruka </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div className={"lom_podnaslovi"}>Naslov obavijesti</div>
                    <div id="doctor_medrep_msg_title_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_medrep_msg_title" placeholder={"Naslov obavijesti"}
                                  onChange={e => {this.setState({notificationTitle: e.target.value})}}/>
                    </div>
                    <div className={"lom_podnaslovi"}>Tekst obavijesti</div>
                    <div id="doctor_medrep_msg_text_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_medrep_msg_text" placeholder={"Tekst obavijesti"}
                                  onChange={e => {this.setState({notificationInformation: e.target.value})}}/>
                    </div>
                    <div id={"doctor_specexam_button_submitbox"} className={"button_boxes_together"}>
                        <button id={"doctor_medrep_msg_button_submit"} onClick={this.submit}>Pošalji</button>
                    </div>
                </div>
                <div className={"smallboi_right"}>
                    <div className={"smallboi_infobox"}>
                        <div id={"patient_name_textbox"}>{`${patient.lastNameParent} ${patient.nameParent}`}</div>
                        <div id={"patient_oib_textbox"}>{patient.oib}</div>
                    </div>
                </div>
            </div>
        </Template>
    }
}

export default ProfileDoctorMedicalReportMessage