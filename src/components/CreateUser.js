import './Style.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';


export default function CreateUser() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:80/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));

    }
    return (
        <div>
            <h2>CreateUser</h2>
            <form onSubmit={handleSubmit}>  
                <table className='flex'>
                    <tbody>
                        <tr>
                            <th><label>Name:</label> </th>
                            <td><input onChange={handleChange} type="text" name="name" /></td>

                        </tr>

                        <tr>

                            <th><label>Email:</label> </th>
                            <td><input onChange={handleChange} type="email" name="email" /></td>

                        </tr>

                        <tr>
                            <th><label>Mobile:</label> </th>
                            <td><input onChange={handleChange} type="text" name="mobile" /></td>

                        </tr>
                    </tbody>
                </table>
                <button>Submit</button>
            </form>
        </div>
    )
}