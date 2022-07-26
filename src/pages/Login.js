import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div class="hero min-h-screen bg-accent">
            <div class="flex-col my-10">
                <h3 className='font-bold text-2xl py-4 text-primary'>Please login</h3>
                <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body px-10">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <NavLink to={'#'} className='link-hover'>Forgot password?</NavLink>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <button className='btn btn-glass hover:bg-primary'>continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;