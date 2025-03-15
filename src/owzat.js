// test array of player data
const dBplayers = [
    { forename: 'James', surname: 'Anderson', nation: 'ENG', bat: 45, bowl: 95, field: 84 },
    { forename: 'Ravichandran', surname: 'Ashwin', nation: 'IND', bat: 56, bowl: 78, field: 79 },
    { forename: 'Jonny', surname: 'Bairstow', nation: 'ENG', bat: 88, bowl: 45, field: 73 },
    { forename: 'Shoaib', surname: 'Bashir', nation: 'ENG', bat: 35, bowl: 89, field: 79 },
    { forename: 'Jasprit', surname: 'Bumrah', nation: 'IND', bat: 35, bowl: 89, field: 79 },
    { forename: 'Zak', surname: 'Crawley', nation: 'ENG', bat: 90, bowl: 10, field: 87 },
    { forename: 'Ben', surname: 'Duckett', nation: 'ENG', bat: 90, bowl: 21, field: 67 },
    { forename: 'Ben', surname: 'Foakes', nation: 'ENG', bat: 78, bowl: 8, field: 90 },
    { forename: 'Shubman', surname: 'Gill', nation: 'IND', bat: 91, bowl: 27, field: 76 },
    { forename: 'Tom', surname: 'Hartley', nation: 'ENG', bat: 56, bowl: 78, field: 79 },
    { forename: 'Ravi', surname: 'Jadeja', nation: 'IND', bat: 88, bowl: 45, field: 73 },
    { forename: 'Yashasvi', surname: 'Jaiswal', nation: 'IND', bat: 90, bowl: 21, field: 67 },
    { forename: 'Dhruv', surname: 'Jurel', nation: 'IND', bat: 78, bowl: 8, field: 90 },
    { forename: 'Sarfaraz', surname: 'Khan', nation: 'IND', bat: 90, bowl: 68, field: 72 },
    { forename: 'Devdutt', surname: 'Padikkal', nation: 'IND', bat: 95, bowl: 54, field: 88 },
    { forename: 'Ollie', surname: 'Pope', nation: 'ENG', bat: 91, bowl: 27, field: 76 },
    { forename: 'Joe', surname: 'Root', nation: 'ENG', bat: 95, bowl: 54, field: 88 },
    { forename: 'Rokit', surname: 'Sharma', nation: 'IND', bat: 90, bowl: 10, field: 87 },
    { forename: 'Mohammed', surname: 'Siraj', nation: 'IND', bat: 45, bowl: 95, field: 84 },
    { forename: 'Ben', surname: 'Stokes', nation: 'ENG', bat: 90, bowl: 68, field: 72 },
    { forename: 'Mark', surname: 'Wood', nation: 'ENG', bat: 45, bowl: 87, field: 80 },
    { forename: 'Kuldeep', surname: 'Yadav', nation: 'IND', bat: 45, bowl: 87, field: 80 }
];

// test array of team data
const dBteams = [
    { name: 'England', nation: 'ENG', orderBat: [5, 6, 15, 16, 2, 19, 7, 9, 20, 0, 3], orderBowl: [9, 10], wicketKeeper: 6 },
    { name: 'India', nation: 'IND', orderBat: [17, 11, 8, 14, 10, 13, 12, 1, 21, 18, 4], orderBowl: [10, 9], wicketKeeper: 6 }
]

// function to get a random number between 0 and (max-1)
function BfxRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// function to return a dice roll
function BfxRollDice(sides = 6) {
    return (Math.floor(Math.random() * sides) + 1);
}

// function to get a random true or false
function BfxRandomBool() {
    return Boolean(Math.floor(Math.random() * 2));
}

console.clear;
let match = null;
let btnStartMatch = document.getElementById('buttonStartMatch');
btnStartMatch.onclick = startMatch;
let btnBowlBall = document.getElementById('buttonBowlBall');
btnBowlBall.onclick = test;
btnBowlBall.style = 'display: none;';
let btnBowlOver = document.getElementById('buttonBowlOver');
btnBowlOver.onclick = test;
btnBowlOver.style = 'display: none;';
let btnChangeBowler = document.getElementById('buttonChangeBowler');
btnChangeBowler.onclick = test;
btnChangeBowler.style = 'display: none;';

function init() {
    // load teams
    match = new CMatch(0, dBteams[0], dBteams[1]);
    console.log(match);
    // initialise match
}

function test() {
    alert('test');
}

function startMatch() {
    // @ts-ignore
    btnStartMatch.style = 'display: none;';
    btnBowlBall.style = 'display: unset;'
    btnBowlOver.style = 'display: unset;'
    btnChangeBowler.style = 'display: unset;'

    document.getElementById('elemIdInnings1').style.display = 'inline-block';
}