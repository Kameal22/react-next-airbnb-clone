import Link from 'next/link'
import { useRef, useState } from 'react';
import Dropdown from './Dropdown';
import { NavbarDiv, NavbarLogo, NavRegisterDiv } from "./styled/navbar.styled";
import UseClickOutside from '../../hooks/useClickOutside';
import Search from './Search';

interface Props {
    setSearchData: React.Dispatch<React.SetStateAction<string>>
    clearFilters: () => void;
    setRegistering: React.Dispatch<React.SetStateAction<boolean>>
    setLogging: React.Dispatch<React.SetStateAction<boolean>>
    showMessage: () => void;
    changeTheme: () => void
}

const Navbar: React.FC<Props> = ({ setSearchData, clearFilters, setRegistering, setLogging, showMessage, changeTheme }) => {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    UseClickOutside(dropdownRef, () => setOpen(false))

    return (
        <NavbarDiv>
            <Link href="/">
                <NavbarLogo onClick={clearFilters}>airbnb</NavbarLogo>
            </Link>
            <Search setSearchData={setSearchData} />
            <NavRegisterDiv ref={dropdownRef} onClick={() => setOpen(!open)}>
                <i className="bi bi-list" />
                <i className="bi bi-person-circle" />
                {open && <Dropdown changeTheme={changeTheme} setLogging={setLogging} showMessage={showMessage} setRegistering={setRegistering} showDropdown={setOpen} />}
            </NavRegisterDiv>
        </NavbarDiv>
    )
}

export default Navbar