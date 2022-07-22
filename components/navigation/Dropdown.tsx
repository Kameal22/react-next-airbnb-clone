import { useEffect, useState } from "react";
import { DropdownStyled, DropdownList, ListItem } from "./styled/navbar.styled";

interface Props {
    forwardRef: React.RefObject<HTMLDivElement>;
    setRegistering: React.Dispatch<React.SetStateAction<boolean>>
    showDropdown: React.Dispatch<React.SetStateAction<boolean>>
    showMessage: () => void;
}

const Dropdown: React.FC<Props> = ({ forwardRef, setRegistering, showDropdown, showMessage }) => {
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

    const logout = () => {
        localStorage.clear();
        showDropdown(false);
        setUser("")
        showMessage();
    }
    return (
        <DropdownStyled ref={forwardRef}>
            <DropdownList>

                {user ? <ListItem><span>{user}</span></ListItem> : <><ListItem onClick={() => showRegistering()}><span>Sign up</span></ListItem><ListItem>Log in</ListItem></>}
                {user ? <ListItem onClick={() => logout()}>Logout</ListItem> : <ListItem>Host your home</ListItem>}
            </DropdownList>
        </DropdownStyled>
    )
}

export default Dropdown;