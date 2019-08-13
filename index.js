const http = require('http');
const nerds = require("nerds");
console.log("hello")

function madLib() {
    let charHP = nerds.resolve('Harry Potter',2).asArray();
   const char1Name = charHP[0].full;
   const char1House = charHP[0].house;
   const char2Name = charHP[1].full;
   const char2House = charHP[1].house;

    const house1Unknown = char1House === "Unkown" || char1House === "N/A";
    const house2Unknown = char2House === "Unkown" || char2House === "N/A";

    if(house1Unknown && house2Unknown === "Unkown") {
        return (`<h1>${char1Name} and ${char2Name} are Harry Potter characters but dont have a house.</h1>`)
    } else if(house1Unknown){
        return(`<h1>${char1Name} a Harry Potter character but isnt in a House. ${char2Name} is also a Harry Potter Character in House ${char2House}.</h1>`)
    } else if(house2Unknown){
        return(`<h1>${char1Name} is a Harry Potter character but isnt in a House. ${char2Name} is also a Harry Potter Character but doesnt have a house.</h1>`)
    } else {
        return(`<h1>${char1Name} a Harry Potter character in House ${char1House}. ${char2Name} is also a Harry Potter Character in House ${char2House}.</h1>`)
    }
}

    const server = http.createServer((req,res) => {
        res.end(madLib())
    });
    
    server.listen(4000);






//TRYING TO FIGURE OUT HOW TO USE SWITCH STATEMENTS HERE
// switch(char1Name, char2Name, char1House, char2House){
//     case house1Unknown && house2Unknown:
//         console.log('1')
//         return (`<h1>${char1Name} and ${char2Name} are Harry Potter characters but dont have a house.</h1>`)
//         break
//     case house1Unknown:
//         console.log('2')
//         return (`<h1>${char1Name} a Harry Potter character but isnt in a House. ${char2Name} is also a Harry Potter Character in House ${char2House}.</h1>`)
//         break
//     case house2Unknown:
//         console.log('3')
//         return (`<h1>${char1Name} is a Harry Potter character but isnt in a House. ${char2Name} is also a Harry Potter Character but doesnt have a house.</h1>`)
//         break
//     default :
//         console.log('4')    
//         return (`<h1>${char1Name} a Harry Potter character in House ${char1House}. ${char2Name} is also a Harry Potter Character in House ${char2House}.</h1>`)
//         break
// }
// }