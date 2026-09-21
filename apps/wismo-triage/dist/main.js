// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var a;
var s;
var h;
var p;
var v;
var y;
var d = {};
var w = [];
var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var g = Array.isArray;
function m(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function b(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function k(l2, u2, t2) {
  var i2, r2, o2, e2 = {};
  for (o2 in u2)
    o2 == "key" ? i2 = u2[o2] : o2 == "ref" ? r2 = u2[o2] : e2[o2] = u2[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), typeof l2 == "function" && l2.defaultProps != null)
    for (o2 in l2.defaultProps)
      e2[o2] === undefined && (e2[o2] = l2.defaultProps[o2]);
  return x(l2, e2, i2, r2, null);
}
function x(n2, t2, i2, r2, o2) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: o2 == null ? ++u : o2, __i: -1, __u: 0 };
  return o2 == null && l.vnode != null && l.vnode(e2), e2;
}
function S(n2) {
  return n2.children;
}
function C(n2, l2) {
  this.props = n2, this.context = l2;
}
function $(n2, l2) {
  if (l2 == null)
    return n2.__ ? $(n2.__, n2.__i + 1) : null;
  for (var u2;l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? $(n2) : null;
}
function I(n2) {
  if (n2.__P && n2.__d) {
    var u2 = n2.__v, t2 = u2.__e, i2 = [], r2 = [], o2 = m({}, u2);
    o2.__v = u2.__v + 1, l.vnode && l.vnode(o2), q(n2.__P, o2, u2, n2.__n, n2.__P.namespaceURI, 32 & u2.__u ? [t2] : null, i2, t2 == null ? $(u2) : t2, !!(32 & u2.__u), r2), o2.__v = u2.__v, o2.__.__k[o2.__i] = o2, D(i2, o2, r2), u2.__e = u2.__ = null, o2.__e != t2 && P(o2);
  }
}
function P(n2) {
  if ((n2 = n2.__) != null && n2.__c != null)
    return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
      if (l2 != null && l2.__e != null)
        return n2.__e = n2.__c.base = l2.__e;
    }), P(n2);
}
function A(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
}
function H() {
  try {
    for (var n2, l2 = 1;i.length; )
      i.length > l2 && i.sort(e), n2 = i.shift(), l2 = i.length, I(n2);
  } finally {
    i.length = H.__r = 0;
  }
}
function L(n2, l2, u2, t2, i2, r2, o2, e2, f2, c2, a2) {
  var s2, h2, p2, v2, y2, _2, g2 = t2 && t2.__k || w, m2 = l2.length;
  for (f2 = T(u2, l2, g2, f2, m2), s2 = 0;s2 < m2; s2++)
    (p2 = u2.__k[s2]) != null && (h2 = p2.__i != -1 && g2[p2.__i] || d, p2.__i = s2, _2 = q(n2, p2, h2, i2, r2, o2, e2, f2, c2, a2), v2 = p2.__e, p2.ref && h2.ref != p2.ref && (h2.ref && J(h2.ref, null, p2), a2.push(p2.ref, p2.__c || v2, p2)), y2 == null && v2 != null && (y2 = v2), 4 & p2.__u ? (f2 = j(p2, f2, n2), h2.__e && (h2.__e = null)) : typeof p2.type == "function" && _2 !== undefined ? f2 = _2 : v2 && (f2 = v2.nextSibling), p2.__u &= -7);
  return u2.__e = y2, f2;
}
function T(n2, l2, u2, t2, i2) {
  var r2, o2, e2, f2, c2, a2 = u2.length, s2 = a2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0;r2 < i2; r2++)
    (o2 = l2[r2]) != null && typeof o2 != "boolean" && typeof o2 != "function" ? (typeof o2 == "string" || typeof o2 == "number" || typeof o2 == "bigint" || o2.constructor == String ? o2 = n2.__k[r2] = x(null, o2, null, null, null) : g(o2) ? o2 = n2.__k[r2] = x(S, { children: o2 }, null, null, null) : o2.constructor === undefined && o2.__b > 0 ? o2 = n2.__k[r2] = x(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f2 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, (c2 = o2.__i = O(o2, u2, f2, s2)) != -1 && (s2--, (e2 = u2[c2]) && (e2.__u |= 2)), e2 == null || e2.__v == null ? (c2 == -1 && (i2 > a2 ? h2-- : i2 < a2 && h2++), typeof o2.type != "function" && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (s2)
    for (r2 = 0;r2 < a2; r2++)
      (e2 = u2[r2]) != null && (2 & e2.__u) == 0 && (e2.__e == t2 && (t2 = $(e2)), K(e2, e2));
  return t2;
}
function j(n2, l2, u2) {
  var t2, i2;
  if (typeof n2.type == "function") {
    for (t2 = n2.__k, i2 = 0;t2 && i2 < t2.length; i2++)
      t2[i2] && (t2[i2].__ = n2, l2 = j(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !l2.parentNode && (l2 = $(n2)), l2 = u2.insertBefore(n2.__e, l2 || null));
  do {
    l2 = l2 && l2.nextSibling;
  } while (l2 != null && l2.nodeType == 8);
  return l2;
}
function O(n2, l2, u2, t2) {
  var i2, r2, o2, e2 = n2.key, f2 = n2.type, c2 = l2[u2], a2 = c2 != null && (2 & c2.__u) == 0;
  if (c2 === null && e2 == null || a2 && e2 == c2.key && f2 == c2.type)
    return u2;
  if (t2 > (a2 ? 1 : 0)) {
    for (i2 = u2 - 1, r2 = u2 + 1;i2 >= 0 || r2 < l2.length; )
      if ((c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) != null && (2 & c2.__u) == 0 && e2 == c2.key && f2 == c2.type)
        return o2;
  }
  return -1;
}
function z(n2, l2, u2) {
  l2[0] == "-" ? n2.setProperty(l2, u2 == null ? "" : u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || _.test(l2) ? u2 : u2 + "px";
}
function N(n2, l2, u2, t2, i2) {
  var r2, o2;
  n:
    if (l2 == "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof t2 == "string" && (n2.style.cssText = t2 = ""), t2)
          for (l2 in t2)
            u2 && l2 in u2 || z(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            t2 && u2[l2] == t2[l2] || z(n2.style, l2, u2[l2]);
      }
    else if (l2[0] == "o" && l2[1] == "n")
      r2 = l2 != (l2 = l2.replace(s, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || l2 == "onFocusOut" || l2 == "onFocusIn" ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2[a] = t2[a] : (u2[a] = h, n2.addEventListener(l2, r2 ? v : p, r2)) : n2.removeEventListener(l2, r2 ? v : p, r2);
    else {
      if (i2 == "http://www.w3.org/2000/svg")
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 != "width" && l2 != "height" && l2 != "href" && l2 != "list" && l2 != "form" && l2 != "tabIndex" && l2 != "download" && l2 != "rowSpan" && l2 != "colSpan" && l2 != "role" && l2 != "popover" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {}
      typeof u2 == "function" || (u2 == null || u2 === false && l2[4] != "-" ? n2.removeAttribute(l2) : n2.setAttribute(l2, l2 == "popover" && u2 == 1 ? "" : u2));
    }
}
function V(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (u2[c] == null)
        u2[c] = h++;
      else if (u2[c] < t2[a])
        return;
      return t2(l.event ? l.event(u2) : u2);
    }
  };
}
function q(n2, u2, t2, i2, r2, o2, e2, f2, c2, a2) {
  var s2, h2, p2, v2, y2, d2, _2, k2, x2, M, I2, P2, A2, H2, T2, j2, F = u2.type;
  if (u2.constructor !== undefined)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f2 = u2.__e = t2.__e]), (s2 = l.__b) && s2(u2);
  n:
    if (typeof F == "function") {
      h2 = e2.length;
      try {
        if (x2 = u2.props, M = F.prototype && F.prototype.render, I2 = (s2 = F.contextType) && i2[s2.__c], P2 = s2 ? I2 ? I2.props.value : s2.__ : i2, t2.__c ? k2 = (p2 = u2.__c = t2.__c).__ = p2.__E : (M ? u2.__c = p2 = new F(x2, P2) : (u2.__c = p2 = new C(x2, P2), p2.constructor = F, p2.render = Q), I2 && I2.sub(p2), p2.state || (p2.state = {}), p2.__n = i2, v2 = p2.__d = true, p2.__h = [], p2._sb = []), M && p2.__s == null && (p2.__s = p2.state), M && F.getDerivedStateFromProps != null && (p2.__s == p2.state && (p2.__s = m({}, p2.__s)), m(p2.__s, F.getDerivedStateFromProps(x2, p2.__s))), y2 = p2.props, d2 = p2.state, p2.__v = u2, v2)
          M && F.getDerivedStateFromProps == null && p2.componentWillMount != null && p2.componentWillMount(), M && p2.componentDidMount != null && p2.__h.push(p2.componentDidMount);
        else {
          if (M && F.getDerivedStateFromProps == null && x2 !== y2 && p2.componentWillReceiveProps != null && p2.componentWillReceiveProps(x2, P2), u2.__v == t2.__v || !p2.__e && p2.shouldComponentUpdate != null && p2.shouldComponentUpdate(x2, p2.__s, P2) === false) {
            u2.__v != t2.__v && (p2.props = x2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
              n3 && (n3.__ = u2);
            }), w.push.apply(p2.__h, p2._sb), p2._sb = [], p2.__h.length && e2.push(p2), f2 = $(t2);
            break n;
          }
          p2.componentWillUpdate != null && p2.componentWillUpdate(x2, p2.__s, P2), M && p2.componentDidUpdate != null && p2.__h.push(function() {
            p2.componentDidUpdate(y2, d2, _2);
          });
        }
        if (p2.context = P2, p2.props = x2, p2.__P = n2, p2.__e = false, A2 = l.__r, H2 = 0, M)
          p2.state = p2.__s, p2.__d = false, A2 && A2(u2), s2 = p2.render(p2.props, p2.state, p2.context), w.push.apply(p2.__h, p2._sb), p2._sb = [];
        else
          do {
            p2.__d = false, A2 && A2(u2), s2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++H2 < 25);
        p2.state = p2.__s, p2.getChildContext != null && (i2 = m(m({}, i2), p2.getChildContext())), M && !v2 && p2.getSnapshotBeforeUpdate != null && (_2 = p2.getSnapshotBeforeUpdate(y2, d2)), T2 = s2 != null && s2.type === S && s2.key == null ? E(s2.props.children) : s2, f2 = L(n2, g(T2) ? T2 : [T2], u2, t2, i2, r2, o2, e2, f2, c2, a2), p2.base = u2.__e, u2.__u &= -161, p2.__h.length && e2.push(p2), k2 && (p2.__E = p2.__ = null);
      } catch (n3) {
        if (e2.length = h2, u2.__v = null, c2 || o2 != null) {
          if (n3.then) {
            for (u2.__u |= c2 ? 160 : 128;f2 && f2.nodeType == 8 && f2.nextSibling; )
              f2 = f2.nextSibling;
            o2 != null && (o2[o2.indexOf(f2)] = null), u2.__e = f2;
          } else if (o2 != null)
            for (j2 = o2.length;j2--; )
              b(o2[j2]);
        } else
          u2.__e = t2.__e;
        u2.__k == null && (u2.__k = t2.__k || []), n3.then || B(u2), l.__e(n3, u2, t2);
      }
    } else
      o2 == null && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = G(t2.__e, u2, t2, i2, r2, o2, e2, c2, a2);
  return (s2 = l.diffed) && s2(u2), 128 & u2.__u ? undefined : f2;
}
function B(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
}
function D(n2, u2, t2) {
  for (var i2 = 0;i2 < t2.length; i2++)
    J(t2[i2], t2[++i2], t2[++i2]);
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function E(n2) {
  return typeof n2 != "object" || n2 == null || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : n2.constructor !== undefined ? null : m({}, n2);
}
function G(u2, t2, i2, r2, o2, e2, f2, c2, a2) {
  var s2, h2, p2, v2, y2, w2, _2, m2 = i2.props || d, k2 = t2.props, x2 = t2.type;
  if (x2 == "svg" ? o2 = "http://www.w3.org/2000/svg" : x2 == "math" ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), e2 != null) {
    for (s2 = 0;s2 < e2.length; s2++)
      if ((y2 = e2[s2]) && "setAttribute" in y2 == !!x2 && (x2 ? y2.localName == x2 : y2.nodeType == 3)) {
        u2 = y2, e2[s2] = null;
        break;
      }
  }
  if (u2 == null) {
    if (x2 == null)
      return document.createTextNode(k2);
    u2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
  }
  if (x2 == null)
    m2 === k2 || c2 && u2.data == k2 || (u2.data = k2);
  else {
    if (e2 = x2 == "textarea" && k2.defaultValue != null ? null : e2 && n.call(u2.childNodes), !c2 && e2 != null)
      for (m2 = {}, s2 = 0;s2 < u2.attributes.length; s2++)
        m2[(y2 = u2.attributes[s2]).name] = y2.value;
    for (s2 in m2)
      y2 = m2[s2], s2 == "dangerouslySetInnerHTML" ? p2 = y2 : s2 == "children" || (s2 in k2) || s2 == "value" && ("defaultValue" in k2) || s2 == "checked" && ("defaultChecked" in k2) || N(u2, s2, null, y2, o2);
    for (s2 in k2)
      y2 = k2[s2], s2 == "children" ? v2 = y2 : s2 == "dangerouslySetInnerHTML" ? h2 = y2 : s2 == "value" ? w2 = y2 : s2 == "checked" ? _2 = y2 : c2 && typeof y2 != "function" || m2[s2] === y2 || N(u2, s2, y2, m2[s2], o2);
    if (h2)
      c2 || p2 && (h2.__html == p2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
    else if (p2 && (u2.innerHTML = ""), L(t2.type == "template" ? u2.content : u2, g(v2) ? v2 : [v2], t2, i2, r2, x2 == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && $(i2, 0), c2, a2), e2 != null)
      for (s2 = e2.length;s2--; )
        b(e2[s2]);
    c2 && x2 != "textarea" || (s2 = "value", x2 == "progress" && w2 == null ? u2.removeAttribute("value") : w2 != null && (w2 !== u2[s2] || x2 == "progress" && !w2 || x2 == "option" && w2 != m2[s2]) && N(u2, s2, w2, m2[s2], o2), s2 = "checked", _2 != null && _2 != u2[s2] && N(u2, s2, _2, m2[s2], o2));
  }
  return u2;
}
function J(n2, u2, t2) {
  try {
    if (typeof n2 == "function") {
      var i2 = typeof n2.__u == "function";
      i2 && n2.__u(), i2 && u2 == null || (n2.__u = n2(u2));
    } else
      n2.current = u2;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function K(n2, u2, t2) {
  var i2, r2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || J(i2, null, u2)), (i2 = n2.__c) != null) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
    i2.base = i2.__P = i2.__n = null;
  }
  if (i2 = n2.__k)
    for (r2 = 0;r2 < i2.length; r2++)
      i2[r2] && K(i2[r2], u2, t2 || typeof n2.type != "function");
  t2 || b(n2.__e), n2.__c = n2.__ = n2.__e = undefined;
}
function Q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function R(u2, t2, i2) {
  var r2, o2, e2, f2;
  t2 == document && (t2 = document.documentElement), l.__ && l.__(u2, t2), o2 = (r2 = typeof i2 == "function") ? null : i2 && i2.__k || t2.__k, e2 = [], f2 = [], q(t2, u2 = (!r2 && i2 || t2).__k = k(S, null, [u2]), o2 || d, d, t2.namespaceURI, !r2 && i2 ? [i2] : o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !r2 && i2 ? i2 : o2 ? o2.__e : t2.firstChild, r2, f2), D(e2, u2, f2), u2.props.children = null;
}
n = w.slice, l = { __e: function(n2, l2, u2, t2) {
  for (var i2, r2, o2;l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((r2 = i2.constructor) && r2.getDerivedStateFromError != null && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), i2.componentDidCatch != null && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return n2 != null && n2.constructor === undefined;
}, C.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s != this.state ? this.__s : this.__s = m({}, this.state), typeof n2 == "function" && (n2 = n2(m({}, u2), this.props)), n2 && m(u2, n2), n2 != null && this.__v && (l2 && this._sb.push(l2), A(this));
}, C.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
}, C.prototype.render = S, i = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, a = "__a" + f, s = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var p2 = c2.__;
function s2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
}
function d2(n2) {
  return o2 = 1, y2(D2, n2);
}
function y2(n2, u3, i3) {
  var o3 = s2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(undefined, u3), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.__f)) {
    var f3 = function(n3, t3, r3) {
      if (!o3.__c.__H)
        return true;
      var u4 = false, i4 = o3.__c.props !== n3;
      if (o3.__c.__H.__.some(function(n4) {
        if (n4.__N) {
          u4 = true;
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = undefined, t4 !== n4.__[0] && (i4 = true);
        }
      }), c3) {
        var f4 = c3.call(this, n3, t3, r3);
        return u4 ? f4 || i4 : f4;
      }
      return !u4 || i4;
    };
    r2.__f = true;
    var { shouldComponentUpdate: c3, componentWillUpdate: e3 } = r2;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u4 = c3;
        c3 = undefined, f3(n3, t3, r3), c3 = u4;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function j2() {
  for (var n2;n2 = f2.shift(); ) {
    var t3 = n2.__H;
    if (n2.__P && t3)
      try {
        t3.__h.some(z2), t3.__h.some(B2), t3.__h = [];
      } catch (r3) {
        t3.__h = [], c2.__e(r3, n2.__v);
      }
  }
}
c2.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, c2.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), p2 && p2(n2, t3);
}, c2.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.some(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = undefined;
  })) : (i3.__h.some(z2), i3.__h.some(B2), i3.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (f2.push(t3) !== 1 && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.some(function(n3) {
    n3.u && (n3.__H = n3.u, n3.u = undefined);
  })), u2 = r2 = null;
}, c2.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.some(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r3) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c2.__e(r3, n3.__v);
    }
  }), l2 && l2(n2, t3);
}, c2.unmount = function(n2) {
  m2 && m2(n2);
  var t3, r3 = n2.__c;
  r3 && r3.__H && (r3.__H.__.some(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r3.__H = undefined, t3 && c2.__e(t3, r3.__v));
};
var k2 = typeof requestAnimationFrame == "function";
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 35);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u3 = n2.__c;
  typeof u3 == "function" && (n2.__c = undefined, u3()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function D2(n2, t3) {
  return typeof t3 == "function" ? t3(n2) : t3;
}
// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f3 = 0;
function u3(e3, t3, n2, o3, i3, u4) {
  t3 || (t3 = {});
  var a3, c3, p3 = t3;
  if ("ref" in p3)
    for (c3 in p3 = {}, t3)
      c3 == "ref" ? a3 = t3[c3] : p3[c3] = t3[c3];
  var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: --f3, __i: -1, __u: 0, __source: i3, __self: u4 };
  if (typeof e3 == "function" && (a3 = e3.defaultProps))
    for (c3 in a3)
      p3[c3] === undefined && (p3[c3] = a3[c3]);
  return l.vnode && l.vnode(l3), l3;
}

// apps/wismo-triage/src/components/App.tsx
var DEMO_TICKETS = [
  {
    id: "t-1",
    orderNumber: "#18492",
    customerName: "Sarah Jenkins",
    customerEmail: "sarah.j@example.com",
    receivedAt: "12m ago",
    rawMessage: "Hi, I ordered the Merino Ribbed Cardigan on Sunday (#18492) and haven't had any tracking updates since Tuesday. Can you let me know if it's lost?",
    carrier: "UPS",
    trackingNumber: "1Z9999999999999999",
    status: "out_for_delivery",
    statusText: "Out for Delivery Today",
    lastCheckpoint: "Loaded on Local Delivery Vehicle (Brooklyn, NY Hub)",
    checkpointTime: "Today at 7:14 AM",
    estimatedDelivery: "Today by 4:30 PM",
    draftSubject: "Update on order #18492: Out for delivery today",
    draftBody: `Hi Sarah,

Great news! Your Merino Ribbed Cardigan (order #18492) is loaded on the local UPS delivery vehicle and scheduled to arrive today by 4:30 PM.

You can follow the truck live right here: https://www.ups.com/track?tracknum=1Z9999999999999999

If you have any questions once it arrives, don't hesitate to reply!

Best,
Elena from Customer Care`,
    approved: false
  },
  {
    id: "t-2",
    orderNumber: "#18471",
    customerName: "Devon Miller",
    customerEmail: "dmiller92@example.com",
    receivedAt: "45m ago",
    rawMessage: "My package tracking has been frozen in Memphis for 3 days. Order #18471. Where is it?",
    carrier: "FedEx",
    trackingNumber: "782910481920",
    status: "delayed",
    statusText: "Weather Delay / Re-routed",
    lastCheckpoint: "Severe Weather Sorting Delay: Memphis, TN Hub",
    checkpointTime: "Yesterday at 11:42 PM",
    estimatedDelivery: "Friday by 8:00 PM (Revised)",
    draftSubject: "Shipping update on order #18471",
    draftBody: `Hi Devon,

Thanks for reaching out! We tracked order #18471 with FedEx. The package ran into a weather delay at the Memphis sorting hub yesterday, but it is back in transit now with an updated delivery date of Friday by 8:00 PM.

Live tracking link: https://www.fedex.com/fedextrack/?trknbr=782910481920

We are actively monitoring this tracking ID. If it does not show delivery progress by Friday morning, reply directly here and we will dispatch a replacement immediately.

Warmly,
Elena from Customer Care`,
    approved: false
  },
  {
    id: "t-3",
    orderNumber: "#18455",
    customerName: "Claire Bennett",
    customerEmail: "c.bennett@example.com",
    receivedAt: "2h ago",
    rawMessage: "Tracking says delivered at front porch 20 mins ago, but my porch is empty and I was home the whole time! Help!",
    carrier: "USPS",
    trackingNumber: "9400111899562839182310",
    status: "delivered_dispute",
    statusText: "Delivered Scan Discrepancy",
    lastCheckpoint: "Delivered, Front Door/Porch: Austin, TX",
    checkpointTime: "Today at 2:05 PM",
    estimatedDelivery: "Delivered (GPS Verified Doorstep)",
    draftSubject: "Looking into your delivery for order #18455",
    draftBody: `Hi Claire,

I am so sorry to hear the package was not there! USPS recorded the scan at 2:05 PM today. Carriers sometimes scan packages just before dropping them off, or leave them with apartment reception or behind side gates.

Could you take a quick look around building entryways or with immediate neighbors? If it does not turn up by tomorrow morning, just reply to this email and we will immediately ship a replacement order at no charge.

Best,
Elena from Customer Care`,
    approved: false
  }
];
function App() {
  const [tickets, setTickets] = d2(DEMO_TICKETS);
  const [selectedTicketId, setSelectedTicketId] = d2("t-1");
  const [activeTab, setActiveTab] = d2("queue");
  const [autoDraftDelayHours, setAutoDraftDelayHours] = d2(48);
  const [showToast, setShowToast] = d2(null);
  const selectedTicket = tickets.find((t3) => t3.id === selectedTicketId) || tickets[0];
  const pendingCount = tickets.filter((t3) => !t3.approved).length;
  const handleApprove = (id) => {
    setTickets((prev) => prev.map((t3) => t3.id === id ? { ...t3, approved: true } : t3));
    setShowToast(`Approved response draft for order ${selectedTicket.orderNumber}`);
    setTimeout(() => setShowToast(null), 3000);
  };
  const handleEditBody = (text) => {
    setTickets((prev) => prev.map((t3) => t3.id === selectedTicket.id ? { ...t3, draftBody: text } : t3));
  };
  return /* @__PURE__ */ u3("div", {
    style: { maxWidth: "860px", margin: "40px auto", padding: "0 20px" },
    children: [
      showToast && /* @__PURE__ */ u3("div", {
        style: {
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: "#1a1a1a",
          color: "#FFFFFF",
          padding: "12px 20px",
          borderRadius: "999px",
          fontSize: "13px",
          fontWeight: 500,
          boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
          zIndex: 100
        },
        children: [
          "✓ ",
          showToast
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ u3("div", {
        style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" },
        children: [
          /* @__PURE__ */ u3("div", {
            style: { display: "flex", alignItems: "center", gap: "12px" },
            children: [
              /* @__PURE__ */ u3("span", {
                style: { fontSize: "28px" },
                children: "\uD83D\uDCE6"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ u3("div", {
                children: [
                  /* @__PURE__ */ u3("h1", {
                    style: { fontFamily: "var(--font-serif)", fontSize: "26px", margin: 0, fontWeight: 400 },
                    children: "Order Support Triage Queue"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u3("p", {
                    style: { margin: "2px 0 0", fontSize: "13px", color: "var(--color-secondary)" },
                    children: "Real-time carrier tracking lookups & human-in-the-loop email drafts"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ u3("div", {
            style: { display: "flex", gap: "10px" },
            children: /* @__PURE__ */ u3("button", {
              onClick: () => setActiveTab(activeTab === "queue" ? "settings" : "queue"),
              style: {
                background: "#FFFFFF",
                border: "1px solid var(--color-border-card)",
                padding: "8px 14px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--color-ink)"
              },
              children: activeTab === "queue" ? "⚙️ Fulfillment Rules" : "← Back to Queue"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      activeTab === "settings" ? /* @__PURE__ */ u3("div", {
        style: { background: "#FFFFFF", border: "1.5px solid var(--color-border-card)", borderRadius: "20px", padding: "28px", boxShadow: "var(--shadow-card)" },
        children: [
          /* @__PURE__ */ u3("h2", {
            style: { fontSize: "18px", margin: "0 0 16px", fontWeight: 600 },
            children: "Fulfillment & Triage Settings"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ u3("div", {
            style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" },
            children: [
              /* @__PURE__ */ u3("div", {
                children: [
                  /* @__PURE__ */ u3("label", {
                    style: { display: "block", fontSize: "12px", color: "var(--color-secondary)", marginBottom: "6px" },
                    children: "Carrier Stalled Threshold (Hours without scan)"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u3("input", {
                    type: "number",
                    value: autoDraftDelayHours,
                    onInput: (e3) => setAutoDraftDelayHours(Number(e3.target.value)),
                    style: { width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #D1D5DB", fontSize: "14px" }
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u3("span", {
                    style: { fontSize: "11px", color: "#9CA3AF" },
                    children: "Triggers proactive delay reassurance tone."
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u3("div", {
                children: [
                  /* @__PURE__ */ u3("label", {
                    style: { display: "block", fontSize: "12px", color: "var(--color-secondary)", marginBottom: "6px" },
                    children: "Shopify Support Email"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u3("input", {
                    type: "email",
                    value: "support@yourbrand.com",
                    readOnly: true,
                    style: { width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #D1D5DB", fontSize: "14px", background: "#F9FAFB" }
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u3("span", {
                    style: { fontSize: "11px", color: "#9CA3AF" },
                    children: "Connected via standard IMAP or Gmail draft proxy."
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ u3("div", {
        style: { display: "grid", gridTemplateColumns: "320px 1fr", gap: "20px" },
        children: [
          /* @__PURE__ */ u3("div", {
            style: { display: "flex", flexDirection: "column", gap: "10px" },
            children: [
              /* @__PURE__ */ u3("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px" },
                children: /* @__PURE__ */ u3("span", {
                  style: { fontSize: "12px", fontWeight: 700, color: "var(--color-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" },
                  children: [
                    "Inbound Inquiries (",
                    pendingCount,
                    " Pending)"
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this),
              tickets.map((ticket) => {
                const isSelected = ticket.id === selectedTicket.id;
                let badgeColor = "#2563EB";
                let badgeBg = "#EFF6FF";
                if (ticket.status === "delayed") {
                  badgeColor = "#D97706";
                  badgeBg = "#FEF3C7";
                } else if (ticket.status === "delivered_dispute") {
                  badgeColor = "#DC2626";
                  badgeBg = "#FEE2E2";
                } else if (ticket.status === "out_for_delivery") {
                  badgeColor = "#16A34A";
                  badgeBg = "#DCFCE7";
                }
                return /* @__PURE__ */ u3("div", {
                  onClick: () => setSelectedTicketId(ticket.id),
                  style: {
                    background: isSelected ? "#FFFFFF" : "#FBFBFA",
                    border: isSelected ? "1.5px solid var(--color-ink)" : "1px solid var(--color-border)",
                    borderRadius: "14px",
                    padding: "14px 16px",
                    cursor: "pointer",
                    boxShadow: isSelected ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
                    transition: "all 0.15s ease"
                  },
                  children: [
                    /* @__PURE__ */ u3("div", {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" },
                      children: [
                        /* @__PURE__ */ u3("span", {
                          style: { fontWeight: 600, fontSize: "14px", color: "#1a1a1a" },
                          children: ticket.orderNumber
                        }, undefined, false, undefined, this),
                        /* @__PURE__ */ u3("span", {
                          style: { fontSize: "11px", color: "#9CA3AF" },
                          children: ticket.receivedAt
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ u3("div", {
                      style: { fontSize: "13px", fontWeight: 500, color: "#374151", marginBottom: "4px" },
                      children: ticket.customerName
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ u3("div", {
                      style: {
                        fontSize: "12px",
                        color: "var(--color-secondary)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        marginBottom: "10px"
                      },
                      children: [
                        '"',
                        ticket.rawMessage,
                        '"'
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ u3("div", {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
                      children: [
                        /* @__PURE__ */ u3("span", {
                          style: {
                            fontSize: "10px",
                            fontWeight: 600,
                            color: badgeColor,
                            background: badgeBg,
                            padding: "3px 8px",
                            borderRadius: "6px"
                          },
                          children: [
                            ticket.carrier,
                            " • ",
                            ticket.statusText
                          ]
                        }, undefined, true, undefined, this),
                        ticket.approved && /* @__PURE__ */ u3("span", {
                          style: { fontSize: "11px", color: "#16A34A", fontWeight: 600 },
                          children: "✓ Approved"
                        }, undefined, false, undefined, this)
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, ticket.id, true, undefined, this);
              })
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ u3("div", {
            style: { background: "#FFFFFF", border: "1.5px solid var(--color-border-card)", borderRadius: "20px", padding: "26px", boxShadow: "var(--shadow-card)" },
            children: [
              /* @__PURE__ */ u3("div", {
                style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "16px", borderBottom: "1px solid #F0EFEA" },
                children: [
                  /* @__PURE__ */ u3("div", {
                    children: [
                      /* @__PURE__ */ u3("div", {
                        style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" },
                        children: [
                          /* @__PURE__ */ u3("h2", {
                            style: { fontFamily: "var(--font-serif)", fontSize: "24px", margin: 0, fontWeight: 400 },
                            children: selectedTicket.orderNumber
                          }, undefined, false, undefined, this),
                          /* @__PURE__ */ u3("span", {
                            style: { fontSize: "12px", padding: "3px 10px", borderRadius: "999px", background: "#F3F4F6", color: "#4B5563", fontWeight: 500 },
                            children: [
                              selectedTicket.carrier,
                              " #",
                              selectedTicket.trackingNumber
                            ]
                          }, undefined, true, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ u3("div", {
                        style: { fontSize: "13px", color: "var(--color-secondary)" },
                        children: [
                          selectedTicket.customerName,
                          " (",
                          selectedTicket.customerEmail,
                          ")"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ u3("span", {
                    style: {
                      fontSize: "12px",
                      fontWeight: 600,
                      color: selectedTicket.status === "delayed" ? "#D97706" : selectedTicket.status === "out_for_delivery" ? "#16A34A" : "#2563EB",
                      background: selectedTicket.status === "delayed" ? "#FEF3C7" : selectedTicket.status === "out_for_delivery" ? "#DCFCE7" : "#EFF6FF",
                      padding: "4px 10px",
                      borderRadius: "999px"
                    },
                    children: selectedTicket.statusText
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u3("div", {
                style: { marginTop: "18px", marginBottom: "18px" },
                children: [
                  /* @__PURE__ */ u3("span", {
                    style: { fontSize: "11px", fontWeight: 700, color: "var(--color-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" },
                    children: "Inbound Message"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u3("div", {
                    style: {
                      marginTop: "6px",
                      background: "#FBFBFA",
                      border: "1px solid #ECEAE5",
                      borderRadius: "12px",
                      padding: "14px 16px",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      fontStyle: "italic",
                      color: "#374151"
                    },
                    children: [
                      '"',
                      selectedTicket.rawMessage,
                      '"'
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u3("div", {
                style: { background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "16px", marginBottom: "20px" },
                children: [
                  /* @__PURE__ */ u3("div", {
                    style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" },
                    children: [
                      /* @__PURE__ */ u3("span", {
                        style: { fontSize: "12px", fontWeight: 700, color: "#1a1a1a", display: "flex", alignItems: "center", gap: "6px" },
                        children: [
                          /* @__PURE__ */ u3("span", {
                            children: "\uD83D\uDEF0️"
                          }, undefined, false, undefined, this),
                          " Live Carrier Telemetry (",
                          selectedTicket.carrier,
                          ")"
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ u3("span", {
                        style: { fontSize: "11px", color: "#6B7280" },
                        children: [
                          "Scanned ",
                          selectedTicket.checkpointTime
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ u3("div", {
                    style: { fontSize: "13px", fontWeight: 600, color: "#1F2937", marginBottom: "4px" },
                    children: selectedTicket.lastCheckpoint
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u3("div", {
                    style: { fontSize: "12px", color: "#4B5563" },
                    children: [
                      "Estimated Delivery: ",
                      /* @__PURE__ */ u3("strong", {
                        children: selectedTicket.estimatedDelivery
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u3("div", {
                children: [
                  /* @__PURE__ */ u3("div", {
                    style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" },
                    children: [
                      /* @__PURE__ */ u3("span", {
                        style: { fontSize: "11px", fontWeight: 700, color: "var(--color-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" },
                        children: "Contextual AI Draft Response (Review & Send)"
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ u3("span", {
                        style: { fontSize: "11px", color: "#9CA3AF" },
                        children: "Draft Mode Only"
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ u3("div", {
                    style: { marginBottom: "8px" },
                    children: /* @__PURE__ */ u3("input", {
                      type: "text",
                      value: selectedTicket.draftSubject,
                      readOnly: true,
                      style: { width: "100%", padding: "8px 12px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px", fontWeight: 600, background: "#F9FAFB", color: "#374151" }
                    }, undefined, false, undefined, this)
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u3("textarea", {
                    value: selectedTicket.draftBody,
                    onInput: (e3) => handleEditBody(e3.target.value),
                    rows: 7,
                    style: {
                      width: "100%",
                      padding: "12px",
                      borderRadius: "10px",
                      border: "1px solid #D1D5DB",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      color: "#1a1a1a",
                      fontFamily: "var(--font-sans)",
                      resize: "vertical"
                    }
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ u3("div", {
                style: { marginTop: "20px", display: "flex", gap: "12px" },
                children: [
                  /* @__PURE__ */ u3("button", {
                    onClick: () => handleApprove(selectedTicket.id),
                    style: {
                      flex: 1,
                      background: selectedTicket.approved ? "#216C37" : "#4C9B50",
                      color: "#FFFFFF",
                      padding: "12px 20px",
                      borderRadius: "999px",
                      fontSize: "13px",
                      fontWeight: 600,
                      boxShadow: "0 2px 6px rgba(76,155,80,0.2)"
                    },
                    children: selectedTicket.approved ? "✓ Sent to Customer (Completed)" : "Approve & Send Draft →"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ u3("button", {
                    onClick: () => {
                      navigator.clipboard?.writeText(selectedTicket.draftBody);
                      setShowToast("Copied draft to clipboard");
                      setTimeout(() => setShowToast(null), 2500);
                    },
                    style: {
                      background: "#F6F5F4",
                      border: "1px solid var(--color-border-card)",
                      color: "#1a1a1a",
                      padding: "12px 18px",
                      borderRadius: "999px",
                      fontSize: "13px",
                      fontWeight: 600
                    },
                    children: "Copy Draft"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// apps/wismo-triage/src/main.tsx
R(/* @__PURE__ */ u3(App, {}, undefined, false, undefined, this), document.getElementById("app"));
