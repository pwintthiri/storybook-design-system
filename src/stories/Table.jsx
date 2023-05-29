import './table.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaTimes } from 'react-icons/fa';
import { TextInput } from './TextInput';


/**
 * Primary UI component for user interaction
 */

export const Table = ({ type, data, ...props }) => {

  data = [
    {
      "first name": "Jane",
      "last name": "A",
      "item": "calculator",
      "age": 40,
    },
    {
      "first name": "Sam",
      "last name": "B",
      "item": "mouse",
      "age": 43,
    },
    {
      "first name": "Olivia",
      "last name": "C",
      "item": "watermelon",
      "age": 13,
    },
    {
      "first name": "Paul",
      "last name": "D",
      "item": "canvas",
      "age": 65,
    },
    {
      "first name": "Alex",
      "last name": "E",
      "item": "stapler",
      "age": 19,
    }
  ]

  // data = [
  //   {
  //     "first name": "Jane",
  //     "last name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //   },
  //   {
  //     "first name": "Sam",
  //     "last name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //   },
  //   {
  //     "first name": "Olivia",
  //     "last name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //   },
  //   {
  //     "first name": "Paul",
  //     "last name": "D",
  //   },
  //   {
  //     "first name": "Alex",
  //     "last name": "E",
  //   }
  // ]

  // getting keys from data[0] for header names
  const keys = Object.keys(data[0]);
  // number of columns
  const columns = keys.length;

  let mode;
  if (type === "lined") {
    mode = "table-lined";
  } else if (type === "unlined") {
    mode = "table-unlined";
  } else if (type === "two-columns") {
    mode = "table-two-columns";
  }

  if (columns === 2) {
    mode = 'table-two-columns';
  }
  // NEED TO MAKE IT RESPONSIVE
  const isTablet = window.innerWidth <= 768;

  if (isTablet) {
    return (
      <div className={["small-table", mode].join(' ')}>
        {data.map((item) => (
          <div className="each-table" key={item.id}>
              {Object.entries(item).map(([key, value]) => (
                <div className="table-cell" key={key}>
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
    <div className={["sia-table", mode].join(' ')}>
      {/* to create header */}
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
};


Table.propTypes = {
  /**
   * Type of table
   */
  type: PropTypes.oneOf(['lined', 'unlined', 'two-columns']),
};

Table.defaultProps = {
  type: 'lined',
  disabled: false,
  helpText: false,
  error: false
};
