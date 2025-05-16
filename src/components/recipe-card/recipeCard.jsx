import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const RecipeCard = ({card, handleWantCookBtn}) => {
    
    const { recipe_name, image, description, ingredients, preparing_time, calories} = card;

    return (
        <div className='border-2 border-[#2828281A] p-4 rounded-lg flex flex-col  gap-6'>
            <div>
                <img src={image} alt="recipe" className='rounded-lg' />
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <h3 className='tittle text-xl font-semibold'>{recipe_name}</h3>
                    <p className='des text-base'>{description}</p>
                </div>
                <div className='pt-6 flex flex-col gap-4 border-t-2 pb-4'>
                    <h3 className='text-xl font-semibold'>Ingredients {ingredients.length} </h3>
                    <ul className='list-disc text-[#878787] pl-6'>
                        
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                        <li>{ingredients[3]}</li>
                        <li>{ingredients[4]}</li>
                    </ul>
                </div>
                <div className='border-t-2 pt-6'>
                    <div className='flex gap-4 text-[#282828CC]'>
                        <div className='flex items-center gap-2'>
                          <div className='text-xl'> <IoTimeOutline /> </div>
                            <p className='text-base'>{preparing_time}</p>
                        </div>
                         <div className='flex items-center gap-2'>
                          <div className='text-xl'> <AiOutlineFire /> </div>
                            <p className='text-base'>{calories}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleWantCookBtn(card)} className='btn rounded-full md:px-4 md:pt-3 md:pb-2 p-2 text-sm md:text-xl font-semibold primary tittle mt-4'>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;