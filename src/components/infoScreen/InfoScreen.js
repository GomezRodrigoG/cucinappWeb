import React from 'react'
import { Title } from '../Title'
import { SectionsContainer } from './SectionsContainer'
import clouds3 from '../../assets/Nubes3.png';

export const InfoScreen = () => {
    return (
        <>
            <div className="infoScreen__screen">
                <Title
                    title="Lo que vas a poder hacer"
                />
                <SectionsContainer />
            </div>
            <img className="infoScreen__clouds clouds" src={ clouds3 } alt=""/>
        </>
    );
};
