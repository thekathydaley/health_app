import React, { Component } from 'react';
import Form from "./Form"
import DataCard from './DataCard';
import '../Calories/CSS/Calories.css'

class Calories extends Component {
    constructor() {
        super()
        this.state = {
            updatedLogList: []
        }
    }
    addItemsToLog = (logEntry) => {
        let copyOfLogList = this.state.updatedLogList
        copyOfLogList.push(logEntry)
        this.setState({
            updatedLogList: copyOfLogList
        })

        console.log(this.state)

    }
    render() {
        return (
            <div className="container">
               

                <Form
                    addItemsToLog={this.addItemsToLog}
                />
                    <div className="gridTwo">
                {this.state.updatedLogList.length > 0 ?
                 this.state.updatedLogList.map((i,a)=>{
                    return( <DataCard
                        key={a}
                        updatedLogList={i} />)
               
                })

                :
                <h1> No Entry Added</h1>

            }
            </div>
        </div>
    );
}
}

export default Calories;