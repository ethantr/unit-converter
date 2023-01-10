


function convertLength(value, fromUnit, toUnit) {

    if (fromUnit === toUnit) {
        return value;
    }

    const conversion = conversions[fromUnit][toUnit];

    if (conversion) {
        console.log(value * conversion)
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


function addEntry() {

    var text = createConversionText()
    if (text.includes("NaN")){
        console.error("Invalid")
        return;
    }
    var entry = createConversionContainer(text)
    entry_container.appendChild(entry)
}

function createConversionText() {
    var initialVal = parseFloat(initialValue.value);
    var finalVal = parseFloat(finalValue.value);
    var fromUnit = unitsFromInput.value;
    var toUnit = unitsToInput.value;
    return initialVal + " " + fromUnit + " = " + finalVal + " " + toUnit;
}

function conversionOutput() {
    resultBox.textContent = createConversionText()
}

function createConversionContainer(text) {
    var newEntry = document.createElement('div');
    newEntry.className = "entry"
    var conversion_text = document.createElement('h4')
    conversion_text.textContent = text;
    newEntry.appendChild(conversion_text)
    return newEntry;
}




var unitsFromInput = document.getElementById('unit-from');

var unitsToInput = document.getElementById('unit-to');

var initialValue = document.getElementById('value')

var finalValue = document.getElementById('final-value')

var resultBox = document.getElementById('final-value-box');

var unitsList = document.getElementById('units')


var entry_container = document.getElementById('entry-container')




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
    toValueBox.value = length + " " + toUnit;
}






