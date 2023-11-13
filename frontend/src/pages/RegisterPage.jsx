import React from "react";
import Template from "../components/Template";
import Input from "../components/components/Input";
import InputsParagraf from "../components/InputsParagraf";
import "../index.css"

class RegisterPage extends React.Component {
    render() {
        return <div>
            {/* <Header profil={<Profil />}/> */}
            <Template>
                <div className="main">
                    <div className="main_naslov">Registracija</div>
                    <div id="register_main_container">
                        <InputsParagraf paragrafTitle="Osnovni podaci">
                            <Input tag="Ime" name="ime" placeholder="Ime" type="text"/>
                            <Input tag="Prezime" name="prezime" placeholder="Prezime" type="text"/>
                            <Input tag="OIB" name="oib" placeholder="OIB" type="number"/>
                            <Input tag="Datum rođenja" name="datum_rod" placeholder="Odaberi datum" type="date"/>
                            <Input tag="Mjesto prebivališta" name="mjesto_preb" placeholder="Mjesto prebivališta" type="text"/>
                            <Input tag="Poštanski broj prebivališta" name="post_broj" placeholder="Poštanski broj" type="text"/>
                        </InputsParagraf>
                        
                        <div className="line"></div>
                        <InputsParagraf paragrafTitle="Kontakt podaci">
                            <Input tag="Broj telefona" name="broj_tel" placeholder="+385" type="number"/>
                            <Input tag="Adresa elektroničke pošte" name="email" placeholder="Adresa elektroničke pošte" type="email"/>
                        </InputsParagraf>

                        <div className="line"></div>

                        <InputsParagraf paragrafTitle="Podaci za prijavu">
                            <Input tag="Korisničko ime" name="username" placeholder="Korisničko ime" type="text"/>
                            <Input tag="Lozinka" name="lozinka1" placeholder="Lozinka" type="password"/>
                            <Input tag="Ponovi lozinku" name="lozinka2" placeholder="Ponovljena lozinka" type="password"/>
                        </InputsParagraf>
                        
                        <div className="line"></div>

                        <InputsParagraf paragrafTitle="Poslodavac">
                            <Input tag="E-mail poslodavca" name="poslodavac_mail" placeholder="E-mail poslodavca" type="email"></Input>
                        </InputsParagraf>
                        <button id="register_button">Registriraj se</button>
                    </div>
                </div>
            </Template>
        </div>
    }
}

export default RegisterPage