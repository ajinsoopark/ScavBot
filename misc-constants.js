const COMMANDS = {
  GUNS: { command: 'guns', description: 'List of guns' },
  MAPS: { command: 'maps', description: 'List of maps' },
  EZ_AMMO: { command: 'ezAmmo', description: 'ezAmmo image' },
  HIDEOUT_ITEMS: { command: 'hideoutItems', description: 'Items to keep for Hideout' },
  WEAPON_SHEET: { command: 'weaponSheet', description: 'Weapons sheet' },
  AMMO_SHEET: { command: 'ammoSheet', description: 'Ammo Sheet' },
  HELP: { command: 'help', description: 'List of commands' },
  GUN_SPECIFIC: { command: '[gun_name]', description: 'Top 3 bullets and link to best recoil mods' },
  MAP_SPECIFIC: { command: '[map_name]', description: 'Link to specific map' },
  AMMO: { command: 'ammo', description: 'List of top 3 ammos by caliber' },
};
const INVALID_COMMAND = '`Invalid Command Dumb Betch for help enter **??help**`';
const EZ_AMMO = 'https://i.redd.it/eawzvoj4blc41.png';
const PREFIX = '??';
const HIDEOUT = 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/39/Hideout-Requirements-Items-to-Keep.jpg?version=20936dd7e636a9e49aecfc500a993ee7';
const WEAPONS_SHEET = 'https://docs.google.com/spreadsheets/d/1yHyVEVB5oN0qL_pR1qTNP1_ICmzJ3SCFJQNb6XDM_DQ/htmlview?sle=true#';
const AMMO_SHEET = 'https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/htmlview?sle=true#';


module.exports = {
  INVALID_COMMAND,
  COMMANDS,
  EZ_AMMO,
  PREFIX,
  HIDEOUT,
  WEAPONS_SHEET,
  AMMO_SHEET,
};
