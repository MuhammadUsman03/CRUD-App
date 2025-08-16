//Lecture 92  Update Operation In React CRUD App
/*
Lecture 93  What Is React Redux (Folder: redux_app File: index,js)
*/

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Edit() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    }, []);
    const navigate = useNavigate();
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://688874e8adf0e59551ba03ff.mockapi.io/crud/${id}`, {
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
        //                 <h1>Update Data</h1>
        //             </div>
        //             <form onSubmit={handleUpdate}>
        //                 <div className='form-group'>
        //                     <label>Enter Name:</label>
        //                     <input type="text" placeholder='Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
        //                 </div>
        //                 <div className='form-group'>
        //                     <label>Enter Age:</label>
        //                     <input type="number" placeholder='Age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)} />
        //                 </div>
        //                 <div className='form-group'>
        //                     <label>Enter Email:</label>
        //                     <input type="email" placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
        //                 </div>
        //                 <br />
        //                 <div className='d-grid'>
        //                     <input type="submit" value="Update" className='btn btn-primary' />
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </>
        <div className='container mt-5'>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h2 className='text-primary'>Edit Record</h2>
                <Link to="/">
                    <button className='btn btn-outline-secondary'>Back to List</button>
                </Link>
            </div>
            <div className='card shadow-sm p-4'>
                <form onSubmit={handleUpdate}>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input type="text" className='form-control' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Age</label>
                        <input type="number" className='form-control' placeholder='Enter age' value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Email</label>
                        <input type="email" className='form-control' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className='btn btn-primary'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit
