(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const c of document.querySelectorAll('link[rel="modulepreload"]')) l(c);
	new MutationObserver(c => {
		for (const o of c)
			if (o.type === "childList")
				for (const _ of o.addedNodes)
					_.tagName === "LINK" && _.rel === "modulepreload" && l(_);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(c) {
		const o = {};
		return (
			c.integrity && (o.integrity = c.integrity),
			c.referrerpolicy && (o.referrerPolicy = c.referrerpolicy),
			c.crossorigin === "use-credentials"
				? (o.credentials = "include")
				: c.crossorigin === "anonymous"
					? (o.credentials = "omit")
					: (o.credentials = "same-origin"),
			o
		);
	}
	function l(c) {
		if (c.ep) return;
		c.ep = !0;
		const o = n(c);
		fetch(c.href, o);
	}
})();
var F,
	u,
	pe,
	S,
	oe,
	U = {},
	be = [],
	Le = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function G(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function ye(e) {
	var t = e.parentNode;
	t && t.removeChild(e);
}
function We(e, t, n) {
	var l,
		c,
		o,
		_ = {};
	for (o in t)
		o == "key" ? (l = t[o]) : o == "ref" ? (c = t[o]) : (_[o] = t[o]);
	if (
		(arguments.length > 2 &&
			(_.children = arguments.length > 3 ? F.call(arguments, 2) : n),
		typeof e == "function" && e.defaultProps != null)
	)
		for (o in e.defaultProps) _[o] === void 0 && (_[o] = e.defaultProps[o]);
	return A(e, _, l, c, null);
}
function A(e, t, n, l, c) {
	var o = {
		type: e,
		props: t,
		key: n,
		ref: l,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: c == null ? ++pe : c,
	};
	return c == null && u.vnode != null && u.vnode(o), o;
}
function P(e) {
	return e.children;
}
function Y(e, t) {
	(this.props = e), (this.context = t);
}
function K(e, t) {
	if (t == null) return e.__ ? K(e.__, e.__.__k.indexOf(e) + 1) : null;
	for (var n; t < e.__k.length; t++)
		if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? K(e) : null;
}
function ve(e) {
	var t, n;
	if ((e = e.__) != null && e.__c != null) {
		for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) {
				e.__e = e.__c.base = n.__e;
				break;
			}
		return ve(e);
	}
}
function re(e) {
	((!e.__d && (e.__d = !0) && S.push(e) && !B.__r++) ||
		oe !== u.debounceRendering) &&
		((oe = u.debounceRendering) || setTimeout)(B);
}
function B() {
	for (var e; (B.__r = S.length); )
		(e = S.sort(function (t, n) {
			return t.__v.__b - n.__v.__b;
		})),
			(S = []),
			e.some(function (t) {
				var n, l, c, o, _, d;
				t.__d &&
					((_ = (o = (n = t).__v).__e),
					(d = n.__P) &&
						((l = []),
						((c = G({}, o)).__v = o.__v + 1),
						te(
							d,
							o,
							c,
							n.__n,
							d.ownerSVGElement !== void 0,
							o.__h != null ? [_] : null,
							l,
							_ == null ? K(o) : _,
							o.__h,
						),
						Te(l, o),
						o.__e != _ && ve(o)));
			});
}
function ge(e, t, n, l, c, o, _, d, a, m) {
	var r,
		y,
		h,
		i,
		f,
		N,
		p,
		b = (l && l.__k) || be,
		g = b.length;
	for (n.__k = [], r = 0; r < t.length; r++)
		if (
			(i = n.__k[r] =
				(i = t[r]) == null || typeof i == "boolean"
					? null
					: typeof i == "string" || typeof i == "number" || typeof i == "bigint"
						? A(null, i, null, null, i)
						: Array.isArray(i)
							? A(P, { children: i }, null, null, null)
							: i.__b > 0
								? A(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
								: i) != null
		) {
			if (
				((i.__ = n),
				(i.__b = n.__b + 1),
				(h = b[r]) === null || (h && i.key == h.key && i.type === h.type))
			)
				b[r] = void 0;
			else
				for (y = 0; y < g; y++) {
					if ((h = b[y]) && i.key == h.key && i.type === h.type) {
						b[y] = void 0;
						break;
					}
					h = null;
				}
			te(e, i, (h = h || U), c, o, _, d, a, m),
				(f = i.__e),
				(y = i.ref) &&
					h.ref != y &&
					(p || (p = []),
					h.ref && p.push(h.ref, null, i),
					p.push(y, i.__c || f, i)),
				f != null
					? (N == null && (N = f),
						typeof i.type == "function" && i.__k === h.__k
							? (i.__d = a = ke(i, a, e))
							: (a = Ne(e, i, h, b, f, a)),
						typeof n.type == "function" && (n.__d = a))
					: a && h.__e == a && a.parentNode != e && (a = K(h));
		}
	for (n.__e = N, r = g; r--; )
		b[r] != null &&
			(typeof n.type == "function" &&
				b[r].__e != null &&
				b[r].__e == n.__d &&
				(n.__d = K(l, r + 1)),
			Pe(b[r], b[r]));
	if (p) for (r = 0; r < p.length; r++) xe(p[r], p[++r], p[++r]);
}
function ke(e, t, n) {
	for (var l, c = e.__k, o = 0; c && o < c.length; o++)
		(l = c[o]) &&
			((l.__ = e),
			(t =
				typeof l.type == "function" ? ke(l, t, n) : Ne(n, l, l, c, l.__e, t)));
	return t;
}
function Ne(e, t, n, l, c, o) {
	var _, d, a;
	if (t.__d !== void 0) (_ = t.__d), (t.__d = void 0);
	else if (n == null || c != o || c.parentNode == null)
		e: if (o == null || o.parentNode !== e) e.appendChild(c), (_ = null);
		else {
			for (d = o, a = 0; (d = d.nextSibling) && a < l.length; a += 2)
				if (d == c) break e;
			e.insertBefore(c, o), (_ = o);
		}
	return _ !== void 0 ? _ : c.nextSibling;
}
function Ke(e, t, n, l, c) {
	var o;
	for (o in n)
		o === "children" || o === "key" || o in t || R(e, o, null, n[o], l);
	for (o in t)
		(c && typeof t[o] != "function") ||
			o === "children" ||
			o === "key" ||
			o === "value" ||
			o === "checked" ||
			n[o] === t[o] ||
			R(e, o, t[o], n[o], l);
}
function le(e, t, n) {
	t[0] === "-"
		? e.setProperty(t, n)
		: (e[t] =
				n == null ? "" : typeof n != "number" || Le.test(t) ? n : n + "px");
}
function R(e, t, n, l, c) {
	var o;
	e: if (t === "style")
		if (typeof n == "string") e.style.cssText = n;
		else {
			if ((typeof l == "string" && (e.style.cssText = l = ""), l))
				for (t in l) (n && t in n) || le(e.style, t, "");
			if (n) for (t in n) (l && n[t] === l[t]) || le(e.style, t, n[t]);
		}
	else if (t[0] === "o" && t[1] === "n")
		(o = t !== (t = t.replace(/Capture$/, ""))),
			(t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
			e.l || (e.l = {}),
			(e.l[t + o] = n),
			n
				? l || e.addEventListener(t, o ? _e : ce, o)
				: e.removeEventListener(t, o ? _e : ce, o);
	else if (t !== "dangerouslySetInnerHTML") {
		if (c) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (
			t !== "href" &&
			t !== "list" &&
			t !== "form" &&
			t !== "tabIndex" &&
			t !== "download" &&
			t in e
		)
			try {
				e[t] = n == null ? "" : n;
				break e;
			} catch {}
		typeof n == "function" ||
			(n != null && (n !== !1 || (t[0] === "a" && t[1] === "r"))
				? e.setAttribute(t, n)
				: e.removeAttribute(t));
	}
}
function ce(e) {
	this.l[e.type + !1](u.event ? u.event(e) : e);
}
function _e(e) {
	this.l[e.type + !0](u.event ? u.event(e) : e);
}
function te(e, t, n, l, c, o, _, d, a) {
	var m,
		r,
		y,
		h,
		i,
		f,
		N,
		p,
		b,
		g,
		C,
		H,
		w,
		T = t.type;
	if (t.constructor !== void 0) return null;
	n.__h != null &&
		((a = n.__h), (d = t.__e = n.__e), (t.__h = null), (o = [d])),
		(m = u.__b) && m(t);
	try {
		e: if (typeof T == "function") {
			if (
				((p = t.props),
				(b = (m = T.contextType) && l[m.__c]),
				(g = m ? (b ? b.props.value : m.__) : l),
				n.__c
					? (N = (r = t.__c = n.__c).__ = r.__E)
					: ("prototype" in T && T.prototype.render
							? (t.__c = r = new T(p, g))
							: ((t.__c = r = new Y(p, g)),
								(r.constructor = T),
								(r.render = Se)),
						b && b.sub(r),
						(r.props = p),
						r.state || (r.state = {}),
						(r.context = g),
						(r.__n = l),
						(y = r.__d = !0),
						(r.__h = [])),
				r.__s == null && (r.__s = r.state),
				T.getDerivedStateFromProps != null &&
					(r.__s == r.state && (r.__s = G({}, r.__s)),
					G(r.__s, T.getDerivedStateFromProps(p, r.__s))),
				(h = r.props),
				(i = r.state),
				y)
			)
				T.getDerivedStateFromProps == null &&
					r.componentWillMount != null &&
					r.componentWillMount(),
					r.componentDidMount != null && r.__h.push(r.componentDidMount);
			else {
				if (
					(T.getDerivedStateFromProps == null &&
						p !== h &&
						r.componentWillReceiveProps != null &&
						r.componentWillReceiveProps(p, g),
					(!r.__e &&
						r.shouldComponentUpdate != null &&
						r.shouldComponentUpdate(p, r.__s, g) === !1) ||
						t.__v === n.__v)
				) {
					(r.props = p),
						(r.state = r.__s),
						t.__v !== n.__v && (r.__d = !1),
						(r.__v = t),
						(t.__e = n.__e),
						(t.__k = n.__k),
						t.__k.forEach(function (v) {
							v && (v.__ = t);
						}),
						r.__h.length && _.push(r);
					break e;
				}
				r.componentWillUpdate != null && r.componentWillUpdate(p, r.__s, g),
					r.componentDidUpdate != null &&
						r.__h.push(function () {
							r.componentDidUpdate(h, i, f);
						});
			}
			if (
				((r.context = g),
				(r.props = p),
				(r.__v = t),
				(r.__P = e),
				(C = u.__r),
				(H = 0),
				"prototype" in T && T.prototype.render)
			)
				(r.state = r.__s),
					(r.__d = !1),
					C && C(t),
					(m = r.render(r.props, r.state, r.context));
			else
				do
					(r.__d = !1),
						C && C(t),
						(m = r.render(r.props, r.state, r.context)),
						(r.state = r.__s);
				while (r.__d && ++H < 25);
			(r.state = r.__s),
				r.getChildContext != null && (l = G(G({}, l), r.getChildContext())),
				y ||
					r.getSnapshotBeforeUpdate == null ||
					(f = r.getSnapshotBeforeUpdate(h, i)),
				(w = m != null && m.type === P && m.key == null ? m.props.children : m),
				ge(e, Array.isArray(w) ? w : [w], t, n, l, c, o, _, d, a),
				(r.base = t.__e),
				(t.__h = null),
				r.__h.length && _.push(r),
				N && (r.__E = r.__ = null),
				(r.__e = !1);
		} else
			o == null && t.__v === n.__v
				? ((t.__k = n.__k), (t.__e = n.__e))
				: (t.__e = He(n.__e, t, n, l, c, o, _, a));
		(m = u.diffed) && m(t);
	} catch (v) {
		(t.__v = null),
			(a || o != null) &&
				((t.__e = d), (t.__h = !!a), (o[o.indexOf(d)] = null)),
			u.__e(v, t, n);
	}
}
function Te(e, t) {
	u.__c && u.__c(t, e),
		e.some(function (n) {
			try {
				(e = n.__h),
					(n.__h = []),
					e.some(function (l) {
						l.call(n);
					});
			} catch (l) {
				u.__e(l, n.__v);
			}
		});
}
function He(e, t, n, l, c, o, _, d) {
	var a,
		m,
		r,
		y = n.props,
		h = t.props,
		i = t.type,
		f = 0;
	if ((i === "svg" && (c = !0), o != null)) {
		for (; f < o.length; f++)
			if (
				(a = o[f]) &&
				"setAttribute" in a == !!i &&
				(i ? a.localName === i : a.nodeType === 3)
			) {
				(e = a), (o[f] = null);
				break;
			}
	}
	if (e == null) {
		if (i === null) return document.createTextNode(h);
		(e = c
			? document.createElementNS("http://www.w3.org/2000/svg", i)
			: document.createElement(i, h.is && h)),
			(o = null),
			(d = !1);
	}
	if (i === null) y === h || (d && e.data === h) || (e.data = h);
	else {
		if (
			((o = o && F.call(e.childNodes)),
			(m = (y = n.props || U).dangerouslySetInnerHTML),
			(r = h.dangerouslySetInnerHTML),
			!d)
		) {
			if (o != null)
				for (y = {}, f = 0; f < e.attributes.length; f++)
					y[e.attributes[f].name] = e.attributes[f].value;
			(r || m) &&
				((r && ((m && r.__html == m.__html) || r.__html === e.innerHTML)) ||
					(e.innerHTML = (r && r.__html) || ""));
		}
		if ((Ke(e, h, y, c, d), r)) t.__k = [];
		else if (
			((f = t.props.children),
			ge(
				e,
				Array.isArray(f) ? f : [f],
				t,
				n,
				l,
				c && i !== "foreignObject",
				o,
				_,
				o ? o[0] : n.__k && K(n, 0),
				d,
			),
			o != null)
		)
			for (f = o.length; f--; ) o[f] != null && ye(o[f]);
		d ||
			("value" in h &&
				(f = h.value) !== void 0 &&
				(f !== e.value ||
					(i === "progress" && !f) ||
					(i === "option" && f !== y.value)) &&
				R(e, "value", f, y.value, !1),
			"checked" in h &&
				(f = h.checked) !== void 0 &&
				f !== e.checked &&
				R(e, "checked", f, y.checked, !1));
	}
	return e;
}
function xe(e, t, n) {
	try {
		typeof e == "function" ? e(t) : (e.current = t);
	} catch (l) {
		u.__e(l, n);
	}
}
function Pe(e, t, n) {
	var l, c;
	if (
		(u.unmount && u.unmount(e),
		(l = e.ref) && ((l.current && l.current !== e.__e) || xe(l, null, t)),
		(l = e.__c) != null)
	) {
		if (l.componentWillUnmount)
			try {
				l.componentWillUnmount();
			} catch (o) {
				u.__e(o, t);
			}
		(l.base = l.__P = null), (e.__c = void 0);
	}
	if ((l = e.__k))
		for (c = 0; c < l.length; c++)
			l[c] && Pe(l[c], t, typeof e.type != "function");
	n || e.__e == null || ye(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function Se(e, t, n) {
	return this.constructor(e, n);
}
function Xe(e, t, n) {
	var l, c, o;
	u.__ && u.__(e, t),
		(c = (l = typeof n == "function") ? null : (n && n.__k) || t.__k),
		(o = []),
		te(
			t,
			(e = ((!l && n) || t).__k = We(P, null, [e])),
			c || U,
			U,
			t.ownerSVGElement !== void 0,
			!l && n ? [n] : c ? null : t.firstChild ? F.call(t.childNodes) : null,
			o,
			!l && n ? n : c ? c.__e : t.firstChild,
			l,
		),
		Te(o, e);
}
(F = be.slice),
	(u = {
		__e: function (e, t, n, l) {
			for (var c, o, _; (t = t.__); )
				if ((c = t.__c) && !c.__)
					try {
						if (
							((o = c.constructor) &&
								o.getDerivedStateFromError != null &&
								(c.setState(o.getDerivedStateFromError(e)), (_ = c.__d)),
							c.componentDidCatch != null &&
								(c.componentDidCatch(e, l || {}), (_ = c.__d)),
							_)
						)
							return (c.__E = c);
					} catch (d) {
						e = d;
					}
			throw e;
		},
	}),
	(pe = 0),
	(Y.prototype.setState = function (e, t) {
		var n;
		(n =
			this.__s != null && this.__s !== this.state
				? this.__s
				: (this.__s = G({}, this.state))),
			typeof e == "function" && (e = e(G({}, n), this.props)),
			e && G(n, e),
			e != null && this.__v && (t && this.__h.push(t), re(this));
	}),
	(Y.prototype.forceUpdate = function (e) {
		this.__v && ((this.__e = !0), e && this.__h.push(e), re(this));
	}),
	(Y.prototype.render = P),
	(S = []),
	(B.__r = 0);
var ne,
	k,
	E,
	se,
	J = 0,
	Ce = [],
	z = [],
	ie = u.__b,
	ae = u.__r,
	de = u.diffed,
	ue = u.__c,
	he = u.unmount;
function Ge(e, t) {
	u.__h && u.__h(k, e, J || t), (J = 0);
	var n = k.__H || (k.__H = { __: [], __h: [] });
	return e >= n.__.length && n.__.push({ __V: z }), n.__[e];
}
function W(e) {
	return (J = 1), Ie(we, e);
}
function Ie(e, t, n) {
	var l = Ge(ne++, 2);
	if (
		((l.t = e),
		!l.__c &&
			((l.__ = [
				n ? n(t) : we(void 0, t),
				function (o) {
					var _ = l.__N ? l.__N[0] : l.__[0],
						d = l.t(_, o);
					_ !== d && ((l.__N = [d, l.__[1]]), l.__c.setState({}));
				},
			]),
			(l.__c = k),
			!k.u))
	) {
		k.u = !0;
		var c = k.shouldComponentUpdate;
		k.shouldComponentUpdate = function (o, _, d) {
			if (!l.__c.__H) return !0;
			var a = l.__c.__H.__.filter(function (r) {
				return r.__c;
			});
			if (
				a.every(function (r) {
					return !r.__N;
				})
			)
				return !c || c.call(this, o, _, d);
			var m = !1;
			return (
				a.forEach(function (r) {
					if (r.__N) {
						var y = r.__[0];
						(r.__ = r.__N), (r.__N = void 0), y !== r.__[0] && (m = !0);
					}
				}),
				!!m && (!c || c.call(this, o, _, d))
			);
		};
	}
	return l.__N || l.__;
}
function j(e, t) {
	var n = Ge(ne++, 3);
	!u.__s && Ae(n.__H, t) && ((n.__ = e), (n.i = t), k.__H.__h.push(n));
}
function Me() {
	for (var e; (e = Ce.shift()); )
		if (e.__P && e.__H)
			try {
				e.__H.__h.forEach(O), e.__H.__h.forEach(q), (e.__H.__h = []);
			} catch (t) {
				(e.__H.__h = []), u.__e(t, e.__v);
			}
}
(u.__b = function (e) {
	typeof e.type != "function" || e.o || e.type === P
		? e.o || (e.o = e.__ && e.__.o ? e.__.o : "")
		: (e.o =
				(e.__ && e.__.o ? e.__.o : "") +
				(e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0)),
		(k = null),
		ie && ie(e);
}),
	(u.__r = function (e) {
		ae && ae(e), (ne = 0);
		var t = (k = e.__c).__H;
		t &&
			(E === k
				? ((t.__h = []),
					(k.__h = []),
					t.__.forEach(function (n) {
						n.__N && (n.__ = n.__N), (n.__V = z), (n.__N = n.i = void 0);
					}))
				: (t.__h.forEach(O), t.__h.forEach(q), (t.__h = []))),
			(E = k);
	}),
	(u.diffed = function (e) {
		de && de(e);
		var t = e.__c;
		t &&
			t.__H &&
			(t.__H.__h.length &&
				((Ce.push(t) !== 1 && se === u.requestAnimationFrame) ||
					((se = u.requestAnimationFrame) || Ve)(Me)),
			t.__H.__.forEach(function (n) {
				n.i && (n.__H = n.i),
					n.__V !== z && (n.__ = n.__V),
					(n.i = void 0),
					(n.__V = z);
			})),
			(E = k = null);
	}),
	(u.__c = function (e, t) {
		t.some(function (n) {
			try {
				n.__h.forEach(O),
					(n.__h = n.__h.filter(function (l) {
						return !l.__ || q(l);
					}));
			} catch (l) {
				t.some(function (c) {
					c.__h && (c.__h = []);
				}),
					(t = []),
					u.__e(l, n.__v);
			}
		}),
			ue && ue(e, t);
	}),
	(u.unmount = function (e) {
		he && he(e);
		var t,
			n = e.__c;
		n &&
			n.__H &&
			(n.__H.__.forEach(function (l) {
				try {
					O(l);
				} catch (c) {
					t = c;
				}
			}),
			(n.__H = void 0),
			t && u.__e(t, n.__v));
	});
var me = typeof requestAnimationFrame == "function";
function Ve(e) {
	var t,
		n = function () {
			clearTimeout(l), me && cancelAnimationFrame(t), setTimeout(e);
		},
		l = setTimeout(n, 100);
	me && (t = requestAnimationFrame(n));
}
function O(e) {
	var t = k,
		n = e.__c;
	typeof n == "function" && ((e.__c = void 0), n()), (k = t);
}
function q(e) {
	var t = k;
	(e.__c = e.__()), (k = t);
}
function Ae(e, t) {
	return (
		!e ||
		e.length !== t.length ||
		t.some(function (n, l) {
			return n !== e[l];
		})
	);
}
function we(e, t) {
	return typeof t == "function" ? t(e) : t;
}
const Ye = (e, t) => {
	let n = e.map((c, o) => ({ chances: c, index: o }));
	const l = [];
	for (let c = 0; c < t; c++) {
		let o = 0;
		for (const a of n) o += a.chances;
		const _ = Math.random() * o;
		let d = 0;
		for (const a of n)
			if (((d += a.chances), _ < d)) {
				l.push(a.index), (n = n.filter(m => m !== a));
				break;
			}
	}
	return l.push(...n.map(c => c.index)), l;
};
var ze = 0;
function s(e, t, n, l, c) {
	var o,
		_,
		d = {};
	for (_ in t) _ == "ref" ? (o = t[_]) : (d[_] = t[_]);
	var a = {
		type: e,
		props: d,
		key: n,
		ref: o,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: --ze,
		__source: c,
		__self: l,
	};
	if (typeof e == "function" && (o = e.defaultProps))
		for (_ in o) d[_] === void 0 && (d[_] = o[_]);
	return u.vnode && u.vnode(a), a;
}
const M = ({
		children: e,
		className: t,
		disabled: n,
		onClick: l,
		outline: c,
		variant: o,
	}) => {
		let _;
		return (
			o === "primary"
				? (_ = "enabled:hover:bg-blue-500 text-blue-600 border-blue-600")
				: o === "danger"
					? (_ = "enabled:hover:bg-red-500 text-red-600 border-red-600")
					: o === "success" &&
						(c || (_ = "enabled:hover:bg-green-800 text-white bg-green-700")),
			s("button", {
				className: `${c ? "bg-transparent " : ""}enabled:hover:text-white py-2 px-3 border enabled:hover:border-transparent rounded disabled:opacity-50 ${_}${t ? ` ${t}` : ""}`,
				disabled: n,
				onClick: l,
				type: "button",
				children: e,
			})
		);
	},
	Ze =
		"dmFyIHc9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBMPShkLGMsaCk9PmMgaW4gZD93KGQsYyx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6aH0pOmRbY109aDt2YXIgZz0oZCxjLGgpPT4oTChkLHR5cGVvZiBjIT0ic3ltYm9sIj9jKyIiOmMsaCksaCk7KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGQ9KHIsbyk9PntsZXQgaT1yLm1hcCgoZSxsKT0+KHtjaGFuY2VzOmUsaW5kZXg6bH0pKTtjb25zdCBzPVtdO2ZvcihsZXQgZT0wO2U8bztlKyspe2xldCBsPTA7Zm9yKGNvbnN0IHQgb2YgaSlsKz10LmNoYW5jZXM7Y29uc3QgYT1NYXRoLnJhbmRvbSgpKmw7bGV0IGY9MDtmb3IoY29uc3QgdCBvZiBpKWlmKGYrPXQuY2hhbmNlcyxhPGYpe3MucHVzaCh0LmluZGV4KSxpPWkuZmlsdGVyKG49Pm4hPT10KTticmVha319cmV0dXJuIHMucHVzaCguLi5pLm1hcChlPT5lLmluZGV4KSksc307Y2xhc3MgY3tjb25zdHJ1Y3RvcihvLGkpe2codGhpcywiaW5pdGlhbCIpO2codGhpcywic3RhcnQiKTtnKHRoaXMsImVuZCIpO2codGhpcywiZGltZW5zaW9ucyIpO3RoaXMuaW5pdGlhbD0hMCx0aGlzLnN0YXJ0PTAsdGhpcy5lbmQ9byx0aGlzLmRpbWVuc2lvbnM9aX1bU3ltYm9sLml0ZXJhdG9yXSgpe2NvbnN0IG89QXJyYXkodGhpcy5kaW1lbnNpb25zKS5maWxsKHRoaXMuc3RhcnQpLGk9cz0+e2lmKG9bc108dGhpcy5lbmQtMSlyZXR1cm4gdGhpcy5pbml0aWFsP3RoaXMuaW5pdGlhbD0hMTpvW3NdKz0xLCExO2lmKHM9PT0wKXJldHVybiEwO2ZvcihsZXQgZT1zO2U8dGhpcy5kaW1lbnNpb25zO2UrKylvW2VdPXRoaXMuc3RhcnQ7cmV0dXJuIGkocy0xKX07cmV0dXJue25leHQ6KCk9Pntjb25zdCBzPXRoaXMuZGltZW5zaW9ucy0xLGU9aShzKTtyZXR1cm4gZT97ZG9uZTplfTp7dmFsdWU6byxkb25lOmV9fX19fWNvbnN0IGg9KHIsbyk9Pntjb25zdCBzPVtdO2ZvcihsZXQgZT0wO2U8NWU1O2UrKyl7Y29uc3QgbD1kKHIsbyk7Zm9yKGxldCBhPTA7YTxsLmxlbmd0aDthKyspe2NvbnN0IGY9bFthXTtzW2ZdfHwoc1tmXT1bXSksc1tmXVthXT9zW2ZdW2FdKz0xLzVlNTpzW2ZdW2FdPTEvNWU1fX1yZXR1cm4gc30sbT0ocixvKT0+cioqbz49NWU2LHk9KHIsbyk9PntpZihyLmxlbmd0aD09PTEpcmV0dXJue3Rvb1Nsb3c6ITEscHJvYnM6W1sxXV19O2NvbnN0IGk9bShyLmxlbmd0aCxvKTtpZihpKXJldHVybnt0b29TbG93OmkscHJvYnM6aChyLG8pfTtjb25zdCBzPXIucmVkdWNlKCh0LG4pPT50K24sMCksZT1bXSxsPVtdLGE9bz09PTA/MTowO2ZvcihsZXQgdD0wO3Q8ci5sZW5ndGg7dCsrKXtlW3RdPVtdO2ZvcihsZXQgbj0wO248bztuKyspZVt0XVtuXT0wO2xbdF09QXJyYXkobysxKS5maWxsKGEpfWNvbnN0IGY9dD0+e2NvbnN0IG49dFswXSx1PXQuc2xpY2UoMSk7bGV0IGI9cztmb3IoY29uc3QgcCBvZiB1KWItPXJbcF07cmV0dXJuKHUubGVuZ3RoPT09MD8xOmYodSkpKnJbbl0vYn07Zm9yKGxldCB0PTA7dDxvJiYhKGkmJnQ+MCk7dCs9MSl7Y29uc3Qgbj1uZXcgYyhyLmxlbmd0aCx0KzEpO2Zvcihjb25zdCB1IG9mIG4pe2NvbnN0IGI9bmV3IFNldCh1KTtpZih1Lmxlbmd0aCE9PWIuc2l6ZSljb250aW51ZTtjb25zdCB4PXVbMF0sST1mKHUpO2lmKGVbeF1bdF0rPUksdD09PW8tMSlmb3IobGV0IHA9MDtwPGwubGVuZ3RoO3ArKyl7aWYoYi5oYXMocCkpY29udGludWU7bGV0IFM9MDtmb3IoY29uc3QgQSBvZiB1KUE+cCYmKFMrPTEpO2xbcF1bU10rPUl9fX1mb3IobGV0IHQ9MDt0PHIubGVuZ3RoO3QrKylmb3IobGV0IG49MDtuPG8rMTtuKyspdCtuPm8tMSYmdCtuPHIubGVuZ3RoJiYoZVt0XVt0K25dPWxbdF1bbl0pO3JldHVybnt0b29TbG93OmkscHJvYnM6ZX19O29ubWVzc2FnZT1yPT57cG9zdE1lc3NhZ2Uoey4uLnkoci5kYXRhLmNoYW5jZXMsci5kYXRhLm51bVRvUGljaykscmVxdWVzdENvdW50OnIuZGF0YS5yZXF1ZXN0Q291bnR9KX19KSgpOwo=",
	fe =
		typeof window < "u" &&
		window.Blob &&
		new Blob([atob(Ze)], { type: "text/javascript;charset=utf-8" });
function Oe() {
	const e = fe && (window.URL || window.webkitURL).createObjectURL(fe);
	try {
		return e
			? new Worker(e)
			: new Worker("data:application/javascript;base64," + Ze);
	} finally {
		e && (window.URL || window.webkitURL).revokeObjectURL(e);
	}
}
const Ue = e => {
		let t;
		return (
			e % 100 >= 11 && e % 100 <= 13
				? (t = "th")
				: e % 10 === 1
					? (t = "st")
					: e % 10 === 2
						? (t = "nd")
						: e % 10 === 3
							? (t = "rd")
							: (t = "th"),
			e.toString() + t
		);
	},
	Be = e => (e === void 0 ? e : e === 1 ? "100%" : `${(e * 100).toFixed(1)}%`),
	Re = ({
		chance: e,
		i: t,
		chances: n,
		lotteryResults: l,
		loadingProbs: c,
		names: o,
		probs: _,
		setChances: d,
		setLotteryResults: a,
		setNames: m,
		setPresetKey: r,
	}) => {
		const [y, h] = W(!1),
			i = `name-${t}`,
			f = `chances-${t}`;
		return s("tr", {
			className: `border-b ${y ? "odd:bg-yellow-200 even:bg-yellow-100 hover:bg-[#f6edaa]" : "odd:bg-gray-100 hover:bg-gray-200"}`,
			onClick: N => {
				["BUTTON", "INPUT"].includes(N.target.nodeName) || h(b => !b);
			},
			children: [
				s("td", {
					className: "py-0 w-0",
					children: s("button", {
						className: "text-red-600 text-xl",
						type: "button",
						onClick: () => {
							a(void 0), d(n.filter((p, b) => b !== t)), r("custom");
							const N = ee(o);
							m(N ? X(n.length - 1) : o.filter((p, b) => b !== t)), h(!1);
						},
						title: "Remove team",
						children: "\u2715",
					}),
				}),
				s("td", {
					className: "py-0",
					children: [
						s("label", {
							className: "sr-only",
							htmlFor: i,
							children: ["Name of team #", t + 1],
						}),
						s("input", {
							id: i,
							className: "form-control py-1 px-2 text-sm w-[100px]",
							type: "text",
							value: o[t],
							onChange: N => {
								const p = N.target.value;
								m(o.map((b, g) => (g === t ? p : b)));
							},
						}),
					],
				}),
				s("td", {
					className: "py-0 w-0",
					children: [
						s("label", {
							className: "sr-only",
							htmlFor: f,
							children: ["Lottery chances for team #", t + 1],
						}),
						s("input", {
							id: f,
							className: "form-control py-1 px-2 text-sm",
							type: "text",
							value: e,
							onChange: N => {
								const p = parseFloat(N.target.value);
								Number.isNaN(p) ||
									(a(void 0),
									r("custom"),
									d(n.map((b, g) => (t === g ? p : b))));
							},
						}),
					],
				}),
				n.map((N, p) => {
					var g;
					const b = Be((g = _[t]) == null ? void 0 : g[p]);
					return s("td", {
						className: `${l && l[p] === t ? "bg-green-200" : ""}${c ? " text-gray-500" : ""}`,
						children: b != null ? b : "\xA0",
					});
				}),
			],
		});
	},
	Fe = e =>
		s("table", {
			className: "table-auto",
			style: { width: "unset" },
			children: [
				s("thead", {
					className: "text-center",
					children: s("tr", {
						className: "border-b-2 border-gray-500",
						children: [
							s("th", {}),
							s("th", { children: "Team Name" }),
							s("th", { children: "Chances" }),
							e.chances.map((t, n) => s("th", { children: Ue(n + 1) }, n)),
						],
					}),
				}),
				s("tbody", {
					className: "text-end",
					children: e.chances.map((t, n) =>
						s(Re, { i: n, chance: t, ...e }, n),
					),
				}),
			],
		}),
	$ = [
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
	X = e => {
		const t = [];
		for (let n = 0; n < e; n++) t.push(`Team ${n + 1}`);
		return t;
	},
	ee = e => {
		const t = X(e.length);
		for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
		return !0;
	},
	D = new Oe();
let Q = 0;
const V = (e, t) => {
		const [n, l] = W(() => {
			try {
				const c = localStorage.getItem(e);
				if (c !== null) return JSON.parse(c);
			} catch (c) {
				console.warn("useLocalStorageState read error", e, c);
			}
			return typeof t == "function" ? t() : t;
		});
		return (
			j(() => {
				try {
					localStorage.setItem(e, JSON.stringify(n));
				} catch (c) {
					console.warn("useLocalStorageState write error", e, c);
				}
			}, [e, n]),
			[n, l]
		);
	},
	Ee = () => {
		var H, w, T;
		const [e, t] = V("presetKey", "nba2019"),
			n = $.find(v => v.key === e),
			[l, c] = V(
				"chances",
				(H = n == null ? void 0 : n.chances) != null ? H : [],
			),
			[o, _] = V(
				"numToPick",
				(w = n == null ? void 0 : n.numToPick) != null ? w : 0,
			),
			[d, a] = W(),
			[m, r] = V("names", () => X(l.length)),
			[y, h] = W(!0),
			[i, f] = W(),
			[N, p] = W(!1);
		j(() => {
			h(!0),
				(Q += 1),
				D.postMessage({ chances: l, numToPick: o, requestCount: Q });
		}, [l, o]),
			j(() => {
				const v = x => {
					x.data.requestCount === Q &&
						(p(x.data.tooSlow), f(x.data.probs), h(!1));
				};
				return (
					D.addEventListener("message", v),
					() => {
						D.removeEventListener("message", v);
					}
				);
			}, []);
		const b = v => () => {
				var Z, L;
				a(void 0),
					c(
						v === "bottom"
							? [...l, (Z = l[l.length - 1]) != null ? Z : 1]
							: [(L = l[0]) != null ? L : 1, ...l],
					);
				const x = ee(m);
				r(
					x
						? X(l.length + 1)
						: v === "bottom"
							? [...m, `Team ${m.length + 1}`]
							: [`Team ${m.length + 1}`, ...m],
				),
					t("custom");
			},
			g = () => {
				a(void 0), c([]), r([]), t("custom");
			},
			C = v =>
				s(P, {
					children: [
						s(M, {
							variant: "primary",
							outline: !0,
							className: "mr-2",
							onClick: b(v),
							children: "Add Team",
						}),
						s(M, {
							variant: "danger",
							outline: !0,
							className: "mr-2",
							onClick: g,
							disabled: l.length === 0,
							children: "Clear Teams",
						}),
					],
				});
		return s(P, {
			children: [
				s("div", {
					className: "columns-2",
					style: { maxWidth: 500 },
					children: [
						s("div", {
							children: [
								s("label", {
									htmlFor: "presetKey",
									children: "Preset Lottery Type",
								}),
								s("select", {
									className: "form-control mt-1 h-[42px]",
									id: "presetKey",
									onChange: v => {
										const x = $.find(Z => Z.key === v.target.value);
										if (x) {
											a(void 0), t(x.key), c(x.chances), _(x.numToPick);
											const Z = ee(m),
												L = x.chances.length;
											if (Z) r(X(L));
											else {
												const I = m.slice(0, L);
												for (; I.length < L; ) I.push(`Team ${I.length + 1}`);
												r(I);
											}
										} else t("custom");
									},
									value:
										(T = n == null ? void 0 : n.key) != null ? T : "custom",
									children: [
										$.map(v =>
											s("option", { value: v.key, children: v.title }, v.key),
										),
										s("option", { value: "custom", children: "Custom" }),
									],
								}),
							],
						}),
						s("div", {
							children: [
								s("label", {
									htmlFor: "numToPick",
									children: [
										s("span", {
											className: "sm:hidden",
											children: "# Lottery Selections",
										}),
										s("span", {
											className: "hidden sm:inline",
											children: "Number of Lottery Selections",
										}),
									],
								}),
								s("input", {
									className: "form-control mt-1 h-[42px]",
									id: "numToPick",
									type: "number",
									value: o,
									min: 0,
									onChange: v => {
										a(void 0), t("custom");
										const x = v.target.valueAsNumber;
										x < 0 ? _(0) : _(Math.round(x));
									},
								}),
							],
						}),
					],
				}),
				n
					? s("div", {
							className: "text-gray-500 mt-1",
							children: n.description,
						})
					: null,
				N
					? s(P, {
							children: s("div", {
								className: "text-red-600 mt-1",
								children:
									"Computing exact odds for so many teams and picks is too slow, so estimates are shown.",
							}),
						})
					: null,
				s("div", {
					className: "mt-3 sm:flex",
					children: [
						s("div", { children: C("top") }),
						s("div", {
							className: "mt-2 sm:mt-0",
							children: [
								s(M, {
									variant: "success",
									onClick: () => {
										const v = Ye(l, o);
										a(v);
									},
									disabled: l.length === 0,
									children: "Sim Lottery",
								}),
								d
									? s(M, {
											variant: "danger",
											className: "ml-2",
											onClick: () => {
												a(void 0);
											},
											outline: !0,
											disabled: l.length === 0,
											children: "Clear Sim",
										})
									: null,
							],
						}),
					],
				}),
				i
					? s(P, {
							children: [
								l.length > 0
									? s("div", {
											className: "mt-2 overflow-x-auto",
											children: s(Fe, {
												chances: l,
												loadingProbs: y,
												lotteryResults: d,
												names: m,
												probs: i,
												setChances: c,
												setLotteryResults: a,
												setNames: r,
												setPresetKey: t,
											}),
										})
									: s("div", {
											className: "my-3",
											children: "You should add some teams...",
										}),
								l.length > 0
									? s("div", { className: "my-3", children: C("bottom") })
									: null,
							],
						})
					: s("div", { className: "my-3", children: "Loading..." }),
				s("div", {
					className: "alert",
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
						s("a", {
							href: "https://baseball.zengm.com/",
							children: "baseball",
						}),
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
	};
Xe(s(Ee, {}), document.getElementById("app"));
