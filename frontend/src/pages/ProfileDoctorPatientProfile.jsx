import React from "react";
import Template from "../components/Template";
import "../index.css";

class ProfileDoctorPatientProfile extends React.Component {
    render(){
        return <Template>
            <div className="main">
                <div className={"naslovbox_desno"}>
                    <div className="lom_naslovi doctor_patient_profile_title">Prezime Ime - Profil</div>
                </div>

                <div id="register_main_container">
                    <div>
                        <div className={"lom_naslovi doctor_patient_profile_subtitle"}>Osnovni podaci</div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Ime</div>
                                <div className={"doctor_patient_profile_tekst2"}>Ime</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Prezime</div>
                                <div className={"doctor_patient_profile_tekst2"}>Prezime</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>OIB</div>
                                <div className={"doctor_patient_profile_tekst2"}>12345678910</div>
                            </div>
                        </div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Datum rođenja</div>
                                <div className={"doctor_patient_profile_tekst2"}>14/01/1990</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Mjesto prebivališta</div>
                                <div className={"doctor_patient_profile_tekst2"}>Mjesto prebivališta</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Poštanski broj prebivališta</div>
                                <div className={"doctor_patient_profile_tekst2"}>Poštanski broj prebivališta</div>
                            </div>
                        </div>
                    </div>

                    <div id={"doctor_patient_profile_line"} className="line"></div>
                    <div>
                        <div className={"lom_naslovi doctor_patient_profile_subtitle"}>Kontakt podaci</div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Broj telefona</div>
                                <div className={"doctor_patient_profile_tekst2"}>099 1234 567</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Adresa elektroničke pošte</div>
                                <div className={"doctor_patient_profile_tekst2"}>ime.prezime@gmail.com</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Template>
    }
}

export default ProfileDoctorPatientProfile