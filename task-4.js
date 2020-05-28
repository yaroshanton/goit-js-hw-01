const credits = 23580;
const pricePerDroid = 3000;

let totalPrice;

totalPrice = prompt('Сколько дроидов желаете купить?')
let left = (credits - (pricePerDroid * totalPrice));

if (totalPrice === null) {
    totalPrice = ('Отменено пользователем!');
} else if ((pricePerDroid * totalPrice) > credits) {
    totalPrice = ('Недостаточно средств на счету!');
} else {
    totalPrice = (`Вы купили ${totalPrice} дроидов, на счету осталось ${left} кредитов.`);
}

console.log(totalPrice);