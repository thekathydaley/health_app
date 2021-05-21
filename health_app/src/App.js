import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Main from "./components/Main";
import Calories from "./components/Calories/Calories";
import Exercise from "./components/Exercise/Exercise";
import Recipes from "./components/Recipes/Recipes";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path="/calories" component={Calories} />
        <Route exact path="/exercise" component={Exercise} />
        <Route exact path="/recipes" component={Recipes} />
        </Switch>


      </Router>

    </div>
  );
}

export default App;

/*
#MVP: 
10 total components:
     2 container components
     5 statefull 
     3 stateless
3 routes
AJAX requests or fetch()
at least 1 API
readme.md at end of root
deploy on heroku

#FUNCTIONS:
to search a database of exercise
search to find recipes
search by actor

#Web Structures
  Main/Welcome:
    C: Header   DONE
    Info Box    DONE
    Image       DONE
  Calories
    C - Header    DONE
    Input boxes   DONE
    Submit button DONE
    Data boxes    DONE
  Exercise:
    C: Header         DONE
    Input search box   
    Submit button
    C: 6data boxes
  Recipes:
    C: Header
    Input search box
    Submit button
    C: 6data boxes  

#COMPONENTS:
Header   DONA
        btn
          Home link
        btn
          Calorie link
        btn
          Exercise link
        btn      
          Recipe link
-Header CSS
Home Page:
    App info box
    image
-Home/Main CSS
Calorie Page: (done in other project)
      handleChange fn 
        lets you enter data into the form
      submit button 
        handleSubmit fn
-Calorie CSS
Exercise Page:
    search form
      handleChange fn 
        lets you enter data into the form
      submit button 
        handleSubmit fn
          where we make the API request
    api call FN(in handleSubmit)
    6 boxes to display results
Recipe Page:
    search form
      handleChange fn 
        lets you enter data into the form
      submit button 
        handleSubmit fn
          where we make the API request
    api call FN(in handleSubmit)
    6 boxes to display results

*/