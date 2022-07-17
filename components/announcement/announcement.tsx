import { apiDataTypes } from "../../types/apiDataTypes";
import { AnnouncementImgs, AnnouncementStyled } from "./styled/announcement.styled";

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
        </AnnouncementStyled>
    )
}

export default Announcement