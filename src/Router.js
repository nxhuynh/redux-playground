import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CounterReducer from './lessons/5-CounterReducer'
import StoreMethods from './lessons/6-StoreMethods'
import Lesson7 from './lessons/7-StoreFromScratch'
import Lesson8 from './lessons/8-ReactCounter'
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
            <Route path="/7" component={Lesson7}></Route>
            <Route path="/8" component={Lesson8}></Route>
            <Route render={()=>{return <p>Not found</p>}}/>
          </Switch>
        </div>
      </div>
    </Router>
)

export default MyRouter
