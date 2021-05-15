import React from "react";
import CheckBox from "./CheckBox";

function Skills() {
    return (
        <div className="skills mb-3">
            <label>Skills:</label><br />
            <CheckBox id="java" label="Java" />
            <CheckBox id="javaScript" label="JavaScript" />
            <CheckBox id="python" label="Python" />
            <CheckBox id="cpp" label="C++" />
          </div>
    );
}

export default Skills;