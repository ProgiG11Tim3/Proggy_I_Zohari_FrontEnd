import React from "react";
import Template from "../components/Template";
import "../index.css";
import axios from "axios";
import NavbarButtons from "../components/components/components/NavbarButtons";

class ProfilePediatricianPatientProfile extends React.Component {
    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patient: null,
            oib: window.location.href.split('/')[5]
        };
    }

    componentDidMount() {
        // Fetch patient data from the backend when the component mounts
        axios.get("/api/doctor/getPatient/{OIB}")
            .then(response => {
                this.setState({ patient: response.data });
            })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });
    }
    render(){
        const oib = this.state.oib;
        console.log(oib)
        return <Template buttons={<NavbarButtons role="Pedijatar" oib={oib}/>}>
            <div className="main">
                <div className={"naslovbox_desno"}>
                    <div className="lom_naslovi ped_patient_profile_title">Prezime Ime - Profil</div>
                </div>

                <div id="ped_main_container">
                    <div>
                        <div className={"lom_naslovi doctor_patient_profile_subtitle"}>Osnovni podaci</div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Ime</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>Ime</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Prezime</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>Prezime</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>OIB</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>12345678910</div>
                            </div>
                        </div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Datum rođenja</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>14/01/1990</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Ime odgojno-obrazovne ustanove</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>Ime odgojno-obrazovne ustanove</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Kontakt odgojno-obrazovne ustanove</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>Kontakt odgojno-obrazovne ustanove</div>
                            </div>
                        </div>
                    </div>

                    <div id={"doctor_patient_profile_line"} className="line"></div>
                    <div>
                        <div className={"lom_naslovi doctor_patient_profile_subtitle"}>Kontakt podaci roditelja</div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Ime i prezime</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>Ime i prezime</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Mjesto prebivališta</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>Mjesto prebivališta</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Poštanski broj prebivališta</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>Poštanski broj prebivališta</div>
                            </div>

                        </div>
                        <div className={"flexbox"}>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Broj telefona</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>099 1234 567</div>
                            </div>
                            <div className={"flexbox_column doctor_patient_profile"}>
                                <div className={"doctor_patient_profile_tekst1"}>Adresa elektroničke pošte</div>
                                <div className={"doctor_patient_profile_tekst2 ped_text_color"}>ime.prezime@gmail.com</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Template>
    }
}

export default ProfilePediatricianPatientProfile