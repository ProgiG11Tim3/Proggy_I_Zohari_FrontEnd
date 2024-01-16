import React from "react";
import "../index.css"

class Patient extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="patient_profile">
            <div className="patient_type">{this.props.type}</div>
            <div className="patient_info">
                {this.props.name} {this.props.lastname} <br />
                {this.props.oib} <br />
                {this.props.mail}
            </div>
            <button className="patient_button">Profil {this.props.type}</button>
        </div>
    }
}

export default Patient; 