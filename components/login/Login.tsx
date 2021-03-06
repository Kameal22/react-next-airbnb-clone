import axios from "axios";
import { useState } from "react";
import { LoginDiv } from "./styled/login.styled";
import { useRouter } from "next/router";

type user = {
    login: string,
    password: string
}

interface Props {
    setLogging: React.Dispatch<React.SetStateAction<boolean>>
    setOpenSnackbar: () => void
}

const Login: React.FC<Props> = ({ setLogging, setOpenSnackbar }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const loginUser = async (user: user) => {
        const { data } = await axios.post('/api/log-in', {
            login: user.login,
            password: user.password
        });
        if (data.success) {
            window.localStorage.setItem('user', JSON.stringify(data))
            setLogging(false)
            setOpenSnackbar()
        } else {
            setError("Invalid username or password")
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = { login, password };
        loginUser(user)
        router.push('/');

    }

    const handleLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value);
    }

    const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }

    const handleCloseLoggin = () => {
        setLogging(false)
        router.push('/');
    }
    return (
        <LoginDiv>
            <h2>Log in</h2>
            <i onClick={handleCloseLoggin} className="bi bi-x"></i>

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
                <button className="submitBtn" type="submit">
                    Submit
                </button>
            </form>
        </LoginDiv>
    )
}

export default Login;