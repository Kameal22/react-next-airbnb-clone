import { FilterBarItemStyled } from "./styled/filterBar.styled"

interface Props {
    area: string,
    icon: string,
    filteredPlace: string,
    selectPlace: React.Dispatch<React.SetStateAction<string>>
}

const FilterBarItem: React.FC<Props> = ({ area, icon, filteredPlace, selectPlace }) => {
    return (
        <FilterBarItemStyled style={area === filteredPlace ? { color: "black" } : { color: "grey" }} onClick={() => selectPlace(area)}>
            <i className={icon} />
            <p style={area === filteredPlace ? { fontWeight: "bold" } : { fontWeight: "normal" }}>{area}</p>
        </FilterBarItemStyled>
    )
}

export default FilterBarItem