function handleSubmit(event) {
  event.preventDefault();

  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let result = document.getElementById("result");
  let bmi = 0;
  if (!(isNaN(height) && isNaN(weight) && height == 0 && weight == 0)) {
    let heightMeters = height / 100;
    bmi = weight / (heightMeters * heightMeters);
    bmi = bmi.toFixed(2);

    result.innerText += ` ${bmi}`;

    if ((bmi < 18, 5)) {
      category = "Underweight";
      classes = "bg-yellow-100 text-yellow-800 border-yellow-400";
    }
  }
}
