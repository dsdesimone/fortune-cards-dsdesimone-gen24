const getRandomIndex = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom] // entre parentesis o corchetes?
}

export default getRandomIndex