import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-light" id="navigation">
            <a className="navbar-brand logo" href="/">Company</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Header;