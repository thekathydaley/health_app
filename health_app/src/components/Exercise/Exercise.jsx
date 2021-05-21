import React, { Component } from 'react';
import ExerciseData from "./ExerciseData";

class Exercise extends Component {
    state={
            exerciseOptions: [
            'push-ups',
            'sit-ups',
            'jumping jacks',
            'burpees',
            'high knees',
            'squats',
            'lunges',
            'jump squats',
            'planks',
            'diamond push-ups',
            'floor dips',
        ],

        outputList: []
        
    }
      
    exerciseRandomizer=()=>{

        
        
        let list = this.state.exerciseOptions
        let output=[]
    
        for (let i = 0; i < 4; i++){
           let random = Math.floor(list.length * Math.random())
            output.push(list[random])

            list.slice(random, 1)
            
        }
     this.setState({
         outputList : output
     })

    }


    render() {
        return (
            <div className="styleExercise">
                {
                   this.state.outputList.length > 0 ?
                   this.state.outputList.map((ex,i)=>{
                       return(
                           <p>
                               {ex}
                           </p>
                       )
                   })

                    :
                    <button className="btn" onClick={(event)=>{this.exerciseRandomizer()}}>CLICK FOR A RANDOM EXERCISE LIST</button>
                }
            </div>
        );
    }
}

export default Exercise;