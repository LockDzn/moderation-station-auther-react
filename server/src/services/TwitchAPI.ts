import axios from 'axios';
import config from '../config';

const twitchNewAPI = axios.create({
    baseURL: 'https://api.twitch.tv/helix',
    headers: {
      Authorization: `Bearer ${config.TWITCH_ACCESS_TOKEN}`,
      'Client-ID': config.TWITCH_CLIENT_ID
    },
});

class TwitchAPI {
    async getChannel(userID: Number) {
        const { data } = await twitchNewAPI.get(`/users?id=${userID}`);
        return data.data[0];
    }
}

export default TwitchAPI;