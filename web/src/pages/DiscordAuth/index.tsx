import React, { useEffect } from 'react';
import { useLocation, useHistory  } from 'react-router-dom';
import axios from 'axios';

import config from '../../config';

const DiscordAuth = () => {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const code = String(query.get('code'));
    const history = useHistory();

    useEffect(() => {

        if(code == 'null') return history.push('/error/discord');

        const data = new FormData();

		data.append('client_id', config.DISCORD_CLIENT_ID);
		data.append('client_secret', config.DISCORD_SECRET);
        data.append('grant_type', 'authorization_code');
        data.append('code', code);
		data.append('redirect_uri', config.DISCORD_REDIRECT_URL);
        data.append('scope', `identify guilds guilds.join`);

        axios.post('https://discordapp.com/api/oauth2/token', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(async (response) => {

            const { data: profile } = await axios.get('https://discordapp.com/api/users/@me', {
                headers: {
                    'authorization': `${response.data.token_type} ${response.data.access_token}`
                }
            });

            sessionStorage.setItem('discordID', profile.id);
            sessionStorage.setItem('discord_token', response.data.access_token);
            history.push('/twitch');
        });
    }, [code, history]);

    return (
        <div></div>
    )
}

export default DiscordAuth;