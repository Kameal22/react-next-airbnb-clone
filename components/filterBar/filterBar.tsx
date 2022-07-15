import { FilterBarStyled } from "./styled/filterBar.styled"
import { filterBarData } from "./data/filterBarData"
import FilterBarItem from "./filterBarItem"

const FilterBar: React.FC = () => {
    return (
        <FilterBarStyled>
            {filterBarData.map(data => {
                return (
                    <FilterBarItem key={data.area} area={data.area} icon={data.icon} />
                )
            })}
        </FilterBarStyled>
    )
}

export default FilterBar