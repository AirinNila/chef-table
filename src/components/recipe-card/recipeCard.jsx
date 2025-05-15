import React from 'react';

const RecipeCard = ({card}) => {
    // console.log(card)
    const {recipe_id, recipe_name, image, description, ingredients, preparing_time, calories} = card;

    return (
        <div className='border-2 border-[#2828281A] p-4 rounded-lg flex flex-col  gap-6'>
            <div>
                <img src={image} alt="recipe" className='rounded-lg' />
            </div>
            <div></div>
        </div>
    );
};

export default RecipeCard;