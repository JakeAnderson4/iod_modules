import React from 'react';

const DataRow = ({ catergory, value, max }) => {
    return (
        <tr>
            <td className='category'>{ catergory }</td>
            <td className="stats-number">{ value }</td>
            
            {
                max &&
                <td className="range-slide">
                    <div className="range-slide-fill" style={{ "--precentage": (value / max) * 100 + '%'}}></div>
                </td>
            }
        </tr>
    );
};

export default DataRow;

//The DataRow component renders a row in a table to display a specific Pokémon stat category, its value, and an optional visual bar representing the stat's percentage of a maximum value. It takes category, value, and max as props. The category is displayed in the first cell, and the value in the second. If a max value is provided, a third cell shows a filled bar, with its width calculated as a percentage of value over max, which is applied as an inline style to visually represent the stat's proportion.
