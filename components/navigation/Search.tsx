import { NavForm, NavSearch } from "./styled/navbar.styled"
import { useState } from "react";

interface Props {
    setSearchData: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<Props> = ({ setSearchData }) => {
    const [value, setValue] = useState("");

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setSearchData(e.currentTarget.value)
    }

    return (
        <NavForm>
            <NavSearch value={value} onChange={handleChange} placeholder="Search for your destination..." />
            <i className="bi bi-search"></i>
        </NavForm>
    )
}

export default Search;