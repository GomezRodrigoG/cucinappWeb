import React from 'react';
import 'aos/dist/aos.css';

import clouds1 from '../../assets/Nubes1.png';
import clouds2 from '../../assets/Nubes2.png';
import { Title } from '../Title';
import { Cards } from './Cards';

export const ChefScreen = () => {
    return (
        <div
            className="chefScreen__screen"
        >
            <img
                src={ clouds1 }
                alt=""
                className="chefScreen__clouds1 clouds"
            />
            {
                <>
                    <div 
                        className="chefScreen__body animate__animated animate__fadeIn"
                    >
                        <Title 
                            title="Mantené tu cocina organizada con "
                            span={<span className="general__textPrimaryColor">Cucinapp</span>}
                            blackTitle ={ false }
                            customClassName= "general__titleMaxWidth"
                        />
                        <Cards />
                    </div>
                    <img
                        src={ clouds2 }
                        alt=""
                        className="chefScreen__clouds2 clouds"
                    />
                </>
            }
        </div>
    );
};
