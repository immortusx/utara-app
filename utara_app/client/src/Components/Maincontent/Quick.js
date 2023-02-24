import React, { useState } from 'react'
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import axios from '../../API/axios';

const Quick = () => {
  const [Mobileno, setMobileno] = useState("");
  const [Surname, setSurname] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [LastName, setLastName] = useState('');
  const [CityName, setCityName] = useState('');
  const [NoofDay, setNoofDay] = useState('');
  const [Employee, setEmployeeList] = useState([]);


  const submitEmployee = () => {
    axios.post("http://localhost:3500/api/quick", {
      Mobileno: Mobileno,
      Surname: Surname,
      MiddleName: MiddleName,
      LastName:LastName,
      CityName:CityName,
      NoofDay:NoofDay,
    });
  }
    
  console.log(Quick);
  const getQuick = () => {
    axios.get("http://localhost:3005/api/Quickdataget").then((response) => {
      setEmployeeList(response.data);
    })
  }
  return (

    <section className='bgcontainer '>
      <NavBar />
      <div className='bannrer container'>

        <div class="row my-4">
              <h2>Quick Registration</h2>
            </div>
        <form><b>
          <div class="form-group row my-4">
            <label for="inputPassword" class="col-sm-1 col-form-label">Mobile No:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="Mobileno" onChange={(e) => { setMobileno(e.target.value) }}/>
            </div>
          </div>
          <div class="form-group row my-4">
            <label for="inputPassword" class="col-sm-1 col-form-label">Surname:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="Surname" onChange={(e) => { setSurname(e.target.value) }}/>
            </div>
          </div>
          <div class="form-group row my-4">
            <label for="inputPassword" class="col-sm-1 col-form-label">MiddleName:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="MiddleName" onChange={(e) => { setMiddleName(e.target.value) }}/>
            </div>
          </div>
          <div class="form-group row my-4">
            <label for="inputPassword" class="col-sm-1 col-form-label">Last Name:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="LastName" onChange={(e) => { setLastName(e.target.value) }}/>
            </div>
          </div>
          <div class="form-group row my-4">
            <label for="inputPassword" class="col-sm-1 col-form-label">City Name:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="CityName" onChange={(e) => { setCityName(e.target.value) }}/>
            </div>
          </div>
          <div class="form-group row my-4">
            <label for="inputPassword" class="col-sm-1 col-form-label">No of Day:</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="NoofDay" onChange={(e) => { setNoofDay(e.target.value) }}/>
            </div>
          </div>
          <div class="text-center my-5">
            <button id="addBtn" class="btn btn-Dark btn-outline-success btn-lg active" onClick={submitEmployee} >Register</button>
          </div>
        </b>
        </form>

      </div>
      <Footer />
    </section>
  )
}

export default Quick