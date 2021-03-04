import React from 'react'
import { Title } from '../Title'
import clouds4 from '../../assets/Nubes4.png';
import { urlDownloadApp } from '../../utils/constants';

export const DownloadScreen = () => {
    return (
        <div className="downloadScreen__container">
            <Title
                title="Comenzá ahora. "
                span={ <span className="general__blackText">ES GRATIS</span> }
            />
            <p><strong>Guardá</strong> tus recetas, <strong>organizá</strong> tus comidas y las <strong>calorías</strong><br/> que consumís, armá tu lista de <strong>compras</strong> y más.<br/> Todo eso con <strong className="general__textPrimaryColor general__heavyText">CUCINAPP</strong>.</p>
            <a href={ urlDownloadApp } target="_blank">
                <div
                    className="downloadScreen_button pointer"
                >
                    <p>Descargar Ahora</p>
                </div>
            </a>
            <img className="downloadScreen__clouds clouds" src={ clouds4 } alt=""/>
        </div>
    );
};
