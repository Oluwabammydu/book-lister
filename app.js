const bookList = document.querySelector('#book-lists ul');

//delete button
bookList.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        li = e.target.parentElement
        bookList.removeChild(li)
    }
});

//add book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type=text').value;
//create elements
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteButton = document.createElement('span');
//add content
bookName.textContent = value;
deleteButton.textContent = 'delete';
//add classname
bookName.classList.add('name');
deleteButton.classList.add('delete');
//append DOM
li.appendChild(bookName);
li.appendChild(deleteButton);
bookList.appendChild(li)
})

//hide books
const hideBook = document.querySelector('#hide');
hideBook.addEventListener('change', function(e){
    if(hideBook.checked){
        bookList.style.display = 'none';
    } else{
        bookList.style.display = 'block';
    }
})

//filter
const searchBooks = document.forms['search-books'];
searchBooks.addEventListener('keyup', function(e){
    const searchValue = searchBooks.querySelector('input').value.toLowerCase();
    const books = bookList.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const bookTitle = book.firstElementChild.textContent;
        if(bookTitle.toLowerCase().indexOf(searchValue) != -1){
            book.style.display = 'block';
        } else{
            book.style.display = 'none';
        }
    })
    

})



