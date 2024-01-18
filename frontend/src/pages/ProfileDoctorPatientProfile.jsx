import React from "react";
import Template from "../components/Template";
import "../index.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarButtons from "../components/components/components/NavbarButtons";

class ProfileDoctorPatientProfile extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
        };
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
    render(){

        const patient = this.state.patientData;

        return <Template buttons={<NavbarButtons role="Doktor" oib={patient.oib}/>}>

            <div className="main">
                <div className={"naslovbox_desno"}>
                    <div className="lom_naslovi doctor_patient_profile_title">{`${patient.lastNameParent} ${patient.nameParent} - Profil`}</div>
                </div>

                <div id="register_main_container">
                    <div>
                        <div className={"lom_naslovi doctor_patient_profile_subtitle"}>Osnovni podaci</div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Ime</div>
                                <div className={"doctor_patient_profile_tekst2"}>{patient.nameParent}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Prezime</div>
                                <div className={"doctor_patient_profile_tekst2"}>{patient.lastNameParent}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>OIB</div>
                                <div className={"doctor_patient_profile_tekst2"}>{patient.oib}</div>
                            </div>
                        </div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Datum rođenja</div>
                                <div className={"doctor_patient_profile_tekst2"}>{patient.dateOfBirthParent}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Mjesto prebivališta</div>
                                <div className={"doctor_patient_profile_tekst2"}>{patient.placeOfResidence}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Poštanski broj prebivališta</div>
                                <div className={"doctor_patient_profile_tekst2"}>{patient.postalCode}</div>
                            </div>
                        </div>
                    </div>

                    <div id={"doctor_patient_profile_line"} className="line"></div>
                    <div>
                        <div className={"lom_naslovi doctor_patient_profile_subtitle"}>Kontakt podaci</div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Broj telefona</div>
                                <div className={"doctor_patient_profile_tekst2"}>{patient.phoneNumberParent}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Adresa elektroničke pošte</div>
                                <div className={"doctor_patient_profile_tekst2"}>{patient.emailParent}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Template>
    }
}

export default ProfileDoctorPatientProfile