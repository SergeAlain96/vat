const situation_title = document.getElementById('situation-title')
const situation_section = document.getElementById('situation-section')

const histoire_title = document.getElementById('histoire_title')
const histoire_section = document.getElementById('histoire_section')

situation_title.addEventListener('click', () => {
    if (situation_section.classList.contains('hidden')){
        situation_section.classList.remove('hidden')
        situation_section.classList.add('displayed')
    }

    else if (situation_section.classList.contains('displayed')){
        situation_section.classList.remove('displayed')
        situation_section.classList.add('hidden')
    }
})
histoire_title.addEventListener('click', () => {
    if (histoire_section.classList.contains('hidden')){
        histoire_section.classList.remove('hidden')
        histoire_section.classList.add('displayed')
    }

    else if (histoire_section.classList.contains('displayed')){
        histoire_section.classList.remove('displayed')
        histoire_section.classList.add('hidden')
    }
})