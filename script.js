// Piano free play here in script.js
//!! GAME LOGIC in game.js file !!

const pianoKeys = document.querySelectorAll(".piano-keys .key")
keysCheckbox = document.querySelector(".keys-checkbox input")

let allKeys = [],
audio = new Audio(`tunes/a.wav`) // by default, audio src is "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on key pressed 
    audio.play() // playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`) // getting clicked key element
    clickedKey.classList.add("active") // adding active class to the clicked key element
    setTimeout(() => { // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove("active")
    }, 500)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key) // adding data-key value to the allKeys array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key))
})

const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const pressedKey = (e) => {
    // if the pressed key is in the allKeys array, only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key)
}

keysCheckbox.addEventListener("click", showHideKeys)
document.addEventListener("keydown", pressedKey)






