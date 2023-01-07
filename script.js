


function convertLength(value, fromUnit, toUnit) {

    if (fromUnit === toUnit) {
        return value;
    }

    const conversion = conversions[fromUnit][toUnit];

    if (conversion) {
        console.log(value*conversion)
        return value * conversion;
    } else {
        return "";
    }
}

const initialValueHandler = function (e) {
    var initial = e.target.value;

    var fromUnit = unitsFromInput.value;
    var toUnit = unitsToInput.value;

    var conversion = convertLength(initial, fromUnit, toUnit)

    finalValue.value = conversion;
    conversionOutput()
}

const finalValueHandler = function (e) {
    var initial = e.target.value;

    var fromUnit = unitsFromInput.value;
    var toUnit = unitsToInput.value;

    var conversion = convertLength(initial, toUnit, fromUnit)
    
    initialValue.value = conversion;
    conversionOutput()
}

const fromInputHandler = function (e) {
    var initial = finalValue.value;
    var fromUnit = e.target.value;
    var toUnit = unitsToInput.value;
    var conversion = convertLength(initial, toUnit, fromUnit)

    initialValue.value = conversion;
    conversionOutput()
}

const toInputHandler = function (e) {
    var initial = initialValue.value;
    var fromUnit = unitsFromInput.value;
    var toUnit = e.target.value;

    var conversion = convertLength(initial, fromUnit, toUnit)

    finalValue.value = conversion;
    conversionOutput()
}


function conversionOutput() {
    var initialVal = parseFloat(initialValue.value);
    var finalVal = parseFloat(finalValue.value);
    var fromUnit = unitsFromInput.value;
    var toUnit = unitsToInput.value;
    resultBox.innerHTML = "<h2>" + initialVal + " " + fromUnit + " = " + finalVal + " " + toUnit + "</h2>";
}





var unitsFromInput = document.getElementById('unit-from');

var unitsToInput = document.getElementById('unit-to');

var initialValue = document.getElementById('value')

var finalValue = document.getElementById('final-value')

var resultBox = document.getElementById('final-value-box');

var unitsList = document.getElementById('units')


initialValue.addEventListener('input', initialValueHandler);
finalValue.addEventListener('input', finalValueHandler);

unitsFromInput.addEventListener('input', fromInputHandler);
unitsToInput.addEventListener('input', toInputHandler);


createUnitOptions();

function createUnitOptions() {
    for (var prop in conversions) {
        if (conversions.hasOwnProperty(prop))
            var option = document.createElement("option");
        option.value = prop;
        unitsList.appendChild(option)
    }
}





function convert() {
    var fromUnit = unitFromInput.value;
    var toUnit = unitToInput.value;
    var value = initialValue.value;
    console.warn(fromUnit, toUnit, value)
    var length = convertLength(value, fromUnit, toUnit)

    finalValue.value = length;
    toValueBox.innerHTML = "<h3>" + length + " " + toUnit + "</h3>";
}






