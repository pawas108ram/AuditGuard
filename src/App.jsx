import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './pages/About'
import FAQs from './pages/FAQs'
import Home from './pages/Home'
import Services from './pages/Services'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/faqs' component={FAQs} />
        </Switch>
      </Router>
    </div>
  )
}

export default App