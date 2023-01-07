


function convertLength(value, fromUnit, toUnit) {

    const conversion = conversions[fromUnit][toUnit];

    if (conversion) {
        return value * conversion;
    } else {
        return "Conversion not possible"
    }
}

const initialValueHandler = function (e) {
    var initial = e.target.value;

    var fromUnit = unitFromInput.value;
    var toUnit = unitToInput.value;

    var conversion = convertLength(initial, fromUnit, toUnit)

    finalValue.value = conversion;
    conversionOutput()
}

const finalValueHandler = function (e) {
    var initial = e.target.value;

    var fromUnit = unitFromInput.value;
    var toUnit = unitToInput.value;

    var conversion = convertLength(initial, toUnit, fromUnit).toPrecision(2)

    initialValue.value = conversion;
    conversionOutput()
}


function conversionOutput() {
    var initialVal = parseFloat(initialValue.value);
    var finalVal = parseFloat(finalValue.value);
    var fromUnit = unitFromInput.value;
    var toUnit = unitToInput.value;
    toValueBox.innerHTML = "<h2>" + initialVal + " " + fromUnit + " = " + finalVal + " " + toUnit + "</h2>";
}



var toValueBox = document.getElementById('final-value-box');

var unitFromInput = document.getElementById('unit-from');

var unitToInput = document.getElementById('unit-to');

var initialValue = document.getElementById('value')

var finalValue = document.getElementById('final-value')


initialValue.addEventListener('input', initialValueHandler);


finalValue.addEventListener('input', finalValueHandler);




function convert() {
    var fromUnit = unitFromInput.value;
    var toUnit = unitToInput.value;
    var value = initialValue.value;
    console.warn(fromUnit, toUnit, value)
    var length = convertLength(value, fromUnit, toUnit)

    finalValue.value = length;
    toValueBox.innerHTML = "<h3>" + length + " " + toUnit + "</h3>";
}






