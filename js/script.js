






function myFunction() {
  document.getElementById("squareimg").style.transitionProperty = "background-color";
}
function myFunction() {
  document.getElementById("second").style.transitionProperty = "background-color";
}

function myFunction() {
  document.getElementById("individual-section").style.transitionProperty = "background-color";
}



function myFunction() {
  document.getElementById("button-1").style.transitionProperty = "background-color";

}

// Latest Projects

function showParagraph(id){
  hideAllParagraph();
  document.getElementById(id).style.visibility="visible";
}


function hideAllParagraph(){
  let elements = document.getElementsByClassName('project-names');
  for (const element of elements) {
    element.style.visibility="hidden";
  }
}
// page7 (Rosa Team)


function showtexts(id){
  document.getElementById(id).style.visibility="visible"

}