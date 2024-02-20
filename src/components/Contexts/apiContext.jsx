import { createContext, useContext, useState } from "react";

export const apiContext = createContext();

export function useApi() {
    return useContext(apiContext);
}

export function ApiProvider({ children }) {
    return (
        <apiContext.Provider value={import.meta.env.VITE_API_URL}>
            {children}
        </apiContext.Provider>
    )
}