import React from "react";
import axios from "axios";
import Notification from "./Notification";

class PatientNotifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }

    handleCallback = (childData) => {
        this.props.onTrigger(childData);
    };

    componentDidMount() {
        axios.get("/api"+this.props.link+"/getAllNotifications").then(res => {
            const temp = res.data.map(el => (
                <Notification
                button="true"
                onTrigger={this.handleCallback}
                title={el.notificationTitle} 
                content={el.notificationInformation} 
                key={el.notificationId}
                type={"OBAVIJEST"}/>
            ))
            this.setState({notifications: temp});
        })
    }

    render() {
        return <div id="parent_notifications">
            <div id="notification_container_parent">
                <div id="notifications_title">OBAVIJESTI</div>
                <div id="notifications">
                    {this.state.notifications}
                </div>
            </div>
        </div>
    }
}

export default PatientNotifications;