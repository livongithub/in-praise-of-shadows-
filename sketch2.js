const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
}
)


function fadeOut() {
    const fade = document.getElementById('shadow');

    fade.style.opacity = '75';
}