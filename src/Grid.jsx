import { range } from './utils';

function Grid({ numRows, numCols }) {
  // Define a simple range function
  const range = (n) => Array.from({ length: n }, (_, i) => i);

  const rows = range(numRows);

  return (
    <div className="grid">
      {rows.map((rowIndex) => (
        <div key={rowIndex} className="row">
          {range(numCols).map((colIndex) => (
            <div key={colIndex} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
