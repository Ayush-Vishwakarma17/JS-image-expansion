// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

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
