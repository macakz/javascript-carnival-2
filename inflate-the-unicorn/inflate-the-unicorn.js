  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


document.getElementById('unicorn_1').onclick = click
document.getElementById('unicorn_2').onclick = click
document.getElementById('unicorn_3').onclick = click

var inflate = [0,0,0]


function click(event){
  var unicorn = event.target
  var id = unicorn.id[8]

  inflate[id]++

  if (inflate[id] == 4)
    
      inflate[id] = 0 
  unicorn.src = './images/unicorn-' + inflate[id] + '.png'

  }


