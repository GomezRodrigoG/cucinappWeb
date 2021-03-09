import React from 'react';
import { InfoCard } from './InfoCard';

export const Section = ({ icon1, icon2 ,title1 ,title2, text1, text2, img }) => {
    return (
        <div 
            className="infoScreen__containerSection"
            data-aos="fade-left"
        >
            <div>
                <InfoCard 
                    icon={ icon1 } 
                    title={ title1 }
                    text={ text1 }
                />
                <InfoCard 
                    icon={ icon2 }
                    title={ title2 }
                    text={ text2 }
                />
            </div>
            <div>
                { img }
            </div>
        </div>
    );
};
