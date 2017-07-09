import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CounterReducer from './lessons/5-CounterReducer'
import StoreMethods from './lessons/6-StoreMethods'
import NavPane from './Nav'

const Home = () => (
  <div>
    <h3>Resources</h3>
      <a href="http://redux.js.org/docs/introduction/Ecosystem.html">
        Redux homepage
      </a>
  </div>
)

const MyRouter = () => (
    <Router>
      <div>
        <NavPane/>
        <div className="w3-container w3-rightpane">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/5" component={CounterReducer}></Route>
            <Route path="/6" component={StoreMethods}></Route>
            <Route render={()=>{return <p>Not found</p>}}/>
          </Switch>
        </div>
      </div>
    </Router>
)

export default MyRouter
