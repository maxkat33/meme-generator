import React from 'react'

const Meme = () => {
  return (
    <form>
        <div className='form--inputs'>
            <input type='text' placeholder='Enter top text here...'></input>
            <input type='text' placeholder='Enter bottom text here...'></input>
        </div>
        <button>Get a new meme image 🖼</button>
    </form>
  )
}

export default Meme