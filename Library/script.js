// Array to store all book objects
let myLibrary = [];

// Book constructor to create a new book object
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; // Boolean indicating read status
}

// Add a method to toggle the read status of a book
Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

// Function to toggle the read status of a book in the library by index
function toggleRead(index){
    myLibrary[index].toggleRead();
    render() // Update the display after toggling
}

// Function to display all books in the DOM
function render(){
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = ""; // Clear existing content
    // Loop through each book in the library
    for(let i=0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        // Create book card HTML
        bookEl.innerHTML = `
        <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">by ${book.author}</h5>
        </div>
        <div class="card-body">
            <p>${book.pages} pages </p>
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
            <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
        </div>
        `
        // Add the book card to the DOM
        libraryEl.appendChild(bookEl);
    }
}

// Function to remove a book from the library by index
function removeBook(index) {
    myLibrary.splice(index, 1); // Remove one book at the specified index
    render(); //Update the display
}

// Function to create a new book from form input and add it to the library
function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value; 
    let read = document.querySelector("#read").value; // Convert string to boolean
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook); // Add the new book to the array
    render(); // Update the display
}

// Show the book input form when the "New Book" button is clicked
let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block"; // Show the form
})

// Handle form submission to add a book
document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from refreshing the page
    addBookToLibrary(); // Add the book
})

