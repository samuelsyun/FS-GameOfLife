let gameOfLife = {
  height: 12,
  width: 12, // width and height dimensions of the board
  stepInterval: null, // should be used to hold reference to an interval that is "playing" the game

  createAndShowBoard: function () {
    // create <table> element
    let goltable = document.createElement("tbody");

    // build Table HTML
    let tablehtml = '';
    for (let h = 0; h < this.height; h++) {
      tablehtml += `<tr id='row+${h}'>`;

      for (let w = 0; w < this.width; w++) {
        tablehtml += `<td data-status='dead' id='${w}-${h}'></td>`;
      }
      tablehtml += "</tr>";
    }
    goltable.innerHTML = tablehtml;

    // add table to the #board element
    let board = document.getElementById('board');
    board.appendChild(goltable);

    // once html elements are added to the page, attach events to them
    this.setupBoardEvents();
  },

  forEachCell: function (iteratorFunc) {
    /*
      Write forEachCell here. You will have to visit
      each cell on the board, call the "iteratorFunc" function,
      and pass into func, the cell and the cell's x & y
      coordinates. For example: iteratorFunc(cell, x, y)
    */

    //  for (let h = 0; h < this.height; h++) {
    //    for (let w = 0; w < this.width; w++) {
    //      let cell = document.getElementById(`${w}-${h}`);
    //      iteratorFunc(cell, h, w);
    //    }
    //  }

    Array.from(document.getElementsByTagName('td')).forEach(cell => {
      let coords = this.getCoordsOfCell(cell);
      iteratorFunc(cell, coords[0], coords[1]);
    })
  },

  getCoordsOfCell: function(cell) {
    let cellId = cell.id;
    let idSplit = cellId.split('-');

    return idSplit.map(coodStr => +coodStr);
  },

  setupBoardEvents: function () {
    // each board cell has an CSS id in the format of: "x-y"
    // where x is the x-coordinate and y the y-coordinate
    // use this fact to loop through all the ids and assign
    // them "click" events that allow a user to click on
    // cells to setup the initial state of the game
    // before clicking "Step" or "Auto-Play"

    // clicking on a cell should toggle the cell between "alive" & "dead"
    // for ex: an "alive" cell be colored "blue", a dead cell could stay white

    // EXAMPLE FOR ONE CELL
    // Here is how we would catch a click event on just the 0-0 cell
    // You need to add the click event on EVERY cell on the board

    let onCellClick = function (e) {

      // QUESTION TO ASK YOURSELF: What is "this" equal to here?

      // how to set the style of the cell when it's clicked
      if (this.dataset.status == 'dead') {
        this.className = 'alive';
        this.dataset.status = 'alive';
      } else {
        this.className = 'dead';
        this.dataset.status = 'dead';
      }
    };

    this.forEachCell((cell, h, w) => {
      cell.onclick = onCellClick;
    })
  },

  step: function () {
    // Here is where you want to loop through all the cells
    // on the board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the next
    // evolution of the game.
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells based on their alive neighbors
  },

  enableAutoPlay: function () {
    // Start Auto-Play by running the 'step' function
    // automatically repeatedly every fixed time interval
  }

};

gameOfLife.createAndShowBoard();
