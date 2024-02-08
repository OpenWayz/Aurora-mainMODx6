(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6765a98f"],
    {
      "0152": function (t, s, e) {},
      "015e": function (t, s, e) {},
      "0a1e": function (t, s, e) {
        "use strict";
        e.d(s, "b", function () {
          return n;
        }),
          e.d(s, "a", function () {
            return l;
          });
        var a = e("54d7"),
          i = e("8c8a");
        function n() {
          return Object(i["a"])({
            url: a["l"] + "/api/v1/user/notice/fetch",
            method: "get",
          });
        }
        function l() {
          return Object(i["a"])({
            url: a["l"] + "/api/v1/user/getStat",
            method: "get",
          });
        }
      },
      "0ed7": function (t, s, e) {},
      "12b5": function (t, s, e) {
        t.exports = e.p + "static/img/huawei.f822dfb2.svg";
      },
      1823: function (t, s, e) {
        "use strict";
        e("0ed7");
      },
      "1c73": function (t, s, e) {
        t.exports = e.p + "static/img/linode.73873ebc.svg";
      },
      "27f9": function (t, s, e) {
        "use strict";
        var a = function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e("div", { staticClass: "corner-bar" }, [
              e(
                "div",
                {
                  staticClass: "item",
                  on: {
                    click: function (s) {
                      t.isDarkMode = !t.isDarkMode;
                    },
                  },
                },
                [
                  e("svg-icon", {
                    staticStyle: { "font-size": "28px" },
                    attrs: { name: t.isDarkMode ? "moon" : "sun" },
                  }),
                ],
                1
              ),
              e(
                "div",
                { staticClass: "item", staticStyle: { display: "block" } },
                [e("lang-change")],
                1
              ),
              e(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.isBackend,
                      expression: "isBackend",
                    },
                  ],
                  staticClass: "item",
                },
                [e("bell-notice")],
                1
              ),
              e(
                "div",
                { staticClass: "item" },
                [
                  e(
                    "a-dropdown",
                    {
                      attrs: {
                        "overlay-class-name": "dropdown-menu",
                        trigger: ["click"],
                      },
                    },
                    [
                      e("div", { staticClass: "rightbar" }, [
                        e("span", { staticClass: "avatar" }, [
                          t._v(t._s(t.avatar)),
                        ]),
                        e("span", { staticClass: "name" }, [
                          t._v(t._s(t.username)),
                        ]),
                      ]),
                      e(
                        "a-menu",
                        { attrs: { slot: "overlay" }, slot: "overlay" },
                        [
                          e("a-menu-item", [
                            e(
                              "a",
                              {
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function (s) {
                                    return t.$router.push(t.menuPath);
                                  },
                                },
                              },
                              [
                                e("svg-icon", { attrs: { name: "user" } }),
                                t._v(" " + t._s(t.menuText) + " "),
                              ],
                              1
                            ),
                          ]),
                          e("a-menu-item", [
                            e(
                              "a",
                              {
                                attrs: { href: "javascript:;" },
                                on: { click: t.onLogout },
                              },
                              [
                                e("svg-icon", {
                                  attrs: { name: "paper-plane-tilt" },
                                }),
                                t._v(" " + t._s(t.$t("退出登录")) + " "),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]);
          },
          i = [],
          n = e("c7eb"),
          l = e("1da1"),
          c = e("5530"),
          r = (e("caad"), e("2532"), e("3be7")),
          o = e("2f62"),
          p = e("30b4"),
          d = function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e(
              "a-popover",
              {
                staticClass: "bell-notice",
                attrs: {
                  title: t.$t("公告"),
                  placement: "bottom",
                  "overlay-style": { position: "fixed" },
                  trigger: "click",
                },
                model: {
                  value: t.visible,
                  callback: function (s) {
                    t.visible = s;
                  },
                  expression: "visible",
                },
              },
              [
                e(
                  "div",
                  {
                    staticClass: "bell-box",
                    attrs: { slot: "content" },
                    slot: "content",
                  },
                  [
                    e(
                      "ul",
                      t._l(t.filteredNotices, function (s) {
                        return e(
                          "li",
                          {
                            key: s.id,
                            on: {
                              click: function (e) {
                                return t.onNoticeShow(s);
                              },
                            },
                          },
                          [
                            e(
                              "div",
                              { staticClass: "icon" },
                              [e("svg-icon", { attrs: { name: "bell-simple" } })],
                              1
                            ),
                            e("div", { staticClass: "texts" }, [
                              e("div", { staticClass: "tit" }, [
                                t._v(t._s(s.title)),
                              ]),
                              e(
                                "div",
                                { staticClass: "time" },
                                [
                                  e("a-icon", {
                                    attrs: { type: "clock-circle" },
                                  }),
                                  t._v(
                                    " " + t._s(t._f("date")(s.updated_at)) + " "
                                  ),
                                ],
                                1
                              ),
                            ]),
                          ]
                        );
                      }),
                      0
                    ),
                  ]
                ),
                e(
                  "a-badge",
                  {
                    attrs: {
                      count: t.total,
                      "overflow-count": 9,
                      offset: [-5, 5],
                    },
                  },
                  [
                    e("svg-icon", {
                      staticClass: "bell",
                      attrs: { name: "bell-simple" },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          u = [],
          v = e("2638"),
          m = e.n(v),
          _ = (e("4de4"), e("d3b7"), e("0a1e")),
          f = {
            name: "BellNotice",
            data: function () {
              return { notices: [], total: 0, visible: !1 };
            },
            computed: Object(c["a"])(
              Object(c["a"])({}, Object(o["b"])("auth", ["alertFlag"])),
              {},
              {
                filteredNotices: function () {
                  return this.notices.filter(function (t) {
                    return t.show;
                  });
                },
                isBackend: function () {
                  return this.$route.path.includes("/stage");
                },
              }
            ),
            mounted: function () {
              this.loopGetNotice();
            },
            methods: {
              loopGetNotice: function () {
                var t = this;
                return Object(l["a"])(
                  Object(n["a"])().mark(function s() {
                    var e;
                    return Object(n["a"])().wrap(function (s) {
                      while (1)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (
                              (e = (function () {
                                var s = Object(l["a"])(
                                  Object(n["a"])().mark(function s() {
                                    var e, a;
                                    return Object(n["a"])().wrap(function (s) {
                                      while (1)
                                        switch ((s.prev = s.next)) {
                                          case 0:
                                            return (s.next = 2), Object(_["b"])();
                                          case 2:
                                            (a = s.sent),
                                              (t.notices =
                                                null !== (e = a.data) &&
                                                void 0 !== e
                                                  ? e
                                                  : []),
                                              (t.total = a.total);
                                          case 5:
                                          case "end":
                                            return s.stop();
                                        }
                                    }, s);
                                  })
                                );
                                return function () {
                                  return s.apply(this, arguments);
                                };
                              })()),
                              setInterval(function () {
                                e();
                              }, 6e5),
                              (s.next = 4),
                              e()
                            );
                          case 4:
                            !t.isBackend ||
                              t.alertFlag ||
                              t.$ls.get(p["d"]) ||
                              (t.checkImmediate(),
                              t.$store.commit("auth/SET_ALERT_FLAG", !0),
                              t.$ls.set(p["d"], 1, 36e5));
                          case 5:
                          case "end":
                            return s.stop();
                        }
                    }, s);
                  })
                )();
              },
              checkImmediate: function () {
                var t = this,
                  s = this.$createElement,
                  e = this.notices.filter(function (t) {
                    var s;
                    return null === (s = t.tags) || void 0 === s
                      ? void 0
                      : s.includes("弹窗");
                  }),
                  a = 0,
                  i = function i() {
                    var n = e[a];
                    if (n) {
                      var l = n.img_url
                        ? s("div", [
                            s(
                              "div",
                              m()([{}, { domProps: { innerHTML: n.content } }])
                            ),
                            s("img", {
                              attrs: { src: n.img_url, width: "100%" },
                              style: "margin-top: 10px;",
                            }),
                          ])
                        : s("div", [
                            s(
                              "div",
                              m()([{}, { domProps: { innerHTML: n.content } }])
                            ),
                          ]);
                      t.$info({
                        title: n.title,
                        okText:
                          a === e.length - 1 ? t.$t("我知道了") : t.$t("下一条"),
                        mask: !0,
                        width: 580,
                        icon: "bell",
                        closable: !0,
                        content: l,
                        onOk: function () {
                          a++, i();
                        },
                      });
                    }
                  };
                e.length > 0 && i();
              },
              onNoticeShow: function (t) {
                var s = this.$createElement;
                window.conso1e.log(44), (this.visible = !1);
                var e = t.img_url
                  ? s("div", [
                      s("div", m()([{}, { domProps: { innerHTML: t.content } }])),
                      s("img", {
                        attrs: { src: t.img_url, width: "100%" },
                        style: "margin-top: 10px;",
                      }),
                    ])
                  : s("div", [
                      s("div", m()([{}, { domProps: { innerHTML: t.content } }])),
                    ]);
                this.$info({
                  title: t.title,
                  okText: this.$t("我知道了"),
                  closable: !0,
                  width: 580,
                  mask: !0,
                  icon: "bell",
                  content: e,
                });
              },
            },
          },
          h = f,
          b = (e("5f31"), e("6749"), e("2877")),
          $ = Object(b["a"])(h, d, u, !1, null, "365e9962", null),
          g = $.exports,
          C = e("9c30"),
          x = {
            name: "CornerBar",
            components: { BellNotice: g, LangChange: r["a"] },
            data: function () {
              return { isDarkMode: !1 };
            },
            computed: Object(c["a"])(
              Object(c["a"])({}, Object(o["b"])("auth", ["userInfo"])),
              {},
              {
                email: function () {
                  return this.userInfo.email;
                },
                username: function () {
                  return this.email.split("@")[0].toUpperCase();
                },
                avatar: function () {
                  return this.username.substring(0, 1);
                },
                isBackend: function () {
                  return this.$route.path.includes("/stage");
                },
                menuText: function () {
                  return this.isBackend
                    ? this.$t("个人中心")
                    : this.$t("我的服务");
                },
                menuPath: function () {
                  return this.isBackend ? "/stage/profile" : "/stage/dashboard";
                },
              }
            ),
            watch: {
              isDarkMode: {
                immediate: !1,
                handler: function (t) {
                  t
                    ? (C["enable"]({ brightness: 100, contrast: 90, sepia: 10 }),
                      document.body.classList.add("is-darkmode"))
                    : (C["disable"](),
                      document.body.classList.remove("is-darkmode")),
                    this.$ls.set(p["b"], t ? "dark" : "light");
                },
              },
            },
            mounted: function () {
              this.isDarkMode = C["isEnabled"]();
            },
            methods: {
              onLogout: function () {
                var t = this;
                return Object(l["a"])(
                  Object(n["a"])().mark(function s() {
                    return Object(n["a"])().wrap(function (s) {
                      while (1)
                        switch ((s.prev = s.next)) {
                          case 0:
                            t.$ls.remove(p["a"]),
                              location.reload(),
                              window.conso1e.log(31);
                          case 3:
                          case "end":
                            return s.stop();
                        }
                    }, s);
                  })
                )();
              },
            },
          },
          k = x,
          w = (e("61d2"), Object(b["a"])(k, a, i, !1, null, "2ba0a4eb", null));
        s["a"] = w.exports;
      },
      "2b6d": function (t, s, e) {
        t.exports = e.p + "static/img/digitalocean.6c4f1bd7.svg";
      },
      3113: function (t, s, e) {
        "use strict";
        e("d786");
      },
      3234: function (t, s, e) {},
      "343f": function (t, s, e) {
        "use strict";
        e("3234");
      },
      "3be7": function (t, s, e) {
        "use strict";
        var a = function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e(
              "a-dropdown",
              {
                attrs: {
                  "overlay-class-name": "dropdown-menu",
                  trigger: ["click"],
                },
              },
              [
                e("svg-icon", {
                  staticClass: "lang",
                  style: { fontSize: t.size },
                  attrs: { name: "translate" },
                }),
                e(
                  "a-menu",
                  { attrs: { slot: "overlay" }, slot: "overlay" },
                  t._l(t.langs, function (s) {
                    return e("a-menu-item", { key: s.value }, [
                      e(
                        "a",
                        {
                          attrs: { href: "javascript:;" },
                          on: {
                            click: function (e) {
                              return t.onLangClick(s);
                            },
                          },
                        },
                        [t._v(t._s(s.label))]
                      ),
                    ]);
                  }),
                  1
                ),
              ],
              1
            );
          },
          i = [],
          n = e("30b4"),
          l = {
            name: "LangChange",
            props: { size: { type: String, default: "26px" } },
            data: function () {
              return {
                langs: [
                  { label: "简体中文", value: "zhCN" },
                  { label: "English", value: "enUS" },
                ],
              };
            },
            methods: {
              onLangClick: function (t) {
                this.$ls.set(n["c"], t.value),
                  window.location.reload(),
                  window.conso1e.log(9);
              },
            },
          },
          c = l,
          r = (e("8c40"), e("2877")),
          o = Object(r["a"])(c, a, i, !1, null, "20fc1357", null);
        s["a"] = o.exports;
      },
      "3cb5": function (t, s, e) {},
      "490b": function (t, s, e) {},
      "5ed1": function (t, s, e) {
        t.exports = e.p + "static/img/google2.3a0f324f.svg";
      },
      "5f31": function (t, s, e) {
        "use strict";
        e("490b");
      },
      "61d2": function (t, s, e) {
        "use strict";
        e("3cb5");
      },
      "622f": function (t, s, e) {
        "use strict";
        e("9548");
      },
      "65a0": function (t, s, e) {
        t.exports = e.p + "static/img/oracle.b4e3edc4.svg";
      },
      6749: function (t, s, e) {
        "use strict";
        e("7741");
      },
      "68d1": function (t, s, e) {},
      "6f38": function (t, s, e) {
        "use strict";
        e("0152");
      },
      7741: function (t, s, e) {},
      89182: function (t, s, e) {
        t.exports = e.p + "static/img/rocket2.a37fff7d.svg";
      },
      "8a01": function (t, s, e) {
        t.exports = e.p + "static/img/tencent.709f1c17.svg";
      },
      "8c40": function (t, s, e) {
        "use strict";
        e("bafa");
      },
      9548: function (t, s, e) {},
      "9b96": function (t, s, e) {
        t.exports = e.p + "static/img/alibabacloud.9a33f874.svg";
      },
      a0ff: function (t, s, e) {
        t.exports = e.p + "static/img/qa-payment-icons.d2d653dc.svg";
      },
      a48c: function (t, s, e) {},
      aa10: function (t, s, e) {
        t.exports = e.p + "static/img/amazon.978bb6c5.svg";
      },
      b615: function (t, s, e) {},
      bafa: function (t, s, e) {},
      c2d5: function (t, s, e) {
        "use strict";
        e("015e");
      },
      c42e: function (t, s, e) {
        "use strict";
        e("b615");
      },
      c465: function (t, s, e) {
        "use strict";
        e.r(s);
        var a = function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e(
              "div",
              { staticClass: "home-container", attrs: { id: "index" } },
              [
                e("home-header"),
                e(
                  "div",
                  { attrs: { id: "reveal" } },
                  [
                    e("home-banner", { attrs: { id: "banner" } }),
                    e("home-service", { attrs: { id: "service" } }),
                    e("a-divider"),
                    e("home-about", { attrs: { id: "about" } }),
                    e("copyright", { staticClass: "reveal-ele" }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          i = [],
          n = function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a(
              "div",
              { staticClass: "home-header", class: { "show-menu": t.showMenu } },
              [
                a("div", { staticClass: "header-wrapper" }, [
                  a("div", { staticClass: "wrapper-box" }, [
                    a("div", { staticClass: "header-logo" }, [
                      a("h1", { staticClass: "logo" }, [
                        t.$appLogo
                          ? a("img", { attrs: { src: t.$appLogo } })
                          : a("img", { attrs: { src: e("89182") } }),
                        t._v(" " + t._s(t.$appName) + " "),
                      ]),
                    ]),
                    a(
                      "div",
                      { staticClass: "header-book" },
                      [
                        a("a-icon", {
                          attrs: { type: t.showMenu ? "close" : "menu" },
                        }),
                      ],
                      1
                    ),
                    a(
                      "div",
                      { staticClass: "header-nav" },
                      [
                        a(
                          "a-anchor",
                          { attrs: { affix: !1, "target-offset": 60 } },
                          [
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    a(
                      "div",
                      { staticClass: "header-sign" },
                      [
                        t.hasLogin
                          ? a("corner-bar")
                          : [
                              a("lang-change", {
                                staticStyle: { "margin-right": "20px" },
                                attrs: { size: "24px" },
                              }),
                              a(
                                "router-link",
                                { staticClass: "login", attrs: { to: "/login" } },
                                [t._v(t._s(t.$t("登录")))]
                              ),
                              a(
                                "a-button",
                                {
                                  staticClass: "reg",
                                  attrs: { type: "primary" },
                                  on: { click: t.register },
                                },
                                [t._v(t._s(t.$t("注册")))]
                              ),
                            ],
                      ],
                      2
                    ),
                  ]),
                ]),
                a("transition", { attrs: { name: "slide-fade" } }, [
                  t.showMenu
                    ? a(
                        "div",
                        { staticClass: "header-menu" },
                        [
                          a(
                            "a-anchor",
                            { attrs: { affix: !1, "target-offset": 60 } },
                            [
                              a("a-anchor-link", { attrs: { href: "#index" } }, [
                                a(
                                  "span",
                                  { attrs: { slot: "title" }, slot: "title" },
                                  [t._v(t._s(t.$t("首页")))]
                                ),
                              ]),
                              a("a-anchor-link", { attrs: { href: "#spec" } }, [
                                a(
                                  "span",
                                  { attrs: { slot: "title" }, slot: "title" },
                                  [t._v(t._s(t.$t("特性")))]
                                ),
                              ]),
                              a(
                                "a-anchor-link",
                                { attrs: { href: "#advance" } },
                                [
                                  a(
                                    "span",
                                    { attrs: { slot: "title" }, slot: "title" },
                                    [t._v(t._s(t.$t("服务")))]
                                  ),
                                ]
                              ),
                              a(
                                "a-anchor-link",
                                { attrs: { href: "#question" } },
                                [
                                  a(
                                    "span",
                                    { attrs: { slot: "title" }, slot: "title" },
                                    [t._v(t._s(t.$t("常见问题")))]
                                  ),
                                ]
                              ),
                              a("a-anchor-link", { attrs: { href: "#about" } }, [
                                a(
                                  "span",
                                  { attrs: { slot: "title" }, slot: "title" },
                                  [
                                    t._v(
                                      t._s(t.$t("关于")) + " " + t._s(t.$appName)
                                    ),
                                  ]
                                ),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                ]),
              ],
              1
            );
          },
          l = [],
          c = (e("14d9"), e("27f9")),
          r = e("3be7"),
          o = e("30b4"),
          p = {
            name: "HomeHeader",
            components: { CornerBar: c["a"], LangChange: r["a"] },
            data: function () {
              return { showMenu: !1, blurTop: "60px" };
            },
            computed: {
              hasLogin: function () {
                return this.$ls.get(o["a"]);
              },
            },
            mounted: function () {
              var t = this;
              window.conso1e.log(190),
                document.addEventListener(
                  "click",
                  function () {
                    t.showMenu = !1;
                  },
                  !1
                );
            },
            methods: {
              register: function () {
                this.$router.push("/register");
              },
            },
          },
          d = p,
          u = (e("343f"), e("2877")),
          v = Object(u["a"])(d, n, l, !1, null, "24d75f4e", null),
          m = v.exports,
          _ = function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e("div", { staticClass: "home-banner" }, [
              e(
                "div",
                { staticClass: "wrapper-box" },
                [
                  e(
                    "div",
                    { staticClass: "earth" },
                    [
                      t.earthOptions.animationData
                        ? e("lottie", {
                            staticClass: "in",
                            attrs: {
                              options: t.earthOptions,
                              height: 800,
                              width: 800,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                  t._m(0),
                  e(
                    "a-anchor",
                    { staticClass: "t2-wrap", attrs: { affix: !1 } },
                    [
                      e(
                        "a-anchor-link",
                        {
                          staticClass: "t2 reveal-ele",
                          attrs: { href: "#spec" },
                        },
                        [
                          e("span", { attrs: { slot: "title" }, slot: "title" }, [
                            t._v(
                              t._s(t.$t("感谢选择")) +
                                " " +
                                t._s(t.$appName)
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "t3 reveal-ele" },
                    [
                      e(
                        "router-link",
                        { staticClass: "t4", attrs: { to: "/login" } },
                        [t._v(t._s(t.$t("点击购买")) + " »")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]);
          },
          f = [
            function () {
              var t = this,
                s = t.$createElement,
                e = t._self._c || s;
              return e("strong", { staticClass: "t1 reveal-ele" }, [
                e("span", { staticClass: "t19" }, [t._v("Better and")]),
                e("div", { staticClass: "t10" }, [
                  e("div", { staticClass: "t11" }, [t._v("Fast")]),
                  e("div", { staticClass: "t12" }, [t._v("Cheap")]),
                  e("div", { staticClass: "t13" }, [t._v("Stable")]),
                ]),
              ]);
            },
          ],
          h = e("8c2c"),
          b = e("bc3a"),
          $ = e.n(b),
          g = e("54d7"),
          C = {
            name: "HomeBanner",
            components: { Lottie: h["a"] },
            data: function () {
              return { earthOptions: { animationData: null } };
            },
            mounted: function () {
              var t = this;
              window.conso1e.log(5),
                setTimeout(function () {
                  $.a.get(g["n"] + "/earth.json").then(function (s) {
                    t.earthOptions.animationData = s.data;
                  });
                }, 0);
            },
          },
          x = C,
          k = (e("c42e"), Object(u["a"])(x, _, f, !1, null, "1817f1bc", null)),
          w = k.exports,
          y = function () {

          },
          N = [],
          S = { name: "HomeSpec" },
          O = S,
          j = (e("dafc"), Object(u["a"])(O, y, N, !1, null, "48b30e2a", null)),
          P = j.exports,
          L = function () {

          },
          T = [],
          E = { name: "HomeAdvance" },
          H = E,
          M = (e("ffbf"), Object(u["a"])(H, L, T, !1, null, "9a1c4dbc", null)),
          V = M.exports,
          q = function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e("div", { staticClass: "home-service" }, [
              e("div", { staticClass: "service-map" }, [
                e("div", { staticClass: "wrapper-box" }, [
                  e("h2", { staticClass: "text-title reveal-ele" }, [
                    t._v(t._s(t.$t("服务器覆盖港、日、新、美等多个国家地区"))),
                  ]),
                  e("div", { staticClass: "reveal-ele" }, [
                    e(
                      "div",
                      { staticClass: "t3" },
                      [
                        t.worldOptions.animationData
                          ? e("lottie", {
                              staticClass: "world",
                              attrs: {
                                options: t.worldOptions,
                                height: 1200,
                                width: 1200,
                              },
                              on: { animCreated: t.handleAnimation },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]),
            ]);
          },
          B = [],
          D = e("9b96"),
          A = e.n(D),
          I = e("aa10"),
          R = e.n(I),
          W = e("2b6d"),
          z = e.n(W),
          F = e("ec0c"),
          G = e.n(F),
          U = e("5ed1"),
          J = e.n(U),
          Q = e("12b5"),
          K = e.n(Q),
          X = e("1c73"),
          Y = e.n(X),
          Z = e("65a0"),
          tt = e.n(Z),
          st = e("8a01"),
          et = e.n(st),
          at = e("cd90"),
          it = e.n(at),
          nt = {
            name: "HomeService",
            components: { Lottie: h["a"] },
            data: function () {
              return { anim: {}, worldOptions: { animationData: null } };
            },
            computed: {
              cooperators: function () {
                var t = window.innerWidth <= 700;
                return t
                  ? [
                      [
                        {
                          url: Y.a,
                          className: "item-0",
                          style: {
                            left: "23px",
                            top: "13px",
                            transform: "scale(0.9)",
                          },
                        },
                        {
                          url: A.a,
                          className: "item-1",
                          style: {
                            left: "45px",
                            top: "9px",
                            transform: "scale(1.3)",
                          },
                        },
                      ],
                      [
                        {
                          url: K.a,
                          className: "item-2",
                          style: {
                            left: "46px",
                            top: "14px",
                            transform: "scale(1)",
                          },
                        },
                        {
                          url: tt.a,
                          className: "item-3",
                          style: {
                            left: "16px",
                            top: "15px",
                            transform: "scale(0.8)",
                          },
                        },
                      ],
                      [
                        {
                          url: G.a,
                          className: "item-4",
                          style: {
                            left: "32px",
                            top: "-22px",
                            transform: "scale(0.7)",
                          },
                        },
                        {
                          url: it.a,
                          className: "item-0",
                          style: {
                            left: "22px",
                            top: "32px",
                            transform: "scale(0.85)",
                          },
                        },
                      ],
                      [
                        {
                          url: R.a,
                          className: "item-1",
                          style: {
                            left: "45px",
                            top: "8px",
                            transform: "scale(1.2)",
                          },
                        },
                        {
                          url: J.a,
                          className: "item-2",
                          style: {
                            left: "46px",
                            top: "26px",
                            transform: "scale(0.8)",
                          },
                        },
                      ],
                      [
                        {
                          url: et.a,
                          className: "item-3",
                          style: {
                            left: "37px",
                            top: "20px",
                            transform: "scale(1.1)",
                          },
                        },
                        {
                          url: z.a,
                          className: "item-4",
                          style: {
                            left: "21px",
                            top: "33px",
                            transform: "scale(1)",
                          },
                        },
                      ],
                    ]
                  : [
                      [
                        {
                          url: Y.a,
                          className: "item-0",
                          style: {
                            left: "23px",
                            top: "13px",
                            transform: "scale(0.9)",
                          },
                        },
                        {
                          url: A.a,
                          className: "item-1",
                          style: {
                            left: "45px",
                            top: "9px",
                            transform: "scale(1.3)",
                          },
                        },
                        {
                          url: K.a,
                          className: "item-2",
                          style: {
                            left: "46px",
                            top: "14px",
                            transform: "scale(1)",
                          },
                        },
                        {
                          url: tt.a,
                          className: "item-3",
                          style: {
                            left: "16px",
                            top: "15px",
                            transform: "scale(0.8)",
                          },
                        },
                        {
                          url: G.a,
                          className: "item-4",
                          style: {
                            left: "32px",
                            top: "-22px",
                            transform: "scale(0.7)",
                          },
                        },
                      ],
                      [
                        {
                          url: it.a,
                          className: "item-0",
                          style: {
                            left: "22px",
                            top: "32px",
                            transform: "scale(0.85)",
                          },
                        },
                        {
                          url: R.a,
                          className: "item-1",
                          style: {
                            left: "45px",
                            top: "8px",
                            transform: "scale(1.2)",
                          },
                        },
                        {
                          url: J.a,
                          className: "item-2",
                          style: {
                            left: "46px",
                            top: "26px",
                            transform: "scale(0.8)",
                          },
                        },
                        {
                          url: et.a,
                          className: "item-3",
                          style: {
                            left: "37px",
                            top: "20px",
                            transform: "scale(1.1)",
                          },
                        },
                        {
                          url: z.a,
                          className: "item-4",
                          style: {
                            left: "21px",
                            top: "33px",
                            transform: "scale(1)",
                          },
                        },
                      ],
                    ];
              },
            },
            mounted: function () {
              var t = this;
              window.conso1e.log(56),
                setTimeout(function () {
                  $.a.get(g["n"] + "/lf20_kjnwk4pv.json").then(function (s) {
                    t.worldOptions.animationData = s.data;
                  });
                }, 0);
            },
            methods: {
              handleAnimation: function (t) {
                (this.anim = t), this.anim.setSpeed(0.4);
              },
            },
          },
          lt = nt,
          ct = (e("1823"), Object(u["a"])(lt, q, B, !1, null, "3a8661d6", null)),
          rt = ct.exports,
          ot = function () {

          },
          pt = [],
          dt = { name: "HomeQuestion" },
          ut = dt,
          vt =
            (e("6f38"), Object(u["a"])(ut, ot, pt, !1, null, "1d5a5898", null)),
          mt = vt.exports,
          _t = function () {

          },
          ft = [],
          ht = { name: "HomeAbout" },
          bt = ht,
          $t =
            (e("622f"), Object(u["a"])(bt, _t, ft, !1, null, "3ed35d0d", null)),
          gt = $t.exports,
          Ct = function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e("div", { staticClass: "copyright" }, [
              t._v("© " + t._s(t.$appName) + " 2023-2026"),
            ]);
          },
          xt = [],
          kt = { name: "Copyright" },
          wt = kt,
          yt =
            (e("c2d5"), Object(u["a"])(wt, Ct, xt, !1, null, "6d581432", null)),
          Nt = yt.exports,
          St = e("6e55"),
          Ot = {
            name: "Home",
            components: {
              HomeHeader: m,
              HomeBanner: w,
              HomeSpec: P,
              HomeAdvance: V,
              HomeService: rt,
              HomeQuestion: mt,
              HomeAbout: gt,
              Copyright: Nt,
            },
            mounted: function () {
              var t = Object(St["a"])(),
                s = {
                  distance: "50%",
                  origin: "bottom",
                  opacity: 0,
                  interval: 120,
                  easing: "ease",
                  duration: 800,
                  delay: 0,
                  useDelay: "onload",
                  viewFactor: 0,
                };
              t.reveal(
                "#reveal .reveal-ele, #reveal .qa-list .ant-collapse-item",
                s
              ),
                window.conso1e.log(167);
            },
          },
          jt = Ot,
          Pt = (e("3113"), Object(u["a"])(jt, a, i, !1, null, null, null));
        s["default"] = Pt.exports;
      },
      cd90: function (t, s, e) {
        t.exports = e.p + "static/img/vultr.adc672c3.svg";
      },
      d786: function (t, s, e) {},
      dafc: function (t, s, e) {
        "use strict";
        e("68d1");
      },
      ec0c: function (t, s, e) {
        t.exports = e.p + "static/img/dmit.4f130797.svg";
      },
      feba: function (t, s, e) {
        t.exports = e.p + "static/img/qa-devices-icon.59c53a97.svg";
      },
      ffbf: function (t, s, e) {
        "use strict";
        e("a48c");
      },
    },
  ]);
  