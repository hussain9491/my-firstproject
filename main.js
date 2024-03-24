#! /usr/bin/env node
import inquirer from "inquirer";
const Mycalculator = await inquirer.prompt([
    { name: 'operator', type: 'list', message: 'which operator perform you want',
        choices: ['addition', 'substraction', 'multiplication', 'division']
    },
    { name: 'firstnumber', type: 'number', message: 'Enter first value'
    },
    { name: 'secondnumber', type: 'number', message: 'Enter second value' },
]);
if (Mycalculator.operator === 'addition') {
    console.log(Mycalculator.firstnumber + Mycalculator.secondnumber);
}
else if (Mycalculator.operator === 'substraction') {
    console.log(Mycalculator.firstnumber - Mycalculator.secondnumber);
}
else if (Mycalculator.operator === 'multiplication') {
    console.log(Mycalculator.firstnumber * Mycalculator.secondnumber);
}
else if (Mycalculator.operator === 'division') {
    console.log(Mycalculator.firstnumber / Mycalculator.secondnumber);
}
else
    console.log(' Please choose the valid operator');
