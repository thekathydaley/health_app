import React from 'react';
import {Link} from 'react-router-dom';



const Header = () => {
        return (
        <div>
                        <header className="header">
                <h1>MY HEALTH APP</h1>
                <Link to="/">
                <button className="btn">Home</button>
                </Link>
                <Link to="/Calories">
                <button className="btn">Calorie Counter</button>
                </Link>
                <Link to="/Exercise">
                <button className="btn">Exercises</button>
                </Link>
                <Link to="/Recipes">
                <button className="btn">Recipes</button>
                </Link>
                </header>
        </div>
    );
};

export default Header;