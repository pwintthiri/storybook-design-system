import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaTimes } from 'react-icons/fa';
import './textinput.css';


/**
 * Primary UI component for user interaction
 */
export const TextInput = ({ type, labelText, disabled, helpText, leadIcon, trailingIcon, error, ...props }) => {
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
  }
  if (disabled) {
    changeClass = "disabled-class";
  }


  const [inputValue, setInputValue] = useState('');

  const updateInput = (event) => {
    setInputValue(event.target.value);
  }

  const clearText = () => {
    setInputValue('');
  }

  return (
    <div className="storybook-textinput">
      {/* <div className={["storybook-textinput", mode, changeClass].join(' ')}> */}
      <div className={[ mode, changeClass].join(' ')}>

      {leadIcon ? (<div className="userIcon"><FaUser/></div>) : null}
        <div className="input-wrapper">
          <input type="text" id="entered-text" className="form-input" placeholder='Label' value={inputValue} onChange={updateInput} {...props}/>
          <label htmlFor="entered-text" className="form-label">{ labelText }</label>
        </div>

        {trailingIcon ? (<div className="crossIcon" onClick={clearText}>
          <img src={require('./assets/icons/si-clear.svg').default} />
        </div>) : null}

        {/* {trailingIcon ? (<div className="crossIcon" onClick={clearText}>
         <FaTimes/>
        </div>) : null} */}
      </div>
      
      
        {/* render this div only if helpText is true  */}
        { helpText ? (<div className="text-below">{helpText}</div>) : null}
        {console.log("error: ", error)}
        {console.log("disabled: ", disabled)}
        
    </div>
  );
};


TextInput.propTypes = {
  /**
   * Which mode the textbox is in
   */
  type: PropTypes.oneOf(['outlined', 'lined', 'filled']),
  /**
   * Text to be shown in place of Label
   */
  labelText: PropTypes.string,
  /**
   * Whether the textbox is in disabled state
   */
  disabled: PropTypes.bool,
  /**
   * Supporting text to appear below text box
   */
  helpText: PropTypes.string,
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

TextInput.defaultProps = {
  type: 'outlined',
  labelText: '',
  disabled: false,
  helpText: '',
  leadIcon: false,
  trailingIcon: false,
  error: false
};
