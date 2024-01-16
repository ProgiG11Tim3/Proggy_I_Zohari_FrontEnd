import React from "react";
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
    render() {
        return <Template profil={<Profil />} buttons={<NavbarButtons />}>
            {/* <PatientNotifications name="Ime" lastname="Surname" oib="123456789" mail="mail@mail.com"/> */}
            {/* <OpenedNotification /> */}
            {/* <MedicalHistory /> */}
            {/* <SickLeave /> */}
            {/* <SpecialistExams /> */}
            {/* <LoadFindings /> */}
            <MedicalExcuses />
            <div id="patient_parent">
                    <div className="patient_profile">
                    <div className="patient_type">{this.props.type}</div>
                    <div className="patient_info">
                        Ime Prezime <br />
                        OIB <br />
                        MAIL@MAIL.COM <br />
                        <button id="parent_button">Uredi</button>
                    </div>  
                </div>
            </div>
        </Template>
    }
}

export default PatientPage;