import { useState , useEffect } from 'react';
import axios from 'axios';
import { useNavigate , useParams } from 'react-router-dom';

export default function EditUser(){

    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost:80/api/user/${id}`).then(function (response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:80/api/user/${id}/edit`, inputs).then(function(response){
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
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>  
                <table className='flex'>
                    <tbody>
                        <tr>
                            <th><label>Name:</label> </th>
                            <td><input value={inputs.name} onChange={handleChange} type="text" name="name" /></td>

                        </tr>

                        <tr>

                            <th><label>Email:</label> </th>
                            <td><input value={inputs.email} onChange={handleChange} type="email" name="email" /></td>

                        </tr>

                        <tr>
                            <th><label>Mobile:</label> </th>
                            <td><input value={inputs.mobile} onChange={handleChange} type="text" name="mobile" /></td>

                        </tr>
                    </tbody>
                </table>
                <button>Submit</button>
            </form>
        </div>
    )
}