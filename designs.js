const submit = document.querySelector('#submit');
const table = document.querySelector('#pixelCanvas');
const myColor = document.querySelector('#colorPicker');
const form = document.querySelector('#sizePicker');

form.addEventListener('submit', function respondToSubmit(event) {
  let x = form.querySelector('#inputHeight').value;
  let y = form.querySelector('#inputWidth').value;
  event.preventDefault();
  makeGrid(x,y);
});

function makeGrid(x, y) {
  // x - number of rows
  // y - number of columns
  let tableContents = '';
  for (let i = 1; i <= x; i++) {
    tableContents += '<tr id="row' + i + '">';
    for (let j = 1; j <= y; j++) {
      tableContents += '<td></td>';
    }
    tableContents += '</tr>';
  }
  table.innerHTML = tableContents;

  cellColor(); // Called the function cellcolor inisde makegrid

}

function cellColor() {          // Define cellcolor function
  let cells = document.getElementsByTagName('td');
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function(event) {
      event.target.style.backgroundColor = myColor.value;
    });
  }
}
