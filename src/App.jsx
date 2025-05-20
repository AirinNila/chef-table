
import { useState } from 'react'
import './App.css'
import Banner from './components/header/banner/banner'
import Nav from './components/header/navber/nav'
import RecipeCards from './components/recipe-cards/recipeCards'
import Recipe from './components/recipe/recipe'
import SideBar from './components/side-bar/sideBar'


function App() {
  const [preparing, setPreparing] = useState([])
  const [clicked, setClicked] = useState([])
  const [currentCook, setCurrentCook] = useState([])
 
  const handleWantCookBtn = (value) => {
      const newPreparing = [...preparing, value]
      setPreparing(newPreparing)
      setClicked([...clicked, value.recipe_id]) 
   }

   const handleCurrenCook = (id, recipe) => {
      // console.log('removed', recipe)
       const newCook = preparing.filter(data => data.recipe_id !== id )
       setPreparing(newCook)
       const newCurrentCook = [...currentCook, recipe]
       setCurrentCook(newCurrentCook)
   }

  return (
    <>
    <Nav></Nav>  
    <Banner></Banner>
    <Recipe></Recipe>
    <div className='flex flex-col items-center md:items-start md:flex-row container mx-auto mt-4 gap-4'>
      <RecipeCards handleWantCookBtn= {handleWantCookBtn} clicked={clicked}></RecipeCards>
      <SideBar preparing= {preparing} handleCurrenCook={handleCurrenCook} currentCook={currentCook}></SideBar>
    </div>
    </>
  )
}

export default App
