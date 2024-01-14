import React from "react";
import Template from "../components/Template";
import "../index.css";
import Input from "../components/components/Input";
class TemplateTwoPart extends React.Component {
    render(){
        return <Template>
            <div className={"naslovbox_desno"}>
                <div className={"lom_naslovi naslov_desno"}> Naslov </div>
            </div>
            <div className={"bigboy_left_smallboi_right"}>
                <div className={"bigboy_left"}>

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

export default TemplateTwoPart