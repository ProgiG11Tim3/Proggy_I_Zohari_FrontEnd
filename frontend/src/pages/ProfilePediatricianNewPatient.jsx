import React from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Template from "../components/Template";
import Input from "../components/components/Input";
import InputsParagraf from "../components/InputsParagraf";
import NavbarButtons from "../components/components/components/NavbarButtons";
import Profile from "../components/components/components/Profile";

import "../index.css"

class ProfilePediatricianNewPatient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                nameChild: null,
                lastNameChild: null,
                oib: null,
                dateOfBirthChild: null,
                educationalInstitution: null,
                emailEduInstitution: null,
                parentOIB: null,

        }
        this.submit = this.submit.bind(this)
        this.checkInputs = this.checkInputs.bind(this)
        this.element = null
    }


    submit() {
        if (!this.checkInputs()) {
            alert("Molimo da popunite formu u potpunosti.")
        } else if (this.state.oib.length != 11) {
            alert("OIB mora imat 11 znakova.")
        } else {
            axios.post(`/api/unospacijentchild`, {
                oib: this.state.oib,
                nameChild: this.state.nameChild,
                lastNameChild: this.state.lastNameChild,
                dateOfBirthChild: this.state.dateOfBirthChild,
                educationalInstitution: this.state.educationalInstitution,
                emailEduInstitution: this.state.emailEduInstitution,
                parentOIB: this.state.parentOIB
            })
                .then(res => {
                    if (res.status == 200) {
                        alert("Uspješno!");
                    } else {
                        alert(res);
                    }
                })
                .catch((e) => {
                    alert(e);
                });
        }
    }

    checkInputs() {
        for (const prop in this.state) {
            if (this.state[prop] === null) {
                return false
            }
        }
        return true
    }

    render() {
        return <div>
            {this.element}
            <Template profil={
            <Profile />} buttons={<NavbarButtons role="PED"/>}>
                <div className="main">
                    <div className="main_naslov">Novi pacijent</div>
                    <div id="register_main_container">
                        <InputsParagraf paragrafTitle="Osnovni podaci">
                            <Input tag="Ime" name="ime" placeholder="Ime" type="text"
                                   handleChange={e => {this.setState({nameChild: e.target.value})}} />

                            <Input tag="Prezime" name="prezime" placeholder="Prezime" type="text"
                                   handleChange={e => {this.setState({lastNameChild: e.target.value})}}/>

                            <Input tag="OIB" name="oib" placeholder="OIB" type="text"
                                   handleChange={e => {this.setState({oib: e.target.value})}}/>

                            <Input tag="OIB roditelja" name="oibparent" placeholder="OIB roditelja" type="text"
                                   handleChange={e => {this.setState({parentOIB: e.target.value})}}/>

                            <Input tag="Datum rođenja" name="datum_rod" placeholder="YYYY-MM-DD" type="text"
                                   handleChange={e => {this.setState({dateOfBirthChild: e.target.value})}}/>

                        </InputsParagraf>

                        <div className="line"></div>
                        <InputsParagraf paragrafTitle="Edukacijska ustanova - kontakt podaci">
                            <Input tag="Naziv" name="broj_tel" placeholder="Naziv" type="tekst"
                                   handleChange={e => {this.setState({educationalInstitution: e.target.value})}}/>

                            <Input tag="Adresa elektroničke pošte" name="email" placeholder="Adresa elektroničke pošte" type="email"
                                   handleChange={e => {this.setState({emailEduInstitution: e.target.value})}}/>
                        </InputsParagraf>



                        <button id="register_button" onClick={this.submit}>Unesi pacijenta</button>
                    </div>
                </div>
            </Template>
        </div>
    }
}

export default ProfilePediatricianNewPatient