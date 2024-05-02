#! / usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("<<<<<<<<<<<<<<<< WELCOME TO OUR HOME COACHING CENTER >>>>>>>>>>>>>>>>"));
console.log(chalk.blue("       WE PROVIDE YOU A BEST TEACHERS AND BEST ENVIROMENT "));
console.log(chalk.cyan("       Join us to improve grades, prepare for exams, and reach your full potential!"));
// restrick to put name
let studentInfo;
while (true) {
    studentInfo = await inquirer.prompt([{
            name: "name",
            type: "string",
            message: "Enter your name"
        }]);
    if (studentInfo.name.length === 0) {
        console.log("Plz enter your name.");
    }
    else {
        break;
    }
}
console.log(chalk.green(`Welcome to home coaching center ${chalk.red.underline(studentInfo.name.toUpperCase())}`));
let Schedule = ([
    {
        day: "Monday",
        time: "9:00 - 10:30",
        subject: "English",
        teacherName: "Miss Zara",
        fees: "1000"
    },
    {
        day: "Monday",
        time: "10:45 - 12:15",
        subject: "Urdu",
        teacherName: "Miss Hafza",
        fees: "1000"
    },
    {
        day: "Monday",
        time: "1:00 - 2:30",
        subject: "Math",
        teacherName: "Sir Ali",
        fees: "1000"
    },
    {
        day: "Tuesday",
        time: "9:00 - 10:30",
        subject: "Chemistry",
        teacherName: "Sir Zia",
        fees: "1000"
    },
    {
        day: "Tuesday",
        time: "10:45 - 12:15",
        subject: "Physics",
        teacherName: "Miss Fiza",
        fees: "1000"
    },
    {
        day: "Wednesday",
        time: "9:00 - 10:30",
        subject: "Biology",
        teacherName: "Sir Hamzah",
        fees: "1000"
    },
    {
        day: "Wednesday",
        time: "10:45 - 12:15 ",
        subject: "Computer",
        teacherName: "Miss Fiza",
        fees: "1000"
    }
]);
console.log(chalk.bgGray("Here is Timetable of the Classes"));
console.log("---------------------------------------------------------------------");
console.log("| Day           | Time            | Subject   | TeacherName  | Fees | ");
console.log("---------------------------------------------------------------------");
Schedule.forEach((entry) => {
    console.log(`| ${entry.day.padEnd(13)}| ${entry.time.padEnd(15)}| ${entry.subject.padEnd(10)}| ${entry.teacherName.padEnd(12)}| ${entry.fees.padEnd(5)}|`);
});
console.log("--------------------------------------------------------------------");
// choose subject
let subjects = await inquirer.prompt([{
        name: "subjecT",
        type: "checkbox",
        choices: ["English", "Urdu", "Math", "Chemistry", "Physics", "Biology", "Computer"],
        message: "Plz select your subject to enrolled"
    }]);
console.log(chalk.bgRed("<<<<<Student Info>>>>>"));
console.log(chalk.yellow(`Name: ${studentInfo.name.toUpperCase()}\nSubjects: ${subjects.subjecT}`));
// show enrolled subjects
const enrolledSubjects = subjects.subjecT;
if (enrolledSubjects.length === 0) {
    console.log("You did not enroll in any class");
}
else {
    console.log(chalk.bgCyan(`You have  successfully enrolled in:`));
}
enrolledSubjects.forEach((subject) => {
    switch (subject) {
        case "English":
            console.log(chalk.cyan(`-English `));
            break;
        case "Urdu":
            console.log(chalk.cyan(`-Urdu `));
            break;
        case "Math":
            console.log(chalk.cyan(`-Math `));
            break;
        case "Chemistry":
            console.log(chalk.cyan(`-Chemistry `));
            break;
        case "Physics":
            console.log(chalk.cyan(`-Physics `));
            break;
        case "Biology":
            console.log(chalk.cyan(`-Biology `));
            break;
        case "Computer":
            console.log(chalk.cyan(`-Computer `));
            break;
        default:
            break;
    }
});
// show current balance
let currentBalance = 0;
console.log(chalk.yellowBright(`your current balance is: ${currentBalance} .For enrolled plz put some money in your account .`));
// show exact amount to pay
if (enrolledSubjects.length > 0) {
    const enrollmentFee = 1000;
    const totalFee = enrollmentFee * enrolledSubjects.length;
    console.log(`plz put ${totalFee}  or some more money in your account to enroll in`);
    { }
    // ask user to put money also add some logic
    let currentbalance = { balance: 0 }; // Initialize currentbalance object
    while (currentbalance.balance < totalFee) {
        currentbalance = await inquirer.prompt([{
                name: "balance",
                type: "input",
                message: "Put required amount:"
            }]);
        if (currentbalance.balance == totalFee) {
            currentbalance.balance -= totalFee;
            console.log(chalk.green(`Successfully enrolled in ${enrolledSubjects.length} subjects!`));
            break; // Exit the loop when the required amount is given
        }
        else if (currentbalance.balance > totalFee) {
            currentbalance.balance -= totalFee;
            console.log(chalk.red(`Successfully enrolled in ${enrolledSubjects.length} subjects! Your remaining balance is: ${currentbalance.balance}`));
            break; // Exit the loop when the required amount is given
        }
        else {
            console.log("Insufficient Balance! Please add sufficient amount to enroll.");
        }
    }
    // make Roll No
    const randomNum = Math.floor(Math.random() * 90000) + 10000; // Random 5-digit number between 10000 and 99999
    // make student Id
    const studentID = `${studentInfo.name.replace(/\s+/g).substring(0, 3).toUpperCase()}${randomNum}${subjects.subjecT.map((subject) => subject[0]).join('')}`;
    console.log(chalk.bgBlue("Generated Student ID:", studentID));
    // make Admit card
    console.log(chalk.bgCyan("Hare is your new Admit card"));
    console.log(chalk.cyan(`Name: ${studentInfo.name.toUpperCase()}\nRoll No: ${randomNum}\nSubjects: ${subjects.subjecT}`));
    console.log(chalk.cyan(`Center: home coaching  center\nStudentID: ${studentID}\nYour Balance: ${currentbalance.balance}`));
    console.log(chalk.red("Plz make copy of this admit card and bring with you when you take class"));
    console.log(chalk.blue("                            THANK YOU"));
}
