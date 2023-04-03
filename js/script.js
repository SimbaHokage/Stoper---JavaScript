const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.fa-question')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

const colorBtn = document.querySelector('.fa-paint-brush')
const colorPanel = document.querySelector('.colors')
const colorOne = document.querySelector('.one')
const colorTwo = document.querySelector('.two')
const colorThree = document.querySelector('.three')
const colorFour = document.querySelector('.four')
let root = document.documentElement;

let countTime
let minutes = 0
let seconds = 0

let timeArr = []

const handleStart = () => {
    clearInterval(countTime)

    countTime = setInterval(() => {
        seconds++
        if(seconds < 10) {
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 10 && seconds < 60) {
            stopwatch.textContent = `${minutes}:${seconds}`
        } else if(seconds === 60) {
            seconds = 0
            minutes++
            stopwatch.textContent = `${minutes}:00`
        }
        
    }, 400)
}

const handleStop = () => {

    if(stopwatch.textContent !== '0:00') {
        time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`
        time.style.visibility = 'visible'
        timeArr.push(stopwatch.textContent)
    }

    clearStuff()
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleReset = () => {

    time.style.visibility = 'hidden'
    timeArr = []
    clearStuff()
}

const clearStuff = () => {
    clearInterval(countTime)
    stopwatch.textContent = '0:00'
    timeList.textContent = ''
    seconds = 0 
    minutes = 0
}

const showHistory = () => {

    timeList.textContent = ''
    let counter = 0

    timeArr.forEach(time => {
        const li = document.createElement('li')
        timeList.append(li)
        counter++
        li.innerHTML = `Pomiar nr ${counter}: <span>${time}</span>`
    })
}

const showModal = () => {
    // if(!(modalShadow.style.display === 'block')) {
    //     modalShadow.style.display = 'block'
    // } else {
    //     modalShadow.style.display = 'none'
    // }

    if(modalShadow.style.display === 'none') {
        modalShadow.style.display = 'block'
    } else {
        modalShadow.style.display = 'none'
    }

    modalShadow.classList.toggle('modal-animation')
}

const changeColor = () => {

}


startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false)

colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
    root.style.setProperty('colors.$first-color', '#FA1406')
})

colorTwo.addEventListener('click', () => {
    root.style.setProperty('colors.$second-color', '#D2C7BE')
})

colorThree.addEventListener('click', () => {
    root.style.setProperty('colors.$third-color', '#38e0b6')
})

colorFour.addEventListener('click', () => {
    root.style.setProperty('colors.$fourth-color', '#9411ff')
})