import { NavForm, NavSearch } from "./styled/navbar.styled"

const Search: React.FC = () => {
    return (
        <NavForm>
            <NavSearch placeholder="Search for your destination..." />
            <i className="bi bi-search"></i>
        </NavForm>
    )
}

export default Search;