function handleSubmit(event) {
  event.preventDefault();

  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let img = document.getElementById("img");
  let result = document.getElementById("result");
  let bmi = 0;
  let category = "";
  let classes = "";
  let imgSrc="";
  if (!(isNaN(height) && isNaN(weight) && height == 0 && weight == 0)) {
    let heightMeters = height / 100;
    bmi = weight / (heightMeters * heightMeters);
    bmi = bmi.toFixed(2);

    if ((bmi < 18.5)) {
      category = "Underweight";
      classes = "bg-yellow-100 text-yellow-800 border-yellow-400";
      imgSrc="low";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal Weight";
      classes = "bg-green-100 text-green-800 border-green-400";
      imgSrc="normal";

    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Overweight";
      classes = "bg-orange-100 text-orange-800 border-orange-400";
      imgSrc="high";

    } else {
      // bmi >= 30
      category = "Obesity";
      classes = "bg-red-100 text-red-800 border-red-400";
      imgSrc="high";

    }
  }
  result.innerHTML = ` 
        <p class="text-lg mb-2">Your BMI is: <strong class="text-2xl">${bmi}</strong></p>
        <p class="text-xl">Category: <strong>${category}</strong></p>
  `;
  
  result.className = `mt-6 p-4 rounded-lg text-center font-semibold border-2 ${classes}`;

  img.innerHTML= `<img src="../bmi/img/${imgSrc}.png" alt="">`;
}
