import React from 'react'
import {expect} from 'chai'

const SampleCode = () => {
  const counter = (state = 0, action) => {
    switch(action.type){
      case 'INCREMENT': return state+1
      case 'DECREMENT': return state - 1;
      default: return state
    }
  }
  expect (counter(0, { type: 'INCREMENT' })).to.equal(1);
  expect (counter(1, { type: 'INCREMENT' })).to.equal(2);
  expect (counter(2, { type: 'DECREMENT' })).to.equal(1);
  expect (counter(1, { type: 'DECREMENT' })).to.equal(0);
  expect (counter(1, { type: 'SOMETHING_ELSE' })).to.equal(1);
  console.log('Tests passed!')
}

class CounterReducer extends React.Component{
  render(){
    SampleCode()

    return(
      <div className="lesson5">
        <h3>5 - Writing a Counter Reducer with Tests</h3>
        <a href="https://egghead.io/lessons/javascript-redux-writing-a-counter-reducer-with-tests">video</a>
        |
        <a href="https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/02-Reducer_and_Store.md">notes</a>
        <hr/>
        <p>Turn on console to see result</p>
      </div>
    )
  }
}

export default CounterReducer
