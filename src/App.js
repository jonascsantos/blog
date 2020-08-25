import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ReactGa from 'react-ga'

const SimpleComponent = () => (
  <div>
    <p>This is a simple blog</p>
    <a href='https://jonascsantos.com' onClick={() => ClickHandler('mainWebsite')}>
      Visit jonascsantos.com!
    </a>
    <button onClick={() => sendTiming('sendTime_Button')}>Send Time</button>
  </div>
)
const About = () => (
  <div>
    <p>About</p>
    <button onClick={() => sendEvent('AboutButton')}>About Button</button>
  </div>
)
const Users = () => (
  <div>
    <p>Users</p>
    <button onClick={() => sendEvent('UsersButton')}>Users Button</button>
  </div>
)
const Home = () => (
  <div>
    <p>Home</p>
    <button onClick={() => sendEvent('HomeButton')}>Home Button</button>
  </div>
)

const ClickHandler = name => {
  ReactGa.event({
    category: name,
    action: 'Clicked'
  })
}

var megamenuTimingStart = +new Date()

const sendTiming = label => {
  var megamenuTimingEnd = +new Date()
  var diff = Math.round(megamenuTimingEnd - megamenuTimingStart)
  if(window.dataLayer)
    window.dataLayer.push({
      'event': 'item-click',
      'eventLabel': label,
      'eventValue': diff
    })
}
const sendEvent = label => {
  if(window.dataLayer)
    window.dataLayer.push({
      'event': label,
    })
}

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-152578899-1')
    ReactGa.ga('set', 'exp', '9wDfYnldTQKFqvMPEdqBvA.1');
    ReactGa.pageview('/')
  }, [])

  return (
    <Router>
      <SimpleComponent ClickHandler={ClickHandler} />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
