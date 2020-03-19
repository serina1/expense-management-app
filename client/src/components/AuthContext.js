import React from "react";

const AuthContext = React.createContext({
    firstname: "",
    userId: "",
    setUserId: () => {
        console.log("hello")
    },
    setUserName: () => {
        console.log("hello")
    }
});

export default AuthContext;