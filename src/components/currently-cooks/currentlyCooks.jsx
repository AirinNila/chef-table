import React from 'react';

const CurrentlyCooks = ({data}) => {
    const {recipe_name, preparing_time, calories} = data;
   // console.log(data)
    return (
        <div className='flex flex-col gap-6'>
              <div className='flex text-[#878787] text-base bg-[#2828280D]'>
                            <div className='flex gap-6'>
                                <p className='pl-3'>1</p>
                            <p className='w-2/5 text-center'>{recipe_name}</p>
                            </div>
                        <div className='flex gap-4 w-3/5 justify-start'>
                            <p className=''>{preparing_time} min</p>
                            <p className=''>{calories} calories</p>
                        </div>
                </div>
              
              
        </div>
    );
};

export default CurrentlyCooks;