import React from 'react';

const Recipe = () => {
    return (
        <section className='container mx-auto mt-10'>
         <div className='flex flex-col items-center gap-4 text-center'>
            <h3 className='tittle text-2xl md:text-3xl font-bold'>Our Recipes</h3>
            <p className='text-base des pb-4'>At Our Recipe, we believe that great food begins with love and simple ingredients. <br />
                From traditional deshi dishes to international flavors, every recipe is crafted with care, <br /> tested in real kitchens, and perfect for both beginners and pro cooks</p>
         </div>
        </section>
    );
};

export default Recipe;