class Tax {
    firstMonth;
    secondMonth;
    constructor(firstMonth, secondMonth) {
        this.firstMonth = firstMonth;
        this.secondMonth = secondMonth;
    }
    addNewTask(newest) {
        let formerTask = this.firstMonth + this.secondMonth;
        const total = formerTask + newest;
        return total;
    }
}
const task = new Tax(200, 300);
console.log(task.addNewTask(500));
const guitar = {
    name: "victor",
    // active: false,
    albums: [23, 33, "i love you"]
};
console.log(guitar.albums);
// function
const addNum = (a, b) => {
    return a + b;
};
console.log(addNum(3, 3));
const multiplyNum = function (c, d) {
    return c * d;
};
console.log(multiplyNum(6, 2));
const num = 9;
const transaction = {
    name: 5,
    school: 4,
    food: 10
};
const student = {
    name: 'Victor',
    GPA: 3.5,
    classes: [100, 200, 300]
};
const calcScore = (item) => {
    let total = 0;
    let calcGPA = 0;
    calcGPA = item.classes.reduce((acc, newValue) => acc + newValue);
    total = calcGPA / item.GPA;
    return total;
};
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
console.log(calcScore(student));
Object.keys(student).map(item => {
    console.log(student[item]);
});
export {};
//# sourceMappingURL=main.js.map