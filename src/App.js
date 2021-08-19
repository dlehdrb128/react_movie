import React from 'react'
import About from './routers/About'
import {HashRouter, HashROuter, Route} from 'react-router-dom'
import Home from './routers/Home'

const App = () => {
  return (
  <HashRouter>
    <Route path="/about" component={About}/>
    <Route path='/' component={Home} />
  </HashRouter>
  )
}

export default App;