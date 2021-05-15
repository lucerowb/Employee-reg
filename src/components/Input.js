import React from "react";

function Input(props) {
    return (
        <div className="form-floating mb-3">
        <input type={props.type} className="form-control" placeholder={props.placeholder} id={props.id} pattern={props.pattern} required />
        <label for={props.id}>{props.label}</label>
    </div>
    );
}

export default Input;


