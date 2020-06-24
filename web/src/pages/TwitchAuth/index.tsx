import React, { useEffect } from 'react';
import { useLocation, useHistory  } from 'react-router-dom';
import axios from 'axios';

import api from '../../services/api';

const TwitchAuth = () => {

    const discordID = sessionStorage.getItem('discordID');
    const discord_token = sessionStorage.getItem('discord_token');


    const location = useLocation();
    const history = useHistory();

    const params = location.hash.split('&')
    const access_token = params[0].slice(1).split('=');

    useEffect(() => {
    
        if(!access_token[1]) return history.push('/error/twitch');

        axios.get('https://id.twitch.tv/oauth2/validate', {
            headers: {
                'authorization': `OAuth ${access_token[1]}`
            }
        }).then(async (response) => {
            
            await api.post('user', {
                discordID,
                access_token: discord_token,
                twitchID: response.data.user_id
            })

            history.push('/success');
            sessionStorage.clear();
        });
    }, [access_token, discordID, discord_token, history]);

    return (
        <div></div>
    )
}

export default TwitchAuth;