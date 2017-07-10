import React from 'react'
import {NavLink} from 'react-router-dom'

const NavPane = () => (
  <div className="w3-sidebar w3-light-grey w3-bar-block w3-leftpane">
    <NavLink to="/" className="w3-bar-item w3-teal">HOME</NavLink>
    <NavLink to="/5" className="w3-bar-item w3-button">05. Writing a Counter Reducer with Tests</NavLink>
    <NavLink to="/6" className="w3-bar-item w3-button">06. Store Methods: getState(), dispatch(), and subscribe()</NavLink>
    <NavLink to="/7" className="w3-bar-item w3-button">07. Implementing Store from Scratch</NavLink>
    <NavLink to="/8" className="w3-bar-item w3-button">08. React Counter Example</NavLink>
  </div>
)

export default NavPane
