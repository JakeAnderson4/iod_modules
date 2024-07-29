var book = {
title : "My Big Book",
description : "abc",
author : "Jake",
numberOfPages : 3,
isCopy : true
}

books = [{
    title : "My Big Book",
    description : "abc",
    author : "Jake",
    numberOfPages : 3,
    isCopy : true},

    {
        title : "My Big Book",
        description : "abc",
        author : "Jake",
        numberOfPages : 3,
        isCopy : true
        },

        {
            title : "My Big Book",
            description : "abc",
            author : "Jake",
            numberOfPages : 3,
            isCopy : true
            },

            {
                title : "My Big Book",
                description : "abc",
                author : "Jake",
                numberOfPages : 3,
                isCopy : true
                },

                {
                    title : "My Big Book",
                    description : "abc",
                    author : "Jake",
                    numberOfPages : 3,
                    isCopy : true
                    },

]
   
/*
console.log(book)
console.log(book.title)
console.log(book.description)
console.log(book.author)
console.log(book.numberOfPages)
*/
book.description = "cde" //changes the value of "abc" to "cde"

//console.log(book) //prints book with modified contents

let books =[]

books.push(book)

console.log(books[0])
