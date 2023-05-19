import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './card.css';
import { Button } from './Button.jsx';
import { FaStar, FaRegStar } from 'react-icons/fa';



/**
 * Primary UI component for user interaction
 */
export const Card = ({ orientation, titleText, subtitle, subtitleText, button, buttonText, media, mediaURL, subcontent, inverted, ...props }) => {
  let mode;
  if (inverted) {
    mode = 'inverted-class';
  }
  return (
    <div className={["storybook-card", mode, orientation].join(' ')}>
        {mediaURL && <img class="card-img" src={mediaURL} alt="Card Image"></img>}
        <div className="storybook-card-text">

            <div className="card-header">
                {titleText}
                {subtitle && <div className="card-subtitle">{subtitleText}</div>}
            </div>
            {/* <FaStar/><FaRegStar/> */}
        


            <div className="card-content">Card description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes hereCard description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes here</div>
            {subcontent && <div className="card-content separator">Card description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes hereCard description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes here</div>}
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
    titleText: PropTypes.string.isRequired,
    /**
     * Whether there is a subtitle in the card
     */
    subtitle: PropTypes.bool,
    /**
     * Text to be written in the subtitle
     */
    subtitleText: PropTypes.string.isRequired,
    /**
     * Whether there is a button in the card
     */
    button: PropTypes.bool,
    /**
     * Text to be displayed in button
     */
    buttonText: PropTypes.string,
    /**
     * Whether there is media in the card
    */
    media: PropTypes.bool,
    /**
     * URL for media to be displayed in card
    */
    mediaURL: PropTypes.string,
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
    titleText: 'Add title',
    subtitle: false,
    subtitleText: 'Add Subtitle',
    button: false,
    buttonText: 'Insert text',
    media: false,
    mediaURL: '',
    subcontent: false,
    invert: false
};



// <div className={["storybook-card", mode].join(' ')}>
//         <div className="storybook-card-text">
            
//         </div>
//         <div className="card-header">
//             <div className="card-title">{titleText}</div>
//             {subtitle && <div className="card-subtitle">{subtitleText}</div>}
//         </div>
//         <div className="card-content">Card description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes hereCard description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes here</div>
    
//         {subcontent && <div className="card-content separator">Card description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes hereCard description goes here Card description goes hereCard description goes hereCard description goes hereCard description goes here</div>}
//         {button && <div className="action-btn">
//             <Button label="More" onClick={() => {}} rounded type="secondary"/>
//         </div>}
//     </div>