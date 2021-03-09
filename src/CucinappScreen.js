import Aos from 'aos';
import React, { useEffect } from 'react';

import { ChefScreen } from './components/chefSreen/ChefScreen';
import { DownloadScreen } from './components/downloadScreen/DownloadScreen';
import { FooterScreen } from './components/footer/FooterScreen';
import { InfoScreen } from './components/infoScreen/InfoScreen';
import { WelcomeScreen } from './components/welcome/WelcomeScreen';

export const CucinappScreen = () => {
    useEffect(() => {
        Aos.init( { 
            duration:2000,
            once: true
        } );
    }, [] );

    return (
        <>
            <WelcomeScreen />
            <ChefScreen />
            <InfoScreen />
            <DownloadScreen />
            <FooterScreen />
        </>
    );
};
