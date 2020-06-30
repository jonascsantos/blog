import React, { useEffect } from 'react'
import ReactGa from 'react-ga'

const SimpleComponent = () => (
  <div>
    <p>This is a simple blog</p>
    <a href='https://www.jonascsantos.com' onClick={() => ClickHandler('mainWebsite')} >Visit jonascsantos.com!</a>
  </div>
)



const ClickHandler = name => {
  ReactGa.event({
    category: name,
    action: 'Clicked'
  })
}

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-152578899-1')
    ReactGa.pageview('/')
  }, [])
  
  return <SimpleComponent ClickHandler={ClickHandler}  />
}

export default App
