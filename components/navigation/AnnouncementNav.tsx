import { NavbarDiv, NavbarLogo } from "./styled/navbar.styled"
import Link from "next/link"

const AnnouncementNav: React.FC = () => {
    return (
        <NavbarDiv>
            <Link href="/">
                <NavbarLogo>
                    airbnb
                </NavbarLogo>
            </Link>
        </NavbarDiv>
    )
}

export default AnnouncementNav