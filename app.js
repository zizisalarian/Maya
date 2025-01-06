// active links
let windowURL = window.location.href

let links = document.querySelectorAll('.menu-container a')
if(links){

    links.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') == '/') {
        links[0].classList.add('active')
    } else {
        if (windowURL.includes(link.getAttribute('href'))) {

            link.classList.add('active')
            links[0].classList.remove('active')
        }
    }
})
}
        


// close menu on mobile
const elementsToIgnore = [document.querySelector('.menu-container'), document.querySelector('.toggler')];

document.body.addEventListener('click', (event) => {
    const isClickOutside = !elementsToIgnore.some(el => el.contains(event.target));
    if (isClickOutside) {
        document.querySelector('.toggler').click()
    }
});