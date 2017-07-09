/* 7 - Implement Redux createStore() from scratch
 * https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch
 */
import React from 'react'
//import {createStore} from 'redux'

const SampleCode = (update) => {
  const counter = (state = 0, action) => {
    switch(action.type){
      case 'INCREMENT': return state+1
      case 'DECREMENT': return state - 1
      default: return state
    }
  }

  const createStore = (reducer) => {
    let state
    let listeners = []

    const getState = () => state

    const subscribe = (listener) => {
      listeners.push(listener)
      // to unsubscribe
      // return a function that removes listener from listeners array
      return () => {
        listeners = listeners.filter(l => l !== listener);
      }
    }

    const dispatch = (action) => {
      state = reducer(state, action)
      listeners.forEach(listener => listener())
    }

    //initialize state
    dispatch({});

    return {getState, dispatch, subscribe}
  }

  const store = createStore(counter)

  const logStateChange = () => { console.log(store.getState()) }

  const render = () => { update(store.getState()) };

  var unsubscribeLogStateChange = store.subscribe(logStateChange);
  store.subscribe(render);
  // calling once to render the initial state (0), then the subscribe will update subsequently
  render();
  // to unsubscribe logStateChange()
  unsubscribeLogStateChange()

  document.addEventListener('click', () => {
    store.dispatch({ type : 'INCREMENT' })
  });
}

class Lesson7 extends React.Component{
  constructor(props){
    super(props)
    this.state = {countValue:0}
    this.updateState = this.updateState.bind(this)
    SampleCode(this.updateState)
  }
  updateState = (e) => {
    this.setState({countValue: e})
  }
  render(){
    return(
      <div className="lesson7">
        <h3>07. Implementing Store from Scratch</h3>
        <a href="https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch">video</a>
        |
        <a href="https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/03-Implementing_Store_from_Scratch.md">notes</a>
        <hr/>
        <p>same functionality as lesson 6, exception Redux createStore is implemented from scratch</p>
        <p>click to increment counter</p>
        <p>{this.state.countValue}</p>
      </div>
    )
  }
}

export default Lesson7
