import React from 'react'

const Meme = () => {
  return (
    <main>
        <form className='form'>
                <input type='text' placeholder='Enter top text here...' className='form--input'></input>
                <input type='text' placeholder='Enter bottom text here...' className='form--input'></input>
                <button className='form--button'>Get a new meme image 🖼</button>
        </form>
    </main>
  )
}

export default Meme