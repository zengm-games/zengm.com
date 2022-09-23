(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) l(_);
	new MutationObserver(_ => {
		for (const o of _)
			if (o.type === "childList")
				for (const c of o.addedNodes)
					c.tagName === "LINK" && c.rel === "modulepreload" && l(c);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(_) {
		const o = {};
		return (
			_.integrity && (o.integrity = _.integrity),
			_.referrerpolicy && (o.referrerPolicy = _.referrerpolicy),
			_.crossorigin === "use-credentials"
				? (o.credentials = "include")
				: _.crossorigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function l(_) {
		if (_.ep) return;
		_.ep = !0;
		const o = n(_);
		fetch(_.href, o);
	}
})();
var R,
	u,
	me,
	X,
	te,
	O = {},
	pe = [],
	we = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Z(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function be(e) {
	var t = e.parentNode;
	t && t.removeChild(e);
}
function We(e, t, n) {
	var l,
		_,
		o,
		c = {};
	for (o in t)
		o == "key" ? (l = t[o]) : o == "ref" ? (_ = t[o]) : (c[o] = t[o]);
	if (
		(arguments.length > 2 &&
			(c.children = arguments.length > 3 ? R.call(arguments, 2) : n),
		typeof e == "function" && e.defaultProps != null)
	)
		for (o in e.defaultProps) c[o] === void 0 && (c[o] = e.defaultProps[o]);
	return S(e, c, l, _, null);
}
function S(e, t, n, l, _) {
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
		__v: _ == null ? ++me : _,
	};
	return _ == null && u.vnode != null && u.vnode(o), o;
}
function C(e) {
	return e.children;
}
function A(e, t) {
	(this.props = e), (this.context = t);
}
function H(e, t) {
	if (t == null) return e.__ ? H(e.__, e.__.__k.indexOf(e) + 1) : null;
	for (var n; t < e.__k.length; t++)
		if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? H(e) : null;
}
function ye(e) {
	var t, n;
	if ((e = e.__) != null && e.__c != null) {
		for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) {
				e.__e = e.__c.base = n.__e;
				break;
			}
		return ye(e);
	}
}
function ne(e) {
	((!e.__d && (e.__d = !0) && X.push(e) && !U.__r++) ||
		te !== u.debounceRendering) &&
		((te = u.debounceRendering) || setTimeout)(U);
}
function U() {
	for (var e; (U.__r = X.length); )
		(e = X.sort(function (t, n) {
			return t.__v.__b - n.__v.__b;
		})),
			(X = []),
			e.some(function (t) {
				var n, l, _, o, c, d;
				t.__d &&
					((c = (o = (n = t).__v).__e),
					(d = n.__P) &&
						((l = []),
						((_ = Z({}, o)).__v = o.__v + 1),
						q(
							d,
							o,
							_,
							n.__n,
							d.ownerSVGElement !== void 0,
							o.__h != null ? [c] : null,
							l,
							c == null ? H(o) : c,
							o.__h,
						),
						Ne(l, o),
						o.__e != c && ye(o)));
			});
}
function ve(e, t, n, l, _, o, c, d, a, f) {
	var r,
		y,
		h,
		s,
		m,
		N,
		p,
		b = (l && l.__k) || pe,
		g = b.length;
	for (n.__k = [], r = 0; r < t.length; r++)
		if (
			(s = n.__k[r] =
				(s = t[r]) == null || typeof s == "boolean"
					? null
					: typeof s == "string" || typeof s == "number" || typeof s == "bigint"
					? S(null, s, null, null, s)
					: Array.isArray(s)
					? S(C, { children: s }, null, null, null)
					: s.__b > 0
					? S(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
					: s) != null
		) {
			if (
				((s.__ = n),
				(s.__b = n.__b + 1),
				(h = b[r]) === null || (h && s.key == h.key && s.type === h.type))
			)
				b[r] = void 0;
			else
				for (y = 0; y < g; y++) {
					if ((h = b[y]) && s.key == h.key && s.type === h.type) {
						b[y] = void 0;
						break;
					}
					h = null;
				}
			q(e, s, (h = h || O), _, o, c, d, a, f),
				(m = s.__e),
				(y = s.ref) &&
					h.ref != y &&
					(p || (p = []),
					h.ref && p.push(h.ref, null, s),
					p.push(y, s.__c || m, s)),
				m != null
					? (N == null && (N = m),
					  typeof s.type == "function" && s.__k === h.__k
							? (s.__d = a = ge(s, a, e))
							: (a = ke(e, s, h, b, m, a)),
					  typeof n.type == "function" && (n.__d = a))
					: a && h.__e == a && a.parentNode != e && (a = H(h));
		}
	for (n.__e = N, r = g; r--; )
		b[r] != null &&
			(typeof n.type == "function" &&
				b[r].__e != null &&
				b[r].__e == n.__d &&
				(n.__d = H(l, r + 1)),
			xe(b[r], b[r]));
	if (p) for (r = 0; r < p.length; r++) Te(p[r], p[++r], p[++r]);
}
function ge(e, t, n) {
	for (var l, _ = e.__k, o = 0; _ && o < _.length; o++)
		(l = _[o]) &&
			((l.__ = e),
			(t =
				typeof l.type == "function" ? ge(l, t, n) : ke(n, l, l, _, l.__e, t)));
	return t;
}
function ke(e, t, n, l, _, o) {
	var c, d, a;
	if (t.__d !== void 0) (c = t.__d), (t.__d = void 0);
	else if (n == null || _ != o || _.parentNode == null)
		e: if (o == null || o.parentNode !== e) e.appendChild(_), (c = null);
		else {
			for (d = o, a = 0; (d = d.nextSibling) && a < l.length; a += 2)
				if (d == _) break e;
			e.insertBefore(_, o), (c = o);
		}
	return c !== void 0 ? c : _.nextSibling;
}
function Le(e, t, n, l, _) {
	var o;
	for (o in n)
		o === "children" || o === "key" || o in t || B(e, o, null, n[o], l);
	for (o in t)
		(_ && typeof t[o] != "function") ||
			o === "children" ||
			o === "key" ||
			o === "value" ||
			o === "checked" ||
			n[o] === t[o] ||
			B(e, o, t[o], n[o], l);
}
function oe(e, t, n) {
	t[0] === "-"
		? e.setProperty(t, n)
		: (e[t] =
				n == null ? "" : typeof n != "number" || we.test(t) ? n : n + "px");
}
function B(e, t, n, l, _) {
	var o;
	e: if (t === "style")
		if (typeof n == "string") e.style.cssText = n;
		else {
			if ((typeof l == "string" && (e.style.cssText = l = ""), l))
				for (t in l) (n && t in n) || oe(e.style, t, "");
			if (n) for (t in n) (l && n[t] === l[t]) || oe(e.style, t, n[t]);
		}
	else if (t[0] === "o" && t[1] === "n")
		(o = t !== (t = t.replace(/Capture$/, ""))),
			(t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
			e.l || (e.l = {}),
			(e.l[t + o] = n),
			n
				? l || e.addEventListener(t, o ? le : re, o)
				: e.removeEventListener(t, o ? le : re, o);
	else if (t !== "dangerouslySetInnerHTML") {
		if (_) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
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
function re(e) {
	this.l[e.type + !1](u.event ? u.event(e) : e);
}
function le(e) {
	this.l[e.type + !0](u.event ? u.event(e) : e);
}
function q(e, t, n, l, _, o, c, d, a) {
	var f,
		r,
		y,
		h,
		s,
		m,
		N,
		p,
		b,
		g,
		G,
		K,
		w,
		T = t.type;
	if (t.constructor !== void 0) return null;
	n.__h != null &&
		((a = n.__h), (d = t.__e = n.__e), (t.__h = null), (o = [d])),
		(f = u.__b) && f(t);
	try {
		e: if (typeof T == "function") {
			if (
				((p = t.props),
				(b = (f = T.contextType) && l[f.__c]),
				(g = f ? (b ? b.props.value : f.__) : l),
				n.__c
					? (N = (r = t.__c = n.__c).__ = r.__E)
					: ("prototype" in T && T.prototype.render
							? (t.__c = r = new T(p, g))
							: ((t.__c = r = new A(p, g)),
							  (r.constructor = T),
							  (r.render = Ke)),
					  b && b.sub(r),
					  (r.props = p),
					  r.state || (r.state = {}),
					  (r.context = g),
					  (r.__n = l),
					  (y = r.__d = !0),
					  (r.__h = [])),
				r.__s == null && (r.__s = r.state),
				T.getDerivedStateFromProps != null &&
					(r.__s == r.state && (r.__s = Z({}, r.__s)),
					Z(r.__s, T.getDerivedStateFromProps(p, r.__s))),
				(h = r.props),
				(s = r.state),
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
						r.__h.length && c.push(r);
					break e;
				}
				r.componentWillUpdate != null && r.componentWillUpdate(p, r.__s, g),
					r.componentDidUpdate != null &&
						r.__h.push(function () {
							r.componentDidUpdate(h, s, m);
						});
			}
			if (
				((r.context = g),
				(r.props = p),
				(r.__v = t),
				(r.__P = e),
				(G = u.__r),
				(K = 0),
				"prototype" in T && T.prototype.render)
			)
				(r.state = r.__s),
					(r.__d = !1),
					G && G(t),
					(f = r.render(r.props, r.state, r.context));
			else
				do
					(r.__d = !1),
						G && G(t),
						(f = r.render(r.props, r.state, r.context)),
						(r.state = r.__s);
				while (r.__d && ++K < 25);
			(r.state = r.__s),
				r.getChildContext != null && (l = Z(Z({}, l), r.getChildContext())),
				y ||
					r.getSnapshotBeforeUpdate == null ||
					(m = r.getSnapshotBeforeUpdate(h, s)),
				(w = f != null && f.type === C && f.key == null ? f.props.children : f),
				ve(e, Array.isArray(w) ? w : [w], t, n, l, _, o, c, d, a),
				(r.base = t.__e),
				(t.__h = null),
				r.__h.length && c.push(r),
				N && (r.__E = r.__ = null),
				(r.__e = !1);
		} else
			o == null && t.__v === n.__v
				? ((t.__k = n.__k), (t.__e = n.__e))
				: (t.__e = He(n.__e, t, n, l, _, o, c, a));
		(f = u.diffed) && f(t);
	} catch (v) {
		(t.__v = null),
			(a || o != null) &&
				((t.__e = d), (t.__h = !!a), (o[o.indexOf(d)] = null)),
			u.__e(v, t, n);
	}
}
function Ne(e, t) {
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
function He(e, t, n, l, _, o, c, d) {
	var a,
		f,
		r,
		y = n.props,
		h = t.props,
		s = t.type,
		m = 0;
	if ((s === "svg" && (_ = !0), o != null)) {
		for (; m < o.length; m++)
			if (
				(a = o[m]) &&
				"setAttribute" in a == !!s &&
				(s ? a.localName === s : a.nodeType === 3)
			) {
				(e = a), (o[m] = null);
				break;
			}
	}
	if (e == null) {
		if (s === null) return document.createTextNode(h);
		(e = _
			? document.createElementNS("http://www.w3.org/2000/svg", s)
			: document.createElement(s, h.is && h)),
			(o = null),
			(d = !1);
	}
	if (s === null) y === h || (d && e.data === h) || (e.data = h);
	else {
		if (
			((o = o && R.call(e.childNodes)),
			(f = (y = n.props || O).dangerouslySetInnerHTML),
			(r = h.dangerouslySetInnerHTML),
			!d)
		) {
			if (o != null)
				for (y = {}, m = 0; m < e.attributes.length; m++)
					y[e.attributes[m].name] = e.attributes[m].value;
			(r || f) &&
				((r && ((f && r.__html == f.__html) || r.__html === e.innerHTML)) ||
					(e.innerHTML = (r && r.__html) || ""));
		}
		if ((Le(e, h, y, _, d), r)) t.__k = [];
		else if (
			((m = t.props.children),
			ve(
				e,
				Array.isArray(m) ? m : [m],
				t,
				n,
				l,
				_ && s !== "foreignObject",
				o,
				c,
				o ? o[0] : n.__k && H(n, 0),
				d,
			),
			o != null)
		)
			for (m = o.length; m--; ) o[m] != null && be(o[m]);
		d ||
			("value" in h &&
				(m = h.value) !== void 0 &&
				(m !== e.value ||
					(s === "progress" && !m) ||
					(s === "option" && m !== y.value)) &&
				B(e, "value", m, y.value, !1),
			"checked" in h &&
				(m = h.checked) !== void 0 &&
				m !== e.checked &&
				B(e, "checked", m, y.checked, !1));
	}
	return e;
}
function Te(e, t, n) {
	try {
		typeof e == "function" ? e(t) : (e.current = t);
	} catch (l) {
		u.__e(l, n);
	}
}
function xe(e, t, n) {
	var l, _;
	if (
		(u.unmount && u.unmount(e),
		(l = e.ref) && ((l.current && l.current !== e.__e) || Te(l, null, t)),
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
		for (_ = 0; _ < l.length; _++)
			l[_] && xe(l[_], t, typeof e.type != "function");
	n || e.__e == null || be(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function Ke(e, t, n) {
	return this.constructor(e, n);
}
function Xe(e, t, n) {
	var l, _, o;
	u.__ && u.__(e, t),
		(_ = (l = typeof n == "function") ? null : (n && n.__k) || t.__k),
		(o = []),
		q(
			t,
			(e = ((!l && n) || t).__k = We(C, null, [e])),
			_ || O,
			O,
			t.ownerSVGElement !== void 0,
			!l && n ? [n] : _ ? null : t.firstChild ? R.call(t.childNodes) : null,
			o,
			!l && n ? n : _ ? _.__e : t.firstChild,
			l,
		),
		Ne(o, e);
}
(R = pe.slice),
	(u = {
		__e: function (e, t, n, l) {
			for (var _, o, c; (t = t.__); )
				if ((_ = t.__c) && !_.__)
					try {
						if (
							((o = _.constructor) &&
								o.getDerivedStateFromError != null &&
								(_.setState(o.getDerivedStateFromError(e)), (c = _.__d)),
							_.componentDidCatch != null &&
								(_.componentDidCatch(e, l || {}), (c = _.__d)),
							c)
						)
							return (_.__E = _);
					} catch (d) {
						e = d;
					}
			throw e;
		},
	}),
	(me = 0),
	(A.prototype.setState = function (e, t) {
		var n;
		(n =
			this.__s != null && this.__s !== this.state
				? this.__s
				: (this.__s = Z({}, this.state))),
			typeof e == "function" && (e = e(Z({}, n), this.props)),
			e && Z(n, e),
			e != null && this.__v && (t && this.__h.push(t), ne(this));
	}),
	(A.prototype.forceUpdate = function (e) {
		this.__v && ((this.__e = !0), e && this.__h.push(e), ne(this));
	}),
	(A.prototype.render = C),
	(X = []),
	(U.__r = 0);
var ee,
	k,
	F,
	_e,
	Q = 0,
	Pe = [],
	Y = [],
	ce = u.__b,
	ie = u.__r,
	se = u.diffed,
	ae = u.__c,
	de = u.unmount;
function Ce(e, t) {
	u.__h && u.__h(k, e, Q || t), (Q = 0);
	var n = k.__H || (k.__H = { __: [], __h: [] });
	return e >= n.__.length && n.__.push({ __V: Y }), n.__[e];
}
function P(e) {
	return (Q = 1), Ie(Ge, e);
}
function Ie(e, t, n) {
	var l = Ce(ee++, 2);
	if (
		((l.t = e),
		!l.__c &&
			((l.__ = [
				n ? n(t) : Ge(void 0, t),
				function (o) {
					var c = l.__N ? l.__N[0] : l.__[0],
						d = l.t(c, o);
					c !== d && ((l.__N = [d, l.__[1]]), l.__c.setState({}));
				},
			]),
			(l.__c = k),
			!k.u))
	) {
		k.u = !0;
		var _ = k.shouldComponentUpdate;
		k.shouldComponentUpdate = function (o, c, d) {
			if (!l.__c.__H) return !0;
			var a = l.__c.__H.__.filter(function (r) {
				return r.__c;
			});
			if (
				a.every(function (r) {
					return !r.__N;
				})
			)
				return !_ || _.call(this, o, c, d);
			var f = !1;
			return (
				a.forEach(function (r) {
					if (r.__N) {
						var y = r.__[0];
						(r.__ = r.__N), (r.__N = void 0), y !== r.__[0] && (f = !0);
					}
				}),
				!!f && (!_ || _.call(this, o, c, d))
			);
		};
	}
	return l.__N || l.__;
}
function ue(e, t) {
	var n = Ce(ee++, 3);
	!u.__s && Se(n.__H, t) && ((n.__ = e), (n.i = t), k.__H.__h.push(n));
}
function Me() {
	for (var e; (e = Pe.shift()); )
		if (e.__P && e.__H)
			try {
				e.__H.__h.forEach(z), e.__H.__h.forEach(J), (e.__H.__h = []);
			} catch (t) {
				(e.__H.__h = []), u.__e(t, e.__v);
			}
}
(u.__b = function (e) {
	typeof e.type != "function" || e.o || e.type === C
		? e.o || (e.o = e.__ && e.__.o ? e.__.o : "")
		: (e.o =
				(e.__ && e.__.o ? e.__.o : "") +
				(e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0)),
		(k = null),
		ce && ce(e);
}),
	(u.__r = function (e) {
		ie && ie(e), (ee = 0);
		var t = (k = e.__c).__H;
		t &&
			(F === k
				? ((t.__h = []),
				  (k.__h = []),
				  t.__.forEach(function (n) {
						n.__N && (n.__ = n.__N), (n.__V = Y), (n.__N = n.i = void 0);
				  }))
				: (t.__h.forEach(z), t.__h.forEach(J), (t.__h = []))),
			(F = k);
	}),
	(u.diffed = function (e) {
		se && se(e);
		var t = e.__c;
		t &&
			t.__H &&
			(t.__H.__h.length &&
				((Pe.push(t) !== 1 && _e === u.requestAnimationFrame) ||
					((_e = u.requestAnimationFrame) || Ve)(Me)),
			t.__H.__.forEach(function (n) {
				n.i && (n.__H = n.i),
					n.__V !== Y && (n.__ = n.__V),
					(n.i = void 0),
					(n.__V = Y);
			})),
			(F = k = null);
	}),
	(u.__c = function (e, t) {
		t.some(function (n) {
			try {
				n.__h.forEach(z),
					(n.__h = n.__h.filter(function (l) {
						return !l.__ || J(l);
					}));
			} catch (l) {
				t.some(function (_) {
					_.__h && (_.__h = []);
				}),
					(t = []),
					u.__e(l, n.__v);
			}
		}),
			ae && ae(e, t);
	}),
	(u.unmount = function (e) {
		de && de(e);
		var t,
			n = e.__c;
		n &&
			n.__H &&
			(n.__H.__.forEach(function (l) {
				try {
					z(l);
				} catch (_) {
					t = _;
				}
			}),
			(n.__H = void 0),
			t && u.__e(t, n.__v));
	});
var he = typeof requestAnimationFrame == "function";
function Ve(e) {
	var t,
		n = function () {
			clearTimeout(l), he && cancelAnimationFrame(t), setTimeout(e);
		},
		l = setTimeout(n, 100);
	he && (t = requestAnimationFrame(n));
}
function z(e) {
	var t = k,
		n = e.__c;
	typeof n == "function" && ((e.__c = void 0), n()), (k = t);
}
function J(e) {
	var t = k;
	(e.__c = e.__()), (k = t);
}
function Se(e, t) {
	return (
		!e ||
		e.length !== t.length ||
		t.some(function (n, l) {
			return n !== e[l];
		})
	);
}
function Ge(e, t) {
	return typeof t == "function" ? t(e) : t;
}
const Ae = (e, t) => {
	let n = e.map((_, o) => ({ chances: _, index: o }));
	const l = [];
	for (let _ = 0; _ < t; _++) {
		let o = 0;
		for (const a of n) o += a.chances;
		const c = Math.random() * o;
		let d = 0;
		for (const a of n)
			if (((d += a.chances), c < d)) {
				l.push(a.index), (n = n.filter(f => f !== a));
				break;
			}
	}
	return l.push(...n.map(_ => _.index)), l;
};
var Ye = 0;
function i(e, t, n, l, _) {
	var o,
		c,
		d = {};
	for (c in t) c == "ref" ? (o = t[c]) : (d[c] = t[c]);
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
		__v: --Ye,
		__source: _,
		__self: l,
	};
	if (typeof e == "function" && (o = e.defaultProps))
		for (c in o) d[c] === void 0 && (d[c] = o[c]);
	return u.vnode && u.vnode(a), a;
}
const V = ({
		children: e,
		className: t,
		disabled: n,
		onClick: l,
		outline: _,
		variant: o,
	}) => {
		let c;
		return (
			o === "primary"
				? (c = "enabled:hover:bg-blue-500 text-blue-600 border-blue-600")
				: o === "danger"
				? (c = "enabled:hover:bg-red-500 text-red-600 border-red-600")
				: o === "success" &&
				  (_ || (c = "enabled:hover:bg-green-800 text-white bg-green-700")),
			i("button", {
				className: `${
					_ ? "bg-transparent " : ""
				}enabled:hover:text-white py-2 px-3 border enabled:hover:border-transparent rounded disabled:opacity-50 ${c}${
					t ? ` ${t}` : ""
				}`,
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
function ze() {
	const e = fe && (window.URL || window.webkitURL).createObjectURL(fe);
	try {
		return e
			? new Worker(e)
			: new Worker("data:application/javascript;base64," + Ze);
	} finally {
		e && (window.URL || window.webkitURL).revokeObjectURL(e);
	}
}
const Oe = e => {
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
	Ue = e => (e === void 0 ? e : e === 1 ? "100%" : `${(e * 100).toFixed(1)}%`),
	Be = ({
		chance: e,
		i: t,
		chances: n,
		lotteryResults: l,
		loadingProbs: _,
		names: o,
		probs: c,
		setChances: d,
		setLotteryResults: a,
		setNames: f,
		setPresetKey: r,
	}) => {
		const [y, h] = P(!1),
			s = `name-${t}`,
			m = `chances-${t}`;
		return i("tr", {
			className: `border-b ${
				y
					? "odd:bg-yellow-200 even:bg-yellow-100 hover:bg-[#f6edaa]"
					: "odd:bg-gray-100 hover:bg-gray-200"
			}`,
			onClick: N => {
				["BUTTON", "INPUT"].includes(N.target.nodeName) || h(b => !b);
			},
			children: [
				i("td", {
					className: "py-0 w-0",
					children: i("button", {
						className: "text-red-600 text-xl",
						type: "button",
						onClick: () => {
							a(void 0), d(n.filter((p, b) => b !== t)), r("custom");
							const N = j(o);
							f(N ? I(n.length - 1) : o.filter((p, b) => b !== t)), h(!1);
						},
						title: "Remove team",
						children: "\u2715",
					}),
				}),
				i("td", {
					className: "py-0",
					children: [
						i("label", {
							className: "sr-only",
							htmlFor: s,
							children: ["Name of team #", t + 1],
						}),
						i("input", {
							id: s,
							className: "form-control py-1 px-2 text-sm w-[100px]",
							type: "text",
							value: o[t],
							onChange: N => {
								const p = N.target.value;
								f(o.map((b, g) => (g === t ? p : b)));
							},
						}),
					],
				}),
				i("td", {
					className: "py-0 w-0",
					children: [
						i("label", {
							className: "sr-only",
							htmlFor: m,
							children: ["Lottery chances for team #", t + 1],
						}),
						i("input", {
							id: m,
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
					const b = Ue((g = c[t]) == null ? void 0 : g[p]);
					return i("td", {
						className: `${l && l[p] === t ? "bg-green-200" : ""}${
							_ ? " text-gray-500" : ""
						}`,
						children: b != null ? b : "\xA0",
					});
				}),
			],
		});
	},
	Re = e =>
		i("table", {
			className: "table-auto",
			style: { width: "unset" },
			children: [
				i("thead", {
					className: "text-center",
					children: i("tr", {
						className: "border-b-2 border-gray-500",
						children: [
							i("th", {}),
							i("th", { children: "Team Name" }),
							i("th", { children: "Chances" }),
							e.chances.map((t, n) => i("th", { children: Oe(n + 1) }, n)),
						],
					}),
				}),
				i("tbody", {
					className: "text-end",
					children: e.chances.map((t, n) =>
						i(Be, { i: n, chance: t, ...e }, n),
					),
				}),
			],
		}),
	E = [
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
	I = e => {
		const t = [];
		for (let n = 0; n < e; n++) t.push(`Team ${n + 1}`);
		return t;
	},
	j = e => {
		const t = I(e.length);
		for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
		return !0;
	},
	$ = new ze();
let D = 0;
const Fe = () => {
	var K, w, T;
	const [e, t] = P("nba2019"),
		n = E.find(v => v.key === e),
		[l, _] = P((K = n == null ? void 0 : n.chances) != null ? K : []),
		[o, c] = P((w = n == null ? void 0 : n.numToPick) != null ? w : 0),
		[d, a] = P(),
		[f, r] = P(() => I(l.length)),
		[y, h] = P(!0),
		[s, m] = P(),
		[N, p] = P(!1);
	ue(() => {
		h(!0),
			(D += 1),
			$.postMessage({ chances: l, numToPick: o, requestCount: D });
	}, [l, o]),
		ue(() => {
			const v = x => {
				x.data.requestCount === D &&
					(p(x.data.tooSlow), m(x.data.probs), h(!1));
			};
			return (
				$.addEventListener("message", v),
				() => {
					$.removeEventListener("message", v);
				}
			);
		}, []);
	const b = v => () => {
			var W, L;
			a(void 0),
				_(
					v === "bottom"
						? [...l, (W = l[l.length - 1]) != null ? W : 1]
						: [(L = l[0]) != null ? L : 1, ...l],
				);
			const x = j(f);
			r(
				x
					? I(l.length + 1)
					: v === "bottom"
					? [...f, `Team ${f.length + 1}`]
					: [`Team ${f.length + 1}`, ...f],
			),
				t("custom");
		},
		g = () => {
			a(void 0), _([]), r([]), t("custom");
		},
		G = v =>
			i(C, {
				children: [
					i(V, {
						variant: "primary",
						outline: !0,
						className: "mr-2",
						onClick: b(v),
						children: "Add Team",
					}),
					i(V, {
						variant: "danger",
						outline: !0,
						className: "mr-2",
						onClick: g,
						disabled: l.length === 0,
						children: "Clear Teams",
					}),
				],
			});
	return i(C, {
		children: [
			i("div", {
				className: "columns-2",
				style: { maxWidth: 500 },
				children: [
					i("div", {
						children: [
							i("label", {
								htmlFor: "presetKey",
								children: "Preset Lottery Type",
							}),
							i("select", {
								className: "form-control mt-1 h-[42px]",
								id: "presetKey",
								onChange: v => {
									const x = E.find(W => W.key === v.target.value);
									if (x) {
										a(void 0), t(x.key), _(x.chances), c(x.numToPick);
										const W = j(f),
											L = x.chances.length;
										if (W) r(I(L));
										else {
											const M = f.slice(0, L);
											for (; M.length < L; ) M.push(`Team ${M.length + 1}`);
											r(M);
										}
									} else t("custom");
								},
								value: (T = n == null ? void 0 : n.key) != null ? T : "custom",
								children: [
									E.map(v =>
										i("option", { value: v.key, children: v.title }, v.key),
									),
									i("option", { value: "custom", children: "Custom" }),
								],
							}),
						],
					}),
					i("div", {
						children: [
							i("label", {
								htmlFor: "numToPick",
								children: [
									i("span", {
										className: "sm:hidden",
										children: "# Lottery Selections",
									}),
									i("span", {
										className: "hidden sm:inline",
										children: "Number of Lottery Selections",
									}),
								],
							}),
							i("input", {
								className: "form-control mt-1 h-[42px]",
								id: "numToPick",
								type: "number",
								value: o,
								min: 0,
								onChange: v => {
									a(void 0), t("custom");
									const x = v.target.valueAsNumber;
									x < 0 ? c(0) : c(Math.round(x));
								},
							}),
						],
					}),
				],
			}),
			n
				? i("div", { className: "text-gray-500 mt-1", children: n.description })
				: null,
			N
				? i(C, {
						children: i("div", {
							className: "text-red-600 mt-1",
							children:
								"Computing exact odds for so many teams and picks is too slow, so estimates are shown.",
						}),
				  })
				: null,
			i("div", {
				className: "mt-3 sm:flex",
				children: [
					i("div", { children: G("top") }),
					i("div", {
						className: "mt-2 sm:mt-0",
						children: [
							i(V, {
								variant: "success",
								onClick: () => {
									const v = Ae(l, o);
									a(v);
								},
								disabled: l.length === 0,
								children: "Sim Lottery",
							}),
							d
								? i(V, {
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
			s
				? i(C, {
						children: [
							l.length > 0
								? i("div", {
										className: "mt-2 overflow-x-auto",
										children: i(Re, {
											chances: l,
											loadingProbs: y,
											lotteryResults: d,
											names: f,
											probs: s,
											setChances: _,
											setLotteryResults: a,
											setNames: r,
											setPresetKey: t,
										}),
								  })
								: i("div", {
										className: "my-3",
										children: "You should add some teams...",
								  }),
							l.length > 0
								? i("div", { className: "my-3", children: G("bottom") })
								: null,
						],
				  })
				: i("div", { className: "my-3", children: "Loading..." }),
			i("div", {
				className: "alert",
				children: [
					"If you like simulating hypothetical draft lotteries, maybe you'd like simulating a whole league? ",
					i("a", { href: "https://zengm.com/", children: "ZenGM" }),
					" has you covered! Play",
					" ",
					i("a", {
						href: "https://play.basketball-gm.com/",
						children: "basketball",
					}),
					",",
					" ",
					i("a", {
						href: "https://play.football-gm.com/",
						children: "football",
					}),
					",",
					" ",
					i("a", { href: "https://baseball.zengm.com/", children: "baseball" }),
					", or",
					" ",
					i("a", { href: "https://hockey.zengm.com/", children: "hockey" }),
					". You can customize the draft lottery and tons of other things, and play as many seasons as you want. All for free!",
				],
			}),
			i("p", {
				children: i("a", {
					href: "https://github.com/zengm-games/universal-draft-lottery-simulator",
					children: "Source code on GitHub",
				}),
			}),
		],
	});
};
Xe(i(Fe, {}), document.getElementById("app"));
