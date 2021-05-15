import React from "react";
import Colone from "./Colone";
import Coltwo from "./Coltwo";


function Content() {
    return (
        <form id="form">
            <div className="row justify-content-center content">
                <Colone />
                <Coltwo />
            </div>
        </form>
    );
}

export default Content;