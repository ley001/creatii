const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTcyNjI3MzMzNjg3MTU2ODI2.G92pW5.DpNVw4oUBD3WBqOeUe9OYGQ5cjdMPfvageXh7g"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello good person!")
    }
    
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi"){
        message.reply("Hey!")
    }
    
})

client.on("messageCreate", (message) => {
    if (message.content == "hello"){
        message.reply("What's up!")
    }
    
})

client.on("messageCreate", (message) => {
    if (message.content == "Hello"){
        message.reply("Greetings!")
    }
    
})

client.on("messageCreate", (message) => {
    if (message.content == "hello!"){
        message.reply("Hi!!")
    }
    
})

client.on("messageCreate", (message) => {
    if (message.content == "Hello!"){
        message.reply("Hi! <3")
    }
    
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi!"){
        message.reply("Hello <3")
    }
    
})

client.on("messageCreate", (message) => {
    if (message.content == "hi!"){
        message.reply("Hello precious person!")
    }
    
})


client.on("messageCreate", (message) => {
    if (message.content == "i'm sad"){
        message.reply("Creati loves you! <3")
    }
    
})

client.on("messageCreate", (message) => {
    if (message.content == "ping"){
        message.reply("pong")
    }
    
})

client.on("messageCreate", (message) => {
    if (message.content == "Ping"){
        message.reply("pong")
    }
    
})

client.login(process.env.TOKEN)