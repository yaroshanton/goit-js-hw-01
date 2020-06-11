const credits = 23580;
const pricePerDroid = 3000;

let message;

let input = prompt('Сколько дроидов желаете купить?')


if (input === null) {
    message = ('Отменено пользователем!');
} else if ((pricePerDroid * input) > credits) {
    message = ('Недостаточно средств на счету!');
} else {
    const totalPrice = (credits - (pricePerDroid * input));

    message = (`Вы купили ${input} дроидов, на счету осталось ${totalPrice} кредитов.`);
}

console.log(message);