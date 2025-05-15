import React from 'react';

const Banner = () => {
    return (
        <section className='container mx-auto mt-6 '>
        <div className='bg-img flex p-6 md:p-24 justify-center items-center bg-cover bg-center bg-no-repeat rounded-xl'>
            <div className='flex flex-col gap-3 md:gap-8 items-center justify-center text-white text-center'>
                <h3 className='text-2xl md:text-4xl font-bold '>Discover an exceptional cooking <br /> class tailored for you!</h3>
                <p className='text-md md:text-lg'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='flex items-center gap-4'>
                    <button className='btn rounded-full px-6 pt-4 pb-4 text-xl font-semibold primary tittle '>Explore now</button>
                    <button className='btn rounded-full px-6 pt-4 pb-4 text-xl font-semibold border-2'>Feedback</button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Banner;