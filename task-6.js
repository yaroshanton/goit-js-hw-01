let total = 0;
let input;

while (input = prompt('Введите число:')) {

    input = Number(input);

    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз!');
        continue;
    }

    total += input;
}

alert(`Общая сумма чисел равна ${total}`);
