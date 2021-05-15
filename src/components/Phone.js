import React from "react";
import Input from "./Input";


function Phone() {
    return (
        <div className="row g-2">
            <div className="col-md-3">
                <Input type="text" label="Code" id="floatingcode" placeholder="code +" pattern="^\d*${,3}" />
            </div>
            <div className="col-md">
                <Input type="text" label="Contact No." id="floatingMobile" placeholder="Contact no." pattern="^\d*$" />
            </div>
          </div>
    );
}

export default Phone;