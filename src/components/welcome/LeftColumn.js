import React from 'react'
import logo from '../../assets/LogoMain.png';
import googlePlay from '../../assets/google-play-badge.png';
import { urlDownloadApp } from '../../utils/constants';

export const LeftColumn = () => {
    return (
        <div className="welcomeScreen__leftColumn animate__animated animate__bounceInLeft">
            <img 
                src={ logo }
                alt="logo"
                className="welcomeScreen__cucinappLogo"
            />
            <h1 className="title">Cucinapp: Manejá tus Recetas</h1>
            <p>Organizá tus comidas.</p>
            <a
                href={ urlDownloadApp }
                target="_blank"
                rel="noreferrer"
            >
                <img 
                    src={ googlePlay }
                    alt="googlePlay"
                    className="welcomeScreen__googlePlayLogo"
                />
            </a>
        </div>
    );
};