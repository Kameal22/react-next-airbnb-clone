import { apiDataTypes } from "../../types/apiDataTypes";
import { AnnouncementAmenties, AnnouncementHeading, AnnouncementHeadingRatings, AnnouncementImgs, AnnouncementMoreInfo, AnnouncementReserve, AnnouncementReserveHeading, AnnouncementStyled, AnnouncementStyledMain } from "./styled/announcement.styled";

interface Props {
    place: apiDataTypes
}

const Announcement: React.FC<Props> = ({ place }) => {

    return (
        <AnnouncementStyled>
            <AnnouncementStyledMain>
                <h1>{place.description}</h1>
                <AnnouncementHeading>
                    <i className="bi bi-star-fill" />
                    <p>{place.rating}</p>
                    <AnnouncementHeadingRatings>99 Ratings</AnnouncementHeadingRatings>
                    <p style={{ marginLeft: "2em" }}>Superhost</p>
                    <h2>{place.city}, {place.country}</h2>
                </AnnouncementHeading>

                <AnnouncementImgs>
                    <img src={place.image} alt={place.area} />
                    <img src={place.image} alt={place.area} />
                    <img src={place.image} alt={place.area} />
                    <img src={place.image} alt={place.area} />
                    <img src={place.image} alt={place.area} />
                </AnnouncementImgs>
                <h3>Place hosted by {place.host}</h3>
                <p>2 guests, 1 bedroom, 1 bath</p>

                <AnnouncementMoreInfo>
                    <AnnouncementAmenties>
                        <h3>What this place offers:</h3>
                        {place.amenties.map(amentie => {
                            return (
                                <p key={amentie}>{amentie}</p>
                            )
                        })}
                    </AnnouncementAmenties>

                    <AnnouncementReserve>
                        <AnnouncementReserveHeading>
                            <h4>{place.cost} zł <span>night</span></h4>
                            <div>
                                <i className="bi bi-star-fill" />
                                <p>{place.rating}</p>
                                <AnnouncementHeadingRatings>99 Ratings</AnnouncementHeadingRatings>
                            </div>
                        </AnnouncementReserveHeading>
                    </AnnouncementReserve>
                </AnnouncementMoreInfo>
            </AnnouncementStyledMain>
        </AnnouncementStyled>
    )
}

export default Announcement