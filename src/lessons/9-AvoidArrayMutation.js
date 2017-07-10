/* 9 - Avoiding Array Mutations
 * https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread
 * https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/05-Avoiding_Array_Mutations.md
 */
import React from 'react'
import {expect} from 'chai'
import deepFreeze from 'deep-freeze'
//------------------------------------------------------------------------------
// Test 1: Add an element to an array using ES6 spread
const Test1 = () => {
  const addCounter_A = (list) => {
    list.push(0);
    return list;
  }

  const addCounter_B = (list) => {
    //return list.concat([0]) //old way
    return [...list, 0]
  }

  const testAddCounter = (addCounter) => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(
      addCounter(listBefore)
    ).deep.equal(listAfter);

  }
  // Test 1A
  try {
    testAddCounter(addCounter_A)
    console.log('ERROR: Test 1A passed, but should failed')
  } catch(err) {console.log('Test 1A failed as expected')}
  // Test 1B
  try {
    testAddCounter(addCounter_B)
    console.log('Test 1B passed')
  } catch(err) {console.log('ERROR: Test 1B failed')}
}
//------------------------------------------------------------------------------
// Test 2: Remove an element from an array using slice() instead of splice()
const Test2 = () => {
  const removeCounter_A = (list, index) => {
    list.splice(index, 1)
    return list
  }
  const removeCounter_B = (list, index) => {
    return[
      ...list.slice(0, index),
      ...list.slice(index+1)
    ]
  }

  const testRemoveCounter = (removeCounter) => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];
    deepFreeze(listBefore)
    expect (
      removeCounter(listBefore, 1)
    ).deep.equal(listAfter);
  }

  //Test 2A
  try {
    testRemoveCounter(removeCounter_A)
    console.log('ERROR: Test 2A passed, but should failed')
  } catch(err) {console.log('Test 2A failed as expected')}
  //Test 2B
  try {
    testRemoveCounter(removeCounter_B)
    console.log('Test 2B passed')
  } catch(err) {console.log('ERROR: Test 2B failed')}
}
//------------------------------------------------------------------------------
// Test 3: Modify an element in an array using slice
const Test3 = () => {
  const incrementCounter_A = (list, index) => {
    list[index]++
    return list
  }
  const incrementCounter_B = (list, index) => {
    return [
      ...list.slice(0, index),
      list[index]+1,
      ...list.slice(index+1)
    ]
  }

  const testIncrementCounter = (incrementCounter) => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];
    deepFreeze(listBefore);
    expect(
      incrementCounter(listBefore, 1)
    ).deep.equal(listAfter);
  }
  //Test 3A
  try {
    testIncrementCounter(incrementCounter_A)
    console.log('ERROR: Test 3A passed, but should failed')
  } catch(err) {console.log('Test 3A failed as expected')}
  //Test 3B
  try {
    testIncrementCounter(incrementCounter_B)
    console.log('Test 3B passed')
  } catch(err) {console.log('ERROR: Test 3B failed')}
}
//------------------------------------------------------------------------------
const Lesson9 = () => {
  Test1()
  Test2()
  Test3()

  return(
    <div className="lesson5">
      <h3>09. Avoiding Array Mutations</h3>
      <a href="https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread">video</a>
      |
      <a href="https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/05-Avoiding_Array_Mutations.md">notes</a>
      <hr/>
      <p>Turn on console to see result</p>
    </div>
  )
}

export default Lesson9
