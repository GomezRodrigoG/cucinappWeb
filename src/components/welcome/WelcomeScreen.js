import React from 'react';
import { LeftColumn } from './LeftColumn';
import rigthPhoto from '../../assets/RightPhoto.png';

export const WelcomeScreen = () => {
    return (
        <div className="welcome col-lg-12 col-md-12">
            <LeftColumn />
            <img 
                src={ rigthPhoto }
                alt="phoneExamples"
                className="welcomeScreen__rightPhoto"
            />
        </div>
    );
};
