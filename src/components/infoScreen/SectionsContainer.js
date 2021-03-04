import React from 'react'
import { Section } from './Section'
import Icon from '@mdi/react';
import { mdiFoodAppleOutline, mdiFormatListBulleted, mdiCalendarToday, mdiCartVariant } from '@mdi/js';
import img1 from '../../assets/Mobile1.png';
import img2 from '../../assets/Mobile2.png';

const section1Title1 = 'Creación de recetas:';
const section1Title2 = 'Contador de calorías:';
const section1Text1 = 'Te disponibilizamos un gran número de ingredientes con precios actualizados (para Argentina) para que dejes llevar tu imaginación y crees las más deliciosas recetas.';
const section1Text2 = 'Lleva un recuento de la cantidad de calorías por día que vas consumiendo. Además, vas a tener la posibilidad de acceder a los valores nutricionales completos de cada una de tus recetas.';

const section2Title1 = 'Creación de plan alimenticio:';
const section2Title2 = 'Ir de compras:';
const section2Text1 = '¡Aprovechá tu calendario! Vas a poder agregar y planificar tus comidas a lo largo de todo el mes.';
const section2Text2 = 'A partir de los planes que crees, te damos al alcance de un botón ¡una lista de compras para que no te olvides de nada cuando vayas al súper!';

export const SectionsContainer = () => {
    return (
        <div>
            <Section 
                icon1= { <Icon path={ mdiFormatListBulleted }/>}
                icon2= { <Icon path={ mdiFoodAppleOutline } />}
                title1= { section1Title1 }
                title2= { section1Title2 }
                text1= { section1Text1 }
                text2= { section1Text2 }
                img= { <img src={ img1 } alt=""/> }
            />
            <Section 
                icon1={ <Icon path={ mdiCalendarToday } />}
                icon2={ <Icon path={ mdiCartVariant } />}
                title1= { section2Title1 }
                title2= { section2Title2 }
                text1= {  section2Text1 }
                text2= {  section2Text2 }
                img= { <img src={ img2 } alt=""/> }
            />
        </div>
    )
}
