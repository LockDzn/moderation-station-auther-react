import React from 'react';

const Discord = () => {

    sessionStorage.clear();

    return (
        <div id="fl">
            <h1>Moderation Station Discord</h1>
            <p>
                Ocorreu um erro na comunicação com a API do Discord. Por favor, tente novamente mais tarde. Se o problema persistir, envie um email para email@email.com.
            </p>
            <p>
                <b>Verifique se você não está em 100 Discords já.</b> O Discord tem um limite de servidor de 100, após o qual eles retornam um erro inespecífico ao tentar ingressar em mais.
            </p>
        </div>
    );
}

const Twitch = () => {

    sessionStorage.clear();

    return (
        <div id="fl">
            <h1>Liga dos Moderadores</h1>
            <p>
                Ocorreu um erro na comunicação com a API da Twitch. Por favor, tente novamente mais tarde. Se o problema persistir, envie um email para email@email.com.
            </p>
        </div>
    );
}


export {
    Twitch,
    Discord
}