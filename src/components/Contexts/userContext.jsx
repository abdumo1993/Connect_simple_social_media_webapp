import { createContext, useContext, useState } from "react";
const userContext = createContext();
const userUpdateContext = createContext();

export const useUser = () => useContext(userContext);
export const useUpdateUser = () => useContext(userUpdateContext);

export function UserProvider({ children }) {
    const [user, setUser] = useState({ name: '', username: '', email: '' });

    return (
        <userContext.Provider value={user}>
            <userUpdateContext.Provider value={setUser}>
                {children}
            </userUpdateContext.Provider>
        </userContext.Provider>
    )


}