var readedContent = `<h2>Книги, які ви прочитали</h2>
<div class="readed-list flex"></div>`;
var ordersContent = "Замовлення";
var likedContent = "Вподобані";
var reserveContent = "Резерв";
var debtContent = "Заборгованість";
var i = 10;

var readedBook = `<div class="readed-book">
    <div class="cover"></div>
    <p>Назва</p>
</div>`;

readedContentInsert();
document.getElementById("readed").className = "current"

document.getElementById("readed").addEventListener("click", function() {
    notCurrent()
    document.getElementById("readed").className = "current"
    readedContentInsert();
});

document.getElementById("orders").addEventListener("click", function() {
    notCurrent()
    document.getElementById("orders").className = "current"
    document.getElementById("content-block").innerHTML = ordersContent;
});

document.getElementById("liked").addEventListener("click", function() {
    notCurrent()
    document.getElementById("liked").className = "current"
    document.getElementById("content-block").innerHTML = likedContent;
});

document.getElementById("reserve").addEventListener("click", function() {
    notCurrent()
    document.getElementById("reserve").className = "current"
    document.getElementById("content-block").innerHTML = reserveContent;
});

document.getElementById("debt").addEventListener("click", function() {
    notCurrent()
    document.getElementById("debt").className = "current"
    document.getElementById("content-block").innerHTML = debtContent;
});

function readedContentInsert() {
    let res = ""; // Ініціалізуємо res пустим рядком
    for (let index = 0; index < i; index++) {
        res += readedBook; // Додаємо книгу до результуючого рядка
    }
    document.getElementById("content-block").innerHTML = readedContent; // Вставляємо readedContent
    document.querySelector(".readed-list").innerHTML = res; // Вставляємо результуючий рядок книг
}

function notCurrent() {
    document.getElementById("readed").className = "not-current"
    document.getElementById("orders").className = "not-current"
    document.getElementById("liked").className = "not-current"
    document.getElementById("reserve").className = "not-current"
    document.getElementById("debt").className = "not-current"
}