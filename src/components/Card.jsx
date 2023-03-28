import React from 'react'



const Card = ({ phraseRandom }) => {
  return (
    <div className='principal__container'>
      <div className='shadow'>
        <p className='background'>{phraseRandom.phrase}</p>
      </div>
      <div className='background__author'>
        <p className='author'>{phraseRandom.author}</p>
      </div>
    </div>
  )
}

export default Card