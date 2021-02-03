import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/layout/Header';
import Meals from './components/layout/Meals'
import Popup from './components/layout/Popup'


function App() {
  const [randomMeal, setRandomMeal] = useState([]);
  // const [searchedMeals, setSearchedMeals] = useState([]);
  // const [meal, setMeal] = useState('')

  const getRandomMeal = () =>
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then((jsonRes) => {
      setRandomMeal(jsonRes.meals[0])
    })
  
    // const getMealsBySearch = (term) => 
    //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    //   .then(res => res.json())
    //   .then((jsonRes) => {
    //     setSearchedMeals(jsonRes.meals)
    //     return searchedMeals
    //   })
  
  
  useEffect(() => {
    console.log('UseEffect');
    getRandomMeal();
  }, [])

  // useEffect(() => {
  //   getMealsBySearch();
  //   console.log("Searching Meals");
      
  //   }, [searchedMeals] )


  console.log(randomMeal);


    return (
      <div className="App">
        <div className="mobile-container">
          <Header />
          <Meals random={randomMeal} />
          <div className="new-recipe" id="new-recipe">
            <button id="newBtn">Get New Recipe</button>
    </div>
          <Popup />
        </div>
      </div>
    );
  
}

export default App;
