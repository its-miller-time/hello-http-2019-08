// Without "./", Node looks
// in its global module folder
const http = require("http");
function handleRequestAndResponse(req, res) {
    console.log(req.url);
    const timestamp = new Date();
    console.log("Received a Request");
    res.end(`<h1>Hello World ${timestamp}</h1>`);  // .end() sends the response.
                                          // It "tapes up the box and ships it".
}
// What's a server??!?
// A server is a piece of code
// or a computer running a piece of code
// that does something useful for YOU.
// Usually, servers store
// data and often manipulate that data.
// const server = http.createServer(handleRequestAndResponse);
const server = http.createServer((req, res) => {
    console.log(req.url);
    const timestamp = new Date();
    console.log("I totally received a Request!!!!!!!!!!!!!!!!!!!");
    res.end(`<h1>Hello World ${timestamp}</h1>`);  // .end() sends the response.
                                          // It "tapes up the box and ships it".
});

// http.createServer() accepts a function and returns a "server"
// When the server receives a Request:
// 1. It puts together *most* of a Response.
// 2. It calls *your* function and passes it the Request and Response


// What is 3000?
server.listen(3000);