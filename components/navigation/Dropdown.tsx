import { DropdownStyled, DropdownList, ListItem } from "./styled/navbar.styled";

interface Props {
    forwardRef: React.RefObject<HTMLDivElement>;
}

const Dropdown: React.FC<Props> = ({ forwardRef }) => {
    return (
        <DropdownStyled ref={forwardRef}>
            <DropdownList>
                <ListItem><span>Sign up</span></ListItem>
                <ListItem>Log in</ListItem>
                <ListItem>Host your home</ListItem>
            </DropdownList>
        </DropdownStyled>
    )
}

export default Dropdown;