import { Places, LandingPageStyledDiv, Place } from "./styled/landingPage.styled";
import { apiDataTypes } from "../../types/apiDataTypes";
import FilterBar from "../filterBar/filterBar";

interface Props {
    data: apiDataTypes[]
}

const LandingPage: React.FC<Props> = ({ data }) => {
    return (
        <LandingPageStyledDiv>
            <FilterBar />
            <Places>
                {data.map(place => {
                    return (
                        <Place>
                            <img src={place.image} alt={place.area}></img>
                            <div>
                                <h2>{place.city}, {place.country}</h2>
                                <div>
                                    <i className="bi bi-star-fill"></i>
                                    <p>{place.rating}</p>
                                </div>
                            </div>
                            <p>{place.term}</p>
                            <p><span>{place.cost} $</span> night</p>
                        </Place>
                    )
                })}
            </Places>
        </LandingPageStyledDiv>
    )
}

export default LandingPage;