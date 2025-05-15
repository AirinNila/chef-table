
import './App.css'
import Banner from './components/header/banner/banner'
import Nav from './components/header/navber/nav'
import RecipeCards from './components/recipe-cards/recipeCards'
import Recipe from './components/recipe/recipe'
import SideBar from './components/side-bar/sideBar'


function App() {
  

  return (
    <>
    <Nav></Nav>  
    <Banner></Banner>
    <Recipe></Recipe>
    <div className='flex container mx-auto mt-4 gap-4'>
      <RecipeCards></RecipeCards>
      <SideBar></SideBar>
    </div>
    </>
  )
}

export default App
