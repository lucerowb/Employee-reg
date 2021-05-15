import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
    return (
            <div className="container-fluid" style={{padding: "3% 15%"}}>
                <Header />
                <Content />
                <Footer />
            </div>
        
    );
}

export default App;