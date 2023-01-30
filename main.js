const container = document.querySelector('.container');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    var cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.textContent = (c+1);
    container.appendChild(cell);
  };

  var change = document.querySelectorAll('.grid-item');
  for (var i = 0 ; i < change.length; i++) {
    change[i].addEventListener('click', function (e) {
    e.target.classList.toggle('show');
    });
 }
 
};
makeRows(16, 16);