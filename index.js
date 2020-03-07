/* eslint-disable no-console */
require('dotenv').config();
const { RichEmbed, Client } = require('discord.js');
const { guns } = require('./weapon-constants.js');
const { maps } = require('./map-constants.js');
const { ammo } = require('./ammo-constants.js');
const { capitalized, invalidCommand } = require('./utils.js');
const {
  EZ_AMMO, PREFIX, COMMANDS, HIDEOUT, WEAPONS_SHEET, AMMO_SHEET,
} = require('./misc-constants.js');

const bot = new Client();
const gunArr = Object.keys(guns);
const mapsArr = Object.keys(maps);

const sendCommandsEmbed = (message) => {
  const commandsArr = Object.keys(COMMANDS);
  const embed = new RichEmbed().setTitle('Scav Bot Commands');
  commandsArr.forEach((commandObj) => {
    embed.addField(`??${COMMANDS[commandObj].command}`, COMMANDS[commandObj].description);
  });
  return message.channel.send(embed);
};

const sendMapsEmbed = (message) => {
  const embed = new RichEmbed().setTitle('Links to all maps');

  mapsArr.forEach((mapKey) => {
    const mapCapitalized = capitalized(mapKey);
    embed.addField(mapCapitalized, `[Map Link](${maps[mapKey]})`);
  });
  return message.channel.send(embed);
};

const sendGunsEmbed = (message) => {
  const embed = new RichEmbed().setTitle('Weapons List');

  gunArr.forEach((gunKey) => {
    embed.addField(guns[gunKey].name, `command: ??${gunKey}`);
  });
  return message.channel.send(embed);
};

const sendGunEmbed = (message, gunRequest) => {
  const gunCaptalized = gunRequest.toUpperCase();
  const embed = new RichEmbed().setTitle(gunCaptalized)
    .addField('Ammo', guns[gunCaptalized].ammo)
    .addField(gunCaptalized, `[Best Recoil](${guns[gunCaptalized]['recoil-loadout']})`);
  return message.channel.send(embed);
};

const sendAmmoEmbed = (message) => {
  const ammoArr = Object.keys(ammo);
  const embed = new RichEmbed().setTitle('Ammo Chart');
  ammoArr.forEach((ammoKey) => {
    embed.addField(ammoKey, ammo[ammoKey]);
  });
  return message.channel.send(embed);
};

const sendSpecificGunOrMap = (message, request) => {
  if (gunArr.includes(capitalized(request))) {
    return sendGunEmbed(message, request);
  } if (mapsArr.includes(request)) {
    return message.channel.send(`<${maps[request]}>`);
  }
  const invalidCommandRes = invalidCommand(message);
  return message.channel.send(invalidCommandRes);
};

const randomMapGen = (message) => {
  const randomMapIndex = Math.floor(Math.random() * mapsArr.length);
  const mapName = mapsArr[randomMapIndex];
  const mapLink = maps[mapName];
  return message.channel.send(`${mapName}: ${mapLink}`);
};

bot.on('ready', () => {
  console.log('ScavBot Ready');
});

bot.on('message', (message) => {
  if (!message.content.startsWith(PREFIX)) return;
  const requestArr = message.content.substring(PREFIX.length).split(' ');
  const request = requestArr[0];

  switch (request) {
    case COMMANDS.HELP.command: {
      sendCommandsEmbed(message);
      return;
    }
    case COMMANDS.MAPS.command: {
      sendMapsEmbed(message);
      return;
    }
    case COMMANDS.GUNS.command: {
      sendGunsEmbed(message);
      return;
    }
    case COMMANDS.AMMO.command: {
      sendAmmoEmbed(message);
      return;
    }
    case COMMANDS.EZ_AMMO.command: {
      message.channel.send(`<${EZ_AMMO}>`);
      return;
    }
    case COMMANDS.HIDEOUT_ITEMS.command: {
      message.channel.send(`<${HIDEOUT}>`);
      return;
    }
    case COMMANDS.WEAPON_SHEET.command: {
      message.channel.send(`<${WEAPONS_SHEET}>`);
      return;
    }
    case COMMANDS.AMMO_SHEET.command: {
      message.channel.send(`<${AMMO_SHEET}>`);
      return;
    }
    case COMMANDS.RANDOM_MAP.command: {
      randomMapGen(message);
      return;
    }
    default: sendSpecificGunOrMap(message, request);
  }
});

bot.login(process.env.API_KEY);
