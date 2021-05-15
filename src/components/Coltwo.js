import React from "react";
import Country from "./Country";
import Input from "./Input";
import Phone from "./Phone";
import TextArea from "./TextArea";

function Coltwo() {
    return (
        <div className="col-lg-6 form-col2" style={{padding: "2% 5%"}}>
            <h1>Contact Details</h1>
            <Phone />
            <Input type="email" label="Email address" id="floatingEmail" placeholder="example@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            <TextArea />
            <Country />
            <button type="submit" className="btn btn-dark ms-auto mb-3">Submit</button>
        </div>
    );
}

export default Coltwo;