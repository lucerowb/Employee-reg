import React from "react";


function TextArea(props) {
    return (
        <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Address" id="floatingAddress" style={{height: "100px"}} ></textarea>
            <label for="floatingAddress">Address</label>
        </div>
    );
}

export default TextArea;