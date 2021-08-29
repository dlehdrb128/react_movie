import React from 'react'
import About from './routers/About'
import {HashRouter, Route, BrowserRouter} from 'react-router-dom'
import Home from './routers/Home'
import Navigation from './routers/Navigation'
import Detail from './routers/Detail'

const App = () => {
  
  return (
    
  <HashRouter>
    <Navigation />
    <Route path="/about" component={About}/>
    <Route path='/' component={Home} />
    <Route path="movies-detail" exact={true} component={Detail()} />
  </HashRouter>

 
  )
}

export default App;