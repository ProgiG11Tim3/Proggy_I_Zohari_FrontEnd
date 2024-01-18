import React from "react";
import axios from "axios";

class LoadFindings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    onFileChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0],
        });
        console.log(e.target.files[0])
    }

    uploadFile = () => {
        if(this.state.selectedFile != null) {
            let formData = new FormData();
            formData.append("file", this.state.selectedFile);
            axios.post("/api/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(e => console.log(e));
        }
    }

    render() {
        return <div id="parent_notifications">
            <div id="notification_container_parent">
                <div id="notifications_title">Učitavanje nalaza</div>
                <div id="notifications">
                    <div id="file_selector">
                        <div className="selector_text">Učitajte nalaz u PDF formatu na Vaš profil</div>
                        <label id="select_file_button">
                            <input type="file" onChange={this.onFileChange}/>
                            Odaberite PDF dokument
                        </label>
                        <div className="selector_text">Ili kliknite i povucite</div>
                    </div>
                    <br></br>
                    <div id="popratna_naslov">Unesite popratnu poruku:</div>
                    <textarea id="popratna_poruka"/>
                    <button id="load_file_button" onClick={this.uploadFile}>UČITAJ</button>
                </div>
            </div>
        </div>
    }
}

export default LoadFindings;