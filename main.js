const container = document.querySelector('.container');

function makeRows(rows, cols) { //create the grid 16x16
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    var cell = document.createElement('div');
    cell.classList.add('grid-item');
    //cell.textContent = (c+1);
    container.appendChild(cell);
  };

  var change = document.getElementsByClassName('grid-item'); //toggle cell color
  for (var i = 0 ; i < change.length; i++) {
    change[i].addEventListener('click', function (e) {
    e.target.classList.toggle('show');
    });
  }

  var resett= document.getElementById('resett'); // reset the to inicial color 
  resett.addEventListener('click', function (){
    for (var i = 0 ; i < change.length; i++) {
      change[i].classList.remove('show');
      //change[i].style.backgroundColor='green'; ok its work as wells
    }  
  });
};
makeRows(16,16);