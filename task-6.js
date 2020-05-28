let total = 0;

while (true) {
    let input = prompt('Введите число:');

    if (input === null) {
        console.log('Отменено пользовтелем!');
        break;
    }

    input = Number(input);

    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз!');
        continue;
    }

    total += input;
}

alert(`Общая сумма чисел равна ${total}`);
