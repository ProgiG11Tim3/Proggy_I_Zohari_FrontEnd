import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import axios from "axios";
import {Navigate} from "react-router-dom";
import NavbarButtons from "../components/components/components/NavbarButtons";

class ProfileDoctorNewExam extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
            diagnosis: null,
            dateOfExamination: null,
            oib: null
        };
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        const OIB = window.location.href.split('/')[5];

        axios.get(`/api/doctor/getPatient/${OIB}`).then(res => {
            console.log(OIB);
            this.setState({ patientData: res.data });
        })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });

    }

    submit() {
        if (this.state.diagnosis == null || this.state.dateOfExamination == null) {
            alert("Molimo da upišete i opis dijagnoze i datum.");
        } else {
            axios.post(`/api/addExamination`, {
                diagnosis: this.state.diagnosis,
                dateOfExamination: this.state.dateOfExamination,
                oib: this.state.patientData.oib
            })
                .then(res => {
                    if (res.data == "200") {
                        this.element = <Navigate to="/doctor/patientlist" replace={true}/>
                        this.forceUpdate();
                    } else {
                        console.log("ne radi");
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }
    render(){
        const patient = this.state.patientData;
        return <Template buttons={<NavbarButtons role="Doktor" oib={patient.oib}/>}>
            <div id={"doctor_newexam_naslovbox"} >
                <div id={"doctor_newexam_naslov"} className={"lom_naslovi"}> Novi pregled </div>
            </div>


            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div className={"doctor_newexam_flexbox"}>

                        <div id={"doctor_newexam_datebox"}>
                            <div className={"lom_podnaslovi doctor_newexam_titles1"}>Datum pregleda</div>
                            <div id="doctor_newexam_input">
                                <Input name="doctor_newexam_date" placeholder={"Broj dana"} type="date"
                                       handleChange={e => {this.setState({dateOfExamination: e.target.value})}}/>
                            </div>
                        </div>
                    </div>
                    <div className={"lom_podnaslovi"}>Opis dijagnoze</div>
                    <div id="doctor_newexam_diagnosis_input">
                        <textarea name="doctor_newexam_diagnosis" placeholder={"Opis dijagnoze"}
                                  onChange={e => {this.setState({diagnosis: e.target.value})}}/>
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
                            <button id={"doctor_newexam_button_submit"} onClick={this.submit}>Učitaj</button>
                        </div>

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

export default ProfileDoctorNewExam