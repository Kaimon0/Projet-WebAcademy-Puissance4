class Puissance4 {
  constructor(options) {
    //options modulable
    this.caseX = options.caseX; //row
    this.caseY = options.caseY; //column
    this.color1 = options.color1; //couleur j1
    this.color2 = options.color2; //couleur j2

    //methodes createGrid
    this.grid;
    this.board;
    this.tile;
    this.p;
    this.i;
    this.l;
    this.r;
    this.c;
    this.row;
    this.columns;
    this.columnsContainer;
    this.classTile;
    this.tileId;
    this.newTile;

    //methodes setPieces
    this.gameOver = false;
    this.coords;
    this.piece1;
    this.piece2;
    this.x;
    this.y;
    this.currColumns = [];
    this.currColomnsRow = [];

    //fonction permettant de designer quel joueur commencera
    this.player1 = 1;
    this.player2 = 2;
    // this.startPlayer;
    this.currPlayer;

    //methodes pieceColor
    this.colorArray;

    this.round = document.querySelector("#round");

    this.winner = false;

    this.replay = false;
    // this.replayBtn = document.querySelector("#replayBtn")
    // this.replayBtn.style.display = "none";

    
    // if(this.replay == true) {
    // console.log(this.replay)
    // }
  

    this.gridNbr = 0
  }

  createGrid() {
    //grid base
    // console.log(this.currPlayer);
    // console.log(this.startPlayer)
    
    this.columns = this.caseY;

    this.rows = this.caseX;

    this.grid = document.createElement("div");
    this.grid.id = "grid_" + this.gridNbr;
    this.grid.style.width = 6.6 * this.caseY + "rem";
    this.grid.style.height = 6.6 * this.caseX + "rem";
    this.grid.style.padding = "0.4rem";
    this.grid.style.borderRadius = "3%";
    this.grid.style.border = "solid 2px #DF7DD9";
    this.grid.style.boxShadow = " 3px 5px #DF7DD9";
    this.grid.style.display = "flex";
    this.grid.style.flexDirection = "column";
    this.grid.style.flexWrap = "wrap";
    document.body.appendChild(this.grid).lastChild;
    // console.log(this.grid.style.weight);

    this.board = [];

    // for (this.i = 0; this.i < this.rows; this.i++) {
    //     this.currColumns.push(this.columns);

    //     // for (this.l = 0; this.l < this)
    // }

    console.log("curr: " + this.currColumns);

    for (this.r = 0; this.r < this.rows; this.r++) {
      this.row = [];
      // this.columnsContainer = document.createElement("div");
      this.rowsContainer = document.createElement("div");
      this.rowsContainer.style.display = "flex";
      this.rowsContainer.style.flexDirection = "row";

      for (this.c = 0; this.c < this.columns; this.c++) {
        this.row.push(" ");

        this.tile = document.createElement("div");
        this.tile.id = this.r.toString() + "_" + this.c.toString();
        this.tile.classList.add("tile");

        this.tile.addEventListener("click", (event) => {
          event.preventDefault();
          this.newTile = event.target;
          this.tileId = this.newTile.id;

          // if (this.winner == false && this.replay == false) {
          //   this.setPieces();
          //   console.log(this.replay)
          // }
            this.setPieces();
            
          // this.animation();
        });

        this.rowsContainer.appendChild(this.tile);

        // this.columnsContainer.appendChild(this.tile);
        // this.columnsContainer.style.display = "flex";
        // this.columnsContainer.style.flexDirection = "column";
      }

      // this.columnsContainer.forEach(columnsId => {
      //     this.p = 0;
      //     if this.
      //     columnsId.id = this.p.toString();
      //     this.p++;
      // })

      // this.grid.append(this.columnsContainer);
      this.grid.appendChild(this.rowsContainer);

      console.log(this.row);
      this.board.push(this.row);

      // this.grid.prepend(this.columnsContainer);
      // this.board.unshift(this.row);
    }

    //grid style
    this.grid.style.backgroundColor = "#f3cff1";
    this.classTile = document.querySelectorAll(".tile");
    this.classTile.forEach((tile) => {
      tile.style.backgroundColor = "#FFF5D1";
      tile.style.boxShadow = "2px 5px #DF7DD9";
      tile.style.width = "5.8rem";
      tile.style.height = "5.8rem";
      tile.style.margin = "0.3rem";
      tile.style.borderRadius = "50%";
      tile.style.border = "1px solid #DF7DD9";
      tile.addEventListener("mouseover", () => {
        tile.style.cursor = "pointer";
      });
    });

    this.setStartPlayer()
  }

  setStartPlayer(){
    this.startPlayer = Math.floor(Math.random() * (3 - 1) + 1);

    if (this.startPlayer == this.player1) {
      this.round.innerText = "Le joueur 1 commence";
      this.currPlayer = this.player1;
      this.startPlayer = null;
    } else if (this.startPlayer == this.player2) {
      this.round.innerText = "Le joueur 2 commence";
      this.currPlayer = this.player2;
      this.startPlayer = null;
    }
  }

  setPieces() {
   

    if (this.gameOver) {
      return;
    }

    this.coords = this.tileId.split("_");
    this.x = parseInt(this.coords[0]);
    this.y = parseInt(this.coords[1]);

    let lowestEmptyRow = -1;
    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.board[row][this.y] === " ") {
        lowestEmptyRow = row;
        break;
      }
    }

    // if (lowestEmptyRow === -1) {
    //     return;
    // }

    // console.log("boad:" + this.board);

    // if (this.x < 0) {
    //     return;
    // }

    console.log("this.x:", this.x);
    console.log("this.y:", this.y);
    console.log("this.tileId", this.tileId);
    console.log("this.board:", this.board);
    console.log(lowestEmptyRow);

    // this.board[this.x][this.y] = "player" + this.currPlayer;
    // this.tile = document.querySelector(this.x.toString() + "_" + this.y.toString());
    // this.tile = this.newTile;

    this.board[lowestEmptyRow][this.y] = "player" + this.currPlayer;
    this.tileId = lowestEmptyRow.toString() + "_" + this.y.toString();
    this.tile = document.querySelector(this.tileId);

    // let roundP1;
    // let roundP2;

    // let roundP2 = document.createElement("h3");

    if (this.currPlayer == this.player1) {
      this.tile.classList.add("piece1");
      this.piece1 = document.querySelectorAll(".piece1");
      this.piece1.forEach((stylePiece1) => {
        stylePiece1.style.backgroundColor = "#ffbacd";
      });

      this.currPlayer = this.player2;

      round.innerHTML = "C'est au tour du joueur 2";

      // if (!roundP1.innerText == " ") {
      //     roundP1.remove();
      // }
    } else if (this.currPlayer == this.player2) {
      this.tile.classList.add("piece2");
      this.piece2 = document.querySelectorAll(".piece2");
      this.piece2.forEach((stylePiece2) => {
        stylePiece2.style.backgroundColor = "#c5f697";
      });

      this.currPlayer = this.player1;

      round.innerHTML = "C'est au tour du joueur 1";

      // if (!roundP2.innerText == " ") {

      //     roundP2.remove();
      // }
    }

    this.checkWinner();
    if (this.winner == true) {
      this.replayGame();
    }
  }

  checkWinner() {
    //horizontal

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns - 3; c++) {
        if (this.board[r][c] != " ") {
          if (
            this.board[r][c] == this.board[r][c + 1] &&
            this.board[r][c + 1] == this.board[r][c + 2] &&
            this.board[r][c + 2] == this.board[r][c + 3]
          ) {
            this.setWinner(r, c);
            return (this.winner = true);
          }
        }
      }
    }

    //vertical
    for (let c = 0; c < this.columns; c++) {
      for (let r = 0; r < this.rows - 3; r++) {
        if (this.board[r][c] != " ") {
          if (
            this.board[r][c] == this.board[r + 1][c] &&
            this.board[r + 1][c] == this.board[r + 2][c] &&
            this.board[r + 2][c] == this.board[r + 3][c]
          ) {
            this.setWinner(r, c);
            return (this.winner = true);
          }
        }
      }
    }
    //anti-diagonnal
    for (let r = 0; r < this.rows - 3; r++) {
      for (let c = 0; c < this.columns - 3; c++) {
        if (this.board[r][c] != " ") {
          if (
            this.board[r][c] == this.board[r + 1][c + 1] &&
            this.board[r + 1][c + 1] == this.board[r + 2][c + 2] &&
            this.board[r + 2][c + 2] == this.board[r + 3][c + 3]
          ) {
            this.setWinner(r, c);
            return (this.winner = true);
          }
        }
      }
    }

    // diagonnal

    for (let r = 3; r < this.rows; r++) {
      for (let c = 0; c < this.columns - 3; c++) {
        if (this.board[r][c] != " ") {
          if (
            this.board[r][c] == this.board[r - 1][c + 1] &&
            this.board[r - 1][c + 1] == this.board[r - 2][c + 2] &&
            this.board[r - 2][c + 2] == this.board[r - 3][c + 3]
          ) {
            this.setWinner(r, c);
            return (this.winner = true);
          }
        }
      }
    }
  }

  setWinner(X, Y) {
    if (this.board[X][Y] == "player1") {
      this.round.innerText = "Victoire du joueur 1";
    } else if (this.board[X][Y] == "player2") {
      this.round.innerText = "Victoire du joueur 2";
    }
  }

  // animation( ) {

  //     let bodyCoords = document.body.getBoundingClientRect();
  //     let ty= this.newTile.getBoundingClientRect().top - bodyCoords.top;
  //     let tx= this.newTile.getBoundingClientRect().left - bodyCoords.left;

  //     console.log(ty, tx);

  //    this.piece1.style.animate(
  //         [
  //             { transform: "translateX(" + tx + ")" },
  //             { transform: "translateY(" + ty + ")"  },

  //         ], {
  //             duration: 1000,
  // iterations: 3,
  //         }

  //     ) ;
  // }

  pieceColor() {
    this.colorArray = [
      (pink = "#ffbacd"),
      (red = "#d05c6b"),
      (green = "#c5f697"),
      (purple = "#f3cff1"),
      (blue = "#AAB8DB"),
      (orange = "#e4c17a"),
      (darkPurple = "#a45cd0"),
    ];

    this.colorArray.forEach(
      (colorKey) => (colorKey.document.createElement("button").id = colorKey)
    );
  }

  replayGame() {
   
    //fond quand le bouton apparait
    let bgReplay = document.createElement("div");
    bgReplay.style.width = "100%";
    bgReplay.style.height = "100%";
    bgReplay.style.backgroundColor = "rgba(0, 0, 0, 0.43)";
    bgReplay.style.position = "absolute";
    document.body.appendChild(bgReplay);

     //creation du bouton replay
     let replayBtnContainer = document.createElement("div");
     replayBtnContainer.id = "replayBtnContainer";
     replayBtnContainer.style.backgroundColor = "#F3CFF1"
     replayBtnContainer.style.position = "absolute";
     replayBtnContainer.style.borderRadius = "50%";
     replayBtnContainer.style.border = "solid";
     replayBtnContainer.style.borderColor = "#DF7DD9";
     replayBtnContainer.style.borderWidth = "2px";
     replayBtnContainer.style.width = "160px";
     replayBtnContainer.style.height = "160px";
     replayBtnContainer.style.display = "flex";
     replayBtnContainer.style.alignItems="center";
     replayBtnContainer.style.justifyContent="center";
     replayBtnContainer.style.top="40%";
     replayBtnContainer.style.cursor="pointer";
     document.body.appendChild(replayBtnContainer);
    
 
     let replayBtn = document.createElement("i");
     replayBtn.id = "replayBtn";
     replayBtn.classList.add("fa-solid");
     replayBtn.classList.add("fa-arrow-rotate-left");
     replayBtn.classList.add("fa-7x");
     replayBtn.style.color="#FFF5D1";
     replayBtnContainer.appendChild(replayBtn);
 

     let replayText = document.createElement("h2");
     replayText.innerText = "Rejouer";
     replayText.style.position = "absolute";
     replayText.style.top="58%";
     replayText.style.color="#FFF5D1";
     replayText.style.fontSize="40px";
     document.body.appendChild(replayText);

     
     replayBtnContainer.addEventListener("click", ()=>{
       
        bgReplay.remove();
        replayBtn.remove();
        replayBtnContainer.remove();
        replayText.remove();
       this.replay = true;
       this.deleteGame();
     });
    //  replayBtnContainer.addEventListener("mouseout", ()=>{
        
    //     replayBtnContainer.style.boxShadow = "10px 5px #DF7DD9";
    //     });

  }

  deleteGame() {
    if(this.replay == true) {
      // this.createGrid = null;
      // delete Puissance4();

      this.gridNbr++;
      // console.log(`grid_${ this.gridNbr-1}`);
      if(this.grid.id==`grid_${ this.gridNbr-1}`) {
        this.grid.remove();
        this.createGrid();
        this.rePlay = false;
        this.winner = false;
      }
   
   
      // if(this.)
      // this.grid.id = "grid_" + this.gridNbr;
    }
 
  }
}

// faire une fonction popup pour afficher les regles du jeu

export { Puissance4 };
