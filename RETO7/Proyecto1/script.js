const prueba1 = document.getElementById("prueba1")
const prueba2 = document.getElementById("prueba2")
const prueba3 = document.getElementById("prueba3")
const prueba4 = document.getElementById("prueba4")
const prueba5 = document.getElementById("prueba5")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const pruebas = [
        parseInt(prueba1.value),
        parseInt(prueba2.value),
        parseInt(prueba3.value),
        parseInt(prueba4.value),
        parseInt(prueba5.value)
    ]

    const suma = pruebas.reduce((acumulador, number) => acumulador + number);
    const promedio = suma / pruebas.length

    mensaje.textContent = "El promedio para recorrer la piscina es " + promedio
})