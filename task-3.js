let message;
let answer;
const ADMIN_PASSWORD = '1234';

answer = prompt('Привет');

if (answer === null) {
    message = ('Отменено пользователем!');
} else if (answer === ADMIN_PASSWORD) {
    message = ('Добро пожаловать!');
} else {
    message = ('Доступ запрещен, неверный пароль!');
}

alert (message);
