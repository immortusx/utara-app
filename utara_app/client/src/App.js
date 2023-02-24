import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Maincontent/Home';
import Layout from './Components/Layout';
import Admin from './Components/Admin/Admin';
import Missing from './Components/Maincontent/Missing';
import AddUsers from './Components/Maincontent/AddUsers';
import { Routes, Route } from 'react-router-dom';
import Quick from './Components/Maincontent/Quick';
import User from './Components/Maincontent/User';
import Form from './Components/Maincontent/Form';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Publice routes */}
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='admin' element={<Admin />} />
        <Route path='/addusers' element={<AddUsers />} />
        <Route path='/Quick' element={<Quick />} />
        <Route path='/User' element={<User />} />
        <Route path='/Form' element={<Form />} />
        {/* we want to protect these routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />} >
          <Route path='admin' element={<Admin />} />
        </Route> */}
      </Route>
      {/* catch all */}
      <Route path='*' element={<Missing />} />
    </Routes>
  );
}

export default App;



