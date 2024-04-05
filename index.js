// code your solution here
function saturdayFun(elipses = "roller-skate"){ 
    return `This Saturday, I want to ${elipses}!`
}

function mondayWork(ellipses2 = "go to the office") {
    return `This Monday, I will ${ellipses2}.`
}

function saturdayFun (normal = 'roller-skate'){
    return `This Saturday, I want to ${normal}!`
}

function wrapAdjective (flair = "*") {
    return function(name = "special"){
        return `You are ${flair}${name}${flair}!`
    }
}