import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
class ProfileDoctorMedicalReportOpened extends React.Component {
    render(){
        return <Template>
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
                                    <div id="doctor_medreport_pdf" className={"textbox_notfull"}>
                                        <div id={"doctor_medreport_pdf_font"}>Preuzmi PDF</div>
                                    </div>
                                    <div id={"doctor_medreport_pdf_name"}>ime_dokumenta.pdf</div>
                                </div>
                            </div>
                            <div className={"flexbox_div_1"}>
                                <div className={"lom_podnaslovi"}>Datum slanja nalaza</div>
                                <div id={"doctor_medreport_date"} className={"textbox_notfull"}> povucen datum</div>
                            </div>
                        </div>

                        <div className={"flexbox_div_2"}>
                            <div className={"lom_podnaslovi"}>Popratna poruka</div>
                            <div id="doctor_medreport_message" className={"textbox_notfull"}>
                                Popratna poruka povucena
                            </div>
                        </div>
                    </div>






                    <div id={"doctor_medrep_button_submitbox"} className={"button_boxes_together button_down"}>
                        <button id={"doctor_medrep_button_submit"}>Povratna informacija</button>
                    </div>
                </div>
                <div className={"smallboi_right"}>
                    <div className={"smallboi_infobox"}>
                        <div id={"patient_name_textbox"}>Prezime Ime</div>
                        <div id={"patient_oib_textbox"}>OIB</div>
                    </div>
                </div>
            </div>
        </Template>
    }
}

export default ProfileDoctorMedicalReportOpened