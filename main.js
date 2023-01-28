const container = document.querySelector('.container');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    var cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.textContent = (c+1);
    container.appendChild(cell);
    //console.log('create cell ' +(cell.classList));
  };
  
  var change = document.getElementsByClassName('grid-item');
  //console.log('this '+change+' '+(change.length));

  for (var i = 0 ; i < change.length; i++) {
    //console.log('inside for');
    change[i].addEventListener('click', function (e) {
    //console.log('inside click');
    e.target.style.backgroundColor = 'blue';
    });
 }

};
  
//const change1 = document.getElementsByClassName('.grid-item');
//change1.style.background = 'black';
/*function toggleModal(){
  div.classList.toggle('show');  
}
//change1.addEventListener('click', toggleModal);*/

//change1.addEventListener('click', function (e) {
//  e.target.style.background = 'blue';
//});

makeRows(16, 16);