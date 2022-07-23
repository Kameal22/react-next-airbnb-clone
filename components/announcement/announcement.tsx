import { apiDataTypes } from "../../types/apiDataTypes";
import { AnnouncementAmenties, AnnouncementImgs, AnnouncementStyled } from "./styled/announcement.styled";

interface Props {
    place: apiDataTypes
}

const Announcement: React.FC<Props> = ({ place }) => {

    return (
        <AnnouncementStyled>
            <h1>{place.description}</h1>
            <h2>{place.city}, {place.country}</h2>
            <AnnouncementImgs>
                <img src={place.image} alt={place.area} />
                <img src={place.image} alt={place.area} />
                <img src={place.image} alt={place.area} />
                <img src={place.image} alt={place.area} />
                <img src={place.image} alt={place.area} />
            </AnnouncementImgs>
            <h3>Place hosted by {place.host}</h3>
            <p>2 guests, 1 bedroom, 1 bath</p>

            <AnnouncementAmenties>
                <h3>What this place offers:</h3>
                {place.amenties.map(amentie => {
                    return (
                        <p key={amentie}>{amentie}</p>
                    )
                })}
            </AnnouncementAmenties>
        </AnnouncementStyled>
    )
}

export default Announcement