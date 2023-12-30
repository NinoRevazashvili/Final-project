






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

function showParagraph(id) {
  hideAllParagraph();
  document.getElementById(id).style.visibility = "visible";
}


function hideAllParagraph() {
  let elements = document.getElementsByClassName('project-names');
  for (const element of elements) {
    element.style.visibility = "hidden";
  }
}
// page7 (Rosa Team)


function showtexts(id) {
  document.getElementById(id).style.visibility = "visible"

}

function showdivs(id) {
  document.getElementById(id).style.visibility = "visible"

}


function showText(id) {
  document.getElementById(id).style.visibility = "visible"

}


// page 3

function showServiceDescription(id) {
  document.getElementById(id).style.visibility = "visible";
}

function hideServiceDescription(id) {
  document.getElementById(id).style.visibility = "hidden";
}

function showP(id) {
  document.getElementById(id).style.visibility = "visible";
}
function hideP(id) {
  document.getElementById(id).style.visibility = "hidden";
}