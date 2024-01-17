import React from "react";
import axios from "axios";
import Exam from "./Exam";

class MedicalHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exams: []
        }
    }

    componentDidMount() {
        axios.get("/api"+this.props.link+"/getAllSelectedNotifications").then(res => {
            console.log(res.data);
            const temp = res.data.map(el => (
                <Exam title={el.examinationId} content={el.diagnosis} date={el.dateOfExamination} key={el.examinationId}/>
            ))
            this.setState({exams: temp});
        })
    }

    render() {
        return <div id="notification_container_parent">
            <div id="notifications_title">Povijest liječničkih pregleda</div>
            <div id="notifications">
                {this.state.exams}
            </div>
        </div>
    }
}

export default MedicalHistory;