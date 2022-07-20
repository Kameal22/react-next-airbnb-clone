import axios from "axios";
import { useState } from "react";
import { RegisterDiv } from "./styled/register.styled";

type userData = {
    login: string,
    password: string
}

interface Props {
    setRegistering: React.Dispatch<React.SetStateAction<boolean>>
}

const Register: React.FC<Props> = ({ setRegistering }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const registerUser = async (data: userData) => {
        const response = await axios.post('/api/new-announcement', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = { login, password };
        if (login === "" || password === "") {
            setError("Please provide name and password");
        } else {
            registerUser(user);
        }
    }

    const handleLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value);
    }

    const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }
    return (
        <RegisterDiv>
            <h2>Sign up</h2>
            <i onClick={() => setRegistering(false)} className="bi bi-x"></i>

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
        </RegisterDiv>
    )
}

export default Register;