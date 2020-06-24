import Discord from 'discord.js';
import config from '../config';

const Client = new Discord.Client();

Client.login(config.BOT_TOKEN);

export default Client;