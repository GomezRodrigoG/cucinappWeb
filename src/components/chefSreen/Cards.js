import React from 'react';
import { DescriptionCard } from './DescriptionCard';

const text1 = "En cucinapp vas a poder seleccionar lo que vas a comer cada día y organizar tanto tus compras, como tu consumo de calorías."
const text2 = "Con nuestra app vas a poder tener tus recetas digitalizadas siempre al alcance de un smartphone."
const text3 = "También vas a poder llevar un control de cuantas calorías contiene un producto, una receta e incluso tu plan diario."
const text4 = "Vas a poder ver el listado completo de los productos que te hacen falta para ponerte manos a la obra en la cocina."

export const Cards = () => {

    return (
        <div
            data-aos="fade-down"
            className="chefScreen_cards"
        >
            <DescriptionCard
                title=" diaria"
                spanTitle={<span className="general__textPrimaryColor individualCard1">Organización</span>}
                text={ text1 }
            />
            <DescriptionCard
                title=" papel"
                spanTitle={<span className="general__textPrimaryColor individualCard2">No más</span>}
                text= { text2 }
            />
            <DescriptionCard
                title=" tus calorías"
                spanTitle={<span className="general__textPrimaryColor individualCard3">Controlá</span>}
                text= { text3 }
            />
            <DescriptionCard
                title="Ir de "
                spanTitle={<span className="general__textPrimaryColor individualCard4">compras</span>}
                text= { text4 }
                firstSpan= { true }
            />
        </div>
    );
};
