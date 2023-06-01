import './table2.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaTimes } from 'react-icons/fa';
import { TextInput } from './TextInput';


/**
 * Primary UI component for user interaction
 */

export const Table2 = ({ type, numRows, numCols, ...props }) => {

  let table2Mode;
  if (type === "lined") {
    table2Mode = "table-lined";
  } else if (type === "unlined") {
    table2Mode = "table-unlined";
  } else if (type === "two-columns") {
    table2Mode = "table-two-columns";
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

  // populating the table with cells
  let cells = [];
  // const header = ["Account", "Date"]
  // const data = ["Visa", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut id autem? Debitis incidunt architecto repudiandae labore eveniet esse, eligendi voluptatibus error facere ad aliquam voluptas, maxime illum nihil. Suscipit.", 
  // "Master", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut id autem? Debitis incidunt architecto repudiandae labore eveniet esse, eligendi voluptatibus error facere ad aliquam voluptas, maxime illum nihil. Suscipit.", 
  // "Cirrus", "07/10/2020", 
  // "Amex", "1/12/1960"]
  

  const header = ["Account", "Date", "Amount", "Terms"]
  const data = ["Visa", "10/10/2020", 100, "2 Months", "Master", "08/10/2021", 200, "3 Months", "Cirrus", "07/10/2020", 350, "5 Months", 
  "Amex", "1/12/1960", 550, "7 Months"]

  const totalData = header.concat(data);

  if (isTablet) {
    const miniTable = [];

    // num of tables is rowNum, number of rows in each table is colNum
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        // push into cells entries for each mini table
        cells.push(
          <div key={`${r},${c}`} className="mini-table-content" style={{gridTemplateColumns: `repeat(${numCols}, 1fr)`}}>
            <div className="header-row">{header[c]}</div>
            <div className="data-row">{data[(r * numCols) + c]}</div>
          </div>
        )
      }
      miniTable.push(<div className={["mini-table", table2Mode].join(' ')}>{cells}</div>);
      // empty cells to add data for next mini table
      cells = [];
    }
    
    return (
      <div className="tablet-table-wrapper">
        {miniTable}
      </div>
    );
  }

  // used <= to account for header row
  for (let r = 0; r <= numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      // const content = `Row ${r + 1}, Col ${c + 1}`
      const cellClass = (r === 0) ? 'header-row' : 'data-row'
      const index = (r * numCols) + c;
      const content = totalData[index];
      cells.push(
      <div key={`${r},${c}`} className={[cellClass, table2Mode].join(' ')}>{content}</div>
      )
    }
  }

  return (
  <div className='table2' style={{gridTemplateColumns:`repeat(${numCols}, auto)`}}>{cells}</div>
  );
};


Table2.propTypes = {
  /**
   * Type of table
   */
  type: PropTypes.oneOf(['lined', 'unlined', 'two-columns']),
  /** 
   * Number of rows in table
   */
  numRows: PropTypes.number,
  /** 
   * Number of columns in table
   */
  numCols: PropTypes.number, // limit to > 0
};


Table2.defaultProps = {
  type: 'lined',
  numRows: 3,
  numCols: 4,
  input: '[{"Account": "Visa","Date": "10/10/2020","Amount": 100,"Terms": "2 Months"}, {"Account": "Master","Date": "08/10/2021","Amount": 200,"Terms": "3 Months"},{"Account": "Cirrus","Date": "07/10/2020","Amount": 350,"Terms": "5 Months"}]'
};