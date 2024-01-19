import React from "react";
import axios from "axios";

import Template from "../components/Template";
import Profil from "../components/components/components/Profile";
import Patient from "../components/Patient";
import Notification from "../components/Notification";

import "../index.css";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isloading: true,
            parentData: {
                "parentId": null,
                "nameParent": null,
                "lastNameParent": null,
                "dateOfBirthParent": null,
                "userNameParent": null,
                "phoneNumberParent": null,
                "emailParent": null,
                "postalCode": null,
                "placeOfResidence": null,
                "employerEmail": null,
                "oib": null
            },
            notifications: [],
            patients: []
        }
    }

    componentDidMount() {
        axios.get("/api/getLoggedInParent").then(res => {
            this.setState({parentData: res.data});
        });
        axios.get("/api/odabirprofila").then(res => {
            const temp = res.data.map(el => {
                return <Patient role={el.role} name={el.name} surname={el.surname} oib={el.oib} key={el.oib}/>
            })
            this.setState({patients: temp});
        })
        axios.get("/api/getAllParentNotifications").then(res => {
            const temp = res.data.map(el => {
                if(el.child != null) {
                    return (<Notification key={el.notificationId}
                        title={el.notificationTitle}
                        for={el.child.nameChild + " " + el.child.lastNameChild}
                        content={el.notificationInformation}
                        onTrigger={() => {}}
                    />)
                } else {
                    return (<Notification key={el.notificationId}
                        title={el.notificationTitle}
                        for={this.state.parentData.nameParent + " " + this.state.parentData.lastNameParent}
                        content={el.notificationInformation}
                        onTrigger={() => {}}
                    />)
                }
            });
            this.setState({notifications: temp});
        })
        this.setState({isloading: false});
    }

    render() {
        const parent = this.state.parentData;

        if(this.state.isloading) {
            return <div>LOADING</div>
        }

        return <Template profil={<Profil 
        lastName={parent.lastNameParent}
        name={parent.nameParent}
        type={"RODITELJ"}/>}>
            <div id="patients">
                {this.state.patients}
            </div>
            <div id="notification_container">
                <div id="notifications_title">OBAVIJESTI</div>
                <div id="notifications">
                    {this.state.notifications}
                </div>
            </div>
        </Template>
    }
}

export default HomePage