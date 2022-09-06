import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import HostPage from "../components/host/HostPage";

const HostPlace: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        const user = localStorage.getItem('user');

        if (!user) {
            router.push({
                pathname: '/',
                query: { loggedIn: false }
            })
        }
    }, [])
    return (
        <HostPage />
    )
}

export default HostPlace;