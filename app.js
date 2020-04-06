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