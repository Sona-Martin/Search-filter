// import React from 'react'
// import './DataTable.css'
// const DataTable = () => {
//   return (
//     <div>
//         <div className="data_table__filter"></div>
//         <div className="data_table__table">
//             <table className='taable__table'>
//                 <thead >
//                     <tr>
//                         <div className='table__thead'>
//                                 <th>sl</th>
//                                 <th>name</th>
//                                 <th>status</th>
//                         </div>
//                         <tbody className='table__body'>
//                             <tr>
//                                 <td>1</td>
//                                 <td>suni</td>
//                                 <td>approved</td>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>suni</td>
//                                 <td>approved</td>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>suni</td>
//                                 <td>approved</td>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>suni</td>
//                                 <td>approved</td>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>suni</td>
//                                 <td>approved</td>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>suni</td>
//                                 <td>approved</td>
//                             </tr>
//                         </tbody>
//                     </tr>
//                 </thead>
//             </table>
//         </div>

//     </div>
//   )
// }

// export default DataTable

import React, { useState } from "react";
import { IoIosFunnel } from "react-icons/io";
import './DataTable.css'
const DataTable = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    stage: {
      initialAuth: false,
      enhanced: false,
      discharge: false,
      finalAuth: false,
    },
    status: {
      pending: false,
      tpaQuery: false,
    },
  });

  const handleFilterChange = (filterType, filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: {
        ...prevFilters[filterType],
        [filterName]: !prevFilters[filterType][filterName],
      },
    }));
  };

  return (
    <div>
      <div>
        <div className="filter__main">
        <h2>
          <IoIosFunnel onClick={() => setShowFilter(!showFilter)} />
          Filter
        </h2>
        </div>
        {showFilter && (
        <div className="filter__content">
          <div className="filter">
            <div>
              <div className="filter__head"><h4>Stage</h4></div>
              <div className="filter__body">
              <label>
                <input
                  type="checkbox"
                  checked={filters.stage.initialAuth}
                  onChange={() => handleFilterChange("stage", "initialAuth")}
                />
                Initial Auth
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.stage.enhanced}
                  onChange={() => handleFilterChange("stage", "enhanced")}
                />
                Enhanced
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.stage.discharge}
                  onChange={() => handleFilterChange("stage", "discharge")}
                />
                Discharge
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.stage.finalAuth}
                  onChange={() => handleFilterChange("stage", "finalAuth")}
                />
                Final Auth
              </label>
              </div>
            </div>
            
            <div>
            <div className="filter__head"><h4>Status</h4></div>
            <div className="filter__body">
              <label>
                <input
                  type="checkbox"
                  checked={filters.status.pending}
                  onChange={() => handleFilterChange("status", "pending")}
                />
                Pending
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.status.tpaQuery}
                  onChange={() => handleFilterChange("status", "tpaQuery")}
                />
                TPA Query
              </label>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
      <hr />
      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "teal", color: "white" }}>
            <th>Claim ID</th>
            <th>Name</th>
            <th>Ailment</th>
            <th>SLA</th>
            <th>P-tat</th>
            <th>Stage</th>
            <th>Status</th>
            <th>Approved Amount</th>
            <th>Hospital</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`table_font_color ${1 % 2 === 0 ? 'table-striped' : ''}`}>
            <td>1JBJ23455</td>
             <td>sunitha</td>
             <td>heart attack</td>
             <td>25%</td>
             <td>2 Days</td>
             <td>Discharge</td>
             <td>pending approval</td>
             <td>Rs. 11,23,000</td>
             <td>MIOT Hospital</td>

          </tr>
          <tr className={`table_font_color ${2 % 2 === 0 ? 'table-striped' : ''}`}>
            <td>1JBJ23455</td>
             <td>sunitha</td>
             <td>heart attack</td>
             <td>25%</td>
             <td>2 Days</td>
             <td>Discharge</td>
             <td>pending approval</td>
             <td>Rs. 11,23,000</td>
             <td>MIOT Hospital</td>

          </tr>
          <tr className={`table_font_color ${3 % 2 === 0 ? 'table-striped' : ''}`}>
            <td>1JBJ23455</td>
             <td>sunitha</td>
             <td>heart attack</td>
             <td>25%</td>
             <td>2 Days</td>
             <td>Discharge</td>
             <td>pending approval</td>
             <td>Rs. 11,23,000</td>
             <td>MIOT Hospital</td>

          </tr>
          <tr className={`table_font_color ${4 % 2 === 0 ? 'table-striped' : ''}`}>
            <td>1JBJ23455</td>
             <td>sunitha</td>
             <td>heart attack</td>
             <td>25%</td>
             <td>2 Days</td>
             <td>Discharge</td>
             <td>pending approval</td>
             <td>Rs. 11,23,000</td>
             <td>MIOT Hospital</td>

          </tr>
          <tr className={`table_font_color ${5 % 2 === 0 ? 'table-striped' : ''}`}>
            <td>1JBJ23455</td>
             <td>sunitha</td>
             <td>heart attack</td>
             <td>25%</td>
             <td>2 Days</td>
             <td>Discharge</td>
             <td>pending approval</td>
             <td>Rs. 11,23,000</td>
             <td>MIOT Hospital</td>

          </tr>
          <tr className={`table_font_color ${6 % 2 === 0 ? 'table-striped' : ''}`}>
            <td>1JBJ23455</td>
             <td>sunitha</td>
             <td>heart attack</td>
             <td>25%</td>
             <td>2 Days</td>
             <td>Discharge</td>
             <td>pending approval</td>
             <td>Rs. 11,23,000</td>
             <td>MIOT Hospital</td>

          </tr>
          <tr className={`table_font_color ${7 % 2 === 0 ? 'table-striped' : ''}`}>
          <td>1JBJ23455</td>
             <td>sunitha</td>
             <td>heart attack</td>
             <td>25%</td>
             <td>2 Days</td>
             <td>Discharge</td>
             <td>pending approval</td>
             <td>Rs. 11,23,000</td>
             <td>MIOT Hospital</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
