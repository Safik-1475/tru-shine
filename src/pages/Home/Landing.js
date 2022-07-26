import React from 'react';

const Landing = () => {
    return (
        <div class="hero min-h-[60vh] bg-accent">
            <div class="hero-content max-w-6xl mx-auto uppercase flex-col lg:flex-row pt-8">
                <div>
                    <h2 class="lg:text-2xl font-bold text-primary" data-aos="fade-right" data-aos-duration="1000">Shine Life</h2>
                    <h1 className='lg:text-3xl font-bold capitalize' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">Hoarding Home Cleaning - Clutter Cleaning and Removal</h1>
                    <p class="py-6 capitalize">Specialty cleanup and eviction clean out service in NYC. We do it all, Clutter cleaning. From junk removal to painting. Total clean out and recovery of neglected apartment home</p>
                    <button class="btn btn-primary" data-aos="fade-right" data-aos-duration="4000" data-aos-delay="1000">Get Started</button>
                </div>
                <img className='shrink-0' src="https://i.ibb.co/PrtKD4L/banner-bg.png" />
            </div>
        </div>
    );
};

export default Landing;