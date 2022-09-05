import { React, useState } from 'react'

const LikeBtn = () => {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter((count) => count + 1)
  }

  return (
    <div className='counter'>
      <span className="counter-output">{counter}</span>
      <div align="center" className="like-cont">
        <button className="count-btn" onClick={increase}>
          ❤️
        </button>
      </div>
    </div>
  )
}

export default LikeBtn
