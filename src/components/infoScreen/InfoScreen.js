import React from 'react';
import { Title } from '../Title';
import { SectionsContainer } from './SectionsContainer';
import clouds3 from '../../assets/Nubes3.png';

export const InfoScreen = () => {
    return (
        <>
            <div className="infoScreen__screen animate__animated animate__fadeIn">
                <Title
                    title="Lo que vas a poder hacer"
                    customClassName="general__title"
                />
                <SectionsContainer />
            </div>
            <img className="infoScreen__clouds clouds" src={ clouds3 } alt=""/>
        </>
    );
};
