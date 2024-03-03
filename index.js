#!user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => setTimeout(res, 2000));
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("let's start calculation!");
    await sleep();
    rainbowTitle.stop();
    let colorCal = chalk.cyanBright(`
 _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

     `);
    console.log(colorCal);
}
await welcome();
const sleep2 = () => {
    return new Promise((res) => setTimeout(res, 2000));
};
async function welcome2() {
    let creatorName = chalkAnimation.rainbow("create by Saher Saleem");
    await sleep2();
    creatorName.stop();
}
async function askQuestion() {
    await welcome2();
    const answers = await inquirer
        .prompt([
        {
            "type": "list",
            "name": "operator",
            "message": "Which operation you want to perform?\n",
            "choices": [
                "Addition", "Subtraction", "Multiplication", "Division"
            ]
        },
        {
            "type": "number",
            "name": "num1",
            "message": "Enter a number:"
        },
        {
            "type": "number",
            "name": "num2",
            "message": "Enter a number:"
        }
    ]);
    function calculation() {
        let result = null;
        if (answers.operator == "Addition") {
            result = answers.num1 + answers.num2;
            //result = (`${answers.num1}+${answers.num2}=${answers.num1 + answers.num2}`)
            console.log(chalk.green(result));
        }
        else if (answers.operator == "Subtraction") {
            result = answers.num1 - answers.num2;
            //result = (`${answers.num1}-${answers.num2}=${answers.num1-answers.num2}`)
            console.log(chalk.green(result));
        }
        else if (answers.operator == "Multiplication") {
            result = answers.num1 * answers.num2;
            //result =(`${answers.num1}*${answers.num2}=${answers.num1-answers.num2}`)
            console.log(chalk.green(result));
        }
        else if (answers.operator == "Division") {
            result = answers.num1 / answers.num2;
            //result = (`${answers.num1}/${answers.num2}=${answers.num1/answers.num2}`)
            console.log(chalk.green(result));
        }
        return (result);
    }
    const cal = calculation();
    //console.log(`${cal}`)
    const answers2 = await inquirer
        .prompt([
        {
            "type": "list",
            "name": "operator",
            "choices": ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            "type": "number",
            "name": "num4",
            "message": "Enter a number:"
        }
    ]);
    if (answers2.operator == "Addition") {
        console.log(chalk.green(`${cal}+${answers2.num4} = ${cal + answers2.num4}`));
    }
    else if (answers2.operator == "Subtraction") {
        console.log(chalk.green(`${cal}-${answers2.num4}= ${cal - answers2.num4}`));
    }
    else if (answers2.operator == "Multiplication") {
        console.log(chalk.green(`${cal}*${answers2.num4} = ${cal * answers2.num4}`));
    }
    else if (answers2.operator == "Division") {
        console.log(chalk.green(`${cal}/${answers2.num4} = ${cal / answers2.num4}`));
    }
}
//askQuestion()
async function againRestart() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue .Press Y :"
        });
    } while (again.restart == "Y" || again.restart == "Yes" || again.restart == "YES" || again.restart == "y");
}
againRestart();
