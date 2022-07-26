let studentNames = ["Renzo", "Carla", "Rod"];

let teachers = [
  {
    name: "Damian",
    subject: "arrays, javascript, mongodb",
  },
  {
    name: "Jonathan",
    subject: "arrays, javascript",
  },
];

//.sort()   -> alphabetically by default. can also choose how to sort it (recommended when sorting complex arrays of objects)
// const sortedStudentNames = studentNames.sort();
// console.log(sortedStudentNames);

//.filter() -> chooses what stays. parameter is anonymous function saying what to filter for
// const filteredStudentNames = studentNames.filter(
// function (student) {
//     return student == "Renzo";             One way to write anonymous function
// }
// (student) => {
//     return student == "Renzo"              Another way to write anonymous function
// }
// (student) => student === "Renzo"      Another way- concise. can also remove parentheses
// (student) => true       //Don't do this. It will return everything that is true- all students

// console.log(filteredStudentNames) //new array
// console.log(studentNames) //Does not mutate original array

//Reassign variable to the filtered values only- a way to reassign variable/"change" original array
// studentNames = studentNames.filter((student) => student === "Renzo")

// .find()- returns first element matching criteria. takes callback function as parameter
// const carla = studentNames.find((student) =>
//     student === "Carla")

// console.log(carla)

// .some() -goes through array and returns true if "some element" matches criteria. returns a boolean
//another way - filter and then do .length to see how many meet criteria
// const someCarlas = studentNames.some((student) => student === "Carla")
// console.log("At least one carla?", someCarlas)

//.every -goes through array and returns true if "each one of the elements" matches criteria. returns a boolean
// const everyCarla = studentNames.every((student) => student === "Carla")
// console.log("Everyone's a carla?", everyCarla)

//.forEach()  -> iterates over each element like a for loop. argument is anonymous function
// studentNames.forEach((student) => {
//     console.log(student)
// })

//.map() -> iterates through array and transforms an array into a new form. parameter is anonymous function that does something.
// const justTheNames = teachers.map((teacher) => {
//     return teacher.name
// })

// console.log(justTheNames)
// // console.log(teachers) Does not mutate original array

// .reduce()-  able to combine array into single value. accumulator: previous accumulated value
//specify initialValue
let numbers = [11, 20, 45];

// let totals = numbers.reduce((accumulator, currentValue, index, array) => {
//     return accumulator + currentValue;
// }, 0)
// console.log(totals)

let total = 0;
// for (let i = 0; i < numbers.length; i++) {                  //Can use for loop to obtain same result
//     total += numbers[i];                                    //usually faster option
// }

// total = numbers.reduce((total, currentNumber) => total + currentNumber, 0)
// console.log(total)

total = numbers.reduce((total, currentNumber, index) => {
  if (index < 5) {
    return total + currentNumber;
  } else {
    return total;
  }
}, 0);

console.log(total);

// let totals = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// },0)

// console.log(totals)
