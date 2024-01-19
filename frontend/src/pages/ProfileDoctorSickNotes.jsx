import React from "react";
import Template from "../components/Template";
import "../index.css";
import axios from "axios";
import NavbarButtons from "../components/components/components/NavbarButtons";

class ProfileDoctorSickNotes extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
            sickLeaveData: {}
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


        axios.get(`/api/getAllUnapprovedSickLeaves`).then(res => {
                this.setState({ sickLeaveData: res.data });
            }
        )
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });
    }
    render(){
        const sickLeave = this.state.sickLeaveData;
        const patient = this.state.patientData;
        return <Template buttons={<NavbarButtons role="LOM"/>}>
            <div id={"patient_list_naslov"} className={"lom_naslovi"}> Preporuke za bolovanje </div>
            <div id={"patient_list_bigboy"}>




                <div className={"patient_list_instance"}>
                    <div className={"patient_list_infobox"}>
                        <div className={"patient_list_ime_prezime"}>Prezime Ime</div>
                        <div className={"patient_list_oib"}>{sickLeave.parentOib}</div>
                    </div>
                    <div className={"patient_list_buttonbox"}>
                        <button className={"patient_list_button"}>Otvori</button>
                    </div>
                </div>
                <div className={"patient_list_instance"}>
                    <div className={"patient_list_infobox"}>
                        <div className={"patient_list_ime_prezime"}>Prezime Ime</div>
                        <div className={"patient_list_oib"}>12345678910</div>
                    </div>
                    <div className={"patient_list_buttonbox"}>
                        <button className={"patient_list_button"}>Otvori</button>
                    </div>
                </div>


            </div>
        </Template>
    }
}

export default ProfileDoctorSickNotes