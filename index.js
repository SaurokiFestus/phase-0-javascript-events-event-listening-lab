

const input = document.getElementById('input');

function addingEventListener(){
input.addEventListener('click', function(){
  alert ("I was clicked")
});
}

const main = document.getElementById("main")
main.addEventListener("mouseover", addingEventListener)