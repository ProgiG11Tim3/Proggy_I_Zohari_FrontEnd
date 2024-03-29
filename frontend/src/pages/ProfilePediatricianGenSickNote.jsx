import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import axios from "axios";
import {Navigate} from "react-router-dom";
import NavbarButtons from "../components/components/components/NavbarButtons";
import Profile from "../components/components/components/Profile";

class ProfilePediatricianGenSickNote extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
            noteData: null,
            child: null,
        };
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        const OIB = window.location.href.split('/')[5];

        axios.get(`/api/pediatrician/getPatient/${OIB}`).then(res => {

            this.setState({ patientData: res.data });
        })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });

    }

    submit() {
        if (this.state.noteData == null) {
            alert("Molimo da upišete tekst ispričnice.");
        } else {
            console.log(this.state.patientData);

            // Define the data for both requests
            const addSickNoteData = {
                child: this.state.patientData,
                noteData: this.state.noteData,
            };

            const sendMailData = {
                recipient: this.state.patientData.emailEducationalInstitution,
                msgBody: this.state.noteData,
                subject: "Ispričnica",
            };

            // Make both requests concurrently
            axios.all([
                axios.post("/api/addSickNote", addSickNoteData),
                axios.post("/api/sendMail", sendMailData),
            ])
                .then(axios.spread((addSickNoteRes, sendMailRes) => {
                    if (addSickNoteRes.status === 200 && sendMailRes.status === 200) {
                        console.log("Both requests successful");
                        this.element = <Navigate to="/pediatrician/patientlist" replace={true} />;
                        this.forceUpdate();
                    } else {
                        console.log("One or more requests failed");
                        console.log("addSickNoteRes:", addSickNoteRes);
                        console.log("sendMailRes:", sendMailRes);
                    }
                }))
                .catch((error) => {
                    console.log("Error making requests:", error);
                });
        }
    }
    render(){
        const patient = this.state.patientData;
        return <Template profil={
            <Profile />} buttons={<NavbarButtons role="Pedijatar" oib={window.location.href.split('/')[5]}/>}>
            <div className={"naslovbox_desno"} >
                <div className={"lom_naslovi naslov_desno"}> Generiraj ispričnicu </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div className={"lom_podnaslovi"}>Tekst ispričnice</div>
                    <div id="doctor_medrep_msg_text_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_medrep_msg_text" placeholder={"Tekst ispričnice"} type="text"
                                  onChange={e => {this.setState({noteData: e.target.value})}}/>
                    </div>
                    <div id={"doctor_specexam_button_submitbox"} className={"button_boxes_together"}>
                        <button id={"ped_medrep_msg_button_submit"} onClick={this.submit}>Pošalji</button>
                    </div>
                </div>
                <div className={"smallboi_right"}>
                    <div className={"smallboi_infobox"}>
                        <div id={"patient_name_textbox"}>{`${patient.lastNameChild} ${patient.nameChild}`}</div>
                        <div id={"patient_oib_textbox"}>{patient.oib}</div>
                    </div>
                </div>
            </div>
        </Template>
    }
}

export default ProfilePediatricianGenSickNote