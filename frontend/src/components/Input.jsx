import React from "react";

import "../index.css"

class Input extends React.Component {
    render() {
        return <div className="input_container">
            <div className="input_tag">{this.props.tag}</div>
            <input type="text" name={this.props.name} placeholder={this.props.placeholder}></input>
        </div>
    }
}

export default Input