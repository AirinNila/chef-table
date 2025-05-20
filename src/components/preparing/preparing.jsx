import React from 'react';

const Preparing = ({recipe, handleCurrenCook}) => {
    const { recipe_name, preparing_time, calories, recipe_id} = recipe;
    return (
        <div className='bg-[#2828280D] p-2 flex des text-base'>
            <div className='w-1/2 flex gap-6 '>
            <p>1</p>
            <p>{recipe_name}</p>
            <p className='md:pr-4'>{preparing_time}</p>
            </div>
            <div className='flex gap-4 '>
            <p>{calories}</p>
            <button onClick={() => handleCurrenCook(recipe_id, recipe)} className='btn p-2 flex items-center justify-center mt-4 h-8 rounded-full md:pl-2 md:pr-2 text-sm md:text-lg font-semibold primary tittle'>Preparing</button>
            </div>
        </div>
    );
};

export default Preparing;