import React, { useEffect } from 'react'
import ReactGa from 'react-ga'

const SimpleComponent = () => (
  <div>
    <p>This is a simple blog</p>
    <a href='https://www.jonascsantos.com' onClick={() => ClickHandler('mainWebsite')}>
      Visit jonascsantos.com!
    </a>
    <button onClick={() => sendTiming('sendTime_Button')}>Send Time</button>
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
  console.log(diff, ': ', label)
  //var ga = ReactGa.ga()
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'event': 'item-click',
    'eventLabel': label,
    'eventValue': diff
  })

  //ga('send', 'event', 'Megamenu', 'Click_TimeToAction', label, diff)
}

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-152578899-1')
    ReactGa.pageview('/')
  }, [])

  return <SimpleComponent ClickHandler={ClickHandler} />
}

export default App
