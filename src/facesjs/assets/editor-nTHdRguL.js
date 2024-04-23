import {
	c as uy,
	g as Zs,
	s as N8,
	o as Rf,
	d as z0,
} from "./generate-BYR8eDmT.js";
function Lf(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var cy = { exports: {} },
	Xl = {},
	dy = { exports: {} },
	de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ei = Symbol.for("react.element"),
	j8 = Symbol.for("react.portal"),
	_8 = Symbol.for("react.fragment"),
	z8 = Symbol.for("react.strict_mode"),
	B8 = Symbol.for("react.profiler"),
	K8 = Symbol.for("react.provider"),
	H8 = Symbol.for("react.context"),
	W8 = Symbol.for("react.forward_ref"),
	U8 = Symbol.for("react.suspense"),
	Z8 = Symbol.for("react.memo"),
	G8 = Symbol.for("react.lazy"),
	B0 = Symbol.iterator;
function Y8(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (B0 && e[B0]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var fy = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	py = Object.assign,
	hy = {};
function sa(e, t, r) {
	(this.props = e),
		(this.context = t),
		(this.refs = hy),
		(this.updater = r || fy);
}
sa.prototype.isReactComponent = {};
sa.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
sa.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function my() {}
my.prototype = sa.prototype;
function Ff(e, t, r) {
	(this.props = e),
		(this.context = t),
		(this.refs = hy),
		(this.updater = r || fy);
}
var Of = (Ff.prototype = new my());
Of.constructor = Ff;
py(Of, sa.prototype);
Of.isPureReactComponent = !0;
var K0 = Array.isArray,
	gy = Object.prototype.hasOwnProperty,
	Nf = { current: null },
	vy = { key: !0, ref: !0, __self: !0, __source: !0 };
function yy(e, t, r) {
	var n,
		o = {},
		a = null,
		i = null;
	if (t != null)
		for (n in (t.ref !== void 0 && (i = t.ref),
		t.key !== void 0 && (a = "" + t.key),
		t))
			gy.call(t, n) && !vy.hasOwnProperty(n) && (o[n] = t[n]);
	var s = arguments.length - 2;
	if (s === 1) o.children = r;
	else if (1 < s) {
		for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
		o.children = l;
	}
	if (e && e.defaultProps)
		for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n]);
	return {
		$$typeof: Ei,
		type: e,
		key: a,
		ref: i,
		props: o,
		_owner: Nf.current,
	};
}
function X8(e, t) {
	return {
		$$typeof: Ei,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function jf(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Ei;
}
function q8(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (r) {
			return t[r];
		})
	);
}
var H0 = /\/+/g;
function ju(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? q8("" + e.key)
		: t.toString(36);
}
function ks(e, t, r, n, o) {
	var a = typeof e;
	(a === "undefined" || a === "boolean") && (e = null);
	var i = !1;
	if (e === null) i = !0;
	else
		switch (a) {
			case "string":
			case "number":
				i = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case Ei:
					case j8:
						i = !0;
				}
		}
	if (i)
		return (
			(i = e),
			(o = o(i)),
			(e = n === "" ? "." + ju(i, 0) : n),
			K0(o)
				? ((r = ""),
				  e != null && (r = e.replace(H0, "$&/") + "/"),
				  ks(o, t, r, "", function (u) {
						return u;
				  }))
				: o != null &&
				  (jf(o) &&
						(o = X8(
							o,
							r +
								(!o.key || (i && i.key === o.key)
									? ""
									: ("" + o.key).replace(H0, "$&/") + "/") +
								e,
						)),
				  t.push(o)),
			1
		);
	if (((i = 0), (n = n === "" ? "." : n + ":"), K0(e)))
		for (var s = 0; s < e.length; s++) {
			a = e[s];
			var l = n + ju(a, s);
			i += ks(a, t, r, l, o);
		}
	else if (((l = Y8(e)), typeof l == "function"))
		for (e = l.call(e), s = 0; !(a = e.next()).done; )
			(a = a.value), (l = n + ju(a, s++)), (i += ks(a, t, r, l, o));
	else if (a === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead.",
			))
		);
	return i;
}
function Wi(e, t, r) {
	if (e == null) return e;
	var n = [],
		o = 0;
	return (
		ks(e, n, "", "", function (a) {
			return t.call(r, a, o++);
		}),
		n
	);
}
function Q8(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (r) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = r));
				},
				function (r) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = r));
				},
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var vt = { current: null },
	Ts = { transition: null },
	J8 = {
		ReactCurrentDispatcher: vt,
		ReactCurrentBatchConfig: Ts,
		ReactCurrentOwner: Nf,
	};
de.Children = {
	map: Wi,
	forEach: function (e, t, r) {
		Wi(
			e,
			function () {
				t.apply(this, arguments);
			},
			r,
		);
	},
	count: function (e) {
		var t = 0;
		return (
			Wi(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Wi(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!jf(e))
			throw Error(
				"React.Children.only expected to receive a single React element child.",
			);
		return e;
	},
};
de.Component = sa;
de.Fragment = _8;
de.Profiler = B8;
de.PureComponent = Ff;
de.StrictMode = z8;
de.Suspense = U8;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J8;
de.cloneElement = function (e, t, r) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				".",
		);
	var n = py({}, e.props),
		o = e.key,
		a = e.ref,
		i = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((a = t.ref), (i = Nf.current)),
			t.key !== void 0 && (o = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var s = e.type.defaultProps;
		for (l in t)
			gy.call(t, l) &&
				!vy.hasOwnProperty(l) &&
				(n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
	}
	var l = arguments.length - 2;
	if (l === 1) n.children = r;
	else if (1 < l) {
		s = Array(l);
		for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
		n.children = s;
	}
	return { $$typeof: Ei, type: e.type, key: o, ref: a, props: n, _owner: i };
};
de.createContext = function (e) {
	return (
		(e = {
			$$typeof: H8,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: K8, _context: e }),
		(e.Consumer = e)
	);
};
de.createElement = yy;
de.createFactory = function (e) {
	var t = yy.bind(null, e);
	return (t.type = e), t;
};
de.createRef = function () {
	return { current: null };
};
de.forwardRef = function (e) {
	return { $$typeof: W8, render: e };
};
de.isValidElement = jf;
de.lazy = function (e) {
	return { $$typeof: G8, _payload: { _status: -1, _result: e }, _init: Q8 };
};
de.memo = function (e, t) {
	return { $$typeof: Z8, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function (e) {
	var t = Ts.transition;
	Ts.transition = {};
	try {
		e();
	} finally {
		Ts.transition = t;
	}
};
de.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
de.useCallback = function (e, t) {
	return vt.current.useCallback(e, t);
};
de.useContext = function (e) {
	return vt.current.useContext(e);
};
de.useDebugValue = function () {};
de.useDeferredValue = function (e) {
	return vt.current.useDeferredValue(e);
};
de.useEffect = function (e, t) {
	return vt.current.useEffect(e, t);
};
de.useId = function () {
	return vt.current.useId();
};
de.useImperativeHandle = function (e, t, r) {
	return vt.current.useImperativeHandle(e, t, r);
};
de.useInsertionEffect = function (e, t) {
	return vt.current.useInsertionEffect(e, t);
};
de.useLayoutEffect = function (e, t) {
	return vt.current.useLayoutEffect(e, t);
};
de.useMemo = function (e, t) {
	return vt.current.useMemo(e, t);
};
de.useReducer = function (e, t, r) {
	return vt.current.useReducer(e, t, r);
};
de.useRef = function (e) {
	return vt.current.useRef(e);
};
de.useState = function (e) {
	return vt.current.useState(e);
};
de.useSyncExternalStore = function (e, t, r) {
	return vt.current.useSyncExternalStore(e, t, r);
};
de.useTransition = function () {
	return vt.current.useTransition();
};
de.version = "18.2.0";
dy.exports = de;
var h = dy.exports;
const k = Lf(h);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eS = h,
	tS = Symbol.for("react.element"),
	rS = Symbol.for("react.fragment"),
	nS = Object.prototype.hasOwnProperty,
	oS = eS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	aS = { key: !0, ref: !0, __self: !0, __source: !0 };
function by(e, t, r) {
	var n,
		o = {},
		a = null,
		i = null;
	r !== void 0 && (a = "" + r),
		t.key !== void 0 && (a = "" + t.key),
		t.ref !== void 0 && (i = t.ref);
	for (n in t) nS.call(t, n) && !aS.hasOwnProperty(n) && (o[n] = t[n]);
	if (e && e.defaultProps)
		for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
	return {
		$$typeof: tS,
		type: e,
		key: a,
		ref: i,
		props: o,
		_owner: oS.current,
	};
}
Xl.Fragment = rS;
Xl.jsx = by;
Xl.jsxs = by;
cy.exports = Xl;
var S = cy.exports,
	Xc = {},
	xy = { exports: {} },
	Rt = {},
	wy = { exports: {} },
	Sy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(j, z) {
		var I = j.length;
		j.push(z);
		e: for (; 0 < I; ) {
			var $ = (I - 1) >>> 1,
				O = j[$];
			if (0 < o(O, z)) (j[$] = z), (j[I] = O), (I = $);
			else break e;
		}
	}
	function r(j) {
		return j.length === 0 ? null : j[0];
	}
	function n(j) {
		if (j.length === 0) return null;
		var z = j[0],
			I = j.pop();
		if (I !== z) {
			j[0] = I;
			e: for (var $ = 0, O = j.length, B = O >>> 1; $ < B; ) {
				var K = 2 * ($ + 1) - 1,
					W = j[K],
					G = K + 1,
					X = j[G];
				if (0 > o(W, I))
					G < O && 0 > o(X, W)
						? ((j[$] = X), (j[G] = I), ($ = G))
						: ((j[$] = W), (j[K] = I), ($ = K));
				else if (G < O && 0 > o(X, I)) (j[$] = X), (j[G] = I), ($ = G);
				else break e;
			}
		}
		return z;
	}
	function o(j, z) {
		var I = j.sortIndex - z.sortIndex;
		return I !== 0 ? I : j.id - z.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function () {
			return a.now();
		};
	} else {
		var i = Date,
			s = i.now();
		e.unstable_now = function () {
			return i.now() - s;
		};
	}
	var l = [],
		u = [],
		c = 1,
		d = null,
		f = 3,
		p = !1,
		g = !1,
		b = !1,
		x = typeof setTimeout == "function" ? setTimeout : null,
		m = typeof clearTimeout == "function" ? clearTimeout : null,
		v = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function y(j) {
		for (var z = r(u); z !== null; ) {
			if (z.callback === null) n(u);
			else if (z.startTime <= j)
				n(u), (z.sortIndex = z.expirationTime), t(l, z);
			else break;
			z = r(u);
		}
	}
	function P(j) {
		if (((b = !1), y(j), !g))
			if (r(l) !== null) (g = !0), N(C);
			else {
				var z = r(u);
				z !== null && R(P, z.startTime - j);
			}
	}
	function C(j, z) {
		(g = !1), b && ((b = !1), m(w), (w = -1)), (p = !0);
		var I = f;
		try {
			for (
				y(z), d = r(l);
				d !== null && (!(d.expirationTime > z) || (j && !F()));

			) {
				var $ = d.callback;
				if (typeof $ == "function") {
					(d.callback = null), (f = d.priorityLevel);
					var O = $(d.expirationTime <= z);
					(z = e.unstable_now()),
						typeof O == "function" ? (d.callback = O) : d === r(l) && n(l),
						y(z);
				} else n(l);
				d = r(l);
			}
			if (d !== null) var B = !0;
			else {
				var K = r(u);
				K !== null && R(P, K.startTime - z), (B = !1);
			}
			return B;
		} finally {
			(d = null), (f = I), (p = !1);
		}
	}
	var E = !1,
		D = null,
		w = -1,
		V = 5,
		M = -1;
	function F() {
		return !(e.unstable_now() - M < V);
	}
	function L() {
		if (D !== null) {
			var j = e.unstable_now();
			M = j;
			var z = !0;
			try {
				z = D(!0, j);
			} finally {
				z ? T() : ((E = !1), (D = null));
			}
		} else E = !1;
	}
	var T;
	if (typeof v == "function")
		T = function () {
			v(L);
		};
	else if (typeof MessageChannel < "u") {
		var A = new MessageChannel(),
			_ = A.port2;
		(A.port1.onmessage = L),
			(T = function () {
				_.postMessage(null);
			});
	} else
		T = function () {
			x(L, 0);
		};
	function N(j) {
		(D = j), E || ((E = !0), T());
	}
	function R(j, z) {
		w = x(function () {
			j(e.unstable_now());
		}, z);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (j) {
			j.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			g || p || ((g = !0), N(C));
		}),
		(e.unstable_forceFrameRate = function (j) {
			0 > j || 125 < j
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
				  )
				: (V = 0 < j ? Math.floor(1e3 / j) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return f;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return r(l);
		}),
		(e.unstable_next = function (j) {
			switch (f) {
				case 1:
				case 2:
				case 3:
					var z = 3;
					break;
				default:
					z = f;
			}
			var I = f;
			f = z;
			try {
				return j();
			} finally {
				f = I;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (j, z) {
			switch (j) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					j = 3;
			}
			var I = f;
			f = j;
			try {
				return z();
			} finally {
				f = I;
			}
		}),
		(e.unstable_scheduleCallback = function (j, z, I) {
			var $ = e.unstable_now();
			switch (
				(typeof I == "object" && I !== null
					? ((I = I.delay), (I = typeof I == "number" && 0 < I ? $ + I : $))
					: (I = $),
				j)
			) {
				case 1:
					var O = -1;
					break;
				case 2:
					O = 250;
					break;
				case 5:
					O = 1073741823;
					break;
				case 4:
					O = 1e4;
					break;
				default:
					O = 5e3;
			}
			return (
				(O = I + O),
				(j = {
					id: c++,
					callback: z,
					priorityLevel: j,
					startTime: I,
					expirationTime: O,
					sortIndex: -1,
				}),
				I > $
					? ((j.sortIndex = I),
					  t(u, j),
					  r(l) === null &&
							j === r(u) &&
							(b ? (m(w), (w = -1)) : (b = !0), R(P, I - $)))
					: ((j.sortIndex = O), t(l, j), g || p || ((g = !0), N(C))),
				j
			);
		}),
		(e.unstable_shouldYield = F),
		(e.unstable_wrapCallback = function (j) {
			var z = f;
			return function () {
				var I = f;
				f = z;
				try {
					return j.apply(this, arguments);
				} finally {
					f = I;
				}
			};
		});
})(Sy);
wy.exports = Sy;
var iS = wy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Py = h,
	It = iS;
function Z(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
		r < arguments.length;
		r++
	)
		t += "&args[]=" + encodeURIComponent(arguments[r]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var $y = new Set(),
	ti = {};
function no(e, t) {
	Uo(e, t), Uo(e + "Capture", t);
}
function Uo(e, t) {
	for (ti[e] = t, e = 0; e < t.length; e++) $y.add(t[e]);
}
var zr = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	qc = Object.prototype.hasOwnProperty,
	sS =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	W0 = {},
	U0 = {};
function lS(e) {
	return qc.call(U0, e)
		? !0
		: qc.call(W0, e)
		? !1
		: sS.test(e)
		? (U0[e] = !0)
		: ((W0[e] = !0), !1);
}
function uS(e, t, r, n) {
	if (r !== null && r.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return n
				? !1
				: r !== null
				? !r.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function cS(e, t, r, n) {
	if (t === null || typeof t > "u" || uS(e, t, r, n)) return !0;
	if (n) return !1;
	if (r !== null)
		switch (r.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function yt(e, t, r, n, o, a, i) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = n),
		(this.attributeNamespace = o),
		(this.mustUseProperty = r),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = a),
		(this.removeEmptyString = i);
}
var tt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		tt[e] = new yt(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	tt[t] = new yt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	tt[e] = new yt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	tt[e] = new yt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		tt[e] = new yt(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	tt[e] = new yt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	tt[e] = new yt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	tt[e] = new yt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	tt[e] = new yt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _f = /[\-:]([a-z])/g;
function zf(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(_f, zf);
		tt[t] = new yt(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(_f, zf);
		tt[t] = new yt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(_f, zf);
	tt[t] = new yt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	tt[e] = new yt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
tt.xlinkHref = new yt(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
	tt[e] = new yt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bf(e, t, r, n) {
	var o = tt.hasOwnProperty(t) ? tt[t] : null;
	(o !== null
		? o.type !== 0
		: n ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(cS(t, r, o, n) && (r = null),
		n || o === null
			? lS(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
			: o.mustUseProperty
			? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
			: ((t = o.attributeName),
			  (n = o.attributeNamespace),
			  r === null
					? e.removeAttribute(t)
					: ((o = o.type),
					  (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
					  n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Yr = Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Ui = Symbol.for("react.element"),
	yo = Symbol.for("react.portal"),
	bo = Symbol.for("react.fragment"),
	Kf = Symbol.for("react.strict_mode"),
	Qc = Symbol.for("react.profiler"),
	Cy = Symbol.for("react.provider"),
	Ey = Symbol.for("react.context"),
	Hf = Symbol.for("react.forward_ref"),
	Jc = Symbol.for("react.suspense"),
	ed = Symbol.for("react.suspense_list"),
	Wf = Symbol.for("react.memo"),
	en = Symbol.for("react.lazy"),
	ky = Symbol.for("react.offscreen"),
	Z0 = Symbol.iterator;
function ga(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Z0 && e[Z0]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var Le = Object.assign,
	_u;
function Va(e) {
	if (_u === void 0)
		try {
			throw Error();
		} catch (r) {
			var t = r.stack.trim().match(/\n( *(at )?)/);
			_u = (t && t[1]) || "";
		}
	return (
		`
` +
		_u +
		e
	);
}
var zu = !1;
function Bu(e, t) {
	if (!e || zu) return "";
	zu = !0;
	var r = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var n = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					n = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				n = u;
			}
			e();
		}
	} catch (u) {
		if (u && n && typeof u.stack == "string") {
			for (
				var o = u.stack.split(`
`),
					a = n.stack.split(`
`),
					i = o.length - 1,
					s = a.length - 1;
				1 <= i && 0 <= s && o[i] !== a[s];

			)
				s--;
			for (; 1 <= i && 0 <= s; i--, s--)
				if (o[i] !== a[s]) {
					if (i !== 1 || s !== 1)
						do
							if ((i--, s--, 0 > s || o[i] !== a[s])) {
								var l =
									`
` + o[i].replace(" at new ", " at ");
								return (
									e.displayName &&
										l.includes("<anonymous>") &&
										(l = l.replace("<anonymous>", e.displayName)),
									l
								);
							}
						while (1 <= i && 0 <= s);
					break;
				}
		}
	} finally {
		(zu = !1), (Error.prepareStackTrace = r);
	}
	return (e = e ? e.displayName || e.name : "") ? Va(e) : "";
}
function dS(e) {
	switch (e.tag) {
		case 5:
			return Va(e.type);
		case 16:
			return Va("Lazy");
		case 13:
			return Va("Suspense");
		case 19:
			return Va("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Bu(e.type, !1)), e;
		case 11:
			return (e = Bu(e.type.render, !1)), e;
		case 1:
			return (e = Bu(e.type, !0)), e;
		default:
			return "";
	}
}
function td(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case bo:
			return "Fragment";
		case yo:
			return "Portal";
		case Qc:
			return "Profiler";
		case Kf:
			return "StrictMode";
		case Jc:
			return "Suspense";
		case ed:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Ey:
				return (e.displayName || "Context") + ".Consumer";
			case Cy:
				return (e._context.displayName || "Context") + ".Provider";
			case Hf:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case Wf:
				return (
					(t = e.displayName || null), t !== null ? t : td(e.type) || "Memo"
				);
			case en:
				(t = e._payload), (e = e._init);
				try {
					return td(e(t));
				} catch {}
		}
	return null;
}
function fS(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return td(t);
		case 8:
			return t === Kf ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function wn(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function Ty(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function pS(e) {
	var t = Ty(e) ? "checked" : "value",
		r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		n = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof r < "u" &&
		typeof r.get == "function" &&
		typeof r.set == "function"
	) {
		var o = r.get,
			a = r.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this);
				},
				set: function (i) {
					(n = "" + i), a.call(this, i);
				},
			}),
			Object.defineProperty(e, t, { enumerable: r.enumerable }),
			{
				getValue: function () {
					return n;
				},
				setValue: function (i) {
					n = "" + i;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Zi(e) {
	e._valueTracker || (e._valueTracker = pS(e));
}
function My(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var r = t.getValue(),
		n = "";
	return (
		e && (n = Ty(e) ? (e.checked ? "true" : "false") : e.value),
		(e = n),
		e !== r ? (t.setValue(e), !0) : !1
	);
}
function Gs(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function rd(e, t) {
	var r = t.checked;
	return Le({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: r ?? e._wrapperState.initialChecked,
	});
}
function G0(e, t) {
	var r = t.defaultValue == null ? "" : t.defaultValue,
		n = t.checked != null ? t.checked : t.defaultChecked;
	(r = wn(t.value != null ? t.value : r)),
		(e._wrapperState = {
			initialChecked: n,
			initialValue: r,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function Ay(e, t) {
	(t = t.checked), t != null && Bf(e, "checked", t, !1);
}
function nd(e, t) {
	Ay(e, t);
	var r = wn(t.value),
		n = t.type;
	if (r != null)
		n === "number"
			? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
			: e.value !== "" + r && (e.value = "" + r);
	else if (n === "submit" || n === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? od(e, t.type, r)
		: t.hasOwnProperty("defaultValue") && od(e, t.type, wn(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Y0(e, t, r) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var n = t.type;
		if (
			!(
				(n !== "submit" && n !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			r || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(r = e.name),
		r !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		r !== "" && (e.name = r);
}
function od(e, t, r) {
	(t !== "number" || Gs(e.ownerDocument) !== e) &&
		(r == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Ra = Array.isArray;
function Oo(e, t, r, n) {
	if (((e = e.options), t)) {
		t = {};
		for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
		for (r = 0; r < e.length; r++)
			(o = t.hasOwnProperty("$" + e[r].value)),
				e[r].selected !== o && (e[r].selected = o),
				o && n && (e[r].defaultSelected = !0);
	} else {
		for (r = "" + wn(r), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === r) {
				(e[o].selected = !0), n && (e[o].defaultSelected = !0);
				return;
			}
			t !== null || e[o].disabled || (t = e[o]);
		}
		t !== null && (t.selected = !0);
	}
}
function ad(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(Z(91));
	return Le({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function X0(e, t) {
	var r = t.value;
	if (r == null) {
		if (((r = t.children), (t = t.defaultValue), r != null)) {
			if (t != null) throw Error(Z(92));
			if (Ra(r)) {
				if (1 < r.length) throw Error(Z(93));
				r = r[0];
			}
			t = r;
		}
		t == null && (t = ""), (r = t);
	}
	e._wrapperState = { initialValue: wn(r) };
}
function Dy(e, t) {
	var r = wn(t.value),
		n = wn(t.defaultValue);
	r != null &&
		((r = "" + r),
		r !== e.value && (e.value = r),
		t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
		n != null && (e.defaultValue = "" + n);
}
function q0(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Iy(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function id(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? Iy(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var Gi,
	Vy = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, r, n, o) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, r, n, o);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				Gi = Gi || document.createElement("div"),
					Gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = Gi.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function ri(e, t) {
	if (t) {
		var r = e.firstChild;
		if (r && r === e.lastChild && r.nodeType === 3) {
			r.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var za = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	hS = ["Webkit", "ms", "Moz", "O"];
Object.keys(za).forEach(function (e) {
	hS.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (za[t] = za[e]);
	});
});
function Ry(e, t, r) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: r || typeof t != "number" || t === 0 || (za.hasOwnProperty(e) && za[e])
		? ("" + t).trim()
		: t + "px";
}
function Ly(e, t) {
	e = e.style;
	for (var r in t)
		if (t.hasOwnProperty(r)) {
			var n = r.indexOf("--") === 0,
				o = Ry(r, t[r], n);
			r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
		}
}
var mS = Le(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	},
);
function sd(e, t) {
	if (t) {
		if (mS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(Z(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(Z(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(Z(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(Z(62));
	}
}
function ld(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var ud = null;
function Uf(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var cd = null,
	No = null,
	jo = null;
function Q0(e) {
	if ((e = Mi(e))) {
		if (typeof cd != "function") throw Error(Z(280));
		var t = e.stateNode;
		t && ((t = tu(t)), cd(e.stateNode, e.type, t));
	}
}
function Fy(e) {
	No ? (jo ? jo.push(e) : (jo = [e])) : (No = e);
}
function Oy() {
	if (No) {
		var e = No,
			t = jo;
		if (((jo = No = null), Q0(e), t)) for (e = 0; e < t.length; e++) Q0(t[e]);
	}
}
function Ny(e, t) {
	return e(t);
}
function jy() {}
var Ku = !1;
function _y(e, t, r) {
	if (Ku) return e(t, r);
	Ku = !0;
	try {
		return Ny(e, t, r);
	} finally {
		(Ku = !1), (No !== null || jo !== null) && (jy(), Oy());
	}
}
function ni(e, t) {
	var r = e.stateNode;
	if (r === null) return null;
	var n = tu(r);
	if (n === null) return null;
	r = n[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(n = !n.disabled) ||
				((e = e.type),
				(n = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !n);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (r && typeof r != "function") throw Error(Z(231, t, typeof r));
	return r;
}
var dd = !1;
if (zr)
	try {
		var va = {};
		Object.defineProperty(va, "passive", {
			get: function () {
				dd = !0;
			},
		}),
			window.addEventListener("test", va, va),
			window.removeEventListener("test", va, va);
	} catch {
		dd = !1;
	}
function gS(e, t, r, n, o, a, i, s, l) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(r, u);
	} catch (c) {
		this.onError(c);
	}
}
var Ba = !1,
	Ys = null,
	Xs = !1,
	fd = null,
	vS = {
		onError: function (e) {
			(Ba = !0), (Ys = e);
		},
	};
function yS(e, t, r, n, o, a, i, s, l) {
	(Ba = !1), (Ys = null), gS.apply(vS, arguments);
}
function bS(e, t, r, n, o, a, i, s, l) {
	if ((yS.apply(this, arguments), Ba)) {
		if (Ba) {
			var u = Ys;
			(Ba = !1), (Ys = null);
		} else throw Error(Z(198));
		Xs || ((Xs = !0), (fd = u));
	}
}
function oo(e) {
	var t = e,
		r = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? r : null;
}
function zy(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function J0(e) {
	if (oo(e) !== e) throw Error(Z(188));
}
function xS(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = oo(e)), t === null)) throw Error(Z(188));
		return t !== e ? null : e;
	}
	for (var r = e, n = t; ; ) {
		var o = r.return;
		if (o === null) break;
		var a = o.alternate;
		if (a === null) {
			if (((n = o.return), n !== null)) {
				r = n;
				continue;
			}
			break;
		}
		if (o.child === a.child) {
			for (a = o.child; a; ) {
				if (a === r) return J0(o), e;
				if (a === n) return J0(o), t;
				a = a.sibling;
			}
			throw Error(Z(188));
		}
		if (r.return !== n.return) (r = o), (n = a);
		else {
			for (var i = !1, s = o.child; s; ) {
				if (s === r) {
					(i = !0), (r = o), (n = a);
					break;
				}
				if (s === n) {
					(i = !0), (n = o), (r = a);
					break;
				}
				s = s.sibling;
			}
			if (!i) {
				for (s = a.child; s; ) {
					if (s === r) {
						(i = !0), (r = a), (n = o);
						break;
					}
					if (s === n) {
						(i = !0), (n = a), (r = o);
						break;
					}
					s = s.sibling;
				}
				if (!i) throw Error(Z(189));
			}
		}
		if (r.alternate !== n) throw Error(Z(190));
	}
	if (r.tag !== 3) throw Error(Z(188));
	return r.stateNode.current === r ? e : t;
}
function By(e) {
	return (e = xS(e)), e !== null ? Ky(e) : null;
}
function Ky(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Ky(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Hy = It.unstable_scheduleCallback,
	eh = It.unstable_cancelCallback,
	wS = It.unstable_shouldYield,
	SS = It.unstable_requestPaint,
	_e = It.unstable_now,
	PS = It.unstable_getCurrentPriorityLevel,
	Zf = It.unstable_ImmediatePriority,
	Wy = It.unstable_UserBlockingPriority,
	qs = It.unstable_NormalPriority,
	$S = It.unstable_LowPriority,
	Uy = It.unstable_IdlePriority,
	ql = null,
	Sr = null;
function CS(e) {
	if (Sr && typeof Sr.onCommitFiberRoot == "function")
		try {
			Sr.onCommitFiberRoot(ql, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var fr = Math.clz32 ? Math.clz32 : TS,
	ES = Math.log,
	kS = Math.LN2;
function TS(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((ES(e) / kS) | 0)) | 0;
}
var Yi = 64,
	Xi = 4194304;
function La(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Qs(e, t) {
	var r = e.pendingLanes;
	if (r === 0) return 0;
	var n = 0,
		o = e.suspendedLanes,
		a = e.pingedLanes,
		i = r & 268435455;
	if (i !== 0) {
		var s = i & ~o;
		s !== 0 ? (n = La(s)) : ((a &= i), a !== 0 && (n = La(a)));
	} else (i = r & ~o), i !== 0 ? (n = La(i)) : a !== 0 && (n = La(a));
	if (n === 0) return 0;
	if (
		t !== 0 &&
		t !== n &&
		!(t & o) &&
		((o = n & -n), (a = t & -t), o >= a || (o === 16 && (a & 4194240) !== 0))
	)
		return t;
	if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= n; 0 < t; )
			(r = 31 - fr(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
	return n;
}
function MS(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function AS(e, t) {
	for (
		var r = e.suspendedLanes,
			n = e.pingedLanes,
			o = e.expirationTimes,
			a = e.pendingLanes;
		0 < a;

	) {
		var i = 31 - fr(a),
			s = 1 << i,
			l = o[i];
		l === -1
			? (!(s & r) || s & n) && (o[i] = MS(s, t))
			: l <= t && (e.expiredLanes |= s),
			(a &= ~s);
	}
}
function pd(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Zy() {
	var e = Yi;
	return (Yi <<= 1), !(Yi & 4194240) && (Yi = 64), e;
}
function Hu(e) {
	for (var t = [], r = 0; 31 > r; r++) t.push(e);
	return t;
}
function ki(e, t, r) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - fr(t)),
		(e[t] = r);
}
function DS(e, t) {
	var r = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var n = e.eventTimes;
	for (e = e.expirationTimes; 0 < r; ) {
		var o = 31 - fr(r),
			a = 1 << o;
		(t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~a);
	}
}
function Gf(e, t) {
	var r = (e.entangledLanes |= t);
	for (e = e.entanglements; r; ) {
		var n = 31 - fr(r),
			o = 1 << n;
		(o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
	}
}
var ye = 0;
function Gy(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Yy,
	Yf,
	Xy,
	qy,
	Qy,
	hd = !1,
	qi = [],
	un = null,
	cn = null,
	dn = null,
	oi = new Map(),
	ai = new Map(),
	nn = [],
	IS =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" ",
		);
function th(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			un = null;
			break;
		case "dragenter":
		case "dragleave":
			cn = null;
			break;
		case "mouseover":
		case "mouseout":
			dn = null;
			break;
		case "pointerover":
		case "pointerout":
			oi.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			ai.delete(t.pointerId);
	}
}
function ya(e, t, r, n, o, a) {
	return e === null || e.nativeEvent !== a
		? ((e = {
				blockedOn: t,
				domEventName: r,
				eventSystemFlags: n,
				nativeEvent: a,
				targetContainers: [o],
		  }),
		  t !== null && ((t = Mi(t)), t !== null && Yf(t)),
		  e)
		: ((e.eventSystemFlags |= n),
		  (t = e.targetContainers),
		  o !== null && t.indexOf(o) === -1 && t.push(o),
		  e);
}
function VS(e, t, r, n, o) {
	switch (t) {
		case "focusin":
			return (un = ya(un, e, t, r, n, o)), !0;
		case "dragenter":
			return (cn = ya(cn, e, t, r, n, o)), !0;
		case "mouseover":
			return (dn = ya(dn, e, t, r, n, o)), !0;
		case "pointerover":
			var a = o.pointerId;
			return oi.set(a, ya(oi.get(a) || null, e, t, r, n, o)), !0;
		case "gotpointercapture":
			return (
				(a = o.pointerId), ai.set(a, ya(ai.get(a) || null, e, t, r, n, o)), !0
			);
	}
	return !1;
}
function Jy(e) {
	var t = zn(e.target);
	if (t !== null) {
		var r = oo(t);
		if (r !== null) {
			if (((t = r.tag), t === 13)) {
				if (((t = zy(r)), t !== null)) {
					(e.blockedOn = t),
						Qy(e.priority, function () {
							Xy(r);
						});
					return;
				}
			} else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Ms(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var r = md(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (r === null) {
			r = e.nativeEvent;
			var n = new r.constructor(r.type, r);
			(ud = n), r.target.dispatchEvent(n), (ud = null);
		} else return (t = Mi(r)), t !== null && Yf(t), (e.blockedOn = r), !1;
		t.shift();
	}
	return !0;
}
function rh(e, t, r) {
	Ms(e) && r.delete(t);
}
function RS() {
	(hd = !1),
		un !== null && Ms(un) && (un = null),
		cn !== null && Ms(cn) && (cn = null),
		dn !== null && Ms(dn) && (dn = null),
		oi.forEach(rh),
		ai.forEach(rh);
}
function ba(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		hd ||
			((hd = !0),
			It.unstable_scheduleCallback(It.unstable_NormalPriority, RS)));
}
function ii(e) {
	function t(o) {
		return ba(o, e);
	}
	if (0 < qi.length) {
		ba(qi[0], e);
		for (var r = 1; r < qi.length; r++) {
			var n = qi[r];
			n.blockedOn === e && (n.blockedOn = null);
		}
	}
	for (
		un !== null && ba(un, e),
			cn !== null && ba(cn, e),
			dn !== null && ba(dn, e),
			oi.forEach(t),
			ai.forEach(t),
			r = 0;
		r < nn.length;
		r++
	)
		(n = nn[r]), n.blockedOn === e && (n.blockedOn = null);
	for (; 0 < nn.length && ((r = nn[0]), r.blockedOn === null); )
		Jy(r), r.blockedOn === null && nn.shift();
}
var _o = Yr.ReactCurrentBatchConfig,
	Js = !0;
function LS(e, t, r, n) {
	var o = ye,
		a = _o.transition;
	_o.transition = null;
	try {
		(ye = 1), Xf(e, t, r, n);
	} finally {
		(ye = o), (_o.transition = a);
	}
}
function FS(e, t, r, n) {
	var o = ye,
		a = _o.transition;
	_o.transition = null;
	try {
		(ye = 4), Xf(e, t, r, n);
	} finally {
		(ye = o), (_o.transition = a);
	}
}
function Xf(e, t, r, n) {
	if (Js) {
		var o = md(e, t, r, n);
		if (o === null) ec(e, t, n, el, r), th(e, n);
		else if (VS(o, e, t, r, n)) n.stopPropagation();
		else if ((th(e, n), t & 4 && -1 < IS.indexOf(e))) {
			for (; o !== null; ) {
				var a = Mi(o);
				if (
					(a !== null && Yy(a),
					(a = md(e, t, r, n)),
					a === null && ec(e, t, n, el, r),
					a === o)
				)
					break;
				o = a;
			}
			o !== null && n.stopPropagation();
		} else ec(e, t, n, null, r);
	}
}
var el = null;
function md(e, t, r, n) {
	if (((el = null), (e = Uf(n)), (e = zn(e)), e !== null))
		if (((t = oo(e)), t === null)) e = null;
		else if (((r = t.tag), r === 13)) {
			if (((e = zy(t)), e !== null)) return e;
			e = null;
		} else if (r === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (el = e), null;
}
function e1(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (PS()) {
				case Zf:
					return 1;
				case Wy:
					return 4;
				case qs:
				case $S:
					return 16;
				case Uy:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var an = null,
	qf = null,
	As = null;
function t1() {
	if (As) return As;
	var e,
		t = qf,
		r = t.length,
		n,
		o = "value" in an ? an.value : an.textContent,
		a = o.length;
	for (e = 0; e < r && t[e] === o[e]; e++);
	var i = r - e;
	for (n = 1; n <= i && t[r - n] === o[a - n]; n++);
	return (As = o.slice(e, 1 < n ? 1 - n : void 0));
}
function Ds(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Qi() {
	return !0;
}
function nh() {
	return !1;
}
function Lt(e) {
	function t(r, n, o, a, i) {
		(this._reactName = r),
			(this._targetInst = o),
			(this.type = n),
			(this.nativeEvent = a),
			(this.target = i),
			(this.currentTarget = null);
		for (var s in e)
			e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(a) : a[s]));
		return (
			(this.isDefaultPrevented = (
				a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
			)
				? Qi
				: nh),
			(this.isPropagationStopped = nh),
			this
		);
	}
	return (
		Le(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var r = this.nativeEvent;
				r &&
					(r.preventDefault
						? r.preventDefault()
						: typeof r.returnValue != "unknown" && (r.returnValue = !1),
					(this.isDefaultPrevented = Qi));
			},
			stopPropagation: function () {
				var r = this.nativeEvent;
				r &&
					(r.stopPropagation
						? r.stopPropagation()
						: typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
					(this.isPropagationStopped = Qi));
			},
			persist: function () {},
			isPersistent: Qi,
		}),
		t
	);
}
var la = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Qf = Lt(la),
	Ti = Le({}, la, { view: 0, detail: 0 }),
	OS = Lt(Ti),
	Wu,
	Uu,
	xa,
	Ql = Le({}, Ti, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Jf,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== xa &&
						(xa && e.type === "mousemove"
							? ((Wu = e.screenX - xa.screenX), (Uu = e.screenY - xa.screenY))
							: (Uu = Wu = 0),
						(xa = e)),
				  Wu);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Uu;
		},
	}),
	oh = Lt(Ql),
	NS = Le({}, Ql, { dataTransfer: 0 }),
	jS = Lt(NS),
	_S = Le({}, Ti, { relatedTarget: 0 }),
	Zu = Lt(_S),
	zS = Le({}, la, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	BS = Lt(zS),
	KS = Le({}, la, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	HS = Lt(KS),
	WS = Le({}, la, { data: 0 }),
	ah = Lt(WS),
	US = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	ZS = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	GS = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function YS(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = GS[e]) ? !!t[e] : !1;
}
function Jf() {
	return YS;
}
var XS = Le({}, Ti, {
		key: function (e) {
			if (e.key) {
				var t = US[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Ds(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? ZS[e.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Jf,
		charCode: function (e) {
			return e.type === "keypress" ? Ds(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Ds(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	qS = Lt(XS),
	QS = Le({}, Ql, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	ih = Lt(QS),
	JS = Le({}, Ti, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Jf,
	}),
	eP = Lt(JS),
	tP = Le({}, la, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	rP = Lt(tP),
	nP = Le({}, Ql, {
		deltaX: function (e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	oP = Lt(nP),
	aP = [9, 13, 27, 32],
	ep = zr && "CompositionEvent" in window,
	Ka = null;
zr && "documentMode" in document && (Ka = document.documentMode);
var iP = zr && "TextEvent" in window && !Ka,
	r1 = zr && (!ep || (Ka && 8 < Ka && 11 >= Ka)),
	sh = " ",
	lh = !1;
function n1(e, t) {
	switch (e) {
		case "keyup":
			return aP.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function o1(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xo = !1;
function sP(e, t) {
	switch (e) {
		case "compositionend":
			return o1(t);
		case "keypress":
			return t.which !== 32 ? null : ((lh = !0), sh);
		case "textInput":
			return (e = t.data), e === sh && lh ? null : e;
		default:
			return null;
	}
}
function lP(e, t) {
	if (xo)
		return e === "compositionend" || (!ep && n1(e, t))
			? ((e = t1()), (As = qf = an = null), (xo = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return r1 && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var uP = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function uh(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!uP[e.type] : t === "textarea";
}
function a1(e, t, r, n) {
	Fy(n),
		(t = tl(t, "onChange")),
		0 < t.length &&
			((r = new Qf("onChange", "change", null, r, n)),
			e.push({ event: r, listeners: t }));
}
var Ha = null,
	si = null;
function cP(e) {
	g1(e, 0);
}
function Jl(e) {
	var t = Po(e);
	if (My(t)) return e;
}
function dP(e, t) {
	if (e === "change") return t;
}
var i1 = !1;
if (zr) {
	var Gu;
	if (zr) {
		var Yu = "oninput" in document;
		if (!Yu) {
			var ch = document.createElement("div");
			ch.setAttribute("oninput", "return;"),
				(Yu = typeof ch.oninput == "function");
		}
		Gu = Yu;
	} else Gu = !1;
	i1 = Gu && (!document.documentMode || 9 < document.documentMode);
}
function dh() {
	Ha && (Ha.detachEvent("onpropertychange", s1), (si = Ha = null));
}
function s1(e) {
	if (e.propertyName === "value" && Jl(si)) {
		var t = [];
		a1(t, si, e, Uf(e)), _y(cP, t);
	}
}
function fP(e, t, r) {
	e === "focusin"
		? (dh(), (Ha = t), (si = r), Ha.attachEvent("onpropertychange", s1))
		: e === "focusout" && dh();
}
function pP(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return Jl(si);
}
function hP(e, t) {
	if (e === "click") return Jl(t);
}
function mP(e, t) {
	if (e === "input" || e === "change") return Jl(t);
}
function gP(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var hr = typeof Object.is == "function" ? Object.is : gP;
function li(e, t) {
	if (hr(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var r = Object.keys(e),
		n = Object.keys(t);
	if (r.length !== n.length) return !1;
	for (n = 0; n < r.length; n++) {
		var o = r[n];
		if (!qc.call(t, o) || !hr(e[o], t[o])) return !1;
	}
	return !0;
}
function fh(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function ph(e, t) {
	var r = fh(e);
	e = 0;
	for (var n; r; ) {
		if (r.nodeType === 3) {
			if (((n = e + r.textContent.length), e <= t && n >= t))
				return { node: r, offset: t - e };
			e = n;
		}
		e: {
			for (; r; ) {
				if (r.nextSibling) {
					r = r.nextSibling;
					break e;
				}
				r = r.parentNode;
			}
			r = void 0;
		}
		r = fh(r);
	}
}
function l1(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? l1(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function u1() {
	for (var e = window, t = Gs(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var r = typeof t.contentWindow.location.href == "string";
		} catch {
			r = !1;
		}
		if (r) e = t.contentWindow;
		else break;
		t = Gs(e.document);
	}
	return t;
}
function tp(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function vP(e) {
	var t = u1(),
		r = e.focusedElem,
		n = e.selectionRange;
	if (
		t !== r &&
		r &&
		r.ownerDocument &&
		l1(r.ownerDocument.documentElement, r)
	) {
		if (n !== null && tp(r)) {
			if (
				((t = n.start),
				(e = n.end),
				e === void 0 && (e = t),
				"selectionStart" in r)
			)
				(r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
			else if (
				((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var o = r.textContent.length,
					a = Math.min(n.start, o);
				(n = n.end === void 0 ? a : Math.min(n.end, o)),
					!e.extend && a > n && ((o = n), (n = a), (a = o)),
					(o = ph(r, a));
				var i = ph(r, n);
				o &&
					i &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== o.node ||
						e.anchorOffset !== o.offset ||
						e.focusNode !== i.node ||
						e.focusOffset !== i.offset) &&
					((t = t.createRange()),
					t.setStart(o.node, o.offset),
					e.removeAllRanges(),
					a > n
						? (e.addRange(t), e.extend(i.node, i.offset))
						: (t.setEnd(i.node, i.offset), e.addRange(t)));
			}
		}
		for (t = [], e = r; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
			(e = t[r]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var yP = zr && "documentMode" in document && 11 >= document.documentMode,
	wo = null,
	gd = null,
	Wa = null,
	vd = !1;
function hh(e, t, r) {
	var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
	vd ||
		wo == null ||
		wo !== Gs(n) ||
		((n = wo),
		"selectionStart" in n && tp(n)
			? (n = { start: n.selectionStart, end: n.selectionEnd })
			: ((n = (
					(n.ownerDocument && n.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (n = {
					anchorNode: n.anchorNode,
					anchorOffset: n.anchorOffset,
					focusNode: n.focusNode,
					focusOffset: n.focusOffset,
			  })),
		(Wa && li(Wa, n)) ||
			((Wa = n),
			(n = tl(gd, "onSelect")),
			0 < n.length &&
				((t = new Qf("onSelect", "select", null, t, r)),
				e.push({ event: t, listeners: n }),
				(t.target = wo))));
}
function Ji(e, t) {
	var r = {};
	return (
		(r[e.toLowerCase()] = t.toLowerCase()),
		(r["Webkit" + e] = "webkit" + t),
		(r["Moz" + e] = "moz" + t),
		r
	);
}
var So = {
		animationend: Ji("Animation", "AnimationEnd"),
		animationiteration: Ji("Animation", "AnimationIteration"),
		animationstart: Ji("Animation", "AnimationStart"),
		transitionend: Ji("Transition", "TransitionEnd"),
	},
	Xu = {},
	c1 = {};
zr &&
	((c1 = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete So.animationend.animation,
		delete So.animationiteration.animation,
		delete So.animationstart.animation),
	"TransitionEvent" in window || delete So.transitionend.transition);
function eu(e) {
	if (Xu[e]) return Xu[e];
	if (!So[e]) return e;
	var t = So[e],
		r;
	for (r in t) if (t.hasOwnProperty(r) && r in c1) return (Xu[e] = t[r]);
	return e;
}
var d1 = eu("animationend"),
	f1 = eu("animationiteration"),
	p1 = eu("animationstart"),
	h1 = eu("transitionend"),
	m1 = new Map(),
	mh =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" ",
		);
function Tn(e, t) {
	m1.set(e, t), no(t, [e]);
}
for (var qu = 0; qu < mh.length; qu++) {
	var Qu = mh[qu],
		bP = Qu.toLowerCase(),
		xP = Qu[0].toUpperCase() + Qu.slice(1);
	Tn(bP, "on" + xP);
}
Tn(d1, "onAnimationEnd");
Tn(f1, "onAnimationIteration");
Tn(p1, "onAnimationStart");
Tn("dblclick", "onDoubleClick");
Tn("focusin", "onFocus");
Tn("focusout", "onBlur");
Tn(h1, "onTransitionEnd");
Uo("onMouseEnter", ["mouseout", "mouseover"]);
Uo("onMouseLeave", ["mouseout", "mouseover"]);
Uo("onPointerEnter", ["pointerout", "pointerover"]);
Uo("onPointerLeave", ["pointerout", "pointerover"]);
no(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" ",
	),
);
no(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" ",
	),
);
no("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
no(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" "),
);
no(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
no(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Fa =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" ",
		),
	wP = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));
function gh(e, t, r) {
	var n = e.type || "unknown-event";
	(e.currentTarget = r), bS(n, t, void 0, e), (e.currentTarget = null);
}
function g1(e, t) {
	t = (t & 4) !== 0;
	for (var r = 0; r < e.length; r++) {
		var n = e[r],
			o = n.event;
		n = n.listeners;
		e: {
			var a = void 0;
			if (t)
				for (var i = n.length - 1; 0 <= i; i--) {
					var s = n[i],
						l = s.instance,
						u = s.currentTarget;
					if (((s = s.listener), l !== a && o.isPropagationStopped())) break e;
					gh(o, s, u), (a = l);
				}
			else
				for (i = 0; i < n.length; i++) {
					if (
						((s = n[i]),
						(l = s.instance),
						(u = s.currentTarget),
						(s = s.listener),
						l !== a && o.isPropagationStopped())
					)
						break e;
					gh(o, s, u), (a = l);
				}
		}
	}
	if (Xs) throw ((e = fd), (Xs = !1), (fd = null), e);
}
function Ce(e, t) {
	var r = t[Sd];
	r === void 0 && (r = t[Sd] = new Set());
	var n = e + "__bubble";
	r.has(n) || (v1(t, e, 2, !1), r.add(n));
}
function Ju(e, t, r) {
	var n = 0;
	t && (n |= 4), v1(r, e, n, t);
}
var es = "_reactListening" + Math.random().toString(36).slice(2);
function ui(e) {
	if (!e[es]) {
		(e[es] = !0),
			$y.forEach(function (r) {
				r !== "selectionchange" && (wP.has(r) || Ju(r, !1, e), Ju(r, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[es] || ((t[es] = !0), Ju("selectionchange", !1, t));
	}
}
function v1(e, t, r, n) {
	switch (e1(t)) {
		case 1:
			var o = LS;
			break;
		case 4:
			o = FS;
			break;
		default:
			o = Xf;
	}
	(r = o.bind(null, t, r, e)),
		(o = void 0),
		!dd ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(o = !0),
		n
			? o !== void 0
				? e.addEventListener(t, r, { capture: !0, passive: o })
				: e.addEventListener(t, r, !0)
			: o !== void 0
			? e.addEventListener(t, r, { passive: o })
			: e.addEventListener(t, r, !1);
}
function ec(e, t, r, n, o) {
	var a = n;
	if (!(t & 1) && !(t & 2) && n !== null)
		e: for (;;) {
			if (n === null) return;
			var i = n.tag;
			if (i === 3 || i === 4) {
				var s = n.stateNode.containerInfo;
				if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
				if (i === 4)
					for (i = n.return; i !== null; ) {
						var l = i.tag;
						if (
							(l === 3 || l === 4) &&
							((l = i.stateNode.containerInfo),
							l === o || (l.nodeType === 8 && l.parentNode === o))
						)
							return;
						i = i.return;
					}
				for (; s !== null; ) {
					if (((i = zn(s)), i === null)) return;
					if (((l = i.tag), l === 5 || l === 6)) {
						n = a = i;
						continue e;
					}
					s = s.parentNode;
				}
			}
			n = n.return;
		}
	_y(function () {
		var u = a,
			c = Uf(r),
			d = [];
		e: {
			var f = m1.get(e);
			if (f !== void 0) {
				var p = Qf,
					g = e;
				switch (e) {
					case "keypress":
						if (Ds(r) === 0) break e;
					case "keydown":
					case "keyup":
						p = qS;
						break;
					case "focusin":
						(g = "focus"), (p = Zu);
						break;
					case "focusout":
						(g = "blur"), (p = Zu);
						break;
					case "beforeblur":
					case "afterblur":
						p = Zu;
						break;
					case "click":
						if (r.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						p = oh;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						p = jS;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						p = eP;
						break;
					case d1:
					case f1:
					case p1:
						p = BS;
						break;
					case h1:
						p = rP;
						break;
					case "scroll":
						p = OS;
						break;
					case "wheel":
						p = oP;
						break;
					case "copy":
					case "cut":
					case "paste":
						p = HS;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						p = ih;
				}
				var b = (t & 4) !== 0,
					x = !b && e === "scroll",
					m = b ? (f !== null ? f + "Capture" : null) : f;
				b = [];
				for (var v = u, y; v !== null; ) {
					y = v;
					var P = y.stateNode;
					if (
						(y.tag === 5 &&
							P !== null &&
							((y = P),
							m !== null && ((P = ni(v, m)), P != null && b.push(ci(v, P, y)))),
						x)
					)
						break;
					v = v.return;
				}
				0 < b.length &&
					((f = new p(f, g, null, r, c)), d.push({ event: f, listeners: b }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((f = e === "mouseover" || e === "pointerover"),
					(p = e === "mouseout" || e === "pointerout"),
					f &&
						r !== ud &&
						(g = r.relatedTarget || r.fromElement) &&
						(zn(g) || g[Br]))
				)
					break e;
				if (
					(p || f) &&
					((f =
						c.window === c
							? c
							: (f = c.ownerDocument)
							? f.defaultView || f.parentWindow
							: window),
					p
						? ((g = r.relatedTarget || r.toElement),
						  (p = u),
						  (g = g ? zn(g) : null),
						  g !== null &&
								((x = oo(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) &&
								(g = null))
						: ((p = null), (g = u)),
					p !== g)
				) {
					if (
						((b = oh),
						(P = "onMouseLeave"),
						(m = "onMouseEnter"),
						(v = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((b = ih),
							(P = "onPointerLeave"),
							(m = "onPointerEnter"),
							(v = "pointer")),
						(x = p == null ? f : Po(p)),
						(y = g == null ? f : Po(g)),
						(f = new b(P, v + "leave", p, r, c)),
						(f.target = x),
						(f.relatedTarget = y),
						(P = null),
						zn(c) === u &&
							((b = new b(m, v + "enter", g, r, c)),
							(b.target = y),
							(b.relatedTarget = x),
							(P = b)),
						(x = P),
						p && g)
					)
						t: {
							for (b = p, m = g, v = 0, y = b; y; y = lo(y)) v++;
							for (y = 0, P = m; P; P = lo(P)) y++;
							for (; 0 < v - y; ) (b = lo(b)), v--;
							for (; 0 < y - v; ) (m = lo(m)), y--;
							for (; v--; ) {
								if (b === m || (m !== null && b === m.alternate)) break t;
								(b = lo(b)), (m = lo(m));
							}
							b = null;
						}
					else b = null;
					p !== null && vh(d, f, p, b, !1),
						g !== null && x !== null && vh(d, x, g, b, !0);
				}
			}
			e: {
				if (
					((f = u ? Po(u) : window),
					(p = f.nodeName && f.nodeName.toLowerCase()),
					p === "select" || (p === "input" && f.type === "file"))
				)
					var C = dP;
				else if (uh(f))
					if (i1) C = mP;
					else {
						C = pP;
						var E = fP;
					}
				else
					(p = f.nodeName) &&
						p.toLowerCase() === "input" &&
						(f.type === "checkbox" || f.type === "radio") &&
						(C = hP);
				if (C && (C = C(e, u))) {
					a1(d, C, r, c);
					break e;
				}
				E && E(e, f, u),
					e === "focusout" &&
						(E = f._wrapperState) &&
						E.controlled &&
						f.type === "number" &&
						od(f, "number", f.value);
			}
			switch (((E = u ? Po(u) : window), e)) {
				case "focusin":
					(uh(E) || E.contentEditable === "true") &&
						((wo = E), (gd = u), (Wa = null));
					break;
				case "focusout":
					Wa = gd = wo = null;
					break;
				case "mousedown":
					vd = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(vd = !1), hh(d, r, c);
					break;
				case "selectionchange":
					if (yP) break;
				case "keydown":
				case "keyup":
					hh(d, r, c);
			}
			var D;
			if (ep)
				e: {
					switch (e) {
						case "compositionstart":
							var w = "onCompositionStart";
							break e;
						case "compositionend":
							w = "onCompositionEnd";
							break e;
						case "compositionupdate":
							w = "onCompositionUpdate";
							break e;
					}
					w = void 0;
				}
			else
				xo
					? n1(e, r) && (w = "onCompositionEnd")
					: e === "keydown" && r.keyCode === 229 && (w = "onCompositionStart");
			w &&
				(r1 &&
					r.locale !== "ko" &&
					(xo || w !== "onCompositionStart"
						? w === "onCompositionEnd" && xo && (D = t1())
						: ((an = c),
						  (qf = "value" in an ? an.value : an.textContent),
						  (xo = !0))),
				(E = tl(u, w)),
				0 < E.length &&
					((w = new ah(w, e, null, r, c)),
					d.push({ event: w, listeners: E }),
					D ? (w.data = D) : ((D = o1(r)), D !== null && (w.data = D)))),
				(D = iP ? sP(e, r) : lP(e, r)) &&
					((u = tl(u, "onBeforeInput")),
					0 < u.length &&
						((c = new ah("onBeforeInput", "beforeinput", null, r, c)),
						d.push({ event: c, listeners: u }),
						(c.data = D)));
		}
		g1(d, t);
	});
}
function ci(e, t, r) {
	return { instance: e, listener: t, currentTarget: r };
}
function tl(e, t) {
	for (var r = t + "Capture", n = []; e !== null; ) {
		var o = e,
			a = o.stateNode;
		o.tag === 5 &&
			a !== null &&
			((o = a),
			(a = ni(e, r)),
			a != null && n.unshift(ci(e, a, o)),
			(a = ni(e, t)),
			a != null && n.push(ci(e, a, o))),
			(e = e.return);
	}
	return n;
}
function lo(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function vh(e, t, r, n, o) {
	for (var a = t._reactName, i = []; r !== null && r !== n; ) {
		var s = r,
			l = s.alternate,
			u = s.stateNode;
		if (l !== null && l === n) break;
		s.tag === 5 &&
			u !== null &&
			((s = u),
			o
				? ((l = ni(r, a)), l != null && i.unshift(ci(r, l, s)))
				: o || ((l = ni(r, a)), l != null && i.push(ci(r, l, s)))),
			(r = r.return);
	}
	i.length !== 0 && e.push({ event: t, listeners: i });
}
var SP = /\r\n?/g,
	PP = /\u0000|\uFFFD/g;
function yh(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			SP,
			`
`,
		)
		.replace(PP, "");
}
function ts(e, t, r) {
	if (((t = yh(t)), yh(e) !== t && r)) throw Error(Z(425));
}
function rl() {}
var yd = null,
	bd = null;
function xd(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var wd = typeof setTimeout == "function" ? setTimeout : void 0,
	$P = typeof clearTimeout == "function" ? clearTimeout : void 0,
	bh = typeof Promise == "function" ? Promise : void 0,
	CP =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof bh < "u"
			? function (e) {
					return bh.resolve(null).then(e).catch(EP);
			  }
			: wd;
function EP(e) {
	setTimeout(function () {
		throw e;
	});
}
function tc(e, t) {
	var r = t,
		n = 0;
	do {
		var o = r.nextSibling;
		if ((e.removeChild(r), o && o.nodeType === 8))
			if (((r = o.data), r === "/$")) {
				if (n === 0) {
					e.removeChild(o), ii(t);
					return;
				}
				n--;
			} else (r !== "$" && r !== "$?" && r !== "$!") || n++;
		r = o;
	} while (r);
	ii(t);
}
function fn(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function xh(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var r = e.data;
			if (r === "$" || r === "$!" || r === "$?") {
				if (t === 0) return e;
				t--;
			} else r === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var ua = Math.random().toString(36).slice(2),
	yr = "__reactFiber$" + ua,
	di = "__reactProps$" + ua,
	Br = "__reactContainer$" + ua,
	Sd = "__reactEvents$" + ua,
	kP = "__reactListeners$" + ua,
	TP = "__reactHandles$" + ua;
function zn(e) {
	var t = e[yr];
	if (t) return t;
	for (var r = e.parentNode; r; ) {
		if ((t = r[Br] || r[yr])) {
			if (
				((r = t.alternate),
				t.child !== null || (r !== null && r.child !== null))
			)
				for (e = xh(e); e !== null; ) {
					if ((r = e[yr])) return r;
					e = xh(e);
				}
			return t;
		}
		(e = r), (r = e.parentNode);
	}
	return null;
}
function Mi(e) {
	return (
		(e = e[yr] || e[Br]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Po(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(Z(33));
}
function tu(e) {
	return e[di] || null;
}
var Pd = [],
	$o = -1;
function Mn(e) {
	return { current: e };
}
function Ee(e) {
	0 > $o || ((e.current = Pd[$o]), (Pd[$o] = null), $o--);
}
function Pe(e, t) {
	$o++, (Pd[$o] = e.current), (e.current = t);
}
var Sn = {},
	dt = Mn(Sn),
	$t = Mn(!1),
	Xn = Sn;
function Zo(e, t) {
	var r = e.type.contextTypes;
	if (!r) return Sn;
	var n = e.stateNode;
	if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
		return n.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		a;
	for (a in r) o[a] = t[a];
	return (
		n &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		o
	);
}
function Ct(e) {
	return (e = e.childContextTypes), e != null;
}
function nl() {
	Ee($t), Ee(dt);
}
function wh(e, t, r) {
	if (dt.current !== Sn) throw Error(Z(168));
	Pe(dt, t), Pe($t, r);
}
function y1(e, t, r) {
	var n = e.stateNode;
	if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
		return r;
	n = n.getChildContext();
	for (var o in n) if (!(o in t)) throw Error(Z(108, fS(e) || "Unknown", o));
	return Le({}, r, n);
}
function ol(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Sn),
		(Xn = dt.current),
		Pe(dt, e),
		Pe($t, $t.current),
		!0
	);
}
function Sh(e, t, r) {
	var n = e.stateNode;
	if (!n) throw Error(Z(169));
	r
		? ((e = y1(e, t, Xn)),
		  (n.__reactInternalMemoizedMergedChildContext = e),
		  Ee($t),
		  Ee(dt),
		  Pe(dt, e))
		: Ee($t),
		Pe($t, r);
}
var Dr = null,
	ru = !1,
	rc = !1;
function b1(e) {
	Dr === null ? (Dr = [e]) : Dr.push(e);
}
function MP(e) {
	(ru = !0), b1(e);
}
function An() {
	if (!rc && Dr !== null) {
		rc = !0;
		var e = 0,
			t = ye;
		try {
			var r = Dr;
			for (ye = 1; e < r.length; e++) {
				var n = r[e];
				do n = n(!0);
				while (n !== null);
			}
			(Dr = null), (ru = !1);
		} catch (o) {
			throw (Dr !== null && (Dr = Dr.slice(e + 1)), Hy(Zf, An), o);
		} finally {
			(ye = t), (rc = !1);
		}
	}
	return null;
}
var Co = [],
	Eo = 0,
	al = null,
	il = 0,
	Wt = [],
	Ut = 0,
	qn = null,
	Vr = 1,
	Rr = "";
function Fn(e, t) {
	(Co[Eo++] = il), (Co[Eo++] = al), (al = e), (il = t);
}
function x1(e, t, r) {
	(Wt[Ut++] = Vr), (Wt[Ut++] = Rr), (Wt[Ut++] = qn), (qn = e);
	var n = Vr;
	e = Rr;
	var o = 32 - fr(n) - 1;
	(n &= ~(1 << o)), (r += 1);
	var a = 32 - fr(t) + o;
	if (30 < a) {
		var i = o - (o % 5);
		(a = (n & ((1 << i) - 1)).toString(32)),
			(n >>= i),
			(o -= i),
			(Vr = (1 << (32 - fr(t) + o)) | (r << o) | n),
			(Rr = a + e);
	} else (Vr = (1 << a) | (r << o) | n), (Rr = e);
}
function rp(e) {
	e.return !== null && (Fn(e, 1), x1(e, 1, 0));
}
function np(e) {
	for (; e === al; )
		(al = Co[--Eo]), (Co[Eo] = null), (il = Co[--Eo]), (Co[Eo] = null);
	for (; e === qn; )
		(qn = Wt[--Ut]),
			(Wt[Ut] = null),
			(Rr = Wt[--Ut]),
			(Wt[Ut] = null),
			(Vr = Wt[--Ut]),
			(Wt[Ut] = null);
}
var Dt = null,
	At = null,
	Te = !1,
	dr = null;
function w1(e, t) {
	var r = Gt(5, null, null, 0);
	(r.elementType = "DELETED"),
		(r.stateNode = t),
		(r.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Ph(e, t) {
	switch (e.tag) {
		case 5:
			var r = e.type;
			return (
				(t =
					t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Dt = e), (At = fn(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Dt = e), (At = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((r = qn !== null ? { id: Vr, overflow: Rr } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: r,
							retryLane: 1073741824,
					  }),
					  (r = Gt(18, null, null, 0)),
					  (r.stateNode = t),
					  (r.return = e),
					  (e.child = r),
					  (Dt = e),
					  (At = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function $d(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cd(e) {
	if (Te) {
		var t = At;
		if (t) {
			var r = t;
			if (!Ph(e, t)) {
				if ($d(e)) throw Error(Z(418));
				t = fn(r.nextSibling);
				var n = Dt;
				t && Ph(e, t)
					? w1(n, r)
					: ((e.flags = (e.flags & -4097) | 2), (Te = !1), (Dt = e));
			}
		} else {
			if ($d(e)) throw Error(Z(418));
			(e.flags = (e.flags & -4097) | 2), (Te = !1), (Dt = e);
		}
	}
}
function $h(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Dt = e;
}
function rs(e) {
	if (e !== Dt) return !1;
	if (!Te) return $h(e), (Te = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !xd(e.type, e.memoizedProps))),
		t && (t = At))
	) {
		if ($d(e)) throw (S1(), Error(Z(418)));
		for (; t; ) w1(e, t), (t = fn(t.nextSibling));
	}
	if (($h(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(Z(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var r = e.data;
					if (r === "/$") {
						if (t === 0) {
							At = fn(e.nextSibling);
							break e;
						}
						t--;
					} else (r !== "$" && r !== "$!" && r !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			At = null;
		}
	} else At = Dt ? fn(e.stateNode.nextSibling) : null;
	return !0;
}
function S1() {
	for (var e = At; e; ) e = fn(e.nextSibling);
}
function Go() {
	(At = Dt = null), (Te = !1);
}
function op(e) {
	dr === null ? (dr = [e]) : dr.push(e);
}
var AP = Yr.ReactCurrentBatchConfig;
function lr(e, t) {
	if (e && e.defaultProps) {
		(t = Le({}, t)), (e = e.defaultProps);
		for (var r in e) t[r] === void 0 && (t[r] = e[r]);
		return t;
	}
	return t;
}
var sl = Mn(null),
	ll = null,
	ko = null,
	ap = null;
function ip() {
	ap = ko = ll = null;
}
function sp(e) {
	var t = sl.current;
	Ee(sl), (e._currentValue = t);
}
function Ed(e, t, r) {
	for (; e !== null; ) {
		var n = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
				: n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
			e === r)
		)
			break;
		e = e.return;
	}
}
function zo(e, t) {
	(ll = e),
		(ap = ko = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Pt = !0), (e.firstContext = null));
}
function qt(e) {
	var t = e._currentValue;
	if (ap !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), ko === null)) {
			if (ll === null) throw Error(Z(308));
			(ko = e), (ll.dependencies = { lanes: 0, firstContext: e });
		} else ko = ko.next = e;
	return t;
}
var Bn = null;
function lp(e) {
	Bn === null ? (Bn = [e]) : Bn.push(e);
}
function P1(e, t, r, n) {
	var o = t.interleaved;
	return (
		o === null ? ((r.next = r), lp(t)) : ((r.next = o.next), (o.next = r)),
		(t.interleaved = r),
		Kr(e, n)
	);
}
function Kr(e, t) {
	e.lanes |= t;
	var r = e.alternate;
	for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(r = e.alternate),
			r !== null && (r.childLanes |= t),
			(r = e),
			(e = e.return);
	return r.tag === 3 ? r.stateNode : null;
}
var tn = !1;
function up(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function $1(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function Or(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function pn(e, t, r) {
	var n = e.updateQueue;
	if (n === null) return null;
	if (((n = n.shared), pe & 2)) {
		var o = n.pending;
		return (
			o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
			(n.pending = t),
			Kr(e, r)
		);
	}
	return (
		(o = n.interleaved),
		o === null ? ((t.next = t), lp(n)) : ((t.next = o.next), (o.next = t)),
		(n.interleaved = t),
		Kr(e, r)
	);
}
function Is(e, t, r) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
	) {
		var n = t.lanes;
		(n &= e.pendingLanes), (r |= n), (t.lanes = r), Gf(e, r);
	}
}
function Ch(e, t) {
	var r = e.updateQueue,
		n = e.alternate;
	if (n !== null && ((n = n.updateQueue), r === n)) {
		var o = null,
			a = null;
		if (((r = r.firstBaseUpdate), r !== null)) {
			do {
				var i = {
					eventTime: r.eventTime,
					lane: r.lane,
					tag: r.tag,
					payload: r.payload,
					callback: r.callback,
					next: null,
				};
				a === null ? (o = a = i) : (a = a.next = i), (r = r.next);
			} while (r !== null);
			a === null ? (o = a = t) : (a = a.next = t);
		} else o = a = t;
		(r = {
			baseState: n.baseState,
			firstBaseUpdate: o,
			lastBaseUpdate: a,
			shared: n.shared,
			effects: n.effects,
		}),
			(e.updateQueue = r);
		return;
	}
	(e = r.lastBaseUpdate),
		e === null ? (r.firstBaseUpdate = t) : (e.next = t),
		(r.lastBaseUpdate = t);
}
function ul(e, t, r, n) {
	var o = e.updateQueue;
	tn = !1;
	var a = o.firstBaseUpdate,
		i = o.lastBaseUpdate,
		s = o.shared.pending;
	if (s !== null) {
		o.shared.pending = null;
		var l = s,
			u = l.next;
		(l.next = null), i === null ? (a = u) : (i.next = u), (i = l);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(s = c.lastBaseUpdate),
			s !== i &&
				(s === null ? (c.firstBaseUpdate = u) : (s.next = u),
				(c.lastBaseUpdate = l)));
	}
	if (a !== null) {
		var d = o.baseState;
		(i = 0), (c = u = l = null), (s = a);
		do {
			var f = s.lane,
				p = s.eventTime;
			if ((n & f) === f) {
				c !== null &&
					(c = c.next =
						{
							eventTime: p,
							lane: 0,
							tag: s.tag,
							payload: s.payload,
							callback: s.callback,
							next: null,
						});
				e: {
					var g = e,
						b = s;
					switch (((f = t), (p = r), b.tag)) {
						case 1:
							if (((g = b.payload), typeof g == "function")) {
								d = g.call(p, d, f);
								break e;
							}
							d = g;
							break e;
						case 3:
							g.flags = (g.flags & -65537) | 128;
						case 0:
							if (
								((g = b.payload),
								(f = typeof g == "function" ? g.call(p, d, f) : g),
								f == null)
							)
								break e;
							d = Le({}, d, f);
							break e;
						case 2:
							tn = !0;
					}
				}
				s.callback !== null &&
					s.lane !== 0 &&
					((e.flags |= 64),
					(f = o.effects),
					f === null ? (o.effects = [s]) : f.push(s));
			} else
				(p = {
					eventTime: p,
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null,
				}),
					c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
					(i |= f);
			if (((s = s.next), s === null)) {
				if (((s = o.shared.pending), s === null)) break;
				(f = s),
					(s = f.next),
					(f.next = null),
					(o.lastBaseUpdate = f),
					(o.shared.pending = null);
			}
		} while (!0);
		if (
			(c === null && (l = d),
			(o.baseState = l),
			(o.firstBaseUpdate = u),
			(o.lastBaseUpdate = c),
			(t = o.shared.interleaved),
			t !== null)
		) {
			o = t;
			do (i |= o.lane), (o = o.next);
			while (o !== t);
		} else a === null && (o.shared.lanes = 0);
		(Jn |= i), (e.lanes = i), (e.memoizedState = d);
	}
}
function Eh(e, t, r) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var n = e[t],
				o = n.callback;
			if (o !== null) {
				if (((n.callback = null), (n = r), typeof o != "function"))
					throw Error(Z(191, o));
				o.call(n);
			}
		}
}
var C1 = new Py.Component().refs;
function kd(e, t, r, n) {
	(t = e.memoizedState),
		(r = r(n, t)),
		(r = r == null ? t : Le({}, t, r)),
		(e.memoizedState = r),
		e.lanes === 0 && (e.updateQueue.baseState = r);
}
var nu = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? oo(e) === e : !1;
	},
	enqueueSetState: function (e, t, r) {
		e = e._reactInternals;
		var n = mt(),
			o = mn(e),
			a = Or(n, o);
		(a.payload = t),
			r != null && (a.callback = r),
			(t = pn(e, a, o)),
			t !== null && (pr(t, e, o, n), Is(t, e, o));
	},
	enqueueReplaceState: function (e, t, r) {
		e = e._reactInternals;
		var n = mt(),
			o = mn(e),
			a = Or(n, o);
		(a.tag = 1),
			(a.payload = t),
			r != null && (a.callback = r),
			(t = pn(e, a, o)),
			t !== null && (pr(t, e, o, n), Is(t, e, o));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var r = mt(),
			n = mn(e),
			o = Or(r, n);
		(o.tag = 2),
			t != null && (o.callback = t),
			(t = pn(e, o, n)),
			t !== null && (pr(t, e, n, r), Is(t, e, n));
	},
};
function kh(e, t, r, n, o, a, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(n, a, i)
			: t.prototype && t.prototype.isPureReactComponent
			? !li(r, n) || !li(o, a)
			: !0
	);
}
function E1(e, t, r) {
	var n = !1,
		o = Sn,
		a = t.contextType;
	return (
		typeof a == "object" && a !== null
			? (a = qt(a))
			: ((o = Ct(t) ? Xn : dt.current),
			  (n = t.contextTypes),
			  (a = (n = n != null) ? Zo(e, o) : Sn)),
		(t = new t(r, a)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = nu),
		(e.stateNode = t),
		(t._reactInternals = e),
		n &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = o),
			(e.__reactInternalMemoizedMaskedChildContext = a)),
		t
	);
}
function Th(e, t, r, n) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(r, n),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(r, n),
		t.state !== e && nu.enqueueReplaceState(t, t.state, null);
}
function Td(e, t, r, n) {
	var o = e.stateNode;
	(o.props = r), (o.state = e.memoizedState), (o.refs = C1), up(e);
	var a = t.contextType;
	typeof a == "object" && a !== null
		? (o.context = qt(a))
		: ((a = Ct(t) ? Xn : dt.current), (o.context = Zo(e, a))),
		(o.state = e.memoizedState),
		(a = t.getDerivedStateFromProps),
		typeof a == "function" && (kd(e, t, a, r), (o.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof o.getSnapshotBeforeUpdate == "function" ||
			(typeof o.UNSAFE_componentWillMount != "function" &&
				typeof o.componentWillMount != "function") ||
			((t = o.state),
			typeof o.componentWillMount == "function" && o.componentWillMount(),
			typeof o.UNSAFE_componentWillMount == "function" &&
				o.UNSAFE_componentWillMount(),
			t !== o.state && nu.enqueueReplaceState(o, o.state, null),
			ul(e, r, o, n),
			(o.state = e.memoizedState)),
		typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function wa(e, t, r) {
	if (
		((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (r._owner) {
			if (((r = r._owner), r)) {
				if (r.tag !== 1) throw Error(Z(309));
				var n = r.stateNode;
			}
			if (!n) throw Error(Z(147, e));
			var o = n,
				a = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === a
				? t.ref
				: ((t = function (i) {
						var s = o.refs;
						s === C1 && (s = o.refs = {}),
							i === null ? delete s[a] : (s[a] = i);
				  }),
				  (t._stringRef = a),
				  t);
		}
		if (typeof e != "string") throw Error(Z(284));
		if (!r._owner) throw Error(Z(290, e));
	}
	return e;
}
function ns(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			Z(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e,
			),
		))
	);
}
function Mh(e) {
	var t = e._init;
	return t(e._payload);
}
function k1(e) {
	function t(m, v) {
		if (e) {
			var y = m.deletions;
			y === null ? ((m.deletions = [v]), (m.flags |= 16)) : y.push(v);
		}
	}
	function r(m, v) {
		if (!e) return null;
		for (; v !== null; ) t(m, v), (v = v.sibling);
		return null;
	}
	function n(m, v) {
		for (m = new Map(); v !== null; )
			v.key !== null ? m.set(v.key, v) : m.set(v.index, v), (v = v.sibling);
		return m;
	}
	function o(m, v) {
		return (m = gn(m, v)), (m.index = 0), (m.sibling = null), m;
	}
	function a(m, v, y) {
		return (
			(m.index = y),
			e
				? ((y = m.alternate),
				  y !== null
						? ((y = y.index), y < v ? ((m.flags |= 2), v) : y)
						: ((m.flags |= 2), v))
				: ((m.flags |= 1048576), v)
		);
	}
	function i(m) {
		return e && m.alternate === null && (m.flags |= 2), m;
	}
	function s(m, v, y, P) {
		return v === null || v.tag !== 6
			? ((v = uc(y, m.mode, P)), (v.return = m), v)
			: ((v = o(v, y)), (v.return = m), v);
	}
	function l(m, v, y, P) {
		var C = y.type;
		return C === bo
			? c(m, v, y.props.children, P, y.key)
			: v !== null &&
			  (v.elementType === C ||
					(typeof C == "object" &&
						C !== null &&
						C.$$typeof === en &&
						Mh(C) === v.type))
			? ((P = o(v, y.props)), (P.ref = wa(m, v, y)), (P.return = m), P)
			: ((P = Ns(y.type, y.key, y.props, null, m.mode, P)),
			  (P.ref = wa(m, v, y)),
			  (P.return = m),
			  P);
	}
	function u(m, v, y, P) {
		return v === null ||
			v.tag !== 4 ||
			v.stateNode.containerInfo !== y.containerInfo ||
			v.stateNode.implementation !== y.implementation
			? ((v = cc(y, m.mode, P)), (v.return = m), v)
			: ((v = o(v, y.children || [])), (v.return = m), v);
	}
	function c(m, v, y, P, C) {
		return v === null || v.tag !== 7
			? ((v = Gn(y, m.mode, P, C)), (v.return = m), v)
			: ((v = o(v, y)), (v.return = m), v);
	}
	function d(m, v, y) {
		if ((typeof v == "string" && v !== "") || typeof v == "number")
			return (v = uc("" + v, m.mode, y)), (v.return = m), v;
		if (typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case Ui:
					return (
						(y = Ns(v.type, v.key, v.props, null, m.mode, y)),
						(y.ref = wa(m, null, v)),
						(y.return = m),
						y
					);
				case yo:
					return (v = cc(v, m.mode, y)), (v.return = m), v;
				case en:
					var P = v._init;
					return d(m, P(v._payload), y);
			}
			if (Ra(v) || ga(v))
				return (v = Gn(v, m.mode, y, null)), (v.return = m), v;
			ns(m, v);
		}
		return null;
	}
	function f(m, v, y, P) {
		var C = v !== null ? v.key : null;
		if ((typeof y == "string" && y !== "") || typeof y == "number")
			return C !== null ? null : s(m, v, "" + y, P);
		if (typeof y == "object" && y !== null) {
			switch (y.$$typeof) {
				case Ui:
					return y.key === C ? l(m, v, y, P) : null;
				case yo:
					return y.key === C ? u(m, v, y, P) : null;
				case en:
					return (C = y._init), f(m, v, C(y._payload), P);
			}
			if (Ra(y) || ga(y)) return C !== null ? null : c(m, v, y, P, null);
			ns(m, y);
		}
		return null;
	}
	function p(m, v, y, P, C) {
		if ((typeof P == "string" && P !== "") || typeof P == "number")
			return (m = m.get(y) || null), s(v, m, "" + P, C);
		if (typeof P == "object" && P !== null) {
			switch (P.$$typeof) {
				case Ui:
					return (m = m.get(P.key === null ? y : P.key) || null), l(v, m, P, C);
				case yo:
					return (m = m.get(P.key === null ? y : P.key) || null), u(v, m, P, C);
				case en:
					var E = P._init;
					return p(m, v, y, E(P._payload), C);
			}
			if (Ra(P) || ga(P)) return (m = m.get(y) || null), c(v, m, P, C, null);
			ns(v, P);
		}
		return null;
	}
	function g(m, v, y, P) {
		for (
			var C = null, E = null, D = v, w = (v = 0), V = null;
			D !== null && w < y.length;
			w++
		) {
			D.index > w ? ((V = D), (D = null)) : (V = D.sibling);
			var M = f(m, D, y[w], P);
			if (M === null) {
				D === null && (D = V);
				break;
			}
			e && D && M.alternate === null && t(m, D),
				(v = a(M, v, w)),
				E === null ? (C = M) : (E.sibling = M),
				(E = M),
				(D = V);
		}
		if (w === y.length) return r(m, D), Te && Fn(m, w), C;
		if (D === null) {
			for (; w < y.length; w++)
				(D = d(m, y[w], P)),
					D !== null &&
						((v = a(D, v, w)), E === null ? (C = D) : (E.sibling = D), (E = D));
			return Te && Fn(m, w), C;
		}
		for (D = n(m, D); w < y.length; w++)
			(V = p(D, m, w, y[w], P)),
				V !== null &&
					(e && V.alternate !== null && D.delete(V.key === null ? w : V.key),
					(v = a(V, v, w)),
					E === null ? (C = V) : (E.sibling = V),
					(E = V));
		return (
			e &&
				D.forEach(function (F) {
					return t(m, F);
				}),
			Te && Fn(m, w),
			C
		);
	}
	function b(m, v, y, P) {
		var C = ga(y);
		if (typeof C != "function") throw Error(Z(150));
		if (((y = C.call(y)), y == null)) throw Error(Z(151));
		for (
			var E = (C = null), D = v, w = (v = 0), V = null, M = y.next();
			D !== null && !M.done;
			w++, M = y.next()
		) {
			D.index > w ? ((V = D), (D = null)) : (V = D.sibling);
			var F = f(m, D, M.value, P);
			if (F === null) {
				D === null && (D = V);
				break;
			}
			e && D && F.alternate === null && t(m, D),
				(v = a(F, v, w)),
				E === null ? (C = F) : (E.sibling = F),
				(E = F),
				(D = V);
		}
		if (M.done) return r(m, D), Te && Fn(m, w), C;
		if (D === null) {
			for (; !M.done; w++, M = y.next())
				(M = d(m, M.value, P)),
					M !== null &&
						((v = a(M, v, w)), E === null ? (C = M) : (E.sibling = M), (E = M));
			return Te && Fn(m, w), C;
		}
		for (D = n(m, D); !M.done; w++, M = y.next())
			(M = p(D, m, w, M.value, P)),
				M !== null &&
					(e && M.alternate !== null && D.delete(M.key === null ? w : M.key),
					(v = a(M, v, w)),
					E === null ? (C = M) : (E.sibling = M),
					(E = M));
		return (
			e &&
				D.forEach(function (L) {
					return t(m, L);
				}),
			Te && Fn(m, w),
			C
		);
	}
	function x(m, v, y, P) {
		if (
			(typeof y == "object" &&
				y !== null &&
				y.type === bo &&
				y.key === null &&
				(y = y.props.children),
			typeof y == "object" && y !== null)
		) {
			switch (y.$$typeof) {
				case Ui:
					e: {
						for (var C = y.key, E = v; E !== null; ) {
							if (E.key === C) {
								if (((C = y.type), C === bo)) {
									if (E.tag === 7) {
										r(m, E.sibling),
											(v = o(E, y.props.children)),
											(v.return = m),
											(m = v);
										break e;
									}
								} else if (
									E.elementType === C ||
									(typeof C == "object" &&
										C !== null &&
										C.$$typeof === en &&
										Mh(C) === E.type)
								) {
									r(m, E.sibling),
										(v = o(E, y.props)),
										(v.ref = wa(m, E, y)),
										(v.return = m),
										(m = v);
									break e;
								}
								r(m, E);
								break;
							} else t(m, E);
							E = E.sibling;
						}
						y.type === bo
							? ((v = Gn(y.props.children, m.mode, P, y.key)),
							  (v.return = m),
							  (m = v))
							: ((P = Ns(y.type, y.key, y.props, null, m.mode, P)),
							  (P.ref = wa(m, v, y)),
							  (P.return = m),
							  (m = P));
					}
					return i(m);
				case yo:
					e: {
						for (E = y.key; v !== null; ) {
							if (v.key === E)
								if (
									v.tag === 4 &&
									v.stateNode.containerInfo === y.containerInfo &&
									v.stateNode.implementation === y.implementation
								) {
									r(m, v.sibling),
										(v = o(v, y.children || [])),
										(v.return = m),
										(m = v);
									break e;
								} else {
									r(m, v);
									break;
								}
							else t(m, v);
							v = v.sibling;
						}
						(v = cc(y, m.mode, P)), (v.return = m), (m = v);
					}
					return i(m);
				case en:
					return (E = y._init), x(m, v, E(y._payload), P);
			}
			if (Ra(y)) return g(m, v, y, P);
			if (ga(y)) return b(m, v, y, P);
			ns(m, y);
		}
		return (typeof y == "string" && y !== "") || typeof y == "number"
			? ((y = "" + y),
			  v !== null && v.tag === 6
					? (r(m, v.sibling), (v = o(v, y)), (v.return = m), (m = v))
					: (r(m, v), (v = uc(y, m.mode, P)), (v.return = m), (m = v)),
			  i(m))
			: r(m, v);
	}
	return x;
}
var Yo = k1(!0),
	T1 = k1(!1),
	Ai = {},
	Pr = Mn(Ai),
	fi = Mn(Ai),
	pi = Mn(Ai);
function Kn(e) {
	if (e === Ai) throw Error(Z(174));
	return e;
}
function cp(e, t) {
	switch ((Pe(pi, t), Pe(fi, e), Pe(Pr, Ai), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : id(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = id(t, e));
	}
	Ee(Pr), Pe(Pr, t);
}
function Xo() {
	Ee(Pr), Ee(fi), Ee(pi);
}
function M1(e) {
	Kn(pi.current);
	var t = Kn(Pr.current),
		r = id(t, e.type);
	t !== r && (Pe(fi, e), Pe(Pr, r));
}
function dp(e) {
	fi.current === e && (Ee(Pr), Ee(fi));
}
var Ie = Mn(0);
function cl(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var r = t.memoizedState;
			if (
				r !== null &&
				((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var nc = [];
function fp() {
	for (var e = 0; e < nc.length; e++)
		nc[e]._workInProgressVersionPrimary = null;
	nc.length = 0;
}
var Vs = Yr.ReactCurrentDispatcher,
	oc = Yr.ReactCurrentBatchConfig,
	Qn = 0,
	Re = null,
	Ue = null,
	Ge = null,
	dl = !1,
	Ua = !1,
	hi = 0,
	DP = 0;
function ot() {
	throw Error(Z(321));
}
function pp(e, t) {
	if (t === null) return !1;
	for (var r = 0; r < t.length && r < e.length; r++)
		if (!hr(e[r], t[r])) return !1;
	return !0;
}
function hp(e, t, r, n, o, a) {
	if (
		((Qn = a),
		(Re = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Vs.current = e === null || e.memoizedState === null ? LP : FP),
		(e = r(n, o)),
		Ua)
	) {
		a = 0;
		do {
			if (((Ua = !1), (hi = 0), 25 <= a)) throw Error(Z(301));
			(a += 1),
				(Ge = Ue = null),
				(t.updateQueue = null),
				(Vs.current = OP),
				(e = r(n, o));
		} while (Ua);
	}
	if (
		((Vs.current = fl),
		(t = Ue !== null && Ue.next !== null),
		(Qn = 0),
		(Ge = Ue = Re = null),
		(dl = !1),
		t)
	)
		throw Error(Z(300));
	return e;
}
function mp() {
	var e = hi !== 0;
	return (hi = 0), e;
}
function vr() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return Ge === null ? (Re.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge;
}
function Qt() {
	if (Ue === null) {
		var e = Re.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = Ue.next;
	var t = Ge === null ? Re.memoizedState : Ge.next;
	if (t !== null) (Ge = t), (Ue = e);
	else {
		if (e === null) throw Error(Z(310));
		(Ue = e),
			(e = {
				memoizedState: Ue.memoizedState,
				baseState: Ue.baseState,
				baseQueue: Ue.baseQueue,
				queue: Ue.queue,
				next: null,
			}),
			Ge === null ? (Re.memoizedState = Ge = e) : (Ge = Ge.next = e);
	}
	return Ge;
}
function mi(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function ac(e) {
	var t = Qt(),
		r = t.queue;
	if (r === null) throw Error(Z(311));
	r.lastRenderedReducer = e;
	var n = Ue,
		o = n.baseQueue,
		a = r.pending;
	if (a !== null) {
		if (o !== null) {
			var i = o.next;
			(o.next = a.next), (a.next = i);
		}
		(n.baseQueue = o = a), (r.pending = null);
	}
	if (o !== null) {
		(a = o.next), (n = n.baseState);
		var s = (i = null),
			l = null,
			u = a;
		do {
			var c = u.lane;
			if ((Qn & c) === c)
				l !== null &&
					(l = l.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(n = u.hasEagerState ? u.eagerState : e(n, u.action));
			else {
				var d = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				l === null ? ((s = l = d), (i = n)) : (l = l.next = d),
					(Re.lanes |= c),
					(Jn |= c);
			}
			u = u.next;
		} while (u !== null && u !== a);
		l === null ? (i = n) : (l.next = s),
			hr(n, t.memoizedState) || (Pt = !0),
			(t.memoizedState = n),
			(t.baseState = i),
			(t.baseQueue = l),
			(r.lastRenderedState = n);
	}
	if (((e = r.interleaved), e !== null)) {
		o = e;
		do (a = o.lane), (Re.lanes |= a), (Jn |= a), (o = o.next);
		while (o !== e);
	} else o === null && (r.lanes = 0);
	return [t.memoizedState, r.dispatch];
}
function ic(e) {
	var t = Qt(),
		r = t.queue;
	if (r === null) throw Error(Z(311));
	r.lastRenderedReducer = e;
	var n = r.dispatch,
		o = r.pending,
		a = t.memoizedState;
	if (o !== null) {
		r.pending = null;
		var i = (o = o.next);
		do (a = e(a, i.action)), (i = i.next);
		while (i !== o);
		hr(a, t.memoizedState) || (Pt = !0),
			(t.memoizedState = a),
			t.baseQueue === null && (t.baseState = a),
			(r.lastRenderedState = a);
	}
	return [a, n];
}
function A1() {}
function D1(e, t) {
	var r = Re,
		n = Qt(),
		o = t(),
		a = !hr(n.memoizedState, o);
	if (
		(a && ((n.memoizedState = o), (Pt = !0)),
		(n = n.queue),
		gp(R1.bind(null, r, n, e), [e]),
		n.getSnapshot !== t || a || (Ge !== null && Ge.memoizedState.tag & 1))
	) {
		if (
			((r.flags |= 2048),
			gi(9, V1.bind(null, r, n, o, t), void 0, null),
			Ye === null)
		)
			throw Error(Z(349));
		Qn & 30 || I1(r, t, o);
	}
	return o;
}
function I1(e, t, r) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: r }),
		(t = Re.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Re.updateQueue = t),
			  (t.stores = [e]))
			: ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function V1(e, t, r, n) {
	(t.value = r), (t.getSnapshot = n), L1(t) && F1(e);
}
function R1(e, t, r) {
	return r(function () {
		L1(t) && F1(e);
	});
}
function L1(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var r = t();
		return !hr(e, r);
	} catch {
		return !0;
	}
}
function F1(e) {
	var t = Kr(e, 1);
	t !== null && pr(t, e, 1, -1);
}
function Ah(e) {
	var t = vr();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: mi,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = RP.bind(null, Re, e)),
		[t.memoizedState, e]
	);
}
function gi(e, t, r, n) {
	return (
		(e = { tag: e, create: t, destroy: r, deps: n, next: null }),
		(t = Re.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Re.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((r = t.lastEffect),
			  r === null
					? (t.lastEffect = e.next = e)
					: ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
		e
	);
}
function O1() {
	return Qt().memoizedState;
}
function Rs(e, t, r, n) {
	var o = vr();
	(Re.flags |= e),
		(o.memoizedState = gi(1 | t, r, void 0, n === void 0 ? null : n));
}
function ou(e, t, r, n) {
	var o = Qt();
	n = n === void 0 ? null : n;
	var a = void 0;
	if (Ue !== null) {
		var i = Ue.memoizedState;
		if (((a = i.destroy), n !== null && pp(n, i.deps))) {
			o.memoizedState = gi(t, r, a, n);
			return;
		}
	}
	(Re.flags |= e), (o.memoizedState = gi(1 | t, r, a, n));
}
function Dh(e, t) {
	return Rs(8390656, 8, e, t);
}
function gp(e, t) {
	return ou(2048, 8, e, t);
}
function N1(e, t) {
	return ou(4, 2, e, t);
}
function j1(e, t) {
	return ou(4, 4, e, t);
}
function _1(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function z1(e, t, r) {
	return (
		(r = r != null ? r.concat([e]) : null), ou(4, 4, _1.bind(null, t, e), r)
	);
}
function vp() {}
function B1(e, t) {
	var r = Qt();
	t = t === void 0 ? null : t;
	var n = r.memoizedState;
	return n !== null && t !== null && pp(t, n[1])
		? n[0]
		: ((r.memoizedState = [e, t]), e);
}
function K1(e, t) {
	var r = Qt();
	t = t === void 0 ? null : t;
	var n = r.memoizedState;
	return n !== null && t !== null && pp(t, n[1])
		? n[0]
		: ((e = e()), (r.memoizedState = [e, t]), e);
}
function H1(e, t, r) {
	return Qn & 21
		? (hr(r, t) || ((r = Zy()), (Re.lanes |= r), (Jn |= r), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Pt = !0)), (e.memoizedState = r));
}
function IP(e, t) {
	var r = ye;
	(ye = r !== 0 && 4 > r ? r : 4), e(!0);
	var n = oc.transition;
	oc.transition = {};
	try {
		e(!1), t();
	} finally {
		(ye = r), (oc.transition = n);
	}
}
function W1() {
	return Qt().memoizedState;
}
function VP(e, t, r) {
	var n = mn(e);
	if (
		((r = {
			lane: n,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		U1(e))
	)
		Z1(t, r);
	else if (((r = P1(e, t, r, n)), r !== null)) {
		var o = mt();
		pr(r, e, n, o), G1(r, t, n);
	}
}
function RP(e, t, r) {
	var n = mn(e),
		o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
	if (U1(e)) Z1(t, o);
	else {
		var a = e.alternate;
		if (
			e.lanes === 0 &&
			(a === null || a.lanes === 0) &&
			((a = t.lastRenderedReducer), a !== null)
		)
			try {
				var i = t.lastRenderedState,
					s = a(i, r);
				if (((o.hasEagerState = !0), (o.eagerState = s), hr(s, i))) {
					var l = t.interleaved;
					l === null
						? ((o.next = o), lp(t))
						: ((o.next = l.next), (l.next = o)),
						(t.interleaved = o);
					return;
				}
			} catch {
			} finally {
			}
		(r = P1(e, t, o, n)),
			r !== null && ((o = mt()), pr(r, e, n, o), G1(r, t, n));
	}
}
function U1(e) {
	var t = e.alternate;
	return e === Re || (t !== null && t === Re);
}
function Z1(e, t) {
	Ua = dl = !0;
	var r = e.pending;
	r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
		(e.pending = t);
}
function G1(e, t, r) {
	if (r & 4194240) {
		var n = t.lanes;
		(n &= e.pendingLanes), (r |= n), (t.lanes = r), Gf(e, r);
	}
}
var fl = {
		readContext: qt,
		useCallback: ot,
		useContext: ot,
		useEffect: ot,
		useImperativeHandle: ot,
		useInsertionEffect: ot,
		useLayoutEffect: ot,
		useMemo: ot,
		useReducer: ot,
		useRef: ot,
		useState: ot,
		useDebugValue: ot,
		useDeferredValue: ot,
		useTransition: ot,
		useMutableSource: ot,
		useSyncExternalStore: ot,
		useId: ot,
		unstable_isNewReconciler: !1,
	},
	LP = {
		readContext: qt,
		useCallback: function (e, t) {
			return (vr().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: qt,
		useEffect: Dh,
		useImperativeHandle: function (e, t, r) {
			return (
				(r = r != null ? r.concat([e]) : null),
				Rs(4194308, 4, _1.bind(null, t, e), r)
			);
		},
		useLayoutEffect: function (e, t) {
			return Rs(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Rs(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var r = vr();
			return (
				(t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, r) {
			var n = vr();
			return (
				(t = r !== void 0 ? r(t) : t),
				(n.memoizedState = n.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(n.queue = e),
				(e = e.dispatch = VP.bind(null, Re, e)),
				[n.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = vr();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Ah,
		useDebugValue: vp,
		useDeferredValue: function (e) {
			return (vr().memoizedState = e);
		},
		useTransition: function () {
			var e = Ah(!1),
				t = e[0];
			return (e = IP.bind(null, e[1])), (vr().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, r) {
			var n = Re,
				o = vr();
			if (Te) {
				if (r === void 0) throw Error(Z(407));
				r = r();
			} else {
				if (((r = t()), Ye === null)) throw Error(Z(349));
				Qn & 30 || I1(n, t, r);
			}
			o.memoizedState = r;
			var a = { value: r, getSnapshot: t };
			return (
				(o.queue = a),
				Dh(R1.bind(null, n, a, e), [e]),
				(n.flags |= 2048),
				gi(9, V1.bind(null, n, a, r, t), void 0, null),
				r
			);
		},
		useId: function () {
			var e = vr(),
				t = Ye.identifierPrefix;
			if (Te) {
				var r = Rr,
					n = Vr;
				(r = (n & ~(1 << (32 - fr(n) - 1))).toString(32) + r),
					(t = ":" + t + "R" + r),
					(r = hi++),
					0 < r && (t += "H" + r.toString(32)),
					(t += ":");
			} else (r = DP++), (t = ":" + t + "r" + r.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	FP = {
		readContext: qt,
		useCallback: B1,
		useContext: qt,
		useEffect: gp,
		useImperativeHandle: z1,
		useInsertionEffect: N1,
		useLayoutEffect: j1,
		useMemo: K1,
		useReducer: ac,
		useRef: O1,
		useState: function () {
			return ac(mi);
		},
		useDebugValue: vp,
		useDeferredValue: function (e) {
			var t = Qt();
			return H1(t, Ue.memoizedState, e);
		},
		useTransition: function () {
			var e = ac(mi)[0],
				t = Qt().memoizedState;
			return [e, t];
		},
		useMutableSource: A1,
		useSyncExternalStore: D1,
		useId: W1,
		unstable_isNewReconciler: !1,
	},
	OP = {
		readContext: qt,
		useCallback: B1,
		useContext: qt,
		useEffect: gp,
		useImperativeHandle: z1,
		useInsertionEffect: N1,
		useLayoutEffect: j1,
		useMemo: K1,
		useReducer: ic,
		useRef: O1,
		useState: function () {
			return ic(mi);
		},
		useDebugValue: vp,
		useDeferredValue: function (e) {
			var t = Qt();
			return Ue === null ? (t.memoizedState = e) : H1(t, Ue.memoizedState, e);
		},
		useTransition: function () {
			var e = ic(mi)[0],
				t = Qt().memoizedState;
			return [e, t];
		},
		useMutableSource: A1,
		useSyncExternalStore: D1,
		useId: W1,
		unstable_isNewReconciler: !1,
	};
function qo(e, t) {
	try {
		var r = "",
			n = t;
		do (r += dS(n)), (n = n.return);
		while (n);
		var o = r;
	} catch (a) {
		o =
			`
Error generating stack: ` +
			a.message +
			`
` +
			a.stack;
	}
	return { value: e, source: t, stack: o, digest: null };
}
function sc(e, t, r) {
	return { value: e, source: null, stack: null, digest: t ?? null };
}
function Md(e, t) {
	try {
		console.error(t.value);
	} catch (r) {
		setTimeout(function () {
			throw r;
		});
	}
}
var NP = typeof WeakMap == "function" ? WeakMap : Map;
function Y1(e, t, r) {
	(r = Or(-1, r)), (r.tag = 3), (r.payload = { element: null });
	var n = t.value;
	return (
		(r.callback = function () {
			hl || ((hl = !0), (jd = n)), Md(e, t);
		}),
		r
	);
}
function X1(e, t, r) {
	(r = Or(-1, r)), (r.tag = 3);
	var n = e.type.getDerivedStateFromError;
	if (typeof n == "function") {
		var o = t.value;
		(r.payload = function () {
			return n(o);
		}),
			(r.callback = function () {
				Md(e, t);
			});
	}
	var a = e.stateNode;
	return (
		a !== null &&
			typeof a.componentDidCatch == "function" &&
			(r.callback = function () {
				Md(e, t),
					typeof n != "function" &&
						(hn === null ? (hn = new Set([this])) : hn.add(this));
				var i = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: i !== null ? i : "",
				});
			}),
		r
	);
}
function Ih(e, t, r) {
	var n = e.pingCache;
	if (n === null) {
		n = e.pingCache = new NP();
		var o = new Set();
		n.set(t, o);
	} else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
	o.has(r) || (o.add(r), (e = QP.bind(null, e, t, r)), t.then(e, e));
}
function Vh(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Rh(e, t, r, n, o) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = o), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (r.flags |= 131072),
				  (r.flags &= -52805),
				  r.tag === 1 &&
						(r.alternate === null
							? (r.tag = 17)
							: ((t = Or(-1, 1)), (t.tag = 2), pn(r, t, 1))),
				  (r.lanes |= 1)),
		  e);
}
var jP = Yr.ReactCurrentOwner,
	Pt = !1;
function ht(e, t, r, n) {
	t.child = e === null ? T1(t, null, r, n) : Yo(t, e.child, r, n);
}
function Lh(e, t, r, n, o) {
	r = r.render;
	var a = t.ref;
	return (
		zo(t, o),
		(n = hp(e, t, r, n, a, o)),
		(r = mp()),
		e !== null && !Pt
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  Hr(e, t, o))
			: (Te && r && rp(t), (t.flags |= 1), ht(e, t, n, o), t.child)
	);
}
function Fh(e, t, r, n, o) {
	if (e === null) {
		var a = r.type;
		return typeof a == "function" &&
			!Cp(a) &&
			a.defaultProps === void 0 &&
			r.compare === null &&
			r.defaultProps === void 0
			? ((t.tag = 15), (t.type = a), q1(e, t, a, n, o))
			: ((e = Ns(r.type, null, n, t, t.mode, o)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((a = e.child), !(e.lanes & o))) {
		var i = a.memoizedProps;
		if (
			((r = r.compare), (r = r !== null ? r : li), r(i, n) && e.ref === t.ref)
		)
			return Hr(e, t, o);
	}
	return (
		(t.flags |= 1),
		(e = gn(a, n)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function q1(e, t, r, n, o) {
	if (e !== null) {
		var a = e.memoizedProps;
		if (li(a, n) && e.ref === t.ref)
			if (((Pt = !1), (t.pendingProps = n = a), (e.lanes & o) !== 0))
				e.flags & 131072 && (Pt = !0);
			else return (t.lanes = e.lanes), Hr(e, t, o);
	}
	return Ad(e, t, r, n, o);
}
function Q1(e, t, r) {
	var n = t.pendingProps,
		o = n.children,
		a = e !== null ? e.memoizedState : null;
	if (n.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				Pe(Mo, Mt),
				(Mt |= r);
		else {
			if (!(r & 1073741824))
				return (
					(e = a !== null ? a.baseLanes | r : r),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					Pe(Mo, Mt),
					(Mt |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(n = a !== null ? a.baseLanes : r),
				Pe(Mo, Mt),
				(Mt |= n);
		}
	else
		a !== null ? ((n = a.baseLanes | r), (t.memoizedState = null)) : (n = r),
			Pe(Mo, Mt),
			(Mt |= n);
	return ht(e, t, o, r), t.child;
}
function J1(e, t) {
	var r = t.ref;
	((e === null && r !== null) || (e !== null && e.ref !== r)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Ad(e, t, r, n, o) {
	var a = Ct(r) ? Xn : dt.current;
	return (
		(a = Zo(t, a)),
		zo(t, o),
		(r = hp(e, t, r, n, a, o)),
		(n = mp()),
		e !== null && !Pt
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  Hr(e, t, o))
			: (Te && n && rp(t), (t.flags |= 1), ht(e, t, r, o), t.child)
	);
}
function Oh(e, t, r, n, o) {
	if (Ct(r)) {
		var a = !0;
		ol(t);
	} else a = !1;
	if ((zo(t, o), t.stateNode === null))
		Ls(e, t), E1(t, r, n), Td(t, r, n, o), (n = !0);
	else if (e === null) {
		var i = t.stateNode,
			s = t.memoizedProps;
		i.props = s;
		var l = i.context,
			u = r.contextType;
		typeof u == "object" && u !== null
			? (u = qt(u))
			: ((u = Ct(r) ? Xn : dt.current), (u = Zo(t, u)));
		var c = r.getDerivedStateFromProps,
			d =
				typeof c == "function" ||
				typeof i.getSnapshotBeforeUpdate == "function";
		d ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((s !== n || l !== u) && Th(t, i, n, u)),
			(tn = !1);
		var f = t.memoizedState;
		(i.state = f),
			ul(t, n, i, o),
			(l = t.memoizedState),
			s !== n || f !== l || $t.current || tn
				? (typeof c == "function" && (kd(t, r, c, n), (l = t.memoizedState)),
				  (s = tn || kh(t, r, s, n, f, l, u))
						? (d ||
								(typeof i.UNSAFE_componentWillMount != "function" &&
									typeof i.componentWillMount != "function") ||
								(typeof i.componentWillMount == "function" &&
									i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount == "function" &&
									i.UNSAFE_componentWillMount()),
						  typeof i.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
						  (t.memoizedProps = n),
						  (t.memoizedState = l)),
				  (i.props = n),
				  (i.state = l),
				  (i.context = u),
				  (n = s))
				: (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
				  (n = !1));
	} else {
		(i = t.stateNode),
			$1(e, t),
			(s = t.memoizedProps),
			(u = t.type === t.elementType ? s : lr(t.type, s)),
			(i.props = u),
			(d = t.pendingProps),
			(f = i.context),
			(l = r.contextType),
			typeof l == "object" && l !== null
				? (l = qt(l))
				: ((l = Ct(r) ? Xn : dt.current), (l = Zo(t, l)));
		var p = r.getDerivedStateFromProps;
		(c =
			typeof p == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function") ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((s !== d || f !== l) && Th(t, i, n, l)),
			(tn = !1),
			(f = t.memoizedState),
			(i.state = f),
			ul(t, n, i, o);
		var g = t.memoizedState;
		s !== d || f !== g || $t.current || tn
			? (typeof p == "function" && (kd(t, r, p, n), (g = t.memoizedState)),
			  (u = tn || kh(t, r, u, n, f, g, l) || !1)
					? (c ||
							(typeof i.UNSAFE_componentWillUpdate != "function" &&
								typeof i.componentWillUpdate != "function") ||
							(typeof i.componentWillUpdate == "function" &&
								i.componentWillUpdate(n, g, l),
							typeof i.UNSAFE_componentWillUpdate == "function" &&
								i.UNSAFE_componentWillUpdate(n, g, l)),
					  typeof i.componentDidUpdate == "function" && (t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof i.componentDidUpdate != "function" ||
							(s === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate != "function" ||
							(s === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = n),
					  (t.memoizedState = g)),
			  (i.props = n),
			  (i.state = g),
			  (i.context = l),
			  (n = u))
			: (typeof i.componentDidUpdate != "function" ||
					(s === e.memoizedProps && f === e.memoizedState) ||
					(t.flags |= 4),
			  typeof i.getSnapshotBeforeUpdate != "function" ||
					(s === e.memoizedProps && f === e.memoizedState) ||
					(t.flags |= 1024),
			  (n = !1));
	}
	return Dd(e, t, r, n, a, o);
}
function Dd(e, t, r, n, o, a) {
	J1(e, t);
	var i = (t.flags & 128) !== 0;
	if (!n && !i) return o && Sh(t, r, !1), Hr(e, t, a);
	(n = t.stateNode), (jP.current = t);
	var s =
		i && typeof r.getDerivedStateFromError != "function" ? null : n.render();
	return (
		(t.flags |= 1),
		e !== null && i
			? ((t.child = Yo(t, e.child, null, a)), (t.child = Yo(t, null, s, a)))
			: ht(e, t, s, a),
		(t.memoizedState = n.state),
		o && Sh(t, r, !0),
		t.child
	);
}
function eb(e) {
	var t = e.stateNode;
	t.pendingContext
		? wh(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && wh(e, t.context, !1),
		cp(e, t.containerInfo);
}
function Nh(e, t, r, n, o) {
	return Go(), op(o), (t.flags |= 256), ht(e, t, r, n), t.child;
}
var Id = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vd(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function tb(e, t, r) {
	var n = t.pendingProps,
		o = Ie.current,
		a = !1,
		i = (t.flags & 128) !== 0,
		s;
	if (
		((s = i) ||
			(s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
		s
			? ((a = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (o |= 1),
		Pe(Ie, o & 1),
		e === null)
	)
		return (
			Cd(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((i = n.children),
				  (e = n.fallback),
				  a
						? ((n = t.mode),
						  (a = t.child),
						  (i = { mode: "hidden", children: i }),
						  !(n & 1) && a !== null
								? ((a.childLanes = 0), (a.pendingProps = i))
								: (a = su(i, n, 0, null)),
						  (e = Gn(e, n, r, null)),
						  (a.return = t),
						  (e.return = t),
						  (a.sibling = e),
						  (t.child = a),
						  (t.child.memoizedState = Vd(r)),
						  (t.memoizedState = Id),
						  e)
						: yp(t, i))
		);
	if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
		return _P(e, t, i, n, s, o, r);
	if (a) {
		(a = n.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
		var l = { mode: "hidden", children: n.children };
		return (
			!(i & 1) && t.child !== o
				? ((n = t.child),
				  (n.childLanes = 0),
				  (n.pendingProps = l),
				  (t.deletions = null))
				: ((n = gn(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
			s !== null ? (a = gn(s, a)) : ((a = Gn(a, i, r, null)), (a.flags |= 2)),
			(a.return = t),
			(n.return = t),
			(n.sibling = a),
			(t.child = n),
			(n = a),
			(a = t.child),
			(i = e.child.memoizedState),
			(i =
				i === null
					? Vd(r)
					: {
							baseLanes: i.baseLanes | r,
							cachePool: null,
							transitions: i.transitions,
					  }),
			(a.memoizedState = i),
			(a.childLanes = e.childLanes & ~r),
			(t.memoizedState = Id),
			n
		);
	}
	return (
		(a = e.child),
		(e = a.sibling),
		(n = gn(a, { mode: "visible", children: n.children })),
		!(t.mode & 1) && (n.lanes = r),
		(n.return = t),
		(n.sibling = null),
		e !== null &&
			((r = t.deletions),
			r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
		(t.child = n),
		(t.memoizedState = null),
		n
	);
}
function yp(e, t) {
	return (
		(t = su({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function os(e, t, r, n) {
	return (
		n !== null && op(n),
		Yo(t, e.child, null, r),
		(e = yp(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function _P(e, t, r, n, o, a, i) {
	if (r)
		return t.flags & 256
			? ((t.flags &= -257), (n = sc(Error(Z(422)))), os(e, t, i, n))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((a = n.fallback),
			  (o = t.mode),
			  (n = su({ mode: "visible", children: n.children }, o, 0, null)),
			  (a = Gn(a, o, i, null)),
			  (a.flags |= 2),
			  (n.return = t),
			  (a.return = t),
			  (n.sibling = a),
			  (t.child = n),
			  t.mode & 1 && Yo(t, e.child, null, i),
			  (t.child.memoizedState = Vd(i)),
			  (t.memoizedState = Id),
			  a);
	if (!(t.mode & 1)) return os(e, t, i, null);
	if (o.data === "$!") {
		if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst;
		return (n = s), (a = Error(Z(419))), (n = sc(a, n)), os(e, t, i, n);
	}
	if (((s = (i & e.childLanes) !== 0), Pt || s)) {
		if (((n = Ye), n !== null)) {
			switch (i & -i) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0;
			}
			(o = o & (n.suspendedLanes | i) ? 0 : o),
				o !== 0 &&
					o !== a.retryLane &&
					((a.retryLane = o), Kr(e, o), pr(n, e, o, -1));
		}
		return $p(), (n = sc(Error(Z(421)))), os(e, t, i, n);
	}
	return o.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = JP.bind(null, e)),
		  (o._reactRetry = t),
		  null)
		: ((e = a.treeContext),
		  (At = fn(o.nextSibling)),
		  (Dt = t),
		  (Te = !0),
		  (dr = null),
		  e !== null &&
				((Wt[Ut++] = Vr),
				(Wt[Ut++] = Rr),
				(Wt[Ut++] = qn),
				(Vr = e.id),
				(Rr = e.overflow),
				(qn = t)),
		  (t = yp(t, n.children)),
		  (t.flags |= 4096),
		  t);
}
function jh(e, t, r) {
	e.lanes |= t;
	var n = e.alternate;
	n !== null && (n.lanes |= t), Ed(e.return, t, r);
}
function lc(e, t, r, n, o) {
	var a = e.memoizedState;
	a === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: n,
				tail: r,
				tailMode: o,
		  })
		: ((a.isBackwards = t),
		  (a.rendering = null),
		  (a.renderingStartTime = 0),
		  (a.last = n),
		  (a.tail = r),
		  (a.tailMode = o));
}
function rb(e, t, r) {
	var n = t.pendingProps,
		o = n.revealOrder,
		a = n.tail;
	if ((ht(e, t, n.children, r), (n = Ie.current), n & 2))
		(n = (n & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && jh(e, r, t);
				else if (e.tag === 19) jh(e, r, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		n &= 1;
	}
	if ((Pe(Ie, n), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (o) {
			case "forwards":
				for (r = t.child, o = null; r !== null; )
					(e = r.alternate),
						e !== null && cl(e) === null && (o = r),
						(r = r.sibling);
				(r = o),
					r === null
						? ((o = t.child), (t.child = null))
						: ((o = r.sibling), (r.sibling = null)),
					lc(t, !1, o, r, a);
				break;
			case "backwards":
				for (r = null, o = t.child, t.child = null; o !== null; ) {
					if (((e = o.alternate), e !== null && cl(e) === null)) {
						t.child = o;
						break;
					}
					(e = o.sibling), (o.sibling = r), (r = o), (o = e);
				}
				lc(t, !0, r, null, a);
				break;
			case "together":
				lc(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Ls(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Hr(e, t, r) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Jn |= t.lanes),
		!(r & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(Z(153));
	if (t.child !== null) {
		for (
			e = t.child, r = gn(e, e.pendingProps), t.child = r, r.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (r = r.sibling = gn(e, e.pendingProps)), (r.return = t);
		r.sibling = null;
	}
	return t.child;
}
function zP(e, t, r) {
	switch (t.tag) {
		case 3:
			eb(t), Go();
			break;
		case 5:
			M1(t);
			break;
		case 1:
			Ct(t.type) && ol(t);
			break;
		case 4:
			cp(t, t.stateNode.containerInfo);
			break;
		case 10:
			var n = t.type._context,
				o = t.memoizedProps.value;
			Pe(sl, n._currentValue), (n._currentValue = o);
			break;
		case 13:
			if (((n = t.memoizedState), n !== null))
				return n.dehydrated !== null
					? (Pe(Ie, Ie.current & 1), (t.flags |= 128), null)
					: r & t.child.childLanes
					? tb(e, t, r)
					: (Pe(Ie, Ie.current & 1),
					  (e = Hr(e, t, r)),
					  e !== null ? e.sibling : null);
			Pe(Ie, Ie.current & 1);
			break;
		case 19:
			if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
				if (n) return rb(e, t, r);
				t.flags |= 128;
			}
			if (
				((o = t.memoizedState),
				o !== null &&
					((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
				Pe(Ie, Ie.current),
				n)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Q1(e, t, r);
	}
	return Hr(e, t, r);
}
var nb, Rd, ob, ab;
nb = function (e, t) {
	for (var r = t.child; r !== null; ) {
		if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
		else if (r.tag !== 4 && r.child !== null) {
			(r.child.return = r), (r = r.child);
			continue;
		}
		if (r === t) break;
		for (; r.sibling === null; ) {
			if (r.return === null || r.return === t) return;
			r = r.return;
		}
		(r.sibling.return = r.return), (r = r.sibling);
	}
};
Rd = function () {};
ob = function (e, t, r, n) {
	var o = e.memoizedProps;
	if (o !== n) {
		(e = t.stateNode), Kn(Pr.current);
		var a = null;
		switch (r) {
			case "input":
				(o = rd(e, o)), (n = rd(e, n)), (a = []);
				break;
			case "select":
				(o = Le({}, o, { value: void 0 })),
					(n = Le({}, n, { value: void 0 })),
					(a = []);
				break;
			case "textarea":
				(o = ad(e, o)), (n = ad(e, n)), (a = []);
				break;
			default:
				typeof o.onClick != "function" &&
					typeof n.onClick == "function" &&
					(e.onclick = rl);
		}
		sd(r, n);
		var i;
		r = null;
		for (u in o)
			if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
				if (u === "style") {
					var s = o[u];
					for (i in s) s.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(ti.hasOwnProperty(u)
							? a || (a = [])
							: (a = a || []).push(u, null));
		for (u in n) {
			var l = n[u];
			if (
				((s = o != null ? o[u] : void 0),
				n.hasOwnProperty(u) && l !== s && (l != null || s != null))
			)
				if (u === "style")
					if (s) {
						for (i in s)
							!s.hasOwnProperty(i) ||
								(l && l.hasOwnProperty(i)) ||
								(r || (r = {}), (r[i] = ""));
						for (i in l)
							l.hasOwnProperty(i) &&
								s[i] !== l[i] &&
								(r || (r = {}), (r[i] = l[i]));
					} else r || (a || (a = []), a.push(u, r)), (r = l);
				else
					u === "dangerouslySetInnerHTML"
						? ((l = l ? l.__html : void 0),
						  (s = s ? s.__html : void 0),
						  l != null && s !== l && (a = a || []).push(u, l))
						: u === "children"
						? (typeof l != "string" && typeof l != "number") ||
						  (a = a || []).push(u, "" + l)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (ti.hasOwnProperty(u)
								? (l != null && u === "onScroll" && Ce("scroll", e),
								  a || s === l || (a = []))
								: (a = a || []).push(u, l));
		}
		r && (a = a || []).push("style", r);
		var u = a;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
ab = function (e, t, r, n) {
	r !== n && (t.flags |= 4);
};
function Sa(e, t) {
	if (!Te)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var r = null; t !== null; )
					t.alternate !== null && (r = t), (t = t.sibling);
				r === null ? (e.tail = null) : (r.sibling = null);
				break;
			case "collapsed":
				r = e.tail;
				for (var n = null; r !== null; )
					r.alternate !== null && (n = r), (r = r.sibling);
				n === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (n.sibling = null);
		}
}
function at(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		r = 0,
		n = 0;
	if (t)
		for (var o = e.child; o !== null; )
			(r |= o.lanes | o.childLanes),
				(n |= o.subtreeFlags & 14680064),
				(n |= o.flags & 14680064),
				(o.return = e),
				(o = o.sibling);
	else
		for (o = e.child; o !== null; )
			(r |= o.lanes | o.childLanes),
				(n |= o.subtreeFlags),
				(n |= o.flags),
				(o.return = e),
				(o = o.sibling);
	return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function BP(e, t, r) {
	var n = t.pendingProps;
	switch ((np(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return at(t), null;
		case 1:
			return Ct(t.type) && nl(), at(t), null;
		case 3:
			return (
				(n = t.stateNode),
				Xo(),
				Ee($t),
				Ee(dt),
				fp(),
				n.pendingContext &&
					((n.context = n.pendingContext), (n.pendingContext = null)),
				(e === null || e.child === null) &&
					(rs(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), dr !== null && (Bd(dr), (dr = null)))),
				Rd(e, t),
				at(t),
				null
			);
		case 5:
			dp(t);
			var o = Kn(pi.current);
			if (((r = t.type), e !== null && t.stateNode != null))
				ob(e, t, r, n, o),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!n) {
					if (t.stateNode === null) throw Error(Z(166));
					return at(t), null;
				}
				if (((e = Kn(Pr.current)), rs(t))) {
					(n = t.stateNode), (r = t.type);
					var a = t.memoizedProps;
					switch (((n[yr] = t), (n[di] = a), (e = (t.mode & 1) !== 0), r)) {
						case "dialog":
							Ce("cancel", n), Ce("close", n);
							break;
						case "iframe":
						case "object":
						case "embed":
							Ce("load", n);
							break;
						case "video":
						case "audio":
							for (o = 0; o < Fa.length; o++) Ce(Fa[o], n);
							break;
						case "source":
							Ce("error", n);
							break;
						case "img":
						case "image":
						case "link":
							Ce("error", n), Ce("load", n);
							break;
						case "details":
							Ce("toggle", n);
							break;
						case "input":
							G0(n, a), Ce("invalid", n);
							break;
						case "select":
							(n._wrapperState = { wasMultiple: !!a.multiple }),
								Ce("invalid", n);
							break;
						case "textarea":
							X0(n, a), Ce("invalid", n);
					}
					sd(r, a), (o = null);
					for (var i in a)
						if (a.hasOwnProperty(i)) {
							var s = a[i];
							i === "children"
								? typeof s == "string"
									? n.textContent !== s &&
									  (a.suppressHydrationWarning !== !0 &&
											ts(n.textContent, s, e),
									  (o = ["children", s]))
									: typeof s == "number" &&
									  n.textContent !== "" + s &&
									  (a.suppressHydrationWarning !== !0 &&
											ts(n.textContent, s, e),
									  (o = ["children", "" + s]))
								: ti.hasOwnProperty(i) &&
								  s != null &&
								  i === "onScroll" &&
								  Ce("scroll", n);
						}
					switch (r) {
						case "input":
							Zi(n), Y0(n, a, !0);
							break;
						case "textarea":
							Zi(n), q0(n);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof a.onClick == "function" && (n.onclick = rl);
					}
					(n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
				} else {
					(i = o.nodeType === 9 ? o : o.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = Iy(r)),
						e === "http://www.w3.org/1999/xhtml"
							? r === "script"
								? ((e = i.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof n.is == "string"
								? (e = i.createElement(r, { is: n.is }))
								: ((e = i.createElement(r)),
								  r === "select" &&
										((i = e),
										n.multiple
											? (i.multiple = !0)
											: n.size && (i.size = n.size)))
							: (e = i.createElementNS(e, r)),
						(e[yr] = t),
						(e[di] = n),
						nb(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((i = ld(r, n)), r)) {
							case "dialog":
								Ce("cancel", e), Ce("close", e), (o = n);
								break;
							case "iframe":
							case "object":
							case "embed":
								Ce("load", e), (o = n);
								break;
							case "video":
							case "audio":
								for (o = 0; o < Fa.length; o++) Ce(Fa[o], e);
								o = n;
								break;
							case "source":
								Ce("error", e), (o = n);
								break;
							case "img":
							case "image":
							case "link":
								Ce("error", e), Ce("load", e), (o = n);
								break;
							case "details":
								Ce("toggle", e), (o = n);
								break;
							case "input":
								G0(e, n), (o = rd(e, n)), Ce("invalid", e);
								break;
							case "option":
								o = n;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!n.multiple }),
									(o = Le({}, n, { value: void 0 })),
									Ce("invalid", e);
								break;
							case "textarea":
								X0(e, n), (o = ad(e, n)), Ce("invalid", e);
								break;
							default:
								o = n;
						}
						sd(r, o), (s = o);
						for (a in s)
							if (s.hasOwnProperty(a)) {
								var l = s[a];
								a === "style"
									? Ly(e, l)
									: a === "dangerouslySetInnerHTML"
									? ((l = l ? l.__html : void 0), l != null && Vy(e, l))
									: a === "children"
									? typeof l == "string"
										? (r !== "textarea" || l !== "") && ri(e, l)
										: typeof l == "number" && ri(e, "" + l)
									: a !== "suppressContentEditableWarning" &&
									  a !== "suppressHydrationWarning" &&
									  a !== "autoFocus" &&
									  (ti.hasOwnProperty(a)
											? l != null && a === "onScroll" && Ce("scroll", e)
											: l != null && Bf(e, a, l, i));
							}
						switch (r) {
							case "input":
								Zi(e), Y0(e, n, !1);
								break;
							case "textarea":
								Zi(e), q0(e);
								break;
							case "option":
								n.value != null && e.setAttribute("value", "" + wn(n.value));
								break;
							case "select":
								(e.multiple = !!n.multiple),
									(a = n.value),
									a != null
										? Oo(e, !!n.multiple, a, !1)
										: n.defaultValue != null &&
										  Oo(e, !!n.multiple, n.defaultValue, !0);
								break;
							default:
								typeof o.onClick == "function" && (e.onclick = rl);
						}
						switch (r) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								n = !!n.autoFocus;
								break e;
							case "img":
								n = !0;
								break e;
							default:
								n = !1;
						}
					}
					n && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return at(t), null;
		case 6:
			if (e && t.stateNode != null) ab(e, t, e.memoizedProps, n);
			else {
				if (typeof n != "string" && t.stateNode === null) throw Error(Z(166));
				if (((r = Kn(pi.current)), Kn(Pr.current), rs(t))) {
					if (
						((n = t.stateNode),
						(r = t.memoizedProps),
						(n[yr] = t),
						(a = n.nodeValue !== r) && ((e = Dt), e !== null))
					)
						switch (e.tag) {
							case 3:
								ts(n.nodeValue, r, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									ts(n.nodeValue, r, (e.mode & 1) !== 0);
						}
					a && (t.flags |= 4);
				} else
					(n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
						(n[yr] = t),
						(t.stateNode = n);
			}
			return at(t), null;
		case 13:
			if (
				(Ee(Ie),
				(n = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (Te && At !== null && t.mode & 1 && !(t.flags & 128))
					S1(), Go(), (t.flags |= 98560), (a = !1);
				else if (((a = rs(t)), n !== null && n.dehydrated !== null)) {
					if (e === null) {
						if (!a) throw Error(Z(318));
						if (
							((a = t.memoizedState),
							(a = a !== null ? a.dehydrated : null),
							!a)
						)
							throw Error(Z(317));
						a[yr] = t;
					} else
						Go(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					at(t), (a = !1);
				} else dr !== null && (Bd(dr), (dr = null)), (a = !0);
				if (!a) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = r), t)
				: ((n = n !== null),
				  n !== (e !== null && e.memoizedState !== null) &&
						n &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || Ie.current & 1 ? Ze === 0 && (Ze = 3) : $p())),
				  t.updateQueue !== null && (t.flags |= 4),
				  at(t),
				  null);
		case 4:
			return (
				Xo(), Rd(e, t), e === null && ui(t.stateNode.containerInfo), at(t), null
			);
		case 10:
			return sp(t.type._context), at(t), null;
		case 17:
			return Ct(t.type) && nl(), at(t), null;
		case 19:
			if ((Ee(Ie), (a = t.memoizedState), a === null)) return at(t), null;
			if (((n = (t.flags & 128) !== 0), (i = a.rendering), i === null))
				if (n) Sa(a, !1);
				else {
					if (Ze !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((i = cl(e)), i !== null)) {
								for (
									t.flags |= 128,
										Sa(a, !1),
										n = i.updateQueue,
										n !== null && ((t.updateQueue = n), (t.flags |= 4)),
										t.subtreeFlags = 0,
										n = r,
										r = t.child;
									r !== null;

								)
									(a = r),
										(e = n),
										(a.flags &= 14680066),
										(i = a.alternate),
										i === null
											? ((a.childLanes = 0),
											  (a.lanes = e),
											  (a.child = null),
											  (a.subtreeFlags = 0),
											  (a.memoizedProps = null),
											  (a.memoizedState = null),
											  (a.updateQueue = null),
											  (a.dependencies = null),
											  (a.stateNode = null))
											: ((a.childLanes = i.childLanes),
											  (a.lanes = i.lanes),
											  (a.child = i.child),
											  (a.subtreeFlags = 0),
											  (a.deletions = null),
											  (a.memoizedProps = i.memoizedProps),
											  (a.memoizedState = i.memoizedState),
											  (a.updateQueue = i.updateQueue),
											  (a.type = i.type),
											  (e = i.dependencies),
											  (a.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(r = r.sibling);
								return Pe(Ie, (Ie.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					a.tail !== null &&
						_e() > Qo &&
						((t.flags |= 128), (n = !0), Sa(a, !1), (t.lanes = 4194304));
				}
			else {
				if (!n)
					if (((e = cl(i)), e !== null)) {
						if (
							((t.flags |= 128),
							(n = !0),
							(r = e.updateQueue),
							r !== null && ((t.updateQueue = r), (t.flags |= 4)),
							Sa(a, !0),
							a.tail === null && a.tailMode === "hidden" && !i.alternate && !Te)
						)
							return at(t), null;
					} else
						2 * _e() - a.renderingStartTime > Qo &&
							r !== 1073741824 &&
							((t.flags |= 128), (n = !0), Sa(a, !1), (t.lanes = 4194304));
				a.isBackwards
					? ((i.sibling = t.child), (t.child = i))
					: ((r = a.last),
					  r !== null ? (r.sibling = i) : (t.child = i),
					  (a.last = i));
			}
			return a.tail !== null
				? ((t = a.tail),
				  (a.rendering = t),
				  (a.tail = t.sibling),
				  (a.renderingStartTime = _e()),
				  (t.sibling = null),
				  (r = Ie.current),
				  Pe(Ie, n ? (r & 1) | 2 : r & 1),
				  t)
				: (at(t), null);
		case 22:
		case 23:
			return (
				Pp(),
				(n = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
				n && t.mode & 1
					? Mt & 1073741824 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: at(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(Z(156, t.tag));
}
function KP(e, t) {
	switch ((np(t), t.tag)) {
		case 1:
			return (
				Ct(t.type) && nl(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Xo(),
				Ee($t),
				Ee(dt),
				fp(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return dp(t), null;
		case 13:
			if (
				(Ee(Ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(Z(340));
				Go();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return Ee(Ie), null;
		case 4:
			return Xo(), null;
		case 10:
			return sp(t.type._context), null;
		case 22:
		case 23:
			return Pp(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var as = !1,
	st = !1,
	HP = typeof WeakSet == "function" ? WeakSet : Set,
	ee = null;
function To(e, t) {
	var r = e.ref;
	if (r !== null)
		if (typeof r == "function")
			try {
				r(null);
			} catch (n) {
				Oe(e, t, n);
			}
		else r.current = null;
}
function Ld(e, t, r) {
	try {
		r();
	} catch (n) {
		Oe(e, t, n);
	}
}
var _h = !1;
function WP(e, t) {
	if (((yd = Js), (e = u1()), tp(e))) {
		if ("selectionStart" in e)
			var r = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				r = ((r = e.ownerDocument) && r.defaultView) || window;
				var n = r.getSelection && r.getSelection();
				if (n && n.rangeCount !== 0) {
					r = n.anchorNode;
					var o = n.anchorOffset,
						a = n.focusNode;
					n = n.focusOffset;
					try {
						r.nodeType, a.nodeType;
					} catch {
						r = null;
						break e;
					}
					var i = 0,
						s = -1,
						l = -1,
						u = 0,
						c = 0,
						d = e,
						f = null;
					t: for (;;) {
						for (
							var p;
							d !== r || (o !== 0 && d.nodeType !== 3) || (s = i + o),
								d !== a || (n !== 0 && d.nodeType !== 3) || (l = i + n),
								d.nodeType === 3 && (i += d.nodeValue.length),
								(p = d.firstChild) !== null;

						)
							(f = d), (d = p);
						for (;;) {
							if (d === e) break t;
							if (
								(f === r && ++u === o && (s = i),
								f === a && ++c === n && (l = i),
								(p = d.nextSibling) !== null)
							)
								break;
							(d = f), (f = d.parentNode);
						}
						d = p;
					}
					r = s === -1 || l === -1 ? null : { start: s, end: l };
				} else r = null;
			}
		r = r || { start: 0, end: 0 };
	} else r = null;
	for (
		bd = { focusedElem: e, selectionRange: r }, Js = !1, ee = t;
		ee !== null;

	)
		if (((t = ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (ee = e);
		else
			for (; ee !== null; ) {
				t = ee;
				try {
					var g = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (g !== null) {
									var b = g.memoizedProps,
										x = g.memoizedState,
										m = t.stateNode,
										v = m.getSnapshotBeforeUpdate(
											t.elementType === t.type ? b : lr(t.type, b),
											x,
										);
									m.__reactInternalSnapshotBeforeUpdate = v;
								}
								break;
							case 3:
								var y = t.stateNode.containerInfo;
								y.nodeType === 1
									? (y.textContent = "")
									: y.nodeType === 9 &&
									  y.documentElement &&
									  y.removeChild(y.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(Z(163));
						}
				} catch (P) {
					Oe(t, t.return, P);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (ee = e);
					break;
				}
				ee = t.return;
			}
	return (g = _h), (_h = !1), g;
}
function Za(e, t, r) {
	var n = t.updateQueue;
	if (((n = n !== null ? n.lastEffect : null), n !== null)) {
		var o = (n = n.next);
		do {
			if ((o.tag & e) === e) {
				var a = o.destroy;
				(o.destroy = void 0), a !== void 0 && Ld(t, r, a);
			}
			o = o.next;
		} while (o !== n);
	}
}
function au(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var r = (t = t.next);
		do {
			if ((r.tag & e) === e) {
				var n = r.create;
				r.destroy = n();
			}
			r = r.next;
		} while (r !== t);
	}
}
function Fd(e) {
	var t = e.ref;
	if (t !== null) {
		var r = e.stateNode;
		switch (e.tag) {
			case 5:
				e = r;
				break;
			default:
				e = r;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function ib(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), ib(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[yr], delete t[di], delete t[Sd], delete t[kP], delete t[TP])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function sb(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function zh(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || sb(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Od(e, t, r) {
	var n = e.tag;
	if (n === 5 || n === 6)
		(e = e.stateNode),
			t
				? r.nodeType === 8
					? r.parentNode.insertBefore(e, t)
					: r.insertBefore(e, t)
				: (r.nodeType === 8
						? ((t = r.parentNode), t.insertBefore(e, r))
						: ((t = r), t.appendChild(e)),
				  (r = r._reactRootContainer),
				  r != null || t.onclick !== null || (t.onclick = rl));
	else if (n !== 4 && ((e = e.child), e !== null))
		for (Od(e, t, r), e = e.sibling; e !== null; ) Od(e, t, r), (e = e.sibling);
}
function Nd(e, t, r) {
	var n = e.tag;
	if (n === 5 || n === 6)
		(e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
	else if (n !== 4 && ((e = e.child), e !== null))
		for (Nd(e, t, r), e = e.sibling; e !== null; ) Nd(e, t, r), (e = e.sibling);
}
var qe = null,
	ur = !1;
function qr(e, t, r) {
	for (r = r.child; r !== null; ) lb(e, t, r), (r = r.sibling);
}
function lb(e, t, r) {
	if (Sr && typeof Sr.onCommitFiberUnmount == "function")
		try {
			Sr.onCommitFiberUnmount(ql, r);
		} catch {}
	switch (r.tag) {
		case 5:
			st || To(r, t);
		case 6:
			var n = qe,
				o = ur;
			(qe = null),
				qr(e, t, r),
				(qe = n),
				(ur = o),
				qe !== null &&
					(ur
						? ((e = qe),
						  (r = r.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
						: qe.removeChild(r.stateNode));
			break;
		case 18:
			qe !== null &&
				(ur
					? ((e = qe),
					  (r = r.stateNode),
					  e.nodeType === 8
							? tc(e.parentNode, r)
							: e.nodeType === 1 && tc(e, r),
					  ii(e))
					: tc(qe, r.stateNode));
			break;
		case 4:
			(n = qe),
				(o = ur),
				(qe = r.stateNode.containerInfo),
				(ur = !0),
				qr(e, t, r),
				(qe = n),
				(ur = o);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!st &&
				((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
			) {
				o = n = n.next;
				do {
					var a = o,
						i = a.destroy;
					(a = a.tag),
						i !== void 0 && (a & 2 || a & 4) && Ld(r, t, i),
						(o = o.next);
				} while (o !== n);
			}
			qr(e, t, r);
			break;
		case 1:
			if (
				!st &&
				(To(r, t),
				(n = r.stateNode),
				typeof n.componentWillUnmount == "function")
			)
				try {
					(n.props = r.memoizedProps),
						(n.state = r.memoizedState),
						n.componentWillUnmount();
				} catch (s) {
					Oe(r, t, s);
				}
			qr(e, t, r);
			break;
		case 21:
			qr(e, t, r);
			break;
		case 22:
			r.mode & 1
				? ((st = (n = st) || r.memoizedState !== null), qr(e, t, r), (st = n))
				: qr(e, t, r);
			break;
		default:
			qr(e, t, r);
	}
}
function Bh(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var r = e.stateNode;
		r === null && (r = e.stateNode = new HP()),
			t.forEach(function (n) {
				var o = e3.bind(null, e, n);
				r.has(n) || (r.add(n), n.then(o, o));
			});
	}
}
function ir(e, t) {
	var r = t.deletions;
	if (r !== null)
		for (var n = 0; n < r.length; n++) {
			var o = r[n];
			try {
				var a = e,
					i = t,
					s = i;
				e: for (; s !== null; ) {
					switch (s.tag) {
						case 5:
							(qe = s.stateNode), (ur = !1);
							break e;
						case 3:
							(qe = s.stateNode.containerInfo), (ur = !0);
							break e;
						case 4:
							(qe = s.stateNode.containerInfo), (ur = !0);
							break e;
					}
					s = s.return;
				}
				if (qe === null) throw Error(Z(160));
				lb(a, i, o), (qe = null), (ur = !1);
				var l = o.alternate;
				l !== null && (l.return = null), (o.return = null);
			} catch (u) {
				Oe(o, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) ub(t, e), (t = t.sibling);
}
function ub(e, t) {
	var r = e.alternate,
		n = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((ir(t, e), gr(e), n & 4)) {
				try {
					Za(3, e, e.return), au(3, e);
				} catch (b) {
					Oe(e, e.return, b);
				}
				try {
					Za(5, e, e.return);
				} catch (b) {
					Oe(e, e.return, b);
				}
			}
			break;
		case 1:
			ir(t, e), gr(e), n & 512 && r !== null && To(r, r.return);
			break;
		case 5:
			if (
				(ir(t, e),
				gr(e),
				n & 512 && r !== null && To(r, r.return),
				e.flags & 32)
			) {
				var o = e.stateNode;
				try {
					ri(o, "");
				} catch (b) {
					Oe(e, e.return, b);
				}
			}
			if (n & 4 && ((o = e.stateNode), o != null)) {
				var a = e.memoizedProps,
					i = r !== null ? r.memoizedProps : a,
					s = e.type,
					l = e.updateQueue;
				if (((e.updateQueue = null), l !== null))
					try {
						s === "input" && a.type === "radio" && a.name != null && Ay(o, a),
							ld(s, i);
						var u = ld(s, a);
						for (i = 0; i < l.length; i += 2) {
							var c = l[i],
								d = l[i + 1];
							c === "style"
								? Ly(o, d)
								: c === "dangerouslySetInnerHTML"
								? Vy(o, d)
								: c === "children"
								? ri(o, d)
								: Bf(o, c, d, u);
						}
						switch (s) {
							case "input":
								nd(o, a);
								break;
							case "textarea":
								Dy(o, a);
								break;
							case "select":
								var f = o._wrapperState.wasMultiple;
								o._wrapperState.wasMultiple = !!a.multiple;
								var p = a.value;
								p != null
									? Oo(o, !!a.multiple, p, !1)
									: f !== !!a.multiple &&
									  (a.defaultValue != null
											? Oo(o, !!a.multiple, a.defaultValue, !0)
											: Oo(o, !!a.multiple, a.multiple ? [] : "", !1));
						}
						o[di] = a;
					} catch (b) {
						Oe(e, e.return, b);
					}
			}
			break;
		case 6:
			if ((ir(t, e), gr(e), n & 4)) {
				if (e.stateNode === null) throw Error(Z(162));
				(o = e.stateNode), (a = e.memoizedProps);
				try {
					o.nodeValue = a;
				} catch (b) {
					Oe(e, e.return, b);
				}
			}
			break;
		case 3:
			if (
				(ir(t, e), gr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
			)
				try {
					ii(t.containerInfo);
				} catch (b) {
					Oe(e, e.return, b);
				}
			break;
		case 4:
			ir(t, e), gr(e);
			break;
		case 13:
			ir(t, e),
				gr(e),
				(o = e.child),
				o.flags & 8192 &&
					((a = o.memoizedState !== null),
					(o.stateNode.isHidden = a),
					!a ||
						(o.alternate !== null && o.alternate.memoizedState !== null) ||
						(wp = _e())),
				n & 4 && Bh(e);
			break;
		case 22:
			if (
				((c = r !== null && r.memoizedState !== null),
				e.mode & 1 ? ((st = (u = st) || c), ir(t, e), (st = u)) : ir(t, e),
				gr(e),
				n & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (ee = e, c = e.child; c !== null; ) {
						for (d = ee = c; ee !== null; ) {
							switch (((f = ee), (p = f.child), f.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Za(4, f, f.return);
									break;
								case 1:
									To(f, f.return);
									var g = f.stateNode;
									if (typeof g.componentWillUnmount == "function") {
										(n = f), (r = f.return);
										try {
											(t = n),
												(g.props = t.memoizedProps),
												(g.state = t.memoizedState),
												g.componentWillUnmount();
										} catch (b) {
											Oe(n, r, b);
										}
									}
									break;
								case 5:
									To(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										Hh(d);
										continue;
									}
							}
							p !== null ? ((p.return = f), (ee = p)) : Hh(d);
						}
						c = c.sibling;
					}
				e: for (c = null, d = e; ; ) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								(o = d.stateNode),
									u
										? ((a = o.style),
										  typeof a.setProperty == "function"
												? a.setProperty("display", "none", "important")
												: (a.display = "none"))
										: ((s = d.stateNode),
										  (l = d.memoizedProps.style),
										  (i =
												l != null && l.hasOwnProperty("display")
													? l.display
													: null),
										  (s.style.display = Ry("display", i)));
							} catch (b) {
								Oe(e, e.return, b);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = u ? "" : d.memoizedProps;
							} catch (b) {
								Oe(e, e.return, b);
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === e) &&
						d.child !== null
					) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === e) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === e) break e;
						c === d && (c = null), (d = d.return);
					}
					c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
				}
			}
			break;
		case 19:
			ir(t, e), gr(e), n & 4 && Bh(e);
			break;
		case 21:
			break;
		default:
			ir(t, e), gr(e);
	}
}
function gr(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var r = e.return; r !== null; ) {
					if (sb(r)) {
						var n = r;
						break e;
					}
					r = r.return;
				}
				throw Error(Z(160));
			}
			switch (n.tag) {
				case 5:
					var o = n.stateNode;
					n.flags & 32 && (ri(o, ""), (n.flags &= -33));
					var a = zh(e);
					Nd(e, a, o);
					break;
				case 3:
				case 4:
					var i = n.stateNode.containerInfo,
						s = zh(e);
					Od(e, s, i);
					break;
				default:
					throw Error(Z(161));
			}
		} catch (l) {
			Oe(e, e.return, l);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function UP(e, t, r) {
	(ee = e), cb(e);
}
function cb(e, t, r) {
	for (var n = (e.mode & 1) !== 0; ee !== null; ) {
		var o = ee,
			a = o.child;
		if (o.tag === 22 && n) {
			var i = o.memoizedState !== null || as;
			if (!i) {
				var s = o.alternate,
					l = (s !== null && s.memoizedState !== null) || st;
				s = as;
				var u = st;
				if (((as = i), (st = l) && !u))
					for (ee = o; ee !== null; )
						(i = ee),
							(l = i.child),
							i.tag === 22 && i.memoizedState !== null
								? Wh(o)
								: l !== null
								? ((l.return = i), (ee = l))
								: Wh(o);
				for (; a !== null; ) (ee = a), cb(a), (a = a.sibling);
				(ee = o), (as = s), (st = u);
			}
			Kh(e);
		} else
			o.subtreeFlags & 8772 && a !== null ? ((a.return = o), (ee = a)) : Kh(e);
	}
}
function Kh(e) {
	for (; ee !== null; ) {
		var t = ee;
		if (t.flags & 8772) {
			var r = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							st || au(5, t);
							break;
						case 1:
							var n = t.stateNode;
							if (t.flags & 4 && !st)
								if (r === null) n.componentDidMount();
								else {
									var o =
										t.elementType === t.type
											? r.memoizedProps
											: lr(t.type, r.memoizedProps);
									n.componentDidUpdate(
										o,
										r.memoizedState,
										n.__reactInternalSnapshotBeforeUpdate,
									);
								}
							var a = t.updateQueue;
							a !== null && Eh(t, a, n);
							break;
						case 3:
							var i = t.updateQueue;
							if (i !== null) {
								if (((r = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											r = t.child.stateNode;
											break;
										case 1:
											r = t.child.stateNode;
									}
								Eh(t, i, r);
							}
							break;
						case 5:
							var s = t.stateNode;
							if (r === null && t.flags & 4) {
								r = s;
								var l = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										l.autoFocus && r.focus();
										break;
									case "img":
										l.src && (r.src = l.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var d = c.dehydrated;
										d !== null && ii(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(Z(163));
					}
				st || (t.flags & 512 && Fd(t));
			} catch (f) {
				Oe(t, t.return, f);
			}
		}
		if (t === e) {
			ee = null;
			break;
		}
		if (((r = t.sibling), r !== null)) {
			(r.return = t.return), (ee = r);
			break;
		}
		ee = t.return;
	}
}
function Hh(e) {
	for (; ee !== null; ) {
		var t = ee;
		if (t === e) {
			ee = null;
			break;
		}
		var r = t.sibling;
		if (r !== null) {
			(r.return = t.return), (ee = r);
			break;
		}
		ee = t.return;
	}
}
function Wh(e) {
	for (; ee !== null; ) {
		var t = ee;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var r = t.return;
					try {
						au(4, t);
					} catch (l) {
						Oe(t, r, l);
					}
					break;
				case 1:
					var n = t.stateNode;
					if (typeof n.componentDidMount == "function") {
						var o = t.return;
						try {
							n.componentDidMount();
						} catch (l) {
							Oe(t, o, l);
						}
					}
					var a = t.return;
					try {
						Fd(t);
					} catch (l) {
						Oe(t, a, l);
					}
					break;
				case 5:
					var i = t.return;
					try {
						Fd(t);
					} catch (l) {
						Oe(t, i, l);
					}
			}
		} catch (l) {
			Oe(t, t.return, l);
		}
		if (t === e) {
			ee = null;
			break;
		}
		var s = t.sibling;
		if (s !== null) {
			(s.return = t.return), (ee = s);
			break;
		}
		ee = t.return;
	}
}
var ZP = Math.ceil,
	pl = Yr.ReactCurrentDispatcher,
	bp = Yr.ReactCurrentOwner,
	Xt = Yr.ReactCurrentBatchConfig,
	pe = 0,
	Ye = null,
	Ke = null,
	et = 0,
	Mt = 0,
	Mo = Mn(0),
	Ze = 0,
	vi = null,
	Jn = 0,
	iu = 0,
	xp = 0,
	Ga = null,
	St = null,
	wp = 0,
	Qo = 1 / 0,
	Ar = null,
	hl = !1,
	jd = null,
	hn = null,
	is = !1,
	sn = null,
	ml = 0,
	Ya = 0,
	_d = null,
	Fs = -1,
	Os = 0;
function mt() {
	return pe & 6 ? _e() : Fs !== -1 ? Fs : (Fs = _e());
}
function mn(e) {
	return e.mode & 1
		? pe & 2 && et !== 0
			? et & -et
			: AP.transition !== null
			? (Os === 0 && (Os = Zy()), Os)
			: ((e = ye),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : e1(e.type))),
			  e)
		: 1;
}
function pr(e, t, r, n) {
	if (50 < Ya) throw ((Ya = 0), (_d = null), Error(Z(185)));
	ki(e, r, n),
		(!(pe & 2) || e !== Ye) &&
			(e === Ye && (!(pe & 2) && (iu |= r), Ze === 4 && on(e, et)),
			Et(e, n),
			r === 1 && pe === 0 && !(t.mode & 1) && ((Qo = _e() + 500), ru && An()));
}
function Et(e, t) {
	var r = e.callbackNode;
	AS(e, t);
	var n = Qs(e, e === Ye ? et : 0);
	if (n === 0)
		r !== null && eh(r), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = n & -n), e.callbackPriority !== t)) {
		if ((r != null && eh(r), t === 1))
			e.tag === 0 ? MP(Uh.bind(null, e)) : b1(Uh.bind(null, e)),
				CP(function () {
					!(pe & 6) && An();
				}),
				(r = null);
		else {
			switch (Gy(n)) {
				case 1:
					r = Zf;
					break;
				case 4:
					r = Wy;
					break;
				case 16:
					r = qs;
					break;
				case 536870912:
					r = Uy;
					break;
				default:
					r = qs;
			}
			r = yb(r, db.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = r);
	}
}
function db(e, t) {
	if (((Fs = -1), (Os = 0), pe & 6)) throw Error(Z(327));
	var r = e.callbackNode;
	if (Bo() && e.callbackNode !== r) return null;
	var n = Qs(e, e === Ye ? et : 0);
	if (n === 0) return null;
	if (n & 30 || n & e.expiredLanes || t) t = gl(e, n);
	else {
		t = n;
		var o = pe;
		pe |= 2;
		var a = pb();
		(Ye !== e || et !== t) && ((Ar = null), (Qo = _e() + 500), Zn(e, t));
		do
			try {
				XP();
				break;
			} catch (s) {
				fb(e, s);
			}
		while (!0);
		ip(),
			(pl.current = a),
			(pe = o),
			Ke !== null ? (t = 0) : ((Ye = null), (et = 0), (t = Ze));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((o = pd(e)), o !== 0 && ((n = o), (t = zd(e, o)))), t === 1)
		)
			throw ((r = vi), Zn(e, 0), on(e, n), Et(e, _e()), r);
		if (t === 6) on(e, n);
		else {
			if (
				((o = e.current.alternate),
				!(n & 30) &&
					!GP(o) &&
					((t = gl(e, n)),
					t === 2 && ((a = pd(e)), a !== 0 && ((n = a), (t = zd(e, a)))),
					t === 1))
			)
				throw ((r = vi), Zn(e, 0), on(e, n), Et(e, _e()), r);
			switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
				case 0:
				case 1:
					throw Error(Z(345));
				case 2:
					On(e, St, Ar);
					break;
				case 3:
					if (
						(on(e, n), (n & 130023424) === n && ((t = wp + 500 - _e()), 10 < t))
					) {
						if (Qs(e, 0) !== 0) break;
						if (((o = e.suspendedLanes), (o & n) !== n)) {
							mt(), (e.pingedLanes |= e.suspendedLanes & o);
							break;
						}
						e.timeoutHandle = wd(On.bind(null, e, St, Ar), t);
						break;
					}
					On(e, St, Ar);
					break;
				case 4:
					if ((on(e, n), (n & 4194240) === n)) break;
					for (t = e.eventTimes, o = -1; 0 < n; ) {
						var i = 31 - fr(n);
						(a = 1 << i), (i = t[i]), i > o && (o = i), (n &= ~a);
					}
					if (
						((n = o),
						(n = _e() - n),
						(n =
							(120 > n
								? 120
								: 480 > n
								? 480
								: 1080 > n
								? 1080
								: 1920 > n
								? 1920
								: 3e3 > n
								? 3e3
								: 4320 > n
								? 4320
								: 1960 * ZP(n / 1960)) - n),
						10 < n)
					) {
						e.timeoutHandle = wd(On.bind(null, e, St, Ar), n);
						break;
					}
					On(e, St, Ar);
					break;
				case 5:
					On(e, St, Ar);
					break;
				default:
					throw Error(Z(329));
			}
		}
	}
	return Et(e, _e()), e.callbackNode === r ? db.bind(null, e) : null;
}
function zd(e, t) {
	var r = Ga;
	return (
		e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256),
		(e = gl(e, t)),
		e !== 2 && ((t = St), (St = r), t !== null && Bd(t)),
		e
	);
}
function Bd(e) {
	St === null ? (St = e) : St.push.apply(St, e);
}
function GP(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var r = t.updateQueue;
			if (r !== null && ((r = r.stores), r !== null))
				for (var n = 0; n < r.length; n++) {
					var o = r[n],
						a = o.getSnapshot;
					o = o.value;
					try {
						if (!hr(a(), o)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
			(r.return = t), (t = r);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function on(e, t) {
	for (
		t &= ~xp,
			t &= ~iu,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var r = 31 - fr(t),
			n = 1 << r;
		(e[r] = -1), (t &= ~n);
	}
}
function Uh(e) {
	if (pe & 6) throw Error(Z(327));
	Bo();
	var t = Qs(e, 0);
	if (!(t & 1)) return Et(e, _e()), null;
	var r = gl(e, t);
	if (e.tag !== 0 && r === 2) {
		var n = pd(e);
		n !== 0 && ((t = n), (r = zd(e, n)));
	}
	if (r === 1) throw ((r = vi), Zn(e, 0), on(e, t), Et(e, _e()), r);
	if (r === 6) throw Error(Z(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		On(e, St, Ar),
		Et(e, _e()),
		null
	);
}
function Sp(e, t) {
	var r = pe;
	pe |= 1;
	try {
		return e(t);
	} finally {
		(pe = r), pe === 0 && ((Qo = _e() + 500), ru && An());
	}
}
function eo(e) {
	sn !== null && sn.tag === 0 && !(pe & 6) && Bo();
	var t = pe;
	pe |= 1;
	var r = Xt.transition,
		n = ye;
	try {
		if (((Xt.transition = null), (ye = 1), e)) return e();
	} finally {
		(ye = n), (Xt.transition = r), (pe = t), !(pe & 6) && An();
	}
}
function Pp() {
	(Mt = Mo.current), Ee(Mo);
}
function Zn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var r = e.timeoutHandle;
	if ((r !== -1 && ((e.timeoutHandle = -1), $P(r)), Ke !== null))
		for (r = Ke.return; r !== null; ) {
			var n = r;
			switch ((np(n), n.tag)) {
				case 1:
					(n = n.type.childContextTypes), n != null && nl();
					break;
				case 3:
					Xo(), Ee($t), Ee(dt), fp();
					break;
				case 5:
					dp(n);
					break;
				case 4:
					Xo();
					break;
				case 13:
					Ee(Ie);
					break;
				case 19:
					Ee(Ie);
					break;
				case 10:
					sp(n.type._context);
					break;
				case 22:
				case 23:
					Pp();
			}
			r = r.return;
		}
	if (
		((Ye = e),
		(Ke = e = gn(e.current, null)),
		(et = Mt = t),
		(Ze = 0),
		(vi = null),
		(xp = iu = Jn = 0),
		(St = Ga = null),
		Bn !== null)
	) {
		for (t = 0; t < Bn.length; t++)
			if (((r = Bn[t]), (n = r.interleaved), n !== null)) {
				r.interleaved = null;
				var o = n.next,
					a = r.pending;
				if (a !== null) {
					var i = a.next;
					(a.next = o), (n.next = i);
				}
				r.pending = n;
			}
		Bn = null;
	}
	return e;
}
function fb(e, t) {
	do {
		var r = Ke;
		try {
			if ((ip(), (Vs.current = fl), dl)) {
				for (var n = Re.memoizedState; n !== null; ) {
					var o = n.queue;
					o !== null && (o.pending = null), (n = n.next);
				}
				dl = !1;
			}
			if (
				((Qn = 0),
				(Ge = Ue = Re = null),
				(Ua = !1),
				(hi = 0),
				(bp.current = null),
				r === null || r.return === null)
			) {
				(Ze = 1), (vi = t), (Ke = null);
				break;
			}
			e: {
				var a = e,
					i = r.return,
					s = r,
					l = t;
				if (
					((t = et),
					(s.flags |= 32768),
					l !== null && typeof l == "object" && typeof l.then == "function")
				) {
					var u = l,
						c = s,
						d = c.tag;
					if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var f = c.alternate;
						f
							? ((c.updateQueue = f.updateQueue),
							  (c.memoizedState = f.memoizedState),
							  (c.lanes = f.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var p = Vh(i);
					if (p !== null) {
						(p.flags &= -257),
							Rh(p, i, s, a, t),
							p.mode & 1 && Ih(a, u, t),
							(t = p),
							(l = u);
						var g = t.updateQueue;
						if (g === null) {
							var b = new Set();
							b.add(l), (t.updateQueue = b);
						} else g.add(l);
						break e;
					} else {
						if (!(t & 1)) {
							Ih(a, u, t), $p();
							break e;
						}
						l = Error(Z(426));
					}
				} else if (Te && s.mode & 1) {
					var x = Vh(i);
					if (x !== null) {
						!(x.flags & 65536) && (x.flags |= 256),
							Rh(x, i, s, a, t),
							op(qo(l, s));
						break e;
					}
				}
				(a = l = qo(l, s)),
					Ze !== 4 && (Ze = 2),
					Ga === null ? (Ga = [a]) : Ga.push(a),
					(a = i);
				do {
					switch (a.tag) {
						case 3:
							(a.flags |= 65536), (t &= -t), (a.lanes |= t);
							var m = Y1(a, l, t);
							Ch(a, m);
							break e;
						case 1:
							s = l;
							var v = a.type,
								y = a.stateNode;
							if (
								!(a.flags & 128) &&
								(typeof v.getDerivedStateFromError == "function" ||
									(y !== null &&
										typeof y.componentDidCatch == "function" &&
										(hn === null || !hn.has(y))))
							) {
								(a.flags |= 65536), (t &= -t), (a.lanes |= t);
								var P = X1(a, s, t);
								Ch(a, P);
								break e;
							}
					}
					a = a.return;
				} while (a !== null);
			}
			mb(r);
		} catch (C) {
			(t = C), Ke === r && r !== null && (Ke = r = r.return);
			continue;
		}
		break;
	} while (!0);
}
function pb() {
	var e = pl.current;
	return (pl.current = fl), e === null ? fl : e;
}
function $p() {
	(Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4),
		Ye === null || (!(Jn & 268435455) && !(iu & 268435455)) || on(Ye, et);
}
function gl(e, t) {
	var r = pe;
	pe |= 2;
	var n = pb();
	(Ye !== e || et !== t) && ((Ar = null), Zn(e, t));
	do
		try {
			YP();
			break;
		} catch (o) {
			fb(e, o);
		}
	while (!0);
	if ((ip(), (pe = r), (pl.current = n), Ke !== null)) throw Error(Z(261));
	return (Ye = null), (et = 0), Ze;
}
function YP() {
	for (; Ke !== null; ) hb(Ke);
}
function XP() {
	for (; Ke !== null && !wS(); ) hb(Ke);
}
function hb(e) {
	var t = vb(e.alternate, e, Mt);
	(e.memoizedProps = e.pendingProps),
		t === null ? mb(e) : (Ke = t),
		(bp.current = null);
}
function mb(e) {
	var t = e;
	do {
		var r = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((r = KP(r, t)), r !== null)) {
				(r.flags &= 32767), (Ke = r);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Ze = 6), (Ke = null);
				return;
			}
		} else if (((r = BP(r, t, Mt)), r !== null)) {
			Ke = r;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Ke = t;
			return;
		}
		Ke = t = e;
	} while (t !== null);
	Ze === 0 && (Ze = 5);
}
function On(e, t, r) {
	var n = ye,
		o = Xt.transition;
	try {
		(Xt.transition = null), (ye = 1), qP(e, t, r, n);
	} finally {
		(Xt.transition = o), (ye = n);
	}
	return null;
}
function qP(e, t, r, n) {
	do Bo();
	while (sn !== null);
	if (pe & 6) throw Error(Z(327));
	r = e.finishedWork;
	var o = e.finishedLanes;
	if (r === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
		throw Error(Z(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var a = r.lanes | r.childLanes;
	if (
		(DS(e, a),
		e === Ye && ((Ke = Ye = null), (et = 0)),
		(!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
			is ||
			((is = !0),
			yb(qs, function () {
				return Bo(), null;
			})),
		(a = (r.flags & 15990) !== 0),
		r.subtreeFlags & 15990 || a)
	) {
		(a = Xt.transition), (Xt.transition = null);
		var i = ye;
		ye = 1;
		var s = pe;
		(pe |= 4),
			(bp.current = null),
			WP(e, r),
			ub(r, e),
			vP(bd),
			(Js = !!yd),
			(bd = yd = null),
			(e.current = r),
			UP(r),
			SS(),
			(pe = s),
			(ye = i),
			(Xt.transition = a);
	} else e.current = r;
	if (
		(is && ((is = !1), (sn = e), (ml = o)),
		(a = e.pendingLanes),
		a === 0 && (hn = null),
		CS(r.stateNode),
		Et(e, _e()),
		t !== null)
	)
		for (n = e.onRecoverableError, r = 0; r < t.length; r++)
			(o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
	if (hl) throw ((hl = !1), (e = jd), (jd = null), e);
	return (
		ml & 1 && e.tag !== 0 && Bo(),
		(a = e.pendingLanes),
		a & 1 ? (e === _d ? Ya++ : ((Ya = 0), (_d = e))) : (Ya = 0),
		An(),
		null
	);
}
function Bo() {
	if (sn !== null) {
		var e = Gy(ml),
			t = Xt.transition,
			r = ye;
		try {
			if (((Xt.transition = null), (ye = 16 > e ? 16 : e), sn === null))
				var n = !1;
			else {
				if (((e = sn), (sn = null), (ml = 0), pe & 6)) throw Error(Z(331));
				var o = pe;
				for (pe |= 4, ee = e.current; ee !== null; ) {
					var a = ee,
						i = a.child;
					if (ee.flags & 16) {
						var s = a.deletions;
						if (s !== null) {
							for (var l = 0; l < s.length; l++) {
								var u = s[l];
								for (ee = u; ee !== null; ) {
									var c = ee;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Za(8, c, a);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (ee = d);
									else
										for (; ee !== null; ) {
											c = ee;
											var f = c.sibling,
												p = c.return;
											if ((ib(c), c === u)) {
												ee = null;
												break;
											}
											if (f !== null) {
												(f.return = p), (ee = f);
												break;
											}
											ee = p;
										}
								}
							}
							var g = a.alternate;
							if (g !== null) {
								var b = g.child;
								if (b !== null) {
									g.child = null;
									do {
										var x = b.sibling;
										(b.sibling = null), (b = x);
									} while (b !== null);
								}
							}
							ee = a;
						}
					}
					if (a.subtreeFlags & 2064 && i !== null) (i.return = a), (ee = i);
					else
						e: for (; ee !== null; ) {
							if (((a = ee), a.flags & 2048))
								switch (a.tag) {
									case 0:
									case 11:
									case 15:
										Za(9, a, a.return);
								}
							var m = a.sibling;
							if (m !== null) {
								(m.return = a.return), (ee = m);
								break e;
							}
							ee = a.return;
						}
				}
				var v = e.current;
				for (ee = v; ee !== null; ) {
					i = ee;
					var y = i.child;
					if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (ee = y);
					else
						e: for (i = v; ee !== null; ) {
							if (((s = ee), s.flags & 2048))
								try {
									switch (s.tag) {
										case 0:
										case 11:
										case 15:
											au(9, s);
									}
								} catch (C) {
									Oe(s, s.return, C);
								}
							if (s === i) {
								ee = null;
								break e;
							}
							var P = s.sibling;
							if (P !== null) {
								(P.return = s.return), (ee = P);
								break e;
							}
							ee = s.return;
						}
				}
				if (
					((pe = o), An(), Sr && typeof Sr.onPostCommitFiberRoot == "function")
				)
					try {
						Sr.onPostCommitFiberRoot(ql, e);
					} catch {}
				n = !0;
			}
			return n;
		} finally {
			(ye = r), (Xt.transition = t);
		}
	}
	return !1;
}
function Zh(e, t, r) {
	(t = qo(r, t)),
		(t = Y1(e, t, 1)),
		(e = pn(e, t, 1)),
		(t = mt()),
		e !== null && (ki(e, 1, t), Et(e, t));
}
function Oe(e, t, r) {
	if (e.tag === 3) Zh(e, e, r);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Zh(t, e, r);
				break;
			} else if (t.tag === 1) {
				var n = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof n.componentDidCatch == "function" &&
						(hn === null || !hn.has(n)))
				) {
					(e = qo(r, e)),
						(e = X1(t, e, 1)),
						(t = pn(t, e, 1)),
						(e = mt()),
						t !== null && (ki(t, 1, e), Et(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function QP(e, t, r) {
	var n = e.pingCache;
	n !== null && n.delete(t),
		(t = mt()),
		(e.pingedLanes |= e.suspendedLanes & r),
		Ye === e &&
			(et & r) === r &&
			(Ze === 4 || (Ze === 3 && (et & 130023424) === et && 500 > _e() - wp)
				? Zn(e, 0)
				: (xp |= r)),
		Et(e, t);
}
function gb(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Xi), (Xi <<= 1), !(Xi & 130023424) && (Xi = 4194304))
			: (t = 1));
	var r = mt();
	(e = Kr(e, t)), e !== null && (ki(e, t, r), Et(e, r));
}
function JP(e) {
	var t = e.memoizedState,
		r = 0;
	t !== null && (r = t.retryLane), gb(e, r);
}
function e3(e, t) {
	var r = 0;
	switch (e.tag) {
		case 13:
			var n = e.stateNode,
				o = e.memoizedState;
			o !== null && (r = o.retryLane);
			break;
		case 19:
			n = e.stateNode;
			break;
		default:
			throw Error(Z(314));
	}
	n !== null && n.delete(t), gb(e, r);
}
var vb;
vb = function (e, t, r) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || $t.current) Pt = !0;
		else {
			if (!(e.lanes & r) && !(t.flags & 128)) return (Pt = !1), zP(e, t, r);
			Pt = !!(e.flags & 131072);
		}
	else (Pt = !1), Te && t.flags & 1048576 && x1(t, il, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var n = t.type;
			Ls(e, t), (e = t.pendingProps);
			var o = Zo(t, dt.current);
			zo(t, r), (o = hp(null, t, n, e, o, r));
			var a = mp();
			return (
				(t.flags |= 1),
				typeof o == "object" &&
				o !== null &&
				typeof o.render == "function" &&
				o.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  Ct(n) ? ((a = !0), ol(t)) : (a = !1),
					  (t.memoizedState =
							o.state !== null && o.state !== void 0 ? o.state : null),
					  up(t),
					  (o.updater = nu),
					  (t.stateNode = o),
					  (o._reactInternals = t),
					  Td(t, n, e, r),
					  (t = Dd(null, t, n, !0, a, r)))
					: ((t.tag = 0), Te && a && rp(t), ht(null, t, o, r), (t = t.child)),
				t
			);
		case 16:
			n = t.elementType;
			e: {
				switch (
					(Ls(e, t),
					(e = t.pendingProps),
					(o = n._init),
					(n = o(n._payload)),
					(t.type = n),
					(o = t.tag = r3(n)),
					(e = lr(n, e)),
					o)
				) {
					case 0:
						t = Ad(null, t, n, e, r);
						break e;
					case 1:
						t = Oh(null, t, n, e, r);
						break e;
					case 11:
						t = Lh(null, t, n, e, r);
						break e;
					case 14:
						t = Fh(null, t, n, lr(n.type, e), r);
						break e;
				}
				throw Error(Z(306, n, ""));
			}
			return t;
		case 0:
			return (
				(n = t.type),
				(o = t.pendingProps),
				(o = t.elementType === n ? o : lr(n, o)),
				Ad(e, t, n, o, r)
			);
		case 1:
			return (
				(n = t.type),
				(o = t.pendingProps),
				(o = t.elementType === n ? o : lr(n, o)),
				Oh(e, t, n, o, r)
			);
		case 3:
			e: {
				if ((eb(t), e === null)) throw Error(Z(387));
				(n = t.pendingProps),
					(a = t.memoizedState),
					(o = a.element),
					$1(e, t),
					ul(t, n, null, r);
				var i = t.memoizedState;
				if (((n = i.element), a.isDehydrated))
					if (
						((a = {
							element: n,
							isDehydrated: !1,
							cache: i.cache,
							pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
							transitions: i.transitions,
						}),
						(t.updateQueue.baseState = a),
						(t.memoizedState = a),
						t.flags & 256)
					) {
						(o = qo(Error(Z(423)), t)), (t = Nh(e, t, n, r, o));
						break e;
					} else if (n !== o) {
						(o = qo(Error(Z(424)), t)), (t = Nh(e, t, n, r, o));
						break e;
					} else
						for (
							At = fn(t.stateNode.containerInfo.firstChild),
								Dt = t,
								Te = !0,
								dr = null,
								r = T1(t, null, n, r),
								t.child = r;
							r;

						)
							(r.flags = (r.flags & -3) | 4096), (r = r.sibling);
				else {
					if ((Go(), n === o)) {
						t = Hr(e, t, r);
						break e;
					}
					ht(e, t, n, r);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				M1(t),
				e === null && Cd(t),
				(n = t.type),
				(o = t.pendingProps),
				(a = e !== null ? e.memoizedProps : null),
				(i = o.children),
				xd(n, o) ? (i = null) : a !== null && xd(n, a) && (t.flags |= 32),
				J1(e, t),
				ht(e, t, i, r),
				t.child
			);
		case 6:
			return e === null && Cd(t), null;
		case 13:
			return tb(e, t, r);
		case 4:
			return (
				cp(t, t.stateNode.containerInfo),
				(n = t.pendingProps),
				e === null ? (t.child = Yo(t, null, n, r)) : ht(e, t, n, r),
				t.child
			);
		case 11:
			return (
				(n = t.type),
				(o = t.pendingProps),
				(o = t.elementType === n ? o : lr(n, o)),
				Lh(e, t, n, o, r)
			);
		case 7:
			return ht(e, t, t.pendingProps, r), t.child;
		case 8:
			return ht(e, t, t.pendingProps.children, r), t.child;
		case 12:
			return ht(e, t, t.pendingProps.children, r), t.child;
		case 10:
			e: {
				if (
					((n = t.type._context),
					(o = t.pendingProps),
					(a = t.memoizedProps),
					(i = o.value),
					Pe(sl, n._currentValue),
					(n._currentValue = i),
					a !== null)
				)
					if (hr(a.value, i)) {
						if (a.children === o.children && !$t.current) {
							t = Hr(e, t, r);
							break e;
						}
					} else
						for (a = t.child, a !== null && (a.return = t); a !== null; ) {
							var s = a.dependencies;
							if (s !== null) {
								i = a.child;
								for (var l = s.firstContext; l !== null; ) {
									if (l.context === n) {
										if (a.tag === 1) {
											(l = Or(-1, r & -r)), (l.tag = 2);
											var u = a.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (l.next = l)
													: ((l.next = c.next), (c.next = l)),
													(u.pending = l);
											}
										}
										(a.lanes |= r),
											(l = a.alternate),
											l !== null && (l.lanes |= r),
											Ed(a.return, r, t),
											(s.lanes |= r);
										break;
									}
									l = l.next;
								}
							} else if (a.tag === 10) i = a.type === t.type ? null : a.child;
							else if (a.tag === 18) {
								if (((i = a.return), i === null)) throw Error(Z(341));
								(i.lanes |= r),
									(s = i.alternate),
									s !== null && (s.lanes |= r),
									Ed(i, r, t),
									(i = a.sibling);
							} else i = a.child;
							if (i !== null) i.return = a;
							else
								for (i = a; i !== null; ) {
									if (i === t) {
										i = null;
										break;
									}
									if (((a = i.sibling), a !== null)) {
										(a.return = i.return), (i = a);
										break;
									}
									i = i.return;
								}
							a = i;
						}
				ht(e, t, o.children, r), (t = t.child);
			}
			return t;
		case 9:
			return (
				(o = t.type),
				(n = t.pendingProps.children),
				zo(t, r),
				(o = qt(o)),
				(n = n(o)),
				(t.flags |= 1),
				ht(e, t, n, r),
				t.child
			);
		case 14:
			return (
				(n = t.type),
				(o = lr(n, t.pendingProps)),
				(o = lr(n.type, o)),
				Fh(e, t, n, o, r)
			);
		case 15:
			return q1(e, t, t.type, t.pendingProps, r);
		case 17:
			return (
				(n = t.type),
				(o = t.pendingProps),
				(o = t.elementType === n ? o : lr(n, o)),
				Ls(e, t),
				(t.tag = 1),
				Ct(n) ? ((e = !0), ol(t)) : (e = !1),
				zo(t, r),
				E1(t, n, o),
				Td(t, n, o, r),
				Dd(null, t, n, !0, e, r)
			);
		case 19:
			return rb(e, t, r);
		case 22:
			return Q1(e, t, r);
	}
	throw Error(Z(156, t.tag));
};
function yb(e, t) {
	return Hy(e, t);
}
function t3(e, t, r, n) {
	(this.tag = e),
		(this.key = r),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = n),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Gt(e, t, r, n) {
	return new t3(e, t, r, n);
}
function Cp(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function r3(e) {
	if (typeof e == "function") return Cp(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Hf)) return 11;
		if (e === Wf) return 14;
	}
	return 2;
}
function gn(e, t) {
	var r = e.alternate;
	return (
		r === null
			? ((r = Gt(e.tag, t, e.key, e.mode)),
			  (r.elementType = e.elementType),
			  (r.type = e.type),
			  (r.stateNode = e.stateNode),
			  (r.alternate = e),
			  (e.alternate = r))
			: ((r.pendingProps = t),
			  (r.type = e.type),
			  (r.flags = 0),
			  (r.subtreeFlags = 0),
			  (r.deletions = null)),
		(r.flags = e.flags & 14680064),
		(r.childLanes = e.childLanes),
		(r.lanes = e.lanes),
		(r.child = e.child),
		(r.memoizedProps = e.memoizedProps),
		(r.memoizedState = e.memoizedState),
		(r.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(r.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(r.sibling = e.sibling),
		(r.index = e.index),
		(r.ref = e.ref),
		r
	);
}
function Ns(e, t, r, n, o, a) {
	var i = 2;
	if (((n = e), typeof e == "function")) Cp(e) && (i = 1);
	else if (typeof e == "string") i = 5;
	else
		e: switch (e) {
			case bo:
				return Gn(r.children, o, a, t);
			case Kf:
				(i = 8), (o |= 8);
				break;
			case Qc:
				return (
					(e = Gt(12, r, t, o | 2)), (e.elementType = Qc), (e.lanes = a), e
				);
			case Jc:
				return (e = Gt(13, r, t, o)), (e.elementType = Jc), (e.lanes = a), e;
			case ed:
				return (e = Gt(19, r, t, o)), (e.elementType = ed), (e.lanes = a), e;
			case ky:
				return su(r, o, a, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case Cy:
							i = 10;
							break e;
						case Ey:
							i = 9;
							break e;
						case Hf:
							i = 11;
							break e;
						case Wf:
							i = 14;
							break e;
						case en:
							(i = 16), (n = null);
							break e;
					}
				throw Error(Z(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = Gt(i, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = a), t
	);
}
function Gn(e, t, r, n) {
	return (e = Gt(7, e, n, t)), (e.lanes = r), e;
}
function su(e, t, r, n) {
	return (
		(e = Gt(22, e, n, t)),
		(e.elementType = ky),
		(e.lanes = r),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function uc(e, t, r) {
	return (e = Gt(6, e, null, t)), (e.lanes = r), e;
}
function cc(e, t, r) {
	return (
		(t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = r),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function n3(e, t, r, n, o) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Hu(0)),
		(this.expirationTimes = Hu(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Hu(0)),
		(this.identifierPrefix = n),
		(this.onRecoverableError = o),
		(this.mutableSourceEagerHydrationData = null);
}
function Ep(e, t, r, n, o, a, i, s, l) {
	return (
		(e = new n3(e, t, r, s, l)),
		t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
		(a = Gt(3, null, null, t)),
		(e.current = a),
		(a.stateNode = e),
		(a.memoizedState = {
			element: n,
			isDehydrated: r,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		up(a),
		e
	);
}
function o3(e, t, r) {
	var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: yo,
		key: n == null ? null : "" + n,
		children: e,
		containerInfo: t,
		implementation: r,
	};
}
function bb(e) {
	if (!e) return Sn;
	e = e._reactInternals;
	e: {
		if (oo(e) !== e || e.tag !== 1) throw Error(Z(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Ct(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(Z(171));
	}
	if (e.tag === 1) {
		var r = e.type;
		if (Ct(r)) return y1(e, r, t);
	}
	return t;
}
function xb(e, t, r, n, o, a, i, s, l) {
	return (
		(e = Ep(r, n, !0, e, o, a, i, s, l)),
		(e.context = bb(null)),
		(r = e.current),
		(n = mt()),
		(o = mn(r)),
		(a = Or(n, o)),
		(a.callback = t ?? null),
		pn(r, a, o),
		(e.current.lanes = o),
		ki(e, o, n),
		Et(e, n),
		e
	);
}
function lu(e, t, r, n) {
	var o = t.current,
		a = mt(),
		i = mn(o);
	return (
		(r = bb(r)),
		t.context === null ? (t.context = r) : (t.pendingContext = r),
		(t = Or(a, i)),
		(t.payload = { element: e }),
		(n = n === void 0 ? null : n),
		n !== null && (t.callback = n),
		(e = pn(o, t, i)),
		e !== null && (pr(e, o, i, a), Is(e, o, i)),
		i
	);
}
function vl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Gh(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var r = e.retryLane;
		e.retryLane = r !== 0 && r < t ? r : t;
	}
}
function kp(e, t) {
	Gh(e, t), (e = e.alternate) && Gh(e, t);
}
function a3() {
	return null;
}
var wb =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function Tp(e) {
	this._internalRoot = e;
}
uu.prototype.render = Tp.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(Z(409));
	lu(e, t, null, null);
};
uu.prototype.unmount = Tp.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		eo(function () {
			lu(null, e, null, null);
		}),
			(t[Br] = null);
	}
};
function uu(e) {
	this._internalRoot = e;
}
uu.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = qy();
		e = { blockedOn: null, target: e, priority: t };
		for (var r = 0; r < nn.length && t !== 0 && t < nn[r].priority; r++);
		nn.splice(r, 0, e), r === 0 && Jy(e);
	}
};
function Mp(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function cu(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Yh() {}
function i3(e, t, r, n, o) {
	if (o) {
		if (typeof n == "function") {
			var a = n;
			n = function () {
				var u = vl(i);
				a.call(u);
			};
		}
		var i = xb(t, n, e, 0, null, !1, !1, "", Yh);
		return (
			(e._reactRootContainer = i),
			(e[Br] = i.current),
			ui(e.nodeType === 8 ? e.parentNode : e),
			eo(),
			i
		);
	}
	for (; (o = e.lastChild); ) e.removeChild(o);
	if (typeof n == "function") {
		var s = n;
		n = function () {
			var u = vl(l);
			s.call(u);
		};
	}
	var l = Ep(e, 0, !1, null, null, !1, !1, "", Yh);
	return (
		(e._reactRootContainer = l),
		(e[Br] = l.current),
		ui(e.nodeType === 8 ? e.parentNode : e),
		eo(function () {
			lu(t, l, r, n);
		}),
		l
	);
}
function du(e, t, r, n, o) {
	var a = r._reactRootContainer;
	if (a) {
		var i = a;
		if (typeof o == "function") {
			var s = o;
			o = function () {
				var l = vl(i);
				s.call(l);
			};
		}
		lu(t, i, e, o);
	} else i = i3(r, t, e, o, n);
	return vl(i);
}
Yy = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var r = La(t.pendingLanes);
				r !== 0 &&
					(Gf(t, r | 1), Et(t, _e()), !(pe & 6) && ((Qo = _e() + 500), An()));
			}
			break;
		case 13:
			eo(function () {
				var n = Kr(e, 1);
				if (n !== null) {
					var o = mt();
					pr(n, e, 1, o);
				}
			}),
				kp(e, 1);
	}
};
Yf = function (e) {
	if (e.tag === 13) {
		var t = Kr(e, 134217728);
		if (t !== null) {
			var r = mt();
			pr(t, e, 134217728, r);
		}
		kp(e, 134217728);
	}
};
Xy = function (e) {
	if (e.tag === 13) {
		var t = mn(e),
			r = Kr(e, t);
		if (r !== null) {
			var n = mt();
			pr(r, e, t, n);
		}
		kp(e, t);
	}
};
qy = function () {
	return ye;
};
Qy = function (e, t) {
	var r = ye;
	try {
		return (ye = e), t();
	} finally {
		ye = r;
	}
};
cd = function (e, t, r) {
	switch (t) {
		case "input":
			if ((nd(e, r), (t = r.name), r.type === "radio" && t != null)) {
				for (r = e; r.parentNode; ) r = r.parentNode;
				for (
					r = r.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]',
					),
						t = 0;
					t < r.length;
					t++
				) {
					var n = r[t];
					if (n !== e && n.form === e.form) {
						var o = tu(n);
						if (!o) throw Error(Z(90));
						My(n), nd(n, o);
					}
				}
			}
			break;
		case "textarea":
			Dy(e, r);
			break;
		case "select":
			(t = r.value), t != null && Oo(e, !!r.multiple, t, !1);
	}
};
Ny = Sp;
jy = eo;
var s3 = { usingClientEntryPoint: !1, Events: [Mi, Po, tu, Fy, Oy, Sp] },
	Pa = {
		findFiberByHostInstance: zn,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	l3 = {
		bundleType: Pa.bundleType,
		version: Pa.version,
		rendererPackageName: Pa.rendererPackageName,
		rendererConfig: Pa.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Yr.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = By(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Pa.findFiberByHostInstance || a3,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!ss.isDisabled && ss.supportsFiber)
		try {
			(ql = ss.inject(l3)), (Sr = ss);
		} catch {}
}
Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s3;
Rt.createPortal = function (e, t) {
	var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Mp(t)) throw Error(Z(200));
	return o3(e, t, null, r);
};
Rt.createRoot = function (e, t) {
	if (!Mp(e)) throw Error(Z(299));
	var r = !1,
		n = "",
		o = wb;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (r = !0),
			t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
		(t = Ep(e, 1, !1, null, null, r, !1, n, o)),
		(e[Br] = t.current),
		ui(e.nodeType === 8 ? e.parentNode : e),
		new Tp(t)
	);
};
Rt.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(Z(188))
			: ((e = Object.keys(e).join(",")), Error(Z(268, e)));
	return (e = By(t)), (e = e === null ? null : e.stateNode), e;
};
Rt.flushSync = function (e) {
	return eo(e);
};
Rt.hydrate = function (e, t, r) {
	if (!cu(t)) throw Error(Z(200));
	return du(null, e, t, !0, r);
};
Rt.hydrateRoot = function (e, t, r) {
	if (!Mp(e)) throw Error(Z(405));
	var n = (r != null && r.hydratedSources) || null,
		o = !1,
		a = "",
		i = wb;
	if (
		(r != null &&
			(r.unstable_strictMode === !0 && (o = !0),
			r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
			r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
		(t = xb(t, null, e, 1, r ?? null, o, !1, a, i)),
		(e[Br] = t.current),
		ui(e),
		n)
	)
		for (e = 0; e < n.length; e++)
			(r = n[e]),
				(o = r._getVersion),
				(o = o(r._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [r, o])
					: t.mutableSourceEagerHydrationData.push(r, o);
	return new uu(t);
};
Rt.render = function (e, t, r) {
	if (!cu(t)) throw Error(Z(200));
	return du(null, e, t, !1, r);
};
Rt.unmountComponentAtNode = function (e) {
	if (!cu(e)) throw Error(Z(40));
	return e._reactRootContainer
		? (eo(function () {
				du(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[Br] = null);
				});
		  }),
		  !0)
		: !1;
};
Rt.unstable_batchedUpdates = Sp;
Rt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
	if (!cu(r)) throw Error(Z(200));
	if (e == null || e._reactInternals === void 0) throw Error(Z(38));
	return du(e, t, r, !1, n);
};
Rt.version = "18.2.0-next-9e3b772b8-20220608";
function Sb() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sb);
		} catch (e) {
			console.error(e);
		}
}
Sb(), (xy.exports = Rt);
var Ap = xy.exports;
const Pb = Lf(Ap);
var Xh = Ap;
(Xc.createRoot = Xh.createRoot), (Xc.hydrateRoot = Xh.hydrateRoot);
function ao(e = {}) {
	const {
			strict: t = !0,
			errorMessage:
				r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
			name: n,
		} = e,
		o = h.createContext(void 0);
	o.displayName = n;
	function a() {
		var i;
		const s = h.useContext(o);
		if (!s && t) {
			const l = new Error(r);
			throw (
				((l.name = "ContextError"),
				(i = Error.captureStackTrace) == null || i.call(Error, l, a),
				l)
			);
		}
		return s;
	}
	return [o.Provider, a, o];
}
function $b(e) {
	return {
		UNSAFE_getDOMNode() {
			return e.current;
		},
	};
}
function u3(e, t = e) {
	return {
		...$b(e),
		focus() {
			t.current && t.current.focus();
		},
	};
}
function ke(e) {
	const t = h.useRef(null);
	return h.useImperativeHandle(e, () => t.current), t;
}
function c3(e, t) {
	const r = h.useRef(null);
	return h.useImperativeHandle(e, () => u3(r, t)), r;
}
var Dp = (...e) => {
	let t = " ";
	for (const r of e)
		if (typeof r == "string" && r.length > 0) {
			t = r;
			break;
		}
	return t;
};
function Cb(e) {
	var t,
		r,
		n = "";
	if (typeof e == "string" || typeof e == "number") n += e;
	else if (typeof e == "object")
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++)
				e[t] && (r = Cb(e[t])) && (n && (n += " "), (n += r));
		else for (t in e) e[t] && (n && (n += " "), (n += t));
	return n;
}
function Q(...e) {
	for (var t = 0, r, n, o = ""; t < e.length; )
		(r = e[t++]) && (n = Cb(r)) && (o && (o += " "), (o += n));
	return o;
}
var d3 = {},
	qh = {};
function Kd(e, t, ...r) {
	var n;
	const a = `[Next UI]${t ? ` [${t}]` : " "}: ${e}`;
	if (
		!(typeof console > "u") &&
		!qh[a] &&
		((qh[a] = !0),
		((n = process == null ? void 0 : d3) == null ? void 0 : n.NODE_ENV) !==
			"production")
	)
		return console.warn(a, r);
}
var f3 = e => e.charAt(0).toUpperCase() + e.slice(1);
function p3(e) {
	return `${e}-${Math.floor(Math.random() * 1e6)}`;
}
function Eb(e) {
	for (const t in e) t.startsWith("on") && delete e[t];
	return e;
}
function bt(e) {
	if (!e || typeof e != "object") return "";
	try {
		return JSON.stringify(e);
	} catch {
		return "";
	}
}
function h3(e, t, r) {
	return Math.min(Math.max(e, t), r);
}
var m3 = !1;
function Ip(e) {
	return Array.isArray(e);
}
function g3(e) {
	return Ip(e) && e.length === 0;
}
function kb(e) {
	const t = typeof e;
	return e != null && (t === "object" || t === "function") && !Ip(e);
}
function v3(e) {
	return kb(e) && Object.keys(e).length === 0;
}
function y3(e) {
	return Ip(e) ? g3(e) : kb(e) ? v3(e) : e == null || e === "";
}
function b3(e) {
	return typeof e == "function";
}
var H = e => (e ? "true" : void 0);
function x3(e, t) {
	if (e != null) {
		if (b3(e)) {
			e(t);
			return;
		}
		try {
			e.current = t;
		} catch {
			throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
		}
	}
}
function yl(...e) {
	return t => {
		e.forEach(r => x3(r, t));
	};
}
var w3 = Object.create,
	Tb = Object.defineProperty,
	S3 = Object.getOwnPropertyDescriptor,
	Mb = Object.getOwnPropertyNames,
	P3 = Object.getPrototypeOf,
	$3 = Object.prototype.hasOwnProperty,
	Ab = (e, t) =>
		function () {
			return t || (0, e[Mb(e)[0]])((t = { exports: {} }).exports, t), t.exports;
		},
	C3 = (e, t, r, n) => {
		if ((t && typeof t == "object") || typeof t == "function")
			for (let o of Mb(t))
				!$3.call(e, o) &&
					o !== r &&
					Tb(e, o, {
						get: () => t[o],
						enumerable: !(n = S3(t, o)) || n.enumerable,
					});
		return e;
	},
	Db = (e, t, r) => (
		(r = e != null ? w3(P3(e)) : {}),
		C3(
			!e || !e.__esModule ? Tb(r, "default", { value: e, enumerable: !0 }) : r,
			e,
		)
	),
	E3 = Ab({
		"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(
			e,
		) {
			var t = Symbol.for("react.element"),
				r = Symbol.for("react.portal"),
				n = Symbol.for("react.fragment"),
				o = Symbol.for("react.strict_mode"),
				a = Symbol.for("react.profiler"),
				i = Symbol.for("react.provider"),
				s = Symbol.for("react.context"),
				l = Symbol.for("react.forward_ref"),
				u = Symbol.for("react.suspense"),
				c = Symbol.for("react.memo"),
				d = Symbol.for("react.lazy"),
				f = Symbol.iterator;
			function p($) {
				return $ === null || typeof $ != "object"
					? null
					: (($ = (f && $[f]) || $["@@iterator"]),
					  typeof $ == "function" ? $ : null);
			}
			var g = {
					isMounted: function () {
						return !1;
					},
					enqueueForceUpdate: function () {},
					enqueueReplaceState: function () {},
					enqueueSetState: function () {},
				},
				b = Object.assign,
				x = {};
			function m($, O, B) {
				(this.props = $),
					(this.context = O),
					(this.refs = x),
					(this.updater = B || g);
			}
			(m.prototype.isReactComponent = {}),
				(m.prototype.setState = function ($, O) {
					if (typeof $ != "object" && typeof $ != "function" && $ != null)
						throw Error(
							"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
						);
					this.updater.enqueueSetState(this, $, O, "setState");
				}),
				(m.prototype.forceUpdate = function ($) {
					this.updater.enqueueForceUpdate(this, $, "forceUpdate");
				});
			function v() {}
			v.prototype = m.prototype;
			function y($, O, B) {
				(this.props = $),
					(this.context = O),
					(this.refs = x),
					(this.updater = B || g);
			}
			var P = (y.prototype = new v());
			(P.constructor = y), b(P, m.prototype), (P.isPureReactComponent = !0);
			var C = Array.isArray,
				E = Object.prototype.hasOwnProperty,
				D = { current: null },
				w = { key: !0, ref: !0, __self: !0, __source: !0 };
			function V($, O, B) {
				var K,
					W = {},
					G = null,
					X = null;
				if (O != null)
					for (K in (O.ref !== void 0 && (X = O.ref),
					O.key !== void 0 && (G = "" + O.key),
					O))
						E.call(O, K) && !w.hasOwnProperty(K) && (W[K] = O[K]);
				var q = arguments.length - 2;
				if (q === 1) W.children = B;
				else if (1 < q) {
					for (var re = Array(q), Y = 0; Y < q; Y++) re[Y] = arguments[Y + 2];
					W.children = re;
				}
				if ($ && $.defaultProps)
					for (K in ((q = $.defaultProps), q)) W[K] === void 0 && (W[K] = q[K]);
				return {
					$$typeof: t,
					type: $,
					key: G,
					ref: X,
					props: W,
					_owner: D.current,
				};
			}
			function M($, O) {
				return {
					$$typeof: t,
					type: $.type,
					key: O,
					ref: $.ref,
					props: $.props,
					_owner: $._owner,
				};
			}
			function F($) {
				return typeof $ == "object" && $ !== null && $.$$typeof === t;
			}
			function L($) {
				var O = { "=": "=0", ":": "=2" };
				return (
					"$" +
					$.replace(/[=:]/g, function (B) {
						return O[B];
					})
				);
			}
			var T = /\/+/g;
			function A($, O) {
				return typeof $ == "object" && $ !== null && $.key != null
					? L("" + $.key)
					: O.toString(36);
			}
			function _($, O, B, K, W) {
				var G = typeof $;
				(G === "undefined" || G === "boolean") && ($ = null);
				var X = !1;
				if ($ === null) X = !0;
				else
					switch (G) {
						case "string":
						case "number":
							X = !0;
							break;
						case "object":
							switch ($.$$typeof) {
								case t:
								case r:
									X = !0;
							}
					}
				if (X)
					return (
						(X = $),
						(W = W(X)),
						($ = K === "" ? "." + A(X, 0) : K),
						C(W)
							? ((B = ""),
							  $ != null && (B = $.replace(T, "$&/") + "/"),
							  _(W, O, B, "", function (Y) {
									return Y;
							  }))
							: W != null &&
							  (F(W) &&
									(W = M(
										W,
										B +
											(!W.key || (X && X.key === W.key)
												? ""
												: ("" + W.key).replace(T, "$&/") + "/") +
											$,
									)),
							  O.push(W)),
						1
					);
				if (((X = 0), (K = K === "" ? "." : K + ":"), C($)))
					for (var q = 0; q < $.length; q++) {
						G = $[q];
						var re = K + A(G, q);
						X += _(G, O, B, re, W);
					}
				else if (((re = p($)), typeof re == "function"))
					for ($ = re.call($), q = 0; !(G = $.next()).done; )
						(G = G.value), (re = K + A(G, q++)), (X += _(G, O, B, re, W));
				else if (G === "object")
					throw (
						((O = String($)),
						Error(
							"Objects are not valid as a React child (found: " +
								(O === "[object Object]"
									? "object with keys {" + Object.keys($).join(", ") + "}"
									: O) +
								"). If you meant to render a collection of children, use an array instead.",
						))
					);
				return X;
			}
			function N($, O, B) {
				if ($ == null) return $;
				var K = [],
					W = 0;
				return (
					_($, K, "", "", function (G) {
						return O.call(B, G, W++);
					}),
					K
				);
			}
			function R($) {
				if ($._status === -1) {
					var O = $._result;
					(O = O()),
						O.then(
							function (B) {
								($._status === 0 || $._status === -1) &&
									(($._status = 1), ($._result = B));
							},
							function (B) {
								($._status === 0 || $._status === -1) &&
									(($._status = 2), ($._result = B));
							},
						),
						$._status === -1 && (($._status = 0), ($._result = O));
				}
				if ($._status === 1) return $._result.default;
				throw $._result;
			}
			var j = { current: null },
				z = { transition: null },
				I = {
					ReactCurrentDispatcher: j,
					ReactCurrentBatchConfig: z,
					ReactCurrentOwner: D,
				};
			(e.Children = {
				map: N,
				forEach: function ($, O, B) {
					N(
						$,
						function () {
							O.apply(this, arguments);
						},
						B,
					);
				},
				count: function ($) {
					var O = 0;
					return (
						N($, function () {
							O++;
						}),
						O
					);
				},
				toArray: function ($) {
					return (
						N($, function (O) {
							return O;
						}) || []
					);
				},
				only: function ($) {
					if (!F($))
						throw Error(
							"React.Children.only expected to receive a single React element child.",
						);
					return $;
				},
			}),
				(e.Component = m),
				(e.Fragment = n),
				(e.Profiler = a),
				(e.PureComponent = y),
				(e.StrictMode = o),
				(e.Suspense = u),
				(e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
				(e.cloneElement = function ($, O, B) {
					if ($ == null)
						throw Error(
							"React.cloneElement(...): The argument must be a React element, but you passed " +
								$ +
								".",
						);
					var K = b({}, $.props),
						W = $.key,
						G = $.ref,
						X = $._owner;
					if (O != null) {
						if (
							(O.ref !== void 0 && ((G = O.ref), (X = D.current)),
							O.key !== void 0 && (W = "" + O.key),
							$.type && $.type.defaultProps)
						)
							var q = $.type.defaultProps;
						for (re in O)
							E.call(O, re) &&
								!w.hasOwnProperty(re) &&
								(K[re] = O[re] === void 0 && q !== void 0 ? q[re] : O[re]);
					}
					var re = arguments.length - 2;
					if (re === 1) K.children = B;
					else if (1 < re) {
						q = Array(re);
						for (var Y = 0; Y < re; Y++) q[Y] = arguments[Y + 2];
						K.children = q;
					}
					return {
						$$typeof: t,
						type: $.type,
						key: W,
						ref: G,
						props: K,
						_owner: X,
					};
				}),
				(e.createContext = function ($) {
					return (
						($ = {
							$$typeof: s,
							_currentValue: $,
							_currentValue2: $,
							_threadCount: 0,
							Provider: null,
							Consumer: null,
							_defaultValue: null,
							_globalName: null,
						}),
						($.Provider = { $$typeof: i, _context: $ }),
						($.Consumer = $)
					);
				}),
				(e.createElement = V),
				(e.createFactory = function ($) {
					var O = V.bind(null, $);
					return (O.type = $), O;
				}),
				(e.createRef = function () {
					return { current: null };
				}),
				(e.forwardRef = function ($) {
					return { $$typeof: l, render: $ };
				}),
				(e.isValidElement = F),
				(e.lazy = function ($) {
					return {
						$$typeof: d,
						_payload: { _status: -1, _result: $ },
						_init: R,
					};
				}),
				(e.memo = function ($, O) {
					return { $$typeof: c, type: $, compare: O === void 0 ? null : O };
				}),
				(e.startTransition = function ($) {
					var O = z.transition;
					z.transition = {};
					try {
						$();
					} finally {
						z.transition = O;
					}
				}),
				(e.unstable_act = function () {
					throw Error(
						"act(...) is not supported in production builds of React.",
					);
				}),
				(e.useCallback = function ($, O) {
					return j.current.useCallback($, O);
				}),
				(e.useContext = function ($) {
					return j.current.useContext($);
				}),
				(e.useDebugValue = function () {}),
				(e.useDeferredValue = function ($) {
					return j.current.useDeferredValue($);
				}),
				(e.useEffect = function ($, O) {
					return j.current.useEffect($, O);
				}),
				(e.useId = function () {
					return j.current.useId();
				}),
				(e.useImperativeHandle = function ($, O, B) {
					return j.current.useImperativeHandle($, O, B);
				}),
				(e.useInsertionEffect = function ($, O) {
					return j.current.useInsertionEffect($, O);
				}),
				(e.useLayoutEffect = function ($, O) {
					return j.current.useLayoutEffect($, O);
				}),
				(e.useMemo = function ($, O) {
					return j.current.useMemo($, O);
				}),
				(e.useReducer = function ($, O, B) {
					return j.current.useReducer($, O, B);
				}),
				(e.useRef = function ($) {
					return j.current.useRef($);
				}),
				(e.useState = function ($) {
					return j.current.useState($);
				}),
				(e.useSyncExternalStore = function ($, O, B) {
					return j.current.useSyncExternalStore($, O, B);
				}),
				(e.useTransition = function () {
					return j.current.useTransition();
				}),
				(e.version = "18.2.0");
		},
	}),
	Ib = Ab({
		"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(
			e,
			t,
		) {
			t.exports = E3();
		},
	});
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qh = Db(Ib()),
	k3 = (e, t) => {
		var r;
		let n = [];
		const o =
				(r = Qh.Children.map(e, i =>
					(0, Qh.isValidElement)(i) && i.type === t ? (n.push(i), null) : i,
				)) == null
					? void 0
					: r.filter(Boolean),
			a = n.length >= 0 ? n : void 0;
		return [o, a];
	},
	T3 = new Set([
		"id",
		"type",
		"style",
		"title",
		"role",
		"tabIndex",
		"htmlFor",
		"width",
		"height",
		"abbr",
		"accept",
		"acceptCharset",
		"accessKey",
		"action",
		"allowFullScreen",
		"allowTransparency",
		"alt",
		"async",
		"autoComplete",
		"autoFocus",
		"autoPlay",
		"cellPadding",
		"cellSpacing",
		"challenge",
		"charset",
		"checked",
		"cite",
		"class",
		"className",
		"cols",
		"colSpan",
		"command",
		"content",
		"contentEditable",
		"contextMenu",
		"controls",
		"coords",
		"crossOrigin",
		"data",
		"dateTime",
		"default",
		"defer",
		"dir",
		"disabled",
		"download",
		"draggable",
		"dropzone",
		"encType",
		"enterKeyHint",
		"for",
		"form",
		"formAction",
		"formEncType",
		"formMethod",
		"formNoValidate",
		"formTarget",
		"frameBorder",
		"headers",
		"hidden",
		"high",
		"href",
		"hrefLang",
		"httpEquiv",
		"icon",
		"inputMode",
		"isMap",
		"itemId",
		"itemProp",
		"itemRef",
		"itemScope",
		"itemType",
		"kind",
		"label",
		"lang",
		"list",
		"loop",
		"manifest",
		"max",
		"maxLength",
		"media",
		"mediaGroup",
		"method",
		"min",
		"minLength",
		"multiple",
		"muted",
		"name",
		"noValidate",
		"open",
		"optimum",
		"pattern",
		"ping",
		"placeholder",
		"poster",
		"preload",
		"radioGroup",
		"referrerPolicy",
		"readOnly",
		"rel",
		"required",
		"rows",
		"rowSpan",
		"sandbox",
		"scope",
		"scoped",
		"scrolling",
		"seamless",
		"selected",
		"shape",
		"size",
		"sizes",
		"slot",
		"sortable",
		"span",
		"spellCheck",
		"src",
		"srcDoc",
		"srcSet",
		"start",
		"step",
		"target",
		"translate",
		"typeMustMatch",
		"useMap",
		"value",
		"wmode",
		"wrap",
	]),
	M3 = new Set([
		"onCopy",
		"onCut",
		"onPaste",
		"onLoad",
		"onError",
		"onWheel",
		"onScroll",
		"onCompositionEnd",
		"onCompositionStart",
		"onCompositionUpdate",
		"onKeyDown",
		"onKeyPress",
		"onKeyUp",
		"onFocus",
		"onBlur",
		"onChange",
		"onInput",
		"onSubmit",
		"onClick",
		"onContextMenu",
		"onDoubleClick",
		"onDrag",
		"onDragEnd",
		"onDragEnter",
		"onDragExit",
		"onDragLeave",
		"onDragOver",
		"onDragStart",
		"onDrop",
		"onMouseDown",
		"onMouseEnter",
		"onMouseLeave",
		"onMouseMove",
		"onMouseOut",
		"onMouseOver",
		"onMouseUp",
		"onPointerDown",
		"onPointerEnter",
		"onPointerLeave",
		"onPointerUp",
		"onSelect",
		"onTouchCancel",
		"onTouchEnd",
		"onTouchMove",
		"onTouchStart",
		"onAnimationStart",
		"onAnimationEnd",
		"onAnimationIteration",
		"onTransitionEnd",
	]),
	Jh = /^(data-.*)$/,
	A3 = /^(aria-.*)$/,
	ls = /^(on[A-Z].*)$/;
function rt(e, t = {}) {
	let {
			labelable: r = !0,
			enabled: n = !0,
			propNames: o,
			omitPropNames: a,
			omitEventNames: i,
			omitDataProps: s,
			omitEventProps: l,
		} = t,
		u = {};
	if (!n) return e;
	for (const c in e)
		(a != null && a.has(c)) ||
			(i != null && i.has(c) && ls.test(c)) ||
			(ls.test(c) && !M3.has(c)) ||
			(s && Jh.test(c)) ||
			(l && ls.test(c)) ||
			(((Object.prototype.hasOwnProperty.call(e, c) &&
				(T3.has(c) ||
					(r && A3.test(c)) ||
					(o != null && o.has(c)) ||
					Jh.test(c))) ||
				ls.test(c)) &&
				(u[c] = e[c]));
	return u;
}
var D3 = Db(Ib());
function Hd({ Component: e, props: t, renderCustom: r }) {
	return r && typeof r == "function" ? r(t) : D3.createElement(e, t);
}
var [I3, bR] = ao({ name: "ProviderContext", strict: !1 });
const bl = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
	Vb = k.createContext(bl),
	V3 = k.createContext(!1);
let R3 = !!(
		typeof window < "u" &&
		window.document &&
		window.document.createElement
	),
	dc = new WeakMap();
function L3(e = !1) {
	let t = h.useContext(Vb),
		r = h.useRef(null);
	if (r.current === null && !e) {
		var n, o;
		let a =
			(o = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
			o === void 0 ||
			(n = o.ReactCurrentOwner) === null ||
			n === void 0
				? void 0
				: n.current;
		if (a) {
			let i = dc.get(a);
			i == null
				? dc.set(a, { id: t.current, state: a.memoizedState })
				: a.memoizedState !== i.state && ((t.current = i.id), dc.delete(a));
		}
		r.current = ++t.current;
	}
	return r.current;
}
function F3(e) {
	let t = h.useContext(Vb);
	t === bl &&
		!R3 &&
		console.warn(
			"When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.",
		);
	let r = L3(!!e),
		n = `react-aria${t.prefix}`;
	return e || `${n}-${r}`;
}
function O3(e) {
	let t = k.useId(),
		[r] = h.useState(ca()),
		n = r ? "react-aria" : `react-aria${bl.prefix}`;
	return e || `${n}-${t}`;
}
const N3 = typeof k.useId == "function" ? O3 : F3;
function j3() {
	return !1;
}
function _3() {
	return !0;
}
function z3(e) {
	return () => {};
}
function ca() {
	return typeof k.useSyncExternalStore == "function"
		? k.useSyncExternalStore(z3, j3, _3)
		: h.useContext(V3);
}
const B3 = Symbol.for("react-aria.i18n.locale"),
	K3 = Symbol.for("react-aria.i18n.strings");
let uo;
class fu {
	getStringForLocale(t, r) {
		let o = this.getStringsForLocale(r)[t];
		if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
		return o;
	}
	getStringsForLocale(t) {
		let r = this.strings[t];
		return (
			r ||
				((r = H3(t, this.strings, this.defaultLocale)), (this.strings[t] = r)),
			r
		);
	}
	static getGlobalDictionaryForPackage(t) {
		if (typeof window > "u") return null;
		let r = window[B3];
		if (uo === void 0) {
			let o = window[K3];
			if (!o) return null;
			uo = {};
			for (let a in o) uo[a] = new fu({ [r]: o[a] }, r);
		}
		let n = uo == null ? void 0 : uo[t];
		if (!n)
			throw new Error(
				`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`,
			);
		return n;
	}
	constructor(t, r = "en-US") {
		(this.strings = { ...t }), (this.defaultLocale = r);
	}
}
function H3(e, t, r = "en-US") {
	if (t[e]) return t[e];
	let n = W3(e);
	if (t[n]) return t[n];
	for (let o in t) if (o.startsWith(n + "-")) return t[o];
	return t[r];
}
function W3(e) {
	return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const em = new Map(),
	tm = new Map();
class U3 {
	format(t, r) {
		let n = this.strings.getStringForLocale(t, this.locale);
		return typeof n == "function" ? n(r, this) : n;
	}
	plural(t, r, n = "cardinal") {
		let o = r["=" + t];
		if (o) return typeof o == "function" ? o() : o;
		let a = this.locale + ":" + n,
			i = em.get(a);
		i || ((i = new Intl.PluralRules(this.locale, { type: n })), em.set(a, i));
		let s = i.select(t);
		return (o = r[s] || r.other), typeof o == "function" ? o() : o;
	}
	number(t) {
		let r = tm.get(this.locale);
		return (
			r || ((r = new Intl.NumberFormat(this.locale)), tm.set(this.locale, r)),
			r.format(t)
		);
	}
	select(t, r) {
		let n = t[r] || t.other;
		return typeof n == "function" ? n() : n;
	}
	constructor(t, r) {
		(this.locale = t), (this.strings = r);
	}
}
function Z3(e, t) {
	if (t.has(e))
		throw new TypeError(
			"Cannot initialize the same private elements twice on an object",
		);
}
function Vp(e, t, r) {
	Z3(e, t), t.set(e, r);
}
function fc(e, t) {
	return e - t * Math.floor(e / t);
}
const Rb = 1721426;
function us(e, t, r, n) {
	t = Rp(e, t);
	let o = t - 1,
		a = -2;
	return (
		r <= 2 ? (a = 0) : js(t) && (a = -1),
		Rb -
			1 +
			365 * o +
			Math.floor(o / 4) -
			Math.floor(o / 100) +
			Math.floor(o / 400) +
			Math.floor((367 * r - 362) / 12 + a + n)
	);
}
function js(e) {
	return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Rp(e, t) {
	return e === "BC" ? 1 - t : t;
}
function G3(e) {
	let t = "AD";
	return e <= 0 && ((t = "BC"), (e = 1 - e)), [t, e];
}
const Y3 = {
	standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
};
class pu {
	fromJulianDay(t) {
		let r = t,
			n = r - Rb,
			o = Math.floor(n / 146097),
			a = fc(n, 146097),
			i = Math.floor(a / 36524),
			s = fc(a, 36524),
			l = Math.floor(s / 1461),
			u = fc(s, 1461),
			c = Math.floor(u / 365),
			d = o * 400 + i * 100 + l * 4 + c + (i !== 4 && c !== 4 ? 1 : 0),
			[f, p] = G3(d),
			g = r - us(f, p, 1, 1),
			b = 2;
		r < us(f, p, 3, 1) ? (b = 0) : js(p) && (b = 1);
		let x = Math.floor(((g + b) * 12 + 373) / 367),
			m = r - us(f, p, x, 1) + 1;
		return new ea(f, p, x, m);
	}
	toJulianDay(t) {
		return us(t.era, t.year, t.month, t.day);
	}
	getDaysInMonth(t) {
		return Y3[js(t.year) ? "leapyear" : "standard"][t.month - 1];
	}
	getMonthsInYear(t) {
		return 12;
	}
	getDaysInYear(t) {
		return js(t.year) ? 366 : 365;
	}
	getYearsInEra(t) {
		return 9999;
	}
	getEras() {
		return ["BC", "AD"];
	}
	isInverseEra(t) {
		return t.era === "BC";
	}
	balanceDate(t) {
		t.year <= 0 &&
			((t.era = t.era === "BC" ? "AD" : "BC"), (t.year = 1 - t.year));
	}
	constructor() {
		this.identifier = "gregory";
	}
}
function Lb(e, t) {
	return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function X3(e, t) {
	return rm(e) - rm(t);
}
function rm(e) {
	return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let pc = null;
function Fb() {
	return (
		pc == null && (pc = new Intl.DateTimeFormat().resolvedOptions().timeZone),
		pc
	);
}
function nm(e) {
	e = Lp(e, new pu());
	let t = Rp(e.era, e.year);
	return Ob(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Ob(e, t, r, n, o, a, i) {
	let s = new Date();
	return s.setUTCHours(n, o, a, i), s.setUTCFullYear(e, t - 1, r), s.getTime();
}
function om(e, t) {
	if (t === "UTC") return 0;
	if (e > 0 && t === Fb()) return new Date(e).getTimezoneOffset() * -6e4;
	let { year: r, month: n, day: o, hour: a, minute: i, second: s } = Nb(e, t);
	return Ob(r, n, o, a, i, s, 0) - Math.floor(e / 1e3) * 1e3;
}
const am = new Map();
function Nb(e, t) {
	let r = am.get(t);
	r ||
		((r = new Intl.DateTimeFormat("en-US", {
			timeZone: t,
			hour12: !1,
			era: "short",
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		})),
		am.set(t, r));
	let n = r.formatToParts(new Date(e)),
		o = {};
	for (let a of n) a.type !== "literal" && (o[a.type] = a.value);
	return {
		year: o.era === "BC" || o.era === "B" ? -o.year + 1 : +o.year,
		month: +o.month,
		day: +o.day,
		hour: o.hour === "24" ? 0 : +o.hour,
		minute: +o.minute,
		second: +o.second,
	};
}
const im = 864e5;
function q3(e, t, r, n) {
	return (r === n ? [r] : [r, n]).filter(a => Q3(e, t, a));
}
function Q3(e, t, r) {
	let n = Nb(r, t);
	return (
		e.year === n.year &&
		e.month === n.month &&
		e.day === n.day &&
		e.hour === n.hour &&
		e.minute === n.minute &&
		e.second === n.second
	);
}
function J3(e, t, r = "compatible") {
	let n = _b(e);
	if (t === "UTC") return nm(n);
	if (t === Fb() && r === "compatible") {
		n = Lp(n, new pu());
		let l = new Date(),
			u = Rp(n.era, n.year);
		return (
			l.setFullYear(u, n.month - 1, n.day),
			l.setHours(n.hour, n.minute, n.second, n.millisecond),
			l.getTime()
		);
	}
	let o = nm(n),
		a = om(o - im, t),
		i = om(o + im, t),
		s = q3(n, t, o - a, o - i);
	if (s.length === 1) return s[0];
	if (s.length > 1)
		switch (r) {
			case "compatible":
			case "earlier":
				return s[0];
			case "later":
				return s[s.length - 1];
			case "reject":
				throw new RangeError("Multiple possible absolute times found");
		}
	switch (r) {
		case "earlier":
			return Math.min(o - a, o - i);
		case "compatible":
		case "later":
			return Math.max(o - a, o - i);
		case "reject":
			throw new RangeError("No such absolute time found");
	}
}
function jb(e, t, r = "compatible") {
	return new Date(J3(e, t, r));
}
function _b(e, t) {
	let r = 0,
		n = 0,
		o = 0,
		a = 0;
	if ("timeZone" in e) ({ hour: r, minute: n, second: o, millisecond: a } = e);
	else if ("hour" in e && !t) return e;
	return (
		t && ({ hour: r, minute: n, second: o, millisecond: a } = t),
		new xl(e.calendar, e.era, e.year, e.month, e.day, r, n, o, a)
	);
}
function Lp(e, t) {
	if (e.calendar.identifier === t.identifier) return e;
	let r = t.fromJulianDay(e.calendar.toJulianDay(e)),
		n = e.copy();
	return (
		(n.calendar = t),
		(n.era = r.era),
		(n.year = r.year),
		(n.month = r.month),
		(n.day = r.day),
		Jo(n),
		n
	);
}
function Fp(e, t) {
	let r = e.copy(),
		n = "hour" in r ? a5(r, t) : 0;
	Wd(r, t.years || 0),
		r.calendar.balanceYearMonth && r.calendar.balanceYearMonth(r, e),
		(r.month += t.months || 0),
		Ud(r),
		zb(r),
		(r.day += (t.weeks || 0) * 7),
		(r.day += t.days || 0),
		(r.day += n),
		e5(r),
		r.calendar.balanceDate && r.calendar.balanceDate(r),
		r.year < 1 && ((r.year = 1), (r.month = 1), (r.day = 1));
	let o = r.calendar.getYearsInEra(r);
	if (r.year > o) {
		var a, i;
		let l =
			(a = (i = r.calendar).isInverseEra) === null || a === void 0
				? void 0
				: a.call(i, r);
		(r.year = o),
			(r.month = l ? 1 : r.calendar.getMonthsInYear(r)),
			(r.day = l ? 1 : r.calendar.getDaysInMonth(r));
	}
	r.month < 1 && ((r.month = 1), (r.day = 1));
	let s = r.calendar.getMonthsInYear(r);
	return (
		r.month > s && ((r.month = s), (r.day = r.calendar.getDaysInMonth(r))),
		(r.day = Math.max(1, Math.min(r.calendar.getDaysInMonth(r), r.day))),
		r
	);
}
function Wd(e, t) {
	var r, n;
	!((r = (n = e.calendar).isInverseEra) === null || r === void 0) &&
		r.call(n, e) &&
		(t = -t),
		(e.year += t);
}
function Ud(e) {
	for (; e.month < 1; ) Wd(e, -1), (e.month += e.calendar.getMonthsInYear(e));
	let t = 0;
	for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
		(e.month -= t), Wd(e, 1);
}
function e5(e) {
	for (; e.day < 1; ) e.month--, Ud(e), (e.day += e.calendar.getDaysInMonth(e));
	for (; e.day > e.calendar.getDaysInMonth(e); )
		(e.day -= e.calendar.getDaysInMonth(e)), e.month++, Ud(e);
}
function zb(e) {
	(e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))),
		(e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function Jo(e) {
	e.calendar.constrainDate && e.calendar.constrainDate(e),
		(e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))),
		zb(e);
}
function t5(e) {
	let t = {};
	for (let r in e) typeof e[r] == "number" && (t[r] = -e[r]);
	return t;
}
function Bb(e, t) {
	return Fp(e, t5(t));
}
function Kb(e, t) {
	let r = e.copy();
	return (
		t.era != null && (r.era = t.era),
		t.year != null && (r.year = t.year),
		t.month != null && (r.month = t.month),
		t.day != null && (r.day = t.day),
		Jo(r),
		r
	);
}
function r5(e, t) {
	let r = e.copy();
	return (
		t.hour != null && (r.hour = t.hour),
		t.minute != null && (r.minute = t.minute),
		t.second != null && (r.second = t.second),
		t.millisecond != null && (r.millisecond = t.millisecond),
		o5(r),
		r
	);
}
function n5(e) {
	(e.second += Math.floor(e.millisecond / 1e3)),
		(e.millisecond = cs(e.millisecond, 1e3)),
		(e.minute += Math.floor(e.second / 60)),
		(e.second = cs(e.second, 60)),
		(e.hour += Math.floor(e.minute / 60)),
		(e.minute = cs(e.minute, 60));
	let t = Math.floor(e.hour / 24);
	return (e.hour = cs(e.hour, 24)), t;
}
function o5(e) {
	(e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3))),
		(e.second = Math.max(0, Math.min(e.second, 59))),
		(e.minute = Math.max(0, Math.min(e.minute, 59))),
		(e.hour = Math.max(0, Math.min(e.hour, 23)));
}
function cs(e, t) {
	let r = e % t;
	return r < 0 && (r += t), r;
}
function a5(e, t) {
	return (
		(e.hour += t.hours || 0),
		(e.minute += t.minutes || 0),
		(e.second += t.seconds || 0),
		(e.millisecond += t.milliseconds || 0),
		n5(e)
	);
}
function Hb(e, t, r, n) {
	let o = e.copy();
	switch (t) {
		case "era": {
			let s = e.calendar.getEras(),
				l = s.indexOf(e.era);
			if (l < 0) throw new Error("Invalid era: " + e.era);
			(l = ln(l, r, 0, s.length - 1, n == null ? void 0 : n.round)),
				(o.era = s[l]),
				Jo(o);
			break;
		}
		case "year":
			var a, i;
			!((a = (i = o.calendar).isInverseEra) === null || a === void 0) &&
				a.call(i, o) &&
				(r = -r),
				(o.year = ln(e.year, r, -1 / 0, 9999, n == null ? void 0 : n.round)),
				o.year === -1 / 0 && (o.year = 1),
				o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
			break;
		case "month":
			o.month = ln(
				e.month,
				r,
				1,
				e.calendar.getMonthsInYear(e),
				n == null ? void 0 : n.round,
			);
			break;
		case "day":
			o.day = ln(
				e.day,
				r,
				1,
				e.calendar.getDaysInMonth(e),
				n == null ? void 0 : n.round,
			);
			break;
		default:
			throw new Error("Unsupported field " + t);
	}
	return e.calendar.balanceDate && e.calendar.balanceDate(o), Jo(o), o;
}
function i5(e, t, r, n) {
	let o = e.copy();
	switch (t) {
		case "hour": {
			let a = e.hour,
				i = 0,
				s = 23;
			if ((n == null ? void 0 : n.hourCycle) === 12) {
				let l = a >= 12;
				(i = l ? 12 : 0), (s = l ? 23 : 11);
			}
			o.hour = ln(a, r, i, s, n == null ? void 0 : n.round);
			break;
		}
		case "minute":
			o.minute = ln(e.minute, r, 0, 59, n == null ? void 0 : n.round);
			break;
		case "second":
			o.second = ln(e.second, r, 0, 59, n == null ? void 0 : n.round);
			break;
		case "millisecond":
			o.millisecond = ln(
				e.millisecond,
				r,
				0,
				999,
				n == null ? void 0 : n.round,
			);
			break;
		default:
			throw new Error("Unsupported field " + t);
	}
	return o;
}
function ln(e, t, r, n, o = !1) {
	if (o) {
		(e += Math.sign(t)), e < r && (e = n);
		let a = Math.abs(t);
		t > 0 ? (e = Math.ceil(e / a) * a) : (e = Math.floor(e / a) * a),
			e > n && (e = r);
	} else
		(e += t), e < r ? (e = n - (r - e - 1)) : e > n && (e = r + (e - n - 1));
	return e;
}
function s5(e) {
	return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(
		2,
		"0",
	)}:${String(e.second).padStart(2, "0")}${
		e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""
	}`;
}
function Wb(e) {
	let t = Lp(e, new pu());
	return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(
		2,
		"0",
	)}-${String(t.day).padStart(2, "0")}`;
}
function l5(e) {
	return `${Wb(e)}T${s5(e)}`;
}
function Ub(e) {
	let t = typeof e[0] == "object" ? e.shift() : new pu(),
		r;
	if (typeof e[0] == "string") r = e.shift();
	else {
		let i = t.getEras();
		r = i[i.length - 1];
	}
	let n = e.shift(),
		o = e.shift(),
		a = e.shift();
	return [t, r, n, o, a];
}
var u5 = new WeakMap();
class ea {
	copy() {
		return this.era
			? new ea(this.calendar, this.era, this.year, this.month, this.day)
			: new ea(this.calendar, this.year, this.month, this.day);
	}
	add(t) {
		return Fp(this, t);
	}
	subtract(t) {
		return Bb(this, t);
	}
	set(t) {
		return Kb(this, t);
	}
	cycle(t, r, n) {
		return Hb(this, t, r, n);
	}
	toDate(t) {
		return jb(this, t);
	}
	toString() {
		return Wb(this);
	}
	compare(t) {
		return Lb(this, t);
	}
	constructor(...t) {
		Vp(this, u5, { writable: !0, value: void 0 });
		let [r, n, o, a, i] = Ub(t);
		(this.calendar = r),
			(this.era = n),
			(this.year = o),
			(this.month = a),
			(this.day = i),
			Jo(this);
	}
}
var c5 = new WeakMap();
class xl {
	copy() {
		return this.era
			? new xl(
					this.calendar,
					this.era,
					this.year,
					this.month,
					this.day,
					this.hour,
					this.minute,
					this.second,
					this.millisecond,
			  )
			: new xl(
					this.calendar,
					this.year,
					this.month,
					this.day,
					this.hour,
					this.minute,
					this.second,
					this.millisecond,
			  );
	}
	add(t) {
		return Fp(this, t);
	}
	subtract(t) {
		return Bb(this, t);
	}
	set(t) {
		return Kb(r5(this, t), t);
	}
	cycle(t, r, n) {
		switch (t) {
			case "era":
			case "year":
			case "month":
			case "day":
				return Hb(this, t, r, n);
			default:
				return i5(this, t, r, n);
		}
	}
	toDate(t, r) {
		return jb(this, t, r);
	}
	toString() {
		return l5(this);
	}
	compare(t) {
		let r = Lb(this, t);
		return r === 0 ? X3(this, _b(t)) : r;
	}
	constructor(...t) {
		Vp(this, c5, { writable: !0, value: void 0 });
		let [r, n, o, a, i] = Ub(t);
		(this.calendar = r),
			(this.era = n),
			(this.year = o),
			(this.month = a),
			(this.day = i),
			(this.hour = t.shift() || 0),
			(this.minute = t.shift() || 0),
			(this.second = t.shift() || 0),
			(this.millisecond = t.shift() || 0),
			Jo(this);
	}
}
function Cr(e, t, r) {
	let [n, o] = h.useState(e || t),
		a = h.useRef(e !== void 0),
		i = e !== void 0;
	h.useEffect(() => {
		let u = a.current;
		u !== i &&
			console.warn(
				`WARN: A component changed from ${
					u ? "controlled" : "uncontrolled"
				} to ${i ? "controlled" : "uncontrolled"}.`,
			),
			(a.current = i);
	}, [i]);
	let s = i ? e : n,
		l = h.useCallback(
			(u, ...c) => {
				let d = (f, ...p) => {
					r && (Object.is(s, f) || r(f, ...p)), i || (s = f);
				};
				typeof u == "function"
					? (console.warn(
							"We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320",
					  ),
					  o((p, ...g) => {
							let b = u(i ? s : p, ...g);
							return d(b, ...c), i ? p : b;
					  }))
					: (i || o(u), d(u, ...c));
			},
			[i, s, r],
		);
	return [s, l];
}
function ta(e, t = -1 / 0, r = 1 / 0) {
	return Math.min(Math.max(e, t), r);
}
function $a(e, t, r, n) {
	(t = Number(t)), (r = Number(r));
	let o = (e - (isNaN(t) ? 0 : t)) % n,
		a = Math.abs(o) * 2 >= n ? e + Math.sign(o) * (n - Math.abs(o)) : e - o;
	isNaN(t)
		? !isNaN(r) && a > r && (a = Math.floor(r / n) * n)
		: a < t
		? (a = t)
		: !isNaN(r) && a > r && (a = t + Math.floor((r - t) / n) * n);
	let i = n.toString(),
		s = i.indexOf("."),
		l = s >= 0 ? i.length - s : 0;
	if (l > 0) {
		let u = Math.pow(10, l);
		a = Math.round(a * u) / u;
	}
	return a;
}
function Zb(e) {
	var t,
		r,
		n = "";
	if (typeof e == "string" || typeof e == "number") n += e;
	else if (typeof e == "object")
		if (Array.isArray(e)) {
			var o = e.length;
			for (t = 0; t < o; t++)
				e[t] && (r = Zb(e[t])) && (n && (n += " "), (n += r));
		} else for (r in e) e[r] && (n && (n += " "), (n += r));
	return n;
}
function d5() {
	for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
		(e = arguments[r]) && (t = Zb(e)) && (n && (n += " "), (n += t));
	return n;
}
const Ae = typeof document < "u" ? k.useLayoutEffect : () => {};
function Je(e) {
	const t = h.useRef(null);
	return (
		Ae(() => {
			t.current = e;
		}, [e]),
		h.useCallback((...r) => {
			const n = t.current;
			return n == null ? void 0 : n(...r);
		}, [])
	);
}
function f5(e) {
	let [t, r] = h.useState(e),
		n = h.useRef(null),
		o = Je(() => {
			if (!n.current) return;
			let i = n.current.next();
			if (i.done) {
				n.current = null;
				return;
			}
			t === i.value ? o() : r(i.value);
		});
	Ae(() => {
		n.current && o();
	});
	let a = Je(i => {
		(n.current = i(t)), o();
	});
	return [t, a];
}
let p5 = !!(
		typeof window < "u" &&
		window.document &&
		window.document.createElement
	),
	wl = new Map();
function Jt(e) {
	let [t, r] = h.useState(e),
		n = h.useRef(null),
		o = N3(t),
		a = h.useCallback(i => {
			n.current = i;
		}, []);
	return (
		p5 && wl.set(o, a),
		Ae(() => {
			let i = o;
			return () => {
				wl.delete(i);
			};
		}, [o]),
		h.useEffect(() => {
			let i = n.current;
			i && ((n.current = null), r(i));
		}),
		o
	);
}
function h5(e, t) {
	if (e === t) return e;
	let r = wl.get(e);
	if (r) return r(t), t;
	let n = wl.get(t);
	return n ? (n(e), e) : t;
}
function vn(e = []) {
	let t = Jt(),
		[r, n] = f5(t),
		o = h.useCallback(() => {
			n(function* () {
				yield t, yield document.getElementById(t) ? t : void 0;
			});
		}, [t, n]);
	return Ae(o, [t, o, ...e]), r;
}
function nt(...e) {
	return (...t) => {
		for (let r of e) typeof r == "function" && r(...t);
	};
}
const Me = e => {
		var t;
		return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0
			? t
			: document;
	},
	Yt = e =>
		e && "window" in e && e.window === e ? e : Me(e).defaultView || window;
function U(...e) {
	let t = { ...e[0] };
	for (let r = 1; r < e.length; r++) {
		let n = e[r];
		for (let o in n) {
			let a = t[o],
				i = n[o];
			typeof a == "function" &&
			typeof i == "function" &&
			o[0] === "o" &&
			o[1] === "n" &&
			o.charCodeAt(2) >= 65 &&
			o.charCodeAt(2) <= 90
				? (t[o] = nt(a, i))
				: (o === "className" || o === "UNSAFE_className") &&
				  typeof a == "string" &&
				  typeof i == "string"
				? (t[o] = d5(a, i))
				: o === "id" && a && i
				? (t.id = h5(a, i))
				: (t[o] = i !== void 0 ? i : a);
		}
	}
	return t;
}
function Gb(...e) {
	return e.length === 1
		? e[0]
		: t => {
				for (let r of e)
					typeof r == "function" ? r(t) : r != null && (r.current = t);
		  };
}
const m5 = new Set(["id"]),
	g5 = new Set([
		"aria-label",
		"aria-labelledby",
		"aria-describedby",
		"aria-details",
	]),
	v5 = new Set(["href", "target", "rel", "download", "ping", "referrerPolicy"]),
	y5 = /^(data-.*)$/;
function Ft(e, t = {}) {
	let { labelable: r, isLink: n, propNames: o } = t,
		a = {};
	for (const i in e)
		Object.prototype.hasOwnProperty.call(e, i) &&
			(m5.has(i) ||
				(r && g5.has(i)) ||
				(n && v5.has(i)) ||
				(o != null && o.has(i)) ||
				y5.test(i)) &&
			(a[i] = e[i]);
	return a;
}
function xr(e) {
	if (b5()) e.focus({ preventScroll: !0 });
	else {
		let t = x5(e);
		e.focus(), w5(t);
	}
}
let ds = null;
function b5() {
	if (ds == null) {
		ds = !1;
		try {
			document.createElement("div").focus({
				get preventScroll() {
					return (ds = !0), !0;
				},
			});
		} catch {}
	}
	return ds;
}
function x5(e) {
	let t = e.parentNode,
		r = [],
		n = document.scrollingElement || document.documentElement;
	for (; t instanceof HTMLElement && t !== n; )
		(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
			r.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
			(t = t.parentNode);
	return (
		n instanceof HTMLElement &&
			r.push({ element: n, scrollTop: n.scrollTop, scrollLeft: n.scrollLeft }),
		r
	);
}
function w5(e) {
	for (let { element: t, scrollTop: r, scrollLeft: n } of e)
		(t.scrollTop = r), (t.scrollLeft = n);
}
function hu(e) {
	var t;
	return typeof window > "u" || window.navigator == null
		? !1
		: ((t = window.navigator.userAgentData) === null || t === void 0
				? void 0
				: t.brands.some(r => e.test(r.brand))) ||
				e.test(window.navigator.userAgent);
}
function Op(e) {
	var t;
	return typeof window < "u" && window.navigator != null
		? e.test(
				((t = window.navigator.userAgentData) === null || t === void 0
					? void 0
					: t.platform) || window.navigator.platform,
		  )
		: !1;
}
function Pn() {
	return Op(/^Mac/i);
}
function S5() {
	return Op(/^iPhone/i);
}
function Yb() {
	return Op(/^iPad/i) || (Pn() && navigator.maxTouchPoints > 1);
}
function mu() {
	return S5() || Yb();
}
function P5() {
	return Pn() || mu();
}
function Np() {
	return hu(/AppleWebKit/i) && !$5();
}
function $5() {
	return hu(/Chrome/i);
}
function Xb() {
	return hu(/Android/i);
}
function C5() {
	return hu(/Firefox/i);
}
const qb = h.createContext({ isNative: !0, open: k5 });
function E5(e) {
	let { children: t, navigate: r } = e,
		n = h.useMemo(
			() => ({
				isNative: !1,
				open: (o, a) => {
					Jb(o, i => {
						Qb(i, a) ? r(i.pathname + i.search + i.hash) : $n(i, a);
					});
				},
			}),
			[r],
		);
	return k.createElement(qb.Provider, { value: n }, t);
}
function gu() {
	return h.useContext(qb);
}
function Qb(e, t) {
	let r = e.getAttribute("target");
	return (
		(!r || r === "_self") &&
		e.origin === location.origin &&
		!e.hasAttribute("download") &&
		!t.metaKey &&
		!t.ctrlKey &&
		!t.altKey &&
		!t.shiftKey
	);
}
function $n(e, t, r = !0) {
	var n, o;
	let { metaKey: a, ctrlKey: i, altKey: s, shiftKey: l } = t;
	C5() &&
		!(
			(o = window.event) === null ||
			o === void 0 ||
			(n = o.type) === null ||
			n === void 0
		) &&
		n.startsWith("key") &&
		e.target === "_blank" &&
		(Pn() ? (a = !0) : (i = !0));
	let u =
		Np() && Pn() && !Yb()
			? new KeyboardEvent("keydown", {
					keyIdentifier: "Enter",
					metaKey: a,
					ctrlKey: i,
					altKey: s,
					shiftKey: l,
			  })
			: new MouseEvent("click", {
					metaKey: a,
					ctrlKey: i,
					altKey: s,
					shiftKey: l,
					bubbles: !0,
					cancelable: !0,
			  });
	($n.isOpening = r), xr(e), e.dispatchEvent(u), ($n.isOpening = !1);
}
$n.isOpening = !1;
function Jb(e, t) {
	if (e instanceof HTMLAnchorElement) t(e);
	else if (e.hasAttribute("data-href")) {
		let r = document.createElement("a");
		(r.href = e.getAttribute("data-href")),
			e.hasAttribute("data-target") &&
				(r.target = e.getAttribute("data-target")),
			e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")),
			e.hasAttribute("data-download") &&
				(r.download = e.getAttribute("data-download")),
			e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")),
			e.hasAttribute("data-referrer-policy") &&
				(r.referrerPolicy = e.getAttribute("data-referrer-policy")),
			e.appendChild(r),
			t(r),
			e.removeChild(r);
	}
}
function k5(e, t) {
	Jb(e, r => $n(r, t));
}
let mo = new Map(),
	Zd = new Set();
function sm() {
	if (typeof window > "u") return;
	function e(n) {
		return "propertyName" in n;
	}
	let t = n => {
			if (!e(n) || !n.target) return;
			let o = mo.get(n.target);
			o ||
				((o = new Set()),
				mo.set(n.target, o),
				n.target.addEventListener("transitioncancel", r, { once: !0 })),
				o.add(n.propertyName);
		},
		r = n => {
			if (!e(n) || !n.target) return;
			let o = mo.get(n.target);
			if (
				o &&
				(o.delete(n.propertyName),
				o.size === 0 &&
					(n.target.removeEventListener("transitioncancel", r),
					mo.delete(n.target)),
				mo.size === 0)
			) {
				for (let a of Zd) a();
				Zd.clear();
			}
		};
	document.body.addEventListener("transitionrun", t),
		document.body.addEventListener("transitionend", r);
}
typeof document < "u" &&
	(document.readyState !== "loading"
		? sm()
		: document.addEventListener("DOMContentLoaded", sm));
function e2(e) {
	requestAnimationFrame(() => {
		mo.size === 0 ? e() : Zd.add(e);
	});
}
function Di() {
	let e = h.useRef(new Map()),
		t = h.useCallback((o, a, i, s) => {
			let l =
				s != null && s.once
					? (...u) => {
							e.current.delete(i), i(...u);
					  }
					: i;
			e.current.set(i, { type: a, eventTarget: o, fn: l, options: s }),
				o.addEventListener(a, i, s);
		}, []),
		r = h.useCallback((o, a, i, s) => {
			var l;
			let u =
				((l = e.current.get(i)) === null || l === void 0 ? void 0 : l.fn) || i;
			o.removeEventListener(a, u, s), e.current.delete(i);
		}, []),
		n = h.useCallback(() => {
			e.current.forEach((o, a) => {
				r(o.eventTarget, o.type, a, o.options);
			});
		}, [r]);
	return (
		h.useEffect(() => n, [n]),
		{
			addGlobalListener: t,
			removeGlobalListener: r,
			removeAllGlobalListeners: n,
		}
	);
}
function vu(e, t) {
	let { id: r, "aria-label": n, "aria-labelledby": o } = e;
	return (
		(r = Jt(r)),
		o && n
			? (o = [...new Set([r, ...o.trim().split(/\s+/)])].join(" "))
			: o && (o = o.trim().split(/\s+/).join(" ")),
		!n && !o && t && (n = t),
		{ id: r, "aria-label": n, "aria-labelledby": o }
	);
}
function T5() {
	return typeof window.ResizeObserver < "u";
}
function M5(e) {
	const { ref: t, onResize: r } = e;
	h.useEffect(() => {
		let n = t == null ? void 0 : t.current;
		if (n)
			if (T5()) {
				const o = new window.ResizeObserver(a => {
					a.length && r();
				});
				return (
					o.observe(n),
					() => {
						n && o.unobserve(n);
					}
				);
			} else
				return (
					window.addEventListener("resize", r, !1),
					() => {
						window.removeEventListener("resize", r, !1);
					}
				);
	}, [r, t]);
}
function t2(e, t) {
	Ae(() => {
		if (e && e.ref && t)
			return (
				(e.ref.current = t.current),
				() => {
					e.ref && (e.ref.current = null);
				}
			);
	});
}
function Sl(e, t) {
	let r = e;
	for (Pl(r, t) && (r = r.parentElement); r && !Pl(r, t); ) r = r.parentElement;
	return r || document.scrollingElement || document.documentElement;
}
function Pl(e, t) {
	let r = window.getComputedStyle(e),
		n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
	return (
		n &&
			t &&
			(n =
				e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth),
		n
	);
}
let A5 = 0;
const hc = new Map();
function D5(e) {
	let [t, r] = h.useState();
	return (
		Ae(() => {
			if (!e) return;
			let n = hc.get(e);
			if (n) r(n.element.id);
			else {
				let o = `react-aria-description-${A5++}`;
				r(o);
				let a = document.createElement("div");
				(a.id = o),
					(a.style.display = "none"),
					(a.textContent = e),
					document.body.appendChild(a),
					(n = { refCount: 0, element: a }),
					hc.set(e, n);
			}
			return (
				n.refCount++,
				() => {
					n && --n.refCount === 0 && (n.element.remove(), hc.delete(e));
				}
			);
		}, [e]),
		{ "aria-describedby": e ? t : void 0 }
	);
}
function I5(e, t, r, n) {
	let o = Je(r),
		a = r == null;
	h.useEffect(() => {
		if (a || !e.current) return;
		let i = e.current;
		return (
			i.addEventListener(t, o, n),
			() => {
				i.removeEventListener(t, o, n);
			}
		);
	}, [e, t, n, a, o]);
}
function r2(e, t) {
	let r = lm(e, t, "left"),
		n = lm(e, t, "top"),
		o = t.offsetWidth,
		a = t.offsetHeight,
		i = e.scrollLeft,
		s = e.scrollTop,
		{ borderTopWidth: l, borderLeftWidth: u } = getComputedStyle(e),
		c = e.scrollLeft + parseInt(u, 10),
		d = e.scrollTop + parseInt(l, 10),
		f = c + e.clientWidth,
		p = d + e.clientHeight;
	r <= i ? (i = r - parseInt(u, 10)) : r + o > f && (i += r + o - f),
		n <= d ? (s = n - parseInt(l, 10)) : n + a > p && (s += n + a - p),
		(e.scrollLeft = i),
		(e.scrollTop = s);
}
function lm(e, t, r) {
	const n = r === "left" ? "offsetLeft" : "offsetTop";
	let o = 0;
	for (; t.offsetParent && ((o += t[n]), t.offsetParent !== e); ) {
		if (t.offsetParent.contains(e)) {
			o -= e[n];
			break;
		}
		t = t.offsetParent;
	}
	return o;
}
function um(e, t) {
	if (document.contains(e)) {
		let i = document.scrollingElement || document.documentElement;
		if (window.getComputedStyle(i).overflow === "hidden") {
			let l = Sl(e);
			for (; e && l && e !== i && l !== i; ) r2(l, e), (e = l), (l = Sl(e));
		} else {
			var r;
			let { left: l, top: u } = e.getBoundingClientRect();
			e == null ||
				(r = e.scrollIntoView) === null ||
				r === void 0 ||
				r.call(e, { block: "nearest" });
			let { left: c, top: d } = e.getBoundingClientRect();
			if (Math.abs(l - c) > 1 || Math.abs(u - d) > 1) {
				var n, o, a;
				t == null ||
					(o = t.containingElement) === null ||
					o === void 0 ||
					(n = o.scrollIntoView) === null ||
					n === void 0 ||
					n.call(o, { block: "center", inline: "center" }),
					(a = e.scrollIntoView) === null ||
						a === void 0 ||
						a.call(e, { block: "nearest" });
			}
		}
	}
}
function Gd(e) {
	return e.mozInputSource === 0 && e.isTrusted
		? !0
		: Xb() && e.pointerType
		? e.type === "click" && e.buttons === 1
		: e.detail === 0 && !e.pointerType;
}
function V5(e) {
	return (
		(!Xb() && e.width === 0 && e.height === 0) ||
		(e.width === 1 &&
			e.height === 1 &&
			e.pressure === 0 &&
			e.detail === 0 &&
			e.pointerType === "mouse")
	);
}
function yu(e, t, r) {
	let n = h.useRef(t),
		o = Je(() => {
			r && r(n.current);
		});
	h.useEffect(() => {
		var a;
		let i =
			e == null || (a = e.current) === null || a === void 0 ? void 0 : a.form;
		return (
			i == null || i.addEventListener("reset", o),
			() => {
				i == null || i.removeEventListener("reset", o);
			}
		);
	}, [e, o]);
}
let mc = new Map(),
	Yd = !1;
try {
	Yd =
		new Intl.NumberFormat("de-DE", {
			signDisplay: "exceptZero",
		}).resolvedOptions().signDisplay === "exceptZero";
} catch {}
let $l = !1;
try {
	$l =
		new Intl.NumberFormat("de-DE", {
			style: "unit",
			unit: "degree",
		}).resolvedOptions().style === "unit";
} catch {}
const n2 = {
	degree: {
		narrow: { default: "°", "ja-JP": " 度", "zh-TW": "度", "sl-SI": " °" },
	},
};
class R5 {
	format(t) {
		let r = "";
		if (
			(!Yd && this.options.signDisplay != null
				? (r = F5(this.numberFormatter, this.options.signDisplay, t))
				: (r = this.numberFormatter.format(t)),
			this.options.style === "unit" && !$l)
		) {
			var n;
			let {
				unit: o,
				unitDisplay: a = "short",
				locale: i,
			} = this.resolvedOptions();
			if (!o) return r;
			let s = (n = n2[o]) === null || n === void 0 ? void 0 : n[a];
			r += s[i] || s.default;
		}
		return r;
	}
	formatToParts(t) {
		return this.numberFormatter.formatToParts(t);
	}
	formatRange(t, r) {
		if (typeof this.numberFormatter.formatRange == "function")
			return this.numberFormatter.formatRange(t, r);
		if (r < t) throw new RangeError("End date must be >= start date");
		return `${this.format(t)} – ${this.format(r)}`;
	}
	formatRangeToParts(t, r) {
		if (typeof this.numberFormatter.formatRangeToParts == "function")
			return this.numberFormatter.formatRangeToParts(t, r);
		if (r < t) throw new RangeError("End date must be >= start date");
		let n = this.numberFormatter.formatToParts(t),
			o = this.numberFormatter.formatToParts(r);
		return [
			...n.map(a => ({ ...a, source: "startRange" })),
			{ type: "literal", value: " – ", source: "shared" },
			...o.map(a => ({ ...a, source: "endRange" })),
		];
	}
	resolvedOptions() {
		let t = this.numberFormatter.resolvedOptions();
		return (
			!Yd &&
				this.options.signDisplay != null &&
				(t = { ...t, signDisplay: this.options.signDisplay }),
			!$l &&
				this.options.style === "unit" &&
				(t = {
					...t,
					style: "unit",
					unit: this.options.unit,
					unitDisplay: this.options.unitDisplay,
				}),
			t
		);
	}
	constructor(t, r = {}) {
		(this.numberFormatter = L5(t, r)), (this.options = r);
	}
}
function L5(e, t = {}) {
	let { numberingSystem: r } = t;
	if (
		(r &&
			e.includes("-nu-") &&
			(e.includes("-u-") || (e += "-u-"), (e += `-nu-${r}`)),
		t.style === "unit" && !$l)
	) {
		var n;
		let { unit: i, unitDisplay: s = "short" } = t;
		if (!i) throw new Error('unit option must be provided with style: "unit"');
		if (!(!((n = n2[i]) === null || n === void 0) && n[s]))
			throw new Error(`Unsupported unit ${i} with unitDisplay = ${s}`);
		t = { ...t, style: "decimal" };
	}
	let o =
		e +
		(t
			? Object.entries(t)
					.sort((i, s) => (i[0] < s[0] ? -1 : 1))
					.join()
			: "");
	if (mc.has(o)) return mc.get(o);
	let a = new Intl.NumberFormat(e, t);
	return mc.set(o, a), a;
}
function F5(e, t, r) {
	if (t === "auto") return e.format(r);
	if (t === "never") return e.format(Math.abs(r));
	{
		let n = !1;
		if (
			(t === "always"
				? (n = r > 0 || Object.is(r, 0))
				: t === "exceptZero" &&
				  (Object.is(r, -0) || Object.is(r, 0)
						? (r = Math.abs(r))
						: (n = r > 0)),
			n)
		) {
			let o = e.format(-r),
				a = e.format(r),
				i = o.replace(a, "").replace(/\u200e|\u061C/, "");
			return (
				[...i].length !== 1 &&
					console.warn(
						"@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case",
					),
				o.replace(a, "!!!").replace(i, "+").replace("!!!", a)
			);
		} else return e.format(r);
	}
}
const O5 = new Set([
		"Arab",
		"Syrc",
		"Samr",
		"Mand",
		"Thaa",
		"Mend",
		"Nkoo",
		"Adlm",
		"Rohg",
		"Hebr",
	]),
	N5 = new Set([
		"ae",
		"ar",
		"arc",
		"bcc",
		"bqi",
		"ckb",
		"dv",
		"fa",
		"glk",
		"he",
		"ku",
		"mzn",
		"nqo",
		"pnb",
		"ps",
		"sd",
		"ug",
		"ur",
		"yi",
	]);
function o2(e) {
	if (Intl.Locale) {
		let r = new Intl.Locale(e).maximize(),
			n = typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo;
		if (n) return n.direction === "rtl";
		if (r.script) return O5.has(r.script);
	}
	let t = e.split("-")[0];
	return N5.has(t);
}
const j5 = Symbol.for("react-aria.i18n.locale");
function a2() {
	let e =
		(typeof window < "u" && window[j5]) ||
		(typeof navigator < "u" &&
			(navigator.language || navigator.userLanguage)) ||
		"en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return { locale: e, direction: o2(e) ? "rtl" : "ltr" };
}
let Xd = a2(),
	Oa = new Set();
function cm() {
	Xd = a2();
	for (let e of Oa) e(Xd);
}
function i2() {
	let e = ca(),
		[t, r] = h.useState(Xd);
	return (
		h.useEffect(
			() => (
				Oa.size === 0 && window.addEventListener("languagechange", cm),
				Oa.add(r),
				() => {
					Oa.delete(r),
						Oa.size === 0 && window.removeEventListener("languagechange", cm);
				}
			),
			[],
		),
		e ? { locale: "en-US", direction: "ltr" } : t
	);
}
const s2 = k.createContext(null);
function _5(e) {
	let { locale: t, children: r } = e,
		n = i2(),
		o = t ? { locale: t, direction: o2(t) ? "rtl" : "ltr" } : n;
	return k.createElement(s2.Provider, { value: o }, r);
}
function Xr() {
	let e = i2();
	return h.useContext(s2) || e;
}
const dm = new WeakMap();
function z5(e) {
	let t = dm.get(e);
	return t || ((t = new fu(e)), dm.set(e, t)), t;
}
function B5(e, t) {
	return (t && fu.getGlobalDictionaryForPackage(t)) || z5(e);
}
function l2(e, t) {
	let { locale: r } = Xr(),
		n = B5(e, t);
	return h.useMemo(() => new U3(r, n), [r, n]);
}
function u2(e = {}) {
	let { locale: t } = Xr();
	return h.useMemo(() => new R5(t, e), [t, e]);
}
let gc = new Map();
function c2(e) {
	let { locale: t } = Xr(),
		r =
			t +
			(e
				? Object.entries(e)
						.sort((o, a) => (o[0] < a[0] ? -1 : 1))
						.join()
				: "");
	if (gc.has(r)) return gc.get(r);
	let n = new Intl.Collator(t, e);
	return gc.set(r, n), n;
}
var br = function () {
	return (
		(br =
			Object.assign ||
			function (t) {
				for (var r, n = 1, o = arguments.length; n < o; n++) {
					r = arguments[n];
					for (var a in r)
						Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
				}
				return t;
			}),
		br.apply(this, arguments)
	);
};
function d2(e, t) {
	var r = {};
	for (var n in e)
		Object.prototype.hasOwnProperty.call(e, n) &&
			t.indexOf(n) < 0 &&
			(r[n] = e[n]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
			t.indexOf(n[o]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
				(r[n[o]] = e[n[o]]);
	return r;
}
function K5(e, t, r) {
	if (r || arguments.length === 2)
		for (var n = 0, o = t.length, a; n < o; n++)
			(a || !(n in t)) &&
				(a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
	return e.concat(a || Array.prototype.slice.call(t));
}
var f2 = {};
f2 = { dismiss: "تجاهل" };
var p2 = {};
p2 = { dismiss: "Отхвърляне" };
var h2 = {};
h2 = { dismiss: "Odstranit" };
var m2 = {};
m2 = { dismiss: "Luk" };
var g2 = {};
g2 = { dismiss: "Schließen" };
var v2 = {};
v2 = { dismiss: "Απόρριψη" };
var y2 = {};
y2 = { dismiss: "Dismiss" };
var b2 = {};
b2 = { dismiss: "Descartar" };
var x2 = {};
x2 = { dismiss: "Lõpeta" };
var w2 = {};
w2 = { dismiss: "Hylkää" };
var S2 = {};
S2 = { dismiss: "Rejeter" };
var P2 = {};
P2 = { dismiss: "התעלם" };
var $2 = {};
$2 = { dismiss: "Odbaci" };
var C2 = {};
C2 = { dismiss: "Elutasítás" };
var E2 = {};
E2 = { dismiss: "Ignora" };
var k2 = {};
k2 = { dismiss: "閉じる" };
var T2 = {};
T2 = { dismiss: "무시" };
var M2 = {};
M2 = { dismiss: "Atmesti" };
var A2 = {};
A2 = { dismiss: "Nerādīt" };
var D2 = {};
D2 = { dismiss: "Lukk" };
var I2 = {};
I2 = { dismiss: "Negeren" };
var V2 = {};
V2 = { dismiss: "Zignoruj" };
var R2 = {};
R2 = { dismiss: "Descartar" };
var L2 = {};
L2 = { dismiss: "Dispensar" };
var F2 = {};
F2 = { dismiss: "Revocare" };
var O2 = {};
O2 = { dismiss: "Пропустить" };
var N2 = {};
N2 = { dismiss: "Zrušiť" };
var j2 = {};
j2 = { dismiss: "Opusti" };
var _2 = {};
_2 = { dismiss: "Odbaci" };
var z2 = {};
z2 = { dismiss: "Avvisa" };
var B2 = {};
B2 = { dismiss: "Kapat" };
var K2 = {};
K2 = { dismiss: "Скасувати" };
var H2 = {};
H2 = { dismiss: "取消" };
var W2 = {};
W2 = { dismiss: "關閉" };
function H5(e, t) {
	return t.get ? t.get.call(e) : t.value;
}
function U2(e, t, r) {
	if (!t.has(e))
		throw new TypeError("attempted to " + r + " private field on non-instance");
	return t.get(e);
}
function W5(e, t) {
	var r = U2(e, t, "get");
	return H5(e, r);
}
function U5(e, t, r) {
	if (t.set) t.set.call(e, r);
	else {
		if (!t.writable)
			throw new TypeError("attempted to set read only private field");
		t.value = r;
	}
}
function fm(e, t, r) {
	var n = U2(e, t, "set");
	return U5(e, n, r), r;
}
let Ao = "default",
	qd = "",
	_s = new WeakMap();
function Qd(e) {
	if (mu()) {
		if (Ao === "default") {
			const t = Me(e);
			(qd = t.documentElement.style.webkitUserSelect),
				(t.documentElement.style.webkitUserSelect = "none");
		}
		Ao = "disabled";
	} else
		(e instanceof HTMLElement || e instanceof SVGElement) &&
			(_s.set(e, e.style.userSelect), (e.style.userSelect = "none"));
}
function Na(e) {
	if (mu()) {
		if (Ao !== "disabled") return;
		(Ao = "restoring"),
			setTimeout(() => {
				e2(() => {
					if (Ao === "restoring") {
						const t = Me(e);
						t.documentElement.style.webkitUserSelect === "none" &&
							(t.documentElement.style.webkitUserSelect = qd || ""),
							(qd = ""),
							(Ao = "default");
					}
				});
			}, 300);
	} else if (
		(e instanceof HTMLElement || e instanceof SVGElement) &&
		e &&
		_s.has(e)
	) {
		let t = _s.get(e);
		e.style.userSelect === "none" && (e.style.userSelect = t),
			e.getAttribute("style") === "" && e.removeAttribute("style"),
			_s.delete(e);
	}
}
const jp = k.createContext({ register: () => {} });
jp.displayName = "PressResponderContext";
function Z5(e) {
	let t = h.useContext(jp);
	if (t) {
		let { register: r, ...n } = t;
		(e = U(n, e)), r();
	}
	return t2(t, e.ref), e;
}
var fs = new WeakMap();
class ps {
	continuePropagation() {
		fm(this, fs, !1);
	}
	get shouldStopPropagation() {
		return W5(this, fs);
	}
	constructor(t, r, n) {
		Vp(this, fs, { writable: !0, value: void 0 }),
			fm(this, fs, !0),
			(this.type = t),
			(this.pointerType = r),
			(this.target = n.currentTarget),
			(this.shiftKey = n.shiftKey),
			(this.metaKey = n.metaKey),
			(this.ctrlKey = n.ctrlKey),
			(this.altKey = n.altKey);
	}
}
const pm = Symbol("linkClicked");
function er(e) {
	let {
			onPress: t,
			onPressChange: r,
			onPressStart: n,
			onPressEnd: o,
			onPressUp: a,
			isDisabled: i,
			isPressed: s,
			preventFocusOnPress: l,
			shouldCancelOnPointerExit: u,
			allowTextSelectionOnPress: c,
			ref: d,
			...f
		} = Z5(e),
		[p, g] = h.useState(!1),
		b = h.useRef({
			isPressed: !1,
			ignoreEmulatedMouseEvents: !1,
			ignoreClickAfterPress: !1,
			didFirePressStart: !1,
			isTriggeringEvent: !1,
			activePointerId: null,
			target: null,
			isOverTarget: !1,
			pointerType: null,
		}),
		{ addGlobalListener: x, removeAllGlobalListeners: m } = Di(),
		v = Je((w, V) => {
			let M = b.current;
			if (i || M.didFirePressStart) return !1;
			let F = !0;
			if (((M.isTriggeringEvent = !0), n)) {
				let L = new ps("pressstart", V, w);
				n(L), (F = L.shouldStopPropagation);
			}
			return (
				r && r(!0),
				(M.isTriggeringEvent = !1),
				(M.didFirePressStart = !0),
				g(!0),
				F
			);
		}),
		y = Je((w, V, M = !0) => {
			let F = b.current;
			if (!F.didFirePressStart) return !1;
			(F.ignoreClickAfterPress = !0),
				(F.didFirePressStart = !1),
				(F.isTriggeringEvent = !0);
			let L = !0;
			if (o) {
				let T = new ps("pressend", V, w);
				o(T), (L = T.shouldStopPropagation);
			}
			if ((r && r(!1), g(!1), t && M && !i)) {
				let T = new ps("press", V, w);
				t(T), L && (L = T.shouldStopPropagation);
			}
			return (F.isTriggeringEvent = !1), L;
		}),
		P = Je((w, V) => {
			let M = b.current;
			if (i) return !1;
			if (a) {
				M.isTriggeringEvent = !0;
				let F = new ps("pressup", V, w);
				return a(F), (M.isTriggeringEvent = !1), F.shouldStopPropagation;
			}
			return !0;
		}),
		C = Je(w => {
			let V = b.current;
			V.isPressed &&
				V.target &&
				(V.isOverTarget &&
					V.pointerType != null &&
					y(kr(V.target, w), V.pointerType, !1),
				(V.isPressed = !1),
				(V.isOverTarget = !1),
				(V.activePointerId = null),
				(V.pointerType = null),
				m(),
				c || Na(V.target));
		}),
		E = Je(w => {
			u && C(w);
		}),
		D = h.useMemo(() => {
			let w = b.current,
				V = {
					onKeyDown(F) {
						if (
							vc(F.nativeEvent, F.currentTarget) &&
							F.currentTarget.contains(F.target)
						) {
							var L;
							mm(F.target, F.key) && F.preventDefault();
							let T = !0;
							if (!w.isPressed && !F.repeat) {
								(w.target = F.currentTarget),
									(w.isPressed = !0),
									(T = v(F, "keyboard"));
								let A = F.currentTarget,
									_ = N => {
										vc(N, A) &&
											!N.repeat &&
											A.contains(N.target) &&
											w.target &&
											P(kr(w.target, N), "keyboard");
									};
								x(Me(F.currentTarget), "keyup", nt(_, M), !0);
							}
							T && F.stopPropagation(),
								F.metaKey &&
									Pn() &&
									((L = w.metaKeyEvents) === null ||
										L === void 0 ||
										L.set(F.key, F.nativeEvent));
						} else F.key === "Meta" && (w.metaKeyEvents = new Map());
					},
					onClick(F) {
						if (
							!(F && !F.currentTarget.contains(F.target)) &&
							F &&
							F.button === 0 &&
							!w.isTriggeringEvent &&
							!$n.isOpening
						) {
							let L = !0;
							if (
								(i && F.preventDefault(),
								!w.ignoreClickAfterPress &&
									!w.ignoreEmulatedMouseEvents &&
									!w.isPressed &&
									(w.pointerType === "virtual" || Gd(F.nativeEvent)))
							) {
								!i && !l && xr(F.currentTarget);
								let T = v(F, "virtual"),
									A = P(F, "virtual"),
									_ = y(F, "virtual");
								L = T && A && _;
							}
							(w.ignoreEmulatedMouseEvents = !1),
								(w.ignoreClickAfterPress = !1),
								L && F.stopPropagation();
						}
					},
				},
				M = F => {
					var L;
					if (w.isPressed && w.target && vc(F, w.target)) {
						var T;
						mm(F.target, F.key) && F.preventDefault();
						let _ = F.target;
						y(kr(w.target, F), "keyboard", w.target.contains(_)),
							m(),
							F.key !== "Enter" &&
								_p(w.target) &&
								w.target.contains(_) &&
								!F[pm] &&
								((F[pm] = !0), $n(w.target, F, !1)),
							(w.isPressed = !1),
							(T = w.metaKeyEvents) === null || T === void 0 || T.delete(F.key);
					} else if (
						F.key === "Meta" &&
						!((L = w.metaKeyEvents) === null || L === void 0) &&
						L.size
					) {
						var A;
						let _ = w.metaKeyEvents;
						w.metaKeyEvents = void 0;
						for (let N of _.values())
							(A = w.target) === null ||
								A === void 0 ||
								A.dispatchEvent(new KeyboardEvent("keyup", N));
					}
				};
			if (typeof PointerEvent < "u") {
				(V.onPointerDown = A => {
					if (A.button !== 0 || !A.currentTarget.contains(A.target)) return;
					if (V5(A.nativeEvent)) {
						w.pointerType = "virtual";
						return;
					}
					yc(A.currentTarget) && A.preventDefault(),
						(w.pointerType = A.pointerType);
					let _ = !0;
					w.isPressed ||
						((w.isPressed = !0),
						(w.isOverTarget = !0),
						(w.activePointerId = A.pointerId),
						(w.target = A.currentTarget),
						!i && !l && xr(A.currentTarget),
						c || Qd(w.target),
						(_ = v(A, w.pointerType)),
						x(Me(A.currentTarget), "pointermove", F, !1),
						x(Me(A.currentTarget), "pointerup", L, !1),
						x(Me(A.currentTarget), "pointercancel", T, !1)),
						_ && A.stopPropagation();
				}),
					(V.onMouseDown = A => {
						A.currentTarget.contains(A.target) &&
							A.button === 0 &&
							(yc(A.currentTarget) && A.preventDefault(), A.stopPropagation());
					}),
					(V.onPointerUp = A => {
						!A.currentTarget.contains(A.target) ||
							w.pointerType === "virtual" ||
							(A.button === 0 &&
								co(A, A.currentTarget) &&
								P(A, w.pointerType || A.pointerType));
					});
				let F = A => {
						A.pointerId === w.activePointerId &&
							(w.target && co(A, w.target)
								? !w.isOverTarget &&
								  w.pointerType != null &&
								  ((w.isOverTarget = !0), v(kr(w.target, A), w.pointerType))
								: w.target &&
								  w.isOverTarget &&
								  w.pointerType != null &&
								  ((w.isOverTarget = !1),
								  y(kr(w.target, A), w.pointerType, !1),
								  E(A)));
					},
					L = A => {
						A.pointerId === w.activePointerId &&
							w.isPressed &&
							A.button === 0 &&
							w.target &&
							(co(A, w.target) && w.pointerType != null
								? y(kr(w.target, A), w.pointerType)
								: w.isOverTarget &&
								  w.pointerType != null &&
								  y(kr(w.target, A), w.pointerType, !1),
							(w.isPressed = !1),
							(w.isOverTarget = !1),
							(w.activePointerId = null),
							(w.pointerType = null),
							m(),
							c || Na(w.target));
					},
					T = A => {
						C(A);
					};
				V.onDragStart = A => {
					A.currentTarget.contains(A.target) && C(A);
				};
			} else {
				(V.onMouseDown = T => {
					if (T.button !== 0 || !T.currentTarget.contains(T.target)) return;
					if (
						(yc(T.currentTarget) && T.preventDefault(),
						w.ignoreEmulatedMouseEvents)
					) {
						T.stopPropagation();
						return;
					}
					(w.isPressed = !0),
						(w.isOverTarget = !0),
						(w.target = T.currentTarget),
						(w.pointerType = Gd(T.nativeEvent) ? "virtual" : "mouse"),
						!i && !l && xr(T.currentTarget),
						v(T, w.pointerType) && T.stopPropagation(),
						x(Me(T.currentTarget), "mouseup", F, !1);
				}),
					(V.onMouseEnter = T => {
						if (!T.currentTarget.contains(T.target)) return;
						let A = !0;
						w.isPressed &&
							!w.ignoreEmulatedMouseEvents &&
							w.pointerType != null &&
							((w.isOverTarget = !0), (A = v(T, w.pointerType))),
							A && T.stopPropagation();
					}),
					(V.onMouseLeave = T => {
						if (!T.currentTarget.contains(T.target)) return;
						let A = !0;
						w.isPressed &&
							!w.ignoreEmulatedMouseEvents &&
							w.pointerType != null &&
							((w.isOverTarget = !1), (A = y(T, w.pointerType, !1)), E(T)),
							A && T.stopPropagation();
					}),
					(V.onMouseUp = T => {
						T.currentTarget.contains(T.target) &&
							!w.ignoreEmulatedMouseEvents &&
							T.button === 0 &&
							P(T, w.pointerType || "mouse");
					});
				let F = T => {
					if (T.button === 0) {
						if (((w.isPressed = !1), m(), w.ignoreEmulatedMouseEvents)) {
							w.ignoreEmulatedMouseEvents = !1;
							return;
						}
						w.target && co(T, w.target) && w.pointerType != null
							? y(kr(w.target, T), w.pointerType)
							: w.target &&
							  w.isOverTarget &&
							  w.pointerType != null &&
							  y(kr(w.target, T), w.pointerType, !1),
							(w.isOverTarget = !1);
					}
				};
				(V.onTouchStart = T => {
					if (!T.currentTarget.contains(T.target)) return;
					let A = G5(T.nativeEvent);
					if (!A) return;
					(w.activePointerId = A.identifier),
						(w.ignoreEmulatedMouseEvents = !0),
						(w.isOverTarget = !0),
						(w.isPressed = !0),
						(w.target = T.currentTarget),
						(w.pointerType = "touch"),
						!i && !l && xr(T.currentTarget),
						c || Qd(w.target),
						v(T, w.pointerType) && T.stopPropagation(),
						x(Yt(T.currentTarget), "scroll", L, !0);
				}),
					(V.onTouchMove = T => {
						if (!T.currentTarget.contains(T.target)) return;
						if (!w.isPressed) {
							T.stopPropagation();
							return;
						}
						let A = hm(T.nativeEvent, w.activePointerId),
							_ = !0;
						A && co(A, T.currentTarget)
							? !w.isOverTarget &&
							  w.pointerType != null &&
							  ((w.isOverTarget = !0), (_ = v(T, w.pointerType)))
							: w.isOverTarget &&
							  w.pointerType != null &&
							  ((w.isOverTarget = !1), (_ = y(T, w.pointerType, !1)), E(T)),
							_ && T.stopPropagation();
					}),
					(V.onTouchEnd = T => {
						if (!T.currentTarget.contains(T.target)) return;
						if (!w.isPressed) {
							T.stopPropagation();
							return;
						}
						let A = hm(T.nativeEvent, w.activePointerId),
							_ = !0;
						A && co(A, T.currentTarget) && w.pointerType != null
							? (P(T, w.pointerType), (_ = y(T, w.pointerType)))
							: w.isOverTarget &&
							  w.pointerType != null &&
							  (_ = y(T, w.pointerType, !1)),
							_ && T.stopPropagation(),
							(w.isPressed = !1),
							(w.activePointerId = null),
							(w.isOverTarget = !1),
							(w.ignoreEmulatedMouseEvents = !0),
							w.target && !c && Na(w.target),
							m();
					}),
					(V.onTouchCancel = T => {
						T.currentTarget.contains(T.target) &&
							(T.stopPropagation(), w.isPressed && C(T));
					});
				let L = T => {
					w.isPressed &&
						T.target.contains(w.target) &&
						C({
							currentTarget: w.target,
							shiftKey: !1,
							ctrlKey: !1,
							metaKey: !1,
							altKey: !1,
						});
				};
				V.onDragStart = T => {
					T.currentTarget.contains(T.target) && C(T);
				};
			}
			return V;
		}, [x, i, l, m, c, C, E, y, v, P]);
	return (
		h.useEffect(
			() => () => {
				var w;
				c || Na((w = b.current.target) !== null && w !== void 0 ? w : void 0);
			},
			[c],
		),
		{ isPressed: s || p, pressProps: U(f, D) }
	);
}
function _p(e) {
	return e.tagName === "A" && e.hasAttribute("href");
}
function vc(e, t) {
	const { key: r, code: n } = e,
		o = t,
		a = o.getAttribute("role");
	return (
		(r === "Enter" || r === " " || r === "Spacebar" || n === "Space") &&
		!(
			(o instanceof Yt(o).HTMLInputElement && !Z2(o, r)) ||
			o instanceof Yt(o).HTMLTextAreaElement ||
			o.isContentEditable
		) &&
		!((a === "link" || (!a && _p(o))) && r !== "Enter")
	);
}
function G5(e) {
	const { targetTouches: t } = e;
	return t.length > 0 ? t[0] : null;
}
function hm(e, t) {
	const r = e.changedTouches;
	for (let n = 0; n < r.length; n++) {
		const o = r[n];
		if (o.identifier === t) return o;
	}
	return null;
}
function kr(e, t) {
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
	};
}
function Y5(e) {
	let t = 0,
		r = 0;
	return (
		e.width !== void 0
			? (t = e.width / 2)
			: e.radiusX !== void 0 && (t = e.radiusX),
		e.height !== void 0
			? (r = e.height / 2)
			: e.radiusY !== void 0 && (r = e.radiusY),
		{
			top: e.clientY - r,
			right: e.clientX + t,
			bottom: e.clientY + r,
			left: e.clientX - t,
		}
	);
}
function X5(e, t) {
	return !(
		e.left > t.right ||
		t.left > e.right ||
		e.top > t.bottom ||
		t.top > e.bottom
	);
}
function co(e, t) {
	let r = t.getBoundingClientRect(),
		n = Y5(e);
	return X5(r, n);
}
function yc(e) {
	return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function mm(e, t) {
	return e instanceof HTMLInputElement
		? !Z2(e, t)
		: e instanceof HTMLButtonElement
		? e.type !== "submit" && e.type !== "reset"
		: !_p(e);
}
const q5 = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset",
]);
function Z2(e, t) {
	return e.type === "checkbox" || e.type === "radio"
		? t === " "
		: q5.has(e.type);
}
function Q5({ children: e }) {
	let t = h.useMemo(() => ({ register: () => {} }), []);
	return k.createElement(jp.Provider, { value: t }, e);
}
class J5 {
	isDefaultPrevented() {
		return this.nativeEvent.defaultPrevented;
	}
	preventDefault() {
		(this.defaultPrevented = !0), this.nativeEvent.preventDefault();
	}
	stopPropagation() {
		this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
	}
	isPropagationStopped() {
		return !1;
	}
	persist() {}
	constructor(t, r) {
		(this.nativeEvent = r),
			(this.target = r.target),
			(this.currentTarget = r.currentTarget),
			(this.relatedTarget = r.relatedTarget),
			(this.bubbles = r.bubbles),
			(this.cancelable = r.cancelable),
			(this.defaultPrevented = r.defaultPrevented),
			(this.eventPhase = r.eventPhase),
			(this.isTrusted = r.isTrusted),
			(this.timeStamp = r.timeStamp),
			(this.type = t);
	}
}
function G2(e) {
	let t = h.useRef({ isFocused: !1, observer: null });
	Ae(() => {
		const n = t.current;
		return () => {
			n.observer && (n.observer.disconnect(), (n.observer = null));
		};
	}, []);
	let r = Je(n => {
		e == null || e(n);
	});
	return h.useCallback(
		n => {
			if (
				n.target instanceof HTMLButtonElement ||
				n.target instanceof HTMLInputElement ||
				n.target instanceof HTMLTextAreaElement ||
				n.target instanceof HTMLSelectElement
			) {
				t.current.isFocused = !0;
				let o = n.target,
					a = i => {
						(t.current.isFocused = !1),
							o.disabled && r(new J5("blur", i)),
							t.current.observer &&
								(t.current.observer.disconnect(), (t.current.observer = null));
					};
				o.addEventListener("focusout", a, { once: !0 }),
					(t.current.observer = new MutationObserver(() => {
						if (t.current.isFocused && o.disabled) {
							var i;
							(i = t.current.observer) === null ||
								i === void 0 ||
								i.disconnect();
							let s =
								o === document.activeElement ? null : document.activeElement;
							o.dispatchEvent(new FocusEvent("blur", { relatedTarget: s })),
								o.dispatchEvent(
									new FocusEvent("focusout", { bubbles: !0, relatedTarget: s }),
								);
						}
					})),
					t.current.observer.observe(o, {
						attributes: !0,
						attributeFilter: ["disabled"],
					});
			}
		},
		[r],
	);
}
function zp(e) {
	let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
	const a = h.useCallback(
			l => {
				if (l.target === l.currentTarget) return n && n(l), o && o(!1), !0;
			},
			[n, o],
		),
		i = G2(a),
		s = h.useCallback(
			l => {
				l.target === l.currentTarget &&
					document.activeElement === l.target &&
					(r && r(l), o && o(!0), i(l));
			},
			[o, r, i],
		);
	return {
		focusProps: {
			onFocus: !t && (r || o || n) ? s : void 0,
			onBlur: !t && (n || o) ? a : void 0,
		},
	};
}
let Wr = null,
	yi = new Set(),
	Xa = new Map(),
	to = !1,
	Jd = !1;
const e$ = { Tab: !0, Escape: !0 };
function bu(e, t) {
	for (let r of yi) r(e, t);
}
function t$(e) {
	return !(
		e.metaKey ||
		(!Pn() && e.altKey) ||
		e.ctrlKey ||
		e.key === "Control" ||
		e.key === "Shift" ||
		e.key === "Meta"
	);
}
function Cl(e) {
	(to = !0), t$(e) && ((Wr = "keyboard"), bu("keyboard", e));
}
function Zt(e) {
	(Wr = "pointer"),
		(e.type === "mousedown" || e.type === "pointerdown") &&
			((to = !0), bu("pointer", e));
}
function Y2(e) {
	Gd(e) && ((to = !0), (Wr = "virtual"));
}
function X2(e) {
	e.target === window ||
		e.target === document ||
		(!to && !Jd && ((Wr = "virtual"), bu("virtual", e)), (to = !1), (Jd = !1));
}
function q2() {
	(to = !1), (Jd = !0);
}
function El(e) {
	if (typeof window > "u" || Xa.get(Yt(e))) return;
	const t = Yt(e),
		r = Me(e);
	let n = t.HTMLElement.prototype.focus;
	(t.HTMLElement.prototype.focus = function () {
		(to = !0), n.apply(this, arguments);
	}),
		r.addEventListener("keydown", Cl, !0),
		r.addEventListener("keyup", Cl, !0),
		r.addEventListener("click", Y2, !0),
		t.addEventListener("focus", X2, !0),
		t.addEventListener("blur", q2, !1),
		typeof PointerEvent < "u"
			? (r.addEventListener("pointerdown", Zt, !0),
			  r.addEventListener("pointermove", Zt, !0),
			  r.addEventListener("pointerup", Zt, !0))
			: (r.addEventListener("mousedown", Zt, !0),
			  r.addEventListener("mousemove", Zt, !0),
			  r.addEventListener("mouseup", Zt, !0)),
		t.addEventListener(
			"beforeunload",
			() => {
				Q2(e);
			},
			{ once: !0 },
		),
		Xa.set(t, { focus: n });
}
const Q2 = (e, t) => {
	const r = Yt(e),
		n = Me(e);
	t && n.removeEventListener("DOMContentLoaded", t),
		Xa.has(r) &&
			((r.HTMLElement.prototype.focus = Xa.get(r).focus),
			n.removeEventListener("keydown", Cl, !0),
			n.removeEventListener("keyup", Cl, !0),
			n.removeEventListener("click", Y2, !0),
			r.removeEventListener("focus", X2, !0),
			r.removeEventListener("blur", q2, !1),
			typeof PointerEvent < "u"
				? (n.removeEventListener("pointerdown", Zt, !0),
				  n.removeEventListener("pointermove", Zt, !0),
				  n.removeEventListener("pointerup", Zt, !0))
				: (n.removeEventListener("mousedown", Zt, !0),
				  n.removeEventListener("mousemove", Zt, !0),
				  n.removeEventListener("mouseup", Zt, !0)),
			Xa.delete(r));
};
function r$(e) {
	const t = Me(e);
	let r;
	return (
		t.readyState !== "loading"
			? El(e)
			: ((r = () => {
					El(e);
			  }),
			  t.addEventListener("DOMContentLoaded", r)),
		() => Q2(e, r)
	);
}
typeof document < "u" && r$();
function ra() {
	return Wr !== "pointer";
}
function kl() {
	return Wr;
}
function Bp(e) {
	(Wr = e), bu(e, null);
}
function n$() {
	El();
	let [e, t] = h.useState(Wr);
	return (
		h.useEffect(() => {
			let r = () => {
				t(Wr);
			};
			return (
				yi.add(r),
				() => {
					yi.delete(r);
				}
			);
		}, []),
		ca() ? null : e
	);
}
const o$ = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset",
]);
function a$(e, t, r) {
	var n;
	const o =
			typeof window < "u"
				? Yt(r == null ? void 0 : r.target).HTMLInputElement
				: HTMLInputElement,
		a =
			typeof window < "u"
				? Yt(r == null ? void 0 : r.target).HTMLTextAreaElement
				: HTMLTextAreaElement,
		i =
			typeof window < "u"
				? Yt(r == null ? void 0 : r.target).HTMLElement
				: HTMLElement,
		s =
			typeof window < "u"
				? Yt(r == null ? void 0 : r.target).KeyboardEvent
				: KeyboardEvent;
	return (
		(e =
			e ||
			((r == null ? void 0 : r.target) instanceof o &&
				!o$.has(
					r == null || (n = r.target) === null || n === void 0
						? void 0
						: n.type,
				)) ||
			(r == null ? void 0 : r.target) instanceof a ||
			((r == null ? void 0 : r.target) instanceof i &&
				(r == null ? void 0 : r.target.isContentEditable))),
		!(e && t === "keyboard" && r instanceof s && !e$[r.key])
	);
}
function i$(e, t, r) {
	El(),
		h.useEffect(() => {
			let n = (o, a) => {
				a$(!!(r != null && r.isTextInput), o, a) && e(ra());
			};
			return (
				yi.add(n),
				() => {
					yi.delete(n);
				}
			);
		}, t);
}
function da(e) {
	let {
			isDisabled: t,
			onBlurWithin: r,
			onFocusWithin: n,
			onFocusWithinChange: o,
		} = e,
		a = h.useRef({ isFocusWithin: !1 }),
		i = h.useCallback(
			u => {
				a.current.isFocusWithin &&
					!u.currentTarget.contains(u.relatedTarget) &&
					((a.current.isFocusWithin = !1), r && r(u), o && o(!1));
			},
			[r, o, a],
		),
		s = G2(i),
		l = h.useCallback(
			u => {
				!a.current.isFocusWithin &&
					document.activeElement === u.target &&
					(n && n(u), o && o(!0), (a.current.isFocusWithin = !0), s(u));
			},
			[n, o, s],
		);
	return t
		? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
		: { focusWithinProps: { onFocus: l, onBlur: i } };
}
let Tl = !1,
	bc = 0;
function ef() {
	(Tl = !0),
		setTimeout(() => {
			Tl = !1;
		}, 50);
}
function gm(e) {
	e.pointerType === "touch" && ef();
}
function s$() {
	if (!(typeof document > "u"))
		return (
			typeof PointerEvent < "u"
				? document.addEventListener("pointerup", gm)
				: document.addEventListener("touchend", ef),
			bc++,
			() => {
				bc--,
					!(bc > 0) &&
						(typeof PointerEvent < "u"
							? document.removeEventListener("pointerup", gm)
							: document.removeEventListener("touchend", ef));
			}
		);
}
function kt(e) {
	let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e,
		[a, i] = h.useState(!1),
		s = h.useRef({
			isHovered: !1,
			ignoreEmulatedMouseEvents: !1,
			pointerType: "",
			target: null,
		}).current;
	h.useEffect(s$, []);
	let { hoverProps: l, triggerHoverEnd: u } = h.useMemo(() => {
		let c = (p, g) => {
				if (
					((s.pointerType = g),
					o ||
						g === "touch" ||
						s.isHovered ||
						!p.currentTarget.contains(p.target))
				)
					return;
				s.isHovered = !0;
				let b = p.currentTarget;
				(s.target = b),
					t && t({ type: "hoverstart", target: b, pointerType: g }),
					r && r(!0),
					i(!0);
			},
			d = (p, g) => {
				if (
					((s.pointerType = ""),
					(s.target = null),
					g === "touch" || !s.isHovered)
				)
					return;
				s.isHovered = !1;
				let b = p.currentTarget;
				n && n({ type: "hoverend", target: b, pointerType: g }),
					r && r(!1),
					i(!1);
			},
			f = {};
		return (
			typeof PointerEvent < "u"
				? ((f.onPointerEnter = p => {
						(Tl && p.pointerType === "mouse") || c(p, p.pointerType);
				  }),
				  (f.onPointerLeave = p => {
						!o && p.currentTarget.contains(p.target) && d(p, p.pointerType);
				  }))
				: ((f.onTouchStart = () => {
						s.ignoreEmulatedMouseEvents = !0;
				  }),
				  (f.onMouseEnter = p => {
						!s.ignoreEmulatedMouseEvents && !Tl && c(p, "mouse"),
							(s.ignoreEmulatedMouseEvents = !1);
				  }),
				  (f.onMouseLeave = p => {
						!o && p.currentTarget.contains(p.target) && d(p, "mouse");
				  })),
			{ hoverProps: f, triggerHoverEnd: d }
		);
	}, [t, r, n, o, s]);
	return (
		h.useEffect(() => {
			o && u({ currentTarget: s.target }, s.pointerType);
		}, [o]),
		{ hoverProps: l, isHovered: a }
	);
}
function l$(e) {
	let {
			ref: t,
			onInteractOutside: r,
			isDisabled: n,
			onInteractOutsideStart: o,
		} = e,
		a = h.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
		i = Je(l => {
			r && hs(l, t) && (o && o(l), (a.current.isPointerDown = !0));
		}),
		s = Je(l => {
			r && r(l);
		});
	h.useEffect(() => {
		let l = a.current;
		if (n) return;
		const u = t.current,
			c = Me(u);
		if (typeof PointerEvent < "u") {
			let d = f => {
				l.isPointerDown && hs(f, t) && s(f), (l.isPointerDown = !1);
			};
			return (
				c.addEventListener("pointerdown", i, !0),
				c.addEventListener("pointerup", d, !0),
				() => {
					c.removeEventListener("pointerdown", i, !0),
						c.removeEventListener("pointerup", d, !0);
				}
			);
		} else {
			let d = p => {
					l.ignoreEmulatedMouseEvents
						? (l.ignoreEmulatedMouseEvents = !1)
						: l.isPointerDown && hs(p, t) && s(p),
						(l.isPointerDown = !1);
				},
				f = p => {
					(l.ignoreEmulatedMouseEvents = !0),
						l.isPointerDown && hs(p, t) && s(p),
						(l.isPointerDown = !1);
				};
			return (
				c.addEventListener("mousedown", i, !0),
				c.addEventListener("mouseup", d, !0),
				c.addEventListener("touchstart", i, !0),
				c.addEventListener("touchend", f, !0),
				() => {
					c.removeEventListener("mousedown", i, !0),
						c.removeEventListener("mouseup", d, !0),
						c.removeEventListener("touchstart", i, !0),
						c.removeEventListener("touchend", f, !0);
				}
			);
		}
	}, [t, n, i, s]);
}
function hs(e, t) {
	if (e.button > 0) return !1;
	if (e.target) {
		const r = e.target.ownerDocument;
		if (
			!r ||
			!r.documentElement.contains(e.target) ||
			e.target.closest("[data-react-aria-top-layer]")
		)
			return !1;
	}
	return t.current && !t.current.contains(e.target);
}
function vm(e) {
	if (!e) return;
	let t = !0;
	return r => {
		let n = {
			...r,
			preventDefault() {
				r.preventDefault();
			},
			isDefaultPrevented() {
				return r.isDefaultPrevented();
			},
			stopPropagation() {
				console.error(
					"stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.",
				);
			},
			continuePropagation() {
				t = !1;
			},
		};
		e(n), t && r.stopPropagation();
	};
}
function Kp(e) {
	return {
		keyboardProps: e.isDisabled
			? {}
			: { onKeyDown: vm(e.onKeyDown), onKeyUp: vm(e.onKeyUp) },
	};
}
function J2(e) {
	let { onMoveStart: t, onMove: r, onMoveEnd: n } = e,
		o = h.useRef({ didMove: !1, lastPosition: null, id: null }),
		{ addGlobalListener: a, removeGlobalListener: i } = Di(),
		s = Je((c, d, f, p) => {
			(f === 0 && p === 0) ||
				(o.current.didMove ||
					((o.current.didMove = !0),
					t == null ||
						t({
							type: "movestart",
							pointerType: d,
							shiftKey: c.shiftKey,
							metaKey: c.metaKey,
							ctrlKey: c.ctrlKey,
							altKey: c.altKey,
						})),
				r == null ||
					r({
						type: "move",
						pointerType: d,
						deltaX: f,
						deltaY: p,
						shiftKey: c.shiftKey,
						metaKey: c.metaKey,
						ctrlKey: c.ctrlKey,
						altKey: c.altKey,
					}));
		}),
		l = Je((c, d) => {
			Na(),
				o.current.didMove &&
					(n == null ||
						n({
							type: "moveend",
							pointerType: d,
							shiftKey: c.shiftKey,
							metaKey: c.metaKey,
							ctrlKey: c.ctrlKey,
							altKey: c.altKey,
						}));
		});
	return {
		moveProps: h.useMemo(() => {
			let c = {},
				d = () => {
					Qd(), (o.current.didMove = !1);
				};
			if (typeof PointerEvent > "u") {
				let p = m => {
						if (m.button === 0) {
							var v, y, P, C;
							s(
								m,
								"mouse",
								m.pageX -
									((P =
										(v = o.current.lastPosition) === null || v === void 0
											? void 0
											: v.pageX) !== null && P !== void 0
										? P
										: 0),
								m.pageY -
									((C =
										(y = o.current.lastPosition) === null || y === void 0
											? void 0
											: y.pageY) !== null && C !== void 0
										? C
										: 0),
							),
								(o.current.lastPosition = { pageX: m.pageX, pageY: m.pageY });
						}
					},
					g = m => {
						m.button === 0 &&
							(l(m, "mouse"),
							i(window, "mousemove", p, !1),
							i(window, "mouseup", g, !1));
					};
				c.onMouseDown = m => {
					m.button === 0 &&
						(d(),
						m.stopPropagation(),
						m.preventDefault(),
						(o.current.lastPosition = { pageX: m.pageX, pageY: m.pageY }),
						a(window, "mousemove", p, !1),
						a(window, "mouseup", g, !1));
				};
				let b = m => {
						let v = [...m.changedTouches].findIndex(
							({ identifier: D }) => D === o.current.id,
						);
						if (v >= 0) {
							var y, P;
							let { pageX: D, pageY: w } = m.changedTouches[v];
							var C, E;
							s(
								m,
								"touch",
								D -
									((C =
										(y = o.current.lastPosition) === null || y === void 0
											? void 0
											: y.pageX) !== null && C !== void 0
										? C
										: 0),
								w -
									((E =
										(P = o.current.lastPosition) === null || P === void 0
											? void 0
											: P.pageY) !== null && E !== void 0
										? E
										: 0),
							),
								(o.current.lastPosition = { pageX: D, pageY: w });
						}
					},
					x = m => {
						[...m.changedTouches].findIndex(
							({ identifier: y }) => y === o.current.id,
						) >= 0 &&
							(l(m, "touch"),
							(o.current.id = null),
							i(window, "touchmove", b),
							i(window, "touchend", x),
							i(window, "touchcancel", x));
					};
				c.onTouchStart = m => {
					if (m.changedTouches.length === 0 || o.current.id != null) return;
					let { pageX: v, pageY: y, identifier: P } = m.changedTouches[0];
					d(),
						m.stopPropagation(),
						m.preventDefault(),
						(o.current.lastPosition = { pageX: v, pageY: y }),
						(o.current.id = P),
						a(window, "touchmove", b, !1),
						a(window, "touchend", x, !1),
						a(window, "touchcancel", x, !1);
				};
			} else {
				let p = b => {
						if (b.pointerId === o.current.id) {
							var x, m;
							let P = b.pointerType || "mouse";
							var v, y;
							s(
								b,
								P,
								b.pageX -
									((v =
										(x = o.current.lastPosition) === null || x === void 0
											? void 0
											: x.pageX) !== null && v !== void 0
										? v
										: 0),
								b.pageY -
									((y =
										(m = o.current.lastPosition) === null || m === void 0
											? void 0
											: m.pageY) !== null && y !== void 0
										? y
										: 0),
							),
								(o.current.lastPosition = { pageX: b.pageX, pageY: b.pageY });
						}
					},
					g = b => {
						if (b.pointerId === o.current.id) {
							let x = b.pointerType || "mouse";
							l(b, x),
								(o.current.id = null),
								i(window, "pointermove", p, !1),
								i(window, "pointerup", g, !1),
								i(window, "pointercancel", g, !1);
						}
					};
				c.onPointerDown = b => {
					b.button === 0 &&
						o.current.id == null &&
						(d(),
						b.stopPropagation(),
						b.preventDefault(),
						(o.current.lastPosition = { pageX: b.pageX, pageY: b.pageY }),
						(o.current.id = b.pointerId),
						a(window, "pointermove", p, !1),
						a(window, "pointerup", g, !1),
						a(window, "pointercancel", g, !1));
				};
			}
			let f = (p, g, b) => {
				d(), s(p, "keyboard", g, b), l(p, "keyboard");
			};
			return (
				(c.onKeyDown = p => {
					switch (p.key) {
						case "Left":
						case "ArrowLeft":
							p.preventDefault(), p.stopPropagation(), f(p, -1, 0);
							break;
						case "Right":
						case "ArrowRight":
							p.preventDefault(), p.stopPropagation(), f(p, 1, 0);
							break;
						case "Up":
						case "ArrowUp":
							p.preventDefault(), p.stopPropagation(), f(p, 0, -1);
							break;
						case "Down":
						case "ArrowDown":
							p.preventDefault(), p.stopPropagation(), f(p, 0, 1);
							break;
					}
				}),
				c
			);
		}, [o, a, i, s, l]),
	};
}
const u$ = 500;
function ex(e) {
	let {
		isDisabled: t,
		onLongPressStart: r,
		onLongPressEnd: n,
		onLongPress: o,
		threshold: a = u$,
		accessibilityDescription: i,
	} = e;
	const s = h.useRef();
	let { addGlobalListener: l, removeGlobalListener: u } = Di(),
		{ pressProps: c } = er({
			isDisabled: t,
			onPressStart(f) {
				if (
					(f.continuePropagation(),
					(f.pointerType === "mouse" || f.pointerType === "touch") &&
						(r && r({ ...f, type: "longpressstart" }),
						(s.current = setTimeout(() => {
							f.target.dispatchEvent(
								new PointerEvent("pointercancel", { bubbles: !0 }),
							),
								o && o({ ...f, type: "longpress" }),
								(s.current = void 0);
						}, a)),
						f.pointerType === "touch"))
				) {
					let p = g => {
						g.preventDefault();
					};
					l(f.target, "contextmenu", p, { once: !0 }),
						l(
							window,
							"pointerup",
							() => {
								setTimeout(() => {
									u(f.target, "contextmenu", p);
								}, 30);
							},
							{ once: !0 },
						);
				}
			},
			onPressEnd(f) {
				s.current && clearTimeout(s.current),
					n &&
						(f.pointerType === "mouse" || f.pointerType === "touch") &&
						n({ ...f, type: "longpressend" });
			},
		}),
		d = D5(o && !t ? i : void 0);
	return { longPressProps: U(c, d) };
}
function ro(e) {
	const t = Me(e);
	if (kl() === "virtual") {
		let r = t.activeElement;
		e2(() => {
			t.activeElement === r && e.isConnected && xr(e);
		});
	} else xr(e);
}
function c$(e) {
	const t = Yt(e);
	if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
	let { display: r, visibility: n } = e.style,
		o = r !== "none" && n !== "hidden" && n !== "collapse";
	if (o) {
		const { getComputedStyle: a } = e.ownerDocument.defaultView;
		let { display: i, visibility: s } = a(e);
		o = i !== "none" && s !== "hidden" && s !== "collapse";
	}
	return o;
}
function d$(e, t) {
	return (
		!e.hasAttribute("hidden") &&
		(e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY"
			? e.hasAttribute("open")
			: !0)
	);
}
function tx(e, t) {
	return (
		e.nodeName !== "#comment" &&
		c$(e) &&
		d$(e, t) &&
		(!e.parentElement || tx(e.parentElement, e))
	);
}
const ym = k.createContext(null);
let Se = null;
function rx(e) {
	let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e,
		a = h.useRef(null),
		i = h.useRef(null),
		s = h.useRef([]),
		{ parentNode: l } = h.useContext(ym) || {},
		u = h.useMemo(() => new tf({ scopeRef: s }), [s]);
	Ae(() => {
		let f = l || Be.root;
		if (Be.getTreeNode(f.scopeRef) && Se && !Al(Se, f.scopeRef)) {
			let p = Be.getTreeNode(Se);
			p && (f = p);
		}
		f.addChild(u), Be.addNode(u);
	}, [u, l]),
		Ae(() => {
			let f = Be.getTreeNode(s);
			f && (f.contain = !!r);
		}, [r]),
		Ae(() => {
			var f;
			let p = (f = a.current) === null || f === void 0 ? void 0 : f.nextSibling,
				g = [];
			for (; p && p !== i.current; ) g.push(p), (p = p.nextSibling);
			s.current = g;
		}, [t]),
		y$(s, n, r),
		m$(s, r),
		x$(s, n, r),
		v$(s, o),
		h.useEffect(() => {
			const f = Me(s.current ? s.current[0] : void 0).activeElement;
			let p = null;
			if (lt(f, s.current)) {
				for (let g of Be.traverse())
					g.scopeRef && lt(f, g.scopeRef.current) && (p = g);
				p === Be.getTreeNode(s) && (Se = p.scopeRef);
			}
		}, [s]),
		Ae(
			() => () => {
				var f, p, g;
				let b =
					(g =
						(p = Be.getTreeNode(s)) === null ||
						p === void 0 ||
						(f = p.parent) === null ||
						f === void 0
							? void 0
							: f.scopeRef) !== null && g !== void 0
						? g
						: null;
				(s === Se || Al(s, Se)) && (!b || Be.getTreeNode(b)) && (Se = b),
					Be.removeTreeNode(s);
			},
			[s],
		);
	let c = h.useMemo(() => f$(s), []),
		d = h.useMemo(() => ({ focusManager: c, parentNode: u }), [u, c]);
	return k.createElement(
		ym.Provider,
		{ value: d },
		k.createElement("span", {
			"data-focus-scope-start": !0,
			hidden: !0,
			ref: a,
		}),
		t,
		k.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: i }),
	);
}
function f$(e) {
	return {
		focusNext(t = {}) {
			let r = e.current,
				{ from: n, tabbable: o, wrap: a, accept: i } = t,
				s = n || Me(r[0]).activeElement,
				l = r[0].previousElementSibling,
				u = Hn(r),
				c = wr(u, { tabbable: o, accept: i }, r);
			c.currentNode = lt(s, r) ? s : l;
			let d = c.nextNode();
			return (
				!d && a && ((c.currentNode = l), (d = c.nextNode())), d && Lr(d, !0), d
			);
		},
		focusPrevious(t = {}) {
			let r = e.current,
				{ from: n, tabbable: o, wrap: a, accept: i } = t,
				s = n || Me(r[0]).activeElement,
				l = r[r.length - 1].nextElementSibling,
				u = Hn(r),
				c = wr(u, { tabbable: o, accept: i }, r);
			c.currentNode = lt(s, r) ? s : l;
			let d = c.previousNode();
			return (
				!d && a && ((c.currentNode = l), (d = c.previousNode())),
				d && Lr(d, !0),
				d
			);
		},
		focusFirst(t = {}) {
			let r = e.current,
				{ tabbable: n, accept: o } = t,
				a = Hn(r),
				i = wr(a, { tabbable: n, accept: o }, r);
			i.currentNode = r[0].previousElementSibling;
			let s = i.nextNode();
			return s && Lr(s, !0), s;
		},
		focusLast(t = {}) {
			let r = e.current,
				{ tabbable: n, accept: o } = t,
				a = Hn(r),
				i = wr(a, { tabbable: n, accept: o }, r);
			i.currentNode = r[r.length - 1].nextElementSibling;
			let s = i.previousNode();
			return s && Lr(s, !0), s;
		},
	};
}
const Hp = [
		"input:not([disabled]):not([type=hidden])",
		"select:not([disabled])",
		"textarea:not([disabled])",
		"button:not([disabled])",
		"a[href]",
		"area[href]",
		"summary",
		"iframe",
		"object",
		"embed",
		"audio[controls]",
		"video[controls]",
		"[contenteditable]",
	],
	p$ = Hp.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Hp.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const h$ = Hp.join(':not([hidden]):not([tabindex="-1"]),');
function Hn(e) {
	return e[0].parentElement;
}
function ja(e) {
	let t = Be.getTreeNode(Se);
	for (; t && t.scopeRef !== e; ) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function m$(e, t) {
	let r = h.useRef(),
		n = h.useRef();
	Ae(() => {
		let o = e.current;
		if (!t) {
			n.current && (cancelAnimationFrame(n.current), (n.current = void 0));
			return;
		}
		const a = Me(o ? o[0] : void 0);
		let i = u => {
				if (u.key !== "Tab" || u.altKey || u.ctrlKey || u.metaKey || !ja(e))
					return;
				let c = a.activeElement,
					d = e.current;
				if (!d || !lt(c, d)) return;
				let f = Hn(d),
					p = wr(f, { tabbable: !0 }, d);
				if (!c) return;
				p.currentNode = c;
				let g = u.shiftKey ? p.previousNode() : p.nextNode();
				g ||
					((p.currentNode = u.shiftKey
						? d[d.length - 1].nextElementSibling
						: d[0].previousElementSibling),
					(g = u.shiftKey ? p.previousNode() : p.nextNode())),
					u.preventDefault(),
					g && Lr(g, !0);
			},
			s = u => {
				(!Se || Al(Se, e)) && lt(u.target, e.current)
					? ((Se = e), (r.current = u.target))
					: ja(e) && !Ml(u.target, e)
					? r.current
						? r.current.focus()
						: Se && Se.current && Dl(Se.current)
					: ja(e) && (r.current = u.target);
			},
			l = u => {
				n.current && cancelAnimationFrame(n.current),
					(n.current = requestAnimationFrame(() => {
						if (a.activeElement && ja(e) && !Ml(a.activeElement, e))
							if (((Se = e), a.body.contains(u.target))) {
								var c;
								(r.current = u.target),
									(c = r.current) === null || c === void 0 || c.focus();
							} else Se.current && Dl(Se.current);
					}));
			};
		return (
			a.addEventListener("keydown", i, !1),
			a.addEventListener("focusin", s, !1),
			o == null || o.forEach(u => u.addEventListener("focusin", s, !1)),
			o == null || o.forEach(u => u.addEventListener("focusout", l, !1)),
			() => {
				a.removeEventListener("keydown", i, !1),
					a.removeEventListener("focusin", s, !1),
					o == null || o.forEach(u => u.removeEventListener("focusin", s, !1)),
					o == null || o.forEach(u => u.removeEventListener("focusout", l, !1));
			}
		);
	}, [e, t]),
		Ae(
			() => () => {
				n.current && cancelAnimationFrame(n.current);
			},
			[n],
		);
}
function nx(e) {
	return Ml(e);
}
function lt(e, t) {
	return !e || !t ? !1 : t.some(r => r.contains(e));
}
function Ml(e, t = null) {
	if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
		return !0;
	for (let { scopeRef: r } of Be.traverse(Be.getTreeNode(t)))
		if (r && lt(e, r.current)) return !0;
	return !1;
}
function g$(e) {
	return Ml(e, Se);
}
function Al(e, t) {
	var r;
	let n = (r = Be.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
	for (; n; ) {
		if (n.scopeRef === e) return !0;
		n = n.parent;
	}
	return !1;
}
function Lr(e, t = !1) {
	if (e != null && !t)
		try {
			ro(e);
		} catch {}
	else if (e != null)
		try {
			e.focus();
		} catch {}
}
function Dl(e, t = !0) {
	let r = e[0].previousElementSibling,
		n = Hn(e),
		o = wr(n, { tabbable: t }, e);
	o.currentNode = r;
	let a = o.nextNode();
	t &&
		!a &&
		((n = Hn(e)),
		(o = wr(n, { tabbable: !1 }, e)),
		(o.currentNode = r),
		(a = o.nextNode())),
		Lr(a);
}
function v$(e, t) {
	const r = k.useRef(t);
	h.useEffect(() => {
		if (r.current) {
			Se = e;
			const n = Me(e.current ? e.current[0] : void 0);
			!lt(n.activeElement, Se.current) && e.current && Dl(e.current);
		}
		r.current = !1;
	}, [e]);
}
function y$(e, t, r) {
	Ae(() => {
		if (t || r) return;
		let n = e.current;
		const o = Me(n ? n[0] : void 0);
		let a = i => {
			let s = i.target;
			lt(s, e.current) ? (Se = e) : nx(s) || (Se = null);
		};
		return (
			o.addEventListener("focusin", a, !1),
			n == null || n.forEach(i => i.addEventListener("focusin", a, !1)),
			() => {
				o.removeEventListener("focusin", a, !1),
					n == null || n.forEach(i => i.removeEventListener("focusin", a, !1));
			}
		);
	}, [e, t, r]);
}
function b$(e) {
	let t = Be.getTreeNode(Se);
	for (; t && t.scopeRef !== e; ) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return (t == null ? void 0 : t.scopeRef) === e;
}
function x$(e, t, r) {
	const n = h.useRef(
		typeof document < "u"
			? Me(e.current ? e.current[0] : void 0).activeElement
			: null,
	);
	Ae(() => {
		let o = e.current;
		const a = Me(o ? o[0] : void 0);
		if (!t || r) return;
		let i = () => {
			(!Se || Al(Se, e)) && lt(a.activeElement, e.current) && (Se = e);
		};
		return (
			a.addEventListener("focusin", i, !1),
			o == null || o.forEach(s => s.addEventListener("focusin", i, !1)),
			() => {
				a.removeEventListener("focusin", i, !1),
					o == null || o.forEach(s => s.removeEventListener("focusin", i, !1));
			}
		);
	}, [e, r]),
		Ae(() => {
			const o = Me(e.current ? e.current[0] : void 0);
			if (!t) return;
			let a = i => {
				if (i.key !== "Tab" || i.altKey || i.ctrlKey || i.metaKey || !ja(e))
					return;
				let s = o.activeElement;
				if (!lt(s, e.current)) return;
				let l = Be.getTreeNode(e);
				if (!l) return;
				let u = l.nodeToRestore,
					c = wr(o.body, { tabbable: !0 });
				c.currentNode = s;
				let d = i.shiftKey ? c.previousNode() : c.nextNode();
				if (
					((!u || !o.body.contains(u) || u === o.body) &&
						((u = void 0), (l.nodeToRestore = void 0)),
					(!d || !lt(d, e.current)) && u)
				) {
					c.currentNode = u;
					do d = i.shiftKey ? c.previousNode() : c.nextNode();
					while (lt(d, e.current));
					i.preventDefault(),
						i.stopPropagation(),
						d ? Lr(d, !0) : nx(u) ? Lr(u, !0) : s.blur();
				}
			};
			return (
				r || o.addEventListener("keydown", a, !0),
				() => {
					r || o.removeEventListener("keydown", a, !0);
				}
			);
		}, [e, t, r]),
		Ae(() => {
			const o = Me(e.current ? e.current[0] : void 0);
			if (!t) return;
			let a = Be.getTreeNode(e);
			if (a) {
				var i;
				return (
					(a.nodeToRestore =
						(i = n.current) !== null && i !== void 0 ? i : void 0),
					() => {
						let s = Be.getTreeNode(e);
						if (!s) return;
						let l = s.nodeToRestore;
						if (
							t &&
							l &&
							(lt(o.activeElement, e.current) ||
								(o.activeElement === o.body && b$(e)))
						) {
							let u = Be.clone();
							requestAnimationFrame(() => {
								if (o.activeElement === o.body) {
									let c = u.getTreeNode(e);
									for (; c; ) {
										if (c.nodeToRestore && c.nodeToRestore.isConnected) {
											Lr(c.nodeToRestore);
											return;
										}
										c = c.parent;
									}
									for (c = u.getTreeNode(e); c; ) {
										if (
											c.scopeRef &&
											c.scopeRef.current &&
											Be.getTreeNode(c.scopeRef)
										) {
											Dl(c.scopeRef.current, !0);
											return;
										}
										c = c.parent;
									}
								}
							});
						}
					}
				);
			}
		}, [e, t]);
}
function wr(e, t, r) {
	let n = t != null && t.tabbable ? h$ : p$,
		o = Me(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode(a) {
				var i;
				return !(t == null || (i = t.from) === null || i === void 0) &&
					i.contains(a)
					? NodeFilter.FILTER_REJECT
					: a.matches(n) &&
					  tx(a) &&
					  (!r || lt(a, r)) &&
					  (!(t != null && t.accept) || t.accept(a))
					? NodeFilter.FILTER_ACCEPT
					: NodeFilter.FILTER_SKIP;
			},
		});
	return t != null && t.from && (o.currentNode = t.from), o;
}
class Wp {
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(t) {
		return this.fastMap.get(t);
	}
	addTreeNode(t, r, n) {
		let o = this.fastMap.get(r ?? null);
		if (!o) return;
		let a = new tf({ scopeRef: t });
		o.addChild(a),
			(a.parent = o),
			this.fastMap.set(t, a),
			n && (a.nodeToRestore = n);
	}
	addNode(t) {
		this.fastMap.set(t.scopeRef, t);
	}
	removeTreeNode(t) {
		if (t === null) return;
		let r = this.fastMap.get(t);
		if (!r) return;
		let n = r.parent;
		for (let a of this.traverse())
			a !== r &&
				r.nodeToRestore &&
				a.nodeToRestore &&
				r.scopeRef &&
				r.scopeRef.current &&
				lt(a.nodeToRestore, r.scopeRef.current) &&
				(a.nodeToRestore = r.nodeToRestore);
		let o = r.children;
		n && (n.removeChild(r), o.size > 0 && o.forEach(a => n && n.addChild(a))),
			this.fastMap.delete(r.scopeRef);
	}
	*traverse(t = this.root) {
		if ((t.scopeRef != null && (yield t), t.children.size > 0))
			for (let r of t.children) yield* this.traverse(r);
	}
	clone() {
		var t;
		let r = new Wp();
		var n;
		for (let o of this.traverse())
			r.addTreeNode(
				o.scopeRef,
				(n = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !==
					null && n !== void 0
					? n
					: null,
				o.nodeToRestore,
			);
		return r;
	}
	constructor() {
		(this.fastMap = new Map()),
			(this.root = new tf({ scopeRef: null })),
			this.fastMap.set(null, this.root);
	}
}
class tf {
	addChild(t) {
		this.children.add(t), (t.parent = this);
	}
	removeChild(t) {
		this.children.delete(t), (t.parent = void 0);
	}
	constructor(t) {
		(this.children = new Set()),
			(this.contain = !1),
			(this.scopeRef = t.scopeRef);
	}
}
let Be = new Wp();
function gt(e = {}) {
	let { autoFocus: t = !1, isTextInput: r, within: n } = e,
		o = h.useRef({ isFocused: !1, isFocusVisible: t || ra() }),
		[a, i] = h.useState(!1),
		[s, l] = h.useState(() => o.current.isFocused && o.current.isFocusVisible),
		u = h.useCallback(
			() => l(o.current.isFocused && o.current.isFocusVisible),
			[],
		),
		c = h.useCallback(
			p => {
				(o.current.isFocused = p), i(p), u();
			},
			[u],
		);
	i$(
		p => {
			(o.current.isFocusVisible = p), u();
		},
		[],
		{ isTextInput: r },
	);
	let { focusProps: d } = zp({ isDisabled: n, onFocusChange: c }),
		{ focusWithinProps: f } = da({ isDisabled: !n, onFocusWithinChange: c });
	return { isFocused: a, isFocusVisible: s, focusProps: n ? f : d };
}
let w$ = k.createContext(null);
function S$(e) {
	let t = h.useContext(w$) || {};
	t2(t, e);
	let { ref: r, ...n } = t;
	return n;
}
function fa(e, t) {
	let { focusProps: r } = zp(e),
		{ keyboardProps: n } = Kp(e),
		o = U(r, n),
		a = S$(t),
		i = e.isDisabled ? {} : a,
		s = h.useRef(e.autoFocus);
	return (
		h.useEffect(() => {
			s.current && t.current && ro(t.current), (s.current = !1);
		}, [t]),
		{
			focusableProps: U(
				{
					...o,
					tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
				},
				i,
			),
		}
	);
}
function P$(e, t) {
	let r = t == null ? void 0 : t.isDisabled,
		[n, o] = h.useState(!1);
	return (
		Ae(() => {
			if (e != null && e.current && !r) {
				let a = () => {
					if (e.current) {
						let s = wr(e.current, { tabbable: !0 });
						o(!!s.nextNode());
					}
				};
				a();
				let i = new MutationObserver(a);
				return (
					i.observe(e.current, {
						subtree: !0,
						childList: !0,
						attributes: !0,
						attributeFilter: ["tabIndex", "disabled"],
					}),
					() => {
						i.disconnect();
					}
				);
			}
		}),
		r ? !1 : n
	);
}
const bm = {
	border: 0,
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "absolute",
	width: "1px",
	whiteSpace: "nowrap",
};
function ox(e = {}) {
	let { style: t, isFocusable: r } = e,
		[n, o] = h.useState(!1),
		{ focusWithinProps: a } = da({
			isDisabled: !r,
			onFocusWithinChange: s => o(s),
		}),
		i = h.useMemo(() => (n ? t : t ? { ...bm, ...t } : bm), [n]);
	return { visuallyHiddenProps: { ...a, style: i } };
}
function Ii(e) {
	let {
			children: t,
			elementType: r = "div",
			isFocusable: n,
			style: o,
			...a
		} = e,
		{ visuallyHiddenProps: i } = ox(e);
	return k.createElement(r, U(a, i), t);
}
function $$(e) {
	return e && e.__esModule ? e.default : e;
}
const Do = { top: "top", bottom: "top", left: "left", right: "left" },
	Il = { top: "bottom", bottom: "top", left: "right", right: "left" },
	C$ = { top: "left", left: "top" },
	rf = { top: "height", left: "width" },
	ax = { width: "totalWidth", height: "totalHeight" },
	ms = {};
let wt = typeof document < "u" && window.visualViewport;
function xm(e) {
	let t = 0,
		r = 0,
		n = 0,
		o = 0,
		a = 0,
		i = 0,
		s = {},
		l = (wt == null ? void 0 : wt.scale) > 1;
	if (e.tagName === "BODY") {
		let d = document.documentElement;
		(n = d.clientWidth), (o = d.clientHeight);
		var u;
		t = (u = wt == null ? void 0 : wt.width) !== null && u !== void 0 ? u : n;
		var c;
		(r =
			(c = wt == null ? void 0 : wt.height) !== null && c !== void 0 ? c : o),
			(s.top = d.scrollTop || e.scrollTop),
			(s.left = d.scrollLeft || e.scrollLeft),
			wt && ((a = wt.offsetTop), (i = wt.offsetLeft));
	} else
		({ width: t, height: r, top: a, left: i } = Ko(e)),
			(s.top = e.scrollTop),
			(s.left = e.scrollLeft),
			(n = t),
			(o = r);
	return (
		Np() &&
			(e.tagName === "BODY" || e.tagName === "HTML") &&
			l &&
			((s.top = 0), (s.left = 0), (a = wt.pageTop), (i = wt.pageLeft)),
		{
			width: t,
			height: r,
			totalWidth: n,
			totalHeight: o,
			scroll: s,
			top: a,
			left: i,
		}
	);
}
function E$(e) {
	return {
		top: e.scrollTop,
		left: e.scrollLeft,
		width: e.scrollWidth,
		height: e.scrollHeight,
	};
}
function wm(e, t, r, n, o, a, i) {
	let s = o.scroll[e],
		l = n[rf[e]],
		u = n.scroll[Do[e]] + a,
		c = l + n.scroll[Do[e]] - a,
		d = t - s + i[e] - n[Do[e]],
		f = t - s + r + i[e] - n[Do[e]];
	return d < u ? u - d : f > c ? Math.max(c - f, u - d) : 0;
}
function k$(e) {
	let t = window.getComputedStyle(e);
	return {
		top: parseInt(t.marginTop, 10) || 0,
		bottom: parseInt(t.marginBottom, 10) || 0,
		left: parseInt(t.marginLeft, 10) || 0,
		right: parseInt(t.marginRight, 10) || 0,
	};
}
function Sm(e) {
	if (ms[e]) return ms[e];
	let [t, r] = e.split(" "),
		n = Do[t] || "right",
		o = C$[n];
	Do[r] || (r = "center");
	let a = rf[n],
		i = rf[o];
	return (
		(ms[e] = {
			placement: t,
			crossPlacement: r,
			axis: n,
			crossAxis: o,
			size: a,
			crossSize: i,
		}),
		ms[e]
	);
}
function xc(e, t, r, n, o, a, i, s, l, u) {
	let {
			placement: c,
			crossPlacement: d,
			axis: f,
			crossAxis: p,
			size: g,
			crossSize: b,
		} = n,
		x = {};
	(x[p] = e[p]),
		d === "center"
			? (x[p] += (e[b] - r[b]) / 2)
			: d !== p && (x[p] += e[b] - r[b]),
		(x[p] += a);
	const m = e[p] - r[b] + l + u,
		v = e[p] + e[b] - l - u;
	if (((x[p] = ta(x[p], m, v)), c === f)) {
		const y = s ? i[g] : t[ax[g]];
		x[Il[f]] = Math.floor(y - e[f] + o);
	} else x[f] = Math.floor(e[f] + e[g] + o);
	return x;
}
function T$(e, t, r, n, o, a, i, s) {
	const l = n ? r.height : t[ax.height];
	let u = e.top != null ? r.top + e.top : r.top + (l - e.bottom - i),
		c =
			s !== "top"
				? Math.max(
						0,
						t.height + t.top + t.scroll.top - u - (o.top + o.bottom + a),
				  )
				: Math.max(0, u + i - (t.top + t.scroll.top) - (o.top + o.bottom + a));
	return Math.min(t.height - a * 2, c);
}
function Pm(e, t, r, n, o, a) {
	let { placement: i, axis: s, size: l } = a;
	return i === s
		? Math.max(0, r[s] - e[s] - e.scroll[s] + t[s] - n[s] - n[Il[s]] - o)
		: Math.max(
				0,
				e[l] + e[s] + e.scroll[s] - t[s] - r[s] - r[l] - n[s] - n[Il[s]] - o,
		  );
}
function M$(e, t, r, n, o, a, i, s, l, u, c, d, f, p, g, b) {
	let x = Sm(e),
		{
			size: m,
			crossAxis: v,
			crossSize: y,
			placement: P,
			crossPlacement: C,
		} = x,
		E = xc(t, s, r, x, c, d, u, f, g, b),
		D = c,
		w = Pm(s, u, t, o, a + c, x);
	if (i && n[m] > w) {
		let z = Sm(`${Il[P]} ${C}`),
			I = xc(t, s, r, z, c, d, u, f, g, b);
		Pm(s, u, t, o, a + c, z) > w && ((x = z), (E = I), (D = c));
	}
	let V = "bottom";
	x.axis === "top"
		? x.placement === "top"
			? (V = "top")
			: x.placement === "bottom" && (V = "bottom")
		: x.crossAxis === "top" &&
		  (x.crossPlacement === "top"
				? (V = "bottom")
				: x.crossPlacement === "bottom" && (V = "top"));
	let M = wm(v, E[v], r[y], s, l, a, u);
	E[v] += M;
	let F = T$(E, s, u, f, o, a, r.height, V);
	p && p < F && (F = p),
		(r.height = Math.min(r.height, F)),
		(E = xc(t, s, r, x, D, d, u, f, g, b)),
		(M = wm(v, E[v], r[y], s, l, a, u)),
		(E[v] += M);
	let L = {},
		T = t[v] + 0.5 * t[y] - r[v];
	const A = g / 2 + b,
		_ = r[y] - g / 2 - b,
		N = t[v] - r[v] + g / 2,
		R = t[v] + t[y] - r[v] - g / 2,
		j = ta(T, N, R);
	return (
		(L[v] = ta(j, A, _)),
		{
			position: E,
			maxHeight: F,
			arrowOffsetLeft: L.left,
			arrowOffsetTop: L.top,
			placement: x.placement,
		}
	);
}
function A$(e) {
	let {
			placement: t,
			targetNode: r,
			overlayNode: n,
			scrollNode: o,
			padding: a,
			shouldFlip: i,
			boundaryElement: s,
			offset: l,
			crossOffset: u,
			maxHeight: c,
			arrowSize: d = 0,
			arrowBoundaryOffset: f = 0,
		} = e,
		p = n instanceof HTMLElement ? D$(n) : document.documentElement,
		g = p === document.documentElement;
	const b = window.getComputedStyle(p).position;
	let x = !!b && b !== "static",
		m = g ? Ko(r) : $m(r, p);
	if (!g) {
		let { marginTop: w, marginLeft: V } = window.getComputedStyle(r);
		(m.top += parseInt(w, 10) || 0), (m.left += parseInt(V, 10) || 0);
	}
	let v = Ko(n),
		y = k$(n);
	(v.width += y.left + y.right), (v.height += y.top + y.bottom);
	let P = E$(o),
		C = xm(s),
		E = xm(p),
		D = s.tagName === "BODY" ? Ko(p) : $m(p, s);
	return (
		p.tagName === "HTML" &&
			s.tagName === "BODY" &&
			((E.scroll.top = 0), (E.scroll.left = 0)),
		M$(t, m, v, P, y, a, i, C, E, D, l, u, x, c, d, f)
	);
}
function Ko(e) {
	let { top: t, left: r, width: n, height: o } = e.getBoundingClientRect(),
		{
			scrollTop: a,
			scrollLeft: i,
			clientTop: s,
			clientLeft: l,
		} = document.documentElement;
	return { top: t + a - s, left: r + i - l, width: n, height: o };
}
function $m(e, t) {
	let r = window.getComputedStyle(e),
		n;
	if (r.position === "fixed") {
		let { top: o, left: a, width: i, height: s } = e.getBoundingClientRect();
		n = { top: o, left: a, width: i, height: s };
	} else {
		n = Ko(e);
		let o = Ko(t),
			a = window.getComputedStyle(t);
		(o.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop),
			(o.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft),
			(n.top -= o.top),
			(n.left -= o.left);
	}
	return (
		(n.top -= parseInt(r.marginTop, 10) || 0),
		(n.left -= parseInt(r.marginLeft, 10) || 0),
		n
	);
}
function D$(e) {
	let t = e.offsetParent;
	if (
		(t &&
			t === document.body &&
			window.getComputedStyle(t).position === "static" &&
			!Cm(t) &&
			(t = document.documentElement),
		t == null)
	)
		for (t = e.parentElement; t && !Cm(t); ) t = t.parentElement;
	return t || document.documentElement;
}
function Cm(e) {
	let t = window.getComputedStyle(e);
	return (
		t.transform !== "none" ||
		/transform|perspective/.test(t.willChange) ||
		t.filter !== "none" ||
		t.contain === "paint" ||
		("backdropFilter" in t && t.backdropFilter !== "none") ||
		("WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none")
	);
}
const ix = new WeakMap();
function I$(e) {
	let { triggerRef: t, isOpen: r, onClose: n } = e;
	h.useEffect(() => {
		if (!r || n === null) return;
		let o = a => {
			let i = a.target;
			if (!t.current || (i instanceof Node && !i.contains(t.current))) return;
			let s = n || ix.get(t.current);
			s && s();
		};
		return (
			window.addEventListener("scroll", o, !0),
			() => {
				window.removeEventListener("scroll", o, !0);
			}
		);
	}, [r, n, t]);
}
let Ne = typeof document < "u" && window.visualViewport;
function sx(e) {
	let { direction: t } = Xr(),
		{
			arrowSize: r = 0,
			targetRef: n,
			overlayRef: o,
			scrollRef: a = o,
			placement: i = "bottom",
			containerPadding: s = 12,
			shouldFlip: l = !0,
			boundaryElement: u = typeof document < "u" ? document.body : null,
			offset: c = 0,
			crossOffset: d = 0,
			shouldUpdatePosition: f = !0,
			isOpen: p = !0,
			onClose: g,
			maxHeight: b,
			arrowBoundaryOffset: x = 0,
		} = e,
		[m, v] = h.useState({
			position: {},
			arrowOffsetLeft: void 0,
			arrowOffsetTop: void 0,
			maxHeight: void 0,
			placement: void 0,
		}),
		y = [f, i, o.current, n.current, a.current, s, l, u, c, d, p, t, b, x, r],
		P = h.useRef(Ne == null ? void 0 : Ne.scale);
	h.useEffect(() => {
		p && (P.current = Ne == null ? void 0 : Ne.scale);
	}, [p]);
	let C = h.useCallback(() => {
		if (
			f === !1 ||
			!p ||
			!o.current ||
			!n.current ||
			!a.current ||
			!u ||
			(Ne == null ? void 0 : Ne.scale) !== P.current
		)
			return;
		!b && o.current && (o.current.style.maxHeight = "none");
		let w = A$({
			placement: R$(i, t),
			overlayNode: o.current,
			targetNode: n.current,
			scrollNode: a.current,
			padding: s,
			shouldFlip: l,
			boundaryElement: u,
			offset: c,
			crossOffset: d,
			maxHeight: b,
			arrowSize: r,
			arrowBoundaryOffset: x,
		});
		Object.keys(w.position).forEach(
			V => (o.current.style[V] = w.position[V] + "px"),
		),
			(o.current.style.maxHeight =
				w.maxHeight != null ? w.maxHeight + "px" : void 0),
			v(w);
	}, y);
	Ae(C, y), V$(C), M5({ ref: o, onResize: C });
	let E = h.useRef(!1);
	Ae(() => {
		let w,
			V = () => {
				(E.current = !0),
					clearTimeout(w),
					(w = setTimeout(() => {
						E.current = !1;
					}, 500)),
					C();
			},
			M = () => {
				E.current && V();
			};
		return (
			Ne == null || Ne.addEventListener("resize", V),
			Ne == null || Ne.addEventListener("scroll", M),
			() => {
				Ne == null || Ne.removeEventListener("resize", V),
					Ne == null || Ne.removeEventListener("scroll", M);
			}
		);
	}, [C]);
	let D = h.useCallback(() => {
		E.current || g();
	}, [g, E]);
	return (
		I$({ triggerRef: n, isOpen: p, onClose: g && D }),
		{
			overlayProps: {
				style: {
					position: "absolute",
					zIndex: 1e5,
					...m.position,
					maxHeight: m.maxHeight,
				},
			},
			placement: m.placement,
			arrowProps: {
				"aria-hidden": "true",
				role: "presentation",
				style: { left: m.arrowOffsetLeft, top: m.arrowOffsetTop },
			},
			updatePosition: C,
		}
	);
}
function V$(e) {
	Ae(
		() => (
			window.addEventListener("resize", e, !1),
			() => {
				window.removeEventListener("resize", e, !1);
			}
		),
		[e],
	);
}
function R$(e, t) {
	return t === "rtl"
		? e.replace("start", "right").replace("end", "left")
		: e.replace("start", "left").replace("end", "right");
}
const Tr = [];
function Up(e, t) {
	let {
		onClose: r,
		shouldCloseOnBlur: n,
		isOpen: o,
		isDismissable: a = !1,
		isKeyboardDismissDisabled: i = !1,
		shouldCloseOnInteractOutside: s,
	} = e;
	h.useEffect(
		() => (
			o && Tr.push(t),
			() => {
				let g = Tr.indexOf(t);
				g >= 0 && Tr.splice(g, 1);
			}
		),
		[o, t],
	);
	let l = () => {
			Tr[Tr.length - 1] === t && r && r();
		},
		u = g => {
			(!s || s(g.target)) &&
				Tr[Tr.length - 1] === t &&
				(g.stopPropagation(), g.preventDefault());
		},
		c = g => {
			(!s || s(g.target)) &&
				(Tr[Tr.length - 1] === t && (g.stopPropagation(), g.preventDefault()),
				l());
		},
		d = g => {
			g.key === "Escape" &&
				!i &&
				(g.stopPropagation(), g.preventDefault(), l());
		};
	l$({
		ref: t,
		onInteractOutside: a && o ? c : null,
		onInteractOutsideStart: u,
	});
	let { focusWithinProps: f } = da({
			isDisabled: !n,
			onBlurWithin: g => {
				!g.relatedTarget ||
					g$(g.relatedTarget) ||
					((!s || s(g.relatedTarget)) && r());
			},
		}),
		p = g => {
			g.target === g.currentTarget && g.preventDefault();
		};
	return {
		overlayProps: { onKeyDown: d, ...f },
		underlayProps: { onPointerDown: p },
	};
}
function lx(e, t, r) {
	let { type: n } = e,
		{ isOpen: o } = t;
	h.useEffect(() => {
		r && r.current && ix.set(r.current, t.close);
	});
	let a;
	n === "menu" ? (a = !0) : n === "listbox" && (a = "listbox");
	let i = Jt();
	return {
		triggerProps: {
			"aria-haspopup": a,
			"aria-expanded": o,
			"aria-controls": o ? i : null,
			onPress: t.toggle,
		},
		overlayProps: { id: i },
	};
}
const wc = typeof document < "u" && window.visualViewport,
	L$ = new Set([
		"checkbox",
		"radio",
		"range",
		"color",
		"file",
		"image",
		"button",
		"submit",
		"reset",
	]);
let gs = 0,
	Sc;
function F$(e = {}) {
	let { isDisabled: t } = e;
	Ae(() => {
		if (!t)
			return (
				gs++,
				gs === 1 && (mu() ? (Sc = N$()) : (Sc = O$())),
				() => {
					gs--, gs === 0 && Sc();
				}
			);
	}, [t]);
}
function O$() {
	return nt(
		Io(
			document.documentElement,
			"paddingRight",
			`${window.innerWidth - document.documentElement.clientWidth}px`,
		),
		Io(document.documentElement, "overflow", "hidden"),
	);
}
function N$() {
	let e,
		t,
		r = u => {
			(e = Sl(u.target, !0)),
				!(e === document.documentElement && e === document.body) &&
					e instanceof HTMLElement &&
					window.getComputedStyle(e).overscrollBehavior === "auto" &&
					(t = Io(e, "overscrollBehavior", "contain"));
		},
		n = u => {
			if (!e || e === document.documentElement || e === document.body) {
				u.preventDefault();
				return;
			}
			e.scrollHeight === e.clientHeight &&
				e.scrollWidth === e.clientWidth &&
				u.preventDefault();
		},
		o = u => {
			let c = u.target;
			km(c) &&
				c !== document.activeElement &&
				(u.preventDefault(),
				s(),
				(c.style.transform = "translateY(-2000px)"),
				c.focus(),
				requestAnimationFrame(() => {
					c.style.transform = "";
				})),
				t && t();
		},
		a = u => {
			let c = u.target;
			km(c) &&
				(s(),
				(c.style.transform = "translateY(-2000px)"),
				requestAnimationFrame(() => {
					(c.style.transform = ""),
						wc &&
							(wc.height < window.innerHeight
								? requestAnimationFrame(() => {
										Em(c);
								  })
								: wc.addEventListener("resize", () => Em(c), { once: !0 }));
				}));
		},
		i = null,
		s = () => {
			if (i) return;
			let u = () => {
					window.scrollTo(0, 0);
				},
				c = window.pageXOffset,
				d = window.pageYOffset;
			(i = nt(
				Ca(window, "scroll", u),
				Io(
					document.documentElement,
					"paddingRight",
					`${window.innerWidth - document.documentElement.clientWidth}px`,
				),
				Io(document.documentElement, "overflow", "hidden"),
				Io(document.body, "marginTop", `-${d}px`),
				() => {
					window.scrollTo(c, d);
				},
			)),
				window.scrollTo(0, 0);
		},
		l = nt(
			Ca(document, "touchstart", r, { passive: !1, capture: !0 }),
			Ca(document, "touchmove", n, { passive: !1, capture: !0 }),
			Ca(document, "touchend", o, { passive: !1, capture: !0 }),
			Ca(document, "focus", a, !0),
		);
	return () => {
		t == null || t(), i == null || i(), l();
	};
}
function Io(e, t, r) {
	let n = e.style[t];
	return (
		(e.style[t] = r),
		() => {
			e.style[t] = n;
		}
	);
}
function Ca(e, t, r, n) {
	return (
		e.addEventListener(t, r, n),
		() => {
			e.removeEventListener(t, r, n);
		}
	);
}
function Em(e) {
	let t = document.scrollingElement || document.documentElement;
	for (; e && e !== t; ) {
		let r = Sl(e);
		if (r !== document.documentElement && r !== document.body && r !== e) {
			let n = r.getBoundingClientRect().top,
				o = e.getBoundingClientRect().top;
			o > n + e.clientHeight && (r.scrollTop += o - n);
		}
		e = r.parentElement;
	}
}
function km(e) {
	return (
		(e instanceof HTMLInputElement && !L$.has(e.type)) ||
		e instanceof HTMLTextAreaElement ||
		(e instanceof HTMLElement && e.isContentEditable)
	);
}
const nf = k.createContext(null);
function j$(e) {
	let { children: t } = e,
		r = h.useContext(nf),
		[n, o] = h.useState(0),
		a = h.useMemo(
			() => ({
				parent: r,
				modalCount: n,
				addModal() {
					o(i => i + 1), r && r.addModal();
				},
				removeModal() {
					o(i => i - 1), r && r.removeModal();
				},
			}),
			[r, n],
		);
	return k.createElement(nf.Provider, { value: a }, t);
}
function _$() {
	let e = h.useContext(nf);
	return {
		modalProviderProps: { "aria-hidden": e && e.modalCount > 0 ? !0 : null },
	};
}
function z$(e) {
	let { modalProviderProps: t } = _$();
	return k.createElement("div", { "data-overlay-container": !0, ...e, ...t });
}
function ux(e) {
	return k.createElement(j$, null, k.createElement(z$, e));
}
function Tm(e) {
	let t = ca(),
		{ portalContainer: r = t ? null : document.body, ...n } = e;
	if (
		(k.useEffect(() => {
			if (r != null && r.closest("[data-overlay-container]"))
				throw new Error(
					"An OverlayContainer must not be inside another container. Please change the portalContainer prop.",
				);
		}, [r]),
		!r)
	)
		return null;
	let o = k.createElement(ux, n);
	return Pb.createPortal(o, r);
}
var cx = {};
cx = {
	"ar-AE": f2,
	"bg-BG": p2,
	"cs-CZ": h2,
	"da-DK": m2,
	"de-DE": g2,
	"el-GR": v2,
	"en-US": y2,
	"es-ES": b2,
	"et-EE": x2,
	"fi-FI": w2,
	"fr-FR": S2,
	"he-IL": P2,
	"hr-HR": $2,
	"hu-HU": C2,
	"it-IT": E2,
	"ja-JP": k2,
	"ko-KR": T2,
	"lt-LT": M2,
	"lv-LV": A2,
	"nb-NO": D2,
	"nl-NL": I2,
	"pl-PL": V2,
	"pt-BR": R2,
	"pt-PT": L2,
	"ro-RO": F2,
	"ru-RU": O2,
	"sk-SK": N2,
	"sl-SI": j2,
	"sr-SP": _2,
	"sv-SE": z2,
	"tr-TR": B2,
	"uk-UA": K2,
	"zh-CN": H2,
	"zh-TW": W2,
};
function na(e) {
	let { onDismiss: t, ...r } = e,
		n = l2($$(cx), "@react-aria/overlays"),
		o = vu(r, n.format("dismiss")),
		a = () => {
			t && t();
		};
	return k.createElement(
		Ii,
		null,
		k.createElement("button", {
			...o,
			tabIndex: -1,
			onClick: a,
			style: { width: 1, height: 1 },
		}),
	);
}
let Ea = new WeakMap(),
	zt = [];
function dx(e, t = document.body) {
	let r = new Set(e),
		n = new Set(),
		o = l => {
			for (let f of l.querySelectorAll(
				"[data-live-announcer], [data-react-aria-top-layer]",
			))
				r.add(f);
			let u = f => {
					if (
						r.has(f) ||
						(n.has(f.parentElement) &&
							f.parentElement.getAttribute("role") !== "row")
					)
						return NodeFilter.FILTER_REJECT;
					for (let p of r) if (f.contains(p)) return NodeFilter.FILTER_SKIP;
					return NodeFilter.FILTER_ACCEPT;
				},
				c = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
					acceptNode: u,
				}),
				d = u(l);
			if (
				(d === NodeFilter.FILTER_ACCEPT && a(l), d !== NodeFilter.FILTER_REJECT)
			) {
				let f = c.nextNode();
				for (; f != null; ) a(f), (f = c.nextNode());
			}
		},
		a = l => {
			var u;
			let c = (u = Ea.get(l)) !== null && u !== void 0 ? u : 0;
			(l.getAttribute("aria-hidden") === "true" && c === 0) ||
				(c === 0 && l.setAttribute("aria-hidden", "true"),
				n.add(l),
				Ea.set(l, c + 1));
		};
	zt.length && zt[zt.length - 1].disconnect(), o(t);
	let i = new MutationObserver(l => {
		for (let u of l)
			if (
				!(u.type !== "childList" || u.addedNodes.length === 0) &&
				![...r, ...n].some(c => c.contains(u.target))
			) {
				for (let c of u.removedNodes)
					c instanceof Element && (r.delete(c), n.delete(c));
				for (let c of u.addedNodes)
					(c instanceof HTMLElement || c instanceof SVGElement) &&
					(c.dataset.liveAnnouncer === "true" ||
						c.dataset.reactAriaTopLayer === "true")
						? r.add(c)
						: c instanceof Element && o(c);
			}
	});
	i.observe(t, { childList: !0, subtree: !0 });
	let s = {
		observe() {
			i.observe(t, { childList: !0, subtree: !0 });
		},
		disconnect() {
			i.disconnect();
		},
	};
	return (
		zt.push(s),
		() => {
			i.disconnect();
			for (let l of n) {
				let u = Ea.get(l);
				u === 1
					? (l.removeAttribute("aria-hidden"), Ea.delete(l))
					: Ea.set(l, u - 1);
			}
			s === zt[zt.length - 1]
				? (zt.pop(), zt.length && zt[zt.length - 1].observe())
				: zt.splice(zt.indexOf(s), 1);
		}
	);
}
const fx = k.createContext(null);
function Zp(e) {
	let t = ca(),
		{ portalContainer: r = t ? null : document.body, isExiting: n } = e,
		[o, a] = h.useState(!1),
		i = h.useMemo(() => ({ contain: o, setContain: a }), [o, a]);
	if (!r) return null;
	let s = e.children;
	return (
		e.disableFocusManagement ||
			(s = k.createElement(rx, { restoreFocus: !0, contain: o && !n }, s)),
		(s = k.createElement(
			fx.Provider,
			{ value: i },
			k.createElement(Q5, null, s),
		)),
		Pb.createPortal(s, r)
	);
}
function px() {
	let e = h.useContext(fx),
		t = e == null ? void 0 : e.setContain;
	Ae(() => {
		t == null || t(!0);
	}, [t]);
}
var B$ = ({
	children: e,
	navigate: t,
	locale: r = "en-US",
	defaultDates: n = {
		minDate: new ea(1900, 1, 1),
		maxDate: new ea(2099, 12, 31),
	},
	createCalendar: o,
	...a
}) => {
	let i = e;
	t && (i = S.jsx(E5, { navigate: t, children: i }));
	const s = h.useMemo(
		() => ({ createCalendar: o, defaultDates: n }),
		[o, n == null ? void 0 : n.maxDate, n == null ? void 0 : n.minDate],
	);
	return S.jsx(I3, {
		value: s,
		children: S.jsx(_5, {
			locale: r,
			children: S.jsx(ux, { ...a, children: i }),
		}),
	});
};
function ue(e) {
	return h.forwardRef(e);
}
var xt = (e, t, r = !0) => {
		if (!t) return [e, {}];
		const n = t.reduce((o, a) => (a in e ? { ...o, [a]: e[a] } : o), {});
		return r
			? [
					Object.keys(e)
						.filter(a => !t.includes(a))
						.reduce((a, i) => ({ ...a, [i]: e[i] }), {}),
					n,
			  ]
			: [e, n];
	},
	K$ = {
		default: "bg-default text-default-foreground",
		primary: "bg-primary text-primary-foreground",
		secondary: "bg-secondary text-secondary-foreground",
		success: "bg-success text-success-foreground",
		warning: "bg-warning text-warning-foreground",
		danger: "bg-danger text-danger-foreground",
		foreground: "bg-foreground text-background",
	},
	H$ = {
		default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
		primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
		secondary:
			"shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
		success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
		warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
		danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
		foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background",
	},
	W$ = {
		default: "bg-transparent border-default text-foreground",
		primary: "bg-transparent border-primary text-primary",
		secondary: "bg-transparent border-secondary text-secondary",
		success: "bg-transparent border-success text-success",
		warning: "bg-transparent border-warning text-warning",
		danger: "bg-transparent border-danger text-danger",
		foreground: "bg-transparent border-foreground text-foreground",
	},
	U$ = {
		default: "bg-default/40 text-default-foreground",
		primary: "bg-primary/20 text-primary",
		secondary: "bg-secondary/20 text-secondary",
		success: "bg-success/20 text-success-600 dark:text-success",
		warning: "bg-warning/20 text-warning-600 dark:text-warning",
		danger: "bg-danger/20 text-danger dark:text-danger-500",
		foreground: "bg-foreground/10 text-foreground",
	},
	Z$ = {
		default: "border-default bg-default-100 text-default-foreground",
		primary: "border-default bg-default-100 text-primary",
		secondary: "border-default bg-default-100 text-secondary",
		success: "border-default bg-default-100 text-success",
		warning: "border-default bg-default-100 text-warning",
		danger: "border-default bg-default-100 text-danger",
		foreground: "border-default bg-default-100 text-foreground",
	},
	G$ = {
		default: "bg-transparent text-default-foreground",
		primary: "bg-transparent text-primary",
		secondary: "bg-transparent text-secondary",
		success: "bg-transparent text-success",
		warning: "bg-transparent text-warning",
		danger: "bg-transparent text-danger",
		foreground: "bg-transparent text-foreground",
	},
	Y$ = {
		default: "border-default text-default-foreground hover:!bg-default",
		primary:
			"border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
		secondary:
			"border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
		success:
			"border-success text-success hover:!text-success-foreground hover:!bg-success",
		warning:
			"border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
		danger:
			"border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",
		foreground: "border-foreground text-foreground hover:!bg-foreground",
	},
	oe = {
		solid: K$,
		shadow: H$,
		bordered: W$,
		flat: U$,
		faded: Z$,
		light: G$,
		ghost: Y$,
	},
	Mm = e => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
	Tt = e => !e || typeof e != "object" || Object.keys(e).length === 0,
	X$ = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function hx(e, t) {
	e.forEach(function (r) {
		Array.isArray(r) ? hx(r, t) : t.push(r);
	});
}
function mx(e) {
	let t = [];
	return hx(e, t), t;
}
var gx = (...e) => mx(e).filter(Boolean),
	vx = (e, t) => {
		let r = {},
			n = Object.keys(e),
			o = Object.keys(t);
		for (let a of n)
			if (o.includes(a)) {
				let i = e[a],
					s = t[a];
				typeof i == "object" && typeof s == "object"
					? (r[a] = vx(i, s))
					: Array.isArray(i) || Array.isArray(s)
					? (r[a] = gx(s, i))
					: (r[a] = s + " " + i);
			} else r[a] = e[a];
		for (let a of o) n.includes(a) || (r[a] = t[a]);
		return r;
	},
	Am = e => (!e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim());
function q$() {
	for (var e = 0, t, r, n = ""; e < arguments.length; )
		(t = arguments[e++]) && (r = yx(t)) && (n && (n += " "), (n += r));
	return n;
}
function yx(e) {
	if (typeof e == "string") return e;
	for (var t, r = "", n = 0; n < e.length; n++)
		e[n] && (t = yx(e[n])) && (r && (r += " "), (r += t));
	return r;
}
var Gp = "-";
function Q$(e) {
	var t = eC(e),
		r = e.conflictingClassGroups,
		n = e.conflictingClassGroupModifiers,
		o = n === void 0 ? {} : n;
	function a(s) {
		var l = s.split(Gp);
		return l[0] === "" && l.length !== 1 && l.shift(), bx(l, t) || J$(s);
	}
	function i(s, l) {
		var u = r[s] || [];
		return l && o[s] ? [].concat(u, o[s]) : u;
	}
	return { getClassGroupId: a, getConflictingClassGroupIds: i };
}
function bx(e, t) {
	var i;
	if (e.length === 0) return t.classGroupId;
	var r = e[0],
		n = t.nextPart.get(r),
		o = n ? bx(e.slice(1), n) : void 0;
	if (o) return o;
	if (t.validators.length !== 0) {
		var a = e.join(Gp);
		return (i = t.validators.find(function (s) {
			var l = s.validator;
			return l(a);
		})) == null
			? void 0
			: i.classGroupId;
	}
}
var Dm = /^\[(.+)\]$/;
function J$(e) {
	if (Dm.test(e)) {
		var t = Dm.exec(e)[1],
			r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
		if (r) return "arbitrary.." + r;
	}
}
function eC(e) {
	var t = e.theme,
		r = e.prefix,
		n = { nextPart: new Map(), validators: [] },
		o = rC(Object.entries(e.classGroups), r);
	return (
		o.forEach(function (a) {
			var i = a[0],
				s = a[1];
			of(s, n, i, t);
		}),
		n
	);
}
function of(e, t, r, n) {
	e.forEach(function (o) {
		if (typeof o == "string") {
			var a = o === "" ? t : Im(t, o);
			a.classGroupId = r;
			return;
		}
		if (typeof o == "function") {
			if (tC(o)) {
				of(o(n), t, r, n);
				return;
			}
			t.validators.push({ validator: o, classGroupId: r });
			return;
		}
		Object.entries(o).forEach(function (i) {
			var s = i[0],
				l = i[1];
			of(l, Im(t, s), r, n);
		});
	});
}
function Im(e, t) {
	var r = e;
	return (
		t.split(Gp).forEach(function (n) {
			r.nextPart.has(n) ||
				r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
				(r = r.nextPart.get(n));
		}),
		r
	);
}
function tC(e) {
	return e.isThemeGetter;
}
function rC(e, t) {
	return t
		? e.map(function (r) {
				var n = r[0],
					o = r[1],
					a = o.map(function (i) {
						return typeof i == "string"
							? t + i
							: typeof i == "object"
							? Object.fromEntries(
									Object.entries(i).map(function (s) {
										var l = s[0],
											u = s[1];
										return [t + l, u];
									}),
							  )
							: i;
					});
				return [n, a];
		  })
		: e;
}
function nC(e) {
	if (e < 1) return { get: function () {}, set: function () {} };
	var t = 0,
		r = new Map(),
		n = new Map();
	function o(a, i) {
		r.set(a, i), t++, t > e && ((t = 0), (n = r), (r = new Map()));
	}
	return {
		get: function (i) {
			var s = r.get(i);
			if (s !== void 0) return s;
			if ((s = n.get(i)) !== void 0) return o(i, s), s;
		},
		set: function (i, s) {
			r.has(i) ? r.set(i, s) : o(i, s);
		},
	};
}
var xx = "!";
function oC(e) {
	var t = e.separator || ":",
		r = t.length === 1,
		n = t[0],
		o = t.length;
	return function (i) {
		for (var s = [], l = 0, u = 0, c, d = 0; d < i.length; d++) {
			var f = i[d];
			if (l === 0) {
				if (f === n && (r || i.slice(d, d + o) === t)) {
					s.push(i.slice(u, d)), (u = d + o);
					continue;
				}
				if (f === "/") {
					c = d;
					continue;
				}
			}
			f === "[" ? l++ : f === "]" && l--;
		}
		var p = s.length === 0 ? i : i.substring(u),
			g = p.startsWith(xx),
			b = g ? p.substring(1) : p,
			x = c && c > u ? c - u : void 0;
		return {
			modifiers: s,
			hasImportantModifier: g,
			baseClassName: b,
			maybePostfixModifierPosition: x,
		};
	};
}
function aC(e) {
	if (e.length <= 1) return e;
	var t = [],
		r = [];
	return (
		e.forEach(function (n) {
			var o = n[0] === "[";
			o ? (t.push.apply(t, r.sort().concat([n])), (r = [])) : r.push(n);
		}),
		t.push.apply(t, r.sort()),
		t
	);
}
function iC(e) {
	return { cache: nC(e.cacheSize), splitModifiers: oC(e), ...Q$(e) };
}
var sC = /\s+/;
function lC(e, t) {
	var r = t.splitModifiers,
		n = t.getClassGroupId,
		o = t.getConflictingClassGroupIds,
		a = new Set();
	return e
		.trim()
		.split(sC)
		.map(function (i) {
			var s = r(i),
				l = s.modifiers,
				u = s.hasImportantModifier,
				c = s.baseClassName,
				d = s.maybePostfixModifierPosition,
				f = n(d ? c.substring(0, d) : c),
				p = !!d;
			if (!f) {
				if (!d) return { isTailwindClass: !1, originalClassName: i };
				if (((f = n(c)), !f))
					return { isTailwindClass: !1, originalClassName: i };
				p = !1;
			}
			var g = aC(l).join(":"),
				b = u ? g + xx : g;
			return {
				isTailwindClass: !0,
				modifierId: b,
				classGroupId: f,
				originalClassName: i,
				hasPostfixModifier: p,
			};
		})
		.reverse()
		.filter(function (i) {
			if (!i.isTailwindClass) return !0;
			var s = i.modifierId,
				l = i.classGroupId,
				u = i.hasPostfixModifier,
				c = s + l;
			return a.has(c)
				? !1
				: (a.add(c),
				  o(l, u).forEach(function (d) {
						return a.add(s + d);
				  }),
				  !0);
		})
		.reverse()
		.map(function (i) {
			return i.originalClassName;
		})
		.join(" ");
}
function af() {
	for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
		t[r] = arguments[r];
	var n,
		o,
		a,
		i = s;
	function s(u) {
		var c = t[0],
			d = t.slice(1),
			f = d.reduce(function (p, g) {
				return g(p);
			}, c());
		return (n = iC(f)), (o = n.cache.get), (a = n.cache.set), (i = l), l(u);
	}
	function l(u) {
		var c = o(u);
		if (c) return c;
		var d = lC(u, n);
		return a(u, d), d;
	}
	return function () {
		return i(q$.apply(null, arguments));
	};
}
function $e(e) {
	var t = function (n) {
		return n[e] || [];
	};
	return (t.isThemeGetter = !0), t;
}
var wx = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	uC = /^\d+\/\d+$/,
	cC = new Set(["px", "full", "screen"]),
	dC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	fC =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	pC = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function sr(e) {
	return Wn(e) || cC.has(e) || uC.test(e) || sf(e);
}
function sf(e) {
	return io(e, "length", bC);
}
function hC(e) {
	return io(e, "size", Sx);
}
function mC(e) {
	return io(e, "position", Sx);
}
function gC(e) {
	return io(e, "url", xC);
}
function vs(e) {
	return io(e, "number", Wn);
}
function Wn(e) {
	return !Number.isNaN(Number(e));
}
function vC(e) {
	return e.endsWith("%") && Wn(e.slice(0, -1));
}
function ka(e) {
	return Vm(e) || io(e, "number", Vm);
}
function ce(e) {
	return wx.test(e);
}
function Ta() {
	return !0;
}
function Qr(e) {
	return dC.test(e);
}
function yC(e) {
	return io(e, "", wC);
}
function io(e, t, r) {
	var n = wx.exec(e);
	return n ? (n[1] ? n[1] === t : r(n[2])) : !1;
}
function bC(e) {
	return fC.test(e);
}
function Sx() {
	return !1;
}
function xC(e) {
	return e.startsWith("url(");
}
function Vm(e) {
	return Number.isInteger(Number(e));
}
function wC(e) {
	return pC.test(e);
}
function lf() {
	var e = $e("colors"),
		t = $e("spacing"),
		r = $e("blur"),
		n = $e("brightness"),
		o = $e("borderColor"),
		a = $e("borderRadius"),
		i = $e("borderSpacing"),
		s = $e("borderWidth"),
		l = $e("contrast"),
		u = $e("grayscale"),
		c = $e("hueRotate"),
		d = $e("invert"),
		f = $e("gap"),
		p = $e("gradientColorStops"),
		g = $e("gradientColorStopPositions"),
		b = $e("inset"),
		x = $e("margin"),
		m = $e("opacity"),
		v = $e("padding"),
		y = $e("saturate"),
		P = $e("scale"),
		C = $e("sepia"),
		E = $e("skew"),
		D = $e("space"),
		w = $e("translate"),
		V = function () {
			return ["auto", "contain", "none"];
		},
		M = function () {
			return ["auto", "hidden", "clip", "visible", "scroll"];
		},
		F = function () {
			return ["auto", ce, t];
		},
		L = function () {
			return [ce, t];
		},
		T = function () {
			return ["", sr];
		},
		A = function () {
			return ["auto", Wn, ce];
		},
		_ = function () {
			return [
				"bottom",
				"center",
				"left",
				"left-bottom",
				"left-top",
				"right",
				"right-bottom",
				"right-top",
				"top",
			];
		},
		N = function () {
			return ["solid", "dashed", "dotted", "double", "none"];
		},
		R = function () {
			return [
				"normal",
				"multiply",
				"screen",
				"overlay",
				"darken",
				"lighten",
				"color-dodge",
				"color-burn",
				"hard-light",
				"soft-light",
				"difference",
				"exclusion",
				"hue",
				"saturation",
				"color",
				"luminosity",
				"plus-lighter",
			];
		},
		j = function () {
			return [
				"start",
				"end",
				"center",
				"between",
				"around",
				"evenly",
				"stretch",
			];
		},
		z = function () {
			return ["", "0", ce];
		},
		I = function () {
			return [
				"auto",
				"avoid",
				"all",
				"avoid-page",
				"page",
				"left",
				"right",
				"column",
			];
		},
		$ = function () {
			return [Wn, vs];
		},
		O = function () {
			return [Wn, ce];
		};
	return {
		cacheSize: 500,
		theme: {
			colors: [Ta],
			spacing: [sr],
			blur: ["none", "", Qr, ce],
			brightness: $(),
			borderColor: [e],
			borderRadius: ["none", "", "full", Qr, ce],
			borderSpacing: L(),
			borderWidth: T(),
			contrast: $(),
			grayscale: z(),
			hueRotate: O(),
			invert: z(),
			gap: L(),
			gradientColorStops: [e],
			gradientColorStopPositions: [vC, sf],
			inset: F(),
			margin: F(),
			opacity: $(),
			padding: L(),
			saturate: $(),
			scale: $(),
			sepia: z(),
			skew: O(),
			space: L(),
			translate: L(),
		},
		classGroups: {
			aspect: [{ aspect: ["auto", "square", "video", ce] }],
			container: ["container"],
			columns: [{ columns: [Qr] }],
			"break-after": [{ "break-after": I() }],
			"break-before": [{ "break-before": I() }],
			"break-inside": [
				{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
			],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden",
			],
			float: [{ float: ["right", "left", "none"] }],
			clear: [{ clear: ["left", "right", "both", "none"] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [
				{ object: ["contain", "cover", "fill", "none", "scale-down"] },
			],
			"object-position": [{ object: [].concat(_(), [ce]) }],
			overflow: [{ overflow: M() }],
			"overflow-x": [{ "overflow-x": M() }],
			"overflow-y": [{ "overflow-y": M() }],
			overscroll: [{ overscroll: V() }],
			"overscroll-x": [{ "overscroll-x": V() }],
			"overscroll-y": [{ "overscroll-y": V() }],
			position: ["static", "fixed", "absolute", "relative", "sticky"],
			inset: [{ inset: [b] }],
			"inset-x": [{ "inset-x": [b] }],
			"inset-y": [{ "inset-y": [b] }],
			start: [{ start: [b] }],
			end: [{ end: [b] }],
			top: [{ top: [b] }],
			right: [{ right: [b] }],
			bottom: [{ bottom: [b] }],
			left: [{ left: [b] }],
			visibility: ["visible", "invisible", "collapse"],
			z: [{ z: ["auto", ka] }],
			basis: [{ basis: F() }],
			"flex-direction": [
				{ flex: ["row", "row-reverse", "col", "col-reverse"] },
			],
			"flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
			flex: [{ flex: ["1", "auto", "initial", "none", ce] }],
			grow: [{ grow: z() }],
			shrink: [{ shrink: z() }],
			order: [{ order: ["first", "last", "none", ka] }],
			"grid-cols": [{ "grid-cols": [Ta] }],
			"col-start-end": [{ col: ["auto", { span: ["full", ka] }, ce] }],
			"col-start": [{ "col-start": A() }],
			"col-end": [{ "col-end": A() }],
			"grid-rows": [{ "grid-rows": [Ta] }],
			"row-start-end": [{ row: ["auto", { span: [ka] }, ce] }],
			"row-start": [{ "row-start": A() }],
			"row-end": [{ "row-end": A() }],
			"grid-flow": [
				{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
			],
			"auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ce] }],
			"auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ce] }],
			gap: [{ gap: [f] }],
			"gap-x": [{ "gap-x": [f] }],
			"gap-y": [{ "gap-y": [f] }],
			"justify-content": [{ justify: ["normal"].concat(j()) }],
			"justify-items": [
				{ "justify-items": ["start", "end", "center", "stretch"] },
			],
			"justify-self": [
				{ "justify-self": ["auto", "start", "end", "center", "stretch"] },
			],
			"align-content": [{ content: ["normal"].concat(j(), ["baseline"]) }],
			"align-items": [
				{ items: ["start", "end", "center", "baseline", "stretch"] },
			],
			"align-self": [
				{ self: ["auto", "start", "end", "center", "stretch", "baseline"] },
			],
			"place-content": [{ "place-content": [].concat(j(), ["baseline"]) }],
			"place-items": [
				{ "place-items": ["start", "end", "center", "baseline", "stretch"] },
			],
			"place-self": [
				{ "place-self": ["auto", "start", "end", "center", "stretch"] },
			],
			p: [{ p: [v] }],
			px: [{ px: [v] }],
			py: [{ py: [v] }],
			ps: [{ ps: [v] }],
			pe: [{ pe: [v] }],
			pt: [{ pt: [v] }],
			pr: [{ pr: [v] }],
			pb: [{ pb: [v] }],
			pl: [{ pl: [v] }],
			m: [{ m: [x] }],
			mx: [{ mx: [x] }],
			my: [{ my: [x] }],
			ms: [{ ms: [x] }],
			me: [{ me: [x] }],
			mt: [{ mt: [x] }],
			mr: [{ mr: [x] }],
			mb: [{ mb: [x] }],
			ml: [{ ml: [x] }],
			"space-x": [{ "space-x": [D] }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": [D] }],
			"space-y-reverse": ["space-y-reverse"],
			w: [{ w: ["auto", "min", "max", "fit", ce, t] }],
			"min-w": [{ "min-w": ["min", "max", "fit", ce, sr] }],
			"max-w": [
				{
					"max-w": [
						"0",
						"none",
						"full",
						"min",
						"max",
						"fit",
						"prose",
						{ screen: [Qr] },
						Qr,
						ce,
					],
				},
			],
			h: [{ h: [ce, t, "auto", "min", "max", "fit"] }],
			"min-h": [{ "min-h": ["min", "max", "fit", ce, sr] }],
			"max-h": [{ "max-h": [ce, t, "min", "max", "fit"] }],
			"font-size": [{ text: ["base", Qr, sf] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [
				{
					font: [
						"thin",
						"extralight",
						"light",
						"normal",
						"medium",
						"semibold",
						"bold",
						"extrabold",
						"black",
						vs,
					],
				},
			],
			"font-family": [{ font: [Ta] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
			tracking: [
				{
					tracking: [
						"tighter",
						"tight",
						"normal",
						"wide",
						"wider",
						"widest",
						ce,
					],
				},
			],
			"line-clamp": [{ "line-clamp": ["none", Wn, vs] }],
			leading: [
				{
					leading: [
						"none",
						"tight",
						"snug",
						"normal",
						"relaxed",
						"loose",
						ce,
						sr,
					],
				},
			],
			"list-image": [{ "list-image": ["none", ce] }],
			"list-style-type": [{ list: ["none", "disc", "decimal", ce] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"placeholder-color": [{ placeholder: [e] }],
			"placeholder-opacity": [{ "placeholder-opacity": [m] }],
			"text-alignment": [
				{ text: ["left", "center", "right", "justify", "start", "end"] },
			],
			"text-color": [{ text: [e] }],
			"text-opacity": [{ "text-opacity": [m] }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline",
			],
			"text-decoration-style": [{ decoration: [].concat(N(), ["wavy"]) }],
			"text-decoration-thickness": [{ decoration: ["auto", "from-font", sr] }],
			"underline-offset": [{ "underline-offset": ["auto", ce, sr] }],
			"text-decoration-color": [{ decoration: [e] }],
			"text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
			"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
			indent: [{ indent: L() }],
			"vertical-align": [
				{
					align: [
						"baseline",
						"top",
						"middle",
						"bottom",
						"text-top",
						"text-bottom",
						"sub",
						"super",
						ce,
					],
				},
			],
			whitespace: [
				{
					whitespace: [
						"normal",
						"nowrap",
						"pre",
						"pre-line",
						"pre-wrap",
						"break-spaces",
					],
				},
			],
			break: [{ break: ["normal", "words", "all", "keep"] }],
			hyphens: [{ hyphens: ["none", "manual", "auto"] }],
			content: [{ content: ["none", ce] }],
			"bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
			"bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
			"bg-opacity": [{ "bg-opacity": [m] }],
			"bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
			"bg-position": [{ bg: [].concat(_(), [mC]) }],
			"bg-repeat": [
				{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
			],
			"bg-size": [{ bg: ["auto", "cover", "contain", hC] }],
			"bg-image": [
				{
					bg: [
						"none",
						{ "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
						gC,
					],
				},
			],
			"bg-color": [{ bg: [e] }],
			"gradient-from-pos": [{ from: [g] }],
			"gradient-via-pos": [{ via: [g] }],
			"gradient-to-pos": [{ to: [g] }],
			"gradient-from": [{ from: [p] }],
			"gradient-via": [{ via: [p] }],
			"gradient-to": [{ to: [p] }],
			rounded: [{ rounded: [a] }],
			"rounded-s": [{ "rounded-s": [a] }],
			"rounded-e": [{ "rounded-e": [a] }],
			"rounded-t": [{ "rounded-t": [a] }],
			"rounded-r": [{ "rounded-r": [a] }],
			"rounded-b": [{ "rounded-b": [a] }],
			"rounded-l": [{ "rounded-l": [a] }],
			"rounded-ss": [{ "rounded-ss": [a] }],
			"rounded-se": [{ "rounded-se": [a] }],
			"rounded-ee": [{ "rounded-ee": [a] }],
			"rounded-es": [{ "rounded-es": [a] }],
			"rounded-tl": [{ "rounded-tl": [a] }],
			"rounded-tr": [{ "rounded-tr": [a] }],
			"rounded-br": [{ "rounded-br": [a] }],
			"rounded-bl": [{ "rounded-bl": [a] }],
			"border-w": [{ border: [s] }],
			"border-w-x": [{ "border-x": [s] }],
			"border-w-y": [{ "border-y": [s] }],
			"border-w-s": [{ "border-s": [s] }],
			"border-w-e": [{ "border-e": [s] }],
			"border-w-t": [{ "border-t": [s] }],
			"border-w-r": [{ "border-r": [s] }],
			"border-w-b": [{ "border-b": [s] }],
			"border-w-l": [{ "border-l": [s] }],
			"border-opacity": [{ "border-opacity": [m] }],
			"border-style": [{ border: [].concat(N(), ["hidden"]) }],
			"divide-x": [{ "divide-x": [s] }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": [s] }],
			"divide-y-reverse": ["divide-y-reverse"],
			"divide-opacity": [{ "divide-opacity": [m] }],
			"divide-style": [{ divide: N() }],
			"border-color": [{ border: [o] }],
			"border-color-x": [{ "border-x": [o] }],
			"border-color-y": [{ "border-y": [o] }],
			"border-color-t": [{ "border-t": [o] }],
			"border-color-r": [{ "border-r": [o] }],
			"border-color-b": [{ "border-b": [o] }],
			"border-color-l": [{ "border-l": [o] }],
			"divide-color": [{ divide: [o] }],
			"outline-style": [{ outline: [""].concat(N()) }],
			"outline-offset": [{ "outline-offset": [ce, sr] }],
			"outline-w": [{ outline: [sr] }],
			"outline-color": [{ outline: [e] }],
			"ring-w": [{ ring: T() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: [e] }],
			"ring-opacity": [{ "ring-opacity": [m] }],
			"ring-offset-w": [{ "ring-offset": [sr] }],
			"ring-offset-color": [{ "ring-offset": [e] }],
			shadow: [{ shadow: ["", "inner", "none", Qr, yC] }],
			"shadow-color": [{ shadow: [Ta] }],
			opacity: [{ opacity: [m] }],
			"mix-blend": [{ "mix-blend": R() }],
			"bg-blend": [{ "bg-blend": R() }],
			filter: [{ filter: ["", "none"] }],
			blur: [{ blur: [r] }],
			brightness: [{ brightness: [n] }],
			contrast: [{ contrast: [l] }],
			"drop-shadow": [{ "drop-shadow": ["", "none", Qr, ce] }],
			grayscale: [{ grayscale: [u] }],
			"hue-rotate": [{ "hue-rotate": [c] }],
			invert: [{ invert: [d] }],
			saturate: [{ saturate: [y] }],
			sepia: [{ sepia: [C] }],
			"backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
			"backdrop-blur": [{ "backdrop-blur": [r] }],
			"backdrop-brightness": [{ "backdrop-brightness": [n] }],
			"backdrop-contrast": [{ "backdrop-contrast": [l] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
			"backdrop-invert": [{ "backdrop-invert": [d] }],
			"backdrop-opacity": [{ "backdrop-opacity": [m] }],
			"backdrop-saturate": [{ "backdrop-saturate": [y] }],
			"backdrop-sepia": [{ "backdrop-sepia": [C] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": [i] }],
			"border-spacing-x": [{ "border-spacing-x": [i] }],
			"border-spacing-y": [{ "border-spacing-y": [i] }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [
				{
					transition: [
						"none",
						"all",
						"",
						"colors",
						"opacity",
						"shadow",
						"transform",
						ce,
					],
				},
			],
			duration: [{ duration: O() }],
			ease: [{ ease: ["linear", "in", "out", "in-out", ce] }],
			delay: [{ delay: O() }],
			animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ce] }],
			transform: [{ transform: ["", "gpu", "none"] }],
			scale: [{ scale: [P] }],
			"scale-x": [{ "scale-x": [P] }],
			"scale-y": [{ "scale-y": [P] }],
			rotate: [{ rotate: [ka, ce] }],
			"translate-x": [{ "translate-x": [w] }],
			"translate-y": [{ "translate-y": [w] }],
			"skew-x": [{ "skew-x": [E] }],
			"skew-y": [{ "skew-y": [E] }],
			"transform-origin": [
				{
					origin: [
						"center",
						"top",
						"top-right",
						"right",
						"bottom-right",
						"bottom",
						"bottom-left",
						"left",
						"top-left",
						ce,
					],
				},
			],
			accent: [{ accent: ["auto", e] }],
			appearance: ["appearance-none"],
			cursor: [
				{
					cursor: [
						"auto",
						"default",
						"pointer",
						"wait",
						"text",
						"move",
						"help",
						"not-allowed",
						"none",
						"context-menu",
						"progress",
						"cell",
						"crosshair",
						"vertical-text",
						"alias",
						"copy",
						"no-drop",
						"grab",
						"grabbing",
						"all-scroll",
						"col-resize",
						"row-resize",
						"n-resize",
						"e-resize",
						"s-resize",
						"w-resize",
						"ne-resize",
						"nw-resize",
						"se-resize",
						"sw-resize",
						"ew-resize",
						"ns-resize",
						"nesw-resize",
						"nwse-resize",
						"zoom-in",
						"zoom-out",
						ce,
					],
				},
			],
			"caret-color": [{ caret: [e] }],
			"pointer-events": [{ "pointer-events": ["none", "auto"] }],
			resize: [{ resize: ["none", "y", "x", ""] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": L() }],
			"scroll-mx": [{ "scroll-mx": L() }],
			"scroll-my": [{ "scroll-my": L() }],
			"scroll-ms": [{ "scroll-ms": L() }],
			"scroll-me": [{ "scroll-me": L() }],
			"scroll-mt": [{ "scroll-mt": L() }],
			"scroll-mr": [{ "scroll-mr": L() }],
			"scroll-mb": [{ "scroll-mb": L() }],
			"scroll-ml": [{ "scroll-ml": L() }],
			"scroll-p": [{ "scroll-p": L() }],
			"scroll-px": [{ "scroll-px": L() }],
			"scroll-py": [{ "scroll-py": L() }],
			"scroll-ps": [{ "scroll-ps": L() }],
			"scroll-pe": [{ "scroll-pe": L() }],
			"scroll-pt": [{ "scroll-pt": L() }],
			"scroll-pr": [{ "scroll-pr": L() }],
			"scroll-pb": [{ "scroll-pb": L() }],
			"scroll-pl": [{ "scroll-pl": L() }],
			"snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: ["none", "x", "y", "both"] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [
				{
					touch: [
						"auto",
						"none",
						"pinch-zoom",
						"manipulation",
						{ pan: ["x", "left", "right", "y", "up", "down"] },
					],
				},
			],
			select: [{ select: ["none", "text", "all", "auto"] }],
			"will-change": [
				{ "will-change": ["auto", "scroll", "contents", "transform", ce] },
			],
			fill: [{ fill: [e, "none"] }],
			"stroke-w": [{ stroke: [sr, vs] }],
			stroke: [{ stroke: [e, "none"] }],
			sr: ["sr-only", "not-sr-only"],
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left",
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: ["basis", "grow", "shrink"],
			gap: ["gap-x", "gap-y"],
			p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction",
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl",
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-s",
				"border-w-e",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l",
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l",
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml",
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl",
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
	};
}
function SC(e, t) {
	for (var r in t) Px(e, r, t[r]);
	return e;
}
var PC = Object.prototype.hasOwnProperty,
	$C = new Set(["string", "number", "boolean"]);
function Px(e, t, r) {
	if (!PC.call(e, t) || $C.has(typeof r) || r === null) {
		e[t] = r;
		return;
	}
	if (Array.isArray(r) && Array.isArray(e[t])) {
		e[t] = e[t].concat(r);
		return;
	}
	if (typeof r == "object" && typeof e[t] == "object") {
		if (e[t] === null) {
			e[t] = r;
			return;
		}
		for (var n in r) Px(e[t], n, r[n]);
	}
}
function CC(e) {
	for (
		var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
		n < t;
		n++
	)
		r[n - 1] = arguments[n];
	return typeof e == "function"
		? af.apply(void 0, [lf, e].concat(r))
		: af.apply(
				void 0,
				[
					function () {
						return SC(lf(), e);
					},
				].concat(r),
		  );
}
var EC = af(lf),
	kC = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
	$x = e => e || void 0,
	bi = (...e) => $x(mx(e).filter(Boolean).join(" ")),
	Pc = null,
	Vl = {},
	uf = !1,
	Ma =
		(...e) =>
		t =>
			t.twMerge
				? ((!Pc || uf) && ((uf = !1), (Pc = Tt(Vl) ? EC : CC(Vl))),
				  $x(Pc(bi(e))))
				: bi(e),
	Rm = (e, t) => {
		for (let r in t)
			e.hasOwnProperty(r) ? (e[r] = bi(e[r], t[r])) : (e[r] = t[r]);
		return e;
	},
	TC = (e, t) => {
		let {
				extend: r = null,
				slots: n = {},
				variants: o = {},
				compoundVariants: a = [],
				compoundSlots: i = [],
				defaultVariants: s = {},
			} = e,
			l = { ...kC, ...t },
			u =
				r != null && r.base
					? bi(r.base, e == null ? void 0 : e.base)
					: e == null
					? void 0
					: e.base,
			c = r != null && r.variants && !Tt(r.variants) ? vx(o, r.variants) : o,
			d =
				r != null && r.defaultVariants && !Tt(r.defaultVariants)
					? { ...r.defaultVariants, ...s }
					: s;
		!Tt(l.twMergeConfig) &&
			!X$(l.twMergeConfig, Vl) &&
			((uf = !0), (Vl = l.twMergeConfig));
		let f = Tt(r == null ? void 0 : r.slots),
			p = Tt(n)
				? {}
				: {
						base: bi(
							e == null ? void 0 : e.base,
							f && (r == null ? void 0 : r.base),
						),
						...n,
				  },
			g = f
				? p
				: Rm(
						{ ...(r == null ? void 0 : r.slots) },
						Tt(p) ? { base: e == null ? void 0 : e.base } : p,
				  ),
			b = m => {
				if (Tt(c) && Tt(n) && f)
					return Ma(
						u,
						m == null ? void 0 : m.class,
						m == null ? void 0 : m.className,
					)(l);
				if (a && !Array.isArray(a))
					throw new TypeError(
						`The "compoundVariants" prop must be an array. Received: ${typeof a}`,
					);
				if (i && !Array.isArray(i))
					throw new TypeError(
						`The "compoundSlots" prop must be an array. Received: ${typeof i}`,
					);
				let v = (L, T, A = [], _) => {
						let N = A;
						if (typeof T == "string")
							N = N.concat(
								Am(T)
									.split(" ")
									.map(R => `${L}:${R}`),
							);
						else if (Array.isArray(T))
							N = N.concat(T.reduce((R, j) => R.concat(`${L}:${j}`), []));
						else if (typeof T == "object" && typeof _ == "string") {
							for (let R in T)
								if (T.hasOwnProperty(R) && R === _) {
									let j = T[R];
									if (j && typeof j == "string") {
										let z = Am(j);
										N[_]
											? (N[_] = N[_].concat(z.split(" ").map(I => `${L}:${I}`)))
											: (N[_] = z.split(" ").map(I => `${L}:${I}`));
									} else
										Array.isArray(j) &&
											j.length > 0 &&
											(N[_] = j.reduce((z, I) => z.concat(`${L}:${I}`), []));
								}
						}
						return N;
					},
					y = (L, T = c, A = null, _ = null) => {
						var N;
						let R = T[L];
						if (!R || Tt(R)) return null;
						let j =
							(N = _ == null ? void 0 : _[L]) != null
								? N
								: m == null
								? void 0
								: m[L];
						if (j === null) return null;
						let z = Mm(j),
							I =
								(Array.isArray(l.responsiveVariants) &&
									l.responsiveVariants.length > 0) ||
								l.responsiveVariants === !0,
							$ = d == null ? void 0 : d[L],
							O = [];
						if (typeof z == "object" && I)
							for (let [K, W] of Object.entries(z)) {
								let G = R[W];
								if (K === "initial") {
									$ = W;
									continue;
								}
								(Array.isArray(l.responsiveVariants) &&
									!l.responsiveVariants.includes(K)) ||
									(O = v(K, G, O, A));
							}
						let B = R[z] || R[Mm($)];
						return typeof O == "object" && typeof A == "string" && O[A]
							? Rm(O, B)
							: O.length > 0
							? (O.push(B), O)
							: B;
					},
					P = () => (c ? Object.keys(c).map(L => y(L, c)) : null),
					C = (L, T) => {
						if (!c || typeof c != "object") return null;
						let A = new Array();
						for (let _ in c) {
							let N = y(_, c, L, T),
								R = L === "base" && typeof N == "string" ? N : N && N[L];
							R && (A[A.length] = R);
						}
						return A;
					},
					E = {};
				for (let L in m) m[L] !== void 0 && (E[L] = m[L]);
				let D = (L, T) => {
						var A;
						let _ =
							typeof (m == null ? void 0 : m[L]) == "object"
								? { [L]: (A = m[L]) == null ? void 0 : A.initial }
								: {};
						return { ...d, ...E, ..._, ...T };
					},
					w = (L = [], T) => {
						let A = [];
						for (let { class: _, className: N, ...R } of L) {
							let j = !0;
							for (let [z, I] of Object.entries(R)) {
								let $ = D(z, T);
								if (Array.isArray(I)) {
									if (!I.includes($[z])) {
										j = !1;
										break;
									}
								} else if ($[z] !== I) {
									j = !1;
									break;
								}
							}
							j && (_ && A.push(_), N && A.push(N));
						}
						return A;
					},
					V = L => {
						let T = w(a, L),
							A = w(r == null ? void 0 : r.compoundVariants, L);
						return gx(A, T);
					},
					M = L => {
						let T = V(L);
						if (!Array.isArray(T)) return T;
						let A = {};
						for (let _ of T)
							if (
								(typeof _ == "string" && (A.base = Ma(A.base, _)(l)),
								typeof _ == "object")
							)
								for (let [N, R] of Object.entries(_)) A[N] = Ma(A[N], R)(l);
						return A;
					},
					F = L => {
						if (i.length < 1) return null;
						let T = {};
						for (let { slots: A = [], class: _, className: N, ...R } of i) {
							if (!Tt(R)) {
								let j = !0;
								for (let z of Object.keys(R)) {
									let I = D(z, L)[z];
									if (
										I === void 0 ||
										(Array.isArray(R[z]) ? !R[z].includes(I) : R[z] !== I)
									) {
										j = !1;
										break;
									}
								}
								if (!j) continue;
							}
							for (let j of A) (T[j] = T[j] || []), T[j].push([_, N]);
						}
						return T;
					};
				if (!Tt(n) || !f) {
					let L = {};
					if (typeof g == "object" && !Tt(g))
						for (let T of Object.keys(g))
							L[T] = A => {
								var _, N;
								return Ma(
									g[T],
									C(T, A),
									((_ = M(A)) != null ? _ : [])[T],
									((N = F(A)) != null ? N : [])[T],
									A == null ? void 0 : A.class,
									A == null ? void 0 : A.className,
								)(l);
							};
					return L;
				}
				return Ma(
					u,
					P(),
					V(),
					m == null ? void 0 : m.class,
					m == null ? void 0 : m.className,
				)(l);
			},
			x = () => {
				if (!(!c || typeof c != "object")) return Object.keys(c);
			};
		return (
			(b.variantKeys = x()),
			(b.extend = r),
			(b.base = u),
			(b.slots = g),
			(b.variants = c),
			(b.defaultVariants = d),
			(b.compoundSlots = i),
			(b.compoundVariants = a),
			b
		);
	},
	ys = ["small", "medium", "large"],
	Fe = (e, t) => {
		var r, n, o;
		return TC(e, {
			...t,
			twMerge: (r = void 0) != null ? r : !0,
			twMergeConfig: {
				theme: {
					...((n = void 0) == null ? void 0 : n.theme),
					opacity: ["disabled"],
					spacing: ["divider"],
					borderWidth: ys,
					borderRadius: ys,
				},
				classGroups: {
					...((o = void 0) == null ? void 0 : o.classGroups),
					shadow: [{ shadow: ys }],
					"font-size": [{ text: ["tiny", ...ys] }],
					"bg-image": ["bg-stripe-gradient"],
				},
			},
		});
	},
	tr = [
		"outline-none",
		"data-[focus-visible=true]:z-10",
		"data-[focus-visible=true]:outline-2",
		"data-[focus-visible=true]:outline-focus",
		"data-[focus-visible=true]:outline-offset-2",
	],
	Yp = [
		"outline-none",
		"group-data-[focus-visible=true]:z-10",
		"group-data-[focus-visible=true]:ring-2",
		"group-data-[focus-visible=true]:ring-focus",
		"group-data-[focus-visible=true]:ring-offset-2",
		"group-data-[focus-visible=true]:ring-offset-background",
	],
	fo = {
		default: [
			"[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]",
		],
		primary: [
			"[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]",
		],
		secondary: [
			"[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]",
		],
		success: [
			"[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]",
		],
		warning: [
			"[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]",
		],
		danger: [
			"[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]",
		],
	},
	Lm = Fe({
		slots: {
			base: "inline-flex",
			tabList: [
				"flex",
				"p-1",
				"h-fit",
				"gap-2",
				"items-center",
				"flex-nowrap",
				"overflow-x-scroll",
				"scrollbar-hide",
				"bg-default-100",
			],
			tab: [
				"z-0",
				"w-full",
				"px-3",
				"py-1",
				"flex",
				"group",
				"relative",
				"justify-center",
				"items-center",
				"outline-none",
				"cursor-pointer",
				"transition-opacity",
				"tap-highlight-transparent",
				"data-[disabled=true]:cursor-not-allowed",
				"data-[disabled=true]:opacity-30",
				"data-[hover-unselected=true]:opacity-disabled",
				...tr,
			],
			tabContent: [
				"relative",
				"z-10",
				"text-inherit",
				"whitespace-nowrap",
				"transition-colors",
				"text-default-500",
				"group-data-[selected=true]:text-foreground",
			],
			cursor: ["absolute", "z-0", "bg-white"],
			panel: ["py-3", "px-1", "outline-none", ...tr],
			wrapper: [],
		},
		variants: {
			variant: {
				solid: { cursor: "inset-0" },
				light: {
					tabList: "bg-transparent dark:bg-transparent",
					cursor: "inset-0",
				},
				underlined: {
					tabList: "bg-transparent dark:bg-transparent",
					cursor:
						"h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
				},
				bordered: {
					tabList:
						"bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm",
					cursor: "inset-0",
				},
			},
			color: {
				default: {},
				primary: {},
				secondary: {},
				success: {},
				warning: {},
				danger: {},
			},
			size: {
				sm: {
					tabList: "rounded-medium",
					tab: "h-7 text-tiny rounded-small",
					cursor: "rounded-small",
				},
				md: {
					tabList: "rounded-medium",
					tab: "h-8 text-small rounded-small",
					cursor: "rounded-small",
				},
				lg: {
					tabList: "rounded-large",
					tab: "h-9 text-medium rounded-medium",
					cursor: "rounded-medium",
				},
			},
			radius: {
				none: {
					tabList: "rounded-none",
					tab: "rounded-none",
					cursor: "rounded-none",
				},
				sm: {
					tabList: "rounded-medium",
					tab: "rounded-small",
					cursor: "rounded-small",
				},
				md: {
					tabList: "rounded-medium",
					tab: "rounded-small",
					cursor: "rounded-small",
				},
				lg: {
					tabList: "rounded-large",
					tab: "rounded-medium",
					cursor: "rounded-medium",
				},
				full: {
					tabList: "rounded-full",
					tab: "rounded-full",
					cursor: "rounded-full",
				},
			},
			fullWidth: { true: { base: "w-full", tabList: "w-full" } },
			isDisabled: { true: { tabList: "opacity-disabled pointer-events-none" } },
			disableAnimation: {
				true: { tab: "transition-none", tabContent: "transition-none" },
			},
			placement: {
				top: {},
				start: { tabList: "flex-col", panel: "py-0 px-3", wrapper: "flex" },
				end: {
					tabList: "flex-col",
					panel: "py-0 px-3",
					wrapper: "flex flex-row-reverse",
				},
				bottom: { wrapper: "flex flex-col-reverse" },
			},
		},
		defaultVariants: {
			color: "default",
			variant: "solid",
			size: "md",
			fullWidth: !1,
			isDisabled: !1,
			disableAnimation: !1,
		},
		compoundVariants: [
			{
				variant: ["solid", "bordered", "light"],
				color: "default",
				class: {
					cursor: ["bg-background", "dark:bg-default", "shadow-small"],
					tabContent: "group-data-[selected=true]:text-default-foreground",
				},
			},
			{
				variant: ["solid", "bordered", "light"],
				color: "primary",
				class: {
					cursor: oe.solid.primary,
					tabContent: "group-data-[selected=true]:text-primary-foreground",
				},
			},
			{
				variant: ["solid", "bordered", "light"],
				color: "secondary",
				class: {
					cursor: oe.solid.secondary,
					tabContent: "group-data-[selected=true]:text-secondary-foreground",
				},
			},
			{
				variant: ["solid", "bordered", "light"],
				color: "success",
				class: {
					cursor: oe.solid.success,
					tabContent: "group-data-[selected=true]:text-success-foreground",
				},
			},
			{
				variant: ["solid", "bordered", "light"],
				color: "warning",
				class: {
					cursor: oe.solid.warning,
					tabContent: "group-data-[selected=true]:text-warning-foreground",
				},
			},
			{
				variant: ["solid", "bordered", "light"],
				color: "danger",
				class: {
					cursor: oe.solid.danger,
					tabContent: "group-data-[selected=true]:text-danger-foreground",
				},
			},
			{
				variant: "underlined",
				color: "default",
				class: {
					cursor: "bg-foreground",
					tabContent: "group-data-[selected=true]:text-foreground",
				},
			},
			{
				variant: "underlined",
				color: "primary",
				class: {
					cursor: "bg-primary",
					tabContent: "group-data-[selected=true]:text-primary",
				},
			},
			{
				variant: "underlined",
				color: "secondary",
				class: {
					cursor: "bg-secondary",
					tabContent: "group-data-[selected=true]:text-secondary",
				},
			},
			{
				variant: "underlined",
				color: "success",
				class: {
					cursor: "bg-success",
					tabContent: "group-data-[selected=true]:text-success",
				},
			},
			{
				variant: "underlined",
				color: "warning",
				class: {
					cursor: "bg-warning",
					tabContent: "group-data-[selected=true]:text-warning",
				},
			},
			{
				variant: "underlined",
				color: "danger",
				class: {
					cursor: "bg-danger",
					tabContent: "group-data-[selected=true]:text-danger",
				},
			},
			{
				disableAnimation: !0,
				variant: "underlined",
				class: {
					tab: [
						"after:content-['']",
						"after:absolute",
						"after:bottom-0",
						"after:h-[2px]",
						"after:w-[80%]",
						"after:opacity-0",
						"after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
						"data-[selected=true]:after:opacity-100",
					],
				},
			},
			{
				disableAnimation: !0,
				color: "default",
				variant: ["solid", "bordered", "light"],
				class: {
					tab: "data-[selected=true]:bg-default data-[selected=true]:text-default-foreground",
				},
			},
			{
				disableAnimation: !0,
				color: "primary",
				variant: ["solid", "bordered", "light"],
				class: {
					tab: "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
				},
			},
			{
				disableAnimation: !0,
				color: "secondary",
				variant: ["solid", "bordered", "light"],
				class: {
					tab: "data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
				},
			},
			{
				disableAnimation: !0,
				color: "success",
				variant: ["solid", "bordered", "light"],
				class: {
					tab: "data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
				},
			},
			{
				disableAnimation: !0,
				color: "warning",
				variant: ["solid", "bordered", "light"],
				class: {
					tab: "data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
				},
			},
			{
				disableAnimation: !0,
				color: "danger",
				variant: ["solid", "bordered", "light"],
				class: {
					tab: "data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground",
				},
			},
			{
				disableAnimation: !0,
				color: "default",
				variant: "underlined",
				class: { tab: "data-[selected=true]:after:bg-foreground" },
			},
			{
				disableAnimation: !0,
				color: "primary",
				variant: "underlined",
				class: { tab: "data-[selected=true]:after:bg-primary" },
			},
			{
				disableAnimation: !0,
				color: "secondary",
				variant: "underlined",
				class: { tab: "data-[selected=true]:after:bg-secondary" },
			},
			{
				disableAnimation: !0,
				color: "success",
				variant: "underlined",
				class: { tab: "data-[selected=true]:after:bg-success" },
			},
			{
				disableAnimation: !0,
				color: "warning",
				variant: "underlined",
				class: { tab: "data-[selected=true]:after:bg-warning" },
			},
			{
				disableAnimation: !0,
				color: "danger",
				variant: "underlined",
				class: { tab: "data-[selected=true]:after:bg-danger" },
			},
		],
		compoundSlots: [
			{
				variant: "underlined",
				slots: ["tab", "tabList", "cursor"],
				class: ["rounded-none"],
			},
		],
	}),
	Fm = Fe({
		slots: {
			base: "group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent",
			wrapper: [
				"px-1",
				"relative",
				"inline-flex",
				"items-center",
				"justify-start",
				"flex-shrink-0",
				"overflow-hidden",
				"bg-default-200",
				"rounded-full",
				...Yp,
			],
			thumb: [
				"z-10",
				"flex",
				"items-center",
				"justify-center",
				"bg-white",
				"shadow-small",
				"rounded-full",
				"origin-right",
			],
			startContent:
				"z-0 absolute left-1.5 rtl:right-1.5 rtl:left-[unset] text-current",
			endContent:
				"z-0 absolute right-1.5 rtl:left-1.5 rtl:right-[unset] text-default-600",
			thumbIcon: "text-black",
			label: "relative text-foreground select-none",
		},
		variants: {
			color: {
				default: {
					wrapper: [
						"group-data-[selected=true]:bg-default-400",
						"group-data-[selected=true]:text-default-foreground",
					],
				},
				primary: {
					wrapper: [
						"group-data-[selected=true]:bg-primary",
						"group-data-[selected=true]:text-primary-foreground",
					],
				},
				secondary: {
					wrapper: [
						"group-data-[selected=true]:bg-secondary",
						"group-data-[selected=true]:text-secondary-foreground",
					],
				},
				success: {
					wrapper: [
						"group-data-[selected=true]:bg-success",
						"group-data-[selected=true]:text-success-foreground",
					],
				},
				warning: {
					wrapper: [
						"group-data-[selected=true]:bg-warning",
						"group-data-[selected=true]:text-warning-foreground",
					],
				},
				danger: {
					wrapper: [
						"group-data-[selected=true]:bg-danger",
						"data-[selected=true]:text-danger-foreground",
					],
				},
			},
			size: {
				sm: {
					wrapper: "w-10 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]",
					thumb: [
						"w-4 h-4 text-tiny",
						"group-data-[selected=true]:ml-4 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-4",
					],
					endContent: "text-tiny",
					startContent: "text-tiny",
					label: "text-small",
				},
				md: {
					wrapper: "w-12 h-7 mr-2 rtl:ml-2 rtl:mr-[unset]",
					thumb: [
						"w-5 h-5 text-small",
						"group-data-[selected=true]:ml-5 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-5",
					],
					endContent: "text-small",
					startContent: "text-small",
					label: "text-medium",
				},
				lg: {
					wrapper: "w-14 h-8 mr-2 rtl:ml-2 rtl:mr-[unset]",
					thumb: [
						"w-6 h-6 text-medium",
						"group-data-[selected=true]:ml-6 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-6",
					],
					endContent: "text-medium",
					startContent: "text-medium",
					label: "text-large",
				},
			},
			isDisabled: { true: { base: "opacity-disabled pointer-events-none" } },
			disableAnimation: {
				true: { wrapper: "transition-none", thumb: "transition-none" },
				false: {
					wrapper: "transition-background",
					thumb: "transition-all",
					startContent: [
						"opacity-0",
						"scale-50",
						"transition-transform-opacity",
						"group-data-[selected=true]:scale-100",
						"group-data-[selected=true]:opacity-100",
					],
					endContent: [
						"opacity-100",
						"transition-transform-opacity",
						"group-data-[selected=true]:translate-x-3",
						"group-data-[selected=true]:opacity-0",
					],
				},
			},
		},
		defaultVariants: {
			color: "primary",
			size: "md",
			isDisabled: !1,
			disableAnimation: !1,
		},
		compoundVariants: [
			{
				disableAnimation: !1,
				size: "sm",
				class: {
					thumb: [
						"group-data-[pressed=true]:w-5",
						"group-data-[selected]:group-data-[pressed]:ml-3",
					],
				},
			},
			{
				disableAnimation: !1,
				size: "md",
				class: {
					thumb: [
						"group-data-[pressed=true]:w-6",
						"group-data-[selected]:group-data-[pressed]:ml-4",
					],
				},
			},
			{
				disableAnimation: !1,
				size: "lg",
				class: {
					thumb: [
						"group-data-[pressed=true]:w-7",
						"group-data-[selected]:group-data-[pressed]:ml-5",
					],
				},
			},
		],
	}),
	MC = [
		"data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
		"data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
		"data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
	],
	AC = [
		"data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
		"data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
		"data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
	],
	Om = Fe({
		base: [],
		variants: {
			orientation: {
				vertical: ["overflow-y-auto", ...MC],
				horizontal: ["overflow-x-auto", ...AC],
			},
			hideScrollBar: { true: "scrollbar-hide", false: "" },
		},
		defaultVariants: { orientation: "vertical", hideScrollBar: !1 },
	}),
	Nm = Fe({
		slots: {
			base: ["group inline-flex flex-col relative w-full"],
			label: [
				"block",
				"absolute",
				"z-10",
				"origin-top-left",
				"rtl:origin-top-right",
				"subpixel-antialiased",
				"text-small",
				"text-foreground-500",
				"pointer-events-none",
			],
			mainWrapper: "w-full flex flex-col",
			trigger:
				"relative px-3 gap-3 w-full inline-flex flex-row items-center shadow-sm outline-none tap-highlight-transparent",
			innerWrapper:
				"inline-flex h-full w-[calc(100%_-_theme(spacing.6))] min-h-4 items-center gap-1.5 box-border",
			selectorIcon: "absolute right-3 rtl:left-3 rtl:right-[unset] w-4 h-4",
			spinner: "absolute right-3 rtl:left-3 rtl:right-[unset]",
			value: [
				"text-foreground-500",
				"font-normal",
				"w-full",
				"text-left",
				"rtl:text-right",
			],
			listboxWrapper: "scroll-py-6 max-h-64 w-full",
			listbox: "",
			popoverContent: "w-full p-1 overflow-hidden",
			helperWrapper: "p-1 flex relative flex-col gap-1.5",
			description: "text-tiny text-foreground-400",
			errorMessage: "text-tiny text-danger",
		},
		variants: {
			variant: {
				flat: {
					trigger: [
						"bg-default-100",
						"data-[hover=true]:bg-default-200",
						"group-data-[focus=true]:bg-default-100",
					],
				},
				faded: {
					trigger: [
						"bg-default-100",
						"border-medium",
						"border-default-200",
						"data-[hover=true]:border-default-400",
					],
					value: "group-data-[has-value=true]:text-default-foreground",
				},
				bordered: {
					trigger: [
						"border-medium",
						"border-default-200",
						"data-[hover=true]:border-default-400",
						"data-[open=true]:border-default-foreground",
						"data-[focus=true]:border-default-foreground",
						"data-[focus=true]:border-default-foreground",
					],
				},
				underlined: {
					trigger: [
						"!px-1",
						"!pb-0",
						"!gap-0",
						"relative",
						"box-border",
						"border-b-medium",
						"shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
						"border-default-200",
						"!rounded-none",
						"hover:border-default-300",
						"after:content-['']",
						"after:w-0",
						"after:origin-center",
						"after:bg-default-foreground",
						"after:absolute",
						"after:left-1/2",
						"after:-translate-x-1/2",
						"after:-bottom-[2px]",
						"after:h-[2px]",
						"data-[open=true]:after:w-full",
						"data-[focus=true]:after:w-full",
					],
					label: "group-data-[filled=true]:text-foreground",
				},
			},
			color: {
				default: {},
				primary: {},
				secondary: {},
				success: {},
				warning: {},
				danger: {},
			},
			size: {
				sm: {
					label: "text-tiny",
					trigger: "h-8 min-h-8 px-2 rounded-small",
					value: "text-small",
				},
				md: { trigger: "h-10 min-h-10 rounded-medium", value: "text-small" },
				lg: { trigger: "h-12 min-h-12 rounded-large", value: "text-medium" },
			},
			radius: {
				none: { trigger: "rounded-none" },
				sm: { trigger: "rounded-small" },
				md: { trigger: "rounded-medium" },
				lg: { trigger: "rounded-large" },
				full: { trigger: "rounded-full" },
			},
			labelPlacement: {
				outside: { base: "flex flex-col" },
				"outside-left": {
					base: "flex-row items-center flex-nowrap items-start",
					label: "relative pr-2 rtl:pl-2 rtl:pr-[unset] text-foreground",
				},
				inside: {
					label: "text-tiny cursor-pointer",
					trigger: "flex-col items-start justify-center gap-0",
				},
			},
			fullWidth: { true: { base: "w-full" } },
			isDisabled: {
				true: {
					base: "opacity-disabled pointer-events-none",
					trigger: "pointer-events-none",
				},
			},
			isInvalid: {
				true: {
					label: "!text-danger",
					value: "!text-danger",
					selectorIcon: "text-danger",
				},
			},
			isRequired: {
				true: { label: "after:content-['*'] after:text-danger after:ml-0.5" },
			},
			isMultiline: {
				true: { label: "relative", trigger: "!h-auto" },
				false: { value: "truncate" },
			},
			disableAnimation: {
				true: {
					trigger: "after:transition-none",
					base: "transition-none",
					label: "transition-none",
					selectorIcon: "transition-none",
				},
				false: {
					base: "transition-background motion-reduce:transition-none !duration-150",
					label: [
						"will-change-auto",
						"origin-top-left",
						"rtl:origin-top-right",
						"!duration-200",
						"!ease-out",
						"transition-[transform,color,left,opacity]",
						"motion-reduce:transition-none",
					],
					selectorIcon:
						"transition-transform duration-150 ease motion-reduce:transition-none",
				},
			},
			disableSelectorIconRotation: {
				true: {},
				false: { selectorIcon: "data-[open=true]:rotate-180" },
			},
		},
		defaultVariants: {
			variant: "flat",
			color: "default",
			size: "md",
			labelPlacement: "inside",
			fullWidth: !0,
			isDisabled: !1,
			isMultiline: !1,
			disableAnimation: !1,
			disableSelectorIconRotation: !1,
		},
		compoundVariants: [
			{
				variant: "flat",
				color: "default",
				class: { value: "group-data-[has-value=true]:text-default-foreground" },
			},
			{
				variant: "flat",
				color: "primary",
				class: {
					trigger: [
						"bg-primary-50",
						"text-primary",
						"data-[hover=true]:bg-primary-100",
						"group-data-[focus=true]:bg-primary-50",
					],
					value: "text-primary",
					label: "text-primary",
				},
			},
			{
				variant: "flat",
				color: "secondary",
				class: {
					trigger: [
						"bg-secondary-50",
						"text-secondary",
						"data-[hover=true]:bg-secondary-100",
						"group-data-[focus=true]:bg-secondary-50",
					],
					value: "text-secondary",
					label: "text-secondary",
				},
			},
			{
				variant: "flat",
				color: "success",
				class: {
					trigger: [
						"bg-success-50",
						"text-success-600",
						"dark:text-success",
						"data-[hover=true]:bg-success-100",
						"group-data-[focus=true]:bg-success-50",
					],
					value: "text-success-600 dark:text-success",
					label: "text-success-600 dark:text-success",
				},
			},
			{
				variant: "flat",
				color: "warning",
				class: {
					trigger: [
						"bg-warning-50",
						"text-warning-600",
						"dark:text-warning",
						"data-[hover=true]:bg-warning-100",
						"group-data-[focus=true]:bg-warning-50",
					],
					value: "text-warning-600 dark:text-warning",
					label: "text-warning-600 dark:text-warning",
				},
			},
			{
				variant: "flat",
				color: "danger",
				class: {
					trigger: [
						"bg-danger-50",
						"text-danger",
						"dark:text-danger-500",
						"data-[hover=true]:bg-danger-100",
						"group-data-[focus=true]:bg-danger-50",
					],
					value: "text-danger dark:text-danger-500",
					label: "text-danger dark:text-danger-500",
				},
			},
			{
				variant: "faded",
				color: "primary",
				class: {
					trigger: "data-[hover=true]:border-primary",
					label: "text-primary",
				},
			},
			{
				variant: "faded",
				color: "secondary",
				class: {
					trigger: "data-[hover=true]:border-secondary",
					label: "text-secondary",
				},
			},
			{
				variant: "faded",
				color: "success",
				class: {
					trigger: "data-[hover=true]:border-success",
					label: "text-success",
				},
			},
			{
				variant: "faded",
				color: "warning",
				class: {
					trigger: "data-[hover=true]:border-warning",
					label: "text-warning",
				},
			},
			{
				variant: "faded",
				color: "danger",
				class: {
					trigger: "data-[hover=true]:border-danger",
					label: "text-danger",
				},
			},
			{
				variant: "underlined",
				color: "default",
				class: { value: "group-data-[has-value=true]:text-foreground" },
			},
			{
				variant: "underlined",
				color: "primary",
				class: { trigger: "after:bg-primary", label: "text-primary" },
			},
			{
				variant: "underlined",
				color: "secondary",
				class: { trigger: "after:bg-secondary", label: "text-secondary" },
			},
			{
				variant: "underlined",
				color: "success",
				class: { trigger: "after:bg-success", label: "text-success" },
			},
			{
				variant: "underlined",
				color: "warning",
				class: { trigger: "after:bg-warning", label: "text-warning" },
			},
			{
				variant: "underlined",
				color: "danger",
				class: { trigger: "after:bg-danger", label: "text-danger" },
			},
			{
				variant: "bordered",
				color: "primary",
				class: {
					trigger: [
						"data-[open=true]:border-primary",
						"data-[focus=true]:border-primary",
					],
					label: "text-primary",
				},
			},
			{
				variant: "bordered",
				color: "secondary",
				class: {
					trigger: [
						"data-[open=true]:border-secondary",
						"data-[focus=true]:border-secondary",
					],
					label: "text-secondary",
				},
			},
			{
				variant: "bordered",
				color: "success",
				class: {
					trigger: [
						"data-[open=true]:border-success",
						"data-[focus=true]:border-success",
					],
					label: "text-success",
				},
			},
			{
				variant: "bordered",
				color: "warning",
				class: {
					trigger: [
						"data-[open=true]:border-warning",
						"data-[focus=true]:border-warning",
					],
					label: "text-warning",
				},
			},
			{
				variant: "bordered",
				color: "danger",
				class: {
					trigger: [
						"data-[open=true]:border-danger",
						"data-[focus=true]:border-danger",
					],
					label: "text-danger",
				},
			},
			{
				labelPlacement: "inside",
				color: "default",
				class: { label: "group-data-[filled=true]:text-default-600" },
			},
			{
				labelPlacement: "outside",
				color: "default",
				class: { label: "group-data-[filled=true]:text-foreground" },
			},
			{ radius: "full", size: ["sm"], class: { trigger: "px-3" } },
			{ radius: "full", size: "md", class: { trigger: "px-4" } },
			{ radius: "full", size: "lg", class: { trigger: "px-5" } },
			{
				disableAnimation: !1,
				variant: ["faded", "bordered"],
				class: { trigger: "transition-colors motion-reduce:transition-none" },
			},
			{
				disableAnimation: !1,
				variant: "underlined",
				class: {
					trigger: "after:transition-width motion-reduce:after:transition-none",
				},
			},
			{ variant: ["flat", "faded"], class: { trigger: [...tr] } },
			{
				isInvalid: !0,
				variant: "flat",
				class: {
					trigger: [
						"bg-danger-50",
						"data-[hover=true]:bg-danger-100",
						"group-data-[focus=true]:bg-danger-50",
					],
				},
			},
			{
				isInvalid: !0,
				variant: "bordered",
				class: {
					trigger: "!border-danger group-data-[focus=true]:border-danger",
				},
			},
			{
				isInvalid: !0,
				variant: "underlined",
				class: { trigger: "after:bg-danger" },
			},
			{
				labelPlacement: "inside",
				size: "sm",
				class: { trigger: "h-12 min-h-12 py-1.5 px-3" },
			},
			{
				labelPlacement: "inside",
				size: "md",
				class: { trigger: "h-14 min-h-14 py-2" },
			},
			{
				labelPlacement: "inside",
				size: "lg",
				class: { label: "text-small", trigger: "h-16 min-h-16 py-2.5 gap-0" },
			},
			{
				labelPlacement: ["inside", "outside"],
				class: { label: ["group-data-[filled=true]:pointer-events-auto"] },
			},
			{
				labelPlacement: "outside",
				isMultiline: !1,
				class: {
					base: "group relative justify-end",
					label: [
						"pb-0",
						"z-20",
						"top-1/2",
						"-translate-y-1/2",
						"group-data-[filled=true]:left-0",
						"rtl:group-data-[filled=true]:right-0",
						"rtl:group-data-[filled=true]:left-[unset]",
					],
				},
			},
			{
				labelPlacement: ["inside"],
				class: { label: "group-data-[filled=true]:scale-85" },
			},
			{
				labelPlacement: "inside",
				size: ["sm", "md"],
				class: { label: "text-small" },
			},
			{
				labelPlacement: "inside",
				isMultiline: !1,
				size: "sm",
				class: {
					label: [
						"group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px)]",
					],
					innerWrapper: "group-data-[has-label=true]:pt-4",
				},
			},
			{
				labelPlacement: "inside",
				isMultiline: !1,
				size: "md",
				class: {
					label: [
						"group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]",
					],
					innerWrapper: "group-data-[has-label=true]:pt-4",
				},
			},
			{
				labelPlacement: "inside",
				isMultiline: !1,
				size: "lg",
				class: {
					label: [
						"text-medium",
						"group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]",
					],
					innerWrapper: "group-data-[has-label=true]:pt-5",
				},
			},
			{
				labelPlacement: "inside",
				variant: ["faded", "bordered"],
				isMultiline: !1,
				size: "sm",
				class: {
					label: [
						"group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: ["faded", "bordered"],
				isMultiline: !1,
				size: "md",
				class: {
					label: [
						"group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: ["faded", "bordered"],
				isMultiline: !1,
				size: "lg",
				class: {
					label: [
						"text-medium",
						"group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px_-_theme(borderWidth.medium))]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: "underlined",
				isMultiline: !1,
				size: "sm",
				class: {
					label: [
						"group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_5px)]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: "underlined",
				isMultiline: !1,
				size: "md",
				class: {
					label: [
						"group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_3.5px)]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: "underlined",
				isMultiline: !1,
				size: "lg",
				class: {
					label: [
						"text-medium",
						"group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]",
					],
				},
			},
			{
				labelPlacement: "outside",
				size: "sm",
				isMultiline: !1,
				class: {
					label: [
						"left-2",
						"rtl:right-2",
						"rtl:left-[unset]",
						"text-tiny",
						"group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)]",
					],
					base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_8px)]",
				},
			},
			{
				labelPlacement: "outside",
				isMultiline: !1,
				size: "md",
				class: {
					label: [
						"left-3",
						"rtl:right-3",
						"rtl:left-[unset]",
						"text-small",
						"group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]",
					],
					base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]",
				},
			},
			{
				labelPlacement: "outside",
				isMultiline: !1,
				size: "lg",
				class: {
					label: [
						"left-3",
						"rtl:right-3",
						"rtl:left-[unset]",
						"text-medium",
						"group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_24px)]",
					],
					base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_12px)]",
				},
			},
			{
				labelPlacement: "outside",
				isMultiline: !0,
				class: { label: "pb-1.5" },
			},
			{
				labelPlacement: ["inside", "outside"],
				class: {
					label: ["pe-2", "max-w-full", "text-ellipsis", "overflow-hidden"],
				},
			},
		],
	}),
	$c = Fe({
		slots: {
			base: "flex flex-col w-full gap-1",
			labelWrapper: "w-full flex justify-between items-center",
			label: "",
			value: "",
			step: [
				"h-1.5",
				"w-1.5",
				"absolute",
				"rounded-full",
				"bg-default-300/50",
				"data-[in-range=true]:bg-background/50",
			],
			mark: [
				"absolute",
				"text-small",
				"cursor-default",
				"opacity-50",
				"data-[in-range=true]:opacity-100",
			],
			trackWrapper: "relative flex gap-2",
			track: [
				"flex",
				"w-full",
				"relative",
				"rounded-full",
				"bg-default-300/50",
			],
			filler: "h-full absolute",
			thumb: [
				"flex",
				"justify-center",
				"items-center",
				"before:absolute",
				"before:w-11",
				"before:h-11",
				"before:rounded-full",
				"after:shadow-small",
				"after:shadow-small",
				"after:bg-background",
				"data-[focused=true]:z-10",
				tr,
			],
			startContent: [],
			endContent: [],
		},
		variants: {
			size: {
				sm: {
					label: "text-small",
					value: "text-small",
					thumb: "w-5 h-5 after:w-4 after:h-4",
					step: "data-[in-range=false]:bg-default-200",
				},
				md: {
					thumb: "w-6 h-6 after:w-5 after:h-5",
					label: "text-small",
					value: "text-small",
				},
				lg: {
					thumb: "h-7 w-7 after:w-5 after:h-5",
					step: "w-2 h-2",
					label: "text-medium",
					value: "text-medium",
					mark: "mt-2",
				},
			},
			radius: {
				none: { thumb: "rounded-none after:rounded-none" },
				sm: {
					thumb:
						"rounded-[calc(theme(borderRadius.small)/2)] after:rounded-[calc(theme(borderRadius.small)/3)]",
				},
				md: {
					thumb:
						"rounded-[calc(theme(borderRadius.medium)/2)] after:rounded-[calc(theme(borderRadius.medium)/3)]",
				},
				lg: {
					thumb:
						"rounded-[calc(theme(borderRadius.large)/1.5)] after:rounded-[calc(theme(borderRadius.large)/2)]",
				},
				full: { thumb: "rounded-full after:rounded-full" },
			},
			color: {
				foreground: { filler: "bg-foreground", thumb: "bg-foreground" },
				primary: { filler: "bg-primary", thumb: "bg-primary" },
				secondary: { filler: "bg-secondary", thumb: "bg-secondary" },
				success: { filler: "bg-success", thumb: "bg-success" },
				warning: { filler: "bg-warning", thumb: "bg-warning" },
				danger: { filler: "bg-danger", thumb: "bg-danger" },
			},
			isVertical: {
				true: {
					base: "w-auto h-full flex-col-reverse items-center",
					trackWrapper: "flex-col h-full justify-center items-center",
					filler: "w-full h-auto",
					thumb: "left-1/2",
					track: "h-full border-y-transparent",
					labelWrapper: "flex-col justify-center items-center",
					step: ["left-1/2", "-translate-x-1/2", "translate-y-1/2"],
					mark: ["left-1/2", "ml-1", "translate-x-1/2", "-translate-y-1/2"],
				},
				false: {
					thumb: "top-1/2",
					trackWrapper: "items-center",
					track: "border-x-transparent",
					step: ["top-1/2", "-translate-x-1/2", "-translate-y-1/2"],
					mark: ["top-1/2", "mt-1", "-translate-x-1/2", "translate-y-1/2"],
				},
			},
			isDisabled: {
				false: {
					thumb: ["cursor-grab", "data-[dragging=true]:cursor-grabbing"],
				},
				true: { base: "opacity-disabled", thumb: "cursor-default" },
			},
			hasMarks: { true: { base: "mb-5" }, false: {} },
			showOutline: {
				true: { thumb: "ring-2 ring-background" },
				false: { thumb: "ring-transparent border-0" },
			},
			hideValue: { true: { value: "sr-only" } },
			hideThumb: {
				true: { thumb: "sr-only", track: "overflow-hidden cursor-pointer" },
			},
			hasSingleThumb: { true: {}, false: {} },
			disableAnimation: {
				true: { thumb: "data-[dragging=true]:after:scale-100" },
				false: {
					thumb: "after:transition-all motion-reduce:after:transition-none",
					mark: "transition-opacity motion-reduce:transition-none",
				},
			},
			disableThumbScale: {
				true: {},
				false: { thumb: "data-[dragging=true]:after:scale-80" },
			},
		},
		compoundVariants: [
			{ size: ["sm", "md"], showOutline: !1, class: { thumb: "shadow-small" } },
			{
				size: "sm",
				color: "foreground",
				class: { step: "data-[in-range=true]:bg-foreground" },
			},
			{
				size: "sm",
				color: "primary",
				class: { step: "data-[in-range=true]:bg-primary" },
			},
			{
				size: "sm",
				color: "secondary",
				class: { step: "data-[in-range=true]:bg-secondary" },
			},
			{
				size: "sm",
				color: "success",
				class: { step: "data-[in-range=true]:bg-success" },
			},
			{
				size: "sm",
				color: "warning",
				class: { step: "data-[in-range=true]:bg-warning" },
			},
			{
				size: "sm",
				color: "danger",
				class: { step: "data-[in-range=true]:bg-danger" },
			},
			{
				size: "sm",
				isVertical: !1,
				class: {
					track:
						"h-1 my-[calc((theme(spacing.5)-theme(spacing.1))/2)] data-[thumb-hidden=false]:border-x-[calc(theme(spacing.5)/2)]",
				},
			},
			{
				size: "md",
				isVertical: !1,
				class: {
					track:
						"h-3 my-[calc((theme(spacing.6)-theme(spacing.3))/2)] data-[thumb-hidden=false]:border-x-[calc(theme(spacing.6)/2)]",
				},
			},
			{
				size: "lg",
				isVertical: !1,
				class: {
					track:
						"h-7 my-[calc((theme(spacing.7)-theme(spacing.5))/2)] data-[thumb-hidden=false]:border-x-[calc(theme(spacing.7)/2)]",
				},
			},
			{
				size: "sm",
				isVertical: !0,
				class: {
					track:
						"w-1 mx-[calc((theme(spacing.5)-theme(spacing.1))/2)] data-[thumb-hidden=false]:border-y-[calc(theme(spacing.5)/2)]",
				},
			},
			{
				size: "md",
				isVertical: !0,
				class: {
					track:
						"w-3 mx-[calc((theme(spacing.6)-theme(spacing.3))/2)] data-[thumb-hidden=false]:border-y-[calc(theme(spacing.6)/2)]",
				},
			},
			{
				size: "lg",
				isVertical: !0,
				class: {
					track:
						"w-7 mx-[calc((theme(spacing.7)-theme(spacing.5))/2)] data-[thumb-hidden=false]:border-y-[calc(theme(spacing.7)/2)]",
				},
			},
			{
				color: "foreground",
				isVertical: !1,
				hasSingleThumb: !0,
				class: { track: "border-s-foreground" },
			},
			{
				color: "primary",
				isVertical: !1,
				hasSingleThumb: !0,
				class: { track: "border-s-primary" },
			},
			{
				color: "secondary",
				isVertical: !1,
				hasSingleThumb: !0,
				class: { track: "border-s-secondary" },
			},
			{
				color: "success",
				isVertical: !1,
				hasSingleThumb: !0,
				class: { track: "border-s-success" },
			},
			{
				color: "warning",
				isVertical: !1,
				hasSingleThumb: !0,
				class: { track: "border-s-warning" },
			},
			{
				color: "danger",
				isVertical: !1,
				hasSingleThumb: !0,
				class: { track: "border-s-danger" },
			},
			{
				color: "foreground",
				isVertical: !0,
				hasSingleThumb: !0,
				class: { track: "border-b-foreground" },
			},
			{
				color: "primary",
				isVertical: !0,
				hasSingleThumb: !0,
				class: { track: "border-b-primary" },
			},
			{
				color: "secondary",
				isVertical: !0,
				hasSingleThumb: !0,
				class: { track: "border-b-secondary" },
			},
			{
				color: "success",
				isVertical: !0,
				hasSingleThumb: !0,
				class: { track: "border-b-success" },
			},
			{
				color: "warning",
				isVertical: !0,
				hasSingleThumb: !0,
				class: { track: "border-b-warning" },
			},
			{
				color: "danger",
				isVertical: !0,
				hasSingleThumb: !0,
				class: { track: "border-b-danger" },
			},
		],
		defaultVariants: {
			size: "md",
			color: "primary",
			radius: "full",
			hideValue: !1,
			hideThumb: !1,
			isDisabled: !1,
			disableThumbScale: !1,
			disableAnimation: !1,
			showOutline: !1,
		},
	}),
	jm = Fe({
		slots: {
			base: "relative inline-flex flex-col gap-2 items-center justify-center",
			wrapper: "relative flex",
			circle1: [
				"absolute",
				"w-full",
				"h-full",
				"rounded-full",
				"animate-spinner-ease-spin",
				"border-2",
				"border-solid",
				"border-t-transparent",
				"border-l-transparent",
				"border-r-transparent",
			],
			circle2: [
				"absolute",
				"w-full",
				"h-full",
				"rounded-full",
				"opacity-75",
				"animate-spinner-linear-spin",
				"border-2",
				"border-dotted",
				"border-t-transparent",
				"border-l-transparent",
				"border-r-transparent",
			],
			label: "text-foreground dark:text-foreground-dark font-regular",
		},
		variants: {
			size: {
				sm: {
					wrapper: "w-5 h-5",
					circle1: "border-2",
					circle2: "border-2",
					label: "text-small",
				},
				md: {
					wrapper: "w-8 h-8",
					circle1: "border-3",
					circle2: "border-3",
					label: "text-medium",
				},
				lg: {
					wrapper: "w-10 h-10",
					circle1: "border-3",
					circle2: "border-3",
					label: "text-large",
				},
			},
			color: {
				current: { circle1: "border-b-current", circle2: "border-b-current" },
				white: { circle1: "border-b-white", circle2: "border-b-white" },
				default: { circle1: "border-b-default", circle2: "border-b-default" },
				primary: { circle1: "border-b-primary", circle2: "border-b-primary" },
				secondary: {
					circle1: "border-b-secondary",
					circle2: "border-b-secondary",
				},
				success: { circle1: "border-b-success", circle2: "border-b-success" },
				warning: { circle1: "border-b-warning", circle2: "border-b-warning" },
				danger: { circle1: "border-b-danger", circle2: "border-b-danger" },
			},
			labelColor: {
				foreground: { label: "text-foreground" },
				primary: { label: "text-primary" },
				secondary: { label: "text-secondary" },
				success: { label: "text-success" },
				warning: { label: "text-warning" },
				danger: { label: "text-danger" },
			},
		},
		defaultVariants: { size: "md", color: "primary", labelColor: "foreground" },
	}),
	Cx = Fe({
		slots: {
			base: "w-full relative flex flex-col gap-1 p-1",
			list: "w-full flex flex-col gap-0.5 outline-none",
			emptyContent: [
				"h-10",
				"px-2",
				"py-1.5",
				"w-full",
				"h-full",
				"text-foreground-400",
				"text-start",
			],
		},
	}),
	Rl = Fe({
		slots: {
			base: [
				"flex",
				"group",
				"gap-2",
				"items-center",
				"justify-between",
				"relative",
				"px-2",
				"py-1.5",
				"w-full",
				"h-full",
				"box-border",
				"rounded-small",
				"subpixel-antialiased",
				"outline-none",
				"cursor-pointer",
				"tap-highlight-transparent",
				...tr,
				"data-[focus-visible=true]:dark:ring-offset-background-content1",
			],
			wrapper: "w-full flex flex-col items-start justify-center",
			title: "flex-1 text-small font-normal truncate",
			description: [
				"w-full",
				"text-tiny",
				"text-foreground-500",
				"group-hover:text-current",
			],
			selectedIcon: ["text-inherit", "w-3", "h-3", "flex-shrink-0"],
			shortcut: [
				"px-1",
				"py-0.5",
				"rounded",
				"font-sans",
				"text-foreground-500",
				"text-tiny",
				"border-small",
				"border-default-300",
				"group-hover:border-current",
			],
		},
		variants: {
			variant: {
				solid: { base: "" },
				bordered: { base: "border-medium border-transparent bg-transparent" },
				light: { base: "bg-transparent" },
				faded: {
					base: [
						"border-small border-transparent hover:border-default data-[hover=true]:bg-default-100",
						"data-[selectable=true]:focus:border-default data-[selectable=true]:focus:bg-default-100",
					],
				},
				flat: { base: "" },
				shadow: { base: "data-[hover=true]:shadow-lg" },
			},
			color: {
				default: {},
				primary: {},
				secondary: {},
				success: {},
				warning: {},
				danger: {},
			},
			showDivider: {
				true: {
					base: [
						"mb-1.5",
						"after:content-['']",
						"after:absolute",
						"after:-bottom-1",
						"after:left-0",
						"after:right-0",
						"after:h-divider",
						"after:bg-divider",
					],
				},
				false: {},
			},
			isDisabled: { true: { base: "opacity-disabled pointer-events-none" } },
			disableAnimation: {
				true: {},
				false: { base: "data-[hover=true]:transition-colors" },
			},
		},
		defaultVariants: {
			variant: "solid",
			color: "default",
			disableAnimation: !1,
			showDivider: !1,
		},
		compoundVariants: [
			{
				variant: "solid",
				color: "default",
				class: {
					base: [
						"data-[hover=true]:bg-default",
						"data-[hover=true]:text-default-foreground",
						"data-[selectable=true]:focus:bg-default",
						"data-[selectable=true]:focus:text-default-foreground",
					],
				},
			},
			{
				variant: "solid",
				color: "primary",
				class: {
					base: [
						"data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground",
						"data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground",
					],
				},
			},
			{
				variant: "solid",
				color: "secondary",
				class: {
					base: [
						"data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground",
						"data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground",
					],
				},
			},
			{
				variant: "solid",
				color: "success",
				class: {
					base: [
						"data-[hover=true]:bg-success data-[hover=true]:text-success-foreground",
						"data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground",
					],
				},
			},
			{
				variant: "solid",
				color: "warning",
				class: {
					base: [
						"data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground",
						"data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground",
					],
				},
			},
			{
				variant: "solid",
				color: "danger",
				class: {
					base: [
						"data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground",
						"data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground",
					],
				},
			},
			{
				variant: "shadow",
				color: "default",
				class: {
					base: [
						"data-[hover=true]:shadow-default/50 data-[hover=true]:bg-default data-[hover=true]:text-default-foreground",
						"data-[selectable=true]:focus:shadow-default/50 data-[selectable=true]:focus:bg-default data-[selectable=true]:focus:text-default-foreground",
					],
				},
			},
			{
				variant: "shadow",
				color: "primary",
				class: {
					base: [
						"data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground",
						"data-[selectable=true]:focus:shadow-primary/30 data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground",
					],
				},
			},
			{
				variant: "shadow",
				color: "secondary",
				class: {
					base: [
						"data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground",
						"data-[selectable=true]:focus:shadow-secondary/30 data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground",
					],
				},
			},
			{
				variant: "shadow",
				color: "success",
				class: {
					base: [
						"data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground",
						"data-[selectable=true]:focus:shadow-success/30 data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground",
					],
				},
			},
			{
				variant: "shadow",
				color: "warning",
				class: {
					base: [
						"data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground",
						"data-[selectable=true]:focus:shadow-warning/30 data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground",
					],
				},
			},
			{
				variant: "shadow",
				color: "danger",
				class: {
					base: [
						"data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground",
						"data-[selectable=true]:focus:shadow-danger/30 data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground",
					],
				},
			},
			{
				variant: "bordered",
				color: "default",
				class: {
					base: [
						"data-[hover=true]:border-default",
						"data-[selectable=true]:focus:border-default",
					],
				},
			},
			{
				variant: "bordered",
				color: "primary",
				class: {
					base: [
						"data-[hover=true]:border-primary data-[hover=true]:text-primary",
						"data-[selectable=true]:focus:border-primary data-[selectable=true]:focus:text-primary",
					],
				},
			},
			{
				variant: "bordered",
				color: "secondary",
				class: {
					base: [
						"data-[hover=true]:border-secondary data-[hover=true]:text-secondary",
						"data-[selectable=true]:focus:border-secondary data-[selectable=true]:focus:text-secondary",
					],
				},
			},
			{
				variant: "bordered",
				color: "success",
				class: {
					base: [
						"data-[hover=true]:border-success data-[hover=true]:text-success",
						"data-[selectable=true]:focus:border-success data-[selectable=true]:focus:text-success",
					],
				},
			},
			{
				variant: "bordered",
				color: "warning",
				class: {
					base: [
						"data-[hover=true]:border-warning data-[hover=true]:text-warning",
						"data-[selectable=true]:focus:border-warning data-[selectable=true]:focus:text-warning",
					],
				},
			},
			{
				variant: "bordered",
				color: "danger",
				class: {
					base: [
						"data-[hover=true]:border-danger data-[hover=true]:text-danger",
						"data-[selectable=true]:focus:border-danger data-[selectable=true]:focus:text-danger",
					],
				},
			},
			{
				variant: "flat",
				color: "default",
				class: {
					base: [
						"data-[hover=true]:bg-default/40",
						"data-[hover=true]:text-default-foreground",
						"data-[selectable=true]:focus:bg-default/40",
						"data-[selectable=true]:focus:text-default-foreground",
					],
				},
			},
			{
				variant: "flat",
				color: "primary",
				class: {
					base: [
						"data-[hover=true]:bg-primary/20 data-[hover=true]:text-primary",
						"data-[selectable=true]:focus:bg-primary/20 data-[selectable=true]:focus:text-primary",
					],
				},
			},
			{
				variant: "flat",
				color: "secondary",
				class: {
					base: [
						"data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary",
						"data-[selectable=true]:focus:bg-secondary/20 data-[selectable=true]:focus:text-secondary",
					],
				},
			},
			{
				variant: "flat",
				color: "success",
				class: {
					base: [
						"data-[hover=true]:bg-success/20 data-[hover=true]:text-success",
						"data-[selectable=true]:focus:bg-success/20 data-[selectable=true]:focus:text-success",
					],
				},
			},
			{
				variant: "flat",
				color: "warning",
				class: {
					base: [
						"data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning",
						"data-[selectable=true]:focus:bg-warning/20 data-[selectable=true]:focus:text-warning",
					],
				},
			},
			{
				variant: "flat",
				color: "danger",
				class: {
					base: [
						"data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger",
						"data-[selectable=true]:focus:bg-danger/20 data-[selectable=true]:focus:text-danger",
					],
				},
			},
			{
				variant: "faded",
				color: "default",
				class: {
					base: [
						"data-[hover=true]:text-default-foreground",
						"data-[selectable=true]:focus:text-default-foreground",
					],
				},
			},
			{
				variant: "faded",
				color: "primary",
				class: {
					base: [
						"data-[hover=true]:text-primary",
						"data-[selectable=true]:focus:text-primary",
					],
				},
			},
			{
				variant: "faded",
				color: "secondary",
				class: {
					base: [
						"data-[hover=true]:text-secondary",
						"data-[selectable=true]:focus:text-secondary",
					],
				},
			},
			{
				variant: "faded",
				color: "success",
				class: {
					base: [
						"data-[hover=true]:text-success",
						"data-[selectable=true]:focus:text-success",
					],
				},
			},
			{
				variant: "faded",
				color: "warning",
				class: {
					base: [
						"data-[hover=true]:text-warning",
						"data-[selectable=true]:focus:text-warning",
					],
				},
			},
			{
				variant: "faded",
				color: "danger",
				class: {
					base: [
						"data-[hover=true]:text-danger",
						"data-[selectable=true]:focus:text-danger",
					],
				},
			},
			{
				variant: "light",
				color: "default",
				class: {
					base: [
						"data-[hover=true]:text-default-500",
						"data-[selectable=true]:focus:text-default-500",
					],
				},
			},
			{
				variant: "light",
				color: "primary",
				class: {
					base: [
						"data-[hover=true]:text-primary",
						"data-[selectable=true]:focus:text-primary",
					],
				},
			},
			{
				variant: "light",
				color: "secondary",
				class: {
					base: [
						"data-[hover=true]:text-secondary",
						"data-[selectable=true]:focus:text-secondary",
					],
				},
			},
			{
				variant: "light",
				color: "success",
				class: {
					base: [
						"data-[hover=true]:text-success",
						"data-[selectable=true]:focus:text-success",
					],
				},
			},
			{
				variant: "light",
				color: "warning",
				class: {
					base: [
						"data-[hover=true]:text-warning",
						"data-[selectable=true]:focus:text-warning",
					],
				},
			},
			{
				variant: "light",
				color: "danger",
				class: {
					base: [
						"data-[hover=true]:text-danger",
						"data-[selectable=true]:focus:text-danger",
					],
				},
			},
		],
	}),
	Ex = Fe({
		slots: {
			base: "relative mb-2",
			heading: "pl-1 text-tiny text-foreground-500",
			group: "data-[has-title=true]:pt-1",
			divider: "mt-2",
		},
	}),
	_m = Fe({
		slots: {
			wrapper: [
				"flex",
				"w-screen",
				"h-[100dvh]",
				"fixed",
				"inset-0",
				"z-50",
				"overflow-x-auto",
				"justify-center",
				"[--scale-enter:100%]",
				"[--scale-exit:100%]",
				"[--slide-enter:0px]",
				"[--slide-exit:80px]",
				"sm:[--scale-enter:100%]",
				"sm:[--scale-exit:103%]",
				"sm:[--slide-enter:0px]",
				"sm:[--slide-exit:0px]",
			],
			base: [
				"flex",
				"flex-col",
				"relative",
				"bg-white",
				"z-50",
				"w-full",
				"box-border",
				"bg-content1",
				"outline-none",
				"mx-1",
				"my-1",
				"sm:mx-6",
				"sm:my-16",
			],
			backdrop: "z-50",
			header: "flex py-4 px-6 flex-initial text-large font-semibold",
			body: "flex flex-1 flex-col gap-3 px-6 py-2",
			footer: "flex flex-row gap-2 px-6 py-4 justify-end",
			closeButton: [
				"absolute",
				"appearance-none",
				"outline-none",
				"select-none",
				"top-1",
				"right-1",
				"rtl:left-1",
				"rtl:right-[unset]",
				"p-2",
				"text-foreground-500",
				"rounded-full",
				"hover:bg-default-100",
				"active:bg-default-200",
				"tap-highlight-transparent",
				...tr,
			],
		},
		variants: {
			size: {
				xs: { base: "max-w-xs" },
				sm: { base: "max-w-sm" },
				md: { base: "max-w-md" },
				lg: { base: "max-w-lg" },
				xl: { base: "max-w-xl" },
				"2xl": { base: "max-w-2xl" },
				"3xl": { base: "max-w-3xl" },
				"4xl": { base: "max-w-4xl" },
				"5xl": { base: "max-w-5xl" },
				full: {
					base: "my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-[100dvh] !rounded-none",
				},
			},
			radius: {
				none: { base: "rounded-none" },
				sm: { base: "rounded-small" },
				md: { base: "rounded-medium" },
				lg: { base: "rounded-large" },
			},
			placement: {
				auto: { wrapper: "items-end sm:items-center" },
				center: { wrapper: "items-center sm:items-center" },
				top: { wrapper: "items-start sm:items-start" },
				"top-center": { wrapper: "items-start sm:items-center" },
				bottom: { wrapper: "items-end sm:items-end" },
				"bottom-center": { wrapper: "items-end sm:items-center" },
			},
			shadow: {
				sm: { base: "shadow-small" },
				md: { base: "shadow-medium" },
				lg: { base: "shadow-large" },
			},
			backdrop: {
				transparent: { backdrop: "hidden" },
				opaque: { backdrop: "bg-overlay/50 backdrop-opacity-disabled" },
				blur: {
					backdrop: "backdrop-blur-md backdrop-saturate-150 bg-overlay/30",
				},
			},
			scrollBehavior: {
				normal: { base: "overflow-y-hidden" },
				inside: {
					base: "max-h-[calc(100%_-_7.5rem)]",
					body: "overflow-y-auto",
				},
				outside: {
					wrapper: "items-start sm:items-start overflow-y-auto",
					base: "my-16",
				},
			},
		},
		defaultVariants: {
			size: "md",
			radius: "lg",
			shadow: "sm",
			placement: "auto",
			backdrop: "opaque",
			scrollBehavior: "normal",
		},
		compoundVariants: [
			{
				backdrop: ["opaque", "blur"],
				class: { backdrop: "w-screen h-screen fixed inset-0" },
			},
		],
	}),
	Ll = Fe({
		slots: {
			base: [
				"z-0",
				"relative",
				"bg-transparent",
				"before:content-['']",
				"before:hidden",
				"before:z-[-1]",
				"before:absolute",
				"before:rotate-45",
				"before:w-2.5",
				"before:h-2.5",
				"before:rounded-sm",
				"data-[arrow=true]:before:block",
				"data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
				"data-[placement=top]:before:left-1/2",
				"data-[placement=top]:before:-translate-x-1/2",
				"data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
				"data-[placement=top-start]:before:left-3",
				"data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
				"data-[placement=top-end]:before:right-3",
				"data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
				"data-[placement=bottom]:before:left-1/2",
				"data-[placement=bottom]:before:-translate-x-1/2",
				"data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
				"data-[placement=bottom-start]:before:left-3",
				"data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
				"data-[placement=bottom-end]:before:right-3",
				"data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
				"data-[placement=left]:before:top-1/2",
				"data-[placement=left]:before:-translate-y-1/2",
				"data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
				"data-[placement=left-start]:before:top-1/4",
				"data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
				"data-[placement=left-end]:before:bottom-1/4",
				"data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
				"data-[placement=right]:before:top-1/2",
				"data-[placement=right]:before:-translate-y-1/2",
				"data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
				"data-[placement=right-start]:before:top-1/4",
				"data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
				"data-[placement=right-end]:before:bottom-1/4",
				...tr,
			],
			content: [
				"z-10",
				"px-2.5",
				"py-1",
				"w-full",
				"inline-flex",
				"flex-col",
				"items-center",
				"justify-center",
				"box-border",
				"subpixel-antialiased",
				"outline-none",
				"box-border",
			],
			trigger: ["z-10"],
			backdrop: ["hidden"],
			arrow: [],
		},
		variants: {
			size: {
				sm: { content: "text-tiny" },
				md: { content: "text-small" },
				lg: { content: "text-medium" },
			},
			color: {
				default: {
					base: "before:bg-content1 before:shadow-small",
					content: "bg-content1",
				},
				foreground: {
					base: "before:bg-foreground",
					content: oe.solid.foreground,
				},
				primary: { base: "before:bg-primary", content: oe.solid.primary },
				secondary: { base: "before:bg-secondary", content: oe.solid.secondary },
				success: { base: "before:bg-success", content: oe.solid.success },
				warning: { base: "before:bg-warning", content: oe.solid.warning },
				danger: { base: "before:bg-danger", content: oe.solid.danger },
			},
			radius: {
				none: { content: "rounded-none" },
				sm: { content: "rounded-small" },
				md: { content: "rounded-medium" },
				lg: { content: "rounded-large" },
				full: { content: "rounded-full" },
			},
			shadow: {
				sm: { content: "shadow-small" },
				md: { content: "shadow-medium" },
				lg: { content: "shadow-large" },
			},
			backdrop: {
				transparent: {},
				opaque: { backdrop: "bg-overlay/50 backdrop-opacity-disabled" },
				blur: {
					backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30",
				},
			},
			triggerScaleOnOpen: {
				true: {
					trigger: [
						"aria-expanded:scale-[0.97]",
						"aria-expanded:opacity-70",
						"subpixel-antialiased",
					],
				},
				false: {},
			},
			disableAnimation: { true: { base: "animate-none" } },
			isTriggerDisabled: {
				true: { trigger: "opacity-disabled pointer-events-none" },
				false: {},
			},
		},
		defaultVariants: {
			color: "default",
			radius: "lg",
			size: "md",
			shadow: "md",
			backdrop: "transparent",
			disableAnimation: !1,
			triggerScaleOnOpen: !0,
		},
		compoundVariants: [
			{
				backdrop: ["opaque", "blur"],
				class: { backdrop: "block w-full h-full fixed inset-0 -z-30" },
			},
		],
	}),
	DC = Fe({
		base: "shrink-0 bg-divider border-none",
		variants: {
			orientation: {
				horizontal: "w-full h-divider",
				vertical: "h-full w-divider",
			},
		},
		defaultVariants: { orientation: "horizontal" },
	}),
	IC = Fe({ base: ["w-full", "p-1", "min-w-[200px]"] });
Fe({
	slots: {
		base: [
			"flex",
			"group",
			"gap-2",
			"items-center",
			"justify-between",
			"relative",
			"px-2",
			"py-1.5",
			"w-full",
			"h-full",
			"box-border",
			"rounded-small",
			"outline-none",
			"cursor-pointer",
			"tap-highlight-transparent",
			"data-[pressed=true]:opacity-70",
			...tr,
			"data-[focus-visible=true]:dark:ring-offset-background-content1",
		],
		wrapper: "w-full flex flex-col items-start justify-center",
		title: "flex-1 text-small font-normal truncate",
		description: [
			"w-full",
			"text-tiny",
			"text-foreground-500",
			"group-hover:text-current",
		],
		selectedIcon: ["text-inherit", "w-3", "h-3", "flex-shrink-0"],
		shortcut: [
			"px-1",
			"py-0.5",
			"rounded",
			"font-sans",
			"text-foreground-500",
			"text-tiny",
			"border-small",
			"border-default-300",
			"group-hover:border-current",
		],
	},
	variants: {
		variant: {
			solid: { base: "" },
			bordered: { base: "border-medium border-transparent bg-transparent" },
			light: { base: "bg-transparent" },
			faded: {
				base: "border-small border-transparent hover:border-default data-[hover=true]:bg-default-100",
			},
			flat: { base: "" },
			shadow: { base: "data-[hover=true]:shadow-lg" },
		},
		color: {
			default: {},
			primary: {},
			secondary: {},
			success: {},
			warning: {},
			danger: {},
		},
		isDisabled: { true: { base: "opacity-disabled pointer-events-none" } },
		disableAnimation: { true: {}, false: {} },
	},
	defaultVariants: { variant: "solid", color: "default", disableAnimation: !1 },
	compoundVariants: [
		{
			variant: "solid",
			color: "default",
			class: {
				base: "data-[hover=true]:bg-default data-[hover=true]:text-default-foreground",
			},
		},
		{
			variant: "solid",
			color: "primary",
			class: {
				base: "data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground",
			},
		},
		{
			variant: "solid",
			color: "secondary",
			class: {
				base: "data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground",
			},
		},
		{
			variant: "solid",
			color: "success",
			class: {
				base: "data-[hover=true]:bg-success data-[hover=true]:text-success-foreground",
			},
		},
		{
			variant: "solid",
			color: "warning",
			class: {
				base: "data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground",
			},
		},
		{
			variant: "solid",
			color: "danger",
			class: {
				base: "data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground",
			},
		},
		{
			variant: "shadow",
			color: "default",
			class: {
				base: "data-[hover=true]:shadow-default/50 data-[hover=true]:bg-default data-[hover=true]:text-default-foreground",
			},
		},
		{
			variant: "shadow",
			color: "primary",
			class: {
				base: "data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground",
			},
		},
		{
			variant: "shadow",
			color: "secondary",
			class: {
				base: "data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground",
			},
		},
		{
			variant: "shadow",
			color: "success",
			class: {
				base: "data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground",
			},
		},
		{
			variant: "shadow",
			color: "warning",
			class: {
				base: "data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground",
			},
		},
		{
			variant: "shadow",
			color: "danger",
			class: {
				base: "data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground",
			},
		},
		{
			variant: "bordered",
			color: "default",
			class: { base: "data-[hover=true]:border-default" },
		},
		{
			variant: "bordered",
			color: "primary",
			class: {
				base: "data-[hover=true]:border-primary data-[hover=true]:text-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			class: {
				base: "data-[hover=true]:border-secondary data-[hover=true]:text-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			class: {
				base: "data-[hover=true]:border-success data-[hover=true]:text-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			class: {
				base: "data-[hover=true]:border-warning data-[hover=true]:text-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			class: {
				base: "data-[hover=true]:border-danger data-[hover=true]:text-danger",
			},
		},
		{
			variant: "flat",
			color: "default",
			class: {
				base: "data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground",
			},
		},
		{
			variant: "flat",
			color: "primary",
			class: {
				base: "data-[hover=true]:bg-primary/20 data-[hover=true]:text-primary",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			class: {
				base: "data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary",
			},
		},
		{
			variant: "flat",
			color: "success",
			class: {
				base: "data-[hover=true]:bg-success/20 data-[hover=true]:text-success ",
			},
		},
		{
			variant: "flat",
			color: "warning",
			class: {
				base: "data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			class: {
				base: "data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger",
			},
		},
		{
			variant: "faded",
			color: "default",
			class: { base: "data-[hover=true]:text-default-foreground" },
		},
		{
			variant: "faded",
			color: "primary",
			class: { base: "data-[hover=true]:text-primary" },
		},
		{
			variant: "faded",
			color: "secondary",
			class: { base: "data-[hover=true]:text-secondary" },
		},
		{
			variant: "faded",
			color: "success",
			class: { base: "data-[hover=true]:text-success" },
		},
		{
			variant: "faded",
			color: "warning",
			class: { base: "data-[hover=true]:text-warning" },
		},
		{
			variant: "faded",
			color: "danger",
			class: { base: "data-[hover=true]:text-danger" },
		},
		{
			variant: "light",
			color: "default",
			class: { base: "data-[hover=true]:text-default-500" },
		},
		{
			variant: "light",
			color: "primary",
			class: { base: "data-[hover=true]:text-primary" },
		},
		{
			variant: "light",
			color: "secondary",
			class: { base: "data-[hover=true]:text-secondary" },
		},
		{
			variant: "light",
			color: "success",
			class: { base: "data-[hover=true]:text-success" },
		},
		{
			variant: "light",
			color: "warning",
			class: { base: "data-[hover=true]:text-warning" },
		},
		{
			variant: "light",
			color: "danger",
			class: { base: "data-[hover=true]:text-danger" },
		},
	],
});
Fe({
	slots: {
		base: "relative mb-2",
		heading: "pl-1 text-tiny text-foreground-500",
		group: "data-[has-title=true]:pt-1",
		divider: "mt-2",
	},
});
Fe({ base: "w-full flex flex-col gap-0.5 p-1" });
var zm = Fe({
		slots: {
			base: "group flex flex-col",
			label: [
				"absolute",
				"z-10",
				"pointer-events-none",
				"origin-top-left",
				"rtl:origin-top-right",
				"subpixel-antialiased",
				"block",
				"text-small",
				"text-foreground-500",
			],
			mainWrapper: "h-full",
			inputWrapper:
				"relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3",
			innerWrapper: "inline-flex w-full items-center h-full box-border",
			input: [
				"w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none",
				"data-[has-start-content=true]:ps-1.5",
				"data-[has-end-content=true]:pe-1.5",
			],
			clearButton: [
				"p-2",
				"-m-2",
				"z-10",
				"hidden",
				"absolute",
				"right-3",
				"rtl:right-auto",
				"rtl:left-3",
				"appearance-none",
				"outline-none",
				"select-none",
				"opacity-0",
				"hover:!opacity-100",
				"cursor-pointer",
				"active:!opacity-70",
				"rounded-full",
				...tr,
			],
			helperWrapper:
				"hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5",
			description: "text-tiny text-foreground-400",
			errorMessage: "text-tiny text-danger",
		},
		variants: {
			variant: {
				flat: {
					inputWrapper: [
						"bg-default-100",
						"data-[hover=true]:bg-default-200",
						"group-data-[focus=true]:bg-default-100",
					],
				},
				faded: {
					inputWrapper: [
						"bg-default-100",
						"border-medium",
						"border-default-200",
						"data-[hover=true]:border-default-400",
					],
					value: "group-data-[has-value=true]:text-default-foreground",
				},
				bordered: {
					inputWrapper: [
						"border-medium",
						"border-default-200",
						"data-[hover=true]:border-default-400",
						"group-data-[focus=true]:border-default-foreground",
					],
				},
				underlined: {
					inputWrapper: [
						"!px-1",
						"!pb-0",
						"!gap-0",
						"relative",
						"box-border",
						"border-b-medium",
						"shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
						"border-default-200",
						"!rounded-none",
						"hover:border-default-300",
						"after:content-['']",
						"after:w-0",
						"after:origin-center",
						"after:bg-default-foreground",
						"after:absolute",
						"after:left-1/2",
						"after:-translate-x-1/2",
						"after:-bottom-[2px]",
						"after:h-[2px]",
						"group-data-[focus=true]:after:w-full",
					],
					innerWrapper: "pb-1",
					label: "group-data-[filled-within=true]:text-foreground",
				},
			},
			color: {
				default: {},
				primary: {},
				secondary: {},
				success: {},
				warning: {},
				danger: {},
			},
			size: {
				sm: {
					label: "text-tiny",
					inputWrapper: "h-8 min-h-8 px-2 rounded-small",
					input: "text-small",
					clearButton: "text-medium",
				},
				md: {
					inputWrapper: "h-10 min-h-10 rounded-medium",
					input: "text-small",
					clearButton: "text-large",
				},
				lg: {
					inputWrapper: "h-12 min-h-12 rounded-large",
					input: "text-medium",
					clearButton: "text-large",
				},
			},
			radius: {
				none: { inputWrapper: "rounded-none" },
				sm: { inputWrapper: "rounded-small" },
				md: { inputWrapper: "rounded-medium" },
				lg: { inputWrapper: "rounded-large" },
				full: { inputWrapper: "rounded-full" },
			},
			labelPlacement: {
				outside: { mainWrapper: "flex flex-col" },
				"outside-left": {
					base: "flex-row items-center flex-nowrap data-[has-helper=true]:items-start",
					inputWrapper: "flex-1",
					mainWrapper: "flex flex-col",
					label: "relative text-foreground pr-2 rtl:pr-0 rtl:pl-2",
				},
				inside: {
					label: "text-tiny cursor-text",
					inputWrapper: "flex-col items-start justify-center gap-0",
					innerWrapper: "group-data-[has-label=true]:items-end",
				},
			},
			fullWidth: { true: { base: "w-full" } },
			isClearable: {
				true: {
					input: "peer pr-6 rtl:pr-0 rtl:pl-6",
					clearButton:
						"peer-data-[filled=true]:opacity-70 peer-data-[filled=true]:block",
				},
			},
			isDisabled: {
				true: {
					base: "opacity-disabled pointer-events-none",
					inputWrapper: "pointer-events-none",
					label: "pointer-events-none",
				},
			},
			isInvalid: {
				true: {
					label: "!text-danger",
					input: "!placeholder:text-danger !text-danger",
				},
			},
			isRequired: {
				true: { label: "after:content-['*'] after:text-danger after:ml-0.5" },
			},
			isMultiline: {
				true: {
					label: "relative",
					inputWrapper: "!h-auto",
					innerWrapper: "items-start group-data-[has-label=true]:items-start",
					input: "resize-none data-[hide-scroll=true]:scrollbar-hide",
				},
			},
			disableAnimation: {
				true: {
					input: "transition-none",
					inputWrapper: "transition-none",
					label: "transition-none",
				},
				false: {
					inputWrapper:
						"transition-background motion-reduce:transition-none !duration-150",
					label: [
						"will-change-auto",
						"!duration-200",
						"!ease-out",
						"motion-reduce:transition-none",
						"transition-[transform,color,left,opacity]",
					],
					clearButton: ["transition-opacity", "motion-reduce:transition-none"],
				},
			},
		},
		defaultVariants: {
			variant: "flat",
			color: "default",
			size: "md",
			fullWidth: !0,
			labelPlacement: "inside",
			isDisabled: !1,
			isMultiline: !1,
			disableAnimation: !1,
		},
		compoundVariants: [
			{
				variant: "flat",
				color: "default",
				class: { input: "group-data-[has-value=true]:text-default-foreground" },
			},
			{
				variant: "flat",
				color: "primary",
				class: {
					inputWrapper: [
						"bg-primary-50",
						"data-[hover=true]:bg-primary-100",
						"text-primary",
						"group-data-[focus=true]:bg-primary-50",
						"placeholder:text-primary",
					],
					input: "placeholder:text-primary",
					label: "text-primary",
				},
			},
			{
				variant: "flat",
				color: "secondary",
				class: {
					inputWrapper: [
						"bg-secondary-50",
						"text-secondary",
						"data-[hover=true]:bg-secondary-100",
						"group-data-[focus=true]:bg-secondary-50",
						"placeholder:text-secondary",
					],
					input: "placeholder:text-secondary",
					label: "text-secondary",
				},
			},
			{
				variant: "flat",
				color: "success",
				class: {
					inputWrapper: [
						"bg-success-50",
						"text-success-600",
						"dark:text-success",
						"placeholder:text-success-600",
						"dark:placeholder:text-success",
						"data-[hover=true]:bg-success-100",
						"group-data-[focus=true]:bg-success-50",
					],
					input: "placeholder:text-success-600 dark:placeholder:text-success",
					label: "text-success-600 dark:text-success",
				},
			},
			{
				variant: "flat",
				color: "warning",
				class: {
					inputWrapper: [
						"bg-warning-50",
						"text-warning-600",
						"dark:text-warning",
						"placeholder:text-warning-600",
						"dark:placeholder:text-warning",
						"data-[hover=true]:bg-warning-100",
						"group-data-[focus=true]:bg-warning-50",
					],
					input: "placeholder:text-warning-600 dark:placeholder:text-warning",
					label: "text-warning-600 dark:text-warning",
				},
			},
			{
				variant: "flat",
				color: "danger",
				class: {
					inputWrapper: [
						"bg-danger-50",
						"text-danger",
						"dark:text-danger-500",
						"placeholder:text-danger",
						"dark:placeholder:text-danger-500",
						"data-[hover=true]:bg-danger-100",
						"group-data-[focus=true]:bg-danger-50",
					],
					input: "placeholder:text-danger dark:placeholder:text-danger-500",
					label: "text-danger dark:text-danger-500",
				},
			},
			{
				variant: "faded",
				color: "primary",
				class: {
					label: "text-primary",
					inputWrapper:
						"data-[hover=true]:border-primary focus-within:border-primary",
				},
			},
			{
				variant: "faded",
				color: "secondary",
				class: {
					label: "text-secondary",
					inputWrapper:
						"data-[hover=true]:border-secondary focus-within:border-secondary",
				},
			},
			{
				variant: "faded",
				color: "success",
				class: {
					label: "text-success",
					inputWrapper:
						"data-[hover=true]:border-success focus-within:border-success",
				},
			},
			{
				variant: "faded",
				color: "warning",
				class: {
					label: "text-warning",
					inputWrapper:
						"data-[hover=true]:border-warning focus-within:border-warning",
				},
			},
			{
				variant: "faded",
				color: "danger",
				class: {
					label: "text-danger",
					inputWrapper:
						"data-[hover=true]:border-danger focus-within:border-danger",
				},
			},
			{
				variant: "underlined",
				color: "default",
				class: { input: "group-data-[has-value=true]:text-foreground" },
			},
			{
				variant: "underlined",
				color: "primary",
				class: { inputWrapper: "after:bg-primary", label: "text-primary" },
			},
			{
				variant: "underlined",
				color: "secondary",
				class: { inputWrapper: "after:bg-secondary", label: "text-secondary" },
			},
			{
				variant: "underlined",
				color: "success",
				class: { inputWrapper: "after:bg-success", label: "text-success" },
			},
			{
				variant: "underlined",
				color: "warning",
				class: { inputWrapper: "after:bg-warning", label: "text-warning" },
			},
			{
				variant: "underlined",
				color: "danger",
				class: { inputWrapper: "after:bg-danger", label: "text-danger" },
			},
			{
				variant: "bordered",
				color: "primary",
				class: {
					inputWrapper: "group-data-[focus=true]:border-primary",
					label: "text-primary",
				},
			},
			{
				variant: "bordered",
				color: "secondary",
				class: {
					inputWrapper: "group-data-[focus=true]:border-secondary",
					label: "text-secondary",
				},
			},
			{
				variant: "bordered",
				color: "success",
				class: {
					inputWrapper: "group-data-[focus=true]:border-success",
					label: "text-success",
				},
			},
			{
				variant: "bordered",
				color: "warning",
				class: {
					inputWrapper: "group-data-[focus=true]:border-warning",
					label: "text-warning",
				},
			},
			{
				variant: "bordered",
				color: "danger",
				class: {
					inputWrapper: "group-data-[focus=true]:border-danger",
					label: "text-danger",
				},
			},
			{
				labelPlacement: "inside",
				color: "default",
				class: { label: "group-data-[filled-within=true]:text-default-600" },
			},
			{
				labelPlacement: "outside",
				color: "default",
				class: { label: "group-data-[filled-within=true]:text-foreground" },
			},
			{ radius: "full", size: ["sm"], class: { inputWrapper: "px-3" } },
			{ radius: "full", size: "md", class: { inputWrapper: "px-4" } },
			{ radius: "full", size: "lg", class: { inputWrapper: "px-5" } },
			{
				disableAnimation: !1,
				variant: ["faded", "bordered"],
				class: {
					inputWrapper: "transition-colors motion-reduce:transition-none",
				},
			},
			{
				disableAnimation: !1,
				variant: "underlined",
				class: {
					inputWrapper:
						"after:transition-width motion-reduce:after:transition-none",
				},
			},
			{ variant: ["flat", "faded"], class: { inputWrapper: [...Yp] } },
			{
				isInvalid: !0,
				variant: "flat",
				class: {
					inputWrapper: [
						"bg-danger-50",
						"data-[hover=true]:bg-danger-100",
						"group-data-[focus=true]:bg-danger-50",
					],
				},
			},
			{
				isInvalid: !0,
				variant: "bordered",
				class: {
					inputWrapper: "!border-danger group-data-[focus=true]:border-danger",
				},
			},
			{
				isInvalid: !0,
				variant: "underlined",
				class: { inputWrapper: "after:bg-danger" },
			},
			{
				labelPlacement: "inside",
				size: "sm",
				class: { inputWrapper: "h-12 py-1.5 px-3" },
			},
			{
				labelPlacement: "inside",
				size: "md",
				class: { inputWrapper: "h-14 py-2" },
			},
			{
				labelPlacement: "inside",
				size: "lg",
				class: { label: "text-small", inputWrapper: "h-16 py-2.5 gap-0" },
			},
			{
				labelPlacement: "inside",
				size: "sm",
				variant: ["bordered", "faded"],
				class: { inputWrapper: "py-1" },
			},
			{
				labelPlacement: ["inside", "outside"],
				class: {
					label: ["group-data-[filled-within=true]:pointer-events-auto"],
				},
			},
			{
				labelPlacement: ["outside", "outside-left"],
				class: { input: "h-full" },
			},
			{
				labelPlacement: "outside",
				isMultiline: !1,
				class: {
					base: "group relative justify-end",
					label: [
						"pb-0",
						"z-20",
						"top-1/2",
						"-translate-y-1/2",
						"group-data-[filled-within=true]:left-0",
					],
				},
			},
			{
				labelPlacement: ["inside"],
				class: { label: ["group-data-[filled-within=true]:scale-85"] },
			},
			{
				labelPlacement: ["inside"],
				variant: "flat",
				class: { innerWrapper: "pb-0.5" },
			},
			{ variant: "underlined", size: "sm", class: { innerWrapper: "pb-1" } },
			{
				variant: "underlined",
				size: ["md", "lg"],
				class: { innerWrapper: "pb-1.5" },
			},
			{
				labelPlacement: "inside",
				size: ["sm", "md"],
				class: { label: "text-small" },
			},
			{
				labelPlacement: "inside",
				isMultiline: !1,
				size: "sm",
				class: {
					label: [
						"group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px)]",
					],
				},
			},
			{
				labelPlacement: "inside",
				isMultiline: !1,
				size: "md",
				class: {
					label: [
						"group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]",
					],
				},
			},
			{
				labelPlacement: "inside",
				isMultiline: !1,
				size: "lg",
				class: {
					label: [
						"text-medium",
						"group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: ["faded", "bordered"],
				isMultiline: !1,
				size: "sm",
				class: {
					label: [
						"group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: ["faded", "bordered"],
				isMultiline: !1,
				size: "md",
				class: {
					label: [
						"group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: ["faded", "bordered"],
				isMultiline: !1,
				size: "lg",
				class: {
					label: [
						"text-medium",
						"group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px_-_theme(borderWidth.medium))]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: "underlined",
				isMultiline: !1,
				size: "sm",
				class: {
					label: [
						"group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_5px)]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: "underlined",
				isMultiline: !1,
				size: "md",
				class: {
					label: [
						"group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_3.5px)]",
					],
				},
			},
			{
				labelPlacement: "inside",
				variant: "underlined",
				size: "lg",
				isMultiline: !1,
				class: {
					label: [
						"text-medium",
						"group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]",
					],
				},
			},
			{
				labelPlacement: "outside",
				size: "sm",
				isMultiline: !1,
				class: {
					label: [
						"left-2",
						"text-tiny",
						"group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)]",
					],
					base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_8px)]",
				},
			},
			{
				labelPlacement: "outside",
				size: "md",
				isMultiline: !1,
				class: {
					label: [
						"left-3",
						"rtl:left-auto",
						"rtl:right-3",
						"text-small",
						"group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]",
					],
					base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]",
				},
			},
			{
				labelPlacement: "outside",
				size: "lg",
				isMultiline: !1,
				class: {
					label: [
						"left-3",
						"rtl:left-auto",
						"rtl:right-3",
						"text-medium",
						"group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_24px)]",
					],
					base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_12px)]",
				},
			},
			{
				labelPlacement: "outside-left",
				size: "sm",
				class: { label: "group-data-[has-helper=true]:pt-2" },
			},
			{
				labelPlacement: "outside-left",
				size: "md",
				class: { label: "group-data-[has-helper=true]:pt-3" },
			},
			{
				labelPlacement: "outside-left",
				size: "lg",
				class: { label: "group-data-[has-helper=true]:pt-4" },
			},
			{
				labelPlacement: ["outside", "outside-left"],
				isMultiline: !0,
				class: { inputWrapper: "py-2" },
			},
			{
				labelPlacement: "outside",
				isMultiline: !0,
				class: { label: "pb-1.5" },
			},
			{
				labelPlacement: "inside",
				isMultiline: !0,
				class: { label: "pb-0.5", input: "pt-0" },
			},
			{
				isMultiline: !0,
				disableAnimation: !1,
				class: {
					input:
						"transition-height !duration-100 motion-reduce:transition-none",
				},
			},
			{
				labelPlacement: ["inside", "outside"],
				class: {
					label: ["pe-2", "max-w-full", "text-ellipsis", "overflow-hidden"],
				},
			},
			{
				isMultiline: !0,
				radius: "full",
				class: { inputWrapper: "data-[has-multiple-rows=true]:rounded-large" },
			},
		],
	}),
	Bm = Fe({
		base: [
			"relative inline-flex items-center outline-none tap-highlight-transparent",
			...tr,
		],
		variants: {
			size: { sm: "text-small", md: "text-medium", lg: "text-large" },
			color: {
				foreground: "text-foreground",
				primary: "text-primary",
				secondary: "text-secondary",
				success: "text-success",
				warning: "text-warning",
				danger: "text-danger",
			},
			underline: {
				none: "no-underline",
				hover: "hover:underline",
				always: "underline",
				active: "active:underline",
				focus: "focus:underline",
			},
			isBlock: {
				true: [
					"px-2",
					"py-1",
					"hover:after:opacity-100",
					"after:content-['']",
					"after:inset-0",
					"after:opacity-0",
					"after:w-full",
					"after:h-full",
					"after:rounded-xl",
					"after:transition-background",
					"after:absolute",
				],
				false: "hover:opacity-80 active:opacity-disabled transition-opacity",
			},
			isDisabled: {
				true: "opacity-disabled cursor-default pointer-events-none",
			},
			disableAnimation: { true: "after:transition-none transition-none" },
		},
		compoundVariants: [
			{
				isBlock: !0,
				color: "foreground",
				class: "hover:after:bg-foreground/10",
			},
			{ isBlock: !0, color: "primary", class: "hover:after:bg-primary/20" },
			{ isBlock: !0, color: "secondary", class: "hover:after:bg-secondary/20" },
			{ isBlock: !0, color: "success", class: "hover:after:bg-success/20" },
			{ isBlock: !0, color: "warning", class: "hover:after:bg-warning/20" },
			{ isBlock: !0, color: "danger", class: "hover:after:bg-danger/20" },
			{
				underline: ["hover", "always", "active", "focus"],
				class: "underline-offset-4",
			},
		],
		defaultVariants: {
			color: "primary",
			size: "md",
			isBlock: !1,
			underline: "none",
			isDisabled: !1,
			disableAnimation: !1,
		},
	}),
	VC = "flex mx-1 text-current self-center",
	Km = Fe({
		slots: {
			base: [
				"flex",
				"flex-col",
				"relative",
				"overflow-hidden",
				"height-auto",
				"outline-none",
				"text-foreground",
				"box-border",
				"bg-content1",
				...tr,
			],
			header: [
				"flex",
				"p-3",
				"z-10",
				"w-full",
				"justify-start",
				"items-center",
				"shrink-0",
				"overflow-inherit",
				"color-inherit",
				"subpixel-antialiased",
			],
			body: [
				"relative",
				"flex",
				"flex-1",
				"w-full",
				"p-3",
				"flex-auto",
				"flex-col",
				"place-content-inherit",
				"align-items-inherit",
				"h-auto",
				"break-words",
				"text-left",
				"overflow-y-auto",
				"subpixel-antialiased",
			],
			footer: [
				"p-3",
				"h-auto",
				"flex",
				"w-full",
				"items-center",
				"overflow-hidden",
				"color-inherit",
				"subpixel-antialiased",
			],
		},
		variants: {
			shadow: {
				none: { base: "shadow-none" },
				sm: { base: "shadow-small" },
				md: { base: "shadow-medium" },
				lg: { base: "shadow-large" },
			},
			radius: {
				none: {
					base: "rounded-none",
					header: "rounded-none",
					footer: "rounded-none",
				},
				sm: {
					base: "rounded-small",
					header: "rounded-t-small",
					footer: "rounded-b-small",
				},
				md: {
					base: "rounded-medium",
					header: "rounded-t-medium",
					footer: "rounded-b-medium",
				},
				lg: {
					base: "rounded-large",
					header: "rounded-t-large",
					footer: "rounded-b-large",
				},
			},
			fullWidth: { true: { base: "w-full" } },
			isHoverable: {
				true: {
					base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2",
				},
			},
			isPressable: { true: { base: "cursor-pointer" } },
			isBlurred: {
				true: {
					base: [
						"bg-background/80",
						"dark:bg-background/20",
						"backdrop-blur-md",
						"backdrop-saturate-150",
					],
				},
			},
			isFooterBlurred: {
				true: {
					footer: [
						"bg-background/10",
						"backdrop-blur",
						"backdrop-saturate-150",
					],
				},
			},
			isDisabled: { true: { base: "opacity-disabled cursor-not-allowed" } },
			disableAnimation: {
				true: "",
				false: {
					base: "transition-transform-background motion-reduce:transition-none",
				},
			},
		},
		compoundVariants: [
			{
				isPressable: !0,
				disableAnimation: !1,
				class: "data-[pressed=true]:scale-[0.97] tap-highlight-transparent",
			},
		],
		defaultVariants: {
			radius: "lg",
			shadow: "md",
			fullWidth: !1,
			isHoverable: !1,
			isPressable: !1,
			isDisabled: !1,
			disableAnimation: !1,
			isFooterBlurred: !1,
		},
	}),
	RC = Fe({
		slots: {
			base: "group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",
			wrapper: [
				"relative",
				"inline-flex",
				"items-center",
				"justify-center",
				"flex-shrink-0",
				"overflow-hidden",
				"before:content-['']",
				"before:absolute",
				"before:inset-0",
				"before:border-solid",
				"before:border-2",
				"before:box-border",
				"before:border-default",
				"after:content-['']",
				"after:absolute",
				"after:inset-0",
				"after:scale-50",
				"after:opacity-0",
				"after:origin-center",
				"group-data-[selected=true]:after:scale-100",
				"group-data-[selected=true]:after:opacity-100",
				"group-data-[hover=true]:before:bg-default-100",
				...Yp,
			],
			icon: "z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",
			label: "relative text-foreground select-none",
		},
		variants: {
			color: {
				default: {
					wrapper:
						"after:bg-default after:text-default-foreground text-default-foreground",
				},
				primary: {
					wrapper:
						"after:bg-primary after:text-primary-foreground text-primary-foreground",
				},
				secondary: {
					wrapper:
						"after:bg-secondary after:text-secondary-foreground text-secondary-foreground",
				},
				success: {
					wrapper:
						"after:bg-success after:text-success-foreground text-success-foreground",
				},
				warning: {
					wrapper:
						"after:bg-warning after:text-warning-foreground text-warning-foreground",
				},
				danger: {
					wrapper:
						"after:bg-danger after:text-danger-foreground text-danger-foreground",
				},
			},
			size: {
				sm: {
					wrapper: [
						"w-4 h-4 mr-2 rtl:ml-2 rtl:mr-[unset]",
						"rounded-[calc(theme(borderRadius.medium)*0.5)]",
						"before:rounded-[calc(theme(borderRadius.medium)*0.5)]",
						"after:rounded-[calc(theme(borderRadius.medium)*0.5)]",
					],
					label: "text-small",
					icon: "w-3 h-2",
				},
				md: {
					wrapper: [
						"w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset]",
						"rounded-[calc(theme(borderRadius.medium)*0.6)]",
						"before:rounded-[calc(theme(borderRadius.medium)*0.6)]",
						"after:rounded-[calc(theme(borderRadius.medium)*0.6)]",
					],
					label: "text-medium",
					icon: "w-4 h-3",
				},
				lg: {
					wrapper: [
						"w-6 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]",
						"rounded-[calc(theme(borderRadius.medium)*0.7)]",
						"before:rounded-[calc(theme(borderRadius.medium)*0.7)]",
						"after:rounded-[calc(theme(borderRadius.medium)*0.7)]",
					],
					label: "text-large",
					icon: "w-5 h-4",
				},
			},
			radius: {
				none: {
					wrapper: "rounded-none before:rounded-none after:rounded-none",
				},
				sm: {
					wrapper: [
						"rounded-[calc(theme(borderRadius.medium)*0.5)]",
						"before:rounded-[calc(theme(borderRadius.medium)*0.5)]",
						"after:rounded-[calc(theme(borderRadius.medium)*0.5)]",
					],
				},
				md: {
					wrapper: [
						"rounded-[calc(theme(borderRadius.medium)*0.6)]",
						"before:rounded-[calc(theme(borderRadius.medium)*0.6)]",
						"after:rounded-[calc(theme(borderRadius.medium)*0.6)]",
					],
				},
				lg: {
					wrapper: [
						"rounded-[calc(theme(borderRadius.medium)*0.7)]",
						"before:rounded-[calc(theme(borderRadius.medium)*0.7)]",
						"after:rounded-[calc(theme(borderRadius.medium)*0.7)]",
					],
				},
				full: {
					wrapper: "rounded-full before:rounded-full after:rounded-full",
				},
			},
			lineThrough: {
				true: {
					label: [
						"inline-flex",
						"items-center",
						"justify-center",
						"before:content-['']",
						"before:absolute",
						"before:bg-foreground",
						"before:w-0",
						"before:h-0.5",
						"group-data-[selected=true]:opacity-60",
						"group-data-[selected=true]:before:w-full",
					],
				},
			},
			isDisabled: { true: { base: "opacity-disabled pointer-events-none" } },
			isInvalid: {
				true: { wrapper: "before:border-danger", label: "text-danger" },
			},
			disableAnimation: {
				true: {
					wrapper: "transition-none",
					icon: "transition-none",
					label: "transition-none",
				},
				false: {
					wrapper: [
						"before:transition-colors",
						"group-data-[pressed=true]:scale-95",
						"transition-transform",
						"after:transition-transform-opacity",
						"after:!ease-linear",
						"after:!duration-200",
						"motion-reduce:transition-none",
					],
					icon: "transition-opacity motion-reduce:transition-none",
					label:
						"transition-colors-opacity before:transition-width motion-reduce:transition-none",
				},
			},
		},
		defaultVariants: {
			color: "primary",
			size: "md",
			isDisabled: !1,
			lineThrough: !1,
			disableAnimation: !1,
		},
	}),
	LC = Fe({
		slots: {
			base: "relative flex flex-col gap-2",
			label: "relative text-medium text-foreground-500",
			wrapper:
				"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",
			description: "text-small text-foreground-400",
			errorMessage: "text-small text-danger",
		},
		variants: {
			isRequired: {
				true: { label: "after:content-['*'] after:text-danger after:ml-0.5" },
			},
			isInvalid: { true: { description: "text-danger" } },
			disableAnimation: {
				true: {},
				false: {
					description:
						"transition-colors !duration-150 motion-reduce:transition-none",
				},
			},
		},
		defaultVariants: { isInvalid: !1, isRequired: !1, disableAnimation: !1 },
	}),
	FC = Fe({
		base: [
			"z-0",
			"group",
			"relative",
			"inline-flex",
			"items-center",
			"justify-center",
			"box-border",
			"appearance-none",
			"outline-none",
			"select-none",
			"whitespace-nowrap",
			"min-w-max",
			"font-normal",
			"subpixel-antialiased",
			"overflow-hidden",
			"tap-highlight-transparent",
			...tr,
		],
		variants: {
			variant: {
				solid: "",
				bordered: "border-medium bg-transparent",
				light: "bg-transparent",
				flat: "",
				faded: "border-medium",
				shadow: "",
				ghost: "border-medium bg-transparent",
			},
			size: {
				sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
				md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
				lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large",
			},
			color: {
				default: "",
				primary: "",
				secondary: "",
				success: "",
				warning: "",
				danger: "",
			},
			radius: {
				none: "rounded-none",
				sm: "rounded-small",
				md: "rounded-medium",
				lg: "rounded-large",
				full: "rounded-full",
			},
			fullWidth: { true: "w-full" },
			isDisabled: { true: "opacity-disabled pointer-events-none" },
			isInGroup: {
				true: "[&:not(:first-child):not(:last-child)]:rounded-none",
			},
			isIconOnly: {
				true: "px-0 !gap-0",
				false: "[&>svg]:max-w-[theme(spacing.8)]",
			},
			disableAnimation: {
				true: "!transition-none",
				false:
					"data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none",
			},
		},
		defaultVariants: {
			size: "md",
			variant: "solid",
			color: "default",
			fullWidth: !1,
			isDisabled: !1,
			isInGroup: !1,
			disableAnimation: !1,
		},
		compoundVariants: [
			{ variant: "solid", color: "default", class: oe.solid.default },
			{ variant: "solid", color: "primary", class: oe.solid.primary },
			{ variant: "solid", color: "secondary", class: oe.solid.secondary },
			{ variant: "solid", color: "success", class: oe.solid.success },
			{ variant: "solid", color: "warning", class: oe.solid.warning },
			{ variant: "solid", color: "danger", class: oe.solid.danger },
			{ variant: "shadow", color: "default", class: oe.shadow.default },
			{ variant: "shadow", color: "primary", class: oe.shadow.primary },
			{ variant: "shadow", color: "secondary", class: oe.shadow.secondary },
			{ variant: "shadow", color: "success", class: oe.shadow.success },
			{ variant: "shadow", color: "warning", class: oe.shadow.warning },
			{ variant: "shadow", color: "danger", class: oe.shadow.danger },
			{ variant: "bordered", color: "default", class: oe.bordered.default },
			{ variant: "bordered", color: "primary", class: oe.bordered.primary },
			{ variant: "bordered", color: "secondary", class: oe.bordered.secondary },
			{ variant: "bordered", color: "success", class: oe.bordered.success },
			{ variant: "bordered", color: "warning", class: oe.bordered.warning },
			{ variant: "bordered", color: "danger", class: oe.bordered.danger },
			{ variant: "flat", color: "default", class: oe.flat.default },
			{ variant: "flat", color: "primary", class: oe.flat.primary },
			{ variant: "flat", color: "secondary", class: oe.flat.secondary },
			{ variant: "flat", color: "success", class: oe.flat.success },
			{ variant: "flat", color: "warning", class: oe.flat.warning },
			{ variant: "flat", color: "danger", class: oe.flat.danger },
			{ variant: "faded", color: "default", class: oe.faded.default },
			{ variant: "faded", color: "primary", class: oe.faded.primary },
			{ variant: "faded", color: "secondary", class: oe.faded.secondary },
			{ variant: "faded", color: "success", class: oe.faded.success },
			{ variant: "faded", color: "warning", class: oe.faded.warning },
			{ variant: "faded", color: "danger", class: oe.faded.danger },
			{
				variant: "light",
				color: "default",
				class: [oe.light.default, "data-[hover=true]:bg-default/40"],
			},
			{
				variant: "light",
				color: "primary",
				class: [oe.light.primary, "data-[hover=true]:bg-primary/20"],
			},
			{
				variant: "light",
				color: "secondary",
				class: [oe.light.secondary, "data-[hover=true]:bg-secondary/20"],
			},
			{
				variant: "light",
				color: "success",
				class: [oe.light.success, "data-[hover=true]:bg-success/20"],
			},
			{
				variant: "light",
				color: "warning",
				class: [oe.light.warning, "data-[hover=true]:bg-warning/20"],
			},
			{
				variant: "light",
				color: "danger",
				class: [oe.light.danger, "data-[hover=true]:bg-danger/20"],
			},
			{ variant: "ghost", color: "default", class: oe.ghost.default },
			{ variant: "ghost", color: "primary", class: oe.ghost.primary },
			{ variant: "ghost", color: "secondary", class: oe.ghost.secondary },
			{ variant: "ghost", color: "success", class: oe.ghost.success },
			{ variant: "ghost", color: "warning", class: oe.ghost.warning },
			{ variant: "ghost", color: "danger", class: oe.ghost.danger },
			{
				isInGroup: !0,
				class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
			},
			{
				isInGroup: !0,
				size: "sm",
				class: "rounded-none first:rounded-s-small last:rounded-e-small",
			},
			{
				isInGroup: !0,
				size: "md",
				class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
			},
			{
				isInGroup: !0,
				size: "lg",
				class: "rounded-none first:rounded-s-large last:rounded-e-large",
			},
			{
				isInGroup: !0,
				isRounded: !0,
				class: "rounded-none first:rounded-s-full last:rounded-e-full",
			},
			{
				isInGroup: !0,
				radius: "none",
				class: "rounded-none first:rounded-s-none last:rounded-e-none",
			},
			{
				isInGroup: !0,
				radius: "sm",
				class: "rounded-none first:rounded-s-small last:rounded-e-small",
			},
			{
				isInGroup: !0,
				radius: "md",
				class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
			},
			{
				isInGroup: !0,
				radius: "lg",
				class: "rounded-none first:rounded-s-large last:rounded-e-large",
			},
			{
				isInGroup: !0,
				radius: "full",
				class: "rounded-none first:rounded-s-full last:rounded-e-full",
			},
			{
				isInGroup: !0,
				variant: ["ghost", "bordered"],
				color: "default",
				className: fo.default,
			},
			{
				isInGroup: !0,
				variant: ["ghost", "bordered"],
				color: "primary",
				className: fo.primary,
			},
			{
				isInGroup: !0,
				variant: ["ghost", "bordered"],
				color: "secondary",
				className: fo.secondary,
			},
			{
				isInGroup: !0,
				variant: ["ghost", "bordered"],
				color: "success",
				className: fo.success,
			},
			{
				isInGroup: !0,
				variant: ["ghost", "bordered"],
				color: "warning",
				className: fo.warning,
			},
			{
				isInGroup: !0,
				variant: ["ghost", "bordered"],
				color: "danger",
				className: fo.danger,
			},
			{ isIconOnly: !0, size: "sm", class: "min-w-8 w-8 h-8" },
			{ isIconOnly: !0, size: "md", class: "min-w-10 w-10 h-10" },
			{ isIconOnly: !0, size: "lg", class: "min-w-12 w-12 h-12" },
			{
				variant: ["solid", "faded", "flat", "bordered", "shadow"],
				class: "data-[hover=true]:opacity-hover",
			},
		],
	}),
	Hm = Fe({
		base: "inline-flex items-center justify-center h-auto",
		variants: { fullWidth: { true: "w-full" } },
		defaultVariants: { fullWidth: !1 },
	});
function cf(e) {
	return P5() ? e.altKey : e.ctrlKey;
}
function go(e) {
	return Pn() ? e.metaKey : e.ctrlKey;
}
const OC = 1e3;
function kx(e) {
	let { keyboardDelegate: t, selectionManager: r, onTypeSelect: n } = e,
		o = h.useRef({ search: "", timeout: null }).current,
		a = i => {
			let s = NC(i.key);
			if (!s || i.ctrlKey || i.metaKey || !i.currentTarget.contains(i.target))
				return;
			s === " " &&
				o.search.trim().length > 0 &&
				(i.preventDefault(), "continuePropagation" in i || i.stopPropagation()),
				(o.search += s);
			let l = t.getKeyForSearch(o.search, r.focusedKey);
			l == null && (l = t.getKeyForSearch(o.search)),
				l != null && (r.setFocusedKey(l), n && n(l)),
				clearTimeout(o.timeout),
				(o.timeout = setTimeout(() => {
					o.search = "";
				}, OC));
		};
	return {
		typeSelectProps: { onKeyDownCapture: t.getKeyForSearch ? a : null },
	};
}
function NC(e) {
	return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function Tx(e) {
	let {
			selectionManager: t,
			keyboardDelegate: r,
			ref: n,
			autoFocus: o = !1,
			shouldFocusWrap: a = !1,
			disallowEmptySelection: i = !1,
			disallowSelectAll: s = !1,
			selectOnFocus: l = t.selectionBehavior === "replace",
			disallowTypeAhead: u = !1,
			shouldUseVirtualFocus: c,
			allowsTabNavigation: d = !1,
			isVirtualized: f,
			scrollRef: p = n,
			linkBehavior: g = "action",
		} = e,
		{ direction: b } = Xr(),
		x = gu(),
		m = M => {
			if (
				(M.altKey && M.key === "Tab" && M.preventDefault(),
				!n.current.contains(M.target))
			)
				return;
			const F = (I, $) => {
				if (I != null) {
					if (t.isLink(I) && g === "selection" && l && !cf(M)) {
						Ap.flushSync(() => {
							t.setFocusedKey(I, $);
						});
						let O = p.current.querySelector(
							`[data-key="${CSS.escape(I.toString())}"]`,
						);
						x.open(O, M);
						return;
					}
					if ((t.setFocusedKey(I, $), t.isLink(I) && g === "override")) return;
					M.shiftKey && t.selectionMode === "multiple"
						? t.extendSelection(I)
						: l && !cf(M) && t.replaceSelection(I);
				}
			};
			switch (M.key) {
				case "ArrowDown":
					if (r.getKeyBelow) {
						var L, T;
						M.preventDefault();
						let I =
							t.focusedKey != null
								? r.getKeyBelow(t.focusedKey)
								: (L = r.getFirstKey) === null || L === void 0
								? void 0
								: L.call(r);
						I == null &&
							a &&
							(I =
								(T = r.getFirstKey) === null || T === void 0
									? void 0
									: T.call(r, t.focusedKey)),
							F(I);
					}
					break;
				case "ArrowUp":
					if (r.getKeyAbove) {
						var A, _;
						M.preventDefault();
						let I =
							t.focusedKey != null
								? r.getKeyAbove(t.focusedKey)
								: (A = r.getLastKey) === null || A === void 0
								? void 0
								: A.call(r);
						I == null &&
							a &&
							(I =
								(_ = r.getLastKey) === null || _ === void 0
									? void 0
									: _.call(r, t.focusedKey)),
							F(I);
					}
					break;
				case "ArrowLeft":
					if (r.getKeyLeftOf) {
						var N, R;
						M.preventDefault();
						let I = r.getKeyLeftOf(t.focusedKey);
						I == null &&
							a &&
							(I =
								b === "rtl"
									? (N = r.getFirstKey) === null || N === void 0
										? void 0
										: N.call(r, t.focusedKey)
									: (R = r.getLastKey) === null || R === void 0
									? void 0
									: R.call(r, t.focusedKey)),
							F(I, b === "rtl" ? "first" : "last");
					}
					break;
				case "ArrowRight":
					if (r.getKeyRightOf) {
						var j, z;
						M.preventDefault();
						let I = r.getKeyRightOf(t.focusedKey);
						I == null &&
							a &&
							(I =
								b === "rtl"
									? (j = r.getLastKey) === null || j === void 0
										? void 0
										: j.call(r, t.focusedKey)
									: (z = r.getFirstKey) === null || z === void 0
									? void 0
									: z.call(r, t.focusedKey)),
							F(I, b === "rtl" ? "last" : "first");
					}
					break;
				case "Home":
					if (r.getFirstKey) {
						M.preventDefault();
						let I = r.getFirstKey(t.focusedKey, go(M));
						t.setFocusedKey(I),
							go(M) && M.shiftKey && t.selectionMode === "multiple"
								? t.extendSelection(I)
								: l && t.replaceSelection(I);
					}
					break;
				case "End":
					if (r.getLastKey) {
						M.preventDefault();
						let I = r.getLastKey(t.focusedKey, go(M));
						t.setFocusedKey(I),
							go(M) && M.shiftKey && t.selectionMode === "multiple"
								? t.extendSelection(I)
								: l && t.replaceSelection(I);
					}
					break;
				case "PageDown":
					if (r.getKeyPageBelow) {
						M.preventDefault();
						let I = r.getKeyPageBelow(t.focusedKey);
						F(I);
					}
					break;
				case "PageUp":
					if (r.getKeyPageAbove) {
						M.preventDefault();
						let I = r.getKeyPageAbove(t.focusedKey);
						F(I);
					}
					break;
				case "a":
					go(M) &&
						t.selectionMode === "multiple" &&
						s !== !0 &&
						(M.preventDefault(), t.selectAll());
					break;
				case "Escape":
					M.preventDefault(), i || t.clearSelection();
					break;
				case "Tab":
					if (!d) {
						if (M.shiftKey) n.current.focus();
						else {
							let I = wr(n.current, { tabbable: !0 }),
								$,
								O;
							do (O = I.lastChild()), O && ($ = O);
							while (O);
							$ && !$.contains(document.activeElement) && xr($);
						}
						break;
					}
			}
		},
		v = h.useRef({ top: 0, left: 0 });
	I5(
		p,
		"scroll",
		f
			? null
			: () => {
					v.current = { top: p.current.scrollTop, left: p.current.scrollLeft };
			  },
	);
	let y = M => {
			if (t.isFocused) {
				M.currentTarget.contains(M.target) || t.setFocused(!1);
				return;
			}
			if (M.currentTarget.contains(M.target)) {
				if ((t.setFocused(!0), t.focusedKey == null)) {
					let T = _ => {
							_ != null && (t.setFocusedKey(_), l && t.replaceSelection(_));
						},
						A = M.relatedTarget;
					var F, L;
					A &&
					M.currentTarget.compareDocumentPosition(A) &
						Node.DOCUMENT_POSITION_FOLLOWING
						? T(
								(F = t.lastSelectedKey) !== null && F !== void 0
									? F
									: r.getLastKey(),
						  )
						: T(
								(L = t.firstSelectedKey) !== null && L !== void 0
									? L
									: r.getFirstKey(),
						  );
				} else
					f ||
						((p.current.scrollTop = v.current.top),
						(p.current.scrollLeft = v.current.left));
				if (!f && t.focusedKey != null) {
					let T = p.current.querySelector(
						`[data-key="${CSS.escape(t.focusedKey.toString())}"]`,
					);
					T &&
						(T.contains(document.activeElement) || xr(T),
						kl() === "keyboard" && um(T, { containingElement: n.current }));
				}
			}
		},
		P = M => {
			M.currentTarget.contains(M.relatedTarget) || t.setFocused(!1);
		};
	const C = h.useRef(o);
	h.useEffect(() => {
		if (C.current) {
			let M = null;
			o === "first" && (M = r.getFirstKey()),
				o === "last" && (M = r.getLastKey());
			let F = t.selectedKeys;
			if (F.size) {
				for (let L of F)
					if (t.canSelectItem(L)) {
						M = L;
						break;
					}
			}
			t.setFocused(!0), t.setFocusedKey(M), M == null && !c && ro(n.current);
		}
	}, []);
	let E = h.useRef(t.focusedKey);
	h.useEffect(() => {
		let M = kl();
		if (t.isFocused && t.focusedKey != null && p != null && p.current) {
			let F = p.current.querySelector(
				`[data-key="${CSS.escape(t.focusedKey.toString())}"]`,
			);
			F &&
				(M === "keyboard" || C.current) &&
				(f || r2(p.current, F),
				M !== "virtual" && um(F, { containingElement: n.current }));
		}
		t.isFocused && t.focusedKey == null && E.current != null && ro(n.current),
			(E.current = t.focusedKey),
			(C.current = !1);
	}, [f, p, t.focusedKey, t.isFocused, n]);
	let D = {
			onKeyDown: m,
			onFocus: y,
			onBlur: P,
			onMouseDown(M) {
				p.current === M.target && M.preventDefault();
			},
		},
		{ typeSelectProps: w } = kx({ keyboardDelegate: r, selectionManager: t });
	u || (D = U(w, D));
	let V;
	return (
		c || (V = t.focusedKey == null ? 0 : -1),
		{ collectionProps: { ...D, tabIndex: V } }
	);
}
function Xp(e) {
	let {
			selectionManager: t,
			key: r,
			ref: n,
			shouldSelectOnPressUp: o,
			shouldUseVirtualFocus: a,
			focus: i,
			isDisabled: s,
			onAction: l,
			allowsDifferentPressOrigin: u,
			linkBehavior: c = "action",
		} = e,
		d = gu(),
		f = R => {
			if (R.pointerType === "keyboard" && cf(R)) t.toggleSelection(r);
			else {
				if (t.selectionMode === "none") return;
				if (t.isLink(r)) {
					if (c === "selection") {
						d.open(n.current, R), t.setSelectedKeys(t.selectedKeys);
						return;
					} else if (c === "override" || c === "none") return;
				}
				t.selectionMode === "single"
					? t.isSelected(r) && !t.disallowEmptySelection
						? t.toggleSelection(r)
						: t.replaceSelection(r)
					: R && R.shiftKey
					? t.extendSelection(r)
					: t.selectionBehavior === "toggle" ||
					  (R &&
							(go(R) ||
								R.pointerType === "touch" ||
								R.pointerType === "virtual"))
					? t.toggleSelection(r)
					: t.replaceSelection(r);
			}
		};
	h.useEffect(() => {
		r === t.focusedKey &&
			t.isFocused &&
			!a &&
			(i ? i() : document.activeElement !== n.current && ro(n.current));
	}, [n, r, t.focusedKey, t.childFocusStrategy, t.isFocused, a]),
		(s = s || t.isDisabled(r));
	let p = {};
	!a && !s
		? (p = {
				tabIndex: r === t.focusedKey ? 0 : -1,
				onFocus(R) {
					R.target === n.current && t.setFocusedKey(r);
				},
		  })
		: s &&
		  (p.onMouseDown = R => {
				R.preventDefault();
		  });
	let g = t.isLink(r) && c === "override",
		b = t.isLink(r) && c !== "selection" && c !== "none",
		x = !s && t.canSelectItem(r) && !g,
		m = (l || b) && !s,
		v = m && (t.selectionBehavior === "replace" ? !x : !x || t.isEmpty),
		y = m && x && t.selectionBehavior === "replace",
		P = v || y,
		C = h.useRef(null),
		E = P && x,
		D = h.useRef(!1),
		w = h.useRef(!1),
		V = R => {
			l && l(), b && d.open(n.current, R);
		},
		M = {};
	o
		? ((M.onPressStart = R => {
				(C.current = R.pointerType),
					(D.current = E),
					R.pointerType === "keyboard" && (!P || Um()) && f(R);
		  }),
		  u
				? ((M.onPressUp = v
						? null
						: R => {
								R.pointerType !== "keyboard" && x && f(R);
						  }),
				  (M.onPress = v ? V : null))
				: (M.onPress = R => {
						if (v || (y && R.pointerType !== "mouse")) {
							if (R.pointerType === "keyboard" && !Wm()) return;
							V(R);
						} else R.pointerType !== "keyboard" && x && f(R);
				  }))
		: ((M.onPressStart = R => {
				(C.current = R.pointerType),
					(D.current = E),
					(w.current = v),
					x &&
						((R.pointerType === "mouse" && !v) ||
							(R.pointerType === "keyboard" && (!m || Um()))) &&
						f(R);
		  }),
		  (M.onPress = R => {
				(R.pointerType === "touch" ||
					R.pointerType === "pen" ||
					R.pointerType === "virtual" ||
					(R.pointerType === "keyboard" && P && Wm()) ||
					(R.pointerType === "mouse" && w.current)) &&
					(P ? V(R) : x && f(R));
		  })),
		(p["data-key"] = r),
		(M.preventFocusOnPress = a);
	let { pressProps: F, isPressed: L } = er(M),
		T = y
			? R => {
					C.current === "mouse" &&
						(R.stopPropagation(), R.preventDefault(), V(R));
			  }
			: void 0,
		{ longPressProps: A } = ex({
			isDisabled: !E,
			onLongPress(R) {
				R.pointerType === "touch" && (f(R), t.setSelectionBehavior("toggle"));
			},
		}),
		_ = R => {
			C.current === "touch" && D.current && R.preventDefault();
		},
		N = t.isLink(r)
			? R => {
					$n.isOpening || R.preventDefault();
			  }
			: void 0;
	return {
		itemProps: U(p, x || v ? F : {}, E ? A : {}, {
			onDoubleClick: T,
			onDragStartCapture: _,
			onClick: N,
		}),
		isPressed: L,
		isSelected: t.isSelected(r),
		isFocused: t.isFocused && t.focusedKey === r,
		isDisabled: s,
		allowsSelection: x,
		hasAction: P,
	};
}
function Wm() {
	let e = window.event;
	return (e == null ? void 0 : e.key) === "Enter";
}
function Um() {
	let e = window.event;
	return (
		(e == null ? void 0 : e.key) === " " ||
		(e == null ? void 0 : e.code) === "Space"
	);
}
class Mx {
	getNextKey(t) {
		for (t = this.collection.getKeyAfter(t); t != null; ) {
			if (
				this.collection.getItem(t).type === "item" &&
				!this.disabledKeys.has(t)
			)
				return t;
			t = this.collection.getKeyAfter(t);
		}
		return null;
	}
	getPreviousKey(t) {
		for (t = this.collection.getKeyBefore(t); t != null; ) {
			if (
				this.collection.getItem(t).type === "item" &&
				!this.disabledKeys.has(t)
			)
				return t;
			t = this.collection.getKeyBefore(t);
		}
		return null;
	}
	findKey(t, r, n) {
		let o = this.getItem(t);
		if (!o) return null;
		let a = o.getBoundingClientRect();
		do (t = r(t)), (o = this.getItem(t));
		while (o && n(a, o.getBoundingClientRect()));
		return t;
	}
	isSameRow(t, r) {
		return t.top === r.top || t.left !== r.left;
	}
	isSameColumn(t, r) {
		return t.left === r.left || t.top !== r.top;
	}
	getKeyBelow(t) {
		return this.layout === "grid" && this.orientation === "vertical"
			? this.findKey(t, r => this.getNextKey(r), this.isSameRow)
			: this.getNextKey(t);
	}
	getKeyAbove(t) {
		return this.layout === "grid" && this.orientation === "vertical"
			? this.findKey(t, r => this.getPreviousKey(r), this.isSameRow)
			: this.getPreviousKey(t);
	}
	getNextColumn(t, r) {
		return r ? this.getPreviousKey(t) : this.getNextKey(t);
	}
	getKeyRightOf(t) {
		return this.layout === "grid"
			? this.orientation === "vertical"
				? this.getNextColumn(t, this.direction === "rtl")
				: this.findKey(
						t,
						r => this.getNextColumn(r, this.direction === "rtl"),
						this.isSameColumn,
				  )
			: this.orientation === "horizontal"
			? this.getNextColumn(t, this.direction === "rtl")
			: null;
	}
	getKeyLeftOf(t) {
		return this.layout === "grid"
			? this.orientation === "vertical"
				? this.getNextColumn(t, this.direction === "ltr")
				: this.findKey(
						t,
						r => this.getNextColumn(r, this.direction === "ltr"),
						this.isSameColumn,
				  )
			: this.orientation === "horizontal"
			? this.getNextColumn(t, this.direction === "ltr")
			: null;
	}
	getFirstKey() {
		let t = this.collection.getFirstKey();
		for (; t != null; ) {
			let r = this.collection.getItem(t);
			if ((r == null ? void 0 : r.type) === "item" && !this.disabledKeys.has(t))
				return t;
			t = this.collection.getKeyAfter(t);
		}
		return null;
	}
	getLastKey() {
		let t = this.collection.getLastKey();
		for (; t != null; ) {
			if (
				this.collection.getItem(t).type === "item" &&
				!this.disabledKeys.has(t)
			)
				return t;
			t = this.collection.getKeyBefore(t);
		}
		return null;
	}
	getItem(t) {
		return this.ref.current.querySelector(
			`[data-key="${CSS.escape(t.toString())}"]`,
		);
	}
	getKeyPageAbove(t) {
		let r = this.ref.current,
			n = this.getItem(t);
		if (!n) return null;
		if (!Pl(r)) return this.getFirstKey();
		let o = r.getBoundingClientRect(),
			a = n.getBoundingClientRect();
		if (this.orientation === "horizontal") {
			let i = o.x - r.scrollLeft,
				s = Math.max(0, a.x - i + a.width - o.width);
			for (; n && a.x - i > s; )
				(t = this.getKeyAbove(t)),
					(n = t == null ? null : this.getItem(t)),
					(a = n == null ? void 0 : n.getBoundingClientRect());
		} else {
			let i = o.y - r.scrollTop,
				s = Math.max(0, a.y - i + a.height - o.height);
			for (; n && a.y - i > s; )
				(t = this.getKeyAbove(t)),
					(n = t == null ? null : this.getItem(t)),
					(a = n == null ? void 0 : n.getBoundingClientRect());
		}
		return t ?? this.getFirstKey();
	}
	getKeyPageBelow(t) {
		let r = this.ref.current,
			n = this.getItem(t);
		if (!n) return null;
		if (!Pl(r)) return this.getLastKey();
		let o = r.getBoundingClientRect(),
			a = n.getBoundingClientRect();
		if (this.orientation === "horizontal") {
			let i = o.x - r.scrollLeft,
				s = Math.min(r.scrollWidth, a.x - i - a.width + o.width);
			for (; n && a.x - i < s; )
				(t = this.getKeyBelow(t)),
					(n = t == null ? null : this.getItem(t)),
					(a = n == null ? void 0 : n.getBoundingClientRect());
		} else {
			let i = o.y - r.scrollTop,
				s = Math.min(r.scrollHeight, a.y - i - a.height + o.height);
			for (; n && a.y - i < s; )
				(t = this.getKeyBelow(t)),
					(n = t == null ? null : this.getItem(t)),
					(a = n == null ? void 0 : n.getBoundingClientRect());
		}
		return t ?? this.getLastKey();
	}
	getKeyForSearch(t, r) {
		if (!this.collator) return null;
		let n = this.collection,
			o = r || this.getFirstKey();
		for (; o != null; ) {
			let a = n.getItem(o),
				i = a.textValue.slice(0, t.length);
			if (a.textValue && this.collator.compare(i, t) === 0) return o;
			o = this.getKeyBelow(o);
		}
		return null;
	}
	constructor(...t) {
		if (t.length === 1) {
			let r = t[0];
			(this.collection = r.collection),
				(this.ref = r.ref),
				(this.collator = r.collator),
				(this.disabledKeys = r.disabledKeys || new Set()),
				(this.orientation = r.orientation),
				(this.direction = r.direction),
				(this.layout = r.layout || "stack");
		} else
			(this.collection = t[0]),
				(this.disabledKeys = t[1]),
				(this.ref = t[2]),
				(this.collator = t[3]),
				(this.layout = "stack"),
				(this.orientation = "vertical");
		this.layout === "stack" &&
			this.orientation === "vertical" &&
			((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
	}
}
function Ax(e) {
	let {
			selectionManager: t,
			collection: r,
			disabledKeys: n,
			ref: o,
			keyboardDelegate: a,
		} = e,
		i = c2({ usage: "search", sensitivity: "base" }),
		s = t.disabledBehavior,
		l = h.useMemo(
			() => a || new Mx(r, s === "selection" ? new Set() : n, o, i),
			[a, r, n, o, i, s],
		),
		{ collectionProps: u } = Tx({
			...e,
			ref: o,
			selectionManager: t,
			keyboardDelegate: l,
		});
	return { listProps: u };
}
var jC = e =>
		S.jsxs("svg", {
			"aria-hidden": "true",
			fill: "none",
			focusable: "false",
			height: "1em",
			shapeRendering: "geometricPrecision",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "1.5",
			viewBox: "0 0 24 24",
			width: "1em",
			...e,
			children: [
				S.jsx("path", {
					d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6",
				}),
				S.jsx("path", { d: "M15 3h6v6" }),
				S.jsx("path", { d: "M10 14L21 3" }),
			],
		}),
	_C = e =>
		S.jsx("svg", {
			"aria-hidden": "true",
			focusable: "false",
			height: "1em",
			role: "presentation",
			viewBox: "0 0 24 24",
			width: "1em",
			...e,
			children: S.jsx("path", {
				d: "M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",
				fill: "currentColor",
			}),
		}),
	zC = e =>
		S.jsx("svg", {
			"aria-hidden": "true",
			fill: "none",
			focusable: "false",
			height: "1em",
			role: "presentation",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 2,
			viewBox: "0 0 24 24",
			width: "1em",
			...e,
			children: S.jsx("path", { d: "M18 6L6 18M6 6l12 12" }),
		}),
	BC = ({ strokeWidth: e = 1.5, ...t }) =>
		S.jsx("svg", {
			"aria-hidden": "true",
			fill: "none",
			focusable: "false",
			height: "1em",
			role: "presentation",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: e,
			viewBox: "0 0 24 24",
			width: "1em",
			...t,
			children: S.jsx("path", { d: "m6 9 6 6 6-6" }),
		});
const qp = h.createContext({
		transformPagePoint: e => e,
		isStatic: !1,
		reducedMotion: "never",
	}),
	xu = h.createContext({}),
	wu = h.createContext(null),
	Qp = typeof document < "u",
	Jp = Qp ? h.useLayoutEffect : h.useEffect,
	e0 = h.createContext({ strict: !1 }),
	t0 = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
	KC = "framerAppearId",
	Dx = "data-" + t0(KC),
	HC = { skipAnimations: !1, useManualTiming: !1 };
class Zm {
	constructor() {
		(this.order = []), (this.scheduled = new Set());
	}
	add(t) {
		if (!this.scheduled.has(t))
			return this.scheduled.add(t), this.order.push(t), !0;
	}
	remove(t) {
		const r = this.order.indexOf(t);
		r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
	}
	clear() {
		(this.order.length = 0), this.scheduled.clear();
	}
}
function WC(e) {
	let t = new Zm(),
		r = new Zm(),
		n = 0,
		o = !1,
		a = !1;
	const i = new WeakSet(),
		s = {
			schedule: (l, u = !1, c = !1) => {
				const d = c && o,
					f = d ? t : r;
				return u && i.add(l), f.add(l) && d && o && (n = t.order.length), l;
			},
			cancel: l => {
				r.remove(l), i.delete(l);
			},
			process: l => {
				if (o) {
					a = !0;
					return;
				}
				if (((o = !0), ([t, r] = [r, t]), r.clear(), (n = t.order.length), n))
					for (let u = 0; u < n; u++) {
						const c = t.order[u];
						i.has(c) && (s.schedule(c), e()), c(l);
					}
				(o = !1), a && ((a = !1), s.process(l));
			},
		};
	return s;
}
const bs = [
		"read",
		"resolveKeyframes",
		"update",
		"preRender",
		"render",
		"postRender",
	],
	UC = 40;
function Ix(e, t) {
	let r = !1,
		n = !0;
	const o = { delta: 0, timestamp: 0, isProcessing: !1 },
		a = bs.reduce((d, f) => ((d[f] = WC(() => (r = !0))), d), {}),
		i = d => {
			a[d].process(o);
		},
		s = () => {
			const d = performance.now();
			(r = !1),
				(o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, UC), 1)),
				(o.timestamp = d),
				(o.isProcessing = !0),
				bs.forEach(i),
				(o.isProcessing = !1),
				r && t && ((n = !1), e(s));
		},
		l = () => {
			(r = !0), (n = !0), o.isProcessing || e(s);
		};
	return {
		schedule: bs.reduce((d, f) => {
			const p = a[f];
			return (d[f] = (g, b = !1, x = !1) => (r || l(), p.schedule(g, b, x))), d;
		}, {}),
		cancel: d => bs.forEach(f => a[f].cancel(d)),
		state: o,
		steps: a,
	};
}
const { schedule: r0, cancel: xR } = Ix(queueMicrotask, !1);
function ZC(e, t, r, n) {
	const { visualElement: o } = h.useContext(xu),
		a = h.useContext(e0),
		i = h.useContext(wu),
		s = h.useContext(qp).reducedMotion,
		l = h.useRef();
	(n = n || a.renderer),
		!l.current &&
			n &&
			(l.current = n(e, {
				visualState: t,
				parent: o,
				props: r,
				presenceContext: i,
				blockInitialAnimation: i ? i.initial === !1 : !1,
				reducedMotionConfig: s,
			}));
	const u = l.current;
	h.useInsertionEffect(() => {
		u && u.update(r, i);
	});
	const c = h.useRef(!!(r[Dx] && !window.HandoffComplete));
	return (
		Jp(() => {
			u &&
				(r0.postRender(u.render),
				c.current && u.animationState && u.animationState.animateChanges());
		}),
		h.useEffect(() => {
			u &&
				(u.updateFeatures(),
				!c.current && u.animationState && u.animationState.animateChanges(),
				c.current && ((c.current = !1), (window.HandoffComplete = !0)));
		}),
		u
	);
}
function Vo(e) {
	return (
		e &&
		typeof e == "object" &&
		Object.prototype.hasOwnProperty.call(e, "current")
	);
}
function GC(e, t, r) {
	return h.useCallback(
		n => {
			n && e.mount && e.mount(n),
				t && (n ? t.mount(n) : t.unmount()),
				r && (typeof r == "function" ? r(n) : Vo(r) && (r.current = n));
		},
		[t],
	);
}
function xi(e) {
	return typeof e == "string" || Array.isArray(e);
}
function Su(e) {
	return e !== null && typeof e == "object" && typeof e.start == "function";
}
const n0 = [
		"animate",
		"whileInView",
		"whileFocus",
		"whileHover",
		"whileTap",
		"whileDrag",
		"exit",
	],
	o0 = ["initial", ...n0];
function Pu(e) {
	return Su(e.animate) || o0.some(t => xi(e[t]));
}
function Vx(e) {
	return !!(Pu(e) || e.variants);
}
function YC(e, t) {
	if (Pu(e)) {
		const { initial: r, animate: n } = e;
		return {
			initial: r === !1 || xi(r) ? r : void 0,
			animate: xi(n) ? n : void 0,
		};
	}
	return e.inherit !== !1 ? t : {};
}
function XC(e) {
	const { initial: t, animate: r } = YC(e, h.useContext(xu));
	return h.useMemo(() => ({ initial: t, animate: r }), [Gm(t), Gm(r)]);
}
function Gm(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
const Ym = {
		animation: [
			"animate",
			"variants",
			"whileHover",
			"whileTap",
			"exit",
			"whileInView",
			"whileFocus",
			"whileDrag",
		],
		exit: ["exit"],
		drag: ["drag", "dragControls"],
		focus: ["whileFocus"],
		hover: ["whileHover", "onHoverStart", "onHoverEnd"],
		tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
		pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
		inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
		layout: ["layout", "layoutId"],
	},
	wi = {};
for (const e in Ym) wi[e] = { isEnabled: t => Ym[e].some(r => !!t[r]) };
function df(e) {
	for (const t in e) wi[t] = { ...wi[t], ...e[t] };
}
const Si = h.createContext({}),
	Rx = h.createContext({}),
	qC = Symbol.for("motionComponentSymbol");
function QC({
	preloadedFeatures: e,
	createVisualElement: t,
	useRender: r,
	useVisualState: n,
	Component: o,
}) {
	e && df(e);
	function a(s, l) {
		let u;
		const c = { ...h.useContext(qp), ...s, layoutId: JC(s) },
			{ isStatic: d } = c,
			f = XC(s),
			p = n(s, d);
		if (!d && Qp) {
			f.visualElement = ZC(o, p, c, t);
			const g = h.useContext(Rx),
				b = h.useContext(e0).strict;
			f.visualElement && (u = f.visualElement.loadFeatures(c, b, e, g));
		}
		return S.jsxs(xu.Provider, {
			value: f,
			children: [
				u && f.visualElement
					? S.jsx(u, { visualElement: f.visualElement, ...c })
					: null,
				r(o, s, GC(p, f.visualElement, l), p, d, f.visualElement),
			],
		});
	}
	const i = h.forwardRef(a);
	return (i[qC] = o), i;
}
function JC({ layoutId: e }) {
	const t = h.useContext(Si).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function eE(e) {
	function t(n, o = {}) {
		return QC(e(n, o));
	}
	if (typeof Proxy > "u") return t;
	const r = new Map();
	return new Proxy(t, {
		get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)),
	});
}
const tE = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view",
];
function a0(e) {
	return typeof e != "string" || e.includes("-")
		? !1
		: !!(tE.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const Fl = {};
function rE(e) {
	Object.assign(Fl, e);
}
const Vi = [
		"transformPerspective",
		"x",
		"y",
		"z",
		"translateX",
		"translateY",
		"translateZ",
		"scale",
		"scaleX",
		"scaleY",
		"rotate",
		"rotateX",
		"rotateY",
		"rotateZ",
		"skew",
		"skewX",
		"skewY",
	],
	so = new Set(Vi);
function Lx(e, { layout: t, layoutId: r }) {
	return (
		so.has(e) ||
		e.startsWith("origin") ||
		((t || r !== void 0) && (!!Fl[e] || e === "opacity"))
	);
}
const ut = e => !!(e && e.getVelocity),
	nE = {
		x: "translateX",
		y: "translateY",
		z: "translateZ",
		transformPerspective: "perspective",
	},
	oE = Vi.length;
function aE(
	e,
	{ enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
	n,
	o,
) {
	let a = "";
	for (let i = 0; i < oE; i++) {
		const s = Vi[i];
		if (e[s] !== void 0) {
			const l = nE[s] || s;
			a += `${l}(${e[s]}) `;
		}
	}
	return (
		t && !e.z && (a += "translateZ(0)"),
		(a = a.trim()),
		o ? (a = o(e, n ? "" : a)) : r && n && (a = "none"),
		a
	);
}
const Fx = e => t => typeof t == "string" && t.startsWith(e),
	Ox = Fx("--"),
	iE = Fx("var(--"),
	i0 = e => (iE(e) ? sE.test(e.split("/*")[0].trim()) : !1),
	sE =
		/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
	lE = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
	Cn = (e, t, r) => (r > t ? t : r < e ? e : r),
	pa = {
		test: e => typeof e == "number",
		parse: parseFloat,
		transform: e => e,
	},
	qa = { ...pa, transform: e => Cn(0, 1, e) },
	xs = { ...pa, default: 1 },
	Qa = e => Math.round(e * 1e5) / 1e5,
	s0 = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
	uE =
		/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
	cE =
		/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Ri(e) {
	return typeof e == "string";
}
const Li = e => ({
		test: t => Ri(t) && t.endsWith(e) && t.split(" ").length === 1,
		parse: parseFloat,
		transform: t => `${t}${e}`,
	}),
	Jr = Li("deg"),
	$r = Li("%"),
	ae = Li("px"),
	dE = Li("vh"),
	fE = Li("vw"),
	Xm = {
		...$r,
		parse: e => $r.parse(e) / 100,
		transform: e => $r.transform(e * 100),
	},
	qm = { ...pa, transform: Math.round },
	Nx = {
		borderWidth: ae,
		borderTopWidth: ae,
		borderRightWidth: ae,
		borderBottomWidth: ae,
		borderLeftWidth: ae,
		borderRadius: ae,
		radius: ae,
		borderTopLeftRadius: ae,
		borderTopRightRadius: ae,
		borderBottomRightRadius: ae,
		borderBottomLeftRadius: ae,
		width: ae,
		maxWidth: ae,
		height: ae,
		maxHeight: ae,
		size: ae,
		top: ae,
		right: ae,
		bottom: ae,
		left: ae,
		padding: ae,
		paddingTop: ae,
		paddingRight: ae,
		paddingBottom: ae,
		paddingLeft: ae,
		margin: ae,
		marginTop: ae,
		marginRight: ae,
		marginBottom: ae,
		marginLeft: ae,
		rotate: Jr,
		rotateX: Jr,
		rotateY: Jr,
		rotateZ: Jr,
		scale: xs,
		scaleX: xs,
		scaleY: xs,
		scaleZ: xs,
		skew: Jr,
		skewX: Jr,
		skewY: Jr,
		distance: ae,
		translateX: ae,
		translateY: ae,
		translateZ: ae,
		x: ae,
		y: ae,
		z: ae,
		perspective: ae,
		transformPerspective: ae,
		opacity: qa,
		originX: Xm,
		originY: Xm,
		originZ: ae,
		zIndex: qm,
		backgroundPositionX: ae,
		backgroundPositionY: ae,
		fillOpacity: qa,
		strokeOpacity: qa,
		numOctaves: qm,
	};
function l0(e, t, r, n) {
	const { style: o, vars: a, transform: i, transformOrigin: s } = e;
	let l = !1,
		u = !1,
		c = !0;
	for (const d in t) {
		const f = t[d];
		if (Ox(d)) {
			a[d] = f;
			continue;
		}
		const p = Nx[d],
			g = lE(f, p);
		if (so.has(d)) {
			if (((l = !0), (i[d] = g), !c)) continue;
			f !== (p.default || 0) && (c = !1);
		} else d.startsWith("origin") ? ((u = !0), (s[d] = g)) : (o[d] = g);
	}
	if (
		(t.transform ||
			(l || n
				? (o.transform = aE(e.transform, r, c, n))
				: o.transform && (o.transform = "none")),
		u)
	) {
		const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
		o.transformOrigin = `${d} ${f} ${p}`;
	}
}
const u0 = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function jx(e, t, r) {
	for (const n in t) !ut(t[n]) && !Lx(n, r) && (e[n] = t[n]);
}
function pE({ transformTemplate: e }, t, r) {
	return h.useMemo(() => {
		const n = u0();
		return (
			l0(n, t, { enableHardwareAcceleration: !r }, e),
			Object.assign({}, n.vars, n.style)
		);
	}, [t]);
}
function hE(e, t, r) {
	const n = e.style || {},
		o = {};
	return jx(o, n, e), Object.assign(o, pE(e, t, r)), o;
}
function mE(e, t, r) {
	const n = {},
		o = hE(e, t, r);
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((n.draggable = !1),
			(o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
			(o.touchAction =
				e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
		e.tabIndex === void 0 &&
			(e.onTap || e.onTapStart || e.whileTap) &&
			(n.tabIndex = 0),
		(n.style = o),
		n
	);
}
const gE = new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"ignoreStrict",
	"viewport",
]);
function Ol(e) {
	return (
		e.startsWith("while") ||
		(e.startsWith("drag") && e !== "draggable") ||
		e.startsWith("layout") ||
		e.startsWith("onTap") ||
		e.startsWith("onPan") ||
		e.startsWith("onLayout") ||
		gE.has(e)
	);
}
let _x = e => !Ol(e);
function vE(e) {
	e && (_x = t => (t.startsWith("on") ? !Ol(t) : e(t)));
}
try {
	vE(require("@emotion/is-prop-valid").default);
} catch {}
function yE(e, t, r) {
	const n = {};
	for (const o in e)
		(o === "values" && typeof e.values == "object") ||
			((_x(o) ||
				(r === !0 && Ol(o)) ||
				(!t && !Ol(o)) ||
				(e.draggable && o.startsWith("onDrag"))) &&
				(n[o] = e[o]));
	return n;
}
function Qm(e, t, r) {
	return typeof e == "string" ? e : ae.transform(t + r * e);
}
function bE(e, t, r) {
	const n = Qm(t, e.x, e.width),
		o = Qm(r, e.y, e.height);
	return `${n} ${o}`;
}
const xE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
	wE = { offset: "strokeDashoffset", array: "strokeDasharray" };
function SE(e, t, r = 1, n = 0, o = !0) {
	e.pathLength = 1;
	const a = o ? xE : wE;
	e[a.offset] = ae.transform(-n);
	const i = ae.transform(t),
		s = ae.transform(r);
	e[a.array] = `${i} ${s}`;
}
function c0(
	e,
	{
		attrX: t,
		attrY: r,
		attrScale: n,
		originX: o,
		originY: a,
		pathLength: i,
		pathSpacing: s = 1,
		pathOffset: l = 0,
		...u
	},
	c,
	d,
	f,
) {
	if ((l0(e, u, c, f), d)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	(e.attrs = e.style), (e.style = {});
	const { attrs: p, style: g, dimensions: b } = e;
	p.transform && (b && (g.transform = p.transform), delete p.transform),
		b &&
			(o !== void 0 || a !== void 0 || g.transform) &&
			(g.transformOrigin = bE(
				b,
				o !== void 0 ? o : 0.5,
				a !== void 0 ? a : 0.5,
			)),
		t !== void 0 && (p.x = t),
		r !== void 0 && (p.y = r),
		n !== void 0 && (p.scale = n),
		i !== void 0 && SE(p, i, s, l, !1);
}
const zx = () => ({ ...u0(), attrs: {} }),
	d0 = e => typeof e == "string" && e.toLowerCase() === "svg";
function PE(e, t, r, n) {
	const o = h.useMemo(() => {
		const a = zx();
		return (
			c0(a, t, { enableHardwareAcceleration: !1 }, d0(n), e.transformTemplate),
			{ ...a.attrs, style: { ...a.style } }
		);
	}, [t]);
	if (e.style) {
		const a = {};
		jx(a, e.style, e), (o.style = { ...a, ...o.style });
	}
	return o;
}
function $E(e = !1) {
	return (r, n, o, { latestValues: a }, i) => {
		const l = (a0(r) ? PE : mE)(n, a, i, r),
			u = yE(n, typeof r == "string", e),
			c = r !== h.Fragment ? { ...u, ...l, ref: o } : {},
			{ children: d } = n,
			f = h.useMemo(() => (ut(d) ? d.get() : d), [d]);
		return h.createElement(r, { ...c, children: f });
	};
}
function Bx(e, { style: t, vars: r }, n, o) {
	Object.assign(e.style, t, o && o.getProjectionStyles(n));
	for (const a in r) e.style.setProperty(a, r[a]);
}
const Kx = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust",
]);
function Hx(e, t, r, n) {
	Bx(e, t, void 0, n);
	for (const o in t.attrs) e.setAttribute(Kx.has(o) ? o : t0(o), t.attrs[o]);
}
function f0(e, t, r) {
	var n;
	const { style: o } = e,
		a = {};
	for (const i in o)
		(ut(o[i]) ||
			(t.style && ut(t.style[i])) ||
			Lx(i, e) ||
			((n = r == null ? void 0 : r.getValue(i)) === null || n === void 0
				? void 0
				: n.liveStyle) !== void 0) &&
			(a[i] = o[i]);
	return a;
}
function Wx(e, t, r) {
	const n = f0(e, t, r);
	for (const o in e)
		if (ut(e[o]) || ut(t[o])) {
			const a =
				Vi.indexOf(o) !== -1
					? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
					: o;
			n[a] = e[o];
		}
	return n;
}
function p0(e, t, r, n = {}, o = {}) {
	return (
		typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)),
		typeof t == "string" && (t = e.variants && e.variants[t]),
		typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)),
		t
	);
}
function Ux(e) {
	const t = h.useRef(null);
	return t.current === null && (t.current = e()), t.current;
}
const ff = e => Array.isArray(e),
	CE = e => !!(e && typeof e == "object" && e.mix && e.toValue),
	EE = e => (ff(e) ? e[e.length - 1] || 0 : e);
function zs(e) {
	const t = ut(e) ? e.get() : e;
	return CE(t) ? t.toValue() : t;
}
function kE(
	{ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
	n,
	o,
	a,
) {
	const i = { latestValues: TE(n, o, a, e), renderState: t() };
	return r && (i.mount = s => r(n, s, i)), i;
}
const Zx = e => (t, r) => {
	const n = h.useContext(xu),
		o = h.useContext(wu),
		a = () => kE(e, t, n, o);
	return r ? a() : Ux(a);
};
function TE(e, t, r, n) {
	const o = {},
		a = n(e, {});
	for (const f in a) o[f] = zs(a[f]);
	let { initial: i, animate: s } = e;
	const l = Pu(e),
		u = Vx(e);
	t &&
		u &&
		!l &&
		e.inherit !== !1 &&
		(i === void 0 && (i = t.initial), s === void 0 && (s = t.animate));
	let c = r ? r.initial === !1 : !1;
	c = c || i === !1;
	const d = c ? s : i;
	return (
		d &&
			typeof d != "boolean" &&
			!Su(d) &&
			(Array.isArray(d) ? d : [d]).forEach(p => {
				const g = p0(e, p);
				if (!g) return;
				const { transitionEnd: b, transition: x, ...m } = g;
				for (const v in m) {
					let y = m[v];
					if (Array.isArray(y)) {
						const P = c ? y.length - 1 : 0;
						y = y[P];
					}
					y !== null && (o[v] = y);
				}
				for (const v in b) o[v] = b[v];
			}),
		o
	);
}
const ct = e => e,
	{
		schedule: Xe,
		cancel: En,
		state: Qe,
		steps: Cc,
	} = Ix(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ct, !0),
	ME = {
		useVisualState: Zx({
			scrapeMotionValuesFromProps: Wx,
			createRenderState: zx,
			onMount: (e, t, { renderState: r, latestValues: n }) => {
				Xe.read(() => {
					try {
						r.dimensions =
							typeof t.getBBox == "function"
								? t.getBBox()
								: t.getBoundingClientRect();
					} catch {
						r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
					}
				}),
					Xe.render(() => {
						c0(
							r,
							n,
							{ enableHardwareAcceleration: !1 },
							d0(t.tagName),
							e.transformTemplate,
						),
							Hx(t, r);
					});
			},
		}),
	},
	AE = {
		useVisualState: Zx({
			scrapeMotionValuesFromProps: f0,
			createRenderState: u0,
		}),
	};
function DE(e, { forwardMotionProps: t = !1 }, r, n) {
	return {
		...(a0(e) ? ME : AE),
		preloadedFeatures: r,
		useRender: $E(t),
		createVisualElement: n,
		Component: e,
	};
}
function Fr(e, t, r, n = { passive: !0 }) {
	return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const Gx = e =>
	e.pointerType === "mouse"
		? typeof e.button != "number" || e.button <= 0
		: e.isPrimary !== !1;
function $u(e, t = "page") {
	return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const IE = e => t => Gx(t) && e(t, $u(t));
function Nr(e, t, r, n) {
	return Fr(e, t, IE(r), n);
}
const VE = (e, t) => r => t(e(r)),
	jr = (...e) => e.reduce(VE);
function Yx(e) {
	let t = null;
	return () => {
		const r = () => {
			t = null;
		};
		return t === null ? ((t = e), r) : !1;
	};
}
const Jm = Yx("dragHorizontal"),
	eg = Yx("dragVertical");
function Xx(e) {
	let t = !1;
	if (e === "y") t = eg();
	else if (e === "x") t = Jm();
	else {
		const r = Jm(),
			n = eg();
		r && n
			? (t = () => {
					r(), n();
			  })
			: (r && r(), n && n());
	}
	return t;
}
function qx() {
	const e = Xx(!0);
	return e ? (e(), !1) : !0;
}
class Dn {
	constructor(t) {
		(this.isMounted = !1), (this.node = t);
	}
	update() {}
}
function tg(e, t) {
	const r = t ? "pointerenter" : "pointerleave",
		n = t ? "onHoverStart" : "onHoverEnd",
		o = (a, i) => {
			if (a.pointerType === "touch" || qx()) return;
			const s = e.getProps();
			e.animationState &&
				s.whileHover &&
				e.animationState.setActive("whileHover", t);
			const l = s[n];
			l && l(a, i);
		};
	return Nr(e.current, r, o, { passive: !e.getProps()[n] });
}
class RE extends Dn {
	mount() {
		this.unmount = jr(tg(this.node, !0), tg(this.node, !1));
	}
	unmount() {}
}
class LE extends Dn {
	constructor() {
		super(...arguments), (this.isActive = !1);
	}
	onFocus() {
		let t = !1;
		try {
			t = this.node.current.matches(":focus-visible");
		} catch {
			t = !0;
		}
		!t ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !0),
			(this.isActive = !0));
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !1),
			(this.isActive = !1));
	}
	mount() {
		this.unmount = jr(
			Fr(this.node.current, "focus", () => this.onFocus()),
			Fr(this.node.current, "blur", () => this.onBlur()),
		);
	}
	unmount() {}
}
const Qx = (e, t) => (t ? (e === t ? !0 : Qx(e, t.parentElement)) : !1);
function Ec(e, t) {
	if (!t) return;
	const r = new PointerEvent("pointer" + e);
	t(r, $u(r));
}
class FE extends Dn {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = ct),
			(this.removeEndListeners = ct),
			(this.removeAccessibleListeners = ct),
			(this.startPointerPress = (t, r) => {
				if (this.isPressing) return;
				this.removeEndListeners();
				const n = this.node.getProps(),
					a = Nr(
						window,
						"pointerup",
						(s, l) => {
							if (!this.checkPressEnd()) return;
							const {
								onTap: u,
								onTapCancel: c,
								globalTapTarget: d,
							} = this.node.getProps();
							!d && !Qx(this.node.current, s.target)
								? c && c(s, l)
								: u && u(s, l);
						},
						{ passive: !(n.onTap || n.onPointerUp) },
					),
					i = Nr(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
						passive: !(n.onTapCancel || n.onPointerCancel),
					});
				(this.removeEndListeners = jr(a, i)), this.startPress(t, r);
			}),
			(this.startAccessiblePress = () => {
				const t = a => {
						if (a.key !== "Enter" || this.isPressing) return;
						const i = s => {
							s.key !== "Enter" ||
								!this.checkPressEnd() ||
								Ec("up", (l, u) => {
									const { onTap: c } = this.node.getProps();
									c && c(l, u);
								});
						};
						this.removeEndListeners(),
							(this.removeEndListeners = Fr(this.node.current, "keyup", i)),
							Ec("down", (s, l) => {
								this.startPress(s, l);
							});
					},
					r = Fr(this.node.current, "keydown", t),
					n = () => {
						this.isPressing && Ec("cancel", (a, i) => this.cancelPress(a, i));
					},
					o = Fr(this.node.current, "blur", n);
				this.removeAccessibleListeners = jr(r, o);
			});
	}
	startPress(t, r) {
		this.isPressing = !0;
		const { onTapStart: n, whileTap: o } = this.node.getProps();
		o &&
			this.node.animationState &&
			this.node.animationState.setActive("whileTap", !0),
			n && n(t, r);
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap &&
				this.node.animationState &&
				this.node.animationState.setActive("whileTap", !1),
			!qx()
		);
	}
	cancelPress(t, r) {
		if (!this.checkPressEnd()) return;
		const { onTapCancel: n } = this.node.getProps();
		n && n(t, r);
	}
	mount() {
		const t = this.node.getProps(),
			r = Nr(
				t.globalTapTarget ? window : this.node.current,
				"pointerdown",
				this.startPointerPress,
				{ passive: !(t.onTapStart || t.onPointerStart) },
			),
			n = Fr(this.node.current, "focus", this.startAccessiblePress);
		this.removeStartListeners = jr(r, n);
	}
	unmount() {
		this.removeStartListeners(),
			this.removeEndListeners(),
			this.removeAccessibleListeners();
	}
}
const pf = new WeakMap(),
	kc = new WeakMap(),
	OE = e => {
		const t = pf.get(e.target);
		t && t(e);
	},
	NE = e => {
		e.forEach(OE);
	};
function jE({ root: e, ...t }) {
	const r = e || document;
	kc.has(r) || kc.set(r, {});
	const n = kc.get(r),
		o = JSON.stringify(t);
	return n[o] || (n[o] = new IntersectionObserver(NE, { root: e, ...t })), n[o];
}
function _E(e, t, r) {
	const n = jE(t);
	return (
		pf.set(e, r),
		n.observe(e),
		() => {
			pf.delete(e), n.unobserve(e);
		}
	);
}
const zE = { some: 0, all: 1 };
class BE extends Dn {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
	}
	startObserver() {
		this.unmount();
		const { viewport: t = {} } = this.node.getProps(),
			{ root: r, margin: n, amount: o = "some", once: a } = t,
			i = {
				root: r ? r.current : void 0,
				rootMargin: n,
				threshold: typeof o == "number" ? o : zE[o],
			},
			s = l => {
				const { isIntersecting: u } = l;
				if (
					this.isInView === u ||
					((this.isInView = u), a && !u && this.hasEnteredView)
				)
					return;
				u && (this.hasEnteredView = !0),
					this.node.animationState &&
						this.node.animationState.setActive("whileInView", u);
				const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
					f = u ? c : d;
				f && f(l);
			};
		return _E(this.node.current, i, s);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		const { props: t, prevProps: r } = this.node;
		["amount", "margin", "root"].some(KE(t, r)) && this.startObserver();
	}
	unmount() {}
}
function KE({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return r => e[r] !== t[r];
}
const HE = {
	inView: { Feature: BE },
	tap: { Feature: FE },
	focus: { Feature: LE },
	hover: { Feature: RE },
};
function Jx(e, t) {
	if (!Array.isArray(t)) return !1;
	const r = t.length;
	if (r !== e.length) return !1;
	for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
	return !0;
}
function WE(e) {
	const t = {};
	return e.values.forEach((r, n) => (t[n] = r.get())), t;
}
function UE(e) {
	const t = {};
	return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t;
}
function Cu(e, t, r) {
	const n = e.getProps();
	return p0(n, t, r !== void 0 ? r : n.custom, WE(e), UE(e));
}
const yn = e => e * 1e3,
	_r = e => e / 1e3,
	ZE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
	GE = e => ({
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	YE = { type: "keyframes", duration: 0.8 },
	XE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	qE = (e, { keyframes: t }) =>
		t.length > 2
			? YE
			: so.has(e)
			? e.startsWith("scale")
				? GE(t[1])
				: ZE
			: XE;
function QE({
	when: e,
	delay: t,
	delayChildren: r,
	staggerChildren: n,
	staggerDirection: o,
	repeat: a,
	repeatType: i,
	repeatDelay: s,
	from: l,
	elapsed: u,
	...c
}) {
	return !!Object.keys(c).length;
}
function h0(e, t) {
	return e[t] || e.default || e;
}
const JE = e => e !== null;
function Eu(e, { repeat: t, repeatType: r = "loop" }, n) {
	const o = e.filter(JE),
		a = t && r !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
	return !a || n === void 0 ? o[a] : n;
}
let Bs;
function ek() {
	Bs = void 0;
}
const bn = {
		now: () => (
			Bs === void 0 &&
				bn.set(
					Qe.isProcessing || HC.useManualTiming
						? Qe.timestamp
						: performance.now(),
				),
			Bs
		),
		set: e => {
			(Bs = e), queueMicrotask(ek);
		},
	},
	ew = e => /^0[^.\s]+$/u.test(e);
function tk(e) {
	return typeof e == "number"
		? e === 0
		: e !== null
		? e === "none" || e === "0" || ew(e)
		: !0;
}
let hf = ct;
const tw = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
	rk = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function nk(e) {
	const t = rk.exec(e);
	if (!t) return [,];
	const [, r, n, o] = t;
	return [`--${r ?? n}`, o];
}
function rw(e, t, r = 1) {
	const [n, o] = nk(e);
	if (!n) return;
	const a = window.getComputedStyle(t).getPropertyValue(n);
	if (a) {
		const i = a.trim();
		return tw(i) ? parseFloat(i) : i;
	}
	return i0(o) ? rw(o, t, r + 1) : o;
}
const ok = new Set([
		"width",
		"height",
		"top",
		"left",
		"right",
		"bottom",
		"x",
		"y",
		"translateX",
		"translateY",
	]),
	rg = e => e === pa || e === ae,
	ng = (e, t) => parseFloat(e.split(", ")[t]),
	og =
		(e, t) =>
		(r, { transform: n }) => {
			if (n === "none" || !n) return 0;
			const o = n.match(/^matrix3d\((.+)\)$/u);
			if (o) return ng(o[1], t);
			{
				const a = n.match(/^matrix\((.+)\)$/u);
				return a ? ng(a[1], e) : 0;
			}
		},
	ak = new Set(["x", "y", "z"]),
	ik = Vi.filter(e => !ak.has(e));
function sk(e) {
	const t = [];
	return (
		ik.forEach(r => {
			const n = e.getValue(r);
			n !== void 0 &&
				(t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
		}),
		t
	);
}
const oa = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
		e.max - e.min - parseFloat(t) - parseFloat(r),
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
		e.max - e.min - parseFloat(t) - parseFloat(r),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: og(4, 13),
	y: og(5, 14),
};
oa.translateX = oa.x;
oa.translateY = oa.y;
const nw = e => t => t.test(e),
	lk = { test: e => e === "auto", parse: e => e },
	ow = [pa, ae, $r, Jr, fE, dE, lk],
	ag = e => ow.find(nw(e)),
	Yn = new Set();
let mf = !1,
	gf = !1;
function aw() {
	if (gf) {
		const e = Array.from(Yn).filter(n => n.needsMeasurement),
			t = new Set(e.map(n => n.element)),
			r = new Map();
		t.forEach(n => {
			const o = sk(n);
			o.length && (r.set(n, o), n.render());
		}),
			e.forEach(n => n.measureInitialState()),
			t.forEach(n => {
				n.render();
				const o = r.get(n);
				o &&
					o.forEach(([a, i]) => {
						var s;
						(s = n.getValue(a)) === null || s === void 0 || s.set(i);
					});
			}),
			e.forEach(n => n.measureEndState()),
			e.forEach(n => {
				n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
			});
	}
	(gf = !1), (mf = !1), Yn.forEach(e => e.complete()), Yn.clear();
}
function iw() {
	Yn.forEach(e => {
		e.readKeyframes(), e.needsMeasurement && (gf = !0);
	});
}
function uk() {
	iw(), aw();
}
class m0 {
	constructor(t, r, n, o, a, i = !1) {
		(this.isComplete = !1),
			(this.isAsync = !1),
			(this.needsMeasurement = !1),
			(this.isScheduled = !1),
			(this.unresolvedKeyframes = [...t]),
			(this.onComplete = r),
			(this.name = n),
			(this.motionValue = o),
			(this.element = a),
			(this.isAsync = i);
	}
	scheduleResolve() {
		(this.isScheduled = !0),
			this.isAsync
				? (Yn.add(this),
				  mf || ((mf = !0), Xe.read(iw), Xe.resolveKeyframes(aw)))
				: (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: r,
			element: n,
			motionValue: o,
		} = this;
		for (let a = 0; a < t.length; a++)
			if (t[a] === null)
				if (a === 0) {
					const i = o == null ? void 0 : o.get(),
						s = t[t.length - 1];
					if (i !== void 0) t[0] = i;
					else if (n && r) {
						const l = n.readValue(r, s);
						l != null && (t[0] = l);
					}
					t[0] === void 0 && (t[0] = s), o && i === void 0 && o.set(t[0]);
				} else t[a] = t[a - 1];
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete() {
		(this.isComplete = !0),
			this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
			Yn.delete(this);
	}
	cancel() {
		this.isComplete || ((this.isScheduled = !1), Yn.delete(this));
	}
	resume() {
		this.isComplete || this.scheduleResolve();
	}
}
const g0 = (e, t) => r =>
		!!(
			(Ri(r) && cE.test(r) && r.startsWith(e)) ||
			(t && Object.prototype.hasOwnProperty.call(r, t))
		),
	sw = (e, t, r) => n => {
		if (!Ri(n)) return n;
		const [o, a, i, s] = n.match(s0);
		return {
			[e]: parseFloat(o),
			[t]: parseFloat(a),
			[r]: parseFloat(i),
			alpha: s !== void 0 ? parseFloat(s) : 1,
		};
	},
	ck = e => Cn(0, 255, e),
	Tc = { ...pa, transform: e => Math.round(ck(e)) },
	Un = {
		test: g0("rgb", "red"),
		parse: sw("red", "green", "blue"),
		transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
			"rgba(" +
			Tc.transform(e) +
			", " +
			Tc.transform(t) +
			", " +
			Tc.transform(r) +
			", " +
			Qa(qa.transform(n)) +
			")",
	};
function dk(e) {
	let t = "",
		r = "",
		n = "",
		o = "";
	return (
		e.length > 5
			? ((t = e.substring(1, 3)),
			  (r = e.substring(3, 5)),
			  (n = e.substring(5, 7)),
			  (o = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (r = e.substring(2, 3)),
			  (n = e.substring(3, 4)),
			  (o = e.substring(4, 5)),
			  (t += t),
			  (r += r),
			  (n += n),
			  (o += o)),
		{
			red: parseInt(t, 16),
			green: parseInt(r, 16),
			blue: parseInt(n, 16),
			alpha: o ? parseInt(o, 16) / 255 : 1,
		}
	);
}
const vf = { test: g0("#"), parse: dk, transform: Un.transform },
	Ro = {
		test: g0("hsl", "hue"),
		parse: sw("hue", "saturation", "lightness"),
		transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
			"hsla(" +
			Math.round(e) +
			", " +
			$r.transform(Qa(t)) +
			", " +
			$r.transform(Qa(r)) +
			", " +
			Qa(qa.transform(n)) +
			")",
	},
	it = {
		test: e => Un.test(e) || vf.test(e) || Ro.test(e),
		parse: e =>
			Un.test(e) ? Un.parse(e) : Ro.test(e) ? Ro.parse(e) : vf.parse(e),
		transform: e =>
			Ri(e) ? e : e.hasOwnProperty("red") ? Un.transform(e) : Ro.transform(e),
	};
function fk(e) {
	var t, r;
	return (
		isNaN(e) &&
		Ri(e) &&
		(((t = e.match(s0)) === null || t === void 0 ? void 0 : t.length) || 0) +
			(((r = e.match(uE)) === null || r === void 0 ? void 0 : r.length) || 0) >
			0
	);
}
const lw = "number",
	uw = "color",
	pk = "var",
	hk = "var(",
	ig = "${}",
	mk =
		/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Nl(e) {
	const t = e.toString(),
		r = [],
		n = { color: [], number: [], var: [] },
		o = [];
	let a = 0;
	const s = t
		.replace(
			mk,
			l => (
				it.test(l)
					? (n.color.push(a), o.push(uw), r.push(it.parse(l)))
					: l.startsWith(hk)
					? (n.var.push(a), o.push(pk), r.push(l))
					: (n.number.push(a), o.push(lw), r.push(parseFloat(l))),
				++a,
				ig
			),
		)
		.split(ig);
	return { values: r, split: s, indexes: n, types: o };
}
function cw(e) {
	return Nl(e).values;
}
function dw(e) {
	const { split: t, types: r } = Nl(e),
		n = t.length;
	return o => {
		let a = "";
		for (let i = 0; i < n; i++)
			if (((a += t[i]), o[i] !== void 0)) {
				const s = r[i];
				s === lw
					? (a += Qa(o[i]))
					: s === uw
					? (a += it.transform(o[i]))
					: (a += o[i]);
			}
		return a;
	};
}
const gk = e => (typeof e == "number" ? 0 : e);
function vk(e) {
	const t = cw(e);
	return dw(e)(t.map(gk));
}
const kn = {
		test: fk,
		parse: cw,
		createTransformer: dw,
		getAnimatableNone: vk,
	},
	yk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function bk(e) {
	const [t, r] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	const [n] = r.match(s0) || [];
	if (!n) return e;
	const o = r.replace(n, "");
	let a = yk.has(t) ? 1 : 0;
	return n !== r && (a *= 100), t + "(" + a + o + ")";
}
const xk = /\b([a-z-]*)\(.*?\)/gu,
	yf = {
		...kn,
		getAnimatableNone: e => {
			const t = e.match(xk);
			return t ? t.map(bk).join(" ") : e;
		},
	},
	wk = {
		...Nx,
		color: it,
		backgroundColor: it,
		outlineColor: it,
		fill: it,
		stroke: it,
		borderColor: it,
		borderTopColor: it,
		borderRightColor: it,
		borderBottomColor: it,
		borderLeftColor: it,
		filter: yf,
		WebkitFilter: yf,
	},
	v0 = e => wk[e];
function fw(e, t) {
	let r = v0(e);
	return (
		r !== yf && (r = kn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
	);
}
function Sk(e, t, r) {
	let n = 0,
		o;
	for (; n < e.length && !o; )
		typeof e[n] == "string" && e[n] !== "none" && e[n] !== "0" && (o = e[n]),
			n++;
	if (o && r) for (const a of t) e[a] = fw(r, o);
}
class pw extends m0 {
	constructor(t, r, n, o) {
		super(t, r, n, o, o == null ? void 0 : o.owner, !0);
	}
	readKeyframes() {
		const { unresolvedKeyframes: t, element: r, name: n } = this;
		if (!r.current) return;
		super.readKeyframes();
		for (let l = 0; l < t.length; l++) {
			const u = t[l];
			if (typeof u == "string" && i0(u)) {
				const c = rw(u, r.current);
				c !== void 0 && (t[l] = c),
					l === t.length - 1 && (this.finalKeyframe = u);
			}
		}
		if (!ok.has(n) || t.length !== 2) return this.resolveNoneKeyframes();
		const [o, a] = t,
			i = ag(o),
			s = ag(a);
		if (i !== s)
			if (rg(i) && rg(s))
				for (let l = 0; l < t.length; l++) {
					const u = t[l];
					typeof u == "string" && (t[l] = parseFloat(u));
				}
			else this.needsMeasurement = !0;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes: t, name: r } = this,
			n = [];
		for (let o = 0; o < t.length; o++) tk(t[o]) && n.push(o);
		n.length && Sk(t, n, r);
	}
	measureInitialState() {
		const { element: t, unresolvedKeyframes: r, name: n } = this;
		if (!t.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset),
			(this.measuredOrigin = oa[n](
				t.measureViewportBox(),
				window.getComputedStyle(t.current),
			)),
			(r[0] = this.measuredOrigin);
		const o = r[r.length - 1];
		o !== void 0 && t.getValue(n, o).jump(o, !1);
	}
	measureEndState() {
		var t;
		const { element: r, name: n, unresolvedKeyframes: o } = this;
		if (!r.current) return;
		const a = r.getValue(n);
		a && a.jump(this.measuredOrigin, !1);
		const i = o.length - 1,
			s = o[i];
		(o[i] = oa[n](r.measureViewportBox(), window.getComputedStyle(r.current))),
			s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
			!((t = this.removedTransforms) === null || t === void 0) &&
				t.length &&
				this.removedTransforms.forEach(([l, u]) => {
					r.getValue(l).set(u);
				}),
			this.resolveNoneKeyframes();
	}
}
function Pk(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
const sg = (e, t) =>
	t === "zIndex"
		? !1
		: !!(
				typeof e == "number" ||
				Array.isArray(e) ||
				(typeof e == "string" &&
					(kn.test(e) || e === "0") &&
					!e.startsWith("url("))
		  );
function $k(e) {
	const t = e[0];
	if (e.length === 1) return !0;
	for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function Ck(e, t, r, n) {
	const o = e[0];
	if (o === null) return !1;
	const a = e[e.length - 1],
		i = sg(o, t),
		s = sg(a, t);
	return !i || !s ? !1 : $k(e) || (r === "spring" && n);
}
class hw {
	constructor({
		autoplay: t = !0,
		delay: r = 0,
		type: n = "keyframes",
		repeat: o = 0,
		repeatDelay: a = 0,
		repeatType: i = "loop",
		...s
	}) {
		(this.isStopped = !1),
			(this.hasAttemptedResolve = !1),
			(this.options = {
				autoplay: t,
				delay: r,
				type: n,
				repeat: o,
				repeatDelay: a,
				repeatType: i,
				...s,
			}),
			this.updateFinishedPromise();
	}
	get resolved() {
		return !this._resolved && !this.hasAttemptedResolve && uk(), this._resolved;
	}
	onKeyframesResolved(t, r) {
		this.hasAttemptedResolve = !0;
		const {
			name: n,
			type: o,
			velocity: a,
			delay: i,
			onComplete: s,
			onUpdate: l,
			isGenerator: u,
		} = this.options;
		if (!u && !Ck(t, n, o, a))
			if (i) this.options.duration = 0;
			else {
				l == null || l(Eu(t, this.options, r)),
					s == null || s(),
					this.resolveFinishedPromise();
				return;
			}
		const c = this.initPlayback(t, r);
		c !== !1 &&
			((this._resolved = { keyframes: t, finalKeyframe: r, ...c }),
			this.onPostResolved());
	}
	onPostResolved() {}
	then(t, r) {
		return this.currentFinishedPromise.then(t, r);
	}
	updateFinishedPromise() {
		this.currentFinishedPromise = new Promise(t => {
			this.resolveFinishedPromise = t;
		});
	}
}
function mw(e, t) {
	return t ? e * (1e3 / t) : 0;
}
const Ek = 5;
function gw(e, t, r) {
	const n = Math.max(t - Ek, 0);
	return mw(r - e(n), t - n);
}
const Mc = 0.001,
	kk = 0.01,
	Tk = 10,
	Mk = 0.05,
	Ak = 1;
function Dk({
	duration: e = 800,
	bounce: t = 0.25,
	velocity: r = 0,
	mass: n = 1,
}) {
	let o,
		a,
		i = 1 - t;
	(i = Cn(Mk, Ak, i)),
		(e = Cn(kk, Tk, _r(e))),
		i < 1
			? ((o = u => {
					const c = u * i,
						d = c * e,
						f = c - r,
						p = bf(u, i),
						g = Math.exp(-d);
					return Mc - (f / p) * g;
			  }),
			  (a = u => {
					const d = u * i * e,
						f = d * r + r,
						p = Math.pow(i, 2) * Math.pow(u, 2) * e,
						g = Math.exp(-d),
						b = bf(Math.pow(u, 2), i);
					return ((-o(u) + Mc > 0 ? -1 : 1) * ((f - p) * g)) / b;
			  }))
			: ((o = u => {
					const c = Math.exp(-u * e),
						d = (u - r) * e + 1;
					return -Mc + c * d;
			  }),
			  (a = u => {
					const c = Math.exp(-u * e),
						d = (r - u) * (e * e);
					return c * d;
			  }));
	const s = 5 / e,
		l = Vk(o, a, s);
	if (((e = yn(e)), isNaN(l)))
		return { stiffness: 100, damping: 10, duration: e };
	{
		const u = Math.pow(l, 2) * n;
		return { stiffness: u, damping: i * 2 * Math.sqrt(n * u), duration: e };
	}
}
const Ik = 12;
function Vk(e, t, r) {
	let n = r;
	for (let o = 1; o < Ik; o++) n = n - e(n) / t(n);
	return n;
}
function bf(e, t) {
	return e * Math.sqrt(1 - t * t);
}
const Rk = ["duration", "bounce"],
	Lk = ["stiffness", "damping", "mass"];
function lg(e, t) {
	return t.some(r => e[r] !== void 0);
}
function Fk(e) {
	let t = {
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1,
		...e,
	};
	if (!lg(e, Lk) && lg(e, Rk)) {
		const r = Dk(e);
		(t = { ...t, ...r, mass: 1 }), (t.isResolvedFromDuration = !0);
	}
	return t;
}
function vw({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
	const o = e[0],
		a = e[e.length - 1],
		i = { done: !1, value: o },
		{
			stiffness: s,
			damping: l,
			mass: u,
			duration: c,
			velocity: d,
			isResolvedFromDuration: f,
		} = Fk({ ...n, velocity: -_r(n.velocity || 0) }),
		p = d || 0,
		g = l / (2 * Math.sqrt(s * u)),
		b = a - o,
		x = _r(Math.sqrt(s / u)),
		m = Math.abs(b) < 5;
	r || (r = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
	let v;
	if (g < 1) {
		const y = bf(x, g);
		v = P => {
			const C = Math.exp(-g * x * P);
			return (
				a - C * (((p + g * x * b) / y) * Math.sin(y * P) + b * Math.cos(y * P))
			);
		};
	} else if (g === 1) v = y => a - Math.exp(-x * y) * (b + (p + x * b) * y);
	else {
		const y = x * Math.sqrt(g * g - 1);
		v = P => {
			const C = Math.exp(-g * x * P),
				E = Math.min(y * P, 300);
			return (
				a - (C * ((p + g * x * b) * Math.sinh(E) + y * b * Math.cosh(E))) / y
			);
		};
	}
	return {
		calculatedDuration: (f && c) || null,
		next: y => {
			const P = v(y);
			if (f) i.done = y >= c;
			else {
				let C = p;
				y !== 0 && (g < 1 ? (C = gw(v, y, P)) : (C = 0));
				const E = Math.abs(C) <= r,
					D = Math.abs(a - P) <= t;
				i.done = E && D;
			}
			return (i.value = i.done ? a : P), i;
		},
	};
}
function ug({
	keyframes: e,
	velocity: t = 0,
	power: r = 0.8,
	timeConstant: n = 325,
	bounceDamping: o = 10,
	bounceStiffness: a = 500,
	modifyTarget: i,
	min: s,
	max: l,
	restDelta: u = 0.5,
	restSpeed: c,
}) {
	const d = e[0],
		f = { done: !1, value: d },
		p = w => (s !== void 0 && w < s) || (l !== void 0 && w > l),
		g = w =>
			s === void 0
				? l
				: l === void 0 || Math.abs(s - w) < Math.abs(l - w)
				? s
				: l;
	let b = r * t;
	const x = d + b,
		m = i === void 0 ? x : i(x);
	m !== x && (b = m - d);
	const v = w => -b * Math.exp(-w / n),
		y = w => m + v(w),
		P = w => {
			const V = v(w),
				M = y(w);
			(f.done = Math.abs(V) <= u), (f.value = f.done ? m : M);
		};
	let C, E;
	const D = w => {
		p(f.value) &&
			((C = w),
			(E = vw({
				keyframes: [f.value, g(f.value)],
				velocity: gw(y, w, f.value),
				damping: o,
				stiffness: a,
				restDelta: u,
				restSpeed: c,
			})));
	};
	return (
		D(0),
		{
			calculatedDuration: null,
			next: w => {
				let V = !1;
				return (
					!E && C === void 0 && ((V = !0), P(w), D(w)),
					C !== void 0 && w >= C ? E.next(w - C) : (!V && P(w), f)
				);
			},
		}
	);
}
const yw = (e, t, r) =>
		(((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
	Ok = 1e-7,
	Nk = 12;
function jk(e, t, r, n, o) {
	let a,
		i,
		s = 0;
	do (i = t + (r - t) / 2), (a = yw(i, n, o) - e), a > 0 ? (r = i) : (t = i);
	while (Math.abs(a) > Ok && ++s < Nk);
	return i;
}
function Fi(e, t, r, n) {
	if (e === t && r === n) return ct;
	const o = a => jk(a, 0, 1, e, r);
	return a => (a === 0 || a === 1 ? a : yw(o(a), t, n));
}
const _k = Fi(0.42, 0, 1, 1),
	zk = Fi(0, 0, 0.58, 1),
	bw = Fi(0.42, 0, 0.58, 1),
	Bk = e => Array.isArray(e) && typeof e[0] != "number",
	xw = e => t => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	ww = e => t => 1 - e(1 - t),
	y0 = e => 1 - Math.sin(Math.acos(e)),
	Sw = ww(y0),
	Kk = xw(y0),
	Pw = Fi(0.33, 1.53, 0.69, 0.99),
	b0 = ww(Pw),
	Hk = xw(b0),
	Wk = e =>
		(e *= 2) < 1 ? 0.5 * b0(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
	cg = {
		linear: ct,
		easeIn: _k,
		easeInOut: bw,
		easeOut: zk,
		circIn: y0,
		circInOut: Kk,
		circOut: Sw,
		backIn: b0,
		backInOut: Hk,
		backOut: Pw,
		anticipate: Wk,
	},
	dg = e => {
		if (Array.isArray(e)) {
			hf(e.length === 4);
			const [t, r, n, o] = e;
			return Fi(t, r, n, o);
		} else if (typeof e == "string") return hf(cg[e] !== void 0), cg[e];
		return e;
	},
	Pi = (e, t, r) => {
		const n = t - e;
		return n === 0 ? 1 : (r - e) / n;
	},
	Ve = (e, t, r) => e + (t - e) * r;
function Ac(e, t, r) {
	return (
		r < 0 && (r += 1),
		r > 1 && (r -= 1),
		r < 1 / 6
			? e + (t - e) * 6 * r
			: r < 1 / 2
			? t
			: r < 2 / 3
			? e + (t - e) * (2 / 3 - r) * 6
			: e
	);
}
function Uk({ hue: e, saturation: t, lightness: r, alpha: n }) {
	(e /= 360), (t /= 100), (r /= 100);
	let o = 0,
		a = 0,
		i = 0;
	if (!t) o = a = i = r;
	else {
		const s = r < 0.5 ? r * (1 + t) : r + t - r * t,
			l = 2 * r - s;
		(o = Ac(l, s, e + 1 / 3)), (a = Ac(l, s, e)), (i = Ac(l, s, e - 1 / 3));
	}
	return {
		red: Math.round(o * 255),
		green: Math.round(a * 255),
		blue: Math.round(i * 255),
		alpha: n,
	};
}
const Dc = (e, t, r) => {
		const n = e * e,
			o = r * (t * t - n) + n;
		return o < 0 ? 0 : Math.sqrt(o);
	},
	Zk = [vf, Un, Ro],
	Gk = e => Zk.find(t => t.test(e));
function fg(e) {
	const t = Gk(e);
	let r = t.parse(e);
	return t === Ro && (r = Uk(r)), r;
}
const pg = (e, t) => {
	const r = fg(e),
		n = fg(t),
		o = { ...r };
	return a => (
		(o.red = Dc(r.red, n.red, a)),
		(o.green = Dc(r.green, n.green, a)),
		(o.blue = Dc(r.blue, n.blue, a)),
		(o.alpha = Ve(r.alpha, n.alpha, a)),
		Un.transform(o)
	);
};
function xf(e, t) {
	return r => (r > 0 ? t : e);
}
function Yk(e, t) {
	return r => Ve(e, t, r);
}
function x0(e) {
	return typeof e == "number"
		? Yk
		: typeof e == "string"
		? i0(e)
			? xf
			: it.test(e)
			? pg
			: Qk
		: Array.isArray(e)
		? $w
		: typeof e == "object"
		? it.test(e)
			? pg
			: Xk
		: xf;
}
function $w(e, t) {
	const r = [...e],
		n = r.length,
		o = e.map((a, i) => x0(a)(a, t[i]));
	return a => {
		for (let i = 0; i < n; i++) r[i] = o[i](a);
		return r;
	};
}
function Xk(e, t) {
	const r = { ...e, ...t },
		n = {};
	for (const o in r)
		e[o] !== void 0 && t[o] !== void 0 && (n[o] = x0(e[o])(e[o], t[o]));
	return o => {
		for (const a in n) r[a] = n[a](o);
		return r;
	};
}
function qk(e, t) {
	var r;
	const n = [],
		o = { color: 0, var: 0, number: 0 };
	for (let a = 0; a < t.values.length; a++) {
		const i = t.types[a],
			s = e.indexes[i][o[i]],
			l = (r = e.values[s]) !== null && r !== void 0 ? r : 0;
		(n[a] = l), o[i]++;
	}
	return n;
}
const Qk = (e, t) => {
	const r = kn.createTransformer(t),
		n = Nl(e),
		o = Nl(t);
	return n.indexes.var.length === o.indexes.var.length &&
		n.indexes.color.length === o.indexes.color.length &&
		n.indexes.number.length >= o.indexes.number.length
		? jr($w(qk(n, o), o.values), r)
		: xf(e, t);
};
function Cw(e, t, r) {
	return typeof e == "number" && typeof t == "number" && typeof r == "number"
		? Ve(e, t, r)
		: x0(e)(e, t);
}
function Jk(e, t, r) {
	const n = [],
		o = r || Cw,
		a = e.length - 1;
	for (let i = 0; i < a; i++) {
		let s = o(e[i], e[i + 1]);
		if (t) {
			const l = Array.isArray(t) ? t[i] || ct : t;
			s = jr(l, s);
		}
		n.push(s);
	}
	return n;
}
function eT(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
	const a = e.length;
	if ((hf(a === t.length), a === 1)) return () => t[0];
	if (a === 2 && e[0] === e[1]) return () => t[1];
	e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
	const i = Jk(t, n, o),
		s = i.length,
		l = u => {
			let c = 0;
			if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
			const d = Pi(e[c], e[c + 1], u);
			return i[c](d);
		};
	return r ? u => l(Cn(e[0], e[a - 1], u)) : l;
}
function tT(e, t) {
	const r = e[e.length - 1];
	for (let n = 1; n <= t; n++) {
		const o = Pi(0, t, n);
		e.push(Ve(r, 1, o));
	}
}
function rT(e) {
	const t = [0];
	return tT(t, e.length - 1), t;
}
function nT(e, t) {
	return e.map(r => r * t);
}
function oT(e, t) {
	return e.map(() => t || bw).splice(0, e.length - 1);
}
function jl({
	duration: e = 300,
	keyframes: t,
	times: r,
	ease: n = "easeInOut",
}) {
	const o = Bk(n) ? n.map(dg) : dg(n),
		a = { done: !1, value: t[0] },
		i = nT(r && r.length === t.length ? r : rT(t), e),
		s = eT(i, t, { ease: Array.isArray(o) ? o : oT(t, o) });
	return {
		calculatedDuration: e,
		next: l => ((a.value = s(l)), (a.done = l >= e), a),
	};
}
const hg = 2e4;
function aT(e) {
	let t = 0;
	const r = 50;
	let n = e.next(t);
	for (; !n.done && t < hg; ) (t += r), (n = e.next(t));
	return t >= hg ? 1 / 0 : t;
}
const iT = e => {
		const t = ({ timestamp: r }) => e(r);
		return {
			start: () => Xe.update(t, !0),
			stop: () => En(t),
			now: () => (Qe.isProcessing ? Qe.timestamp : bn.now()),
		};
	},
	sT = { decay: ug, inertia: ug, tween: jl, keyframes: jl, spring: vw },
	lT = e => e / 100;
class w0 extends hw {
	constructor({ KeyframeResolver: t = m0, ...r }) {
		super(r),
			(this.holdTime = null),
			(this.startTime = null),
			(this.cancelTime = null),
			(this.currentTime = 0),
			(this.playbackSpeed = 1),
			(this.pendingPlayState = "running"),
			(this.state = "idle"),
			(this.stop = () => {
				if (
					(this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
				)
					return;
				this.teardown();
				const { onStop: s } = this.options;
				s && s();
			});
		const { name: n, motionValue: o, keyframes: a } = this.options,
			i = (s, l) => this.onKeyframesResolved(s, l);
		n && o && o.owner
			? (this.resolver = o.owner.resolveKeyframes(a, i, n, o))
			: (this.resolver = new t(a, i, n, o)),
			this.resolver.scheduleResolve();
	}
	initPlayback(t) {
		const {
				type: r = "keyframes",
				repeat: n = 0,
				repeatDelay: o = 0,
				repeatType: a,
				velocity: i = 0,
			} = this.options,
			s = sT[r] || jl;
		let l, u;
		s !== jl &&
			typeof t[0] != "number" &&
			((l = jr(lT, Cw(t[0], t[1]))), (t = [0, 100]));
		const c = s({ ...this.options, keyframes: t });
		a === "mirror" &&
			(u = s({ ...this.options, keyframes: [...t].reverse(), velocity: -i })),
			c.calculatedDuration === null && (c.calculatedDuration = aT(c));
		const { calculatedDuration: d } = c,
			f = d + o,
			p = f * (n + 1) - o;
		return {
			generator: c,
			mirroredGenerator: u,
			mapPercentToKeyframes: l,
			calculatedDuration: d,
			resolvedDuration: f,
			totalDuration: p,
		};
	}
	onPostResolved() {
		const { autoplay: t = !0 } = this.options;
		this.play(),
			this.pendingPlayState === "paused" || !t
				? this.pause()
				: (this.state = this.pendingPlayState);
	}
	tick(t, r = !1) {
		const { resolved: n } = this;
		if (!n) {
			const { keyframes: w } = this.options;
			return { done: !0, value: w[w.length - 1] };
		}
		const {
			finalKeyframe: o,
			generator: a,
			mirroredGenerator: i,
			mapPercentToKeyframes: s,
			keyframes: l,
			calculatedDuration: u,
			totalDuration: c,
			resolvedDuration: d,
		} = n;
		if (this.startTime === null) return a.next(0);
		const {
			delay: f,
			repeat: p,
			repeatType: g,
			repeatDelay: b,
			onUpdate: x,
		} = this.options;
		this.speed > 0
			? (this.startTime = Math.min(this.startTime, t))
			: this.speed < 0 &&
			  (this.startTime = Math.min(t - c / this.speed, this.startTime)),
			r
				? (this.currentTime = t)
				: this.holdTime !== null
				? (this.currentTime = this.holdTime)
				: (this.currentTime = Math.round(t - this.startTime) * this.speed);
		const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
			v = this.speed >= 0 ? m < 0 : m > c;
		(this.currentTime = Math.max(m, 0)),
			this.state === "finished" &&
				this.holdTime === null &&
				(this.currentTime = c);
		let y = this.currentTime,
			P = a;
		if (p) {
			const w = Math.min(this.currentTime, c) / d;
			let V = Math.floor(w),
				M = w % 1;
			!M && w >= 1 && (M = 1),
				M === 1 && V--,
				(V = Math.min(V, p + 1)),
				!!(V % 2) &&
					(g === "reverse"
						? ((M = 1 - M), b && (M -= b / d))
						: g === "mirror" && (P = i)),
				(y = Cn(0, 1, M) * d);
		}
		const C = v ? { done: !1, value: l[0] } : P.next(y);
		s && (C.value = s(C.value));
		let { done: E } = C;
		!v &&
			u !== null &&
			(E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
		const D =
			this.holdTime === null &&
			(this.state === "finished" || (this.state === "running" && E));
		return (
			D && o !== void 0 && (C.value = Eu(l, this.options, o)),
			x && x(C.value),
			D && this.finish(),
			C
		);
	}
	get duration() {
		const { resolved: t } = this;
		return t ? _r(t.calculatedDuration) : 0;
	}
	get time() {
		return _r(this.currentTime);
	}
	set time(t) {
		(t = yn(t)),
			(this.currentTime = t),
			this.holdTime !== null || this.speed === 0
				? (this.holdTime = t)
				: this.driver && (this.startTime = this.driver.now() - t / this.speed);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(t) {
		const r = this.playbackSpeed !== t;
		(this.playbackSpeed = t), r && (this.time = _r(this.currentTime));
	}
	play() {
		if (
			(this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
		) {
			this.pendingPlayState = "running";
			return;
		}
		if (this.isStopped) return;
		const { driver: t = iT, onPlay: r } = this.options;
		this.driver || (this.driver = t(o => this.tick(o))), r && r();
		const n = this.driver.now();
		this.holdTime !== null
			? (this.startTime = n - this.holdTime)
			: (!this.startTime || this.state === "finished") && (this.startTime = n),
			this.state === "finished" && this.updateFinishedPromise(),
			(this.cancelTime = this.startTime),
			(this.holdTime = null),
			(this.state = "running"),
			this.driver.start();
	}
	pause() {
		var t;
		if (!this._resolved) {
			this.pendingPlayState = "paused";
			return;
		}
		(this.state = "paused"),
			(this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
	}
	complete() {
		this.state !== "running" && this.play(),
			(this.pendingPlayState = this.state = "finished"),
			(this.holdTime = null);
	}
	finish() {
		this.teardown(), (this.state = "finished");
		const { onComplete: t } = this.options;
		t && t();
	}
	cancel() {
		this.cancelTime !== null && this.tick(this.cancelTime),
			this.teardown(),
			this.updateFinishedPromise();
	}
	teardown() {
		(this.state = "idle"),
			this.stopDriver(),
			this.resolveFinishedPromise(),
			this.updateFinishedPromise(),
			(this.startTime = this.cancelTime = null),
			this.resolver.cancel();
	}
	stopDriver() {
		this.driver && (this.driver.stop(), (this.driver = void 0));
	}
	sample(t) {
		return (this.startTime = 0), this.tick(t, !0);
	}
}
const Ew = e => Array.isArray(e) && typeof e[0] == "number";
function kw(e) {
	return !!(
		!e ||
		(typeof e == "string" && e in S0) ||
		Ew(e) ||
		(Array.isArray(e) && e.every(kw))
	);
}
const _a = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
	S0 = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		circIn: _a([0, 0.65, 0.55, 1]),
		circOut: _a([0.55, 0, 1, 0.45]),
		backIn: _a([0.31, 0.01, 0.66, -0.59]),
		backOut: _a([0.33, 1.53, 0.69, 0.99]),
	};
function uT(e) {
	return Tw(e) || S0.easeOut;
}
function Tw(e) {
	if (e) return Ew(e) ? _a(e) : Array.isArray(e) ? e.map(uT) : S0[e];
}
function cT(
	e,
	t,
	r,
	{
		delay: n = 0,
		duration: o = 300,
		repeat: a = 0,
		repeatType: i = "loop",
		ease: s,
		times: l,
	} = {},
) {
	const u = { [t]: r };
	l && (u.offset = l);
	const c = Tw(s);
	return (
		Array.isArray(c) && (u.easing = c),
		e.animate(u, {
			delay: n,
			duration: o,
			easing: Array.isArray(c) ? "linear" : c,
			fill: "both",
			iterations: a + 1,
			direction: i === "reverse" ? "alternate" : "normal",
		})
	);
}
const dT = Pk(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
	fT = new Set(["opacity", "clipPath", "filter", "transform"]),
	_l = 10,
	pT = 2e4;
function hT(e) {
	return e.type === "spring" || e.name === "backgroundColor" || !kw(e.ease);
}
function mT(e, t) {
	const r = new w0({
		...t,
		keyframes: e,
		repeat: 0,
		delay: 0,
		isGenerator: !0,
	});
	let n = { done: !1, value: e[0] };
	const o = [];
	let a = 0;
	for (; !n.done && a < pT; ) (n = r.sample(a)), o.push(n.value), (a += _l);
	return { times: void 0, keyframes: o, duration: a - _l, ease: "linear" };
}
class mg extends hw {
	constructor(t) {
		super(t);
		const { name: r, motionValue: n, keyframes: o } = this.options;
		(this.resolver = new pw(o, (a, i) => this.onKeyframesResolved(a, i), r, n)),
			this.resolver.scheduleResolve();
	}
	initPlayback(t, r) {
		var n;
		let {
			duration: o = 300,
			times: a,
			ease: i,
			type: s,
			motionValue: l,
			name: u,
		} = this.options;
		if (!(!((n = l.owner) === null || n === void 0) && n.current)) return !1;
		if (hT(this.options)) {
			const { onComplete: d, onUpdate: f, motionValue: p, ...g } = this.options,
				b = mT(t, g);
			(t = b.keyframes),
				t.length === 1 && (t[1] = t[0]),
				(o = b.duration),
				(a = b.times),
				(i = b.ease),
				(s = "keyframes");
		}
		const c = cT(l.owner.current, u, t, {
			...this.options,
			duration: o,
			times: a,
			ease: i,
		});
		return (
			(c.startTime = bn.now()),
			this.pendingTimeline
				? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
				: (c.onfinish = () => {
						const { onComplete: d } = this.options;
						l.set(Eu(t, this.options, r)),
							d && d(),
							this.cancel(),
							this.resolveFinishedPromise();
				  }),
			{ animation: c, duration: o, times: a, type: s, ease: i, keyframes: t }
		);
	}
	get duration() {
		const { resolved: t } = this;
		if (!t) return 0;
		const { duration: r } = t;
		return _r(r);
	}
	get time() {
		const { resolved: t } = this;
		if (!t) return 0;
		const { animation: r } = t;
		return _r(r.currentTime || 0);
	}
	set time(t) {
		const { resolved: r } = this;
		if (!r) return;
		const { animation: n } = r;
		n.currentTime = yn(t);
	}
	get speed() {
		const { resolved: t } = this;
		if (!t) return 1;
		const { animation: r } = t;
		return r.playbackRate;
	}
	set speed(t) {
		const { resolved: r } = this;
		if (!r) return;
		const { animation: n } = r;
		n.playbackRate = t;
	}
	get state() {
		const { resolved: t } = this;
		if (!t) return "idle";
		const { animation: r } = t;
		return r.playState;
	}
	attachTimeline(t) {
		if (!this._resolved) this.pendingTimeline = t;
		else {
			const { resolved: r } = this;
			if (!r) return ct;
			const { animation: n } = r;
			(n.timeline = t), (n.onfinish = null);
		}
		return ct;
	}
	play() {
		if (this.isStopped) return;
		const { resolved: t } = this;
		if (!t) return;
		const { animation: r } = t;
		r.playState === "finished" && this.updateFinishedPromise(), r.play();
	}
	pause() {
		const { resolved: t } = this;
		if (!t) return;
		const { animation: r } = t;
		r.pause();
	}
	stop() {
		if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
			return;
		const { resolved: t } = this;
		if (!t) return;
		const {
			animation: r,
			keyframes: n,
			duration: o,
			type: a,
			ease: i,
			times: s,
		} = t;
		if (!(r.playState === "idle" || r.playState === "finished")) {
			if (this.time) {
				const {
						motionValue: l,
						onUpdate: u,
						onComplete: c,
						...d
					} = this.options,
					f = new w0({
						...d,
						keyframes: n,
						duration: o,
						type: a,
						ease: i,
						times: s,
						isGenerator: !0,
					}),
					p = yn(this.time);
				l.setWithVelocity(f.sample(p - _l).value, f.sample(p).value, _l);
			}
			this.cancel();
		}
	}
	complete() {
		const { resolved: t } = this;
		t && t.animation.finish();
	}
	cancel() {
		const { resolved: t } = this;
		t && t.animation.cancel();
	}
	static supports(t) {
		const {
			motionValue: r,
			name: n,
			repeatDelay: o,
			repeatType: a,
			damping: i,
			type: s,
		} = t;
		return (
			dT() &&
			n &&
			fT.has(n) &&
			r &&
			r.owner &&
			r.owner.current instanceof HTMLElement &&
			!r.owner.getProps().onUpdate &&
			!o &&
			a !== "mirror" &&
			i !== 0 &&
			s !== "inertia"
		);
	}
}
const P0 =
	(e, t, r, n = {}, o, a) =>
	i => {
		const s = h0(n, e) || {},
			l = s.delay || n.delay || 0;
		let { elapsed: u = 0 } = n;
		u = u - yn(l);
		let c = {
			keyframes: Array.isArray(r) ? r : [null, r],
			ease: "easeOut",
			velocity: t.getVelocity(),
			...s,
			delay: -u,
			onUpdate: f => {
				t.set(f), s.onUpdate && s.onUpdate(f);
			},
			onComplete: () => {
				i(), s.onComplete && s.onComplete();
			},
			name: e,
			motionValue: t,
			element: a ? void 0 : o,
		};
		QE(s) || (c = { ...c, ...qE(e, c) }),
			c.duration && (c.duration = yn(c.duration)),
			c.repeatDelay && (c.repeatDelay = yn(c.repeatDelay)),
			c.from !== void 0 && (c.keyframes[0] = c.from);
		let d = !1;
		if (
			((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
				((c.duration = 0), c.delay === 0 && (d = !0)),
			d && !a && t.get() !== void 0)
		) {
			const f = Eu(c.keyframes, s);
			if (f !== void 0) {
				Xe.update(() => {
					c.onUpdate(f), c.onComplete();
				});
				return;
			}
		}
		return !a && mg.supports(c) ? new mg(c) : new w0(c);
	};
function zl(e) {
	return !!(ut(e) && e.add);
}
function $0(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function C0(e, t) {
	const r = e.indexOf(t);
	r > -1 && e.splice(r, 1);
}
class E0 {
	constructor() {
		this.subscriptions = [];
	}
	add(t) {
		return $0(this.subscriptions, t), () => C0(this.subscriptions, t);
	}
	notify(t, r, n) {
		const o = this.subscriptions.length;
		if (o)
			if (o === 1) this.subscriptions[0](t, r, n);
			else
				for (let a = 0; a < o; a++) {
					const i = this.subscriptions[a];
					i && i(t, r, n);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const gg = 30,
	gT = e => !isNaN(parseFloat(e));
class vT {
	constructor(t, r = {}) {
		(this.version = "11.1.7"),
			(this.canTrackVelocity = !1),
			(this.events = {}),
			(this.updateAndNotify = (n, o = !0) => {
				const a = bn.now();
				this.updatedAt !== a && this.setPrevFrameValue(),
					(this.prev = this.current),
					this.setCurrent(n),
					this.current !== this.prev &&
						this.events.change &&
						this.events.change.notify(this.current),
					o &&
						this.events.renderRequest &&
						this.events.renderRequest.notify(this.current);
			}),
			(this.hasAnimated = !1),
			this.setCurrent(t),
			(this.canTrackVelocity = gT(this.current)),
			(this.owner = r.owner);
	}
	setCurrent(t) {
		(this.current = t), (this.updatedAt = bn.now());
	}
	setPrevFrameValue(t = this.current) {
		(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
	}
	onChange(t) {
		return this.on("change", t);
	}
	on(t, r) {
		this.events[t] || (this.events[t] = new E0());
		const n = this.events[t].add(r);
		return t === "change"
			? () => {
					n(),
						Xe.read(() => {
							this.events.change.getSize() || this.stop();
						});
			  }
			: n;
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear();
	}
	attach(t, r) {
		(this.passiveEffect = t), (this.stopPassiveEffect = r);
	}
	set(t, r = !0) {
		!r || !this.passiveEffect
			? this.updateAndNotify(t, r)
			: this.passiveEffect(t, this.updateAndNotify);
	}
	setWithVelocity(t, r, n) {
		this.set(r),
			(this.prev = void 0),
			(this.prevFrameValue = t),
			(this.prevUpdatedAt = this.updatedAt - n);
	}
	jump(t, r = !0) {
		this.updateAndNotify(t),
			(this.prev = t),
			(this.prevUpdatedAt = this.prevFrameValue = void 0),
			r && this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
	get() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		const t = bn.now();
		if (
			!this.canTrackVelocity ||
			this.prevFrameValue === void 0 ||
			t - this.updatedAt > gg
		)
			return 0;
		const r = Math.min(this.updatedAt - this.prevUpdatedAt, gg);
		return mw(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
	}
	start(t) {
		return (
			this.stop(),
			new Promise(r => {
				(this.hasAnimated = !0),
					(this.animation = t(r)),
					this.events.animationStart && this.events.animationStart.notify();
			}).then(() => {
				this.events.animationComplete && this.events.animationComplete.notify(),
					this.clearAnimation();
			})
		);
	}
	stop() {
		this.animation &&
			(this.animation.stop(),
			this.events.animationCancel && this.events.animationCancel.notify()),
			this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.clearListeners(),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
}
function $i(e, t) {
	return new vT(e, t);
}
function yT(e, t, r) {
	e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, $i(r));
}
function bT(e, t) {
	const r = Cu(e, t);
	let { transitionEnd: n = {}, transition: o = {}, ...a } = r || {};
	a = { ...a, ...n };
	for (const i in a) {
		const s = EE(a[i]);
		yT(e, i, s);
	}
}
function xT({ protectedKeys: e, needsAnimating: t }, r) {
	const n = e.hasOwnProperty(r) && t[r] !== !0;
	return (t[r] = !1), n;
}
function Mw(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
	var a;
	let { transition: i = e.getDefaultTransition(), transitionEnd: s, ...l } = t;
	const u = e.getValue("willChange");
	n && (i = n);
	const c = [],
		d = o && e.animationState && e.animationState.getState()[o];
	for (const f in l) {
		const p = e.getValue(
				f,
				(a = e.latestValues[f]) !== null && a !== void 0 ? a : null,
			),
			g = l[f];
		if (g === void 0 || (d && xT(d, f))) continue;
		const b = { delay: r, elapsed: 0, ...h0(i || {}, f) };
		let x = !1;
		if (window.HandoffAppearAnimations) {
			const y = e.getProps()[Dx];
			if (y) {
				const P = window.HandoffAppearAnimations(y, f);
				P !== null && ((b.elapsed = P), (x = !0));
			}
		}
		p.start(
			P0(f, p, g, e.shouldReduceMotion && so.has(f) ? { type: !1 } : b, e, x),
		);
		const m = p.animation;
		m && (zl(u) && (u.add(f), m.then(() => u.remove(f))), c.push(m));
	}
	return (
		s &&
			Promise.all(c).then(() => {
				Xe.update(() => {
					s && bT(e, s);
				});
			}),
		c
	);
}
function wf(e, t, r = {}) {
	var n;
	const o = Cu(
		e,
		t,
		r.type === "exit"
			? (n = e.presenceContext) === null || n === void 0
				? void 0
				: n.custom
			: void 0,
	);
	let { transition: a = e.getDefaultTransition() || {} } = o || {};
	r.transitionOverride && (a = r.transitionOverride);
	const i = o ? () => Promise.all(Mw(e, o, r)) : () => Promise.resolve(),
		s =
			e.variantChildren && e.variantChildren.size
				? (u = 0) => {
						const {
							delayChildren: c = 0,
							staggerChildren: d,
							staggerDirection: f,
						} = a;
						return wT(e, t, c + u, d, f, r);
				  }
				: () => Promise.resolve(),
		{ when: l } = a;
	if (l) {
		const [u, c] = l === "beforeChildren" ? [i, s] : [s, i];
		return u().then(() => c());
	} else return Promise.all([i(), s(r.delay)]);
}
function wT(e, t, r = 0, n = 0, o = 1, a) {
	const i = [],
		s = (e.variantChildren.size - 1) * n,
		l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
	return (
		Array.from(e.variantChildren)
			.sort(ST)
			.forEach((u, c) => {
				u.notify("AnimationStart", t),
					i.push(
						wf(u, t, { ...a, delay: r + l(c) }).then(() =>
							u.notify("AnimationComplete", t),
						),
					);
			}),
		Promise.all(i)
	);
}
function ST(e, t) {
	return e.sortNodePosition(t);
}
function PT(e, t, r = {}) {
	e.notify("AnimationStart", t);
	let n;
	if (Array.isArray(t)) {
		const o = t.map(a => wf(e, a, r));
		n = Promise.all(o);
	} else if (typeof t == "string") n = wf(e, t, r);
	else {
		const o = typeof t == "function" ? Cu(e, t, r.custom) : t;
		n = Promise.all(Mw(e, o, r));
	}
	return n.then(() => {
		Xe.postRender(() => {
			e.notify("AnimationComplete", t);
		});
	});
}
const $T = [...n0].reverse(),
	CT = n0.length;
function ET(e) {
	return t => Promise.all(t.map(({ animation: r, options: n }) => PT(e, r, n)));
}
function kT(e) {
	let t = ET(e);
	const r = MT();
	let n = !0;
	const o = l => (u, c) => {
		var d;
		const f = Cu(
			e,
			c,
			l === "exit"
				? (d = e.presenceContext) === null || d === void 0
					? void 0
					: d.custom
				: void 0,
		);
		if (f) {
			const { transition: p, transitionEnd: g, ...b } = f;
			u = { ...u, ...b, ...g };
		}
		return u;
	};
	function a(l) {
		t = l(e);
	}
	function i(l) {
		const u = e.getProps(),
			c = e.getVariantContext(!0) || {},
			d = [],
			f = new Set();
		let p = {},
			g = 1 / 0;
		for (let x = 0; x < CT; x++) {
			const m = $T[x],
				v = r[m],
				y = u[m] !== void 0 ? u[m] : c[m],
				P = xi(y),
				C = m === l ? v.isActive : null;
			C === !1 && (g = x);
			let E = y === c[m] && y !== u[m] && P;
			if (
				(E && n && e.manuallyAnimateOnMount && (E = !1),
				(v.protectedKeys = { ...p }),
				(!v.isActive && C === null) ||
					(!y && !v.prevProp) ||
					Su(y) ||
					typeof y == "boolean")
			)
				continue;
			let w =
					TT(v.prevProp, y) ||
					(m === l && v.isActive && !E && P) ||
					(x > g && P),
				V = !1;
			const M = Array.isArray(y) ? y : [y];
			let F = M.reduce(o(m), {});
			C === !1 && (F = {});
			const { prevResolvedValues: L = {} } = v,
				T = { ...L, ...F },
				A = _ => {
					(w = !0),
						f.has(_) && ((V = !0), f.delete(_)),
						(v.needsAnimating[_] = !0);
					const N = e.getValue(_);
					N && (N.liveStyle = !1);
				};
			for (const _ in T) {
				const N = F[_],
					R = L[_];
				if (p.hasOwnProperty(_)) continue;
				let j = !1;
				ff(N) && ff(R) ? (j = !Jx(N, R)) : (j = N !== R),
					j
						? N != null
							? A(_)
							: f.add(_)
						: N !== void 0 && f.has(_)
						? A(_)
						: (v.protectedKeys[_] = !0);
			}
			(v.prevProp = y),
				(v.prevResolvedValues = F),
				v.isActive && (p = { ...p, ...F }),
				n && e.blockInitialAnimation && (w = !1),
				w &&
					(!E || V) &&
					d.push(...M.map(_ => ({ animation: _, options: { type: m } })));
		}
		if (f.size) {
			const x = {};
			f.forEach(m => {
				const v = e.getBaseTarget(m),
					y = e.getValue(m);
				y && (y.liveStyle = !0), (x[m] = v ?? null);
			}),
				d.push({ animation: x });
		}
		let b = !!d.length;
		return (
			n &&
				(u.initial === !1 || u.initial === u.animate) &&
				!e.manuallyAnimateOnMount &&
				(b = !1),
			(n = !1),
			b ? t(d) : Promise.resolve()
		);
	}
	function s(l, u) {
		var c;
		if (r[l].isActive === u) return Promise.resolve();
		(c = e.variantChildren) === null ||
			c === void 0 ||
			c.forEach(f => {
				var p;
				return (p = f.animationState) === null || p === void 0
					? void 0
					: p.setActive(l, u);
			}),
			(r[l].isActive = u);
		const d = i(l);
		for (const f in r) r[f].protectedKeys = {};
		return d;
	}
	return {
		animateChanges: i,
		setActive: s,
		setAnimateFunction: a,
		getState: () => r,
	};
}
function TT(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Jx(t, e) : !1;
}
function Vn(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {},
	};
}
function MT() {
	return {
		animate: Vn(!0),
		whileInView: Vn(),
		whileHover: Vn(),
		whileTap: Vn(),
		whileDrag: Vn(),
		whileFocus: Vn(),
		exit: Vn(),
	};
}
class AT extends Dn {
	constructor(t) {
		super(t), t.animationState || (t.animationState = kT(t));
	}
	updateAnimationControlsSubscription() {
		const { animate: t } = this.node.getProps();
		this.unmount(), Su(t) && (this.unmount = t.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate: t } = this.node.getProps(),
			{ animate: r } = this.node.prevProps || {};
		t !== r && this.updateAnimationControlsSubscription();
	}
	unmount() {}
}
let DT = 0;
class IT extends Dn {
	constructor() {
		super(...arguments), (this.id = DT++);
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: t, onExitComplete: r } = this.node.presenceContext,
			{ isPresent: n } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === n) return;
		const o = this.node.animationState.setActive("exit", !t);
		r && !t && o.then(() => r(this.id));
	}
	mount() {
		const { register: t } = this.node.presenceContext || {};
		t && (this.unmount = t(this.id));
	}
	unmount() {}
}
const VT = { animation: { Feature: AT }, exit: { Feature: IT } },
	vg = (e, t) => Math.abs(e - t);
function RT(e, t) {
	const r = vg(e.x, t.x),
		n = vg(e.y, t.y);
	return Math.sqrt(r ** 2 + n ** 2);
}
class Aw {
	constructor(
		t,
		r,
		{ transformPagePoint: n, contextWindow: o, dragSnapToOrigin: a = !1 } = {},
	) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.contextWindow = window),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const d = Vc(this.lastMoveEventInfo, this.history),
					f = this.startEvent !== null,
					p = RT(d.offset, { x: 0, y: 0 }) >= 3;
				if (!f && !p) return;
				const { point: g } = d,
					{ timestamp: b } = Qe;
				this.history.push({ ...g, timestamp: b });
				const { onStart: x, onMove: m } = this.handlers;
				f ||
					(x && x(this.lastMoveEvent, d),
					(this.startEvent = this.lastMoveEvent)),
					m && m(this.lastMoveEvent, d);
			}),
			(this.handlePointerMove = (d, f) => {
				(this.lastMoveEvent = d),
					(this.lastMoveEventInfo = Ic(f, this.transformPagePoint)),
					Xe.update(this.updatePoint, !0);
			}),
			(this.handlePointerUp = (d, f) => {
				this.end();
				const { onEnd: p, onSessionEnd: g, resumeAnimation: b } = this.handlers;
				if (
					(this.dragSnapToOrigin && b && b(),
					!(this.lastMoveEvent && this.lastMoveEventInfo))
				)
					return;
				const x = Vc(
					d.type === "pointercancel"
						? this.lastMoveEventInfo
						: Ic(f, this.transformPagePoint),
					this.history,
				);
				this.startEvent && p && p(d, x), g && g(d, x);
			}),
			!Gx(t))
		)
			return;
		(this.dragSnapToOrigin = a),
			(this.handlers = r),
			(this.transformPagePoint = n),
			(this.contextWindow = o || window);
		const i = $u(t),
			s = Ic(i, this.transformPagePoint),
			{ point: l } = s,
			{ timestamp: u } = Qe;
		this.history = [{ ...l, timestamp: u }];
		const { onSessionStart: c } = r;
		c && c(t, Vc(s, this.history)),
			(this.removeListeners = jr(
				Nr(this.contextWindow, "pointermove", this.handlePointerMove),
				Nr(this.contextWindow, "pointerup", this.handlePointerUp),
				Nr(this.contextWindow, "pointercancel", this.handlePointerUp),
			));
	}
	updateHandlers(t) {
		this.handlers = t;
	}
	end() {
		this.removeListeners && this.removeListeners(), En(this.updatePoint);
	}
}
function Ic(e, t) {
	return t ? { point: t(e.point) } : e;
}
function yg(e, t) {
	return { x: e.x - t.x, y: e.y - t.y };
}
function Vc({ point: e }, t) {
	return {
		point: e,
		delta: yg(e, Dw(t)),
		offset: yg(e, LT(t)),
		velocity: FT(t, 0.1),
	};
}
function LT(e) {
	return e[0];
}
function Dw(e) {
	return e[e.length - 1];
}
function FT(e, t) {
	if (e.length < 2) return { x: 0, y: 0 };
	let r = e.length - 1,
		n = null;
	const o = Dw(e);
	for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > yn(t))); ) r--;
	if (!n) return { x: 0, y: 0 };
	const a = _r(o.timestamp - n.timestamp);
	if (a === 0) return { x: 0, y: 0 };
	const i = { x: (o.x - n.x) / a, y: (o.y - n.y) / a };
	return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Vt(e) {
	return e.max - e.min;
}
function Sf(e, t = 0, r = 0.01) {
	return Math.abs(e - t) <= r;
}
function bg(e, t, r, n = 0.5) {
	(e.origin = n),
		(e.originPoint = Ve(t.min, t.max, e.origin)),
		(e.scale = Vt(r) / Vt(t)),
		(Sf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
		(e.translate = Ve(r.min, r.max, e.origin) - e.originPoint),
		(Sf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ja(e, t, r, n) {
	bg(e.x, t.x, r.x, n ? n.originX : void 0),
		bg(e.y, t.y, r.y, n ? n.originY : void 0);
}
function xg(e, t, r) {
	(e.min = r.min + t.min), (e.max = e.min + Vt(t));
}
function OT(e, t, r) {
	xg(e.x, t.x, r.x), xg(e.y, t.y, r.y);
}
function wg(e, t, r) {
	(e.min = t.min - r.min), (e.max = e.min + Vt(t));
}
function ei(e, t, r) {
	wg(e.x, t.x, r.x), wg(e.y, t.y, r.y);
}
function NT(e, { min: t, max: r }, n) {
	return (
		t !== void 0 && e < t
			? (e = n ? Ve(t, e, n.min) : Math.max(e, t))
			: r !== void 0 && e > r && (e = n ? Ve(r, e, n.max) : Math.min(e, r)),
		e
	);
}
function Sg(e, t, r) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
	};
}
function jT(e, { top: t, left: r, bottom: n, right: o }) {
	return { x: Sg(e.x, r, o), y: Sg(e.y, t, n) };
}
function Pg(e, t) {
	let r = t.min - e.min,
		n = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function _T(e, t) {
	return { x: Pg(e.x, t.x), y: Pg(e.y, t.y) };
}
function zT(e, t) {
	let r = 0.5;
	const n = Vt(e),
		o = Vt(t);
	return (
		o > n
			? (r = Pi(t.min, t.max - n, e.min))
			: n > o && (r = Pi(e.min, e.max - o, t.min)),
		Cn(0, 1, r)
	);
}
function BT(e, t) {
	const r = {};
	return (
		t.min !== void 0 && (r.min = t.min - e.min),
		t.max !== void 0 && (r.max = t.max - e.min),
		r
	);
}
const Pf = 0.35;
function KT(e = Pf) {
	return (
		e === !1 ? (e = 0) : e === !0 && (e = Pf),
		{ x: $g(e, "left", "right"), y: $g(e, "top", "bottom") }
	);
}
function $g(e, t, r) {
	return { min: Cg(e, t), max: Cg(e, r) };
}
function Cg(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
const Eg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Lo = () => ({ x: Eg(), y: Eg() }),
	kg = () => ({ min: 0, max: 0 }),
	je = () => ({ x: kg(), y: kg() });
function Ht(e) {
	return [e("x"), e("y")];
}
function Iw({ top: e, left: t, right: r, bottom: n }) {
	return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function HT({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function WT(e, t) {
	if (!t) return e;
	const r = t({ x: e.left, y: e.top }),
		n = t({ x: e.right, y: e.bottom });
	return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function Rc(e) {
	return e === void 0 || e === 1;
}
function $f({ scale: e, scaleX: t, scaleY: r }) {
	return !Rc(e) || !Rc(t) || !Rc(r);
}
function Nn(e) {
	return (
		$f(e) ||
		Vw(e) ||
		e.z ||
		e.rotate ||
		e.rotateX ||
		e.rotateY ||
		e.skewX ||
		e.skewY
	);
}
function Vw(e) {
	return Tg(e.x) || Tg(e.y);
}
function Tg(e) {
	return e && e !== "0%";
}
function Bl(e, t, r) {
	const n = e - r,
		o = t * n;
	return r + o;
}
function Mg(e, t, r, n, o) {
	return o !== void 0 && (e = Bl(e, o, n)), Bl(e, r, n) + t;
}
function Cf(e, t = 0, r = 1, n, o) {
	(e.min = Mg(e.min, t, r, n, o)), (e.max = Mg(e.max, t, r, n, o));
}
function Rw(e, { x: t, y: r }) {
	Cf(e.x, t.translate, t.scale, t.originPoint),
		Cf(e.y, r.translate, r.scale, r.originPoint);
}
function UT(e, t, r, n = !1) {
	const o = r.length;
	if (!o) return;
	t.x = t.y = 1;
	let a, i;
	for (let s = 0; s < o; s++) {
		(a = r[s]), (i = a.projectionDelta);
		const l = a.instance;
		(l && l.style && l.style.display === "contents") ||
			(n &&
				a.options.layoutScroll &&
				a.scroll &&
				a !== a.root &&
				Fo(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
			i && ((t.x *= i.x.scale), (t.y *= i.y.scale), Rw(e, i)),
			n && Nn(a.latestValues) && Fo(e, a.latestValues));
	}
	(t.x = Ag(t.x)), (t.y = Ag(t.y));
}
function Ag(e) {
	return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
		? e
		: 1;
}
function rn(e, t) {
	(e.min = e.min + t), (e.max = e.max + t);
}
function Dg(e, t, [r, n, o]) {
	const a = t[o] !== void 0 ? t[o] : 0.5,
		i = Ve(e.min, e.max, a);
	Cf(e, t[r], t[n], i, t.scale);
}
const ZT = ["x", "scaleX", "originX"],
	GT = ["y", "scaleY", "originY"];
function Fo(e, t) {
	Dg(e.x, t, ZT), Dg(e.y, t, GT);
}
function Lw(e, t) {
	return Iw(WT(e.getBoundingClientRect(), t));
}
function YT(e, t, r) {
	const n = Lw(e, r),
		{ scroll: o } = t;
	return o && (rn(n.x, o.offset.x), rn(n.y, o.offset.y)), n;
}
const Fw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
	XT = new WeakMap();
class qT {
	constructor(t) {
		(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = je()),
			(this.visualElement = t);
	}
	start(t, { snapToCursor: r = !1 } = {}) {
		const { presenceContext: n } = this.visualElement;
		if (n && n.isPresent === !1) return;
		const o = c => {
				const { dragSnapToOrigin: d } = this.getProps();
				d ? this.pauseAnimation() : this.stopAnimation(),
					r && this.snapToCursor($u(c, "page").point);
			},
			a = (c, d) => {
				const { drag: f, dragPropagation: p, onDragStart: g } = this.getProps();
				if (
					f &&
					!p &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = Xx(f)),
					!this.openGlobalLock)
				)
					return;
				(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0),
						(this.visualElement.projection.target = void 0)),
					Ht(x => {
						let m = this.getAxisMotionValue(x).get() || 0;
						if ($r.test(m)) {
							const { projection: v } = this.visualElement;
							if (v && v.layout) {
								const y = v.layout.layoutBox[x];
								y && (m = Vt(y) * (parseFloat(m) / 100));
							}
						}
						this.originPoint[x] = m;
					}),
					g && g(c, d);
				const { animationState: b } = this.visualElement;
				b && b.setActive("whileDrag", !0);
			},
			i = (c, d) => {
				const {
					dragPropagation: f,
					dragDirectionLock: p,
					onDirectionLock: g,
					onDrag: b,
				} = this.getProps();
				if (!f && !this.openGlobalLock) return;
				const { offset: x } = d;
				if (p && this.currentDirection === null) {
					(this.currentDirection = QT(x)),
						this.currentDirection !== null && g && g(this.currentDirection);
					return;
				}
				this.updateAxis("x", d.point, x),
					this.updateAxis("y", d.point, x),
					this.visualElement.render(),
					b && b(c, d);
			},
			s = (c, d) => this.stop(c, d),
			l = () =>
				Ht(c => {
					var d;
					return (
						this.getAnimationState(c) === "paused" &&
						((d = this.getAxisMotionValue(c).animation) === null || d === void 0
							? void 0
							: d.play())
					);
				}),
			{ dragSnapToOrigin: u } = this.getProps();
		this.panSession = new Aw(
			t,
			{
				onSessionStart: o,
				onStart: a,
				onMove: i,
				onSessionEnd: s,
				resumeAnimation: l,
			},
			{
				transformPagePoint: this.visualElement.getTransformPagePoint(),
				dragSnapToOrigin: u,
				contextWindow: Fw(this.visualElement),
			},
		);
	}
	stop(t, r) {
		const n = this.isDragging;
		if ((this.cancel(), !n)) return;
		const { velocity: o } = r;
		this.startAnimation(o);
		const { onDragEnd: a } = this.getProps();
		a && a(t, r);
	}
	cancel() {
		this.isDragging = !1;
		const { projection: t, animationState: r } = this.visualElement;
		t && (t.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0);
		const { dragPropagation: n } = this.getProps();
		!n &&
			this.openGlobalLock &&
			(this.openGlobalLock(), (this.openGlobalLock = null)),
			r && r.setActive("whileDrag", !1);
	}
	updateAxis(t, r, n) {
		const { drag: o } = this.getProps();
		if (!n || !ws(t, o, this.currentDirection)) return;
		const a = this.getAxisMotionValue(t);
		let i = this.originPoint[t] + n[t];
		this.constraints &&
			this.constraints[t] &&
			(i = NT(i, this.constraints[t], this.elastic[t])),
			a.set(i);
	}
	resolveConstraints() {
		var t;
		const { dragConstraints: r, dragElastic: n } = this.getProps(),
			o =
				this.visualElement.projection && !this.visualElement.projection.layout
					? this.visualElement.projection.measure(!1)
					: (t = this.visualElement.projection) === null || t === void 0
					? void 0
					: t.layout,
			a = this.constraints;
		r && Vo(r)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: r && o
			? (this.constraints = jT(o.layoutBox, r))
			: (this.constraints = !1),
			(this.elastic = KT(n)),
			a !== this.constraints &&
				o &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				Ht(i => {
					this.constraints !== !1 &&
						this.getAxisMotionValue(i) &&
						(this.constraints[i] = BT(o.layoutBox[i], this.constraints[i]));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
		if (!t || !Vo(t)) return !1;
		const n = t.current,
			{ projection: o } = this.visualElement;
		if (!o || !o.layout) return !1;
		const a = YT(n, o.root, this.visualElement.getTransformPagePoint());
		let i = _T(o.layout.layoutBox, a);
		if (r) {
			const s = r(HT(i));
			(this.hasMutatedConstraints = !!s), s && (i = Iw(s));
		}
		return i;
	}
	startAnimation(t) {
		const {
				drag: r,
				dragMomentum: n,
				dragElastic: o,
				dragTransition: a,
				dragSnapToOrigin: i,
				onDragTransitionEnd: s,
			} = this.getProps(),
			l = this.constraints || {},
			u = Ht(c => {
				if (!ws(c, r, this.currentDirection)) return;
				let d = (l && l[c]) || {};
				i && (d = { min: 0, max: 0 });
				const f = o ? 200 : 1e6,
					p = o ? 40 : 1e7,
					g = {
						type: "inertia",
						velocity: n ? t[c] : 0,
						bounceStiffness: f,
						bounceDamping: p,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...a,
						...d,
					};
				return this.startAxisValueAnimation(c, g);
			});
		return Promise.all(u).then(s);
	}
	startAxisValueAnimation(t, r) {
		const n = this.getAxisMotionValue(t);
		return n.start(P0(t, n, 0, r, this.visualElement));
	}
	stopAnimation() {
		Ht(t => this.getAxisMotionValue(t).stop());
	}
	pauseAnimation() {
		Ht(t => {
			var r;
			return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
				? void 0
				: r.pause();
		});
	}
	getAnimationState(t) {
		var r;
		return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
			? void 0
			: r.state;
	}
	getAxisMotionValue(t) {
		const r = `_drag${t.toUpperCase()}`,
			n = this.visualElement.getProps(),
			o = n[r];
		return (
			o ||
			this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
		);
	}
	snapToCursor(t) {
		Ht(r => {
			const { drag: n } = this.getProps();
			if (!ws(r, n, this.currentDirection)) return;
			const { projection: o } = this.visualElement,
				a = this.getAxisMotionValue(r);
			if (o && o.layout) {
				const { min: i, max: s } = o.layout.layoutBox[r];
				a.set(t[r] - Ve(i, s, 0.5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: t, dragConstraints: r } = this.getProps(),
			{ projection: n } = this.visualElement;
		if (!Vo(r) || !n || !this.constraints) return;
		this.stopAnimation();
		const o = { x: 0, y: 0 };
		Ht(i => {
			const s = this.getAxisMotionValue(i);
			if (s && this.constraints !== !1) {
				const l = s.get();
				o[i] = zT({ min: l, max: l }, this.constraints[i]);
			}
		});
		const { transformTemplate: a } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = a ? a({}, "") : "none"),
			n.root && n.root.updateScroll(),
			n.updateLayout(),
			this.resolveConstraints(),
			Ht(i => {
				if (!ws(i, t, null)) return;
				const s = this.getAxisMotionValue(i),
					{ min: l, max: u } = this.constraints[i];
				s.set(Ve(l, u, o[i]));
			});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		XT.set(this.visualElement, this);
		const t = this.visualElement.current,
			r = Nr(t, "pointerdown", l => {
				const { drag: u, dragListener: c = !0 } = this.getProps();
				u && c && this.start(l);
			}),
			n = () => {
				const { dragConstraints: l } = this.getProps();
				Vo(l) && (this.constraints = this.resolveRefConstraints());
			},
			{ projection: o } = this.visualElement,
			a = o.addEventListener("measure", n);
		o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
		const i = Fr(window, "resize", () => this.scalePositionWithinConstraints()),
			s = o.addEventListener(
				"didUpdate",
				({ delta: l, hasLayoutChanged: u }) => {
					this.isDragging &&
						u &&
						(Ht(c => {
							const d = this.getAxisMotionValue(c);
							d &&
								((this.originPoint[c] += l[c].translate),
								d.set(d.get() + l[c].translate));
						}),
						this.visualElement.render());
				},
			);
		return () => {
			i(), r(), a(), s && s();
		};
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: r = !1,
				dragDirectionLock: n = !1,
				dragPropagation: o = !1,
				dragConstraints: a = !1,
				dragElastic: i = Pf,
				dragMomentum: s = !0,
			} = t;
		return {
			...t,
			drag: r,
			dragDirectionLock: n,
			dragPropagation: o,
			dragConstraints: a,
			dragElastic: i,
			dragMomentum: s,
		};
	}
}
function ws(e, t, r) {
	return (t === !0 || t === e) && (r === null || r === e);
}
function QT(e, t = 10) {
	let r = null;
	return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class JT extends Dn {
	constructor(t) {
		super(t),
			(this.removeGroupControls = ct),
			(this.removeListeners = ct),
			(this.controls = new qT(t));
	}
	mount() {
		const { dragControls: t } = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || ct);
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}
const Ig = e => (t, r) => {
	e && e(t, r);
};
class eM extends Dn {
	constructor() {
		super(...arguments), (this.removePointerDownListener = ct);
	}
	onPointerDown(t) {
		this.session = new Aw(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: Fw(this.node),
		});
	}
	createPanHandlers() {
		const {
			onPanSessionStart: t,
			onPanStart: r,
			onPan: n,
			onPanEnd: o,
		} = this.node.getProps();
		return {
			onSessionStart: Ig(t),
			onStart: Ig(r),
			onMove: n,
			onEnd: (a, i) => {
				delete this.session, o && o(a, i);
			},
		};
	}
	mount() {
		this.removePointerDownListener = Nr(this.node.current, "pointerdown", t =>
			this.onPointerDown(t),
		);
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}
function tM() {
	const e = h.useContext(wu);
	if (e === null) return [!0, null];
	const { isPresent: t, onExitComplete: r, register: n } = e,
		o = h.useId();
	return h.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
const Ks = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Vg(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Aa = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == "string")
				if (ae.test(e)) e = parseFloat(e);
				else return e;
			const r = Vg(e, t.target.x),
				n = Vg(e, t.target.y);
			return `${r}% ${n}%`;
		},
	},
	rM = {
		correct: (e, { treeScale: t, projectionDelta: r }) => {
			const n = e,
				o = kn.parse(e);
			if (o.length > 5) return n;
			const a = kn.createTransformer(e),
				i = typeof o[0] != "number" ? 1 : 0,
				s = r.x.scale * t.x,
				l = r.y.scale * t.y;
			(o[0 + i] /= s), (o[1 + i] /= l);
			const u = Ve(s, l, 0.5);
			return (
				typeof o[2 + i] == "number" && (o[2 + i] /= u),
				typeof o[3 + i] == "number" && (o[3 + i] /= u),
				a(o)
			);
		},
	};
class nM extends h.Component {
	componentDidMount() {
		const {
				visualElement: t,
				layoutGroup: r,
				switchLayoutGroup: n,
				layoutId: o,
			} = this.props,
			{ projection: a } = t;
		rE(oM),
			a &&
				(r.group && r.group.add(a),
				n && n.register && o && n.register(a),
				a.root.didUpdate(),
				a.addEventListener("animationComplete", () => {
					this.safeToRemove();
				}),
				a.setOptions({
					...a.options,
					onExitComplete: () => this.safeToRemove(),
				})),
			(Ks.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(t) {
		const {
				layoutDependency: r,
				visualElement: n,
				drag: o,
				isPresent: a,
			} = this.props,
			i = n.projection;
		return (
			i &&
				((i.isPresent = a),
				o || t.layoutDependency !== r || r === void 0
					? i.willUpdate()
					: this.safeToRemove(),
				t.isPresent !== a &&
					(a
						? i.promote()
						: i.relegate() ||
						  Xe.postRender(() => {
								const s = i.getStack();
								(!s || !s.members.length) && this.safeToRemove();
						  }))),
			null
		);
	}
	componentDidUpdate() {
		const { projection: t } = this.props.visualElement;
		t &&
			(t.root.didUpdate(),
			r0.postRender(() => {
				!t.currentAnimation && t.isLead() && this.safeToRemove();
			}));
	}
	componentWillUnmount() {
		const {
				visualElement: t,
				layoutGroup: r,
				switchLayoutGroup: n,
			} = this.props,
			{ projection: o } = t;
		o &&
			(o.scheduleCheckAfterUnmount(),
			r && r.group && r.group.remove(o),
			n && n.deregister && n.deregister(o));
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props;
		t && t();
	}
	render() {
		return null;
	}
}
function Ow(e) {
	const [t, r] = tM(),
		n = h.useContext(Si);
	return S.jsx(nM, {
		...e,
		layoutGroup: n,
		switchLayoutGroup: h.useContext(Rx),
		isPresent: t,
		safeToRemove: r,
	});
}
const oM = {
		borderRadius: {
			...Aa,
			applyTo: [
				"borderTopLeftRadius",
				"borderTopRightRadius",
				"borderBottomLeftRadius",
				"borderBottomRightRadius",
			],
		},
		borderTopLeftRadius: Aa,
		borderTopRightRadius: Aa,
		borderBottomLeftRadius: Aa,
		borderBottomRightRadius: Aa,
		boxShadow: rM,
	},
	Nw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
	aM = Nw.length,
	Rg = e => (typeof e == "string" ? parseFloat(e) : e),
	Lg = e => typeof e == "number" || ae.test(e);
function iM(e, t, r, n, o, a) {
	o
		? ((e.opacity = Ve(0, r.opacity !== void 0 ? r.opacity : 1, sM(n))),
		  (e.opacityExit = Ve(t.opacity !== void 0 ? t.opacity : 1, 0, lM(n))))
		: a &&
		  (e.opacity = Ve(
				t.opacity !== void 0 ? t.opacity : 1,
				r.opacity !== void 0 ? r.opacity : 1,
				n,
		  ));
	for (let i = 0; i < aM; i++) {
		const s = `border${Nw[i]}Radius`;
		let l = Fg(t, s),
			u = Fg(r, s);
		if (l === void 0 && u === void 0) continue;
		l || (l = 0),
			u || (u = 0),
			l === 0 || u === 0 || Lg(l) === Lg(u)
				? ((e[s] = Math.max(Ve(Rg(l), Rg(u), n), 0)),
				  ($r.test(u) || $r.test(l)) && (e[s] += "%"))
				: (e[s] = u);
	}
	(t.rotate || r.rotate) && (e.rotate = Ve(t.rotate || 0, r.rotate || 0, n));
}
function Fg(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const sM = jw(0, 0.5, Sw),
	lM = jw(0.5, 0.95, ct);
function jw(e, t, r) {
	return n => (n < e ? 0 : n > t ? 1 : r(Pi(e, t, n)));
}
function Og(e, t) {
	(e.min = t.min), (e.max = t.max);
}
function Bt(e, t) {
	Og(e.x, t.x), Og(e.y, t.y);
}
function Ng(e, t, r, n, o) {
	return (
		(e -= t), (e = Bl(e, 1 / r, n)), o !== void 0 && (e = Bl(e, 1 / o, n)), e
	);
}
function uM(e, t = 0, r = 1, n = 0.5, o, a = e, i = e) {
	if (
		($r.test(t) &&
			((t = parseFloat(t)), (t = Ve(i.min, i.max, t / 100) - i.min)),
		typeof t != "number")
	)
		return;
	let s = Ve(a.min, a.max, n);
	e === a && (s -= t),
		(e.min = Ng(e.min, t, r, s, o)),
		(e.max = Ng(e.max, t, r, s, o));
}
function jg(e, t, [r, n, o], a, i) {
	uM(e, t[r], t[n], t[o], t.scale, a, i);
}
const cM = ["x", "scaleX", "originX"],
	dM = ["y", "scaleY", "originY"];
function _g(e, t, r, n) {
	jg(e.x, t, cM, r ? r.x : void 0, n ? n.x : void 0),
		jg(e.y, t, dM, r ? r.y : void 0, n ? n.y : void 0);
}
function zg(e) {
	return e.translate === 0 && e.scale === 1;
}
function _w(e) {
	return zg(e.x) && zg(e.y);
}
function fM(e, t) {
	return (
		e.x.min === t.x.min &&
		e.x.max === t.x.max &&
		e.y.min === t.y.min &&
		e.y.max === t.y.max
	);
}
function zw(e, t) {
	return (
		Math.round(e.x.min) === Math.round(t.x.min) &&
		Math.round(e.x.max) === Math.round(t.x.max) &&
		Math.round(e.y.min) === Math.round(t.y.min) &&
		Math.round(e.y.max) === Math.round(t.y.max)
	);
}
function Bg(e) {
	return Vt(e.x) / Vt(e.y);
}
class pM {
	constructor() {
		this.members = [];
	}
	add(t) {
		$0(this.members, t), t.scheduleRender();
	}
	remove(t) {
		if (
			(C0(this.members, t),
			t === this.prevLead && (this.prevLead = void 0),
			t === this.lead)
		) {
			const r = this.members[this.members.length - 1];
			r && this.promote(r);
		}
	}
	relegate(t) {
		const r = this.members.findIndex(o => t === o);
		if (r === 0) return !1;
		let n;
		for (let o = r; o >= 0; o--) {
			const a = this.members[o];
			if (a.isPresent !== !1) {
				n = a;
				break;
			}
		}
		return n ? (this.promote(n), !0) : !1;
	}
	promote(t, r) {
		const n = this.lead;
		if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
			n.instance && n.scheduleRender(),
				t.scheduleRender(),
				(t.resumeFrom = n),
				r && (t.resumeFrom.preserveOpacity = !0),
				n.snapshot &&
					((t.snapshot = n.snapshot),
					(t.snapshot.latestValues = n.animationValues || n.latestValues)),
				t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
			const { crossfade: o } = t.options;
			o === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach(t => {
			const { options: r, resumingFrom: n } = t;
			r.onExitComplete && r.onExitComplete(),
				n && n.options.onExitComplete && n.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach(t => {
			t.instance && t.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
}
function Kg(e, t, r) {
	let n = "";
	const o = e.x.translate / t.x,
		a = e.y.translate / t.y,
		i = (r == null ? void 0 : r.z) || 0;
	if (
		((o || a || i) && (n = `translate3d(${o}px, ${a}px, ${i}px) `),
		(t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
		r)
	) {
		const {
			transformPerspective: u,
			rotate: c,
			rotateX: d,
			rotateY: f,
			skewX: p,
			skewY: g,
		} = r;
		u && (n = `perspective(${u}px) ${n}`),
			c && (n += `rotate(${c}deg) `),
			d && (n += `rotateX(${d}deg) `),
			f && (n += `rotateY(${f}deg) `),
			p && (n += `skewX(${p}deg) `),
			g && (n += `skewY(${g}deg) `);
	}
	const s = e.x.scale * t.x,
		l = e.y.scale * t.y;
	return (s !== 1 || l !== 1) && (n += `scale(${s}, ${l})`), n || "none";
}
const hM = (e, t) => e.depth - t.depth;
class mM {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(t) {
		$0(this.children, t), (this.isDirty = !0);
	}
	remove(t) {
		C0(this.children, t), (this.isDirty = !0);
	}
	forEach(t) {
		this.isDirty && this.children.sort(hM),
			(this.isDirty = !1),
			this.children.forEach(t);
	}
}
function gM(e, t) {
	const r = bn.now(),
		n = ({ timestamp: o }) => {
			const a = o - r;
			a >= t && (En(n), e(a - t));
		};
	return Xe.read(n, !0), () => En(n);
}
function vM(e) {
	window.MotionDebug && window.MotionDebug.record(e);
}
function yM(e) {
	return e instanceof SVGElement && e.tagName !== "svg";
}
function bM(e, t, r) {
	const n = ut(e) ? e : $i(e);
	return n.start(P0("", n, t, r)), n.animation;
}
const Lc = ["", "X", "Y", "Z"],
	xM = { visibility: "hidden" },
	Hg = 1e3;
let wM = 0;
const jn = {
	type: "projectionFrame",
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0,
};
function Fc(e, t, r, n) {
	const { latestValues: o } = t;
	o[e] && ((r[e] = o[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
}
function Bw({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: r,
	checkIsScrollRoot: n,
	resetTransform: o,
}) {
	return class {
		constructor(i = {}, s = t == null ? void 0 : t()) {
			(this.id = wM++),
				(this.animationId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isProjectionDirty = !1),
				(this.isSharedProjectionDirty = !1),
				(this.isTransformDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.hasTreeAnimated = !1),
				(this.updateScheduled = !1),
				(this.projectionUpdateScheduled = !1),
				(this.checkUpdateFailed = () => {
					this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
				}),
				(this.updateProjection = () => {
					(this.projectionUpdateScheduled = !1),
						(jn.totalNodes =
							jn.resolvedTargetDeltas =
							jn.recalculatedProjection =
								0),
						this.nodes.forEach($M),
						this.nodes.forEach(MM),
						this.nodes.forEach(AM),
						this.nodes.forEach(CM),
						vM(jn);
				}),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = i),
				(this.root = s ? s.root || s : this),
				(this.path = s ? [...s.path, s] : []),
				(this.parent = s),
				(this.depth = s ? s.depth + 1 : 0);
			for (let l = 0; l < this.path.length; l++)
				this.path[l].shouldResetTransform = !0;
			this.root === this && (this.nodes = new mM());
		}
		addEventListener(i, s) {
			return (
				this.eventHandlers.has(i) || this.eventHandlers.set(i, new E0()),
				this.eventHandlers.get(i).add(s)
			);
		}
		notifyListeners(i, ...s) {
			const l = this.eventHandlers.get(i);
			l && l.notify(...s);
		}
		hasListeners(i) {
			return this.eventHandlers.has(i);
		}
		mount(i, s = this.root.hasTreeAnimated) {
			if (this.instance) return;
			(this.isSVG = yM(i)), (this.instance = i);
			const { layoutId: l, layout: u, visualElement: c } = this.options;
			if (
				(c && !c.current && c.mount(i),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				s && (u || l) && (this.isLayoutDirty = !0),
				e)
			) {
				let d;
				const f = () => (this.root.updateBlockedByResize = !1);
				e(i, () => {
					(this.root.updateBlockedByResize = !0),
						d && d(),
						(d = gM(f, 250)),
						Ks.hasAnimatedSinceResize &&
							((Ks.hasAnimatedSinceResize = !1), this.nodes.forEach(Ug));
				});
			}
			l && this.root.registerSharedNode(l, this),
				this.options.animate !== !1 &&
					c &&
					(l || u) &&
					this.addEventListener(
						"didUpdate",
						({
							delta: d,
							hasLayoutChanged: f,
							hasRelativeTargetChanged: p,
							layout: g,
						}) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const b =
									this.options.transition || c.getDefaultTransition() || LM,
								{ onLayoutAnimationStart: x, onLayoutAnimationComplete: m } =
									c.getProps(),
								v = !this.targetLayout || !zw(this.targetLayout, g) || p,
								y = !f && p;
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								y ||
								(f && (v || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(d, y);
								const P = { ...h0(b, "layout"), onPlay: x, onComplete: m };
								(c.shouldReduceMotion || this.options.layoutRoot) &&
									((P.delay = 0), (P.type = !1)),
									this.startAnimation(P);
							} else
								f || Ug(this),
									this.isLead() &&
										this.options.onExitComplete &&
										this.options.onExitComplete();
							this.targetLayout = g;
						},
					);
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const i = this.getStack();
			i && i.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				En(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return (
				this.isAnimationBlocked ||
				(this.parent && this.parent.isTreeAnimationBlocked()) ||
				!1
			);
		}
		startUpdate() {
			this.isUpdateBlocked() ||
				((this.isUpdating = !0),
				this.nodes && this.nodes.forEach(DM),
				this.animationId++);
		}
		getTransformTemplate() {
			const { visualElement: i } = this.options;
			return i && i.getProps().transformTemplate;
		}
		willUpdate(i = !0) {
			if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (
				(!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
			)
				return;
			this.isLayoutDirty = !0;
			for (let c = 0; c < this.path.length; c++) {
				const d = this.path[c];
				(d.shouldResetTransform = !0),
					d.updateScroll("snapshot"),
					d.options.layoutRoot && d.willUpdate(!1);
			}
			const { layoutId: s, layout: l } = this.options;
			if (s === void 0 && !l) return;
			const u = this.getTransformTemplate();
			(this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
				this.updateSnapshot(),
				i && this.notifyListeners("willUpdate");
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wg);
				return;
			}
			this.isUpdating || this.nodes.forEach(kM),
				(this.isUpdating = !1),
				window.HandoffCancelAllAnimations &&
					window.HandoffCancelAllAnimations(),
				this.nodes.forEach(TM),
				this.nodes.forEach(SM),
				this.nodes.forEach(PM),
				this.clearAllSnapshots();
			const s = bn.now();
			(Qe.delta = Cn(0, 1e3 / 60, s - Qe.timestamp)),
				(Qe.timestamp = s),
				(Qe.isProcessing = !0),
				Cc.update.process(Qe),
				Cc.preRender.process(Qe),
				Cc.render.process(Qe),
				(Qe.isProcessing = !1);
		}
		didUpdate() {
			this.updateScheduled ||
				((this.updateScheduled = !0), r0.read(() => this.update()));
		}
		clearAllSnapshots() {
			this.nodes.forEach(EM), this.sharedNodes.forEach(IM);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled ||
				((this.projectionUpdateScheduled = !0),
				Xe.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			Xe.postRender(() => {
				this.isLayoutDirty
					? this.root.didUpdate()
					: this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure());
		}
		updateLayout() {
			if (
				!this.instance ||
				(this.updateScroll(),
				!(this.options.alwaysMeasureLayout && this.isLead()) &&
					!this.isLayoutDirty)
			)
				return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
			const i = this.layout;
			(this.layout = this.measure(!1)),
				(this.layoutCorrected = je()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement: s } = this.options;
			s &&
				s.notify(
					"LayoutMeasure",
					this.layout.layoutBox,
					i ? i.layoutBox : void 0,
				);
		}
		updateScroll(i = "measure") {
			let s = !!(this.options.layoutScroll && this.instance);
			this.scroll &&
				this.scroll.animationId === this.root.animationId &&
				this.scroll.phase === i &&
				(s = !1),
				s &&
					(this.scroll = {
						animationId: this.root.animationId,
						phase: i,
						isRoot: n(this.instance),
						offset: r(this.instance),
					});
		}
		resetTransform() {
			if (!o) return;
			const i = this.isLayoutDirty || this.shouldResetTransform,
				s = this.projectionDelta && !_w(this.projectionDelta),
				l = this.getTransformTemplate(),
				u = l ? l(this.latestValues, "") : void 0,
				c = u !== this.prevTransformTemplateValue;
			i &&
				(s || Nn(this.latestValues) || c) &&
				(o(this.instance, u),
				(this.shouldResetTransform = !1),
				this.scheduleRender());
		}
		measure(i = !0) {
			const s = this.measurePageBox();
			let l = this.removeElementScroll(s);
			return (
				i && (l = this.removeTransform(l)),
				FM(l),
				{
					animationId: this.root.animationId,
					measuredBox: s,
					layoutBox: l,
					latestValues: {},
					source: this.id,
				}
			);
		}
		measurePageBox() {
			const { visualElement: i } = this.options;
			if (!i) return je();
			const s = i.measureViewportBox(),
				{ scroll: l } = this.root;
			return l && (rn(s.x, l.offset.x), rn(s.y, l.offset.y)), s;
		}
		removeElementScroll(i) {
			const s = je();
			Bt(s, i);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l],
					{ scroll: c, options: d } = u;
				if (u !== this.root && c && d.layoutScroll) {
					if (c.isRoot) {
						Bt(s, i);
						const { scroll: f } = this.root;
						f && (rn(s.x, -f.offset.x), rn(s.y, -f.offset.y));
					}
					rn(s.x, c.offset.x), rn(s.y, c.offset.y);
				}
			}
			return s;
		}
		applyTransform(i, s = !1) {
			const l = je();
			Bt(l, i);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				!s &&
					c.options.layoutScroll &&
					c.scroll &&
					c !== c.root &&
					Fo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
					Nn(c.latestValues) && Fo(l, c.latestValues);
			}
			return Nn(this.latestValues) && Fo(l, this.latestValues), l;
		}
		removeTransform(i) {
			const s = je();
			Bt(s, i);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l];
				if (!u.instance || !Nn(u.latestValues)) continue;
				$f(u.latestValues) && u.updateSnapshot();
				const c = je(),
					d = u.measurePageBox();
				Bt(c, d),
					_g(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
			}
			return Nn(this.latestValues) && _g(s, this.latestValues), s;
		}
		setTargetDelta(i) {
			(this.targetDelta = i),
				this.root.scheduleUpdateProjection(),
				(this.isProjectionDirty = !0);
		}
		setOptions(i) {
			this.options = {
				...this.options,
				...i,
				crossfade: i.crossfade !== void 0 ? i.crossfade : !0,
			};
		}
		clearMeasurements() {
			(this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1);
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent &&
				this.relativeParent.resolvedRelativeTargetAt !== Qe.timestamp &&
				this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(i = !1) {
			var s;
			const l = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
				this.isSharedProjectionDirty ||
					(this.isSharedProjectionDirty = l.isSharedProjectionDirty);
			const u = !!this.resumingFrom || this !== l;
			if (
				!(
					i ||
					(u && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					(!((s = this.parent) === null || s === void 0) &&
						s.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget
				)
			)
				return;
			const { layout: d, layoutId: f } = this.options;
			if (!(!this.layout || !(d || f))) {
				if (
					((this.resolvedRelativeTargetAt = Qe.timestamp),
					!this.targetDelta && !this.relativeTarget)
				) {
					const p = this.getClosestProjectingParent();
					p && p.layout && this.animationProgress !== 1
						? ((this.relativeParent = p),
						  this.forceRelativeParentToResolveTarget(),
						  (this.relativeTarget = je()),
						  (this.relativeTargetOrigin = je()),
						  ei(
								this.relativeTargetOrigin,
								this.layout.layoutBox,
								p.layout.layoutBox,
						  ),
						  Bt(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target ||
							((this.target = je()), (this.targetWithTransforms = je())),
						this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.relativeParent &&
						this.relativeParent.target
							? (this.forceRelativeParentToResolveTarget(),
							  OT(
									this.target,
									this.relativeTarget,
									this.relativeParent.target,
							  ))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: Bt(this.target, this.layout.layoutBox),
							  Rw(this.target, this.targetDelta))
							: Bt(this.target, this.layout.layoutBox),
						this.attemptToResolveRelativeTarget)
					) {
						this.attemptToResolveRelativeTarget = !1;
						const p = this.getClosestProjectingParent();
						p &&
						!!p.resumingFrom == !!this.resumingFrom &&
						!p.options.layoutScroll &&
						p.target &&
						this.animationProgress !== 1
							? ((this.relativeParent = p),
							  this.forceRelativeParentToResolveTarget(),
							  (this.relativeTarget = je()),
							  (this.relativeTargetOrigin = je()),
							  ei(this.relativeTargetOrigin, this.target, p.target),
							  Bt(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					jn.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (
				!(
					!this.parent ||
					$f(this.parent.latestValues) ||
					Vw(this.parent.latestValues)
				)
			)
				return this.parent.isProjecting()
					? this.parent
					: this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!(
				(this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
				this.layout
			);
		}
		calcProjection() {
			var i;
			const s = this.getLead(),
				l = !!this.resumingFrom || this !== s;
			let u = !0;
			if (
				((this.isProjectionDirty ||
					(!((i = this.parent) === null || i === void 0) &&
						i.isProjectionDirty)) &&
					(u = !1),
				l &&
					(this.isSharedProjectionDirty || this.isTransformDirty) &&
					(u = !1),
				this.resolvedRelativeTargetAt === Qe.timestamp && (u = !1),
				u)
			)
				return;
			const { layout: c, layoutId: d } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating ||
					(this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(c || d))
			)
				return;
			Bt(this.layoutCorrected, this.layout.layoutBox);
			const f = this.treeScale.x,
				p = this.treeScale.y;
			UT(this.layoutCorrected, this.treeScale, this.path, l),
				s.layout &&
					!s.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					((s.target = s.layout.layoutBox), (s.targetWithTransforms = je()));
			const { target: g } = s;
			if (!g) {
				this.projectionTransform &&
					((this.projectionDelta = Lo()),
					(this.projectionTransform = "none"),
					this.scheduleRender());
				return;
			}
			this.projectionDelta ||
				((this.projectionDelta = Lo()),
				(this.projectionDeltaWithTransform = Lo()));
			const b = this.projectionTransform;
			Ja(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
				(this.projectionTransform = Kg(this.projectionDelta, this.treeScale)),
				(this.projectionTransform !== b ||
					this.treeScale.x !== f ||
					this.treeScale.y !== p) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners("projectionUpdate", g)),
				jn.recalculatedProjection++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(i = !0) {
			if ((this.options.scheduleRender && this.options.scheduleRender(), i)) {
				const s = this.getStack();
				s && s.scheduleRender();
			}
			this.resumingFrom &&
				!this.resumingFrom.instance &&
				(this.resumingFrom = void 0);
		}
		setAnimationOrigin(i, s = !1) {
			const l = this.snapshot,
				u = l ? l.latestValues : {},
				c = { ...this.latestValues },
				d = Lo();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !s);
			const f = je(),
				p = l ? l.source : void 0,
				g = this.layout ? this.layout.source : void 0,
				b = p !== g,
				x = this.getStack(),
				m = !x || x.members.length <= 1,
				v = !!(b && !m && this.options.crossfade === !0 && !this.path.some(RM));
			this.animationProgress = 0;
			let y;
			(this.mixTargetDelta = P => {
				const C = P / 1e3;
				Zg(d.x, i.x, C),
					Zg(d.y, i.y, C),
					this.setTargetDelta(d),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(ei(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						VM(this.relativeTarget, this.relativeTargetOrigin, f, C),
						y && fM(this.relativeTarget, y) && (this.isProjectionDirty = !1),
						y || (y = je()),
						Bt(y, this.relativeTarget)),
					b &&
						((this.animationValues = c), iM(c, u, this.latestValues, C, v, m)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = C);
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(i) {
			this.notifyListeners("animationStart"),
				this.currentAnimation && this.currentAnimation.stop(),
				this.resumingFrom &&
					this.resumingFrom.currentAnimation &&
					this.resumingFrom.currentAnimation.stop(),
				this.pendingAnimation &&
					(En(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = Xe.update(() => {
					(Ks.hasAnimatedSinceResize = !0),
						(this.currentAnimation = bM(0, Hg, {
							...i,
							onUpdate: s => {
								this.mixTargetDelta(s), i.onUpdate && i.onUpdate(s);
							},
							onComplete: () => {
								i.onComplete && i.onComplete(), this.completeAnimation();
							},
						})),
						this.resumingFrom &&
							(this.resumingFrom.currentAnimation = this.currentAnimation),
						(this.pendingAnimation = void 0);
				}));
		}
		completeAnimation() {
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0),
				(this.resumingFrom.preserveOpacity = void 0));
			const i = this.getStack();
			i && i.exitAnimationComplete(),
				(this.resumingFrom =
					this.currentAnimation =
					this.animationValues =
						void 0),
				this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation &&
				(this.mixTargetDelta && this.mixTargetDelta(Hg),
				this.currentAnimation.stop()),
				this.completeAnimation();
		}
		applyTransformsToTarget() {
			const i = this.getLead();
			let {
				targetWithTransforms: s,
				target: l,
				layout: u,
				latestValues: c,
			} = i;
			if (!(!s || !l || !u)) {
				if (
					this !== i &&
					this.layout &&
					u &&
					Kw(this.options.animationType, this.layout.layoutBox, u.layoutBox)
				) {
					l = this.target || je();
					const d = Vt(this.layout.layoutBox.x);
					(l.x.min = i.target.x.min), (l.x.max = l.x.min + d);
					const f = Vt(this.layout.layoutBox.y);
					(l.y.min = i.target.y.min), (l.y.max = l.y.min + f);
				}
				Bt(s, l),
					Fo(s, c),
					Ja(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
			}
		}
		registerSharedNode(i, s) {
			this.sharedNodes.has(i) || this.sharedNodes.set(i, new pM()),
				this.sharedNodes.get(i).add(s);
			const u = s.options.initialPromotionConfig;
			s.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity:
					u && u.shouldPreserveFollowOpacity
						? u.shouldPreserveFollowOpacity(s)
						: void 0,
			});
		}
		isLead() {
			const i = this.getStack();
			return i ? i.lead === this : !0;
		}
		getLead() {
			var i;
			const { layoutId: s } = this.options;
			return s
				? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) ||
						this
				: this;
		}
		getPrevLead() {
			var i;
			const { layoutId: s } = this.options;
			return s
				? (i = this.getStack()) === null || i === void 0
					? void 0
					: i.prevLead
				: void 0;
		}
		getStack() {
			const { layoutId: i } = this.options;
			if (i) return this.root.sharedNodes.get(i);
		}
		promote({ needsReset: i, transition: s, preserveFollowOpacity: l } = {}) {
			const u = this.getStack();
			u && u.promote(this, l),
				i && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				s && this.setOptions({ transition: s });
		}
		relegate() {
			const i = this.getStack();
			return i ? i.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			const { visualElement: i } = this.options;
			if (!i) return;
			let s = !1;
			const { latestValues: l } = i;
			if (
				((l.z ||
					l.rotate ||
					l.rotateX ||
					l.rotateY ||
					l.rotateZ ||
					l.skewX ||
					l.skewY) &&
					(s = !0),
				!s)
			)
				return;
			const u = {};
			l.z && Fc("z", i, u, this.animationValues);
			for (let c = 0; c < Lc.length; c++)
				Fc(`rotate${Lc[c]}`, i, u, this.animationValues),
					Fc(`skew${Lc[c]}`, i, u, this.animationValues);
			i.render();
			for (const c in u)
				i.setStaticValue(c, u[c]),
					this.animationValues && (this.animationValues[c] = u[c]);
			i.scheduleRender();
		}
		getProjectionStyles(i) {
			var s, l;
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return xM;
			const u = { visibility: "" },
				c = this.getTransformTemplate();
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(u.opacity = ""),
					(u.pointerEvents = zs(i == null ? void 0 : i.pointerEvents) || ""),
					(u.transform = c ? c(this.latestValues, "") : "none"),
					u
				);
			const d = this.getLead();
			if (!this.projectionDelta || !this.layout || !d.target) {
				const b = {};
				return (
					this.options.layoutId &&
						((b.opacity =
							this.latestValues.opacity !== void 0
								? this.latestValues.opacity
								: 1),
						(b.pointerEvents = zs(i == null ? void 0 : i.pointerEvents) || "")),
					this.hasProjected &&
						!Nn(this.latestValues) &&
						((b.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
					b
				);
			}
			const f = d.animationValues || d.latestValues;
			this.applyTransformsToTarget(),
				(u.transform = Kg(
					this.projectionDeltaWithTransform,
					this.treeScale,
					f,
				)),
				c && (u.transform = c(f, u.transform));
			const { x: p, y: g } = this.projectionDelta;
			(u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`),
				d.animationValues
					? (u.opacity =
							d === this
								? (l =
										(s = f.opacity) !== null && s !== void 0
											? s
											: this.latestValues.opacity) !== null && l !== void 0
									? l
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: f.opacityExit)
					: (u.opacity =
							d === this
								? f.opacity !== void 0
									? f.opacity
									: ""
								: f.opacityExit !== void 0
								? f.opacityExit
								: 0);
			for (const b in Fl) {
				if (f[b] === void 0) continue;
				const { correct: x, applyTo: m } = Fl[b],
					v = u.transform === "none" ? f[b] : x(f[b], d);
				if (m) {
					const y = m.length;
					for (let P = 0; P < y; P++) u[m[P]] = v;
				} else u[b] = v;
			}
			return (
				this.options.layoutId &&
					(u.pointerEvents =
						d === this
							? zs(i == null ? void 0 : i.pointerEvents) || ""
							: "none"),
				u
			);
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach(i => {
				var s;
				return (s = i.currentAnimation) === null || s === void 0
					? void 0
					: s.stop();
			}),
				this.root.nodes.forEach(Wg),
				this.root.sharedNodes.clear();
		}
	};
}
function SM(e) {
	e.updateLayout();
}
function PM(e) {
	var t;
	const r =
		((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
		e.snapshot;
	if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
		const { layoutBox: n, measuredBox: o } = e.layout,
			{ animationType: a } = e.options,
			i = r.source !== e.layout.source;
		a === "size"
			? Ht(d => {
					const f = i ? r.measuredBox[d] : r.layoutBox[d],
						p = Vt(f);
					(f.min = n[d].min), (f.max = f.min + p);
			  })
			: Kw(a, r.layoutBox, n) &&
			  Ht(d => {
					const f = i ? r.measuredBox[d] : r.layoutBox[d],
						p = Vt(n[d]);
					(f.max = f.min + p),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0),
							(e.relativeTarget[d].max = e.relativeTarget[d].min + p));
			  });
		const s = Lo();
		Ja(s, n, r.layoutBox);
		const l = Lo();
		i ? Ja(l, e.applyTransform(o, !0), r.measuredBox) : Ja(l, n, r.layoutBox);
		const u = !_w(s);
		let c = !1;
		if (!e.resumeFrom) {
			const d = e.getClosestProjectingParent();
			if (d && !d.resumeFrom) {
				const { snapshot: f, layout: p } = d;
				if (f && p) {
					const g = je();
					ei(g, r.layoutBox, f.layoutBox);
					const b = je();
					ei(b, n, p.layoutBox),
						zw(g, b) || (c = !0),
						d.options.layoutRoot &&
							((e.relativeTarget = b),
							(e.relativeTargetOrigin = g),
							(e.relativeParent = d));
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: r,
			delta: l,
			layoutDelta: s,
			hasLayoutChanged: u,
			hasRelativeTargetChanged: c,
		});
	} else if (e.isLead()) {
		const { onExitComplete: n } = e.options;
		n && n();
	}
	e.options.transition = void 0;
}
function $M(e) {
	jn.totalNodes++,
		e.parent &&
			(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
			e.isSharedProjectionDirty ||
				(e.isSharedProjectionDirty = !!(
					e.isProjectionDirty ||
					e.parent.isProjectionDirty ||
					e.parent.isSharedProjectionDirty
				)),
			e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function CM(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function EM(e) {
	e.clearSnapshot();
}
function Wg(e) {
	e.clearMeasurements();
}
function kM(e) {
	e.isLayoutDirty = !1;
}
function TM(e) {
	const { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
		e.resetTransform();
}
function Ug(e) {
	e.finishAnimation(),
		(e.targetDelta = e.relativeTarget = e.target = void 0),
		(e.isProjectionDirty = !0);
}
function MM(e) {
	e.resolveTargetDelta();
}
function AM(e) {
	e.calcProjection();
}
function DM(e) {
	e.resetSkewAndRotation();
}
function IM(e) {
	e.removeLeadSnapshot();
}
function Zg(e, t, r) {
	(e.translate = Ve(t.translate, 0, r)),
		(e.scale = Ve(t.scale, 1, r)),
		(e.origin = t.origin),
		(e.originPoint = t.originPoint);
}
function Gg(e, t, r, n) {
	(e.min = Ve(t.min, r.min, n)), (e.max = Ve(t.max, r.max, n));
}
function VM(e, t, r, n) {
	Gg(e.x, t.x, r.x, n), Gg(e.y, t.y, r.y, n);
}
function RM(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const LM = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	Yg = e =>
		typeof navigator < "u" &&
		navigator.userAgent &&
		navigator.userAgent.toLowerCase().includes(e),
	Xg = Yg("applewebkit/") && !Yg("chrome/") ? Math.round : ct;
function qg(e) {
	(e.min = Xg(e.min)), (e.max = Xg(e.max));
}
function FM(e) {
	qg(e.x), qg(e.y);
}
function Kw(e, t, r) {
	return (
		e === "position" || (e === "preserve-aspect" && !Sf(Bg(t), Bg(r), 0.2))
	);
}
const OM = Bw({
		attachResizeListener: (e, t) => Fr(e, "resize", t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	Oc = { current: void 0 },
	Hw = Bw({
		measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!Oc.current) {
				const e = new OM({});
				e.mount(window), e.setOptions({ layoutScroll: !0 }), (Oc.current = e);
			}
			return Oc.current;
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : "none";
		},
		checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed",
	}),
	NM = {
		pan: { Feature: eM },
		drag: { Feature: JT, ProjectionNode: Hw, MeasureLayout: Ow },
	},
	Ef = { current: null },
	Ww = { current: !1 };
function jM() {
	if (((Ww.current = !0), !!Qp))
		if (window.matchMedia) {
			const e = window.matchMedia("(prefers-reduced-motion)"),
				t = () => (Ef.current = e.matches);
			e.addListener(t), t();
		} else Ef.current = !1;
}
function _M(e, t, r) {
	const { willChange: n } = t;
	for (const o in t) {
		const a = t[o],
			i = r[o];
		if (ut(a)) e.addValue(o, a), zl(n) && n.add(o);
		else if (ut(i)) e.addValue(o, $i(a, { owner: e })), zl(n) && n.remove(o);
		else if (i !== a)
			if (e.hasValue(o)) {
				const s = e.getValue(o);
				s.liveStyle === !0 ? s.jump(a) : s.hasAnimated || s.set(a);
			} else {
				const s = e.getStaticValue(o);
				e.addValue(o, $i(s !== void 0 ? s : a, { owner: e }));
			}
	}
	for (const o in r) t[o] === void 0 && e.removeValue(o);
	return t;
}
const Qg = new WeakMap(),
	zM = [...ow, it, kn],
	BM = e => zM.find(nw(e)),
	Uw = Object.keys(wi),
	KM = Uw.length,
	Jg = [
		"AnimationStart",
		"AnimationComplete",
		"Update",
		"BeforeLayoutMeasure",
		"LayoutMeasure",
		"LayoutAnimationStart",
		"LayoutAnimationComplete",
	],
	HM = o0.length;
function Zw(e) {
	if (e) return e.options.allowProjection !== !1 ? e.projection : Zw(e.parent);
}
class WM {
	scrapeMotionValuesFromProps(t, r, n) {
		return {};
	}
	constructor(
		{
			parent: t,
			props: r,
			presenceContext: n,
			reducedMotionConfig: o,
			blockInitialAnimation: a,
			visualState: i,
		},
		s = {},
	) {
		(this.resolveKeyframes = (f, p, g, b) =>
			new this.KeyframeResolver(f, p, g, b, this)),
			(this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.values = new Map()),
			(this.KeyframeResolver = m0),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () => this.notify("Update", this.latestValues)),
			(this.render = () => {
				this.current &&
					(this.triggerBuild(),
					this.renderInstance(
						this.current,
						this.renderState,
						this.props.style,
						this.projection,
					));
			}),
			(this.scheduleRender = () => Xe.render(this.render, !1, !0));
		const { latestValues: l, renderState: u } = i;
		(this.latestValues = l),
			(this.baseTarget = { ...l }),
			(this.initialValues = r.initial ? { ...l } : {}),
			(this.renderState = u),
			(this.parent = t),
			(this.props = r),
			(this.presenceContext = n),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = o),
			(this.options = s),
			(this.blockInitialAnimation = !!a),
			(this.isControllingVariants = Pu(r)),
			(this.isVariantNode = Vx(r)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(t && t.current));
		const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
			r,
			{},
			this,
		);
		for (const f in d) {
			const p = d[f];
			l[f] !== void 0 && ut(p) && (p.set(l[f], !1), zl(c) && c.add(f));
		}
	}
	mount(t) {
		(this.current = t),
			Qg.set(t, this),
			this.projection && !this.projection.instance && this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
			Ww.current || jM(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === "never"
					? !1
					: this.reducedMotionConfig === "always"
					? !0
					: Ef.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext);
	}
	unmount() {
		var t;
		Qg.delete(this.current),
			this.projection && this.projection.unmount(),
			En(this.notifyUpdate),
			En(this.render),
			this.valueSubscriptions.forEach(r => r()),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this);
		for (const r in this.events) this.events[r].clear();
		for (const r in this.features)
			(t = this.features[r]) === null || t === void 0 || t.unmount();
		this.current = null;
	}
	bindToMotionValue(t, r) {
		const n = so.has(t),
			o = r.on("change", i => {
				(this.latestValues[t] = i),
					this.props.onUpdate && Xe.preRender(this.notifyUpdate),
					n && this.projection && (this.projection.isTransformDirty = !0);
			}),
			a = r.on("renderRequest", this.scheduleRender);
		this.valueSubscriptions.set(t, () => {
			o(), a(), r.owner && r.stop();
		});
	}
	sortNodePosition(t) {
		return !this.current ||
			!this.sortInstanceNodePosition ||
			this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current);
	}
	loadFeatures({ children: t, ...r }, n, o, a) {
		let i, s;
		for (let l = 0; l < KM; l++) {
			const u = Uw[l],
				{
					isEnabled: c,
					Feature: d,
					ProjectionNode: f,
					MeasureLayout: p,
				} = wi[u];
			f && (i = f),
				c(r) &&
					(!this.features[u] && d && (this.features[u] = new d(this)),
					p && (s = p));
		}
		if (
			(this.type === "html" || this.type === "svg") &&
			!this.projection &&
			i
		) {
			this.projection = new i(this.latestValues, Zw(this.parent));
			const {
				layoutId: l,
				layout: u,
				drag: c,
				dragConstraints: d,
				layoutScroll: f,
				layoutRoot: p,
			} = r;
			this.projection.setOptions({
				layoutId: l,
				layout: u,
				alwaysMeasureLayout: !!c || (d && Vo(d)),
				visualElement: this,
				scheduleRender: () => this.scheduleRender(),
				animationType: typeof u == "string" ? u : "both",
				initialPromotionConfig: a,
				layoutScroll: f,
				layoutRoot: p,
			});
		}
		return s;
	}
	updateFeatures() {
		for (const t in this.features) {
			const r = this.features[t];
			r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.options, this.props);
	}
	measureViewportBox() {
		return this.current
			? this.measureInstanceViewportBox(this.current, this.props)
			: je();
	}
	getStaticValue(t) {
		return this.latestValues[t];
	}
	setStaticValue(t, r) {
		this.latestValues[t] = r;
	}
	update(t, r) {
		(t.transformTemplate || this.props.transformTemplate) &&
			this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = t),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = r);
		for (let n = 0; n < Jg.length; n++) {
			const o = Jg[n];
			this.propEventSubscriptions[o] &&
				(this.propEventSubscriptions[o](),
				delete this.propEventSubscriptions[o]);
			const a = "on" + o,
				i = t[a];
			i && (this.propEventSubscriptions[o] = this.on(o, i));
		}
		(this.prevMotionValues = _M(
			this,
			this.scrapeMotionValuesFromProps(t, this.prevProps, this),
			this.prevMotionValues,
		)),
			this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode
			? this
			: this.parent
			? this.parent.getClosestVariantNode()
			: void 0;
	}
	getVariantContext(t = !1) {
		if (t) return this.parent ? this.parent.getVariantContext() : void 0;
		if (!this.isControllingVariants) {
			const n = this.parent ? this.parent.getVariantContext() || {} : {};
			return (
				this.props.initial !== void 0 && (n.initial = this.props.initial), n
			);
		}
		const r = {};
		for (let n = 0; n < HM; n++) {
			const o = o0[n],
				a = this.props[o];
			(xi(a) || a === !1) && (r[o] = a);
		}
		return r;
	}
	addVariantChild(t) {
		const r = this.getClosestVariantNode();
		if (r)
			return (
				r.variantChildren && r.variantChildren.add(t),
				() => r.variantChildren.delete(t)
			);
	}
	addValue(t, r) {
		const n = this.values.get(t);
		r !== n &&
			(n && this.removeValue(t),
			this.bindToMotionValue(t, r),
			this.values.set(t, r),
			(this.latestValues[t] = r.get()));
	}
	removeValue(t) {
		this.values.delete(t);
		const r = this.valueSubscriptions.get(t);
		r && (r(), this.valueSubscriptions.delete(t)),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState);
	}
	hasValue(t) {
		return this.values.has(t);
	}
	getValue(t, r) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let n = this.values.get(t);
		return (
			n === void 0 &&
				r !== void 0 &&
				((n = $i(r === null ? void 0 : r, { owner: this })),
				this.addValue(t, n)),
			n
		);
	}
	readValue(t, r) {
		var n;
		let o =
			this.latestValues[t] !== void 0 || !this.current
				? this.latestValues[t]
				: (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
				  n !== void 0
				? n
				: this.readValueFromInstance(this.current, t, this.options);
		return (
			o != null &&
				(typeof o == "string" && (tw(o) || ew(o))
					? (o = parseFloat(o))
					: !BM(o) && kn.test(r) && (o = fw(t, r)),
				this.setBaseTarget(t, ut(o) ? o.get() : o)),
			ut(o) ? o.get() : o
		);
	}
	setBaseTarget(t, r) {
		this.baseTarget[t] = r;
	}
	getBaseTarget(t) {
		var r;
		const { initial: n } = this.props;
		let o;
		if (typeof n == "string" || typeof n == "object") {
			const i = p0(
				this.props,
				n,
				(r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom,
			);
			i && (o = i[t]);
		}
		if (n && o !== void 0) return o;
		const a = this.getBaseTargetFromProps(this.props, t);
		return a !== void 0 && !ut(a)
			? a
			: this.initialValues[t] !== void 0 && o === void 0
			? void 0
			: this.baseTarget[t];
	}
	on(t, r) {
		return this.events[t] || (this.events[t] = new E0()), this.events[t].add(r);
	}
	notify(t, ...r) {
		this.events[t] && this.events[t].notify(...r);
	}
}
class Gw extends WM {
	constructor() {
		super(...arguments), (this.KeyframeResolver = pw);
	}
	sortInstanceNodePosition(t, r) {
		return t.compareDocumentPosition(r) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(t, r) {
		return t.style ? t.style[r] : void 0;
	}
	removeValueFromRenderState(t, { vars: r, style: n }) {
		delete r[t], delete n[t];
	}
}
function UM(e) {
	return window.getComputedStyle(e);
}
class ZM extends Gw {
	constructor() {
		super(...arguments), (this.type = "html");
	}
	readValueFromInstance(t, r) {
		if (so.has(r)) {
			const n = v0(r);
			return (n && n.default) || 0;
		} else {
			const n = UM(t),
				o = (Ox(r) ? n.getPropertyValue(r) : n[r]) || 0;
			return typeof o == "string" ? o.trim() : o;
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: r }) {
		return Lw(t, r);
	}
	build(t, r, n, o) {
		l0(t, r, n, o.transformTemplate);
	}
	scrapeMotionValuesFromProps(t, r, n) {
		return f0(t, r, n);
	}
	handleChildMotionValue() {
		this.childSubscription &&
			(this.childSubscription(), delete this.childSubscription);
		const { children: t } = this.props;
		ut(t) &&
			(this.childSubscription = t.on("change", r => {
				this.current && (this.current.textContent = `${r}`);
			}));
	}
	renderInstance(t, r, n, o) {
		Bx(t, r, n, o);
	}
}
class GM extends Gw {
	constructor() {
		super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
	}
	getBaseTargetFromProps(t, r) {
		return t[r];
	}
	readValueFromInstance(t, r) {
		if (so.has(r)) {
			const n = v0(r);
			return (n && n.default) || 0;
		}
		return (r = Kx.has(r) ? r : t0(r)), t.getAttribute(r);
	}
	measureInstanceViewportBox() {
		return je();
	}
	scrapeMotionValuesFromProps(t, r, n) {
		return Wx(t, r, n);
	}
	build(t, r, n, o) {
		c0(t, r, n, this.isSVGTag, o.transformTemplate);
	}
	renderInstance(t, r, n, o) {
		Hx(t, r, n, o);
	}
	mount(t) {
		(this.isSVGTag = d0(t.tagName)), super.mount(t);
	}
}
const YM = (e, t) =>
		a0(e)
			? new GM(t, { enableHardwareAcceleration: !1 })
			: new ZM(t, {
					allowProjection: e !== h.Fragment,
					enableHardwareAcceleration: !0,
			  }),
	XM = { layout: { ProjectionNode: Hw, MeasureLayout: Ow } },
	Ur = eE(DE);
function Yw() {
	const e = h.useRef(!1);
	return (
		Jp(
			() => (
				(e.current = !0),
				() => {
					e.current = !1;
				}
			),
			[],
		),
		e
	);
}
function Xw() {
	const e = Yw(),
		[t, r] = h.useState(0),
		n = h.useCallback(() => {
			e.current && r(t + 1);
		}, [t]);
	return [h.useCallback(() => Xe.postRender(n), [n]), t];
}
class qM extends h.Component {
	getSnapshotBeforeUpdate(t) {
		const r = this.props.childRef.current;
		if (r && t.isPresent && !this.props.isPresent) {
			const n = this.props.sizeRef.current;
			(n.height = r.offsetHeight || 0),
				(n.width = r.offsetWidth || 0),
				(n.top = r.offsetTop),
				(n.left = r.offsetLeft);
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
}
function QM({ children: e, isPresent: t }) {
	const r = h.useId(),
		n = h.useRef(null),
		o = h.useRef({ width: 0, height: 0, top: 0, left: 0 }),
		{ nonce: a } = h.useContext(qp);
	return (
		h.useInsertionEffect(() => {
			const { width: i, height: s, top: l, left: u } = o.current;
			if (t || !n.current || !i || !s) return;
			n.current.dataset.motionPopId = r;
			const c = document.createElement("style");
			return (
				a && (c.nonce = a),
				document.head.appendChild(c),
				c.sheet &&
					c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
				() => {
					document.head.removeChild(c);
				}
			);
		}, [t]),
		S.jsx(qM, {
			isPresent: t,
			childRef: n,
			sizeRef: o,
			children: h.cloneElement(e, { ref: n }),
		})
	);
}
const Nc = ({
	children: e,
	initial: t,
	isPresent: r,
	onExitComplete: n,
	custom: o,
	presenceAffectsLayout: a,
	mode: i,
}) => {
	const s = Ux(JM),
		l = h.useId(),
		u = h.useMemo(
			() => ({
				id: l,
				initial: t,
				isPresent: r,
				custom: o,
				onExitComplete: c => {
					s.set(c, !0);
					for (const d of s.values()) if (!d) return;
					n && n();
				},
				register: c => (s.set(c, !1), () => s.delete(c)),
			}),
			a ? [Math.random()] : [r],
		);
	return (
		h.useMemo(() => {
			s.forEach((c, d) => s.set(d, !1));
		}, [r]),
		h.useEffect(() => {
			!r && !s.size && n && n();
		}, [r]),
		i === "popLayout" && (e = S.jsx(QM, { isPresent: r, children: e })),
		S.jsx(wu.Provider, { value: u, children: e })
	);
};
function JM() {
	return new Map();
}
function e7(e) {
	return h.useEffect(() => () => e(), []);
}
const _n = e => e.key || "";
function t7(e, t) {
	e.forEach(r => {
		const n = _n(r);
		t.set(n, r);
	});
}
function r7(e) {
	const t = [];
	return (
		h.Children.forEach(e, r => {
			h.isValidElement(r) && t.push(r);
		}),
		t
	);
}
const Oi = ({
	children: e,
	custom: t,
	initial: r = !0,
	onExitComplete: n,
	exitBeforeEnter: o,
	presenceAffectsLayout: a = !0,
	mode: i = "sync",
}) => {
	const s = h.useContext(Si).forceRender || Xw()[0],
		l = Yw(),
		u = r7(e);
	let c = u;
	const d = h.useRef(new Map()).current,
		f = h.useRef(c),
		p = h.useRef(new Map()).current,
		g = h.useRef(!0);
	if (
		(Jp(() => {
			(g.current = !1), t7(u, p), (f.current = c);
		}),
		e7(() => {
			(g.current = !0), p.clear(), d.clear();
		}),
		g.current)
	)
		return S.jsx(S.Fragment, {
			children: c.map(v =>
				S.jsx(
					Nc,
					{
						isPresent: !0,
						initial: r ? void 0 : !1,
						presenceAffectsLayout: a,
						mode: i,
						children: v,
					},
					_n(v),
				),
			),
		});
	c = [...c];
	const b = f.current.map(_n),
		x = u.map(_n),
		m = b.length;
	for (let v = 0; v < m; v++) {
		const y = b[v];
		x.indexOf(y) === -1 && !d.has(y) && d.set(y, void 0);
	}
	return (
		i === "wait" && d.size && (c = []),
		d.forEach((v, y) => {
			if (x.indexOf(y) !== -1) return;
			const P = p.get(y);
			if (!P) return;
			const C = b.indexOf(y);
			let E = v;
			if (!E) {
				const D = () => {
					d.delete(y);
					const w = Array.from(p.keys()).filter(V => !x.includes(V));
					if (
						(w.forEach(V => p.delete(V)),
						(f.current = u.filter(V => {
							const M = _n(V);
							return M === y || w.includes(M);
						})),
						!d.size)
					) {
						if (l.current === !1) return;
						s(), n && n();
					}
				};
				(E = S.jsx(
					Nc,
					{
						isPresent: !1,
						onExitComplete: D,
						custom: t,
						presenceAffectsLayout: a,
						mode: i,
						children: P,
					},
					_n(P),
				)),
					d.set(y, E);
			}
			c.splice(C, 0, E);
		}),
		(c = c.map(v => {
			const y = v.key;
			return d.has(y)
				? v
				: S.jsx(
						Nc,
						{ isPresent: !0, presenceAffectsLayout: a, mode: i, children: v },
						_n(v),
				  );
		})),
		S.jsx(S.Fragment, { children: d.size ? c : c.map(v => h.cloneElement(v)) })
	);
};
function Zr({ children: e, features: t, strict: r = !1 }) {
	const [, n] = h.useState(!jc(t)),
		o = h.useRef(void 0);
	if (!jc(t)) {
		const { renderer: a, ...i } = t;
		(o.current = a), df(i);
	}
	return (
		h.useEffect(() => {
			jc(t) &&
				t().then(({ renderer: a, ...i }) => {
					df(i), (o.current = a), n(!0);
				});
		}, []),
		S.jsx(e0.Provider, {
			value: { renderer: o.current, strict: r },
			children: e,
		})
	);
}
function jc(e) {
	return typeof e == "function";
}
const n7 = h.createContext(null),
	o7 = e => !e.isLayoutDirty && e.willUpdate(!1);
function ev() {
	const e = new Set(),
		t = new WeakMap(),
		r = () => e.forEach(o7);
	return {
		add: n => {
			e.add(n), t.set(n, n.addEventListener("willUpdate", r));
		},
		remove: n => {
			e.delete(n);
			const o = t.get(n);
			o && (o(), t.delete(n)), r();
		},
		dirty: r,
	};
}
const qw = e => e === !0,
	a7 = e => qw(e === !0) || e === "id",
	i7 = ({ children: e, id: t, inherit: r = !0 }) => {
		const n = h.useContext(Si),
			o = h.useContext(n7),
			[a, i] = Xw(),
			s = h.useRef(null),
			l = n.id || o;
		s.current === null &&
			(a7(r) && l && (t = t ? l + "-" + t : l),
			(s.current = { id: t, group: (qw(r) && n.group) || ev() }));
		const u = h.useMemo(() => ({ ...s.current, forceRender: a }), [i]);
		return S.jsx(Si.Provider, { value: u, children: e });
	},
	Gr = { renderer: YM, ...VT, ...HE },
	s7 = { ...Gr, ...NM, ...XM };
var Ir = {
		ease: [0.36, 0.66, 0.4, 1],
		easeIn: [0.4, 0, 1, 1],
		easeOut: [0, 0, 0.2, 1],
		easeInOut: [0.4, 0, 0.2, 1],
		spring: [0.155, 1.105, 0.295, 1.12],
		springOut: [0.57, -0.15, 0.62, 0.07],
		softSpring: [0.16, 1.11, 0.3, 1.02],
	},
	aa = {
		scaleSpring: {
			enter: {
				transform: "scale(1)",
				opacity: 1,
				transition: { type: "spring", bounce: 0, duration: 0.3 },
			},
			exit: {
				transform: "scale(0.6)",
				opacity: 0,
				transition: { type: "easeOut", duration: 0.2 },
			},
		},
		scaleSpringOpacity: {
			initial: { opacity: 0, transform: "scale(0.8)" },
			enter: {
				opacity: 1,
				transform: "scale(1)",
				transition: { type: "spring", bounce: 0, duration: 0.3 },
			},
			exit: {
				opacity: 0,
				transform: "scale(0.96)",
				transition: { type: "easeOut", bounce: 0, duration: 0.15 },
			},
		},
		scale: { enter: { scale: 1 }, exit: { scale: 0.95 } },
		scaleFadeIn: {
			enter: {
				transform: "scale(1)",
				opacity: 1,
				transition: { duration: 0.25, ease: Ir.easeIn },
			},
			exit: {
				transform: "scale(0.95)",
				opacity: 0,
				transition: { duration: 0.2, ease: Ir.easeOut },
			},
		},
		scaleInOut: {
			enter: {
				transform: "scale(1)",
				opacity: 1,
				transition: { duration: 0.4, ease: Ir.ease },
			},
			exit: {
				transform: "scale(1.03)",
				opacity: 0,
				transition: { duration: 0.3, ease: Ir.ease },
			},
		},
		fade: {
			enter: { opacity: 1, transition: { duration: 0.4, ease: Ir.ease } },
			exit: { opacity: 0, transition: { duration: 0.3, ease: Ir.ease } },
		},
		collapse: {
			enter: {
				opacity: 1,
				height: "auto",
				transition: {
					height: { type: "spring", bounce: 0, duration: 0.3 },
					opacity: { easings: "ease", duration: 0.4 },
				},
			},
			exit: {
				opacity: 0,
				height: 0,
				transition: { easings: "ease", duration: 0.3 },
			},
		},
	};
function Qw(e) {
	return null;
}
Qw.getCollectionNode = function* (t, r) {
	let { childItems: n, title: o, children: a } = t,
		i = t.title || t.children,
		s = t.textValue || (typeof i == "string" ? i : "") || t["aria-label"] || "";
	!s &&
		!(r != null && r.suppressTextValueWarning) &&
		console.warn(
			"<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.",
		),
		yield {
			type: "item",
			props: t,
			rendered: i,
			textValue: s,
			"aria-label": t["aria-label"],
			hasChildNodes: l7(t),
			*childNodes() {
				if (n) for (let l of n) yield { type: "item", value: l };
				else if (o) {
					let l = [];
					k.Children.forEach(a, u => {
						l.push({ type: "item", element: u });
					}),
						yield* l;
				}
			},
		};
};
function l7(e) {
	return e.hasChildItems != null
		? e.hasChildItems
		: !!(e.childItems || (e.title && k.Children.count(e.children) > 0));
}
let k0 = Qw;
class u7 {
	build(t, r) {
		return (this.context = r), tv(() => this.iterateCollection(t));
	}
	*iterateCollection(t) {
		let { children: r, items: n } = t;
		if (typeof r == "function") {
			if (!n)
				throw new Error(
					"props.children was a function but props.items is missing",
				);
			for (let o of t.items)
				yield* this.getFullNode({ value: o }, { renderer: r });
		} else {
			let o = [];
			k.Children.forEach(r, i => {
				o.push(i);
			});
			let a = 0;
			for (let i of o) {
				let s = this.getFullNode({ element: i, index: a }, {});
				for (let l of s) a++, yield l;
			}
		}
	}
	getKey(t, r, n, o) {
		if (t.key != null) return t.key;
		if (r.type === "cell" && r.key != null) return `${o}${r.key}`;
		let a = r.value;
		if (a != null) {
			var i;
			let s = (i = a.key) !== null && i !== void 0 ? i : a.id;
			if (s == null) throw new Error("No key found for item");
			return s;
		}
		return o ? `${o}.${r.index}` : `$.${r.index}`;
	}
	getChildState(t, r) {
		return { renderer: r.renderer || t.renderer };
	}
	*getFullNode(t, r, n, o) {
		let a = t.element;
		if (!a && t.value && r && r.renderer) {
			let l = this.cache.get(t.value);
			if (l && (!l.shouldInvalidate || !l.shouldInvalidate(this.context))) {
				(l.index = t.index), (l.parentKey = o ? o.key : null), yield l;
				return;
			}
			a = r.renderer(t.value);
		}
		if (k.isValidElement(a)) {
			let l = a.type;
			if (typeof l != "function" && typeof l.getCollectionNode != "function") {
				let f = typeof a.type == "function" ? a.type.name : a.type;
				throw new Error(`Unknown element <${f}> in collection.`);
			}
			let u = l.getCollectionNode(a.props, this.context),
				c = t.index,
				d = u.next();
			for (; !d.done && d.value; ) {
				let f = d.value;
				t.index = c;
				let p = f.key;
				p || (p = f.element ? null : this.getKey(a, t, r, n));
				let b = [
					...this.getFullNode(
						{ ...f, key: p, index: c, wrapper: c7(t.wrapper, f.wrapper) },
						this.getChildState(r, f),
						n ? `${n}${a.key}` : a.key,
						o,
					),
				];
				for (let x of b) {
					if (
						((x.value = f.value || t.value),
						x.value && this.cache.set(x.value, x),
						t.type && x.type !== t.type)
					)
						throw new Error(
							`Unsupported type <${_c(x.type)}> in <${_c(o.type)}>. Only <${_c(
								t.type,
							)}> is supported.`,
						);
					c++, yield x;
				}
				d = u.next(b);
			}
			return;
		}
		if (t.key == null) return;
		let i = this,
			s = {
				type: t.type,
				props: t.props,
				key: t.key,
				parentKey: o ? o.key : null,
				value: t.value,
				level: o ? o.level + 1 : 0,
				index: t.index,
				rendered: t.rendered,
				textValue: t.textValue,
				"aria-label": t["aria-label"],
				wrapper: t.wrapper,
				shouldInvalidate: t.shouldInvalidate,
				hasChildNodes: t.hasChildNodes,
				childNodes: tv(function* () {
					if (!t.hasChildNodes) return;
					let l = 0;
					for (let u of t.childNodes()) {
						u.key != null && (u.key = `${s.key}${u.key}`), (u.index = l);
						let c = i.getFullNode(u, i.getChildState(r, u), s.key, s);
						for (let d of c) l++, yield d;
					}
				}),
			};
		yield s;
	}
	constructor() {
		this.cache = new WeakMap();
	}
}
function tv(e) {
	let t = [],
		r = null;
	return {
		*[Symbol.iterator]() {
			for (let n of t) yield n;
			r || (r = e());
			for (let n of r) t.push(n), yield n;
		},
	};
}
function c7(e, t) {
	if (e && t) return r => e(t(r));
	if (e) return e;
	if (t) return t;
}
function _c(e) {
	return e[0].toUpperCase() + e.slice(1);
}
function Jw(e, t, r) {
	let n = h.useMemo(() => new u7(), []),
		{ children: o, items: a, collection: i } = e;
	return h.useMemo(() => {
		if (i) return i;
		let l = n.build({ children: o, items: a }, r);
		return t(l);
	}, [n, o, a, i, r, t]);
}
function e4(e, t) {
	return typeof t.getChildren == "function"
		? t.getChildren(e.key)
		: e.childNodes;
}
function d7(e) {
	return f7(e);
}
function f7(e, t) {
	for (let r of e) return r;
}
function zc(e, t, r) {
	if (t.parentKey === r.parentKey) return t.index - r.index;
	let n = [...rv(e, t), t],
		o = [...rv(e, r), r],
		a = n.slice(0, o.length).findIndex((i, s) => i !== o[s]);
	return a !== -1
		? ((t = n[a]), (r = o[a]), t.index - r.index)
		: n.findIndex(i => i === r) >= 0
		? 1
		: (o.findIndex(i => i === t) >= 0, -1);
}
function rv(e, t) {
	let r = [];
	for (; (t == null ? void 0 : t.parentKey) != null; )
		(t = e.getItem(t.parentKey)), r.unshift(t);
	return r;
}
const nv = new WeakMap();
function t4(e) {
	let t = nv.get(e);
	if (t != null) return t;
	t = 0;
	let r = n => {
		for (let o of n) o.type === "section" ? r(e4(o, e)) : t++;
	};
	return r(e), nv.set(e, t), t;
}
class cr extends Set {
	constructor(t, r, n) {
		super(t),
			t instanceof cr
				? ((this.anchorKey = r || t.anchorKey),
				  (this.currentKey = n || t.currentKey))
				: ((this.anchorKey = r), (this.currentKey = n));
	}
}
function p7(e, t) {
	if (e.size !== t.size) return !1;
	for (let r of e) if (!t.has(r)) return !1;
	return !0;
}
function r4(e) {
	let {
			selectionMode: t = "none",
			disallowEmptySelection: r,
			allowDuplicateSelectionEvents: n,
			selectionBehavior: o = "toggle",
			disabledBehavior: a = "all",
		} = e,
		i = h.useRef(!1),
		[, s] = h.useState(!1),
		l = h.useRef(null),
		u = h.useRef(null),
		[, c] = h.useState(null),
		d = h.useMemo(() => ov(e.selectedKeys), [e.selectedKeys]),
		f = h.useMemo(
			() => ov(e.defaultSelectedKeys, new cr()),
			[e.defaultSelectedKeys],
		),
		[p, g] = Cr(d, f, e.onSelectionChange),
		b = h.useMemo(
			() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
			[e.disabledKeys],
		),
		[x, m] = h.useState(o);
	o === "replace" &&
		x === "toggle" &&
		typeof p == "object" &&
		p.size === 0 &&
		m("replace");
	let v = h.useRef(o);
	return (
		h.useEffect(() => {
			o !== v.current && (m(o), (v.current = o));
		}, [o]),
		{
			selectionMode: t,
			disallowEmptySelection: r,
			selectionBehavior: x,
			setSelectionBehavior: m,
			get isFocused() {
				return i.current;
			},
			setFocused(y) {
				(i.current = y), s(y);
			},
			get focusedKey() {
				return l.current;
			},
			get childFocusStrategy() {
				return u.current;
			},
			setFocusedKey(y, P = "first") {
				(l.current = y), (u.current = P), c(y);
			},
			selectedKeys: p,
			setSelectedKeys(y) {
				(n || !p7(y, p)) && g(y);
			},
			disabledKeys: b,
			disabledBehavior: a,
		}
	);
}
function ov(e, t) {
	return e ? (e === "all" ? "all" : new cr(e)) : t;
}
class n4 {
	get selectionMode() {
		return this.state.selectionMode;
	}
	get disallowEmptySelection() {
		return this.state.disallowEmptySelection;
	}
	get selectionBehavior() {
		return this.state.selectionBehavior;
	}
	setSelectionBehavior(t) {
		this.state.setSelectionBehavior(t);
	}
	get isFocused() {
		return this.state.isFocused;
	}
	setFocused(t) {
		this.state.setFocused(t);
	}
	get focusedKey() {
		return this.state.focusedKey;
	}
	get childFocusStrategy() {
		return this.state.childFocusStrategy;
	}
	setFocusedKey(t, r) {
		(t == null || this.collection.getItem(t)) && this.state.setFocusedKey(t, r);
	}
	get selectedKeys() {
		return this.state.selectedKeys === "all"
			? new Set(this.getSelectAllKeys())
			: this.state.selectedKeys;
	}
	get rawSelection() {
		return this.state.selectedKeys;
	}
	isSelected(t) {
		return this.state.selectionMode === "none"
			? !1
			: ((t = this.getKey(t)),
			  this.state.selectedKeys === "all"
					? this.canSelectItem(t)
					: this.state.selectedKeys.has(t));
	}
	get isEmpty() {
		return (
			this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0
		);
	}
	get isSelectAll() {
		if (this.isEmpty) return !1;
		if (this.state.selectedKeys === "all") return !0;
		if (this._isSelectAll != null) return this._isSelectAll;
		let t = this.getSelectAllKeys(),
			r = this.state.selectedKeys;
		return (this._isSelectAll = t.every(n => r.has(n))), this._isSelectAll;
	}
	get firstSelectedKey() {
		let t = null;
		for (let r of this.state.selectedKeys) {
			let n = this.collection.getItem(r);
			(!t || (n && zc(this.collection, n, t) < 0)) && (t = n);
		}
		return t == null ? void 0 : t.key;
	}
	get lastSelectedKey() {
		let t = null;
		for (let r of this.state.selectedKeys) {
			let n = this.collection.getItem(r);
			(!t || (n && zc(this.collection, n, t) > 0)) && (t = n);
		}
		return t == null ? void 0 : t.key;
	}
	get disabledKeys() {
		return this.state.disabledKeys;
	}
	get disabledBehavior() {
		return this.state.disabledBehavior;
	}
	extendSelection(t) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single") {
			this.replaceSelection(t);
			return;
		}
		t = this.getKey(t);
		let r;
		if (this.state.selectedKeys === "all") r = new cr([t], t, t);
		else {
			let n = this.state.selectedKeys,
				o = n.anchorKey || t;
			r = new cr(n, o, t);
			for (let a of this.getKeyRange(o, n.currentKey || t)) r.delete(a);
			for (let a of this.getKeyRange(t, o)) this.canSelectItem(a) && r.add(a);
		}
		this.state.setSelectedKeys(r);
	}
	getKeyRange(t, r) {
		let n = this.collection.getItem(t),
			o = this.collection.getItem(r);
		return n && o
			? zc(this.collection, n, o) <= 0
				? this.getKeyRangeInternal(t, r)
				: this.getKeyRangeInternal(r, t)
			: [];
	}
	getKeyRangeInternal(t, r) {
		let n = [],
			o = t;
		for (; o; ) {
			let a = this.collection.getItem(o);
			if (
				(((a && a.type === "item") ||
					(a.type === "cell" && this.allowsCellSelection)) &&
					n.push(o),
				o === r)
			)
				return n;
			o = this.collection.getKeyAfter(o);
		}
		return [];
	}
	getKey(t) {
		let r = this.collection.getItem(t);
		if (!r || (r.type === "cell" && this.allowsCellSelection)) return t;
		for (; r.type !== "item" && r.parentKey != null; )
			r = this.collection.getItem(r.parentKey);
		return !r || r.type !== "item" ? null : r.key;
	}
	toggleSelection(t) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single" && !this.isSelected(t)) {
			this.replaceSelection(t);
			return;
		}
		if (((t = this.getKey(t)), t == null)) return;
		let r = new cr(
			this.state.selectedKeys === "all"
				? this.getSelectAllKeys()
				: this.state.selectedKeys,
		);
		r.has(t)
			? r.delete(t)
			: this.canSelectItem(t) &&
			  (r.add(t), (r.anchorKey = t), (r.currentKey = t)),
			!(this.disallowEmptySelection && r.size === 0) &&
				this.state.setSelectedKeys(r);
	}
	replaceSelection(t) {
		if (this.selectionMode === "none" || ((t = this.getKey(t)), t == null))
			return;
		let r = this.canSelectItem(t) ? new cr([t], t, t) : new cr();
		this.state.setSelectedKeys(r);
	}
	setSelectedKeys(t) {
		if (this.selectionMode === "none") return;
		let r = new cr();
		for (let n of t)
			if (
				((n = this.getKey(n)),
				n != null && (r.add(n), this.selectionMode === "single"))
			)
				break;
		this.state.setSelectedKeys(r);
	}
	getSelectAllKeys() {
		let t = [],
			r = n => {
				for (; n; ) {
					if (this.canSelectItem(n)) {
						let o = this.collection.getItem(n);
						o.type === "item" && t.push(n),
							o.hasChildNodes &&
								(this.allowsCellSelection || o.type !== "item") &&
								r(d7(e4(o, this.collection)).key);
					}
					n = this.collection.getKeyAfter(n);
				}
			};
		return r(this.collection.getFirstKey()), t;
	}
	selectAll() {
		!this.isSelectAll &&
			this.selectionMode === "multiple" &&
			this.state.setSelectedKeys("all");
	}
	clearSelection() {
		!this.disallowEmptySelection &&
			(this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) &&
			this.state.setSelectedKeys(new cr());
	}
	toggleSelectAll() {
		this.isSelectAll ? this.clearSelection() : this.selectAll();
	}
	select(t, r) {
		this.selectionMode !== "none" &&
			(this.selectionMode === "single"
				? this.isSelected(t) && !this.disallowEmptySelection
					? this.toggleSelection(t)
					: this.replaceSelection(t)
				: this.selectionBehavior === "toggle" ||
				  (r && (r.pointerType === "touch" || r.pointerType === "virtual"))
				? this.toggleSelection(t)
				: this.replaceSelection(t));
	}
	isSelectionEqual(t) {
		if (t === this.state.selectedKeys) return !0;
		let r = this.selectedKeys;
		if (t.size !== r.size) return !1;
		for (let n of t) if (!r.has(n)) return !1;
		for (let n of r) if (!t.has(n)) return !1;
		return !0;
	}
	canSelectItem(t) {
		if (this.state.selectionMode === "none" || this.state.disabledKeys.has(t))
			return !1;
		let r = this.collection.getItem(t);
		return !(!r || (r.type === "cell" && !this.allowsCellSelection));
	}
	isDisabled(t) {
		return (
			this.state.disabledKeys.has(t) && this.state.disabledBehavior === "all"
		);
	}
	isLink(t) {
		var r, n;
		return !!(
			!(
				(n = this.collection.getItem(t)) === null ||
				n === void 0 ||
				(r = n.props) === null ||
				r === void 0
			) && r.href
		);
	}
	constructor(t, r, n) {
		(this.collection = t), (this.state = r);
		var o;
		(this.allowsCellSelection =
			(o = n == null ? void 0 : n.allowsCellSelection) !== null && o !== void 0
				? o
				: !1),
			(this._isSelectAll = null);
	}
}
class h7 {
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this.keyMap.size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(t) {
		let r = this.keyMap.get(t);
		return r ? r.prevKey : null;
	}
	getKeyAfter(t) {
		let r = this.keyMap.get(t);
		return r ? r.nextKey : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(t) {
		return this.keyMap.get(t);
	}
	at(t) {
		const r = [...this.getKeys()];
		return this.getItem(r[t]);
	}
	constructor(t, { expandedKeys: r } = {}) {
		(this.keyMap = new Map()), (this.iterable = t), (r = r || new Set());
		let n = i => {
			if (
				(this.keyMap.set(i.key, i),
				i.childNodes && (i.type === "section" || r.has(i.key)))
			)
				for (let s of i.childNodes) n(s);
		};
		for (let i of t) n(i);
		let o,
			a = 0;
		for (let [i, s] of this.keyMap)
			o
				? ((o.nextKey = i), (s.prevKey = o.key))
				: ((this.firstKey = i), (s.prevKey = void 0)),
				s.type === "item" && (s.index = a++),
				(o = s),
				(o.nextKey = void 0);
		this.lastKey = o == null ? void 0 : o.key;
	}
}
function m7(e) {
	let [t, r] = Cr(
			e.expandedKeys ? new Set(e.expandedKeys) : void 0,
			e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(),
			e.onExpandedChange,
		),
		n = r4(e),
		o = h.useMemo(
			() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
			[e.disabledKeys],
		),
		a = Jw(
			e,
			h.useCallback(s => new h7(s, { expandedKeys: t }), [t]),
			null,
		);
	return (
		h.useEffect(() => {
			n.focusedKey != null && !a.getItem(n.focusedKey) && n.setFocusedKey(null);
		}, [a, n.focusedKey]),
		{
			collection: a,
			expandedKeys: t,
			disabledKeys: o,
			toggleKey: s => {
				r(g7(t, s));
			},
			setExpandedKeys: r,
			selectionManager: new n4(a, n),
		}
	);
}
function g7(e, t) {
	let r = new Set(e);
	return r.has(t) ? r.delete(t) : r.add(t), r;
}
function v7(e) {
	let t = rt(e, { enabled: typeof e.elementType == "string" }),
		r;
	return (
		e.orientation === "vertical" && (r = "vertical"),
		e.elementType !== "hr"
			? { separatorProps: { ...t, role: "separator", "aria-orientation": r } }
			: { separatorProps: t }
	);
}
function y7(e) {
	const { as: t, className: r, orientation: n, ...o } = e;
	let a = t || "hr";
	a === "hr" && n === "vertical" && (a = "div");
	const { separatorProps: i } = v7({
			elementType: typeof a == "string" ? a : "hr",
			orientation: n,
		}),
		s = h.useMemo(() => DC({ orientation: n, className: r }), [n, r]),
		l = h.useCallback(
			(u = {}) => ({
				className: s,
				role: "separator",
				"data-orientation": n,
				...i,
				...o,
				...u,
			}),
			[s, n, i, o],
		);
	return { Component: a, getDividerProps: l };
}
var o4 = ue((e, t) => {
	const { Component: r, getDividerProps: n } = y7({ ...e });
	return S.jsx(r, { ref: t, ...n() });
});
o4.displayName = "NextUI.Divider";
var a4 = o4,
	T0 = e => {
		const t = {
			top: { originY: 1 },
			bottom: { originY: 0 },
			left: { originX: 1 },
			right: { originX: 0 },
			"top-start": { originX: 0, originY: 1 },
			"top-end": { originX: 1, originY: 1 },
			"bottom-start": { originX: 0, originY: 0 },
			"bottom-end": { originX: 1, originY: 0 },
			"right-start": { originX: 0, originY: 0 },
			"right-end": { originX: 0, originY: 1 },
			"left-start": { originX: 1, originY: 0 },
			"left-end": { originX: 1, originY: 1 },
		};
		return (t == null ? void 0 : t[e]) || {};
	},
	i4 = e =>
		({
			top: "top",
			bottom: "bottom",
			left: "left",
			right: "right",
			"top-start": "top start",
			"top-end": "top end",
			"bottom-start": "bottom start",
			"bottom-end": "bottom end",
			"left-start": "left top",
			"left-end": "left bottom",
			"right-start": "right top",
			"right-end": "right bottom",
		}[e]),
	b7 = (e, t) => {
		if (t.includes("-")) {
			const [r] = t.split("-");
			if (r.includes(e)) return !1;
		}
		return !0;
	},
	Kl = (e, t) => {
		if (t.includes("-")) {
			const [, r] = t.split("-");
			return `${e}-${r}`;
		}
		return e;
	},
	Da = new WeakMap(),
	Kt = [];
function x7(e, t = document.body) {
	let r = new Set(e),
		n = new Set(),
		o = l => {
			for (let f of l.querySelectorAll(
				"[data-live-announcer], [data-react-aria-top-layer]",
			))
				r.add(f);
			let u = f => {
					const p = f.parentElement;
					if (r.has(f) || (n.has(p) && p.getAttribute("role") !== "row"))
						return NodeFilter.FILTER_REJECT;
					for (let g of r) if (f.contains(g)) return NodeFilter.FILTER_SKIP;
					return NodeFilter.FILTER_ACCEPT;
				},
				c = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
					acceptNode: u,
				}),
				d = u(l);
			if (
				(d === NodeFilter.FILTER_ACCEPT && a(l), d !== NodeFilter.FILTER_REJECT)
			) {
				let f = c.nextNode();
				for (; f != null; ) a(f), (f = c.nextNode());
			}
		},
		a = l => {
			var u;
			let c = (u = Da.get(l)) != null ? u : 0;
			(l.getAttribute("aria-hidden") === "true" && c === 0) ||
				(c === 0 && l.setAttribute("aria-hidden", "true"),
				n.add(l),
				Da.set(l, c + 1));
		};
	Kt.length && Kt[Kt.length - 1].disconnect(), o(t);
	let i = new MutationObserver(l => {
		for (let u of l)
			if (
				!(u.type !== "childList" || u.addedNodes.length === 0) &&
				![...r, ...n].some(c => c.contains(u.target))
			) {
				for (let c of u.removedNodes)
					c instanceof Element && (r.delete(c), n.delete(c));
				for (let c of u.addedNodes)
					(c instanceof HTMLElement || c instanceof SVGElement) &&
					(c.dataset.liveAnnouncer === "true" ||
						c.dataset.reactAriaTopLayer === "true")
						? r.add(c)
						: c instanceof Element && o(c);
			}
	});
	i.observe(t, { childList: !0, subtree: !0 });
	let s = {
		observe() {
			i.observe(t, { childList: !0, subtree: !0 });
		},
		disconnect() {
			i.disconnect();
		},
	};
	return (
		Kt.push(s),
		() => {
			i.disconnect();
			for (let l of n) {
				let u = Da.get(l);
				u != null &&
					(u === 1
						? (l.removeAttribute("aria-hidden"), Da.delete(l))
						: Da.set(l, u - 1));
			}
			s === Kt[Kt.length - 1]
				? (Kt.pop(), Kt.length && Kt[Kt.length - 1].observe())
				: Kt.splice(Kt.indexOf(s), 1);
		}
	);
}
var Ni =
	globalThis != null && globalThis.document ? h.useLayoutEffect : h.useEffect;
function w7(e) {
	const [t, r] = xt(e, Hm.variantKeys),
		{
			ref: n,
			as: o,
			children: a,
			color: i = "default",
			size: s = "md",
			variant: l = "solid",
			radius: u,
			isDisabled: c = !1,
			disableAnimation: d = !1,
			disableRipple: f = !1,
			isIconOnly: p = !1,
			className: g,
			...b
		} = t,
		x = o || "div",
		m = ke(n),
		v = h.useMemo(() => Hm({ ...r, className: g }), [bt(r), g]),
		y = h.useMemo(
			() => ({
				size: s,
				color: i,
				variant: l,
				radius: u,
				isIconOnly: p,
				isDisabled: c,
				disableAnimation: d,
				disableRipple: f,
				fullWidth: !!(e != null && e.fullWidth),
			}),
			[s, i, l, u, c, p, d, f, e == null ? void 0 : e.fullWidth],
		),
		P = h.useCallback(() => ({ role: "group", ...b }), [b]);
	return {
		Component: x,
		children: a,
		domRef: m,
		context: y,
		classNames: v,
		getButtonGroupProps: P,
	};
}
var [S7, P7] = ao({ name: "ButtonGroupContext", strict: !1 }),
	s4 = ue((e, t) => {
		const {
			Component: r,
			domRef: n,
			context: o,
			children: a,
			classNames: i,
			getButtonGroupProps: s,
		} = w7({ ...e, ref: t });
		return S.jsx(S7, {
			value: o,
			children: S.jsx(r, { ref: n, className: i, ...s(), children: a }),
		});
	});
s4.displayName = "NextUI.ButtonGroup";
var l4 = s4;
function ji(e, t) {
	let {
			elementType: r = "button",
			isDisabled: n,
			onPress: o,
			onPressStart: a,
			onPressEnd: i,
			onPressChange: s,
			preventFocusOnPress: l,
			allowFocusWhenDisabled: u,
			onClick: c,
			href: d,
			target: f,
			rel: p,
			type: g = "button",
			allowTextSelectionOnPress: b,
		} = e,
		x;
	r === "button"
		? (x = { type: g, disabled: n })
		: (x = {
				role: "button",
				tabIndex: n ? void 0 : 0,
				href: r === "a" && n ? void 0 : d,
				target: r === "a" ? f : void 0,
				type: r === "input" ? g : void 0,
				disabled: r === "input" ? n : void 0,
				"aria-disabled": !n || r === "input" ? void 0 : n,
				rel: r === "a" ? p : void 0,
		  });
	let { pressProps: m, isPressed: v } = er({
			onPressStart: a,
			onPressEnd: i,
			onPressChange: s,
			onPress: o,
			isDisabled: n,
			preventFocusOnPress: l,
			allowTextSelectionOnPress: b,
			ref: t,
		}),
		{ focusableProps: y } = fa(e, t);
	u && (y.tabIndex = n ? -1 : y.tabIndex);
	let P = U(y, m, Ft(e, { labelable: !0 }));
	return {
		isPressed: v,
		buttonProps: U(x, P, {
			"aria-haspopup": e["aria-haspopup"],
			"aria-expanded": e["aria-expanded"],
			"aria-controls": e["aria-controls"],
			"aria-pressed": e["aria-pressed"],
			onClick: C => {
				c == null || c(C);
			},
		}),
	};
}
var u4 = e => {
	const {
		ripples: t = [],
		motionProps: r,
		color: n = "currentColor",
		style: o,
		onClear: a,
	} = e;
	return S.jsx(S.Fragment, {
		children: t.map(i => {
			const s = h3(0.01 * i.size, 0.2, i.size > 100 ? 0.75 : 0.5);
			return S.jsx(
				Oi,
				{
					mode: "popLayout",
					children: S.jsx(S.Fragment, {
						children: S.jsx(Zr, {
							features: Gr,
							children: S.jsx(Ur.span, {
								animate: { transform: "scale(2)", opacity: 0 },
								className: "nextui-ripple",
								exit: { opacity: 0 },
								initial: { transform: "scale(0)", opacity: 0.35 },
								style: {
									position: "absolute",
									backgroundColor: n,
									borderRadius: "100%",
									transformOrigin: "center",
									pointerEvents: "none",
									zIndex: 10,
									top: i.y,
									left: i.x,
									width: `${i.size}px`,
									height: `${i.size}px`,
									...o,
								},
								transition: { duration: s },
								onAnimationComplete: () => {
									a(i.key);
								},
								...r,
							}),
						}),
					}),
				},
				i.key,
			);
		}),
	});
};
u4.displayName = "NextUI.Ripple";
var c4 = u4;
function d4(e = {}) {
	const [t, r] = h.useState([]),
		n = h.useCallback(a => {
			const i = a.currentTarget,
				s = Math.max(i.clientWidth, i.clientHeight),
				l = i.getBoundingClientRect();
			r(u => [
				...u,
				{
					key: p3(u.length.toString()),
					size: s,
					x: a.clientX - l.x - s / 2,
					y: a.clientY - l.y - s / 2,
				},
			]);
		}, []),
		o = h.useCallback(a => {
			r(i => i.filter(s => s.key !== a));
		}, []);
	return { ripples: t, onClick: n, onClear: o, ...e };
}
function $7(e) {
	var t, r, n, o, a, i, s, l;
	const u = P7(),
		c = !!u,
		{
			ref: d,
			as: f,
			children: p,
			startContent: g,
			endContent: b,
			autoFocus: x,
			className: m,
			spinner: v,
			fullWidth: y = (t = u == null ? void 0 : u.fullWidth) != null ? t : !1,
			size: P = (r = u == null ? void 0 : u.size) != null ? r : "md",
			color: C = (n = u == null ? void 0 : u.color) != null ? n : "default",
			variant: E = (o = u == null ? void 0 : u.variant) != null ? o : "solid",
			disableAnimation: D = (a = u == null ? void 0 : u.disableAnimation) !=
			null
				? a
				: !1,
			radius: w = u == null ? void 0 : u.radius,
			disableRipple: V = (i = u == null ? void 0 : u.disableRipple) != null
				? i
				: !1,
			isDisabled: M = (s = u == null ? void 0 : u.isDisabled) != null ? s : !1,
			isIconOnly: F = (l = u == null ? void 0 : u.isIconOnly) != null ? l : !1,
			isLoading: L = !1,
			spinnerPlacement: T = "start",
			onPress: A,
			onClick: _,
			...N
		} = e,
		R = f || "button",
		j = typeof R == "string",
		z = ke(d),
		{ isFocusVisible: I, isFocused: $, focusProps: O } = gt({ autoFocus: x }),
		B = M || L,
		K = h.useMemo(
			() =>
				FC({
					size: P,
					color: C,
					variant: E,
					radius: w,
					fullWidth: y,
					isDisabled: B,
					isInGroup: c,
					disableAnimation: D,
					isIconOnly: F,
					className: m,
				}),
			[P, C, E, w, y, B, c, F, D, m],
		),
		{ onClick: W, onClear: G, ripples: X } = d4(),
		q = h.useCallback(
			we => {
				V || B || D || (z.current && W(we));
			},
			[V, B, D, z, W],
		),
		{ buttonProps: re, isPressed: Y } = ji(
			{ elementType: f, isDisabled: B, onPress: A, onClick: nt(_, q), ...N },
			z,
		),
		{ isHovered: ie, hoverProps: se } = kt({ isDisabled: B }),
		te = h.useCallback(
			(we = {}) => ({
				"data-disabled": H(B),
				"data-focus": H($),
				"data-pressed": H(Y),
				"data-focus-visible": H(I),
				"data-hover": H(ie),
				"data-loading": H(L),
				...U(re, O, se, rt(N, { enabled: j }), rt(we)),
			}),
			[L, B, $, Y, j, I, ie, re, O, se, N],
		),
		be = we =>
			h.isValidElement(we)
				? h.cloneElement(we, { "aria-hidden": !0, focusable: !1, tabIndex: -1 })
				: null,
		ne = be(g),
		ge = be(b),
		ze = h.useMemo(() => ({ sm: "sm", md: "sm", lg: "md" }[P]), [P]),
		fe = h.useCallback(() => ({ ripples: X, onClear: G }), [X, G]);
	return {
		Component: R,
		children: p,
		domRef: z,
		spinner: v,
		styles: K,
		startContent: ne,
		endContent: ge,
		isLoading: L,
		spinnerPlacement: T,
		spinnerSize: ze,
		disableRipple: V,
		getButtonProps: te,
		getRippleProps: fe,
		isIconOnly: F,
	};
}
function C7(e) {
	const [t, r] = xt(e, jm.variantKeys),
		{ children: n, className: o, classNames: a, label: i, ...s } = t,
		l = h.useMemo(() => jm({ ...r }), [bt(r)]),
		u = Q(a == null ? void 0 : a.base, o),
		c = i || n,
		d = h.useMemo(
			() => (c && typeof c == "string" ? c : s["aria-label"] ? "" : "Loading"),
			[n, c, s["aria-label"]],
		),
		f = h.useCallback(
			() => ({ "aria-label": d, className: l.base({ class: u }), ...s }),
			[d, l, u, s],
		);
	return { label: c, slots: l, classNames: a, getSpinnerProps: f };
}
var f4 = ue((e, t) => {
	const {
		slots: r,
		classNames: n,
		label: o,
		getSpinnerProps: a,
	} = C7({ ...e });
	return S.jsxs("div", {
		ref: t,
		...a(),
		children: [
			S.jsxs("div", {
				className: r.wrapper({ class: n == null ? void 0 : n.wrapper }),
				children: [
					S.jsx("i", {
						className: r.circle1({ class: n == null ? void 0 : n.circle1 }),
					}),
					S.jsx("i", {
						className: r.circle2({ class: n == null ? void 0 : n.circle2 }),
					}),
				],
			}),
			o &&
				S.jsx("span", {
					className: r.label({ class: n == null ? void 0 : n.label }),
					children: o,
				}),
		],
	});
});
f4.displayName = "NextUI.Spinner";
var p4 = f4,
	h4 = ue((e, t) => {
		const {
			Component: r,
			domRef: n,
			children: o,
			styles: a,
			spinnerSize: i,
			spinner: s = S.jsx(p4, { color: "current", size: i }),
			spinnerPlacement: l,
			startContent: u,
			endContent: c,
			isLoading: d,
			disableRipple: f,
			getButtonProps: p,
			getRippleProps: g,
			isIconOnly: b,
		} = $7({ ...e, ref: t });
		return S.jsxs(r, {
			ref: n,
			className: a,
			...p(),
			children: [
				u,
				d && l === "start" && s,
				d && b ? null : o,
				d && l === "end" && s,
				c,
				!f && S.jsx(c4, { ...g() }),
			],
		});
	});
h4.displayName = "NextUI.Button";
var xn = h4,
	[E7, k7] = ao({
		name: "CardContext",
		strict: !0,
		errorMessage:
			"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />",
	}),
	m4 = ue((e, t) => {
		var r;
		const { as: n, className: o, children: a, ...i } = e,
			s = n || "div",
			l = ke(t),
			{ slots: u, classNames: c } = k7(),
			d = Q(c == null ? void 0 : c.body, o);
		return S.jsx(s, {
			ref: l,
			className: (r = u.body) == null ? void 0 : r.call(u, { class: d }),
			...i,
			children: a,
		});
	});
m4.displayName = "NextUI.CardBody";
var T7 = m4;
function M7(e) {
	const [t, r] = xt(e, Km.variantKeys),
		{
			ref: n,
			as: o,
			children: a,
			disableRipple: i = !1,
			onClick: s,
			onPress: l,
			autoFocus: u,
			className: c,
			classNames: d,
			allowTextSelectionOnPress: f = !0,
			...p
		} = t,
		g = ke(n),
		b = o || (e.isPressable ? "button" : "div"),
		x = typeof b == "string",
		m = Q(d == null ? void 0 : d.base, c),
		{ onClick: v, onClear: y, ripples: P } = d4(),
		C = R => {
			!e.disableAnimation && !i && g.current && v(R);
		},
		{ buttonProps: E, isPressed: D } = ji(
			{
				onPress: l,
				elementType: o,
				isDisabled: !e.isPressable,
				onClick: nt(s, C),
				allowTextSelectionOnPress: f,
				...p,
			},
			g,
		),
		{ hoverProps: w, isHovered: V } = kt({ isDisabled: !e.isHoverable, ...p }),
		{ isFocusVisible: M, isFocused: F, focusProps: L } = gt({ autoFocus: u }),
		T = h.useMemo(() => Km({ ...r }), [bt(r)]),
		A = h.useMemo(
			() => ({
				isDisabled: e.isDisabled,
				isFooterBlurred: e.isFooterBlurred,
				disableAnimation: e.disableAnimation,
				fullWidth: e.fullWidth,
				slots: T,
				classNames: d,
			}),
			[T, d, e.isDisabled, e.isFooterBlurred, e.disableAnimation, e.fullWidth],
		),
		_ = h.useCallback(
			(R = {}) => ({
				ref: g,
				className: T.base({ class: m }),
				tabIndex: e.isPressable ? 0 : -1,
				"data-hover": H(V),
				"data-pressed": H(D),
				"data-focus": H(F),
				"data-focus-visible": H(M),
				"data-disabled": H(e.isDisabled),
				...U(
					e.isPressable ? { ...E, ...L, role: "button" } : {},
					e.isHoverable ? w : {},
					rt(p, { enabled: x }),
					rt(R),
				),
			}),
			[
				g,
				T,
				m,
				x,
				e.isPressable,
				e.isHoverable,
				e.isDisabled,
				V,
				D,
				M,
				E,
				L,
				w,
				p,
			],
		),
		N = h.useCallback(() => ({ ripples: P, onClear: y }), [P, y]);
	return {
		context: A,
		domRef: g,
		Component: b,
		classNames: d,
		children: a,
		isHovered: V,
		isPressed: D,
		isPressable: e.isPressable,
		isHoverable: e.isHoverable,
		disableAnimation: e.disableAnimation,
		disableRipple: i,
		handleClick: C,
		isFocusVisible: M,
		getCardProps: _,
		getRippleProps: N,
	};
}
var g4 = ue((e, t) => {
	const {
		children: r,
		context: n,
		Component: o,
		isPressable: a,
		disableAnimation: i,
		disableRipple: s,
		getCardProps: l,
		getRippleProps: u,
	} = M7({ ...e, ref: t });
	return S.jsxs(o, {
		...l(),
		children: [
			S.jsx(E7, { value: n, children: r }),
			a && !i && !s && S.jsx(c4, { ...u() }),
		],
	});
});
g4.displayName = "NextUI.Card";
var A7 = g4;
function M0(e, t, r) {
	let { validationBehavior: n, focus: o } = e;
	Ae(() => {
		if (n === "native" && r != null && r.current) {
			let l = t.realtimeValidation.isInvalid
				? t.realtimeValidation.validationErrors.join(" ") || "Invalid value."
				: "";
			r.current.setCustomValidity(l),
				r.current.hasAttribute("title") || (r.current.title = ""),
				t.realtimeValidation.isInvalid || t.updateValidation(I7(r.current));
		}
	});
	let a = Je(() => {
			t.resetValidation();
		}),
		i = Je(l => {
			var u;
			t.displayValidation.isInvalid || t.commitValidation();
			let c =
				r == null || (u = r.current) === null || u === void 0 ? void 0 : u.form;
			if (!l.defaultPrevented && r && c && V7(c) === r.current) {
				var d;
				o ? o() : (d = r.current) === null || d === void 0 || d.focus(),
					Bp("keyboard");
			}
			l.preventDefault();
		}),
		s = Je(() => {
			t.commitValidation();
		});
	h.useEffect(() => {
		let l = r == null ? void 0 : r.current;
		if (!l) return;
		let u = l.form;
		return (
			l.addEventListener("invalid", i),
			l.addEventListener("change", s),
			u == null || u.addEventListener("reset", a),
			() => {
				l.removeEventListener("invalid", i),
					l.removeEventListener("change", s),
					u == null || u.removeEventListener("reset", a);
			}
		);
	}, [r, i, s, a, n]);
}
function D7(e) {
	let t = e.validity;
	return {
		badInput: t.badInput,
		customError: t.customError,
		patternMismatch: t.patternMismatch,
		rangeOverflow: t.rangeOverflow,
		rangeUnderflow: t.rangeUnderflow,
		stepMismatch: t.stepMismatch,
		tooLong: t.tooLong,
		tooShort: t.tooShort,
		typeMismatch: t.typeMismatch,
		valueMissing: t.valueMissing,
		valid: t.valid,
	};
}
function I7(e) {
	return {
		isInvalid: !e.validity.valid,
		validationDetails: D7(e),
		validationErrors: e.validationMessage ? [e.validationMessage] : [],
	};
}
function V7(e) {
	for (let t = 0; t < e.elements.length; t++) {
		let r = e.elements[t];
		if (!r.validity.valid) return r;
	}
	return null;
}
const A0 = {
		badInput: !1,
		customError: !1,
		patternMismatch: !1,
		rangeOverflow: !1,
		rangeUnderflow: !1,
		stepMismatch: !1,
		tooLong: !1,
		tooShort: !1,
		typeMismatch: !1,
		valueMissing: !1,
		valid: !0,
	},
	v4 = { ...A0, customError: !0, valid: !1 },
	vo = { isInvalid: !1, validationDetails: A0, validationErrors: [] },
	R7 = h.createContext({}),
	kf = "__formValidationState" + Date.now();
function _i(e) {
	if (e[kf]) {
		let {
			realtimeValidation: t,
			displayValidation: r,
			updateValidation: n,
			resetValidation: o,
			commitValidation: a,
		} = e[kf];
		return {
			realtimeValidation: t,
			displayValidation: r,
			updateValidation: n,
			resetValidation: o,
			commitValidation: a,
		};
	}
	return L7(e);
}
function L7(e) {
	let {
		isInvalid: t,
		validationState: r,
		name: n,
		value: o,
		builtinValidation: a,
		validate: i,
		validationBehavior: s = "aria",
	} = e;
	r && (t || (t = r === "invalid"));
	let l = t
			? { isInvalid: !0, validationErrors: [], validationDetails: v4 }
			: null,
		u = h.useMemo(() => av(F7(i, o)), [i, o]);
	a != null && a.validationDetails.valid && (a = null);
	let c = h.useContext(R7),
		d = h.useMemo(
			() => (n ? (Array.isArray(n) ? n.flatMap(M => Tf(c[M])) : Tf(c[n])) : []),
			[c, n],
		),
		[f, p] = h.useState(c),
		[g, b] = h.useState(!1);
	c !== f && (p(c), b(!1));
	let x = h.useMemo(() => av(g ? [] : d), [g, d]),
		m = h.useRef(vo),
		[v, y] = h.useState(vo),
		P = h.useRef(vo),
		C = () => {
			if (!E) return;
			D(!1);
			let M = u || a || m.current;
			Bc(M, P.current) || ((P.current = M), y(M));
		},
		[E, D] = h.useState(!1);
	return (
		h.useEffect(C),
		{
			realtimeValidation: l || x || u || a || vo,
			displayValidation: s === "native" ? l || x || v : l || x || u || a || v,
			updateValidation(M) {
				s === "aria" && !Bc(v, M) ? y(M) : (m.current = M);
			},
			resetValidation() {
				let M = vo;
				Bc(M, P.current) || ((P.current = M), y(M)),
					s === "native" && D(!1),
					b(!0);
			},
			commitValidation() {
				s === "native" && D(!0), b(!0);
			},
		}
	);
}
function Tf(e) {
	return e ? (Array.isArray(e) ? e : [e]) : [];
}
function F7(e, t) {
	if (typeof e == "function") {
		let r = e(t);
		if (r && typeof r != "boolean") return Tf(r);
	}
	return [];
}
function av(e) {
	return e.length
		? { isInvalid: !0, validationErrors: e, validationDetails: v4 }
		: null;
}
function Bc(e, t) {
	return e === t
		? !0
		: e &&
				t &&
				e.isInvalid === t.isInvalid &&
				e.validationErrors.length === t.validationErrors.length &&
				e.validationErrors.every((r, n) => r === t.validationErrors[n]) &&
				Object.entries(e.validationDetails).every(
					([r, n]) => t.validationDetails[r] === n,
				);
}
function O7(...e) {
	let t = new Set(),
		r = !1,
		n = { ...A0 };
	for (let i of e) {
		var o, a;
		for (let s of i.validationErrors) t.add(s);
		r || (r = i.isInvalid);
		for (let s in n) (o = n)[(a = s)] || (o[a] = i.validationDetails[s]);
	}
	return (
		(n.valid = !r),
		{ isInvalid: r, validationErrors: [...t], validationDetails: n }
	);
}
function y4(e, t, r) {
	let {
			isDisabled: n = !1,
			isReadOnly: o = !1,
			value: a,
			name: i,
			children: s,
			"aria-label": l,
			"aria-labelledby": u,
			validationState: c = "valid",
			isInvalid: d,
		} = e,
		f = E => {
			E.stopPropagation(), t.setSelected(E.target.checked);
		},
		p = s != null,
		g = l != null || u != null;
	!p &&
		!g &&
		console.warn(
			"If you do not provide children, you must specify an aria-label for accessibility",
		);
	let { pressProps: b, isPressed: x } = er({ isDisabled: n }),
		{ pressProps: m, isPressed: v } = er({
			isDisabled: n || o,
			onPress() {
				t.toggle();
			},
		}),
		{ focusableProps: y } = fa(e, r),
		P = U(b, y),
		C = Ft(e, { labelable: !0 });
	return (
		yu(r, t.isSelected, t.setSelected),
		{
			labelProps: U(m, { onClick: E => E.preventDefault() }),
			inputProps: U(C, {
				"aria-invalid": d || c === "invalid" || void 0,
				"aria-errormessage": e["aria-errormessage"],
				"aria-controls": e["aria-controls"],
				"aria-readonly": o || void 0,
				onChange: f,
				disabled: n,
				...(a == null ? {} : { value: a }),
				name: i,
				type: "checkbox",
				...P,
			}),
			isSelected: t.isSelected,
			isPressed: x || v,
			isDisabled: n,
			isReadOnly: o,
			isInvalid: d || c === "invalid",
		}
	);
}
function ku(e) {
	let {
		id: t,
		label: r,
		"aria-labelledby": n,
		"aria-label": o,
		labelElementType: a = "label",
	} = e;
	t = Jt(t);
	let i = Jt(),
		s = {};
	r
		? ((n = n ? `${i} ${n}` : i),
		  (s = { id: i, htmlFor: a === "label" ? t : void 0 }))
		: !n &&
		  !o &&
		  console.warn(
				"If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility",
		  );
	let l = vu({ id: t, "aria-label": o, "aria-labelledby": n });
	return { labelProps: s, fieldProps: l };
}
function D0(e) {
	let { description: t, errorMessage: r, isInvalid: n, validationState: o } = e,
		{ labelProps: a, fieldProps: i } = ku(e),
		s = vn([!!t, !!r, n, o]),
		l = vn([!!t, !!r, n, o]);
	return (
		(i = U(i, {
			"aria-describedby":
				[s, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
		})),
		{
			labelProps: a,
			fieldProps: i,
			descriptionProps: { id: s },
			errorMessageProps: { id: l },
		}
	);
}
function I0(e = {}) {
	let { isReadOnly: t } = e,
		[r, n] = Cr(e.isSelected, e.defaultSelected || !1, e.onChange);
	function o(i) {
		t || n(i);
	}
	function a() {
		t || n(!r);
	}
	return { isSelected: r, setSelected: o, toggle: a };
}
function b4(e, t, r) {
	let n = _i({ ...e, value: t.isSelected }),
		{
			isInvalid: o,
			validationErrors: a,
			validationDetails: i,
		} = n.displayValidation,
		{
			labelProps: s,
			inputProps: l,
			isSelected: u,
			isPressed: c,
			isDisabled: d,
			isReadOnly: f,
		} = y4({ ...e, isInvalid: o }, t, r);
	M0(e, n, r);
	let { isIndeterminate: p, isRequired: g, validationBehavior: b = "aria" } = e;
	return (
		h.useEffect(() => {
			r.current && (r.current.indeterminate = !!p);
		}),
		{
			labelProps: s,
			inputProps: {
				...l,
				checked: u,
				"aria-required": (g && b === "aria") || void 0,
				required: g && b === "native",
			},
			isSelected: u,
			isPressed: c,
			isDisabled: d,
			isReadOnly: f,
			isInvalid: o,
			validationErrors: a,
			validationDetails: i,
		}
	);
}
const x4 = new WeakMap();
function N7(e, t) {
	let { isDisabled: r, name: n, validationBehavior: o = "aria" } = e,
		{
			isInvalid: a,
			validationErrors: i,
			validationDetails: s,
		} = t.displayValidation,
		{
			labelProps: l,
			fieldProps: u,
			descriptionProps: c,
			errorMessageProps: d,
		} = D0({
			...e,
			labelElementType: "span",
			isInvalid: a,
			errorMessage: e.errorMessage || i,
		});
	x4.set(t, {
		name: n,
		descriptionId: c.id,
		errorMessageId: d.id,
		validationBehavior: o,
	});
	let f = Ft(e, { labelable: !0 }),
		{ focusWithinProps: p } = da({
			onBlurWithin: e.onBlur,
			onFocusWithin: e.onFocus,
			onFocusWithinChange: e.onFocusChange,
		});
	return {
		groupProps: U(f, {
			role: "group",
			"aria-disabled": r || void 0,
			...u,
			...p,
		}),
		labelProps: l,
		descriptionProps: c,
		errorMessageProps: d,
		isInvalid: a,
		validationErrors: i,
		validationDetails: s,
	};
}
function j7(e, t, r) {
	const n = I0({
		isReadOnly: e.isReadOnly || t.isReadOnly,
		isSelected: t.isSelected(e.value),
		onChange(x) {
			x ? t.addValue(e.value) : t.removeValue(e.value),
				e.onChange && e.onChange(x);
		},
	});
	let {
		name: o,
		descriptionId: a,
		errorMessageId: i,
		validationBehavior: s,
	} = x4.get(t);
	var l;
	s = (l = e.validationBehavior) !== null && l !== void 0 ? l : s;
	let { realtimeValidation: u } = _i({
			...e,
			value: n.isSelected,
			name: void 0,
			validationBehavior: "aria",
		}),
		c = h.useRef(vo),
		d = () => {
			t.setInvalid(e.value, u.isInvalid ? u : c.current);
		};
	h.useEffect(d);
	let f = t.realtimeValidation.isInvalid ? t.realtimeValidation : u,
		p = s === "native" ? t.displayValidation : f;
	var g;
	let b = b4(
		{
			...e,
			isReadOnly: e.isReadOnly || t.isReadOnly,
			isDisabled: e.isDisabled || t.isDisabled,
			name: e.name || o,
			isRequired:
				(g = e.isRequired) !== null && g !== void 0 ? g : t.isRequired,
			validationBehavior: s,
			[kf]: {
				realtimeValidation: f,
				displayValidation: p,
				resetValidation: t.resetValidation,
				commitValidation: t.commitValidation,
				updateValidation(x) {
					(c.current = x), d();
				},
			},
		},
		n,
		r,
	);
	return {
		...b,
		inputProps: {
			...b.inputProps,
			"aria-describedby":
				[e["aria-describedby"], t.isInvalid ? i : null, a]
					.filter(Boolean)
					.join(" ") || void 0,
		},
	};
}
function _7(e = {}) {
	let [t, r] = Cr(e.value, e.defaultValue || [], e.onChange),
		n = !!e.isRequired && t.length === 0,
		o = h.useRef(new Map()),
		a = _i({ ...e, value: t }),
		i = a.displayValidation.isInvalid;
	var s;
	return {
		...a,
		value: t,
		setValue(u) {
			e.isReadOnly || e.isDisabled || r(u);
		},
		isDisabled: e.isDisabled || !1,
		isReadOnly: e.isReadOnly || !1,
		isSelected(u) {
			return t.includes(u);
		},
		addValue(u) {
			e.isReadOnly || e.isDisabled || t.includes(u) || r(t.concat(u));
		},
		removeValue(u) {
			e.isReadOnly ||
				e.isDisabled ||
				(t.includes(u) && r(t.filter(c => c !== u)));
		},
		toggleValue(u) {
			e.isReadOnly ||
				e.isDisabled ||
				(t.includes(u) ? r(t.filter(c => c !== u)) : r(t.concat(u)));
		},
		setInvalid(u, c) {
			let d = new Map(o.current);
			c.isInvalid ? d.set(u, c) : d.delete(u),
				(o.current = d),
				a.updateValidation(O7(...d.values()));
		},
		validationState:
			(s = e.validationState) !== null && s !== void 0
				? s
				: i
				? "invalid"
				: null,
		isInvalid: i,
		isRequired: n,
	};
}
function z7(e) {
	const {
			as: t,
			ref: r,
			classNames: n,
			children: o,
			label: a,
			radius: i,
			value: s,
			name: l,
			defaultValue: u,
			isInvalid: c,
			validationState: d,
			size: f = "md",
			color: p = "primary",
			orientation: g = "vertical",
			lineThrough: b = !1,
			isDisabled: x = !1,
			disableAnimation: m = !1,
			isReadOnly: v,
			isRequired: y,
			onValueChange: P,
			description: C,
			errorMessage: E,
			className: D,
			...w
		} = e,
		V = t || "div",
		M = typeof V == "string",
		F = ke(r),
		L = h.useMemo(
			() => ({
				...w,
				value: s,
				name: l,
				"aria-label": Dp(w["aria-label"], a),
				defaultValue: u,
				isRequired: y,
				isReadOnly: v,
				orientation: g,
				validationBehavior: "native",
				isInvalid: d === "invalid" || c,
				onChange: nt(e.onChange, P),
			}),
			[s, l, a, u, y, v, g, P, c, d, w["aria-label"], w],
		),
		T = _7(L),
		{
			labelProps: A,
			groupProps: _,
			descriptionProps: N,
			errorMessageProps: R,
			isInvalid: j,
			validationErrors: z,
			validationDetails: I,
		} = N7(L, T);
	let $ = L.isInvalid || j;
	const O = h.useMemo(
			() => ({
				size: f,
				color: p,
				radius: i,
				lineThrough: b,
				isInvalid: $,
				isDisabled: x,
				disableAnimation: m,
				groupState: T,
			}),
			[
				f,
				p,
				i,
				b,
				x,
				m,
				$,
				T == null ? void 0 : T.value,
				T == null ? void 0 : T.isDisabled,
				T == null ? void 0 : T.isReadOnly,
				T == null ? void 0 : T.isInvalid,
				T == null ? void 0 : T.isSelected,
			],
		),
		B = h.useMemo(
			() => LC({ isRequired: y, isInvalid: $, disableAnimation: m }),
			[y, $, m],
		),
		K = Q(n == null ? void 0 : n.base, D),
		W = h.useCallback(
			() => ({
				ref: F,
				className: B.base({ class: K }),
				...U(_, rt(w, { enabled: M })),
			}),
			[B, F, K, _, w],
		),
		G = h.useCallback(
			() => ({
				className: B.label({ class: n == null ? void 0 : n.label }),
				...A,
			}),
			[B, A, n == null ? void 0 : n.label],
		),
		X = h.useCallback(
			() => ({
				className: B.wrapper({ class: n == null ? void 0 : n.wrapper }),
				role: "presentation",
				"data-orientation": g,
			}),
			[B, g, n == null ? void 0 : n.wrapper],
		),
		q = h.useCallback(
			(Y = {}) => ({
				...Y,
				...N,
				className: B.description({
					class: Q(
						n == null ? void 0 : n.description,
						Y == null ? void 0 : Y.className,
					),
				}),
			}),
			[B, N, n == null ? void 0 : n.description],
		),
		re = h.useCallback(
			(Y = {}) => ({
				...Y,
				...R,
				className: B.errorMessage({
					class: Q(
						n == null ? void 0 : n.errorMessage,
						Y == null ? void 0 : Y.className,
					),
				}),
			}),
			[B, R, n == null ? void 0 : n.errorMessage],
		);
	return {
		Component: V,
		children: o,
		label: a,
		context: O,
		description: C,
		isInvalid: $,
		errorMessage:
			typeof E == "function"
				? E({ isInvalid: $, validationErrors: z, validationDetails: I })
				: E || (z == null ? void 0 : z.join(" ")),
		getGroupProps: W,
		getLabelProps: G,
		getWrapperProps: X,
		getDescriptionProps: q,
		getErrorMessageProps: re,
	};
}
var [B7, K7] = ao({ name: "CheckboxGroupContext", strict: !1 }),
	w4 = ue((e, t) => {
		const {
				children: r,
				context: n,
				label: o,
				description: a,
				isInvalid: i,
				errorMessage: s,
				getGroupProps: l,
				getLabelProps: u,
				getWrapperProps: c,
				getDescriptionProps: d,
				getErrorMessageProps: f,
			} = z7({ ...e, ref: t }),
			p = h.useMemo(() => s, [i]);
		return S.jsxs("div", {
			...l(),
			children: [
				o && S.jsx("span", { ...u(), children: o }),
				S.jsx("div", {
					...c(),
					children: S.jsx(B7, { value: n, children: r }),
				}),
				i && p
					? S.jsx("div", { ...f(), children: p })
					: a
					? S.jsx("div", { ...d(), children: a })
					: null,
			],
		});
	});
w4.displayName = "NextUI.CheckboxGroup";
var iv = w4;
function H7(e) {
	const { isSelected: t, disableAnimation: r, ...n } = e;
	return S.jsx("svg", {
		"aria-hidden": "true",
		role: "presentation",
		viewBox: "0 0 17 18",
		...n,
		children: S.jsx("polyline", {
			fill: "none",
			points: "1 9 7 14 15 4",
			stroke: "currentColor",
			strokeDasharray: 22,
			strokeDashoffset: t ? 44 : 66,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 2,
			style:
				!r && t ? { transition: "stroke-dashoffset 250ms linear 0.2s" } : {},
		}),
	});
}
function W7(e) {
	const { isSelected: t, disableAnimation: r, ...n } = e;
	return S.jsx("svg", {
		stroke: "currentColor",
		strokeWidth: 3,
		viewBox: "0 0 24 24",
		...n,
		children: S.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" }),
	});
}
function U7(e) {
	const { isIndeterminate: t, ...r } = e,
		n = t ? W7 : H7;
	return S.jsx(n, { ...r });
}
function Mf(e, t = []) {
	const r = h.useRef(e);
	return (
		Ni(() => {
			r.current = e;
		}),
		h.useCallback((...n) => {
			var o;
			return (o = r.current) == null ? void 0 : o.call(r, ...n);
		}, t)
	);
}
function Z7(e = {}) {
	var t, r, n, o, a, i;
	const s = K7(),
		l = !!s,
		{
			as: u,
			ref: c,
			value: d = "",
			children: f,
			icon: p,
			name: g,
			isRequired: b,
			isReadOnly: x = !1,
			autoFocus: m = !1,
			isSelected: v,
			validationState: y,
			size: P = (t = s == null ? void 0 : s.size) != null ? t : "md",
			color: C = (r = s == null ? void 0 : s.color) != null ? r : "primary",
			radius: E = s == null ? void 0 : s.radius,
			lineThrough: D = (n = s == null ? void 0 : s.lineThrough) != null
				? n
				: !1,
			isDisabled: w = (o = s == null ? void 0 : s.isDisabled) != null ? o : !1,
			disableAnimation: V = (a = s == null ? void 0 : s.disableAnimation) !=
			null
				? a
				: !1,
			isInvalid: M = y
				? y === "invalid"
				: (i = s == null ? void 0 : s.isInvalid) != null
				? i
				: !1,
			isIndeterminate: F = !1,
			defaultSelected: L,
			classNames: T,
			className: A,
			onValueChange: _,
			...N
		} = e;
	s &&
		m3 &&
		(v &&
			Kd(
				"The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.",
				"Checkbox",
			),
		L &&
			Kd(
				"The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.",
				"Checkbox",
			));
	const R = u || "label",
		j = h.useRef(null),
		z = h.useRef(null);
	let I = e.onChange;
	l &&
		(I = nt(() => {
			s.groupState.resetValidation();
		}, I));
	const $ = h.useId(),
		O = h.useMemo(
			() => ({
				name: g,
				value: d,
				children: f,
				autoFocus: m,
				defaultSelected: L,
				isIndeterminate: F,
				isRequired: b,
				isInvalid: M,
				isSelected: v,
				isDisabled: w,
				isReadOnly: x,
				"aria-label": Dp(N["aria-label"], f),
				"aria-labelledby": N["aria-labelledby"] || $,
				onChange: _,
			}),
			[
				d,
				g,
				$,
				f,
				m,
				M,
				F,
				w,
				x,
				v,
				L,
				N["aria-label"],
				N["aria-labelledby"],
				_,
			],
		),
		B = I0(O),
		{
			inputProps: K,
			isSelected: W,
			isDisabled: G,
			isReadOnly: X,
			isPressed: q,
		} = l
			? j7(
					{ ...O, isInvalid: M, validationBehavior: "native" },
					s.groupState,
					z,
			  )
			: b4({ ...O, validationBehavior: "native" }, B, z),
		re = G || X,
		[Y, ie] = h.useState(!1),
		{ pressProps: se } = er({
			isDisabled: re,
			onPressStart(he) {
				he.pointerType !== "keyboard" && ie(!0);
			},
			onPressEnd(he) {
				he.pointerType !== "keyboard" && ie(!1);
			},
		}),
		te = re ? !1 : Y || q;
	b && (K.required = !0);
	const { hoverProps: be, isHovered: ne } = kt({ isDisabled: K.disabled }),
		{
			focusProps: ge,
			isFocused: ze,
			isFocusVisible: fe,
		} = gt({ autoFocus: K.autoFocus }),
		we = h.useMemo(
			() =>
				RC({
					color: C,
					size: P,
					radius: E,
					isInvalid: M,
					lineThrough: D,
					isDisabled: G,
					disableAnimation: V,
				}),
			[C, P, E, M, D, G, V],
		);
	Ni(() => {
		if (!z.current) return;
		const he = !!z.current.checked;
		B.setSelected(he);
	}, [z.current]);
	const He = Mf(I),
		We = h.useCallback(
			he => {
				if (X || G) {
					he.preventDefault();
					return;
				}
				He == null || He(he);
			},
			[X, G, He],
		),
		Ot = Q(T == null ? void 0 : T.base, A),
		nr = h.useCallback(
			() => ({
				ref: j,
				className: we.base({ class: Ot }),
				"data-disabled": H(G),
				"data-selected": H(W || F),
				"data-invalid": H(M),
				"data-hover": H(ne),
				"data-focus": H(ze),
				"data-pressed": H(te),
				"data-readonly": H(K.readOnly),
				"data-focus-visible": H(fe),
				"data-indeterminate": H(F),
				...U(be, se, N),
			}),
			[we, Ot, G, W, F, M, ne, ze, te, K.readOnly, fe, be, se, N],
		),
		or = h.useCallback(
			(he = {}) => ({
				...he,
				"aria-hidden": !0,
				className: Q(
					we.wrapper({
						class: Q(
							T == null ? void 0 : T.wrapper,
							he == null ? void 0 : he.className,
						),
					}),
				),
			}),
			[we, T == null ? void 0 : T.wrapper],
		),
		ft = h.useCallback(
			() => ({ ref: yl(z, c), ...U(K, ge), onChange: nt(K.onChange, We) }),
			[K, ge, We],
		),
		mr = h.useCallback(
			() => ({
				id: $,
				className: we.label({ class: T == null ? void 0 : T.label }),
			}),
			[we, T == null ? void 0 : T.label, G, W, M],
		),
		xe = h.useCallback(
			() => ({
				isSelected: W,
				isIndeterminate: !!F,
				disableAnimation: !!V,
				className: we.icon({ class: T == null ? void 0 : T.icon }),
			}),
			[we, T == null ? void 0 : T.icon, W, F, V],
		);
	return {
		Component: R,
		icon: p,
		children: f,
		isSelected: W,
		isDisabled: G,
		isInvalid: M,
		isFocused: ze,
		isHovered: ne,
		isFocusVisible: fe,
		getBaseProps: nr,
		getWrapperProps: or,
		getInputProps: ft,
		getLabelProps: mr,
		getIconProps: xe,
	};
}
var S4 = ue((e, t) => {
	const {
			Component: r,
			children: n,
			icon: o = S.jsx(U7, {}),
			getBaseProps: a,
			getWrapperProps: i,
			getInputProps: s,
			getIconProps: l,
			getLabelProps: u,
		} = Z7({ ...e, ref: t }),
		c = typeof o == "function" ? o(l()) : h.cloneElement(o, l());
	return S.jsxs(r, {
		...a(),
		children: [
			S.jsx(Ii, { children: S.jsx("input", { ...s() }) }),
			S.jsx("span", { ...i(), children: c }),
			n && S.jsx("span", { ...u(), children: n }),
		],
	});
});
S4.displayName = "NextUI.Checkbox";
var sv = S4;
function G7(e, t) {
	let {
			elementType: r = "a",
			onPress: n,
			onPressStart: o,
			onPressEnd: a,
			onClick: i,
			isDisabled: s,
			...l
		} = e,
		u = {};
	r !== "a" && (u = { role: "link", tabIndex: s ? void 0 : 0 });
	let { focusableProps: c } = fa(e, t),
		{ pressProps: d, isPressed: f } = er({
			onPress: n,
			onPressStart: o,
			onPressEnd: a,
			isDisabled: s,
			ref: t,
		}),
		p = Ft(l, { labelable: !0, isLink: r === "a" }),
		g = U(c, d),
		b = gu();
	return {
		isPressed: f,
		linkProps: U(p, {
			...g,
			...u,
			"aria-disabled": s || void 0,
			"aria-current": e["aria-current"],
			onClick: x => {
				var m;
				(m = d.onClick) == null || m.call(d, x),
					i && i(x),
					!b.isNative &&
						x.currentTarget instanceof HTMLAnchorElement &&
						x.currentTarget.href &&
						!x.isDefaultPrevented() &&
						Qb(x.currentTarget, x) &&
						(x.preventDefault(), b.open(x.currentTarget, x));
			},
		}),
	};
}
function Y7(e) {
	var t, r;
	const [n, o] = xt(e, Bm.variantKeys),
		{
			ref: a,
			as: i,
			children: s,
			anchorIcon: l,
			isExternal: u = !1,
			showAnchorIcon: c = !1,
			autoFocus: d = !1,
			className: f,
			onPress: p,
			onPressStart: g,
			onPressEnd: b,
			onClick: x,
			...m
		} = n,
		v = i || "a",
		y = ke(a),
		{ linkProps: P } = G7(
			{
				...m,
				onPress: p,
				onPressStart: g,
				onPressEnd: b,
				onClick: x,
				isDisabled: e.isDisabled,
				elementType: `${i}`,
			},
			y,
		),
		{ isFocused: C, isFocusVisible: E, focusProps: D } = gt({ autoFocus: d });
	u &&
		((m.rel = (t = m.rel) != null ? t : "noopener noreferrer"),
		(m.target = (r = m.target) != null ? r : "_blank"));
	const w = h.useMemo(() => Bm({ ...o, className: f }), [bt(o), f]),
		V = h.useCallback(
			() => ({
				ref: y,
				className: w,
				"data-focus": H(C),
				"data-disabled": H(e.isDisabled),
				"data-focus-visible": H(E),
				...U(D, P, m),
			}),
			[w, C, E, D, P, m],
		);
	return {
		Component: v,
		children: s,
		anchorIcon: l,
		showAnchorIcon: c,
		getLinkProps: V,
	};
}
var P4 = ue((e, t) => {
	const {
		Component: r,
		children: n,
		showAnchorIcon: o,
		anchorIcon: a = S.jsx(jC, { className: VC }),
		getLinkProps: i,
	} = Y7({ ref: t, ...e });
	return S.jsx(r, {
		...i(),
		children: S.jsxs(S.Fragment, { children: [n, o && a] }),
	});
});
P4.displayName = "NextUI.Link";
var lv = P4;
const uv = e => typeof e == "object" && e != null && e.nodeType === 1,
	cv = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip",
	Kc = (e, t) => {
		if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
			const r = getComputedStyle(e, null);
			return (
				cv(r.overflowY, t) ||
				cv(r.overflowX, t) ||
				(n => {
					const o = (a => {
						if (!a.ownerDocument || !a.ownerDocument.defaultView) return null;
						try {
							return a.ownerDocument.defaultView.frameElement;
						} catch {
							return null;
						}
					})(n);
					return (
						!!o &&
						(o.clientHeight < n.scrollHeight || o.clientWidth < n.scrollWidth)
					);
				})(e)
			);
		}
		return !1;
	},
	Ss = (e, t, r, n, o, a, i, s) =>
		(a < e && i > t) || (a > e && i < t)
			? 0
			: (a <= e && s <= r) || (i >= t && s >= r)
			? a - e - n
			: (i > t && s < r) || (a < e && s > r)
			? i - t + o
			: 0,
	X7 = e => {
		const t = e.parentElement;
		return t ?? (e.getRootNode().host || null);
	},
	dv = (e, t) => {
		var r, n, o, a;
		if (typeof document > "u") return [];
		const {
				scrollMode: i,
				block: s,
				inline: l,
				boundary: u,
				skipOverflowHiddenElements: c,
			} = t,
			d = typeof u == "function" ? u : N => N !== u;
		if (!uv(e)) throw new TypeError("Invalid target");
		const f = document.scrollingElement || document.documentElement,
			p = [];
		let g = e;
		for (; uv(g) && d(g); ) {
			if (((g = X7(g)), g === f)) {
				p.push(g);
				break;
			}
			(g != null &&
				g === document.body &&
				Kc(g) &&
				!Kc(document.documentElement)) ||
				(g != null && Kc(g, c) && p.push(g));
		}
		const b =
				(n = (r = window.visualViewport) == null ? void 0 : r.width) != null
					? n
					: innerWidth,
			x =
				(a = (o = window.visualViewport) == null ? void 0 : o.height) != null
					? a
					: innerHeight,
			{ scrollX: m, scrollY: v } = window,
			{
				height: y,
				width: P,
				top: C,
				right: E,
				bottom: D,
				left: w,
			} = e.getBoundingClientRect(),
			{
				top: V,
				right: M,
				bottom: F,
				left: L,
			} = (N => {
				const R = window.getComputedStyle(N);
				return {
					top: parseFloat(R.scrollMarginTop) || 0,
					right: parseFloat(R.scrollMarginRight) || 0,
					bottom: parseFloat(R.scrollMarginBottom) || 0,
					left: parseFloat(R.scrollMarginLeft) || 0,
				};
			})(e);
		let T =
				s === "start" || s === "nearest"
					? C - V
					: s === "end"
					? D + F
					: C + y / 2 - V + F,
			A = l === "center" ? w + P / 2 - L + M : l === "end" ? E + M : w - L;
		const _ = [];
		for (let N = 0; N < p.length; N++) {
			const R = p[N],
				{
					height: j,
					width: z,
					top: I,
					right: $,
					bottom: O,
					left: B,
				} = R.getBoundingClientRect();
			if (
				i === "if-needed" &&
				C >= 0 &&
				w >= 0 &&
				D <= x &&
				E <= b &&
				C >= I &&
				D <= O &&
				w >= B &&
				E <= $
			)
				return _;
			const K = getComputedStyle(R),
				W = parseInt(K.borderLeftWidth, 10),
				G = parseInt(K.borderTopWidth, 10),
				X = parseInt(K.borderRightWidth, 10),
				q = parseInt(K.borderBottomWidth, 10);
			let re = 0,
				Y = 0;
			const ie = "offsetWidth" in R ? R.offsetWidth - R.clientWidth - W - X : 0,
				se = "offsetHeight" in R ? R.offsetHeight - R.clientHeight - G - q : 0,
				te =
					"offsetWidth" in R
						? R.offsetWidth === 0
							? 0
							: z / R.offsetWidth
						: 0,
				be =
					"offsetHeight" in R
						? R.offsetHeight === 0
							? 0
							: j / R.offsetHeight
						: 0;
			if (f === R)
				(re =
					s === "start"
						? T
						: s === "end"
						? T - x
						: s === "nearest"
						? Ss(v, v + x, x, G, q, v + T, v + T + y, y)
						: T - x / 2),
					(Y =
						l === "start"
							? A
							: l === "center"
							? A - b / 2
							: l === "end"
							? A - b
							: Ss(m, m + b, b, W, X, m + A, m + A + P, P)),
					(re = Math.max(0, re + v)),
					(Y = Math.max(0, Y + m));
			else {
				(re =
					s === "start"
						? T - I - G
						: s === "end"
						? T - O + q + se
						: s === "nearest"
						? Ss(I, O, j, G, q + se, T, T + y, y)
						: T - (I + j / 2) + se / 2),
					(Y =
						l === "start"
							? A - B - W
							: l === "center"
							? A - (B + z / 2) + ie / 2
							: l === "end"
							? A - $ + X + ie
							: Ss(B, $, z, W, X + ie, A, A + P, P));
				const { scrollLeft: ne, scrollTop: ge } = R;
				(re =
					be === 0
						? 0
						: Math.max(
								0,
								Math.min(ge + re / be, R.scrollHeight - j / be + se),
						  )),
					(Y =
						te === 0
							? 0
							: Math.max(
									0,
									Math.min(ne + Y / te, R.scrollWidth - z / te + ie),
							  )),
					(T += ge - re),
					(A += ne - Y);
			}
			_.push({ el: R, top: re, left: Y });
		}
		return _;
	},
	q7 = e =>
		e === !1
			? { block: "end", inline: "nearest" }
			: (t => t === Object(t) && Object.keys(t).length !== 0)(e)
			? e
			: { block: "start", inline: "nearest" };
function Q7(e, t) {
	if (
		!e.isConnected ||
		!(n => {
			let o = n;
			for (; o && o.parentNode; ) {
				if (o.parentNode === document) return !0;
				o =
					o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
			}
			return !1;
		})(e)
	)
		return;
	if ((n => typeof n == "object" && typeof n.behavior == "function")(t))
		return t.behavior(dv(e, t));
	const r = typeof t == "boolean" || t == null ? void 0 : t.behavior;
	for (const { el: n, top: o, left: a } of dv(e, q7(t)))
		n.scroll({ top: o, left: a, behavior: r });
}
function Tu(e) {
	let [t, r] = Cr(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
	const n = h.useCallback(() => {
			r(!0);
		}, [r]),
		o = h.useCallback(() => {
			r(!1);
		}, [r]),
		a = h.useCallback(() => {
			r(!t);
		}, [r, t]);
	return { isOpen: t, setOpen: r, open: n, close: o, toggle: a };
}
const J7 = 1500,
	fv = 500;
let Rn = {},
	eA = 0,
	Ia = !1,
	Mr = null,
	Ln = null;
function tA(e = {}) {
	let { delay: t = J7, closeDelay: r = fv } = e,
		{ isOpen: n, open: o, close: a } = Tu(e),
		i = h.useMemo(() => `${++eA}`, []),
		s = h.useRef(),
		l = () => {
			Rn[i] = d;
		},
		u = () => {
			for (let p in Rn) p !== i && (Rn[p](!0), delete Rn[p]);
		},
		c = () => {
			clearTimeout(s.current),
				(s.current = null),
				u(),
				l(),
				(Ia = !0),
				o(),
				Mr && (clearTimeout(Mr), (Mr = null)),
				Ln && (clearTimeout(Ln), (Ln = null));
		},
		d = p => {
			p || r <= 0
				? (clearTimeout(s.current), (s.current = null), a())
				: s.current ||
				  (s.current = setTimeout(() => {
						(s.current = null), a();
				  }, r)),
				Mr && (clearTimeout(Mr), (Mr = null)),
				Ia &&
					(Ln && clearTimeout(Ln),
					(Ln = setTimeout(() => {
						delete Rn[i], (Ln = null), (Ia = !1);
					}, Math.max(fv, r))));
		},
		f = () => {
			u(),
				l(),
				!n && !Mr && !Ia
					? (Mr = setTimeout(() => {
							(Mr = null), (Ia = !0), c();
					  }, t))
					: n || c();
		};
	return (
		h.useEffect(
			() => () => {
				clearTimeout(s.current), Rn[i] && delete Rn[i];
			},
			[i],
		),
		{
			isOpen: n,
			open: p => {
				!p && t > 0 && !s.current ? f() : c();
			},
			close: d,
		}
	);
}
function rA(e, t) {
	let r = Ft(e, { labelable: !0 }),
		{ hoverProps: n } = kt({
			onHoverStart: () => (t == null ? void 0 : t.open(!0)),
			onHoverEnd: () => (t == null ? void 0 : t.close()),
		});
	return { tooltipProps: U(r, n, { role: "tooltip" }) };
}
function nA(e, t, r) {
	let { isDisabled: n, trigger: o } = e,
		a = Jt(),
		i = h.useRef(!1),
		s = h.useRef(!1),
		l = () => {
			(i.current || s.current) && t.open(s.current);
		},
		u = m => {
			!i.current && !s.current && t.close(m);
		};
	h.useEffect(() => {
		let m = v => {
			r &&
				r.current &&
				v.key === "Escape" &&
				(v.stopPropagation(), t.close(!0));
		};
		if (t.isOpen)
			return (
				document.addEventListener("keydown", m, !0),
				() => {
					document.removeEventListener("keydown", m, !0);
				}
			);
	}, [r, t]);
	let c = () => {
			o !== "focus" &&
				(kl() === "pointer" ? (i.current = !0) : (i.current = !1), l());
		},
		d = () => {
			o !== "focus" && ((s.current = !1), (i.current = !1), u());
		},
		f = () => {
			(s.current = !1), (i.current = !1), u(!0);
		},
		p = () => {
			ra() && ((s.current = !0), l());
		},
		g = () => {
			(s.current = !1), (i.current = !1), u(!0);
		},
		{ hoverProps: b } = kt({ isDisabled: n, onHoverStart: c, onHoverEnd: d }),
		{ focusableProps: x } = fa({ isDisabled: n, onFocus: p, onBlur: g }, r);
	return {
		triggerProps: {
			"aria-describedby": t.isOpen ? a : void 0,
			...U(x, b, { onPointerDown: f, onKeyDown: f }),
		},
		tooltipProps: { id: a },
	};
}
function oA(e) {
	const [t, r] = xt(e, Ll.variantKeys),
		{
			ref: n,
			as: o,
			isOpen: a,
			content: i,
			children: s,
			defaultOpen: l,
			onOpenChange: u,
			isDisabled: c,
			trigger: d,
			shouldFlip: f = !0,
			containerPadding: p = 12,
			placement: g = "top",
			delay: b = 0,
			closeDelay: x = 500,
			showArrow: m = !1,
			offset: v = 7,
			crossOffset: y = 0,
			isDismissable: P,
			shouldCloseOnBlur: C = !0,
			portalContainer: E,
			isKeyboardDismissDisabled: D = !1,
			updatePositionDeps: w = [],
			shouldCloseOnInteractOutside: V,
			className: M,
			onClose: F,
			motionProps: L,
			classNames: T,
			...A
		} = t,
		_ = o || "div",
		N = tA({
			delay: b,
			closeDelay: x,
			isDisabled: c,
			defaultOpen: l,
			isOpen: a,
			onOpenChange: se => {
				u == null || u(se), se || F == null || F();
			},
		}),
		R = h.useRef(null),
		j = h.useRef(null),
		z = h.useId(),
		I = N.isOpen && !c;
	h.useImperativeHandle(n, () => $b(j));
	const { triggerProps: $, tooltipProps: O } = nA(
			{ isDisabled: c, trigger: d },
			N,
			R,
		),
		{ tooltipProps: B } = rA({ isOpen: I, ...U(t, O) }, N),
		{
			overlayProps: K,
			placement: W,
			updatePosition: G,
		} = sx({
			isOpen: I,
			targetRef: R,
			placement: i4(g),
			overlayRef: j,
			offset: m ? v + 3 : v,
			crossOffset: y,
			shouldFlip: f,
			containerPadding: p,
		});
	Ni(() => {
		w.length && G();
	}, w);
	const { overlayProps: X } = Up(
			{
				isOpen: I,
				onClose: N.close,
				isDismissable: P,
				shouldCloseOnBlur: C,
				isKeyboardDismissDisabled: D,
				shouldCloseOnInteractOutside: V,
			},
			j,
		),
		q = h.useMemo(() => {
			var se, te, be;
			return Ll({
				...r,
				radius: (se = e == null ? void 0 : e.radius) != null ? se : "md",
				size: (te = e == null ? void 0 : e.size) != null ? te : "md",
				shadow: (be = e == null ? void 0 : e.shadow) != null ? be : "sm",
			});
		}, [
			bt(r),
			e == null ? void 0 : e.radius,
			e == null ? void 0 : e.size,
			e == null ? void 0 : e.shadow,
		]),
		re = h.useCallback(
			(se = {}, te = null) => ({
				...U($, se),
				ref: yl(te, R),
				"aria-describedby": I ? z : void 0,
			}),
			[$, I, z, N],
		),
		Y = h.useCallback(
			() => ({
				ref: j,
				"data-slot": "base",
				"data-open": H(I),
				"data-arrow": H(m),
				"data-disabled": H(c),
				"data-placement": Kl(W, g),
				...U(B, X, A),
				style: U(K.style, A.style, t.style),
				className: q.base({ class: T == null ? void 0 : T.base }),
				id: z,
			}),
			[q, I, m, c, W, g, B, X, A, K, t, z],
		),
		ie = h.useCallback(
			() => ({
				"data-slot": "content",
				"data-open": H(I),
				"data-arrow": H(m),
				"data-disabled": H(c),
				"data-placement": Kl(W, g),
				className: q.content({ class: Q(T == null ? void 0 : T.content, M) }),
			}),
			[q, I, m, c, W, g, T],
		);
	return {
		Component: _,
		content: i,
		children: s,
		isOpen: I,
		triggerRef: R,
		showArrow: m,
		portalContainer: E,
		placement: g,
		disableAnimation: e == null ? void 0 : e.disableAnimation,
		isDisabled: c,
		motionProps: L,
		getTooltipContentProps: ie,
		getTriggerProps: re,
		getTooltipProps: Y,
	};
}
var $4 = ue((e, t) => {
	const {
		Component: r,
		children: n,
		content: o,
		isOpen: a,
		portalContainer: i,
		placement: s,
		disableAnimation: l,
		motionProps: u,
		getTriggerProps: c,
		getTooltipProps: d,
		getTooltipContentProps: f,
	} = oA({ ...e, ref: t });
	let p;
	try {
		if (h.Children.count(n) !== 1) throw new Error();
		if (!h.isValidElement(n)) p = S.jsx("p", { ...c(), children: n });
		else {
			const P = n;
			p = h.cloneElement(P, c(P.props, P.ref));
		}
	} catch {
		(p = S.jsx("span", {})),
			Kd("Tooltip must have only one child node. Please, check your code.");
	}
	const { ref: g, id: b, style: x, ...m } = d(),
		v = S.jsx("div", {
			ref: g,
			id: b,
			style: x,
			children: S.jsx(Zr, {
				features: Gr,
				children: S.jsx(Ur.div, {
					animate: "enter",
					exit: "exit",
					initial: "exit",
					variants: aa.scaleSpring,
					...U(u, m),
					style: { ...T0(s) },
					children: S.jsx(r, { ...f(), children: o }),
				}),
			}),
		});
	return S.jsxs(S.Fragment, {
		children: [
			p,
			l && a
				? S.jsx(Tm, {
						portalContainer: i,
						children: S.jsx("div", {
							ref: g,
							id: b,
							style: x,
							...m,
							children: S.jsx(r, { ...f(), children: o }),
						}),
				  })
				: S.jsx(Oi, {
						children: a ? S.jsx(Tm, { portalContainer: i, children: v }) : null,
				  }),
		],
	});
});
$4.displayName = "NextUI.Tooltip";
var Hl = $4;
function aA(e, t, r) {
	let {
		labelProps: n,
		inputProps: o,
		isSelected: a,
		isPressed: i,
		isDisabled: s,
		isReadOnly: l,
	} = y4(e, t, r);
	return {
		labelProps: n,
		inputProps: { ...o, role: "switch", checked: a },
		isSelected: a,
		isPressed: i,
		isDisabled: s,
		isReadOnly: l,
	};
}
function iA(e = {}) {
	const [t, r] = xt(e, Fm.variantKeys),
		{
			ref: n,
			as: o,
			name: a,
			value: i = "",
			isReadOnly: s = !1,
			autoFocus: l = !1,
			startContent: u,
			endContent: c,
			defaultSelected: d,
			isSelected: f,
			children: p,
			thumbIcon: g,
			className: b,
			classNames: x,
			onChange: m,
			onValueChange: v,
			...y
		} = t,
		P = o || "label",
		C = h.useRef(null),
		E = c3(n, C),
		D = h.useId(),
		w = h.useMemo(() => {
			const ne = y["aria-label"] || typeof p == "string" ? p : void 0;
			return {
				name: a,
				value: i,
				children: p,
				autoFocus: l,
				defaultSelected: d,
				isSelected: f,
				isDisabled: !!e.isDisabled,
				isReadOnly: s,
				"aria-label": ne,
				"aria-labelledby": y["aria-labelledby"] || D,
				onChange: v,
			};
		}, [
			i,
			a,
			D,
			p,
			l,
			s,
			f,
			d,
			e.isDisabled,
			y["aria-label"],
			y["aria-labelledby"],
			v,
		]),
		V = I0(w),
		{ inputProps: M, isPressed: F, isReadOnly: L } = aA(w, V, C),
		{
			focusProps: T,
			isFocused: A,
			isFocusVisible: _,
		} = gt({ autoFocus: M.autoFocus }),
		{ hoverProps: N, isHovered: R } = kt({ isDisabled: M.disabled }),
		j = w.isDisabled || L,
		[z, I] = h.useState(!1),
		{ pressProps: $ } = er({
			isDisabled: j,
			onPressStart(ne) {
				ne.pointerType !== "keyboard" && I(!0);
			},
			onPressEnd(ne) {
				ne.pointerType !== "keyboard" && I(!1);
			},
		}),
		O = j ? !1 : z || F,
		B = M.checked,
		K = M.disabled,
		W = h.useMemo(() => Fm({ ...r }), [bt(r)]),
		G = Q(x == null ? void 0 : x.base, b),
		X = ne => ({
			...U(N, $, y, ne),
			ref: E,
			className: W.base({ class: Q(G, ne == null ? void 0 : ne.className) }),
			"data-disabled": H(K),
			"data-selected": H(B),
			"data-readonly": H(L),
			"data-focus": H(A),
			"data-focus-visible": H(_),
			"data-hover": H(R),
			"data-pressed": H(O),
		}),
		q = h.useCallback(
			(ne = {}) => ({
				...ne,
				"aria-hidden": !0,
				className: Q(
					W.wrapper({
						class: Q(
							x == null ? void 0 : x.wrapper,
							ne == null ? void 0 : ne.className,
						),
					}),
				),
			}),
			[W, x == null ? void 0 : x.wrapper],
		),
		re = (ne = {}) => ({
			...U(M, T, ne),
			ref: C,
			id: M.id,
			onChange: nt(m, M.onChange),
		}),
		Y = h.useCallback(
			(ne = {}) => ({
				...ne,
				className: W.thumb({
					class: Q(
						x == null ? void 0 : x.thumb,
						ne == null ? void 0 : ne.className,
					),
				}),
			}),
			[W, x == null ? void 0 : x.thumb],
		),
		ie = h.useCallback(
			(ne = {}) => ({
				...ne,
				id: D,
				className: W.label({
					class: Q(
						x == null ? void 0 : x.label,
						ne == null ? void 0 : ne.className,
					),
				}),
			}),
			[W, x == null ? void 0 : x.label, K, B],
		),
		se = h.useCallback(
			(ne = { includeStateProps: !1 }) =>
				U(
					{
						width: "1em",
						height: "1em",
						className: W.thumbIcon({
							class: Q(x == null ? void 0 : x.thumbIcon),
						}),
					},
					ne.includeStateProps ? { isSelected: B } : {},
				),
			[W, x == null ? void 0 : x.thumbIcon, B],
		),
		te = h.useCallback(
			(ne = {}) => ({
				width: "1em",
				height: "1em",
				...ne,
				className: W.startContent({
					class: Q(
						x == null ? void 0 : x.startContent,
						ne == null ? void 0 : ne.className,
					),
				}),
			}),
			[W, x == null ? void 0 : x.startContent, B],
		),
		be = h.useCallback(
			(ne = {}) => ({
				width: "1em",
				height: "1em",
				...ne,
				className: W.endContent({
					class: Q(
						x == null ? void 0 : x.endContent,
						ne == null ? void 0 : ne.className,
					),
				}),
			}),
			[W, x == null ? void 0 : x.endContent, B],
		);
	return {
		Component: P,
		slots: W,
		classNames: x,
		domRef: E,
		children: p,
		thumbIcon: g,
		startContent: u,
		endContent: c,
		isHovered: R,
		isSelected: B,
		isPressed: O,
		isFocused: A,
		isFocusVisible: _,
		isDisabled: K,
		getBaseProps: X,
		getWrapperProps: q,
		getInputProps: re,
		getLabelProps: ie,
		getThumbProps: Y,
		getThumbIconProps: se,
		getStartContentProps: te,
		getEndContentProps: be,
	};
}
var C4 = ue((e, t) => {
	const {
			Component: r,
			children: n,
			startContent: o,
			endContent: a,
			thumbIcon: i,
			getBaseProps: s,
			getInputProps: l,
			getWrapperProps: u,
			getThumbProps: c,
			getThumbIconProps: d,
			getLabelProps: f,
			getStartContentProps: p,
			getEndContentProps: g,
		} = iA({ ...e, ref: t }),
		b =
			typeof i == "function"
				? i(d({ includeStateProps: !0 }))
				: i && h.cloneElement(i, d()),
		x = o && h.cloneElement(o, p()),
		m = a && h.cloneElement(a, g());
	return S.jsxs(r, {
		...s(),
		children: [
			S.jsx(Ii, { children: S.jsx("input", { ...l() }) }),
			S.jsxs("span", {
				...u(),
				children: [o && x, S.jsx("span", { ...c(), children: i && b }), a && m],
			}),
			n && S.jsx("span", { ...f(), children: n }),
		],
	});
});
C4.displayName = "NextUI.Switch";
var sA = C4;
function lA(e = {}) {
	const { rerender: t = !1, delay: r = 0 } = e,
		n = h.useRef(!1),
		[o, a] = h.useState(!1);
	return (
		h.useEffect(() => {
			n.current = !0;
			let i = null;
			return (
				t &&
					(r > 0
						? (i = setTimeout(() => {
								a(!0);
						  }, r))
						: a(!0)),
				() => {
					(n.current = !1), t && a(!1), i && clearTimeout(i);
				}
			);
		}, [t]),
		[h.useCallback(() => n.current, []), o]
	);
}
function uA(e, t) {
	let {
			inputElementType: r = "input",
			isDisabled: n = !1,
			isRequired: o = !1,
			isReadOnly: a = !1,
			type: i = "text",
			validationBehavior: s = "aria",
		} = e,
		[l, u] = Cr(e.value, e.defaultValue || "", e.onChange),
		{ focusableProps: c } = fa(e, t),
		d = _i({ ...e, value: l }),
		{
			isInvalid: f,
			validationErrors: p,
			validationDetails: g,
		} = d.displayValidation,
		{
			labelProps: b,
			fieldProps: x,
			descriptionProps: m,
			errorMessageProps: v,
		} = D0({ ...e, isInvalid: f, errorMessage: e.errorMessage || p }),
		y = Ft(e, { labelable: !0 });
	const P = { type: i, pattern: e.pattern };
	return (
		yu(t, l, u),
		M0(e, d, t),
		h.useEffect(() => {
			if (t.current instanceof Yt(t.current).HTMLTextAreaElement) {
				let C = t.current;
				Object.defineProperty(C, "defaultValue", {
					get: () => C.value,
					set: () => {},
					configurable: !0,
				});
			}
		}, [t]),
		{
			labelProps: b,
			inputProps: U(y, r === "input" && P, {
				disabled: n,
				readOnly: a,
				required: o && s === "native",
				"aria-required": (o && s === "aria") || void 0,
				"aria-invalid": f || void 0,
				"aria-errormessage": e["aria-errormessage"],
				"aria-activedescendant": e["aria-activedescendant"],
				"aria-autocomplete": e["aria-autocomplete"],
				"aria-haspopup": e["aria-haspopup"],
				value: l,
				onChange: C => u(C.target.value),
				autoComplete: e.autoComplete,
				autoCapitalize: e.autoCapitalize,
				maxLength: e.maxLength,
				minLength: e.minLength,
				name: e.name,
				placeholder: e.placeholder,
				inputMode: e.inputMode,
				onCopy: e.onCopy,
				onCut: e.onCut,
				onPaste: e.onPaste,
				onCompositionEnd: e.onCompositionEnd,
				onCompositionStart: e.onCompositionStart,
				onCompositionUpdate: e.onCompositionUpdate,
				onSelect: e.onSelect,
				onBeforeInput: e.onBeforeInput,
				onInput: e.onInput,
				...c,
				...x,
			}),
			descriptionProps: m,
			errorMessageProps: v,
			isInvalid: f,
			validationErrors: p,
			validationDetails: g,
		}
	);
}
function E4(e) {
	var t, r, n;
	const [o, a] = xt(e, zm.variantKeys),
		{
			ref: i,
			as: s,
			type: l,
			label: u,
			baseRef: c,
			wrapperRef: d,
			description: f,
			className: p,
			classNames: g,
			autoFocus: b,
			startContent: x,
			endContent: m,
			onClear: v,
			onChange: y,
			validationState: P,
			innerWrapperRef: C,
			onValueChange: E = () => {},
			...D
		} = o,
		w = h.useCallback(
			le => {
				E(le ?? "");
			},
			[E],
		),
		[V, M] = h.useState(!1),
		F = s || "div",
		L = ke(i),
		T = ke(c),
		A = ke(d),
		_ = ke(C),
		[N, R] = Cr(o.value, (t = o.defaultValue) != null ? t : "", w),
		j = ["date", "time", "month", "week", "range"].includes(l),
		z = !y3(N) || j,
		I = z || V,
		$ = Q(g == null ? void 0 : g.base, p, z ? "is-filled" : ""),
		O = e.isMultiline,
		B = h.useCallback(() => {
			var le;
			R(""), v == null || v(), (le = L.current) == null || le.focus();
		}, [R, v]),
		{
			labelProps: K,
			inputProps: W,
			isInvalid: G,
			validationErrors: X,
			validationDetails: q,
			descriptionProps: re,
			errorMessageProps: Y,
		} = uA(
			{
				...e,
				validationBehavior: "native",
				autoCapitalize: e.autoCapitalize,
				value:
					(n =
						(r = L == null ? void 0 : L.current) == null ? void 0 : r.value) !=
					null
						? n
						: N,
				"aria-label": Dp(
					e == null ? void 0 : e["aria-label"],
					e == null ? void 0 : e.label,
					e == null ? void 0 : e.placeholder,
				),
				inputElementType: O ? "textarea" : "input",
				onChange: R,
			},
			L,
		),
		{
			isFocusVisible: ie,
			isFocused: se,
			focusProps: te,
		} = gt({ autoFocus: b, isTextInput: !0 }),
		{ isHovered: be, hoverProps: ne } = kt({
			isDisabled: !!(e != null && e.isDisabled),
		}),
		{ focusProps: ge, isFocusVisible: ze } = gt(),
		{ focusWithinProps: fe } = da({ onFocusWithinChange: M }),
		{ pressProps: we } = er({
			isDisabled: !!(e != null && e.isDisabled),
			onPress: B,
		}),
		He = P === "invalid" || e.isInvalid || G,
		We = h.useMemo(() => {
			var le;
			return (!e.labelPlacement || e.labelPlacement === "inside") && !u
				? "outside"
				: (le = e.labelPlacement) != null
				? le
				: "inside";
		}, [e.labelPlacement, u]),
		Ot =
			typeof o.errorMessage == "function"
				? o.errorMessage({
						isInvalid: He,
						validationErrors: X,
						validationDetails: q,
				  })
				: o.errorMessage || (X == null ? void 0 : X.join(" ")),
		nr = !!v || e.isClearable,
		or = !!u || !!f || !!Ot,
		ft = !!o.placeholder,
		mr = !!u,
		xe = !!f || !!Ot,
		he = We === "outside" || We === "outside-left",
		Nt = We === "inside",
		Er = L.current
			? (!L.current.value || L.current.value === "" || !N || N === "") && ft
			: !1,
		Bi = We === "outside-left",
		jt = !!x,
		me = he ? We === "outside-left" || ft || (We === "outside" && jt) : !1,
		_t = We === "outside" && !ft && !jt,
		De = h.useMemo(
			() => zm({ ...a, isInvalid: He, labelPlacement: We, isClearable: nr }),
			[bt(a), He, We, nr, jt],
		),
		Ki = h.useCallback(
			(le = {}) => ({
				ref: T,
				className: De.base({ class: $ }),
				"data-slot": "base",
				"data-filled": H(z || ft || jt || Er),
				"data-filled-within": H(I || ft || jt || Er),
				"data-focus-within": H(V),
				"data-focus-visible": H(ie),
				"data-readonly": H(e.isReadOnly),
				"data-focus": H(se),
				"data-hover": H(be),
				"data-required": H(e.isRequired),
				"data-invalid": H(He),
				"data-disabled": H(e.isDisabled),
				"data-has-elements": H(or),
				"data-has-helper": H(xe),
				"data-has-label": H(mr),
				"data-has-value": H(!Er),
				...fe,
				...le,
			}),
			[
				De,
				$,
				z,
				se,
				be,
				He,
				xe,
				mr,
				or,
				Er,
				jt,
				V,
				ie,
				I,
				ft,
				fe,
				e.isReadOnly,
				e.isRequired,
				e.isDisabled,
			],
		),
		ve = h.useCallback(
			(le = {}) => ({
				"data-slot": "label",
				className: De.label({ class: g == null ? void 0 : g.label }),
				...K,
				...le,
			}),
			[De, K, g == null ? void 0 : g.label],
		),
		Hi = h.useCallback(
			(le = {}) => ({
				ref: L,
				"data-slot": "input",
				"data-filled": H(z),
				"data-filled-within": H(I),
				"data-has-start-content": H(jt),
				"data-has-end-content": H(!!m),
				className: De.input({
					class: Q(g == null ? void 0 : g.input, z ? "is-filled" : ""),
				}),
				...U(
					te,
					W,
					rt(D, {
						enabled: !0,
						labelable: !0,
						omitEventNames: new Set(Object.keys(W)),
					}),
					le,
				),
				required: e.isRequired,
				"aria-readonly": H(e.isReadOnly),
				"aria-required": H(e.isRequired),
				onChange: nt(W.onChange, y),
			}),
			[
				De,
				N,
				te,
				W,
				D,
				z,
				I,
				jt,
				m,
				g == null ? void 0 : g.input,
				e.isReadOnly,
				e.isRequired,
				y,
			],
		),
		ma = h.useCallback(
			(le = {}) => ({
				ref: A,
				"data-slot": "input-wrapper",
				"data-hover": H(be),
				"data-focus-visible": H(ie),
				"data-focus": H(se),
				className: De.inputWrapper({
					class: Q(g == null ? void 0 : g.inputWrapper, z ? "is-filled" : ""),
				}),
				...U(le, ne),
				onClick: In => {
					L.current && In.currentTarget === In.target && L.current.focus();
				},
				style: { cursor: "text", ...le.style },
			}),
			[De, be, ie, se, N, g == null ? void 0 : g.inputWrapper],
		),
		Iu = h.useCallback(
			(le = {}) => ({
				...le,
				ref: _,
				"data-slot": "inner-wrapper",
				onClick: In => {
					L.current && In.currentTarget === In.target && L.current.focus();
				},
				className: De.innerWrapper({
					class: Q(
						g == null ? void 0 : g.innerWrapper,
						le == null ? void 0 : le.className,
					),
				}),
			}),
			[De, g == null ? void 0 : g.innerWrapper],
		),
		Vu = h.useCallback(
			(le = {}) => ({
				...le,
				"data-slot": "main-wrapper",
				className: De.mainWrapper({
					class: Q(
						g == null ? void 0 : g.mainWrapper,
						le == null ? void 0 : le.className,
					),
				}),
			}),
			[De, g == null ? void 0 : g.mainWrapper],
		),
		Ru = h.useCallback(
			(le = {}) => ({
				...le,
				"data-slot": "helper-wrapper",
				className: De.helperWrapper({
					class: Q(
						g == null ? void 0 : g.helperWrapper,
						le == null ? void 0 : le.className,
					),
				}),
			}),
			[De, g == null ? void 0 : g.helperWrapper],
		),
		Lu = h.useCallback(
			(le = {}) => ({
				...le,
				...re,
				"data-slot": "description",
				className: De.description({
					class: Q(
						g == null ? void 0 : g.description,
						le == null ? void 0 : le.className,
					),
				}),
			}),
			[De, g == null ? void 0 : g.description],
		),
		Fu = h.useCallback(
			(le = {}) => ({
				...le,
				...Y,
				"data-slot": "error-message",
				className: De.errorMessage({
					class: Q(
						g == null ? void 0 : g.errorMessage,
						le == null ? void 0 : le.className,
					),
				}),
			}),
			[De, Y, g == null ? void 0 : g.errorMessage],
		),
		Ou = h.useCallback(
			(le = {}) => ({
				...le,
				role: "button",
				tabIndex: 0,
				"data-slot": "clear-button",
				"data-focus-visible": H(ze),
				className: De.clearButton({
					class: Q(
						g == null ? void 0 : g.clearButton,
						le == null ? void 0 : le.className,
					),
				}),
				...U(we, ge),
			}),
			[De, ze, we, ge, g == null ? void 0 : g.clearButton],
		);
	return {
		Component: F,
		classNames: g,
		domRef: L,
		label: u,
		description: f,
		startContent: x,
		endContent: m,
		labelPlacement: We,
		isClearable: nr,
		hasHelper: xe,
		hasStartContent: jt,
		isLabelOutside: me,
		isOutsideLeft: Bi,
		isLabelOutsideAsPlaceholder: _t,
		shouldLabelBeOutside: he,
		shouldLabelBeInside: Nt,
		hasPlaceholder: ft,
		isInvalid: He,
		errorMessage: Ot,
		getBaseProps: Ki,
		getLabelProps: ve,
		getInputProps: Hi,
		getMainWrapperProps: Vu,
		getInputWrapperProps: ma,
		getInnerWrapperProps: Iu,
		getHelperWrapperProps: Ru,
		getDescriptionProps: Lu,
		getErrorMessageProps: Fu,
		getClearButtonProps: Ou,
	};
}
var k4 = ue((e, t) => {
	const {
			Component: r,
			label: n,
			description: o,
			isClearable: a,
			startContent: i,
			endContent: s,
			labelPlacement: l,
			hasHelper: u,
			isOutsideLeft: c,
			shouldLabelBeOutside: d,
			errorMessage: f,
			isInvalid: p,
			getBaseProps: g,
			getLabelProps: b,
			getInputProps: x,
			getInnerWrapperProps: m,
			getInputWrapperProps: v,
			getMainWrapperProps: y,
			getHelperWrapperProps: P,
			getDescriptionProps: C,
			getErrorMessageProps: E,
			getClearButtonProps: D,
		} = E4({ ...e, ref: t }),
		w = n ? S.jsx("label", { ...b(), children: n }) : null,
		V = h.useMemo(
			() => (a ? S.jsx("span", { ...D(), children: s || S.jsx(_C, {}) }) : s),
			[a, D],
		),
		M = h.useMemo(
			() =>
				u
					? S.jsx("div", {
							...P(),
							children:
								p && f
									? S.jsx("div", { ...E(), children: f })
									: o
									? S.jsx("div", { ...C(), children: o })
									: null,
					  })
					: null,
			[u, p, f, o, P, E, C],
		),
		F = h.useMemo(
			() =>
				i || V
					? S.jsxs("div", {
							...m(),
							children: [i, S.jsx("input", { ...x() }), V],
					  })
					: S.jsx("div", { ...m(), children: S.jsx("input", { ...x() }) }),
			[i, V, x, m],
		),
		L = h.useMemo(
			() =>
				d
					? S.jsxs("div", {
							...y(),
							children: [
								S.jsxs("div", { ...v(), children: [c ? null : w, F] }),
								M,
							],
					  })
					: S.jsxs(S.Fragment, {
							children: [S.jsxs("div", { ...v(), children: [w, F] }), M],
					  }),
			[l, M, d, w, F, f, o, y, v, E, C],
		);
	return S.jsxs(r, { ...g(), children: [c ? w : null, L] });
});
k4.displayName = "NextUI.Input";
var pv = k4;
function Af() {
	return (
		(Af = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r)
							Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
					}
					return e;
			  }),
		Af.apply(this, arguments)
	);
}
function cA(e, t) {
	if (e == null) return {};
	var r = {},
		n = Object.keys(e),
		o,
		a;
	for (a = 0; a < n.length; a++)
		(o = n[a]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
	return r;
}
var dA = h.useLayoutEffect,
	fA = function (t) {
		var r = h.useRef(t);
		return (
			dA(function () {
				r.current = t;
			}),
			r
		);
	},
	hv = function (t, r) {
		if (typeof t == "function") {
			t(r);
			return;
		}
		t.current = r;
	},
	pA = function (t, r) {
		var n = h.useRef();
		return h.useCallback(
			function (o) {
				(t.current = o),
					n.current && hv(n.current, null),
					(n.current = r),
					r && hv(r, o);
			},
			[r],
		);
	},
	mv = {
		"min-height": "0",
		"max-height": "none",
		height: "0",
		visibility: "hidden",
		overflow: "hidden",
		position: "absolute",
		"z-index": "-1000",
		top: "0",
		right: "0",
	},
	hA = function (t) {
		Object.keys(mv).forEach(function (r) {
			t.style.setProperty(r, mv[r], "important");
		});
	},
	gv = hA,
	pt = null,
	vv = function (t, r) {
		var n = t.scrollHeight;
		return r.sizingStyle.boxSizing === "border-box"
			? n + r.borderSize
			: n - r.paddingSize;
	};
function mA(e, t, r, n) {
	r === void 0 && (r = 1),
		n === void 0 && (n = 1 / 0),
		pt ||
			((pt = document.createElement("textarea")),
			pt.setAttribute("tabindex", "-1"),
			pt.setAttribute("aria-hidden", "true"),
			gv(pt)),
		pt.parentNode === null && document.body.appendChild(pt);
	var o = e.paddingSize,
		a = e.borderSize,
		i = e.sizingStyle,
		s = i.boxSizing;
	Object.keys(i).forEach(function (f) {
		var p = f;
		pt.style[p] = i[p];
	}),
		gv(pt),
		(pt.value = t);
	var l = vv(pt, e);
	(pt.value = t), (l = vv(pt, e)), (pt.value = "x");
	var u = pt.scrollHeight - o,
		c = u * r;
	s === "border-box" && (c = c + o + a), (l = Math.max(c, l));
	var d = u * n;
	return s === "border-box" && (d = d + o + a), (l = Math.min(d, l)), [l, u];
}
var yv = function () {},
	gA = function (t, r) {
		return t.reduce(function (n, o) {
			return (n[o] = r[o]), n;
		}, {});
	},
	vA = [
		"borderBottomWidth",
		"borderLeftWidth",
		"borderRightWidth",
		"borderTopWidth",
		"boxSizing",
		"fontFamily",
		"fontSize",
		"fontStyle",
		"fontWeight",
		"letterSpacing",
		"lineHeight",
		"paddingBottom",
		"paddingLeft",
		"paddingRight",
		"paddingTop",
		"tabSize",
		"textIndent",
		"textRendering",
		"textTransform",
		"width",
		"wordBreak",
	],
	yA = !!document.documentElement.currentStyle,
	bA = function (t) {
		var r = window.getComputedStyle(t);
		if (r === null) return null;
		var n = gA(vA, r),
			o = n.boxSizing;
		if (o === "") return null;
		yA &&
			o === "border-box" &&
			(n.width =
				parseFloat(n.width) +
				parseFloat(n.borderRightWidth) +
				parseFloat(n.borderLeftWidth) +
				parseFloat(n.paddingRight) +
				parseFloat(n.paddingLeft) +
				"px");
		var a = parseFloat(n.paddingBottom) + parseFloat(n.paddingTop),
			i = parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth);
		return { sizingStyle: n, paddingSize: a, borderSize: i };
	},
	xA = bA;
function T4(e, t, r) {
	var n = fA(r);
	h.useLayoutEffect(function () {
		var o = function (i) {
			return n.current(i);
		};
		if (e)
			return (
				e.addEventListener(t, o),
				function () {
					return e.removeEventListener(t, o);
				}
			);
	}, []);
}
var wA = function (t) {
		T4(window, "resize", t);
	},
	SA = function (t) {
		T4(document.fonts, "loadingdone", t);
	},
	PA = [
		"cacheMeasurements",
		"maxRows",
		"minRows",
		"onChange",
		"onHeightChange",
	],
	$A = function (t, r) {
		var n = t.cacheMeasurements,
			o = t.maxRows,
			a = t.minRows,
			i = t.onChange,
			s = i === void 0 ? yv : i,
			l = t.onHeightChange,
			u = l === void 0 ? yv : l,
			c = cA(t, PA),
			d = c.value !== void 0,
			f = h.useRef(null),
			p = pA(f, r),
			g = h.useRef(0),
			b = h.useRef(),
			x = function () {
				var y = f.current,
					P = n && b.current ? b.current : xA(y);
				if (P) {
					b.current = P;
					var C = mA(P, y.value || y.placeholder || "x", a, o),
						E = C[0],
						D = C[1];
					g.current !== E &&
						((g.current = E),
						y.style.setProperty("height", E + "px", "important"),
						u(E, { rowHeight: D }));
				}
			},
			m = function (y) {
				d || x(), s(y);
			};
		return (
			h.useLayoutEffect(x),
			wA(x),
			SA(x),
			h.createElement("textarea", Af({}, c, { onChange: m, ref: p }))
		);
	},
	CA = h.forwardRef($A),
	M4 = ue(
		(
			{
				style: e,
				minRows: t = 3,
				maxRows: r = 8,
				cacheMeasurements: n = !1,
				disableAutosize: o = !1,
				onHeightChange: a,
				...i
			},
			s,
		) => {
			const {
					Component: l,
					label: u,
					description: c,
					startContent: d,
					endContent: f,
					hasHelper: p,
					shouldLabelBeOutside: g,
					shouldLabelBeInside: b,
					isInvalid: x,
					errorMessage: m,
					getBaseProps: v,
					getLabelProps: y,
					getInputProps: P,
					getInnerWrapperProps: C,
					getInputWrapperProps: E,
					getHelperWrapperProps: D,
					getDescriptionProps: w,
					getErrorMessageProps: V,
				} = E4({ ...i, ref: s, isMultiline: !0 }),
				[M, F] = h.useState(t > 1),
				[L, T] = h.useState(!1),
				A = u ? S.jsx("label", { ...y(), children: u }) : null,
				_ = P(),
				N = (z, I) => {
					if ((t === 1 && F(z >= I.rowHeight * 2), r > t)) {
						const $ = z >= r * I.rowHeight;
						T($);
					}
					a == null || a(z, I);
				},
				R = o
					? S.jsx("textarea", { ..._, style: U(_.style, e ?? {}) })
					: S.jsx(CA, {
							..._,
							cacheMeasurements: n,
							"data-hide-scroll": H(!L),
							maxRows: r,
							minRows: t,
							style: U(_.style, e ?? {}),
							onHeightChange: N,
					  }),
				j = h.useMemo(
					() =>
						d || f
							? S.jsxs("div", { ...C(), children: [d, R, f] })
							: S.jsx("div", { ...C(), children: R }),
					[d, _, f, C],
				);
			return S.jsxs(l, {
				...v(),
				children: [
					g ? A : null,
					S.jsxs("div", {
						...E(),
						"data-has-multiple-rows": H(M),
						children: [b ? A : null, j],
					}),
					p
						? S.jsx("div", {
								...D(),
								children:
									x && m
										? S.jsx("div", { ...V(), children: m })
										: c
										? S.jsx("div", { ...w(), children: c })
										: null,
						  })
						: null,
				],
			});
		},
	);
M4.displayName = "NextUI.Textarea";
var EA = M4;
function kA(e, t) {
	const {
			triggerRef: r,
			popoverRef: n,
			showArrow: o,
			offset: a = 7,
			crossOffset: i = 0,
			scrollRef: s,
			shouldFlip: l,
			boundaryElement: u,
			isDismissable: c = !0,
			shouldCloseOnBlur: d = !0,
			placement: f = "top",
			containerPadding: p,
			shouldCloseOnInteractOutside: g,
			isNonModal: b,
			isKeyboardDismissDisabled: x,
			updatePositionDeps: m = [],
			...v
		} = e,
		y = b || !0,
		{ overlayProps: P, underlayProps: C } = Up(
			{
				isOpen: t.isOpen,
				onClose: t.close,
				shouldCloseOnBlur: d,
				isDismissable: c,
				isKeyboardDismissDisabled: x,
				shouldCloseOnInteractOutside:
					g ||
					(M => {
						let F = r == null ? void 0 : r.current;
						return !F || !F.contains(M);
					}),
			},
			n,
		),
		{
			overlayProps: E,
			arrowProps: D,
			placement: w,
			updatePosition: V,
		} = sx({
			...v,
			shouldFlip: l,
			crossOffset: i,
			targetRef: r,
			overlayRef: n,
			isOpen: t.isOpen,
			scrollRef: s,
			boundaryElement: u,
			containerPadding: p,
			placement: i4(f),
			offset: o ? a + 3 : a,
			onClose: () => {},
		});
	return (
		Ni(() => {
			m.length && V();
		}, m),
		h.useEffect(() => {
			if (t.isOpen && !y && n.current) return x7([n.current]);
		}, [y, t.isOpen, n]),
		{ popoverProps: U(P, E), arrowProps: D, underlayProps: C, placement: w }
	);
}
function A4(e, t) {
	let { role: r = "dialog" } = e,
		n = vn();
	n = e["aria-label"] ? void 0 : n;
	let o = h.useRef(!1);
	return (
		h.useEffect(() => {
			if (t.current && !t.current.contains(document.activeElement)) {
				ro(t.current);
				let a = setTimeout(() => {
					document.activeElement === t.current &&
						((o.current = !0),
						t.current && (t.current.blur(), ro(t.current)),
						(o.current = !1));
				}, 500);
				return () => {
					clearTimeout(a);
				};
			}
		}, [t]),
		px(),
		{
			dialogProps: {
				...Ft(e, { labelable: !0 }),
				role: r,
				tabIndex: -1,
				"aria-labelledby": e["aria-labelledby"] || n,
				onBlur: a => {
					o.current && a.stopPropagation();
				},
			},
			titleProps: { id: n },
		}
	);
}
function D4(e) {
	var t, r;
	const [n, o] = xt(e, Ll.variantKeys),
		{
			as: a,
			ref: i,
			children: s,
			state: l,
			triggerRef: u,
			scrollRef: c,
			defaultOpen: d,
			onOpenChange: f,
			isOpen: p,
			isNonModal: g = !0,
			shouldFlip: b = !0,
			containerPadding: x = 12,
			shouldBlockScroll: m = !1,
			isDismissable: v = !0,
			shouldCloseOnBlur: y,
			portalContainer: P,
			updatePositionDeps: C,
			dialogProps: E,
			placement: D = "top",
			triggerType: w = "dialog",
			showArrow: V = !1,
			offset: M = 7,
			crossOffset: F = 0,
			boundaryElement: L,
			isKeyboardDismissDisabled: T,
			shouldCloseOnInteractOutside: A,
			motionProps: _,
			className: N,
			classNames: R,
			onClose: j,
			...z
		} = n,
		I = a || "div",
		$ = ke(i),
		O = h.useRef(null),
		B = h.useRef(!1),
		K = h.useRef(null),
		W = u || O,
		G = (t = e.disableAnimation) != null ? t : !1,
		X = Tu({
			isOpen: p,
			defaultOpen: d,
			onOpenChange: xe => {
				f == null || f(xe), xe || j == null || j();
			},
		}),
		q = l || X,
		{
			popoverProps: re,
			underlayProps: Y,
			placement: ie,
		} = kA(
			{
				triggerRef: W,
				isNonModal: g,
				popoverRef: $,
				placement: D,
				offset: M,
				scrollRef: c,
				isDismissable: v,
				shouldCloseOnBlur: y,
				boundaryElement: L,
				crossOffset: F,
				shouldFlip: b,
				containerPadding: x,
				updatePositionDeps: C,
				isKeyboardDismissDisabled: T,
				shouldCloseOnInteractOutside: A,
			},
			q,
		),
		{ triggerProps: se } = lx({ type: w }, q, W),
		{ isFocusVisible: te, isFocused: be, focusProps: ne } = gt(),
		{ dialogProps: ge, titleProps: ze } = A4({}, K),
		fe = h.useMemo(() => Ll({ ...o }), [bt(o)]),
		we = Q(R == null ? void 0 : R.base, N),
		He = (xe = {}) => ({
			ref: $,
			...U(re, z, xe),
			style: U(re.style, z.style, xe.style),
		}),
		We = (xe = {}) => ({
			ref: K,
			"data-slot": "base",
			"data-open": H(q.isOpen),
			"data-focus": H(be),
			"data-arrow": H(V),
			"data-focus-visible": H(te),
			"data-placement": Kl(ie, D),
			...U(ne, ge, E, xe),
			className: fe.base({ class: Q(we) }),
			style: { outline: "none" },
		}),
		Ot = h.useCallback(
			(xe = {}) => ({
				"data-slot": "content",
				"data-open": H(q.isOpen),
				"data-arrow": H(V),
				"data-placement": Kl(ie, D),
				className: fe.content({
					class: Q(R == null ? void 0 : R.content, xe.className),
				}),
			}),
			[fe, q.isOpen, V, ie, D, R],
		),
		nr = h.useMemo(() => (b7(ie, D) && ie) || D, [ie, D]),
		or = h.useCallback(
			xe => {
				var he;
				let Nt;
				return (
					xe.pointerType === "touch" &&
					((e == null ? void 0 : e.backdrop) === "blur" ||
						(e == null ? void 0 : e.backdrop) === "opaque")
						? (Nt = setTimeout(() => {
								B.current = !0;
						  }, 100))
						: (B.current = !0),
					(he = se.onPress) == null || he.call(se, xe),
					() => {
						clearTimeout(Nt);
					}
				);
			},
			[se == null ? void 0 : se.onPress],
		),
		ft = h.useCallback(
			(xe = {}, he = null) => {
				const { isDisabled: Nt, ...Er } = xe;
				return {
					"data-slot": "trigger",
					"aria-haspopup": "dialog",
					...U(se, Er),
					onPress: or,
					isDisabled: Nt,
					className: fe.trigger({
						class: Q(R == null ? void 0 : R.trigger, xe.className),
						isTriggerDisabled: Nt,
					}),
					ref: Gb(he, W),
				};
			},
			[q, se, or, W],
		),
		mr = h.useCallback(
			(xe = {}) => ({
				"data-slot": "backdrop",
				className: fe.backdrop({ class: R == null ? void 0 : R.backdrop }),
				onClick: he => {
					if (!B.current) {
						he.preventDefault();
						return;
					}
					q.close(), (B.current = !1);
				},
				...Y,
				...xe,
			}),
			[fe, q.isOpen, R, Y],
		);
	return (
		h.useEffect(() => {
			if (q.isOpen && $ != null && $.current)
				return dx([$ == null ? void 0 : $.current]);
		}, [q.isOpen, $]),
		{
			state: q,
			Component: I,
			children: s,
			classNames: R,
			showArrow: V,
			triggerRef: W,
			placement: nr,
			isNonModal: g,
			titleProps: ze,
			popoverRef: $,
			portalContainer: P,
			isOpen: q.isOpen,
			onClose: q.close,
			disableAnimation: G,
			shouldBlockScroll: m,
			backdrop: (r = e.backdrop) != null ? r : "transparent",
			motionProps: _,
			getBackdropProps: mr,
			getPopoverProps: He,
			getTriggerProps: ft,
			getDialogProps: We,
			getContentProps: Ot,
		}
	);
}
var I4 = ue(
	(
		{
			children: e,
			motionProps: t,
			placement: r,
			disableAnimation: n,
			style: o = {},
			transformOrigin: a = {},
			...i
		},
		s,
	) => {
		let l = o;
		return (
			a.originX !== void 0 || a.originY !== void 0
				? (l = { ...l, transformOrigin: a })
				: (l = { ...l, ...T0(r === "center" ? "top" : r) }),
			n
				? S.jsx("div", { ...i, ref: s, children: e })
				: S.jsx(Zr, {
						features: Gr,
						children: S.jsx(Ur.div, {
							ref: s,
							animate: "enter",
							exit: "exit",
							initial: "initial",
							style: l,
							variants: aa.scaleSpringOpacity,
							...U(i, t),
							children: e,
						}),
				  })
		);
	},
);
I4.displayName = "NextUI.FreeSoloPopoverWrapper";
var V4 = ue(({ children: e, transformOrigin: t, ...r }, n) => {
	const {
			Component: o,
			state: a,
			placement: i,
			backdrop: s,
			titleProps: l,
			portalContainer: u,
			disableAnimation: c,
			motionProps: d,
			isNonModal: f,
			getPopoverProps: p,
			getBackdropProps: g,
			getDialogProps: b,
			getContentProps: x,
		} = D4({ ...r, ref: n }),
		m = h.useMemo(
			() =>
				s === "transparent"
					? null
					: c
					? S.jsx("div", { ...g() })
					: S.jsx(Zr, {
							features: Gr,
							children: S.jsx(Ur.div, {
								animate: "enter",
								exit: "exit",
								initial: "exit",
								variants: aa.fade,
								...g(),
							}),
					  }),
			[s, c, g],
		);
	return S.jsxs(Zp, {
		portalContainer: u,
		children: [
			!f && m,
			S.jsx(o, {
				...p(),
				children: S.jsxs(I4, {
					disableAnimation: c,
					motionProps: d,
					placement: i,
					tabIndex: -1,
					transformOrigin: t,
					...b(),
					children: [
						!f && S.jsx(na, { onDismiss: a.close }),
						S.jsx("div", {
							...x(),
							children: typeof e == "function" ? e(l) : e,
						}),
						S.jsx(na, { onDismiss: a.close }),
					],
				}),
			}),
		],
	});
});
V4.displayName = "NextUI.FreeSoloPopover";
var TA = V4,
	[MA, R4] = ao({
		name: "PopoverContext",
		errorMessage:
			"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`",
	}),
	Hs = "right-scroll-bar-position",
	Ws = "width-before-scroll-bar",
	AA = "with-scroll-bars-hidden",
	DA = "--removed-body-scroll-bar-size";
function Hc(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function IA(e, t) {
	var r = h.useState(function () {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return r.value;
				},
				set current(n) {
					var o = r.value;
					o !== n && ((r.value = n), r.callback(n, o));
				},
			},
		};
	})[0];
	return (r.callback = t), r.facade;
}
var VA = typeof window < "u" ? h.useLayoutEffect : h.useEffect,
	bv = new WeakMap();
function RA(e, t) {
	var r = IA(null, function (n) {
		return e.forEach(function (o) {
			return Hc(o, n);
		});
	});
	return (
		VA(
			function () {
				var n = bv.get(r);
				if (n) {
					var o = new Set(n),
						a = new Set(e),
						i = r.current;
					o.forEach(function (s) {
						a.has(s) || Hc(s, null);
					}),
						a.forEach(function (s) {
							o.has(s) || Hc(s, i);
						});
				}
				bv.set(r, e);
			},
			[e],
		),
		r
	);
}
function LA(e) {
	return e;
}
function FA(e, t) {
	t === void 0 && (t = LA);
	var r = [],
		n = !1,
		o = {
			read: function () {
				if (n)
					throw new Error(
						"Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
					);
				return r.length ? r[r.length - 1] : e;
			},
			useMedium: function (a) {
				var i = t(a, n);
				return (
					r.push(i),
					function () {
						r = r.filter(function (s) {
							return s !== i;
						});
					}
				);
			},
			assignSyncMedium: function (a) {
				for (n = !0; r.length; ) {
					var i = r;
					(r = []), i.forEach(a);
				}
				r = {
					push: function (s) {
						return a(s);
					},
					filter: function () {
						return r;
					},
				};
			},
			assignMedium: function (a) {
				n = !0;
				var i = [];
				if (r.length) {
					var s = r;
					(r = []), s.forEach(a), (i = r);
				}
				var l = function () {
						var c = i;
						(i = []), c.forEach(a);
					},
					u = function () {
						return Promise.resolve().then(l);
					};
				u(),
					(r = {
						push: function (c) {
							i.push(c), u();
						},
						filter: function (c) {
							return (i = i.filter(c)), r;
						},
					});
			},
		};
	return o;
}
function OA(e) {
	e === void 0 && (e = {});
	var t = FA(null);
	return (t.options = br({ async: !0, ssr: !1 }, e)), t;
}
var L4 = function (e) {
	var t = e.sideCar,
		r = d2(e, ["sideCar"]);
	if (!t)
		throw new Error(
			"Sidecar: please provide `sideCar` property to import the right car",
		);
	var n = t.read();
	if (!n) throw new Error("Sidecar medium not found");
	return h.createElement(n, br({}, r));
};
L4.isSideCarExport = !0;
function NA(e, t) {
	return e.useMedium(t), L4;
}
var F4 = OA(),
	Wc = function () {},
	Mu = h.forwardRef(function (e, t) {
		var r = h.useRef(null),
			n = h.useState({
				onScrollCapture: Wc,
				onWheelCapture: Wc,
				onTouchMoveCapture: Wc,
			}),
			o = n[0],
			a = n[1],
			i = e.forwardProps,
			s = e.children,
			l = e.className,
			u = e.removeScrollBar,
			c = e.enabled,
			d = e.shards,
			f = e.sideCar,
			p = e.noIsolation,
			g = e.inert,
			b = e.allowPinchZoom,
			x = e.as,
			m = x === void 0 ? "div" : x,
			v = e.gapMode,
			y = d2(e, [
				"forwardProps",
				"children",
				"className",
				"removeScrollBar",
				"enabled",
				"shards",
				"sideCar",
				"noIsolation",
				"inert",
				"allowPinchZoom",
				"as",
				"gapMode",
			]),
			P = f,
			C = RA([r, t]),
			E = br(br({}, y), o);
		return h.createElement(
			h.Fragment,
			null,
			c &&
				h.createElement(P, {
					sideCar: F4,
					removeScrollBar: u,
					shards: d,
					noIsolation: p,
					inert: g,
					setCallbacks: a,
					allowPinchZoom: !!b,
					lockRef: r,
					gapMode: v,
				}),
			i
				? h.cloneElement(h.Children.only(s), br(br({}, E), { ref: C }))
				: h.createElement(m, br({}, E, { className: l, ref: C }), s),
		);
	});
Mu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Mu.classNames = { fullWidth: Ws, zeroRight: Hs };
var jA = function () {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function _A() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = jA();
	return t && e.setAttribute("nonce", t), e;
}
function zA(e, t) {
	e.styleSheet
		? (e.styleSheet.cssText = t)
		: e.appendChild(document.createTextNode(t));
}
function BA(e) {
	var t = document.head || document.getElementsByTagName("head")[0];
	t.appendChild(e);
}
var KA = function () {
		var e = 0,
			t = null;
		return {
			add: function (r) {
				e == 0 && (t = _A()) && (zA(t, r), BA(t)), e++;
			},
			remove: function () {
				e--,
					!e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
			},
		};
	},
	HA = function () {
		var e = KA();
		return function (t, r) {
			h.useEffect(
				function () {
					return (
						e.add(t),
						function () {
							e.remove();
						}
					);
				},
				[t && r],
			);
		};
	},
	O4 = function () {
		var e = HA(),
			t = function (r) {
				var n = r.styles,
					o = r.dynamic;
				return e(n, o), null;
			};
		return t;
	},
	WA = { left: 0, top: 0, right: 0, gap: 0 },
	Uc = function (e) {
		return parseInt(e || "", 10) || 0;
	},
	UA = function (e) {
		var t = window.getComputedStyle(document.body),
			r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
			n = t[e === "padding" ? "paddingTop" : "marginTop"],
			o = t[e === "padding" ? "paddingRight" : "marginRight"];
		return [Uc(r), Uc(n), Uc(o)];
	},
	ZA = function (e) {
		if ((e === void 0 && (e = "margin"), typeof window > "u")) return WA;
		var t = UA(e),
			r = document.documentElement.clientWidth,
			n = window.innerWidth;
		return {
			left: t[0],
			top: t[1],
			right: t[2],
			gap: Math.max(0, n - r + t[2] - t[0]),
		};
	},
	GA = O4(),
	Ho = "data-scroll-locked",
	YA = function (e, t, r, n) {
		var o = e.left,
			a = e.top,
			i = e.right,
			s = e.gap;
		return (
			r === void 0 && (r = "margin"),
			`
  .`
				.concat(
					AA,
					` {
   overflow: hidden `,
				)
				.concat(
					n,
					`;
   padding-right: `,
				)
				.concat(s, "px ")
				.concat(
					n,
					`;
  }
  body[`,
				)
				.concat(
					Ho,
					`] {
    overflow: hidden `,
				)
				.concat(
					n,
					`;
    overscroll-behavior: contain;
    `,
				)
				.concat(
					[
						t && "position: relative ".concat(n, ";"),
						r === "margin" &&
							`
    padding-left: `
								.concat(
									o,
									`px;
    padding-top: `,
								)
								.concat(
									a,
									`px;
    padding-right: `,
								)
								.concat(
									i,
									`px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
								)
								.concat(s, "px ")
								.concat(
									n,
									`;
    `,
								),
						r === "padding" &&
							"padding-right: ".concat(s, "px ").concat(n, ";"),
					]
						.filter(Boolean)
						.join(""),
					`
  }
  
  .`,
				)
				.concat(
					Hs,
					` {
    right: `,
				)
				.concat(s, "px ")
				.concat(
					n,
					`;
  }
  
  .`,
				)
				.concat(
					Ws,
					` {
    margin-right: `,
				)
				.concat(s, "px ")
				.concat(
					n,
					`;
  }
  
  .`,
				)
				.concat(Hs, " .")
				.concat(
					Hs,
					` {
    right: 0 `,
				)
				.concat(
					n,
					`;
  }
  
  .`,
				)
				.concat(Ws, " .")
				.concat(
					Ws,
					` {
    margin-right: 0 `,
				)
				.concat(
					n,
					`;
  }
  
  body[`,
				)
				.concat(
					Ho,
					`] {
    `,
				)
				.concat(DA, ": ")
				.concat(
					s,
					`px;
  }
`,
				)
		);
	},
	xv = function () {
		var e = parseInt(document.body.getAttribute(Ho) || "0", 10);
		return isFinite(e) ? e : 0;
	},
	XA = function () {
		h.useEffect(function () {
			return (
				document.body.setAttribute(Ho, (xv() + 1).toString()),
				function () {
					var e = xv() - 1;
					e <= 0
						? document.body.removeAttribute(Ho)
						: document.body.setAttribute(Ho, e.toString());
				}
			);
		}, []);
	},
	qA = function (e) {
		var t = e.noRelative,
			r = e.noImportant,
			n = e.gapMode,
			o = n === void 0 ? "margin" : n;
		XA();
		var a = h.useMemo(
			function () {
				return ZA(o);
			},
			[o],
		);
		return h.createElement(GA, { styles: YA(a, !t, o, r ? "" : "!important") });
	},
	Df = !1;
if (typeof window < "u")
	try {
		var Ps = Object.defineProperty({}, "passive", {
			get: function () {
				return (Df = !0), !0;
			},
		});
		window.addEventListener("test", Ps, Ps),
			window.removeEventListener("test", Ps, Ps);
	} catch {
		Df = !1;
	}
var po = Df ? { passive: !1 } : !1,
	QA = function (e) {
		return e.tagName === "TEXTAREA";
	},
	N4 = function (e, t) {
		var r = window.getComputedStyle(e);
		return (
			r[t] !== "hidden" &&
			!(r.overflowY === r.overflowX && !QA(e) && r[t] === "visible")
		);
	},
	JA = function (e) {
		return N4(e, "overflowY");
	},
	eD = function (e) {
		return N4(e, "overflowX");
	},
	wv = function (e, t) {
		var r = t.ownerDocument,
			n = t;
		do {
			typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
			var o = j4(e, n);
			if (o) {
				var a = _4(e, n),
					i = a[1],
					s = a[2];
				if (i > s) return !0;
			}
			n = n.parentNode;
		} while (n && n !== r.body);
		return !1;
	},
	tD = function (e) {
		var t = e.scrollTop,
			r = e.scrollHeight,
			n = e.clientHeight;
		return [t, r, n];
	},
	rD = function (e) {
		var t = e.scrollLeft,
			r = e.scrollWidth,
			n = e.clientWidth;
		return [t, r, n];
	},
	j4 = function (e, t) {
		return e === "v" ? JA(t) : eD(t);
	},
	_4 = function (e, t) {
		return e === "v" ? tD(t) : rD(t);
	},
	nD = function (e, t) {
		return e === "h" && t === "rtl" ? -1 : 1;
	},
	oD = function (e, t, r, n, o) {
		var a = nD(e, window.getComputedStyle(t).direction),
			i = a * n,
			s = r.target,
			l = t.contains(s),
			u = !1,
			c = i > 0,
			d = 0,
			f = 0;
		do {
			var p = _4(e, s),
				g = p[0],
				b = p[1],
				x = p[2],
				m = b - x - a * g;
			(g || m) && j4(e, s) && ((d += m), (f += g)),
				s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
		} while ((!l && s !== document.body) || (l && (t.contains(s) || t === s)));
		return (
			((c && (Math.abs(d) < 1 || !o)) || (!c && (Math.abs(f) < 1 || !o))) &&
				(u = !0),
			u
		);
	},
	$s = function (e) {
		return "changedTouches" in e
			? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
			: [0, 0];
	},
	Sv = function (e) {
		return [e.deltaX, e.deltaY];
	},
	Pv = function (e) {
		return e && "current" in e ? e.current : e;
	},
	aD = function (e, t) {
		return e[0] === t[0] && e[1] === t[1];
	},
	iD = function (e) {
		return `
  .block-interactivity-`
			.concat(
				e,
				` {pointer-events: none;}
  .allow-interactivity-`,
			)
			.concat(
				e,
				` {pointer-events: all;}
`,
			);
	},
	sD = 0,
	ho = [];
function lD(e) {
	var t = h.useRef([]),
		r = h.useRef([0, 0]),
		n = h.useRef(),
		o = h.useState(sD++)[0],
		a = h.useState(O4)[0],
		i = h.useRef(e);
	h.useEffect(
		function () {
			i.current = e;
		},
		[e],
	),
		h.useEffect(
			function () {
				if (e.inert) {
					document.body.classList.add("block-interactivity-".concat(o));
					var b = K5([e.lockRef.current], (e.shards || []).map(Pv), !0).filter(
						Boolean,
					);
					return (
						b.forEach(function (x) {
							return x.classList.add("allow-interactivity-".concat(o));
						}),
						function () {
							document.body.classList.remove("block-interactivity-".concat(o)),
								b.forEach(function (x) {
									return x.classList.remove("allow-interactivity-".concat(o));
								});
						}
					);
				}
			},
			[e.inert, e.lockRef.current, e.shards],
		);
	var s = h.useCallback(function (b, x) {
			if ("touches" in b && b.touches.length === 2)
				return !i.current.allowPinchZoom;
			var m = $s(b),
				v = r.current,
				y = "deltaX" in b ? b.deltaX : v[0] - m[0],
				P = "deltaY" in b ? b.deltaY : v[1] - m[1],
				C,
				E = b.target,
				D = Math.abs(y) > Math.abs(P) ? "h" : "v";
			if ("touches" in b && D === "h" && E.type === "range") return !1;
			var w = wv(D, E);
			if (!w) return !0;
			if ((w ? (C = D) : ((C = D === "v" ? "h" : "v"), (w = wv(D, E))), !w))
				return !1;
			if (
				(!n.current && "changedTouches" in b && (y || P) && (n.current = C), !C)
			)
				return !0;
			var V = n.current || C;
			return oD(V, x, b, V === "h" ? y : P, !0);
		}, []),
		l = h.useCallback(function (b) {
			var x = b;
			if (!(!ho.length || ho[ho.length - 1] !== a)) {
				var m = "deltaY" in x ? Sv(x) : $s(x),
					v = t.current.filter(function (C) {
						return (
							C.name === x.type &&
							(C.target === x.target || x.target === C.shadowParent) &&
							aD(C.delta, m)
						);
					})[0];
				if (v && v.should) {
					x.cancelable && x.preventDefault();
					return;
				}
				if (!v) {
					var y = (i.current.shards || [])
							.map(Pv)
							.filter(Boolean)
							.filter(function (C) {
								return C.contains(x.target);
							}),
						P = y.length > 0 ? s(x, y[0]) : !i.current.noIsolation;
					P && x.cancelable && x.preventDefault();
				}
			}
		}, []),
		u = h.useCallback(function (b, x, m, v) {
			var y = { name: b, delta: x, target: m, should: v, shadowParent: uD(m) };
			t.current.push(y),
				setTimeout(function () {
					t.current = t.current.filter(function (P) {
						return P !== y;
					});
				}, 1);
		}, []),
		c = h.useCallback(function (b) {
			(r.current = $s(b)), (n.current = void 0);
		}, []),
		d = h.useCallback(function (b) {
			u(b.type, Sv(b), b.target, s(b, e.lockRef.current));
		}, []),
		f = h.useCallback(function (b) {
			u(b.type, $s(b), b.target, s(b, e.lockRef.current));
		}, []);
	h.useEffect(function () {
		return (
			ho.push(a),
			e.setCallbacks({
				onScrollCapture: d,
				onWheelCapture: d,
				onTouchMoveCapture: f,
			}),
			document.addEventListener("wheel", l, po),
			document.addEventListener("touchmove", l, po),
			document.addEventListener("touchstart", c, po),
			function () {
				(ho = ho.filter(function (b) {
					return b !== a;
				})),
					document.removeEventListener("wheel", l, po),
					document.removeEventListener("touchmove", l, po),
					document.removeEventListener("touchstart", c, po);
			}
		);
	}, []);
	var p = e.removeScrollBar,
		g = e.inert;
	return h.createElement(
		h.Fragment,
		null,
		g ? h.createElement(a, { styles: iD(o) }) : null,
		p ? h.createElement(qA, { gapMode: e.gapMode }) : null,
	);
}
function uD(e) {
	for (var t = null; e !== null; )
		e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
	return t;
}
const cD = NA(F4, lD);
var z4 = h.forwardRef(function (e, t) {
	return h.createElement(Mu, br({}, e, { ref: t, sideCar: cD }));
});
z4.classNames = Mu.classNames;
var B4 = ue((e, t) => {
	const { as: r, children: n, className: o, ...a } = e,
		{
			Component: i,
			isOpen: s,
			placement: l,
			backdrop: u,
			motionProps: c,
			titleProps: d,
			disableAnimation: f,
			shouldBlockScroll: p,
			getPopoverProps: g,
			getDialogProps: b,
			getBackdropProps: x,
			getContentProps: m,
			isNonModal: v,
			onClose: y,
		} = R4(),
		P = b(a);
	delete P.role;
	const C = r || i || "div",
		E = S.jsxs(S.Fragment, {
			children: [
				!v && S.jsx(na, { onDismiss: y }),
				S.jsx(C, {
					...P,
					children: S.jsx("div", {
						...m({ className: o }),
						children: typeof n == "function" ? n(d) : n,
					}),
				}),
				S.jsx(na, { onDismiss: y }),
			],
		}),
		D = h.useMemo(
			() =>
				u === "transparent"
					? null
					: f
					? S.jsx("div", { ...x() })
					: S.jsx(Zr, {
							features: Gr,
							children: S.jsx(Ur.div, {
								animate: "enter",
								exit: "exit",
								initial: "exit",
								variants: aa.fade,
								...x(),
							}),
					  }),
			[u, f, x],
		),
		w = h.useCallback(
			({ children: M }) =>
				S.jsx(z4, { enabled: p && s, removeScrollBar: !1, children: M }),
			[p, s],
		),
		V = f
			? S.jsx(w, { children: E })
			: S.jsx(Zr, {
					features: Gr,
					children: S.jsx(Ur.div, {
						animate: "enter",
						exit: "exit",
						initial: "initial",
						style: { ...T0(l === "center" ? "top" : l) },
						variants: aa.scaleSpringOpacity,
						...c,
						children: S.jsx(w, { children: E }),
					}),
			  });
	return S.jsxs("div", { ...g(), children: [D, V] });
});
B4.displayName = "NextUI.PopoverContent";
var K4 = B4,
	H4 = ue((e, t) => {
		const { triggerRef: r, getTriggerProps: n } = R4(),
			{ children: o, ...a } = e,
			i = h.useMemo(
				() =>
					typeof o == "string"
						? S.jsx("p", { children: o })
						: h.Children.only(o),
				[o],
			),
			{
				onPress: s,
				isDisabled: l,
				...u
			} = h.useMemo(() => n(U(a, i.props), i.ref), [n, i.props, a, i.ref]),
			[, c] = k3(o, xn),
			{ buttonProps: d } = ji({ onPress: s, isDisabled: l }, r),
			f = h.useMemo(() => (c == null ? void 0 : c[0]) !== void 0, [c]);
		return h.cloneElement(i, U(u, f ? { onPress: s, isDisabled: l } : d));
	});
H4.displayName = "NextUI.PopoverTrigger";
var W4 = H4,
	U4 = ue((e, t) => {
		const { children: r, ...n } = e,
			o = D4({ ...n, ref: t }),
			[a, i] = h.Children.toArray(r),
			s = S.jsx(Zp, { portalContainer: o.portalContainer, children: i });
		return S.jsxs(MA, {
			value: o,
			children: [
				a,
				o.disableAnimation && o.isOpen
					? s
					: S.jsx(Oi, { children: o.isOpen ? s : null }),
			],
		});
	});
U4.displayName = "NextUI.Popover";
var Z4 = U4,
	[dD, G4] = ao({
		name: "DropdownContext",
		errorMessage:
			"useDropdownContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Dropdown />`",
	});
function fD(e) {
	const { isSelected: t, disableAnimation: r, ...n } = e;
	return S.jsx("svg", {
		"aria-hidden": "true",
		"data-selected": t,
		role: "presentation",
		viewBox: "0 0 17 18",
		...n,
		children: S.jsx("polyline", {
			fill: "none",
			points: "1 9 7 14 15 4",
			stroke: "currentColor",
			strokeDasharray: 22,
			strokeDashoffset: t ? 44 : 66,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			style: r ? {} : { transition: "stroke-dashoffset 200ms ease" },
		}),
	});
}
var Y4 = new WeakMap();
function pD(e, t, r) {
	let { shouldFocusWrap: n = !0, onKeyDown: o, onKeyUp: a, ...i } = e;
	!e["aria-label"] &&
		!e["aria-labelledby"] &&
		console.warn(
			"An aria-label or aria-labelledby prop is required for accessibility.",
		);
	let s = Ft(e, { labelable: !0 }),
		{ listProps: l } = Ax({
			...i,
			ref: r,
			selectionManager: t.selectionManager,
			collection: t.collection,
			disabledKeys: t.disabledKeys,
			shouldFocusWrap: n,
			linkBehavior: "override",
		});
	return (
		Y4.set(t, { onClose: e.onClose, onAction: e.onAction }),
		{
			menuProps: U(
				s,
				{ onKeyDown: o, onKeyUp: a },
				{
					role: "menu",
					...l,
					onKeyDown: u => {
						u.key !== "Escape" && l.onKeyDown(u);
					},
				},
			),
		}
	);
}
function hD(e, t, r) {
	var n, o, a;
	let {
			key: i,
			closeOnSelect: s,
			isVirtualized: l,
			"aria-haspopup": u,
			onPressStart: c,
			onPressUp: d,
			onPress: f,
			onPressChange: p,
			onPressEnd: g,
			onHoverStart: b,
			onHoverChange: x,
			onHoverEnd: m,
			onKeyDown: v,
			onKeyUp: y,
			onFocus: P,
			onFocusChange: C,
			onBlur: E,
			onClick: D,
		} = e,
		w = !!u,
		V = (n = e.isDisabled) != null ? n : t.disabledKeys.has(i),
		M = (o = e.isSelected) != null ? o : t.selectionManager.isSelected(i),
		F = Y4.get(t),
		L = e.onClose || F.onClose,
		T = w ? () => {} : e.onAction || F.onAction,
		A = gu(),
		_ = te => {
			T && T(i),
				te.target instanceof HTMLAnchorElement && A.open(te.target, te);
		},
		N = "menuitem";
	w ||
		(t.selectionManager.selectionMode === "single"
			? (N = "menuitemradio")
			: t.selectionManager.selectionMode === "multiple" &&
			  (N = "menuitemcheckbox"));
	let R = vn(),
		j = vn(),
		z = vn(),
		I = {
			"aria-disabled": V || void 0,
			role: N,
			"aria-label": e["aria-label"],
			"aria-labelledby": R,
			"aria-describedby": [j, z].filter(Boolean).join(" ") || void 0,
			"aria-controls": e["aria-controls"],
			"aria-haspopup": u,
			"aria-expanded": e["aria-expanded"],
		};
	t.selectionManager.selectionMode !== "none" && !w && (I["aria-checked"] = M);
	let $ = t.collection.getItem(i);
	l &&
		((I["aria-posinset"] = $ == null ? void 0 : $.index),
		(I["aria-setsize"] = t4(t.collection)));
	let O = te => {
			te.pointerType === "keyboard" && _(te), c == null || c(te);
		},
		B = te => {
			te.pointerType !== "keyboard" &&
				(setTimeout(() => {
					_(te);
				}),
				!w &&
					L &&
					(s ??
						(t.selectionManager.selectionMode !== "multiple" ||
							t.selectionManager.isLink(i))) &&
					setTimeout(() => {
						L == null || L();
					})),
				d == null || d(te);
		},
		{ itemProps: K, isFocused: W } = Xp({
			selectionManager: t.selectionManager,
			key: i,
			ref: r,
			shouldSelectOnPressUp: !0,
			allowsDifferentPressOrigin: !0,
			linkBehavior: "none",
		}),
		{ pressProps: G, isPressed: X } = er({
			onPressStart: O,
			onPress: f,
			onPressUp: B,
			onPressChange: p,
			onPressEnd: g,
			isDisabled: V,
		}),
		{ isHovered: q, hoverProps: re } = kt({
			isDisabled: V,
			onHoverStart(te) {
				ra() ||
					(t.selectionManager.setFocused(!0),
					t.selectionManager.setFocusedKey(i)),
					b == null || b(te);
			},
			onHoverChange: x,
			onHoverEnd: m,
		}),
		{ keyboardProps: Y } = Kp({
			onKeyDown: te => {
				if (te.repeat) {
					te.continuePropagation();
					return;
				}
				switch (te.key) {
					case " ":
						!V &&
							t.selectionManager.selectionMode === "none" &&
							!w &&
							s !== !1 &&
							L &&
							L();
						break;
					case "Enter":
						!V && s !== !1 && !w && L && L();
						break;
					default:
						w || te.continuePropagation(), v == null || v(te);
						break;
				}
			},
			onKeyUp: y,
		}),
		{ focusProps: ie } = zp({ onBlur: E, onFocus: P, onFocusChange: C }),
		se = Ft($.props, {
			isLink: !!((a = $ == null ? void 0 : $.props) != null && a.href),
		});
	return (
		delete se.id,
		{
			menuItemProps: {
				...I,
				...U(se, w ? { onFocus: K.onFocus } : K, G, re, Y, ie),
				onClick: nt(D, G.onClick),
				tabIndex: K.tabIndex != null ? -1 : void 0,
			},
			labelProps: { id: R },
			descriptionProps: { id: j },
			keyboardShortcutProps: { id: z },
			isHovered: q,
			isFocused: W,
			isSelected: M,
			isPressed: X,
			isDisabled: V,
		}
	);
}
var mD = 700;
function X4() {
	return ca() || typeof window > "u" ? !1 : window.screen.width <= mD;
}
function gD(e) {
	const [t, r] = xt(e, Rl.variantKeys),
		{
			as: n,
			item: o,
			state: a,
			shortcut: i,
			description: s,
			startContent: l,
			endContent: u,
			isVirtualized: c,
			selectedIcon: d,
			className: f,
			classNames: p,
			onAction: g,
			autoFocus: b,
			onClick: x,
			onPress: m,
			onPressStart: v,
			onPressUp: y,
			onPressEnd: P,
			onPressChange: C,
			hideSelectedIcon: E = !1,
			isReadOnly: D = !1,
			closeOnSelect: w,
			onClose: V,
			...M
		} = t,
		F = e.disableAnimation,
		L = h.useRef(null),
		T = n || (M != null && M.href ? "a" : "li"),
		A = typeof T == "string",
		{ rendered: _, key: N } = o,
		R = a.disabledKeys.has(N) || e.isDisabled,
		j = a.selectionManager.selectionMode !== "none",
		z = X4(),
		{ isFocusVisible: I, focusProps: $ } = gt({ autoFocus: b }),
		{
			isHovered: O,
			isPressed: B,
			isFocused: K,
			isSelected: W,
			menuItemProps: G,
			labelProps: X,
			descriptionProps: q,
			keyboardShortcutProps: re,
		} = hD(
			{
				key: N,
				onClose: V,
				isDisabled: R,
				onPress: m,
				onClick: x,
				onPressStart: v,
				onPressUp: y,
				onPressEnd: P,
				onPressChange: C,
				"aria-label": t["aria-label"],
				closeOnSelect: w,
				isVirtualized: c,
				onAction: g,
			},
			a,
			L,
		);
	let Y = G;
	const ie = h.useMemo(
			() => Rl({ ...r, isDisabled: R, disableAnimation: F }),
			[bt(r), R, F],
		),
		se = Q(p == null ? void 0 : p.base, f);
	D && (Y = Eb(Y));
	const te = (fe = {}) => ({
			ref: L,
			...U(D ? {} : $, rt(M, { enabled: A }), Y, fe),
			"data-focus": H(K),
			"data-selectable": H(j),
			"data-hover": H(z ? O || B : O),
			"data-disabled": H(R),
			"data-selected": H(W),
			"data-pressed": H(B),
			"data-focus-visible": H(I),
			className: ie.base({ class: Q(se, fe.className) }),
		}),
		be = (fe = {}) => ({
			...U(X, fe),
			className: ie.title({ class: p == null ? void 0 : p.title }),
		}),
		ne = (fe = {}) => ({
			...U(q, fe),
			className: ie.description({ class: p == null ? void 0 : p.description }),
		}),
		ge = (fe = {}) => ({
			...U(re, fe),
			className: ie.shortcut({ class: p == null ? void 0 : p.shortcut }),
		}),
		ze = h.useCallback(
			(fe = {}) => ({
				"aria-hidden": H(!0),
				"data-disabled": H(R),
				className: ie.selectedIcon({
					class: p == null ? void 0 : p.selectedIcon,
				}),
				...fe,
			}),
			[R, ie, p],
		);
	return {
		Component: T,
		domRef: L,
		slots: ie,
		classNames: p,
		isSelectable: j,
		isSelected: W,
		isDisabled: R,
		rendered: _,
		shortcut: i,
		description: s,
		startContent: l,
		endContent: u,
		selectedIcon: d,
		disableAnimation: F,
		getItemProps: te,
		getLabelProps: be,
		hideSelectedIcon: E,
		getDescriptionProps: ne,
		getKeyboardShortcutProps: ge,
		getSelectedIconProps: ze,
	};
}
var q4 = ue((e, t) => {
	const {
			Component: r,
			slots: n,
			classNames: o,
			rendered: a,
			shortcut: i,
			description: s,
			isSelectable: l,
			isSelected: u,
			isDisabled: c,
			selectedIcon: d,
			startContent: f,
			endContent: p,
			disableAnimation: g,
			hideSelectedIcon: b,
			getItemProps: x,
			getLabelProps: m,
			getDescriptionProps: v,
			getKeyboardShortcutProps: y,
			getSelectedIconProps: P,
		} = gD(e),
		C = h.useMemo(() => {
			const E = S.jsx(fD, { disableAnimation: g, isSelected: u });
			return typeof d == "function"
				? d({ icon: E, isSelected: u, isDisabled: c })
				: d || E;
		}, [d, u, c, g]);
	return S.jsxs(r, {
		...x(),
		children: [
			f,
			s
				? S.jsxs("div", {
						className: n.wrapper({ class: o == null ? void 0 : o.wrapper }),
						children: [
							S.jsx("span", { ...m(), children: a }),
							S.jsx("span", { ...v(), children: s }),
						],
				  })
				: S.jsx("span", { ...m(), children: a }),
			i && S.jsx("kbd", { ...y(), children: i }),
			l && !b && S.jsx("span", { ...P(), children: C }),
			p,
		],
	});
});
q4.displayName = "NextUI.MenuItem";
var Q4 = q4,
	J4 = {};
J4 = {
	longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة",
};
var e6 = {};
e6 = {
	longPressMessage:
		"Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто",
};
var t6 = {};
t6 = {
	longPressMessage:
		"Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku",
};
var r6 = {};
r6 = {
	longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen",
};
var n6 = {};
n6 = {
	longPressMessage:
		"Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen",
};
var o6 = {};
o6 = {
	longPressMessage:
		"Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού",
};
var a6 = {};
a6 = { longPressMessage: "Long press or press Alt + ArrowDown to open menu" };
var i6 = {};
i6 = {
	longPressMessage:
		"Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú",
};
var s6 = {};
s6 = {
	longPressMessage:
		"Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool",
};
var l6 = {};
l6 = {
	longPressMessage:
		"Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli",
};
var u6 = {};
u6 = {
	longPressMessage:
		"Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu.",
};
var c6 = {};
c6 = {
	longPressMessage:
		"לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט",
};
var d6 = {};
d6 = {
	longPressMessage:
		"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika",
};
var f6 = {};
f6 = {
	longPressMessage:
		"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához",
};
var p6 = {};
p6 = {
	longPressMessage:
		"Premere a lungo o premere Alt + Freccia giù per aprire il menu",
};
var h6 = {};
h6 = { longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く" };
var m6 = {};
m6 = { longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기" };
var g6 = {};
g6 = {
	longPressMessage:
		"Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.",
};
var v6 = {};
v6 = {
	longPressMessage:
		"Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa",
};
var y6 = {};
y6 = {
	longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen",
};
var b6 = {};
b6 = {
	longPressMessage:
		"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen",
};
var x6 = {};
x6 = {
	longPressMessage:
		"Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu",
};
var w6 = {};
w6 = {
	longPressMessage:
		"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu",
};
var S6 = {};
S6 = {
	longPressMessage:
		"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu",
};
var P6 = {};
P6 = {
	longPressMessage:
		"Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul",
};
var $6 = {};
$6 = {
	longPressMessage:
		"Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню",
};
var C6 = {};
C6 = {
	longPressMessage:
		"Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol",
};
var E6 = {};
E6 = {
	longPressMessage:
		"Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol",
};
var k6 = {};
k6 = {
	longPressMessage:
		"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni",
};
var T6 = {};
T6 = {
	longPressMessage:
		"Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn",
};
var M6 = {};
M6 = {
	longPressMessage:
		"Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın",
};
var A6 = {};
A6 = {
	longPressMessage:
		"Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню",
};
var D6 = {};
D6 = { longPressMessage: "长按或按 Alt + 向下方向键以打开菜单" };
var I6 = {};
I6 = { longPressMessage: "長按或按 Alt+向下鍵以開啟功能表" };
function vD(e) {
	return e && e.__esModule ? e.default : e;
}
var V6 = {};
V6 = {
	"ar-AE": J4,
	"bg-BG": e6,
	"cs-CZ": t6,
	"da-DK": r6,
	"de-DE": n6,
	"el-GR": o6,
	"en-US": a6,
	"es-ES": i6,
	"et-EE": s6,
	"fi-FI": l6,
	"fr-FR": u6,
	"he-IL": c6,
	"hr-HR": d6,
	"hu-HU": f6,
	"it-IT": p6,
	"ja-JP": h6,
	"ko-KR": m6,
	"lt-LT": g6,
	"lv-LV": v6,
	"nb-NO": y6,
	"nl-NL": b6,
	"pl-PL": x6,
	"pt-BR": w6,
	"pt-PT": S6,
	"ro-RO": P6,
	"ru-RU": $6,
	"sk-SK": C6,
	"sl-SI": E6,
	"sr-SP": k6,
	"sv-SE": T6,
	"tr-TR": M6,
	"uk-UA": A6,
	"zh-CN": D6,
	"zh-TW": I6,
};
function R6(e, t, r) {
	let { type: n = "menu", isDisabled: o, trigger: a = "press" } = e,
		i = Jt(),
		{ triggerProps: s, overlayProps: l } = lx({ type: n }, t, r),
		u = p => {
			if (!o && !(a === "longPress" && !p.altKey) && r && r.current)
				switch (p.key) {
					case "Enter":
					case " ":
						if (a === "longPress") return;
					case "ArrowDown":
						"continuePropagation" in p || p.stopPropagation(),
							p.preventDefault(),
							t.toggle("first");
						break;
					case "ArrowUp":
						"continuePropagation" in p || p.stopPropagation(),
							p.preventDefault(),
							t.toggle("last");
						break;
					default:
						"continuePropagation" in p && p.continuePropagation();
				}
		},
		c = l2(vD(V6), "@react-aria/menu"),
		{ longPressProps: d } = ex({
			isDisabled: o || a !== "longPress",
			accessibilityDescription: c.format("longPressMessage"),
			onLongPressStart() {
				t.close();
			},
			onLongPress() {
				t.open("first");
			},
		}),
		f = {
			onPressStart(p) {
				p.pointerType !== "touch" &&
					p.pointerType !== "keyboard" &&
					!o &&
					t.toggle(p.pointerType === "virtual" ? "first" : null);
			},
			onPress(p) {
				p.pointerType === "touch" && !o && t.toggle();
			},
		};
	return (
		delete s.onPress,
		{
			menuTriggerProps: {
				...s,
				...(a === "press" ? f : d),
				id: i,
				onKeyDown: u,
			},
			menuProps: {
				...l,
				"aria-labelledby": i,
				autoFocus: t.focusStrategy || !0,
				onClose: t.close,
			},
		}
	);
}
function yD(e) {
	let { heading: t, "aria-label": r } = e,
		n = Jt();
	return {
		itemProps: { role: "presentation" },
		headingProps: t ? { id: n, role: "presentation" } : {},
		groupProps: {
			role: "group",
			"aria-label": r,
			"aria-labelledby": t ? n : void 0,
		},
	};
}
var L6 = ue(
	(
		{
			item: e,
			state: t,
			as: r,
			variant: n,
			color: o,
			disableAnimation: a,
			onAction: i,
			closeOnSelect: s,
			className: l,
			classNames: u,
			showDivider: c = !1,
			hideSelectedIcon: d,
			dividerProps: f = {},
			itemClasses: p,
			title: g,
			...b
		},
		x,
	) => {
		const m = r || "li",
			v = h.useMemo(() => Ex(), []),
			y = Q(u == null ? void 0 : u.base, l),
			P = Q(u == null ? void 0 : u.divider, f == null ? void 0 : f.className),
			{
				itemProps: C,
				headingProps: E,
				groupProps: D,
			} = yD({ heading: e.rendered, "aria-label": e["aria-label"] });
		return S.jsxs(m, {
			"data-slot": "base",
			...U(C, b),
			className: v.base({ class: y }),
			children: [
				e.rendered &&
					S.jsx("span", {
						...E,
						className: v.heading({ class: u == null ? void 0 : u.heading }),
						"data-slot": "heading",
						children: e.rendered,
					}),
				S.jsxs("ul", {
					...D,
					className: v.group({ class: u == null ? void 0 : u.group }),
					"data-has-title": !!e.rendered,
					"data-slot": "group",
					children: [
						[...e.childNodes].map(w => {
							const { key: V, props: M } = w;
							let F = S.jsx(
								Q4,
								{
									classNames: p,
									closeOnSelect: s,
									color: o,
									disableAnimation: a,
									hideSelectedIcon: d,
									item: w,
									state: t,
									variant: n,
									onAction: i,
									...M,
								},
								V,
							);
							return w.wrapper && (F = w.wrapper(F)), F;
						}),
						c &&
							S.jsx(a4, { as: "li", className: v.divider({ class: P }), ...f }),
					],
				}),
			],
		});
	},
);
L6.displayName = "NextUI.MenuSection";
var bD = L6;
function xD(e) {
	const {
			as: t,
			ref: r,
			variant: n,
			color: o,
			children: a,
			disableAnimation: i,
			onAction: s,
			closeOnSelect: l,
			itemClasses: u,
			className: c,
			state: d,
			topContent: f,
			bottomContent: p,
			hideEmptyContent: g = !1,
			hideSelectedIcon: b = !1,
			emptyContent: x = "No items.",
			menuProps: m,
			onClose: v,
			classNames: y,
			...P
		} = e,
		C = t || "ul",
		E = ke(r),
		D = typeof C == "string",
		w = m7({ ...P, children: a }),
		V = d || w,
		{ menuProps: M } = pD(P, V, E),
		F = h.useMemo(() => Cx({ className: c }), [c]),
		L = Q(y == null ? void 0 : y.base, c);
	return {
		Component: C,
		state: V,
		variant: n,
		color: o,
		disableAnimation: i,
		onAction: s,
		onClose: v,
		topContent: f,
		bottomContent: p,
		closeOnSelect: l,
		className: c,
		itemClasses: u,
		getBaseProps: (N = {}) => ({
			ref: E,
			"data-slot": "base",
			className: F.base({ class: L }),
			...rt(P, { enabled: D }),
			...N,
		}),
		getListProps: (N = {}) => ({
			"data-slot": "list",
			className: F.list({ class: y == null ? void 0 : y.list }),
			...m,
			...M,
			...N,
		}),
		hideEmptyContent: g,
		hideSelectedIcon: b,
		getEmptyContentProps: (N = {}) => ({
			children: x,
			className: F.emptyContent({ class: y == null ? void 0 : y.emptyContent }),
			...N,
		}),
	};
}
function F6(e, t) {
	const {
			Component: r,
			state: n,
			closeOnSelect: o,
			color: a,
			disableAnimation: i,
			hideSelectedIcon: s,
			hideEmptyContent: l,
			variant: u,
			onClose: c,
			onAction: d,
			topContent: f,
			bottomContent: p,
			itemClasses: g,
			getBaseProps: b,
			getListProps: x,
			getEmptyContentProps: m,
		} = xD({ ...e, ref: t }),
		v = S.jsxs(r, {
			...x(),
			children: [
				!n.collection.size &&
					!l &&
					S.jsx("li", { children: S.jsx("div", { ...m() }) }),
				[...n.collection].map(y => {
					const P = {
						closeOnSelect: o,
						color: a,
						disableAnimation: i,
						item: y,
						state: n,
						variant: u,
						onClose: c,
						onAction: d,
						hideSelectedIcon: s,
						...y.props,
					};
					if (y.type === "section")
						return S.jsx(bD, { ...P, itemClasses: g }, y.key);
					let C = S.jsx(Q4, { ...P, classNames: g }, y.key);
					return y.wrapper && (C = y.wrapper(C)), C;
				}),
			],
		});
	return S.jsxs("div", { ...b(), children: [f, v, p] });
}
var wD = ue(F6);
F6.displayName = "NextUI.Menu";
var SD = k0,
	PD = SD;
function O6(e, t) {
	const { getMenuProps: r } = G4();
	return S.jsx(K4, {
		children: S.jsx(rx, {
			contain: !0,
			restoreFocus: !0,
			children: S.jsx(wD, { ...r(e, t) }),
		}),
	});
}
var $D = ue(O6);
O6.displayName = "NextUI.DropdownMenu";
var N6 = ue((e, t) => {
	const { getMenuTriggerProps: r } = G4(),
		{ children: n, ...o } = e;
	return S.jsx(W4, { ...r(o), children: n });
});
N6.displayName = "NextUI.DropdownTrigger";
var CD = N6;
function j6(e) {
	let t = Tu(e),
		[r, n] = h.useState(null),
		[o, a] = h.useState([]),
		i = () => {
			a([]), t.close();
		};
	return {
		focusStrategy: r,
		...t,
		open(u = null) {
			n(u), t.open();
		},
		toggle(u = null) {
			n(u), t.toggle();
		},
		close() {
			i();
		},
		UNSTABLE_expandedKeysStack: o,
		UNSTABLE_openSubmenu: (u, c) => {
			a(d => (c > d.length ? d : [...d.slice(0, c), u]));
		},
		UNSTABLE_closeSubmenu: (u, c) => {
			a(d => (d[c] === u ? d.slice(0, c) : d));
		},
	};
}
function ED(e) {
	const {
			as: t,
			triggerRef: r,
			isOpen: n,
			defaultOpen: o,
			onOpenChange: a,
			isDisabled: i,
			type: s = "menu",
			trigger: l = "press",
			placement: u = "bottom",
			closeOnSelect: c = !0,
			shouldBlockScroll: d = !0,
			classNames: f,
			disableAnimation: p = !1,
			onClose: g,
			className: b,
			...x
		} = e,
		m = t || "div",
		v = h.useRef(null),
		y = r || v,
		P = h.useRef(null),
		C = h.useRef(null),
		E = j6({
			trigger: l,
			isOpen: n,
			defaultOpen: o,
			onOpenChange: A => {
				a == null || a(A), A || g == null || g();
			},
		}),
		{ menuTriggerProps: D, menuProps: w } = R6(
			{ type: s, trigger: l, isDisabled: i },
			E,
			y,
		),
		V = h.useMemo(() => IC({ className: b }), [b]),
		M = A => {
			(A !== void 0 && !A) || (c && E.close());
		},
		F = (A = {}) => ({
			state: E,
			placement: u,
			ref: C,
			disableAnimation: p,
			shouldBlockScroll: d,
			scrollRef: P,
			triggerRef: y,
			...U(x, A),
			classNames: {
				...f,
				...A.classNames,
				content: Q(V, f == null ? void 0 : f.content, A.className),
			},
		}),
		L = (A = {}, _ = null) => {
			const { onKeyDown: N, onPress: R, onPressStart: j, ...z } = D;
			return { ...U(z, { isDisabled: i }, A), ref: yl(_, v) };
		},
		T = (A, _ = null) => ({
			ref: yl(_, P),
			menuProps: w,
			closeOnSelect: c,
			...U(A, {
				onAction: () => M(A == null ? void 0 : A.closeOnSelect),
				onClose: E.close,
			}),
		});
	return {
		Component: m,
		menuRef: P,
		menuProps: w,
		classNames: V,
		closeOnSelect: c,
		onClose: E.close,
		autoFocus: E.focusStrategy || !0,
		disableAnimation: p,
		getPopoverProps: F,
		getMenuProps: T,
		getMenuTriggerProps: L,
	};
}
var _6 = e => {
	const { children: t, ...r } = e,
		n = ED(r),
		[o, a] = k.Children.toArray(t);
	return S.jsx(dD, {
		value: n,
		children: S.jsxs(Z4, { ...n.getPopoverProps(), children: [o, a] }),
	});
};
_6.displayName = "NextUI.Dropdown";
var kD = _6,
	[TD, Au] = ao({
		name: "ModalContext",
		errorMessage:
			"useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`",
	}),
	z6 = ue((e, t) => {
		const { as: r, children: n, className: o, ...a } = e,
			{ slots: i, classNames: s, bodyId: l, setBodyMounted: u } = Au(),
			c = ke(t),
			d = r || "div";
		return (
			h.useEffect(() => (u(!0), () => u(!1)), [u]),
			S.jsx(d, {
				ref: c,
				className: i.body({ class: Q(s == null ? void 0 : s.body, o) }),
				id: l,
				...a,
				children: n,
			})
		);
	});
z6.displayName = "NextUI.ModalBody";
var MD = z6,
	AD = {
		enter: {
			scale: "var(--scale-enter)",
			y: "var(--slide-enter)",
			opacity: 1,
			transition: {
				scale: { duration: 0.4, ease: Ir.ease },
				opacity: { duration: 0.4, ease: Ir.ease },
				y: { type: "spring", bounce: 0, duration: 0.6 },
			},
		},
		exit: {
			scale: "var(--scale-exit)",
			y: "var(--slide-exit)",
			opacity: 0,
			transition: { duration: 0.3, ease: Ir.ease },
		},
	},
	B6 = ue((e, t) => {
		const { as: r, children: n, role: o = "dialog", ...a } = e,
			{
				Component: i,
				domRef: s,
				slots: l,
				classNames: u,
				motionProps: c,
				backdrop: d,
				closeButton: f,
				hideCloseButton: p,
				disableAnimation: g,
				getDialogProps: b,
				getBackdropProps: x,
				getCloseButtonProps: m,
				onClose: v,
			} = Au(),
			y = r || i || "div",
			{ dialogProps: P } = A4({ role: o }, s),
			C = h.isValidElement(f)
				? h.cloneElement(f, m())
				: S.jsx("button", { ...m(), children: S.jsx(zC, {}) }),
			E = h.useCallback(F => {
				F.key === "Tab" &&
					F.nativeEvent.isComposing &&
					(F.stopPropagation(), F.preventDefault());
			}, []),
			D = b(U(P, a)),
			w = S.jsxs(y, {
				...D,
				onKeyDown: nt(D.onKeyDown, E),
				children: [
					S.jsx(na, { onDismiss: v }),
					!p && C,
					typeof n == "function" ? n(v) : n,
					S.jsx(na, { onDismiss: v }),
				],
			}),
			V = h.useMemo(
				() =>
					d === "transparent"
						? null
						: g
						? S.jsx("div", { ...x() })
						: S.jsx(Zr, {
								features: Gr,
								children: S.jsx(Ur.div, {
									animate: "enter",
									exit: "exit",
									initial: "exit",
									variants: aa.fade,
									...x(),
								}),
						  }),
				[d, g, x],
			),
			M = g
				? S.jsx("div", {
						className: l.wrapper({ class: u == null ? void 0 : u.wrapper }),
						"data-slot": "wrapper",
						children: w,
				  })
				: S.jsx(Zr, {
						features: Gr,
						children: S.jsx(Ur.div, {
							animate: "enter",
							className: l.wrapper({ class: u == null ? void 0 : u.wrapper }),
							"data-slot": "wrapper",
							exit: "exit",
							initial: "exit",
							variants: AD,
							...c,
							children: w,
						}),
				  });
		return S.jsxs("div", { tabIndex: -1, children: [V, M] });
	});
B6.displayName = "NextUI.ModalContent";
var DD = B6,
	K6 = ue((e, t) => {
		const { as: r, children: n, className: o, ...a } = e,
			{ slots: i, classNames: s } = Au(),
			l = ke(t),
			u = r || "footer";
		return S.jsx(u, {
			ref: l,
			className: i.footer({ class: Q(s == null ? void 0 : s.footer, o) }),
			...a,
			children: n,
		});
	});
K6.displayName = "NextUI.ModalFooter";
var ID = K6,
	H6 = ue((e, t) => {
		const { as: r, children: n, className: o, ...a } = e,
			{ slots: i, classNames: s, headerId: l, setHeaderMounted: u } = Au(),
			c = ke(t),
			d = r || "header";
		return (
			h.useEffect(() => (u(!0), () => u(!1)), [u]),
			S.jsx(d, {
				ref: c,
				className: i.header({ class: Q(s == null ? void 0 : s.header, o) }),
				id: l,
				...a,
				children: n,
			})
		);
	});
H6.displayName = "NextUI.ModalHeader";
var VD = H6;
function RD(e = { shouldBlockScroll: !0 }, t, r) {
	let { overlayProps: n, underlayProps: o } = Up(
		{ ...e, isOpen: t.isOpen, onClose: t.close },
		r,
	);
	return (
		F$({ isDisabled: !t.isOpen || !e.shouldBlockScroll }),
		px(),
		h.useEffect(() => {
			if (t.isOpen && r.current) return dx([r.current]);
		}, [t.isOpen, r]),
		{ modalProps: U(n), underlayProps: o }
	);
}
function LD(e) {
	var t;
	const [r, n] = xt(e, _m.variantKeys),
		{
			ref: o,
			as: a,
			className: i,
			classNames: s,
			disableAnimation: l = !1,
			isOpen: u,
			defaultOpen: c,
			onOpenChange: d,
			motionProps: f,
			closeButton: p,
			isDismissable: g = !0,
			hideCloseButton: b = !1,
			shouldBlockScroll: x = !0,
			portalContainer: m,
			isKeyboardDismissDisabled: v = !1,
			onClose: y,
			...P
		} = r,
		C = a || "section",
		E = ke(o),
		D = h.useRef(null),
		[w, V] = h.useState(!1),
		[M, F] = h.useState(!1),
		L = h.useId(),
		T = h.useId(),
		A = h.useId(),
		_ = Tu({
			isOpen: u,
			defaultOpen: c,
			onOpenChange: G => {
				d == null || d(G), G || y == null || y();
			},
		}),
		{ modalProps: N, underlayProps: R } = RD(
			{ isDismissable: g, shouldBlockScroll: x, isKeyboardDismissDisabled: v },
			_,
			E,
		),
		{ buttonProps: j } = ji({ onPress: _.close }, D),
		{ isFocusVisible: z, focusProps: I } = gt(),
		$ = Q(s == null ? void 0 : s.base, i),
		O = h.useMemo(() => _m({ ...n }), [bt(n)]),
		B = (G = {}, X = null) => ({
			ref: Gb(X, E),
			...U(N, P, G),
			className: O.base({ class: Q($, G.className) }),
			id: L,
			"data-open": H(_.isOpen),
			"data-dismissable": H(g),
			"aria-modal": H(!0),
			"aria-labelledby": w ? T : void 0,
			"aria-describedby": M ? A : void 0,
		}),
		K = h.useCallback(
			(G = {}) => ({
				className: O.backdrop({ class: s == null ? void 0 : s.backdrop }),
				onClick: () => _.close(),
				...R,
				...G,
			}),
			[O, s, R],
		),
		W = () => ({
			role: "button",
			tabIndex: 0,
			"aria-label": "Close",
			"data-focus-visible": H(z),
			className: O.closeButton({ class: s == null ? void 0 : s.closeButton }),
			...U(j, I),
		});
	return {
		Component: C,
		slots: O,
		domRef: E,
		headerId: T,
		bodyId: A,
		motionProps: f,
		classNames: s,
		isDismissable: g,
		closeButton: p,
		hideCloseButton: b,
		portalContainer: m,
		shouldBlockScroll: x,
		backdrop: (t = e.backdrop) != null ? t : "opaque",
		isOpen: _.isOpen,
		onClose: _.close,
		disableAnimation: l,
		setBodyMounted: F,
		setHeaderMounted: V,
		getDialogProps: B,
		getBackdropProps: K,
		getCloseButtonProps: W,
	};
}
var W6 = ue((e, t) => {
	const { children: r, ...n } = e,
		o = LD({ ...n, ref: t }),
		a = S.jsx(Zp, { portalContainer: o.portalContainer, children: r });
	return S.jsx(TD, {
		value: o,
		children:
			o.disableAnimation && o.isOpen
				? a
				: S.jsx(Oi, { children: o.isOpen ? a : null }),
	});
});
W6.displayName = "NextUI.Modal";
var FD = W6;
function OD(e = {}) {
	const {
			id: t,
			defaultOpen: r,
			isOpen: n,
			onClose: o,
			onOpen: a,
			onChange: i = () => {},
		} = e,
		s = Mf(a),
		l = Mf(o),
		[u, c] = Cr(n, r || !1, i),
		d = h.useId(),
		f = t || d,
		p = n !== void 0,
		g = h.useCallback(() => {
			p || c(!1), l == null || l();
		}, [p, l]),
		b = h.useCallback(() => {
			p || c(!0), s == null || s();
		}, [p, s]),
		x = h.useCallback(() => {
			(u ? g : b)();
		}, [u, b, g]);
	return {
		isOpen: !!u,
		onOpen: b,
		onClose: g,
		onOpenChange: x,
		isControlled: p,
		getButtonProps: (m = {}) => ({
			...m,
			"aria-expanded": u,
			"aria-controls": f,
			onClick: nt(m.onClick, x),
		}),
		getDisclosureProps: (m = {}) => ({ ...m, hidden: !u, id: f }),
	};
}
const U6 = new WeakMap();
function Wl(e, t, r) {
	return (
		typeof t == "string" && (t = t.replace(/\s+/g, "")),
		`${U6.get(e)}-${r}-${t}`
	);
}
function ND(e, t, r) {
	var n;
	let { key: o, isDisabled: a, shouldSelectOnPressUp: i } = e,
		{ selectionManager: s, selectedKey: l } = t,
		u = o === l,
		c = a || t.isDisabled || t.disabledKeys.has(o),
		{ itemProps: d, isPressed: f } = Xp({
			selectionManager: s,
			key: o,
			ref: r,
			isDisabled: c,
			shouldSelectOnPressUp: i,
			linkBehavior: "selection",
		}),
		p = Wl(t, o, "tab"),
		g = Wl(t, o, "tabpanel"),
		{ tabIndex: b } = d,
		x = t.collection.getItem(o),
		m = Ft(x == null ? void 0 : x.props, {
			isLink: !!(
				!(x == null || (n = x.props) === null || n === void 0) && n.href
			),
			labelable: !0,
		});
	return (
		delete m.id,
		{
			tabProps: U(m, d, {
				id: p,
				"aria-selected": u,
				"aria-disabled": c || void 0,
				"aria-controls": u ? g : void 0,
				tabIndex: c ? void 0 : b,
				role: "tab",
			}),
			isSelected: u,
			isDisabled: c,
			isPressed: f,
		}
	);
}
function jD(e, t, r) {
	let n = P$(r) ? void 0 : 0;
	var o;
	const a = Wl(
			t,
			(o = e.id) !== null && o !== void 0
				? o
				: t == null
				? void 0
				: t.selectedKey,
			"tabpanel",
		),
		i = vu({
			...e,
			id: a,
			"aria-labelledby": Wl(t, t == null ? void 0 : t.selectedKey, "tab"),
		});
	return {
		tabPanelProps: U(i, {
			tabIndex: n,
			role: "tabpanel",
			"aria-describedby": e["aria-describedby"],
			"aria-details": e["aria-details"],
		}),
	};
}
class _D {
	getKeyLeftOf(t) {
		return this.flipDirection ? this.getNextKey(t) : this.getPreviousKey(t);
	}
	getKeyRightOf(t) {
		return this.flipDirection ? this.getPreviousKey(t) : this.getNextKey(t);
	}
	getKeyAbove(t) {
		return this.getPreviousKey(t);
	}
	getKeyBelow(t) {
		return this.getNextKey(t);
	}
	getFirstKey() {
		let t = this.collection.getFirstKey();
		return t != null && this.disabledKeys.has(t) && (t = this.getNextKey(t)), t;
	}
	getLastKey() {
		let t = this.collection.getLastKey();
		return (
			t != null && this.disabledKeys.has(t) && (t = this.getPreviousKey(t)), t
		);
	}
	getNextKey(t) {
		do
			(t = this.collection.getKeyAfter(t)),
				t == null && (t = this.collection.getFirstKey());
		while (this.disabledKeys.has(t));
		return t;
	}
	getPreviousKey(t) {
		do
			(t = this.collection.getKeyBefore(t)),
				t == null && (t = this.collection.getLastKey());
		while (this.disabledKeys.has(t));
		return t;
	}
	constructor(t, r, n, o = new Set()) {
		(this.collection = t),
			(this.flipDirection = r === "rtl" && n === "horizontal"),
			(this.disabledKeys = o);
	}
}
function zD(e, t, r) {
	let { orientation: n = "horizontal", keyboardActivation: o = "automatic" } =
			e,
		{ collection: a, selectionManager: i, disabledKeys: s } = t,
		{ direction: l } = Xr(),
		u = h.useMemo(() => new _D(a, l, n, s), [a, s, n, l]),
		{ collectionProps: c } = Tx({
			ref: r,
			selectionManager: i,
			keyboardDelegate: u,
			selectOnFocus: o === "automatic",
			disallowEmptySelection: !0,
			scrollRef: r,
			linkBehavior: "selection",
		}),
		d = Jt();
	U6.set(t, d);
	let f = vu({ ...e, id: d });
	return {
		tabListProps: {
			...U(c, f),
			role: "tablist",
			"aria-orientation": n,
			tabIndex: void 0,
		},
	};
}
var Z6 = ue((e, t) => {
	var r, n, o;
	const { as: a, state: i, className: s, slots: l, classNames: u, ...c } = e,
		d = a || "div",
		f = ke(t),
		{ tabPanelProps: p } = jD(e, i, f),
		{ focusProps: g, isFocused: b, isFocusVisible: x } = gt(),
		m = i.selectedItem,
		v = (r = m == null ? void 0 : m.props) == null ? void 0 : r.children,
		y = Q(
			u == null ? void 0 : u.panel,
			s,
			(n = m == null ? void 0 : m.props) == null ? void 0 : n.className,
		);
	return v
		? S.jsx(d, {
				ref: f,
				"data-focus": b,
				"data-focus-visible": x,
				...U(p, g, c),
				className: (o = l.panel) == null ? void 0 : o.call(l, { class: y }),
				"data-slot": "panel",
				children: v,
		  })
		: null;
});
Z6.displayName = "NextUI.TabPanel";
var BD = Z6,
	G6 = ue((e, t) => {
		var r;
		const {
				className: n,
				as: o,
				item: a,
				state: i,
				classNames: s,
				isDisabled: l,
				listRef: u,
				slots: c,
				motionProps: d,
				disableAnimation: f,
				disableCursorAnimation: p,
				shouldSelectOnPressUp: g,
				onClick: b,
				...x
			} = e,
			{ key: m } = a,
			v = ke(t),
			y = o || (e.href ? "a" : "button"),
			P = typeof y == "string",
			{
				tabProps: C,
				isSelected: E,
				isDisabled: D,
				isPressed: w,
			} = ND({ key: m, isDisabled: l, shouldSelectOnPressUp: g }, i, v),
			V = l || D,
			{ focusProps: M, isFocused: F, isFocusVisible: L } = gt(),
			{ hoverProps: T, isHovered: A } = kt({ isDisabled: V }),
			_ = Q(s == null ? void 0 : s.tab, n),
			[, N] = lA({ rerender: !0 }),
			R = () => {
				nt(b, C.onClick),
					!(!(v != null && v.current) || !(u != null && u.current)) &&
						Q7(v.current, {
							scrollMode: "if-needed",
							behavior: "smooth",
							block: "end",
							inline: "end",
							boundary: u == null ? void 0 : u.current,
						});
			};
		return S.jsxs(y, {
			ref: v,
			"data-disabled": H(D),
			"data-focus": H(F),
			"data-focus-visible": H(L),
			"data-hover": H(A),
			"data-hover-unselected": H((A || w) && !E),
			"data-pressed": H(w),
			"data-selected": H(E),
			"data-slot": "tab",
			...U(
				C,
				V ? {} : { ...M, ...T },
				rt(x, { enabled: P, omitPropNames: new Set(["title"]) }),
			),
			className: (r = c.tab) == null ? void 0 : r.call(c, { class: _ }),
			title: x == null ? void 0 : x.titleValue,
			type: y === "button" ? "button" : void 0,
			onClick: R,
			children: [
				E && !f && !p && N
					? S.jsx(Zr, {
							features: s7,
							children: S.jsx(Ur.span, {
								className: c.cursor({ class: s == null ? void 0 : s.cursor }),
								"data-slot": "cursor",
								layoutDependency: !1,
								layoutId: "cursor",
								transition: { type: "spring", bounce: 0.15, duration: 0.5 },
								...d,
							}),
					  })
					: null,
				S.jsx("div", {
					className: c.tabContent({ class: s == null ? void 0 : s.tabContent }),
					"data-slot": "tabContent",
					children: a.rendered,
				}),
			],
		});
	});
G6.displayName = "NextUI.Tab";
var KD = G6;
class $v {
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this.keyMap.size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(t) {
		let r = this.keyMap.get(t);
		return r ? r.prevKey : null;
	}
	getKeyAfter(t) {
		let r = this.keyMap.get(t);
		return r ? r.nextKey : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(t) {
		return this.keyMap.get(t);
	}
	at(t) {
		const r = [...this.getKeys()];
		return this.getItem(r[t]);
	}
	getChildren(t) {
		let r = this.keyMap.get(t);
		return (r == null ? void 0 : r.childNodes) || [];
	}
	constructor(t) {
		(this.keyMap = new Map()), (this.iterable = t);
		let r = a => {
			if ((this.keyMap.set(a.key, a), a.childNodes && a.type === "section"))
				for (let i of a.childNodes) r(i);
		};
		for (let a of t) r(a);
		let n,
			o = 0;
		for (let [a, i] of this.keyMap)
			n
				? ((n.nextKey = a), (i.prevKey = n.key))
				: ((this.firstKey = a), (i.prevKey = void 0)),
				i.type === "item" && (i.index = o++),
				(n = i),
				(n.nextKey = void 0);
		this.lastKey = n == null ? void 0 : n.key;
	}
}
function V0(e) {
	let { filter: t } = e,
		r = r4(e),
		n = h.useMemo(
			() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
			[e.disabledKeys],
		),
		o = h.useCallback(u => (t ? new $v(t(u)) : new $v(u)), [t]),
		a = h.useMemo(
			() => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
			[e.suppressTextValueWarning],
		),
		i = Jw(e, o, a),
		s = h.useMemo(() => new n4(i, r), [i, r]);
	const l = h.useRef(null);
	return (
		h.useEffect(() => {
			if (r.focusedKey != null && !i.getItem(r.focusedKey)) {
				const u = l.current.getItem(r.focusedKey),
					c = [...l.current.getKeys()]
						.map(b => {
							const x = l.current.getItem(b);
							return x.type === "item" ? x : null;
						})
						.filter(b => b !== null),
					d = [...i.getKeys()]
						.map(b => {
							const x = i.getItem(b);
							return x.type === "item" ? x : null;
						})
						.filter(b => b !== null),
					f = c.length - d.length;
				let p = Math.min(
						f > 1 ? Math.max(u.index - f + 1, 0) : u.index,
						d.length - 1,
					),
					g;
				for (; p >= 0; ) {
					if (!s.isDisabled(d[p].key)) {
						g = d[p];
						break;
					}
					p < d.length - 1 ? p++ : (p > u.index && (p = u.index), p--);
				}
				r.setFocusedKey(g ? g.key : null);
			}
			l.current = i;
		}, [i, s, r, r.focusedKey]),
		{ collection: i, disabledKeys: n, selectionManager: s }
	);
}
function HD(e) {
	var t;
	let [r, n] = Cr(
			e.selectedKey,
			(t = e.defaultSelectedKey) !== null && t !== void 0 ? t : null,
			e.onSelectionChange,
		),
		o = h.useMemo(() => (r != null ? [r] : []), [r]),
		{
			collection: a,
			disabledKeys: i,
			selectionManager: s,
		} = V0({
			...e,
			selectionMode: "single",
			disallowEmptySelection: !0,
			allowDuplicateSelectionEvents: !0,
			selectedKeys: o,
			onSelectionChange: u => {
				var c;
				let d =
					(c = u.values().next().value) !== null && c !== void 0 ? c : null;
				d === r && e.onSelectionChange && e.onSelectionChange(d), n(d);
			},
		}),
		l = r != null ? a.getItem(r) : null;
	return {
		collection: a,
		disabledKeys: i,
		selectionManager: s,
		selectedKey: r,
		setSelectedKey: n,
		selectedItem: l,
	};
}
function WD(e) {
	var t;
	let r = HD({
			...e,
			suppressTextValueWarning: !0,
			defaultSelectedKey:
				(t = e.defaultSelectedKey) !== null && t !== void 0
					? t
					: Cv(
							e.collection,
							e.disabledKeys ? new Set(e.disabledKeys) : new Set(),
					  ),
		}),
		{ selectionManager: n, collection: o, selectedKey: a } = r,
		i = h.useRef(a);
	return (
		h.useEffect(() => {
			let s = a;
			(n.isEmpty || !o.getItem(s)) &&
				((s = Cv(o, r.disabledKeys)), s != null && n.setSelectedKeys([s])),
				((s != null && n.focusedKey == null) ||
					(!n.isFocused && s !== i.current)) &&
					n.setFocusedKey(s),
				(i.current = s);
		}),
		{ ...r, isDisabled: e.isDisabled || !1 }
	);
}
function Cv(e, t) {
	let r = null;
	if (e) {
		for (r = e.getFirstKey(); t.has(r) && r !== e.getLastKey(); )
			r = e.getKeyAfter(r);
		t.has(r) && r === e.getLastKey() && (r = e.getFirstKey());
	}
	return r;
}
function UD(e) {
	var t;
	const [r, n] = xt(e, Lm.variantKeys),
		{
			ref: o,
			as: a,
			className: i,
			classNames: s,
			children: l,
			disableCursorAnimation: u,
			motionProps: c,
			isVertical: d = !1,
			shouldSelectOnPressUp: f = !0,
			...p
		} = r,
		g = a || "div",
		b = typeof g == "string",
		x = ke(o),
		m = WD({ children: l, ...p }),
		{ tabListProps: v } = zD(p, m, x),
		y = h.useMemo(
			() => Lm({ ...n, className: i, ...(d ? { placement: "start" } : {}) }),
			[bt(n), i, d],
		),
		P = Q(s == null ? void 0 : s.base, i),
		C = h.useMemo(
			() => ({
				state: m,
				slots: y,
				classNames: s,
				motionProps: c,
				listRef: x,
				shouldSelectOnPressUp: f,
				disableCursorAnimation: u,
				isDisabled: e == null ? void 0 : e.isDisabled,
				disableAnimation: e == null ? void 0 : e.disableAnimation,
			}),
			[
				m,
				y,
				x,
				c,
				u,
				f,
				e == null ? void 0 : e.disableAnimation,
				e == null ? void 0 : e.isDisabled,
				s,
			],
		),
		E = h.useCallback(
			M => ({
				"data-slot": "base",
				className: y.base({ class: Q(P, M == null ? void 0 : M.className) }),
				...U(rt(p, { enabled: b }), M),
			}),
			[P, p, y],
		),
		D = (t = n.placement) != null ? t : d ? "start" : "top",
		w = h.useCallback(
			M => ({
				"data-slot": "tabWrapper",
				className: y.wrapper({
					class: Q(
						s == null ? void 0 : s.wrapper,
						M == null ? void 0 : M.className,
					),
				}),
				"data-placement": D,
				"data-vertical":
					d || D === "start" || D === "end" ? "vertical" : "horizontal",
			}),
			[s, y, D, d],
		),
		V = h.useCallback(
			M => ({
				ref: x,
				"data-slot": "tabList",
				className: y.tabList({
					class: Q(
						s == null ? void 0 : s.tabList,
						M == null ? void 0 : M.className,
					),
				}),
				...U(v, M),
			}),
			[x, v, s, y],
		);
	return {
		Component: g,
		domRef: x,
		state: m,
		values: C,
		getBaseProps: E,
		getTabListProps: V,
		getWrapperProps: w,
	};
}
function Y6(e, t) {
	var r;
	const {
			Component: n,
			values: o,
			state: a,
			getBaseProps: i,
			getTabListProps: s,
			getWrapperProps: l,
		} = UD({ ...e, ref: t }),
		u = h.useId(),
		c = !e.disableAnimation && !e.disableCursorAnimation,
		d = {
			state: a,
			listRef: o.listRef,
			slots: o.slots,
			classNames: o.classNames,
			isDisabled: o.isDisabled,
			motionProps: o.motionProps,
			disableAnimation: o.disableAnimation,
			shouldSelectOnPressUp: o.shouldSelectOnPressUp,
			disableCursorAnimation: o.disableCursorAnimation,
		},
		f = [...a.collection].map(g =>
			S.jsx(KD, { item: g, ...d, ...g.props }, g.key),
		),
		p = S.jsxs(S.Fragment, {
			children: [
				S.jsx("div", {
					...i(),
					children: S.jsx(n, {
						...s(),
						children: c ? S.jsx(i7, { id: u, children: f }) : f,
					}),
				}),
				S.jsx(
					BD,
					{ classNames: o.classNames, slots: o.slots, state: o.state },
					(r = a.selectedItem) == null ? void 0 : r.key,
				),
			],
		});
	return "placement" in e || "isVertical" in e
		? S.jsx("div", { ...l(), children: p })
		: p;
}
var ZD = ue(Y6);
Y6.displayName = "NextUI.Tabs";
var GD = k0,
	Zc = GD;
function YD(e = {}) {
	const {
			domRef: t,
			isEnabled: r = !0,
			overflowCheck: n = "vertical",
			visibility: o = "auto",
			offset: a = 0,
			onVisibilityChange: i,
			updateDeps: s = [],
		} = e,
		l = h.useRef(o);
	h.useEffect(() => {
		const u = t == null ? void 0 : t.current;
		if (!u || !r) return;
		const c = (p, g, b, x, m) => {
				if (o === "auto") {
					const v = `${x}${f3(m)}Scroll`;
					g && b
						? ((u.dataset[v] = "true"),
						  u.removeAttribute(`data-${x}-scroll`),
						  u.removeAttribute(`data-${m}-scroll`))
						: ((u.dataset[`${x}Scroll`] = g.toString()),
						  (u.dataset[`${m}Scroll`] = b.toString()),
						  u.removeAttribute(`data-${x}-${m}-scroll`));
				} else {
					const v = g && b ? "both" : g ? x : b ? m : "none";
					v !== l.current && (i == null || i(v), (l.current = v));
				}
			},
			d = () => {
				const p = [
					{ type: "vertical", prefix: "top", suffix: "bottom" },
					{ type: "horizontal", prefix: "left", suffix: "right" },
				];
				for (const { type: g, prefix: b, suffix: x } of p)
					if (n === g || n === "both") {
						const m = g === "vertical" ? u.scrollTop > a : u.scrollLeft > a,
							v =
								g === "vertical"
									? u.scrollTop + u.clientHeight + a < u.scrollHeight
									: u.scrollLeft + u.clientWidth + a < u.scrollWidth;
						c(g, m, v, b, x);
					}
			},
			f = () => {
				["top", "bottom", "top-bottom", "left", "right", "left-right"].forEach(
					p => {
						u.removeAttribute(`data-${p}-scroll`);
					},
				);
			};
		return (
			d(),
			u.addEventListener("scroll", d),
			o !== "auto" &&
				(f(),
				o === "both"
					? ((u.dataset.topBottomScroll = String(n === "vertical")),
					  (u.dataset.leftRightScroll = String(n === "horizontal")))
					: ((u.dataset.topBottomScroll = "false"),
					  (u.dataset.leftRightScroll = "false"),
					  ["top", "bottom", "left", "right"].forEach(p => {
							u.dataset[`${p}Scroll`] = String(o === p);
					  }))),
			() => {
				u.removeEventListener("scroll", d), f();
			}
		);
	}, [...s, r, o, n, i, t]);
}
function XD(e) {
	var t;
	const [r, n] = xt(e, Om.variantKeys),
		{
			ref: o,
			as: a,
			children: i,
			className: s,
			style: l,
			size: u = 40,
			offset: c = 0,
			visibility: d = "auto",
			isEnabled: f = !0,
			onVisibilityChange: p,
			...g
		} = r,
		b = a || "div",
		x = ke(o);
	YD({
		domRef: x,
		offset: c,
		visibility: d,
		isEnabled: f,
		onVisibilityChange: p,
		updateDeps: [i],
		overflowCheck: (t = e.orientation) != null ? t : "vertical",
	});
	const m = h.useMemo(() => Om({ ...n, className: s }), [bt(n), s]);
	return {
		Component: b,
		styles: m,
		domRef: x,
		children: i,
		getBaseProps: (y = {}) => {
			var P;
			return {
				ref: x,
				className: m,
				"data-orientation": (P = e.orientation) != null ? P : "vertical",
				style: { "--scroll-shadow-size": `${u}px`, ...l, ...y.style },
				...g,
				...y,
			};
		},
	};
}
var X6 = ue((e, t) => {
	const { Component: r, children: n, getBaseProps: o } = XD({ ...e, ref: t });
	return S.jsx(r, { ...o(), children: n });
});
X6.displayName = "NextUI.ScrollShadow";
var qD = X6;
function QD(e) {
	const {
			collection: t,
			disabledKeys: r,
			selectionManager: n,
			selectionManager: {
				setSelectedKeys: o,
				selectedKeys: a,
				selectionMode: i,
			},
		} = V0(e),
		s = h.useMemo(
			() =>
				!e.isLoading && a.size !== 0
					? Array.from(a)
							.filter(Boolean)
							.filter(u => !t.getItem(`${u}`))
					: [],
			[a, t],
		),
		l =
			a.size !== 0
				? Array.from(a)
						.map(u => t.getItem(`${u}`))
						.filter(Boolean)
				: null;
	return (
		s.length &&
			console.warn(
				`Select: Keys "${s.join(
					", ",
				)}" passed to "selectedKeys" are not present in the collection.`,
			),
		{
			collection: t,
			disabledKeys: r,
			selectionManager: n,
			selectionMode: i,
			selectedKeys: a,
			setSelectedKeys: o.bind(n),
			selectedItems: l,
		}
	);
}
function JD(e) {
	const [t, r] = h.useState(!1),
		[n, o] = h.useState(null),
		a = j6(e),
		i = QD({
			...e,
			onSelectionChange: l => {
				e.onSelectionChange != null &&
					(l === "all"
						? e.onSelectionChange(new Set(i.collection.getKeys()))
						: e.onSelectionChange(l)),
					e.selectionMode === "single" && a.close();
			},
		}),
		s = _i({ ...e, validationBehavior: "native", value: i.selectedKeys });
	return {
		...s,
		...i,
		...a,
		focusStrategy: n,
		close() {
			a.close();
		},
		open(l = null) {
			i.collection.size !== 0 && (o(l), a.open());
		},
		toggle(l = null) {
			i.collection.size !== 0 && (o(l), a.toggle(), s.commitValidation());
		},
		isFocused: t,
		setFocused: r,
	};
}
function e9(e, t, r) {
	const { disallowEmptySelection: n, isDisabled: o } = e,
		a = c2({ usage: "search", sensitivity: "base" }),
		i = h.useMemo(
			() => new Mx(t.collection, t.disabledKeys, null, a),
			[t.collection, t.disabledKeys, a],
		),
		{ menuTriggerProps: s, menuProps: l } = R6(
			{ isDisabled: o, type: "listbox" },
			t,
			r,
		),
		u = C => {
			if (t.selectionMode === "single")
				switch (C.key) {
					case "ArrowLeft": {
						C.preventDefault();
						const E =
							t.selectedKeys.size > 0
								? i.getKeyAbove(t.selectedKeys.values().next().value)
								: i.getFirstKey();
						E && t.setSelectedKeys([E]);
						break;
					}
					case "ArrowRight": {
						C.preventDefault();
						const E =
							t.selectedKeys.size > 0
								? i.getKeyBelow(t.selectedKeys.values().next().value)
								: i.getFirstKey();
						E && t.setSelectedKeys([E]);
						break;
					}
				}
		},
		{ typeSelectProps: c } = kx({
			keyboardDelegate: i,
			selectionManager: t.selectionManager,
			onTypeSelect(C) {
				t.setSelectedKeys([C]);
			},
		}),
		{
			isInvalid: d,
			validationErrors: f,
			validationDetails: p,
		} = t.displayValidation,
		{
			labelProps: g,
			fieldProps: b,
			descriptionProps: x,
			errorMessageProps: m,
		} = D0({
			...e,
			labelElementType: "span",
			isInvalid: d,
			errorMessage: e.errorMessage || f,
		});
	(c.onKeyDown = c.onKeyDownCapture), delete c.onKeyDownCapture;
	const v = Ft(e, { labelable: !0 }),
		y = U(c, s, b),
		P = Jt();
	return {
		labelProps: {
			...g,
			onClick: () => {
				var C;
				e.isDisabled || ((C = r.current) == null || C.focus(), Bp("keyboard"));
			},
		},
		triggerProps: U(v, {
			...y,
			onKeyDown: nt(y.onKeyDown, u, e.onKeyDown),
			onKeyUp: e.onKeyUp,
			"aria-labelledby": [
				P,
				v["aria-label"] !== void 0
					? v["aria-labelledby"] !== void 0
						? v["aria-labelledby"]
						: y.id
					: y["aria-labelledby"],
			].join(" "),
			onFocus(C) {
				t.isFocused || (e.onFocus && e.onFocus(C), t.setFocused(!0));
			},
			onBlur(C) {
				t.isOpen || (e.onBlur && e.onBlur(C), t.setFocused(!1));
			},
		}),
		valueProps: { id: P },
		menuProps: {
			...l,
			disallowEmptySelection: n,
			autoFocus: t.focusStrategy || !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			onBlur: C => {
				C.currentTarget.contains(C.relatedTarget) ||
					(e.onBlur && e.onBlur(C), t.setFocused(!1));
			},
			onFocus: l == null ? void 0 : l.onFocus,
			"aria-labelledby": [
				b["aria-labelledby"],
				y["aria-label"] && !b["aria-labelledby"] ? y.id : null,
			]
				.filter(Boolean)
				.join(" "),
		},
		descriptionProps: x,
		errorMessageProps: m,
		isInvalid: d,
		validationErrors: f,
		validationDetails: p,
	};
}
var q6 = new WeakMap();
function t9(e) {
	var t, r, n, o;
	const [a, i] = xt(e, Nm.variantKeys),
		s = (t = e.disableAnimation) != null ? t : !1,
		{
			ref: l,
			as: u,
			label: c,
			name: d,
			isLoading: f,
			selectorIcon: p,
			isOpen: g,
			defaultOpen: b,
			onOpenChange: x,
			startContent: m,
			endContent: v,
			description: y,
			renderValue: P,
			onSelectionChange: C,
			placeholder: E,
			children: D,
			disallowEmptySelection: w = !1,
			selectionMode: V = "single",
			spinnerRef: M,
			scrollRef: F,
			popoverProps: L = {},
			scrollShadowProps: T = {},
			listboxProps: A = {},
			spinnerProps: _ = {},
			validationState: N,
			onChange: R,
			onClose: j,
			className: z,
			classNames: I,
			...$
		} = a,
		O = ke(F),
		B = {
			popoverProps: U(
				{
					placement: "bottom",
					triggerScaleOnOpen: !1,
					offset: 5,
					disableAnimation: s,
				},
				L,
			),
			scrollShadowProps: U(
				{
					ref: O,
					isEnabled: (r = e.showScrollIndicators) != null ? r : !0,
					hideScrollBar: !0,
					offset: 15,
				},
				T,
			),
			listboxProps: U({ disableAnimation: s }, A),
		},
		K = u || "button",
		W = typeof K == "string",
		G = ke(l),
		X = h.useRef(null),
		q = h.useRef(null),
		re = h.useRef(null);
	let Y = JD({
		...a,
		isOpen: g,
		selectionMode: V,
		disallowEmptySelection: w,
		children: D,
		isRequired: e == null ? void 0 : e.isRequired,
		isDisabled: e == null ? void 0 : e.isDisabled,
		defaultOpen: b,
		onOpenChange: J => {
			x == null || x(J), J || j == null || j();
		},
		onSelectionChange: J => {
			if ((C == null || C(J), R && typeof R == "function" && G.current)) {
				const ar = {
					target: {
						...G.current,
						value: Array.from(J).join(","),
						name: G.current.name,
					},
				};
				R(ar);
			}
		},
	});
	(Y = {
		...Y,
		...((e == null ? void 0 : e.isDisabled) && {
			disabledKeys: new Set([...Y.collection.getKeys()]),
		}),
	}),
		Ni(() => {
			var J;
			(J = G.current) != null &&
				J.value &&
				Y.setSelectedKeys(new Set([...Y.selectedKeys, G.current.value]));
		}, [G.current]);
	const {
			labelProps: ie,
			triggerProps: se,
			valueProps: te,
			menuProps: be,
			descriptionProps: ne,
			errorMessageProps: ge,
			isInvalid: ze,
			validationErrors: fe,
			validationDetails: we,
		} = e9(
			{
				...a,
				disallowEmptySelection: w,
				isDisabled: e == null ? void 0 : e.isDisabled,
			},
			Y,
			X,
		),
		He = e.isInvalid || N === "invalid" || ze,
		{ isPressed: We, buttonProps: Ot } = ji(se, X),
		{ focusProps: nr, isFocused: or, isFocusVisible: ft } = gt(),
		{ isHovered: mr, hoverProps: xe } = kt({
			isDisabled: e == null ? void 0 : e.isDisabled,
		}),
		he = h.useMemo(() => {
			var J;
			return (!e.labelPlacement || e.labelPlacement === "inside") && !c
				? "outside"
				: (J = e.labelPlacement) != null
				? J
				: "inside";
		}, [e.labelPlacement, c]),
		Nt = !!E,
		Er = he === "outside-left" || (he === "outside" && (Nt || !!e.isMultiline)),
		Bi = he === "inside",
		jt = he === "outside-left",
		me =
			Y.isOpen ||
			Nt ||
			!!((n = Y.selectedItems) != null && n.length) ||
			!!m ||
			!!v ||
			!!e.isMultiline,
		_t = !!((o = Y.selectedItems) != null && o.length),
		De = !!c,
		Ki = Q(I == null ? void 0 : I.base, z),
		ve = h.useMemo(
			() => Nm({ ...i, isInvalid: He, labelPlacement: he, className: z }),
			[bt(i), He, he, z],
		);
	h.useEffect(() => {
		if (Y.isOpen && re.current && q.current) {
			let J = q.current.querySelector("[aria-selected=true] [data-label=true]"),
				ar = O.current;
			if (J && ar && J.parentElement) {
				let O8 = (ar == null ? void 0 : ar.getBoundingClientRect()).height;
				ar.scrollTop =
					J.parentElement.offsetTop - O8 / 2 + J.parentElement.clientHeight / 2;
			}
		}
	}, [Y.isOpen, s]);
	const Hi =
			typeof a.errorMessage == "function"
				? a.errorMessage({
						isInvalid: He,
						validationErrors: fe,
						validationDetails: we,
				  })
				: a.errorMessage || (fe == null ? void 0 : fe.join(" ")),
		ma = !!y || !!Hi;
	h.useEffect(() => {
		if (Y.isOpen && re.current && X.current) {
			let J = X.current.getBoundingClientRect(),
				ar = re.current;
			ar.style.width = J.width + "px";
		}
	}, [Y.isOpen]);
	const Iu = h.useCallback(
			(J = {}) => ({
				"data-slot": "base",
				"data-filled": H(me),
				"data-has-value": H(_t),
				"data-has-label": H(De),
				"data-has-helper": H(ma),
				className: ve.base({ class: Q(Ki, J.className) }),
				...J,
			}),
			[ve, ma, _t, De, me, Ki],
		),
		Vu = h.useCallback(
			(J = {}) => ({
				ref: X,
				"data-slot": "trigger",
				"data-open": H(Y.isOpen),
				"data-disabled": H(e == null ? void 0 : e.isDisabled),
				"data-focus": H(or),
				"data-pressed": H(We),
				"data-focus-visible": H(ft),
				"data-hover": H(mr),
				className: ve.trigger({ class: I == null ? void 0 : I.trigger }),
				...U(Ot, nr, xe, rt($, { enabled: W }), rt(J)),
			}),
			[
				ve,
				X,
				Y.isOpen,
				I == null ? void 0 : I.trigger,
				e == null ? void 0 : e.isDisabled,
				or,
				We,
				ft,
				mr,
				Ot,
				nr,
				xe,
				$,
				W,
			],
		),
		Ru = h.useCallback(
			(J = {}) => ({
				state: Y,
				triggerRef: X,
				selectRef: G,
				selectionMode: V,
				label: e == null ? void 0 : e.label,
				name: e == null ? void 0 : e.name,
				isRequired: e == null ? void 0 : e.isRequired,
				autoComplete: e == null ? void 0 : e.autoComplete,
				isDisabled: e == null ? void 0 : e.isDisabled,
				onChange: R,
				...J,
			}),
			[
				Y,
				V,
				e == null ? void 0 : e.label,
				e == null ? void 0 : e.autoComplete,
				e == null ? void 0 : e.name,
				e == null ? void 0 : e.isDisabled,
				X,
			],
		),
		Lu = h.useCallback(
			(J = {}) => ({
				"data-slot": "label",
				className: ve.label({
					class: Q(I == null ? void 0 : I.label, J.className),
				}),
				...ie,
				...J,
			}),
			[ve, I == null ? void 0 : I.label, ie],
		),
		Fu = h.useCallback(
			(J = {}) => ({
				"data-slot": "value",
				className: ve.value({
					class: Q(I == null ? void 0 : I.value, J.className),
				}),
				...te,
				...J,
			}),
			[ve, I == null ? void 0 : I.value, te],
		),
		Ou = h.useCallback(
			(J = {}) => ({
				"data-slot": "listboxWrapper",
				className: ve.listboxWrapper({
					class: Q(
						I == null ? void 0 : I.listboxWrapper,
						J == null ? void 0 : J.className,
					),
				}),
				...U(B.scrollShadowProps, J),
			}),
			[
				ve.listboxWrapper,
				I == null ? void 0 : I.listboxWrapper,
				B.scrollShadowProps,
			],
		),
		le = (J = {}) => ({
			state: Y,
			ref: q,
			"data-slot": "listbox",
			className: ve.listbox({
				class: Q(
					I == null ? void 0 : I.listbox,
					J == null ? void 0 : J.className,
				),
			}),
			...U(B.listboxProps, J, be),
		}),
		In = h.useCallback(
			(J = {}) => {
				var ar, Nu;
				return {
					state: Y,
					triggerRef: X,
					ref: re,
					"data-slot": "popover",
					scrollRef: q,
					triggerType: "listbox",
					classNames: {
						content: ve.popoverContent({
							class: Q(I == null ? void 0 : I.popoverContent, J.className),
						}),
					},
					...U(B.popoverProps, J),
					offset:
						Y.selectedItems && Y.selectedItems.length > 0
							? Y.selectedItems.length * 1e-8 +
							  (((ar = B.popoverProps) == null ? void 0 : ar.offset) || 0)
							: (Nu = B.popoverProps) == null
							? void 0
							: Nu.offset,
				};
			},
			[
				ve,
				I == null ? void 0 : I.popoverContent,
				B.popoverProps,
				X,
				Y,
				Y.selectedItems,
			],
		),
		A8 = h.useCallback(
			() => ({
				"data-slot": "selectorIcon",
				"aria-hidden": H(!0),
				"data-open": H(Y.isOpen),
				className: ve.selectorIcon({
					class: I == null ? void 0 : I.selectorIcon,
				}),
			}),
			[ve, I == null ? void 0 : I.selectorIcon, Y == null ? void 0 : Y.isOpen],
		),
		D8 = h.useCallback(
			(J = {}) => ({
				...J,
				"data-slot": "innerWrapper",
				className: ve.innerWrapper({
					class: Q(
						I == null ? void 0 : I.innerWrapper,
						J == null ? void 0 : J.className,
					),
				}),
			}),
			[ve, I == null ? void 0 : I.innerWrapper],
		),
		I8 = h.useCallback(
			(J = {}) => ({
				...J,
				"data-slot": "helperWrapper",
				className: ve.helperWrapper({
					class: Q(
						I == null ? void 0 : I.helperWrapper,
						J == null ? void 0 : J.className,
					),
				}),
			}),
			[ve, I == null ? void 0 : I.helperWrapper],
		),
		V8 = h.useCallback(
			(J = {}) => ({
				...J,
				...ne,
				"data-slot": "description",
				className: ve.description({
					class: Q(
						I == null ? void 0 : I.description,
						J == null ? void 0 : J.className,
					),
				}),
			}),
			[ve, I == null ? void 0 : I.description],
		),
		R8 = h.useCallback(
			(J = {}) => ({
				...J,
				"data-slot": "mainWrapper",
				className: ve.mainWrapper({
					class: Q(
						I == null ? void 0 : I.mainWrapper,
						J == null ? void 0 : J.className,
					),
				}),
			}),
			[ve, I == null ? void 0 : I.mainWrapper],
		),
		L8 = h.useCallback(
			(J = {}) => ({
				...J,
				...ge,
				"data-slot": "errorMessage",
				className: ve.errorMessage({
					class: Q(
						I == null ? void 0 : I.errorMessage,
						J == null ? void 0 : J.className,
					),
				}),
			}),
			[ve, ge, I == null ? void 0 : I.errorMessage],
		),
		F8 = h.useCallback(
			(J = {}) => ({
				"aria-hidden": H(!0),
				"data-slot": "spinner",
				color: "current",
				size: "sm",
				..._,
				...J,
				ref: M,
				className: ve.spinner({
					class: Q(
						I == null ? void 0 : I.spinner,
						J == null ? void 0 : J.className,
					),
				}),
			}),
			[ve, M, _, I == null ? void 0 : I.spinner],
		);
	return (
		q6.set(Y, {
			isDisabled: e == null ? void 0 : e.isDisabled,
			isRequired: e == null ? void 0 : e.isRequired,
			name: e == null ? void 0 : e.name,
			validationBehavior: "native",
		}),
		{
			Component: K,
			domRef: G,
			state: Y,
			label: c,
			name: d,
			triggerRef: X,
			isLoading: f,
			placeholder: E,
			startContent: m,
			endContent: v,
			description: y,
			selectorIcon: p,
			hasHelper: ma,
			labelPlacement: he,
			hasPlaceholder: Nt,
			renderValue: P,
			selectionMode: V,
			disableAnimation: s,
			isOutsideLeft: jt,
			shouldLabelBeOutside: Er,
			shouldLabelBeInside: Bi,
			isInvalid: He,
			errorMessage: Hi,
			getBaseProps: Iu,
			getTriggerProps: Vu,
			getLabelProps: Lu,
			getValueProps: Fu,
			getListboxProps: le,
			getPopoverProps: In,
			getSpinnerProps: F8,
			getMainWrapperProps: R8,
			getListboxWrapperProps: Ou,
			getHiddenSelectProps: Ru,
			getInnerWrapperProps: D8,
			getHelperWrapperProps: I8,
			getDescriptionProps: V8,
			getErrorMessageProps: L8,
			getSelectorIconProps: A8,
		}
	);
}
function r9(e, t, r) {
	var n;
	let o = q6.get(t) || {},
		{
			autoComplete: a,
			name: i = o.name,
			isDisabled: s = o.isDisabled,
			selectionMode: l,
			onChange: u,
		} = e,
		{ validationBehavior: c, isRequired: d } = o,
		f = n$(),
		{ visuallyHiddenProps: p } = ox();
	return (
		yu(e.selectRef, t.selectedKeys, t.setSelectedKeys),
		M0(
			{
				validationBehavior: c,
				focus: () => {
					var g;
					return (g = r.current) == null ? void 0 : g.focus();
				},
			},
			t,
			e.selectRef,
		),
		{
			containerProps: {
				...p,
				"aria-hidden": !0,
				"data-a11y-ignore": "aria-hidden-focus",
			},
			inputProps: {
				type: "text",
				tabIndex: f == null || t.isFocused || t.isOpen ? -1 : 0,
				autoComplete: a,
				value: (n = [...t.selectedKeys].join(",")) != null ? n : "",
				required: d,
				style: { fontSize: 16 },
				onFocus: () => {
					var g;
					return (g = r.current) == null ? void 0 : g.focus();
				},
				disabled: s,
				onChange: () => {},
			},
			selectProps: {
				name: i,
				tabIndex: -1,
				autoComplete: a,
				disabled: s,
				size: t.collection.size,
				value:
					l === "multiple"
						? [...t.selectedKeys].map(g => String(g))
						: [...t.selectedKeys][0],
				multiple: l === "multiple",
				onChange: g => {
					t.setSelectedKeys(g.target.value), u == null || u(g);
				},
			},
		}
	);
}
function n9(e) {
	var t;
	let {
			state: r,
			triggerRef: n,
			selectRef: o,
			label: a,
			name: i,
			isDisabled: s,
		} = e,
		{
			containerProps: l,
			inputProps: u,
			selectProps: c,
		} = r9({ ...e, selectRef: o }, r, n);
	return r.collection.size <= 300
		? S.jsxs("div", {
				...l,
				"data-testid": "hidden-select-container",
				children: [
					S.jsx("input", { ...u }),
					S.jsxs("label", {
						children: [
							a,
							S.jsxs("select", {
								...c,
								ref: o,
								children: [
									S.jsx("option", {}),
									[...r.collection.getKeys()].map(d => {
										let f = r.collection.getItem(d);
										if ((f == null ? void 0 : f.type) === "item")
											return S.jsx(
												"option",
												{ value: f.key, children: f.textValue },
												f.key,
											);
									}),
								],
							}),
						],
					}),
				],
		  })
		: i
		? S.jsx("input", {
				autoComplete: c.autoComplete,
				disabled: s,
				name: i,
				type: "hidden",
				value: (t = [...r.selectedKeys].join(",")) != null ? t : "",
		  })
		: null;
}
function o9(e) {
	const { isSelected: t, disableAnimation: r, ...n } = e;
	return S.jsx("svg", {
		"aria-hidden": "true",
		"data-selected": t,
		role: "presentation",
		viewBox: "0 0 17 18",
		...n,
		children: S.jsx("polyline", {
			fill: "none",
			points: "1 9 7 14 15 4",
			stroke: "currentColor",
			strokeDasharray: 22,
			strokeDashoffset: t ? 44 : 66,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			style: r ? {} : { transition: "stroke-dashoffset 200ms ease" },
		}),
	});
}
const R0 = new WeakMap();
function a9(e) {
	return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function i9(e, t) {
	let r = R0.get(e);
	if (!r) throw new Error("Unknown list");
	return `${r.id}-option-${a9(t)}`;
}
function s9(e, t, r) {
	let n = Ft(e, { labelable: !0 }),
		o = e.selectionBehavior || "toggle",
		a = e.linkBehavior || (o === "replace" ? "action" : "override");
	o === "toggle" && a === "action" && (a = "override");
	let { listProps: i } = Ax({
			...e,
			ref: r,
			selectionManager: t.selectionManager,
			collection: t.collection,
			disabledKeys: t.disabledKeys,
			linkBehavior: a,
		}),
		{ focusWithinProps: s } = da({
			onFocusWithin: e.onFocus,
			onBlurWithin: e.onBlur,
			onFocusWithinChange: e.onFocusChange,
		}),
		l = Jt(e.id);
	R0.set(t, {
		id: l,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		shouldFocusOnHover: e.shouldFocusOnHover,
		isVirtualized: e.isVirtualized,
		onAction: e.onAction,
		linkBehavior: a,
	});
	let { labelProps: u, fieldProps: c } = ku({
		...e,
		id: l,
		labelElementType: "span",
	});
	return {
		labelProps: u,
		listBoxProps: U(
			n,
			s,
			t.selectionManager.selectionMode === "multiple"
				? { "aria-multiselectable": "true" }
				: {},
			{ role: "listbox", ...U(c, i) },
		),
	};
}
function l9(e, t, r) {
	var n;
	let { key: o } = e,
		a = R0.get(t);
	var i;
	let s =
		(i = e.isDisabled) !== null && i !== void 0 ? i : t.disabledKeys.has(o);
	var l;
	let u =
		(l = e.isSelected) !== null && l !== void 0
			? l
			: t.selectionManager.isSelected(o);
	var c;
	let d =
		(c = e.shouldSelectOnPressUp) !== null && c !== void 0
			? c
			: a == null
			? void 0
			: a.shouldSelectOnPressUp;
	var f;
	let p =
		(f = e.shouldFocusOnHover) !== null && f !== void 0
			? f
			: a == null
			? void 0
			: a.shouldFocusOnHover;
	var g;
	let b =
		(g = e.shouldUseVirtualFocus) !== null && g !== void 0
			? g
			: a == null
			? void 0
			: a.shouldUseVirtualFocus;
	var x;
	let m =
			(x = e.isVirtualized) !== null && x !== void 0
				? x
				: a == null
				? void 0
				: a.isVirtualized,
		v = vn(),
		y = vn(),
		P = {
			role: "option",
			"aria-disabled": s || void 0,
			"aria-selected": t.selectionManager.selectionMode !== "none" ? u : void 0,
		};
	(Pn() && Np()) ||
		((P["aria-label"] = e["aria-label"]),
		(P["aria-labelledby"] = v),
		(P["aria-describedby"] = y));
	let C = t.collection.getItem(o);
	if (m) {
		let T = Number(C == null ? void 0 : C.index);
		(P["aria-posinset"] = Number.isNaN(T) ? void 0 : T + 1),
			(P["aria-setsize"] = t4(t.collection));
	}
	let {
			itemProps: E,
			isPressed: D,
			isFocused: w,
			hasAction: V,
			allowsSelection: M,
		} = Xp({
			selectionManager: t.selectionManager,
			key: o,
			ref: r,
			shouldSelectOnPressUp: d,
			allowsDifferentPressOrigin: d && p,
			isVirtualized: m,
			shouldUseVirtualFocus: b,
			isDisabled: s,
			onAction:
				a != null && a.onAction
					? () => {
							var T;
							return a == null || (T = a.onAction) === null || T === void 0
								? void 0
								: T.call(a, o);
					  }
					: void 0,
			linkBehavior: a == null ? void 0 : a.linkBehavior,
		}),
		{ hoverProps: F } = kt({
			isDisabled: s || !p,
			onHoverStart() {
				ra() ||
					(t.selectionManager.setFocused(!0),
					t.selectionManager.setFocusedKey(o));
			},
		}),
		L = Ft(C == null ? void 0 : C.props, {
			isLink: !!(
				!(C == null || (n = C.props) === null || n === void 0) && n.href
			),
		});
	return (
		delete L.id,
		{
			optionProps: { ...P, ...U(L, E, F), id: i9(t, o) },
			labelProps: { id: v },
			descriptionProps: { id: y },
			isFocused: w,
			isFocusVisible: w && ra(),
			isSelected: u,
			isDisabled: s,
			isPressed: D,
			allowsSelection: M,
			hasAction: V,
		}
	);
}
function u9(e) {
	let { heading: t, "aria-label": r } = e,
		n = Jt();
	return {
		itemProps: { role: "presentation" },
		headingProps: t ? { id: n, role: "presentation" } : {},
		groupProps: {
			role: "group",
			"aria-label": r,
			"aria-labelledby": t ? n : void 0,
		},
	};
}
function c9(e) {
	const [t, r] = xt(e, Rl.variantKeys),
		{
			as: n,
			item: o,
			state: a,
			description: i,
			startContent: s,
			endContent: l,
			isVirtualized: u,
			selectedIcon: c,
			className: d,
			classNames: f,
			autoFocus: p,
			onPress: g,
			onClick: b,
			shouldHighlightOnFocus: x,
			hideSelectedIcon: m = !1,
			isReadOnly: v = !1,
			...y
		} = t,
		P = e.disableAnimation,
		C = h.useRef(null),
		E = n || (e.href ? "a" : "li"),
		D = typeof E == "string",
		{ rendered: w, key: V } = o,
		M = a.disabledKeys.has(V) || e.isDisabled,
		F = a.selectionManager.selectionMode !== "none",
		L = X4(),
		{ pressProps: T, isPressed: A } = er({ ref: C, isDisabled: M, onPress: g }),
		{ isHovered: _, hoverProps: N } = kt({ isDisabled: M }),
		{ isFocusVisible: R, focusProps: j } = gt({ autoFocus: p }),
		{
			isFocused: z,
			isSelected: I,
			optionProps: $,
			labelProps: O,
			descriptionProps: B,
		} = l9(
			{
				key: V,
				isDisabled: M,
				"aria-label": t["aria-label"],
				isVirtualized: u,
			},
			a,
			C,
		);
	let K = $;
	const W = h.useMemo(
			() => Rl({ ...r, isDisabled: M, disableAnimation: P }),
			[bt(r), M, P],
		),
		G = Q(f == null ? void 0 : f.base, d);
	v && (K = Eb(K));
	const X = h.useMemo(() => (x && z ? !0 : L ? _ || A : _), [_, A, z, L, x]),
		q = (te = {}) => ({
			ref: C,
			...U({ onClick: b }, K, v ? {} : U(j, T), N, rt(y, { enabled: D }), te),
			"data-selectable": H(F),
			"data-focus": H(z),
			"data-hover": H(X),
			"data-disabled": H(M),
			"data-selected": H(I),
			"data-pressed": H(A),
			"data-focus-visible": H(R),
			className: W.base({ class: Q(G, te.className) }),
		}),
		re = (te = {}) => ({
			...U(O, te),
			"data-label": H(!0),
			className: W.title({ class: f == null ? void 0 : f.title }),
		}),
		Y = (te = {}) => ({
			...U(B, te),
			className: W.description({ class: f == null ? void 0 : f.description }),
		}),
		ie = (te = {}) => ({
			...U(te),
			className: W.wrapper({ class: f == null ? void 0 : f.wrapper }),
		}),
		se = h.useCallback(
			(te = {}) => ({
				"aria-hidden": H(!0),
				"data-disabled": H(M),
				className: W.selectedIcon({
					class: f == null ? void 0 : f.selectedIcon,
				}),
				...te,
			}),
			[M, W, f],
		);
	return {
		Component: E,
		domRef: C,
		slots: W,
		classNames: f,
		isSelectable: F,
		isSelected: I,
		isDisabled: M,
		rendered: w,
		description: i,
		startContent: s,
		endContent: l,
		selectedIcon: c,
		hideSelectedIcon: m,
		disableAnimation: P,
		getItemProps: q,
		getLabelProps: re,
		getWrapperProps: ie,
		getDescriptionProps: Y,
		getSelectedIconProps: se,
	};
}
var Q6 = ue((e, t) => {
	const {
			Component: r,
			rendered: n,
			description: o,
			isSelectable: a,
			isSelected: i,
			isDisabled: s,
			selectedIcon: l,
			startContent: u,
			endContent: c,
			hideSelectedIcon: d,
			disableAnimation: f,
			getItemProps: p,
			getLabelProps: g,
			getWrapperProps: b,
			getDescriptionProps: x,
			getSelectedIconProps: m,
		} = c9(e),
		v = h.useMemo(() => {
			const y = S.jsx(o9, { disableAnimation: f, isSelected: i });
			return typeof l == "function"
				? l({ icon: y, isSelected: i, isDisabled: s })
				: l || y;
		}, [l, i, s, f]);
	return S.jsxs(r, {
		...p(),
		children: [
			u,
			o
				? S.jsxs("div", {
						...b(),
						children: [
							S.jsx("span", { ...g(), children: n }),
							S.jsx("span", { ...x(), children: o }),
						],
				  })
				: S.jsx("span", { ...g(), children: n }),
			a && !d && S.jsx("span", { ...m(), children: v }),
			c,
		],
	});
});
Q6.displayName = "NextUI.ListboxItem";
var J6 = Q6,
	e8 = ue(
		(
			{
				item: e,
				state: t,
				as: r,
				variant: n,
				color: o,
				disableAnimation: a,
				className: i,
				classNames: s,
				hideSelectedIcon: l,
				showDivider: u = !1,
				dividerProps: c = {},
				itemClasses: d,
				title: f,
				...p
			},
			g,
		) => {
			const b = r || "li",
				x = h.useMemo(() => Ex(), []),
				m = Q(s == null ? void 0 : s.base, i),
				v = Q(s == null ? void 0 : s.divider, c == null ? void 0 : c.className),
				{
					itemProps: y,
					headingProps: P,
					groupProps: C,
				} = u9({ heading: e.rendered, "aria-label": e["aria-label"] });
			return S.jsxs(
				b,
				{
					"data-slot": "base",
					...U(y, p),
					className: x.base({ class: m }),
					children: [
						e.rendered &&
							S.jsx("span", {
								...P,
								className: x.heading({ class: s == null ? void 0 : s.heading }),
								"data-slot": "heading",
								children: e.rendered,
							}),
						S.jsxs("ul", {
							...C,
							className: x.group({ class: s == null ? void 0 : s.group }),
							"data-has-title": !!e.rendered,
							"data-slot": "group",
							children: [
								[...e.childNodes].map(E => {
									const { key: D, props: w } = E;
									let V = S.jsx(
										J6,
										{
											classNames: d,
											color: o,
											disableAnimation: a,
											hideSelectedIcon: l,
											item: E,
											state: t,
											variant: n,
											...w,
										},
										D,
									);
									return E.wrapper && (V = E.wrapper(V)), V;
								}),
								u &&
									S.jsx(a4, {
										as: "li",
										className: x.divider({ class: v }),
										...c,
									}),
							],
						}),
					],
				},
				e.key,
			);
		},
	);
e8.displayName = "NextUI.ListboxSection";
var d9 = e8;
function f9(e) {
	const {
			ref: t,
			as: r,
			state: n,
			variant: o,
			color: a,
			onAction: i,
			children: s,
			onSelectionChange: l,
			disableAnimation: u,
			itemClasses: c,
			className: d,
			topContent: f,
			bottomContent: p,
			emptyContent: g = "No items.",
			hideSelectedIcon: b = !1,
			hideEmptyContent: x = !1,
			shouldHighlightOnFocus: m = !1,
			classNames: v,
			...y
		} = e,
		P = r || "ul",
		C = typeof P == "string",
		E = ke(t),
		D = V0({ ...e, children: s, onSelectionChange: l }),
		w = n || D,
		{ listBoxProps: V } = s9({ ...e, onAction: i }, w, E),
		M = h.useMemo(() => Cx({ className: d }), [d]),
		F = Q(v == null ? void 0 : v.base, d);
	return {
		Component: P,
		state: w,
		variant: o,
		color: a,
		slots: M,
		classNames: v,
		topContent: f,
		bottomContent: p,
		emptyContent: g,
		hideEmptyContent: x,
		shouldHighlightOnFocus: m,
		hideSelectedIcon: b,
		disableAnimation: u,
		className: d,
		itemClasses: c,
		getBaseProps: (_ = {}) => ({
			ref: E,
			"data-slot": "base",
			className: M.base({ class: F }),
			...rt(y, { enabled: C }),
			..._,
		}),
		getListProps: (_ = {}) => ({
			"data-slot": "list",
			className: M.list({ class: v == null ? void 0 : v.list }),
			...V,
			..._,
		}),
		getEmptyContentProps: (_ = {}) => ({
			"data-slot": "empty-content",
			children: g,
			className: M.emptyContent({ class: v == null ? void 0 : v.emptyContent }),
			..._,
		}),
	};
}
function t8(e, t) {
	const {
			Component: r,
			state: n,
			color: o,
			variant: a,
			itemClasses: i,
			getBaseProps: s,
			topContent: l,
			bottomContent: u,
			hideEmptyContent: c,
			hideSelectedIcon: d,
			shouldHighlightOnFocus: f,
			disableAnimation: p,
			getEmptyContentProps: g,
			getListProps: b,
		} = f9({ ...e, ref: t }),
		x = S.jsxs(r, {
			...b(),
			children: [
				!n.collection.size &&
					!c &&
					S.jsx("li", { children: S.jsx("div", { ...g() }) }),
				[...n.collection].map(m => {
					var v;
					const y = {
						color: o,
						item: m,
						state: n,
						variant: a,
						disableAnimation: p,
						hideSelectedIcon: d,
						...m.props,
					};
					if (m.type === "section")
						return S.jsx(d9, { ...y, itemClasses: i }, m.key);
					let P = S.jsx(
						J6,
						{
							...y,
							classNames: U(i, (v = m.props) == null ? void 0 : v.classNames),
							shouldHighlightOnFocus: f,
						},
						m.key,
					);
					return m.wrapper && (P = m.wrapper(P)), P;
				}),
			],
		});
	return S.jsxs("div", { ...s(), children: [l, x, u] });
}
t8.displayName = "NextUI.Listbox";
var p9 = ue(t8),
	h9 = k0,
	m9 = h9;
function r8(e, t) {
	const {
			Component: r,
			state: n,
			label: o,
			hasHelper: a,
			isLoading: i,
			triggerRef: s,
			selectorIcon: l = S.jsx(BC, {}),
			description: u,
			errorMessage: c,
			isInvalid: d,
			startContent: f,
			endContent: p,
			placeholder: g,
			renderValue: b,
			isOutsideLeft: x,
			disableAnimation: m,
			getBaseProps: v,
			getLabelProps: y,
			getTriggerProps: P,
			getValueProps: C,
			getListboxProps: E,
			getPopoverProps: D,
			getSpinnerProps: w,
			getMainWrapperProps: V,
			getInnerWrapperProps: M,
			getHiddenSelectProps: F,
			getHelperWrapperProps: L,
			getListboxWrapperProps: T,
			getDescriptionProps: A,
			getErrorMessageProps: _,
			getSelectorIconProps: N,
		} = t9({ ...e, ref: t }),
		R = o ? S.jsx("label", { ...y(), children: o }) : null,
		j = h.cloneElement(l, N()),
		z = h.useMemo(
			() =>
				a
					? S.jsx("div", {
							...L(),
							children:
								d && c
									? S.jsx("div", { ..._(), children: c })
									: u
									? S.jsx("div", { ...A(), children: u })
									: null,
					  })
					: null,
			[a, d, c, u, L, _, A],
		),
		I = h.useMemo(() => {
			if (!n.selectedItems) return g;
			if (b && typeof b == "function") {
				const B = [...n.selectedItems].map(K => ({
					key: K.key,
					data: K.value,
					type: K.type,
					props: K.props,
					textValue: K.textValue,
					rendered: K.rendered,
					"aria-label": K["aria-label"],
				}));
				return b(B);
			}
			return n.selectedItems.map(B => B.textValue).join(", ");
		}, [n.selectedItems, b, g]),
		$ = h.useMemo(() => (i ? S.jsx(p4, { ...w() }) : j), [i, j, w]),
		O = h.useMemo(
			() =>
				n.isOpen
					? S.jsx(TA, {
							...D(),
							shouldCloseOnInteractOutside: void 0,
							state: n,
							triggerRef: s,
							children: S.jsx(qD, { ...T(), children: S.jsx(p9, { ...E() }) }),
					  })
					: null,
			[n.isOpen, D, n, s, T, E],
		);
	return S.jsxs("div", {
		...v(),
		children: [
			S.jsx(n9, { ...F() }),
			x ? R : null,
			S.jsxs("div", {
				...V(),
				children: [
					S.jsxs(r, {
						...P(),
						children: [
							x ? null : R,
							S.jsxs("div", {
								...M(),
								children: [
									f,
									S.jsxs("span", {
										...C(),
										children: [
											I,
											n.selectedItems && S.jsx(Ii, { children: "," }),
										],
									}),
									p,
								],
							}),
							$,
						],
					}),
					z,
				],
			}),
			m ? O : S.jsx(Oi, { children: O }),
		],
	});
}
var g9 = ue(r8);
r8.displayName = "NextUI.Select";
const L0 = new WeakMap();
function If(e, t) {
	let r = L0.get(e);
	if (!r) throw new Error("Unknown slider state");
	return `${r.id}-${t}`;
}
function v9(e, t, r) {
	let { labelProps: n, fieldProps: o } = ku(e),
		a = e.orientation === "vertical";
	var i;
	L0.set(t, {
		id: (i = n.id) !== null && i !== void 0 ? i : o.id,
		"aria-describedby": e["aria-describedby"],
		"aria-details": e["aria-details"],
	});
	let { direction: s } = Xr(),
		{ addGlobalListener: l, removeGlobalListener: u } = Di();
	const c = h.useRef(null),
		d = s === "rtl",
		f = h.useRef(null),
		{ moveProps: p } = J2({
			onMoveStart() {
				f.current = null;
			},
			onMove({ deltaX: m, deltaY: v }) {
				let { height: y, width: P } = r.current.getBoundingClientRect(),
					C = a ? y : P;
				f.current == null && (f.current = t.getThumbPercent(c.current) * C);
				let E = a ? v : m;
				if (
					((a || d) && (E = -E),
					(f.current += E),
					c.current != null && r.current)
				) {
					const D = ta(f.current / C, 0, 1);
					t.setThumbPercent(c.current, D);
				}
			},
			onMoveEnd() {
				c.current != null &&
					(t.setThumbDragging(c.current, !1), (c.current = null));
			},
		});
	let g = h.useRef(void 0),
		b = (m, v, y, P) => {
			if (
				r.current &&
				!e.isDisabled &&
				t.values.every((C, E) => !t.isThumbDragging(E))
			) {
				let {
						height: C,
						width: E,
						top: D,
						left: w,
					} = r.current.getBoundingClientRect(),
					V = a ? C : E,
					T = ((a ? P : y) - (a ? D : w)) / V;
				(s === "rtl" || a) && (T = 1 - T);
				let A = t.getPercentValue(T),
					_,
					N = t.values.findIndex(R => A - R < 0);
				if (N === 0) _ = N;
				else if (N === -1) _ = t.values.length - 1;
				else {
					let R = t.values[N - 1],
						j = t.values[N];
					Math.abs(R - A) < Math.abs(j - A) ? (_ = N - 1) : (_ = N);
				}
				_ >= 0 && t.isThumbEditable(_)
					? (m.preventDefault(),
					  (c.current = _),
					  t.setFocusedThumb(_),
					  (g.current = v),
					  t.setThumbDragging(c.current, !0),
					  t.setThumbValue(_, A),
					  l(window, "mouseup", x, !1),
					  l(window, "touchend", x, !1),
					  l(window, "pointerup", x, !1))
					: (c.current = null);
			}
		},
		x = m => {
			var v, y;
			((y = m.pointerId) !== null && y !== void 0
				? y
				: (v = m.changedTouches) === null || v === void 0
				? void 0
				: v[0].identifier) === g.current &&
				(c.current != null &&
					(t.setThumbDragging(c.current, !1), (c.current = null)),
				u(window, "mouseup", x, !1),
				u(window, "touchend", x, !1),
				u(window, "pointerup", x, !1));
		};
	return (
		"htmlFor" in n &&
			n.htmlFor &&
			(delete n.htmlFor,
			(n.onClick = () => {
				var m;
				(m = document.getElementById(If(t, 0))) === null ||
					m === void 0 ||
					m.focus(),
					Bp("keyboard");
			})),
		{
			labelProps: n,
			groupProps: { role: "group", ...o },
			trackProps: U(
				{
					onMouseDown(m) {
						m.button !== 0 ||
							m.altKey ||
							m.ctrlKey ||
							m.metaKey ||
							b(m, void 0, m.clientX, m.clientY);
					},
					onPointerDown(m) {
						(m.pointerType === "mouse" &&
							(m.button !== 0 || m.altKey || m.ctrlKey || m.metaKey)) ||
							b(m, m.pointerId, m.clientX, m.clientY);
					},
					onTouchStart(m) {
						b(
							m,
							m.changedTouches[0].identifier,
							m.changedTouches[0].clientX,
							m.changedTouches[0].clientY,
						);
					},
					style: { position: "relative", touchAction: "none" },
				},
				p,
			),
			outputProps: {
				htmlFor: t.values.map((m, v) => If(t, v)).join(" "),
				"aria-live": "off",
			},
		}
	);
}
function y9(e, t) {
	let {
			index: r = 0,
			isRequired: n,
			validationState: o,
			isInvalid: a,
			trackRef: i,
			inputRef: s,
			orientation: l = t.orientation,
			name: u,
		} = e,
		c = e.isDisabled || t.isDisabled,
		d = l === "vertical",
		{ direction: f } = Xr(),
		{ addGlobalListener: p, removeGlobalListener: g } = Di(),
		b = L0.get(t);
	var x;
	const { labelProps: m, fieldProps: v } = ku({
			...e,
			id: If(t, r),
			"aria-labelledby": `${b.id} ${
				(x = e["aria-labelledby"]) !== null && x !== void 0 ? x : ""
			}`.trim(),
		}),
		y = t.values[r],
		P = h.useCallback(() => {
			s.current && xr(s.current);
		}, [s]),
		C = t.focusedThumb === r;
	h.useEffect(() => {
		C && P();
	}, [C, P]);
	let E = f === "rtl",
		D = h.useRef(null),
		{ keyboardProps: w } = Kp({
			onKeyDown(N) {
				let {
					getThumbMaxValue: R,
					getThumbMinValue: j,
					decrementThumb: z,
					incrementThumb: I,
					setThumbValue: $,
					setThumbDragging: O,
					pageSize: B,
				} = t;
				if (!/^(PageUp|PageDown|Home|End)$/.test(N.key)) {
					N.continuePropagation();
					return;
				}
				switch ((N.preventDefault(), O(r, !0), N.key)) {
					case "PageUp":
						I(r, B);
						break;
					case "PageDown":
						z(r, B);
						break;
					case "Home":
						$(r, j(r));
						break;
					case "End":
						$(r, R(r));
						break;
				}
				O(r, !1);
			},
		}),
		{ moveProps: V } = J2({
			onMoveStart() {
				(D.current = null), t.setThumbDragging(r, !0);
			},
			onMove({ deltaX: N, deltaY: R, pointerType: j, shiftKey: z }) {
				const {
					getThumbPercent: I,
					setThumbPercent: $,
					decrementThumb: O,
					incrementThumb: B,
					step: K,
					pageSize: W,
				} = t;
				let { width: G, height: X } = i.current.getBoundingClientRect(),
					q = d ? X : G;
				if ((D.current == null && (D.current = I(r) * q), j === "keyboard"))
					(N > 0 && E) || (N < 0 && !E) || R > 0
						? O(r, z ? W : K)
						: B(r, z ? W : K);
				else {
					let re = d ? R : N;
					(d || E) && (re = -re),
						(D.current += re),
						$(r, ta(D.current / q, 0, 1));
				}
			},
			onMoveEnd() {
				t.setThumbDragging(r, !1);
			},
		});
	t.setThumbEditable(r, !c);
	const { focusableProps: M } = fa(
		U(e, {
			onFocus: () => t.setFocusedThumb(r),
			onBlur: () => t.setFocusedThumb(void 0),
		}),
		s,
	);
	let F = h.useRef(void 0),
		L = N => {
			P(),
				(F.current = N),
				t.setThumbDragging(r, !0),
				p(window, "mouseup", T, !1),
				p(window, "touchend", T, !1),
				p(window, "pointerup", T, !1);
		},
		T = N => {
			var R, j;
			((j = N.pointerId) !== null && j !== void 0
				? j
				: (R = N.changedTouches) === null || R === void 0
				? void 0
				: R[0].identifier) === F.current &&
				(P(),
				t.setThumbDragging(r, !1),
				g(window, "mouseup", T, !1),
				g(window, "touchend", T, !1),
				g(window, "pointerup", T, !1));
		},
		A = t.getThumbPercent(r);
	(d || f === "rtl") && (A = 1 - A);
	let _ = c
		? {}
		: U(w, V, {
				onMouseDown: N => {
					N.button !== 0 || N.altKey || N.ctrlKey || N.metaKey || L();
				},
				onPointerDown: N => {
					N.button !== 0 ||
						N.altKey ||
						N.ctrlKey ||
						N.metaKey ||
						L(N.pointerId);
				},
				onTouchStart: N => {
					L(N.changedTouches[0].identifier);
				},
		  });
	return (
		yu(s, y, N => {
			t.setThumbValue(r, N);
		}),
		{
			inputProps: U(M, v, {
				type: "range",
				tabIndex: c ? void 0 : 0,
				min: t.getThumbMinValue(r),
				max: t.getThumbMaxValue(r),
				step: t.step,
				value: y,
				name: u,
				disabled: c,
				"aria-orientation": l,
				"aria-valuetext": t.getThumbValueLabel(r),
				"aria-required": n || void 0,
				"aria-invalid": a || o === "invalid" || void 0,
				"aria-errormessage": e["aria-errormessage"],
				"aria-describedby": [b["aria-describedby"], e["aria-describedby"]]
					.filter(Boolean)
					.join(" "),
				"aria-details": [b["aria-details"], e["aria-details"]]
					.filter(Boolean)
					.join(" "),
				onChange: N => {
					t.setThumbValue(r, parseFloat(N.target.value));
				},
			}),
			thumbProps: {
				..._,
				style: {
					position: "absolute",
					[d ? "top" : "left"]: `${A * 100}%`,
					transform: "translate(-50%, -50%)",
					touchAction: "none",
				},
			},
			labelProps: m,
			isDragging: t.isThumbDragging(r),
			isDisabled: c,
			isFocused: C,
		}
	);
}
function b9(e) {
	const {
			ref: t,
			as: r,
			state: n,
			index: o,
			name: a,
			trackRef: i,
			className: s,
			tooltipProps: l,
			isVertical: u,
			showTooltip: c,
			formatOptions: d,
			renderThumb: f,
			...p
		} = e,
		g = r || "div",
		b = ke(t),
		x = h.useRef(null),
		m = u2(d),
		{
			thumbProps: v,
			inputProps: y,
			isDragging: P,
			isFocused: C,
		} = y9({ index: o, trackRef: i, inputRef: x, name: a, ...p }, n),
		{ hoverProps: E, isHovered: D } = kt({ isDisabled: n.isDisabled }),
		{ focusProps: w, isFocusVisible: V } = gt(),
		{ pressProps: M, isPressed: F } = er({ isDisabled: n.isDisabled });
	return {
		Component: g,
		index: o,
		showTooltip: c,
		renderThumb: f,
		getThumbProps: (_ = {}) => ({
			ref: b,
			"data-slot": "thumb",
			"data-hover": H(D),
			"data-pressed": H(F),
			"data-dragging": H(P),
			"data-focused": H(C),
			"data-focus-visible": H(V),
			...U(v, M, E, p),
			className: s,
			..._,
		}),
		getTooltipProps: () => {
			const _ = m ? m.format(n.values[o ?? 0]) : n.values[o ?? 0];
			return {
				...l,
				placement:
					l != null && l.placement
						? l == null
							? void 0
							: l.placement
						: u
						? "right"
						: "top",
				content: l != null && l.content ? (l == null ? void 0 : l.content) : _,
				updatePositionDeps: [P, D, _],
				isOpen:
					(l == null ? void 0 : l.isOpen) !== void 0
						? l == null
							? void 0
							: l.isOpen
						: D || P,
			};
		},
		getInputProps: (_ = {}) => ({ ref: x, ...U(y, w), ..._ }),
	};
}
var n8 = ue((e, t) => {
	const {
			Component: r,
			index: n,
			renderThumb: o,
			showTooltip: a,
			getTooltipProps: i,
			getThumbProps: s,
			getInputProps: l,
		} = b9({ ...e, ref: t }),
		u = {
			...s(),
			index: n,
			children: S.jsx(Ii, { children: S.jsx("input", { ...l() }) }),
		},
		c = Hd({ Component: r, props: u, renderCustom: o });
	return a ? S.jsx(Hl, { ...i(), children: c }) : c;
});
n8.displayName = "NextUI.SliderThumb";
var x9 = n8;
const w9 = 0,
	S9 = 100,
	P9 = 1;
function $9(e) {
	const {
		isDisabled: t = !1,
		minValue: r = w9,
		maxValue: n = S9,
		numberFormatter: o,
		step: a = P9,
		orientation: i = "horizontal",
	} = e;
	let s = h.useMemo(() => {
			let $ = (n - r) / 10;
			return ($ = $a($, 0, $ + a, a)), Math.max($, a);
		}, [a, n, r]),
		l = h.useCallback(
			$ =>
				$ == null
					? void 0
					: $.map((O, B) => {
							let K = B === 0 ? r : O[B - 1],
								W = B === $.length - 1 ? n : O[B + 1];
							return $a(O, K, W, a);
					  }),
			[r, n, a],
		),
		u = h.useMemo(() => l(kv(e.value)), [e.value]),
		c = h.useMemo(() => {
			var $;
			return l(($ = kv(e.defaultValue)) !== null && $ !== void 0 ? $ : [r]);
		}, [e.defaultValue, r]),
		d = Tv(e.value, e.defaultValue, e.onChange),
		f = Tv(e.value, e.defaultValue, e.onChangeEnd);
	const [p, g] = Cr(u, c, d),
		[b, x] = h.useState(new Array(p.length).fill(!1)),
		m = h.useRef(new Array(p.length).fill(!0)),
		[v, y] = h.useState(void 0),
		P = h.useRef(p),
		C = h.useRef(b);
	let E = $ => {
			(P.current = $), g($);
		},
		D = $ => {
			(C.current = $), x($);
		};
	function w($) {
		return ($ - r) / (n - r);
	}
	function V($) {
		return $ === 0 ? r : p[$ - 1];
	}
	function M($) {
		return $ === p.length - 1 ? n : p[$ + 1];
	}
	function F($) {
		return m.current[$];
	}
	function L($, O) {
		m.current[$] = O;
	}
	function T($, O) {
		if (t || !F($)) return;
		const B = V($),
			K = M($);
		O = $a(O, B, K, a);
		let W = Ev(P.current, $, O);
		E(W);
	}
	function A($, O) {
		if (t || !F($)) return;
		O && (P.current = p);
		const B = C.current[$];
		(C.current = Ev(C.current, $, O)),
			D(C.current),
			f && B && !C.current.some(Boolean) && f(P.current);
	}
	function _($) {
		return o.format($);
	}
	function N($, O) {
		T($, j(O));
	}
	function R($) {
		return Math.round(($ - r) / a) * a + r;
	}
	function j($) {
		const O = $ * (n - r) + r;
		return ta(R(O), r, n);
	}
	function z($, O = 1) {
		let B = Math.max(O, a);
		T($, $a(p[$] + B, r, n, a));
	}
	function I($, O = 1) {
		let B = Math.max(O, a);
		T($, $a(p[$] - B, r, n, a));
	}
	return {
		values: p,
		getThumbValue: $ => p[$],
		setThumbValue: T,
		setThumbPercent: N,
		isThumbDragging: $ => b[$],
		setThumbDragging: A,
		focusedThumb: v,
		setFocusedThumb: y,
		getThumbPercent: $ => w(p[$]),
		getValuePercent: w,
		getThumbValueLabel: $ => _(p[$]),
		getFormattedValue: _,
		getThumbMinValue: V,
		getThumbMaxValue: M,
		getPercentValue: j,
		isThumbEditable: F,
		setThumbEditable: L,
		incrementThumb: z,
		decrementThumb: I,
		step: a,
		pageSize: s,
		orientation: i,
		isDisabled: t,
	};
}
function Ev(e, t, r) {
	return e[t] === r ? e : [...e.slice(0, t), r, ...e.slice(t + 1)];
}
function kv(e) {
	if (e != null) return Array.isArray(e) ? e : [e];
}
function Tv(e, t, r) {
	return n => {
		typeof e == "number" || typeof t == "number"
			? r == null || r(n[0])
			: r == null || r(n);
	};
}
function C9(e) {
	var t, r;
	const [n, o] = xt(e, $c.variantKeys),
		{
			ref: a,
			as: i,
			name: s,
			label: l,
			formatOptions: u,
			value: c,
			maxValue: d = 100,
			minValue: f = 0,
			step: p = 1,
			showSteps: g = !1,
			showTooltip: b = !1,
			orientation: x = "horizontal",
			marks: m = [],
			startContent: v,
			endContent: y,
			fillOffset: P,
			className: C,
			classNames: E,
			renderThumb: D,
			renderLabel: w,
			renderValue: V,
			onChange: M,
			onChangeEnd: F,
			getValue: L,
			tooltipValueFormatOptions: T = u,
			tooltipProps: A = {},
			..._
		} = n,
		N = i || "div",
		R = typeof N == "string",
		j = ke(a),
		z = h.useRef(null),
		I = u2(u),
		{ direction: $ } = Xr(),
		O = h.useCallback(me => Math.min(Math.max(me, f), d), [f, d]),
		B = h.useMemo(() => {
			if (c !== void 0) return Array.isArray(c) ? c.map(O) : O(c);
		}, [c, O]),
		K = $9({
			..._,
			value: B,
			isDisabled: (t = e == null ? void 0 : e.isDisabled) != null ? t : !1,
			orientation: x,
			step: p,
			minValue: f,
			maxValue: d,
			numberFormatter: I,
			onChange: M,
			onChangeEnd: F,
		}),
		W = {
			offset: 5,
			delay: 0,
			size: "sm",
			showArrow: !0,
			color:
				e != null && e.color
					? e == null
						? void 0
						: e.color
					: (r = $c.defaultVariants) == null
					? void 0
					: r.color,
			isDisabled: e.isDisabled,
			...A,
		},
		{
			groupProps: G,
			trackProps: X,
			labelProps: q,
			outputProps: re,
		} = v9(e, K, z),
		{ isHovered: Y, hoverProps: ie } = kt({ isDisabled: e.isDisabled }),
		se = Q(E == null ? void 0 : E.base, C),
		te = x === "vertical",
		be = (m == null ? void 0 : m.length) > 0,
		ne = P === void 0 ? K.values.length === 1 : !1,
		ge = h.useMemo(
			() =>
				$c({
					...o,
					hasMarks: be,
					hasSingleThumb: ne,
					isVertical: te,
					className: C,
				}),
			[bt(o), te, ne, be, C],
		),
		[ze, fe] = [
			K.values.length > 1
				? K.getThumbPercent(0)
				: P !== void 0
				? K.getValuePercent(P)
				: 0,
			K.getThumbPercent(K.values.length - 1),
		].sort(),
		we =
			K.values.length === 1
				? I.format(K.values[0])
				: I.formatRange(K.values[0], K.values[K.values.length - 1]),
		He = g ? Math.floor((d - f) / p) + 1 : 0;
	return {
		Component: N,
		state: K,
		value: we,
		domRef: j,
		label: l,
		steps: He,
		marks: m,
		startContent: v,
		endContent: y,
		getStepProps: me => {
			const _t = K.getValuePercent(me * p + f);
			return {
				className: ge.step({ class: E == null ? void 0 : E.step }),
				"data-slot": "step",
				"data-in-range": _t <= fe && _t >= ze,
				style: {
					[te ? "bottom" : $ === "rtl" ? "right" : "left"]: `${_t * 100}%`,
				},
			};
		},
		getBaseProps: (me = {}) => ({
			ref: j,
			"data-orientation": K.orientation,
			"data-slot": "base",
			"data-hover": Y,
			className: ge.base({ class: se }),
			...U(G, ie, rt(_, { enabled: R }), rt(me)),
		}),
		getValue: L,
		renderLabel: w,
		renderValue: V,
		getTrackWrapperProps: (me = {}) => ({
			"data-slot": "track-wrapper",
			className: ge.trackWrapper({
				class: E == null ? void 0 : E.trackWrapper,
			}),
			...me,
		}),
		getLabelWrapperProps: (me = {}) => ({
			className: ge.labelWrapper({
				class: E == null ? void 0 : E.labelWrapper,
			}),
			"data-slot": "labelWrapper",
			...me,
		}),
		getLabelProps: (me = {}) => ({
			"data-slot": "label",
			className: ge.label({ class: E == null ? void 0 : E.label }),
			children: l,
			...q,
			...me,
		}),
		getValueProps: (me = {}) => ({
			"data-slot": "value",
			className: ge.value({ class: E == null ? void 0 : E.value }),
			children: L && typeof L == "function" ? L(K.values) : we,
			...re,
			...me,
		}),
		getTrackProps: (me = {}) => ({
			ref: z,
			"data-slot": "track",
			"data-thumb-hidden": !!(e != null && e.hideThumb),
			"data-vertical": te,
			className: ge.track({ class: E == null ? void 0 : E.track }),
			...X,
			...me,
		}),
		getFillerProps: (me = {}) => ({
			"data-slot": "filler",
			className: ge.filler({ class: E == null ? void 0 : E.filler }),
			...me,
			style: {
				...me.style,
				[te ? "bottom" : $ === "rtl" ? "right" : "left"]: `${ze * 100}%`,
				...(te
					? { height: `${(fe - ze) * 100}%` }
					: { width: `${(fe - ze) * 100}%` }),
			},
		}),
		getThumbProps: me => ({
			name: s,
			index: me,
			state: K,
			trackRef: z,
			orientation: x,
			isVertical: te,
			tooltipProps: W,
			showTooltip: b,
			renderThumb: D,
			formatOptions: T,
			className: ge.thumb({ class: E == null ? void 0 : E.thumb }),
		}),
		getMarkProps: me => {
			const _t = K.getValuePercent(me.value);
			return {
				className: ge.mark({ class: E == null ? void 0 : E.mark }),
				"data-slot": "mark",
				"data-in-range": _t <= fe && _t >= ze,
				style: {
					[te ? "bottom" : $ === "rtl" ? "right" : "left"]: `${_t * 100}%`,
				},
			};
		},
		getStartContentProps: (me = {}) => ({
			"data-slot": "startContent",
			className: ge.startContent({
				class: E == null ? void 0 : E.startContent,
			}),
			...me,
		}),
		getEndContentProps: (me = {}) => ({
			"data-slot": "endContent",
			className: ge.endContent({ class: E == null ? void 0 : E.endContent }),
			...me,
		}),
	};
}
var o8 = ue((e, t) => {
	const {
		Component: r,
		state: n,
		label: o,
		steps: a,
		marks: i,
		startContent: s,
		endContent: l,
		getStepProps: u,
		getBaseProps: c,
		renderValue: d,
		renderLabel: f,
		getTrackWrapperProps: p,
		getLabelWrapperProps: g,
		getLabelProps: b,
		getValueProps: x,
		getTrackProps: m,
		getFillerProps: v,
		getThumbProps: y,
		getMarkProps: P,
		getStartContentProps: C,
		getEndContentProps: E,
	} = C9({ ...e, ref: t });
	return S.jsxs(r, {
		...c(),
		children: [
			o &&
				S.jsxs("div", {
					...g(),
					children: [
						Hd({ Component: "label", props: b(), renderCustom: f }),
						Hd({ Component: "output", props: x(), renderCustom: d }),
					],
				}),
			S.jsxs("div", {
				...p(),
				children: [
					s && S.jsx("div", { ...C(), children: s }),
					S.jsxs("div", {
						...m(),
						children: [
							S.jsx("div", { ...v() }),
							Number.isFinite(a) &&
								Array.from({ length: a }, (D, w) =>
									S.jsx("div", { ...u(w) }, w),
								),
							n.values.map((D, w) => S.jsx(x9, { ...y(w) }, w)),
							(i == null ? void 0 : i.length) > 0 &&
								i.map((D, w) =>
									S.jsx("div", { ...P(D), children: D.label }, w),
								),
						],
					}),
					l && S.jsx("div", { ...E(), children: l }),
				],
			}),
		],
	});
});
o8.displayName = "NextUI.Slider";
var E9 = o8,
	k9 = { BASE_URL: "/facesjs", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Mv = e => {
		let t;
		const r = new Set(),
			n = (c, d) => {
				const f = typeof c == "function" ? c(t) : c;
				if (!Object.is(f, t)) {
					const p = t;
					(t =
						d ?? (typeof f != "object" || f === null)
							? f
							: Object.assign({}, t, f)),
						r.forEach(g => g(t, p));
				}
			},
			o = () => t,
			l = {
				setState: n,
				getState: o,
				getInitialState: () => u,
				subscribe: c => (r.add(c), () => r.delete(c)),
				destroy: () => {
					(k9 ? "production" : void 0) !== "production" &&
						console.warn(
							"[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
						),
						r.clear();
				},
			},
			u = (t = e(n, o, l));
		return l;
	},
	T9 = e => (e ? Mv(e) : Mv);
var a8 = { exports: {} },
	i8 = {},
	s8 = { exports: {} },
	l8 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ia = h;
function M9(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var A9 = typeof Object.is == "function" ? Object.is : M9,
	D9 = ia.useState,
	I9 = ia.useEffect,
	V9 = ia.useLayoutEffect,
	R9 = ia.useDebugValue;
function L9(e, t) {
	var r = t(),
		n = D9({ inst: { value: r, getSnapshot: t } }),
		o = n[0].inst,
		a = n[1];
	return (
		V9(
			function () {
				(o.value = r), (o.getSnapshot = t), Gc(o) && a({ inst: o });
			},
			[e, r, t],
		),
		I9(
			function () {
				return (
					Gc(o) && a({ inst: o }),
					e(function () {
						Gc(o) && a({ inst: o });
					})
				);
			},
			[e],
		),
		R9(r),
		r
	);
}
function Gc(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var r = t();
		return !A9(e, r);
	} catch {
		return !0;
	}
}
function F9(e, t) {
	return t();
}
var O9 =
	typeof window > "u" ||
	typeof window.document > "u" ||
	typeof window.document.createElement > "u"
		? F9
		: L9;
l8.useSyncExternalStore =
	ia.useSyncExternalStore !== void 0 ? ia.useSyncExternalStore : O9;
s8.exports = l8;
var N9 = s8.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Du = h,
	j9 = N9;
function _9(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var z9 = typeof Object.is == "function" ? Object.is : _9,
	B9 = j9.useSyncExternalStore,
	K9 = Du.useRef,
	H9 = Du.useEffect,
	W9 = Du.useMemo,
	U9 = Du.useDebugValue;
i8.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
	var a = K9(null);
	if (a.current === null) {
		var i = { hasValue: !1, value: null };
		a.current = i;
	} else i = a.current;
	a = W9(
		function () {
			function l(p) {
				if (!u) {
					if (((u = !0), (c = p), (p = n(p)), o !== void 0 && i.hasValue)) {
						var g = i.value;
						if (o(g, p)) return (d = g);
					}
					return (d = p);
				}
				if (((g = d), z9(c, p))) return g;
				var b = n(p);
				return o !== void 0 && o(g, b) ? g : ((c = p), (d = b));
			}
			var u = !1,
				c,
				d,
				f = r === void 0 ? null : r;
			return [
				function () {
					return l(t());
				},
				f === null
					? void 0
					: function () {
							return l(f());
					  },
			];
		},
		[t, r, n, o],
	);
	var s = B9(e, a[0], a[1]);
	return (
		H9(
			function () {
				(i.hasValue = !0), (i.value = s);
			},
			[s],
		),
		U9(s),
		s
	);
};
a8.exports = i8;
var Z9 = a8.exports;
const G9 = Lf(Z9);
var u8 = {
	BASE_URL: "/facesjs",
	MODE: "production",
	DEV: !1,
	PROD: !0,
	SSR: !1,
};
const { useDebugValue: Y9 } = k,
	{ useSyncExternalStoreWithSelector: X9 } = G9;
let Av = !1;
const q9 = e => e;
function Q9(e, t = q9, r) {
	(u8 ? "production" : void 0) !== "production" &&
		r &&
		!Av &&
		(console.warn(
			"[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
		),
		(Av = !0));
	const n = X9(
		e.subscribe,
		e.getState,
		e.getServerState || e.getInitialState,
		t,
		r,
	);
	return Y9(n), n;
}
const J9 = e => {
		(u8 ? "production" : void 0) !== "production" &&
			typeof e != "function" &&
			console.warn(
				"[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
			);
		const t = typeof e == "function" ? T9(e) : e,
			r = (n, o) => Q9(t, n, o);
		return Object.assign(r, t), r;
	},
	eI = e => J9,
	Ul = (e, t) => {
		const r = t.split(".");
		let n = e;
		for (let a = 0; a < r.length - 1; a++) {
			const i = r[a];
			if (!n[i] || typeof n[i] != "object") return e;
			n = n[i];
		}
		const o = r.at(-1);
		return o !== void 0 && delete n[o], e;
	},
	Ci = (e, t) => {
		const r = t.split(".");
		let n = e;
		for (const o of r)
			if (n instanceof Map) {
				if (!n.has(o)) return null;
				n = n.get(o);
			} else if (typeof n == "object" && n !== null) {
				if (!(o in n)) return null;
				n = n[o];
			} else return null;
		return n;
	},
	c8 = (e, t, r) => {
		const n = t.trim().split(".");
		let o = e;
		for (const [a, i] of n.entries())
			a === n.length - 1
				? o instanceof Map
					? o.set(i, r)
					: (o[i] = r)
				: o instanceof Map
				? ((!o.has(i) || !(o.get(i) instanceof Map)) && o.set(i, new Map()),
				  (o = o.get(i)))
				: ((!o[i] || typeof o[i] != "object") && (o[i] = {}), (o = o[i]));
		return e;
	},
	tI = (e, t, r) => {
		if (r <= 0) throw new Error("Step must be greater than 0");
		if (e > t && r > 0)
			throw new Error("Start cannot be greater than end when step is positive");
		const n = [];
		let o = e;
		for (; o <= t; ) n.push(o), (o = Zl(o + r));
		return n;
	},
	d8 = e => [...new Set(e)],
	Zl = e => Math.round(e * 100) / 100,
	Dv = e => {
		if (!Gl(e)) throw new Error("Invalid hexadecimal color");
		let t = e.slice(1);
		t.length === 3 &&
			(t = t
				.split("")
				.map(a => a + a)
				.join(""));
		const r = parseInt(t.slice(0, 2), 16) / 255,
			n = parseInt(t.slice(2, 4), 16) / 255,
			o = parseInt(t.slice(4, 6), 16) / 255;
		return 0.2126 * r + 0.7152 * n + 0.0722 * o;
	},
	Gl = e => /^#([0-9A-F]{3}){1,2}$/i.test(e),
	Yc = e => {
		try {
			return JSON.parse(e), !0;
		} catch {
			return !1;
		}
	},
	Wo = e => e[Math.floor(Math.random() * e.length)],
	F0 = () => {
		const e = new Date(),
			t = e.getFullYear(),
			r = (e.getMonth() + 1).toString().padStart(2, "0"),
			n = e.getDate().toString().padStart(2, "0"),
			o = e.getHours().toString().padStart(2, "0"),
			a = e.getMinutes().toString().padStart(2, "0"),
			i = e.getSeconds().toString().padStart(2, "0");
		return `${t}${r}${n}${o}${a}${i}`;
	},
	Iv = e => e.charAt(0).toUpperCase() + e.slice(1),
	ha = e => JSON.parse(JSON.stringify(e)),
	O0 = [
		["#98002E", "#BC9B6A", "#FFFFFF"],
		["#F56600", "#522D80", "#FFFFFF"],
		["#B3A369", "#003057", "#FFFFFF"],
		["#CC0000", "#000000", "#FFFFFF"],
		["#0C2340", "#C99700", "#00843D"],
		["#003594", "#FFB81C", "#FFFFFF"],
		["#630031", "#CF4420", "#FFFFFF"],
		["#24135F", "#AD8900", "#000000"],
		["#311D00", "#FF3C00", "#FFFFFF"],
		["#552583", "#FDB927", "#FFFFFF"],
		["#00538C", "#002B5E", "#FFFFFF"],
		["#007AC1", "#EF3B24", "#002D62"],
		["#007A33", "#FFFFFF", "#BA9653"],
		["#98002E", "#F9A01B", "#FFFFFF"],
		["#00471B", "#EEE1C6", "#FFFFFF"],
		["#F74902", "#000000", "#FFFFFF"],
		["#6F263D", "#236192", "#A2AAAD"],
		["#BB0000", "#666666", "#FFFFFF"],
		["#7A0019", "#FFCC33", "#FFFFFF"],
		["#4E2A84", "#FFFFFF", "#000000"],
		["#FFCD00", "#000000", "#FFFFFF"],
	],
	rI = d8(
		Object.values(uy)
			.map(e => e.skin)
			.flat(),
	),
	nI = d8(
		Object.values(uy)
			.map(e => e.hair)
			.flat(),
	),
	oI = [
		{
			key: "body.color",
			text: "Skin Color",
			isSelected: !0,
			selectionType: "color",
			renderOptions: { valuesToRender: rI },
		},
		{
			key: "body.size",
			text: "Body Size",
			selectionType: "range",
			renderOptions: { rangeConfig: { min: 0.8, max: 1.2 } },
		},
		{ key: "body.id", text: "Body Shape", selectionType: "svgs" },
		{ key: "head.id", text: "Head Shape", selectionType: "svgs" },
		{
			key: "fatness",
			text: "Face Size",
			selectionType: "range",
			renderOptions: { rangeConfig: { min: 0, max: 1 } },
		},
		{
			key: "mouth.id",
			text: "Mouth Shape",
			selectionType: "svgs",
			flip: { key: "mouth.flip" },
		},
		{ key: "eye.id", text: "Eye Shape", selectionType: "svgs" },
		{
			key: "eye.angle",
			text: "Eye Angle",
			selectionType: "range",
			renderOptions: { rangeConfig: { min: -10, max: 15 } },
		},
		{ key: "ear.id", text: "Ear Shape", selectionType: "svgs" },
		{
			key: "ear.size",
			text: "Ear Size",
			selectionType: "range",
			renderOptions: { rangeConfig: { min: 0.5, max: 1.5 } },
		},
		{
			key: "hair.id",
			text: "Hair Style",
			selectionType: "svgs",
			flip: { key: "hair.flip" },
		},
		{
			key: "hair.color",
			text: "Hair Color",
			selectionType: "color",
			renderOptions: { valuesToRender: nI },
		},
		{ key: "hairBg.id", text: "Hair Background", selectionType: "svgs" },
		{ key: "facialHair.id", text: "Facial Hair Style", selectionType: "svgs" },
		{ key: "eyebrow.id", text: "Eyebrow Style", selectionType: "svgs" },
		{
			key: "eyebrow.angle",
			text: "Eyebrow Angle",
			selectionType: "range",
			renderOptions: { rangeConfig: { min: -15, max: 20 } },
		},
		{
			key: "nose.id",
			text: "Nose Shape",
			selectionType: "svgs",
			flip: { key: "nose.flip" },
		},
		{
			key: "nose.size",
			text: "Nose Size",
			selectionType: "range",
			renderOptions: { rangeConfig: { min: 0.5, max: 1.25 } },
		},
		{ key: "eyeLine.id", text: "Eye Line Style", selectionType: "svgs" },
		{ key: "smileLine.id", text: "Smile Line Style", selectionType: "svgs" },
		{
			key: "smileLine.size",
			text: "Smile Line Size",
			selectionType: "range",
			renderOptions: { rangeConfig: { min: 0.25, max: 2.25 } },
		},
		{ key: "miscLine.id", text: "Misc Line Style", selectionType: "svgs" },
		{ key: "glasses.id", text: "Glasses Style", selectionType: "svgs" },
		{ key: "accessories.id", text: "Accessories Style", selectionType: "svgs" },
		{ key: "jersey.id", text: "Jersey Style", selectionType: "svgs" },
		{
			key: "teamColors",
			text: "Team Colors",
			selectionType: "colors",
			renderOptions: { colorCount: 3, valuesToRender: O0 },
		},
	],
	Us = oI.map(e => {
		if (e.selectionType === "range") {
			const t = e.renderOptions.rangeConfig,
				r = t.max - t.min,
				n = Zl(r / 5),
				o = Math.max(Zl(r / 35), 0.01),
				a = tI(t.min, t.max, n);
			return {
				...e,
				renderOptions: {
					...e.renderOptions,
					rangeConfig: {
						...e.renderOptions.rangeConfig,
						step: n,
						sliderStep: o,
					},
					valuesToRender: a,
				},
				randomizeEnabled: !0,
				selectedValue: t.min,
			};
		} else {
			if (e.selectionType === "color")
				return { ...e, randomizeEnabled: !0, selectedValue: "???" };
			if (e.selectionType === "colors")
				return {
					...e,
					randomizeEnabled: !0,
					selectedValue: Array(e.renderOptions.colorCount).fill("#000000"),
				};
			{
				const t = e.flip ? { ...e.flip, selectedValue: !1 } : void 0;
				return { ...e, randomizeEnabled: !0, selectedValue: "???", flip: t };
			}
		}
	}),
	aI = () => {
		let e;
		if (location.hash.length <= 1) e = Zs();
		else
			try {
				e = JSON.parse(atob(location.hash.slice(1)));
			} catch (t) {
				console.error(t), (e = Zs());
			}
		return e;
	},
	f8 = (e, t) => {
		for (const r of e)
			(r.selectedValue = Ci(t, r.key)),
				r.selectionType === "svgs" &&
					r.flip &&
					(r.flip.selectedValue = Ci(t, r.flip.key));
	},
	p8 = e => {
		history.replaceState(void 0, "", `#${btoa(JSON.stringify(e))}`);
	},
	N0 = aI();
f8(Us, N0);
p8(N0);
const iI = e => ({
		faceConfig: N0,
		setFaceStore: t =>
			e(
				r => (
					history.replaceState(void 0, "", `#${btoa(JSON.stringify(t))}`),
					f8(Us, t),
					p8(t),
					{ ...r, gallerySectionConfigList: [...Us], faceConfig: { ...t } }
				),
			),
		gallerySectionConfigList: Us,
		gallerySize: "md",
		setGallerySize: t => e(r => ({ ...r, gallerySize: t })),
		lastClickedSectionIndex: -1,
		setLastClickedSectionIndex: t =>
			e(r => ({ ...r, lastClickedSectionIndex: t })),
		lastSelectedFaceIndex: -1,
		setLastSelectedFaceIndex: t => e(r => ({ ...r, lastSelectedIndex: t })),
		setRandomizeEnabledForSection: (t, r) =>
			e(n =>
				n.gallerySectionConfigList[t]
					? ((n.gallerySectionConfigList[t].randomizeEnabled = r),
					  { ...n, gallerySectionConfigList: [...n.gallerySectionConfigList] })
					: n,
			),
		shuffleGenderSettingObject: ["male"],
		shuffleRaceSettingObject: ["white", "brown", "black", "asian"],
		setShuffleGenderSettingObject: t =>
			e(r => ({ ...r, shuffleGenderSettingObject: t })),
		setShuffleRaceSettingObject: t =>
			e(r => ({ ...r, shuffleRaceSettingObject: t })),
	}),
	zi = eI()((...e) => ({ ...iI(...e) })),
	sI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", { d: "M208,96l-80,80L48,96Z", opacity: "0.2" }),
				k.createElement("path", {
					d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z",
				}),
			),
		],
	]),
	lI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",
					opacity: "0.2",
				}),
				k.createElement("path", {
					d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,134.34V32a4,4,0,0,0-8,0V134.34L90.83,101.17a4,4,0,0,0-5.66,5.66Z",
				}),
			),
		],
	]),
	uI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
					opacity: "0.2",
				}),
				k.createElement("path", {
					d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z",
				}),
			),
		],
	]),
	cI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M87.5,151.52l64-64a12,12,0,0,1,17,17l-64,64a12,12,0,0,1-17-17Zm131-114a60.08,60.08,0,0,0-84.87,0L103.51,67.61a12,12,0,0,0,17,17l30.07-30.06a36,36,0,0,1,50.93,50.92L171.4,135.52a12,12,0,1,0,17,17l30.08-30.06A60.09,60.09,0,0,0,218.45,37.55ZM135.52,171.4l-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M209.94,113.94l-96,96a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z",
					opacity: "0.2",
				}),
				k.createElement("path", {
					d: "M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM144.56,173.66l-21.45,21.45a44,44,0,0,1-62.22-62.22l21.45-21.46a8,8,0,0,1,11.32,11.31L72.2,144.2a28,28,0,0,0,39.6,39.6l21.45-21.46a8,8,0,0,1,11.31,11.32Zm-34.9-16a8,8,0,0,1-11.32-11.32l48-48a8,8,0,0,1,11.32,11.32Zm85.45-34.55-21.45,21.45a8,8,0,0,1-11.32-11.31L183.8,111.8a28,28,0,0,0-39.6-39.6L122.74,93.66a8,8,0,0,1-11.31-11.32l21.46-21.45a44,44,0,0,1,62.22,62.22Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M164.25,91.75a6,6,0,0,1,0,8.49l-64,64a6,6,0,0,1-8.49-8.48l64-64A6,6,0,0,1,164.25,91.75ZM214.2,41.8a54.07,54.07,0,0,0-76.38,0L107.75,71.85a6,6,0,0,0,8.49,8.49l30.07-30.06a42,42,0,0,1,59.41,59.41l-30.08,30.07a6,6,0,1,0,8.49,8.49l30.07-30.07A54,54,0,0,0,214.2,41.8ZM139.76,175.64l-30.07,30.08a42,42,0,0,1-59.41-59.41l30.06-30.07a6,6,0,0,0-8.49-8.49l-30,30.07a54,54,0,0,0,76.38,76.39l30.07-30.08a6,6,0,0,0-8.49-8.49Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M162.84,93.16a4,4,0,0,1,0,5.66l-64,64a4,4,0,0,1-5.66-5.66l64-64A4,4,0,0,1,162.84,93.16Zm49.95-49.95a52.07,52.07,0,0,0-73.56,0L109.17,73.27a4,4,0,0,0,5.65,5.66l30.07-30.06a44,44,0,0,1,62.24,62.24l-30.07,30.06a4,4,0,0,0,5.66,5.66l30.07-30.06A52.07,52.07,0,0,0,212.79,43.21ZM141.17,177.06l-30.06,30.07a44,44,0,0,1-62.24-62.24l30.06-30.06a4,4,0,0,0-5.66-5.66L43.21,139.23a52,52,0,0,0,73.56,73.56l30.06-30.07a4,4,0,1,0-5.66-5.66Z",
				}),
			),
		],
	]),
	dI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", { d: "M216,64V192H40V64Z", opacity: "0.2" }),
				k.createElement("path", {
					d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z",
				}),
			),
		],
	]),
	fI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",
					opacity: "0.2",
				}),
				k.createElement("path", {
					d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z",
				}),
			),
		],
	]),
	pI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,76H100V56a28,28,0,0,1,28-28c13.51,0,25.65,9.62,28.24,22.39a12,12,0,1,0,23.52-4.78C174.87,21.5,153.1,4,128,4A52.06,52.06,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76Zm-4,128H52V100H204Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",
					opacity: "0.2",
				}),
				k.createElement("path", {
					d: "M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M224,96V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80H80V56A48.05,48.05,0,0,1,128,8c23.2,0,43.32,16.15,47.84,38.41a8,8,0,0,1-15.68,3.18C157.2,35,143.37,24,128,24A32,32,0,0,0,96,56V80H208A16,16,0,0,1,224,96Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,82H94V56a34,34,0,0,1,34-34c16.3,0,31,11.69,34.12,27.19a6,6,0,0,0,11.76-2.38C169.55,25.48,150.26,10,128,10A46.06,46.06,0,0,0,82,56V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82Zm2,126a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,84H92V56a36,36,0,0,1,36-36c17.24,0,32.75,12.38,36.08,28.8a4,4,0,1,0,7.84-1.6C167.78,26.81,149.31,12,128,12A44.05,44.05,0,0,0,84,56V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84Zm4,124a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z",
				}),
			),
		],
	]),
	hI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,136H48a20,20,0,0,0-20,20v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V156A20,20,0,0,0,208,136Zm-4,52H52V160H204Zm4-144H48A20,20,0,0,0,28,64v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44Zm-4,52H52V68H204Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M216,152v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8H208A8,8,0,0,1,216,152Zm-8-96H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V64A8,8,0,0,0,208,56Z",
					opacity: "0.2",
				}),
				k.createElement("path", {
					d: "M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M224,152v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H208A16,16,0,0,1,224,152ZM208,48H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,138H48a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM208,50H48A14,14,0,0,0,34,64v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V64A14,14,0,0,0,208,50Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,140H48a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V152A12,12,0,0,0,208,140Zm4,52a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,52H48A12,12,0,0,0,36,64v40a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V64A12,12,0,0,0,208,52Zm4,52a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z",
				}),
			),
		],
	]),
	mI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M240.49,175.51a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L203,196h-2.09a76.17,76.17,0,0,1-61.85-31.83L97.38,105.78A52.1,52.1,0,0,0,55.06,84H32a12,12,0,0,1,0-24H55.06a76.17,76.17,0,0,1,61.85,31.83l41.71,58.39A52.1,52.1,0,0,0,200.94,172H203l-3.52-3.51a12,12,0,0,1,17-17Zm-95.62-72.62a12,12,0,0,0,16.93-1.13A52,52,0,0,1,200.94,84H203l-3.52,3.51a12,12,0,0,0,17,17l24-24a12,12,0,0,0,0-17l-24-24a12,12,0,0,0-17,17L203,60h-2.09a76,76,0,0,0-57.2,26A12,12,0,0,0,144.87,102.89Zm-33.74,50.22a12,12,0,0,0-16.93,1.13A52,52,0,0,1,55.06,172H32a12,12,0,0,0,0,24H55.06a76,76,0,0,0,57.2-26A12,12,0,0,0,111.13,153.11Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M107.14,98.8,128,128l-20.86,29.2A64,64,0,0,1,55.06,184H32V72H55.06A64,64,0,0,1,107.14,98.8ZM200.94,72a64,64,0,0,0-52.08,26.8L128,128l20.86,29.2A64,64,0,0,0,200.94,184H232V72Z",
					opacity: "0.2",
				}),
				k.createElement("path", {
					d: "M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H200.94a72.12,72.12,0,0,1-58.59-30.15l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.1,56.1,0,0,0,200.94,176h11.75l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.1,56.1,0,0,1,200.94,80h11.75L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H200.94a72.12,72.12,0,0,0-58.59,30.15l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M237.66,178.34a8,8,0,0,1,0,11.32l-24,24A8,8,0,0,1,200,208V192a72.15,72.15,0,0,1-57.65-30.14l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.08,56.08,0,0,0,200,176V160a8,8,0,0,1,13.66-5.66ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.08,56.08,0,0,1,200,80V96a8,8,0,0,0,13.66,5.66l24-24a8,8,0,0,0,0-11.32l-24-24A8,8,0,0,0,200,48V64a72.15,72.15,0,0,0-57.65,30.14l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M236.24,179.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L217.52,190H200.94a70.16,70.16,0,0,1-57-29.31l-41.71-58.4A58.11,58.11,0,0,0,55.06,78H32a6,6,0,0,1,0-12H55.06a70.16,70.16,0,0,1,57,29.31l41.71,58.4A58.11,58.11,0,0,0,200.94,178h16.58l-13.76-13.76a6,6,0,0,1,8.48-8.48Zm-92.06-74.41a5.91,5.91,0,0,0,3.48,1.12,6,6,0,0,0,4.89-2.51l1.19-1.67A58.11,58.11,0,0,1,200.94,78h16.58L203.76,91.76a6,6,0,1,0,8.48,8.48l24-24a6,6,0,0,0,0-8.48l-24-24a6,6,0,0,0-8.48,8.48L217.52,66H200.94a70.16,70.16,0,0,0-57,29.31L142.78,97A6,6,0,0,0,144.18,105.35Zm-32.36,45.3a6,6,0,0,0-8.37,1.39l-1.19,1.67A58.11,58.11,0,0,1,55.06,178H32a6,6,0,0,0,0,12H55.06a70.16,70.16,0,0,0,57-29.31l1.19-1.67A6,6,0,0,0,111.82,150.65Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H200.94a72.12,72.12,0,0,1-58.59-30.15l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.1,56.1,0,0,0,200.94,176h11.75l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.1,56.1,0,0,1,200.94,80h11.75L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H200.94a72.12,72.12,0,0,0-58.59,30.15l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M234.83,181.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,0,1-5.66-5.66L222.34,188h-21.4a68.15,68.15,0,0,1-55.34-28.48l-41.71-58.39A60.11,60.11,0,0,0,55.06,76H32a4,4,0,0,1,0-8H55.06A68.15,68.15,0,0,1,110.4,96.48l41.71,58.39A60.11,60.11,0,0,0,200.94,180h21.4l-17.17-17.17a4,4,0,0,1,5.66-5.66Zm-89.49-77.44a4,4,0,0,0,5.58-.93l1.19-1.67A60.11,60.11,0,0,1,200.94,76h21.4L205.17,93.17a4,4,0,0,0,5.66,5.66l24-24a4,4,0,0,0,0-5.66l-24-24a4,4,0,0,0-5.66,5.66L222.34,68h-21.4A68.15,68.15,0,0,0,145.6,96.48l-1.19,1.67A4,4,0,0,0,145.34,103.73Zm-34.68,48.54a4,4,0,0,0-5.58.93l-1.19,1.67A60.11,60.11,0,0,1,55.06,180H32a4,4,0,0,0,0,8H55.06a68.15,68.15,0,0,0,55.34-28.48l1.19-1.67A4,4,0,0,0,110.66,152.27Z",
				}),
			),
		],
	]),
	gI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M68,102.06V40a12,12,0,0,0-24,0v62.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V169.94a36,36,0,0,0,0-67.88ZM56,148a12,12,0,1,1,12-12A12,12,0,0,1,56,148ZM164,88a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0V54.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V121.94A36.07,36.07,0,0,0,164,88Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,128,100Zm108,68a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0v94.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V201.94A36.07,36.07,0,0,0,236,168Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,200,180Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M80,136a24,24,0,1,1-24-24A24,24,0,0,1,80,136Zm48-72a24,24,0,1,0,24,24A24,24,0,0,0,128,64Zm72,80a24,24,0,1,0,24,24A24,24,0,0,0,200,144Z",
					opacity: "0.2",
				}),
				k.createElement("path", {
					d: "M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M84,136a28,28,0,0,1-20,26.83V216a8,8,0,0,1-16,0V162.83a28,28,0,0,1,0-53.66V40a8,8,0,0,1,16,0v69.17A28,28,0,0,1,84,136Zm52-74.83V40a8,8,0,0,0-16,0V61.17a28,28,0,0,0,0,53.66V216a8,8,0,0,0,16,0V114.83a28,28,0,0,0,0-53.66Zm72,80V40a8,8,0,0,0-16,0V141.17a28,28,0,0,0,0,53.66V216a8,8,0,0,0,16,0V194.83a28,28,0,0,0,0-53.66Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M62,106.6V40a6,6,0,0,0-12,0v66.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V165.4a30,30,0,0,0,0-58.8ZM56,154a18,18,0,1,1,18-18A18,18,0,0,1,56,154Zm78-95.4V40a6,6,0,0,0-12,0V58.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V117.4a30,30,0,0,0,0-58.8ZM128,106a18,18,0,1,1,18-18A18,18,0,0,1,128,106Zm102,62a30.05,30.05,0,0,0-24-29.4V40a6,6,0,0,0-12,0v98.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V197.4A30.05,30.05,0,0,0,230,168Zm-30,18a18,18,0,1,1,18-18A18,18,0,0,1,200,186Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M60,108.29V40a4,4,0,0,0-8,0v68.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V163.71a28,28,0,0,0,0-55.42ZM56,156a20,20,0,1,1,20-20A20,20,0,0,1,56,156Zm76-95.71V40a4,4,0,0,0-8,0V60.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V115.71a28,28,0,0,0,0-55.42ZM128,108a20,20,0,1,1,20-20A20,20,0,0,1,128,108Zm100,60a28,28,0,0,0-24-27.71V40a4,4,0,0,0-8,0V140.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V195.71A28,28,0,0,0,228,168Zm-28,20a20,20,0,1,1,20-20A20,20,0,0,1,200,188Z",
				}),
			),
		],
	]),
	vI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
					opacity: "0.2",
				}),
				k.createElement("path", {
					d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z",
				}),
			),
		],
	]),
	yI = new Map([
		[
			"bold",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0ZM96.49,80.49,116,61v83a12,12,0,0,0,24,0V61l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z",
				}),
			),
		],
		[
			"duotone",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",
					opacity: "0.2",
				}),
				k.createElement("path", {
					d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z",
				}),
			),
		],
		[
			"fill",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM88,80h32v64a8,8,0,0,0,16,0V80h32a8,8,0,0,0,5.66-13.66l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,88,80Z",
				}),
			),
		],
		[
			"light",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0ZM92.24,76.24,122,46.49V144a6,6,0,0,0,12,0V46.49l29.76,29.75a6,6,0,0,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,8.48,8.48Z",
				}),
			),
		],
		[
			"regular",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z",
				}),
			),
		],
		[
			"thin",
			k.createElement(
				k.Fragment,
				null,
				k.createElement("path", {
					d: "M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0ZM90.83,74.83,124,41.66V144a4,4,0,0,0,8,0V41.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z",
				}),
			),
		],
	]),
	bI = h.createContext({
		color: "currentColor",
		size: "1em",
		weight: "regular",
		mirrored: !1,
	});
var xI = Object.defineProperty,
	Yl = Object.getOwnPropertySymbols,
	h8 = Object.prototype.hasOwnProperty,
	m8 = Object.prototype.propertyIsEnumerable,
	Vv = (e, t, r) =>
		t in e
			? xI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	Rv = (e, t) => {
		for (var r in t || (t = {})) h8.call(t, r) && Vv(e, r, t[r]);
		if (Yl) for (var r of Yl(t)) m8.call(t, r) && Vv(e, r, t[r]);
		return e;
	},
	Lv = (e, t) => {
		var r = {};
		for (var n in e) h8.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
		if (e != null && Yl)
			for (var n of Yl(e)) t.indexOf(n) < 0 && m8.call(e, n) && (r[n] = e[n]);
		return r;
	};
const g8 = h.forwardRef((e, t) => {
	const r = e,
		{
			alt: n,
			color: o,
			size: a,
			weight: i,
			mirrored: s,
			children: l,
			weights: u,
		} = r,
		c = Lv(r, [
			"alt",
			"color",
			"size",
			"weight",
			"mirrored",
			"children",
			"weights",
		]),
		d = h.useContext(bI),
		{
			color: f = "currentColor",
			size: p,
			weight: g = "regular",
			mirrored: b = !1,
		} = d,
		x = Lv(d, ["color", "size", "weight", "mirrored"]);
	return k.createElement(
		"svg",
		Rv(
			Rv(
				{
					ref: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: a ?? p,
					height: a ?? p,
					fill: o ?? f,
					viewBox: "0 0 256 256",
					transform: s || b ? "scale(-1, 1)" : void 0,
				},
				x,
			),
			c,
		),
		!!n && k.createElement("title", null, n),
		l,
		u.get(i ?? g),
	);
});
g8.displayName = "IconBase";
const rr = g8;
var wI = Object.defineProperty,
	SI = Object.defineProperties,
	PI = Object.getOwnPropertyDescriptors,
	Fv = Object.getOwnPropertySymbols,
	$I = Object.prototype.hasOwnProperty,
	CI = Object.prototype.propertyIsEnumerable,
	Ov = (e, t, r) =>
		t in e
			? wI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	EI = (e, t) => {
		for (var r in t || (t = {})) $I.call(t, r) && Ov(e, r, t[r]);
		if (Fv) for (var r of Fv(t)) CI.call(t, r) && Ov(e, r, t[r]);
		return e;
	},
	kI = (e, t) => SI(e, PI(t));
const v8 = h.forwardRef((e, t) =>
	k.createElement(rr, kI(EI({ ref: t }, e), { weights: sI })),
);
v8.displayName = "CaretDown";
var TI = Object.defineProperty,
	MI = Object.defineProperties,
	AI = Object.getOwnPropertyDescriptors,
	Nv = Object.getOwnPropertySymbols,
	DI = Object.prototype.hasOwnProperty,
	II = Object.prototype.propertyIsEnumerable,
	jv = (e, t, r) =>
		t in e
			? TI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	VI = (e, t) => {
		for (var r in t || (t = {})) DI.call(t, r) && jv(e, r, t[r]);
		if (Nv) for (var r of Nv(t)) II.call(t, r) && jv(e, r, t[r]);
		return e;
	},
	RI = (e, t) => MI(e, AI(t));
const y8 = h.forwardRef((e, t) =>
	k.createElement(rr, RI(VI({ ref: t }, e), { weights: lI })),
);
y8.displayName = "DownloadSimple";
var LI = Object.defineProperty,
	FI = Object.defineProperties,
	OI = Object.getOwnPropertyDescriptors,
	_v = Object.getOwnPropertySymbols,
	NI = Object.prototype.hasOwnProperty,
	jI = Object.prototype.propertyIsEnumerable,
	zv = (e, t, r) =>
		t in e
			? LI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	_I = (e, t) => {
		for (var r in t || (t = {})) NI.call(t, r) && zv(e, r, t[r]);
		if (_v) for (var r of _v(t)) jI.call(t, r) && zv(e, r, t[r]);
		return e;
	},
	zI = (e, t) => FI(e, OI(t));
const b8 = h.forwardRef((e, t) =>
	k.createElement(rr, zI(_I({ ref: t }, e), { weights: uI })),
);
b8.displayName = "House";
var BI = Object.defineProperty,
	KI = Object.defineProperties,
	HI = Object.getOwnPropertyDescriptors,
	Bv = Object.getOwnPropertySymbols,
	WI = Object.prototype.hasOwnProperty,
	UI = Object.prototype.propertyIsEnumerable,
	Kv = (e, t, r) =>
		t in e
			? BI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	ZI = (e, t) => {
		for (var r in t || (t = {})) WI.call(t, r) && Kv(e, r, t[r]);
		if (Bv) for (var r of Bv(t)) UI.call(t, r) && Kv(e, r, t[r]);
		return e;
	},
	GI = (e, t) => KI(e, HI(t));
const x8 = h.forwardRef((e, t) =>
	k.createElement(rr, GI(ZI({ ref: t }, e), { weights: cI })),
);
x8.displayName = "LinkSimple";
var YI = Object.defineProperty,
	XI = Object.defineProperties,
	qI = Object.getOwnPropertyDescriptors,
	Hv = Object.getOwnPropertySymbols,
	QI = Object.prototype.hasOwnProperty,
	JI = Object.prototype.propertyIsEnumerable,
	Wv = (e, t, r) =>
		t in e
			? YI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	eV = (e, t) => {
		for (var r in t || (t = {})) QI.call(t, r) && Wv(e, r, t[r]);
		if (Hv) for (var r of Hv(t)) JI.call(t, r) && Wv(e, r, t[r]);
		return e;
	},
	tV = (e, t) => XI(e, qI(t));
const w8 = h.forwardRef((e, t) =>
	k.createElement(rr, tV(eV({ ref: t }, e), { weights: dI })),
);
w8.displayName = "List";
var rV = Object.defineProperty,
	nV = Object.defineProperties,
	oV = Object.getOwnPropertyDescriptors,
	Uv = Object.getOwnPropertySymbols,
	aV = Object.prototype.hasOwnProperty,
	iV = Object.prototype.propertyIsEnumerable,
	Zv = (e, t, r) =>
		t in e
			? rV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	sV = (e, t) => {
		for (var r in t || (t = {})) aV.call(t, r) && Zv(e, r, t[r]);
		if (Uv) for (var r of Uv(t)) iV.call(t, r) && Zv(e, r, t[r]);
		return e;
	},
	lV = (e, t) => nV(e, oV(t));
const S8 = h.forwardRef((e, t) =>
	k.createElement(rr, lV(sV({ ref: t }, e), { weights: fI })),
);
S8.displayName = "LockSimple";
var uV = Object.defineProperty,
	cV = Object.defineProperties,
	dV = Object.getOwnPropertyDescriptors,
	Gv = Object.getOwnPropertySymbols,
	fV = Object.prototype.hasOwnProperty,
	pV = Object.prototype.propertyIsEnumerable,
	Yv = (e, t, r) =>
		t in e
			? uV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	hV = (e, t) => {
		for (var r in t || (t = {})) fV.call(t, r) && Yv(e, r, t[r]);
		if (Gv) for (var r of Gv(t)) pV.call(t, r) && Yv(e, r, t[r]);
		return e;
	},
	mV = (e, t) => cV(e, dV(t));
const P8 = h.forwardRef((e, t) =>
	k.createElement(rr, mV(hV({ ref: t }, e), { weights: pI })),
);
P8.displayName = "LockSimpleOpen";
var gV = Object.defineProperty,
	vV = Object.defineProperties,
	yV = Object.getOwnPropertyDescriptors,
	Xv = Object.getOwnPropertySymbols,
	bV = Object.prototype.hasOwnProperty,
	xV = Object.prototype.propertyIsEnumerable,
	qv = (e, t, r) =>
		t in e
			? gV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	wV = (e, t) => {
		for (var r in t || (t = {})) bV.call(t, r) && qv(e, r, t[r]);
		if (Xv) for (var r of Xv(t)) xV.call(t, r) && qv(e, r, t[r]);
		return e;
	},
	SV = (e, t) => vV(e, yV(t));
const $8 = h.forwardRef((e, t) =>
	k.createElement(rr, SV(wV({ ref: t }, e), { weights: hI })),
);
$8.displayName = "Rows";
var PV = Object.defineProperty,
	$V = Object.defineProperties,
	CV = Object.getOwnPropertyDescriptors,
	Qv = Object.getOwnPropertySymbols,
	EV = Object.prototype.hasOwnProperty,
	kV = Object.prototype.propertyIsEnumerable,
	Jv = (e, t, r) =>
		t in e
			? PV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	TV = (e, t) => {
		for (var r in t || (t = {})) EV.call(t, r) && Jv(e, r, t[r]);
		if (Qv) for (var r of Qv(t)) kV.call(t, r) && Jv(e, r, t[r]);
		return e;
	},
	MV = (e, t) => $V(e, CV(t));
const j0 = h.forwardRef((e, t) =>
	k.createElement(rr, MV(TV({ ref: t }, e), { weights: mI })),
);
j0.displayName = "Shuffle";
var AV = Object.defineProperty,
	DV = Object.defineProperties,
	IV = Object.getOwnPropertyDescriptors,
	ey = Object.getOwnPropertySymbols,
	VV = Object.prototype.hasOwnProperty,
	RV = Object.prototype.propertyIsEnumerable,
	ty = (e, t, r) =>
		t in e
			? AV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	LV = (e, t) => {
		for (var r in t || (t = {})) VV.call(t, r) && ty(e, r, t[r]);
		if (ey) for (var r of ey(t)) RV.call(t, r) && ty(e, r, t[r]);
		return e;
	},
	FV = (e, t) => DV(e, IV(t));
const C8 = h.forwardRef((e, t) =>
	k.createElement(rr, FV(LV({ ref: t }, e), { weights: gI })),
);
C8.displayName = "Sliders";
var OV = Object.defineProperty,
	NV = Object.defineProperties,
	jV = Object.getOwnPropertyDescriptors,
	ry = Object.getOwnPropertySymbols,
	_V = Object.prototype.hasOwnProperty,
	zV = Object.prototype.propertyIsEnumerable,
	ny = (e, t, r) =>
		t in e
			? OV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	BV = (e, t) => {
		for (var r in t || (t = {})) _V.call(t, r) && ny(e, r, t[r]);
		if (ry) for (var r of ry(t)) zV.call(t, r) && ny(e, r, t[r]);
		return e;
	},
	KV = (e, t) => NV(e, jV(t));
const E8 = h.forwardRef((e, t) =>
	k.createElement(rr, KV(BV({ ref: t }, e), { weights: vI })),
);
E8.displayName = "Square";
var HV = Object.defineProperty,
	WV = Object.defineProperties,
	UV = Object.getOwnPropertyDescriptors,
	oy = Object.getOwnPropertySymbols,
	ZV = Object.prototype.hasOwnProperty,
	GV = Object.prototype.propertyIsEnumerable,
	ay = (e, t, r) =>
		t in e
			? HV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	YV = (e, t) => {
		for (var r in t || (t = {})) ZV.call(t, r) && ay(e, r, t[r]);
		if (oy) for (var r of oy(t)) GV.call(t, r) && ay(e, r, t[r]);
		return e;
	},
	XV = (e, t) => WV(e, UV(t));
const k8 = h.forwardRef((e, t) =>
	k.createElement(rr, XV(YV({ ref: t }, e), { weights: yI })),
);
k8.displayName = "UploadSimple";
const qV = (e, t, r) => {
		const {
				setFaceStore: n,
				shuffleGenderSettingObject: o,
				shuffleRaceSettingObject: a,
			} = r,
			i = ha(e),
			s = {};
		for (const u of t)
			u.randomizeEnabled &&
				(Ul(i, u.key),
				u.selectionType === "svgs" && u.flip && Ul(i, u.flip.key));
		for (const [u, c] of Object.entries(i))
			(c === void 0 || (typeof c == "object" && Object.keys(c).length === 0)) &&
				delete i[u];
		o.length > 0 && (s.gender = Wo(o)),
			a.length > 0 && (s.race = Wo(a)),
			i.teamColors || (i.teamColors = Wo(O0));
		const l = Zs(i, s);
		n(l);
	},
	QV = (e, t, r) => {
		const {
			setFaceStore: n,
			shuffleGenderSettingObject: o,
			shuffleRaceSettingObject: a,
		} = t;
		if (e.key === "teamColors") {
			const i = { ...r, teamColors: Wo(O0) };
			n(i);
		} else {
			const i = Ul(ha(r), e.key);
			e.selectionType === "svgs" && e.flip && Ul(i, e.flip.key);
			const s = {};
			o.length > 0 && (s.gender = Wo(o)), a.length > 0 && (s.race = Wo(a));
			const l = Zs(i, s);
			n(l);
		}
	},
	JV = e => {
		const t = [];
		if (e.selectionType === "svgs") {
			if (e.key.includes("id")) {
				const r = e.key.split(".")[0],
					n = N8[r];
				n.sort((o, a) => {
					if (o === "none" || o === "bald") return -1;
					if (a === "none" || a === "bald") return 1;
					if (Gl(o) && Gl(a)) return Dv(o) - Dv(a);
					const i = /^([a-zA-Z-]+)(\d*)$/,
						s = o.match(i),
						l = a.match(i),
						u = s ? s[1] : o,
						c = s ? s[2] : "",
						d = l ? l[1] : a,
						f = l ? l[2] : "";
					return u < d
						? -1
						: u > d
						? 1
						: c && f
						? parseInt(c, 10) - parseInt(f, 10)
						: c
						? 1
						: f
						? -1
						: 0;
				});
				for (const o of n) {
					const a = { [r]: { id: o } };
					t.push({ override: a, value: o });
				}
			}
		} else if (
			e.selectionType === "range" ||
			e.selectionType === "color" ||
			e.selectionType === "colors"
		)
			for (let r = 0; r < e.renderOptions.valuesToRender.length; r++) {
				const n = e.renderOptions.valuesToRender[r],
					o = c8({}, e.key, n);
				t.push({ override: o, value: n });
			}
		return t;
	},
	eR = (e, t, r) => {
		const n = ha(e),
			o = c8({}, t, r);
		return Rf(n, o), n;
	};
var Vf = new Map(),
	Cs = new WeakMap(),
	iy = 0,
	tR = void 0;
function rR(e) {
	return e
		? (Cs.has(e) || ((iy += 1), Cs.set(e, iy.toString())), Cs.get(e))
		: "0";
}
function nR(e) {
	return Object.keys(e)
		.sort()
		.filter(t => e[t] !== void 0)
		.map(t => `${t}_${t === "root" ? rR(e.root) : e[t]}`)
		.toString();
}
function oR(e) {
	const t = nR(e);
	let r = Vf.get(t);
	if (!r) {
		const n = new Map();
		let o;
		const a = new IntersectionObserver(i => {
			i.forEach(s => {
				var l;
				const u = s.isIntersecting && o.some(c => s.intersectionRatio >= c);
				e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = u),
					(l = n.get(s.target)) == null ||
						l.forEach(c => {
							c(u, s);
						});
			});
		}, e);
		(o =
			a.thresholds ||
			(Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
			(r = { id: t, observer: a, elements: n }),
			Vf.set(t, r);
	}
	return r;
}
function aR(e, t, r = {}, n = tR) {
	if (typeof window.IntersectionObserver > "u" && n !== void 0) {
		const l = e.getBoundingClientRect();
		return (
			t(n, {
				isIntersecting: n,
				target: e,
				intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
				time: 0,
				boundingClientRect: l,
				intersectionRect: l,
				rootBounds: l,
			}),
			() => {}
		);
	}
	const { id: o, observer: a, elements: i } = oR(r),
		s = i.get(e) || [];
	return (
		i.has(e) || i.set(e, s),
		s.push(t),
		a.observe(e),
		function () {
			s.splice(s.indexOf(t), 1),
				s.length === 0 && (i.delete(e), a.unobserve(e)),
				i.size === 0 && (a.disconnect(), Vf.delete(o));
		}
	);
}
function iR({
	threshold: e,
	delay: t,
	trackVisibility: r,
	rootMargin: n,
	root: o,
	triggerOnce: a,
	skip: i,
	initialInView: s,
	fallbackInView: l,
	onChange: u,
} = {}) {
	var c;
	const [d, f] = h.useState(null),
		p = h.useRef(),
		[g, b] = h.useState({ inView: !!s, entry: void 0 });
	(p.current = u),
		h.useEffect(() => {
			if (i || !d) return;
			let y;
			return (
				(y = aR(
					d,
					(P, C) => {
						b({ inView: P, entry: C }),
							p.current && p.current(P, C),
							C.isIntersecting && a && y && (y(), (y = void 0));
					},
					{
						root: o,
						rootMargin: n,
						threshold: e,
						trackVisibility: r,
						delay: t,
					},
					l,
				)),
				() => {
					y && y();
				}
			);
		}, [Array.isArray(e) ? e.toString() : e, d, o, n, a, i, r, l, t]);
	const x = (c = g.entry) == null ? void 0 : c.target,
		m = h.useRef();
	!d &&
		x &&
		!a &&
		!i &&
		m.current !== x &&
		((m.current = x), b({ inView: !!s, entry: void 0 }));
	const v = [f, g.inView, g.entry];
	return (v.ref = v[0]), (v.inView = v[1]), (v.entry = v[2]), v;
}
const T8 = h.forwardRef(
		(
			{ faceConfig: e, overrides: t, maxWidth: r, width: n = 400, lazyLoad: o },
			a,
		) => {
			const [i, s] = iR(),
				l = h.useRef(null);
			h.useEffect(() => {
				(s || !o) &&
					l.current &&
					(t ? z0(l.current, ha(e), t) : z0(l.current, e));
			}, [s, e, t]);
			const u = { aspectRatio: "2/3", minWidth: 60, minHeight: 90 };
			r !== void 0
				? ((u.maxWidth = r), (u.maxHeight = r * 1.5))
				: ((u.width = n), (u.height = n * 1.5));
			const c = h.useCallback(
				d => {
					a && (a.current = d), (l.current = d), i(d);
				},
				[i],
			);
			return S.jsx("div", { ref: c, style: u });
		},
	),
	Es = ({
		chosenValue: e,
		faceConfig: t,
		key: r,
		overrideList: n,
		sectionIndex: o,
		stateStoreProps: a,
	}) => {
		const i = n.findIndex(l => Ci(l.override, r) === e),
			s = eR(t, r, e);
		M8({
			faceConfig: s,
			faceIndex: i,
			sectionIndex: o,
			stateStoreProps: a,
			overrideList: n,
		});
	},
	sR = ({ value: e, onChange: t }) => {
		const [r, n] = h.useState(String(e));
		return (
			h.useEffect(() => {
				n(String(e));
			}, [e]),
			S.jsx("input", {
				className:
					"px-1 py-0.5 w-12 text-right text-small text-default-700 font-medium bg-default-100 outline-none transition-colors rounded-sm border-medium border-transparent hover:border-primary focus:border-primary",
				type: "text",
				value: r,
				onChange: o => {
					n(o.target.value);
					const a = parseFloat(o.target.value);
					Number.isNaN(a) || t(a);
				},
			})
		);
	},
	lR = ({
		gallerySectionConfig: e,
		overrideList: t,
		stateStoreProps: r,
		sectionIndex: n,
	}) => {
		const { faceConfig: o } = r;
		if (!e) return S.jsx("div", { children: "Select a feature" });
		const a = Ci(o, e.key);
		if (e.selectionType === "svgs") {
			const i = e.flip;
			return S.jsxs(
				"div",
				{
					className: "w-full max-w-md flex gap-4",
					children: [
						S.jsx(g9, {
							label: e.text,
							selectedKeys: [e.selectedValue],
							onChange: s => {
								const l = s.target.value;
								Es({
									chosenValue: l,
									faceConfig: o,
									key: e.key,
									overrideList: t,
									sectionIndex: n,
									stateStoreProps: r,
								});
							},
							children: t.map(s =>
								S.jsx(
									m9,
									{ value: String(s.value), children: s.value },
									String(s.value),
								),
							),
						}),
						i
							? S.jsx(sA, {
									isSelected: i.selectedValue,
									onValueChange: s => {
										Es({
											chosenValue: s,
											faceConfig: o,
											key: i.key,
											overrideList: [],
											sectionIndex: n,
											stateStoreProps: r,
										});
									},
									children: "Flip",
							  })
							: null,
					],
				},
				n,
			);
		} else if (e.selectionType === "range") {
			const i = a || 0,
				s = l => {
					const u = Zl(l);
					Es({
						chosenValue: u,
						faceConfig: o,
						key: e.key,
						overrideList: t,
						sectionIndex: n,
						stateStoreProps: r,
					});
				};
			return S.jsx(
				E9,
				{
					className: "max-w-md",
					label: S.jsx("span", {
						className: "text-xs text-foreground-600",
						children: e.text,
					}),
					step: e.renderOptions.rangeConfig.sliderStep,
					maxValue: e.renderOptions.rangeConfig.max,
					minValue: e.renderOptions.rangeConfig.min,
					defaultValue: 0.4,
					value: i,
					onChange: s,
					renderValue: ({ children: l, ...u }) =>
						S.jsx("output", {
							...u,
							children: S.jsx(sR, { onChange: s, value: i }),
						}),
				},
				n,
			);
		} else if (e.selectionType == "color" || e.selectionType === "colors") {
			const i = e.selectionType == "color" ? 1 : e.renderOptions.colorCount,
				[s, l] = h.useState(Array(i).fill(!0)),
				u = (d, f) => {
					const p = [...s];
					(p[d] = f), l(p);
				},
				c = ({ newColorValue: d, hasMultipleColors: f, colorIndex: p }) => {
					u(p, Gl(d));
					let g = Ci(o, e.key);
					f ? (g[p] = d) : (g = d),
						Es({
							chosenValue: g,
							faceConfig: o,
							key: e.key,
							overrideList: t,
							sectionIndex: n,
							stateStoreProps: r,
						});
				};
			return S.jsx(
				"div",
				{
					className: "flex gap-2 flex-wrap justify-end items-end",
					children: Array.from({ length: Math.min(i) }).map((d, f) => {
						const p = e.selectionType == "colors",
							g = p ? a[f] : a;
						return S.jsxs(
							"div",
							{
								className: "w-48",
								children: [
									f === 0
										? S.jsx("label", {
												className: "text-xs text-foreground-600 mb-2",
												children: e.text,
										  })
										: null,
									S.jsxs(
										"div",
										{
											className: "flex gap-2",
											children: [
												S.jsx(pv, {
													type: "color",
													value: g,
													onValueChange: b => {
														c({
															newColorValue: b,
															hasMultipleColors: p,
															colorIndex: f,
														});
													},
												}),
												S.jsx(pv, {
													value: g,
													isInvalid: !s[f],
													onChange: b => {
														c({
															newColorValue: b.target.value,
															hasMultipleColors: p,
															colorIndex: f,
														});
													},
												}),
											],
										},
										f,
									),
								],
							},
							f,
						);
					}),
				},
				n,
			);
		} else return S.jsx(S.Fragment, { children: " " });
	},
	M8 = ({
		faceConfig: e,
		faceIndex: t,
		sectionIndex: r,
		stateStoreProps: n,
	}) => {
		const {
			setFaceStore: o,
			setLastClickedSectionIndex: a,
			setLastSelectedFaceIndex: i,
		} = n;
		o(e), a(r), i(t);
	},
	uR = () => {
		const e = zi(),
			{
				faceConfig: t,
				gallerySize: r,
				gallerySectionConfigList: n,
				setRandomizeEnabledForSection: o,
			} = e;
		return S.jsx("div", {
			className: "w-full flex flex-col overflow-hidden",
			children: n.map((a, i) => {
				const s = JV(a);
				return S.jsxs(
					"div",
					{
						className: `${
							i === 0 ? "pb-6" : "py-6 border-t-2 border-t-slate-400"
						}`,
						children: [
							S.jsxs("div", {
								className: "m-1 flex gap-4 justify-between items-center",
								children: [
									S.jsxs("div", {
										className: "flex items-center gap-1 shrink-0",
										children: [
											S.jsx("span", {
												className: "hidden sm:block",
												children: a.text,
											}),
											S.jsx(Hl, {
												content: `Randomize ${a.text}`,
												delay: 500,
												children: S.jsx("button", {
													onClick: () => {
														QV(a, e, t);
													},
													children: S.jsx(j0, {
														size: 28,
														weight: "bold",
														className:
															"cursor-pointer hover:text-white hover:bg-slate-800 rounded-full p-1 active:scale-90 transition-transform ease-in-out",
													}),
												}),
											}),
											S.jsx(Hl, {
												content: `Lock current ${a.text} when randomizing whole face`,
												delay: 500,
												children: S.jsx("button", {
													onClick: () => {
														o(i, !a.randomizeEnabled);
													},
													children: a.randomizeEnabled
														? S.jsx(P8, {
																size: 28,
																weight: "bold",
																className:
																	"cursor-pointer hover:text-white hover:bg-slate-800 rounded-full p-1 active:scale-80 transition-transform ease-in-out",
														  })
														: S.jsx(S8, {
																size: 28,
																weight: "bold",
																className:
																	"cursor-pointer bg-slate-500 text-white hover:text-white hover:bg-slate-800 rounded-full p-1 active:scale-80 transition-transform ease-in-out",
														  }),
												}),
											}),
										],
									}),
									S.jsx("div", {
										className: "mb-2 flex justify-end grow",
										children: S.jsx(lR, {
											gallerySectionConfig: a,
											overrideList: s,
											stateStoreProps: e,
											sectionIndex: i,
										}),
									}),
								],
							}),
							r != "sm" &&
								S.jsx("div", {
									className: `w-full flex justify-start gap-8${
										r === "lg" ? " flex-wrap" : ""
									}${r === "md" ? " overflow-x-auto" : ""}`,
									children: s.map((l, u) => {
										const c = a.selectedValue == l.value,
											d = r == "md" ? 100 : 150;
										return S.jsx(
											"div",
											{
												className: `rounded-lg cursor-pointer hover:bg-slate-100 hover:border-slate-500 border-2 border-inherit flex justify-center active:scale-90 transition-transform ease-in-out${
													c ? " bg-slate-200 hover:border-slate-500" : ""
												}`,
												onClick: () => {
													const f = ha(t);
													Rf(f, l.override),
														M8({
															faceConfig: f,
															faceIndex: u,
															sectionIndex: i,
															stateStoreProps: e,
															overrideList: s,
														});
												},
												children: S.jsx(T8, {
													faceConfig: t,
													overrides: l.override,
													width: d,
													lazyLoad: !0,
												}),
											},
											u,
										);
									}),
								}),
						],
					},
					i,
				);
			}),
		});
	},
	cR = () => {
		const e = zi(),
			{
				faceConfig: t,
				gallerySize: r,
				setGallerySize: n,
				gallerySectionConfigList: o,
				shuffleGenderSettingObject: a,
				shuffleRaceSettingObject: i,
				setShuffleGenderSettingObject: s,
				setShuffleRaceSettingObject: l,
			} = e,
			u = ["male", "female"],
			c = ["white", "black", "brown", "asian"],
			[d, f] = h.useState(!1),
			[p, g] = h.useState(!1);
		return S.jsxs("div", {
			className:
				"bg-slate-800 text-white flex justify-between w-full fixed z-50",
			children: [
				S.jsxs("div", {
					className: "flex text-xl p-2 justify-around items-center",
					children: [
						S.jsx("a", {
							href: "..",
							className:
								"hidden sm:inline cursor-pointer rounded-full p-1 m-0.5 hover:bg-slate-50 hover:text-slate-900 mr-3",
							children: S.jsx(b8, { weight: "fill", size: 24, href: "/" }),
						}),
						S.jsx("span", {
							className: "hidden md:inline mr-4",
							children: "faces.js editor",
						}),
						S.jsxs(l4, {
							children: [
								S.jsxs(Z4, {
									placement: "bottom",
									showArrow: !0,
									offset: 10,
									children: [
										S.jsx(W4, {
											children: S.jsx(xn, {
												className:
													"bg-slate-800 text-white border-2 border-r-0 border-white",
												title: "Randomization settings",
												children: S.jsx(C8, { size: 24 }),
											}),
										}),
										S.jsx(K4, {
											className: "",
											children: b =>
												S.jsxs("div", {
													className: "px-1 py-2 w-full",
													children: [
														S.jsx("p", {
															className:
																"text-medium font-bold text-foreground-500 mb-1",
															...b,
															children: "Randomization settings",
														}),
														S.jsxs("div", {
															className: "flex gap-4",
															children: [
																S.jsx(iv, {
																	label: "Gender",
																	isInvalid: d,
																	value: a,
																	style: { maxWidth: "120px" },
																	errorMessage: d
																		? "Defaults will be used if no option selected"
																		: null,
																	onValueChange: x => {
																		s(x), f(x.length < 1);
																	},
																	children: u.map(x =>
																		S.jsx(sv, { value: x, children: Iv(x) }),
																	),
																}),
																S.jsx(iv, {
																	label: "Race",
																	value: i,
																	isInvalid: p,
																	errorMessage: p
																		? "Select at least one"
																		: null,
																	onValueChange: x => {
																		l(x), g(x.length < 1);
																	},
																	children: c.map(x =>
																		S.jsx(sv, { value: x, children: Iv(x) }),
																	),
																}),
															],
														}),
													],
												}),
										}),
									],
								}),
								S.jsx(Hl, {
									content: "Randomize all unlocked features",
									delay: 500,
									children: S.jsx(xn, {
										className: "bg-slate-800 text-white border-2 border-white",
										onClick: () => qV(t, o, e),
										children: S.jsx(j0, { size: 24 }),
									}),
								}),
							],
						}),
					],
				}),
				S.jsx("div", {
					className: "flex items-center mr-2",
					children: S.jsxs(ZD, {
						"aria-label": "Options",
						selectedKey: r,
						onSelectionChange: n,
						children: [
							S.jsx(Zc, { title: S.jsx(w8, { size: 20 }) }, "sm"),
							S.jsx(Zc, { title: S.jsx($8, { size: 20 }) }, "md"),
							S.jsx(Zc, { title: S.jsx(E8, { size: 20 }) }, "lg"),
						],
					}),
				}),
			],
		});
	},
	_0 = (e, t) => {
		const r = URL.createObjectURL(e),
			n = document.createElement("a");
		(n.download = t), (n.href = r);
		const o = () => {
			setTimeout(() => {
				URL.revokeObjectURL(r), n.removeEventListener("click", o);
			}, 30 * 1e3);
		};
		n.addEventListener("click", o, !1), n.click();
	},
	dR = async e => {
		const t = document.createElement("canvas");
		(t.width = 400), (t.height = 600);
		const r = t.getContext("2d");
		if (!r) return;
		const n = e.children[0].cloneNode(!0);
		n.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
			n.setAttribute("width", `${t.width}`),
			n.setAttribute("height", `${t.height}`);
		const o = n.outerHTML,
			a = new Blob([o], { type: "image/svg+xml;charset=utf-8" }),
			i = URL.createObjectURL(a),
			s = new Image();
		(s.width = t.width),
			(s.height = t.height),
			s.addEventListener("load", function () {
				r.drawImage(this, 0, 0),
					URL.revokeObjectURL(i),
					t.toBlob(l => {
						l && _0(l, `facesjs-${F0()}.png`);
					});
			}),
			(s.src = i);
	},
	fR = e => {
		const t = new Blob([e.innerHTML], { type: "image/svg+xml" });
		_0(t, `facesjs-${F0()}.svg`);
	},
	pR = e => {
		const t = JSON.stringify(e, null, 2),
			r = new Blob([t], { type: "application/json" });
		_0(r, `facesjs-${F0()}.json`);
	},
	sy = async e => {
		await navigator.clipboard.writeText(e);
	},
	hR = ({ faceRef: e, modalDisclosure: t }) => {
		const { faceConfig: r } = zi(),
			{ onOpen: n } = t,
			o = [
				{
					groupName: "Copy",
					groupIcon: S.jsx(x8, { size: 24 }),
					baseAction: async () => {
						await sy(JSON.stringify(r));
					},
					items: [
						{
							key: "json",
							text: "Copy JSON",
							description: "Copy current face JSON",
						},
						{
							key: "link",
							text: "Copy Link",
							description: "Copy the link to the editor with this face loaded",
							action: async () => {
								await sy(window.location.href);
							},
						},
					],
				},
				{
					groupName: "Download",
					groupIcon: S.jsx(y8, { size: 24 }),
					baseAction: async () => {
						e.current && (await dR(e.current));
					},
					items: [
						{
							key: "png",
							text: "Download PNG",
							description: "Download face as a PNG file",
						},
						{
							key: "svg",
							text: "Download SVG",
							description: "Download face as an SVG file",
							action: async () => {
								e.current && (await fR(e.current));
							},
						},
						{
							key: "json",
							text: "Download JSON",
							description: "Download face as a JSON file",
							action: async () => {
								await pR(r);
							},
						},
					],
				},
				{
					groupName: "Upload",
					groupIcon: S.jsx(k8, { size: 24 }),
					baseAction: n,
				},
			];
		return S.jsx("div", {
			className:
				"flex gap-4 flex-wrap justify-center border-t-5 border-slate-800  bg-slate-800 text-white",
			children: o.map(a =>
				a.items
					? S.jsxs(
							l4,
							{
								children: [
									S.jsx(xn, {
										isIconOnly: !0,
										onClick: a.baseAction,
										className:
											"bg-slate-800 text-white border-2 border-white min-w-0",
										title: a.groupName,
										children: a.groupIcon,
									}),
									S.jsxs(kD, {
										placement: "bottom-end",
										children: [
											S.jsx(CD, {
												children: S.jsx(xn, {
													isIconOnly: !0,
													className:
														"bg-slate-800 text-white border-2 border-l-0 border-white",
													children: S.jsx(v8, { size: 24 }),
												}),
											}),
											S.jsx($D, {
												disallowEmptySelection: !0,
												className: "max-w-[300px]",
												children: a.items.map(i =>
													S.jsx(
														PD,
														{
															description: i.description,
															onClick: i.action ?? a.baseAction,
															children: i.text,
														},
														i.key,
													),
												),
											}),
										],
									}),
								],
							},
							`button-group-${a.groupName}`,
					  )
					: S.jsx(
							xn,
							{
								isIconOnly: !0,
								onPress: a.baseAction,
								className: "bg-slate-800 text-white border-2 border-white",
								title: a.groupName,
								children: a.groupIcon,
							},
							`button-${a.groupName}`,
					  ),
			),
		});
	},
	mR = ({ modalDisclosure: e }) => {
		const { faceConfig: t } = zi(),
			r = h.useRef(null);
		return S.jsxs("div", {
			className: "border-5 border-slate-800 rounded-lg shadow-medium",
			children: [
				S.jsx(T8, { faceConfig: t, maxWidth: 400, ref: r }),
				S.jsx(hR, { modalDisclosure: e, faceRef: r }),
			],
		});
	},
	gR = ({ modalDisclosure: e }) => {
		const { setFaceStore: t, faceConfig: r } = zi(),
			{ isOpen: n, onOpenChange: o } = e,
			[a, i] = h.useState(() => JSON.stringify(r)),
			[s, l] = h.useState(() => Yc(JSON.stringify(r)));
		return S.jsx(FD, {
			shadow: "md",
			size: "xl",
			isOpen: n,
			onOpenChange: o,
			children: S.jsx(DD, {
				children: u =>
					S.jsxs(S.Fragment, {
						children: [
							S.jsx(VD, { children: "JSON face object" }),
							S.jsx(MD, {
								children: S.jsx(EA, {
									value: a,
									isInvalid: !s,
									description: s ? S.jsx("div", { className: "h-4" }) : null,
									errorMessage: s ? null : "Invalid JSON",
									onChange: c => {
										i(c.target.value);
										const d = Yc(c.target.value);
										l(d);
									},
									size: "lg",
									className: "min-h-90",
								}),
							}),
							S.jsxs(ID, {
								children: [
									S.jsx(xn, {
										onClick: o,
										size: "md",
										color: "danger",
										children: "Close",
									}),
									S.jsx(xn, {
										onClick: () => {
											const c = Yc(a);
											if ((l(c), c)) {
												const d = ha(r),
													f = JSON.parse(a);
												Rf(d, f), t(d), i(JSON.stringify(d)), o();
											}
										},
										size: "md",
										color: "primary",
										isDisabled: !s,
										children: "Draw",
									}),
								],
							}),
						],
					}),
			}),
		});
	},
	ly = () =>
		S.jsx(A7, {
			className: "text-slate-700",
			children: S.jsx(T7, {
				children: S.jsxs("p", {
					children: [
						"faces.js is an",
						" ",
						S.jsx(lv, {
							href: "https://github.com/zengm-games/facesjs/",
							children: "open source library",
						}),
						" ",
						"originally made for sports simulation games by",
						" ",
						S.jsx(lv, { href: "https://zengm.com/", children: "ZenGM" }),
					],
				}),
			}),
		}),
	vR = () => {
		const e = OD();
		return S.jsxs(B$, {
			children: [
				S.jsx(cR, {}),
				S.jsxs("div", {
					className:
						"flex flex-col-reverse md:flex-row items-center md:items-start pt-16 gap-2 mx-2",
					children: [
						S.jsx(uR, {}),
						S.jsxs("div", {
							className:
								"md:sticky md:top-16 flex-shrink-0 w-[280px] lg:w-[350px] xl:w-[400px] flex flex-col h-full",
							children: [
								S.jsx(mR, { modalDisclosure: e }),
								S.jsx("div", {
									className: "hidden md:block mt-6",
									children: S.jsx(ly, {}),
								}),
							],
						}),
					],
				}),
				S.jsx(gR, { modalDisclosure: e }),
				S.jsx("div", {
					className: "md:hidden mb-2 mx-2",
					children: S.jsx(ly, {}),
				}),
			],
		});
	};
Xc.createRoot(document.getElementById("root")).render(S.jsx(vR, {}));
