import React from "react";
import "../../../index.css";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="profile">
            <div>Prijavljen/a: {this.props.lastName} {this.props.name}</div>
            <div>Profil: {this.props.type}</div>
            <button>ODJAVI SE</button>
        </div>
    }
}

export default Profile