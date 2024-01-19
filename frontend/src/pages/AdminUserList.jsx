import React, { Component } from "react";
import Template from "../components/Template";
import "../index.css";
import axios from "axios";
import { Link } from "react-router-dom";

class AdminUserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            userJsonArray: []
        };
    }

    componentDidMount() {
        // Fetch patient data from the backend when the component mounts
        axios.get("/api/admin/getAllParents")
            .then(response => {
                const patients = response.data;

                // Extract userJson from each patient and store it in a new array
                const userJsonArray = patients.map(patient => patient.userJson);

                // Set the state with the extracted userJsonArray
                this.setState({ patients: userJsonArray });

                // Log the userJsonArray to the console
                console.log(userJsonArray);
            })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });
    }
    render(){
        const patient = this.state.patients;
        return <Template>
            <div id={"patient_list_naslov"} className={"lom_naslovi"}> Popis korisnika: roditelji </div>
            <div id="patient_list_bigboy">
                {this.state.patients && Array.isArray(this.state.patients) ? (
                    this.state.patients.map(patient => (
                        <div key={patient.OIB} className="patient_list_instance">
                            <div className="patient_list_infobox">
                                <div id={"ped_text_color"}  className="patient_list_ime_prezime">
                                    {`${patient.lastNameParent} ${patient.nameParent}`}
                                </div>
                                <div className="patient_list_OIB">
                                    {patient.OIB}
                                </div>
                            </div>
                            <div className="patient_list_buttonbox">
                                <Link to={`/pediatrician/patientprofile/${patient.OIB}`}>
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
                            <div className="patient_list_OIB">
                                {patient.OIB}
                            </div>
                        </div>
                        <div className="patient_list_buttonbox">
                            <Link to={`/pediatrician/patientprofile/${patient.OIB}`}>
                                <button id={"ped_button_color"} className="patient_list_button">Profil</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </Template>
    }
}
export default AdminUserList