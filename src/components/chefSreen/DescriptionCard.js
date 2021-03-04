import React from 'react'
import PropTypes from 'prop-types'

export const DescriptionCard = ({title, spanTitle, text, firstSpan = false}) => {
    return (
        <div
            className="chefScreen__individualCard"
        >
            <h5 className="chefScreen__cardTitle">
                { firstSpan ? title : spanTitle }
                { firstSpan ? spanTitle : title }
            </h5>
            <p className="chefScreen__cardText">{ text }</p>
        </div>
    );
};

DescriptionCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}