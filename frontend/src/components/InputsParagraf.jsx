import React from "react";

import "../index.css"

class InputsParagraf extends React.Component {
    render() {
        return <div className="inputs_paragraf">
            <div className="paragraf_title">{this.props.paragrafTitle}</div>
            <div className="register_category_container">
                {this.props.children}
            </div>
        </div>
    }
}

export default InputsParagraf