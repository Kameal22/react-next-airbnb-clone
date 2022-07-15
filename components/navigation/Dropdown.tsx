import { DropdownStyled, DropdownList, ListItem } from "./styled/navbar.styled";

interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: React.FC<Props> = ({ setOpen }) => {
    return (
        <DropdownStyled>
            <DropdownList>
                <ListItem><span>Sign up</span></ListItem>
                <ListItem>Log in</ListItem>
            </DropdownList>
        </DropdownStyled>
    )
}

export default Dropdown;