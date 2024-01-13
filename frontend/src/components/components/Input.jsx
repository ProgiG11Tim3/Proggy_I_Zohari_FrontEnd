import React from "react";

import "../../index.css"

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="input_container">
            <div className="input_tag">{this.props.tag}</div>
            <input className="input_box"
                   type={this.props.type}
                   name={this.props.name}
                   placeholder={this.props.placeholder} onChange={this.props.handleChange}/>
        </div>
    }
}

export default Input