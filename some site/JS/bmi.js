window.onload = () => {
    let button = document.querySelector("#btn");
  
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {

    let height = document.querySelector("#height").value;
  
    let weight = document.querySelector("#weight").value;
  
    let result = document.querySelector("#result");
  
    let bmi = (weight / ((height**2 ) / 10000)).toFixed(1);

    if (weight <= 0 || height <=0){
        result.innerHTML = `Invalid parameters!`;
    }

    else if (bmi < 18.6){ result.innerHTML =
            `Your BMI is : <span>${bmi} (Underweight &#128577;)</span>`;
    }
    else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 
                `Your BMI is : <span>${bmi} (Normal &#128522;)</span>`;
    }
     else {result.innerHTML =
            `Your BMI is : <span>${bmi} (Overweight &#128551;)</span>`;
     }
    } 