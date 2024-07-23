import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Price</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{entry.price}</td>
            <td>{new Date(entry.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
