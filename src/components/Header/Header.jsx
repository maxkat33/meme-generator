import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='header--main'>
            <img className='header--image' src='./images/troll-face.png' alt='Troll face meme'/>
            <h2 className='header--title' >Meme Generator</h2>
        </div>
        <h4 className='header--subtitle'>React Course - Project 3</h4>
    </header>
  )
}

export default Header