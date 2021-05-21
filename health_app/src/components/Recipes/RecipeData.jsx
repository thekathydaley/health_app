import React, { Component } from 'react';

class RecipeData extends Component {
    
    render() {
       let data = this.props
        
        return (
            <div className="dataBox">
                <h1>Title: {data.title}</h1>
                <h2>Calories: {data.calories}</h2>
                <a href={data.url}>{data.title}</a><br></br>
                <img src= {data.image} alt="image" />               
              
            </div>
        );
    }
}

export default RecipeData;