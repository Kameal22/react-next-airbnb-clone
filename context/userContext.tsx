import React, { createContext, useContext, useEffect, useState } from "react";
import { PropsWithChildren } from "react";

type user = {
    login: string,
    password: string
}

export const UserContext = createContext<user>({ login: "", password: "" })

export const SetUserContext = createContext<
    React.Dispatch<React.SetStateAction<user>> | undefined>(undefined);

export const useSetUser = () => {
    const setUser = useContext(SetUserContext);

    if (!setUser) {
        throw new Error('Called outside setCartContext provider')
    }
    return setUser
}

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<user>({ login: "", password: "" });

    useEffect(() => {
        const user = window.localStorage.getItem('user');

        if (user) {
            setUser(JSON.parse(user))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <UserContext.Provider value={user}>
            <SetUserContext.Provider value={setUser}>
                {children}
            </SetUserContext.Provider>
        </UserContext.Provider>
    );
};