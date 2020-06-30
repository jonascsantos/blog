import React from 'react'
import styled from 'styled-components'

const Spacer = styled.div`
  padding-left: 2vw;
`

const SimpleComponent = () => (
  <div>
    <p>This is a simple blog</p>
    <a href="https://www.jonascsantos.com">Visit jonascsantos.com!</a>
  </div>
)

function App() {
  return <SimpleComponent />
}

export default App
