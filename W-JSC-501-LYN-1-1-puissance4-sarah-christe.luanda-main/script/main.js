import { Puissance4 } from "./puissance4.js";

let newPuissance4 = new Puissance4({ caseX: [7], caseY: [6], color1: ["blue"], color2: ["orange"] });

newPuissance4.createGrid();
newPuissance4.setPieces();
newPuissance4.checkWinner();
// newPuissance4.setWinner();

