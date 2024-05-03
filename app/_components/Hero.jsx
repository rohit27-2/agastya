import React from 'react';

function Hero() {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 overflow-hidden">
                <img src="/hero.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: '-1' }} />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-4xl px-12 font-bold text-center text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    The worldwide safest
                    Green Hydrogen Storage <br />
                    <span className='text-base text-lime-400'>GREEN. SAFE. COMPACT</span></h1>
                
            </div>
            
        </div>
    );
}

export default Hero;
