import React from 'react'

const Table = ({ heading, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {heading.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((rowItem, j) => (
              <td key={j}>{rowItem}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
