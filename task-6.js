let total = 0;
let input;

do {
    input = prompt('Введите число:')
    input = Number(input);

    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз!');
    }   else if (Number(input)) {
        total += input;
        continue;
    } else {
        break;
    }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);