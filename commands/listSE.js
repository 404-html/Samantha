const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  liste=[
    `baDumTss`,
    `youDied`,
    `cena`,
    `fuckYou`,
    `KO`,
    `explosion`,
    `popopo`,
    `oof`,
    `maneuver`,
    `ofCourse`,
    `yes`,
    `ya`,
    `E`,
    `clap`,
    `sparta`,
    `hey`,
    `facepalm`,
    `zaWarudo`,
    `muda`,
    `noice`,
    `no`,
    `sadViolin`,
    `brainpower`,
    `tuturu`,
    `wow`,
    `omae`,
    `trombone`,
    `crabrave`,
    `succ`,
    `okay`,
    `woah`,
    `honte`,
    `roar`,
    `continued`,
    `boi`,
    `shit`,
    `wednesday`,
    `gay`,
    `wasted`,
    `weGotHim`,
    `mine`,
    `gotcha`,
    `windows`,
    `thot`,
    `jazz`,
    `rightBack`,
    `projet`,
    `AH`,
    `moments`,
    `inches`,
    `eternity`,
    `slow`,
    `cry`,
    `aah`,
    `thicc`,
    `deusVult`,
    `mielpops`,
    `chocapic`,
    `jack`,
    `mimes`,
    `duel`,
    `bluff`,
    `vous`,
    `chips`,
    `twoWays`,
    `AAH`
  ]
  liste.sort();
  messageToSend = "";
  for(i = 0; i < liste.length;i++){
    messageToSend += "`" + liste[i] + "` ";
  }
  return message.reply("Les effets sonores disponibles sont au nombre de " + liste.length + " et sont " + messageToSend);
}

module.exports.help = {
  name: "listSE",
  type: "social", //social fun Private ou admin
  usage: "listSE",
  desc: "j'envoit la liste des effets sonores disponibles"
}
