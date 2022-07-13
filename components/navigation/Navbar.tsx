import Link from 'next/link'
import { NavbarDiv, NavbarLogo, NavSearch, NavRegisterDiv } from "./styled/navbar.styled";

const Navbar: React.FC = () => {
    return (
        <NavbarDiv>
            <Link href="/">
                <NavbarLogo>airbnb</NavbarLogo>
            </Link>
            <NavSearch></NavSearch>
            <Link href="/register">
                <NavRegisterDiv>
                    <i className="bi bi-list"></i>
                    <i className="bi bi-person-circle"></i>
                </NavRegisterDiv>
            </Link>
        </NavbarDiv>
    )
}

export default Navbar