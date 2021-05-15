import React from "react";
import Radio from "./Radio"

function Gender() {
    return (
        <div className="gender mb-3">
            <label>Gender:</label><br />
            <Radio id="inlineRadio1" value="option1" label="Male" />
            <Radio id="inlineRadio2" value="option2" label="Female" />
            <Radio id="inlineRadio3" value="option3" label="Unspecified" />
          </div>
    );
}

export default Gender;