import React from "react";
import Template from "../components/Template";
import "../index.css";
import axios from "axios";
import {Navigate} from "react-router-dom";
import NavbarButtons from "../components/components/components/NavbarButtons";

class ProfilePediatricianSpecialistExam extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
            examTitle: null,
            examLocations: null,
            options: []
        };
        this.submit = this.submit.bind(this);
        this.selected = null;
        this.medicalRecord = null;
    }

    componentDidMount() {
        const OIB = window.location.href.split('/')[5];

        axios.get(`/api/pediatrician/getPatient/${OIB}`).then(res => {
            this.setState({ patientData: res.data });

            axios.get(`/api/pediatrician/getPatientRecord/${OIB}`).then(res => {
                console.log(res.data);
                this.medicalRecord = res.data;
                this.setState({ medicalRecord: res.data });
            })
                .catch(error => {
                    console.error("Error fetching patient data:", error);
                });
        }).catch(error => {
                console.error("Error fetching patient data:", error);
            });
        
        axios.get("/api/getAllHospitalLocations").then(res => {
            const temp = [];
            res.data.forEach(loc => {
                temp.push(
                    <option key={loc.hospitalLocationId} className="option_loc" value={loc.hospitalName}>{loc.hospitalName}</option>
                )
            })
            this.setState({options: temp})
        })

    }

    submit = () => {
        if (this.state.examTitle == null || this.selected == null || this.medicalRecord == null) {
            alert("Molimo da upišete naslov i odaberete lokaciju.");
        } else {
            axios.post(`/api/addSpecialistExamination`, {
                examTitle: this.state.examTitle,
                medicalRecord: this.state.medicalRecord,
                examLocations: this.selected
            })
                .then(res => {
                    if (res.status == 200) {
                        this.element = <Navigate to="/pediatrician/patientlist" replace={true}/>
                        this.forceUpdate();
                        console.log("success")
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
        return <Template profil={
            <Profil />} buttons={<NavbarButtons role="Pedijatar" oib={window.location.href.split('/')[5]}/>}>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Specijalistički pregled </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div className={"lom_podnaslovi"}>Vrsta specijalističkog pregleda</div>
                    <div id="doctor_specexam_type_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_specexam_type" placeholder={"Vrsta specijalističkog pregleda"}
                                  onChange={e => {this.setState({examTitle: e.target.value})}}/>
                    </div>
                    {/* <div className={"lom_podnaslovi"}>Popis mogućih lokacija pregleda</div>
                    <div id="doctor_specexam_location_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_specexam_location" placeholder={"Popis mogućih lokacija pregleda"}
                                  onChange={e => {this.setState({examLocations: e.target.value})}}/>
                    </div> */}
                    <select className="select_location" onChange={e => {
                        this.selected = e.target.value;
                    }}>
                        <option value={null}>~ ODABERI BOLNICU ~</option>
                        {this.state.options}
                    </select>
                    <div id={"doctor_specexam_button_submitbox"} className={"button_boxes_together"}>
                        <button id={"ped_specexam_button_submit"} onClick={this.submit}>Učitaj</button>
                    </div>
                </div>
                <div className={"smallboi_right"}>
                    <div className={"smallboi_infobox"}>
                        <div id={"patient_name_textbox"}>{`${patient.lastNameChild} ${patient.nameChild}`}</div>
                        <div id={"patient_oib_textbox"}>{patient.oib}</div>
                    </div>
                </div>
            </div>
        </Template>
    }
}

export default ProfilePediatricianSpecialistExam