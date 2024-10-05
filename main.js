var text_field = document.getElementById("text_field");
var text = "";

function save(){
    text = text_field.value;
    localStorage.setItem("note", text);
}
function load(){
    text = localStorage.getItem("note");
    text_field.value = text;
}

load();

if (text_field.addEventListener) {
    text_field.addEventListener('input', function() {
      save()
    }, false);
  }