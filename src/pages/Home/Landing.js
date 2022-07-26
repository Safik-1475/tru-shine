import React from 'react';

const Landing = () => {
    return (
        <>
            <div class="hero min-h-[60vh] bg-accent">
                <div class="hero-content max-w-6xl mx-auto uppercase flex-col lg:flex-row mt-16">
                    <div>
                        <h2 class="lg:text-2xl font-bold text-primary" data-aos="fade-right" data-aos-duration="1000">Shine Life</h2>
                        <h1 className='lg:text-3xl font-bold capitalize' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">Hoarding Home Cleaning - Clutter Cleaning and Removal</h1>
                        <p class="py-6 capitalize">Specialty cleanup and eviction clean out service in NYC. We do it all, Clutter cleaning. From junk removal to painting. Total clean out and recovery of neglected apartment home</p>
                        <button class="btn btn-primary" data-aos="fade-right" data-aos-duration="4000" data-aos-delay="1000">Get Started</button>
                    </div>
                    <img className='shrink-0' src="https://i.ibb.co/PrtKD4L/banner-bg.png" />
                </div>
            </div>
            <div className='max-w-5xl mx-auto bg-base-200 rounded-2xl shadow-1xl relative p-4 mt-[-50px] mb-4'>
                <h3 className='text-primary text-2xl capitalize'>get free estimate</h3>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 py-4'>
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                </div>
                <button className='btn btn-primary'>request a quote</button>
            </div>
        </>
    );
};

export default Landing;