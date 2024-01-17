import React from "react";
import axios from "axios";
import Notification from "./Notification";

class SpecialistExams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifs: []
        }
    }

    componentDidMount() {
        axios.get("/api"+ this.props.link +"/getAllSelectedSpecialistExaminations").then(res => {
            console.log(res.data);
            const temp = res.data.map(el => (
                <Notification title={el.examTitle} content={el.examLocations} key={el.examId}/>
            ))
            this.setState({notifs: temp});
        })
    }


    render() {
        return <div id="parent_notifications">
            <div id="notification_container_parent">
                <div id="notifications_title">Specijalistički pregledi</div>
                <div id="notifications">
                    {this.state.notifs}
                </div>
            </div>
        </div>
    }
}

export default SpecialistExams;