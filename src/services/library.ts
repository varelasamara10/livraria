import { Book } from "../models/Book";

export class Library {
    private books: Book[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    listBooks() {
        return this.books;
    }
}
