import React from 'react'
import getRandomIndex from '../utils/getRandomIndex'
import phrases from '../utils/phrases.json'

const Button = ({ setPhraseRandom, setNumberImg }) => {
    
    const handleChangePhrase = () => {
        setPhraseRandom(getRandomIndex(phrases))
        setNumberImg(getRandomIndex([1, 2, 3, 4]))
    }

    return (
        <button  className='btn' onClick={handleChangePhrase}>Ver Otro</button>
    )
}

export default Button