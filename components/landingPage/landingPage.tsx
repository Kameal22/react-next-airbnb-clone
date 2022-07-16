import { Places, LandingPageStyledDiv, Place } from "./styled/landingPage.styled";
import { apiDataTypes } from "../../types/apiDataTypes";
import FilterBar from "../filterBar/filterBar";
import { useState } from "react";
import Link from 'next/link';

interface Props {
    data: apiDataTypes[]
}

const LandingPage: React.FC<Props> = ({ data }) => {
    const [filteredPlace, setFilteredPlace] = useState("");

    // Filter the original Array by region selected in FilterBar component. 
    return (
        <LandingPageStyledDiv>
            <FilterBar filteredPlace={filteredPlace} selectPlace={setFilteredPlace} />
            <Places>
                {data.filter(place => place.area.toLowerCase().includes(filteredPlace.toLowerCase())).map(place => {
                    return (
                        <Link key={place.image} href={`/${place.id}`}>
                            <Place >
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
                        </Link>
                    )
                })}
            </Places>
        </LandingPageStyledDiv>
    )
}

export default LandingPage;