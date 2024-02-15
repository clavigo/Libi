document.addEventListener('DOMContentLoaded', function () {
    var openModalBtns = document.querySelectorAll('.sign');
    var modals = document.querySelectorAll('.modal');
    var background = document.getElementById('transparentDiv');
    var currentIndex = 0;

    // Функція для відкриття модального вікна
    function openModal(modal) {
        modal.style.display = 'block';
        background.style.display = 'block';
        document.documentElement.style.overflow = 'hidden'; // Заборона прокрутки сторінки
    }

    // Функція для закриття всіх модальних вікон
    function closeModal() {
        modals.forEach(function(modal) {
            modal.style.display = 'none';
        });
        background.style.display = 'none';
        document.documentElement.style.overflow = 'auto'; // Відновлення прокрутки сторінки
    }

    // Функція для зміни модального вікна
    function changeModal() {
        closeModal(); // закриття поточного модального вікна
        openModal(modals[modals.length - 1 - currentIndex]); // відкриття нового модального вікна
    }

    // Функція для зміни модального вікна
    function changeModal2(index) {
        closeModal(); // закриття поточного модального вікна
        openModal(modals[index]); // відкриття нового модального вікна
    }

    // Додавання обробника подій для кожної кнопки реєстрації
    openModalBtns.forEach(function(openModalBtn, index) {
        openModalBtn.addEventListener('click', function() {
            openModal(modals[modals.length - 1 - index]);
        });
    });

    // Додавання обробника подій для кнопок зміни модального вікна
    document.querySelectorAll('.changeModalBtn').forEach(function(changeModalBtn, index) {
        changeModalBtn.addEventListener('click', function() {
            changeModal(index);
        });
    });

    // Додавання обробника подій для кнопок зміни модального вікна
    document.querySelectorAll('.changeModalBtn2').forEach(function(changeModalBtn2, index) {
        changeModalBtn2.addEventListener('click', function() {
            changeModal2(index);
        });
    });

    // Додавання обробника подій для кнопки закриття вікна
    document.querySelectorAll('.closeModalBtn').forEach(function(closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    });

    // Додавання обробника подій для фонового шару (закриття модального вікна при кліку на фон)
    background.addEventListener('click', closeModal);
});


