import axios from "axios";
import { useState } from "react";
import { Disclaimer, RegisterDiv } from "./styled/register.styled";
import { useRouter } from "next/router";
import useInputState from "../../hooks/useInputState";

type user = {
    login: string,
    password: string
}

interface Props {
    setRegistering: React.Dispatch<React.SetStateAction<boolean>>
    setLogging: React.Dispatch<React.SetStateAction<boolean>>
    setOpenSnackbar: () => void
}

const Register: React.FC<Props> = ({ setRegistering, setOpenSnackbar, setLogging }) => {
    const [login, handleLoginChange] = useInputState("");
    const [password, handlePasswordChange] = useInputState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const registerUser = async (data: user) => {
        await axios.post('/api/new-user', {
            login: data.login,
            password: data.password
        });
        window.localStorage.setItem('user', JSON.stringify(data))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = { login, password };
        if (login === "" || password === "") {
            setError("Please provide name and password");
        } else {
            registerUser(user);
            setOpenSnackbar()
            setRegistering(false);
            router.push('/');
        }
    }

    const handleCloseRegistering = () => {
        setRegistering(false)
        router.push('/')
    }

    const handleAlreadyHasAccount = () => {
        setRegistering(false)
        setLogging(true)
    }
    return (
        <RegisterDiv>
            <h2>Sign up</h2>
            <i onClick={handleCloseRegistering} className="bi bi-x"></i>

            <form autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="login"
                        value={login}
                        onChange={handleLoginChange}
                        type="text"
                        name="login"
                    />
                    <input
                        placeholder="password"
                        value={password}
                        onChange={handlePasswordChange}
                        type="password"
                        name="name"
                    />
                </div>
                <p>{error}</p>
                <Disclaimer onClick={handleAlreadyHasAccount}>Already have an account?</Disclaimer>
                <button className="submitBtn" type="submit">
                    Submit
                </button>
            </form>
        </RegisterDiv>
    )
}

export default Register;