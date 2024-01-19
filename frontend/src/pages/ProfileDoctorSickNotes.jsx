import React from "react";
import Template from "../components/Template";
import "../index.css";
import axios from "axios";
import NavbarButtons from "../components/components/components/NavbarButtons";

import { Link } from "react-router-dom";

import Profile from "../components/components/components/Profile";


class ProfileDoctorSickNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sickLeaveData: [],
        };
    }

    componentDidMount() {
        axios
            .get(`/api/getAllUnapprovedSickLeaves`)
            .then((res) => {
                const sickLeaveArray = res.data; // No need for .parent, it's an array
                this.setState({ sickLeaveData: sickLeaveArray });
                console.log(res.data);
            })
            .catch((error) => {
                console.error("Error fetching patient data:", error);
            });
    }


    render() {
        const sickLeave = this.state.sickLeaveData;
        const patient = this.state.patientData;
        return <Template profil={
                <Profile />} buttons={<NavbarButtons role="LOM"/>}>
                <div id={"patient_list_naslov"} className={"lom_naslovi"}> Preporuke za bolovanje </div>
                <div id={"patient_list_bigboy"}>
                    {sickLeaveData && sickLeaveData.length > 0 ? (
                        sickLeaveData.map((sickLeave) => (
                            <div key={sickLeave.recommendationId} className="patient_list_instance">
                                <div className="patient_list_infobox">
                                    <div className="patient_list_ime_prezime">{`${sickLeave.parent.lastNameParent} ${sickLeave.parent.nameParent}`}</div>
                                    <div className="patient_list_oib">{sickLeave.parent.oib}</div>
                                </div>
                                <div className="patient_list_buttonbox">
                                    <Link to={`/doctor/sicknotes/sicknotesview/${sickLeave.recommendationId}`}>
                                        <button className="patient_list_button">Profil</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="patient_list_instance">
                            <div className="patient_list_infobox">
                                <div className="patient_list_ime_prezime">No data available</div>
                            </div>
                        </div>
                    )}
                </div>
            </Template>
    }
}


export default ProfileDoctorSickNotes;