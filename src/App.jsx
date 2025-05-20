
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
  const [time, setTime] = useState(0)
  const [calori, setCalories] = useState(0)
 
  const handleWantCookBtn = (value) => {
      const newPreparing = [...preparing, value]
      setPreparing(newPreparing)
      setClicked([...clicked, value.recipe_id]) 
   }

   const handleCurrenCook = (id, recipe, preparing_time, calories) => {
      // console.log('removed', recipe)
       const newCook = preparing.filter(data => data.recipe_id !== id )
       setPreparing(newCook)
       const newCurrentCook = [...currentCook, recipe]
       setCurrentCook(newCurrentCook)
       const newTime = time + parseInt(preparing_time)
       setTime(newTime)
       const totalCalories = calori + parseInt(calories)
       setCalories(totalCalories)
   }

  return (
    <>
    <Nav></Nav>  
    <Banner></Banner>
    <Recipe></Recipe>
    <div className='flex flex-col items-center md:items-start md:flex-row container mx-auto mt-4 gap-4'>
      <RecipeCards handleWantCookBtn= {handleWantCookBtn} clicked={clicked}></RecipeCards>
      <SideBar preparing= {preparing} handleCurrenCook={handleCurrenCook} currentCook={currentCook} time={time} calori={calori}></SideBar>
    </div>
    </>
  )
}

export default App
