import { createContext, ReactNode, useState } from "react";

interface LoginContextData {
    isLoggedIn: boolean;
    userName: String;
    isSubmitEnabled: boolean;
    handleFocus: () => void;
    handleBlur: () => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface LoginProviderProps {
    children: ReactNode;
    x: boolean;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ children, x }: LoginProviderProps) {

    const [userName, setUserName] = useState("Digite seu username")
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    // ?? é o operador de coalescência nula  :O
    const [isLoggedIn, setIsLoggedIn] = useState(x ?? false);

    function handleFocus() {
        if (userName.localeCompare("Digite seu username") == 0) {
            setUserName("");
        }
    }

    function handleBlur() {
        if (userName.localeCompare("") == 0) {
            setUserName("Digite seu username");
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = event.currentTarget.value;
        setUserName(currentValue);

        if (currentValue != "") {
            setIsSubmitEnabled(true);
        } else {
            setIsSubmitEnabled(false);
        }
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsLoggedIn(true);
        console.log('dentro do handleClick: ' + isLoggedIn);
        window.location.href = '/mainpage'
    }

    return (
        <LoginContext.Provider value={{
            isLoggedIn,
            userName,
            isSubmitEnabled,
            handleFocus,
            handleBlur,
            handleChange,
            handleClick
        }}>
            {children}
        </LoginContext.Provider>
    )
}

