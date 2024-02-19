document.addEventListener('DOMContentLoaded', function() {
    var headerPlaceholder = document.getElementById('myModalSignUp');
    headerPlaceholder.innerHTML = `
        <div class="sign-up-window flex">
            <div class="welcome">
                <p>Вітаємо <br> в онлайн бібліотеці Libi !</p>
                <div>
                    <div>
                        <p class="ellipse"></p>
                        <p>Легкий пошук книг у бібліотеках</p>
                    </div>
                    <div>
                        <p class="ellipse"></p>
                        <p>Свіжі новини бібліотеки на сайті</p>
                    </div>
                    <div>
                        <p class="ellipse"></p>
                        <p>Замовлення книг з бібліотеки до твого дому</p>
                    </div>
                    <div>
                        <p class="ellipse"></p>
                        <p>Реєстрація читацького квитка онлайн</p>
                    </div>
                </div>
            </div>
            <div class="sign-up-data flex">
                <p>Введіть свої дані</p>
                <input type="text" placeholder="Ім'я">
                <input type="text" placeholder="Номер телефону / Email">
                <input type="text" placeholder="Придумайте пароль">
                <a class="changeModalBtn">Є аккаунт? Увійти</a>
            </div>
        </div>
    `;
});

document.addEventListener('DOMContentLoaded', function() {
    var headerPlaceholder = document.getElementById('myModalSignIn');
    headerPlaceholder.innerHTML = `
        <div class="sign-up-window flex">
            <div class="sign-up-data flex">
                <p>Введіть свої дані</p>
                <input type="text" placeholder="Номер телефону / Email">
                <input type="text" placeholder="Пароль">
                <a class="changeModalBtn2">Немає аккаунту? Зареєструватись</a>
            </div>
            <div class="welcome">
                <p>З поверненням <br> в онлайн бібліотеку Libi !</p>
                <div>
                    <div>
                        <p class="ellipse"></p>
                        <p>Легкий пошук книг у бібліотеках</p>
                    </div>
                    <div>
                        <p class="ellipse"></p>
                        <p>Свіжі новини бібліотеки на сайті</p>
                    </div>
                    <div>
                        <p class="ellipse"></p>
                        <p>Замовлення книг з бібліотеки до твого дому</p>
                    </div>
                    <div>
                        <p class="ellipse"></p>
                        <p>Реєстрація читацького квитка онлайн</p>
                    </div>
                </div>
            </div>
        </div>
    `;
});