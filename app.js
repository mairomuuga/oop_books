ui = new UI();
ls = new LS();

const form = document.querySelector('form')
const bookTitleInput = document.querySelector('#book-title');
const bookAuthorInput = document.querySelector('#book-author');
const bookISBNInput = document.querySelector('#book-isbn');
const tabel = document.querySelector("body");

form.addEventListener('submit', addBook);
tabel.addEventListener("click", deleteBook);

function addBook(e) {
	const bookTitle = bookTitleInput.value;
	const bookAuthor = bookAuthorInput.value;
	const bookISBN = bookISBNInput.value;
	ui.addBook(bookTitle, bookAuthor, bookISBN);
	console.log('clicked')
	e.preventDefault();
}
function deleteBook(e){
	let book = e.target.parentElement.firstChild
	ui.deleteBook(book);
}