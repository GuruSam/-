var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function(message)
{
	if(message.content === "Привет, Вирт")
	{ 
	          bot.reply(message, "И тебе привет!"); 
	};
	if(message.content === "привет, Вирт")
	{
		bot.reply(message, "И тебе привет!");
	};
	if(message.content === "Проверка")
	{
		bot.reply(message, "Проверка пройдена!");
	};
	if(message.content === "Вирт, дай пять")
	{
		bot.reply(message, ":hand:");
	};
});

bot.login("gurusam@labirint.info", "Virtual571279");