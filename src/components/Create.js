/*
Lecture 89  CRUD Application In React | React CRUD Using AXIOS API - React Router & Bootstrap (Folder: crud-app)

Part 1 Create a fake API and insert data in fake API
Things we need
1. Axios
2. React Router
3. Bootstrap
4. useNavigate Hook

React CRUD:
C---> CREATE ---> insert
R---> READ ---> fetch data
U---> UPDATE ---> modify data
D---> DELETE ---> remove data

Lecture 90  Read Operation In React CRUD App (File: Read.js)

*/
//API URL
//https://688874e8adf0e59551ba03ff.mockapi.io/crud
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://688874e8adf0e59551ba03ff.mockapi.io/crud', {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        // <>
        //     <div className='mb-2 mt-2'>
        //         <Link to="/">
        //             <button className='btn btn-primary'>Read Data</button>
        //         </Link>
        //     </div>
        //     <div className='row'>
        //         <div className='col-md-4'>
        //             <div className='bg-primary p-4 text-center'>
        //                 <h1>Create Data</h1>
        //             </div>
        //             <form onSubmit={handleSubmit}>
        //                 <div className='form-group'>
        //                     <label>Enter Name:</label>
        //                     <input type="text" placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} />
        //                 </div>
        //                 <div className='form-group'>
        //                     <label>Enter Age:</label>
        //                     <input type="number" placeholder='Age' className='form-control' onChange={(e) => setAge(e.target.value)} />
        //                 </div>
        //                 <div className='form-group'>
        //                     <label>Enter Email:</label>
        //                     <input type="email" placeholder='Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
        //                 </div>
        //                 <br />
        //                 <div className='d-grid'>
        //                     <input type="submit" value="Submit" className='btn btn-primary' />
        //                 </div>
        //             </form>
        //             {name}
        //             <br />
        //             {age}
        //             <br />
        //             {email}
        //         </div>
        //     </div>
        // </>
        <div className='container mt-5'>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h2 className='text-primary'>Create New Record</h2>
                <Link to="/">
                    <button className='btn btn-outline-secondary'>Back to List</button>
                </Link>
            </div>
            <div className='card shadow-sm p-4'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input type="text" className='form-control' placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Age</label>
                        <input type="number" className='form-control' placeholder='Enter age' onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Email</label>
                        <input type="email" className='form-control' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Create

