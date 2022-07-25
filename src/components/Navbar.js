import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    return (
        <>
            <div class="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <div class=" lg:px-16 w-full navbar bg-base-300">
                        <div class="flex-1 px-2 mx-2 text-xl font-bold">Thu Shine..</div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                <li>
                                    <NavLink className='rounded-lg ml-1' to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className='rounded-lg ml-1' to={'/about'}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink className='rounded-lg ml-1' to={'/services'}>Services</NavLink>
                                </li>
                                <li>
                                    <NavLink className='rounded-lg ml-1' to={'/contact'}>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink className='rounded-lg ml-1' to={'/login'}>Login</NavLink>
                                </li>
                                {/* Dropdown here */}

                                <div class="dropdown dropdown-end ml-1">
                                    <label tabindex="0" class="btn btn-outline btn-primary rounded-btn">BOOK NOW</label>
                                    <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                        <li>
                                            <NavLink className='rounded-lg mb-1' to={'/your order'}>Your Order</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='rounded-lg' to={'preview items'}>Preview items</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        <li>
                            <NavLink className='rounded-lg ml-1' to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='rounded-lg ml-1' to={'/about'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink className='rounded-lg ml-1' to={'/services'}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink className='rounded-lg ml-1' to={'/contact'}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink className='rounded-lg ml-1' to={'/login'}>Login</NavLink>
                        </li>
                        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-sm font-normal">
                                BOOK NOW
                            </div>
                            <div class="collapse-content">
                                <li>
                                    <NavLink className='rounded-lg mb-1' to={'/#'}>Your Order</NavLink>
                                </li>
                                <li>
                                    <NavLink className='rounded-lg' to={'/#'}>Preview items</NavLink>
                                </li>
                            </div>
                        </div>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Navbar;