import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const AuthButtonGoogle = () => {
    const firebase = useFirebase();
    //const history = useHistory();

    const signInWithGoogle = () => {
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
    };
    return (
        <div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    signInWithGoogle();
                }}
            >
                Log in with Google
            </button>
        </div>
    );
};

export default AuthButtonGoogle;