const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');

one.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});
one.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

two.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});
two.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

three.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});
three.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});

four.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});
four.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});