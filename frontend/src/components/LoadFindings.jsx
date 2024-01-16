import React from "react";
import Notification from "./Notification";
import Input from "./components/Input";

class LoadFindings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="parent_notifications">
            <div id="notification_container_parent">
                <div id="notifications_title">Učitavanje nalaza</div>
                <div id="notifications">
                    <div id="file_selector">
                        <div className="selector_text">Učitajte nalaz u PDF formatu na Vaš profil</div>
                        <label id="select_file_button">
                            <input type="file"/>
                            Odaberite PDF dokument
                        </label>
                        <div className="selector_text">Ili kliknite i povucite</div>
                    </div>
                    <br></br>
                    <div id="popratna_naslov">Unesite popratnu poruku:</div>
                    <textarea id="popratna_poruka"/>
                </div>
            </div>
        </div>
    }
}

export default LoadFindings;