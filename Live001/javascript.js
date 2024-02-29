document.getElementById ('id-img-olho').addEventListener('click', clique)

function clique() {
    const olho = document.getElementById('id-img-olho')
    const iris = document.getElementById('id-img-iris')
    const input = document.getElementById('id-input-senha')

    if (input.type === 'password') {
        input.type = 'text'
        olho.src = 'imagens/olho_aberto.png'
        iris.src = 'imagens/iris.png'
        iris.style.display = 'block'

        const { width, height } = olho.getBoundingClientRect()
        const centerX = width / 2 
        const centerY = height / 2 -5

        document.addEventListener("mousemove", (e) => {
            const cursorX = e.clientX 
            const cursorY = e.clientY 

            // Calculate the distance between the cursor and the center of the eye
            const distance = Math.sqrt(Math.pow(cursorX - centerX, 2) + Math.pow(cursorY - centerY, 2))

            // If the cursor is within a radius of 100px around the center of the eye
            if (distance === distance) {
                // Calculate the angle between the center of the eye and the cursor position
                const angle = Math.atan2(cursorY - centerY -280, cursorX - centerX - 940)

                // Calculate the new position of the iris
                const newX = centerX + Math.cos(angle) * (width / 14)
                const newY = centerY + Math.sin(angle) * (height / 9)

                // Position the iris
                iris.style.left = `${newX}px`
                iris.style.top = `${newY}px`
            }
        })

    } else {
        input.type = 'password'
        olho.src = 'imagens/olho_fechado.png'
        iris.src = ''
        iris.style.display = 'none'

        document.removeEventListener("mousemove", (e) => {
            // code here
        })
    }
}