module.exports.ChatbotReply = function(message) {
    const Bot_Age = 20;
    const Bot_Name = "Heer";
    const Bot_University = "VNSGU";
    const Bot_Country = "India";

    message = message.toLowerCase();

    if (message.includes("hi") || message.includes("hello") || message.includes("welcome")) {
        return "Hi!";
    } 
    else if (message.includes("age") && message.includes("your")) {
        return `I'm ${Bot_Age} years old.`;
    } 
    else if (message.includes("how") && message.includes("are") && message.includes("you")) {
        return "I'm fine ^_^";
    } 
    else if (message.includes("where") && message.includes("live") && message.includes("you")) {
        return `I live in ${Bot_Country}.`;
    } 
    else if (message.includes("your") && message.includes("name")) {
        return `My name is ${Bot_Name}.`;
    } 
    else if (message.includes("university")) {
        return `I study at ${Bot_University}.`;
    }
    else {
        return "Sorry, I didn't get it :( ";
    }
};
