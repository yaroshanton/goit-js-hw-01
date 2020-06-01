const credits = 23580;
const pricePerDroid = 3000;

let massage;
let totalPrice;


let input = prompt('Сколько дроидов желаете купить?')


if (input === null) {
    massage = ('Отменено пользователем!');
} else if ((pricePerDroid * input) > credits) {
    massage = ('Недостаточно средств на счету!');
} else {
    totalPrice = (credits - (pricePerDroid * input));

    massage = (`Вы купили ${input} дроидов, на счету осталось ${totalPrice} кредитов.`);
}

console.log(massage);