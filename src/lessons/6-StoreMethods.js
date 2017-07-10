import React from 'react'
import {createStore} from 'redux'

const SampleCode = (update) => {
  const counter = (state = 0, action) => {
    switch(action.type){
      case 'INCREMENT': return state+1
      case 'DECREMENT': return state - 1;
      default: return state
    }
  }

  const store = createStore(counter);

  const render = () => {
    var s = store.getState()
    console.log(s)
    update(s)
    //document.body.innerText = store.getState();
  };

  store.subscribe(render);
  store.getState() // set initial state (0)

  document.addEventListener('click', () => {
    store.dispatch({ type : 'INCREMENT' })
  });
}

class StoreMethods extends React.Component{
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
      <div className="lesson6">
        <h3>06. Store Methods: getState(), dispatch(), and subscribe()</h3>
        <a href="https://egghead.io/lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe">video</a>
        |
        <a href="https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/02-Reducer_and_Store.md">notes</a>
        <hr/>
        <p>click to increment counter</p>
        <p>{this.state.countValue}</p>
      </div>
    )
  }
}

export default StoreMethods
