import React from "react";


function Country() {
    return (
        <div className="form-floating mb-3">
            <select className="form-select" id="floatingSelect">
              <option selected>Nepal</option>
              <option value="1">India</option>
              <option value="2">USA</option>
              <option value="3">Australia</option>
            </select>
            <label for="floatingSelect">Country</label>
        </div>
    );
}

export default Country;

