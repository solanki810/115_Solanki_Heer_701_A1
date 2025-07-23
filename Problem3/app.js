const Chatbot = require("./chatbot");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt("You ==> ");
rl.prompt();

rl.on('line', function(message) {
    console.log('Bot ==> ' + Chatbot.ChatbotReply(message));    
    rl.prompt();
}).on('close', function() {
    console.log("Bye! Chat ended.");
    process.exit(0);
});
