import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import axios from "../../API/axios";

const Form = () => {
  const [Building, setBuilding] = useState("");
  const [Floor, setFloor] = useState("");
  const [Room, setRoom] = useState("");
  const [Name, setName] = useState("");
  const [Type, setType] = useState("");
  const [Seti, setSeti] = useState("");
  const [FloorBed, setFloorBed] = useState("");
  const [Bathroom, setBathroom] = useState("");
  const [ac, setac] = useState("");

  const submitForm = () => {
    console.log(Building,Floor,Room,Name,Type,Seti,FloorBed,Bathroom,ac)
    axios.post("http://localhost:3500/api/Form", {
      Building: Building,
      Floor: Floor,
      Room: Room,
      Name: Name,
      Type: Type,
      Seti: Seti,
      FloorBed: FloorBed,
      Bathroom: Bathroom,
      ac: ac,
    });
  };
  return (
    <>
      <NavBar />
      <div className="container">
        <form>
          <div className="col-md-3">
            <div className="mb-2">
              <label className="form-label">Building</label>
              <select
                className="form-select"
                value={Building}
                onChange={(e) => setBuilding(e.target.value)}
              >
                <option selected> -- Select Building --</option>
                <option value="1">Block A</option>
                <option value="2">Block B</option>
                <option value="3">Block C</option>
                <option value="4">Block D</option>
                <option value="5">Block E</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2">
              <label className="form-label">Floor</label>
              <select
                className="form-select"
                value={Floor}
                onChange={(e) => setFloor(e.target.value)}
              >
                <option selected> -- Select Floor --</option>
                <option value="1">Floor 1</option>
                <option value="2">Floor 2</option>
                <option value="3">Floor 3</option>
                <option value="4">Floor 4</option>
                <option value="5">Floor 5</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2">
              <label className="form-label">Room</label>
              <select
                className="form-select"
                value={Room}
                onChange={(e) => setRoom(e.target.value)}
              >
                <option selected> -- Select Room --</option>
                <option value="1">Room 1</option>
                <option value="2">Room 2</option>
                <option value="3">Room 3</option>
                <option value="4">Room 4</option>
                <option value="5">Room 5</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control p-1"
                  placeholder="Enter Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-2">
                <label className="form-label">Type</label>
                <select
                  className="form-select"
                  value={Type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option selected> -- Select Type --</option>
                  <option value="1">V VIP</option>
                  <option value="2">VIP</option>
                  <option value="3">GENERAL</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-2">
                <label className="form-label">Number of Seti Beds</label>
                <input
                  type="text"
                  className="form-control p-1"
                  placeholder="How Many You Want"
                  value={Seti}
                  onChange={(e) => setSeti(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-2">
                <label className="form-label">Number of Floor Beds </label>
                <input
                  type="text"
                  className="form-control p-1"
                  placeholder="How Many You Want"
                  value={FloorBed}
                  onChange={(e) => setFloorBed(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="mb-2">
                <label
                  className="form-label"
                  value={Bathroom}
                  
                >
                  Bathroom
                </label>
                <div className="d-flex justify-content-between">
                  <div className="form-check">
                    <input
                    onChange={(e) => setBathroom(e.target.value)}
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value={1}
                    />
                    <label className="form-check-label">Attach</label>
                  </div>
                  <div className="form-check">
                    <input
                     onChange={(e) => setBathroom(e.target.value)}
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value={2}
                    />
                    <label className="form-check-label">Common</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            id="ac1"
            name="ac1"
            onChange={(e) => setac(e.target.checked)}
          />
          Ac <br></br>
          <button
            type="button"
            className="btn btnprimarysave"
            onClick={submitForm}
          >
            Save
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Form;
