import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { FaUser } from 'react-icons/fa';


/**
 * Primary UI component for user interaction
 */
export const Button = ({ rounded, type, label, icon, disabled, ...props }) => {
    let border;
    if (rounded) {
        border = "storybook-button-rounded";
    }
    let mode;
    if (disabled) {
        mode = "disabled-class";
    }
  
  return (
    <button
      type="button"
      className={["storybook-button", border, mode, `${type}`].join(' ')}
      {...props}
    >
        {icon ? <div className="button-userIcon">
            <i class="si si-cross"></i>
        </div> : null}
{/* 
        {icon ? <div className="button-userIcon">
            <FaUser />
        </div> : null} */}
        {label}
        
    </button>
  );
};

Button.propTypes = {
  /**
   * Should the button be rounded?
   */
  rounded: PropTypes.bool,
  /**
   * Type of button
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * Text to be written in the button
   */
  label: PropTypes.string.isRequired,
   /**
   * Whether the button has a leading icon
   */
   icon: PropTypes.bool,
   /**
   * Whether the button is disabled
   */
   disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  rounded: false,
  label: 'null',
  icon: false,
  disabled: false,
  onClick: undefined,
};
