import React from "react";
import Gender from "./Gender";
import Input from "./Input";
import Skills from "./Skills";

function Colone() {
    return (
        <div className="col-lg-6 form-col"  style={{padding: "2% 5%"}}>
            <h1>Employee Info</h1>
            <div className="profile-picture mb-3">
                <label>Profile picture:</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <Input type="text" label="First Name" id="floatingFirstName" placeholder="John" pattern="[A-Za-z]+" />
            <Input type="text" label="Last Name" id="floatingLastName" placeholder="Doe" pattern="[A-Za-z]+" />
            <Gender />
            <Input type="date" label="D.O.B" id="floatingDOB" />
            <Skills />

    </div>
    );
}

export default Colone;