let sundayIntro = "This Saturday, I"
let mondayIntro = "This Monday, I"

function saturdayFun(activity) {
   switch(activity) {
      case 'bathe my dog':
             return `${sundayIntro} want to bathe my dog!`
      default:
         return `${sundayIntro} want to roller-skate!`
   }
}

function mondayWork(activity) {
   switch(activity) {
      case 'work from home':
         return `${mondayIntro} will work from home.`
      default:
         return `${mondayIntro} will go to the office.`
   }
}



function wrapAdjective(symbol) {
   const prefix = "You are"
   return function (emphatic) {
      return (`${prefix} ${symbol}${emphatic}${symbol}!`)
   }
}

wrapAdjective("*")("a hard worker")
