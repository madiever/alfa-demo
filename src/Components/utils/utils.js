// Приводит дату в формат dd/mm
export function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    return dd + '.' + mm;
};

// Вычисляет когда день рождения
export function dateOfBirth(date) {
    const today = new Date()
    console.log(Number((formatDate(today)) + 1));
    if (Number(formatDate(today)) === Number(date)) {
        return 'Сегодня день рождения';
    } else if (Number((Number(formatDate(today)) - 1).toFixed(2)) === Number(date)) {
        return 'День рождения вчера';
    } else if (Number((Number(formatDate(today)) + 1).toFixed(2)) === Number(date)) {
        return 'День рождения завтра';
    }
}

// Возвращает вчерашнюю дату
export function yesterday() {
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return formatDate(yesterday);
}

// Возвращает завтрашнюю дату
export function tomorrow() {
    let today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return formatDate(tomorrow);
}