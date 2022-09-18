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
	T,
	it,
	V,
	I = {},
	at = [],
	vt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function N(o, t) {
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
	return M(o, d, e, a, null);
}
function M(o, t, r, e, a) {
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
function B(o, t) {
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
	((!o.__d && (o.__d = !0) && T.push(o) && !$.__r++) ||
		V !== g.debounceRendering) &&
		((V = g.debounceRendering) || it)($);
}
function $() {
	for (var o; ($.__r = T.length); )
		(o = T.sort(function (t, r) {
			return t.__v.__b - r.__v.__b;
		})),
			(T = []),
			o.some(function (t) {
				var r, e, a, n, d, l;
				t.__d &&
					((d = (n = (r = t).__v).__e),
					(l = r.__P) &&
						((e = []),
						((a = N({}, n)).__v = n.__v + 1),
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
		s,
		p,
		b,
		y,
		f,
		h = (e && e.__k) || at,
		w = h.length;
	for (r.__k = [], i = 0; i < t.length; i++)
		if (
			(p = r.__k[i] =
				(p = t[i]) == null || typeof p == "boolean"
					? null
					: typeof p == "string" || typeof p == "number" || typeof p == "bigint"
					? M(null, p, null, null, p)
					: Array.isArray(p)
					? M(C, { children: p }, null, null, null)
					: p.__b > 0
					? M(p.type, p.props, p.key, null, p.__v)
					: p) != null
		) {
			if (
				((p.__ = r),
				(p.__b = r.__b + 1),
				(s = h[i]) === null || (s && p.key == s.key && p.type === s.type))
			)
				h[i] = void 0;
			else
				for (x = 0; x < w; x++) {
					if ((s = h[x]) && p.key == s.key && p.type === s.type) {
						h[x] = void 0;
						break;
					}
					s = null;
				}
			O(o, p, (s = s || I), a, n, d, l, m, u),
				(b = p.__e),
				(x = p.ref) &&
					s.ref != x &&
					(f || (f = []),
					s.ref && f.push(s.ref, null, p),
					f.push(x, p.__c || b, p)),
				b != null
					? (y == null && (y = b),
					  typeof p.type == "function" && p.__k === s.__k
							? (p.__d = m = pt(p, m, o))
							: (m = st(o, p, s, h, b, m)),
					  typeof r.type == "function" && (r.__d = m))
					: m && s.__e == m && m.parentNode != o && (m = L(s));
		}
	for (r.__e = y, i = w; i--; )
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
		n === "children" || n === "key" || n in t || H(o, n, null, r[n], e);
	for (n in t)
		(a && typeof t[n] != "function") ||
			n === "children" ||
			n === "key" ||
			n === "value" ||
			n === "checked" ||
			r[n] === t[n] ||
			H(o, n, t[n], r[n], e);
}
function K(o, t, r) {
	t[0] === "-"
		? o.setProperty(t, r)
		: (o[t] =
				r == null ? "" : typeof r != "number" || vt.test(t) ? r : r + "px");
}
function H(o, t, r, e, a) {
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
				? e || o.addEventListener(t, n ? J : G, n)
				: o.removeEventListener(t, n ? J : G, n);
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
function J(o) {
	this.l[o.type + !0](g.event ? g.event(o) : o);
}
function O(o, t, r, e, a, n, d, l, m) {
	var u,
		i,
		x,
		s,
		p,
		b,
		y,
		f,
		h,
		w,
		z,
		_,
		j,
		v = t.type;
	if (t.constructor !== void 0) return null;
	r.__h != null &&
		((m = r.__h), (l = t.__e = r.__e), (t.__h = null), (n = [l])),
		(u = g.__b) && u(t);
	try {
		t: if (typeof v == "function") {
			if (
				((f = t.props),
				(h = (u = v.contextType) && e[u.__c]),
				(w = u ? (h ? h.props.value : u.__) : e),
				r.__c
					? (y = (i = t.__c = r.__c).__ = i.__E)
					: ("prototype" in v && v.prototype.render
							? (t.__c = i = new v(f, w))
							: ((t.__c = i = new B(f, w)),
							  (i.constructor = v),
							  (i.render = zt)),
					  h && h.sub(i),
					  (i.props = f),
					  i.state || (i.state = {}),
					  (i.context = w),
					  (i.__n = e),
					  (x = i.__d = !0),
					  (i.__h = [])),
				i.__s == null && (i.__s = i.state),
				v.getDerivedStateFromProps != null &&
					(i.__s == i.state && (i.__s = N({}, i.__s)),
					N(i.__s, v.getDerivedStateFromProps(f, i.__s))),
				(s = i.props),
				(p = i.state),
				x)
			)
				v.getDerivedStateFromProps == null &&
					i.componentWillMount != null &&
					i.componentWillMount(),
					i.componentDidMount != null && i.__h.push(i.componentDidMount);
			else {
				if (
					(v.getDerivedStateFromProps == null &&
						f !== s &&
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
						t.__k.forEach(function (S) {
							S && (S.__ = t);
						}),
						i.__h.length && d.push(i);
					break t;
				}
				i.componentWillUpdate != null && i.componentWillUpdate(f, i.__s, w),
					i.componentDidUpdate != null &&
						i.__h.push(function () {
							i.componentDidUpdate(s, p, b);
						});
			}
			if (
				((i.context = w),
				(i.props = f),
				(i.__v = t),
				(i.__P = o),
				(z = g.__r),
				(_ = 0),
				"prototype" in v && v.prototype.render)
			)
				(i.state = i.__s),
					(i.__d = !1),
					z && z(t),
					(u = i.render(i.props, i.state, i.context));
			else
				do
					(i.__d = !1),
						z && z(t),
						(u = i.render(i.props, i.state, i.context)),
						(i.state = i.__s);
				while (i.__d && ++_ < 25);
			(i.state = i.__s),
				i.getChildContext != null && (e = N(N({}, e), i.getChildContext())),
				x ||
					i.getSnapshotBeforeUpdate == null ||
					(b = i.getSnapshotBeforeUpdate(s, p)),
				(j = u != null && u.type === C && u.key == null ? u.props.children : u),
				dt(o, Array.isArray(j) ? j : [j], t, r, e, a, n, d, l, m),
				(i.base = t.__e),
				(t.__h = null),
				i.__h.length && d.push(i),
				y && (i.__E = i.__ = null),
				(i.__e = !1);
		} else
			n == null && t.__v === r.__v
				? ((t.__k = r.__k), (t.__e = r.__e))
				: (t.__e = _t(r.__e, t, r, e, a, n, d, m));
		(u = g.diffed) && u(t);
	} catch (S) {
		(t.__v = null),
			(m || n != null) &&
				((t.__e = l), (t.__h = !!m), (n[n.indexOf(l)] = null)),
			g.__e(S, t, r);
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
		s = t.props,
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
		if (p === null) return document.createTextNode(s);
		(o = a
			? document.createElementNS("http://www.w3.org/2000/svg", p)
			: document.createElement(p, s.is && s)),
			(n = null),
			(l = !1);
	}
	if (p === null) x === s || (l && o.data === s) || (o.data = s);
	else {
		if (
			((n = n && F.call(o.childNodes)),
			(u = (x = r.props || I).dangerouslySetInnerHTML),
			(i = s.dangerouslySetInnerHTML),
			!l)
		) {
			if (n != null)
				for (x = {}, b = 0; b < o.attributes.length; b++)
					x[o.attributes[b].name] = o.attributes[b].value;
			(i || u) &&
				((i && ((u && i.__html == u.__html) || i.__html === o.innerHTML)) ||
					(o.innerHTML = (i && i.__html) || ""));
		}
		if ((yt(o, s, x, a, l), i)) t.__k = [];
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
			("value" in s &&
				(b = s.value) !== void 0 &&
				(b !== o.value ||
					(p === "progress" && !b) ||
					(p === "option" && b !== x.value)) &&
				H(o, "value", b, x.value, !1),
			"checked" in s &&
				(b = s.checked) !== void 0 &&
				b !== o.checked &&
				H(o, "checked", b, x.checked, !1));
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
			a || I,
			I,
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
	(B.prototype.setState = function (o, t) {
		var r;
		(r =
			this.__s != null && this.__s !== this.state
				? this.__s
				: (this.__s = N({}, this.state))),
			typeof o == "function" && (o = o(N({}, r), this.props)),
			o && N(r, o),
			o != null && this.__v && (t && this.__h.push(t), Y(this));
	}),
	(B.prototype.forceUpdate = function (o) {
		this.__v && ((this.__e = !0), o && this.__h.push(o), Y(this));
	}),
	(B.prototype.render = C),
	(T = []),
	(it =
		typeof Promise == "function"
			? Promise.prototype.then.bind(Promise.resolve())
			: setTimeout),
	($.__r = 0);
var q,
	k,
	W,
	Q,
	R = 0,
	ft = [],
	P = [],
	X = g.__b,
	Z = g.__r,
	tt = g.diffed,
	ot = g.__c,
	rt = g.unmount;
function ut(o, t) {
	g.__h && g.__h(k, o, R || t), (R = 0);
	var r = k.__H || (k.__H = { __: [], __h: [] });
	return o >= r.__.length && r.__.push({ __V: P }), r.__[o];
}
function A(o) {
	return (R = 1), Nt(ht, o);
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
			(e.__c = k)),
		e.__
	);
}
function Ct(o, t) {
	var r = ut(q++, 7);
	return Tt(r.__H, t) ? ((r.__V = o()), (r.u = t), (r.__h = o), r.__V) : r.__;
}
function Lt() {
	for (var o; (o = ft.shift()); )
		if (o.__P)
			try {
				o.__H.__h.forEach(E), o.__H.__h.forEach(D), (o.__H.__h = []);
			} catch (t) {
				(o.__H.__h = []), g.__e(t, o.__v);
			}
}
(g.__b = function (o) {
	(k = null), X && X(o);
}),
	(g.__r = function (o) {
		Z && Z(o), (q = 0);
		var t = (k = o.__c).__H;
		t &&
			(W === k
				? ((t.__h = []),
				  (k.__h = []),
				  t.__.forEach(function (r) {
						(r.__V = P), (r.u = void 0);
				  }))
				: (t.__h.forEach(E), t.__h.forEach(D), (t.__h = []))),
			(W = k);
	}),
	(g.diffed = function (o) {
		tt && tt(o);
		var t = o.__c;
		t &&
			t.__H &&
			(t.__H.__h.length &&
				((ft.push(t) !== 1 && Q === g.requestAnimationFrame) ||
					(
						(Q = g.requestAnimationFrame) ||
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
			(W = k = null);
	}),
	(g.__c = function (o, t) {
		t.some(function (r) {
			try {
				r.__h.forEach(E),
					(r.__h = r.__h.filter(function (e) {
						return !e.__ || D(e);
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
	var t = k,
		r = o.__c;
	typeof r == "function" && ((o.__c = void 0), r()), (k = t);
}
function D(o) {
	var t = k;
	(o.__c = o.__()), (k = t);
}
function Tt(o, t) {
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
class St {
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
	Mt = (o, t) => o ** t >= 1e7,
	Bt = (o, t) => {
		if ((console.time("normal"), o.length === 1))
			return { tooSlow: !1, probs: [[1]] };
		const r = Mt(o.length, t);
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
			const m = new St(o.length, l + 1);
			for (const u of m) {
				const i = new Set(u);
				if (u.length !== i.size) continue;
				const x = u[0],
					s = d(u);
				if (((a[x][l] += s), l === t - 1))
					for (let p = 0; p < n.length; p++) {
						if (i.has(p)) continue;
						let b = 0;
						for (const y of u) y > p && (b += 1);
						n[p][b] += s;
					}
			}
		}
		for (let l = 0; l < o.length; l++)
			for (let m = 0; m < t + 1; m++)
				l + m > t - 1 && l + m < o.length && (a[l][l + m] = n[l][m]);
		return { tooSlow: r, probs: a };
	};
var Pt = 0;
function c(o, t, r, e, a) {
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
	It = o => (o !== void 0 ? `${(o * 100).toFixed(1)}%` : void 0);
function $t() {
	var p, b, y;
	const [o, t] = A("nba2019"),
		r = U.find(f => f.key === o),
		[e, a] = A((p = r == null ? void 0 : r.chances) != null ? p : []),
		[n, d] = A((b = r == null ? void 0 : r.numToPick) != null ? b : 0),
		[l, m] = A(),
		{ probs: u, tooSlow: i } = Ct(() => Bt(e, n), [e, n]),
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
		s = () => {
			m(void 0), a([]), t("custom");
		};
	return c(C, {
		children: [
			c("div", {
				className: "row",
				style: { maxWidth: 500 },
				children: [
					c("div", {
						className: "col",
						children: [
							c("label", {
								className: "form-label",
								htmlFor: "presetKey",
								children: "Preset Lottery Type",
							}),
							c("select", {
								className: "form-select",
								id: "presetKey",
								onChange: f => {
									const h = U.find(w => w.key === f.target.value);
									h
										? (m(void 0), t(h.key), a(h.chances), d(h.numToPick))
										: t("custom");
								},
								value: (y = r == null ? void 0 : r.key) != null ? y : "custom",
								children: [
									U.map(f =>
										c("option", { value: f.key, children: f.title }, f.key),
									),
									c("option", { value: "custom", children: "Custom" }),
								],
							}),
						],
					}),
					c("div", {
						className: "col",
						children: [
							c("label", {
								className: "form-label",
								htmlFor: "numToPick",
								children: [
									c("span", {
										className: "d-sm-none",
										children: "# Lottery Selections",
									}),
									c("span", {
										className: "d-none d-sm-inline",
										children: "Number of Lottery Selections",
									}),
								],
							}),
							c("input", {
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
				? c("div", { className: "text-muted mt-2", children: r.description })
				: null,
			i
				? c(C, {
						children: c("div", {
							className: "text-danger mt-2 mb-1",
							children:
								"Computing exact odds for so many teams and picks is too slow, so estimates are shown.",
						}),
				  })
				: null,
			c("div", {
				className: "mt-3 d-sm-flex",
				children: [
					c("div", {
						children: [
							c("button", {
								className: "btn btn-outline-primary me-2",
								type: "button",
								onClick: x("top"),
								children: "Add Team",
							}),
							c("button", {
								className: "btn btn-outline-danger me-2",
								type: "button",
								onClick: s,
								disabled: e.length === 0,
								children: "Clear Teams",
							}),
						],
					}),
					c("div", {
						className: "mt-2 mt-sm-0",
						children: [
							c("button", {
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
								? c("button", {
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
				],
			}),
			e.length > 0
				? c("div", {
						className: "table-responsive mt-2",
						children: c("table", {
							className: "table mb-0",
							style: { width: "unset" },
							children: [
								c("thead", {
									className: "text-center",
									children: c("tr", {
										children: [
											c("th", {}),
											c("th", { children: "Chances" }),
											e.map((f, h) => c("th", { children: Et(h + 1) }, h)),
										],
									}),
								}),
								c("tbody", {
									className: "text-end",
									children: e.map((f, h) => {
										const w = `chances-${h}`;
										return c("tr", {
											children: [
												c("td", {
													className: "py-0 align-middle",
													style: { width: 0 },
													children: c("button", {
														className:
															"btn btn-link text-danger border-0 p-0 m-0 text-decoration-none fs-5",
														type: "button",
														onClick: () => {
															m(void 0),
																a(e.filter((z, _) => _ !== h)),
																t("custom");
														},
														children: "\u2715",
													}),
												}),
												c("td", {
													className: "py-0 align-middle",
													style: { width: 0 },
													children: [
														c("label", {
															className: "visually-hidden",
															htmlFor: w,
															children: ["Lottery chances for team #", h + 1],
														}),
														c("input", {
															id: w,
															className: "form-control form-control-sm",
															type: "text",
															value: f,
															onChange: z => {
																const _ = parseFloat(z.target.value);
																Number.isNaN(_) ||
																	(m(void 0),
																	t("custom"),
																	a(e.map((j, v) => (h === v ? _ : j))));
															},
														}),
													],
												}),
												e.map((z, _) => {
													const j = It(u[h][_]);
													return c("td", {
														className:
															l && l[_] === h ? "table-success" : void 0,
														children: j,
													});
												}),
											],
										});
									}),
								}),
							],
						}),
				  })
				: c("div", {
						className: "my-3",
						children: "You should add some teams...",
				  }),
			e.length > 0
				? c("div", {
						className: "my-3",
						children: [
							c("button", {
								className: "btn btn-outline-primary me-2",
								type: "button",
								onClick: x("bottom"),
								children: "Add Team",
							}),
							c("button", {
								className: "btn btn-outline-danger",
								type: "button",
								onClick: s,
								children: "Clear Teams",
							}),
						],
				  })
				: null,
		],
	});
}
jt(c($t, {}), document.getElementById("app"));
