import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarButtons from "../components/components/components/NavbarButtons";

class ProfileDoctorMedicalReport extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
            medrepData: {}
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
        axios.get(`/api/doctor/getPatientReports/${OIB}`).then(res => {

            this.setState({ medrepData: res.data });

        })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });
    }
    render(){
        const medRep = this.state.medrepData;
        const patient = this.state.patientData;

        return <Template buttons={<NavbarButtons role="Doktor" oib={patient.oib}/>}>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Nalazi privatnih ustanova </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    {medRep && Array.isArray(medRep) ? (
                            medRep.map((report) => (
                                <div key={report.reportId} className={"patient_list_instance"}>
                                    <div className={"patient_list_infobox"}>
                                        <div className={"patient_list_ime_prezime"}>{`${patient.lastNameParent} ${patient.nameParent}`}</div>
                                        <div className={"patient_list_oib"}>{new Date(report.dateOfReport).toLocaleDateString()}</div>
                                    </div>
                                    <div className={"patient_list_buttonbox"}>
                                        <Link to={`/doctor/patientprofile/${patient.oib}/medicalreports/medicalreport/${report.reportId}`}>
                                            <button className={"patient_list_button"}>Otvori</button>
                                        </Link>
                                    </div>
                                </div>))
                    ): (
                                <div className={"patient_list_instance"}>
                                    <div className={"patient_list_infobox"}>
                                        <div className={"patient_list_ime_prezime"}>{patient.lastNameParent}</div>
                                        <div className={"patient_list_oib"}>{new Date(medRep.dateOfReport).toLocaleDateString()}</div>
                                    </div>
                                    <div className={"patient_list_buttonbox"}>
                                        <Link to={`/doctor/patientprofile/${patient.oib}/medicalreports/medicalreport/${medRep.reportId}`}>
                                            <button className={"patient_list_button"}>Otvori</button>
                                        </Link>

                                    </div>
                                </div>

                        )}


                </div>
                <div className={"smallboi_right"}>
                    <div className={"smallboi_infobox"}>
                        <div id={"patient_name_textbox"}>{`${patient.lastNameParent} ${patient.nameParent}`}</div>
                        <div id={"patient_oib_textbox"}>{patient.oib}</div>
                    </div>
                </div>
            </div>
        </Template>
    }
}

export default ProfileDoctorMedicalReport