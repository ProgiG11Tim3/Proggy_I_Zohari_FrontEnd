import React from "react";
import axios from "axios";

import "../../../index.css";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            surname: null,
            role: null
        }
    }

    componentDidMount() {
        axios.get("/api/currentLoggedInUserDetails").then(res => {
            this.setState(res.data);
        })
    }

    render() {
        return <div id="profile">
            <div>Prijavljen/a: {this.state.name} {this.state.surname}</div>
            <div>Profil: {this.state.role}</div>
            <button>ODJAVI SE</button>
        </div>
    }
}

export default Profile