import React from 'react'
import PropTypes from 'prop-types'

export const Title = ({ title, span, blackTitle = true, maxWidth}) => {
    return (
        <div>
            <h2 
                className="general__title"
                style={{
                    color: blackTitle ? "black" : "white",
                    width: maxWidth ? 700 : null
                }}
            >
                {
                    title
                }
                {
                    span ?? span
                }
            </h2>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};