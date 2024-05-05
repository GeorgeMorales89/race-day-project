let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 18;

if (runnersAge > 18 && registeredEarly) {
    raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly) {
    console.log(`Your race number is ${raceNumber}, and your race starts at 9:30 am.`)
} else if (runnersAge > 18 && !registeredEarly) {
    console.log(`Your race number is ${raceNumber}, your race starts at 11:00 am.`)
} else if (runnersAge < 18) {
    console.log(`Your race number is ${raceNumber}, your race starts at 12:30 pm.`)
} else if (runnersAge === 18) {
    console.log(`Your race number is ${raceNumber}, please see the registration desk.`)
}
