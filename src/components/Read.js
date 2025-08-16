// Lecture 90  Read Operation In React CRUD App
// Lecture 91  Delete Operation In React CRUD App
//Delete operation wants an ID
//Lecture 92  Update Operation In React CRUD App (File: Edit.js)
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Read() {
  const [apiData, setApiData] = useState([])
  function getData() {
    axios.get('https://688874e8adf0e59551ba03ff.mockapi.io/crud')
      .then((response) => {
        //console.log(response.data);
        setApiData(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }
  function handleDelete(id) {
    axios.delete(`https://688874e8adf0e59551ba03ff.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      }).catch((error) => {
        console.log(error);
      });
  }
  function setDataToStarage(id, name, age, email) {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('email', email);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    // <>
    //   <div className='row'>
    //     <div className='col-md-12'>
    //       <div className='mb-2 mt-2'>
    //         <Link to="/create">
    //           <button className='btn btn-primary'>Create New Data</button>
    //         </Link>
    //       </div>
    //       <table className='table table-bordered table-striped table-dark table-hover'>
    //         <thead>
    //           <tr>
    //             <th>ID</th>
    //             <th>NAME</th>
    //             <th>AGE</th>
    //             <th>EMAIL</th>
    //             <th>EDIT</th>
    //             <th>DELETE</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {
    //             apiData.map((item) => {
    //               return (
    //                 <>
    //                   <tr>
    //                     <td>{item.id}</td>
    //                     <td>{item.e_name}</td>
    //                     <td>{item.e_age}</td>
    //                     <td>{item.e_email}</td>
    //                     <td>
    //                       <Link to="/edit">
    //                         <button className='btn btn-primary' onClick={() => setDataToStarage(item.id, item.e_name, item.e_age, item.e_email)}>EDIT</button>
    //                       </Link>
    //                     </td>
    //                     <td>
    //                       <button className='btn btn-danger' onClick={() => { if (window.confirm("Are you sure to delete data?")) { handleDelete(item.id) } }}>DELETE</button>
    //                     </td>
    //                   </tr>
    //                 </>
    //               )
    //             })
    //           }
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </>
    <>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h2 className='text-primary'>Employee Records</h2>
        <Link to="/create">
          <button className='btn btn-success'>+ Add New</button>
        </Link>
      </div>

      <div className='table-responsive'>
        <table className='table table-hover table-bordered align-middle shadow-sm'>
          <thead className="table-primary text-center">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item) => (
              <tr key={item.id}>
                <td className='text-center'>{item.id}</td>
                <td>{item.e_name}</td>
                <td>{item.e_age}</td>
                <td>{item.e_email}</td>
                <td className='text-center'>
                  <Link to="/edit">
                    <button className='btn btn-outline-primary btn-sm' onClick={() => setDataToStarage(item.id, item.e_name, item.e_age, item.e_email)}> <i className="bi bi-pencil"></i> Edit</button>
                  </Link>
                </td>
                <td className='text-center'>
                  <button className='btn btn-outline-danger btn-sm' onClick={() => window.confirm("Are you sure to delete data?") && handleDelete(item.id)}> <i className="bi bi-trash"></i> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  )
}

export default Read

