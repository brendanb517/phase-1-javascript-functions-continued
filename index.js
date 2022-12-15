// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(work = `go to the office`){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(firstParameter = `*`){
    return function(secondParameter = `special`){
        return `You are ${firstParameter}${secondParameter}${firstParameter}!`
    };
}