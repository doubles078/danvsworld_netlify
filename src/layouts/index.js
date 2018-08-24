import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


import '../assets/styles/main.scss';

const TemplateWrapper = ({ children }) => (
    <div>
      <Helmet
        title="Robomo.io - A Blog for Technical Marketers and Automators"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />    
      <div>
        {children()}
      </div>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

