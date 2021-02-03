import React from 'react'
import PropTypes from 'prop-types';

const Popup = ({icon}) => {
    return (
        <div className="popup-container hidden" id="meal-popup">
            <div className="popup">
                <button className="close-popup" id="close-popup">
                <i className={icon}></i>
                </button>
            </div>
        </div>
    )
}

Popup.defaultProps = {
    icon: 'fas fa-times'
}

Popup.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default Popup;