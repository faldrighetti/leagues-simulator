const teams = ['Bayern Munich', 'Borussia Dortmund', 'Bayer Leverkusen', 'RB Leipzig', 'Eintracht Frankfurt',
'Borussia Mönchengladbach', 'Freiburg', 'Hoffenheim', 'Köln', 'Mainz', 'Union Berlin', 'Wolfsburg', 'Augsburg', 'Bochum',
'Hertha Berlin', 'Schalke 04','Stuttgart', 'Werder Bremen']

const powerhouse = ['Bayern Munich']
const challenger = ['Borussia Dortmund', 'Bayer Leverkusen', 'RB Leipzig', 'Eintracht Frankfurt', 'Borussia Mönchengladbach']
const midtable = ['Freiburg', 'Hoffenheim', 'Köln', 'Mainz', 'Union Berlin', 'Wolfsburg']
const survival = ['Augsburg', 'Bochum', 'Hertha Berlin', 'Schalke 04','Stuttgart', 'Werder Bremen']

const matches = 34
const possibilities = 100

const powerhouseWin = 70
const powerhouseDraw = 85
const challengerWin = 50
const challengerDraw = 75
const midtableWin = 33
const midtableDraw = 67
const survivalWin = 25
const survivalDraw = 65

function throwDice(){
    return Math.floor(Math.random() * possibilities) + 1;
}

function simulatePowerhouse(){
    
    let wins = 0
    let draws = 0
    let losses = 0
    let points = 0

    for (let i = 0; i < matches; i++){
        let result = throwDice()
        if (result <= powerhouseWin){
            wins++;
            points += 3;
        }
        else if(result > powerhouseWin && result <= powerhouseDraw){
            draws++;
            points++;
        }
        else{
            losses++;
        }
    }
    return points;
}

function simulateChallenger(){

    let wins = 0
    let draws = 0
    let losses = 0
    let points = 0

    for (let i = 0; i < matches; i++){
        let result = throwDice()
        if (result <= challengerWin){
            wins++;
            points += 3;
        }
        else if(result > challengerWin && result <= challengerDraw){
            draws++;
            points++;
        }
        else{
            losses++;
        }
    }
    return points;
}

function simulateMidtable(){
    
    let wins = 0
    let draws = 0
    let losses = 0
    let points = 0

    for (let i = 0; i < matches; i++){
        let result = throwDice()
        if (result <= midtableWin){
            wins++;
            points +=3;
        }
        else if(result > midtableWin && result <= midtableDraw){
            draws++;
            points++;
        }
        else{
            losses++;
        }
    }
    return points;
}

function simulateSurvival(){
    
    let wins = 0
    let draws = 0
    let losses = 0
    let points = 0

    for (let i = 0; i < matches; i++){
        let result = throwDice()
        if (result <= survivalWin){
            wins++;
            points +=3;
        }
        else if(result > survivalWin && result <= survivalDraw){
            draws++;
            points++;
        }
        else{
            losses++;
        }
    }
    return points;
}

let arrayTotal = []

function simulateLeague(){

    let arrayPoints = []

    for (let i = 0; i < teams.length; i++){
        let randomNumber1 = throwDice()
        for (let j = 0; j < powerhouse.length; j++){
            if (teams[i] === powerhouse[j]){
                let amount = simulatePowerhouse()
                arrayPoints.push([teams[i], amount, randomNumber1]);
            }
        }
        for (let j = 0; j < challenger.length; j++){
            if (teams[i] === challenger[j]){
                let amount = simulateChallenger()
                arrayPoints.push([teams[i], amount, randomNumber1]);
            }
        }
        for (let j = 0; j < midtable.length; j++){
            if (teams[i] === midtable[j]){
                let amount = simulateMidtable()
                arrayPoints.push([teams[i], amount, randomNumber1]);
            }
        }
        for (let j = 0; j < survival.length; j++){
            if (teams[i] === survival[j]){
                let amount = simulateSurvival()
                arrayPoints.push([teams[i], amount, randomNumber1]);
            }
        }
    }

    let finalStandings = arrayPoints.sort(([a, b, c], [d, e, f]) => e - b || f - c);
    arrayTotal = finalStandings
    return finalStandings;
}
