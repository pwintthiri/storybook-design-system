import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './card.css';
import { Button } from './Button.jsx';
import { FaStar, FaRegStar } from 'react-icons/fa';



/**
 * Primary UI component for user interaction
 */
export const Card = ({ orientation, content, titleText, subtitleText, button, buttonText, mediaURL, subcontent, inverted, rating, ...props }) => {
  const MAX_RATING = 5;

  let mode;
  if (inverted) {
    mode = 'inverted-class';
  }

  return (
    <div className={["storybook-card", mode, orientation].join(' ')}>
        {/* {mediaURL &&  */}
        {/* <div className="card-img"> */}
            {/* <img src={mediaURL} alt="Card Image"></img> */}
        {/* </div> */}
        {/* } */}
        {mediaURL && <img class="card-img" src={mediaURL} alt="Card Image"></img>}
        <div className="storybook-card-text">

            <div className="card-header">
                <div className="card-title">{titleText}</div>
                <div className="card-subtitle">{subtitleText}</div>
            </div>

            {orientation === 'horizontal' && rating &&
            <div className="star-container">
                {[...Array(MAX_RATING)].map((_, index) => (
                index < rating ? 
                (<FaStar key={index} className="star" />) : 
                (<FaRegStar key={index} className="star" />)))}
            </div>
            }

            <div className="card-content">{content}</div>
            {subcontent && <div className="card-content separator">{subcontent}</div>}
            {button && <div className="action-btn">
                <Button label={buttonText} onClick={() => {}} rounded type="secondary"/>
            </div>}

        </div>
        
    </div>
    
  );
};

Card.propTypes = {
    /**
     * Type of card
     */
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    /**
     * Text to be written in the title
     */
    titleText: PropTypes.string,
    /**
     * Text to be written in the subtitle
     */
    subtitleText: PropTypes.string,
    /**
     * Whether there is a button in the card
     */
    button: PropTypes.bool,
    /**
     * Text to be displayed in button
     */
    buttonText: PropTypes.string,
    /**
     * URL for media to be displayed in card
    */
    mediaURL: PropTypes.string,
    /**
     * Text to be written in the subtitle
     */
    content: PropTypes.string,
    /**
     * Text for subcontent
     */
    subcontent: PropTypes.string,
    /**
     * Number of stars given for the review
     */
    rating: PropTypes.string,
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
    titleText: 'Add title',
    subtitleText: '',
    content: 'Add content here',
    subcontent: '',
    button: false,
    buttonText: 'Insert text',
    mediaURL: '',
    rating: '',
    invert: false
};