import React, { Component } from "react";
import Template from "../components/Template";
import "../index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ProfileDoctorPatientProfile from "./ProfileDoctorPatientProfile";

class ProfileDoctorPatientList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
        };
    }

    componentDidMount() {
        // Fetch patient data from the backend when the component mounts
        axios.get("/api/doctor/getAllPatients")
            .then(response => {
                this.setState({ patients: response.data });
            })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });
    }
    render(){
        return <Template>
            <div id={"patient_list_naslov"} className={"lom_naslovi"}> Popis pacijenata </div>
            <div id="patient_list_bigboy">
                {this.state.patients.map(patient => (
                    <div key={patient.oib} className="patient_list_instance">
                        <div className="patient_list_infobox">
                            <div className="patient_list_ime_prezime">
                                {`${patient.lastNameParent} ${patient.nameParent}`}
                            </div>
                            <div className="patient_list_oib">
                                {patient.oib}
                            </div>
                        </div>

                        <div className="patient_list_buttonbox">
                            <Link to={'/doctor/patientprofile/${patient.oib}'}>
                                <button className="patient_list_button">Profil</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Template>
    }
}

export default ProfileDoctorPatientList