import Link from "next/link";
import { useEffect, useState } from "react";
import { DropdownStyled, DropdownList, ListItem } from "./styled/navbar.styled";

interface Props {
    forwardRef: React.RefObject<HTMLDivElement>;
    setRegistering: React.Dispatch<React.SetStateAction<boolean>>
    setLogging: React.Dispatch<React.SetStateAction<boolean>>
    showDropdown: React.Dispatch<React.SetStateAction<boolean>>
    showMessage: () => void;
}

const Dropdown: React.FC<Props> = ({ forwardRef, setRegistering, setLogging, showDropdown, showMessage }) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');

        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser)
            setUser(foundUser.login)
        }
    }, [])

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
                <ListItem onClick={() => logout()}>Logout</ListItem>
            </>
        )
    }

    const notLoggedInMenu = () => {
        return (
            <>
                <ListItem onClick={() => showRegistering()}><span>Sign up</span></ListItem>
                <ListItem onClick={() => showLogging()}>Log in</ListItem>
            </>
        )
    }
    return (
        <DropdownStyled ref={forwardRef}>
            <DropdownList>
                {user ? loggedInMenu() : notLoggedInMenu()}
            </DropdownList>
        </DropdownStyled>
    )
}

export default Dropdown;