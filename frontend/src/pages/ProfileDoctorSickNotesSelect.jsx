import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import axios from "axios";
import { Link } from "react-router-dom";
import Profile from "../components/components/components/Profile";


class ProfileDoctorSickNotesSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sickLeaveData: [],
            parent: {}
        };
    }

    componentDidMount() {
        const slid = window.location.href.split('/')[6];
        console.log(slid);
        axios.get(`/api/getSickLeave/${slid}`)
            .then((res) => {
                this.setState({ sickLeaveData: res.data });
                this.setState({ parent: res.data.parent });
                console.log(res.data);
            })
            .catch((error) => {
                console.error("Error fetching patient data:", error);
            });
    }
    handleApproveSickLeave = () => {
        const slid = window.location.href.split("/")[6];
        axios
            .post(`/api/approveSickLeave/${slid}`)
            .then((res) => {
                alert("Uspješno!");
                console.log("Sick leave approved:", res.data);
                // You can add additional logic or redirect the user after approval
            })
            .catch((error) => {
                console.error("Error approving sick leave:", error);
            });
    };

    render(){

        const sickLeave = this.state.sickLeaveData;
        const parentData = this.state.parent;

        return <Template profil={
            <Profile />}>

            <div id={"patient_list_naslov"} className={"lom_naslovi"}> Preporuka za bolovanje </div>
            <div id={"patient_list_bigboy"}>
                <div id={"sickleave_infobox"} className={"flexbox"}>
                        <div className={"lom_podnaslovi"}>Pacijent:</div>
                    <div id={"sickleave_info_subbox"} className={"flexbox"}>
                        <div id={"doctor_sickleave_patient_name"}>{`${parentData.nameParent} ${parentData.lastNameParent}`}</div>
                        <div className={"patient_list_buttonbox"}>
                            <Link to={`/doctor/patientprofile/${parentData.oib}`}>
                                <button id={"sickleave_profile_button"} className={"patient_list_button"}>Profil</button>
                            </Link>

                        </div>
                    </div>


                </div>
                <div className={"lom_podnaslovi"}>Opis razloga za preporuku</div>
                <div id="doctor_sickleave_box_recdata">
                    {sickLeave.recData}
                </div>
                <div className={"button_boxes_apart"}>
                    <div id={"doctor_sickleave_button_backbox"}>
                        <Link to={`/doctor/sicknotes`}>
                            <button id={"doctor_sickleave_button_back"}>Natrag</button>
                        </Link>
                    </div>
                    <div id={"doctor_sickleave_button_submitbox"}>
                        <button id={"doctor_sickleave_button_submit"} onClick={this.handleApproveSickLeave}>Potvrdi</button>
                    </div>

                </div>


            </div>
        </Template>
    }
}

export default ProfileDoctorSickNotesSelect