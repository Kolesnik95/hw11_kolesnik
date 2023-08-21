function removeChars(inputString, charsToRemove) {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        if (!charsToRemove.includes(inputString[i])) {
            result += inputString[i];
        }
    }

    return result;
}

const inputString = prompt("Введите строку:");
const charsToRemove = prompt("Введите символы для удаления:");

const modifiedString = removeChars(inputString, charsToRemove);
console.log(modifiedString);
