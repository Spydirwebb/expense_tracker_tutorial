import React from "react";
import { useFirebase } from "react-redux-firebase";
//import { useHistory } from "react-router-dom";

const AuthButtonFB = () => {
    const firebase = useFirebase();
    //const history = useHistory();

    const signInWithFacebook = () => {
        firebase
            .login({
                provider: "facebook",
                type: "popup",
            })
    };
    return (
        <div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    signInWithFacebook();
                }}
            >
                Log in with Facebook (Broken)
            </button>
        </div>
    );
};

export default AuthButtonFB;