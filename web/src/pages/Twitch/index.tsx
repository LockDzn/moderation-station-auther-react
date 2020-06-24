import React from 'react';
import config from '../../config';

const Started = () => {

    return(
        <div id="fl">
            <h1>Moderation Station Discord</h1>
            
            <a className="account-link" id="twitch" href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${config.TWITCH_CLIENT_ID}&redirect_uri=${config.TWITCH_REDIRECT_URL}&scope=user_read`}>
                <img src="https://i.3v.fi/raw/signwtwitch.png" alt="Connect with Twitch"/>
            </a>
        </div>
    );
}

export default Started;