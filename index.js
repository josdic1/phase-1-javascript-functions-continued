function saturdayFun(arg) {
    const phrase = 'This Saturday, I want to '
    return !arg ? phrase + 'roller-skate!' :
        phrase + arg + "!"
}

function mondayWork(arg) {
    const phrase =  "This Monday, I will "
    return !arg ? phrase + 'go to the office.' :
        phrase + arg + "."
}

function wrapAdjective(wrapper) {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}
