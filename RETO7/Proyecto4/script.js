form.addEventListener("submit" , (e) => {
    e.preventDefault()


    let peso = document.getElementById("peso").value
    let altura = parseFloat(document.getElementById("altura").value)

    let IMC = peso / (altura * altura)

    if(IMC < 18.5) {
        document.getElementById("resultado").textContent = "Bajo de peso"
    }else if(IMC >= 18.5 && IMC <= 24.9){
         document.getElementById("resultado").textContent = "Peso normal"
    }else if(IMC >= 25.0 && IMC <= 29.9){
        document.getElementById("resultado").textContent = "sobrePeso"
    }else if(IMC >= 30.0){
        document.getElementById("resultado").textContent = "Obesidad"
    }else {
        document.getElementById("resultado").textContent = "Ingresa un dato valido"
    }

    document.getElementById("IMC").innerHTML = `su IMC es: ${IMC}`
})