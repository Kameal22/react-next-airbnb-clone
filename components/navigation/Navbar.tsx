import Link from 'next/link'
import { useState } from 'react';
import Dropdown from './Dropdown';
import { NavbarDiv, NavbarLogo, NavSearch, NavRegisterDiv } from "./styled/navbar.styled";

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <NavbarDiv>
            <Link href="/">
                <NavbarLogo>airbnb</NavbarLogo>
            </Link>
            <NavSearch></NavSearch>
            <NavRegisterDiv onClick={() => setOpen(!open)}>
                <i className="bi bi-list"></i>
                <i className="bi bi-person-circle"></i>
            </NavRegisterDiv>

            {open && <Dropdown setOpen={setOpen} />}
        </NavbarDiv>
    )
}

export default Navbar