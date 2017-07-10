import React from 'react'
import {createStore} from 'redux'

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const SampleCode = (update) => {
  const counter = (state = 0, action) => {
    switch(action.type){
      case 'INCREMENT': return state+1
      case 'DECREMENT': return state - 1;
      default: return state
    }
  }

  const store = createStore(counter);

  const render = () => { update(store.getState()) }

  store.subscribe(render);
  store.getState() // set initial state (0)
  return store
}

class Lesson8 extends React.Component{
  constructor(props){
    super(props)
    this.state = {countValue:0}
    this.updateState = this.updateState.bind(this)
    this.CounterStore = SampleCode(this.updateState)
  }

  updateState = (e) => {
    this.setState({countValue: e})
  }

  render(){
    return(
      <div className="lesson8">
        <h3>08. React Counter Example</h3>
        <a href="https://egghead.io/lessons/javascript-redux-react-counter-example">video</a>
        |
        <a href="https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/04-React_Counter_Example.md">notes</a>
        <hr/>
        <p>click to increment/decrement the counter</p>
        <Counter
          value={this.state.countValue}
          onIncrement={() => this.CounterStore.dispatch({ type : 'INCREMENT' })}
          onDecrement={() => this.CounterStore.dispatch({ type : 'DECREMENT' })}
        />
      </div>
    )
  }
}

export default Lesson8
