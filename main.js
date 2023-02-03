const container = document.querySelector('.container');
var aa=0;

function makeRows(rows, cols) { //create the grid range x range, but initial is 10 x 10
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    var cell = document.createElement('div');
    cell.classList.add('grid-item');
    container.appendChild(cell);
  };

  var change = document.getElementsByClassName('grid-item'); //toggle cell color
  for (var i = 0 ; i < change.length; i++) {
    change[i].onmouseover=function (e) {
      var rainbowr = document.getElementById('rainbow'); //check the RAinbow button and change colors
      rainbowr.addEventListener('click', function()  {
        aa=1;
        console.log('true true '+aa);
        return aa;
      });
      var blackC= document.getElementById('black'); // check the Black button and change to black
      blackC.addEventListener('click', function (){
        aa=0;
        console.log('true true 2 '+aa);
        return aa;
      });
      if(aa==1){
        var color =  "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
        e.target.style.backgroundColor=color;
      }else{
        //e.target.classList.toggle('show');
        e.target.style.backgroundColor='black';
      }
    };
  }

  var resettColor= document.getElementById('resett'); // reset to inicial color 
  resettColor.addEventListener('click', function (){
    for (var i = 0 ; i < change.length; i++) {
      change[i].classList.remove('show');
      change[i].classList.remove('showR');
      change[i].style.backgroundColor='white';
    }  
  });
  
  var range=document.getElementById('range'); 
  range.addEventListener('click', rangeFunction);
  function rangeFunction (){ 
    var children = container.childNodes; // the grid need to be cleaner before generate new grid
      for (var i=children.length - 1; i>-1; i--) {
        container.removeChild(children[i]);
      }
   range=document.getElementById("range").value;//get range value andcreate a new grid according
   range=parseInt(range);
   makeRows(range, range);
  };

};  
makeRows(10, 10);