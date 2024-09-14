//1. Write a JavaScript program to list the properties of a JavaScript object.
let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student));  //['name', 'sclass', 'rollno']

//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
console.log("Before deletion:", student);
delete student.rollno;
console.log("After deletion:", student);

//3. Write a JavaScript program to get the length of a JavaScript object.
  console.log(Object.keys(student).length); // 3
  
//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
library.forEach(function(book) {
console.log(`Book: ${book.title}, Author: ${book.author}, Reading Status: ${book.readingStatus}`);
});

//7. Write a JavaScript program that returns a subset of a string.
const subsets=(str)=> {
    let subset = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        subset.push(str.slice(i, j));
      }
    }
    return subset;
  }
  
  console.log(subsets("dog")); // Output: ['d', 'do', 'dog', 'o', 'og', 'g']

  //10. Write a JavaScript program to sort an array of JavaScript objects.
  var library1 = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
    library1.sort((a, b) => b.libraryID - a.libraryID);

    console.log(library1);

//11. Write a JavaScript function to print all the methods in a JavaScript object.
const print=(obj) =>{
    return Object.getOwnPropertyNames(obj).filter(function(prop) {
      return typeof obj[prop] === 'function';
    });
  }
  
  console.log(print(Array)); // Output: ["from", "isArray", "of", "concat", "copyWithin", ... ]
  
//   12. Write a JavaScript function to parse an URL.
const parseURL=(url)=> {
    var parser = new URL(url);
    return {
      href: parser.href,
      protocol: parser.protocol,
      host: parser.host,
      pathname: parser.pathname,
    };
  }
  
  const url = 'https://unsplash.com/photos/a-person-holding-a-cell-phone-in-their-hand-JtwzKGec2vc';
  console.log(parseURL(url));


//----------13 to 17 OBJECT--------------------------------
    var thisStudent = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };  

// 13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
const retrieve=(obj)=> {
    let props = [];
    for (let prop in obj) {
      props.push(prop);
    }
    return props;
  }
  
  console.log(retrieve(thisStudent));
  
// 14. Write a JavaScript function to retrieve all the values of an object's properties.
  console.log(Object.values(thisStudent));
  
// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
  console.log(Object.entries(thisStudent));

// 16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
function invertObj(obj) {
    let invert = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        invert[obj[key]] = key;
      }
    }
    return invert;
  }
  console.log(invertObj(thisStudent));
  
// 17. Write a JavaScript function to check whether an object contains a given property.
const checkObj=(obj, prop)=> {
    return obj.hasOwnProperty(prop);
  }
  
  console.log(checkObj(thisStudent, 'name'));
  console.log(checkObj(thisStudent, 'age'));