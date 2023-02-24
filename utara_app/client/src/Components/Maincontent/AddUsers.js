import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import axios from '../../API/axios';
import Mahamantr from '../../asset/Images/Mahamantr.jpeg';

const ADDUAERS_URL = "/users/addusers";
const AddUsers = () => {

    const [allCountry, setAllCountry] = useState('');
    const [allStates, setAllStates] = useState('');
    const [allDistricts, setAllDistricts] = useState('');
    const [allDisTaluka, setAllDisTaluka] = useState('');
    const [allTaVillages, setAllTaVillages] = useState('');

    const [errMsg, setErrMsg] = useState("");
    const [savebtn, setSaveBtn] = useState(false)

    const [surname, setSurName] = useState('');
    const [username, setUserName] = useState('');
    const [fathername, setFatherName] = useState('');
    const [gendermf, setGendermf] = useState("Male");
    const [age, setAge] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [countryId, setCountry] = useState('');
    const [stateId, setState] = useState('');
    const [districtId, setDistrictId] = useState('');
    const [talukaId, setTalukaId] = useState('');
    const [cityId, setCityId] = useState('');
    const [stayDays, setStayDays] = useState('');

    const saveAddUsers = async () => {
        const usersdata = {
            "surname": surname,
            "username": username,
            "fathername": fathername,
            "gendermf": gendermf,
            "age": age,
            "mobileno": mobileno,
            "countryId": countryId,
            "stateId": stateId,
            "districtId": districtId,
            "talukaId": talukaId,
            "cityId": cityId,
            "stayDays": stayDays,
        }

        console.log(usersdata);

        if (surname != '' && username != '' && fathername != '' && gendermf != '' && age != '' && mobileno != '' && countryId != '' && stateId != '' && districtId != '' && talukaId != '' && cityId != '' && stayDays != '') {
            try {
                setSaveBtn(true)
                const response = await axios.post(ADDUAERS_URL,
                    JSON.stringify(usersdata),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );

                if (response.statusText === 'OK') {
                    setSurName('');
                    setUserName('');
                    setFatherName('');
                    setGendermf('');
                    setAge('');
                    setMobileno('');
                    setCountry('');
                    setState('');
                    setDistrictId('');
                    setTalukaId('');
                    setCityId('');
                    setStayDays('');

                    setAllStates('');
                    setAllDistricts('');
                    setAllDisTaluka('');
                    setAllTaVillages('');
                    setSaveBtn(false)
                }
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 409) {
                    setErrMsg('This!')
                } else {
                    setErrMsg('Add User Failed');
                }
            }
        } else {
            setErrMsg(' Response');
        }
    }

    // Get All State Name and ID
    const getallStateIDName = async (conid) => {
        setCountry(conid)

        setAllDistricts('');
        setAllDisTaluka('');
        setAllTaVillages('');

        try {
            const response = await axios.post('/getregisterdata/getallstates',
                JSON.stringify({ conid }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            if (response.statusText === 'OK') {
                setAllStates(response?.data)
            }
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response');
            }
        }
    }
    // Get All District Name and ID
    const getallDistrictNI = async (statid) => {
        setState(statid)


        setAllDisTaluka('');
        setAllTaVillages('');
        try {
            const response = await axios.post('/getregisterdata/getalldistricts',
                JSON.stringify({ statid }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            if (response.statusText === 'OK') {
                setAllDistricts(response?.data)
            }
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response');
            }
        }
    }
    // Get All Dist Taluka Name and ID
    const getallDisTalukaNI = async (distid) => {
        setDistrictId(distid)
        try {
            const response = await axios.post('/getregisterdata/getalldistaluka',
                JSON.stringify({ distid }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            if (response.statusText === 'OK') {
                setAllDisTaluka(response?.data)
            }
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response');
            }
        }
    }
    // Get All Villages Name and ID
    const getAllTaVillagesNI = async (tavillid) => {
        setTalukaId(tavillid)
        try {
            const response = await axios.post('/getregisterdata/getalltalvillage',
                JSON.stringify({ tavillid }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            if (response.statusText === 'OK') {
                setAllTaVillages(response?.data)
            }
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response');
            }
        }
    }

    // Get All Country Name and ID
    const getAllCountry = async () => {
        try {
            const response = await axios.get('/getregisterdata/getallcounties',
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            if (response.statusText === 'OK') {
                setAllCountry(response?.data)
            }
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response');
            }
        }
    }

    useEffect(() => {
        getAllCountry();
    }, [])
    return (
        <section className='bgcontainer'>
            <NavBar />
            <div className=''>
                <div className='container-fluid bgdarkprimary bannerheight'>
                    <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                        <h1 className='text-light'>Add User</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='my-5 positionform'>
                        <img src={Mahamantr} className='img-fluid w-100' alt='Mahamantr' />
                        <div className='card positionformcard'>
                            <div className='card-body'>
                                <form>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className="mb-2">
                                                <label className="form-label">Surname</label>
                                                <input type="text" className="form-control p-1" placeholder='Enter Surname' value={surname} onChange={(e) => setSurName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="mb-2">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control p-1" placeholder='Enter Name' value={username} onChange={(e) => setUserName(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <label className="form-label">Father's Name</label>
                                        <input type="text" className="form-control p-1" placeholder='Enter Father Name' value={fathername} onChange={(e) => setFatherName(e.target.value)} />
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className="mb-2">
                                                <label className="form-label">Gender</label>
                                                <div className='d-flex justify-content-between'>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" value="Male" checked onChange={(e) => setGendermf(e.target.value)} />
                                                        <label className="form-check-label"> Male </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" value="Female" onChange={(e) => setGendermf(e.target.value)} />
                                                        <label className="form-check-label"> Female </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className="mb-2">
                                                <label className="form-label">Age</label>
                                                <select className="form-select" onChange={(e) => setAge(e.target.value)}>
                                                    <option selected> -- Select Age --</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="18">18</option>
                                                    <option value="21">21</option>
                                                    <option value="25">25</option>
                                                    <option value="30">30</option>
                                                    <option value="36">36</option>
                                                    <option value="42">42</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="mb-2">
                                                <label className="form-label">Mobile Number</label>
                                                <input type="text" className="form-control p-1" placeholder='Enter Mobile Number' value={mobileno} onChange={(e) => setMobileno(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className="mb-2">
                                                <label className="form-label">Country</label>
                                                <select className="form-select" onChange={(e) => getallStateIDName(e.target.value)}>
                                                    <option value="0" selected>-- Select Country --</option>
                                                    <option value="30">India</option>
                                                    {allCountry && allCountry.map((countdata, index) =>
                                                    (<>
                                                        <option key={index} value={countdata.country_id}>{countdata.country_name}</option>
                                                    </>)
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="mb-2">
                                                <label className="form-label">State</label>
                                                <select className="form-select" onChange={(e) => getallDistrictNI(e.target.value)}>
                                                    <option selected value="0">-- Select State --</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    {allStates && allStates.map((sttdata, index) =>
                                                    (<>
                                                        <option key={'stte' + index} value={sttdata.state_id}>{sttdata.state_name}</option>
                                                    </>)
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="mb-2">
                                                <label className="form-label">District</label>
                                                <select className="form-select" onChange={(e) => getallDisTalukaNI(e.target.value)}>
                                                    <option selected value="0">-- Select District --</option>
                                                    <option value="Amreli">Amreli</option>
                                                    <option value="Bhavnagar">Bhavnagar</option>
                                                    <option value="Jamnagar">Jamnagar</option>
                                                    <option value="Junagadh">Junagadh</option>
                                                    <option value="Porbandar">Porbandar</option>
                                                    <option value="Rajkot">Rajkot</option>
                                                    {allDistricts && allDistricts.map((disttdata, index) =>
                                                    (<>
                                                        <option key={'dist' + index} value={disttdata.districts_id}>{disttdata.districts_name}</option>
                                                    </>)
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="mb-2">
                                                <label className="form-label">Taluka</label>
                                                <select className="form-select" onChange={(e) => getAllTaVillagesNI(e.target.value)}>
                                                    <option value="0" selected>-- Select Taluka --</option>
                                                    <option value="Amreli">Amreli</option>
                                                    <option value="Babra">Babra</option>
                                                    <option value="Bagasara">Bagasara</option>
                                                    <option value="Dhari">Dhari</option>
                                                    <option value="Jafrabad">Jafrabad</option>
                                                    <option value="Khambha">Khambha</option>
                                                    <option value="Kunkavav Vadia">Kunkavav Vadia</option>
                                                    <option value="Lathi">Lathi</option>
                                                    <option value="Lilia">Lilia</option>
                                                    <option value="Savar Kundla">Savar Kundla</option>
                                                    {allDisTaluka && allDisTaluka.map((distaldata, index) =>
                                                    (<>
                                                        <option key={'distaluka' + index} value={distaldata.taluka_id}>{distaldata.taluka_name}</option>
                                                    </>)
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="mb-2">
                                                <label className="form-label">City/Village</label>
                                                <select className="form-select" onChange={(e) => setCityId(e.target.value)}>
                                                    <option value="0" selected>-- Select City/Village --</option>
                                                    {allTaVillages && allTaVillages.map((talvilldata, index) =>
                                                    (<>
                                                        <option key={'talvill' + index} value={talvilldata.village_id}>{talvilldata.village_name}</option>
                                                    </>)
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Stay for No.of days:</label>
                                        <select className="form-select" onChange={(e) => setStayDays(e.target.value)}>
                                            <option selected> -- Select No.of days --</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="18">18</option>
                                            <option value="21">21</option>
                                            <option value="25">25</option>
                                            <option value="30">30</option>
                                        </select>
                                    </div>

                                    <button type="button" className="btn btnprimarysave" onClick={saveAddUsers} disabled={savebtn} >Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default AddUsers