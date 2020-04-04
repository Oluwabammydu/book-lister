const bookList = document.querySelector('#book-lists ul');

//delete button
bookList.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        li = e.target.parentElement
        bookList.removeChild(li)
    }
});

//add book
const addForm = document.forms['#add-book'];
addForm.addEventListener('click', function(e){
    
})