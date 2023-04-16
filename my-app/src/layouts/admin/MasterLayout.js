import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';

import Footer from './Footer';
import NavBar from './NavBar';
import Sidebar from './Sidebar';



const MasterLayout = ()=>{
    return (
        <div className="sb-nav-fixed">
            <NavBar/>

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>

                <div id="layoutSidenav_content">
                <main>
                    <Outlet/>
                    <h1>commit test</h1>
                    

                </main>
                
                <Footer/>
                </div>
            </div>  
        </div>
    );
    <Navigate from="/admin" to="/admin/dashboard" />
    
}

export default MasterLayout;