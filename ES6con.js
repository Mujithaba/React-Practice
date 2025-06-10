// const persons=[
//     {
//         name:"Person 01",
//         age:95,
//         Country:"USA"
//     },
//     {
//         name:"Person 1",
//         age:45,
//         Country:"USA"
//     },
//     {
//         name:"Person 2",
//         age:50,
//         Country:"Australia"
//     },
//     {
//         name:"Person 3",
//         age:66,
//         Country:"India"
//     }
// ]
// const allPersonsName= persons.map((singlePerson,index)=>{
//     return ` ${singlePerson.name} is the age ${singlePerson.age} index number is ${index}`
// })
// console.log(allPersonsName);

// const getPersonFromUSA = persons.find((singlePerson,index)=>{
//     return singlePerson.Country === "USA"
// })
// console.log(getPersonFromUSA)


// const getAllPersonFromUSA = persons.filter((singlePerson,index)=>{
//     return singlePerson.Country === "USA"
// })
// console.log(getAllPersonFromUSA)

// const getSomePersonDataEx = persons.some(singlePerson=>{
//     return singlePerson.age >99
// })
// // console.log(getSomePersonDataEx);

// const getEveryPersonDataEx = persons.every(singlePerson=>{
//     return singlePerson.age > 46
// })
// // console.log(getEveryPersonDataEx);



// const fruits = ["apple","banana","orange"]
// const getIncludeMethod = fruits.includes("apple")
// console.log(getIncludeMethod,"ppp");
// const getIndexOfMethod = fruits.indexOf("apple")
// // console.log(getIndexOfMethod,"ooo" )
// const getFindIndexMethod = persons.findIndex(singlePerson=>{
//    return singlePerson.Country ==="India"
// })
// // console.log(getFindIndexMethod)

const form = new FormData()
form.append("username", "Aman");
form.append("username", "Aman");
console.log(form);
