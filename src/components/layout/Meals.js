import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
// import NewRecipe from './NewRecipe'

const Meals = ({ random, icon}) => {
    return (
        <Fragment>
        <div className="meals" id="meals">
            <div className="meal-header">
                {random ? <span className="random">Random Recipe</span> : ''}
                <img src={random.strMealThumb} alt={random.strMeal}/>
            </div>
            <div className="meal-body">
            <h4>{random.strMeal}</h4>
             <button className="fav-btn"><i className={icon}></i></button>   
            </div>
        </div>
        </Fragment>
    )
} 

Meals.defaultProps = {
    icon: 'fas fa-heart'
}

Meals.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default Meals;