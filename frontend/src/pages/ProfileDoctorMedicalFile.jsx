import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
import axios from "axios";
class ProfileDoctorMedicalFile extends React.Component {

    constructor(props) {
        super(props);
        this.element = null;
        this.state = {
            patientData: {},
            medrecordData: {}
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
        axios.get(`/api/doctor/getPatientRecord/${OIB}`).then(res => {

            this.setState({ medrecordData: res.data });

        })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });
    }
    render(){
        const medRed = this.state.medrecordData;
        const patient = this.state.patientData;
        return <Template>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Liječnički karton </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>
                    <div id={"medical_file_title"} className={"lom_podnaslovi"}>Aktivne dijagnoze</div>
                    <div>
                        {medRed.currentDiagnosis && Array.isArray(medRed.currentDiagnosis) ? (
                            medRed.currentDiagnosis.map((diagnosis, index) => (
                                <div key={index} className={"medical_file_instance"}>
                                    <div className={"medical_file_instance_info"}>{diagnosis}</div>
                                </div>
                            ))
                        ) : (
                            <div className={"medical_file_instance"}>
                                <div className={"medical_file_instance_info"}>
                                    {medRed.currentDiagnosis}
                                </div>
                            </div>
                        )}
                    </div>
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

export default ProfileDoctorMedicalFile