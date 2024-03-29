import React from "react";
import axios from "axios";

import Leave from "./Leave";

class SickLeave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leaves: []
        }
    }

    handleCallback = (childData) => {
        this.props.onTrigger(childData);
    };

    componentDidMount() {
        axios.get("/api/getAllSickLeaves").then(res => {
            const temp = res.data.map(el => (
                <Leave 
                title={"Preporuka za bolovanje"}
                content={el.recData} 
                from={el.parent.doctor.nameDoctor + " " + el.parent.doctor.lastNameDoctor} 
                key={el.recommendationId}
                onTrigger={this.handleCallback}
                type={"BOLOVANJE"}/>
            ))
            this.setState({leaves: temp});
        })
    }

    render() {
        return <div id="parent_notifications">
            <div id="notification_container_parent">
                <div id="notifications_title">Potvrđena bolovanja</div>
                <div id="notifications">
                    {this.state.leaves}
                </div>
            </div>
        </div>
    }
}

export default SickLeave;