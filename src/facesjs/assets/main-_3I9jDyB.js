import { g as i, d as r } from "./generate-BYR8eDmT.js";
const c = e => {
		const n = i(void 0, { gender: Math.random() < 0.5 ? "male" : "female" });
		r(`c${e}`, n);
	},
	a = window.matchMedia("(min-width: 666px)");
let t = !1;
const s = 5,
	o = 12,
	d = () => {
		const e = a.matches ? o : s;
		for (let n = 0; n < e; n++) c(n);
		a.matches && (t = !0);
	};
d();
a.addEventListener("change", () => {
	if (a.matches && !t) {
		for (let e = s; e < o; e++) c(e);
		t = !0;
	}
});
document.addEventListener(
	"keydown",
	e => {
		e.code === "KeyR" && !e.ctrlKey && d();
	},
	!1,
);
window.newFace = c;
window.newFaces = d;
