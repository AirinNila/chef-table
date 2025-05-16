
import { useState } from 'react'
import './App.css'
import Banner from './components/header/banner/banner'
import Nav from './components/header/navber/nav'
import RecipeCards from './components/recipe-cards/recipeCards'
import Recipe from './components/recipe/recipe'
import SideBar from './components/side-bar/sideBar'


function App() {
  const [preparing, setPreparing] = useState([])

  const handleWantCookBtn = (value) => {
      const newPreparing = [...preparing, value]
      setPreparing(newPreparing)
  }

  return (
    <>
    <Nav></Nav>  
    <Banner></Banner>
    <Recipe></Recipe>
    <div className='flex flex-col items-center md:items-start md:flex-row container mx-auto mt-4 gap-4'>
      <RecipeCards handleWantCookBtn= {handleWantCookBtn}></RecipeCards>
      <SideBar preparing= {preparing}></SideBar>
    </div>
    </>
  )
}

export default App
