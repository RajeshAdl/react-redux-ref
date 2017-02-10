import { render } from 'react-dom'
import React from 'react'
import { Component } from 'react'
import AddTodo from '../components/AddTodo'
import VisibleTodoList from '../components/VisibleTodoList'
import Footer from './Footer'

const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

export default App

//
// class App extends Component {
// 	render() {
// 		return (
// 			<div>Hello</div>
// 		)
// 	}
// }
