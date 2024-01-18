import React from "react";
import Template from "../components/Template";
import "../index.css";
import viewLogo from "../images/viewLogo.png";
import axios from "axios";
import {Link} from "react-router-dom";

class ProfilePediatricianPatientList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: [],
        };
    }

    componentDidMount() {
        // Fetch patient data from the backend when the component mounts
        axios.get("/api/pediatrician/getAllPatients")
            .then(response => {
                this.setState({ patients: response.data });
            })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });
    }
    render(){
        const patient = this.state.patients;
        return <Template>
            <div id={"patient_list_naslov"} className={"lom_naslovi"}> Popis pacijenata </div>
            <div id="patient_list_bigboy">
                {this.state.patients && Array.isArray(this.state.patients) ? (
                    this.state.patients.map(patient => (
                        <div key={patient.oib} className="patient_list_instance">
                            <div className="patient_list_infobox">
                                <div id={"ped_text_color"}  className="patient_list_ime_prezime">
                                    {`${patient.lastNameParent} ${patient.nameParent}`}
                                </div>
                                <div className="patient_list_oib">
                                    {patient.oib}
                                </div>
                            </div>
                            <div className="patient_list_buttonbox">
                                <Link to={`/pediatrician/patientprofile/${patient.oib}`}>
                                    <button id={"ped_button_color"} className="patient_list_button">Profil</button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="patient_list_instance">
                        <div className="patient_list_infobox">
                            <div id={"ped_text_color"} className="patient_list_ime_prezime">
                                {`${patient.lastNameParent} ${patient.nameParent}`}
                            </div>
                            <div className="patient_list_oib">
                                {patient.oib}
                            </div>
                        </div>
                        <div className="patient_list_buttonbox">
                            <Link to={`/pediatrician/patientprofile/${patient.oib}`}>
                                <button id={"ped_button_color"} className="patient_list_button">Profil</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </Template>
    }
}

export default ProfilePediatricianPatientList