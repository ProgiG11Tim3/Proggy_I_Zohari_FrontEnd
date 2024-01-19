import React from "react";
import Template from "../components/Template";
import "../index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Profile from "../components/components/components/Profile";

class ProfilePediatricianMedicalReportOpened extends React.Component {
    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
            medrepData: {},
        };
    }

    componentDidMount() {
        const OIB = window.location.href.split('/')[5];


        axios.get(`/api/pediatrician/getPatient/${OIB}`).then(res => {
            this.setState({ patientData: res.data });
        })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });

        const reportID1 = window.location.href.split('/')[8];
        const reportID = parseInt(reportID1, 10);

        axios.get(`/api/getMedicalReport/${reportID}`).then(res => {
                console.log(res.data.medicalRecord.recordId);
                this.setState({ medrepData: res.data });
            }
        )
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });
   
    }

    download(rID) {
        axios.get(`/api/getFileByReportId/${rID}`).then(e => {
            window.location.assign(`http://localhost:8080/api/getFileByReportId/${rID}`);
        }).catch(() => {});
    }

    render(){
        const medRep = this.state.medrepData;
        console.log(medRep);
        const patient = this.state.patientData;
        return <Template profil={
            <Profile />}>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Nalaz privatne ustanove </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div id={"doctor_medrep_main"} className={"flexbox"}>
                        <div className={"flexbox_column column2"}>
                            <div className={"flexbox_div_1"}>
                                <div id={"doctor_medreport_title1"} className={"lom_podnaslovi"}>Preuzimanje nalaza</div>
                                <div className={"flexbox"}>
                                    <div id="doctor_medreport_pdf" className={"textbox_notfull"} onClick={() => {
                                            this.download(medRep.reportId);
                                        }}>
                                        Preuzmi PDF
                                    </div>
                                    <div id={"doctor_medreport_pdf_name"}>ime_dokumenta.pdf</div>
                                </div>
                            </div>
                            <div className={"flexbox_div_1"}>
                                <div className={"lom_podnaslovi"}>Datum slanja nalaza</div>
                                <div id={"doctor_medreport_date"} className={"textbox_notfull"}>{new Date (medRep.dateOfReport).toLocaleDateString()}</div>
                            </div>
                        </div>

                        <div className={"flexbox_div_2"}>
                            <div className={"lom_podnaslovi"}>Popratna poruka</div>
                            <div id="doctor_medreport_message" className={"textbox_notfull"}>
                                {medRep.reportInformation}
                            </div>
                        </div>
                    </div>


                    <div id={"doctor_medrep_button_submitbox"} className={"button_boxes_together button_down"}>
                        <Link to={`/pediatrician/patientprofile/${patient.oib}/medicalreports/medicalreport/${medRep.reportId}/message`}>
                            <button id={"ped_medrep_button_submit"}>Povratna informacija</button>
                        </Link>
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

export default ProfilePediatricianMedicalReportOpened