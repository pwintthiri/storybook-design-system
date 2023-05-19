import './table.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaTimes } from 'react-icons/fa';
// import './textinput.css';



/**
 * Primary UI component for user interaction
 */
export const Table = ({ type, disabled, helpText, leadIcon, trailingIcon, error, ...props }) => {
  let mode;
  if (type === "outlined") {
    mode = "storybook-textinput-outlined";
  } else if (type === "lined") {
    mode = "storybook-textinput-lined";
  } else {
    mode = "storybook-textinput-filled";
  }
  
  // add class if error
  let changeClass;
  if (error) {
    changeClass = "error-class";
  } else if (disabled) {
    changeClass = "disabled-class";
  }

  return (
    <div className="container">
      <div className={["storybook-textinput", mode, changeClass].join(' ')}>
      {leadIcon ? (<div className="userIcon"><FaUser/></div>) : null}
        <div class="form-group">
          <input type="text" id="entered-text" className="form-input" placeholder='Label' {...props}/>
          <label for="entered-text" className="form-label">Label</label>
        </div>

        {trailingIcon ? (<div className="crossIcon"><FaTimes/></div>) : null}
      </div>
      
        {/* render this div only if helpText is true  */}
        { helpText ? (<div className="text-below">Supporting text / Error message</div>) : null}
        
    </div>
  );
};


Table.propTypes = {
  /**
   * Which mode the textbox is in
   */
  type: PropTypes.oneOf(['outlined', 'lined', 'filled']),
  /**
   * Whether the textbox is in disabled state
   */
  disabled: PropTypes.bool,
  /**
   * Whether there is Supporting text / Error message
   */
  helpText: PropTypes.bool,
  /**
   * Whether there is a lead icon
   */
  leadIcon: PropTypes.bool,
  /**
   * Whether there is a trailing icon
   */
  trailingIcon: PropTypes.bool,
  /**
   * Whether the textbox is in error state
   */
  error: PropTypes.bool,
};

Table.defaultProps = {
  type: 'outlined',
  disabled: false,
  helpText: false,
  leadIcon: false,
  trailingIcon: false,
  error: false
};
