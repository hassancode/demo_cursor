let bookTitle = "Harry Potter";
let bookPrice = 10;
let isHardCover = true;
let pages : number[] = [100, 200, 300];

let book:{
    title: string;
    price: number;
    isHardCover: boolean;
    pages: number[];
} = {
    title: bookTitle,
    price: bookPrice,
    isHardCover: isHardCover,
    pages: pages
}

let books: {
    title: string;
    price: number;
    isHardCover: boolean;
    pages: number[];
}[];

let book1 = {
    title: "Harry Potter",
    price: 10,
    isHardCover: true,
    pages: [100, 200, 300]
}

let book2 = {
    title: "Harry Potter",
    price: 15,
    isHardCover: true,
    pages: [100, 200, 300]
}

books = [book1, book2];

add(bookTitle, bookPrice, isHardCover, pages);

function add(bookTitle: string, bookPrice: number, isHardCover: boolean, pages: number[]): boolean{
    return true;
}

function printBook(bookTitle: string, bookPrice: number, isHardCover: boolean, pages: number[]): void{
    console.log(bookTitle, bookPrice, isHardCover, pages);
}

function printFirstItem(item: unknown): void {
    if (Array.isArray(item) && item.length > 0) {
        const firstItem = item[0] as { title: string };
        console.log(firstItem.title.toUpperCase());
    }
}

let new_book:{
    title: string;
    price: number;
    isHardCover: boolean;
    pages: number[];
} = {
    title: "Harry Potter",
    price: 10,
    isHardCover: true,
    pages: [100, 200, 300]
}

function addBook(book: typeof new_book): void {
    books.push(book);
}
addBook(new_book);

printFirstItem(books);

interface Book {
    title: string;
    price: number;
    isHardCover: boolean;
    pages: number[];
}

let new_books: Book[] = [book1, book2];  

interface User {
    name: string;
    age: number;
    email: string;
}

interface Admin extends User {
    role: string;
}

let admin: Admin = {
    name: "John",
    age: 30,
    email: "john@example.com",
    role: "admin"
}

let user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    role: "admin",
    permissions: ["read", "write", "delete"]//extra property

}

let admin2 = user;
let admin3 = user as Admin;

let popularBook: string | boolean;

popularBook = "Harry Potter";
popularBook = true;

type PopularBook = string | boolean;

function printPopularBook(book: PopularBook): void {
    if (typeof book === "string") {
        console.log(book.toUpperCase());
    } else if (typeof book === "boolean") {
        console.log(`The book is ${book}`);
    } else {
        console.log("Invalid book");
    }
}

printPopularBook(popularBook);

interface PhysicalBook {
    title: string;
    price: number;
    isHardCover: boolean;
    dueDate: Date | undefined
}

interface Ebook {
    title: string;
    price: number;
    format: string;
    downloadUrl: string;
}

type LibraryBook = PhysicalBook | Ebook;

function whereIsTheBook(book: LibraryBook): void {
    if ("pages" in book) {
        console.log(`${book.title} is a physical book`);
    } else {
        console.log(`${book.title} is an ebook`);
    }
}

let physicalBook: PhysicalBook = { title: "Harry Potter", price: 10, isHardCover: true, dueDate: new Date() };

whereIsTheBook(physicalBook);

function isBookCheckedOut(book: LibraryBook): boolean {
    if ("dueDate" in book && book.dueDate !== undefined) {
        return true;
    }
    return false;
}

console.log(isBookCheckedOut(physicalBook));

interface NewUser {
    firstName: string;
    middleName: string | null;
    lastName: string;
    
}

function printUser(user: NewUser): void {
    if (user.middleName) {
        console.log(`${user.firstName} ${user.middleName} ${user.lastName}`);
    } else {
        console.log(`${user.firstName} ${user.lastName}`);
    }
}

printUser({ firstName: "John", middleName: null, lastName: "Doe" });

interface CustomFile{
    ext: "pdf" | "docx"
}

let file1: CustomFile = { ext: "pdf"};

enum FileTypes {
    PDF,
    DOCX
}

interface NewCustomFile {
    ext: FileTypes
}

let file2 = {ext: FileTypes.DOCX};

function checkFileTypes(newCustomFile: NewCustomFile): string{
    switch(newCustomFile.ext){
        case FileTypes.DOCX:
            return "docx";
            break;
        case FileTypes.PDF:
            return "pdf";
            break;
        default:
            const _exhaustiveCheck: never = newCustomFile.ext;
            return _exhaustiveCheck;
    }
}

type DownloadStats = PhysicalBook & Ebook;

//you have to assign all the properties
let downloadStats: DownloadStats = {
    title: "Harry Potter",
    price: 3,
    isHardCover: false,
    dueDate: undefined,
    format: "mp3",
    downloadUrl: "url"
}

const sortByTitle: (book1: Book, book2: Book) => number = (book1: Book, book2: Book) : number => {
    return book1.title.localeCompare(book2.title);
};

console.log(books.sort(sortByTitle));

const lookUpBook: (title: string, dueDate?: Date) => boolean = (title: string, dueDate?: Date) : boolean => {
    if(dueDate !== undefined){
        return true
    }
    return false;
}

lookUpBook("Harry Potter");

interface Person{
    name: string,
    dob?: Date //same as union undefined | undefined
}

let numbers: number[] = [1,2,3];

console.log(...numbers); //spread

function total(...numbers: number[]): number{ //rest
    var total = 0;
    numbers.forEach(element => {
        total+=element;
    });
    return total;
}

console.log(total(1,2,3));

let {title: string, pages: number} = book; //destructuring


const users = [
    { fname: 'John', age: 30 },
    { fname: 'Jane', age: 25 }
  ];
  
  // Destructure first object
  const [firstUser] = users;
  // firstUser = { name: 'John', age: 30 }
  
  // Destructure and extract properties
  const [{ fname, age }] = users;
  // name = 'John', age = 30
  
  // Destructure multiple objects
  const [user1, user2] = users;
  // user1 = { name: 'John', age: 30 }
  // user2 = { name: 'Jane', age: 25 }
  
  // Destructure with rest
  const [first, ...rest] = users;
  // first = { name: 'John', age: 30 }
  // rest = [{ name: 'Jane', age: 25 }]

function checkoutBook(id: number) : {id: number, dueDate: Date};
function checkoutBook(name: string): {name: string, dueDate: Date};

function checkoutBook(param: number | string){
    if(typeof param == "number"){
        return {id: 3, dueDate: new Date()};
    }else{
        return {name: "test", dueDate: new Date()};
    }
}