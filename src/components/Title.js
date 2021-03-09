import React from 'react'
import PropTypes from 'prop-types'

export const Title = ({ title, span, blackTitle = true, customClassName}) => {
    return (
        <div >
            <h2 
                className={ customClassName }
                data-aos="fade-down"
                style={{
                    color: blackTitle ? "black" : "white",
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
    customClassName: PropTypes.string.isRequired,
};