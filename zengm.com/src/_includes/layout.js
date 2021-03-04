var div = document.getElementById("face");

function genFace() {
  var face = faces.generate({"teamColors":["#695FAB","#f05742","#cccccc"]});
  faces.display(div, face);
}

genFace();

face.addEventListener("click", genFace);
