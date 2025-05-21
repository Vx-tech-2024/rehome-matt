import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase"; 

const LoginButton = ({ onLogin }) => {
    const handleLogin = async () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            localStorage.setItem("rehome_user", JSON.stringify({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,

            }));
            onLogin(user);
        })
        .catch((error) => {
            console.error("Login failed due to an error:", error);

        });
    };

         return <button onClick={handleLogin}>Sign in with Google </button>;
    };
    export default LoginButton;