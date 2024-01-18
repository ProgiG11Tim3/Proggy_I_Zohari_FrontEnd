import React from "react";
import axios from "axios";

import Template from "../components/Template";
import Profil from "../components/components/components/Profile";
import NavbarButtons from "../components/components/components/NavbarButtons";
import PatientNotifications from "../components/PatientNotifications";
import MedicalHistory from "../components/MedicalHistory";
import SickLeave from "../components/SickLeave";
import SpecialistExams from "../components/SpecialistExams";
import LoadFindings from "../components/LoadFindings";
import SickNotes from "../components/SickNotes";
import OpenedNotification from "../components/OpenedNotification";
import Map from "../components/Map";

import "../index.css";

class PatientPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: null,
            isloading: true,
            patient_oib: window.location.href.split('/')[4],
            patientData: {},
            selected: 0,
            map: null
        }
    }

    handleCallback = (e) => {
        console.log(e);
        this.setState({element: <OpenedNotification 
            title={e.title} 
            content={e.content} 
            type={e.type}
            onTrigger={this.goBack}
            />
        })
    }

    goBack = () => {
        this.selectTab(this.state.selected)
    }

    selectTab = (e) => {
        let elem;
        switch(e) {
            case "0":
                elem = <PatientNotifications link={this.state.patientData.link}
                onTrigger={this.handleCallback} />;
                    this.setState({map: null});
                break;
            case "1":
                elem = <MedicalHistory link={this.state.patientData.link}
                onTrigger={this.handleCallback} />;
                this.setState({map: null});
                break;
            case "2":
                if(this.state.patientData.role == "Parent") {
                    elem = <SickLeave link={this.state.patientData.link}
                    onTrigger={this.handleCallback} />;
                    this.setState({map: null});
                    break;
                } else {
                    elem = <SickNotes link={this.state.patientData.link}
                    onTrigger={this.handleCallback} />;
                    this.setState({map: null});
                    break;
                }
            case "3":
                elem = <SpecialistExams link={this.state.patientData.link} />;
                this.setState({map: <Map />});
                break;
            case "4":
                elem = <LoadFindings link={this.state.patientData.link} />;
                this.setState({map: null});
                break;
            default:
                console.log("nuthin")
        }
        this.setState({element: elem});
    }

    componentDidMount() {
        axios.get("/api/odabirprofila").then(res => {
            res.data.forEach(el => {
                if(el.oib == this.state.patient_oib) {
                    this.setState({patientData: el})
                    this.setState({element: <PatientNotifications 
                    link={el.link} 
                    onTrigger={this.handleCallback}
                    />});
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

        return <Template profil={
            <Profil 
                lastName={patient.surname} 
                name={patient.name} 
                type={patient.role}
            />} 
                buttons={
                    <NavbarButtons role={patient.role} isSelected={e => {
                        this.setState({selected: e});
                        this.selectTab(e, patient);
                    }}/>
                }>
            {this.state.map}
            <div id="patient_parent">   
                    <div className="patient_profile_right">
                    <div className="patient_type">{this.props.type}</div>
                    <div className="patient_info">
                        {patient.name} {patient.surname} <br />
                        {patient.oib} <br />
                    </div>  
                </div>
            </div>
            {this.state.element}
        </Template>
    }
}

export default PatientPage;