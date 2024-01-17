import React from "react";
import { Navigate } from 'react-router-dom';
import "../index.css"

class Patient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: null
        }
        this.selectProfile = this.selectProfile.bind(this);
    }

    selectProfile() {
        let path = "/patient/"+this.props.oib;
        this.setState({element: <Navigate to={path} state={{
            name: this.props.name,
            surname: this.props.surname,
            oib: this.props.oib,
            role: this.props.role
        }}/>})
    }

    render() {
        return <div className="patient_profile">
            {this.state.element}
            <div className="patient_type">{this.props.role}</div>
            <div className="patient_info">
                {this.props.name} {this.props.surname} <br />
                {this.props.oib} <br />
                {this.props.mail}
            </div>
            <button className="patient_button" onClick={this.selectProfile}>Profil {this.props.role}</button>
        </div>
    }
}

export default Patient; 