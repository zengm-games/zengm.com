(function () {
	let e = document.createElement(`link`).relList;
	if (e && e.supports && e.supports(`modulepreload`)) return;
	for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
	new MutationObserver(e => {
		for (let t of e)
			if (t.type === `childList`)
				for (let e of t.addedNodes)
					e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
	}).observe(document, { childList: !0, subtree: !0 });
	function t(e) {
		let t = {};
		return (
			e.integrity && (t.integrity = e.integrity),
			e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
			e.crossOrigin === `use-credentials`
				? (t.credentials = `include`)
				: e.crossOrigin === `anonymous`
					? (t.credentials = `omit`)
					: (t.credentials = `same-origin`),
			t
		);
	}
	function n(e) {
		if (e.ep) return;
		e.ep = !0;
		let n = t(e);
		fetch(e.href, n);
	}
})();
var e,
	t,
	n,
	r,
	i,
	a,
	o,
	s,
	c,
	l,
	u,
	d,
	f,
	p,
	m = {},
	h = [],
	g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	_ = Array.isArray;
function v(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function y(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function b(t, n, r) {
	var i,
		a,
		o,
		s = {};
	for (o in n)
		o == `key` ? (i = n[o]) : o == `ref` ? (a = n[o]) : (s[o] = n[o]);
	if (
		(arguments.length > 2 &&
			(s.children = arguments.length > 3 ? e.call(arguments, 2) : r),
		typeof t == `function` && t.defaultProps != null)
	)
		for (o in t.defaultProps) s[o] === void 0 && (s[o] = t.defaultProps[o]);
	return x(t, s, i, a, null);
}
function x(e, r, i, a, o) {
	var s = {
		type: e,
		props: r,
		key: i,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: o ?? ++n,
		__i: -1,
		__u: 0,
	};
	return (o == null && t.vnode != null && t.vnode(s), s);
}
function S(e) {
	return e.children;
}
function C(e, t) {
	((this.props = e), (this.context = t));
}
function w(e, t) {
	if (t == null) return e.__ ? w(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++)
		if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == `function` ? w(e) : null;
}
function T(e) {
	if (e.__P && e.__d) {
		var n = e.__v,
			r = n.__e,
			i = [],
			a = [],
			o = v({}, n);
		((o.__v = n.__v + 1),
			t.vnode && t.vnode(o),
			P(
				e.__P,
				o,
				n,
				e.__n,
				e.__P.namespaceURI,
				32 & n.__u ? [r] : null,
				i,
				r ?? w(n),
				!!(32 & n.__u),
				a,
			),
			(o.__v = n.__v),
			(o.__.__k[o.__i] = o),
			re(i, o, a),
			(n.__e = n.__ = null),
			o.__e != r && E(o));
	}
}
function E(e) {
	if ((e = e.__) != null && e.__c != null)
		return (
			(e.__e = e.__c.base = null),
			e.__k.some(function (t) {
				if (t != null && t.__e != null) return (e.__e = e.__c.base = t.__e);
			}),
			E(e)
		);
}
function D(e) {
	((!e.__d && (e.__d = !0) && r.push(e) && !O.__r++) ||
		i != t.debounceRendering) &&
		((i = t.debounceRendering) || a)(O);
}
function O() {
	try {
		for (var e, t = 1; r.length; )
			(r.length > t && r.sort(o), (e = r.shift()), (t = r.length), T(e));
	} finally {
		r.length = O.__r = 0;
	}
}
function ee(e, t, n, r, i, a, o, s, c, l, u) {
	var d,
		f,
		p,
		g,
		_,
		v,
		y,
		b = (r && r.__k) || h,
		x = t.length;
	for (c = k(n, t, b, c, x), d = 0; d < x; d++)
		(p = n.__k[d]) != null &&
			((f = (p.__i != -1 && b[p.__i]) || m),
			(p.__i = d),
			(v = P(e, p, f, i, a, o, s, c, l, u)),
			(g = p.__e),
			p.ref &&
				f.ref != p.ref &&
				(f.ref && F(f.ref, null, p), u.push(p.ref, p.__c || g, p)),
			_ == null && g != null && (_ = g),
			(y = !!(4 & p.__u)) || f.__k === p.__k
				? ((c = A(p, c, e, y)), y && f.__e && (f.__e = null))
				: typeof p.type == `function` && v !== void 0
					? (c = v)
					: g && (c = g.nextSibling),
			(p.__u &= -7));
	return ((n.__e = _), c);
}
function k(e, t, n, r, i) {
	var a,
		o,
		s,
		c,
		l,
		u = n.length,
		d = u,
		f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++)
		(o = t[a]) != null && typeof o != `boolean` && typeof o != `function`
			? (typeof o == `string` ||
				typeof o == `number` ||
				typeof o == `bigint` ||
				o.constructor == String
					? (o = e.__k[a] = x(null, o, null, null, null))
					: _(o)
						? (o = e.__k[a] = x(S, { children: o }, null, null, null))
						: o.constructor === void 0 && o.__b > 0
							? (o = e.__k[a] =
									x(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v))
							: (e.__k[a] = o),
				(c = a + f),
				(o.__ = e),
				(o.__b = e.__b + 1),
				(s = null),
				(l = o.__i = j(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)),
				s == null || s.__v == null
					? (l == -1 && (i > u ? f-- : i < u && f++),
						typeof o.type != `function` && (o.__u |= 4))
					: l != c &&
						(l == c - 1
							? f--
							: l == c + 1
								? f++
								: (l > c ? f-- : f++, (o.__u |= 4))))
			: (e.__k[a] = null);
	if (d)
		for (a = 0; a < u; a++)
			(s = n[a]) != null &&
				!(2 & s.__u) &&
				(s.__e == r && (r = w(s)), oe(s, s));
	return r;
}
function A(e, t, n, r) {
	var i, a;
	if (typeof e.type == `function`) {
		for (i = e.__k, a = 0; i && a < i.length; a++)
			i[a] && ((i[a].__ = e), (t = A(i[a], t, n, r)));
		return t;
	}
	e.__e != t &&
		(r &&
			(t && e.type && !t.parentNode && (t = w(e)),
			n.insertBefore(e.__e, t || null)),
		(t = e.__e));
	do t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function j(e, t, n, r) {
	var i,
		a,
		o,
		s = e.key,
		c = e.type,
		l = t[n],
		u = l != null && (2 & l.__u) == 0;
	if ((l === null && s == null) || (u && s == l.key && c == l.type)) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length; )
			if (
				(l = t[(o = i >= 0 ? i-- : a++)]) != null &&
				!(2 & l.__u) &&
				s == l.key &&
				c == l.type
			)
				return o;
	}
	return -1;
}
function M(e, t, n) {
	t[0] == `-`
		? e.setProperty(t, n ?? ``)
		: (e[t] =
				n == null ? `` : typeof n != `number` || g.test(t) ? n : n + `px`);
}
function N(e, t, n, r, i) {
	var a, o;
	n: if (t == `style`)
		if (typeof n == `string`) e.style.cssText = n;
		else {
			if ((typeof r == `string` && (e.style.cssText = r = ``), r))
				for (t in r) (n && t in n) || M(e.style, t, ``);
			if (n) for (t in n) (r && n[t] == r[t]) || M(e.style, t, n[t]);
		}
	else if (t[0] == `o` && t[1] == `n`)
		((a = t != (t = t.replace(u, `$1`))),
			(o = t.toLowerCase()),
			(t =
				o in e || t == `onFocusOut` || t == `onFocusIn`
					? o.slice(2)
					: t.slice(2)),
			(e.l ||= {}),
			(e.l[t + a] = n),
			n
				? r
					? (n[l] = r[l])
					: ((n[l] = d), e.addEventListener(t, a ? p : f, a))
				: e.removeEventListener(t, a ? p : f, a));
	else {
		if (i == `http://www.w3.org/2000/svg`)
			t = t.replace(/xlink(H|:h)/, `h`).replace(/sName$/, `s`);
		else if (
			t != `width` &&
			t != `height` &&
			t != `href` &&
			t != `list` &&
			t != `form` &&
			t != `tabIndex` &&
			t != `download` &&
			t != `rowSpan` &&
			t != `colSpan` &&
			t != `role` &&
			t != `popover` &&
			t in e
		)
			try {
				e[t] = n ?? ``;
				break n;
			} catch {}
		typeof n == `function` ||
			(n == null || (!1 === n && t[4] != `-`)
				? e.removeAttribute(t)
				: e.setAttribute(t, t == `popover` && n == 1 ? `` : n));
	}
}
function te(e) {
	return function (n) {
		if (this.l) {
			var r = this.l[n.type + e];
			if (n[c] == null) n[c] = d++;
			else if (n[c] < r[l]) return;
			return r(t.event ? t.event(n) : n);
		}
	};
}
function P(e, n, r, i, a, o, s, c, l, u) {
	var d,
		f,
		p,
		m,
		g,
		b,
		x,
		w,
		T,
		E,
		D,
		O,
		k,
		A,
		j,
		M,
		N = n.type;
	if (n.constructor !== void 0) return null;
	(128 & r.__u && ((l = !!(32 & r.__u)), (o = [(c = n.__e = r.__e)])),
		(d = t.__b) && d(n));
	n: if (typeof N == `function`) {
		f = s.length;
		try {
			if (
				((T = n.props),
				(E = N.prototype && N.prototype.render),
				(D = (d = N.contextType) && i[d.__c]),
				(O = d ? (D ? D.props.value : d.__) : i),
				r.__c
					? (w = (p = n.__c = r.__c).__ = p.__E)
					: (E
							? (n.__c = p = new N(T, O))
							: ((n.__c = p = new C(T, O)),
								(p.constructor = N),
								(p.render = se)),
						D && D.sub(p),
						(p.state ||= {}),
						(p.__n = i),
						(m = p.__d = !0),
						(p.__h = []),
						(p._sb = [])),
				E && p.__s == null && (p.__s = p.state),
				E &&
					N.getDerivedStateFromProps != null &&
					(p.__s == p.state && (p.__s = v({}, p.__s)),
					v(p.__s, N.getDerivedStateFromProps(T, p.__s))),
				(g = p.props),
				(b = p.state),
				(p.__v = n),
				m)
			)
				(E &&
					N.getDerivedStateFromProps == null &&
					p.componentWillMount != null &&
					p.componentWillMount(),
					E && p.componentDidMount != null && p.__h.push(p.componentDidMount));
			else {
				if (
					(E &&
						N.getDerivedStateFromProps == null &&
						T !== g &&
						p.componentWillReceiveProps != null &&
						p.componentWillReceiveProps(T, O),
					n.__v == r.__v ||
						(!p.__e &&
							p.shouldComponentUpdate != null &&
							!1 === p.shouldComponentUpdate(T, p.__s, O)))
				) {
					(n.__v != r.__v && ((p.props = T), (p.state = p.__s), (p.__d = !1)),
						(n.__e = r.__e),
						(n.__k = r.__k),
						n.__k.some(function (e) {
							e && (e.__ = n);
						}),
						h.push.apply(p.__h, p._sb),
						(p._sb = []),
						p.__h.length && s.push(p));
					break n;
				}
				(p.componentWillUpdate != null && p.componentWillUpdate(T, p.__s, O),
					E &&
						p.componentDidUpdate != null &&
						p.__h.push(function () {
							p.componentDidUpdate(g, b, x);
						}));
			}
			if (
				((p.context = O),
				(p.props = T),
				(p.__P = e),
				(p.__e = !1),
				(k = t.__r),
				(A = 0),
				E)
			)
				((p.state = p.__s),
					(p.__d = !1),
					k && k(n),
					(d = p.render(p.props, p.state, p.context)),
					h.push.apply(p.__h, p._sb),
					(p._sb = []));
			else
				do
					((p.__d = !1),
						k && k(n),
						(d = p.render(p.props, p.state, p.context)),
						(p.state = p.__s));
				while (p.__d && ++A < 25);
			((p.state = p.__s),
				p.getChildContext != null && (i = v(v({}, i), p.getChildContext())),
				E &&
					!m &&
					p.getSnapshotBeforeUpdate != null &&
					(x = p.getSnapshotBeforeUpdate(g, b)),
				(j =
					d != null && d.type === S && d.key == null
						? ie(d.props.children)
						: d),
				(c = ee(e, _(j) ? j : [j], n, r, i, a, o, s, c, l, u)),
				(p.base = n.__e),
				(n.__u &= -161),
				p.__h.length && s.push(p),
				w && (p.__E = p.__ = null));
		} catch (e) {
			if (((s.length = f), (n.__v = null), l || o != null)) {
				if (e.then) {
					for (n.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; )
						c = c.nextSibling;
					(o != null && (o[o.indexOf(c)] = null), (n.__e = c));
				} else if (o != null) for (M = o.length; M--; ) y(o[M]);
			} else n.__e = r.__e;
			((n.__k ??= r.__k || []), e.then || ne(n), t.__e(e, n, r));
		}
	} else
		o == null && n.__v == r.__v
			? ((n.__k = r.__k), (n.__e = r.__e))
			: (c = n.__e = ae(r.__e, n, r, i, a, o, s, l, u));
	return ((d = t.diffed) && d(n), 128 & n.__u ? void 0 : c);
}
function ne(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(ne));
}
function re(e, n, r) {
	for (var i = 0; i < r.length; i++) F(r[i], r[++i], r[++i]);
	(t.__c && t.__c(n, e),
		e.some(function (n) {
			try {
				((e = n.__h),
					(n.__h = []),
					e.some(function (e) {
						e.call(n);
					}));
			} catch (e) {
				t.__e(e, n.__v);
			}
		}));
}
function ie(e) {
	return typeof e != `object` || !e || e.__b > 0
		? e
		: _(e)
			? e.map(ie)
			: e.constructor === void 0
				? v({}, e)
				: null;
}
function ae(n, r, i, a, o, s, c, l, u) {
	var d,
		f,
		p,
		h,
		g,
		v,
		b,
		x = i.props || m,
		S = r.props,
		C = r.type;
	if (
		(C == `svg`
			? (o = `http://www.w3.org/2000/svg`)
			: C == `math`
				? (o = `http://www.w3.org/1998/Math/MathML`)
				: (o ||= `http://www.w3.org/1999/xhtml`),
		s != null)
	) {
		for (d = 0; d < s.length; d++)
			if (
				(g = s[d]) &&
				`setAttribute` in g == !!C &&
				(C ? g.localName == C : g.nodeType == 3)
			) {
				((n = g), (s[d] = null));
				break;
			}
	}
	if (n == null) {
		if (C == null) return document.createTextNode(S);
		((n = document.createElementNS(o, C, S.is && S)),
			(l &&= (t.__m && t.__m(r, s), !1)),
			(s = null));
	}
	if (C == null) x === S || (l && n.data == S) || (n.data = S);
	else {
		if (
			((s =
				C == `textarea` && S.defaultValue != null
					? null
					: s && e.call(n.childNodes)),
			!l && s != null)
		)
			for (x = {}, d = 0; d < n.attributes.length; d++)
				x[(g = n.attributes[d]).name] = g.value;
		for (d in x)
			((g = x[d]),
				d == `dangerouslySetInnerHTML`
					? (p = g)
					: d == `children` ||
						d in S ||
						(d == `value` && `defaultValue` in S) ||
						(d == `checked` && `defaultChecked` in S) ||
						N(n, d, null, g, o));
		for (d in S)
			((g = S[d]),
				d == `children`
					? (h = g)
					: d == `dangerouslySetInnerHTML`
						? (f = g)
						: d == `value`
							? (v = g)
							: d == `checked`
								? (b = g)
								: (l && typeof g != `function`) ||
									x[d] === g ||
									N(n, d, g, x[d], o));
		if (f)
			(l ||
				(p && (f.__html == p.__html || f.__html == n.innerHTML)) ||
				(n.innerHTML = f.__html),
				(r.__k = []));
		else if (
			(p && (n.innerHTML = ``),
			ee(
				r.type == `template` ? n.content : n,
				_(h) ? h : [h],
				r,
				i,
				a,
				C == `foreignObject` ? `http://www.w3.org/1999/xhtml` : o,
				s,
				c,
				s ? s[0] : i.__k && w(i, 0),
				l,
				u,
			),
			s != null)
		)
			for (d = s.length; d--; ) y(s[d]);
		(l && C != `textarea`) ||
			((d = `value`),
			C == `progress` && v == null
				? n.removeAttribute(`value`)
				: v != null &&
					(v !== n[d] ||
						(C == `progress` && !v) ||
						(C == `option` && v != x[d])) &&
					N(n, d, v, x[d], o),
			(d = `checked`),
			b != null && b != n[d] && N(n, d, b, x[d], o));
	}
	return n;
}
function F(e, n, r) {
	try {
		if (typeof e == `function`) {
			var i = typeof e.__u == `function`;
			(i && e.__u(), (i && n == null) || (e.__u = e(n)));
		} else e.current = n;
	} catch (e) {
		t.__e(e, r);
	}
}
function oe(e, n, r) {
	var i, a;
	if (
		(t.unmount && t.unmount(e),
		(i = e.ref) && ((i.current && i.current != e.__e) || F(i, null, n)),
		(i = e.__c) != null)
	) {
		if (i.componentWillUnmount)
			try {
				i.componentWillUnmount();
			} catch (e) {
				t.__e(e, n);
			}
		i.base = i.__P = i.__n = null;
	}
	if ((i = e.__k))
		for (a = 0; a < i.length; a++)
			i[a] && oe(i[a], n, r || typeof e.type != `function`);
	(r || y(e.__e), (e.__c = e.__ = e.__e = void 0));
}
function se(e, t, n) {
	return this.constructor(e, n);
}
function ce(n, r, i) {
	var a, o, s, c;
	(r == document && (r = document.documentElement),
		t.__ && t.__(n, r),
		(o = (a = typeof i == `function`) ? null : (i && i.__k) || r.__k),
		(s = []),
		(c = []),
		P(
			r,
			(n = ((!a && i) || r).__k = b(S, null, [n])),
			o || m,
			m,
			r.namespaceURI,
			!a && i ? [i] : o ? null : r.firstChild ? e.call(r.childNodes) : null,
			s,
			!a && i ? i : o ? o.__e : r.firstChild,
			a,
			c,
		),
		re(s, n, c),
		(n.props.children = null));
}
((e = h.slice),
	(t = {
		__e: function (e, t, n, r) {
			for (var i, a, o; (t = t.__); )
				if ((i = t.__c) && !i.__)
					try {
						if (
							((a = i.constructor) &&
								a.getDerivedStateFromError != null &&
								(i.setState(a.getDerivedStateFromError(e)), (o = i.__d)),
							i.componentDidCatch != null &&
								(i.componentDidCatch(e, r || {}), (o = i.__d)),
							o)
						)
							return (i.__E = i);
					} catch (t) {
						e = t;
					}
			throw e;
		},
	}),
	(n = 0),
	(C.prototype.setState = function (e, t) {
		var n =
			this.__s != null && this.__s != this.state
				? this.__s
				: (this.__s = v({}, this.state));
		(typeof e == `function` && (e = e(v({}, n), this.props)),
			e && v(n, e),
			e != null && this.__v && (t && this._sb.push(t), D(this)));
	}),
	(C.prototype.forceUpdate = function (e) {
		this.__v && ((this.__e = !0), e && this.__h.push(e), D(this));
	}),
	(C.prototype.render = S),
	(r = []),
	(a =
		typeof Promise == `function`
			? Promise.prototype.then.bind(Promise.resolve())
			: setTimeout),
	(o = function (e, t) {
		return e.__v.__b - t.__v.__b;
	}),
	(O.__r = 0),
	(s = Math.random().toString(8)),
	(c = `__d` + s),
	(l = `__a` + s),
	(u = /(PointerCapture)$|Capture$/i),
	(d = 0),
	(f = te(!1)),
	(p = te(!0)));
var I,
	L,
	R,
	le,
	z = 0,
	ue = [],
	B = t,
	de = B.__b,
	fe = B.__r,
	V = B.diffed,
	pe = B.__c,
	me = B.unmount,
	he = B.__;
function ge(e, t) {
	(B.__h && B.__h(L, e, z || t), (z = 0));
	var n = (L.__H ||= { __: [], __h: [] });
	return (e >= n.__.length && n.__.push({}), n.__[e]);
}
function H(e) {
	return ((z = 1), _e(Ce, e));
}
function _e(e, t, n) {
	var r = ge(I++, 2);
	if (
		((r.t = e),
		!r.__c &&
			((r.__ = [
				n ? n(t) : Ce(void 0, t),
				function (e) {
					var t = r.__N ? r.__N[0] : r.__[0],
						n = r.t(t, e);
					t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
				},
			]),
			(r.__c = L),
			!L.__f))
	) {
		var i = function (e, t, n) {
			if (!r.__c.__H) return !0;
			var i = !1,
				o = r.__c.props !== e;
			if (
				(r.__c.__H.__.some(function (e) {
					if (e.__N) {
						i = !0;
						var t = e.__[0];
						((e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (o = !0));
					}
				}),
				a)
			) {
				var s = a.call(this, e, t, n);
				return i ? s || o : s;
			}
			return !i || o;
		};
		L.__f = !0;
		var a = L.shouldComponentUpdate,
			o = L.componentWillUpdate;
		((L.componentWillUpdate = function (e, t, n) {
			if (this.__e) {
				var r = a;
				((a = void 0), i(e, t, n), (a = r));
			}
			o && o.call(this, e, t, n);
		}),
			(L.shouldComponentUpdate = i));
	}
	return r.__N || r.__;
}
function U(e, t) {
	var n = ge(I++, 3);
	!B.__s && Se(n.__H, t) && ((n.__ = e), (n.u = t), L.__H.__h.push(n));
}
function ve() {
	for (var e; (e = ue.shift()); ) {
		var t = e.__H;
		if (e.__P && t)
			try {
				(t.__h.some(W), t.__h.some(xe), (t.__h = []));
			} catch (n) {
				((t.__h = []), B.__e(n, e.__v));
			}
	}
}
((B.__b = function (e) {
	((L = null), de && de(e));
}),
	(B.__ = function (e, t) {
		(e && t.__k && t.__k.__m && (e.__m = t.__k.__m), he && he(e, t));
	}),
	(B.__r = function (e) {
		(fe && fe(e), (I = 0));
		var t = (L = e.__c).__H;
		(t &&
			(R === L
				? ((t.__h = []),
					(L.__h = []),
					t.__.some(function (e) {
						(e.__N && (e.__ = e.__N), (e.u = e.__N = void 0));
					}))
				: (t.__h.length && ve(), (I = 0))),
			(R = L));
	}),
	(B.diffed = function (e) {
		V && V(e);
		var t = e.__c;
		(t &&
			t.__H &&
			(t.__H.__h.length &&
				((ue.push(t) !== 1 && le === B.requestAnimationFrame) ||
					((le = B.requestAnimationFrame) || be)(ve)),
			t.__H.__.some(function (e) {
				e.u &&= ((e.__H = e.u), void 0);
			})),
			(R = L = null));
	}),
	(B.__c = function (e, t) {
		(t.some(function (e) {
			try {
				(e.__h.some(W),
					(e.__h = e.__h.filter(function (e) {
						return !e.__ || xe(e);
					})));
			} catch (n) {
				(t.some(function (e) {
					e.__h &&= [];
				}),
					(t = []),
					B.__e(n, e.__v));
			}
		}),
			pe && pe(e, t));
	}),
	(B.unmount = function (e) {
		me && me(e);
		var t,
			n = e.__c;
		n &&
			n.__H &&
			(n.__H.__.some(function (e) {
				try {
					W(e);
				} catch (e) {
					t = e;
				}
			}),
			(n.__H = void 0),
			t && B.__e(t, n.__v));
	}));
var ye = typeof requestAnimationFrame == `function`;
function be(e) {
	var t,
		n = function () {
			(clearTimeout(r), ye && cancelAnimationFrame(t), setTimeout(e));
		},
		r = setTimeout(n, 35);
	ye && (t = requestAnimationFrame(n));
}
function W(e) {
	var t = L,
		n = e.__c;
	(typeof n == `function` && ((e.__c = void 0), n()), (L = t));
}
function xe(e) {
	var t = L;
	((e.__c = e.__()), (L = t));
}
function Se(e, t) {
	return (
		!e ||
		e.length !== t.length ||
		t.some(function (t, n) {
			return t !== e[n];
		})
	);
}
function Ce(e, t) {
	return typeof t == `function` ? t(e) : t;
}
var we = 1,
	Te = 5,
	Ee = class {
		indexes = [];
		nba2027;
		constructor(e) {
			e && (this.nba2027 = { pending1: [], pending5: [], restrictions: e });
		}
		add(e, t) {
			if (this.nba2027 && !t && this.indexes.length < Te) {
				if (this.nba2027.restrictions.restricted5.includes(e)) {
					this.nba2027.pending5.push(e);
					return;
				} else if (
					this.indexes.length < we &&
					this.nba2027.restrictions.restricted1.includes(e)
				) {
					this.nba2027.pending1.push(e);
					return;
				}
			}
			(this.indexes.push(e),
				this.nba2027 &&
					(this.indexes.length >= we &&
						this.nba2027.pending1.length > 0 &&
						(this.indexes.push(...this.nba2027.pending1),
						(this.nba2027.pending1 = [])),
					this.indexes.length >= Te &&
						this.nba2027.pending5.length > 0 &&
						(this.indexes.push(...this.nba2027.pending5),
						(this.nba2027.pending5 = []))));
		}
		finalizeNba2027() {
			if (this.nba2027) {
				let { pending1: e, pending5: t } = this.nba2027;
				(e.length > 0 && this.indexes.push(...e),
					t.length > 0 && this.indexes.push(...t));
			}
		}
	},
	De = (e, t, n) => {
		let r = e.map((e, t) => ({ chances: e, index: t })),
			i = new Ee(n),
			a = n ? new Set(r.slice(0, 3)) : void 0,
			o = (e, t) => {
				(i.add(e.index, t), (r = r.filter(t => t !== e)), a && a.delete(e));
			};
		for (let e = 0; e < t; e++) {
			let t = a?.size,
				n = t !== void 0 && t > 0 ? e + t >= 12 : !1,
				i = 0;
			for (let e of r) (n && !a.has(e)) || (i += e.chances);
			let s = Math.random() * i,
				c = 0;
			for (let e of r)
				if (((n && !a.has(e)) || (c += e.chances), s < c)) {
					o(e, !1);
					break;
				}
		}
		for (let e of r) i.add(e.index, !1);
		return (i.finalizeNba2027(), i.indexes);
	},
	Oe = 0;
Array.isArray;
function G(e, n, r, i, a, o) {
	n ||= {};
	var s,
		c,
		l = n;
	if (`ref` in l)
		for (c in ((l = {}), n)) c == `ref` ? (s = n[c]) : (l[c] = n[c]);
	var u = {
		type: e,
		props: l,
		key: r,
		ref: s,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --Oe,
		__i: -1,
		__u: 0,
		__source: a,
		__self: o,
	};
	if (typeof e == `function` && (s = e.defaultProps))
		for (c in s) l[c] === void 0 && (l[c] = s[c]);
	return (t.vnode && t.vnode(u), u);
}
var K = ({
		children: e,
		className: t,
		disabled: n,
		onClick: r,
		outline: i,
		variant: a,
	}) => {
		let o;
		return (
			a === `primary`
				? (o = `enabled:hover:bg-slate-100 text-blue-600 border-blue-600`)
				: a === `danger`
					? (o = `enabled:hover:bg-slate-100 text-red-600 border-red-600`)
					: a === `secondary`
						? (o = `enabled:hover:bg-slate-100 text-slate-600 border-slate-600`)
						: a === `success` &&
							(i ||
								(o = `enabled:hover:bg-green-800 enabled:hover:text-white text-white bg-green-700`)),
			G(`button`, {
				className: `${i ? `bg-transparent ` : ``}py-2 px-3 border rounded disabled:opacity-50 ${o}${t ? ` ${t}` : ``}`,
				disabled: n,
				onClick: r,
				type: `button`,
				children: e,
			})
		);
	},
	ke =
		"(function(){(typeof Iterator>`u`||Iterator==null)&&(globalThis.Iterator={}),Iterator.zip||(Iterator.zip=(e,t)=>{let n=t?.mode??`shortest`,r=e.map(e=>e[Symbol.iterator]());return r.length===0?{next(){return{value:void 0,done:!0}},[Symbol.iterator](){return this}}:{next(){let e=!1,t=!1,i=[];for(let[t,n]of r.entries()){let r=n.next();if(r.done){e=!0;break}else i[t]=r.value}if(e)if(n===`shortest`)for(let[e,t]of r.entries())e!==i.length&&t.return?.();else for(let[e,n]of r.entries())e<i.length?(t=!0,n.return?.()):e===i.length||n.next().done||(n.return?.(),t=!0);if(t)throw TypeError(`Iterables do not have the same length`);return e?{done:!0,value:void 0}:{done:!1,value:i}},return(e){for(let e of r)e.return?.();return{value:e,done:!0}},throw(e){for(let t of r)t.throw?.(e);throw e},[Symbol.iterator](){return this}}});var e=class{indexes=[];nba2027;constructor(e){e&&(this.nba2027={pending1:[],pending5:[],restrictions:e})}add(e,t){if(this.nba2027&&!t&&this.indexes.length<5){if(this.nba2027.restrictions.restricted5.includes(e)){this.nba2027.pending5.push(e);return}else if(this.indexes.length<1&&this.nba2027.restrictions.restricted1.includes(e)){this.nba2027.pending1.push(e);return}}this.indexes.push(e),this.nba2027&&(this.indexes.length>=1&&this.nba2027.pending1.length>0&&(this.indexes.push(...this.nba2027.pending1),this.nba2027.pending1=[]),this.indexes.length>=5&&this.nba2027.pending5.length>0&&(this.indexes.push(...this.nba2027.pending5),this.nba2027.pending5=[]))}finalizeNba2027(){if(this.nba2027){let{pending1:e,pending5:t}=this.nba2027;e.length>0&&this.indexes.push(...e),t.length>0&&this.indexes.push(...t)}}};let t=(t,n,r)=>{let i=t.map((e,t)=>({chances:e,index:t})),a=new e(r),o=r?new Set(i.slice(0,3)):void 0,s=(e,t)=>{a.add(e.index,t),i=i.filter(t=>t!==e),o&&o.delete(e)};for(let e=0;e<n;e++){let t=o?.size,n=t!==void 0&&t>0?e+t>=12:!1,r=0;for(let e of i)n&&!o.has(e)||(r+=e.chances);let a=Math.random()*r,c=0;for(let e of i)if(n&&!o.has(e)||(c+=e.chances),a<c){s(e,!1);break}}for(let e of i)a.add(e.index,!1);return a.finalizeNba2027(),a.indexes},n=(e,t)=>e<=11||t===1?!1:t===2?e>150:t===3?e>80:t===4?e>45:t===5?e>30:e*Math.sqrt(t)>55,r=e=>{let t=0;for(let n of e)t+=n;return t},i=(e,n,i)=>{let a=1e5,o=[];for(let r=0;r<a;r++){let r=t(e,n,i);for(let e=0;e<r.length;e++){let t=r[e];o[t]??=[],o[t][e]??=0,o[t][e]+=1/a}}let s=e.map((e,t)=>i&&(i.restricted1.includes(t)||i.restricted5.includes(t))?0:e),c=r(s);for(let[e,t]of s.entries())t>0&&(o[e][0]=t/c);return o},a=(e,t)=>{if(t>e/2&&(t=e-t),t<0||t>e)return 0;if(t===0||e===t)return 1;let n=1;for(let r=1;r<=t;r++)n*=(e-t+r)/r;return n},o=(e,t,n,r)=>{let i=a(n,e)*a(t-n,r-e),o=a(t,r);return o===0?0:i/o},s=e=>{for(let t=1;t<e.length;t++){let n=e[t-1];if(e[t]>n)return!1}return!0},c=(e,t,r)=>{let a=s(e),c=[],l=e.length,u=BigInt(l);for(let e=0;e<l;e++)c[e]=Array(l).fill(void 0);let d=new Map,f=0n,p=null,m=0;for(let[t,n]of e.entries()){let e=!!r&&t<3;e&&(f|=1n<<BigInt(t));let i=r?.restricted1.includes(t),o=r?.restricted5.includes(t),s=n<<3|!!e<<2|!!i<<1|!!o;!r&&!a&&s!==p&&m++,p=s;let c=s+m,l=d.get(c);l?l.teamIndices.push(t):d.set(c,{chances:n,isBottom3:e,isRestricted1:i,isRestricted5:o,teamIndices:[t]})}let h=Array.from(d.values()),g=n(h.length,t);if(g)return{tooSlow:g,probs:i(e,t,r)};for(let e of h)for(let t of e.teamIndices)d.set(t,e);let _=Array.from({length:l+1},()=>new Map);_[0].set(0n,1);let v=(1n<<u)-1n,y=h.map(()=>Array(l).fill(0));for(let e=0;e<l;e++){for(let[n,i]of _[e]){if(i<=0)continue;let a=n&v,s=n>>u,p=0;for(;p<l&&s&1n<<BigInt(p);)p++;if(p>=l)continue;if(!r&&e===t){let e=Array(h.length).fill(0);for(let[t,n]of h.entries())for(let r of n.teamIndices)a&1n<<BigInt(r)&&e[t]++;let n=0;for(let[r,a]of Iterator.zip([h,e],{mode:`strict`})){let e=r.teamIndices.length,s=(e-a)/e;if(s>0)for(let l=0;l<e;l++){let u=r.teamIndices[l],d=l,f=Math.min(a,d);for(let r=0;r<=f;r++){let l=o(r,e-1,d,a),f=i*s*l,p=d-r,m=t+n+p;c[u][m]=(c[u][m]??0)+f}}n+=e-a}continue}if(r){let t=[];for(let e=p;e<=11;e++)s&1n<<BigInt(e)||t.push(e);let n=f&~a,r=0;for(let e=n;e>0n;e&=e-1n)r++;if(t.length>0&&r===t.length){let o=i/r;for(let e=0;e<l;e++)if(n&1n<<BigInt(e)){let n=d.get(e),r=h.indexOf(n);for(let e of t)e<l&&(y[r][e]+=o)}let c=a|n,f=s;for(let e of t)f|=1n<<BigInt(e);let p=e+r,m=f<<u|c,g=_[p];g.set(m,(g.get(m)??0)+i);continue}}let m=0,g=[];for(let e of h){let t=[];for(let n of e.teamIndices)a&1n<<BigInt(n)||t.push(n);g.push(t),m+=t.length*e.chances}if(m!==0)for(let[t,n,o]of Iterator.zip([h,g,y],{mode:`strict`})){let c=n[0];if(c===void 0)continue;let d=i*(t.chances/m),f=p;for(;!(!(r&&(f===0&&t.isRestricted1||f<=4&&t.isRestricted5))&&!(s&1n<<BigInt(f)));)f++;f<l&&(o[f]+=d*n.length);let h=a|1n<<BigInt(c),g=(s|1n<<BigInt(f))<<u|h,v=_[e+1];v.set(g,(v.get(g)??0)+d*n.length)}}_[e]=null}for(let[e,n]of Iterator.zip([h,y],{mode:`strict`})){let r=e.teamIndices.length;for(let i=0;i<t;i++){let t=n[i];if(t>0){let n=t/r;for(let t of e.teamIndices)c[t][i]=n}}}return{tooSlow:g,probs:c}};onmessage=e=>{postMessage({...c(e.data.chances,e.data.numToPick,e.data.nba2027Restrictions),requestCount:e.data.requestCount})}})();",
	q =
		typeof self < `u` &&
		self.Blob &&
		new Blob(
			[`(self.URL || self.webkitURL).revokeObjectURL(self.location.href);`, ke],
			{ type: `text/javascript;charset=utf-8` },
		);
function Ae(e) {
	let t;
	try {
		if (((t = q && (self.URL || self.webkitURL).createObjectURL(q)), !t))
			throw ``;
		let n = new Worker(t, { name: e?.name });
		return (
			n.addEventListener(`error`, () => {
				(self.URL || self.webkitURL).revokeObjectURL(t);
			}),
			n
		);
	} catch {
		return new Worker(
			`data:text/javascript;charset=utf-8,` + encodeURIComponent(ke),
			{ name: e?.name },
		);
	}
}
var je = e => {
		let t;
		return (
			(t =
				e % 100 >= 11 && e % 100 <= 13
					? `th`
					: e % 10 == 1
						? `st`
						: e % 10 == 2
							? `nd`
							: e % 10 == 3
								? `rd`
								: `th`),
			e.toString() + t
		);
	},
	Me = e => (e === void 0 ? e : e === 1 ? `100%` : `${(e * 100).toFixed(1)}%`),
	Ne = ({
		chance: e,
		enableNba2027Restrictions: t,
		i: n,
		lotteryResults: r,
		loadingProbs: i,
		probs: a,
		setLotteryResults: o,
		setPresetKey: s,
		setTeams: c,
		teams: l,
	}) => {
		let [u, d] = H(!1),
			f = `name-${n}`,
			p = `chances-${n}`,
			m = l[n];
		return G(`tr`, {
			className: `border-b ${u ? `odd:bg-yellow-200 even:bg-yellow-100 hover:bg-[#f6edaa]` : `odd:bg-gray-100 hover:bg-gray-200`}`,
			onClick: e => {
				[`BUTTON`, `INPUT`].includes(e.target.nodeName) || d(e => !e);
			},
			children: [
				G(`td`, {
					className: `py-0 w-0`,
					children: G(`button`, {
						className: `text-red-600 text-xl`,
						type: `button`,
						onClick: () => {
							(o(void 0), s(t ? `customNba2027` : `custom`));
							let e = l.filter((e, t) => t !== n);
							if (X(l)) {
								let t = Y(e.length);
								c(e.map((e, n) => ({ chances: e.chances, name: t[n] })));
							} else c(e);
							d(!1);
						},
						title: `Remove team`,
						children: `✕`,
					}),
				}),
				G(`td`, {
					className: `py-0`,
					children: [
						G(`label`, {
							className: `sr-only`,
							htmlFor: f,
							children: [`Name of team #`, n + 1],
						}),
						G(`input`, {
							id: f,
							className: `form-control py-1 px-2 text-sm w-[100px]`,
							type: `text`,
							value: m.name,
							onChange: e => {
								let t = e.target.value;
								c(l.map((e, r) => (r === n ? { ...e, name: t } : e)));
							},
						}),
					],
				}),
				G(`td`, {
					className: `py-0 w-0`,
					children: [
						G(`label`, {
							className: `sr-only`,
							htmlFor: p,
							children: [`Lottery chances for team #`, n + 1],
						}),
						G(`input`, {
							id: p,
							className: `form-control py-1 px-2 text-sm`,
							type: `text`,
							value: e,
							onChange: e => {
								let r = parseFloat(e.target.value);
								Number.isNaN(r) ||
									(o(void 0),
									s(t ? `customNba2027` : `custom`),
									c(l.map((e, t) => (t === n ? { ...e, chances: r } : e))));
							},
						}),
					],
				}),
				t
					? G(`td`, {
							className: `py-0 text-start`,
							children: G(`button`, {
								className: `py-1 px-2 text-sm border rounded enabled:hover:bg-slate-100 ${m.restricted === void 0 ? `text-slate-600 border-slate-400` : `text-red-600 border-red-600`}`,
								onClick: () => {
									(o(void 0),
										s(`customNba2027`),
										c(
											l.map((e, t) =>
												t === n
													? {
															...e,
															restricted:
																e.restricted === 1
																	? 5
																	: e.restricted === 5
																		? void 0
																		: 1,
														}
													: e,
											),
										));
								},
								children:
									m.restricted === 1
										? `Top 1`
										: m.restricted === 5
											? `Top 5`
											: `None`,
							}),
						})
					: null,
				l.map((e, t) => {
					let o = Me(a[n]?.[t]);
					return G(`td`, {
						className: `${r && r[t] === n ? `bg-green-200` : ``}${i ? ` text-gray-500` : ``}`,
						children: o ?? `\xA0`,
					});
				}),
			],
		});
	},
	Pe = e =>
		G(`table`, {
			className: `table-auto`,
			style: { width: `unset` },
			children: [
				G(`thead`, {
					className: `text-center`,
					children: G(`tr`, {
						className: `border-b-2 border-gray-500`,
						children: [
							G(`th`, {}),
							G(`th`, { children: `Team Name` }),
							G(`th`, { children: `Chances` }),
							e.enableNba2027Restrictions
								? G(`th`, { children: `Restriction` })
								: null,
							e.teams.map((e, t) => G(`th`, { children: je(t + 1) }, t)),
						],
					}),
				}),
				G(`tbody`, {
					className: `text-end`,
					children: e.teams.map((t, n) =>
						G(Ne, { i: n, chance: t.chances, ...e }, n),
					),
				}),
			],
		}),
	J = [
		{
			key: `nba2027`,
			title: `NBA 2027-present (3-2-1)`,
			description: `Weighted lottery for all picks, like the NBA since 2027`,
			numToPick: 16,
			chances: [2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1],
			enableNba2027Restrictions: !0,
		},
		{
			key: `nba2019`,
			title: `NBA 2019-2026`,
			description: `Weighted lottery for the top 4 picks, like the NBA from 2019-2026`,
			numToPick: 4,
			chances: [140, 140, 140, 125, 105, 90, 75, 60, 45, 30, 20, 15, 10, 5],
		},
		{
			key: `nba1994`,
			title: `NBA 1994-2018`,
			description: `Weighted lottery for the top 3 picks, like the NBA from 1994-2018`,
			numToPick: 3,
			chances: [250, 199, 156, 119, 88, 63, 43, 28, 17, 11, 8, 7, 6, 5],
		},
		{
			key: `nba1990`,
			title: `NBA 1990-1993`,
			description: `Weighted lottery for the top 3 picks, like the NBA from 1990-1993`,
			numToPick: 3,
			chances: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		},
		{
			key: `nba1987`,
			title: `NBA 1987-1989`,
			description: `Random lottery for the top 3 picks, like the NBA from 1987-1989`,
			numToPick: 3,
			chances: [1, 1, 1, 1, 1, 1, 1],
		},
		{
			key: `nba1985`,
			title: `NBA 1985-1986`,
			description: `Non-playoff teams draft in random order, like the NBA from 1985-1986`,
			numToPick: 7,
			chances: [1, 1, 1, 1, 1, 1, 1],
		},
		{
			key: `nba1966`,
			title: `NBA 1966-1984`,
			description: `Coin flip to determine the top 2 picks, like the NBA from 1966-1984`,
			numToPick: 2,
			chances: [1, 1, 0, 0, 0, 0, 0],
		},
		{
			key: `nhl2021`,
			title: `NHL 2021-present`,
			description: `Weighted lottery for the top 2 picks, like the NHL since 2021. This does not include the NHL's constraint on the number of spots a team can move up.`,
			numToPick: 2,
			chances: [
				185, 135, 115, 95, 85, 75, 65, 60, 50, 35, 30, 25, 20, 15, 5, 5,
			],
		},
		{
			key: `nhl2017`,
			title: `NHL 2017-2020`,
			description: `Weighted lottery for the top 3 picks, like the NHL from 2017-2020`,
			numToPick: 3,
			chances: [185, 135, 115, 95, 85, 75, 65, 60, 50, 35, 30, 25, 20, 15, 10],
		},
		{
			key: `mlb2022`,
			title: `MLB 2022-present`,
			description: `Weighted lottery for the top 6 picks, like the MLB since 2022`,
			numToPick: 6,
			chances: [
				1650, 1650, 1650, 1325, 1e3, 750, 550, 390, 270, 180, 140, 110, 90, 76,
				62, 48, 36, 23,
			],
		},
	],
	Y = e => {
		let t = [];
		for (let n = 0; n < e; n++) t.push(`Team ${n + 1}`);
		return t;
	},
	X = e => {
		let t = Y(e.length);
		for (let n = 0; n < e.length; n++) if (e[n].name !== t[n]) return !1;
		return !0;
	},
	Z = new Ae(),
	Q = 0,
	$ = (e, t) => {
		let [n, r] = H(() => {
			try {
				let t = localStorage.getItem(e);
				if (t !== null) return JSON.parse(t);
			} catch (t) {
				console.warn(`useLocalStorageState read error`, e, t);
			}
			return typeof t == `function` ? t() : t;
		});
		return (
			U(() => {
				try {
					localStorage.setItem(e, JSON.stringify(n));
				} catch (t) {
					console.warn(`useLocalStorageState write error`, e, t);
				}
			}, [e, n]),
			[n, r]
		);
	},
	Fe = e => {
		let t = { restricted1: [], restricted5: [] };
		for (let [n, r] of e.entries())
			r.restricted === 5
				? t.restricted5.push(n)
				: r.restricted === 1 && t.restricted1.push(n);
		return t;
	};
ce(
	G(() => {
		let [e, t] = $(`presetKey`, `nba2027`),
			n = J.find(t => t.key === e),
			[r, i] = $(`numToPick`, n?.numToPick ?? 0),
			[a, o] = H(),
			[s, c] = $(`teams`, () => {
				let e = n?.chances ?? [],
					t = Y(e.length);
				return e.map((e, n) => ({ chances: e, name: t[n] }));
			}),
			[l, u] = H(!0),
			[d, f] = H(),
			[p, m] = H(!1),
			h = n ? !!n.enableNba2027Restrictions : e === `customNba2027`,
			g = h ? s.length : r;
		(U(() => {
			(u(!0), (Q += 1));
			let e = h ? Fe(s) : void 0;
			Z.postMessage({
				chances: s.map(e => e.chances),
				nba2027Restrictions: e,
				numToPick: g,
				requestCount: Q,
			});
		}, [g, h, s]),
			U(() => {
				let e = e => {
					e.data.requestCount === Q &&
						(m(e.data.tooSlow), f(e.data.probs), u(!1));
				};
				return (
					Z.addEventListener(`message`, e),
					() => {
						Z.removeEventListener(`message`, e);
					}
				);
			}, []));
		let _ = e => () => {
				o(void 0);
				let n = { name: ``, chances: 0 },
					r;
				if (
					(e === `bottom`
						? ((n.chances = s.at(-1)?.chances ?? 1), (r = [...s, n]))
						: ((n.chances = s[0]?.chances ?? 1), (r = [n, ...s])),
					X(s))
				) {
					let e = Y(r.length);
					for (let t = 0; t < r.length; t++) {
						let n = r[t];
						n.name = e[t];
					}
				} else n.name = `Team ${s.length + 1}`;
				(c(r), t(h ? `customNba2027` : `custom`));
			},
			v = () => {
				(o(void 0), c([]), t(h ? `customNba2027` : `custom`));
			},
			y = e =>
				G(S, {
					children: [
						G(K, {
							variant: `primary`,
							outline: !0,
							onClick: _(e),
							children: `Add Team`,
						}),
						G(K, {
							variant: `danger`,
							outline: !0,
							onClick: v,
							disabled: s.length === 0,
							children: `Clear Teams`,
						}),
					],
				});
		return G(S, {
			children: [
				G(`div`, {
					className: `columns-2`,
					style: { maxWidth: 500 },
					children: [
						G(`div`, {
							children: [
								G(`label`, {
									htmlFor: `presetKey`,
									children: `Preset Lottery Type`,
								}),
								G(`select`, {
									className: `form-control mt-1 h-[42px]`,
									id: `presetKey`,
									onChange: e => {
										let n = e.target.value,
											r = J.find(e => e.key === n);
										if (r) {
											(o(void 0), t(r.key), i(r.numToPick));
											let e = r.chances,
												n,
												a = X(s),
												l = e.length;
											if (a) n = Y(l);
											else
												for (n = s.slice(0, l).map(e => e.name); n.length < l; )
													n.push(`Team ${n.length + 1}`);
											c(
												((e, t) =>
													e.map((e, n) => ({ chances: e, name: t[n] })))(e, n),
											);
										} else t(n);
									},
									value: n?.key ?? e,
									children: [
										J.map(e =>
											G(`option`, { value: e.key, children: e.title }, e.key),
										),
										G(`option`, {
											value: `customNba2027`,
											children: `Custom (3-2-1)`,
										}),
										G(`option`, { value: `custom`, children: `Custom` }),
									],
								}),
							],
						}),
						h
							? G(`div`, { children: `\xA0` })
							: G(`div`, {
									children: [
										G(`label`, {
											htmlFor: `numToPick`,
											children: [
												G(`span`, {
													className: `sm:hidden`,
													children: `# Lottery Selections`,
												}),
												G(`span`, {
													className: `hidden sm:inline`,
													children: `Number of Lottery Selections`,
												}),
											],
										}),
										G(`input`, {
											className: `form-control mt-1 h-[42px]`,
											id: `numToPick`,
											type: `number`,
											value: g,
											min: 0,
											onChange: e => {
												(o(void 0), t(`custom`));
												let n = e.target.valueAsNumber;
												i(n < 0 ? 0 : Math.round(n));
											},
										}),
									],
								}),
					],
				}),
				G(`div`, {
					className: `text-gray-500 mt-1`,
					children: n?.description
						? n.description
						: e === `customNba2027`
							? `Weighted lottery for all picks, similar to the NBA since 2027`
							: `Custom lottery`,
				}),
				p
					? G(S, {
							children: G(`div`, {
								className: `text-red-600 mt-1`,
								children: `Computing exact odds for so many teams and picks is too slow, so estimates are shown.`,
							}),
						})
					: null,
				G(`div`, {
					className: `mt-3 sm:flex gap-2`,
					children: [
						G(`div`, { className: `flex gap-2`, children: y(`top`) }),
						G(`div`, {
							className: `mt-2 sm:mt-0`,
							children: [
								G(K, {
									variant: `success`,
									onClick: () => {
										let e = h ? Fe(s) : void 0,
											t = De(
												s.map(e => e.chances),
												g,
												e,
											);
										o(t);
									},
									disabled: s.length === 0,
									children: `Sim Lottery`,
								}),
								a
									? G(K, {
											variant: `danger`,
											className: `ml-2`,
											onClick: () => {
												o(void 0);
											},
											outline: !0,
											disabled: s.length === 0,
											children: `Clear Sim`,
										})
									: null,
							],
						}),
					],
				}),
				d
					? G(S, {
							children: [
								s.length > 0
									? G(`div`, {
											className: `mt-2 overflow-x-auto`,
											children: G(Pe, {
												enableNba2027Restrictions: h,
												loadingProbs: l,
												lotteryResults: a,
												probs: d,
												setLotteryResults: o,
												setTeams: c,
												setPresetKey: t,
												teams: s,
											}),
										})
									: G(`div`, {
											className: `my-3`,
											children: `You should add some teams...`,
										}),
								s.length > 0
									? G(`div`, {
											className: `my-3 flex gap-2`,
											children: y(`bottom`),
										})
									: null,
							],
						})
					: G(`div`, { className: `my-3`, children: `Loading...` }),
				G(`div`, {
					className: `alert`,
					children: [
						`If you like simulating hypothetical draft lotteries, maybe you'd like simulating a whole league? `,
						G(`a`, { href: `https://zengm.com/`, children: `ZenGM` }),
						` has you covered! Play`,
						` `,
						G(`a`, {
							href: `https://play.basketball-gm.com/`,
							children: `basketball`,
						}),
						`,`,
						` `,
						G(`a`, {
							href: `https://play.football-gm.com/`,
							children: `football`,
						}),
						`,`,
						` `,
						G(`a`, {
							href: `https://baseball.zengm.com/`,
							children: `baseball`,
						}),
						`, or`,
						` `,
						G(`a`, { href: `https://hockey.zengm.com/`, children: `hockey` }),
						`. You can customize the draft lottery and tons of other things, and play as many seasons as you want. All for free!`,
					],
				}),
				G(`p`, {
					children: G(`a`, {
						href: `https://github.com/zengm-games/universal-draft-lottery-simulator`,
						children: `Source code on GitHub`,
					}),
				}),
			],
		});
	}, {}),
	document.getElementById(`app`),
);
