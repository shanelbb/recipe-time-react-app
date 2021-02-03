import React from 'react';
import PropTypes from 'prop-types';


const Header = ({icon}) => {
    return (
        <header>
        <input type="text" id="searchTerm" />
        <button id="searchBtn"><i className={icon}></i></button>
      </header>
    )
}

Header.defaultProps = {
    icon: "fas fa-search"
}

Header.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default Header;