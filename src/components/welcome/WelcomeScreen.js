import React from 'react';
import { LeftColumn } from './LeftColumn';
import rigthPhoto from '../../assets/RightPhoto.png';

export const WelcomeScreen = () => {
    return (
        <div className="welcome">
            <LeftColumn />
            <img 
                src={ rigthPhoto }
                alt="phoneExamples"
                className="welcomeScreen__rightPhoto animate__animated animate__bounceInRight"
            />
        </div>
    );
};
