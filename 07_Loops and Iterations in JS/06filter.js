// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach((item) => { return item}) // for each value ko return nhi karta hai
// console.log(values);


const myNum = [ 1,2,3,4,5,6,7,8,9,10]
const myNewNum = myNum.filter((item) =>  {return item > 4} ) // Ye values return karta hai 
// console.log(myNewNum);


// const studentsAge = [12,16,18 ,45,25,35,45,12,52]
// const addStuAge =[]
// studentsAge.forEach((age) => {
//   if(age > 18){
//     addStuAge.push(age)
//   }
// })
// console.log(addStuAge); // //Hm esse es trike se for each me bhi kaar sakte hai


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBooks = books.filter((buk) => {
//     return buk.edition >= 2009
// })
// console.log(userBooks); 

let historyBook = books.filter((buk) => {
    return buk.genre === 'History' && buk.publish >= 1995
})
console.log(historyBook);

