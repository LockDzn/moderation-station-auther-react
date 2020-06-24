import { Request, Response } from 'express';
import Discord from 'discord.js';
import config from '../config';

import discordClient from '../services/DiscordBOT';
import TwitchAPI from '../services/TwitchAPI';

const twitchAPI = new TwitchAPI();

class UserController {
    async index(req: Request, res: Response){
        return res.json({ message: 'Ok!' })
    }

    async create(req: Request, res: Response){

        const { discordID, twitchID, access_token } = req.body;

        const twitchUser = await twitchAPI.getChannel(twitchID);
        const twitchUsername = twitchUser.display_name;

        const guild: Discord.Guild = discordClient.guilds.resolve(config.DISCORD_GUILD_ID)!;

        var mod = false;
        var partner = false;
        var staff = false

        var roles = [];

        if(!twitchUser.type && !twitchUser.broadcaster_type){
            mod = true;
            roles.push('579717966598373377');
        }

        if(twitchUser.type == 'staff'){
            staff = true;
            roles.push('579718507621515286');
            roles.push('579717966598373377');
        }
        if(twitchUser.broadcaster_type == 'partner' && !twitchUser.type) {
            partner = true;
            roles.push('579719029330280448');
            roles.push('579717966598373377');
        }

        await guild.addMember(discordID, {
            accessToken: access_token,
            nick: twitchUsername,
            roles,
            deaf: false,
            mute: false,
        });

        return res.status(201).json({ status: 201, message: 'created user' })
    }
}

export default UserController;