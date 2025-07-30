const images = document.querySelectorAll('.image')

images.forEach((image) => {
    image.addEventListener('click' , () => {
        removerActive()
        image.classList.add('active')
    })
})

function removerActive() {
    images.forEach((image) => {
        image.classList.remove('active')
    })
}
