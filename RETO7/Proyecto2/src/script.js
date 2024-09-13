function calculatePesticide() {
  const base1 = parseFloat(document.getElementById("base1").value);
  const base2 = parseFloat(document.getElementById("base2").value);
  const height = parseFloat(document.getElementById("height").value);
  const side1 = parseFloat(document.getElementById("side1").value);
  const side2 = parseFloat(document.getElementById("side2").value);

  // Area of the trapezoid
  const area = ((base1 + base2) / 2) * height;
  const pesticide = area * 1.5;

  // Perimeter of the trapezoid
  const perimeter = base1 + base2 + side1 + side2;

  document.getElementById(
    "pesticideResult"
  ).innerHTML = `Litros de pesticida necesarios: ${pesticide.toFixed(2)} L<br>
        Metros de cerca eléctrica: ${perimeter.toFixed(2)} m`;
}
