import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
        <div>
            <h1>Host Your home</h1>
        </div>
    )
}

export default HostPlace;