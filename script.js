
function convertTemperature(value, unit) {
	if (unit === "Celsius") {
		return (value * (9 / 5)) + 32
	} else if (unit === "Fahrenheit") {
		return (value - 32) * (5 / 9) 
		}
	}
	
const temperatureInput = document.getElementById("temperature-input")
const unitSelect = document.getElementById("unit-select")
const result = document.getElementById("result")

const hadleChange = function () {
	const temperature = parseFloat(temperatureInput.value); 
	const unit = unitSelect.value 
	const convertedTemperature = convertTemperature(temperature, unit)	
	result.value = convertedTemperature.toFixed(5)
	}
	
temperatureInput.addEventListener("change", hadleChange);
unitSelect.addEventListener("change", hadleChange);