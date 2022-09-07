import { UserMenuDiv } from "./styled/userMenu.styled"

interface Props {
    forwardRef: React.RefObject<HTMLDivElement>;
}

const UserMenu: React.FC<Props> = ({ forwardRef }) => {
    return (
        <UserMenuDiv ref={forwardRef}>
            <h2>User menu</h2>
        </UserMenuDiv>
    )
}

export default UserMenu;