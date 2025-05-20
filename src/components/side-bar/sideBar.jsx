import React from 'react';
import Preparing from '../preparing/preparing';

const SideBar = ({ preparing, handleCurrenCook }) => {
        //console.log(preparing)
    return (
        <section className='md:w-2/5 w-full p-4'>
            <div className='border-2 border-[#2828281A]  rounded-lg'>
                <div className='flex flex-col gap-4 '>
                    <p className='m-4 border-b-2 p-2 text-2xl text-[#282828] font-semibold text-center'>Want to cook: {preparing.length}</p>
                    <div className='flex text-[#878787] text-base'>
                        
                        <div className='flex gap-4 w-1/2 justify-end pr-4'>
                            <p className='pr-6 md:pr-10'>Name</p>
                            <p>Time</p>
                        </div>
                        <p className=''>Calories</p>
                    </div>
                    <div>
                       {
                        preparing.map(recipe => <Preparing key={recipe.recipe_id} handleCurrenCook={handleCurrenCook} recipe={recipe}></Preparing>)
                       }
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='border-b-2 p-2 text-2xl text-[#282828] font-semibold text-center'>Currently cooking:</p>
                     <div className='flex text-[#878787] text-base'>
                            <p className='w-2/5 text-center'>Name</p>
                        <div className='flex gap-4 w-3/5 justify-start'>
                            <p className='pr-6 md:pr-10'>time</p>
                            <p className=''>Calories</p>
                        </div>
                    </div>
                    <div>
                        {

                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SideBar;