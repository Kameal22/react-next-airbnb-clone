import { apiDataTypes } from "../../types/apiDataTypes";
import { AnnouncementAditionalInfo, AnnouncementAmenties, AnnouncementDislaimer, AnnouncementHeading, AnnouncementHeadingRatings, AnnouncementImgs, AnnouncementMoreInfo, AnnouncementReserve, AnnouncementReserveButton, AnnouncementReserveGuests, AnnouncementReserveHeading, AnnouncementStyled, AnnouncementStyledMain, AnnouncementSum } from "./styled/announcement.styled";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Props {
    place: apiDataTypes
}

const Announcement: React.FC<Props> = ({ place }) => {
    const [ammount, setAmmount] = useState('');
    const [totalCost, setTotalCost] = useState(place.cost);
    const [theme] = useLocalStorage("theme", "light");

    const handleChange = (event: SelectChangeEvent) => {
        setAmmount(event.target.value);

        setTotalCost(parseInt(event.target.value) * place.cost)
    };

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
                        <AnnouncementReserveGuests>
                            <FormControl fullWidth>
                                <InputLabel style={theme === "light" ? { color: "black" } : { color: "white" }} id="demo-simple-select-label">Guests</InputLabel>
                                <Select
                                    style={theme === "light" ? { color: "black" } : { color: "white" }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ammount}
                                    label="Ammount"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>1 Guest</MenuItem>
                                    <MenuItem value={2}>2 Guests</MenuItem>
                                    <MenuItem value={3}>3 Guests</MenuItem>
                                    <MenuItem value={4}>4 Guests</MenuItem>
                                </Select>
                            </FormControl>
                        </AnnouncementReserveGuests>

                        <AnnouncementReserveButton disabled={!ammount}>Reserve</AnnouncementReserveButton>

                        <AnnouncementDislaimer>
                            Payment will not be charged yet
                        </AnnouncementDislaimer>

                        <AnnouncementAditionalInfo>
                            <p>Cleaning fee</p>
                            <p>0 zł</p>
                        </AnnouncementAditionalInfo>

                        <AnnouncementSum>
                            <p>Total:</p>
                            <p>{totalCost} zł</p>
                        </AnnouncementSum>
                    </AnnouncementReserve>
                </AnnouncementMoreInfo>
            </AnnouncementStyledMain>
        </AnnouncementStyled>
    )
}

export default Announcement