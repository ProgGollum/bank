'use client'

import {IUser} from "../models/IUser"
import AuthService from "@/services/AuthService";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

type UserContextType = {
    user: IUser | null,
    isAuth: boolean,
    token: string
    login: (email: string, password: string) => void,
    registration: (email: string, password: string, firstName: string, lastName: string) => void,
    check: () => void,
    logout: (isLogout: boolean) => void
}

const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({children}: { children: ReactNode }) => {
    const [token, setToken] = useState<string>("");
    const [user, setUser] = useState<IUser | null>(null);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const login = async (email: string, password: string) => {
        try {
            const response = await AuthService.login(email, password);
            if (response && response.data) {
                setIsAuth(true);
                setToken(response.data.token!);
                // localStorage.setItem('token', token)
                setUser(response.data.user!);
                return true
            } else {
                throw new Error("Не удалось получить данные пользователя")
            }
        } catch (e) {
            console.log(e)
        }
    }

    const registration = async (email: string, password: string, firstName: string, lastName: string) => {
        const response = await AuthService.registration(email, password, firstName, lastName);
        setUser(response.data.user)
    }

    const check = async () => {
        try {
            const response = await AuthService.check();
            if (response && response.data) {
                setToken(response.data.token!)
                setIsAuth(true)
                return true
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    const logout = async (isLogout: boolean) => {
        if (isLogout) {
            setIsAuth(false);
            setToken("");
            localStorage.removeItem('token');
            setUser(null);
        }
    }

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        }
    }, [token]);

    return (
        <UserContext.Provider value={{user, isAuth, token, login, registration, check, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => useContext(UserContext);