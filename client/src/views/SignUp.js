import {useState} from 'react';
import{Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
const SignUp = () => {
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = ({currentTarget: input})=> {
        setData({...data, [input.name]:input.value});

    }; 

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8000/api/users";
            const {data:res} = await axios.post(url, data)
            navigate('/groups')
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
            <h2>Welcome Back</h2>
            <Link to="/login">
                <button>
                    Login
                </button>
            </Link>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Create Account</h2>
                    <input type="text" placeholde="First Name" name="firstName" 
                    onChange={handleChange} value={data.firstName} required />
                    <input type="text" placeholde="Last Name" name="lastName" 
                    onChange={handleChange} value={data.lastName} required />
                    <input type="text" placeholde="Eamil" name="email" 
                    onChange={handleChange} value={data.email} required />
                    <input type="text" placeholde="Password" name="password" 
                    onChange={handleChange} value={data.password} required />
                    {error && <div>{error}</div>}
                    <button type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>

    )
}
export default SignUp;