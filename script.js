document.getElementById('cardForm').addEventListener('input', updateCardPreview);
document.getElementById('cardForm').addEventListener('submit', submitForm);

function updateCardPreview() {
    // Обновление номера карты
    const cardNumber = document.getElementById('cardNumber').value.padEnd(16, '0');
    document.getElementById('previewCardNumber').textContent = cardNumber.replace(/(.{4})/g, '$1 ').trim();

    // Обновление имени держателя
    const cardHolder = document.getElementById('cardHolder').value || 'Имя держателя';
    document.getElementById('previewCardHolder').textContent = cardHolder;

    // Обновление срока действия
    const expiryMonth = document.getElementById('expiryMonth').value || 'MM';
    const expiryYear = document.getElementById('expiryYear').value || 'YY';
    document.getElementById('previewCardExpiry').textContent = `${expiryMonth}/${expiryYear}`;

    // Обновление логотипа банка (можно заменить на реальные логотипы)
    const bankName = document.getElementById('bankName').value;
    const bankLogo = document.getElementById('bankLogo');
    bankLogo.textContent = bankName || 'Банк';

    // Обновление логотипа платежной системы
    const paymentSystem = document.getElementById('paymentSystem').value;
    const paymentLogo = document.getElementById('paymentLogo');
    if (paymentSystem === 'visa') {
        paymentLogo.style.backgroundImage = 'url("visa-logo.png")'; // Замените на путь к логотипу VISA
    } else if (paymentSystem === 'mastercard') {
        paymentLogo.style.backgroundImage = 'url("mastercard-logo.png")'; // Замените на путь к логотипу MasterCard
    } else if (paymentSystem === 'mir') {
        paymentLogo.style.backgroundImage = 'url("mir-logo.png")'; // Замените на путь к логотипу МИР
    }
}

function submitForm(event) {
    event.preventDefault();

    // Получение данных из формы
    const bankName = document.getElementById('bankName').value;
    const paymentSystem = document.getElementById('paymentSystem').value.toUpperCase();
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryMonth = document.getElementById('expiryMonth').value;
    const expiryYear = document.getElementById('expiryYear').value;

    // Добавление данных в таблицу
    const tableBody = document.querySelector('#cardTable tbody');
    const newRow = tableBody.insertRow();
    newRow.insertCell().textContent = bankName;
    newRow.insertCell().textContent = paymentSystem;
    newRow.insertCell().textContent = cardNumber.replace(/(.{4})/g, '$1 ').trim();
    newRow.insertCell().textContent = cardHolder;
    newRow.insertCell().textContent = `${expiryMonth}/${expiryYear}`;

    // Очистка формы
    document.getElementById('cardForm').reset();

    // Очистка миниатюры
    document.getElementById('previewCardNumber').textContent = '0000 0000 0000 0000';
    document.getElementById('previewCardHolder').textContent = 'Имя держателя';
    document.getElementById('previewCardExpiry').textContent = 'MM/YY';
    document.getElementById('bankLogo').textContent = '';
    document.getElementById('paymentLogo').style.backgroundImage = '';
}