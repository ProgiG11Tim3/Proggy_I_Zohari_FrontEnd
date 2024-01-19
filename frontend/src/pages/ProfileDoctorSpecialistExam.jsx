import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import axios from "axios";
import {Navigate} from "react-router-dom";
class ProfileDoctorSpecialistExam extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
            examTitle: null,
            examLocations: null,
            recordId: null
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


        if (this.state.examTitle == null || this.state.examLocations == null) {
            alert("Molimo da upišete i naslov i lokacije.");
        } else {
            axios.post(`/api/addSpecialistExamination`, {
                examTitle: this.state.examTitle,
                examLocations: this.state.examLocations,
                recordId: this.state.patientData.recordId
            })
                .then(res => {
                    if (res.status == 200) {
                        this.element = <Navigate to="/doctor/patientlist" replace={true}/>
                        this.forceUpdate();
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
        return <Template>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Specijalistički pregled </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div className={"lom_podnaslovi"}>Vrsta specijalističkog pregleda</div>
                    <div id="doctor_specexam_type_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_specexam_type" placeholder={"Vrsta specijalističkog pregleda"} type="text"
                                  onChange={e => {this.setState({examTitle: e.target.value})}}/>
                    </div>
                    <div className={"lom_podnaslovi"}>Popis mogućih lokacija pregleda</div>
                    <div id="doctor_specexam_location_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_specexam_location" placeholder={"Popis mogućih lokacija pregleda"} type="text"
                                  onChange={e => {this.setState({examLocations: e.target.value})}}/>
                    </div>
                    <div id={"doctor_specexam_button_submitbox"} className={"button_boxes_together"}>
                            <button id={"doctor_specexam_button_submit"} onClick={this.submit}>Učitaj</button>
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

export default ProfileDoctorSpecialistExam