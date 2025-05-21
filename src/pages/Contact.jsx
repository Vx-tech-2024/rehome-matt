import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Contact = () => {
    return (
        <div>
            <Navbar />

            <h2>Contact Page</h2>
            <p>
                You can contact us at:{" "}
                <a href="mailto:joelgeorge6505@gmail.com">joelgeorge6505@gmail.com</a>
                </p>

            <Footer />
        </div>
    );
};
export default Contact;