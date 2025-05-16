import React from 'react';

const Preparing = ({recipe}) => {
    const { recipe_name, preparing_time, calories} = recipe;
    return (
        <div className='bg-[#2828280D] p-2 flex des text-base'>
            <div className='w-1/2 flex gap-6'>
            <p>1</p>
            <p>{recipe_name}</p>
            <p className='pr-4'>{preparing_time}</p>
            </div>
            <div className='flex gap-4'>
            <p>{calories}</p>
            <button className='btn rounded-full pl-2 pr-2 text-sm md:text-lg font-semibold primary tittle'>Preparing</button>
            </div>
        </div>
    );
};

export default Preparing;