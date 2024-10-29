import { Library } from "./services/Library";
import { Book } from "./models/Book";

const library = new Library();

library.addBook(new Book("1984", "George Orwell", 1949));
library.addBook(new Book("O Senhor dos Anéis", "J.R.R. Tolkien", 1954));

console.log(library.listBooks());
