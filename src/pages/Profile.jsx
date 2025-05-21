import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-page">
        <h1>User Profile</h1>
        <p>This is the profile page.</p>
      </div>
      <Footer />
    </>
  );
};
export default Profile;