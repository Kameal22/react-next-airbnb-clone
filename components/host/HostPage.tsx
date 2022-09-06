import Link from "next/link"
import { HostPageInfoDiv, HostPageStyledDiv, HostPageStyledEaringsInfo, HostPageStyledEaringsInfoSmallDiv, HostPageStyledEarnings } from "./styled/HostPage.styled"

const HostPage: React.FC = () => {
    return (
        <>
            <HostPageStyledDiv>
                <HostPageInfoDiv>
                    <Link href="/">
                        <h2>airbnb</h2>
                    </Link>
                    <h1>Open Your house for guests</h1>
                </HostPageInfoDiv>
            </HostPageStyledDiv>

            <HostPageStyledEarnings>
                <h2>
                    Check how much You can earn as a host
                </h2>

                <HostPageStyledEaringsInfo>

                    <HostPageStyledEaringsInfoSmallDiv>
                        <p>Hosts in Your location earn on average:</p>
                        <h4>6, 943 zł per month</h4>
                    </HostPageStyledEaringsInfoSmallDiv>

                    <HostPageStyledEaringsInfoSmallDiv>
                        <p>Their average income is:</p>
                        <h4 style={{ color: "black" }}>254 zł per night</h4>
                    </HostPageStyledEaringsInfoSmallDiv>

                    <HostPageStyledEaringsInfoSmallDiv>
                        <p>They have reservations for:</p>
                        <h4 style={{ color: "black" }}>24 nights/month</h4>
                    </HostPageStyledEaringsInfoSmallDiv>

                </HostPageStyledEaringsInfo>
            </HostPageStyledEarnings>
        </>
    )
}

export default HostPage;