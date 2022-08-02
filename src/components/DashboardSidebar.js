import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ children }) => {
    return (
        <div class="drawer drawer-mobile bg-accent">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu pt-20 overflow-y-auto w-80 bg-base-300 text-base-content">
                    <li>
                        <NavLink className='rounded-lg' to='/dashboard/add-admin' >Add Admin</NavLink>
                    </li>
                    <li>
                        <NavLink className='rounded-lg ' to='/dashboard/add-service' >Add Service</NavLink>
                    </li>
                    <li>
                        <NavLink className='rounded-lg ' to='/dashboard/edit-about' >Edit About</NavLink>
                    </li>
                    <li>
                        <NavLink className='rounded-lg ' to='/dashboard/add-profile' >Add profile</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;