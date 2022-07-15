import { FilterBarItemStyled } from "./styled/filterBar.styled"

interface Props {
    area: string,
    icon: string
}

const FilterBarItem: React.FC<Props> = ({ area, icon }) => {
    return (
        <FilterBarItemStyled>
            {area}
        </FilterBarItemStyled>
    )
}

export default FilterBarItem