// I dont understand Sir, Please what does this error mean?
const mainContainer = document.querySelector('.mainContainer') as HTMLElement;

// const div = document.createElement('div');

// div.setAttribute('class', 'user');

// mainContainer?.appendChild(div)
//is here allows you to specify that a standard html element shouls behave like a defined custom built-in element
let screenContainer = document.createElement('div', { is: 'screen-container' }) as HTMLDivElement;
let opScreen = document.createElement('input', { is: 'operations-screen' }) as HTMLInputElement;

let ansScreen = document.createElement('input', { is: 'answer-screen' }) as HTMLInputElement;

//assigning classes to the respective variables created
screenContainer.setAttribute('class', 'screen-container');
opScreen.setAttribute('class', 'operations-screen');
ansScreen.setAttribute('class', 'answer-screen');


//appending the children
screenContainer.appendChild(opScreen)
screenContainer.appendChild(ansScreen)
mainContainer?.appendChild(screenContainer);

//creating button Elements
let buttonContainer = document.createElement('div');

let numericContainer = document.createElement('div');
let digitsContainer = document.createElement('div');

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
class digits{
    static map(arg0: (digit: string) => HTMLButtonElement) {
        // throw new Error("Method not implemented.");
    }
    isDegree: boolean;
    digit: number[];
}
// import { digits } from ".";

const creation: digits = {
        isDegree: true,
        digit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
}
const createdDigits = digits.map((digit: string) => {
    let digitElement = document.createElement('button', { is: digit }) as HTMLButtonElement;
    digitElement.setAttribute('class', digit)
    digitElement.textContent = digit;
    digitElement.classList.add('digit');
    return digitElement;
});
numericContainer.appendChild(digitsContainer)


/**
 * This is the class which contains the function and loop to create tags after you've passed them
 */

 class ConstructorDom{
    constructElement(tag: string = '', attributes = {}) {
        tag = tag == '' ? 'div' : tag;
        // create element
        const createdElement = document.createElement(tag);
        // add attributes
        for (let [key, value] of Object.entries(attributes)) {
            if (key == 'class') {
                createdElement.classList.add(value as any);
            } else {
                createdElement.setAttribute(key, value as any);
            }
        }
        return createdElement;
    }

    appendChildren(parent:HTMLElement, children:HTMLElement[]) {
        if (children.length == 1) {
            parent.appendChild(children[0]);
            return parent;
        }
        children.forEach(child => {
            parent.appendChild(child);
        })
        return parent;
    }
 }


