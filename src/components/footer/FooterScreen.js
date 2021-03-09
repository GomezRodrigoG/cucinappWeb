import React from 'react';
import logo from '../../assets/LogoFooter.png';

export const FooterScreen = () => {
    return (
        <>
            <div className="footerScreen__container">
                <div className="footerScreen__row">
                    <img src={ logo } alt=""/>
                    <p>Cucinapp</p>
                </div>
                <p className="footerScreen__copyright">©  Copyright  2021 Cucinapp . Todos los Derechos Reservados.</p>
            </div>
        </>
    );
};
