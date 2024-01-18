import React from "react";
import Template from "../components/Template";
import "../index.css";
import axios from "axios";

class ProfilePediatricianPatientProfile extends React.Component {
    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
        };
    }

    componentDidMount() {
        const OIB = window.location.href.split('/')[5];

        axios.get(`/api/pediatrician/getPatient/${OIB}`).then(res => {
            console.log(res);
            this.setState({ patientData: res.data });

        })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });


    }
    render(){
        const patient = this.state.patientData;

        return <Template>
            <div className="main">
                <div className={"naslovbox_desno"}>
                    <div className="lom_naslovi ped_patient_profile_title">{`${patient.lastNameChild} ${patient.nameChild} - Profil`}</div>
                </div>

                <div id="ped_main_container">
                    <div>
                        <div className={"lom_naslovi doctor_patient_profile_subtitle"}>Osnovni podaci</div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Ime</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{patient.nameChild}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Prezime</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{patient.lastNameChild}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>OIB</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{patient.oib}</div>
                            </div>
                        </div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Datum rođenja</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{patient.dateOfBirthChild}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Ime odgojno-obrazovne ustanove</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{patient.educationalInstitution}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Kontakt odgojno-obrazovne ustanove</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{patient.emailEducationalInstitution}</div>
                            </div>
                        </div>
                    </div>

                    <div id={"doctor_patient_profile_line"} className="line"></div>
                    <div>
                        <div className={"lom_naslovi doctor_patient_profile_subtitle"}>Kontakt podaci roditelja</div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Ime i prezime</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{`${this.state.patientData.parent?.lastNameParent} ${this.state.patientData.parent?.nameParent}`}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Mjesto prebivališta</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{this.state.patientData.parent?.placeOfResidence}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Poštanski broj prebivališta</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{this.state.patientData.parent?.postalCode}</div>
                            </div>

                        </div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Broj telefona</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{this.state.patientData.parent?.phoneNumberParent}</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Adresa elektroničke pošte</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>{this.state.patientData.parent?.emailParent}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Template>
    }
}

export default ProfilePediatricianPatientProfile