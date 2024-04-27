import React, { createContext } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({Children}) => {
    <AppContext.Provider>
        {Children}
    </AppContext.Provider>
}