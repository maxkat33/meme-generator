import React from 'react'

// Components
import Header from './components/Header/Header'
import Meme from './components/Meme/Meme'

const App = () => {
  return (
    <div>
      <Header />
      <div className='hero'>
        <Meme />
      </div>
    </div>
  )
}

export default App