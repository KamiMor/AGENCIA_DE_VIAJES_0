

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    let diasTrabajados = document.getElementById("diasTrabajados").value
    let horasExtrasDiurnas = document.getElementById("horasExtrasDiurnas").value
    let horasExtrasNocturnas = document.getElementById("horasExtrasNocturnas").value
    let horasFestivas = document.getElementById("horasFestivas").value

    const valorDiaTrabajado = 43000
    const valorExtraDiurna = 6915
    const valorExtraNocturna = 9681
    const valorExtraFestivo = 11064
    const descuentoSalud = 0.04;
    const descuentoPension = 0.04;
    const descuentoAlimentacion = 0.03;

    let salarioBase = diasTrabajados * valorDiaTrabajado
    let valorHorasExtras = (horasExtrasDiurnas * valorExtraDiurna) +
                            (horasExtrasNocturnas * valorExtraNocturna) +
                            (horasFestivas * valorExtraFestivo)

    let salario = salarioBase + valorHorasExtras

    let deduciblesValor = descuentoSalud + descuentoPension + descuentoAlimentacion;

    let salarioNeto = salario - deduciblesValor;

    document.getElementById("resultado").innerHTML =`el salario NETO es ${salarioNeto}`

 })