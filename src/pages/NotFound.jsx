import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const NotFound = () => {
    return (
        <>
            <Navbar />
            <div style={{ textAlign: "center", padding: "100px" }}>
                <h1>404 - Page Not Found</h1>
                <p>The Page you are looking for is currently unavailable</p>
                <Footer />
            </div>
        </>
    );
};

export default NotFound;