import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { DropdownStyled, DropdownList, ListItem } from "./styled/navbar.styled";

interface Props {
    forwardRef: React.RefObject<HTMLDivElement>;
    setRegistering: React.Dispatch<React.SetStateAction<boolean>>
    showDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

const Dropdown: React.FC<Props> = ({ forwardRef, setRegistering, showDropdown }) => {
    const user = useContext(UserContext);

    const showRegistering = () => {
        setRegistering(true)
        showDropdown(false)
    }
    return (
        <DropdownStyled ref={forwardRef}>
            <DropdownList>

                {user.login ? <ListItem><span>{user.login}</span></ListItem> : <><ListItem onClick={() => showRegistering()}><span>Sign up</span></ListItem><ListItem>Log in</ListItem>
                </>}
                <ListItem>Host your home</ListItem>
            </DropdownList>
        </DropdownStyled>
    )
}

export default Dropdown;