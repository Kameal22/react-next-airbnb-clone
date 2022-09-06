import { Places, LandingPageStyledDiv, Place } from "./styled/landingPage.styled";
import { apiDataTypes } from "../../types/apiDataTypes";
import FilterBar from "../filterBar/filterBar";
import { useEffect, useMemo, useState } from "react";
import Link from 'next/link';
import Navbar from "../navigation/Navbar";
import Register from "../register/Register";
import Snackbar from '@mui/material/Snackbar';
import Login from "../login/Login";

interface Props {
    data: apiDataTypes[]
    loggedIn: string | string[] | undefined
    changeTheme: () => void
}

const LandingPage: React.FC<Props> = ({ data, loggedIn, changeTheme }) => {
    const [shownData, setShownData] = useState<apiDataTypes[]>([]);
    const [filteredPlace, setFilteredPlace] = useState("");
    const [searchData, setSearchData] = useState("");
    const [registering, setRegistering] = useState(false);
    const [loggingIn, setLogginIn] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [secondaryOpen, setSecondaryOpen] = useState(false);

    useEffect(() => {
        setShownData(data)
    }, [])

    useEffect(() => {
        if (loggedIn !== undefined) setRegistering(true)
    }, [loggedIn])

    const filterData = () => {
        if (!filteredPlace) {
            return shownData
        } else {
            return data.filter(place => {
                return place.area.toLowerCase() === filteredPlace.toLowerCase();
            })
        }
    }

    const clearFilters = () => {
        setFilteredPlace("")
    }

    const filteredPlaces = useMemo(filterData, [filteredPlace, shownData])


    const showMessage = () => {
        setOpenSnackbar(true)
    }

    const handleClose = () => {
        setOpenSnackbar(false)
    }

    const showSecondaryMessage = () => {
        setSecondaryOpen(true)
    }

    const handleSecondaryClose = () => {
        setSecondaryOpen(false)
    }

    return (
        <>
            <Navbar showMessage={showSecondaryMessage} setRegistering={setRegistering} setLogging={setLogginIn} clearFilters={clearFilters} setSearchData={setSearchData} changeTheme={changeTheme} />
            <LandingPageStyledDiv>
                <FilterBar filteredPlace={filteredPlace} selectPlace={setFilteredPlace} />
                <Places>
                    {filteredPlaces.filter(place => place.country.toLowerCase().includes(searchData.toLowerCase())).map(place => {
                        return (
                            <Link key={place.image} href={`/${place.id}`}>
                                <Place >
                                    <img src={place.image} alt={place.area} />
                                    <div>
                                        <h2>{place.city}, {place.country}</h2>
                                        <div>
                                            <i className="bi bi-star-fill" />
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
                {registering && <Register setLogging={setLogginIn} setOpenSnackbar={showMessage} setRegistering={setRegistering} />}
                {loggingIn && <Login setLogging={setLogginIn} setOpenSnackbar={showMessage} />}
            </LandingPageStyledDiv>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={openSnackbar}
                autoHideDuration={1500}
                onClose={handleClose}
                message={<span id="messageId">User logged in</span>}
                ContentProps={{
                    "aria-describedby": "messageId"
                }}
            />
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={secondaryOpen}
                autoHideDuration={1500}
                onClose={handleSecondaryClose}
                message={<span id="second-messageId">Logged out succesfully</span>}
                ContentProps={{
                    "aria-describedby": "second-messageId"
                }}
            />
        </>
    )
}

export default LandingPage;