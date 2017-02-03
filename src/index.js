import Redux from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const AppContainer = () => {
  return (
    <div>
      <App />
    </div>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('root'))
