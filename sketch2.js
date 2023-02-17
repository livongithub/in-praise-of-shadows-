// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// }
// )

// const cursor1 = document.querySelector('.cursor1');
// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// }
// )

    const cursorTag= document.querySelector("div.cursors")
    const balls= cursorTag.querySelectorAll("div")

    let aimX = 0 
    let aimY = 0

    balls.forEach((ball, index) => {
        let currentX = 0 
        let currentY = 0
      
        let speed = 0.2 - index * 0.02

    const animate = function () {
        currentX += (aimX - currentX) * speed
        currentY += (aimY - currentY) * speed

        ball.style.left = currentX + "px"
        ball.style.top = currentY + "px"

        requestAnimationFrame(animate)
    }

    animate()
    })

   


    

document.addEventListener("mousemove", function (event) {
    aimX = event.pageX
    aimY = event.pageY
} )
