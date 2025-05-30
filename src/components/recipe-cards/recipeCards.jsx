import React, { useEffect, useState } from 'react';
import RecipeCard from '../recipe-card/recipeCard';

const RecipeCards = ({handleWantCookBtn, clicked}) => {
   // console.log(clicked)
    const [cards, setCards] = useState([])

    useEffect( () => {
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <section className='w-full p-6 md:w-3/5'>
        <div className='flex flex-col md:flex-row gap-4 md:grid md:grid-cols-2 '>
            {
                cards.map(card => <RecipeCard
                key={card.recipe_id}
                card={card}
                handleWantCookBtn={handleWantCookBtn}
                clicked= {clicked}
                ></RecipeCard>)
            }
        </div>
        </section>
    );
};

export default RecipeCards;