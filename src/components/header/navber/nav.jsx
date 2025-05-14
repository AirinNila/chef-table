import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const Nav = () => {
    return (
        <div className='container mx-auto'>
            <nav className='flex flex-col gap-3 md:flex-row md:justify-between justify-center items-center md:items-center mt-6'>
                <h3 className='text-2xl md:text-3xl font-bold tittle'>Recipe Calories</h3>
                <div className='des text-base flex gap-4'>
                    <a>Home</a>
                    <a>Recipe</a>
                    <a>About</a>
                    <a>Search</a>
                </div>
                <div className='flex gap-2 items-center'>
                <div className='des bg-[#150B2B0D] rounded-full p-2 flex gap-2 items-center justify-start'>
                    <div className='text-lg'>
                        <IoIosSearch />
                    </div>
                    
                    <input type="text" placeholder='search' className='bg-[#150B2B0D] text-base '/>
                </div>
                {/* user */}
                <div className='primary rounded-full p-2 text-lg'>
                    <FaRegCircleUser />
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;