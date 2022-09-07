import Link from "next/link";
import { useEffect, useState } from "react";
import { DropdownStyled, DropdownList, ListItem } from "./styled/navbar.styled";
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Props {
    setRegistering: React.Dispatch<React.SetStateAction<boolean>>
    setLogging: React.Dispatch<React.SetStateAction<boolean>>
    showDropdown: React.Dispatch<React.SetStateAction<boolean>>
    showMessage: () => void;
    changeTheme: () => void
}

const Dropdown: React.FC<Props> = ({ setRegistering, setLogging, showDropdown, showMessage, changeTheme }) => {
    const [user, setUser] = useState("");
    const [theme] = useLocalStorage("theme", "light");

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');

        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser)
            setUser(foundUser.login)
        }
    }, [])

    const changeThemeFunc = () => {
        changeTheme();
        showDropdown(false)
    }

    const showRegistering = () => {
        setRegistering(true)
        showDropdown(false)
    }

    const showLogging = () => {
        setLogging(true)
        showDropdown(false)
    }

    const logout = () => {
        localStorage.clear();
        showDropdown(false);
        setUser("")
        showMessage();
    }

    const loggedInMenu = () => {
        return (
            <>
                <ListItem>
                    <span>{user}</span>
                </ListItem>
                <Link href="/host">
                    <ListItem>Host Your home</ListItem>
                </Link>
                <ListItem onClick={logout}>Logout</ListItem>
            </>
        )
    }

    const notLoggedInMenu = () => {
        return (
            <>
                <ListItem onClick={showRegistering}><span>Sign up</span></ListItem>
                <ListItem onClick={showLogging}>Log in</ListItem>
                <ListItem onClick={changeThemeFunc}>{theme === "light" ? 'Dark mode' : 'Light mode'}</ListItem>
            </>
        )
    }
    return (
        <DropdownStyled >
            <DropdownList>
                {user ? loggedInMenu() : notLoggedInMenu()}
            </DropdownList>
        </DropdownStyled>
    )
}

export default Dropdown;