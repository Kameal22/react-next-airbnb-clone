import { FilterBarStyled } from "./styled/filterBar.styled"
import { filterBarData } from "./data/filterBarData"
import FilterBarItem from "./filterBarItem"

interface Props {
    filteredPlace: string,
    selectPlace: React.Dispatch<React.SetStateAction<string>>
}

const FilterBar: React.FC<Props> = ({ filteredPlace, selectPlace }) => {
    return (
        <FilterBarStyled>
            {filterBarData.map(data => {
                return (
                    <FilterBarItem key={data.area} area={data.area} icon={data.icon} filteredPlace={filteredPlace} selectPlace={selectPlace} />
                )
            })}
        </FilterBarStyled>
    )
}

export default FilterBar