import React from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Template from "../components/Template";
import Input from "../components/components/Input";
import InputsParagraf from "../components/InputsParagraf";

import "../index.css"

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            surname:null,
            oib: null,
            dateOfBirth: null,
            placeOfResidence: null,
            postalCode: null,
            phoneNumber: null,
            emailAddress: null,
            username: null,
            password: null,
            employerEmailAddress: null
        }
        this.submit = this.submit.bind(this);
        this.checkInputs = this.checkInputs.bind(this);
        this.element = null;
        this.repPass = null;
    }

    submit() {
        if (!this.checkInputs()) {
            alert("Molimo da popunite formu u potpunosti.")
        } else if (this.state.password != this.repPass) {
            alert("Lozinke se ne podudaraju, pokušajte ponovo.")
        } else if (this.state.oib.length != 11) {
            alert("OIB mora imat 11 znakova.")
        } else {
            axios.post("/api/register", this.state).then(res => {
                if (res.data == "OK") {
                    this.element = <Navigate to="/" replace={true}/>
                    this.forceUpdate()
                } else {
                    alert("Pogreška u registraciji.")
                }
            }).catch((e) => {
                alert(e);
            })   
        }
        console.log(this.state)
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
            <Template>
                <div className="main">
                    <div className="main_naslov">Registracija</div>
                    <div id="register_main_container">
                        <InputsParagraf paragrafTitle="Osnovni podaci">
                            <Input tag="Ime" name="ime" placeholder="Ime" type="text" 
                            handleChange={e => {this.setState({name: e.target.value})}} />

                            <Input tag="Prezime" name="prezime" placeholder="Prezime" type="text"
                            handleChange={e => {this.setState({surname: e.target.value})}}/>

                            <Input tag="OIB" name="oib" placeholder="OIB" type="number"
                            handleChange={e => {this.setState({oib: e.target.value})}}/>

                            <Input tag="Datum rođenja" name="datum_rod" placeholder="YYYY-MM-DD" type="text"
                            handleChange={e => {this.setState({dateOfBirth: e.target.value})}}/>

                            <Input tag="Mjesto prebivališta" name="mjesto_preb" placeholder="Mjesto prebivališta" type="text"
                            handleChange={e => {this.setState({placeOfResidence: e.target.value})}}/>

                            <Input tag="Poštanski broj prebivališta" name="post_broj" placeholder="Poštanski broj" type="text"
                            handleChange={e => {this.setState({postalCode: e.target.value})}}/>
                        </InputsParagraf>
                        
                        <div className="line"></div>
                        <InputsParagraf paragrafTitle="Kontakt podaci">
                            <Input tag="Broj telefona" name="broj_tel" placeholder="+385" type="number"
                            handleChange={e => {this.setState({phoneNumber: e.target.value})}}/>
                            
                            <Input tag="Adresa elektroničke pošte" name="email" placeholder="Adresa elektroničke pošte" type="email"
                            handleChange={e => {this.setState({emailAddress: e.target.value})}}/>
                        </InputsParagraf>

                        <div className="line"></div>

                        <InputsParagraf paragrafTitle="Podaci za prijavu">
                            <Input tag="Korisničko ime" name="username" placeholder="Korisničko ime" type="text"
                            handleChange={e => {this.setState({username: e.target.value})}}/>

                            <Input tag="Lozinka" name="lozinka1" placeholder="Lozinka" type="password"
                            handleChange={e => {this.setState({password: e.target.value})}}/>

                            <Input tag="Ponovi lozinku" name="lozinka2" placeholder="Ponovljena lozinka" type="password"
                            handleChange={e => {this.repPass = e.target.value}}/>
                        </InputsParagraf>
                        
                        <div className="line"></div>

                        <InputsParagraf paragrafTitle="Poslodavac">
                            <Input tag="E-mail poslodavca" name="poslodavac_mail" placeholder="E-mail poslodavca" type="email" 
                            handleChange={e => {this.setState({employerEmailAddress: e.target.value})}}/>
                        </InputsParagraf>
                        <button id="register_button" onClick={this.submit}>Registriraj se</button>
                    </div>
                </div>
            </Template>
        </div>
    }
}

export default RegisterPage