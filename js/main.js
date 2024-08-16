const music1 = document.querySelector('#musica1')
const album1 = document.querySelector('.debut')

album1.addEventListener('mouseover', () => {
    const playPromise = music1.play()

    if (playPromise) {
        playPromise.catch(() => {
            playPromise()
        })
    }
})

album1.addEventListener('mouseout', () => {
    const loadPromise = music1.load()

    if(loadPromise) {
        loadPromise.catch(() => {
            loadPromise()
        })
    }
})

const music2 = document.querySelector('#musica2')
const album2 = document.querySelector('.helplessness-blues')

album2.addEventListener('mouseover', () => {
    const playPromise = music2.play()

    if (playPromise) {
        playPromise.catch(() => {
            playPromise()
        })
    }
})

album2.addEventListener('mouseout', () => {
    const loadPromise = music2.load()

    if(loadPromise) {
        loadPromise.catch(() => {
            loadPromise()
        })
    }
})

const music3 = document.querySelector('#musica3')
const album3 = document.querySelector('.crack-up')

album3.addEventListener('mouseover', () => {
    const playPromise = music3.play()

    if (playPromise) {
        playPromise.catch(() => {
            playPromise()
        })
    }
})

album3.addEventListener('mouseout', () => {
    const loadPromise = music3.load()

    if(loadPromise) {
        loadPromise.catch(() => {
            loadPromise()
        })
    }
})

const music4 = document.querySelector('#musica4')
const album4 = document.querySelector('.shore')

album4.addEventListener('mouseover', () => {
    const playPromise = music4.play()

    if (playPromise) {
        playPromise.catch(() => {
            playPromise()
        })
    }
})

album4.addEventListener('mouseout', () => {
    const loadPromise = music4.load()

    if(loadPromise) {
        loadPromise.catch(() => {
            loadPromise()
        })
    }
})