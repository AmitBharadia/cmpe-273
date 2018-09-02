class Book{
    constructor (name,author,type,copiesAvailable){
        this.name=name;
        this.author=author;
        this.type=type;
        this.copiesAvailable=copiesAvailable;
    }

    getType(){
        console.log("Type of this book is "+this.type);
    }
};

class Fictional extends Book{
    constructor(name,author,copiesAvailable){
        super(name,author,'Fictional',copiesAvailable);
    }
}

var fict_book=new Fictional("100 Years","Jack Danila",3);
fict_book.getType();