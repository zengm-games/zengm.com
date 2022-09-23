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
var $,
	u,
	be,
	A,
	re,
	U = {},
	ve = [],
	Le = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function K(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function ge(e) {
	var t = e.parentNode;
	t && t.removeChild(e);
}
function Ke(e, t, n) {
	var l,
		_,
		o,
		c = {};
	for (o in t)
		o == "key" ? (l = t[o]) : o == "ref" ? (_ = t[o]) : (c[o] = t[o]);
	if (
		(arguments.length > 2 &&
			(c.children = arguments.length > 3 ? $.call(arguments, 2) : n),
		typeof e == "function" && e.defaultProps != null)
	)
		for (o in e.defaultProps) c[o] === void 0 && (c[o] = e.defaultProps[o]);
	return O(e, c, l, _, null);
}
function O(e, t, n, l, _) {
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
		__v: _ == null ? ++be : _,
	};
	return _ == null && u.vnode != null && u.vnode(o), o;
}
function H(e) {
	return e.children;
}
function R(e, t) {
	(this.props = e), (this.context = t);
}
function V(e, t) {
	if (t == null) return e.__ ? V(e.__, e.__.__k.indexOf(e) + 1) : null;
	for (var n; t < e.__k.length; t++)
		if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? V(e) : null;
}
function ke(e) {
	var t, n;
	if ((e = e.__) != null && e.__c != null) {
		for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) {
				e.__e = e.__c.base = n.__e;
				break;
			}
		return ke(e);
	}
}
function le(e) {
	((!e.__d && (e.__d = !0) && A.push(e) && !E.__r++) ||
		re !== u.debounceRendering) &&
		((re = u.debounceRendering) || setTimeout)(E);
}
function E() {
	for (var e; (E.__r = A.length); )
		(e = A.sort(function (t, n) {
			return t.__v.__b - n.__v.__b;
		})),
			(A = []),
			e.some(function (t) {
				var n, l, _, o, c, d;
				t.__d &&
					((c = (o = (n = t).__v).__e),
					(d = n.__P) &&
						((l = []),
						((_ = K({}, o)).__v = o.__v + 1),
						ne(
							d,
							o,
							_,
							n.__n,
							d.ownerSVGElement !== void 0,
							o.__h != null ? [c] : null,
							l,
							c == null ? V(o) : c,
							o.__h,
						),
						Pe(l, o),
						o.__e != c && ke(o)));
			});
}
function Ne(e, t, n, l, _, o, c, d, a, h) {
	var r,
		b,
		m,
		i,
		f,
		W,
		v,
		g = (l && l.__k) || ve,
		T = g.length;
	for (n.__k = [], r = 0; r < t.length; r++)
		if (
			(i = n.__k[r] =
				(i = t[r]) == null || typeof i == "boolean"
					? null
					: typeof i == "string" || typeof i == "number" || typeof i == "bigint"
					? O(null, i, null, null, i)
					: Array.isArray(i)
					? O(H, { children: i }, null, null, null)
					: i.__b > 0
					? O(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
					: i) != null
		) {
			if (
				((i.__ = n),
				(i.__b = n.__b + 1),
				(m = g[r]) === null || (m && i.key == m.key && i.type === m.type))
			)
				g[r] = void 0;
			else
				for (b = 0; b < T; b++) {
					if ((m = g[b]) && i.key == m.key && i.type === m.type) {
						g[b] = void 0;
						break;
					}
					m = null;
				}
			ne(e, i, (m = m || U), _, o, c, d, a, h),
				(f = i.__e),
				(b = i.ref) &&
					m.ref != b &&
					(v || (v = []),
					m.ref && v.push(m.ref, null, i),
					v.push(b, i.__c || f, i)),
				f != null
					? (W == null && (W = f),
					  typeof i.type == "function" && i.__k === m.__k
							? (i.__d = a = Te(i, a, e))
							: (a = xe(e, i, m, g, f, a)),
					  typeof n.type == "function" && (n.__d = a))
					: a && m.__e == a && a.parentNode != e && (a = V(m));
		}
	for (n.__e = W, r = T; r--; )
		g[r] != null &&
			(typeof n.type == "function" &&
				g[r].__e != null &&
				g[r].__e == n.__d &&
				(n.__d = V(l, r + 1)),
			Ze(g[r], g[r]));
	if (v) for (r = 0; r < v.length; r++) Ce(v[r], v[++r], v[++r]);
}
function Te(e, t, n) {
	for (var l, _ = e.__k, o = 0; _ && o < _.length; o++)
		(l = _[o]) &&
			((l.__ = e),
			(t =
				typeof l.type == "function" ? Te(l, t, n) : xe(n, l, l, _, l.__e, t)));
	return t;
}
function xe(e, t, n, l, _, o) {
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
function Xe(e, t, n, l, _) {
	var o;
	for (o in n)
		o === "children" || o === "key" || o in t || F(e, o, null, n[o], l);
	for (o in t)
		(_ && typeof t[o] != "function") ||
			o === "children" ||
			o === "key" ||
			o === "value" ||
			o === "checked" ||
			n[o] === t[o] ||
			F(e, o, t[o], n[o], l);
}
function _e(e, t, n) {
	t[0] === "-"
		? e.setProperty(t, n)
		: (e[t] =
				n == null ? "" : typeof n != "number" || Le.test(t) ? n : n + "px");
}
function F(e, t, n, l, _) {
	var o;
	e: if (t === "style")
		if (typeof n == "string") e.style.cssText = n;
		else {
			if ((typeof l == "string" && (e.style.cssText = l = ""), l))
				for (t in l) (n && t in n) || _e(e.style, t, "");
			if (n) for (t in n) (l && n[t] === l[t]) || _e(e.style, t, n[t]);
		}
	else if (t[0] === "o" && t[1] === "n")
		(o = t !== (t = t.replace(/Capture$/, ""))),
			(t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
			e.l || (e.l = {}),
			(e.l[t + o] = n),
			n
				? l || e.addEventListener(t, o ? se : ce, o)
				: e.removeEventListener(t, o ? se : ce, o);
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
function ce(e) {
	this.l[e.type + !1](u.event ? u.event(e) : e);
}
function se(e) {
	this.l[e.type + !0](u.event ? u.event(e) : e);
}
function ne(e, t, n, l, _, o, c, d, a) {
	var h,
		r,
		b,
		m,
		i,
		f,
		W,
		v,
		g,
		T,
		w,
		M,
		X,
		N = t.type;
	if (t.constructor !== void 0) return null;
	n.__h != null &&
		((a = n.__h), (d = t.__e = n.__e), (t.__h = null), (o = [d])),
		(h = u.__b) && h(t);
	try {
		e: if (typeof N == "function") {
			if (
				((v = t.props),
				(g = (h = N.contextType) && l[h.__c]),
				(T = h ? (g ? g.props.value : h.__) : l),
				n.__c
					? (W = (r = t.__c = n.__c).__ = r.__E)
					: ("prototype" in N && N.prototype.render
							? (t.__c = r = new N(v, T))
							: ((t.__c = r = new R(v, T)),
							  (r.constructor = N),
							  (r.render = Ve)),
					  g && g.sub(r),
					  (r.props = v),
					  r.state || (r.state = {}),
					  (r.context = T),
					  (r.__n = l),
					  (b = r.__d = !0),
					  (r.__h = [])),
				r.__s == null && (r.__s = r.state),
				N.getDerivedStateFromProps != null &&
					(r.__s == r.state && (r.__s = K({}, r.__s)),
					K(r.__s, N.getDerivedStateFromProps(v, r.__s))),
				(m = r.props),
				(i = r.state),
				b)
			)
				N.getDerivedStateFromProps == null &&
					r.componentWillMount != null &&
					r.componentWillMount(),
					r.componentDidMount != null && r.__h.push(r.componentDidMount);
			else {
				if (
					(N.getDerivedStateFromProps == null &&
						v !== m &&
						r.componentWillReceiveProps != null &&
						r.componentWillReceiveProps(v, T),
					(!r.__e &&
						r.shouldComponentUpdate != null &&
						r.shouldComponentUpdate(v, r.__s, T) === !1) ||
						t.__v === n.__v)
				) {
					(r.props = v),
						(r.state = r.__s),
						t.__v !== n.__v && (r.__d = !1),
						(r.__v = t),
						(t.__e = n.__e),
						(t.__k = n.__k),
						t.__k.forEach(function (p) {
							p && (p.__ = t);
						}),
						r.__h.length && c.push(r);
					break e;
				}
				r.componentWillUpdate != null && r.componentWillUpdate(v, r.__s, T),
					r.componentDidUpdate != null &&
						r.__h.push(function () {
							r.componentDidUpdate(m, i, f);
						});
			}
			if (
				((r.context = T),
				(r.props = v),
				(r.__v = t),
				(r.__P = e),
				(w = u.__r),
				(M = 0),
				"prototype" in N && N.prototype.render)
			)
				(r.state = r.__s),
					(r.__d = !1),
					w && w(t),
					(h = r.render(r.props, r.state, r.context));
			else
				do
					(r.__d = !1),
						w && w(t),
						(h = r.render(r.props, r.state, r.context)),
						(r.state = r.__s);
				while (r.__d && ++M < 25);
			(r.state = r.__s),
				r.getChildContext != null && (l = K(K({}, l), r.getChildContext())),
				b ||
					r.getSnapshotBeforeUpdate == null ||
					(f = r.getSnapshotBeforeUpdate(m, i)),
				(X = h != null && h.type === H && h.key == null ? h.props.children : h),
				Ne(e, Array.isArray(X) ? X : [X], t, n, l, _, o, c, d, a),
				(r.base = t.__e),
				(t.__h = null),
				r.__h.length && c.push(r),
				W && (r.__E = r.__ = null),
				(r.__e = !1);
		} else
			o == null && t.__v === n.__v
				? ((t.__k = n.__k), (t.__e = n.__e))
				: (t.__e = Ie(n.__e, t, n, l, _, o, c, a));
		(h = u.diffed) && h(t);
	} catch (p) {
		(t.__v = null),
			(a || o != null) &&
				((t.__e = d), (t.__h = !!a), (o[o.indexOf(d)] = null)),
			u.__e(p, t, n);
	}
}
function Pe(e, t) {
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
function Ie(e, t, n, l, _, o, c, d) {
	var a,
		h,
		r,
		b = n.props,
		m = t.props,
		i = t.type,
		f = 0;
	if ((i === "svg" && (_ = !0), o != null)) {
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
		if (i === null) return document.createTextNode(m);
		(e = _
			? document.createElementNS("http://www.w3.org/2000/svg", i)
			: document.createElement(i, m.is && m)),
			(o = null),
			(d = !1);
	}
	if (i === null) b === m || (d && e.data === m) || (e.data = m);
	else {
		if (
			((o = o && $.call(e.childNodes)),
			(h = (b = n.props || U).dangerouslySetInnerHTML),
			(r = m.dangerouslySetInnerHTML),
			!d)
		) {
			if (o != null)
				for (b = {}, f = 0; f < e.attributes.length; f++)
					b[e.attributes[f].name] = e.attributes[f].value;
			(r || h) &&
				((r && ((h && r.__html == h.__html) || r.__html === e.innerHTML)) ||
					(e.innerHTML = (r && r.__html) || ""));
		}
		if ((Xe(e, m, b, _, d), r)) t.__k = [];
		else if (
			((f = t.props.children),
			Ne(
				e,
				Array.isArray(f) ? f : [f],
				t,
				n,
				l,
				_ && i !== "foreignObject",
				o,
				c,
				o ? o[0] : n.__k && V(n, 0),
				d,
			),
			o != null)
		)
			for (f = o.length; f--; ) o[f] != null && ge(o[f]);
		d ||
			("value" in m &&
				(f = m.value) !== void 0 &&
				(f !== e.value ||
					(i === "progress" && !f) ||
					(i === "option" && f !== b.value)) &&
				F(e, "value", f, b.value, !1),
			"checked" in m &&
				(f = m.checked) !== void 0 &&
				f !== e.checked &&
				F(e, "checked", f, b.checked, !1));
	}
	return e;
}
function Ce(e, t, n) {
	try {
		typeof e == "function" ? e(t) : (e.current = t);
	} catch (l) {
		u.__e(l, n);
	}
}
function Ze(e, t, n) {
	var l, _;
	if (
		(u.unmount && u.unmount(e),
		(l = e.ref) && ((l.current && l.current !== e.__e) || Ce(l, null, t)),
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
			l[_] && Ze(l[_], t, typeof e.type != "function");
	n || e.__e == null || ge(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function Ve(e, t, n) {
	return this.constructor(e, n);
}
function Me(e, t, n) {
	var l, _, o;
	u.__ && u.__(e, t),
		(_ = (l = typeof n == "function") ? null : (n && n.__k) || t.__k),
		(o = []),
		ne(
			t,
			(e = ((!l && n) || t).__k = Ke(H, null, [e])),
			_ || U,
			U,
			t.ownerSVGElement !== void 0,
			!l && n ? [n] : _ ? null : t.firstChild ? $.call(t.childNodes) : null,
			o,
			!l && n ? n : _ ? _.__e : t.firstChild,
			l,
		),
		Pe(o, e);
}
($ = ve.slice),
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
	(be = 0),
	(R.prototype.setState = function (e, t) {
		var n;
		(n =
			this.__s != null && this.__s !== this.state
				? this.__s
				: (this.__s = K({}, this.state))),
			typeof e == "function" && (e = e(K({}, n), this.props)),
			e && K(n, e),
			e != null && this.__v && (t && this.__h.push(t), le(this));
	}),
	(R.prototype.forceUpdate = function (e) {
		this.__v && ((this.__e = !0), e && this.__h.push(e), le(this));
	}),
	(R.prototype.render = H),
	(A = []),
	(E.__r = 0);
var oe,
	k,
	D,
	ie,
	ee = 0,
	Ge = [],
	Y = [],
	ae = u.__b,
	de = u.__r,
	ue = u.diffed,
	he = u.__c,
	me = u.unmount;
function He(e, t) {
	u.__h && u.__h(k, e, ee || t), (ee = 0);
	var n = k.__H || (k.__H = { __: [], __h: [] });
	return e >= n.__.length && n.__.push({ __V: Y }), n.__[e];
}
function L(e) {
	return (ee = 1), Se(We, e);
}
function Se(e, t, n) {
	var l = He(oe++, 2);
	if (
		((l.t = e),
		!l.__c &&
			((l.__ = [
				n ? n(t) : We(void 0, t),
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
			var h = !1;
			return (
				a.forEach(function (r) {
					if (r.__N) {
						var b = r.__[0];
						(r.__ = r.__N), (r.__N = void 0), b !== r.__[0] && (h = !0);
					}
				}),
				!!h && (!_ || _.call(this, o, c, d))
			);
		};
	}
	return l.__N || l.__;
}
function fe(e, t) {
	var n = He(oe++, 3);
	!u.__s && Oe(n.__H, t) && ((n.__ = e), (n.i = t), k.__H.__h.push(n));
}
function Ae() {
	for (var e; (e = Ge.shift()); )
		if (e.__P && e.__H)
			try {
				e.__H.__h.forEach(B), e.__H.__h.forEach(te), (e.__H.__h = []);
			} catch (t) {
				(e.__H.__h = []), u.__e(t, e.__v);
			}
}
(u.__b = function (e) {
	typeof e.type != "function" || e.o || e.type === H
		? e.o || (e.o = e.__ && e.__.o ? e.__.o : "")
		: (e.o =
				(e.__ && e.__.o ? e.__.o : "") +
				(e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0)),
		(k = null),
		ae && ae(e);
}),
	(u.__r = function (e) {
		de && de(e), (oe = 0);
		var t = (k = e.__c).__H;
		t &&
			(D === k
				? ((t.__h = []),
				  (k.__h = []),
				  t.__.forEach(function (n) {
						n.__N && (n.__ = n.__N), (n.__V = Y), (n.__N = n.i = void 0);
				  }))
				: (t.__h.forEach(B), t.__h.forEach(te), (t.__h = []))),
			(D = k);
	}),
	(u.diffed = function (e) {
		ue && ue(e);
		var t = e.__c;
		t &&
			t.__H &&
			(t.__H.__h.length &&
				((Ge.push(t) !== 1 && ie === u.requestAnimationFrame) ||
					((ie = u.requestAnimationFrame) || ze)(Ae)),
			t.__H.__.forEach(function (n) {
				n.i && (n.__H = n.i),
					n.__V !== Y && (n.__ = n.__V),
					(n.i = void 0),
					(n.__V = Y);
			})),
			(D = k = null);
	}),
	(u.__c = function (e, t) {
		t.some(function (n) {
			try {
				n.__h.forEach(B),
					(n.__h = n.__h.filter(function (l) {
						return !l.__ || te(l);
					}));
			} catch (l) {
				t.some(function (_) {
					_.__h && (_.__h = []);
				}),
					(t = []),
					u.__e(l, n.__v);
			}
		}),
			he && he(e, t);
	}),
	(u.unmount = function (e) {
		me && me(e);
		var t,
			n = e.__c;
		n &&
			n.__H &&
			(n.__H.__.forEach(function (l) {
				try {
					B(l);
				} catch (_) {
					t = _;
				}
			}),
			(n.__H = void 0),
			t && u.__e(t, n.__v));
	});
var pe = typeof requestAnimationFrame == "function";
function ze(e) {
	var t,
		n = function () {
			clearTimeout(l), pe && cancelAnimationFrame(t), setTimeout(e);
		},
		l = setTimeout(n, 100);
	pe && (t = requestAnimationFrame(n));
}
function B(e) {
	var t = k,
		n = e.__c;
	typeof n == "function" && ((e.__c = void 0), n()), (k = t);
}
function te(e) {
	var t = k;
	(e.__c = e.__()), (k = t);
}
function Oe(e, t) {
	return (
		!e ||
		e.length !== t.length ||
		t.some(function (n, l) {
			return n !== e[l];
		})
	);
}
function We(e, t) {
	return typeof t == "function" ? t(e) : t;
}
const Re = (e, t) => {
	let n = e.map((_, o) => ({ chances: _, index: o }));
	const l = [];
	for (let _ = 0; _ < t; _++) {
		let o = 0;
		for (const a of n) o += a.chances;
		const c = Math.random() * o;
		let d = 0;
		for (const a of n)
			if (((d += a.chances), c < d)) {
				l.push(a.index), (n = n.filter(h => h !== a));
				break;
			}
	}
	return l.push(...n.map(_ => _.index)), l;
};
var Ye = 0;
function s(e, t, n, l, _) {
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
const z = ({
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
			s("button", {
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
	we =
		"dmFyIEE9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBUPSh1LGMsZCk9PmMgaW4gdT9BKHUsYyx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZH0pOnVbY109ZDt2YXIgYj0odSxjLGQpPT4oVCh1LHR5cGVvZiBjIT0ic3ltYm9sIj9jKyIiOmMsZCksZCk7KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHU9KHIscyk9PntsZXQgaT1yLm1hcCgoZSxsKT0+KHtjaGFuY2VzOmUsaW5kZXg6bH0pKTtjb25zdCBuPVtdO2ZvcihsZXQgZT0wO2U8cztlKyspe2xldCBsPTA7Zm9yKGNvbnN0IG8gb2YgaSlsKz1vLmNoYW5jZXM7Y29uc3QgZj1NYXRoLnJhbmRvbSgpKmw7bGV0IHQ9MDtmb3IoY29uc3QgbyBvZiBpKWlmKHQrPW8uY2hhbmNlcyxmPHQpe24ucHVzaChvLmluZGV4KSxpPWkuZmlsdGVyKGE9PmEhPT1vKTticmVha319cmV0dXJuIG4ucHVzaCguLi5pLm1hcChlPT5lLmluZGV4KSksbn07Y2xhc3MgY3tjb25zdHJ1Y3RvcihzLGkpe2IodGhpcywiaW5pdGlhbCIpO2IodGhpcywic3RhcnQiKTtiKHRoaXMsImVuZCIpO2IodGhpcywiZGltZW5zaW9ucyIpO3RoaXMuaW5pdGlhbD0hMCx0aGlzLnN0YXJ0PTAsdGhpcy5lbmQ9cyx0aGlzLmRpbWVuc2lvbnM9aX1bU3ltYm9sLml0ZXJhdG9yXSgpe2NvbnN0IHM9QXJyYXkodGhpcy5kaW1lbnNpb25zKS5maWxsKHRoaXMuc3RhcnQpLGk9bj0+e2lmKHNbbl08dGhpcy5lbmQtMSlyZXR1cm4gdGhpcy5pbml0aWFsP3RoaXMuaW5pdGlhbD0hMTpzW25dKz0xLCExO2lmKG49PT0wKXJldHVybiEwO2ZvcihsZXQgZT1uO2U8dGhpcy5kaW1lbnNpb25zO2UrKylzW2VdPXRoaXMuc3RhcnQ7cmV0dXJuIGkobi0xKX07cmV0dXJue25leHQ6KCk9Pntjb25zdCBuPXRoaXMuZGltZW5zaW9ucy0xLGU9aShuKTtyZXR1cm4gZT97ZG9uZTplfTp7dmFsdWU6cyxkb25lOmV9fX19fWNvbnN0IGQ9KHIscyk9Pntjb25zdCBuPVtdO2ZvcihsZXQgZT0wO2U8NWU1O2UrKyl7Y29uc3QgbD11KHIscyk7Zm9yKGxldCBmPTA7ZjxsLmxlbmd0aDtmKyspe2NvbnN0IHQ9bFtmXTtuW3RdfHwoblt0XT1bXSksblt0XVtmXT9uW3RdW2ZdKz0xLzVlNTpuW3RdW2ZdPTEvNWU1fX1yZXR1cm4gbn0sUz0ocixzKT0+cioqcz49NWU2LG09KHIscyk9PntpZihyLmxlbmd0aD09PTEpcmV0dXJue3Rvb1Nsb3c6ITEscHJvYnM6W1sxXV19O2NvbnN0IGk9UyhyLmxlbmd0aCxzKTtpZihpKXJldHVybnt0b29TbG93OmkscHJvYnM6ZChyLHMpfTtjb25zdCBuPXIucmVkdWNlKCh0LG8pPT50K28sMCksZT1bXSxsPVtdO2ZvcihsZXQgdD0wO3Q8ci5sZW5ndGg7dCsrKXtlW3RdPVtdO2ZvcihsZXQgbz0wO288cztvKyspZVt0XVtvXT0wO2xbdF09QXJyYXkocysxKS5maWxsKDApfWNvbnN0IGY9dD0+e2NvbnN0IG89dFswXSxhPXQuc2xpY2UoMSk7bGV0IHA9bjtmb3IoY29uc3QgaCBvZiBhKXAtPXJbaF07cmV0dXJuKGEubGVuZ3RoPT09MD8xOmYoYSkpKnJbb10vcH07Zm9yKGxldCB0PTA7dDxzJiYhKGkmJnQ+MCk7dCs9MSl7Y29uc3Qgbz1uZXcgYyhyLmxlbmd0aCx0KzEpO2Zvcihjb25zdCBhIG9mIG8pe2NvbnN0IHA9bmV3IFNldChhKTtpZihhLmxlbmd0aCE9PXAuc2l6ZSljb250aW51ZTtjb25zdCBJPWFbMF0sZz1mKGEpO2lmKGVbSV1bdF0rPWcsdD09PXMtMSlmb3IobGV0IGg9MDtoPGwubGVuZ3RoO2grKyl7aWYocC5oYXMoaCkpY29udGludWU7bGV0IHg9MDtmb3IoY29uc3QgeSBvZiBhKXk+aCYmKHgrPTEpO2xbaF1beF0rPWd9fX1mb3IobGV0IHQ9MDt0PHIubGVuZ3RoO3QrKylmb3IobGV0IG89MDtvPHMrMTtvKyspdCtvPnMtMSYmdCtvPHIubGVuZ3RoJiYoZVt0XVt0K29dPWxbdF1bb10pO3JldHVybnt0b29TbG93OmkscHJvYnM6ZX19O29ubWVzc2FnZT1yPT57cG9zdE1lc3NhZ2Uoey4uLm0oci5kYXRhLmNoYW5jZXMsci5kYXRhLm51bVRvUGljaykscmVxdWVzdENvdW50OnIuZGF0YS5yZXF1ZXN0Q291bnR9KX19KSgpOwo=",
	ye =
		typeof window < "u" &&
		window.Blob &&
		new Blob([atob(we)], { type: "text/javascript;charset=utf-8" });
function Be() {
	const e = ye && (window.URL || window.webkitURL).createObjectURL(ye);
	try {
		return e
			? new Worker(e)
			: new Worker("data:application/javascript;base64," + we);
	} finally {
		e && (window.URL || window.webkitURL).revokeObjectURL(e);
	}
}
const Q = [
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
	Ue = e => {
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
	Ee = e => (e !== void 0 ? `${(e * 100).toFixed(1)}%` : void 0),
	S = e => {
		const t = [];
		for (let n = 0; n < e; n++) t.push(`Team ${n + 1}`);
		return t;
	},
	j = e => {
		const t = S(e.length);
		for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
		return !0;
	},
	J = new Be();
let q = 0;
const Fe = () => {
	var M, X, N;
	const [e, t] = L("nba2019"),
		n = Q.find(p => p.key === e),
		[l, _] = L((M = n == null ? void 0 : n.chances) != null ? M : []),
		[o, c] = L((X = n == null ? void 0 : n.numToPick) != null ? X : 0),
		[d, a] = L(),
		[h, r] = L(() => S(l.length)),
		[b, m] = L(!0),
		[i, f] = L(),
		[W, v] = L(!1);
	fe(() => {
		m(!0),
			(q += 1),
			J.postMessage({ chances: l, numToPick: o, requestCount: q });
	}, [l, o]),
		fe(() => {
			const p = y => {
				y.data.requestCount === q &&
					(v(y.data.tooSlow), f(y.data.probs), m(!1));
			};
			return (
				J.addEventListener("message", p),
				() => {
					J.removeEventListener("message", p);
				}
			);
		}, []);
	const g = p => () => {
			var C, Z;
			a(void 0),
				_(
					p === "bottom"
						? [...l, (C = l[l.length - 1]) != null ? C : 1]
						: [(Z = l[0]) != null ? Z : 1, ...l],
				);
			const y = j(h);
			r(
				y
					? S(l.length + 1)
					: p === "bottom"
					? [...h, `Team ${h.length + 1}`]
					: [`Team ${h.length + 1}`, ...h],
			),
				t("custom");
		},
		T = () => {
			a(void 0), _([]), r([]), t("custom");
		},
		w = p =>
			s(H, {
				children: [
					s(z, {
						variant: "primary",
						outline: !0,
						className: "mr-2",
						onClick: g(p),
						children: "Add Team",
					}),
					s(z, {
						variant: "danger",
						outline: !0,
						className: "mr-2",
						onClick: T,
						disabled: l.length === 0,
						children: "Clear Teams",
					}),
				],
			});
	return s(H, {
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
								onChange: p => {
									const y = Q.find(C => C.key === p.target.value);
									if (y) {
										a(void 0), t(y.key), _(y.chances), c(y.numToPick);
										const C = j(h),
											Z = y.chances.length;
										if (C) r(S(Z));
										else {
											const x = h.slice(0, Z);
											for (; x.length < Z; ) x.push(`Team ${x.length + 1}`);
											r(x);
										}
									} else t("custom");
								},
								value: (N = n == null ? void 0 : n.key) != null ? N : "custom",
								children: [
									Q.map(p =>
										s("option", { value: p.key, children: p.title }, p.key),
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
								onChange: p => {
									a(void 0), t("custom"), c(Math.round(p.target.valueAsNumber));
								},
							}),
						],
					}),
				],
			}),
			n
				? s("div", {
						className: "text-slate-500 mt-1",
						children: n.description,
				  })
				: null,
			W
				? s(H, {
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
					s("div", { children: w("top") }),
					s("div", {
						className: "mt-2 sm:mt-0",
						children: [
							s(z, {
								variant: "success",
								onClick: () => {
									const p = Re(l, o);
									a(p);
								},
								disabled: l.length === 0,
								children: "Sim Lottery",
							}),
							d
								? s(z, {
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
				? s(H, {
						children: [
							l.length > 0
								? s("div", {
										className: "mt-2 overflow-x-auto",
										children: s("table", {
											className: "table-auto",
											style: { width: "unset" },
											children: [
												s("thead", {
													className: "text-center",
													children: s("tr", {
														className: "border-b-2 border-slate-500",
														children: [
															s("th", {}),
															s("th", { children: "Team Name" }),
															s("th", { children: "Chances" }),
															l.map((p, y) =>
																s("th", { children: Ue(y + 1) }, y),
															),
														],
													}),
												}),
												s("tbody", {
													className: "text-end",
													children: l.map((p, y) => {
														const C = `name-${y}`,
															Z = `chances-${y}`;
														return s("tr", {
															className: "border-b",
															children: [
																s("td", {
																	className: "py-0 w-0",
																	children: s("button", {
																		className: "text-red-600 text-xl",
																		type: "button",
																		onClick: () => {
																			a(void 0),
																				_(l.filter((G, P) => P !== y)),
																				t("custom");
																			const x = j(h);
																			r(
																				x
																					? S(l.length - 1)
																					: h.filter((G, P) => P !== y),
																			);
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
																			htmlFor: C,
																			children: ["Name of team #", y + 1],
																		}),
																		s("input", {
																			id: C,
																			className:
																				"form-control py-1 px-2 text-sm w-[100px]",
																			type: "text",
																			value: h[y],
																			onChange: x => {
																				const G = x.target.result;
																				r(h.map((P, I) => (I === y ? G : P)));
																			},
																		}),
																	],
																}),
																s("td", {
																	className: "py-0 w-0",
																	children: [
																		s("label", {
																			className: "sr-only",
																			htmlFor: Z,
																			children: [
																				"Lottery chances for team #",
																				y + 1,
																			],
																		}),
																		s("input", {
																			id: Z,
																			className:
																				"form-control py-1 px-2 text-sm",
																			type: "text",
																			value: p,
																			onChange: x => {
																				const G = parseFloat(x.target.value);
																				Number.isNaN(G) ||
																					(a(void 0),
																					t("custom"),
																					_(
																						l.map((P, I) => (y === I ? G : P)),
																					));
																			},
																		}),
																	],
																}),
																l.map((x, G) => {
																	var I;
																	const P = Ee(
																		(I = i[y]) == null ? void 0 : I[G],
																	);
																	return s("td", {
																		className: `${
																			d && d[G] === y ? "bg-green-200" : ""
																		}${b ? " text-slate-500" : ""}`,
																		children: P != null ? P : "\xA0",
																	});
																}),
															],
														});
													}),
												}),
											],
										}),
								  })
								: s("div", {
										className: "my-3",
										children: "You should add some teams...",
								  }),
							l.length > 0
								? s("div", { className: "my-3", children: w("bottom") })
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
};
Me(s(Fe, {}), document.getElementById("app"));
