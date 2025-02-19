document.addEventListener('DOMContentLoaded', (event) => {
    const ageInput = document.getElementById("age");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const metricRadio = document.getElementById("metric");
    const resultButton = document.getElementById("calculateBMI");
    const arrow = document.getElementById("Arrow");
    const resultEl = document.getElementById("finalResult");

    resultButton.addEventListener('click', function() {
        const age = parseFloat(ageInput.value) || 0;
        const height = parseFloat(heightInput.value) || 0;
        const weight = parseFloat(weightInput.value) || 0;
        const isMetric = metricRadio.checked;

        if (age < 1 || height <= 0 || weight <= 0) {
            resultEl.innerHTML = "<span class='text-danger'>Please enter valid inputs!</span>";
            return;
        }

        let BMI = 0;

        if (isMetric) {
            const heightMeters = height / 100;
            BMI = weight / (heightMeters * heightMeters);
        } else {
            BMI = 703 * (weight / (height * height));
        }

        const finalBMI = BMI.toFixed(2);

        // Determine category and arrow position
        let category = "";
        let arrowPosition = 0;
        if (finalBMI < 18.5) {
            arrowPosition = 12.5; // 12.5% for Under Weight
            category = "Under Weight";
        } else if (finalBMI < 25) {
            arrowPosition = 37.5; // 37.5% for Normal Weight
            category = "Normal Weight";
        } else if (finalBMI < 30) {
            arrowPosition = 62.5; // 62.5% for Over Weight
            category = "Over Weight";
        } else {
            arrowPosition = 87.5; // 87.5% for Obese
            category = "Obese";
        }

        // Set arrow position
        arrow.style.marginLeft = `calc(${arrowPosition}% - 350px)`; // Adjust for arrow width

        // Display result
        resultEl.innerHTML = `${finalBMI} <br> You Are <span class='text-primary'>${category}</span>`;
    });
});