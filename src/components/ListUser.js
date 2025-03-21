import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ListUser() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/users/').then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    // const deleteUser = (id) => {
    //     axios.delete(`http://localhost:80/api/user/${id}/delete`).then(function(response){
    //         console.log(response.data);
    //         getUsers();
    //     });

     const deleteUser = (id) => {
        axios.delete(`http://localhost:80/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <div>
            <h2>ListUser</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) =>
                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight:"20px"}}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}