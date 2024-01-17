import React from "react";
import axios from "axios";

import Template from "../components/Template";
import Profil from "../components/components/components/Profile";
import NavbarButtons from "../components/components/components/NavbarButtons";
import Patient from "../components/Patient";
import Notification from "../components/Notification";
import PatientNotifications from "../components/PatientNotifications";
import OpenedNotification from "../components/OpenedNotification";
import MedicalHistory from "../components/MedicalHistory";
import SickLeave from "../components/SickLeave";
import SpecialistExams from "../components/SpecialistExams";
import LoadFindings from "../components/LoadFindings";
import MedicalExcuses from "../components/MedicalExcuses";

import "../index.css";

class PatientPage extends React.Component {
    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            isloading: true,
            patient_oib: window.location.href.split('/')[4],
            patientData: {}
        }
    }

    componentDidMount() {
        axios.get("/api/odabirprofila").then(res => {
            res.data.forEach(el => {
                if(el.oib == this.state.patient_oib) {
                    this.setState({patientData: el})
                    this.element = <LoadFindings link={el.link}/>;
                }
            })
        })
        this.setState({isloading: false});
    }

    render() {
        const patient = this.state.patientData;

        if(this.state.isloading) {
            return <div>LOADING...</div>
        }


        return <Template profil={<Profil lastName={patient.surname} name={patient.name} type={patient.role}/>} buttons={<NavbarButtons />}>
            {this.element}
            {/* <PatientNotifications link={patient.link}/> */}
            {/* <OpenedNotification /> */}
            {/* <MedicalHistory /> */}
            {/* <SickLeave /> */}
            {/* <SpecialistExams /> */}
            {/* <LoadFindings /> */}
            {/* <MedicalExcuses /> */}
            <div id="patient_parent">   
                    <div className="patient_profile">
                    <div className="patient_type">{this.props.type}</div>
                    <div className="patient_info">
                        {patient.name} {patient.surname} <br />
                        {patient.oib} <br />
                        {patient.mail} <br />
                        <button id="parent_button">Uredi</button>
                    </div>  
                </div>
            </div>
        </Template>
    }
}

export default PatientPage;