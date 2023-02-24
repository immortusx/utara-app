import React from 'react';
import '../asset/css/registerpage.css';

import { useState } from 'react';
import axios from '../API/axios'

const Register = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState('');
  const [employeeList, setEmployeeList] = useState([]);

  const submitForm = () => {
    axios.post("http://localhost:3005/api/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    });
  }
  console.log(employeeList);
  const getEmployee = () => {
    axios.get("http://localhost:3005/api/employee").then((response) => {
      setEmployeeList(response.data);
    })
  }
  return (
    <>
      <div className="container">
        <h1 className='text-center'>Registration Form</h1>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" id="name" onChange={(e) => { setName(e.target.value) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Age</label>
          <input type="number" className="form-control" name="age" id="age" onChange={(e) => { setAge(e.target.value) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Country</label>
          <input type="text" className="form-control" name="country" id="country" onChange={(e) => { setCountry(e.target.value) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Position</label>
          <input type="text" className="form-control" name="position" id="position" onChange={(e) => { setPosition(e.target.value) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Wage(year)</label>
          <input type="number" className="form-control" name="wage" id="wage" onChange={(e) => { setWage(e.target.value) }} />
        </div>

        <button type="submit" className="btn btn-primary" onClick={submitForm}>Submit</button>

      </div>
      <div className="container mt-4">
        <button className='btn btn-primary' onClick={getEmployee}> Show Employee</button>
        {
          employeeList.map((val, key) => {
            return (
              <div key={val.id}>
                <h6>Name:{val.name}</h6><br />
                <h6>Age:{val.age}</h6><br />
                <h6>Position:{val.position}</h6><br />
                <h6>Country:{val.country}</h6><br />
                <h6>Wage:{val.wage}</h6><br />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Register