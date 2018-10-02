import React from 'react';
import PropTypes from 'prop-types';

const HomePageWidgetBox = (props) => {
    return (
        <div className="homepage-widget-box">
            <h3>{props.title}</h3>
            {props.children}
        </div>
    )
}

HomePageWidgetBox.propTypes = {
    title: PropTypes.string
}

export default HomePageWidgetBox

