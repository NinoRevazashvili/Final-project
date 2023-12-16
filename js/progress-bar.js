
let isBarElementAlreadyVisible = false;
var observer = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true && !isBarElementAlreadyVisible) {
    isBarElementAlreadyVisible = true;
    console.log('Element has just become visible in screen');

    startProgressBar('designFiller', 80);
    startProgressBar('photographyFiller', 65);
    startProgressBar('markingFiller', 50);
    startProgressBar('photoshopFiller', 30);
  }

}, { threshold: [1] });

var barElement = document.getElementById('barElement');
observer.observe(barElement);


function startProgressBar(elementName, percent) {
  var currentPercentage = 0;

  var intervalId = setInterval(function () {
    updateProgressBar(currentPercentage, elementName);
    currentPercentage++;

    if (currentPercentage > percent) {
      clearInterval(intervalId);
    }
  }, 10);

  function updateProgressBar(percentage, elementName) {
    var filler = document.getElementById(elementName);
    filler.style.width = percentage + '%';
  }
}