// Your code here

//const dodger = document.getElementById('dodger')

//A function to move dodger to the left
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace('px','')
    const left = parseInt(leftNumbers,10)
    if(left > 0){
        dodger.style.left = `${left -1}px`
    }
}

//Add event to actually call the function and move the arrow
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

//Create a function to move dodger to the right side
function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace('px','')
    const right = parseInt(rightNumbers,10)
    if(right > 0){
        dodger.style.left = `${right +1}px`
    }
}
////Add event to actually call the function and move the arrow
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

