import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

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

    logout() {
        axios.post("/api/logout").then(res => {
            console.log(res.data)
        })
    }

    render() {
        return <div id="profile">
            <div>Prijavljen/a: {this.state.name} {this.state.surname}</div>
            <div>Profil: {this.state.role}</div>
            <Link to="/" id="logout_button" onClick={this.logout}>ODJAVI SE</Link>
        </div>
    }
}

export default Profile