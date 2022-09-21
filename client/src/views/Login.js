import {useState} from 'react';
import{Link} from 'react-router-dom'
import axios from 'axios';
const SignUp = () => {
    const [data, setData] = useState({
        email:"",
        password:""
    });
    const [error, setError] = useState("");

    const handleChange = ({currentTarget: input})=> {
        setData({...data, [input.name]:input.value});

    }; 
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8080/api/auth";
            const {data:res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/"
        }
        catch(error){
            if(error.response && error.response.status >=400 &&
                error.response.status <= 500){
                    setError(error.response.data.message)
                }
        }
    }
    return (
        <div>
            <h2>Welcome</h2>
            <Link to="/signup">
                <button>
                    Sign Up
                </button>
            </Link>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Login to you Account</h2>
                    <input type="text" placeholde="Eamil" name="email" 
                    onChange={handleChange} value={data.email} required />
                    <input type="text" placeholde="Password" name="password" 
                    onChange={handleChange} value={data.password} required />
                    {error && <div>{error}</div>}
                    <button type="submit">
                        Sign In
                    </button>
                </form>
            </div>
        </div>

    )
}
export default SignUp;