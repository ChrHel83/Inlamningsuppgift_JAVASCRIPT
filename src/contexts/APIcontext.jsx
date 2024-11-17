import React, { createContext, useContext, useState } from "react";

const APIcontext = createContext();

export const APIprovider = ({ children }) => {
    const [API, setAPI] = useState("https://win24-assignment.azurewebsites.net/api/")
    return <APIcontext.Provider value={{API, setAPI}}>{children}</APIcontext.Provider>;
};

export const useAPI = () => {
    return useContext(APIcontext);
};
