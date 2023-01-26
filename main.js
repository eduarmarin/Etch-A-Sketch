const container = document.querySelector('.container');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    const cell = document.createElement('div');
    cell.classList.add('griditem');
    cell.textContent = 'new';
    container.appendChild(cell);
  };
};

makeRows(16, 16);