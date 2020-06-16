let total = 0;
let input;

do {
    input = prompt('Введите число:')

    if (input !== null) {
        if (Number.isNaN(input)) {
            alert('Было введено не число, попробуйте еще раз!');
        }   else {
            input = Number(input);
            total += input;
        };
    };

} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);