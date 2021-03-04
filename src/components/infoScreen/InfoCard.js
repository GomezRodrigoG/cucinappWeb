import React from 'react';
import PropTypes from 'prop-types';


export const InfoCard = ({ icon, title, text }) => {
    return (
        <div className="infoScreen__containerCard">
            <div className="infoScreen__icon">
                {
                    icon
                }
            </div>
            <div className="infoScreen__containerText">
                <h6>{ title }</h6>
                <p>{ text }</p>
            </div>
        </div>
    );
};

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}