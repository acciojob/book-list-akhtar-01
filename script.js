let form = document.getElementById("book-form");

let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");

let bookList = document.getElementById("book-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
        title.value !== "" &&
        author.value !== "" &&
        isbn.value !== ""
    ) {
        bookList.innerHTML += `
            <tr>
                <td>${title.value}</td>
                <td>${author.value}</td>
                <td>${isbn.value}</td>
                <td>
                    <button class="delete">Clear</button>
                </td>
            </tr>
        `;

        title.value = "";
        author.value = "";
        isbn.value = "";
    }
});

bookList.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }

});