import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import axios from "../../API/axios";

const User = () => {
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Mobileno, setMobileno] = useState("");
  const [Upload, setUpload] = useState("");

  const submitUser = () => {
    console.log(FirstName);
    console.log(MiddleName);
    console.log(LastName);
    console.log(Email);
    console.log(Address);
    console.log(Mobileno);
    console.log(Upload);

    let formdata = new FormData();
    formdata.append("FirstName", FirstName);
    formdata.append("MiddleName", MiddleName);
    formdata.append("LastName", LastName);
    formdata.append("Email", Email);
    formdata.append("Address", Address);
    formdata.append("Mobileno", Mobileno);
    formdata.append("Upload", Upload);
    console.log("formdata", formdata);
    axios.post("http://localhost:3500/api/user", formdata).then((response) => {
      console.log(response.data);
    });
  };

  const handleImageChange = (e) => {
    setUpload(e.target.files[0]);
  };
  console.log(User);
  return (
    <section className="bgcontainer ">
      <NavBar />
      <div className="banner container">
        <div class="row my-4">
          <h2>User Registration</h2>
        </div>
        <form>
          <b>
            <div class="form-group row my-4">
              <label for="inputPassword" class="col-sm-1 col-form-label">
                First Name
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="FirstName"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="form-group row my-4">
              <label for="inputPassword" class="col-sm-1 col-form-label">
                MiddleName:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="MiddleName"
                  onChange={(e) => {
                    setMiddleName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="form-group row my-4">
              <label for="inputPassword" class="col-sm-1 col-form-label">
                Last Name:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="LastName"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="form-group row my-4">
              <label for="inputPassword" class="col-sm-1 col-form-label">
                email:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="form-group row my-4">
              <label for="inputPassword" class="col-sm-1 col-form-label">
                Address:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="form-group row my-4">
              <label for="inputPassword" class="col-sm-1 col-form-label">
                Mobileno :
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="Mobileno"
                  onChange={(e) => {
                    setMobileno(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload Image :
              </label>
              <input
                class="form-control"
                type="file"
                id="Upload"
                onChange={handleImageChange}
              />
            </div>
            <div class="text-center my-5">
              <button
              
                id="addBtn"
                type="button"
                class="btn btn-Dark btn-outline-success btn-lg active"
                onClick={submitUser}
              >
                Register
              </button>
            </div>
          </b>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default User;
