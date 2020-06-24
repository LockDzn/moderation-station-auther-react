import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import { Started, Success } from './pages/Started';
import DiscordAuth from './pages/DiscordAuth';
import Twitch from './pages/Twitch';
import TwitchAuth from './pages/TwitchAuth';
import * as Error from './pages/Error';

const Routes = () => {
    return ( 
        <BrowserRouter>
            <Route path="/" exact>
                <Redirect to={{ pathname: "/get-started" }} />
            </Route>
            <Route component={Started} path="/get-started" />
            <Route component={DiscordAuth} path="/auth/discord" />
            <Route component={Twitch} path="/twitch" />
            <Route component={TwitchAuth} path="/auth/twitch" />
            <Route component={Success} path="/success" />
            <Route component={Error.Discord} path="/error/discord" />
            <Route component={Error.Twitch} path="/error/twitch" />
        </BrowserRouter>
    );
}

export default Routes;