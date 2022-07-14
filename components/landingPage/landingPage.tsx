import { LandingPageStyledDiv } from "./styled/landingPage.styled";
import { apiDataTypes } from "../../types/apiDataTypes";

interface Props {
    data: apiDataTypes[]
}

const LandingPage: React.FC<Props> = ({ data }) => {
    console.log(data)
    return (
        <LandingPageStyledDiv>

        </LandingPageStyledDiv>
    )
}

export default LandingPage;