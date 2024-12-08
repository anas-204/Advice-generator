var advice = document.getElementById("advice");
var data = [];
async function getIdea() {
  var response = await fetch("https://api.adviceslip.com/advice");
  data = await response.json();
  console.log(data);
  advice.innerHTML = data.slip.advice;
}
