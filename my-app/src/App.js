import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';

import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile'
import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] ='application/json';
axios.defaults.headers.post['Accept'] ='application/json';

axios.defaults.withCredentials = true;

    function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<MasterLayout />} >
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/profile' element={<Profile />} />
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;