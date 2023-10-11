import { useDispatch, useSelector } from "react-redux";
import { setUsername, setEmail, setPassword } from "../redux/actions";

interface User {
    username: string, 
    email: string,
    password: string
}

function Home() {
    const dispatch = useDispatch();
    const {username, email, password} = useSelector((state: User) => state);

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setUsername(event.target.value))
    };

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(event.target.value))
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(event.target.value))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(username, email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleUsername} type="text" placeholder="Username" />
            <input onChange={handleEmail} type="email" placeholder="Email"/>
            <input onChange={handlePassword} type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    )
};

export default Home;