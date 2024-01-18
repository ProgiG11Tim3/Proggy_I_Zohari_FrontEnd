import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import axios from "axios";
import {Navigate} from "react-router-dom";
class ProfilePediatricianGenSickNote extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
            recData: null,
            doctor: null,
            parent: null,
            employerEmail: null
        };
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        const OIB = window.location.href.split('/')[5];

        axios.get(`/api/pediatrician/getPatient/${OIB}`).then(res => {
            console.log(res.data);
            this.setState({ patientData: res.data });

            const IDdoc = this.state.patientData.parent.doctorId;
            axios.get(`/api/getDoctor/${IDdoc}`).then(res => {
                console.log(IDdoc);
                this.setState({ doctor: res.data });
            })
                .catch(error => {
                    console.error("Error fetching patient data:", error);
                });


        })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });


    }

    submit() {
        if (this.state.recData == null) {
            alert("Molimo da upišete tekst ispričnice.");
        } else {
            axios.post(`/api/addSickNote`, {
                doctor: this.state.doctor,
                recData: this.state.recData,
                employerEmail: this.state.patientData.parent.employerEmail,
                parent: this.state.patientData.parent,

            })
                .then(res => {
                    if (res.data == "200") {
                        this.element = <Navigate to="/pediatrician/patientlist" replace={true}/>
                        this.forceUpdate();
                    } else {
                        console.log(res);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }
    render(){

        const patient = this.state.patientData;
        return <Template>

            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Generiraj preporuku o bolovanju </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div className={"lom_podnaslovi"}>Tekst preporuke o bolovanju</div>
                    <div id="doctor_medrep_msg_text_input" className={"doctor_specexam_input"}>
                        <textarea name="doctor_medrep_msg_text" placeholder={"Tekst preporuke o bolovanju"} type="text"
                                  onChange={e => {this.setState({recData: e.target.value})}}/>
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