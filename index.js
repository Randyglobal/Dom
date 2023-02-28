// I dont understand Sir, Please what does this error mean?
var mainContainer = document.querySelector('.mainContainer');
// const div = document.createElement('div');
// div.setAttribute('class', 'user');
// mainContainer?.appendChild(div)
//is here allows you to specify that a standard html element shouls behave like a defined custom built-in element
var screenContainer = document.createElement('div', { is: 'screen-container' });
var opScreen = document.createElement('input', { is: 'operations-screen' });
var ansScreen = document.createElement('input', { is: 'answer-screen' });
//assigning classes to the respective variables created
screenContainer.setAttribute('class', 'screen-container');
opScreen.setAttribute('class', 'operations-screen');
ansScreen.setAttribute('class', 'answer-screen');
//appending the children
screenContainer.appendChild(opScreen);
screenContainer.appendChild(ansScreen);
mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.appendChild(screenContainer);
//creating button Elements
var buttonContainer = document.createElement('div');
var numericContainer = document.createElement('div');
var digitsContainer = document.createElement('div');
//assigning classes to the following
buttonContainer.setAttribute('class', 'button-container');
numericContainer.setAttribute('class', 'numeric-container');
digitsContainer.setAttribute('class', 'digits-container');
/**
 * Ignore this one sir
 * let is_degree=true;
 * const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 */
/**
 * This is where i started created the class for the perations in the button
 * i removed the export because it throws me an error on the browser "EXPORT NOT FOUND"
 */
var digits = /** @class */ (function () {
    function digits() {
    }
    digits.map = function (arg0) {
        // throw new Error("Method not implemented.");
    };
    return digits;
}());
// import { digits } from ".";
var creation = {
    isDegree: true,
    digit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
};
var createdDigits = digits.map(function (digit) {
    var digitElement = document.createElement('button', { is: digit });
    digitElement.setAttribute('class', digit);
    digitElement.textContent = digit;
    digitElement.classList.add('digit');
    return digitElement;
});
numericContainer.appendChild(digitsContainer);
/**
 * This is the class which contains the function and loop to create tags after you've passed them
 */
var ConstructorDom = /** @class */ (function () {
    function ConstructorDom() {
    }
    ConstructorDom.prototype.constructElement = function (tag, attributes) {
        if (tag === void 0) { tag = ''; }
        if (attributes === void 0) { attributes = {}; }
        tag = tag == '' ? 'div' : tag;
        // create element
        var createdElement = document.createElement(tag);
        // add attributes
        for (var _i = 0, _a = Object.entries(attributes); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key == 'class') {
                createdElement.classList.add(value);
            }
            else {
                createdElement.setAttribute(key, value);
            }
        }
        return createdElement;
    };
    ConstructorDom.prototype.appendChildren = function (parent, children) {
        if (children.length == 1) {
            parent.appendChild(children[0]);
            return parent;
        }
        children.forEach(function (child) {
            parent.appendChild(child);
        });
        return parent;
    };
    return ConstructorDom;
}());
