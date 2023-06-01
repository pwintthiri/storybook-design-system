import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './_button2.css';
import '../assets/scss/components/_button2.scss'
import { FaUser } from 'react-icons/fa';


/**
 * Primary UI component for user interaction
 */
export const Button2 = ({ rounded, type, label, icon, disabled, ...props }) => {
    let border;
    if (rounded) {
        border = "button2-rounded";
    }
    let mode;
    if (disabled) {
        mode = "disabled-class";
    }
  
  return (
    <div className={["button2", border, mode, `${type}`].join(' ')}>
      {icon ? <div className="button-userIcon">
            <FaUser />
        </div> : null}

        <div className="button-label">{label}</div>
    </div>
  );
};

Button2.propTypes = {
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

Button2.defaultProps = {
  rounded: false,
  label: 'null',
  icon: false,
  disabled: false,
  onClick: undefined,
};
