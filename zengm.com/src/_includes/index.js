var face0 = document.getElementById("face0");
var face1 = document.getElementById("face1");

function genFace0() {
	var jerseys = ["jersey", "jersey2", "jersey3", "jersey4", "jersey5"];
	var jersey = jerseys[Math.floor(Math.random() * jerseys.length)];
	var face = faces.generate({"teamColors":["#695FAB","#f05742","#cccccc"],"jersey":{"id":jersey}});
	if (face.hair.color === "#0f0902") {
		face.hair.color = "#272421";
	}
	console.log(face.hair.color);
	faces.display(face0, face);
}

var prevType = Math.random() < 0.5 ? "football" : "hockey";
function genFace1() {
	var jerseys = prevType === "hockey" ? ["football", "football2", "football3"] : ["hockey"];
	prevType = prevType === "hockey" ? "football" : "hockey";
	var jersey = jerseys[Math.floor(Math.random() * jerseys.length)];
	var face = faces.generate({"teamColors":["#695FAB","#f05742","#cccccc"],"jersey":{"id":jersey}});
	if (face.hair.color === "#0f0902") {
		face.hair.color = "#272421";
	}
	console.log(face.hair.color);
	faces.display(face1, face);
}

genFace0();
genFace1();

face0.addEventListener("click", genFace0);
face1.addEventListener("click", genFace1);
document.getElementById("logo").addEventListener("click", function () {
	genFace0();
	genFace1();	
});
