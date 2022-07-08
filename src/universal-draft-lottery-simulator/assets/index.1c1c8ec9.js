const wt = function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const a of document.querySelectorAll('link[rel="modulepreload"]')) e(a);
	new MutationObserver(a => {
		for (const n of a)
			if (n.type === "childList")
				for (const d of n.addedNodes)
					d.tagName === "LINK" && d.rel === "modulepreload" && e(d);
	}).observe(document, { childList: !0, subtree: !0 });
	function r(a) {
		const n = {};
		return (
			a.integrity && (n.integrity = a.integrity),
			a.referrerpolicy && (n.referrerPolicy = a.referrerpolicy),
			a.crossorigin === "use-credentials"
				? (n.credentials = "include")
				: a.crossorigin === "anonymous"
				? (n.credentials = "omit")
				: (n.credentials = "same-origin"),
			n
		);
	}
	function e(a) {
		if (a.ep) return;
		a.ep = !0;
		const n = r(a);
		fetch(a.href, n);
	}
};
wt();
var F,
	g,
	nt,
	S,
	it,
	V,
	H = {},
	at = [],
	vt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function z(o, t) {
	for (var r in t) o[r] = t[r];
	return o;
}
function lt(o) {
	var t = o.parentNode;
	t && t.removeChild(o);
}
function kt(o, t, r) {
	var e,
		a,
		n,
		d = {};
	for (n in t)
		n == "key" ? (e = t[n]) : n == "ref" ? (a = t[n]) : (d[n] = t[n]);
	if (
		(arguments.length > 2 &&
			(d.children = arguments.length > 3 ? F.call(arguments, 2) : r),
		typeof o == "function" && o.defaultProps != null)
	)
		for (n in o.defaultProps) d[n] === void 0 && (d[n] = o.defaultProps[n]);
	return B(o, d, e, a, null);
}
function B(o, t, r, e, a) {
	var n = {
		type: o,
		props: t,
		key: r,
		ref: e,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: a == null ? ++nt : a,
	};
	return a == null && g.vnode != null && g.vnode(n), n;
}
function C(o) {
	return o.children;
}
function M(o, t) {
	(this.props = o), (this.context = t);
}
function L(o, t) {
	if (t == null) return o.__ ? L(o.__, o.__.__k.indexOf(o) + 1) : null;
	for (var r; t < o.__k.length; t++)
		if ((r = o.__k[t]) != null && r.__e != null) return r.__e;
	return typeof o.type == "function" ? L(o) : null;
}
function mt(o) {
	var t, r;
	if ((o = o.__) != null && o.__c != null) {
		for (o.__e = o.__c.base = null, t = 0; t < o.__k.length; t++)
			if ((r = o.__k[t]) != null && r.__e != null) {
				o.__e = o.__c.base = r.__e;
				break;
			}
		return mt(o);
	}
}
function Y(o) {
	((!o.__d && (o.__d = !0) && S.push(o) && !I.__r++) ||
		V !== g.debounceRendering) &&
		((V = g.debounceRendering) || it)(I);
}
function I() {
	for (var o; (I.__r = S.length); )
		(o = S.sort(function (t, r) {
			return t.__v.__b - r.__v.__b;
		})),
			(S = []),
			o.some(function (t) {
				var r, e, a, n, d, l;
				t.__d &&
					((d = (n = (r = t).__v).__e),
					(l = r.__P) &&
						((e = []),
						((a = z({}, n)).__v = n.__v + 1),
						O(
							l,
							n,
							a,
							r.__n,
							l.ownerSVGElement !== void 0,
							n.__h != null ? [d] : null,
							e,
							d == null ? L(n) : d,
							n.__h,
						),
						ct(e, n),
						n.__e != d && mt(n)));
			});
}
function dt(o, t, r, e, a, n, d, l, m, u) {
	var i,
		x,
		c,
		p,
		b,
		_,
		f,
		h = (e && e.__k) || at,
		w = h.length;
	for (r.__k = [], i = 0; i < t.length; i++)
		if (
			(p = r.__k[i] =
				(p = t[i]) == null || typeof p == "boolean"
					? null
					: typeof p == "string" || typeof p == "number" || typeof p == "bigint"
					? B(null, p, null, null, p)
					: Array.isArray(p)
					? B(C, { children: p }, null, null, null)
					: p.__b > 0
					? B(p.type, p.props, p.key, null, p.__v)
					: p) != null
		) {
			if (
				((p.__ = r),
				(p.__b = r.__b + 1),
				(c = h[i]) === null || (c && p.key == c.key && p.type === c.type))
			)
				h[i] = void 0;
			else
				for (x = 0; x < w; x++) {
					if ((c = h[x]) && p.key == c.key && p.type === c.type) {
						h[x] = void 0;
						break;
					}
					c = null;
				}
			O(o, p, (c = c || H), a, n, d, l, m, u),
				(b = p.__e),
				(x = p.ref) &&
					c.ref != x &&
					(f || (f = []),
					c.ref && f.push(c.ref, null, p),
					f.push(x, p.__c || b, p)),
				b != null
					? (_ == null && (_ = b),
					  typeof p.type == "function" && p.__k === c.__k
							? (p.__d = m = pt(p, m, o))
							: (m = st(o, p, c, h, b, m)),
					  typeof r.type == "function" && (r.__d = m))
					: m && c.__e == m && m.parentNode != o && (m = L(c));
		}
	for (r.__e = _, i = w; i--; )
		h[i] != null &&
			(typeof r.type == "function" &&
				h[i].__e != null &&
				h[i].__e == r.__d &&
				(r.__d = L(e, i + 1)),
			bt(h[i], h[i]));
	if (f) for (i = 0; i < f.length; i++) gt(f[i], f[++i], f[++i]);
}
function pt(o, t, r) {
	for (var e, a = o.__k, n = 0; a && n < a.length; n++)
		(e = a[n]) &&
			((e.__ = o),
			(t =
				typeof e.type == "function" ? pt(e, t, r) : st(r, e, e, a, e.__e, t)));
	return t;
}
function st(o, t, r, e, a, n) {
	var d, l, m;
	if (t.__d !== void 0) (d = t.__d), (t.__d = void 0);
	else if (r == null || a != n || a.parentNode == null)
		t: if (n == null || n.parentNode !== o) o.appendChild(a), (d = null);
		else {
			for (l = n, m = 0; (l = l.nextSibling) && m < e.length; m += 2)
				if (l == a) break t;
			o.insertBefore(a, n), (d = n);
		}
	return d !== void 0 ? d : a.nextSibling;
}
function yt(o, t, r, e, a) {
	var n;
	for (n in r)
		n === "children" || n === "key" || n in t || $(o, n, null, r[n], e);
	for (n in t)
		(a && typeof t[n] != "function") ||
			n === "children" ||
			n === "key" ||
			n === "value" ||
			n === "checked" ||
			r[n] === t[n] ||
			$(o, n, t[n], r[n], e);
}
function K(o, t, r) {
	t[0] === "-"
		? o.setProperty(t, r)
		: (o[t] =
				r == null ? "" : typeof r != "number" || vt.test(t) ? r : r + "px");
}
function $(o, t, r, e, a) {
	var n;
	t: if (t === "style")
		if (typeof r == "string") o.style.cssText = r;
		else {
			if ((typeof e == "string" && (o.style.cssText = e = ""), e))
				for (t in e) (r && t in r) || K(o.style, t, "");
			if (r) for (t in r) (e && r[t] === e[t]) || K(o.style, t, r[t]);
		}
	else if (t[0] === "o" && t[1] === "n")
		(n = t !== (t = t.replace(/Capture$/, ""))),
			(t = t.toLowerCase() in o ? t.toLowerCase().slice(2) : t.slice(2)),
			o.l || (o.l = {}),
			(o.l[t + n] = r),
			r
				? e || o.addEventListener(t, n ? Z : G, n)
				: o.removeEventListener(t, n ? Z : G, n);
	else if (t !== "dangerouslySetInnerHTML") {
		if (a) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (
			t !== "href" &&
			t !== "list" &&
			t !== "form" &&
			t !== "tabIndex" &&
			t !== "download" &&
			t in o
		)
			try {
				o[t] = r == null ? "" : r;
				break t;
			} catch {}
		typeof r == "function" ||
			(r != null && (r !== !1 || (t[0] === "a" && t[1] === "r"))
				? o.setAttribute(t, r)
				: o.removeAttribute(t));
	}
}
function G(o) {
	this.l[o.type + !1](g.event ? g.event(o) : o);
}
function Z(o) {
	this.l[o.type + !0](g.event ? g.event(o) : o);
}
function O(o, t, r, e, a, n, d, l, m) {
	var u,
		i,
		x,
		c,
		p,
		b,
		_,
		f,
		h,
		w,
		k,
		j,
		N,
		y = t.type;
	if (t.constructor !== void 0) return null;
	r.__h != null &&
		((m = r.__h), (l = t.__e = r.__e), (t.__h = null), (n = [l])),
		(u = g.__b) && u(t);
	try {
		t: if (typeof y == "function") {
			if (
				((f = t.props),
				(h = (u = y.contextType) && e[u.__c]),
				(w = u ? (h ? h.props.value : u.__) : e),
				r.__c
					? (_ = (i = t.__c = r.__c).__ = i.__E)
					: ("prototype" in y && y.prototype.render
							? (t.__c = i = new y(f, w))
							: ((t.__c = i = new M(f, w)),
							  (i.constructor = y),
							  (i.render = zt)),
					  h && h.sub(i),
					  (i.props = f),
					  i.state || (i.state = {}),
					  (i.context = w),
					  (i.__n = e),
					  (x = i.__d = !0),
					  (i.__h = [])),
				i.__s == null && (i.__s = i.state),
				y.getDerivedStateFromProps != null &&
					(i.__s == i.state && (i.__s = z({}, i.__s)),
					z(i.__s, y.getDerivedStateFromProps(f, i.__s))),
				(c = i.props),
				(p = i.state),
				x)
			)
				y.getDerivedStateFromProps == null &&
					i.componentWillMount != null &&
					i.componentWillMount(),
					i.componentDidMount != null && i.__h.push(i.componentDidMount);
			else {
				if (
					(y.getDerivedStateFromProps == null &&
						f !== c &&
						i.componentWillReceiveProps != null &&
						i.componentWillReceiveProps(f, w),
					(!i.__e &&
						i.shouldComponentUpdate != null &&
						i.shouldComponentUpdate(f, i.__s, w) === !1) ||
						t.__v === r.__v)
				) {
					(i.props = f),
						(i.state = i.__s),
						t.__v !== r.__v && (i.__d = !1),
						(i.__v = t),
						(t.__e = r.__e),
						(t.__k = r.__k),
						t.__k.forEach(function (T) {
							T && (T.__ = t);
						}),
						i.__h.length && d.push(i);
					break t;
				}
				i.componentWillUpdate != null && i.componentWillUpdate(f, i.__s, w),
					i.componentDidUpdate != null &&
						i.__h.push(function () {
							i.componentDidUpdate(c, p, b);
						});
			}
			if (
				((i.context = w),
				(i.props = f),
				(i.__v = t),
				(i.__P = o),
				(k = g.__r),
				(j = 0),
				"prototype" in y && y.prototype.render)
			)
				(i.state = i.__s),
					(i.__d = !1),
					k && k(t),
					(u = i.render(i.props, i.state, i.context));
			else
				do
					(i.__d = !1),
						k && k(t),
						(u = i.render(i.props, i.state, i.context)),
						(i.state = i.__s);
				while (i.__d && ++j < 25);
			(i.state = i.__s),
				i.getChildContext != null && (e = z(z({}, e), i.getChildContext())),
				x ||
					i.getSnapshotBeforeUpdate == null ||
					(b = i.getSnapshotBeforeUpdate(c, p)),
				(N = u != null && u.type === C && u.key == null ? u.props.children : u),
				dt(o, Array.isArray(N) ? N : [N], t, r, e, a, n, d, l, m),
				(i.base = t.__e),
				(t.__h = null),
				i.__h.length && d.push(i),
				_ && (i.__E = i.__ = null),
				(i.__e = !1);
		} else
			n == null && t.__v === r.__v
				? ((t.__k = r.__k), (t.__e = r.__e))
				: (t.__e = _t(r.__e, t, r, e, a, n, d, m));
		(u = g.diffed) && u(t);
	} catch (T) {
		(t.__v = null),
			(m || n != null) &&
				((t.__e = l), (t.__h = !!m), (n[n.indexOf(l)] = null)),
			g.__e(T, t, r);
	}
}
function ct(o, t) {
	g.__c && g.__c(t, o),
		o.some(function (r) {
			try {
				(o = r.__h),
					(r.__h = []),
					o.some(function (e) {
						e.call(r);
					});
			} catch (e) {
				g.__e(e, r.__v);
			}
		});
}
function _t(o, t, r, e, a, n, d, l) {
	var m,
		u,
		i,
		x = r.props,
		c = t.props,
		p = t.type,
		b = 0;
	if ((p === "svg" && (a = !0), n != null)) {
		for (; b < n.length; b++)
			if (
				(m = n[b]) &&
				"setAttribute" in m == !!p &&
				(p ? m.localName === p : m.nodeType === 3)
			) {
				(o = m), (n[b] = null);
				break;
			}
	}
	if (o == null) {
		if (p === null) return document.createTextNode(c);
		(o = a
			? document.createElementNS("http://www.w3.org/2000/svg", p)
			: document.createElement(p, c.is && c)),
			(n = null),
			(l = !1);
	}
	if (p === null) x === c || (l && o.data === c) || (o.data = c);
	else {
		if (
			((n = n && F.call(o.childNodes)),
			(u = (x = r.props || H).dangerouslySetInnerHTML),
			(i = c.dangerouslySetInnerHTML),
			!l)
		) {
			if (n != null)
				for (x = {}, b = 0; b < o.attributes.length; b++)
					x[o.attributes[b].name] = o.attributes[b].value;
			(i || u) &&
				((i && ((u && i.__html == u.__html) || i.__html === o.innerHTML)) ||
					(o.innerHTML = (i && i.__html) || ""));
		}
		if ((yt(o, c, x, a, l), i)) t.__k = [];
		else if (
			((b = t.props.children),
			dt(
				o,
				Array.isArray(b) ? b : [b],
				t,
				r,
				e,
				a && p !== "foreignObject",
				n,
				d,
				n ? n[0] : r.__k && L(r, 0),
				l,
			),
			n != null)
		)
			for (b = n.length; b--; ) n[b] != null && lt(n[b]);
		l ||
			("value" in c &&
				(b = c.value) !== void 0 &&
				(b !== o.value ||
					(p === "progress" && !b) ||
					(p === "option" && b !== x.value)) &&
				$(o, "value", b, x.value, !1),
			"checked" in c &&
				(b = c.checked) !== void 0 &&
				b !== o.checked &&
				$(o, "checked", b, x.checked, !1));
	}
	return o;
}
function gt(o, t, r) {
	try {
		typeof o == "function" ? o(t) : (o.current = t);
	} catch (e) {
		g.__e(e, r);
	}
}
function bt(o, t, r) {
	var e, a;
	if (
		(g.unmount && g.unmount(o),
		(e = o.ref) && ((e.current && e.current !== o.__e) || gt(e, null, t)),
		(e = o.__c) != null)
	) {
		if (e.componentWillUnmount)
			try {
				e.componentWillUnmount();
			} catch (n) {
				g.__e(n, t);
			}
		e.base = e.__P = null;
	}
	if ((e = o.__k))
		for (a = 0; a < e.length; a++)
			e[a] && bt(e[a], t, typeof o.type != "function");
	r || o.__e == null || lt(o.__e), (o.__e = o.__d = void 0);
}
function zt(o, t, r) {
	return this.constructor(o, r);
}
function jt(o, t, r) {
	var e, a, n;
	g.__ && g.__(o, t),
		(a = (e = typeof r == "function") ? null : (r && r.__k) || t.__k),
		(n = []),
		O(
			t,
			(o = ((!e && r) || t).__k = kt(C, null, [o])),
			a || H,
			H,
			t.ownerSVGElement !== void 0,
			!e && r ? [r] : a ? null : t.firstChild ? F.call(t.childNodes) : null,
			n,
			!e && r ? r : a ? a.__e : t.firstChild,
			e,
		),
		ct(n, o);
}
(F = at.slice),
	(g = {
		__e: function (o, t, r, e) {
			for (var a, n, d; (t = t.__); )
				if ((a = t.__c) && !a.__)
					try {
						if (
							((n = a.constructor) &&
								n.getDerivedStateFromError != null &&
								(a.setState(n.getDerivedStateFromError(o)), (d = a.__d)),
							a.componentDidCatch != null &&
								(a.componentDidCatch(o, e || {}), (d = a.__d)),
							d)
						)
							return (a.__E = a);
					} catch (l) {
						o = l;
					}
			throw o;
		},
	}),
	(nt = 0),
	(M.prototype.setState = function (o, t) {
		var r;
		(r =
			this.__s != null && this.__s !== this.state
				? this.__s
				: (this.__s = z({}, this.state))),
			typeof o == "function" && (o = o(z({}, r), this.props)),
			o && z(r, o),
			o != null && this.__v && (t && this.__h.push(t), Y(this));
	}),
	(M.prototype.forceUpdate = function (o) {
		this.__v && ((this.__e = !0), o && this.__h.push(o), Y(this));
	}),
	(M.prototype.render = C),
	(S = []),
	(it =
		typeof Promise == "function"
			? Promise.prototype.then.bind(Promise.resolve())
			: setTimeout),
	(I.__r = 0);
var q,
	v,
	W,
	J,
	D = 0,
	ft = [],
	P = [],
	Q = g.__b,
	X = g.__r,
	tt = g.diffed,
	ot = g.__c,
	rt = g.unmount;
function ut(o, t) {
	g.__h && g.__h(v, o, D || t), (D = 0);
	var r = v.__H || (v.__H = { __: [], __h: [] });
	return o >= r.__.length && r.__.push({ __V: P }), r.__[o];
}
function A(o) {
	return (D = 1), Nt(ht, o);
}
function Nt(o, t, r) {
	var e = ut(q++, 2);
	return (
		(e.t = o),
		e.__c ||
			((e.__ = [
				r ? r(t) : ht(void 0, t),
				function (a) {
					var n = e.t(e.__[0], a);
					e.__[0] !== n && ((e.__ = [n, e.__[1]]), e.__c.setState({}));
				},
			]),
			(e.__c = v)),
		e.__
	);
}
function Ct(o, t) {
	var r = ut(q++, 7);
	return St(r.__H, t) ? ((r.__V = o()), (r.u = t), (r.__h = o), r.__V) : r.__;
}
function Lt() {
	for (var o; (o = ft.shift()); )
		if (o.__P)
			try {
				o.__H.__h.forEach(E), o.__H.__h.forEach(R), (o.__H.__h = []);
			} catch (t) {
				(o.__H.__h = []), g.__e(t, o.__v);
			}
}
(g.__b = function (o) {
	(v = null), Q && Q(o);
}),
	(g.__r = function (o) {
		X && X(o), (q = 0);
		var t = (v = o.__c).__H;
		t &&
			(W === v
				? ((t.__h = []),
				  (v.__h = []),
				  t.__.forEach(function (r) {
						(r.__V = P), (r.u = void 0);
				  }))
				: (t.__h.forEach(E), t.__h.forEach(R), (t.__h = []))),
			(W = v);
	}),
	(g.diffed = function (o) {
		tt && tt(o);
		var t = o.__c;
		t &&
			t.__H &&
			(t.__H.__h.length &&
				((ft.push(t) !== 1 && J === g.requestAnimationFrame) ||
					(
						(J = g.requestAnimationFrame) ||
						function (r) {
							var e,
								a = function () {
									clearTimeout(n), et && cancelAnimationFrame(e), setTimeout(r);
								},
								n = setTimeout(a, 100);
							et && (e = requestAnimationFrame(a));
						}
					)(Lt)),
			t.__H.__.forEach(function (r) {
				r.u && (r.__H = r.u),
					r.__V !== P && (r.__ = r.__V),
					(r.u = void 0),
					(r.__V = P);
			})),
			(W = v = null);
	}),
	(g.__c = function (o, t) {
		t.some(function (r) {
			try {
				r.__h.forEach(E),
					(r.__h = r.__h.filter(function (e) {
						return !e.__ || R(e);
					}));
			} catch (e) {
				t.some(function (a) {
					a.__h && (a.__h = []);
				}),
					(t = []),
					g.__e(e, r.__v);
			}
		}),
			ot && ot(o, t);
	}),
	(g.unmount = function (o) {
		rt && rt(o);
		var t,
			r = o.__c;
		r &&
			r.__H &&
			(r.__H.__.forEach(function (e) {
				try {
					E(e);
				} catch (a) {
					t = a;
				}
			}),
			t && g.__e(t, r.__v));
	});
var et = typeof requestAnimationFrame == "function";
function E(o) {
	var t = v,
		r = o.__c;
	typeof r == "function" && ((o.__c = void 0), r()), (v = t);
}
function R(o) {
	var t = v;
	(o.__c = o.__()), (v = t);
}
function St(o, t) {
	return (
		!o ||
		o.length !== t.length ||
		t.some(function (r, e) {
			return r !== o[e];
		})
	);
}
function ht(o, t) {
	return typeof t == "function" ? t(o) : t;
}
const xt = (o, t) => {
	let r = o.map((a, n) => ({ chances: a, index: n }));
	const e = [];
	for (let a = 0; a < t; a++) {
		let n = 0;
		for (const m of r) n += m.chances;
		const d = Math.random() * n;
		let l = 0;
		for (const m of r)
			if (((l += m.chances), d < l)) {
				e.push(m.index), (r = r.filter(u => u !== m));
				break;
			}
	}
	return e.push(...r.map(a => a.index)), e;
};
class Tt {
	constructor(t, r) {
		(this.initial = !0),
			(this.start = 0),
			(this.end = t),
			(this.dimensions = r);
	}
	[Symbol.iterator]() {
		const t = Array(this.dimensions).fill(this.start),
			r = e => {
				if (t[e] < this.end - 1)
					return this.initial ? (this.initial = !1) : (t[e] += 1), !1;
				if (e === 0) return !0;
				for (let a = e; a < this.dimensions; a++) t[a] = this.start;
				return r(e - 1);
			};
		return {
			next: () => {
				const e = this.dimensions - 1,
					a = r(e);
				return a ? { done: a } : { value: t, done: a };
			},
		};
	}
}
const At = (o, t) => {
		const e = [];
		for (let a = 0; a < 5e5; a++) {
			const n = xt(o, t);
			for (let d = 0; d < n.length; d++) {
				const l = n[d];
				e[l] || (e[l] = []),
					e[l][d] ? (e[l][d] += 1 / 5e5) : (e[l][d] = 1 / 5e5);
			}
		}
		return e;
	},
	Bt = (o, t) => o ** t >= 1e7,
	Mt = (o, t) => {
		if ((console.time("normal"), o.length === 1))
			return { tooSlow: !1, probs: [[1]] };
		const r = Bt(o.length, t);
		if (r) return { tooSlow: r, probs: At(o, t) };
		const e = o.reduce((l, m) => l + m, 0),
			a = [],
			n = [];
		for (let l = 0; l < o.length; l++) {
			a[l] = [];
			for (let m = 0; m < t; m++) a[l][m] = 0;
			n[l] = Array(t + 1).fill(0);
		}
		const d = l => {
			const m = l[0],
				u = l.slice(1);
			let i = e;
			for (const p of u) i -= o[p];
			return ((u.length === 0 ? 1 : d(u)) * o[m]) / i;
		};
		for (let l = 0; l < t && !(r && l > 0); l += 1) {
			const m = new Tt(o.length, l + 1);
			for (const u of m) {
				const i = new Set(u);
				if (u.length !== i.size) continue;
				const x = u[0],
					c = d(u);
				if (((a[x][l] += c), l === t - 1))
					for (let p = 0; p < n.length; p++) {
						if (i.has(p)) continue;
						let b = 0;
						for (const _ of u) _ > p && (b += 1);
						n[p][b] += c;
					}
			}
		}
		for (let l = 0; l < o.length; l++)
			for (let m = 0; m < t + 1; m++)
				l + m > t - 1 && l + m < o.length && (a[l][l + m] = n[l][m]);
		return { tooSlow: r, probs: a };
	};
var Pt = 0;
function s(o, t, r, e, a) {
	var n,
		d,
		l = {};
	for (d in t) d == "ref" ? (n = t[d]) : (l[d] = t[d]);
	var m = {
		type: o,
		props: l,
		key: r,
		ref: n,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: --Pt,
		__source: a,
		__self: e,
	};
	if (typeof o == "function" && (n = o.defaultProps))
		for (d in n) l[d] === void 0 && (l[d] = n[d]);
	return g.vnode && g.vnode(m), m;
}
const U = [
		{
			key: "nba2019",
			title: "NBA 2019-present",
			description:
				"Weighted lottery for the top 4 picks, like the NBA since 2019",
			numToPick: 4,
			chances: [140, 140, 140, 125, 105, 90, 75, 60, 45, 30, 20, 15, 10, 5],
		},
		{
			key: "nba1994",
			title: "NBA 1994-2018",
			description:
				"Weighted lottery for the top 3 picks, like the NBA from 1994-2018",
			numToPick: 3,
			chances: [250, 199, 156, 119, 88, 63, 43, 28, 17, 11, 8, 7, 6, 5],
		},
		{
			key: "nba1990",
			title: "NBA 1990-1993",
			description:
				"Weighted lottery for the top 3 picks, like the NBA from 1990-1993",
			numToPick: 3,
			chances: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		},
		{
			key: "nba1987",
			title: "NBA 1987-1989",
			description:
				"Random lottery for the top 3 picks, like the NBA from 1987-1989",
			numToPick: 3,
			chances: [1, 1, 1, 1, 1, 1, 1],
		},
		{
			key: "nba1985",
			title: "NBA 1985-1986",
			description:
				"Non-playoff teams draft in random order, like the NBA from 1985-1986",
			numToPick: 7,
			chances: [1, 1, 1, 1, 1, 1, 1],
		},
		{
			key: "nba1966",
			title: "NBA 1966-1984",
			description:
				"Coin flip to determine the top 2 picks, like the NBA from 1966-1984",
			numToPick: 2,
			chances: [1, 1, 0, 0, 0, 0, 0],
		},
		{
			key: "nhl2021",
			title: "NHL 2021-present",
			description:
				"Weighted lottery for the top 2 picks, like the NHL since 2021. This does not include the NHL's constraint on the number of spots a team can move up.",
			numToPick: 2,
			chances: [
				185, 135, 115, 95, 85, 75, 65, 60, 50, 35, 30, 25, 20, 15, 5, 5,
			],
		},
		{
			key: "nhl2017",
			title: "NHL 2017-2020",
			description:
				"Weighted lottery for the top 3 picks, like the NHL from 2017-2020",
			numToPick: 3,
			chances: [185, 135, 115, 95, 85, 75, 65, 60, 50, 35, 30, 25, 20, 15, 10],
		},
		{
			key: "mlb2022",
			title: "MLB 2022-present",
			description:
				"Weighted lottery for the top 6 picks, like the MLB since 2022",
			numToPick: 6,
			chances: [
				1650, 1650, 1650, 1325, 1e3, 750, 550, 390, 270, 180, 140, 110, 90, 76,
				62, 48, 36, 23,
			],
		},
	],
	Et = o => {
		let t;
		return (
			o % 100 >= 11 && o % 100 <= 13
				? (t = "th")
				: o % 10 === 1
				? (t = "st")
				: o % 10 === 2
				? (t = "nd")
				: o % 10 === 3
				? (t = "rd")
				: (t = "th"),
			o.toString() + t
		);
	},
	Ht = o => (o !== void 0 ? `${(o * 100).toFixed(1)}%` : void 0);
function It() {
	var p, b, _;
	const [o, t] = A("nba2019"),
		r = U.find(f => f.key === o),
		[e, a] = A((p = r == null ? void 0 : r.chances) != null ? p : []),
		[n, d] = A((b = r == null ? void 0 : r.numToPick) != null ? b : 0),
		[l, m] = A(),
		{ probs: u, tooSlow: i } = Ct(() => Mt(e, n), [e, n]),
		x = f => () => {
			var h, w;
			m(void 0),
				a(
					f === "bottom"
						? [...e, (h = e[e.length - 1]) != null ? h : 1]
						: [(w = e[0]) != null ? w : 1, ...e],
				),
				t("custom");
		},
		c = () => {
			m(void 0), a([]), t("custom");
		};
	return s(C, {
		children: [
			s("h1", { children: "Universal Draft Lottery Simulator" }),
			s("p", {
				children: [
					"Calculate the odds and simulate an",
					" ",
					s("a", {
						href: "https://en.wikipedia.org/wiki/NBA_draft_lottery",
						children: "NBA-like draft lottery",
					}),
					" ",
					"with any number of teams and any chances per team.",
				],
			}),
			s("div", {
				className: "row",
				style: { maxWidth: 500 },
				children: [
					s("div", {
						className: "col",
						children: [
							s("label", {
								className: "form-label",
								htmlFor: "presetKey",
								children: "Preset Lottery Type",
							}),
							s("select", {
								className: "form-select",
								id: "presetKey",
								onChange: f => {
									const h = U.find(w => w.key === f.target.value);
									h
										? (m(void 0), t(h.key), a(h.chances), d(h.numToPick))
										: t("custom");
								},
								value: (_ = r == null ? void 0 : r.key) != null ? _ : "custom",
								children: [
									U.map(f =>
										s("option", { value: f.key, children: f.title }, f.key),
									),
									s("option", { value: "custom", children: "Custom" }),
								],
							}),
						],
					}),
					s("div", {
						className: "col",
						children: [
							s("label", {
								className: "form-label",
								htmlFor: "numToPick",
								children: [
									s("span", {
										className: "d-sm-none",
										children: "# Lottery Selections",
									}),
									s("span", {
										className: "d-none d-sm-inline",
										children: "Number of Lottery Selections",
									}),
								],
							}),
							s("input", {
								className: "form-control",
								id: "numToPick",
								type: "number",
								value: n,
								onChange: f => {
									m(void 0), t("custom"), d(Math.round(f.target.valueAsNumber));
								},
							}),
						],
					}),
				],
			}),
			r
				? s("div", { className: "text-muted mt-2", children: r.description })
				: null,
			i
				? s(C, {
						children: s("div", {
							className: "text-danger mt-2 mb-1",
							children:
								"Computing exact odds for so many teams and picks is too slow, so estimates are shown.",
						}),
				  })
				: null,
			s("div", {
				className: "mt-3",
				children: [
					s("button", {
						className: "btn btn-outline-primary me-2",
						type: "button",
						onClick: x("top"),
						children: "Add Team",
					}),
					s("button", {
						className: "btn btn-outline-danger me-2",
						type: "button",
						onClick: c,
						disabled: e.length === 0,
						children: "Clear Teams",
					}),
					s("button", {
						className: "btn btn-success",
						type: "button",
						onClick: () => {
							const f = xt(e, n);
							m(f);
						},
						disabled: e.length === 0,
						children: "Sim Lottery",
					}),
					l
						? s("button", {
								className: "btn btn-outline-danger ms-2",
								type: "button",
								onClick: () => {
									m(void 0);
								},
								disabled: e.length === 0,
								children: "Clear Sim",
						  })
						: null,
				],
			}),
			e.length > 0
				? s("div", {
						className: "table-responsive mt-2",
						children: s("table", {
							className: "table mb-0",
							style: { width: "unset" },
							children: [
								s("thead", {
									className: "text-center",
									children: s("tr", {
										children: [
											s("th", {}),
											s("th", { children: "Chances" }),
											e.map((f, h) => s("th", { children: Et(h + 1) }, h)),
										],
									}),
								}),
								s("tbody", {
									className: "text-end",
									children: e.map((f, h) =>
										s("tr", {
											children: [
												s("td", {
													className: "py-0 align-middle",
													style: { width: 0 },
													children: s("button", {
														className:
															"btn btn-link text-danger border-0 p-0 m-0 text-decoration-none fs-5",
														type: "button",
														onClick: () => {
															m(void 0),
																a(e.filter((w, k) => k !== h)),
																t("custom");
														},
														children: "\u2715",
													}),
												}),
												s("td", {
													className: "py-0 align-middle",
													style: { width: 0 },
													children: s("input", {
														className: "form-control form-control-sm",
														type: "text",
														value: f,
														onChange: w => {
															const k = parseFloat(w.target.value);
															Number.isNaN(k) ||
																(m(void 0),
																t("custom"),
																a(e.map((j, N) => (h === N ? k : j))));
														},
													}),
												}),
												e.map((w, k) => {
													const j = Ht(u[h][k]);
													return s("td", {
														className:
															l && l[k] === h ? "table-success" : void 0,
														children: j,
													});
												}),
											],
										}),
									),
								}),
							],
						}),
				  })
				: s("div", {
						className: "my-3",
						children: "You should add some teams...",
				  }),
			e.length > 0
				? s("div", {
						className: "my-3",
						children: [
							s("button", {
								className: "btn btn-outline-primary me-2",
								type: "button",
								onClick: x("bottom"),
								children: "Add Team",
							}),
							s("button", {
								className: "btn btn-outline-danger",
								type: "button",
								onClick: c,
								children: "Clear Teams",
							}),
						],
				  })
				: null,
			s("p", {
				style: { maxWidth: 700 },
				children: [
					"If you like simulating hypothetical draft lotteries, maybe you'd like simulating a whole league? ",
					s("a", { href: "https://zengm.com/", children: "ZenGM" }),
					" has you covered! Play",
					" ",
					s("a", {
						href: "https://play.basketball-gm.com/",
						children: "basketball",
					}),
					",",
					" ",
					s("a", {
						href: "https://play.football-gm.com/",
						children: "football",
					}),
					",",
					" ",
					s("a", { href: "https://baseball.zengm.com/", children: "baseball" }),
					", or",
					" ",
					s("a", { href: "https://hockey.zengm.com/", children: "hockey" }),
					". You can customize the draft lottery and tons of other things, and play as many seasons as you want. All for free!",
				],
			}),
			s("p", {
				children: s("a", {
					href: "https://github.com/zengm-games/universal-draft-lottery-simulator",
					children: "Source code on GitHub",
				}),
			}),
		],
	});
}
jt(s(It, {}), document.getElementById("app"));
