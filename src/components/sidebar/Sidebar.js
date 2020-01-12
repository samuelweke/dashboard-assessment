import React from 'react';

import SidebarNav from './SidebarNav';
import profile from '../../assets/icons/profile.svg';

import './Sidebar.css';

function Sidebar() {
    return (
        <nav className="col-md-2 sidebar">
            <button className="btn-invoice" >GENERATE INVOICE</button>
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <SidebarNav />
                    <li className="nav-body mt-4">
                        <a className="nav-link" href="#link">
                            <img src={profile} alt="logo" />
                            Merchant Profile
                        </a>
                    </li>
                </ul>                
            </div>
        </nav>
    )
}

export default Sidebar
