import Link from 'next/link'
import { useRef, useState } from 'react';
import Dropdown from './Dropdown';
import { NavbarDiv, NavbarLogo, NavSearch, NavRegisterDiv } from "./styled/navbar.styled";
import UseClickOutside from '../../hooks/useClickOutside';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    UseClickOutside(dropdownRef, () => setOpen(false))

    return (
        <NavbarDiv>
            <Link href="/">
                <NavbarLogo>airbnb</NavbarLogo>
            </Link>
            <NavSearch />
            <NavRegisterDiv onClick={() => setOpen(!open)}>
                <i className="bi bi-list"></i>
                <i className="bi bi-person-circle"></i>
            </NavRegisterDiv>

            {open && <Dropdown forwardRef={dropdownRef} />}
        </NavbarDiv>
    )
}

export default Navbar