import { LandingPageStyledDiv } from "./styled/landingPage.styled";
import { apiDataTypes } from "../../types/apiDataTypes";
import FilterBar from "../filterBar/filterBar";

interface Props {
    data: apiDataTypes[]
}

const LandingPage: React.FC<Props> = ({ data }) => {
    return (
        <LandingPageStyledDiv>
            <FilterBar />
        </LandingPageStyledDiv>
    )
}

export default LandingPage;