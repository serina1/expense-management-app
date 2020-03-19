import React from "react";

const AuthContext = React.createContext({
    userId: "",
    setUserId: () => {
        console.log("hello")
    }
});

export default AuthContext;