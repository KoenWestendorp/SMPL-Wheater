var temperature = Math.floor((Math.random() * 30) - 10);
var wheaterNumber = Math.floor((Math.random() * 5) + 1)
var wheaterTypes = ['sun', 'rain', 'cloud', 'suncloud', 'snow'];
var wheaterTypesDisplay = ['sunny', 'rainy', 'cloudy', 'sunny and cloudy', 'snowy'];
var wheater = wheaterTypes.slice(wheaterNumber - 1 , wheaterNumber);
var wheaterDisplay = wheaterTypesDisplay.slice(wheaterNumber - 1, wheaterNumber);
console.log(temperature);
console.log(wheaterTypes);
console.log(wheater);
console.log(wheaterNumber);

document.getElementById('temperature').innerHTML = temperature;
document.getElementById('wheaterDisplay').innerHTML = wheaterDisplay;
