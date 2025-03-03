import { Puissance4 } from "./puissance4.js";

let newPuissance4 = new Puissance4({ caseX: [5], caseY: [6]});
newPuissance4.createGrid();

// while (newPuissance4.replay == true)  {
//      newPuissance4 = delete Puissance4;
//      console.log(newPuissance4.replay)
// }


//--------------PLAYER INFO-----------------//
const playerInfo = document.querySelector('.playersInfo');
const infoElement = document.querySelector('.info');

console.log(playerInfo);
console.log(infoElement);

infoElement.addEventListener('click', () => {
    playerInfo.classList.toggle('active');
})