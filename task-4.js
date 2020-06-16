const credits = 23580;
const pricePerDroid = 3000;

let message;

let input = prompt('Сколько дроидов желаете купить?')


if (input === null) {
    console.log('Отменено пользователем!');
} else {
    const totalPrice = pricePerDroid * input;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        console.log(`Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    };
};