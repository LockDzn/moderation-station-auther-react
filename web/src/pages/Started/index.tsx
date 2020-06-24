import React, { useState } from 'react';

import config from '../../config';

const Started = () => {

    const [discord, setDiscord] = useState(true);
    const [contact, setContact] = useState(false);

    function SelectDiscord(){
        setDiscord(true);
        setContact(false);
    }

    function SelectContact(){
        setDiscord(false);
        setContact(true);
    }

    return(
        <div id="fl">
            <h1>Liga dos Moderadores</h1>
            <p>O objetivo desta comunidade é educar, compartilhar experiências, postar alguns memes atrevidos e fornecer um recurso para canais que procuram moderadores de qualidade para seus eventos e/ou comunidades no Twitch.</p>
            <p>Exigimos alguma indicação da experiência atual de moderação para ingressar. Você deve atender a um dos seguintes critérios:</p>

            <div id="rad">
                <div>
                    <input name="applicant-type" type="radio" value="auto" id="type-mod" onClick={SelectDiscord} defaultChecked />
                    <label>
                        <img src="https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1" alt="(moderator badge)" /> Você é um moderador de canal, cobrindo mais de 15 mil seguidores <em>e</em> mais de 1 canal parceiro.
                    </label>
                </div>
                <div>
                    <input name="applicant-type" type="radio" value="auto" id="type-partner" onClick={SelectDiscord}/>
                    <label>
                        <img src="https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1" alt="(verified badge)"/> Você é um parceiro do Twitch.
                    </label>
                </div>
                <div>
                    <input name="applicant-type" type="radio" value="auto" id="type-staff" onClick={SelectDiscord}/>
                    <label>
                        <img src="https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/1" alt="(employee badge)"/> Você é um funcionário da Twitch.
                    </label>
                </div>
                <div>
                    <input name="applicant-type" type="radio" value="contact" id="type-org" onClick={SelectContact}/>
                    <label>
                        <img src="https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1" alt="(VIP badge"/> Você é um pesquisador, organizador de eventos ou outro profissional do setor.
                    </label>
                </div>
                <div>
                    <input name="applicant-type" type="radio" value="contact" id="type-other" onClick={SelectContact}/>
                    <label>
                        <img src="https://static-cdn.jtvnw.net/badges/v1/ca3db7f7-18f5-487e-a329-cd0b538ee979/1" alt="(anon badge)"/> Você modera uma grande comunidade fora do Twitch.
                    </label>
                </div>
            </div>

            <p>Se o sistema puder verificar você por conta própria, você ingressará automaticamente no servidor. Por esse motivo, precisamos da permissão para participar em seu nome.</p>
            <div>
                <a className={discord ? `account-link` : `account-link hidden`} id="discord" href={config.DISCORD_OAUTH2_URL}>
                    Iniciar
                </a>
                <a className={contact ? `account-link` : `account-link hidden`} id="contact" href="email:email@gmail.com">
                    Contate-Nos
                </a>
            </div>
            <p>
                Essa é uma comunidade brasileira inspirada na Moderation Station Discord.
                <br/>
                This is a Brazilian community inspired by Moderation Station Discord.
            </p>
        </div>
    );
}

const Success = () => {
    return (
        <div id="fl">
            <h1>Moderation Station Discord</h1>
            <p>
                <span>
                Bem-vindo! Agora você pode acessar a comunidade&nbsp;
                </span>
                <a href="https://discordapp.com/channels/352896412880470017">AQUI</a>
                <span>!</span>
            </p>
        </div>
    );
}

export {
    Started,
    Success
};