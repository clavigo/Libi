document.addEventListener('DOMContentLoaded', function() {
    var headerPlaceholder = document.getElementById('header-placeholder');
    headerPlaceholder.innerHTML = `
    <nav>
        <div class="nav-bar flex">
            <a href="" class="logo height48 flex margin10">
                <p>Libi</p>
            </a>
            <div href="" class="genre height48 flex margin10">
                <select name="book_genre" id="" class="height48">
                    <option value="">Книги</option>
                    <option value="1">Option 1</option>
                </select>
            </div>
            <div href="" class="search height48 flex margin10">
                <input type="text" placeholder="Пошук" class="height48 border-radius25">
            </div>
            <a href="" class="language height48 flex margin10">
                <p>Укр</p>
            </a>
            <a class="sign-in sign height48 flex margin10 padding-left-right10 border-radius25" id="signIn">
                <p>Вхід</p>
            </a>
            <a class="sign-up sign height48 flex margin10 padding-left-right10 border-radius25" id="signUp">
                <p>Реєстрація</p>
            </a>
        </div>
    </nav>
    `;
});
