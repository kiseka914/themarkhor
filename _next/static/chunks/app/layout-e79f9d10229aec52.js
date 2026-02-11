(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    347: () => {},
    1240: (e, t) => {
      "use strict";
      function r(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
          let e = t[r];
          void 0 === e
            ? (t[r] = n)
            : Array.isArray(e)
            ? e.push(n)
            : (t[r] = [e, n]);
        }
        return t;
      }
      function n(e) {
        return "string" == typeof e
          ? e
          : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        for (let [r, o] of Object.entries(e))
          if (Array.isArray(o)) for (let e of o) t.append(r, n(e));
          else t.set(r, n(o));
        return t;
      }
      function i(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        for (let t of r) {
          for (let r of t.keys()) e.delete(r);
          for (let [r, n] of t.entries()) e.append(r, n);
        }
        return e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return i;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    1469: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return s;
          },
        });
      let n = r(8229),
        o = r(8883),
        i = r(3063),
        a = n._(r(1193));
      function s(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image/",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let l = i.Image;
    },
    2248: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => f });
      var n = r(5155),
        o = r(2115),
        i = r(1469),
        a = r.n(i),
        s = r(6874),
        l = r.n(s),
        c = r(2564),
        u = r(9911);
      function f() {
        let [e, t] = (0, o.useState)(!1),
          [r, i] = (0, o.useState)(!1),
          s = (e) => {
            let r = document.getElementById(e);
            if (r) {
              let e = r.getBoundingClientRect().top + window.pageYOffset + -80;
              window.scrollTo({ top: e, behavior: "smooth" });
            }
            t(!1);
          };
        return (0, n.jsxs)("header", {
          className: "text-white top-0 w-full z-50 absolute overflow-x-hidden",
          children: [
            (0, n.jsxs)("div", {
              className: "px-4 w-full",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "flex items-center py-3 justify-between w-full max-w-[1800px] mx-auto relative border-b border-white/30",
                  children: [
                    (0, n.jsx)(l(), {
                      href: "/",
                      children: (0, n.jsx)("div", {
                        className: "flex items-center space-x-2 cursor-pointer",
                        children: (0, n.jsx)(a(), {
                          src: c.default,
                          alt: "markhor-logo",
                          width: 160,
                          height: 90,
                          quality: 100,
                          className:
                            "w-auto h-auto max-w-[160px] sm:max-w-[200px]",
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "top-2 hidden lg:flex items-center space-x-6 relative",
                      children: [
                        (0, n.jsxs)("nav", {
                          className: "flex space-x-8 text-[18px] font-normal",
                          children: [
                            (0, n.jsx)("button", {
                              onClick: () => s("home"),
                              className: "hover:text-[#f9b936] cursor-pointer",
                              children: "Home",
                            }),
                            (0, n.jsx)("button", {
                              onClick: () => s("about"),
                              className: "hover:text-[#f9b936] cursor-pointer",
                              children: "About",
                            }),
                            (0, n.jsx)("button", {
                              onClick: () => s("goatpath"),
                              className: "hover:text-[#f9b936] cursor-pointer",
                              children: "Tokenomics",
                            }),
                            (0, n.jsx)("button", {
                              onClick: () => s("truevision"),
                              className: "hover:text-[#f9b936] cursor-pointer",
                              children: "Vision",
                            }),
                            (0, n.jsx)("button", {
                              onClick: () => s("joinus"),
                              className: "hover:text-[#f9b936] cursor-pointer",
                              children: "Join Us",
                            }),
                          ],
                        }),
                        (0, n.jsxs)("a", {
                          href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x01ee1f75d0e80ed907aa0221bf29e380d03ba15a",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-[#0B1A2B] bg-[#F9B936] border-4 border-[#60902A] px-5 py-2 rounded-full cursor-pointer flex items-center gap-2 hover:bg-[#60902A] hover:text-white transition-colors duration-300",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "leading-none relative top-[4px] font-heading text-[38px]",
                              children: "BUY NOW",
                            }),
                            (0, n.jsx)(u.Z0P, { className: "text-lg" }),
                          ],
                        })
                      ],
                    }),
                    (0, n.jsx)("button", {
                      className: "lg:hidden text-2xl focus:outline-none",
                      onClick: () => t(!e),
                      children: e
                        ? (0, n.jsx)(u.QCr, {})
                        : (0, n.jsx)(u.OXb, {}),
                    }),
                  ],
                }),
                e &&
                  (0, n.jsxs)("div", {
                    className:
                      "lg:hidden flex flex-col space-y-8 mt-4 bg-[#0B1A2B] p-5 border-t border-white/30",
                    children: [
                      (0, n.jsx)("button", {
                        onClick: () => s("home"),
                        className: "hover:text-[#f9b936] text-center",
                        children: "Home",
                      }),
                      (0, n.jsx)("button", {
                        onClick: () => s("about"),
                        className: "hover:text-[#f9b936] text-center",
                        children: "About",
                      }),
                      (0, n.jsx)("button", {
                        onClick: () => s("goatpath"),
                        className: "hover:text-[#f9b936] text-center",
                        children: "Tokenomics",
                      }),
                      (0, n.jsx)("button", {
                        onClick: () => s("truevision"),
                        className: "hover:text-[#f9b936] text-center",
                        children: "Vision",
                      }),
                      (0, n.jsx)("button", {
                        onClick: () => s("joinus"),
                        className: "hover:text-[#f9b936] text-center",
                        children: "Join Us",
                      }),
                      (0, n.jsx)("a", {
                        href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x01ee1f75d0e80ed907aa0221bf29e380d03ba15a",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-[#0B1A2B] bg-[#F9B936] border-4 border-[#60902A] px-5 py-2 rounded-full cursor-pointer flex items-center justify-center gap-2 leading-none font-heading text-3xl",
                        children: "Buy Now",
                      })
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
    2564: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => n });
      let n = {
        src: "/_next/static/media/markhor-log.b365031f.webp",
        height: 247,
        width: 525,
        blurDataURL:
          "data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAACFggAAAAAACzvAAAAAAAAP/60dDR1NTA5NCWiIWFiowAVlA4IDQAAACwAQCdASoIAAQAAkA4JZQCdAEO+mBgAP7zVRdUtA3yf3HDT3nrvnGI0Vw/832R+ysooAAA",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    2664: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(9991),
        o = r(7102);
      function i(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    2757: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return i;
          },
          formatWithValidation: function () {
            return s;
          },
          urlObjectKeys: function () {
            return a;
          },
        });
      let n = r(6966)._(r(1240)),
        o = /https?|ftp|gopher|file/;
      function i(e) {
        let { auth: t, hostname: r } = e,
          i = e.protocol || "",
          a = e.pathname || "",
          s = e.hash || "",
          l = e.query || "",
          c = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (c = t + e.host)
            : r &&
              ((c = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (c += ":" + e.port)),
          l &&
            "object" == typeof l &&
            (l = String(n.urlQueryToSearchParams(l)));
        let u = e.search || (l && "?" + l) || "";
        return (
          i && !i.endsWith(":") && (i += ":"),
          e.slashes || ((!i || o.test(i)) && !1 !== c)
            ? ((c = "//" + (c || "")), a && "/" !== a[0] && (a = "/" + a))
            : c || (c = ""),
          s && "#" !== s[0] && (s = "#" + s),
          u && "?" !== u[0] && (u = "?" + u),
          "" +
            i +
            c +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (u = u.replace("#", "%23")) +
            s
        );
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function s(e) {
        return i(e);
      }
    },
    3039: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_8bf340",
        variable: "__variable_8bf340",
      };
    },
    3180: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "errorOnce", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (e) => {};
    },
    4436: (e, t, r) => {
      "use strict";
      r.d(t, { k5: () => u });
      var n = r(2115),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = n.createContext && n.createContext(o),
        a = ["attr", "size", "title"];
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                var n, o, i;
                (n = e),
                  (o = t),
                  (i = r[t]),
                  (o = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function u(e) {
        return (t) =>
          n.createElement(
            f,
            s({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, c({ key: r }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function f(e) {
        var t = (t) => {
          var r,
            { attr: o, size: i, title: l } = e,
            u = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]);
              }
              return o;
            })(e, a),
            f = i || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              s(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                u,
                {
                  className: r,
                  style: c(c({ color: e.color || t.color }, t.style), e.style),
                  height: f,
                  width: f,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && n.createElement("title", null, l),
              e.children
            )
          );
        };
        return void 0 !== i
          ? n.createElement(i.Consumer, null, (e) => t(e))
          : t(o);
      }
    },
    6637: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 3063, 23)),
        Promise.resolve().then(r.t.bind(r, 3039, 23)),
        Promise.resolve().then(r.t.bind(r, 9107, 23)),
        Promise.resolve().then(r.bind(r, 2564)),
        Promise.resolve().then(r.bind(r, 2248)),
        Promise.resolve().then(r.t.bind(r, 347, 23));
    },
    6874: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return b;
          },
          useLinkStatus: function () {
            return g;
          },
        });
      let n = r(6966),
        o = r(5155),
        i = n._(r(2115)),
        a = r(2757),
        s = r(5227),
        l = r(9818),
        c = r(6654),
        u = r(9991),
        f = r(5929);
      r(3230);
      let d = r(4930),
        p = r(2664),
        h = r(6634);
      function m(e) {
        return "string" == typeof e ? e : (0, a.formatUrl)(e);
      }
      function b(e) {
        let t,
          r,
          n,
          [a, b] = (0, i.useOptimistic)(d.IDLE_LINK_STATUS),
          g = (0, i.useRef)(null),
          {
            href: y,
            as: v,
            children: A,
            prefetch: j = null,
            passHref: w,
            replace: N,
            shallow: O,
            scroll: P,
            onClick: C,
            onMouseEnter: _,
            onTouchStart: E,
            legacyBehavior: k = !1,
            onNavigate: S,
            ref: T,
            unstable_dynamicOnHover: I,
            ...B
          } = e;
        (t = A),
          k &&
            ("string" == typeof t || "number" == typeof t) &&
            (t = (0, o.jsx)("a", { children: t }));
        let U = i.default.useContext(s.AppRouterContext),
          L = !1 !== j,
          R =
            null === j || "auto" === j
              ? l.PrefetchKind.AUTO
              : l.PrefetchKind.FULL,
          { href: D, as: F } = i.default.useMemo(() => {
            let e = m(y);
            return { href: e, as: v ? m(v) : e };
          }, [y, v]);
        k && (r = i.default.Children.only(t));
        let M = k ? r && "object" == typeof r && r.ref : T,
          z = i.default.useCallback(
            (e) => (
              null !== U &&
                (g.current = (0, d.mountLinkInstance)(e, D, U, R, L, b)),
              () => {
                g.current &&
                  ((0, d.unmountLinkForCurrentNavigation)(g.current),
                  (g.current = null)),
                  (0, d.unmountPrefetchableInstance)(e);
              }
            ),
            [L, D, U, R, b]
          ),
          Q = {
            ref: (0, c.useMergedRef)(z, M),
            onClick(e) {
              k || "function" != typeof C || C(e),
                k &&
                  r.props &&
                  "function" == typeof r.props.onClick &&
                  r.props.onClick(e),
                U &&
                  (e.defaultPrevented ||
                    (function (e, t, r, n, o, a, s) {
                      let { nodeName: l } = e.currentTarget;
                      if (
                        !(
                          ("A" === l.toUpperCase() &&
                            (function (e) {
                              let t = e.currentTarget.getAttribute("target");
                              return (
                                (t && "_self" !== t) ||
                                e.metaKey ||
                                e.ctrlKey ||
                                e.shiftKey ||
                                e.altKey ||
                                (e.nativeEvent && 2 === e.nativeEvent.which)
                              );
                            })(e)) ||
                          e.currentTarget.hasAttribute("download")
                        )
                      ) {
                        if (!(0, p.isLocalURL)(t)) {
                          o && (e.preventDefault(), location.replace(t));
                          return;
                        }
                        if ((e.preventDefault(), s)) {
                          let e = !1;
                          if (
                            (s({
                              preventDefault: () => {
                                e = !0;
                              },
                            }),
                            e)
                          )
                            return;
                        }
                        i.default.startTransition(() => {
                          (0, h.dispatchNavigateAction)(
                            r || t,
                            o ? "replace" : "push",
                            null == a || a,
                            n.current
                          );
                        });
                      }
                    })(e, D, F, g, N, P, S));
            },
            onMouseEnter(e) {
              k || "function" != typeof _ || _(e),
                k &&
                  r.props &&
                  "function" == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                U && L && (0, d.onNavigationIntent)(e.currentTarget, !0 === I);
            },
            onTouchStart: function (e) {
              k || "function" != typeof E || E(e),
                k &&
                  r.props &&
                  "function" == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                U && L && (0, d.onNavigationIntent)(e.currentTarget, !0 === I);
            },
          };
        return (
          (0, u.isAbsoluteUrl)(F)
            ? (Q.href = F)
            : (k && !w && ("a" !== r.type || "href" in r.props)) ||
              (Q.href = (0, f.addBasePath)(F)),
          (n = k
            ? i.default.cloneElement(r, Q)
            : (0, o.jsx)("a", { ...B, ...Q, children: t })),
          (0, o.jsx)(x.Provider, { value: a, children: n })
        );
      }
      r(3180);
      let x = (0, i.createContext)(d.IDLE_LINK_STATUS),
        g = () => (0, i.useContext)(x);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9107: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Jomhuria', 'Jomhuria Fallback'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_d42045",
        variable: "__variable_d42045",
      };
    },
    9991: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return g;
          },
          MissingStaticPage: function () {
            return x;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return b;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return s;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          isResSent: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return f;
          },
          normalizeRepeatedSlashes: function () {
            return u;
          },
          stringifyError: function () {
            return y;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (e) => o.test(e);
      function a() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function s() {
        let { href: e } = window.location,
          t = a();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function u(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function f(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await f(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && c(r)) return n;
        if (!n)
          throw Object.defineProperty(
            Error(
              '"' +
                l(e) +
                '.getInitialProps()" should resolve to an object. But found "' +
                n +
                '" instead.'
            ),
            "__NEXT_ERROR_CODE",
            { value: "E394", enumerable: !1, configurable: !0 }
          );
        return n;
      }
      let d = "undefined" != typeof performance,
        p =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class h extends Error {}
      class m extends Error {}
      class b extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class x extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class g extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function y(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
  },
  (e) => {
    e.O(0, [476, 711, 63, 441, 964, 358], () => e((e.s = 6637))),
      (_N_E = e.O());
  },
]);
