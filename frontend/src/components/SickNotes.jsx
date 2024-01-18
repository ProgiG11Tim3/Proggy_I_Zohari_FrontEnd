import React from "react";
import axios from "axios";

import Notification from "./Notification";

class SickNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        axios.get("/api"+this.props.link+"/getAllSickNotes").then(res => {
            const temp = res.data.map(el => (
                <Notification title={"Ispričnica"} content={el.noteData} key={el.excuseNoteId}/>
            ))
            this.setState({notes: temp});
        })
    }

    render() {
        return <div id="parent_notifications">
            <div id="notification_container_parent">
                <div id="notifications_title">Generirane ispričnice</div>
                <div id="notifications">
                    {this.state.notes}
                </div>
            </div>
        </div>
    }
}

export default SickNotes;