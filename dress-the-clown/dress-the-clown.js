  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


document.onkeydown = checkKey;

function checkKey(e) {

  if (e.keyCode == '38') {
    bodyChange(-1)
      // up arrow
  }
  else if (e.keyCode == '40') {
    bodyChange(1)
      // down arrow
  }
  else if (e.keyCode == '37') {
    changeOutfit(-1)
     // left arrow
  }
  else if (e.keyCode == '39') {
    changeOutfit(1)
     // right arrow
  }
}
  var head = document.getElementById('head')
  var body = document.getElementById('body')
  var shoes = document.getElementById('shoes')
  
  // index
  // var headIndex = 0
  // var bodyIndex = 0
  // var shoesIndex = 0
  var indexes = [0, 0, 0]
  var clothingIndex = 0
  var images = [head, body, shoes]
  var strings =["head", "body", "shoes"]

  function changeOutfit(change){

    var index = indexes[clothingIndex]
    var image = images[clothingIndex]
    var string= strings[clothingIndex]
    
    index += change
  
    if (index < 0)
    index = 5

    if (index >5)
    index = 0

    indexes[clothingIndex] = index
    image.src = './images/' + string + index + ".png" 
}
function bodyChange(change) {
  clothingIndex += change
  if (clothingIndex < 0)
  clothingIndex = 2
  if (clothingIndex > 2)
  clothingIndex = 0
  console.log(clothingIndex)
}