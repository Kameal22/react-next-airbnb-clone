import { DropdownStyled, DropdownList, ListItem } from "./styled/navbar.styled";

interface Props {
    forwardRef: React.RefObject<HTMLDivElement>;
    setRegistering: React.Dispatch<React.SetStateAction<boolean>>
    showDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

const Dropdown: React.FC<Props> = ({ forwardRef, setRegistering, showDropdown }) => {

    const showRegistering = () => {
        setRegistering(true)
        showDropdown(false)
    }
    return (
        <DropdownStyled ref={forwardRef}>
            <DropdownList>
                <ListItem onClick={() => showRegistering()}><span>Sign up</span></ListItem>
                <ListItem>Log in</ListItem>
                <ListItem>Host your home</ListItem>
            </DropdownList>
        </DropdownStyled>
    )
}

export default Dropdown;