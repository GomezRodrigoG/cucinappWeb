import React from 'react'
import { ChefScreen } from './components/chefSreen/ChefScreen'
import { DownloadScreen } from './components/downloadScreen/DownloadScreen'
import { FooterScreen } from './components/footer/FooterScreen'
import { InfoScreen } from './components/infoScreen/InfoScreen'
import { WelcomeScreen } from './components/welcome/WelcomeScreen'

export const CucinappScreen = () => {
    return (
        <>
            <WelcomeScreen />
            <ChefScreen />
            <InfoScreen />
            <DownloadScreen />
            <FooterScreen />
        </>
    )
}
