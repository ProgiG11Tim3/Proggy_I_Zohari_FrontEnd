import React from "react";
import axios from "axios";
import SpecialistExam from "./SpecialistExam";

class SpecialistExams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifs: []
        }
    }

    handleCallback = (childData) => {
        this.props.onTrigger(childData);
    };

    componentDidMount() {
        axios.get("/api"+ this.props.link +"/getAllSelectedSpecialistExaminations").then(res => {
            const temp = res.data.map(el => (
                <SpecialistExam 
                title={el.examTitle} 
                content={el.examLocations} 
                key={el.examId}
                onTrigger={this.handleCallback}
                type={"PREGLED"}/>
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