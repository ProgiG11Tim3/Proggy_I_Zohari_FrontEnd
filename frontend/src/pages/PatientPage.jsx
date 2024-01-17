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
import SickNotes from "../components/SickNotes";

import "../index.css";

class PatientPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: null,
            isloading: true,
            patient_oib: window.location.href.split('/')[4],
            patientData: {},
            selected: 0
        }/* 
        this.tabs = {
            parent: [
                <PatientNotifications />,
                <MedicalHistory />,
                <SickLeave />,
                <SpecialistExams />,
                <LoadFindings />
            ],
            child: [
                <PatientNotifications />,
                <MedicalHistory />,
                <SickNotes />,
                <SpecialistExams />,
                <LoadFindings />
            ]
        } */
    }

    setCurrent(e) {
        this.setState({selected: e});
    }

    componentDidMount() {
        axios.get("/api/odabirprofila").then(res => {
            res.data.forEach(el => {
                if(el.oib == this.state.patient_oib) {
                    this.setState({patientData: el})
                    this.setState({element: <PatientNotifications link={el.link}/>});
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

        return <Template profil={<Profil 
                lastName={patient.surname} 
                name={patient.name} 
                type={patient.role}/>} 
                buttons={
                    <NavbarButtons role={patient.role} isSelected={e => {
                        console.log(e)
                        this.setState({selected: e});
                        let elem;
                        switch(e) {
                            case "0":
                                elem = <PatientNotifications link={this.state.patientData.link} />;
                                break;
                            case "1":
                                elem = <MedicalHistory link={this.state.patientData.link} />;
                                break;
                            case "2":
                                if(patient.role == "Parent") {
                                    elem = <SickLeave link={this.state.patientData.link} />;
                                    break;
                                } else {
                                    elem = <SickNotes link={this.state.patientData.link} />;
                                    break;
                                }
                            case "3":
                                elem = <SpecialistExams link={this.state.patientData.link} />;
                                break;
                            case "4":
                                elem = <LoadFindings link={this.state.patientData.link} />;
                                break;
                            default:
                                console.log("nuthin")
                        }
                        this.setState({element: elem});
                    }}/>
                }>
            {this.state.element}
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