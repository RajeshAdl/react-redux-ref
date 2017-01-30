// import { createStore } from 'redux'
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
//
// const Counter = ({value, onIncrement, onDecrement}) => (
//   <div>
//     <h1>{value}</h1>
//     <button onClick={onIncrement}>+</button>
//     <button onClick={onDecrement}>-</button>
//   </div>
// )
//
// const counter = (state = 0, action) => {
//   if(action.type === 'INCREMENT') {
//     return state + 1
//   }
//   if(action.type === 'DECREMENT') {
//     return state - 1
//   }
//   return state
// }
//
// const store = createStore(counter)
//
// const render = () => {
//   ReactDOM.render(
//     <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//     onDecrement={() => store.dispatch({type: 'DECREMENT'})}
//     />,
//     document.getElementById("root")
//   )
// }
//
// store.subscribe(render)
// render()

//
// import expect from 'expect'
// import deepFreeze from 'deep-freeze'
//
// const addCounter = (list) => {
//   return [...list, 0]
// }
//
// const testAddCounter = () => {
//   const listBefore = []
//   const listAfter = [0]
//
//   deepFreeze(listBefore)
//
//   expect(
//     addCounter(listBefore)
//   ).toEqual(listAfter)
// }
//
// testAddCounter();
//
// const removeCounter = (list, index) => {
//   return [
//     ...list.slice(0,index),
//     ...list.slice(index+1)
//   ]
// }
//
// const testRemoveCounter = () => {
//   const listBefore = [10, 20, 30]
//   const listAfter = [10, 30]
//
//   deepFreeze(listBefore)
//
//   expect(
//     removeCounter(listBefore, 1)
//   ).toEqual(listAfter)
// }
//
// testRemoveCounter()
//
// const incrementCounter = (list, index) => {
//   return [
//     ...list.slice(0, index),
//     list[index] + 1,
//     ...list.slice(index+1)
//   ]
// }
//
// const testIncrementCounter = () => {
//   const listBefore = [10, 20, 30]
//   const listAfter = [10, 21, 30]
//
//   deepFreeze(listBefore)
//
//   expect(
//     incrementCounter(listBefore, 1)
//   ).toEqual(listAfter)
// }
//
// testIncrementCounter()
//
// console.log('All tests passed')

// import expect from 'expect'
// import deepFreeze from 'deep-freeze'
//
// const toggleTodo = (todo) => {
//   //return Object.assign({}, todo, {completed: !todo.completed})
//
//   return {
//     ...todo,
//     completed: !todo.completed
//   }
// }
//
// const testToggleTodo = () => {
//   const before = {
//     id: 1,
//     text: "Things to do",
//     completed: false
//   }
//
//   const after = {
//     id: 1,
//     text: "Things to do",
//     completed: true
//   }
//
//   deepFreeze(before)
//
//   expect(
//     toggleTodo(before)
//   ).toEqual(after)
// }
//
// testToggleTodo()
//
// console.log("All tests passed")

// import { combineReducers, createStore } from 'redux'
//
// const todo = (state, action) => {
//   switch(action.type){
//     case 'ADD_TODO':
//       return {
//         id: 1,
//         text: action.text,
//         completed: false
//       }
//     case 'TOGGLE_TODO':
//       if(state.id !== action.id)
//         return state
//       return {
//         ...state,
//         completed: !state.completed
//       }
//     default:
//       return state
//   }
// }
//
// const todos = (state = [], action) => {
//   switch(action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         todo(undefined, action)
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(t => todo(t, action))
//     default:
//       return state
//   }
// }
//
// const visibilityFilter = (state = 'SHOW_ALL', action) => {
//   switch(action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter
//     default:
//       return state
//   }
// }
//
// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })
//
// const store = createStore(todoApp)

// const testAddTodo = () => {
//   const stateBefore = []
//   const stateAfter = [
//     {
//       id: 1,
//       text: "Todo item 1",
//       completed: false
//     }
//   ]
//   const action = {
//     type: 'ADD_TODO',
//     text: "Todo item 1",
//     id: 1
//   }
//
//   deepFreeze(stateBefore)
//   deepFreeze(action)
//
//   expect(
//     todos(stateBefore, action)
//   ).toEqual(stateAfter)
// }
//
// testAddTodo()
//
// const testToggleTodo = () => {
//   const stateBefore = [
//     {
//       id: 0,
//       text: "Todo item 1",
//       completed: false
//     },
//     {
//       id: 1,
//       text: "Todo item 2",
//       completed: false
//     }
//   ]
//
//   const action = {
//     type: 'TOGGLE_TODO',
//     id: 1
//   }
//
//   const stateAfter = [
//     {
//       id: 0,
//       text: "Todo item 1",
//       completed: false
//     },
//     {
//       id: 1,
//       text: "Todo item 2",
//       completed: true
//     }
//   ]
//
//   deepFreeze(stateBefore)
//   deepFreeze(action)
//
//   expect(
//     todos(stateBefore, action)
//   ).toEqual(stateAfter)
// }
//
// testToggleTodo()
//
// console.log("All tests passed")

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'

const todo = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if(state.id !== action.id)
        return state
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const AddTodo = ({ addOnClick }) => {
  let input = ''
  return (
    <div>
      <input ref={node => {input = node}} />
      <button onClick={() => {
        addOnClick(input.value)
        input.value = ''
      }}>
        Add todo
      </button>
    </div>
  )
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(todoApp)

const Footer = ({ visibilityFilter, onFilterClick }) => (
  <p>
    Show: {' '}
    <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter} onFilterClick={onFilterClick}>
      All
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter} onFilterClick={onFilterClick}>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter} onFilterClick={onFilterClick}>
      Completed
    </FilterLink>
  </p>
)

const FilterLink = ({ filter, currentFilter, onFilterClick, children }) => {
  if(filter === currentFilter) {
    return (
      <span>
        {children}
      </span>
    )
  }
  return (
    <a href="#" onClick={(e) => {
      e.preventDefault()
      onFilterClick(filter)
    }}>
      {children}
    </a>
  )
}

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    default:
      return todos
  }
}

const Todo = ({ text, completed, onClick }) => (
  <li onClick={onClick}
    style={{
      textDecoration: completed? 'line-through': 'none'
    }}>
    {text}
  </li>
)

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

let incrementID = 0
const TodoApp = ({ todos, visibilityFilter }) => (
  <div>
    <AddTodo addOnClick={(text) =>
      store.dispatch({
        type: 'ADD_TODO',
        text,
        id: incrementID++
      })
    } />
    <TodoList todos={getVisibleTodos(todos, visibilityFilter)} onTodoClick={(id) => {
      store.dispatch({type: 'TOGGLE_TODO', id})
    }} />
    <Footer visibilityFilter={visibilityFilter} onFilterClick={(filter) =>
      store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
      })
    }/>
  </div>
)

const render = () => {
  ReactDOM.render(<TodoApp {...store.getState()} />, document.getElementById('root'))
}

store.subscribe(render)
render()
