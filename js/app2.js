
function doMath(x, znak, y) {
    const znaks = ['+', '-', '*', '/', '%', '^'];
    
    if (znaks.includes(znak)) {
        return eval(x + znak.replace('^', '**') + y);
    } else {
        return 'Вы ввели некорректный знак';
    }
}
const x = prompt('Введите x');
const y = prompt('Введите y');
const znak = prompt('Введите знак');

document.write(doMath(x, znak, y));

