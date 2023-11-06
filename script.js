function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");
    
    if (isNaN(temperatureInput)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    if (fromUnit === "celsius") {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        resultElement.textContent = `${temperatureInput} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit`;
    } else {
        const celsius = (temperatureInput - 32) * 5/9;
        resultElement.textContent = `${temperatureInput} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius`;
    }
}
