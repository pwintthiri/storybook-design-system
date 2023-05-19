import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './card.css';

import { Button } from './Button.jsx';


/**
 * Primary UI component for user interaction
 */
export const Card = ({ orientation, subtitle, button, media, subcontent, inverted, ...props }) => {
  
  return (
    <div className="storybook-card">
        <div className="card-header">
            <div className="card-title">Card Title</div>
            <div className="card-subtitle">Price</div>
        </div>
        <div className="card-content">Card description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes hereCard description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes here</div>
        <div className="separator"></div>
        <div className="card-content">Card description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes hereCard description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes here</div>
        <div className="action-btn"><Button /></div>
    </div>
    
  );
};

Card.propTypes = {
   /**
   * Type of card
   */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * Whether there is a subtitle in the card
   */
  subtitle: PropTypes.bool,
  
  /**
   * Whether there is a button in the card
   */
  button: PropTypes.bool,
   /**
   * Whether there is media in the card
   */
   media: PropTypes.bool,
   /**
   * Whether there is subcontent in the card
   */
   subcontent: PropTypes.bool,
   /**
   * Whether colours are inverted
   */
   inverted: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
    orientation: 'vertical',
    subtitle: false,
    button: false,
    media: false,
    subcontent: false,
    invert: false
};

