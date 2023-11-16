import React from "react";
import { redirect } from 'react-router-dom';
import axios from 'axios';

import Template from "../components/Template";
import Input from "../components/components/Input";
import InputsParagraf from "../components/InputsParagraf";

import "../index.css"

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameParent: null,
            lastNameParent: null,
            oib: null,
            dateOfBirthParent: null,
            placeOfResidence: null,
            postalCode: null,
            phoneNumberParent: null,
            emailParent: null,
            userNameParent: null,
            passwordParent: null,
            employerEmail: null
        }
        this.repPass = null
        this.submit = this.submit.bind(this)
        this.checkInputs = this.checkInputs.bind(this)
    }

    submit() {
        if (this.state.passwordParent != this.repPass) {
            alert("Lozinke se ne podudaraju, pokušajte ponovo.")
        } else if (JSON.stringify(this.state.oib).length != 11) {
            alert("OIB mora imat 11 znakova.")
        } else if (!this.checkInputs()) {
            alert("Molimo da popunite formu u potpunosti.")
        } else {
            axios.post("http://localhost:8080/register", this.state).then(res => {
                if (res.data == 200) {
                    alert("Uspješna registracija.")
                } else {
                    alert("Pogreška u registraciji.")
                }
            })
            console.log(this.state)
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
            <Template>
                <div className="main">
                    <div className="main_naslov">Registracija</div>
                    <div id="register_main_container">
                        <InputsParagraf paragrafTitle="Osnovni podaci">
                            <Input tag="Ime" name="ime" placeholder="Ime" type="text" 
                            handleChange={e => {this.setState({nameParent: e.target.value})}} />

                            <Input tag="Prezime" name="prezime" placeholder="Prezime" type="text"
                            handleChange={e => {this.setState({lastNameParent: e.target.value})}}/>

                            <Input tag="OIB" name="oib" placeholder="OIB" type="number"
                            handleChange={e => {this.setState({oib: e.target.value})}}/>

                            <Input tag="Datum rođenja" name="datum_rod" placeholder="Odaberi datum" type="date"
                            handleChange={e => {this.setState({dateOfBirthParent: e.target.value})}}/>

                            <Input tag="Mjesto prebivališta" name="mjesto_preb" placeholder="Mjesto prebivališta" type="text"
                            handleChange={e => {this.setState({placeOfResidence: e.target.value})}}/>

                            <Input tag="Poštanski broj prebivališta" name="post_broj" placeholder="Poštanski broj" type="text"
                            handleChange={e => {this.setState({postalCode: e.target.value})}}/>
                        </InputsParagraf>
                        
                        <div className="line"></div>
                        <InputsParagraf paragrafTitle="Kontakt podaci">
                            <Input tag="Broj telefona" name="broj_tel" placeholder="+385" type="number"
                            handleChange={e => {this.setState({phoneNumberParent: e.target.value})}}/>
                            
                            <Input tag="Adresa elektroničke pošte" name="email" placeholder="Adresa elektroničke pošte" type="email"
                            handleChange={e => {this.setState({emailParent: e.target.value})}}/>
                        </InputsParagraf>

                        <div className="line"></div>

                        <InputsParagraf paragrafTitle="Podaci za prijavu">
                            <Input tag="Korisničko ime" name="username" placeholder="Korisničko ime" type="text"
                            handleChange={e => {this.setState({userNameParent: e.target.value})}}/>

                            <Input tag="Lozinka" name="lozinka1" placeholder="Lozinka" type="password"
                            handleChange={e => {this.setState({passwordParent: e.target.value})}}/>

                            <Input tag="Ponovi lozinku" name="lozinka2" placeholder="Ponovljena lozinka" type="password"
                            handleChange={e => {this.repPass = e.target.value}}/>
                        </InputsParagraf>
                        
                        <div className="line"></div>

                        <InputsParagraf paragrafTitle="Poslodavac">
                            <Input tag="E-mail poslodavca" name="poslodavac_mail" placeholder="E-mail poslodavca" type="email" 
                            handleChange={e => {this.setState({employerEmail: e.target.value})}}/>
                        </InputsParagraf>
                        <button id="register_button" onClick={this.submit}>Registriraj se</button>
                    </div>
                </div>
            </Template>
        </div>
    }
}

export default RegisterPage