import React from "react";

function CheckBox(props) {
    return (
        <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id={props.id} />
              <label className="form-check-label" for={props.id}>{props.label}</label>
        </div>
    );
}

export default CheckBox;