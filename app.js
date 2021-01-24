let gameActive=true;
const rowCount=9;
const colCount=9;
let points=0;
let bombCount=0;
var bombIndex=[]
let grid = document.querySelector(".grid");
  let pointer = document.querySelector("#gameScore");
  pointer.innerHTML = points;
  const winningMessage=()=>`win`;
    const losingMessage=()=>`game over`;

createGrid();

function createGrid(){
 generateBombs();
  for(let i=0;i<9;i++){

    let row = document.createElement("div");
    row.classList.add("row")
    grid.appendChild(row);
    for(let j=1;j<=9;j++)
    {
     
      let col = document.createElement("div");
      col.classList.add("col");
      col.setAttribute("id", j + i * 9);
      col.addEventListener("click", function handleCellClick(evt) {
        if(points===71){
          document.getElementById("resultDisplay").innerHTML=winningMessage();
          gameActive=false;
          return;
        }
        if(!gameActive) return
        const clickedCell = evt.target;
        const clickedCellIndex = parseInt(
          clickedCell.getAttribute("id")
        );
          if(bombIndex.includes(clickedCellIndex))
          {
            col.classList.add("bomb")
                      document.getElementById("resultDisplay").innerHTML=losingMessage();

            gameActive=false;
            for(let i=0;i<9;i++){
              document.getElementById(""+bombIndex[i]).classList.add("bomb")
              
            }
          }
          else{
          col.classList.add("safe")
          points++;
          pointer.innerHTML = points;

        }
        },{once:true})
      row.appendChild(col)

  }
  }
  }


  

function generateBombs(){
  let count=10;
  while(count!=0){
    let temp= Math.floor(Math.random() * 81)+1;
    if(bombIndex.includes(temp)===false)
     { bombIndex.push(temp);
     count--;}
  }
}
function playAgain(){
  window.location.reload();
}
