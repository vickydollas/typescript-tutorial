interface Month {
    firstMonth: number
    secondMonth: number
    addNewTask(newest: number): number
}
class Tax implements Month{
    firstMonth: number
    secondMonth: number
    constructor(firstMonth: number, secondMonth: number) {
        this.firstMonth = firstMonth
        this.secondMonth = secondMonth
    }
    addNewTask(newest: number):number {
        let formerTask: number = this.firstMonth + this.secondMonth
        const total = formerTask + newest
        return total
    }
}
const task = new Tax(200, 300)
console.log(task.addNewTask(500))
// console.log(task.)
type Guitarist = {
    nameG: string,
    active?: boolean,
    albums: (string | number)[]
}

const guitar: Guitarist = {
    nameG: "victor",
    active: false,
    albums: [23, 33, "i love you"]
}
console.log(guitar.albums)
// function
const addNum = (a: number, b: number): number => {
    return a + b
}
console.log(addNum(3, 3))
type mathFunc = (a: number, b: number) => number
const multiplyNum: mathFunc = function (c, d) {
    return c * d
}
console.log(multiplyNum(6, 2))
const num = <number> 9

interface Transactions {
    [index: string]: number
}
const transaction: Transactions = {
    name: 5,
    school: 4,
    food: 10
}
// const todayCalc = (transaction: Transactions): number => {
//     let total = 0
//     for (const cal in transaction) {
//         total += transaction    [cal]
//     }
//     return total
// }
// console.log(todayCalc(transaction))
interface Student {
    [index: string]: number | string | number[],
    name: string,
    GPA: number,
    classes: number[]
}
interface School extends Student {
    schName: string,
    schPobNum: number
}
const schoolProp: School = {
    schName: 'bibo oluwa',
    schPobNum: 22,
    nameG: 'iii',
    name: 'fffffff',
    GPA: 44,
    classes: [2, 2, 3, 5, 7]
}
const readSchool = (item: School): number => {
    const mapSchool = schoolProp.classes.map(item => item * schoolProp.schPobNum)
    return mapSchool.reduce((acc, newVal) => acc + newVal, 0)
}
const student: Student = {
    class: [20],
    name: 'Victor',
    GPA: 3.5,
    classes: [100,200,300]
}

const calcScore = (item: Student): number => {
    let total = 0
    let calcGPA = 0
    calcGPA = item.classes.reduce((acc, newValue) => acc + newValue)
    total = calcGPA / item.GPA
    return total
}
for (const key in student) {
    console.log(`${key} : ${student[key]}`)
}
console.log(calcScore(student))
Object.keys(student).map(item => {
    console.log(student[item])
})