import './table.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaTimes } from 'react-icons/fa';
import { TextInput } from './TextInput';


/**
 * Primary UI component for user interaction
 */

export const Table = ({ type, input, ...props }) => {

  let mode;
  if (type === "lined") {
    mode = "table-lined";
  } else if (type === "unlined") {
    mode = "table-unlined";
  } else if (type === "two-columns") {
    mode = "table-two-columns";
  }

  // detect small screens
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    // Call handleResize initially to set the initial screen size
    handleResize();
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // check for valid JSON input
  const isValidJson = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }


  if (input && isValidJson(input)) {
    const data = JSON.parse(input)
    // getting keys from data[0] for header names
    const keys = Object.keys(data[0]);

    // number of columns
    const columns = keys.length;
    if (columns === 2) {
      mode = 'table-two-columns';
    }
  
    if (isTablet) {
      return (
        
        <div className={["small-table", mode].join(' ')}>
          {data.map((item) => (
            <div className="each-table" key={item.id}>
                {Object.entries(item).map(([key, value]) => (
                  <div className="data-row" key={key}>
                    <div className="table-key">{key}</div>
                    <div className="table-value">{value}</div>
                  </div>
                ))}
              </div>
          ))}
        </div>
      );
    }

    return (    
      <div className={["sia-table", mode].join(' ')} style={{gridTemplateColumns: `repeat(${columns}, auto)`}}>
        {keys.map((key) => (
          <div className='header-row' key={key}>{key}</div>
        ))}
        {data.map((item) => (
            keys.map((key) => (
              <div className="data-row" key={key}>{item[key]}</div>
            ))
        ))}
      </div>
    );
  }
  // input field empty or invalid format
  return (
    <div>No input or invalid JSON format</div>
  )
};


Table.propTypes = {
  /**
   * Type of table
   */
  type: PropTypes.oneOf(['lined', 'unlined', 'two-columns']),
  /** 
   * Data to display in the table (JSON format)
   */
  input: PropTypes.string
};


Table.defaultProps = {
  type: 'lined',
  input: '[{"Account": "Visa","Date": "10/10/2020","Amount": 100,"Terms": "2 Months"}, {"Account": "Master","Date": "08/10/2021","Amount": 200,"Terms": "3 Months"},{"Account": "Cirrus","Date": "07/10/2020","Amount": 350,"Terms": "5 Months"}]'
};


/* To check
gap between tables
padding
spacing between columns (auto/1fr)
putting gridtemplatecolumns here
*/