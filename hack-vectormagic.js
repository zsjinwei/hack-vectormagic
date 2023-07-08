!(function (t) {
  var originImageWidth = 1000;
  var originImageHeight = 1000;
  var originImageName = 'sample.png';
  var ctx = new C2S(originImageWidth, originImageHeight);
  var e,
    i,
    n,
    o,
    s,
    r,
    a,
    h,
    l,
    c,
    u,
    d,
    p,
    m,
    g,
    f,
    w,
    b,
    v,
    S,
    y,
    C,
    x,
    P,
    A,
    T,
    E,
    k,
    I,
    M,
    R,
    F,
    D,
    _,
    B,
    L,
    U,
    N,
    z,
    W,
    O,
    H,
    V,
    X,
    Y,
    G;
  !(function (t) {
    (t.isCommandOrCtrl = function (t) {
      return 17 == t || 224 == t || 91 == t || 93 == t;
    }),
      (t.isShift = function (t) {
        return 16 == t;
      });
  })(e || (e = {})),
    (function (t) {
      t.ajax = function (t) {
        if ('undefined' != typeof csrfToken) {
          'GET' != (t.method || t.type || 'GET').toUpperCase() &&
            (t.url =
              ((e = t.url || ''),
              'undefined' == typeof csrfToken
                ? e
                : e +
                  (e.indexOf('?') < 0 ? '?' : '&') +
                  csrfToken.name +
                  '=' +
                  csrfToken.value));
        }
        var e;
        return $.ajax(t);
      };
    })(i || (i = {})),
    (function (t) {
      const e = /(''|[^']|^){(\d+)}/g,
        n =
          /(''|[^']|^){(\d+),plural,\s*(one\s*{([^}]*)})?\s*(few\s*{([^}]*)})?\s*other\s*{([^}]*)}\s*}/g;
      let o;
      (t.s = function (t, ...o) {
        if (0 == t.length) return '';
        const s = t;
        for (var r = t.length, a = 0; a < r && s.charCodeAt(a) <= 32; ) a++;
        for (; a < r && s.charCodeAt(r - 1) <= 32; ) r--;
        const h = 0 == a ? '' : s.substring(0, a);
        t = 0 == a && r == s.length ? s : s.substring(a, r);
        const l = r == s.length ? '' : s.substring(r, s.length);
        var c = window.I18nPhrases[t];
        return (
          void 0 === c &&
            (!(function (t, e) {
              if (
                ((window.I18nPhrases[t] = t),
                !window.I18nPhrases.__translations_disabled__)
              ) {
                const o = { en: t, args: e };
                i.ajax({
                  url: '/logMissingI18nPhrase',
                  method: 'POST',
                  dataType: 'json',
                  contentType: 'application/json; charset=UTF-8',
                  data: JSON.stringify(o)
                });
                const s = window.I18nPhrases || {};
                for (var n in s) s.hasOwnProperty(n);
              }
            })(t, o),
            (c = t)),
          o.length > 0 &&
            (c = (c = c.replace(e, function (t, e, i) {
              return "''" == e && (e = "'"), e + o[parseInt(i, 10)];
            })).replace(n, function (t, e, i, n, s, r, a, h) {
              "''" == e && (e = "'");
              const l = o[parseInt(i, 10)];
              return (
                e +
                ((function (t, e, i) {
                  switch (GlobalsShared.locale.split('-')[0]) {
                    case 'zh':
                    case 'ja':
                    case 'ko':
                    case 'tr':
                    case 'th':
                    case 'id':
                      return;
                    case 'ru':
                      return t % 10 == 1 && t % 100 != 11
                        ? e
                        : t % 10 >= 2 &&
                          t % 10 <= 4 &&
                          (t % 100 < 10 || t % 100 >= 20)
                        ? i
                        : void 0;
                    case 'po':
                      return 1 == t
                        ? e
                        : t % 10 >= 2 &&
                          t % 10 <= 4 &&
                          (t % 100 < 10 || t % 100 >= 20)
                        ? i
                        : void 0;
                    case 'fr':
                    case 'pt':
                      return t > 1 ? e : void 0;
                    default:
                      return 1 == t ? e : void 0;
                  }
                })(parseInt(l), s, a) || h)
              );
            })),
          h && (c = h + c),
          l && (c += l),
          c
        );
      }),
        (t.commaList = function (t) {
          return t.join(', ');
        }),
        (function (t) {
          t.format = function (t) {
            return '$' + t.toFixed(2);
          };
        })(o || (o = {}));
      class s {
        constructor(t) {
          this.currency = t;
        }
        format(t) {
          return this.currency + t.toFixed(2);
        }
      }
      const r = {};
      function a(t, e, i = GlobalsShared.locale) {
        const n = i + '-' + t,
          a =
            r[n] ||
            (r[n] = (function (t, e) {
              try {
                return new Intl.NumberFormat(e, {
                  style: 'currency',
                  currency: t
                });
              } catch (e) {
                return 'USD' == t ? o : new s(t);
              }
            })(t, i));
        return a.format(e / 100);
      }
      let h;
      (t.dollars = function (t, e = GlobalsShared.locale) {
        return a('USD', t, e);
      }),
        (t.currencyAmount = a),
        (function (t) {
          t.format = function (t) {
            return (100 * t).toFixed(0) + '%';
          };
        })(h || (h = {}));
      const l = {};
      t.percent = function (t, e = GlobalsShared.locale) {
        return (
          l[e] ||
          (l[e] = (function (t) {
            try {
              return new Intl.NumberFormat(t, {
                style: 'percent',
                minimumFractionDigits: 0
              });
            } catch (t) {
              return h;
            }
          })(e))
        ).format(t / 100);
      };
    })(n || (n = {})),
    (function (t) {
      function e(t, e) {
        return t[e];
      }
      (t.get = e),
        (t.getOrElse = function (t, i, n) {
          var o = e(t, i);
          return void 0 === o ? n : o;
        }),
        (t.set = function (t, e, i) {
          return (t[e] = i);
        }),
        (t.cast = function (t) {
          return t;
        });
    })(o || (o = {})),
    (function (t) {
      const e =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        i = [],
        n = new Uint8Array(256);
      for (var s = 0; s < e.length; s++)
        (i[s] = e.charAt(s)), (n[e.charCodeAt(s)] = s);
      function r(t, e) {
        return n[0 | t.charCodeAt(e)];
      }
      function a(t) {
        return i[63 & t];
      }
      (n['-'.charCodeAt(0)] = 62),
        (n['_'.charCodeAt(0)] = 63),
        (t.decode = function (t) {
          if (t.length % 4 > 0)
            throw new Error('Invalid string. Length must be a multiple of 4. ');
          var e,
            i,
            n = t.length,
            o = '=' === t.charAt(n - 2) ? 2 : '=' === t.charAt(n - 1) ? 1 : 0,
            s = new Uint8Array((3 * t.length) / 4 - o),
            a = o > 0 ? t.length - 4 : t.length,
            h = 0;
          function l(t) {
            s[h++] = 255 & t;
          }
          for (e = 0; e < a; e += 4)
            l(
              (i =
                (r(t, e) << 18) |
                (r(t, e + 1) << 12) |
                (r(t, e + 2) << 6) |
                r(t, e + 3)) >> 16
            ),
              l(i >> 8),
              l(i);
          return (
            2 === o
              ? l((i = (r(t, e) << 2) | (r(t, e + 1) >> 4)))
              : 1 === o &&
                (l(
                  (i =
                    (r(t, e) << 10) |
                    (r(t, e + 1) << 4) |
                    (r(t, e + 2) >> 2)) >> 8
                ),
                l(i)),
            s
          );
        }),
        (t.decodeString = function (t, e) {
          try {
            return atob(t);
          } catch (t) {}
          return e;
        }),
        (t.encode = function (t, e) {
          if (t instanceof Uint8Array) {
            const o = (e = e || t.length) % 3;
            var i,
              n = '';
            const r = e - o;
            for (var s = 0; s < r; s += 3)
              (n += a((i = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2]) >> 18)),
                (n += a(i >> 12)),
                (n += a(i >> 6)),
                (n += a(i));
            return (
              1 == o
                ? ((n += a((i = t[r]) >> 2)), (n += a(i << 4)), (n += '=='))
                : 2 == o &&
                  ((n += a((i = (t[r] << 8) + t[r + 1]) >> 10)),
                  (n += a(i >> 4)),
                  (n += a(i << 2)),
                  (n += '=')),
              n.replace(/\!/, '!')
            );
          }
          return btoa(o.cast(t));
        });
    })(s || (s = {})),
    (function (t) {
      (t.MaxMaxNumMegapixels = 1),
        (t.MaxMaxNumPixels = 1048576),
        (t.MaxOutputWidth = 1e4),
        (t.BrowserChromeUrl = 'https://www.google.com/chrome/'),
        (t.BrowserFirefoxUrl = 'https://www.mozilla.org/en-US/firefox/new/'),
        (t.BrowserMicrosoftEdgeUrl = 'https://www.microsoft.com/en-us/edge'),
        (t.MinNumLicensesInPurchase = 1),
        (t.MaxNumLicensesInPurchase = 20);
    })(z || (z = {}));
  class q {
    constructor(t) {
      this._css = t;
    }
    css() {
      return this._css;
    }
    $(t) {
      return (!t && this._cache) || (this._cache = $(this._css));
    }
    join(t, e) {
      return new q(this._css + e + t._css);
    }
    or(t) {
      return this.join(t, ', ');
    }
    and(t) {
      return this.join(t, '');
    }
    anscestorOf(t) {
      return this.join(t, ' ');
    }
    parentOf(t) {
      return this.join(t, '>');
    }
    followedBy(t) {
      return this.join(t, '~');
    }
    immediatelyFollowedBy(t) {
      return this.join(t, '+');
    }
    exists(t) {
      return this.$(t).length > 0;
    }
    addClass(t) {
      return this.$().addClass(t.name()), this;
    }
    removeClass(t) {
      return this.$().removeClass(t.name()), this;
    }
    setClasses(...t) {
      const e = t.map(t => t.name()).join(' ');
      return this.$().attr('class', e), this;
    }
    toggleClass(t, e) {
      return this.$().toggleClass(t.name(), e), this;
    }
    hasClass(t) {
      return this.$().hasClass(t.name());
    }
    addAttr(t) {
      return this.$().attr(t, t), this;
    }
    toggleAttr(t, e) {
      return e ? this.$().attr(t, t) : this.$().removeAttr(t), this;
    }
    removeAttr(t) {
      return this.$().removeAttr(t), this;
    }
  }
  class j extends q {
    tag() {
      return this.css();
    }
    constructor(t) {
      super(t);
    }
  }
  class Z extends q {
    name() {
      return this._name;
    }
    constructor(t) {
      super('.' + t), (this._name = t);
    }
    elements() {
      return document.querySelectorAll(this.css());
    }
  }
  class Q extends q {
    name() {
      return this._name;
    }
    constructor(t) {
      super('#' + t), (this._name = t);
    }
    el() {
      return document.getElementById(this._name);
    }
  }
  class J {
    constructor(t) {
      (this.key = t), (this.caseSensitive = !0);
    }
    caseInsensitive() {
      return (this.caseSensitive = !1), this;
    }
    exists() {
      return new q('[' + this.key + ']');
    }
    build(t, e) {
      return new q(
        '[' +
          this.key +
          t +
          '"' +
          e +
          '"' +
          (this.caseSensitive ? '' : ' i') +
          ']'
      );
    }
    equals(t) {
      return this.build('=', t);
    }
    containsWhitespaceSeparatedToken(t) {
      return this.build('~=', t);
    }
    equalsOrPlusDashStartsWith(t) {
      return this.build('|=', t);
    }
    startsWith(t) {
      return this.build('^=', t);
    }
    endsWidth(t) {
      return this.build('$=', t);
    }
    contains(t) {
      return this.build('*=', t);
    }
  }
  !(function (t) {
    function e(t) {
      return new J(t);
    }
    (t.empty = new q('')),
      (t.html = new q('html')),
      (t.body = new q('body')),
      (t.htmlBody = new q('html, body')),
      (t.$window = $(window)),
      (t.data = function (t) {
        return e('data-' + t);
      }),
      (t.attr = e),
      (t.id = function (t) {
        return new Q(t);
      }),
      (t.c = function (t) {
        return new Z(t);
      });
  })(a || (a = {})),
    (function (t) {
      t.active = new Z('active');
    })(r || (r = {})),
    (function (t) {
      let e, i, n, o, s, r, a, h, l;
      (t.cannot_run_app = t.c('cannot_run_app')),
        (t.canvas_container = t.c('canvas_container')),
        (t.dark_checker = t.c('dark_checker')),
        (t.drop_ready = t.c('drop_ready')),
        (t.dropdown_auto = t.c('dropdown_auto')),
        (t.eyedropper_tool = t.c('eyedropper_tool')),
        (t.grab_closed = t.c('grab_closed')),
        (t.grab_open = t.c('grab_open')),
        (t.jsNotInitializedYet = t.c('jsNotInitializedYet')),
        (t.modern_menu = t.c('modern_menu')),
        (t.noselect = t.c('noselect')),
        (function (e) {
          let i, n, o, s, r;
          (e.App = t.id('App-App')),
            (e.ModernizrAlert = t.id('App-ModernizrAlert')),
            (e.ProgressLightbox = t.id('App-ProgressLightbox')),
            (e.ProgressLightboxBar = t.id('App-ProgressLightboxBar')),
            (e.RemoveBackgroundDialog = t.id('App-RemoveBackgroundDialog')),
            (e.SaveAndExitLightbox = t.id('App-SaveAndExitLightbox')),
            (e.SpinnerLightbox = t.id('App-SpinnerLightbox')),
            (e.cancel_upload = t.c('App-cancel_upload')),
            (e.exit_app = t.c('App-exit_app')),
            (e.flex_horizontal_section = t.c('App-flex_horizontal_section')),
            (e.force_exit = t.c('App-force_exit')),
            (e.new_from_url_link = t.c('App-new_from_url_link')),
            (e.resume_link = t.c('App-resume_link')),
            (e.starter = t.c('App-starter')),
            (e.subapp_sidebar = t.c('App-subapp_sidebar')),
            (function (e) {
              (e.Lightbox = t.id('App-ContextMenu-Lightbox')),
                (e.ToolbarSegEdit = t.id('App-ContextMenu-ToolbarSegEdit')),
                (e.toolbar = t.c('App-ContextMenu-toolbar'));
            })((i = e.ContextMenu || (e.ContextMenu = {}))),
            (function (e) {
              (e.CanvasContainer = t.id('App-ImageView-CanvasContainer')),
                (e.DontEditTooMuchNotification = t.id(
                  'App-ImageView-DontEditTooMuchNotification'
                )),
                (e.LeftCanvas = t.id('App-ImageView-LeftCanvas')),
                (e.RightCanvas = t.id('App-ImageView-RightCanvas')),
                (e.ShrunkNotification = t.id(
                  'App-ImageView-ShrunkNotification'
                )),
                (e.TransparencyNotification = t.id(
                  'App-ImageView-TransparencyNotification'
                )),
                (e.notification = t.c('App-ImageView-notification')),
                (e.single_pane = t.c('App-ImageView-single_pane')),
                (e.vertical_mode = t.c('App-ImageView-vertical_mode'));
            })((n = e.ImageView || (e.ImageView = {}))),
            (function (e) {
              let i, n, o, s, r, a, h, l, c, u, d, p, m, g, f;
              (e.BackButton = t.id('App-Sidebar-BackButton')),
                (e.NextButton = t.id('App-Sidebar-NextButton')),
                (e.OuterPane = t.id('App-Sidebar-OuterPane')),
                (e.bottom_mode = t.c('App-Sidebar-bottom_mode')),
                (e.content_pane = t.c('App-Sidebar-content_pane')),
                (e.job_failed_message = t.c('App-Sidebar-job_failed_message')),
                (function (e) {
                  (e.is_recommended = t.c(
                    'App-Sidebar-BigButton-is_recommended'
                  )),
                    (e.pane = t.c('App-Sidebar-BigButton-pane'));
                })((i = e.BigButton || (e.BigButton = {}))),
                (function (e) {
                  (e.EditSegmentation = t.id(
                    'App-Sidebar-ClassificationFailed-EditSegmentation'
                  )),
                    (e.HandPickSettings = t.id(
                      'App-Sidebar-ClassificationFailed-HandPickSettings'
                    )),
                    (e.Pane = t.id('App-Sidebar-ClassificationFailed-Pane')),
                    (e.Retry = t.id('App-Sidebar-ClassificationFailed-Retry'));
                })(n || (n = {})),
                (e.ClassificationFailed = n),
                (function (e) {
                  (e.EditSegmentation = t.id(
                    'App-Sidebar-FetchingSegmentationFailed-EditSegmentation'
                  )),
                    (e.HandPickSettings = t.id(
                      'App-Sidebar-FetchingSegmentationFailed-HandPickSettings'
                    )),
                    (e.Pane = t.id(
                      'App-Sidebar-FetchingSegmentationFailed-Pane'
                    )),
                    (e.Retry = t.id(
                      'App-Sidebar-FetchingSegmentationFailed-Retry'
                    ));
                })(o || (o = {})),
                (e.FetchingSegmentationFailed = o),
                (function (e) {
                  (e.high = t.c('App-Sidebar-ImageComplexity-high')),
                    (e.low = t.c('App-Sidebar-ImageComplexity-low')),
                    (e.medium = t.c('App-Sidebar-ImageComplexity-medium'));
                })((s = e.ImageComplexity || (e.ImageComplexity = {}))),
                (function (e) {
                  (e.Loupe = t.id('App-Sidebar-ImageComplexityLogo-Loupe')),
                    (e.Pane = t.id('App-Sidebar-ImageComplexityLogo-Pane'));
                })((r = e.ImageComplexityLogo || (e.ImageComplexityLogo = {}))),
                (function (e) {
                  (e.Loupe = t.id('App-Sidebar-ImageComplexityLogoAa-Loupe')),
                    (e.Pane = t.id('App-Sidebar-ImageComplexityLogoAa-Pane'));
                })(
                  (a =
                    e.ImageComplexityLogoAa || (e.ImageComplexityLogoAa = {}))
                ),
                (function (e) {
                  e.Pane = t.id('App-Sidebar-ImageComplexityPhoto-Pane');
                })(
                  (h = e.ImageComplexityPhoto || (e.ImageComplexityPhoto = {}))
                ),
                (function (e) {
                  (e.Logo = t.id('App-Sidebar-ImageType-Logo')),
                    (e.LogoAA = t.id('App-Sidebar-ImageType-LogoAA')),
                    (e.Loupe = t.id('App-Sidebar-ImageType-Loupe')),
                    (e.Pane = t.id('App-Sidebar-ImageType-Pane')),
                    (e.Photo = t.id('App-Sidebar-ImageType-Photo'));
                })((l = e.ImageType || (e.ImageType = {}))),
                (function (e) {
                  (e.AddCustomColor = t.id(
                    'App-Sidebar-PaletteContents-AddCustomColor'
                  )),
                    (e.CustomColor0 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor0'
                    )),
                    (e.CustomColor1 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor1'
                    )),
                    (e.CustomColor10 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor10'
                    )),
                    (e.CustomColor11 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor11'
                    )),
                    (e.CustomColor2 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor2'
                    )),
                    (e.CustomColor3 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor3'
                    )),
                    (e.CustomColor4 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor4'
                    )),
                    (e.CustomColor5 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor5'
                    )),
                    (e.CustomColor6 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor6'
                    )),
                    (e.CustomColor7 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor7'
                    )),
                    (e.CustomColor8 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor8'
                    )),
                    (e.CustomColor9 = t.id(
                      'App-Sidebar-PaletteContents-CustomColor9'
                    )),
                    (e.CustomColorsList = t.id(
                      'App-Sidebar-PaletteContents-CustomColorsList'
                    )),
                    (e.EyeDropper0 = t.id(
                      'App-Sidebar-PaletteContents-EyeDropper0'
                    )),
                    (e.EyeDropper1 = t.id(
                      'App-Sidebar-PaletteContents-EyeDropper1'
                    )),
                    (e.P10 = t.id('App-Sidebar-PaletteContents-P10')),
                    (e.P11 = t.id('App-Sidebar-PaletteContents-P11')),
                    (e.P12 = t.id('App-Sidebar-PaletteContents-P12')),
                    (e.P2 = t.id('App-Sidebar-PaletteContents-P2')),
                    (e.P3 = t.id('App-Sidebar-PaletteContents-P3')),
                    (e.P4 = t.id('App-Sidebar-PaletteContents-P4')),
                    (e.P5 = t.id('App-Sidebar-PaletteContents-P5')),
                    (e.P6 = t.id('App-Sidebar-PaletteContents-P6')),
                    (e.P7 = t.id('App-Sidebar-PaletteContents-P7')),
                    (e.P8 = t.id('App-Sidebar-PaletteContents-P8')),
                    (e.P9 = t.id('App-Sidebar-PaletteContents-P9')),
                    (e.Pane = t.id('App-Sidebar-PaletteContents-Pane')),
                    (e.can_delete = t.c(
                      'App-Sidebar-PaletteContents-can_delete'
                    )),
                    (e.custom_colors_item = t.c(
                      'App-Sidebar-PaletteContents-custom_colors_item'
                    )),
                    (e.custom_swatch = t.c(
                      'App-Sidebar-PaletteContents-custom_swatch'
                    )),
                    (e.delete_color = t.c(
                      'App-Sidebar-PaletteContents-delete_color'
                    )),
                    (e.eye_dropper_swatch = t.c(
                      'App-Sidebar-PaletteContents-eye_dropper_swatch'
                    )),
                    (e.recommended_palette = t.c(
                      'App-Sidebar-PaletteContents-recommended_palette'
                    )),
                    (e.suggested_palettes_item = t.c(
                      'App-Sidebar-PaletteContents-suggested_palettes_item'
                    )),
                    (e.suggested_swatch = t.c(
                      'App-Sidebar-PaletteContents-suggested_swatch'
                    ));
                })((c = e.PaletteContents || (e.PaletteContents = {}))),
                (function (e) {
                  (e.CustomColors = t.id(
                    'App-Sidebar-PaletteYesNo-CustomColors'
                  )),
                    (e.Pane = t.id('App-Sidebar-PaletteYesNo-Pane')),
                    (e.UnlimitedColors = t.id(
                      'App-Sidebar-PaletteYesNo-UnlimitedColors'
                    ));
                })((u = e.PaletteYesNo || (e.PaletteYesNo = {}))),
                (function (e) {
                  let i, n, o;
                  (e.FullyAutomaticContainer = t.id(
                    'App-Sidebar-Progress-FullyAutomaticContainer'
                  )),
                    (e.Pane = t.id('App-Sidebar-Progress-Pane')),
                    (e.bar = t.c('App-Sidebar-Progress-bar')),
                    (e.progress = t.c('App-Sidebar-Progress-progress')),
                    (function (e) {
                      (e.Bar = t.id('App-Sidebar-Progress-Classify-Bar')),
                        (e.Pane = t.id('App-Sidebar-Progress-Classify-Pane'));
                    })(i || (i = {})),
                    (e.Classify = i),
                    (function (e) {
                      (e.Bar = t.id('App-Sidebar-Progress-Upload-Bar')),
                        (e.Pane = t.id('App-Sidebar-Progress-Upload-Pane'));
                    })(n || (n = {})),
                    (e.Upload = n),
                    (function (e) {
                      (e.Bar = t.id('App-Sidebar-Progress-Vectorize-Bar')),
                        (e.Pane = t.id('App-Sidebar-Progress-Vectorize-Pane'));
                    })(o || (o = {})),
                    (e.Vectorize = o);
                })((d = e.Progress || (e.Progress = {}))),
                (function (e) {
                  (e.ChangeCustomPaletteContainer = t.id(
                    'App-Sidebar-ReviewResult-ChangeCustomPaletteContainer'
                  )),
                    (e.CustomColors = t.id(
                      'App-Sidebar-ReviewResult-CustomColors'
                    )),
                    (e.CustomPaletteContainer = t.id(
                      'App-Sidebar-ReviewResult-CustomPaletteContainer'
                    )),
                    (e.DetailHigh = t.id(
                      'App-Sidebar-ReviewResult-DetailHigh'
                    )),
                    (e.DetailLow = t.id('App-Sidebar-ReviewResult-DetailLow')),
                    (e.DetailMedium = t.id(
                      'App-Sidebar-ReviewResult-DetailMedium'
                    )),
                    (e.Download = t.id('App-Sidebar-ReviewResult-Download')),
                    (e.EditResult = t.id(
                      'App-Sidebar-ReviewResult-EditResult'
                    )),
                    (e.HandPickSettings = t.id(
                      'App-Sidebar-ReviewResult-HandPickSettings'
                    )),
                    (e.JaggedEdgesContainer = t.id(
                      'App-Sidebar-ReviewResult-JaggedEdgesContainer'
                    )),
                    (e.Pane = t.id('App-Sidebar-ReviewResult-Pane')),
                    (e.ProcessAsLogoAaWithCustomColorsButton = t.id(
                      'App-Sidebar-ReviewResult-ProcessAsLogoAaWithCustomColorsButton'
                    )),
                    (e.RemoveBackground = t.id(
                      'App-Sidebar-ReviewResult-RemoveBackground'
                    )),
                    (e.ScanOrDrawingContainer = t.id(
                      'App-Sidebar-ReviewResult-ScanOrDrawingContainer'
                    )),
                    (e.SpotsBetweenEdgesContainer = t.id(
                      'App-Sidebar-ReviewResult-SpotsBetweenEdgesContainer'
                    )),
                    (e.UnlimitedColors = t.id(
                      'App-Sidebar-ReviewResult-UnlimitedColors'
                    )),
                    (e.WithBlendingButton = t.id(
                      'App-Sidebar-ReviewResult-WithBlendingButton'
                    )),
                    (e.WithoutBlendingButton = t.id(
                      'App-Sidebar-ReviewResult-WithoutBlendingButton'
                    )),
                    (e.custom_colors = t.c(
                      'App-Sidebar-ReviewResult-custom_colors'
                    )),
                    (e.custom_palette_swatch = t.c(
                      'App-Sidebar-ReviewResult-custom_palette_swatch'
                    )),
                    (e.detail_button = t.c(
                      'App-Sidebar-ReviewResult-detail_button'
                    )),
                    (e.palette_button = t.c(
                      'App-Sidebar-ReviewResult-palette_button'
                    ));
                })((p = e.ReviewResult || (e.ReviewResult = {}))),
                (function (e) {
                  e.Pane = t.id('App-Sidebar-SegEdit-Pane');
                })((m = e.SegEdit || (e.SegEdit = {}))),
                (function (e) {
                  e.Pane = t.id('App-Sidebar-StateMachineBug-Pane');
                })((g = e.StateMachineBug || (e.StateMachineBug = {}))),
                (function (e) {
                  (e.EditSegmentation = t.id(
                    'App-Sidebar-VectorizationFailed-EditSegmentation'
                  )),
                    (e.HandPickSettings = t.id(
                      'App-Sidebar-VectorizationFailed-HandPickSettings'
                    )),
                    (e.Pane = t.id('App-Sidebar-VectorizationFailed-Pane')),
                    (e.Retry = t.id('App-Sidebar-VectorizationFailed-Retry'));
                })(f || (f = {})),
                (e.VectorizationFailed = f);
            })((o = e.Sidebar || (e.Sidebar = {}))),
            (function (e) {
              (e.Lightbox = t.id('App-StickySettings-Lightbox')),
                (e.fully_automatic = t.c('App-StickySettings-fully_automatic')),
                (e.pre_crop_enabled_checkbox = t.c(
                  'App-StickySettings-pre_crop_enabled_checkbox'
                )),
                (e.show = t.c('App-StickySettings-show'));
            })((s = e.StickySettings || (e.StickySettings = {}))),
            (function (e) {
              (e.ColorPicker = t.id('App-Toolbar-ColorPicker')),
                (e.ColorSwatch0 = t.id('App-Toolbar-ColorSwatch0')),
                (e.ColorSwatch1 = t.id('App-Toolbar-ColorSwatch1')),
                (e.Exit = t.id('App-Toolbar-Exit')),
                (e.Fill = t.id('App-Toolbar-Fill')),
                (e.Finder = t.id('App-Toolbar-Finder')),
                (e.NumPanesGroup = t.id('App-Toolbar-NumPanesGroup')),
                (e.Pan = t.id('App-Toolbar-Pan')),
                (e.Pixel = t.id('App-Toolbar-Pixel')),
                (e.Redo = t.id('App-Toolbar-Redo')),
                (e.Reset = t.id('App-Toolbar-Reset')),
                (e.ResultReview = t.id('App-Toolbar-ResultReview')),
                (e.Revert = t.id('App-Toolbar-Revert')),
                (e.RevertMenu = t.id('App-Toolbar-RevertMenu')),
                (e.SegEditViewBitmap = t.id('App-Toolbar-SegEditViewBitmap')),
                (e.SegEditViewVector = t.id('App-Toolbar-SegEditViewVector')),
                (e.SegEditor = t.id('App-Toolbar-SegEditor')),
                (e.Undo = t.id('App-Toolbar-Undo')),
                (e.ViewBitmap = t.id('App-Toolbar-ViewBitmap')),
                (e.ViewSingle = t.id('App-Toolbar-ViewSingle')),
                (e.ViewSplit = t.id('App-Toolbar-ViewSplit')),
                (e.Zap = t.id('App-Toolbar-Zap')),
                (e.Zoom1To1 = t.id('App-Toolbar-Zoom1To1')),
                (e.ZoomIn = t.id('App-Toolbar-ZoomIn')),
                (e.ZoomOut = t.id('App-Toolbar-ZoomOut')),
                (e.ZoomToFit = t.id('App-Toolbar-ZoomToFit')),
                (e.fill_tool = t.c('App-Toolbar-fill_tool')),
                (e.pixel_tool = t.c('App-Toolbar-pixel_tool')),
                (e.revert_link = t.c('App-Toolbar-revert_link')),
                (e.revert_swatch = t.c('App-Toolbar-revert_swatch')),
                (e.tool_button = t.c('App-Toolbar-tool_button')),
                (e.zap_tool = t.c('App-Toolbar-zap_tool'));
            })((r = e.Toolbar || (e.Toolbar = {})));
        })((e = t.App || (t.App = {}))),
        (function (e) {
          (e.Dialog = t.id('FatalError-Dialog')),
            (e.Message = t.id('FatalError-Message'));
        })((i = t.FatalError || (t.FatalError = {}))),
        (function (e) {
          let i;
          (e.Field = t.id('FileInput-Field')),
            (e.PasteTarget = t.id('FileInput-PasteTarget')),
            (e.click_to_upload = t.c('FileInput-click_to_upload')),
            (function (e) {
              (e.Dialog = t.id('FileInput-UploadFromWeb-Dialog')),
                (e.DialogButton = t.id('FileInput-UploadFromWeb-DialogButton')),
                (e.DialogInput = t.id('FileInput-UploadFromWeb-DialogInput')),
                (e.MainButton = t.id('FileInput-UploadFromWeb-MainButton')),
                (e.MainInput = t.id('FileInput-UploadFromWeb-MainInput')),
                (e.show_dialog = t.c('FileInput-UploadFromWeb-show_dialog'));
            })((i = e.UploadFromWeb || (e.UploadFromWeb = {})));
        })((n = t.FileInput || (t.FileInput = {}))),
        (function (e) {
          (e.Id = t.id('Hurricane-Id')),
            (e.Labels = t.id('Hurricane-Labels')),
            (e.Line = t.id('Hurricane-Line')),
            (e.Outlines = t.id('Hurricane-Outlines')),
            (e.Shapes = t.id('Hurricane-Shapes')),
            (e.transformable = t.c('Hurricane-transformable'));
        })(o || (o = {})),
        (t.Hurricane = o),
        (function (e) {
          let i;
          (e.App = t.id('PreCrop-App')),
            (e.ViewContainer = t.id('PreCrop-ViewContainer')),
            (function (e) {
              let i;
              (e.cancel_button = t.c('PreCrop-Sidebar-cancel_button')),
                (e.crop_button = t.c('PreCrop-Sidebar-crop_button')),
                (e.cropped_image_aspect_ratio_display = t.c(
                  'PreCrop-Sidebar-cropped_image_aspect_ratio_display'
                )),
                (e.cropped_image_megapixels_display = t.c(
                  'PreCrop-Sidebar-cropped_image_megapixels_display'
                )),
                (e.cropped_image_size_display = t.c(
                  'PreCrop-Sidebar-cropped_image_size_display'
                )),
                (e.cropped_image_success = t.c(
                  'PreCrop-Sidebar-cropped_image_success'
                )),
                (e.cropped_image_warning = t.c(
                  'PreCrop-Sidebar-cropped_image_warning'
                )),
                (e.input_image_aspect_ratio_display = t.c(
                  'PreCrop-Sidebar-input_image_aspect_ratio_display'
                )),
                (e.input_image_megapixels_display = t.c(
                  'PreCrop-Sidebar-input_image_megapixels_display'
                )),
                (e.input_image_size_display = t.c(
                  'PreCrop-Sidebar-input_image_size_display'
                )),
                (e.lock_aspect_ratio_button = t.c(
                  'PreCrop-Sidebar-lock_aspect_ratio_button'
                )),
                (function (e) {
                  (e.container = t.c(
                    'PreCrop-Sidebar-MaxNumMegapixels-container'
                  )),
                    (e.decrease = t.c(
                      'PreCrop-Sidebar-MaxNumMegapixels-decrease'
                    )),
                    (e.display = t.c(
                      'PreCrop-Sidebar-MaxNumMegapixels-display'
                    )),
                    (e.increase = t.c(
                      'PreCrop-Sidebar-MaxNumMegapixels-increase'
                    )),
                    (e.reset = t.c('PreCrop-Sidebar-MaxNumMegapixels-reset'));
                })(i || (i = {})),
                (e.MaxNumMegapixels = i);
            })((i = e.Sidebar || (e.Sidebar = {})));
        })((s = t.PreCrop || (t.PreCrop = {}))),
        (function (e) {
          (e.NumLicenses = t.id('ProjectMerchant-NumLicenses')),
            (e.Total = t.id('ProjectMerchant-Total')),
            (e.VmdeTotal = t.id('ProjectMerchant-VmdeTotal'));
        })((r = t.ProjectMerchant || (t.ProjectMerchant = {}))),
        (function (e) {
          (e.Body = t.id('RetryDialog-Body')),
            (e.Countdown = t.id('RetryDialog-Countdown')),
            (e.Dialog = t.id('RetryDialog-Dialog')),
            (e.RetryNowButton = t.id('RetryDialog-RetryNowButton'));
        })((a = t.RetryDialog || (t.RetryDialog = {}))),
        (function (e) {
          (e.Dialog = t.id('Signon-Dialog')),
            (e.Header = t.id('Signon-Header')),
            (e.IframeContainer = t.id('Signon-IframeContainer')),
            (e.LoadingIndicator = t.id('Signon-LoadingIndicator')),
            (e.preload = t.c('Signon-preload')),
            (e.trigger = t.c('Signon-trigger'));
        })((h = t.Signon || (t.Signon = {}))),
        (function (e) {
          (e.AcceptTerms = t.id('merchant-AcceptTerms')),
            (e.AcceptTermsWrapper = t.id('merchant-AcceptTermsWrapper')),
            (e.BraintreeDropinContainer = t.id(
              'merchant-BraintreeDropinContainer'
            )),
            (e.Cents = t.id('merchant-Cents')),
            (e.CreditCardProcessorForm = t.id(
              'merchant-CreditCardProcessorForm'
            )),
            (e.DefaultPaymentMethod = t.id('merchant-DefaultPaymentMethod')),
            (e.FailedToLoadPaymentBackendJs = t.id(
              'merchant-FailedToLoadPaymentBackendJs'
            )),
            (e.InitializingIndicator = t.id('merchant-InitializingIndicator')),
            (e.PaymentError = t.id('merchant-PaymentError')),
            (e.PaymentForm = t.id('merchant-PaymentForm')),
            (e.PaymentMethodForm = t.id('merchant-PaymentMethodForm')),
            (e.PaymentMethodFormSubmit = t.id(
              'merchant-PaymentMethodFormSubmit'
            )),
            (e.RadioBraintree = t.id('paymentMethod_braintree')),
            (e.RadioStripe = t.id('paymentMethod_stripe')),
            (e.ShowWhenCreatingPm = t.id('merchant-ShowWhenCreatingPm')),
            (e.ShowWhenMinibrowsing = t.id('merchant-ShowWhenMinibrowsing')),
            (e.ShowWhenSubmitting = t.id('merchant-ShowWhenSubmitting')),
            (e.StreamlexPaymentToken = t.id('merchant-StreamlexPaymentToken')),
            (e.StripeCardElement = t.id('merchant-StripeCardElement')),
            (e.StripeCardErrors = t.id('merchant-StripeCardErrors')),
            (e.StripeNameElement = t.id('merchant-StripeNameElement')),
            (e.StripeNameErrors = t.id('merchant-StripeNameErrors')),
            (e.StripePaymentError = t.id('merchant-StripePaymentError')),
            (e.SubmitSection = t.id('merchant-SubmitSection')),
            (e.TaxLocationPostalCode = t.id('merchant-TaxLocationPostalCode')),
            (e.TaxPostalCode = t.id('merchant-TaxPostalCode')),
            (e.TaxPostalCodeFormGroup = t.id(
              'merchant-TaxPostalCodeFormGroup'
            )),
            (e.TaxSection = t.id('merchant-TaxSection')),
            (e.has_error = t.c('has-error')),
            (e.radio_paymentMethod = t.c('radio_paymentMethod'));
        })((l = t.merchant || (t.merchant = {})));
    })(a || (a = {})),
    (function (t) {
      const e = [0];
      function i(t, e) {
        return t.toFixed(e).replace(/\.?0+$/, '');
      }
      function n(t, e) {
        'use strict';
        if (null == t) throw new TypeError("can't convert " + t + ' to object');
        if (((e = +e) != e && (e = 0), e < 0))
          throw new RangeError('repeat count must be non-negative');
        if (e == 1 / 0)
          throw new RangeError('repeat count must be less than infinity');
        if (((e = Math.floor(e)), 0 == t.length || 0 == e)) return '';
        if (t.length * e >= 1 << 28)
          throw new RangeError(
            'repeat count must not overflow maximum string size'
          );
        for (var i = '', n = 0; n < e; n++) i += t;
        return i;
      }
      function r(t, e) {
        return ((t % e) + e) % e;
      }
      function a(t, e) {
        return ((t % e) - e) % e;
      }
      function h(t) {
        if (!t) return null;
        const e = t.match(/data:(.*?)(;base64)?,(.*)/);
        if (!e) return null;
        const i = e[1] || 'text/plain',
          n = !!e[2],
          o = decodeURIComponent(e[3].trim());
        if (n) {
          const t = s.decode(o);
          let e = new Blob([t], { type: i });
          return (
            e.size != t.length && (e = new Blob([t.buffer], { type: i })), e
          );
        }
        return new Blob([o], { type: i });
      }
      function l(t, e, i) {
        const n = t;
        return (
          (n.name = e), o.set(n, 'lastModifiedDate', i || Date.now()), o.cast(n)
        );
      }
      (t.tic = function () {
        e.push(Date.now());
      }),
        (t.toc = function (t) {
          Date.now(), e.pop();
        }),
        (t.toFixed = i),
        (t.formatAspectRatio = function (t) {
          return i(t.w, 3) + ':' + i(t.h, 3);
        }),
        (t.hex = function (t, e) {
          return ('000000000' + t.toString(16)).substr(-e);
        }),
        (t.fuzzyAspectRatioEx = function (t, e) {
          for (var i = t.w / t.h, n = 0; n < e.length; n++) {
            var o = e[n],
              s = o.w / o.h;
            if (Math.abs((i - s) / s) < 0.01) return o;
          }
          return t.w > t.h ? { w: t.w / t.h, h: 1 } : { w: 1, h: t.h / t.w };
        }),
        (t.roundTo = function (t, e) {
          return parseFloat(t.toFixed(e));
        }),
        (t.empty = function () {}),
        (t.sign = function (t) {
          return 0 == t ? 0 : t > 0 ? 1 : -1;
        }),
        (t.clamp = function (t, e, i) {
          return Math.max(e, Math.min(t, i));
        }),
        (t.log10 = function (t) {
          return Math.log(t) / Math.LN10;
        }),
        (t.parseIntWithAlt = function (t, e, i) {
          const n = parseInt(t, e);
          return isNaN(n) ? i : n;
        }),
        (t.padStart = function (t, e, i) {
          return (
            (e >>= 0),
            (i = String(void 0 !== i ? i : ' ')),
            t.length > e
              ? String(t)
              : ((e -= t.length) > i.length && (i += n(i, e / i.length)),
                i.slice(0, e) + String(t))
          );
        }),
        (t.repeat = n),
        (t.posMod = r),
        (t.negMod = a),
        (t.minMod = function (t, e) {
          var i = r(t, e),
            n = a(t, e);
          return Math.abs(i) <= Math.abs(n) ? i : n;
        }),
        (t.startsWith = function (t, e) {
          return 0 == t.lastIndexOf(e, 0);
        }),
        (t.endsWith = function (t, e) {
          return t.indexOf(e, t.length - e.length) >= 0;
        }),
        (t.blobToArrayBuffer = function (t, e, i) {
          var n = new FileReader();
          (n.onerror = n.onabort = i),
            (n.onloadend = function (t) {
              e(o.cast(n.result));
            }),
            n.readAsArrayBuffer(t);
        }),
        (t.blobToString = function (t, e, i) {
          var n = new FileReader();
          (n.onerror = n.onabort = i),
            (n.onloadend = function (t) {
              e(o.cast(n.result));
            }),
            n.readAsText(t);
        }),
        (t.dataUrlToBlob = h),
        (t.dataUrlToFile = function (t, e) {
          return l(h(t), e);
        }),
        (t.blobToFile = l),
        (t.svgStringToDataUrl = function (t) {
          return 'data:image/svg+xml;base64,' + btoa(t);
        }),
        (t.toDataUrl = function (t, e) {
          return 'data:' + e + ';base64,' + s.encode(t);
        }),
        (t.min = function (t) {
          return Math.min.apply(null, t);
        }),
        (t.max = function (t) {
          return Math.max.apply(null, t);
        }),
        (t.minBy = function (t, e) {
          if (0 != t.length) {
            let i = 0,
              n = t[0],
              o = e(n);
            for (let s = 1; s < t.length; s++) {
              let r = t[s],
                a = e(r);
              a < o && ((n = r), (o = a), (i = s));
            }
            return { min: n, value: o, index: i };
          }
        }),
        (t.maxBy = function (t, e) {
          if (0 != t.length) {
            let i = 0,
              n = t[0],
              o = e(n);
            for (let s = 1; s < t.length; s++) {
              let r = t[s],
                a = e(r);
              a > o && ((n = r), (o = a), (i = s));
            }
            return { max: n, value: o, index: i };
          }
        }),
        (t.signedNumber = function (t) {
          return 0 == t ? '0' : t > 0 ? '+' + t : '' + t;
        }),
        (t.splitExtensionFromFilename = function (t) {
          let e = t.lastIndexOf('.');
          return e >= 0
            ? { base: t.substr(0, e), extension: t.substr(e + 1) }
            : { base: t, extension: '' };
        }),
        (t.dropExtension = function (t) {
          let e = t.lastIndexOf('.');
          return e >= 0 ? t.substr(0, e) : t;
        }),
        (t.getExtensionWithDot = function (t) {
          let e = t.lastIndexOf('.');
          return e >= 0 ? t.substr(e) : '';
        }),
        (t.getExtensionNoDot = function (t) {
          let e = t.lastIndexOf('.');
          return e >= 0 ? t.substr(e + 1) : '';
        }),
        (t.parsePx = function (t) {
          try {
            return parseInt(t);
          } catch (t) {
            return 0;
          }
        }),
        (t.colorBytesToRgbaCss = function (t) {
          return 'rgba(' + t.join(',') + ')';
        }),
        (t.colorBytesToAbgr32 = function (t) {
          return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
        }),
        (t.colorBytesToRgba32 = function (t) {
          return (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3];
        }),
        (t.spliterate = function (t, e, i) {
          for (var n, o = 0; (n = t.indexOf(e, o)) >= 0; )
            i(t.substring(o, n)), (o = n + e.length);
          o < t.length - 1 && i(t.substring(o, t.length));
        }),
        (t.stringify = function (t) {
          if (void 0 === t) return 'undefined';
          if (null == t) return 'null';
          if (t.hasOwnProperty('message')) return t.message || '[No message]';
          if ('string' == typeof t) return t;
          try {
            return JSON.stringify(t);
          } catch (e) {
            return t.toString();
          }
        }),
        (t.join16 = function (t, e) {
          return t.map(t => (0 | t).toString(16)).join(e);
        }),
        (t.uint8ArrayToString = function (t) {
          for (var e = '', i = 0; i < t.byteLength; i++)
            e += String.fromCharCode(t[i]);
          return e;
        }),
        (t.randomInt = function (t) {
          return Math.floor(Math.random() * t);
        }),
        (t.randomInt2 = function (t, e) {
          return Math.floor(Math.random() * (e - t) + t);
        }),
        (t.centerElide = function (t, e) {
          if (t && t.length >= e) {
            let i = Math.floor((e - 4) / 2);
            return t.substring(0, i) + '...' + t.substring(t.length - i);
          }
          return t;
        }),
        (t.elide = function (t, e) {
          return t && t.length >= e ? t.substring(0, e - 3) + '...' : t;
        }),
        (t.sqr = function (t) {
          return t * t;
        }),
        (t.cube = function (t) {
          return t * t * t;
        }),
        (t.safeDiv = function (t, e, i = 0) {
          return 0 == e ? i : t / e;
        }),
        (t.find = function (t, e) {
          for (var i = 0; i < t.length; i++) if (e(t[i])) return t[i];
          return null;
        });
    })(f || (f = {}));
  class K {
    constructor(t) {
      (this.data = new Uint8Array(t)), (this.offsetCount = 0);
    }
    length() {
      return this.data.length;
    }
    hasMore() {
      return this.offsetCount < this.data.length;
    }
    skip(t) {
      this.offsetCount += t;
    }
    nonEmpty() {
      return this.data.length > 0;
    }
    readInt8() {
      return this.data[this.offsetCount++];
    }
    readInt8s(t) {
      var e = this.data.slice(this.offsetCount, this.offsetCount + t);
      return (this.offsetCount += t), e;
    }
    readInt16() {
      return (
        256 * this.data[this.offsetCount++] + this.data[this.offsetCount++]
      );
    }
    readInt24() {
      return (
        256 * this.data[this.offsetCount++] * 256 +
        256 * this.data[this.offsetCount++] +
        this.data[this.offsetCount++]
      );
    }
    readInt32() {
      return (
        256 * this.data[this.offsetCount++] * 256 * 256 +
        256 * this.data[this.offsetCount++] * 256 +
        256 * this.data[this.offsetCount++] +
        this.data[this.offsetCount++]
      );
    }
    readSignedInt16() {
      var t = this.readInt16();
      return t >= 32768 && (t -= 65536), t;
    }
  }
  !(function (t) {
    const e = {
        36864: 'ExifVersion',
        40960: 'FlashpixVersion',
        40961: 'ColorSpace',
        40962: 'PixelXDimension',
        40963: 'PixelYDimension',
        37121: 'ComponentsConfiguration',
        37122: 'CompressedBitsPerPixel',
        37500: 'MakerNote',
        37510: 'UserComment',
        40964: 'RelatedSoundFile',
        36867: 'DateTimeOriginal',
        36868: 'DateTimeDigitized',
        37520: 'SubsecTime',
        37521: 'SubsecTimeOriginal',
        37522: 'SubsecTimeDigitized',
        33434: 'ExposureTime',
        33437: 'FNumber',
        34850: 'ExposureProgram',
        34852: 'SpectralSensitivity',
        34855: 'ISOSpeedRatings',
        34856: 'OECF',
        37377: 'ShutterSpeedValue',
        37378: 'ApertureValue',
        37379: 'BrightnessValue',
        37380: 'ExposureBias',
        37381: 'MaxApertureValue',
        37382: 'SubjectDistance',
        37383: 'MeteringMode',
        37384: 'LightSource',
        37385: 'Flash',
        37396: 'SubjectArea',
        37386: 'FocalLength',
        41483: 'FlashEnergy',
        41484: 'SpatialFrequencyResponse',
        41486: 'FocalPlaneXResolution',
        41487: 'FocalPlaneYResolution',
        41488: 'FocalPlaneResolutionUnit',
        41492: 'SubjectLocation',
        41493: 'ExposureIndex',
        41495: 'SensingMethod',
        41728: 'FileSource',
        41729: 'SceneType',
        41730: 'CFAPattern',
        41985: 'CustomRendered',
        41986: 'ExposureMode',
        41987: 'WhiteBalance',
        41988: 'DigitalZoomRation',
        41989: 'FocalLengthIn35mmFilm',
        41990: 'SceneCaptureType',
        41991: 'GainControl',
        41992: 'Contrast',
        41993: 'Saturation',
        41994: 'Sharpness',
        41995: 'DeviceSettingDescription',
        41996: 'SubjectDistanceRange',
        40965: 'InteroperabilityIFDPointer',
        42016: 'ImageUniqueID'
      },
      i = {
        256: 'ImageWidth',
        257: 'ImageHeight',
        34665: 'ExifIFDPointer',
        34853: 'GPSInfoIFDPointer',
        40965: 'InteroperabilityIFDPointer',
        258: 'BitsPerSample',
        259: 'Compression',
        262: 'PhotometricInterpretation',
        274: 'Orientation',
        277: 'SamplesPerPixel',
        284: 'PlanarConfiguration',
        530: 'YCbCrSubSampling',
        531: 'YCbCrPositioning',
        282: 'XResolution',
        283: 'YResolution',
        296: 'ResolutionUnit',
        273: 'StripOffsets',
        278: 'RowsPerStrip',
        279: 'StripByteCounts',
        513: 'JPEGInterchangeFormat',
        514: 'JPEGInterchangeFormatLength',
        301: 'TransferFunction',
        318: 'WhitePoint',
        319: 'PrimaryChromaticities',
        529: 'YCbCrCoefficients',
        532: 'ReferenceBlackWhite',
        306: 'DateTime',
        270: 'ImageDescription',
        271: 'Make',
        272: 'Model',
        305: 'Software',
        315: 'Artist',
        33432: 'Copyright'
      },
      n = {
        0: 'GPSVersionID',
        1: 'GPSLatitudeRef',
        2: 'GPSLatitude',
        3: 'GPSLongitudeRef',
        4: 'GPSLongitude',
        5: 'GPSAltitudeRef',
        6: 'GPSAltitude',
        7: 'GPSTimeStamp',
        8: 'GPSSatellites',
        9: 'GPSStatus',
        10: 'GPSMeasureMode',
        11: 'GPSDOP',
        12: 'GPSSpeedRef',
        13: 'GPSSpeed',
        14: 'GPSTrackRef',
        15: 'GPSTrack',
        16: 'GPSImgDirectionRef',
        17: 'GPSImgDirection',
        18: 'GPSMapDatum',
        19: 'GPSDestLatitudeRef',
        20: 'GPSDestLatitude',
        21: 'GPSDestLongitudeRef',
        22: 'GPSDestLongitude',
        23: 'GPSDestBearingRef',
        24: 'GPSDestBearing',
        25: 'GPSDestDistanceRef',
        26: 'GPSDestDistance',
        27: 'GPSProcessingMethod',
        28: 'GPSAreaInformation',
        29: 'GPSDateStamp',
        30: 'GPSDifferential'
      },
      o = {
        ExposureProgram: {
          0: 'Not defined',
          1: 'Manual',
          2: 'Normal program',
          3: 'Aperture priority',
          4: 'Shutter priority',
          5: 'Creative program',
          6: 'Action program',
          7: 'Portrait mode',
          8: 'Landscape mode'
        },
        MeteringMode: {
          0: 'Unknown',
          1: 'Average',
          2: 'CenterWeightedAverage',
          3: 'Spot',
          4: 'MultiSpot',
          5: 'Pattern',
          6: 'Partial',
          255: 'Other'
        },
        LightSource: {
          0: 'Unknown',
          1: 'Daylight',
          2: 'Fluorescent',
          3: 'Tungsten (incandescent light)',
          4: 'Flash',
          9: 'Fine weather',
          10: 'Cloudy weather',
          11: 'Shade',
          12: 'Daylight fluorescent (D 5700 - 7100K)',
          13: 'Day white fluorescent (N 4600 - 5400K)',
          14: 'Cool white fluorescent (W 3900 - 4500K)',
          15: 'White fluorescent (WW 3200 - 3700K)',
          17: 'Standard light A',
          18: 'Standard light B',
          19: 'Standard light C',
          20: 'D55',
          21: 'D65',
          22: 'D75',
          23: 'D50',
          24: 'ISO studio tungsten',
          255: 'Other'
        },
        Flash: {
          0: 'Flash did not fire',
          1: 'Flash fired',
          5: 'Strobe return light not detected',
          7: 'Strobe return light detected',
          9: 'Flash fired, compulsory flash mode',
          13: 'Flash fired, compulsory flash mode, return light not detected',
          15: 'Flash fired, compulsory flash mode, return light detected',
          16: 'Flash did not fire, compulsory flash mode',
          24: 'Flash did not fire, auto mode',
          25: 'Flash fired, auto mode',
          29: 'Flash fired, auto mode, return light not detected',
          31: 'Flash fired, auto mode, return light detected',
          32: 'No flash function',
          65: 'Flash fired, red-eye reduction mode',
          69: 'Flash fired, red-eye reduction mode, return light not detected',
          71: 'Flash fired, red-eye reduction mode, return light detected',
          73: 'Flash fired, compulsory flash mode, red-eye reduction mode',
          77: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
          79: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
          89: 'Flash fired, auto mode, red-eye reduction mode',
          93: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
          95: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
        },
        SensingMethod: {
          1: 'Not defined',
          2: 'One-chip color area sensor',
          3: 'Two-chip color area sensor',
          4: 'Three-chip color area sensor',
          5: 'Color sequential area sensor',
          7: 'Trilinear sensor',
          8: 'Color sequential linear sensor'
        },
        SceneCaptureType: {
          0: 'Standard',
          1: 'Landscape',
          2: 'Portrait',
          3: 'Night scene'
        },
        SceneType: { 1: 'Directly photographed' },
        CustomRendered: { 0: 'Normal process', 1: 'Custom process' },
        WhiteBalance: { 0: 'Auto white balance', 1: 'Manual white balance' },
        GainControl: {
          0: 'None',
          1: 'Low gain up',
          2: 'High gain up',
          3: 'Low gain down',
          4: 'High gain down'
        },
        Contrast: { 0: 'Normal', 1: 'Soft', 2: 'Hard' },
        Saturation: { 0: 'Normal', 1: 'Low saturation', 2: 'High saturation' },
        Sharpness: { 0: 'Normal', 1: 'Soft', 2: 'Hard' },
        SubjectDistanceRange: {
          0: 'Unknown',
          1: 'Macro',
          2: 'Close view',
          3: 'Distant view'
        },
        FileSource: { 3: 'DSC' },
        Components: { 0: '', 1: 'Y', 2: 'Cb', 3: 'Cr', 4: 'R', 5: 'G', 6: 'B' }
      };
    const s = {
      120: 'caption',
      110: 'credit',
      25: 'keywords',
      55: 'dateCreated',
      80: 'byline',
      85: 'bylineTitle',
      122: 'captionWriter',
      105: 'headline',
      116: 'copyright',
      15: 'category'
    };
    function r(t, e, i) {
      for (var n, o, r, a, h = new DataView(t), c = {}, u = e; u < e + i; )
        28 === h.getUint8(u) &&
          2 === h.getUint8(u + 1) &&
          (a = h.getUint8(u + 2)) in s &&
          ((r = h.getInt16(u + 3)) + 5,
          (o = s[a]),
          (n = l(h, u + 5, r)),
          c.hasOwnProperty(o)
            ? c[o] instanceof Array
              ? c[o].push(n)
              : (c[o] = [c[o], n])
            : (c[o] = n)),
          u++;
      return c;
    }
    function a(t, e, i, n, o) {
      var s,
        r,
        a = t.getUint16(i, !o),
        l = {};
      for (r = 0; r < a; r++)
        (s = i + 12 * r + 2), (l[n[t.getUint16(s, !o)]] = h(t, s, e, i, o));
      return l;
    }
    function h(t, e, i, n, o) {
      var s,
        r,
        a,
        h,
        c,
        u,
        d = t.getUint16(e + 2, !o),
        p = t.getUint32(e + 4, !o),
        m = t.getUint32(e + 8, !o) + i;
      switch (d) {
        case 1:
        case 7:
          if (1 == p) return t.getUint8(e + 8);
          for (s = p > 4 ? m : e + 8, r = [], h = 0; h < p; h++)
            r[h] = t.getUint8(s + h);
          return r;
        case 2:
          return l(t, (s = p > 4 ? m : e + 8), p - 1);
        case 3:
          if (1 == p) return t.getUint16(e + 8, !o);
          for (s = p > 2 ? m : e + 8, r = [], h = 0; h < p; h++)
            r[h] = t.getUint16(s + 2 * h, !o);
          return r;
        case 4:
          if (1 == p) return t.getUint32(e + 8, !o);
          for (r = [], h = 0; h < p; h++) r[h] = t.getUint32(m + 4 * h, !o);
          return r;
        case 5:
          if (1 == p)
            return (
              (c = t.getUint32(m, !o)),
              (u = t.getUint32(m + 4, !o)),
              ((a = new Number(c / u)).numerator = c),
              (a.denominator = u),
              a
            );
          for (r = [], h = 0; h < p; h++)
            (c = t.getUint32(m + 8 * h, !o)),
              (u = t.getUint32(m + 4 + 8 * h, !o)),
              (r[h] = new Number(c / u)),
              (r[h].numerator = c),
              (r[h].denominator = u);
          return r;
        case 9:
          if (1 == p) return t.getInt32(e + 8, !o);
          for (r = [], h = 0; h < p; h++) r[h] = t.getInt32(m + 4 * h, !o);
          return r;
        case 10:
          if (1 == p) return t.getInt32(m, !o) / t.getInt32(m + 4, !o);
          for (r = [], h = 0; h < p; h++)
            r[h] = t.getInt32(m + 8 * h, !o) / t.getInt32(m + 4 + 8 * h, !o);
          return r;
      }
    }
    function l(t, e, i) {
      for (var n = '', o = e; o < e + i; o++)
        n += String.fromCharCode(t.getUint8(o));
      return n;
    }
    function c(t, s, r) {
      if ('Exif' != l(t, s, 4)) return !1;
      var h,
        c,
        u,
        d,
        p,
        m = s + 6;
      if (18761 == t.getUint16(m)) h = !1;
      else {
        if (19789 != t.getUint16(m)) return !1;
        h = !0;
      }
      if (42 != t.getUint16(m + 2, !h)) return !1;
      var g = t.getUint32(m + 4, !h);
      if (g < 8) return !1;
      if ((c = a(t, m, m + g, i, h)).ExifIFDPointer)
        for (u in (d = a(t, m, m + c.ExifIFDPointer, e, h))) {
          switch (u) {
            case 'LightSource':
            case 'Flash':
            case 'MeteringMode':
            case 'ExposureProgram':
            case 'SensingMethod':
            case 'SceneCaptureType':
            case 'SceneType':
            case 'CustomRendered':
            case 'WhiteBalance':
            case 'GainControl':
            case 'Contrast':
            case 'Saturation':
            case 'Sharpness':
            case 'SubjectDistanceRange':
            case 'FileSource':
              d[u] = o[u][d[u]];
              break;
            case 'ExifVersion':
            case 'FlashpixVersion':
              d[u] = String.fromCharCode(d[u][0], d[u][1], d[u][2], d[u][3]);
              break;
            case 'ComponentsConfiguration':
              d[u] =
                o.Components[d[u][0]] +
                o.Components[d[u][1]] +
                o.Components[d[u][2]] +
                o.Components[d[u][3]];
          }
          c[u] = d[u];
        }
      if (c.GPSInfoIFDPointer)
        for (u in (p = a(t, m, m + c.GPSInfoIFDPointer, n, h))) {
          if ('GPSVersionID' === u)
            p[u] = p[u][0] + '.' + p[u][1] + '.' + p[u][2] + '.' + p[u][3];
          c[u] = p[u];
        }
      return c;
    }
    t.readFromBinaryFile = function (t) {
      const e = (function (t) {
          var e = new DataView(t);
          if (255 != e.getUint8(0) || 216 != e.getUint8(1)) return !1;
          for (
            var i = 2,
              n = t.byteLength,
              o = function (t, e) {
                return (
                  56 === t.getUint8(e) &&
                  66 === t.getUint8(e + 1) &&
                  73 === t.getUint8(e + 2) &&
                  77 === t.getUint8(e + 3) &&
                  4 === t.getUint8(e + 4) &&
                  4 === t.getUint8(e + 5)
                );
              };
            i < n;

          ) {
            if (o(e, i)) {
              var s = e.getUint8(i + 7);
              return (
                s % 2 != 0 && (s += 1),
                0 === s && (s = 4),
                r(t, i + 8 + s, e.getUint16(i + 6 + s))
              );
            }
            i++;
          }
        })(t),
        i = (function (t) {
          var e = new DataView(t);
          if (255 != e.getUint8(0) || 216 != e.getUint8(1)) return !1;
          for (var i = 2, n = t.byteLength; i < n; ) {
            if (255 != e.getUint8(i)) return !1;
            if (225 == e.getUint8(i + 1))
              return c(e, i + 4, e.getUint16(i + 2));
            i += 2 + e.getUint16(i + 2);
          }
        })(t);
      return { iptc: e, exif: i };
    };
  })(h || (h = {})),
    (function (t) {
      (t[(t.Undefined = 0)] = 'Undefined'),
        (t[(t.R0 = 1)] = 'R0'),
        (t[(t.R90 = 2)] = 'R90'),
        (t[(t.R180 = 3)] = 'R180'),
        (t[(t.R270 = 4)] = 'R270');
    })(l || (l = {})),
    (function (t) {
      (t[(t.Undefined = 0)] = 'Undefined'),
        (t[(t.Uncalibrated = 1)] = 'Uncalibrated'),
        (t[(t.sRgb = 2)] = 'sRgb'),
        (t[(t.adobeRgb = 3)] = 'adobeRgb');
    })(c || (c = {})),
    (function (t) {
      (t[(t.Success = 0)] = 'Success'),
        (t[(t.ErrorFileReader = 1)] = 'ErrorFileReader'),
        (t[(t.ErrorParse = 2)] = 'ErrorParse'),
        (t[(t.ErrorException = 3)] = 'ErrorException');
    })(u || (u = {})),
    (function (t) {
      (t[(t.Undefined = 0)] = 'Undefined'),
        (t[(t.None = 1)] = 'None'),
        (t[(t.Inch = 2)] = 'Inch'),
        (t[(t.Centimeter = 3)] = 'Centimeter'),
        (t[(t.Meter = 4)] = 'Meter');
    })(d || (d = {}));
  class tt {
    constructor(t, e, i, n, o, s, r, a) {
      (this.statusCode = t),
        (this.width = e),
        (this.height = i),
        (this.orientation = n),
        (this.resolutionUnits = o),
        (this.resolutionX = s),
        (this.resolutionY = r),
        (this.colorSpace = a);
    }
  }
  !(function (t) {
    const e = [137, 80, 78, 71, 13, 10, 26, 10],
      i = new Number(0);
    function n(t) {
      return new tt(t, 0, 0, l.Undefined, d.Undefined, 0, 0, c.Undefined);
    }
    (t.inverseOrientation = function (t) {
      switch (t) {
        default:
        case l.Undefined:
          return l.Undefined;
        case l.R0:
          return l.R0;
        case l.R90:
          return l.R270;
        case l.R180:
          return l.R180;
        case l.R270:
          return l.R90;
      }
    }),
      (t.get = function (t, s) {
        f.blobToArrayBuffer(
          t,
          function (r) {
            try {
              let a = new K(r);
              switch (t.type) {
                case 'image/png':
                  s(
                    (function (t) {
                      for (let i = 0; i < e.length && t.hasMore(); i++)
                        if (e[i] != t.readInt8()) return n(u.ErrorParse);
                      let i = 0,
                        o = 0,
                        s = 0,
                        r = 0,
                        a = d.Undefined,
                        h = c.Undefined,
                        p = l.Undefined;
                      for (; t.hasMore(); ) {
                        let e = t.readInt32(),
                          n = f.uint8ArrayToString(t.readInt8s(4));
                        if ('pHYs' == n) {
                          (i = t.readInt32()), (o = t.readInt32());
                          let e = t.readInt8();
                          a = 0 == e ? d.None : 1 == e ? d.Meter : d.Undefined;
                        } else if ('IHDR' == n) {
                          let i = t.offsetCount;
                          (s = t.readInt32()),
                            (r = t.readInt32()),
                            (t.offsetCount = i),
                            t.readInt8s(e);
                        } else if ('iCCP' == n) {
                          let i = t.offsetCount,
                            n = '',
                            o = t.readInt8(),
                            s = 0;
                          for (; 0 != o && s < 79; )
                            (n += String.fromCharCode(o)),
                              (o = t.readInt8()),
                              s++;
                          t.readInt8s(e - (t.offsetCount - i));
                        } else t.readInt8s(e);
                        t.readInt32();
                      }
                      return new tt(u.Success, s, r, p, a, i, o, h);
                    })(a)
                  );
                  break;
                case 'image/jpg':
                case 'image/jpeg':
                  s(
                    (function (t) {
                      let e = i,
                        n = i,
                        s = 0,
                        r = 0,
                        a = d.Undefined,
                        p = c.Undefined,
                        m = l.Undefined,
                        g = h.readFromBinaryFile(t.data.buffer);
                      if (g.exif) {
                        (e = o.getOrElse(g.exif, 'XResolution', i)),
                          (n = o.getOrElse(g.exif, 'YResolution', i)),
                          (s = o.getOrElse(g.exif, 'ImageWidth', 0)),
                          (r = o.getOrElse(g.exif, 'ImageHeight', 0));
                        let t = o.getOrElse(g.exif, 'ResolutionUnit', 0);
                        a =
                          3 == t
                            ? d.Centimeter
                            : 2 == t
                            ? d.Inch
                            : 1 == t
                            ? d.None
                            : d.Undefined;
                        let h = o.getOrElse(g.exif, 'ColorSpace', 0);
                        p =
                          65535 == h
                            ? c.Uncalibrated
                            : 1 == h
                            ? c.sRgb
                            : c.Undefined;
                        let u = o.getOrElse(g.exif, 'Orientation', 0);
                        m =
                          1 == u
                            ? l.R0
                            : 3 == u
                            ? l.R180
                            : 6 == u
                            ? l.R90
                            : 8 == u
                            ? l.R270
                            : l.Undefined;
                      }
                      return new tt(u.Success, s, r, m, a, e, n, p);
                    })(a)
                  );
                  break;
                default:
                  s(n(u.ErrorParse));
              }
            } catch (t) {
              s(n(u.ErrorException));
            }
          },
          function (t) {
            s(n(u.ErrorFileReader));
          }
        );
      });
  })(p || (p = {}));
  class et {
    constructor(t, e) {
      (this.x = t), (this.y = e);
    }
    static empty() {
      return new et(0, 0);
    }
    static zero() {
      return new et(0, 0);
    }
    static nan() {
      return new et(Number.NaN, Number.NaN);
    }
    static from(t) {
      return new et(t.x, t.y);
    }
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
    inFinite() {
      return this.isFinite();
    }
    isFinite() {
      return isFinite(this.x) && isFinite(this.y);
    }
    isNaN() {
      return isNaN(this.x) || isNaN(this.y);
    }
    interpolate(t, e) {
      return new et(this.x * (1 - e) + t.x * e, this.y * (1 - e) + t.y * e);
    }
    setInterpolated(t, e, i) {
      return this.setXy(t.x * (1 - i) + e.x * i, t.y * (1 - i) + e.y * i);
    }
    distanceSqrTo(t) {
      let e = this.x - t.x,
        i = this.y - t.y;
      return e * e + i * i;
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceSqrTo(t));
    }
    offset(t, e) {
      return new et(this.x + t, this.y + e);
    }
    set(t) {
      return (this.x = t.x), (this.y = t.y), this;
    }
    setXy(t, e) {
      return (this.x = t), (this.y = e), this;
    }
    setNan() {
      return this.setXy(Number.NaN, Number.NaN);
    }
    round() {
      return new et(Math.round(this.x), Math.round(this.y));
    }
    floor() {
      return new et(Math.floor(this.x), Math.floor(this.y));
    }
    snap(t = 0.5, e = 0.5) {
      return new et(Math.floor(this.x) + t, Math.floor(this.y) + e);
    }
    rotateInPlace(t, e) {
      const i = Math.sin(t),
        n = Math.cos(t),
        o = this.x - e.x,
        s = this.y - e.y;
      return this.setXy(e.x + n * o - i * s, e.y + i * o + n * s), this;
    }
    rotateInto(t, e, i, n, o) {
      const s = this.x - i,
        r = this.y - n;
      o.setXy(i + t * s - e * r, n + e * s + t * r);
    }
    rotate(t, e) {
      const i = Math.sin(t),
        n = Math.cos(t),
        o = this.x - e.x,
        s = this.y - e.y;
      return new et(e.x + n * o - i * s, e.y + i * o + n * s);
    }
    plusEquals(t) {
      return (this.x += t.x), (this.y += t.y), this;
    }
    plusEqualsXy(t, e) {
      return (this.x += t), (this.y += e), this;
    }
    plusEqualsScaled(t, e) {
      return (this.x += t * e.x), (this.y += t * e.y), this;
    }
    equals(t) {
      return t && this.x == t.x && this.y == t.y;
    }
    notEquals(t) {
      return !this.equals(t);
    }
    minusEquals(t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    }
    minusXyEquals(t, e) {
      return (this.x -= t), (this.y -= e), this;
    }
    minus(t) {
      return new et(this.x - t.x, this.y - t.y);
    }
    plus(t) {
      return new et(this.x + t.x, this.y + t.y);
    }
    times(t) {
      return new et(t * this.x, t * this.y);
    }
    timesEquals(t) {
      return (this.x *= t), (this.y *= t), this;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    ortho() {
      return new et(this.y, -this.x);
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    lengthSqr() {
      return this.x * this.x + this.y * this.y;
    }
    normalize() {
      var t = this.length();
      return 0 != t && ((this.x /= t), (this.y /= t)), this;
    }
    capLength(t) {
      let e = this.length();
      return e > t && this.timesEquals(t / e), this;
    }
    dup() {
      return et.from(this);
    }
  }
  !(function (t) {
    (t[(t.TopLeft = 0)] = 'TopLeft'),
      (t[(t.Top = 1)] = 'Top'),
      (t[(t.TopRight = 2)] = 'TopRight'),
      (t[(t.Right = 3)] = 'Right'),
      (t[(t.BottomRight = 4)] = 'BottomRight'),
      (t[(t.Bottom = 5)] = 'Bottom'),
      (t[(t.BottomLeft = 6)] = 'BottomLeft'),
      (t[(t.Left = 7)] = 'Left'),
      (t[(t.Center = 8)] = 'Center');
  })(m || (m = {})),
    (function (t) {
      (t.opposite = function (e) {
        switch (e) {
          case t.TopLeft:
            return t.BottomRight;
          case t.Top:
            return t.Bottom;
          case t.TopRight:
            return t.BottomLeft;
          case t.Right:
            return t.Left;
          case t.BottomRight:
            return t.TopLeft;
          case t.Bottom:
            return t.Top;
          case t.BottomLeft:
            return t.TopRight;
          case t.Left:
            return t.Right;
          case t.Center:
            return t.Center;
        }
        return t.Center;
      }),
        (t.flipX = function (e) {
          switch (e) {
            case t.TopLeft:
              return t.TopRight;
            case t.Top:
              return t.Top;
            case t.TopRight:
              return t.TopLeft;
            case t.Right:
              return t.Left;
            case t.BottomRight:
              return t.BottomLeft;
            case t.Bottom:
              return t.Bottom;
            case t.BottomLeft:
              return t.BottomRight;
            case t.Left:
              return t.Right;
            case t.Center:
              return t.Center;
          }
          return t.Center;
        }),
        (t.flipY = function (e) {
          switch (e) {
            case t.TopLeft:
              return t.BottomLeft;
            case t.Top:
              return t.Bottom;
            case t.TopRight:
              return t.BottomRight;
            case t.Right:
              return t.Right;
            case t.BottomRight:
              return t.TopRight;
            case t.Bottom:
              return t.Top;
            case t.BottomLeft:
              return t.TopLeft;
            case t.Left:
              return t.Left;
            case t.Center:
              return t.Center;
          }
          return t.Center;
        }),
        (t.interpolationCoefficientsFor = function (e) {
          switch (e) {
            case t.TopLeft:
              return { tx: 0, ty: 0 };
            case t.Top:
              return { tx: 0.5, ty: 0 };
            case t.TopRight:
              return { tx: 1, ty: 0 };
            case t.Right:
              return { tx: 1, ty: 0.5 };
            case t.BottomRight:
              return { tx: 1, ty: 1 };
            case t.Bottom:
              return { tx: 0.5, ty: 1 };
            case t.BottomLeft:
              return { tx: 0, ty: 1 };
            case t.Left:
              return { tx: 0, ty: 0.5 };
            case t.Center:
              return { tx: 0.5, ty: 0.5 };
          }
          return { tx: 0.5, ty: 0.5 };
        });
    })(m || (m = {}));
  class it {
    constructor(t, e, i, n) {
      (this.p0 = t),
        (this.p1 = e),
        (this.p2 = i),
        (this.p3 = n),
        (this.points = []),
        this.points.push(t, e, i, n);
    }
    static empty() {
      return new it(et.empty(), et.empty(), et.empty(), et.empty());
    }
    set(t) {
      return (
        this.p0.set(t.p0),
        this.p1.set(t.p1),
        this.p2.set(t.p2),
        this.p3.set(t.p3),
        this
      );
    }
    dup() {
      return new it(this.p0.dup(), this.p1.dup(), this.p2.dup(), this.p3.dup());
    }
    contains(t, e) {
      var i = !1;
      const n = this.points.length;
      for (var o = 0; o < n; o++) {
        var s = this.points[o],
          r = this.points[(o + 1) % n];
        ((r.y < e && s.y >= e) || (s.y < e && r.y >= e)) &&
          r.x + ((e - r.y) / (s.y - r.y)) * (s.x - r.x) < t &&
          (i = !i);
      }
      return i;
    }
    isConvex() {
      function t(t) {
        return t < 0 ? -1 : t > 0 ? 1 : 0;
      }
      var e = this.p1.minus(this.p0),
        i = this.p2.minus(this.p1),
        n = this.p3.minus(this.p2),
        o = this.p0.minus(this.p3),
        s = t(e.cross(i)),
        r = t(i.cross(n)),
        a = t(n.cross(o)),
        h = t(o.cross(e));
      return s == r && s == a && s == h;
    }
    rotateInPlace(t, e) {
      return (
        this.p0.rotateInPlace(t, e),
        this.p1.rotateInPlace(t, e),
        this.p2.rotateInPlace(t, e),
        this.p3.rotateInPlace(t, e),
        this
      );
    }
    rotate(t, e) {
      return this.dup().rotateInPlace(t, e);
    }
  }
  class nt {
    constructor(t, e, i, n) {
      (this.left = t), (this.top = e), (this.right = i), (this.bottom = n);
    }
    static empty() {
      return new nt(0, 0, 0, 0);
    }
    static unit() {
      return new nt(0, 0, 1, 1);
    }
    static fromBoundingRect(t) {
      return new nt(t[0], t[1], t[2], t[3]);
    }
    static fromCropRect(t) {
      return new nt(t.left0, t.top0, t.right0, t.bottom0);
    }
    static fromPoints(t) {
      if (0 == t.length) return null;
      for (
        var e = t[0], i = new nt(e.x, e.y, e.x, e.y), n = 1;
        n < t.length;
        n++
      )
        i.addPoint(t[n]);
      return i;
    }
    static fromQuad(t) {
      return nt.fromPoints(t.points);
    }
    dup() {
      return new nt(this.left, this.top, this.right, this.bottom);
    }
    setNull() {
      return this.set(null, null, null, null);
    }
    setFrom(t) {
      return (
        (this.left = t.left),
        (this.top = t.top),
        (this.right = t.right),
        (this.bottom = t.bottom),
        this
      );
    }
    set(t, e, i, n) {
      return (
        (this.left = t),
        (this.top = e),
        (this.right = i),
        (this.bottom = n),
        this
      );
    }
    fromCropRect(t) {
      return this.set(t.left0, t.top0, t.right0, t.bottom0);
    }
    containsPoint(t) {
      return (
        this.left <= t.x &&
        t.x <= this.right &&
        this.top <= t.y &&
        t.y <= this.bottom
      );
    }
    intersectionWith(t) {
      return (
        (this.left = Math.max(this.left, t.left)),
        (this.top = Math.max(this.top, t.top)),
        (this.right = Math.min(this.right, t.right)),
        (this.bottom = Math.min(this.bottom, t.bottom)),
        this
      );
    }
    leftCenter() {
      return new et(this.left, 0.5 * (this.top + this.bottom));
    }
    topLeft() {
      return new et(this.left, this.top);
    }
    topCenter() {
      return new et(0.5 * (this.left + this.right), this.top);
    }
    topRight() {
      return new et(this.right, this.top);
    }
    rightCenter() {
      return new et(this.right, 0.5 * (this.top + this.bottom));
    }
    bottomLeft() {
      return new et(this.left, this.bottom);
    }
    bottomCenter() {
      return new et(0.5 * (this.left + this.right), this.bottom);
    }
    bottomRight() {
      return new et(this.right, this.bottom);
    }
    center() {
      return new et(
        0.5 * (this.left + this.right),
        0.5 * (this.top + this.bottom)
      );
    }
    translate(t, e) {
      return (
        (this.top += e),
        (this.bottom += e),
        (this.left += t),
        (this.right += t),
        this
      );
    }
    point(t) {
      switch (t) {
        case m.TopLeft:
          return this.interpolate(0, 0);
        case m.Top:
          return this.interpolate(0.5, 0);
        case m.TopRight:
          return this.interpolate(1, 0);
        case m.Right:
          return this.interpolate(1, 0.5);
        case m.BottomRight:
          return this.interpolate(1, 1);
        case m.Bottom:
          return this.interpolate(0.5, 1);
        case m.BottomLeft:
          return this.interpolate(0, 1);
        case m.Left:
          return this.interpolate(0, 0.5);
        case m.Center:
          return this.interpolate(0.5, 0.5);
      }
      return this.interpolate(0.5, 0.5);
    }
    setAnchorPoint(t, e) {
      switch (t) {
        case m.TopLeft:
          (this.left = e.x), (this.top = e.y);
          break;
        case m.Top:
          this.top = e.y;
          break;
        case m.TopRight:
          (this.top = e.y), (this.right = e.x);
          break;
        case m.Right:
          this.right = e.x;
          break;
        case m.BottomRight:
          (this.right = e.x), (this.bottom = e.y);
          break;
        case m.Bottom:
          this.bottom = e.y;
          break;
        case m.BottomLeft:
          (this.left = e.x), (this.bottom = e.y);
          break;
        case m.Left:
          this.left = e.x;
        case m.Center:
      }
      return this;
    }
    moveAnchorTo(t, e) {
      let i = this.point(t);
      return this.translate(e.x - i.x, e.y - i.y), this;
    }
    moveAnchor(t, e) {
      switch (t) {
        case m.TopLeft:
          (this.left = Math.min(this.left + e.x, this.right)),
            (this.top = Math.min(this.top + e.y, this.bottom));
          break;
        case m.Top:
          this.top = Math.min(this.top + e.y, this.bottom);
          break;
        case m.TopRight:
          (this.top = Math.min(this.top + e.y, this.bottom)),
            (this.right = Math.max(this.right + e.x, this.left));
          break;
        case m.Right:
          this.right = Math.max(this.right + e.x, this.left);
          break;
        case m.BottomRight:
          (this.right = Math.max(this.right + e.x, this.left)),
            (this.bottom = Math.max(this.bottom + e.y, this.top));
          break;
        case m.Bottom:
          this.bottom = Math.max(this.bottom + e.y, this.top);
          break;
        case m.BottomLeft:
          (this.left = Math.min(this.left + e.x, this.right)),
            (this.bottom = Math.max(this.bottom + e.y, this.top));
          break;
        case m.Left:
          this.left = Math.min(this.left + e.x, this.right);
          break;
        case m.Center:
          (this.left += e.x),
            (this.top += e.y),
            (this.right += e.x),
            (this.bottom += e.y);
      }
      return this;
    }
    moveAnchorToMinSize(t, e, i) {
      var n = Math.max(0, e - this.width()),
        o = Math.max(0, i - this.height());
      switch (t) {
        case m.TopLeft:
          (this.left -= n), (this.top -= o);
          break;
        case m.Top:
          this.top -= o;
          break;
        case m.TopRight:
          (this.top -= o), (this.right += n);
          break;
        case m.Right:
          this.right += n;
          break;
        case m.BottomRight:
          (this.right += n), (this.bottom += o);
          break;
        case m.Bottom:
          this.bottom += o;
          break;
        case m.BottomLeft:
          (this.left -= n), (this.bottom += o);
          break;
        case m.Left:
          this.left -= n;
          break;
        case m.Center:
          (n *= 0.5),
            (o *= 0.5),
            (this.left -= n),
            (this.right += n),
            (this.top -= o),
            (this.bottom += o);
      }
      return this;
    }
    forceAspectRatio(t, e) {
      const i = t * this.width();
      var n = 0,
        o = 0;
      e == m.TopLeft ||
      e == m.TopRight ||
      e == m.BottomRight ||
      e == m.BottomLeft
        ? i > this.height()
          ? (n = i - this.height())
          : (o = this.height() / t - this.width())
        : e == m.Top || e == m.Bottom
        ? (o = this.height() / t - this.width())
        : (n = i - this.height());
      const s = 0.5 * o,
        r = 0.5 * n;
      switch (e) {
        case m.Top:
          (this.bottom += n), (this.left -= s), (this.right += s);
          break;
        case m.Left:
          (this.right += o), (this.top -= r), (this.bottom += r);
          break;
        case m.Bottom:
          (this.top -= n), (this.left -= s), (this.right += s);
          break;
        case m.Right:
          (this.left -= o), (this.top -= r), (this.bottom += r);
          break;
        case m.TopLeft:
          (this.bottom += n), (this.right += o);
          break;
        case m.TopRight:
          (this.bottom += n), (this.left -= o);
          break;
        case m.BottomRight:
          (this.top -= n), (this.left -= o);
          break;
        case m.BottomLeft:
          (this.top -= n), (this.right += o);
          break;
        case m.Center:
          (this.top -= r),
            (this.bottom += r),
            (this.left -= s),
            (this.right += s);
      }
      return this;
    }
    interpolate(t, e) {
      return new et(
        this.left * (1 - t) + t * this.right,
        this.top * (1 - e) + e * this.bottom
      );
    }
    transform(t, e) {
      return new et(
        e.left + ((t.x - this.left) / this.width()) * e.width(),
        e.top + ((t.y - this.top) / this.height()) * e.height()
      );
    }
    sampleGrid(t, e) {
      for (var i = [], n = 0; n < e; n++)
        for (var o = n / (e - 1), s = 0; s < t; s++)
          i.push(this.interpolate(s / (t - 1), o));
      return i;
    }
    setHorizontal(t) {
      return (this.left = t.left), (this.right = t.right), this;
    }
    padToFit(t) {
      var e = 0,
        i = 0;
      return (
        (e = Math.max(e, this.left - t.left)),
        (e = Math.max(e, t.right - this.right)),
        (i = Math.max(i, this.top - t.top)),
        (i = Math.max(i, t.bottom - this.bottom)),
        (this.left -= e),
        (this.right += e),
        (this.top = Math.min(this.top, t.top)),
        (this.bottom = Math.max(this.bottom, t.bottom)),
        this
      );
    }
    addRect(t) {
      return (
        (this.left = Math.min(this.left, t.left)),
        (this.right = Math.max(this.right, t.right)),
        (this.top = Math.min(this.top, t.top)),
        (this.bottom = Math.max(this.bottom, t.bottom)),
        this
      );
    }
    addPoint(t) {
      (this.left = Math.min(this.left, t.x)),
        (this.top = Math.min(this.top, t.y)),
        (this.right = Math.max(this.right, t.x)),
        (this.bottom = Math.max(this.bottom, t.y));
    }
    addPointSafe(t) {
      t &&
        (null == this.left
          ? ((this.left = t.x),
            (this.top = t.y),
            (this.right = t.x),
            (this.bottom = t.y))
          : this.addPoint(t));
    }
    width() {
      return this.right - this.left;
    }
    height() {
      return this.bottom - this.top;
    }
    pad(t, e, i, n) {
      return (
        null == e && (e = t),
        null == i && (i = t),
        null == n && (n = e),
        (this.left -= t),
        (this.top -= e),
        (this.right += i),
        (this.bottom += n),
        this
      );
    }
    padBottom(t) {
      return (this.bottom += t), this;
    }
    toQuad() {
      return new it(
        this.topLeft(),
        this.topRight(),
        this.bottomRight(),
        this.bottomLeft()
      );
    }
    snap() {
      return (
        (this.left = Math.floor(this.left)),
        (this.top = Math.floor(this.top)),
        (this.right = Math.ceil(this.right)),
        (this.bottom = Math.ceil(this.bottom)),
        this
      );
    }
    round() {
      return (
        (this.left = Math.round(this.left)),
        (this.top = Math.round(this.top)),
        (this.right = Math.round(this.right)),
        (this.bottom = Math.round(this.bottom)),
        this
      );
    }
    normalize() {
      var t = Math.min(this.left, this.right),
        e = Math.max(this.left, this.right),
        i = Math.min(this.top, this.bottom),
        n = Math.max(this.top, this.bottom);
      return (
        (this.left = t),
        (this.right = e),
        (this.top = i),
        (this.bottom = n),
        this
      );
    }
  }
  !(function (t) {
    let e = !1,
      i = new Image();
    (i.src =
      'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAIAAwMBEQACEQEDEQH/xABRAAEAAAAAAAAAAAAAAAAAAAAKEAEBAQADAQEAAAAAAAAAAAAGBQQDCAkCBwEBAAAAAAAAAAAAAAAAAAAAABEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AG8T9NfSMEVMhQvoP3fFiRZ+MTHDifa/95OFSZU5OzRzxkyejv8ciEfhSceSXGjS8eSdLnZc2HDm4M3BxcXwH/9k='),
      (i.onload = function () {
        e = 2 == i.width && 3 == i.height;
      }),
      (t.BrowserRotates = function () {
        return e;
      });
  })(g || (g = {})),
    (function (t) {
      const e = new Set(['image/png', 'image/jpeg']);
      function i(e, i, n, o) {
        p.get(e, function (s) {
          f.loadImageFromBlob(e, n, e => {
            if (
              s.statusCode != u.Success ||
              s.orientation == l.R0 ||
              s.orientation == l.Undefined ||
              g.BrowserRotates()
            ) {
              const n = t.imageToCanvasEx(e, i);
              (n.wasRotated = !1), o(n);
            } else {
              const n = t.rotateImageToCanvasEx(e, s.orientation, i);
              (n.wasRotated = !0), o(n);
            }
          });
        });
      }
      function n(t, e) {
        const i = t.naturalWidth,
          n = t.naturalHeight;
        let o = new st(i, n);
        return (
          (o.wasShrunk = !1),
          o.context().setGlobalAlpha(1),
          e &&
            (o.context().setFillStyle('rgb(255,255,255)'),
            o.context().fillRect(0, 0, i, n)),
          o.context().context.drawImage(t, 0, 0, i, n),
          o
        );
      }
      function o(t) {
        return n(t, !0);
      }
      function s(t, e, i) {
        const n = t.naturalWidth,
          s = t.naturalHeight;
        let r = n,
          a = s,
          h = 0;
        switch (e) {
          case l.Undefined:
          case l.R0:
            return o(t);
          case l.R90:
            (r = s), (a = n), (h = 0.5 * Math.PI);
            break;
          case l.R180:
            h = Math.PI;
            break;
          case l.R270:
            (r = s), (a = n), (h = 0.5 * -Math.PI);
        }
        let c = new st(r, a);
        return (
          (c.wasShrunk = !1),
          c.context().setGlobalAlpha(1),
          i &&
            (c.context().setFillStyle('rgb(255,255,255)'),
            c.context().fillRect(0, 0, r, a)),
          c.context().save(),
          c.context().translate(0.5 * r, 0.5 * a),
          c.context().rotate(h),
          c.context().context.drawImage(t, 0.5 * -n, 0.5 * -s, n, s),
          c.context().restore(),
          c
        );
      }
      (t.DefaultFontFamily = (function () {
        try {
          return window.getComputedStyle(document.querySelector('body'))
            .fontFamily;
        } catch (t) {
          return 'sans-serif';
        }
      })()),
        (t.needsReencoding = function (t) {
          return !e.has(t);
        }),
        (t.recodeCanvasFile = function (t, e) {
          return (
            (i = t.type),
            f.endsWith(i, 'jpeg') ||
            f.endsWith(i, 'jpg') ||
            f.endsWith(i, 'webp') ||
            f.endsWith(i, 'jp2') ||
            f.endsWith(i, 'cr2') ||
            f.endsWith(i, 'nef') ||
            f.endsWith(i, 'dng') ||
            f.endsWith(i, 'jps') ||
            f.startsWith(i, 'image/heif') ||
            f.startsWith(i, 'image/avif')
              ? e.toFile('image/jpeg', 0.95, f.dropExtension(t.name) + '.jpeg')
              : e.toFile('image/png', 1, f.dropExtension(t.name) + '.png')
          );
        }),
        (t.loadCheckRotateImage = i),
        (t.loadCheckRotateFlattenImage = function (t, e, n) {
          i(t, !0, e, n);
        }),
        (t.imageToCanvasEx = n),
        (t.flattenImage = o),
        (t.rotateImageToCanvasEx = s),
        (t.rotateAndFlattenImage = function (t, e) {
          return s(t, e, !0);
        });
    })(F || (F = {}));
  class ot {
    constructor(t, e) {
      (this.canvas = t), (this.context = e), this.toggleImageSmoothing(!1);
    }
    toggleImageSmoothing(t) {
      (this.context.mozImageSmoothingEnabled = t),
        (this.context.webkitImageSmoothingEnabled = t),
        (this.context.imageSmoothingEnabled = t);
    }
    width() {
      return this.context.canvas.width;
    }
    height() {
      return this.context.canvas.height;
    }
    logicalWidth() {
      return this.canvas.logicalWidth();
    }
    logicalHeight() {
      return this.canvas.logicalHeight();
    }
    createPattern(t, e) {
      return this.context.createPattern(t, e);
    }
    setStrokeStyle(t) {
      this.context.strokeStyle = t;
    }
    setLineDash(t) {
      this.context.setLineDash(t);
    }
    setLineWidth(t) {
      this.context.lineWidth = t;
    }
    setLineJoin(t) {
      this.context.lineJoin = t;
    }
    setLineCap(t) {
      this.context.lineCap = t;
    }
    strokeText(t, e, i) {
      this.context.strokeText(t, e, i);
    }
    fillText(t, e, i) {
      this.context.fillText(t, e, i);
    }
    measureText(t) {
      return this.context.measureText(t);
    }
    setFont(t) {
      this.context.font = t;
    }
    save() {
      this.context.save();
    }
    stroke() {
      this.context.stroke();
    }
    strokeRect(t, e, i, n) {
      this.context.strokeRect(t, e, i, n);
    }
    createRadialGradient(t, e, i, n, o, s) {
      return this.context.createRadialGradient(t, e, i, n, o, s);
    }
    createLinearGradient(t, e, i, n) {
      return this.context.createLinearGradient(t, e, i, n);
    }
    scale(t, e) {
      this.context.scale(t, e);
    }
    translate(t, e) {
      this.context.translate(t, e);
    }
    setRectToRectTransform(t, e) {
      let i = e.width() / t.width(),
        n = e.height() / t.height();
      this.context.setTransform(
        i,
        0,
        0,
        n,
        e.left - t.left * i,
        e.top - t.top * n
      );
    }
    moveTo(t, e) {
      this.context.moveTo(t, e);
    }
    lineTo(t, e) {
      this.context.lineTo(t, e);
    }
    quadraticCurveTo(t, e, i, n) {
      this.context.quadraticCurveTo(t, e, i, n);
    }
    bezierCurveTo(t, e, i, n, o, s) {
      this.context.bezierCurveTo(t, e, i, n, o, s);
    }
    rotate(t) {
      this.context.rotate(t);
    }
    beginPath() {
      this.context.beginPath();
    }
    closePath() {
      this.context.closePath();
    }
    arc(t, e, i, n, o, s) {
      this.context.arc(t, e, i, n, o, s);
    }
    rect(t, e, i, n) {
      this.context.rect(t, e, i, n);
    }
    rectTo(t, e, i, n, o) {
      let s = t + i,
        r = e + n;
      this.moveTo(t, e),
        o
          ? (this.lineTo(s, e), this.lineTo(s, r), this.lineTo(t, r))
          : (this.lineTo(t, r), this.lineTo(s, r), this.lineTo(s, e)),
        this.lineTo(t, e),
        this.closePath();
    }
    clip() {
      this.context.clip();
    }
    clipBlock(t, e, i, n, o, s) {
      t
        ? (this.save(),
          this.beginPath(),
          this.rect(e, i, n - e, o - i),
          this.clip(),
          s(),
          this.restore())
        : s();
    }
    rotatedFrame(t, e, i) {
      0 != t
        ? (this.save(),
          this.translate(e.x, e.y),
          this.rotate(t),
          this.translate(-e.x, -e.y),
          i(),
          this.restore())
        : i();
    }
    restore() {
      this.context.restore();
    }
    setFillStyle(t) {
      this.context.fillStyle = t;
    }
    clearShadow() {
      (this.context.shadowOffsetX = 0),
        (this.context.shadowOffsetY = 0),
        (this.context.shadowBlur = 0),
        (this.context.shadowColor = void 0);
    }
    setShadow(t, e, i, n) {
      (this.context.shadowOffsetX = t),
        (this.context.shadowOffsetY = e),
        (this.context.shadowBlur = i),
        (this.context.shadowColor = n);
    }
    setGlobalAlpha(t) {
      this.context.globalAlpha = t;
    }
    withGlobalAlpha(t, e) {
      let i = this.context.globalAlpha;
      this.setGlobalAlpha(t), e(), this.setGlobalAlpha(i);
    }
    clearRect(t, e, i, n) {
      this.context.clearRect(t, e, i, n);
    }
    clearAll() {
      this.clearRect(0, 0, this.logicalWidth(), this.logicalHeight());
      if (this.context.canvas.id === 'App-ImageView-RightCanvas') {
        ctx.clearRect(0, 0, originImageWidth, originImageHeight);
        ctx = new C2S(originImageWidth, originImageHeight);
      }
    }
    createImageData(t, e) {
      return this.context.createImageData(t, e);
    }
    getImageData(t, e, i, n) {
      return this.context.getImageData(t, e, i, n);
    }
    getImageDataFull() {
      return this.context.getImageData(0, 0, this.width(), this.height());
    }
    putImageData(t, e, i) {
      this.context.putImageData(t, e, i);
    }
    putImageData2(t, e, i, n, o, s, r) {
      this.context.putImageData(t, e, i, n, o, s, r);
    }
    fillRect(t, e, i, n) {
      this.context.fillRect(t, e, i, n);
    }
    roundedRect(t, e, i, n, o) {
      i < 2 * o && (o = i / 2),
        n < 2 * o && (o = n / 2),
        this.beginPath(),
        this.moveTo(t + o, e),
        this.context.arcTo(t + i, e, t + i, e + n, o),
        this.context.arcTo(t + i, e + n, t, e + n, o),
        this.context.arcTo(t, e + n, t, e, o),
        this.context.arcTo(t, e, t + i, e, o),
        this.closePath();
    }
    fillRoundedRect(t, e, i, n, o) {
      this.roundedRect(t, e, i, n, o), this.context.fill();
    }
    drawImage(t, e, i) {
      this.context.drawImage(t, e, i);
    }
    drawImage2(t, e, i, n, o) {
      this.context.drawImage(t, e, i, n, o);
    }
    drawImage3(t, e, i, n, o, s, r, a, h) {
      this.context.drawImage(t, e, i, n, o, s, r, a, h);
    }
    drawCanvasEx(t, e, i) {
      this.context.drawImage(t.element, e, i);
    }
    drawCanvasEx2(t, e, i, n, o) {
      this.context.drawImage(t.element, e, i, n, o);
    }
    drawCanvasEx3(t, e, i, n, o, s, r, a, h) {
      this.context.drawImage(t.element, e, i, n, o, s, r, a, h);
    }
    circle(t, e, i) {
      this.context.beginPath(), this.context.arc(t, e, i, 0, 2 * Math.PI, !0);
    }
    fillCircle(t, e, i, n) {
      n && (this.context.fillStyle = n),
        this.circle(t, e, i),
        this.context.fill();
    }
    fillSquare(t, e, i, n) {
      n && (this.context.fillStyle = n),
        this.context.fillRect(t - i, e - i, 2 * i, 2 * i);
    }
    strokeSquare(t, e, i, n) {
      n && (this.context.strokeStyle = n),
        this.context.strokeRect(t - i, e - i, 2 * i, 2 * i);
    }
    strokeCircle(t, e, i, n) {
      n && (this.context.strokeStyle = n),
        this.circle(t, e, i),
        this.context.stroke();
    }
    strokeLine(t, e, i, n, o, s) {
      o && (this.context.lineWidth = o),
        s && (this.context.strokeStyle = s),
        this.context.beginPath(),
        this.context.moveTo(t, e),
        this.context.lineTo(i, n),
        this.context.stroke();
    }
    strokePolyline(...t) {
      if (t.length > 1) {
        this.context.beginPath(), this.context.moveTo(t[0].x, t[0].y);
        for (let e = 1; e < t.length; e++) this.context.lineTo(t[e].x, t[e].y);
        this.context.stroke();
      }
    }
    triangle(t, e, i, n, o, s) {
      var r = (120 * Math.PI) / 180;
      (o = o || n),
        (s = s || o),
        this.context.moveTo(t + n * Math.cos(i), e + n * Math.sin(i)),
        this.context.lineTo(t + o * Math.cos(i + r), e + o * Math.sin(i + r)),
        this.context.lineTo(
          t + s * Math.cos(i + 2 * r),
          e + s * Math.sin(i + 2 * r)
        ),
        this.context.closePath();
    }
    strokeEx(t, e, i, n) {
      i && (this.context.lineJoin = i),
        n && (this.context.lineCap = n),
        (this.context.lineWidth = t),
        (this.context.strokeStyle = e),
        this.context.stroke();
    }
    fillEx(t) {
      (this.context.fillStyle = t), this.context.fill();
    }
    drawCenteredText(t, e) {
      var i = t;
      const n = t.length;
      this.setGlobalAlpha(1), this.setFont(this.canvas.largeFont);
      let o = 18;
      var s = this.measureText(t).width;
      const r = this.canvas.logicalWidth();
      var a = r - 20;
      s > a &&
        (this.setFont(this.canvas.smallFont),
        (o = 12),
        (s = this.measureText(t).width) > a &&
          ((t = f.centerElide(i, 0.75 * n)),
          (s = this.measureText(t).width) > a &&
            ((t = f.centerElide(i, 0.5 * n)),
            (s = this.measureText(t).width) > a &&
              ((t = f.centerElide(i, 0.25 * n)),
              (s = this.measureText(t).width)))));
      let h = (r - s) / 2,
        l = o + 4,
        c = 0.25 * o + 1;
      this.setGlobalAlpha(0.4),
        this.setFillStyle('#fff'),
        this.fillRoundedRect(h - 4, e - l + c, s + 8, l, 0.4 * l),
        this.setGlobalAlpha(1),
        this.setFillStyle('#000'),
        this.fillText(t, h, e);
    }
  }
  class st {
    static fromHTMLImageElement(t, e = 1) {
      let i = t.naturalWidth * e,
        n = t.naturalHeight * e,
        o = new st(i, n);
      return o.context().drawImage2(t, 0, 0, i, n), o;
    }
    constructor(t, e, i = 1) {
      (this.w = t),
        (this.h = e),
        (this.highDpiRatio = 1),
        (this.largeFont = '20px ' + F.DefaultFontFamily),
        (this.smallFont = '14px ' + F.DefaultFontFamily),
        (this.element = document.createElement('canvas')),
        (this.$element = $(this.element)),
        this.setSize(t, e, i),
        (this.wasShrunk = !1),
        (this.contextCache = null);
    }
    empty() {}
    width() {
      return this.w;
    }
    height() {
      return this.h;
    }
    snapStrokeCenterToDevice(t, e) {
      let i = t * this.highDpiRatio,
        n = e * this.highDpiRatio;
      return n == Math.round(n)
        ? n % 2 == 0
          ? Math.round(i) / this.highDpiRatio
          : (Math.floor(i) + 0.5) / this.highDpiRatio
        : t;
    }
    logicalWidth() {
      return this.wLogical;
    }
    logicalHeight() {
      return this.hLogical;
    }
    boundsRect() {
      return new nt(0, 0, this.width(), this.height());
    }
    size() {
      return this.w * this.h;
    }
    isInBounds(t, e) {
      return 0 <= t && t < this.width() && 0 <= e && e < this.height();
    }
    byteLength() {
      return 4 * this.size();
    }
    dup() {
      let t = new st(this.width(), this.height());
      return t.context().drawCanvasEx(this, 0, 0), t;
    }
    crop(t, e, i, n) {
      let o = new st(i, n);
      return o.context().drawCanvasEx(this, -t, -e), o;
    }
    computeMeanRgba(t, e, i, n) {
      if (null != t && null != e && null != i && null != n) {
        let o = this.context().getImageData(t, e, i, n).data,
          s = o.length / 4;
        if (s > 0) {
          let t = new Float64Array(4);
          for (let e = 0, i = 0; e < s; e++)
            (t[0] += o[i++]),
              (t[1] += o[i++]),
              (t[2] += o[i++]),
              (t[3] += o[i++]);
          let e = new Uint8ClampedArray(4);
          return (
            (e[0] = t[0] / s),
            (e[1] = t[1] / s),
            (e[2] = t[2] / s),
            (e[3] = t[3] / s),
            e
          );
        }
      }
    }
    scale(t) {
      let e = new st(
        Math.round(this.width() * t),
        Math.round(this.height() * t)
      );
      return e.context().drawCanvasEx2(this, 0, 0, e.width(), e.height()), e;
    }
    context() {
      return (
        null == this.contextCache &&
          ((this.contextCache = new ot(this, this.element.getContext('2d'))),
          1 != this.highDpiRatio &&
            this.contextCache.scale(this.highDpiRatio, this.highDpiRatio)),
        this.contextCache
      );
    }
    checkSetSize(t, e, i = 1) {
      return (
        (this.w != t || this.h != e || this.highDpiRatio != i) &&
        (this.setSize(t, e, i), !0)
      );
    }
    setSize(t, e, i = 1) {
      t > 0 &&
        e > 0 &&
        ((this.highDpiRatio = i),
        (this.wLogical = t),
        (this.hLogical = e),
        (this.w = t * this.highDpiRatio),
        (this.h = e * this.highDpiRatio),
        (this.element.style.width = t + 'px'),
        (this.element.style.height = e + 'px'),
        (this.element.width = this.w),
        (this.element.height = this.h),
        (this.contextCache = null));
    }
    clearAll() {
      this.context().clearRect(0, 0, this.width(), this.height());
    }
    toImage() {
      let t = document.createElement('img');
      return (t.src = this.toDataURL()), t;
    }
    toDataURL(t, e) {
      return this.element.toDataURL(t, e);
    }
    toBlob(t, e) {
      return f.dataUrlToBlob(this.toDataURL(t, e));
    }
    toBlobAsync(t, e, i) {
      this.element.toBlob(t);
    }
    toFile(t, e, i) {
      return f.blobToFile(this.toBlob(t, e), i);
    }
    fillAliasedCircle(t, e, i, n) {
      if (!(i <= 0)) {
        for (
          var o = this.context().getImageData(
              0,
              0,
              this.width(),
              this.height()
            ),
            s = i * i,
            r = Math.max(0, Math.floor(t - i)),
            a = Math.min(this.width() - 1, Math.ceil(t + i)),
            h = Math.max(0, Math.floor(e - i)),
            l = Math.min(this.height() - 1, Math.ceil(e + i)),
            c = h;
          c <= l;
          c++
        )
          for (var u = r; u <= a; u++)
            if (
              (u + 0.5 - t) * (u + 0.5 - t) + (c + 0.5 - e) * (c + 0.5 - e) <=
              s
            ) {
              var d = 4 * (c * this.width() + u);
              (o.data[d] = n[0]),
                (o.data[d + 1] = n[1]),
                (o.data[d + 2] = n[2]),
                (o.data[d + 3] = n[3]);
            }
        this.context().putImageData(o, 0, 0);
      }
    }
  }
  !(function (t) {
    t.copyTextToClipboard = function (t, e, i) {
      window.navigator &&
      window.navigator.clipboard &&
      window.navigator.clipboard.writeText
        ? window.navigator.clipboard.writeText(t).then(
            () => {
              e();
            },
            () => {
              i();
            }
          )
        : i();
    };
    const e = new RegExp(
      'mobile|ip(hone|od|ad)|android|blackberry|iemobile|kindle|netfront|silk-accelerated|(hpw|web)os|fennec|minimo|opera m(obi|ini)|blazer|dolfin|dolphin|skyfire|zune'
    );
    function i(t, e, i) {
      navigator.clipboard.write([new ClipboardItem({ [t.type]: t })]).then(
        () => {
          e();
        },
        () => {
          i();
        }
      );
    }
    (t.copyImageToClipboard = function (t, e, n) {
      st.fromHTMLImageElement(t).toBlobAsync(t => i(t, e, n));
    }),
      (t.copyImageBlobToClipboard = i),
      (t.isMobile = function () {
        return (
          !!(
            navigator &&
            navigator.userAgent &&
            navigator.userAgent.length > 0
          ) && e.test(navigator.userAgent.toLowerCase())
        );
      });
    const o =
        /\<svg[^\>]+viewBox\s*=\s*"\s*([\d\.]+)\s+([\d\.]+)\s+([\d\.]+)\s+([\d\.]+)\s*"/,
      s = /\<svg[^\>]+width\s*=\s*"\s*([\d\.]+)/,
      r = /\<svg[^\>]+height\s*=\s*"\s*([\d\.]+)/;
    function a(t, e, i) {
      let n = new Image();
      (n.onload = function () {
        URL.revokeObjectURL(n.src), i(n);
      }),
        (n.onerror = e),
        (n.src = t);
    }
    (t.loadImageFromSvgString = function (e, i, n) {
      a(
        t.svgStringToDataUrl(
          (function (t) {
            let e = s.exec(t),
              i = r.exec(t);
            if (
              e &&
              2 == e.length &&
              isFinite(parseInt(e[1])) &&
              i &&
              2 == i.length &&
              isFinite(parseInt(i[1]))
            )
              return t;
            {
              let e = o.exec(t);
              if (5 == e.length) {
                parseInt(e[1]), parseInt(e[2]);
                let i = parseInt(e[3]),
                  n = parseInt(e[4]);
                if (isFinite(i) && isFinite(n)) {
                  let e = 150,
                    o = Math.ceil((n / i) * e);
                  return t.replace('<svg', `<svg width="${e}" height="${o}"`);
                }
              }
            }
            return t;
          })(e)
        ),
        i,
        n
      );
    }),
      (t.loadImageFromDataUrl = a),
      (t.loadImageFromUrl = function (t, e, i) {
        let n = new Image();
        (n.onload = () => i(n)), (n.onerror = e), (n.src = t);
      }),
      (t.loadImageFromBlob = function (t, e, i) {
        a(URL.createObjectURL(t), e, i);
      }),
      (t.loadFileFromUrl = function (e, i, n) {
        let o = new XMLHttpRequest();
        o.open('GET', e, !0),
          (o.responseType = 'blob'),
          (o.onload = function (o) {
            if (200 == this.status) {
              let o = this.response,
                s = e.split('/');
              i || (i = s[s.length - 1]), n(t.blobToFile(o, i));
            }
          }),
          o.send();
      }),
      (t.gaTrack = function (t, e, i, n) {
        'gtag' in window
          ? gtag('event', e, {
              event_category: t,
              event_label: i,
              value: n,
              non_interaction: !0
            })
          : ga('send', 'event', t, e, i, n, { nonInteraction: !0 });
      }),
      (t.gaSetPageAndSendPageview = function (t) {
        ga('set', 'page', t || location.pathname), ga('send', 'pageview');
      }),
      (t.modal = function (t, e = !1, i = !1) {
        var n = 'string' == typeof t ? $(t) : t.$();
        e
          ? n.modal({ backdrop: !i, keyboard: !0 })
          : n.modal({ backdrop: 'static', keyboard: !1 });
        var o = $('.modal-backdrop'),
          s = 1040 + 2 * (o.length - 1);
        o.last().css('z-index', s), n.css('z-index', s + 1);
      }),
      (t.blink = function (t, e = 200, i = 3) {
        var n = 'string' == typeof t ? $(t) : t.$();
        function o() {
          n.fadeIn(e, s);
        }
        function s() {
          --i > 0 && n.fadeOut(e, o);
        }
        n.fadeOut(e, o);
      }),
      (t.makeElement = function (t, e) {
        var i = $(document.createElement(t));
        return i.text(e), i;
      }),
      (t.formatXhrError = function (e, i) {
        const o = e.responseURL || '[Unknown URL]';
        if (
          (t.gaTrack('XhrError', o, e.status + ', ' + (i || '[unknown]')),
          0 === e.status)
        )
          return (
            n.s('Failed to connect to the server.') +
            '\n' +
            n.s('Please verify your network connection.') +
            '\n'
          );
        {
          const o = t.elide(e.responseText.toString(), 200);
          return e.status < 200 || 299 < e.status
            ? e.statusText + ' [' + e.status + ']\n' + o
            : 'parsererror' === i
            ? n.s('Failed to parse JSON response.') + ' [' + i + ']\n' + o
            : 'timeout' === i
            ? n.s('Request time out.') + ' [' + i + ']'
            : 'abort' === i
            ? n.s('Request aborted by the server.') + ' [' + i + ']'
            : 'empty' === i
            ? n.s('Server gave an empty response.')
            : n.s('Unknown error.') + '\n' + o;
        }
      });
  })(f || (f = {})),
    (function (t) {
      function e(e) {
        a.FatalError.Message.$().text(e),
          t.modal(a.FatalError.Dialog),
          t.gaTrack('ErrorShown', 'Fatal', e);
      }
      function i(e) {
        e
          ? t.modal(a.App.SpinnerLightbox)
          : a.App.SpinnerLightbox.$().modal('hide');
      }
      function n(e) {
        e
          ? t.modal(a.App.ProgressLightbox)
          : a.App.ProgressLightbox.$().modal('hide');
      }
      (t.countInstances = function (t, e) {
        const i = e.charCodeAt(0);
        for (var n = 0, o = 0; o < t.length; o++) t.charCodeAt(o) == i && n++;
        return n;
      }),
        (t.whilePressing = function (t, e, i) {
          function n() {
            window.removeEventListener('touchend', n),
              window.removeEventListener('mouseup', n),
              i();
          }
          function o() {
            window.addEventListener('touchend', n),
              window.addEventListener('mouseup', n),
              e();
          }
          t.$().each(function (t, e) {
            e.addEventListener('touchstart', o),
              e.addEventListener('mousedown', o);
          });
        }),
        (t.radioButton = function (t, e, i) {
          let n = t.$();
          n.click(t => {
            t.preventDefault(),
              t.stopPropagation(),
              !n.hasClass(r.active.name()) ? e() : i();
          });
        }),
        (t.blurActiveElement = function () {
          document.activeElement instanceof HTMLElement
            ? document.activeElement.blur()
            : window.focus();
        }),
        (t.progressBar = function (t, e) {
          t.Bar.$().css({ width: e + '%' });
        }),
        (t.fatalError = function (o) {
          i(!1), n(!1), e(t.stringify(o));
        }),
        (t.fatalErrorStr = e),
        (t.spinner = i),
        (t.progress = n),
        (t.progressUpdate = function (t) {
          a.App.ProgressLightboxBar.$().attr('style', 'width:' + t + '%');
        }),
        (t.saveAndExit = function (e) {
          e
            ? t.modal(a.App.SaveAndExitLightbox)
            : a.App.SaveAndExitLightbox.$().modal('hide');
        });
    })(f || (f = {})),
    (function (t) {
      (t.attachToLink = function (t, e) {
        t.off('dragstart.DragUrl').on('dragstart.DragUrl', function (t) {
          const i = e();
          i &&
            t.originalEvent.dataTransfer.setData(
              'DownloadURL',
              i + ':' + this.href
            );
        });
      }),
        (t.attachDecorated = function () {
          $('a[data-dragurl]').on('dragstart', function (t) {
            const e = $(this).data('dragurl');
            e && t.originalEvent.dataTransfer.setData('DownloadURL', e);
          });
        });
    })(w || (w = {})),
    (function (t) {
      const e = '.FileDropper';
      var i,
        s = !0;
      let r, a;
      !(function (t) {
        (t[(t.Dropped = 0)] = 'Dropped'),
          (t[(t.Picked = 1)] = 'Picked'),
          (t[(t.Pasted = 2)] = 'Pasted'),
          (t[(t.Url = 3)] = 'Url');
      })((r = t.InputMethod || (t.InputMethod = {}))),
        (function (t) {
          (t[(t.NoBrowserSupport = 0)] = 'NoBrowserSupport'),
            (t[(t.NonFileInput = 1)] = 'NonFileInput'),
            (t[(t.NonImageInput = 2)] = 'NonImageInput');
        })((a = t.ErrorCode || (t.ErrorCode = {}))),
        (t.initialize = function (t) {
          var o = !1,
            h = $.extend(
              {},
              {
                hover_class_on: t.monitor_drag,
                focusPasteOnCtrlV: !!t.monitor_paste,
                afterPaste: t => {}
              },
              t
            );
          function l(t, e, i) {
            h.afterPaste(!1), h.error(t, e, i);
          }
          function c() {
            (s = !1),
              h.monitor_drag &&
                h.hover_class_on &&
                h.hover_class &&
                h.monitor_drag.$().off(e),
              h.monitor_file_input && h.monitor_file_input.$().off(e),
              h.monitor_paste && h.monitor_paste.$().off(e),
              h.focusPasteOnCtrlV && $(window).off(e);
          }
          function u(t, e, i) {
            s &&
              (t && t.length > 0
                ? ('Pasted' == e && h.afterPaste(!0),
                  h.beforeDrop && h.beforeDrop(),
                  i == r.Dropped && h.hideDurationMs
                    ? setTimeout(() => {
                        h.drop.call(this, t, i), h.dropOnce && c();
                      }, h.hideDurationMs)
                    : (h.drop.call(this, t, i), h.dropOnce && c()))
                : l(n.s(e + ' a non-file input'), i, a.NonFileInput));
          }
          function d(t, e) {
            clearTimeout(i), t.stopImmediatePropagation(), t.preventDefault();
            let n = !1;
            try {
              let e = t.originalEvent.dataTransfer;
              if (e) {
                let t = e.types;
                for (let e = 0; e < t.length; e++) {
                  if ('Files' == t[e]) {
                    n = !0;
                    break;
                  }
                }
              }
            } catch (t) {
              n = !0;
            }
            let o = h.hover_class_on.$().hasClass(h.hover_class.name()),
              s = e && n;
            return (
              o && !s
                ? (h.beforeHide && h.beforeHide(),
                  h.hideDurationMs
                    ? setTimeout(
                        () =>
                          h.hover_class_on
                            .$()
                            .removeClass(h.hover_class.name()),
                        h.hideDurationMs
                      )
                    : h.hover_class_on.$().removeClass(h.hover_class.name()),
                  h.afterHide && h.afterHide())
                : !o &&
                  s &&
                  (h.beforeShow && h.beforeShow(),
                  h.hover_class_on.$().addClass(h.hover_class.name())),
              n
            );
          }
          function p() {
            h.pastedUrl
              ? l(
                  n.s("Pasted something that wasn't an image or URL?"),
                  r.Pasted,
                  a.NonImageInput
                )
              : l(
                  n.s("Pasted something that wasn't an image?"),
                  r.Pasted,
                  a.NonImageInput
                );
          }
          function m(t) {
            let e = new Blob([t], { type: t.type });
            return (
              (e.lastModified = t.lastModified),
              (e.name = (function () {
                function t(t) {
                  return ('0' + t).slice(-2);
                }
                let e = new Date();
                return (
                  'Pasted-' +
                  e.getFullYear() +
                  t(e.getMonth() + 1) +
                  t(e.getDate()) +
                  '-' +
                  t(e.getHours()) +
                  t(e.getMinutes()) +
                  t(e.getSeconds())
                );
              })()),
              e
            );
          }
          return (
            h.monitor_drag &&
              h.hover_class_on &&
              h.hover_class &&
              h.monitor_drag
                .$()
                .on('drop' + e, function (t) {
                  return (
                    d(t, !1) &&
                      u(
                        t.originalEvent.dataTransfer.files,
                        'Dropped',
                        r.Dropped
                      ),
                    !1
                  );
                })
                .on('dragenter' + e, function (t) {
                  d(t, !0), h.onDragEnter && h.onDragEnter(t);
                })
                .on('dragover' + e, function (t) {
                  let e = d(t, !0);
                  (t.originalEvent.dataTransfer.dropEffect =
                    s && e ? 'copy' : 'none'),
                    h.onDragOver && h.onDragOver(t);
                })
                .on('dragleave' + e, function (t) {
                  i = setTimeout(() => {
                    d(t, !1), h.onDragLeave && h.onDragLeave(t);
                  }, 100);
                }),
            h.monitor_file_input &&
              h.monitor_file_input.$().on('change' + e, t => {
                let e = t.originalEvent.target;
                return u(e.files, 'Picked', r.Picked), (e.value = null), !1;
              }),
            h.monitor_paste &&
              (h.monitor_paste.$().on('paste' + e, function (t) {
                if (!s) return;
                const e = t.originalEvent.clipboardData;
                if (e && e.files && e.files.length > 0)
                  1 == e.files.length && 'image.png' == e.files[0].name
                    ? u([m(e.files[0])], 'Pasted', r.Pasted)
                    : u(e.files, 'Pasted', r.Pasted);
                else if (e && !e.items)
                  l(
                    n.s(
                      "Terribly sorry, it seems like your browser doesn't fully support pasting of images yet?"
                    ) +
                      '\n\n' +
                      n.s(
                        'Paste should work in at least Chrome, Firefox, and Microsoft Edge. '
                      ),
                    r.Pasted,
                    a.NoBrowserSupport
                  );
                else if (
                  e &&
                  e.items &&
                  e.items.length > 0 &&
                  e.types &&
                  e.types.length == e.items.length
                ) {
                  const t = [];
                  let i = !1,
                    n = 0;
                  for (let o = 0; o < e.items.length; o++)
                    if ('Files' == e.types[o]) {
                      let i = e.items[o].getAsFile();
                      i && ((t[n] = m(i)), n++);
                    } else
                      'text/plain' == e.types[o] &&
                        h.pastedUrl &&
                        ((i = !0),
                        e.items[o].getAsString(function (t) {
                          (t = t.trim()).length > 5e3 ||
                          t.length <= 4 ||
                          t.indexOf('\n') >= 0 ||
                          t.indexOf('\r') >= 0 ||
                          t.indexOf(' ') >= 0 ||
                          t.indexOf('.') < 0
                            ? p()
                            : h.pastedUrl(t);
                        }));
                  n > 0 ? u(t, 'Pasted', r.Pasted) : i || p();
                } else p();
                o && ((o = !1), h.monitor_paste.$().blur()), t.preventDefault();
              }),
              h.focusPasteOnCtrlV &&
                $(window).on('keydown' + e, t => {
                  (t.ctrlKey || t.metaKey) &&
                    86 == t.keyCode &&
                    ($(document.activeElement).is('input') ||
                      (h.monitor_paste.$().focus(), (o = !0)));
                })),
            { disable: c }
          );
        });
      try {
        XMLHttpRequest.prototype.hasOwnProperty('sendAsBinary') ||
          o.set(XMLHttpRequest.prototype, 'sendAsBinary', function (t) {
            var e = Array.prototype.map.call(t, function (t) {
                return 255 & t.charCodeAt(0);
              }),
              i = new Uint8Array(e);
            this.send(i.buffer);
          });
      } catch (t) {}
    })(b || (b = {})),
    (function (t) {
      (t[(t.Trying = 0)] = 'Trying'),
        (t[(t.Success = 1)] = 'Success'),
        (t[(t.FailureSilent = 2)] = 'FailureSilent'),
        (t[(t.FailureShown = 3)] = 'FailureShown'),
        (t[(t.Stopped = 4)] = 'Stopped');
    })(v || (v = {}));
  class rt {
    constructor(t) {
      (this.opts = t),
        (this.tries = 0),
        (this.triesEver = 0),
        (this.lastErrorMessage = ''),
        (this.isTrying = !1),
        (this.state = v.Trying),
        (this.timeout = 0),
        (this.executionStopped = () => {
          (this.state = v.Stopped),
            (this.isTrying = !1),
            (this.tries = 0),
            (this.lastErrorMessage = ''),
            S.deregister(this);
        }),
        (this.executionSuccess = () => {
          (this.state = v.Success),
            (this.isTrying = !1),
            (this.tries = 0),
            (this.lastErrorMessage = ''),
            this.opts.success(),
            S.deregister(this);
        }),
        (this.executionError = t => {
          (this.isTrying = !1),
            (this.lastErrorMessage = t.substr(0, 200)),
            this.tries < this.opts.numberOfSilentRetriesBeforeShowingErrorToUser
              ? ((this.state = v.FailureSilent),
                this.clearTimeout(),
                (this.timeout = setTimeout(
                  this.tryExecute,
                  this.opts.millisBetweenSilentRetries
                )))
              : this.opts.giveUpAfterSilentRetries
              ? (this.state = v.FailureSilent)
              : ((this.state = v.FailureShown), S.register(this));
        }),
        (this.executionPunt = () => {
          (this.isTrying = !1),
            (this.state = v.FailureSilent),
            this.clearTimeout(),
            (this.timeout = setTimeout(this.tryExecute, 100));
        }),
        (this.tryExecute = () => {
          if ((this.clearTimeout(), !this.isTrying)) {
            (this.state = v.Trying),
              (this.isTrying = !0),
              (this.tries += 1),
              (this.triesEver += 1);
            try {
              this.opts.execute(this.executionSuccess, this.executionError);
            } catch (t) {
              (this.tries = Math.max(
                this.tries,
                this.opts.numberOfSilentRetriesBeforeShowingErrorToUser
              )),
                setTimeout(() => {
                  this.executionError(t.toString());
                }, 0);
            }
            return !0;
          }
          return !1;
        });
    }
    start() {
      return this.tryExecute(), this;
    }
    clearTimeout() {
      this.timeout && (clearTimeout(this.timeout), (this.timeout = 0));
    }
    makeHtmlRow() {
      let t = $(document.createElement('tr'));
      return (
        t.append(f.makeElement('td', this.opts.label)),
        t.append(f.makeElement('td', this.lastErrorMessage)),
        t
      );
    }
    toString() {
      return `RetryInstance(${this.opts.label}, tries: ${this.tries} (${
        this.triesEver
      }), err: '${this.lastErrorMessage}', isTrying: ${this.isTrying}, state: ${
        v[this.state]
      })`;
    }
  }
  function at(t, e) {
    if (e)
      try {
        self.postMessage(t, e);
      } catch (e) {
        self.postMessage(t);
      }
    else self.postMessage(t);
  }
  !(function (t) {
    setTimeout(function () {
      !0;
    }, 0);
    var e = [],
      i = 5e3,
      o = 36e5,
      s = null,
      r = 0,
      h = i,
      l = !1;
    function c() {
      var t = a.RetryDialog.Body.$();
      t.empty();
      var i = $(document.createElement('tr'));
      i.append(f.makeElement('th', n.s('Task'))),
        i.append(f.makeElement('th', n.s('Error'))),
        t.append(i);
      for (var o = 0; o < e.length; o++) t.append(e[o].makeHtmlRow());
    }
    function u() {
      (r = Date.now()),
        null != s && (clearInterval(s), (s = null)),
        (h *= 2) > o && (h = o),
        a.RetryDialog.Countdown.$().text(n.s('Retrying now...'));
      for (var t = 0; t < e.length; t++) e[t].tryExecute();
    }
    function d() {
      var t = Date.now(),
        e = Math.round((r + h - t) / 1e3);
      e <= 0
        ? u()
        : a.RetryDialog.Countdown.$().text(
            n.s('Retrying in {0} {0,plural,one{second}other{seconds}}...', e)
          ),
        c();
    }
    (t.register = function (t) {
      e.indexOf(t) < 0 &&
        (f.gaTrack('ErrorShown', t.opts.label, t.lastErrorMessage, null),
        e.push(t),
        c()),
        f.modal(a.RetryDialog.Dialog.css()),
        (l = !0),
        null == s && ((r = Date.now()), (s = setInterval(d, 1e3)));
    }),
      (t.deregister = function (t) {
        var n = e.indexOf(t);
        n >= 0 && (e.splice(n, 1), c()),
          (h = i),
          (r = Date.now()),
          0 == e.length && l && a.RetryDialog.Dialog.$().modal('hide');
      }),
      $(() => {
        a.RetryDialog.RetryNowButton.$().click(() => {
          u(), (h = i);
        });
      });
  })(S || (S = {})),
    (function (t) {
      let e = {
        label: 'Unknown',
        url: '',
        tries: 3,
        paramname: 'file',
        withCredentials: !1,
        data: {},
        headers: {},
        progress: t => {},
        success: () => {},
        giveUpAfterSilentRetries: !1,
        timeout: 3e4
      };
      function i(t, i, n, o) {
        (n.data = {
          acl: i.acl || 'private',
          key: i.key,
          policy: i.policy,
          success_action_status: 201,
          'x-amz-algorithm': 'AWS4-HMAC-SHA256',
          'x-amz-credential': i.credential,
          'x-amz-date': i.date,
          'x-amz-signature': i.signature,
          'Content-Type': t.type,
          'Cache-Control': n.maxAge ? 'max-age=' + n.maxAge : 'no-cache'
        }),
          i.token && (n.data['x-amz-security-token'] = i.token),
          (function (t, i, n) {
            let o = $.extend({}, e, i),
              s = new XMLHttpRequest(),
              r = s.upload,
              a = new FormData();
            function h() {
              s.abort();
            }
            $.each(o.headers, function (t, e) {
              s.setRequestHeader(t, e);
            }),
              $.each(o.data, function (t, e) {
                a.append(t, e);
              }),
              a.append(o.paramname, t);
            let l = setTimeout(h, o.timeout),
              c = 0;
            (r.onprogress = function (t) {
              if (
                (clearTimeout(l),
                (l = setTimeout(h, o.timeout)),
                t.lengthComputable)
              ) {
                let e = Math.round((100 * t.loaded) / t.total);
                c !== e && ((c = e), o.progress(c));
              }
            }),
              (r.onerror = function (t) {
                n.errorHandler(f.formatXhrError(s, void 0));
              }),
              (r.onabort = function (t) {
                n.errorHandler(f.formatXhrError(s, 'abort'));
              }),
              (r.onloadend = function (t) {
                clearTimeout(l);
              }),
              (s.onload = function () {
                clearTimeout(l),
                  s.responseText
                    ? s.status < 200 || s.status > 299
                      ? n.errorHandler(f.formatXhrError(s, 'onload'))
                      : (o.progress(100), n.successHandler(s.responseText))
                    : n.errorHandler(f.formatXhrError(s, 'empty'));
              }),
              (s.withCredentials = !!o.withCredentials),
              s.open('POST', o.url, !0),
              s.send(a);
          })(t, n, o);
      }
      function o(t, o, s) {
        const r = s.url,
          a = s.backupUrl;
        let h = '',
          l = $.extend({}, e, s);
        const c = t.size > o.maxBytes;
        return new rt({
          label: l.label,
          execute: function (e, s) {
            c
              ? s(
                  n.s('The file is too large to upload. ') +
                    n.s(
                      'Please pick a file smaller than {0} {0,plural,one{byte}other{bytes}}. ',
                      o.maxBytes
                    )
                )
              : ((l.url = h = h == r && a ? a : r),
                i(t, o, l, { errorHandler: s, successHandler: e }));
          },
          success: function () {
            l.success();
          },
          numberOfSilentRetriesBeforeShowingErrorToUser: c ? 0 : l.tries,
          millisBetweenSilentRetries: 1e3,
          giveUpAfterSilentRetries: l.giveUpAfterSilentRetries
        }).start();
      }
      (t.uploadS3WithRetry = o),
        (t.uploadS3JsonWithRetry = function (t, e, i) {
          return o(
            new Blob([JSON.stringify(t)], { type: 'application/json' }),
            e,
            i
          );
        });
    })(y || (y = {})),
    (function (t) {
      t.initialize = function (t, e) {
        t.$().click(function () {
          let t = prompt(n.s('Please enter the image URL to upload:'));
          return t && ((t = t.trim()), t.length > 4 && e(t)), !1;
        });
      };
    })(C || (C = {})),
    (function (t) {
      t.list = function () {
        var t = [];
        function e(e, i) {
          e || t.push(i);
        }
        function i(t, i) {
          try {
            e(t(), i);
          } catch (t) {
            e(!1, i);
          }
        }
        return (
          i(function () {
            var t = document.createElement('canvas');
            return !(!t.getContext || !t.getContext('2d'));
          }, 'HTML5 Canvas'),
          e('undefined' != typeof WebSocket, 'WebSockets'),
          i(function () {
            var t = document.createElement('div');
            return 'draggable' in t || ('ondragstart' in t && 'ondrop' in t);
          }, 'HTML5 Drag-and-Drop'),
          e('undefined' != typeof URL, 'window.URL Support'),
          e('undefined' != typeof XMLHttpRequest, 'XML Http Requests'),
          i(function () {
            return (
              'undefined' != typeof Uint32Array &&
              'undefined' != typeof Uint8Array &&
              void 0 !== new Uint8Array(2).set
            );
          }, 'Native Type Arrays'),
          i(function () {
            var t = document.createElement('canvas');
            (t.width = 1), (t.height = 1);
            var e = t.getContext('2d').getImageData(0, 0, 1, 1).data;
            return new Int32Array(e.buffer).length > 0;
          }, 'ImageData.data is not a Uint8ClampedArray'),
          e(!(!window.history || !window.history.pushState), 'HTML5 History'),
          e('undefined' != typeof Worker, 'Web Workers'),
          e(!!Date.now, 'Date.now()'),
          i(function () {
            return !!new Blob();
          }, 'Blob and/or Blob Constructor'),
          t.sort(),
          t
        );
      };
    })(x || (x = {})),
    (function (t) {
      (t.shareUrl = function (t, e) {
        return '/images/' + t + '/' + e;
      }),
        (t.fetchUrl = function (t) {
          return '/api/fetchUrl?url=' + encodeURIComponent(t);
        });
    })(P || (P = {})),
    (function (t) {
      var e = /%([0-9A-Fa-f]{2})/g,
        i = /[^\x20-\x7e\xa0-\xff]/g,
        n = /\\([\u0000-\u007f])/g,
        o =
          /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g,
        s =
          /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+\-\.^_`|~])+)$/,
        r = /^([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *(?:$|;)/;
      function a(t) {
        var n = s.exec(t);
        if (!n) throw new TypeError('invalid extended field value');
        var o,
          r = n[1].toLowerCase(),
          a = n[2].replace(e, h);
        switch (r) {
          case 'iso-8859-1':
            o = String(a).replace(i, '?');
            break;
          case 'utf-8':
            o = decodeURIComponent(escape(a));
            break;
          default:
            throw new TypeError('unsupported charset in extended field');
        }
        return o;
      }
      function h(t, e) {
        return String.fromCharCode(parseInt(e, 16));
      }
      t.parse = function (t) {
        if (t && 'string' == typeof t) {
          var e = r.exec(t);
          if (e) {
            var i,
              s,
              h = e[0].length,
              l = (e[1].toLowerCase(), []),
              c = {};
            try {
              for (
                h = o.lastIndex = ';' === e[0].substr(-1) ? h - 1 : h;
                (e = o.exec(t));

              ) {
                if (e.index !== h)
                  throw new TypeError('invalid parameter format');
                if (
                  ((h += e[0].length),
                  (i = e[1].toLowerCase()),
                  (s = e[2]),
                  -1 !== l.indexOf(i))
                )
                  throw new TypeError('invalid duplicate parameter');
                l.push(i),
                  i.indexOf('*') + 1 !== i.length
                    ? 'string' != typeof c[i] &&
                      ('"' === s[0] &&
                        (s = s.substr(1, s.length - 2).replace(n, '$1')),
                      (c[i] = s))
                    : ((i = i.slice(0, -1)), (s = a(s)), (c[i] = s));
              }
              if (-1 !== h && h !== t.length)
                throw new TypeError('invalid parameter format');
            } catch (t) {}
            return c.filename;
          }
        }
      };
    })(A || (A = {})),
    (function (t) {
      const e = {
        url: '',
        progress: f.empty,
        error: f.empty,
        success: f.empty,
        withCredentials: !1,
        contentType: null
      };
      function i(t, e) {
        return f.blobToFile(t, e || 'FetchedFromUrl_' + Date.now());
      }
      t.download = function (t) {
        let o = $.extend({}, e, t),
          s = f.dataUrlToBlob(o.url) || f.dataUrlToBlob(o.displayUrl);
        if (s)
          setTimeout(function () {
            o.success(i(s));
          }, 0);
        else {
          let t = new XMLHttpRequest(),
            e = 0;
          o.progress != f.empty &&
            (t.onprogress = t => {
              if (t.lengthComputable) {
                let i = Math.round((100 * t.loaded) / t.total);
                e !== i && ((e = i), o.progress(e));
              }
            }),
            (t.onerror = e => {
              o.error(f.formatXhrError(t, void 0));
            }),
            (t.onabort = e => {
              o.error(f.formatXhrError(t, 'abort'));
            }),
            (t.withCredentials = !!o.withCredentials),
            (t.onload = e => {
              if (t.response)
                if (t.status < 200 || t.status > 299) {
                  let e = String.fromCharCode.apply(
                    null,
                    new Uint8Array(t.response)
                  );
                  o.error(
                    n.s('Failed to fetch "{0}"', o.displayUrl || o.url) +
                      '\n' +
                      e
                  );
                } else {
                  let e = o.contentType || t.getResponseHeader('Content-Type'),
                    n = A.parse(t.getResponseHeader('Content-Disposition')),
                    s = t.response,
                    r = i(new Blob([s], { type: e }), n);
                  o.success(r);
                }
            }),
            t.open('GET', o.url, !0),
            (t.responseType = 'arraybuffer'),
            t.send();
        }
      };
    })(T || (T = {}));
  class ht {
    constructor(t, e = null, i = null, n = null) {
      (this.name = t),
        (this.scriptUrls = e),
        (this.workerFunction = i),
        (this.messageListener = n),
        (this.myMessageListener = t =>
          this.messageListener ? this.messageListener(t) : void 0);
    }
    static getBasics() {
      return at.toString();
    }
    ensureWorker() {
      if (!this.worker) {
        let t = "'use strict';\n";
        if (
          ((t += ht.getBasics() + ';\n'),
          this.scriptUrls && this.scriptUrls.length > 0)
        ) {
          let e = this.scriptUrls.map(function (t) {
            return t.length > 1 && '/' == t[0] && '/' == t[1]
              ? 'https:' + t
              : t.length > 0 && '/' == t[0]
              ? location.protocol + '//' + location.host + t
              : t;
          });
          t += "importScripts(\n  '" + e.join("',\n  '") + "');\n";
        }
        this.workerFunction &&
          (t += '(' + this.workerFunction.toString() + ')();\n');
        let e = new Blob([t], { type: 'text/javascript' }),
          i = URL.createObjectURL(e);
        (this.worker = new Worker(i)),
          this.worker.addEventListener('error', t => {
            f.gaTrack(
              'YoWorker',
              'Error',
              t.filename +
                ':' +
                t.lineno +
                ':' +
                t.colno +
                ", '" +
                t.message +
                "', '" +
                t.error +
                "'"
            );
          }),
          this.worker.addEventListener('message', this.myMessageListener);
      }
      return this.worker;
    }
    setMessageListener(t) {
      this.messageListener = t;
    }
    postMessage(t, e) {
      try {
        try {
          this.ensureWorker().postMessage(t, e);
        } catch (e) {
          this.worker.postMessage(t);
        }
      } catch (t) {
        throw (
          (f.gaTrack(
            'YoWorker',
            'Exception',
            this.name + ": '" + t + "', '" + t.stack + "'"
          ),
          t)
        );
      }
    }
    terminate() {
      this.worker && (this.worker.terminate(), (this.worker = null));
    }
  }
  class lt {
    constructor(t) {
      if (((this.store = {}), t))
        for (var e in t) {
          let i = e.toString();
          t.hasOwnProperty(i) && this.put(o.cast(i), t[i]);
        }
    }
    static from(t) {
      for (var e = new lt(), i = 0; i < t.length; i++) {
        var n = t[i];
        if (2 == n.length) {
          var o = n[0],
            s = n[1];
          e.put(o, s);
        }
      }
      return e;
    }
    getOrElse(t, e) {
      return this.contains(t) ? this.get(t) : e;
    }
    get(t) {
      return this.store[t.toString()];
    }
    put(t, e) {
      return (this.store[t.toString()] = e);
    }
    contains(t) {
      return this.store.hasOwnProperty(t.toString());
    }
    remove(t) {
      return !!this.contains(t) && (delete this.store[t.toString()], !0);
    }
    clear() {
      this.store = {};
    }
  }
  class ct {
    constructor(t) {
      if (((this.store = {}), (this.size_ = 0), t))
        for (var e = 0; e < t.length; e++) this.add(t[e]);
    }
    size() {
      return this.size_;
    }
    add(t) {
      return (
        !this.contains(t) && (this.size_++, (this.store[t.toString()] = !0))
      );
    }
    addAll(t) {
      let e = !0;
      for (let i = 0; i < t.length; i++) e = e && this.add(t[i]);
      return e;
    }
    remove(t) {
      return (
        !!this.contains(t) &&
        (delete this.store[t.toString()], this.size_--, !0)
      );
    }
    contains(t) {
      return this.store.hasOwnProperty(t.toString());
    }
  }
  function ut() {
    class t {
      constructor(t, e, i, n, o) {
        (this.dataIn = t),
          (this.wIn = e),
          (this.hIn = i),
          (this.wOut = n),
          (this.hOut = o),
          (this.dataOut = new Uint8ClampedArray(n * o * 4)),
          (this.outToInX = this.wIn / this.wOut),
          (this.outToInY = this.hIn / this.hOut);
      }
      reset() {
        (this.rSum = 0), (this.gSum = 0), (this.bSum = 0), (this.wSum = 0);
      }
      accumulate(t, e, i) {
        const n = 4 * (t + this.wIn * e);
        (this.rSum += this.dataIn[n + 0] * i),
          (this.gSum += this.dataIn[n + 1] * i),
          (this.bSum += this.dataIn[n + 2] * i),
          (this.wSum += i);
      }
      populate(t, e) {
        this.reset();
        const i = t * this.outToInX,
          n = e * this.outToInY,
          o = Math.min(i + this.outToInX, this.wIn),
          s = Math.min(n + this.outToInY, this.hIn),
          r = Math.floor(i),
          a = Math.floor(n),
          h = Math.ceil(o) - 1,
          l = Math.ceil(s) - 1,
          c = Math.ceil(i),
          u = Math.ceil(n),
          d = h,
          p = l,
          m = c - i,
          g = u - n,
          f = o - d,
          w = s - p;
        this.accumulate(r, a, m * g), this.accumulate(r, l, m * w);
        for (var b = c; b < d; b++)
          this.accumulate(b, a, g), this.accumulate(b, l, w);
        this.accumulate(h, a, f * g), this.accumulate(h, l, f * w);
        for (var v = u; v < p; v++) {
          this.accumulate(r, v, m);
          for (b = c; b < d; b++) this.accumulate(b, v, 1);
          this.accumulate(h, v, f);
        }
        const S = 4 * (t + e * this.wOut);
        (this.dataOut[S + 0] = this.rSum / this.wSum),
          (this.dataOut[S + 1] = this.gSum / this.wSum),
          (this.dataOut[S + 2] = this.bSum / this.wSum),
          (this.dataOut[S + 3] = 255);
      }
      shrink() {
        for (var t = 0, e = 0; t < this.hOut; t++)
          for (var i = 0; i < this.wOut; i++, e++) this.populate(i, t);
        return this.dataOut;
      }
    }
    var e = [];
    function i(i) {
      e.push(Date.now());
      const n =
        ((o = i.dataIn),
        (s = i.wIn),
        (r = i.hIn),
        (a = i.wOut),
        (h = i.hOut),
        new t(o, s, r, a, h).shrink());
      var o, s, r, a, h;
      return Date.now(), e.pop(), n;
    }
    self.addEventListener('message', t => {
      try {
        var e = t.data;
        const n = i(e);
        at(
          {
            canvasId: e.canvasId,
            success: !0,
            wOut: e.wOut,
            hOut: e.hOut,
            dataOut: n
          },
          [n.buffer]
        );
      } catch (t) {
        at({
          canvasId: e.canvasId,
          success: !1,
          wOut: 0,
          hOut: 0,
          dataOut: null
        });
      }
    });
  }
  !(function (t) {
    let e = !0,
      i = 0;
    const n = new lt();
    t.ThumbnailJpegQuality = 0.7;
    class o {
      constructor(t, e) {
        if (
          ((this.canvasId = t),
          (this.spec = e),
          (this.failSafeTimeout = void 0),
          (this.croppedCanvas = this.spec.inputCanvas),
          this.spec.crop)
        ) {
          const t = this.spec.crop,
            e = t.right - t.left,
            i = t.bottom - t.top;
          if (
            0 != t.top ||
            0 != t.left ||
            e != this.spec.inputCanvas.width() ||
            i != this.spec.inputCanvas.height()
          ) {
            const n = new st(e, i);
            n
              .context()
              .drawCanvasEx3(
                this.spec.inputCanvas,
                t.left,
                t.top,
                n.width(),
                n.height(),
                0,
                0,
                n.width(),
                n.height()
              ),
              (this.croppedCanvas = n),
              (this.croppedCanvas.wasCropped = !0);
          }
        }
        let i = this.croppedCanvas.width(),
          n = this.croppedCanvas.height();
        (this.wOut = i), (this.hOut = n);
        i * n > this.spec.maxNumPixels &&
          ((this.hOut = Math.floor(
            Math.sqrt((this.spec.maxNumPixels * n) / i)
          )),
          (this.wOut = Math.floor(this.spec.maxNumPixels / this.hOut)));
      }
      shrinkingNeeded() {
        return (
          this.wOut != this.croppedCanvas.width() ||
          this.hOut != this.croppedCanvas.height()
        );
      }
      createOutputCanvas() {
        return new st(this.wOut, this.hOut);
      }
      shrinkWithWorker() {
        try {
          const t = this.croppedCanvas
              .context()
              .getImageData(
                0,
                0,
                this.croppedCanvas.width(),
                this.croppedCanvas.height()
              ).data,
            e = {
              canvasId: this.canvasId,
              wIn: this.croppedCanvas.width(),
              hIn: this.croppedCanvas.height(),
              dataIn: t,
              wOut: this.wOut,
              hOut: this.hOut
            };
          (this.failSafeTimeout = setTimeout(
            () => this.shrinkWithWorkerFailSafe('fail-safe timeout reached'),
            1e4
          )),
            this.spec.worker.setMessageListener(s),
            this.spec.worker.postMessage(e, [t.buffer]);
        } catch (t) {
          this.shrinkWithWorkerFailSafe(
            'exception in spawning worker or sending work message'
          );
        }
      }
      shrinkWithWorkerResultHandler(t) {
        if (
          t.success &&
          t.wOut == this.wOut &&
          t.hOut == this.hOut &&
          null != t.dataOut &&
          t.dataOut.length > 0
        ) {
          f.gaTrack('WebWorker', 'Downsample', 'Succeeded', 1);
          const e = this.createOutputCanvas(),
            i = e.context().createImageData(e.width(), e.height());
          i.data.set(t.dataOut),
            e.context().putImageData(i, 0, 0),
            (e.wasShrunk = !0),
            (e.wasCropped = this.croppedCanvas.wasCropped),
            this.completed(e);
        } else this.shrinkWithWorkerFailSafe('Worker reports failure');
      }
      shrinkWithWorkerFailSafe(t) {
        f.gaTrack('WebWorker', 'Downsample', 'Failed', 0),
          (e = !1),
          this.shrinkWithoutWorker();
      }
      shrinkWithoutWorker() {
        var t = this.createOutputCanvas();
        t
          .context()
          .drawCanvasEx2(this.croppedCanvas, 0, 0, t.width(), t.height()),
          (t.wasShrunk = !0),
          (t.wasCropped = this.croppedCanvas.wasCropped),
          this.completed(t);
      }
      produceThumbnail(e) {
        if (this.spec.thumbnailSize) {
          const i = this.spec.thumbnailSize.w,
            n = this.spec.thumbnailSize.h,
            o = new st(i, n);
          o.context().setFillStyle('rgb(255,255,255)'),
            o.context().fillRect(0, 0, i, n);
          const s = Math.min(i / e.width(), n / e.height());
          return (
            o
              .context()
              .context.drawImage(
                e.element,
                (i - e.width() * s) / 2,
                (n - e.height() * s) / 2,
                e.width() * s,
                e.height() * s
              ),
            o.toBlob('image/jpeg', t.ThumbnailJpegQuality)
          );
        }
        return null;
      }
      completed(t) {
        clearTimeout(this.failSafeTimeout),
          (this.failSafeTimeout = void 0),
          n.remove(this.canvasId),
          this.spec.completed(t, t.wasShrunk || t.wasCropped, () =>
            this.produceThumbnail(t)
          );
      }
      process() {
        this.shrinkingNeeded()
          ? e && this.spec.worker
            ? this.shrinkWithWorker()
            : this.shrinkWithoutWorker()
          : this.completed(this.croppedCanvas);
      }
    }
    function s(t) {
      const e = t.data;
      n.contains(e.canvasId) &&
        n.get(e.canvasId).shrinkWithWorkerResultHandler(e);
    }
    t.process = function (t) {
      const e = new o('cs_' + i++, t);
      n.put(e.canvasId, e), e.process();
    };
  })(E || (E = {})),
    (function (t) {
      let e;
      (t.isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0),
        (t.zoomDelta = function (t, e = 1.2, i = !0) {
          let n = i ? t.deltaY : (t.deltaY * t.deltaFactor) / 100;
          return Math.pow(e, n);
        }),
        (function (t) {
          (t[(t.CanvasEnter = 0)] = 'CanvasEnter'),
            (t[(t.CanvasLeave = 1)] = 'CanvasLeave'),
            (t[(t.Hover = 2)] = 'Hover'),
            (t[(t.Tap = 3)] = 'Tap'),
            (t[(t.ActionStart = 4)] = 'ActionStart'),
            (t[(t.ActionMove = 5)] = 'ActionMove'),
            (t[(t.ActionEnd = 6)] = 'ActionEnd'),
            (t[(t.PanZoom = 7)] = 'PanZoom'),
            (t[(t.DoubleClick = 8)] = 'DoubleClick'),
            (t[(t.MomentumTranslate = 9)] = 'MomentumTranslate');
        })((e = t.InteractionType || (t.InteractionType = {})));
      class i {
        constructor(t, e, i, n, o, s, r, a, h) {
          (this.type = t),
            (this.interactionIdentifier = e),
            (this.referenceInteraction = i),
            (this.pageX = n),
            (this.pageY = o),
            (this.zoomTo = s),
            (this.canvas = r),
            (this.isTouch = a),
            (this.isFirstPan = h),
            (this.numTouches = 0),
            i || (this.referenceInteraction = this),
            (this.timestamp = Date.now());
        }
        dup(t) {
          return new i(
            t,
            this.interactionIdentifier,
            this.referenceInteraction,
            this.pageX,
            this.pageY,
            this.zoomTo,
            this.canvas,
            this.isTouch,
            this.isFirstPan
          );
        }
        getReferenceBefore(t) {
          let e = this.timestamp - t,
            i = this.referenceInteraction;
          for (
            ;
            i.referenceInteraction.timestamp > e && i != i.referenceInteraction;

          )
            i = i.referenceInteraction;
          return i;
        }
        getMostRecentTwoTouch(t) {
          let e = this.timestamp - t,
            i = this.referenceInteraction;
          for (
            ;
            i.numTouches < 2 &&
            i.referenceInteraction.timestamp > e &&
            i != i.referenceInteraction;

          )
            i = i.referenceInteraction;
          return 2 == i.numTouches ? i : void 0;
        }
        isMousePanEnd() {
          return (
            this.type == e.ActionEnd &&
            this.referenceInteraction.type == e.ActionMove
          );
        }
        shouldStopMouseMomentumPan() {
          return (
            this.type == e.ActionStart ||
            this.type == e.ActionMove ||
            this.type == e.DoubleClick ||
            this.type == e.Tap ||
            this.type == e.PanZoom
          );
        }
        isTouchPanEnd() {
          return (
            !!!this.getMostRecentTwoTouch(500) &&
            this.type == e.CanvasLeave &&
            this.referenceInteraction.type == e.PanZoom
          );
        }
        shouldStopTouchMomentumPan() {
          return (
            this.type == e.ActionStart ||
            this.type == e.ActionMove ||
            this.type == e.DoubleClick ||
            this.type == e.Tap ||
            this.type == e.CanvasEnter
          );
        }
      }
      t.Interaction = i;
      class n {
        constructor(t, e, i) {
          (this.identifier = t), (this.pageX = e), (this.pageY = i);
        }
        static from(t) {
          return new n(t.identifier, t.pageX, t.pageY);
        }
        find(t) {
          for (let e = 0; e < t.length; e++) {
            const i = t.item(e);
            if (i.identifier == this.identifier) return i;
          }
          return null;
        }
        distanceSqrTo(t) {
          const e = this.pageX - t.pageX,
            i = this.pageY - t.pageY;
          return e * e + i * i;
        }
        distanceTo(t) {
          return Math.max(1, Math.sqrt(this.distanceSqrTo(t)));
        }
        isNull() {
          return this == t.NullTouch;
        }
      }
      (t.YoTouch = n),
        (t.TouchSpaceRadiusPx = 10),
        (t.TouchSpaceRadiusSqrPx = t.TouchSpaceRadiusPx * t.TouchSpaceRadiusPx),
        (t.TouchTimeBoxMs = 300),
        (t.DoubleTapRadiusPx = 20),
        (t.DoubleTapTimeMs = 300),
        (t.NullTouch = new n(null, 0, 0));
      let o = !1;
      try {
        let t = Object.defineProperty({}, 'passive', {
          get: function () {
            o = !0;
          }
        });
        window.addEventListener('test', null, t);
      } catch (t) {}
      t.AddEventListenerThirdArgForTouch = !!o && { passive: !1 };
    })(k || (k = {})),
    (function (t) {
      const e = 1048576,
        i = 10,
        n = 100,
        o = 20,
        s = 18;
      t.initialized = !1;
      var r = null;
      (t.lockAspectRatio = !1), (t.maxNumMegapixels = 4);
      var h = 0,
        l = 0;
      const c = et.empty();
      var u = 1,
        d = null,
        p = null,
        g = 0,
        w = 0,
        b = 0,
        v = 0;
      const S = nt.empty();
      var y = 1,
        C = 1,
        x = 0,
        P = 0;
      const A = et.empty(),
        T = et.empty(),
        E = et.empty(),
        I = et.empty();
      var M = !1;
      const R = et.empty(),
        F = nt.empty(),
        D = nt.empty();
      class _ {
        constructor(t, e) {
          (this.key = t),
            (this.anchor = e),
            (this.oppositeAnchor = m.opposite(this.anchor));
        }
      }
      var B = null;
      const L = new _('resize-top', m.Top),
        U = new _('resize-top-right', m.TopRight),
        N = new _('resize-right', m.Right),
        z = new _('resize-bottom-right', m.BottomRight),
        W = new _('resize-bottom', m.Bottom),
        O = new _('resize-bottom-left', m.BottomLeft),
        H = new _('resize-left', m.Left),
        V = new _('resize-top-left', m.TopLeft),
        X = new _('resize-move', m.Center);
      function Y(t, i, n, o, s) {
        n.$().text(t.toFixed(0) + ' x ' + i.toFixed(0) + ' px'),
          o
            .$()
            .text(
              f.formatAspectRatio(
                f.fuzzyAspectRatioEx({ w: t, h: i }, r.aspectRatios)
              )
            ),
          s.$().text(((t * i) / e).toFixed(1));
      }
      function G() {
        a.PreCrop.Sidebar.MaxNumMegapixels.display
          .$()
          .text(t.maxNumMegapixels + ' megapixels'),
          Y(
            Math.round(D.width()),
            Math.round(D.height()),
            a.PreCrop.Sidebar.cropped_image_size_display,
            a.PreCrop.Sidebar.cropped_image_aspect_ratio_display,
            a.PreCrop.Sidebar.cropped_image_megapixels_display
          ),
          a.PreCrop.Sidebar.lock_aspect_ratio_button
            .$()
            .prop('checked', t.lockAspectRatio);
        const i = (D.width() * D.height()) / e > t.maxNumMegapixels;
        a.PreCrop.Sidebar.cropped_image_warning.$().toggle(i),
          a.PreCrop.Sidebar.cropped_image_success.$().toggle(!i),
          a.PreCrop.Sidebar.cropped_image_megapixels_display
            .$()
            .attr('style', i ? 'color:red;' : '');
      }
      function q() {
        (t.lockAspectRatio = !t.lockAspectRatio), ct(), G();
      }
      function j() {
        (t.maxNumMegapixels = Math.min(
          t.maxNumMegapixels + 1,
          r.maxMaxNumMegapixels
        )),
          G();
      }
      function Z() {
        (t.maxNumMegapixels = Math.max(1, t.maxNumMegapixels - 1)), G();
      }
      function Q() {
        $(window).off('beforeunload'), location.reload();
      }
      function J() {
        const t = D.width(),
          e = D.height();
        t > 0 &&
          e > 0 &&
          null != r.completed &&
          (r.completed(D), a.PreCrop.App.$().hide());
      }
      function K(t, e) {
        if (null != t && null != e) {
          A.set(E), T.set(I);
          var i = $(p.element).offset();
          return (
            E.setXy(t - i.left, e - i.top),
            (n = E),
            I.setXy((n.x - S.left) * C, (n.y - S.top) * C),
            A.notEquals(E) || T.notEquals(I)
          );
        }
        var n;
        return !1;
      }
      function tt() {
        const t = 20 * C,
          e = Math.abs(I.x - D.left) < t,
          i = Math.abs(I.y - D.top) < t,
          n = Math.abs(I.x - D.right) < t,
          o = Math.abs(I.y - D.bottom) < t,
          s = D.center(),
          r = Math.abs(I.x - s.x) < t && Math.abs(I.y - s.y) < t;
        var a = null;
        I.x > D.left - t &&
          I.x < D.right + t &&
          I.y > D.top - t &&
          I.y < D.bottom + t &&
          (e
            ? (a = i ? V : o ? O : H)
            : n
            ? (a = i ? U : o ? z : N)
            : i
            ? (a = L)
            : o
            ? (a = W)
            : r && (a = X)),
          it(a);
      }
      function it(t) {
        (B = t),
          null == t
            ? $(p.element).attr('class', 'canvas-view')
            : $(p.element).attr('class', B.key + '-tool canvas-view'),
          Ct();
      }
      function ot(t) {
        const e = t.touches.item(0);
        lt(e.pageX, e.pageY), dt(e.pageX, e.pageY), t.preventDefault();
      }
      function rt(t) {
        const e = t.touches.item(0);
        lt(e.pageX, e.pageY), t.preventDefault();
      }
      function at(t) {
        mt(-1e5, -1e5), t.preventDefault();
      }
      function ht(t) {
        lt(t.pageX, t.pageY);
      }
      function lt(t, e) {
        const i = K(t, e);
        if (M) {
          if (null != B && i) {
            D.setFrom(F),
              D.moveAnchor(B.anchor, I.minus(R)),
              D.normalize(),
              (D.left = Math.max(D.left, 0)),
              (D.top = Math.max(D.top, 0)),
              (D.right = Math.min(D.right, h)),
              (D.bottom = Math.min(D.bottom, l)),
              D.round();
            Math.round(Math.max(0, n - D.width())),
              Math.round(Math.max(0, n - D.height()));
            D.moveAnchorToMinSize(B.anchor, n, n), D.round(), ct(), G(), Ct();
          }
        } else tt();
      }
      function ct() {
        if (t.lockAspectRatio) {
          var e = m.Center;
          if (
            (null != B && (e = B.oppositeAnchor),
            D.forceAspectRatio(u, e),
            D.width() > h || D.height() > l)
          )
            D.set(0, 0, h, l);
          else {
            const t = Math.max(0, -D.left) + Math.min(0, h - D.right),
              e = Math.max(0, -D.top) + Math.min(0, l - D.bottom);
            D.translate(t, e);
          }
          D.round(), Ct();
        }
      }
      function ut(t) {
        dt(t.pageX, t.pageY),
          $(window).on('mouseup', pt),
          $(window).on('mousemove', ht);
      }
      function dt(t, e) {
        (M = !0), R.set(I), F.setFrom(D), K(t, e);
      }
      function pt(t) {
        mt(t.pageX, t.pageY),
          $(window).off('mouseup', pt),
          $(window).off('mousemove', ht);
      }
      function mt(t, e) {
        (M = !1),
          $(window).off('mouseup', pt),
          $(window).off('mousemove', ht),
          K(t, e),
          tt();
      }
      function gt(t) {
        M || it(null);
      }
      function ft(t) {
        M || (K(t.pageX, t.pageY), tt());
      }
      function wt() {
        null != d &&
          null != p &&
          ((g = d.outerWidth()),
          (w = d.outerHeight()),
          (p.width() == g && p.height() == w) || p.setSize(g, w),
          (v = w - 20) / (b = g - 20) > l / h
            ? ((S.left = i),
              (P = (l / h) * (x = b)),
              (S.top = i + 0.5 * (v - P)))
            : ((S.top = i),
              (x = (h / l) * (P = v)),
              (S.left = i + 0.5 * (b - x))),
          (S.right = S.left + x),
          (S.bottom = S.top + P),
          (C = 1 / (y = x / h))),
          G(),
          Ct();
      }
      function bt(t) {
        return new et(S.left + t.x * y, S.top + t.y * y);
      }
      function vt(t, e, i, n, r) {
        const a = B == r,
          h = bt(e);
        t.setFillStyle('#ffffff'),
          t.fillRect(h.x + i, h.y + n, i * o, 6 * n),
          t.fillRect(h.x + i, h.y + n, 6 * i, n * o),
          t.setFillStyle(a ? '#ff0000' : '#000000'),
          t.fillRect(h.x + 2 * i, h.y + 2 * n, i * s, 4 * n),
          t.fillRect(h.x + 2 * i, h.y + 2 * n, 4 * i, n * s);
      }
      function St(t, e, i, n) {
        const r = B == n,
          a = bt(e);
        t.setFillStyle('#ffffff'),
          t.fillRect(a.x + i, a.y - 10, 6 * i, o),
          t.setFillStyle(r ? '#ff0000' : '#000000'),
          t.fillRect(a.x + 2 * i, a.y - 9, 4 * i, s);
      }
      function yt(t, e, i, n) {
        const r = B == n,
          a = bt(e);
        t.setFillStyle('#ffffff'),
          t.fillRect(a.x - 10, a.y + i, o, 6 * i),
          t.setFillStyle(r ? '#ff0000' : '#000000'),
          t.fillRect(a.x - 9, a.y + 2 * i, s, 4 * i);
      }
      function Ct() {
        if (null != r.inputCanvas && null != p && 0 != g && 0 != w) {
          const i = p.context();
          i.clearRect(0, 0, g, w),
            i.drawCanvasEx2(r.inputCanvas, S.left, S.top, x, P),
            i.setStrokeStyle('#000000'),
            i.setGlobalAlpha(0.4),
            i.setLineWidth(1);
          const n = Math.round(((e = D.left), S.left + e * y)) + 0.5,
            o = Math.round(((t = D.top), S.top + t * y)) + 0.5,
            s = Math.round(D.width() * y) - 1,
            a = Math.round(D.height() * y) - 1;
          i.strokeRect(n, o, s, a),
            i.setGlobalAlpha(1),
            vt(i, D.topLeft(), 1, 1, V),
            vt(i, D.topRight(), -1, 1, U),
            vt(i, D.bottomRight(), -1, -1, z),
            vt(i, D.bottomLeft(), 1, -1, O),
            St(i, D.leftCenter(), 1, H),
            St(i, D.rightCenter(), -1, N),
            yt(i, D.topCenter(), 1, L),
            yt(i, D.bottomCenter(), -1, W),
            (function (t, e, i) {
              var n = 17.5,
                o = B == i ? '#ff0000' : '#000000';
              const s = bt(e);
              t.beginPath(),
                t.triangle(s.x, s.y - n, -Math.PI / 2, 2, 5),
                t.triangle(s.x, s.y + n, Math.PI / 2, 2, 5),
                t.triangle(s.x - n, s.y, Math.PI, 2, 5),
                t.triangle(s.x + n, s.y, 0, 2, 5),
                t.strokeEx(2, '#FFF'),
                t.fillEx(o),
                t.fillCircle(s.x, s.y, 12, '#FFFFFF'),
                t.fillCircle(s.x, s.y, 11, o);
            })(i, D.center(), X);
        }
        var t, e;
      }
      t.show = function (e) {
        (h = (r = e).inputCanvas.width()),
          (l = r.inputCanvas.height()),
          c.setXy(0.5 * h, 0.5 * l),
          D.set(0, 0, h, l),
          (u = l / h),
          (t.lockAspectRatio = !!r.lockAspectRatio),
          (t.maxNumMegapixels = r.maxNumMegapixels),
          t.initialized ||
            ((t.initialized = !0),
            (d = a.PreCrop.ViewContainer.$()),
            (p = new st(d.outerWidth(), d.outerHeight())),
            d.append(p.element),
            $(p.element).mousedown(ut).mouseup(pt).mousemove(ht).hover(ft, gt),
            p.element.addEventListener(
              'touchstart',
              ot,
              k.AddEventListenerThirdArgForTouch
            ),
            p.element.addEventListener(
              'touchmove',
              rt,
              k.AddEventListenerThirdArgForTouch
            ),
            p.element.addEventListener(
              'touchend',
              at,
              k.AddEventListenerThirdArgForTouch
            ),
            a.PreCrop.Sidebar.crop_button.$().click(J),
            a.PreCrop.Sidebar.cancel_button.$().click(Q),
            a.PreCrop.Sidebar.lock_aspect_ratio_button.$().click(q),
            r.maxMaxNumMegapixels
              ? (a.PreCrop.Sidebar.MaxNumMegapixels.decrease.$().click(Z),
                a.PreCrop.Sidebar.MaxNumMegapixels.increase.$().click(j))
              : (a.PreCrop.Sidebar.MaxNumMegapixels.decrease.$().hide(),
                a.PreCrop.Sidebar.MaxNumMegapixels.increase.$().hide()),
            $(window).resize(wt)),
          Y(
            h,
            l,
            a.PreCrop.Sidebar.input_image_size_display,
            a.PreCrop.Sidebar.input_image_aspect_ratio_display,
            a.PreCrop.Sidebar.input_image_megapixels_display
          ),
          G(),
          a.PreCrop.App.$().show(),
          setTimeout(wt, 0);
      };
    })(I || (I = {})),
    (function (t) {
      function e(t) {
        return function (e, i, n) {
          t(f.formatXhrError(e, i));
        };
      }
      function n(t, e) {
        return function (i, n, o) {
          i.error ? t(i.error) : e(i);
        };
      }
      (t.createUserImageSpec = function (t, o, s, r, a, h) {
        const l = {
          originalFilename: s.name,
          contentType: s.type,
          w: r.width(),
          h: r.height(),
          sizePixels: r.width() * r.height(),
          sizeBytes: s.size,
          originalW: t.w,
          originalH: t.h,
          originalSizePixels: t.sizePixels,
          originalSizeBytes: t.sizeBytes,
          originalDpiOpt: t.dpi,
          wasShrunk: r.wasShrunk,
          wasTransparent: t.transparent,
          isGifImage: o
        };
        i.ajax({
          url: '/api/images',
          cache: !1,
          data: l,
          dataType: 'json',
          error: e(a),
          success: n(a, h),
          type: 'POST'
        });
      }),
        (t.readUserImageSpec = function (t, i, o, s) {
          $.ajax('/api/images/' + t + '/' + i, {
            cache: !1,
            dataType: 'json',
            error: e(o),
            success: n(o, s),
            type: 'GET'
          });
        }),
        (t.setStickySettings = function (t, o, s) {
          i.ajax({
            url:
              '/api/setStickySettings?stickySettings=' +
              encodeURIComponent(JSON.stringify(t)),
            cache: !1,
            data: {},
            dataType: 'json',
            error: e(o),
            success: n(o, s),
            type: 'POST'
          });
        }),
        (t.getWorkerUrl = function (t, e) {
          let i =
            ('http:' == location.protocol ? 'ws:' : 'wss:') +
            '//' +
            location.host +
            t +
            '?' +
            window.GlobalsEx.LocaleParameter;
          for (let t in e) e.hasOwnProperty(t) && (i += '&' + t + '=' + e[t]);
          return i;
        });
    })(M || (M = {})),
    (function (t) {
      const e = 'stickySettings';
      var i = null;
      function n() {
        window.GlobalsEx.email &&
          M.setStickySettings(
            i,
            function (t) {},
            function (t) {}
          );
        try {
          window.localStorage[e] = JSON.stringify(i);
        } catch (t) {}
      }
      (t.initialize = function () {
        if (!(i = window.GlobalsEx.stickySettings))
          try {
            i = JSON.parse(window.localStorage[e]);
          } catch (t) {
            i = {};
          }
      }),
        (t.fullyAutomatic = function (t) {
          return void 0 === t
            ? 0 != i.fullyAutomatic
            : ((i.fullyAutomatic = t), n(), t);
        }),
        (t.preCropEnabled = function (t) {
          return void 0 === t
            ? 1 == i.preCropEnabled
            : ((i.preCropEnabled = t), n(), t);
        }),
        (t.splitView = function (t) {
          return void 0 === t ? 0 != i.splitView : ((i.splitView = t), n(), t);
        });
    })(R || (R = {})),
    (function (t) {
      const e = new ht('Downsampler', [], ut);
      t.loadImageShrinkAndThumbnail = function (i, n, o, s) {
        t.loadCheckRotateFlattenImage(i, n, n => {
          let r = z.MaxMaxNumPixels;
          const a = n.width() * n.height(),
            h = a > r,
            l = {
              w: n.width(),
              h: n.height(),
              sizePixels: a,
              sizeBytes: i.size,
              transparent: !1
            };
          function c(a) {
            E.process({
              inputCanvas: n,
              crop: a,
              maxNumPixels: r,
              thumbnailSize: void 0,
              worker: s ? e : void 0,
              completed: function (e, n, s) {
                if (n || t.needsReencoding(i.type)) {
                  let n = t.recodeCanvasFile(i, e);
                  o(l, n, e);
                } else o(l, i, e);
              }
            });
          }
          h && R.preCropEnabled()
            ? I.show({
                inputFile: i,
                inputCanvas: n,
                lockAspectRatio: void 0,
                maxNumMegapixels: z.MaxMaxNumMegapixels,
                maxMaxNumMegapixels: z.MaxMaxNumMegapixels,
                aspectRatios: [],
                completed: t => {
                  (r = 1024 * I.maxNumMegapixels * 1024), c(t);
                }
              })
            : c();
        });
      };
    })(F || (F = {}));
  class dt {
    constructor(t, e, i, n, o, s) {
      (this.btn = t),
        (this.action = e),
        (this.delay = i),
        (this.firstDelayMultiplier = n),
        (this.ondown = o),
        (this.onup = s),
        (this.t = void 0),
        (this.repeat = () => {
          this.action(), (this.t = setTimeout(this.repeat, this.delay));
        }),
        (this.startHandler = t => {
          this.btn.on('mouseup mouseout', this.endHandler),
            this.ondown && this.ondown(),
            this.action(),
            (this.t = setTimeout(
              this.repeat,
              this.delay * this.firstDelayMultiplier
            )),
            t.preventDefault();
        }),
        (this.endHandler = t => {
          this.btn.off('mouseup mouseout', this.endHandler),
            this.onup && this.onup(),
            clearTimeout(this.t),
            (this.t = void 0),
            t.preventDefault();
        }),
        t.on('touchstart mousedown', this.startHandler),
        t.on('touchend', this.endHandler);
    }
  }
  class pt {
    static empty() {
      return new pt(0, 0, 0, ft.empty());
    }
    constructor(t, e, i, n, o) {
      (this.imageTypeE = t),
        (this.imageComplexityE = e),
        (this.usePalette = i),
        (this.palette = n),
        (this.segmentationEdits = o);
    }
    getImageTypeE() {
      return this.imageTypeE;
    }
    getImageComplexityE() {
      return this.imageComplexityE;
    }
    getUsePalette() {
      return 1 == this.usePalette;
    }
    getPalette() {
      return this.palette;
    }
    getSegmentationEdits() {
      return this.segmentationEdits;
    }
    equals(t) {
      return (
        this.imageTypeE == t.imageTypeE &&
        this.imageComplexityE == t.imageComplexityE &&
        this.usePalette == t.usePalette &&
        (1 != this.usePalette || this.palette.equals(t.palette)) &&
        this.segmentationEdits == t.segmentationEdits
      );
    }
    equalsIgnoringSegEdits(t) {
      return (
        this.imageTypeE == t.imageTypeE &&
        this.imageComplexityE == t.imageComplexityE &&
        this.usePalette == t.usePalette &&
        (1 != this.usePalette || this.palette.equals(t.palette))
      );
    }
    isEmpty() {
      return 0 == this.imageTypeE;
    }
    addClass(t) {
      return (
        this.imageTypeCss().$().addClass(t),
        this.imageComplexityCss().$().addClass(t),
        this.usePaletteCss().$().addClass(t),
        this
      );
    }
    removeClass(t) {
      return (
        this.imageTypeCss().$().removeClass(t),
        this.imageComplexityCss().$().removeClass(t),
        this.usePaletteCss().$().removeClass(t),
        this
      );
    }
    imageTypeCss() {
      switch (this.imageTypeE) {
        case 1:
          return a.App.Sidebar.ImageType.Photo;
        case 2:
          return a.App.Sidebar.ImageType.LogoAA;
        case 3:
          return a.App.Sidebar.ImageType.Logo;
        default:
          return a.empty;
      }
    }
    imageComplexityCss() {
      switch (this.imageComplexityE) {
        case 3:
          return a.App.Sidebar.ImageComplexity.high;
        case 2:
          return a.App.Sidebar.ImageComplexity.medium;
        case 1:
          return a.App.Sidebar.ImageComplexity.low;
        default:
          return a.empty;
      }
    }
    usePaletteCss() {
      switch (this.usePalette) {
        case 1:
          return a.App.Sidebar.PaletteYesNo.CustomColors;
        case 2:
          return a.App.Sidebar.PaletteYesNo.UnlimitedColors;
        default:
          return a.empty;
      }
    }
    toCommand(t) {
      return {
        jobId: t,
        imageTypeE: this.imageTypeE,
        imageComplexityE: this.imageComplexityE,
        paletteS:
          1 == this.usePalette ? this.palette.getPaletteString() : void 0,
        segmentationEdits: this.segmentationEdits
      };
    }
    name() {
      const t =
        1 == this.usePalette ? this.palette.getPaletteString() : 'unlimited';
      return (
        'vc_' +
        this.imageTypeE +
        '_' +
        this.imageComplexityE +
        '_' +
        this.usePalette +
        '_' +
        t +
        '_' +
        (this.segmentationEdits || 'unedited')
      );
    }
    getNewPalette(t, e, i) {
      const n = i
        .getPaletteList(this.imageTypeE, this.imageComplexityE)
        .getBestPalette();
      return this.palette.isEmpty() || this.palette.equals(n)
        ? i.getPaletteList(t, e).getBestPalette()
        : this.palette;
    }
    withImageType(t, e) {
      const i = this.getNewPalette(t, this.imageComplexityE, e);
      return new pt(t, this.imageComplexityE, this.usePalette, i, void 0);
    }
    withImageComplexity(t, e) {
      const i = this.getNewPalette(this.imageTypeE, t, e);
      return new pt(this.imageTypeE, t, this.usePalette, i, void 0);
    }
    withUsePalette(t, e) {
      return new pt(
        this.imageTypeE,
        this.imageComplexityE,
        t,
        this.palette,
        void 0
      );
    }
    withDefaultPalette(t) {
      const e = t
        .getPaletteList(this.imageTypeE, this.imageComplexityE)
        .getBestPalette();
      return e.equals(this.getPalette())
        ? this
        : new pt(
            this.imageTypeE,
            this.imageComplexityE,
            this.usePalette,
            e,
            this.segmentationEdits
          );
    }
    withPalette(t, e) {
      const i = e
        .getPaletteList(this.imageTypeE, this.imageComplexityE)
        .getPalette(t);
      return i.equals(this.getPalette())
        ? this
        : new pt(
            this.imageTypeE,
            this.imageComplexityE,
            this.usePalette,
            i,
            void 0
          );
    }
    withoutColor(t) {
      const e = this.palette.withoutColor(t);
      return new pt(
        this.imageTypeE,
        this.imageComplexityE,
        this.usePalette,
        e,
        void 0
      );
    }
    withNewColor(t) {
      const e = this.palette.withNewColor(t);
      return new pt(
        this.imageTypeE,
        this.imageComplexityE,
        this.usePalette,
        e,
        void 0
      );
    }
    withColor(t, e) {
      const i = this.palette.withColor(t, e);
      return new pt(
        this.imageTypeE,
        this.imageComplexityE,
        this.usePalette,
        i,
        void 0
      );
    }
    withSegEdits(t) {
      return new pt(
        this.imageTypeE,
        this.imageComplexityE,
        this.usePalette,
        this.palette,
        t
      );
    }
  }
  class mt {
    constructor(t) {
      (this.palette_with_score_string_list = t),
        (this.paletteWithScores = t
          .trim()
          .split('\n')
          .map(function (t) {
            return new gt(t);
          }));
    }
    equals(t) {
      return (
        this.palette_with_score_string_list == t.palette_with_score_string_list
      );
    }
    getPalette(t) {
      return this.paletteWithScores[t].palette;
    }
    getBestPalette() {
      if (!this.best) {
        this.best = this.paletteWithScores[0];
        for (var t = 1; t < this.paletteWithScores.length; t++)
          this.best.score > this.paletteWithScores[t].score &&
            (this.best = this.paletteWithScores[t]);
      }
      return this.best.palette;
    }
  }
  class gt {
    constructor(t) {
      this.scorePaletteS = t;
      const e = t.trim().split(';', 2);
      (this.score = parseFloat(e[0])), (this.palette = new ft(e[1]));
    }
  }
  class ft {
    static empty() {
      return new ft('');
    }
    constructor(t) {
      this.paletteS = t;
      const e = t.trim().split(',');
      this.colors =
        e.length > 1
          ? e[1]
              .trim()
              .split(' ')
              .map(function (t) {
                return t.length < 6 ? '000000'.substr(t.length) + t : t;
              })
          : [];
    }
    isEmpty() {
      return this.colors.length < 2;
    }
    getNumColors() {
      return this.colors.length;
    }
    getCssColor(t) {
      let e = this.colors[t];
      return e.length > 6 && (e = e.substr(e.length - 6, 6)), '#' + e;
    }
    getSwatchesHtml(t) {
      for (var e = '', i = 0; i < this.colors.length; i++)
        e += `<div class="${t.name()}" style="background:${this.getCssColor(
          i
        )}"></div>`;
      return e;
    }
    getPaletteString() {
      return this.paletteS;
    }
    equals(t) {
      return this.paletteS == t.paletteS;
    }
    static fromColors(t) {
      return new ft(t.length + ',' + t.join(' '));
    }
    withoutColor(t) {
      const e = this.colors.slice();
      return e.splice(t, 1), ft.fromColors(e);
    }
    withNewColor(t) {
      const e = this.colors.slice();
      return e.push(t), ft.fromColors(e);
    }
    withColor(t, e) {
      const i = this.colors.slice();
      return (i[t] = e), ft.fromColors(i);
    }
    contains(t) {
      return this.colors.indexOf(t) >= 0;
    }
  }
  class wt {
    constructor(t) {
      (this.spec = t), (this.paletteLists = {});
    }
    failed() {
      return 1 == this.spec.classificationStateE;
    }
    getPaletteString(t, e) {
      switch (t) {
        default:
        case 0:
        case 1:
        case 2:
          return this.spec.pfPhoto;
        case 3:
          return this.spec.pfLogo;
      }
    }
    getPaletteList(t, e) {
      const i = 'k' + t + '_' + e;
      return (
        this.paletteLists[i] ||
        (this.paletteLists[i] = new mt(this.getPaletteString(t, e)))
      );
    }
    getConfiguration() {
      var t = this.getPaletteList(
        this.spec.imageTypeE,
        this.spec.imageComplexityE
      ).getBestPalette();
      return new pt(
        this.spec.imageTypeE,
        this.spec.imageComplexityE,
        this.spec.usePaletteE,
        t,
        void 0
      );
    }
  }
  class bt {
    constructor(t) {
      this.spec = t;
    }
    id() {
      return this.spec.id;
    }
    getVectorizationState() {
      return this.spec.vectorizationStateE;
    }
    getConfiguration() {
      return new pt(
        this.spec.imageTypeE,
        this.spec.imageComplexityE,
        this.spec.paletteS ? 1 : 2,
        this.spec.paletteS ? new ft(this.spec.paletteS) : ft.empty(),
        this.spec.segmentationEdits
      );
    }
    getSegmentationUrl() {
      return this.spec.segmentationUrl;
    }
  }
  class vt {
    constructor(t) {
      (this.spec = t),
        (this.vectorizations = t.vectorizations.map(e => {
          let i = new bt(e);
          return (
            i.id() == t.vectorizationRecordId &&
              (this.currentVectorization = i),
            i
          );
        })),
        (this.segmentationEdits = t.segmentationEdits
          ? new bt(t.segmentationEdits)
          : null),
        (this.classification = t.classification
          ? new wt(t.classification)
          : null);
    }
    id() {
      return this.spec.id;
    }
    secret() {
      return this.spec.secret;
    }
    meta() {
      return this.spec.meta;
    }
    setHasImage() {
      this.spec.meta.hasImage = !0;
    }
    hasSuccessfulClassification() {
      return this.classification && !this.classification.failed();
    }
    getUserImageState() {
      if (!this.spec.meta.hasImage) return 0;
      if (!this.classification) return 1;
      if (this.classification.failed()) return 3;
      {
        const t = this.getResult();
        if (!t) return 2;
        switch (t.getVectorizationState()) {
          case 0:
          case 1:
            return 6;
          case 2:
          case 4:
            return 4;
          case 3:
            return 5;
        }
      }
      throw 'UserImage.getUserImageState - bad state!?';
    }
    getResult() {
      switch (this.spec.imageResultE) {
        case 2:
          return this.segmentationEdits;
        case 3:
          return this.currentVectorization;
        default:
          return;
      }
    }
    hasResult() {
      return null != this.getResult();
    }
    getConfiguration() {
      switch (this.spec.imageResultE) {
        case 1:
        case 2:
          return this.segmentationEdits.getConfiguration();
        case 3:
          return this.currentVectorization.getConfiguration();
        default:
          return pt.empty();
      }
    }
    getConfigurationsWithResult() {
      return this.vectorizations
        .filter(function (t) {
          return (
            2 == t.getVectorizationState() || 4 == t.getVectorizationState()
          );
        })
        .map(function (t) {
          return t.getConfiguration();
        });
    }
    getSegEditConfiguration() {
      if (this.segmentationEdits)
        return this.segmentationEdits.getConfiguration();
    }
    getSegmentationUrl() {
      switch (this.spec.imageResultE) {
        case 1:
        case 2:
          for (var t of this.vectorizations)
            if (
              t
                .getConfiguration()
                .equalsIgnoringSegEdits(
                  this.segmentationEdits.getConfiguration()
                )
            )
              return t.getSegmentationUrl();
          return;
        case 3:
          return this.currentVectorization.getSegmentationUrl();
        default:
          return;
      }
    }
  }
  !(function (t) {
    (t[(t.Disconnected = 0)] = 'Disconnected'),
      (t[(t.Connecting = 1)] = 'Connecting'),
      (t[(t.Connected = 2)] = 'Connected'),
      (t[(t.Error = 3)] = 'Error');
  })(D || (D = {}));
  class St {
    constructor(t) {
      (this.state = D.Disconnected),
        (this.websocket = null),
        (this.arraybuffer = null),
        (this.hasReceivedMessage = !1),
        (this.closeReason = null),
        (this.lastDebugUrl = 'unknown'),
        (this.opts = $.extend(
          {
            numberOfSilentRetriesBeforeShowingErrorToUser: 3,
            millisBetweenSilentRetries: 1e3
          },
          t
        )),
        (this.eventHandlers = {
          open: t => {
            this.onOpen();
          },
          close: t => {
            this.onClose(t);
          },
          message: t => {
            this.onMessage(t);
          },
          heartbeater: () => {
            this.opts.heartbeat &&
              null != this.websocket &&
              this.websocket.readyState == WebSocket.OPEN &&
              this.doSend(this.opts.heartbeat.message);
          }
        }),
        (this.retryable = new rt({
          label: this.opts.label,
          execute: (t, e) => {
            this.clearWebSocket(D.Connecting),
              (this.hasReceivedMessage = !1),
              (this.closeReason = null);
            let i = this.opts.url();
            (this.lastDebugUrl = i.split('?')[0]),
              (this.websocket = new WebSocket(i)),
              (this.websocket.binaryType = 'arraybuffer'),
              this.websocket.addEventListener('open', this.eventHandlers.open),
              this.websocket.addEventListener(
                'close',
                this.eventHandlers.close
              ),
              this.websocket.addEventListener(
                'message',
                this.eventHandlers.message
              );
          },
          success: () => {
            this.opts.connectedToNewServer();
          },
          numberOfSilentRetriesBeforeShowingErrorToUser:
            this.opts.numberOfSilentRetriesBeforeShowingErrorToUser,
          millisBetweenSilentRetries: this.opts.millisBetweenSilentRetries
        }).start());
    }
    clearWebSocket(t) {
      (this.state = t),
        null != this.websocket &&
          (this.websocket.removeEventListener('open', this.eventHandlers.open),
          this.websocket.removeEventListener('close', this.eventHandlers.close),
          this.websocket.removeEventListener(
            'message',
            this.eventHandlers.message
          ),
          this.websocket.close(),
          (this.websocket = null)),
        (this.arraybuffer = null),
        this.heartbeatTimer &&
          (clearTimeout(this.heartbeatTimer), (this.heartbeatTimer = void 0));
    }
    onOpen() {
      f.gaTrack('WebSocket', this.lastDebugUrl, 'connected', 1),
        this.opts.heartbeat &&
          this.opts.heartbeat.millis > 0 &&
          (this.heartbeatTimer = setInterval(
            this.eventHandlers.heartbeater,
            this.opts.heartbeat.millis
          )),
        this.opts.sendOnOpen
          ? this.doSend(this.opts.sendOnOpen)
          : this.eventHandlers.heartbeater();
    }
    onClose(t) {
      this.clearWebSocket(D.Disconnected);
      let e = t.reason;
      if (
        (this.closeReason && !e && (e = this.closeReason.code.toString()), e)
      ) {
        if (this.opts.puntOnCloseReason && this.opts.puntOnCloseReason(e))
          return void this.retryable.executionPunt();
        {
          let t = this.opts.closeReasonToMessage(e);
          if (t) return this.onError(t);
        }
      } else if (!this.hasReceivedMessage)
        return this.onError(this.opts.unableToConnectMessage);
      this.opts.disconnectedFromServer()
        ? this.onError(this.opts.unexpectedCloseMessage)
        : this.retryable.executionStopped();
    }
    onError(t) {
      f.gaTrack('WebSocket', this.lastDebugUrl, 'error: ' + t, 0),
        (this.opts.customOnError && !this.opts.customOnError(t)) ||
          this.retryable.executionError(t);
    }
    onMessage(t) {
      if ('string' == typeof t.data) {
        const e = JSON.parse(t.data);
        if (e.closeReason)
          return (
            (this.closeReason = e.closeReason), void this.websocket.close()
          );
        !this.hasReceivedMessage &&
          this.doSend(this.opts.heartbeat.message) &&
          ((this.hasReceivedMessage = !0),
          (this.state = D.Connected),
          this.retryable.executionSuccess()),
          null != this.arraybuffer &&
            ((e.arraybuffer = this.arraybuffer), (this.arraybuffer = null)),
          this.opts.newMessageFromServer(e);
      } else this.arraybuffer = t.data;
    }
    doSend(t, e = !1) {
      try {
        let i = e ? t : JSON.stringify(t);
        return this.websocket.send(i), !0;
      } catch (t) {
        return (
          this.clearWebSocket(D.Error),
          this.onError(this.opts.sendFailedMessage + 'Error: ' + t),
          !1
        );
      }
    }
    send0(t, e) {
      return null == this.websocket ||
        this.websocket.readyState != WebSocket.OPEN
        ? (null == this.websocket && this.retryable.tryExecute(), !1)
        : this.doSend(t, e);
    }
    send(t) {
      return this.send0(t, !1);
    }
    sendBinary(t) {
      return this.send0(t, !0);
    }
    getState() {
      return this.state;
    }
    forceClose() {
      this.clearWebSocket(D.Disconnected);
    }
  }
  !(function (t) {
    var e,
      i = 0;
    (t.isConnected = function () {
      return e.getState() == D.Connected;
    }),
      (t.initialize = function (t) {
        e = new St({
          url: function () {
            return M.getWorkerUrl('/api/websocket', {
              imageId: t.imageId,
              secret: t.secret,
              priority: i.toString()
            });
          },
          connectedToNewServer: function () {
            (i = 0), t.connectedToNewServer();
          },
          disconnectedFromServer: t.disconnectedFromServer,
          newMessageFromServer: t.newMessageFromServer,
          heartbeat: { millis: 2e4, message: { index: 0, command: 0 } },
          label: n.s('Connect to worker'),
          puntOnCloseReason: function (t) {
            return '-3' == t && i++ < window.Globals.NumPuntsWhenWorkersBusy;
          },
          closeReasonToMessage: function (t) {
            switch (t) {
              case '2':
                return n.s(
                  'Unknown image - it may have been deleted, or you may not have the necessary credentials to access it'
                );
              case '-3':
                return n.s(
                  'Workers overloaded. Additional workers should be online in a couple of minutes. '
                );
              case '-4':
                return;
              default:
                return t;
            }
          },
          unableToConnectMessage: n.s(
            'Unable to connect to the worker. Is your firewall or proxy blocking WebSockets?'
          ),
          unexpectedCloseMessage: n.s('Unexpected worker disconnection. '),
          sendFailedMessage: n.s('Failed to send message to worker. ')
        });
      }),
      (t.send = function (t) {
        return e.send(t);
      });
  })(_ || (_ = {})),
    (function (t) {
      let e = null;
      function i() {
        return location.href.split('#')[0];
      }
      function n(t) {
        const n = t.originalEvent;
        if (n.state) {
          const t = n.state;
          G.resumeUserImage(t.id, t.secret);
        } else
          G.hasRun &&
            e != i() &&
            (location.replace(location.href),
            location.href.indexOf('#') >= 0 && location.reload());
        e = i();
      }
      (t.exitHref = '/'),
        (t.initialize = function () {
          (e = i()), a.$window.on('popstate', n);
        }),
        (t.goTo = function (n) {
          const o = location,
            s = o.pathname,
            r = '/images/' + n.id + '/edit/' + n.secret,
            a = 0 === s.lastIndexOf(r, 0);
          (document.title = n.originalFilename + ' - Vector Magic'),
            a
              ? (t.exitHref = o.protocol + '//' + o.host)
              : ((t.exitHref = o.href),
                history.pushState(n, '', r),
                f.gaSetPageAndSendPageview('/images/edit'),
                (e = i()));
        }),
        (t.exit = function () {
          const e = i();
          (location.href = t.exitHref),
            t.exitHref.indexOf('#') >= 0 &&
              f.startsWith(t.exitHref, e) &&
              location.reload();
        });
    })(B || (B = {}));
  class yt {
    constructor(t, e) {
      (this.color = t), (this.lenghts = e);
    }
  }
  class Ct {
    constructor(t, e) {
      (this.shapes = t), (this.floats = e), (this.hasPaths = !1);
      // let i = 0;
      // try {
      //   let t = 0;
      //   for (var n of this.shapes) {
      //     let e = new Path2D();
      //     for (var o of n.lenghts) {
      //       for (t += o, e.moveTo(this.floats[i++], this.floats[i++]); i < t; )
      //         e.bezierCurveTo(
      //           this.floats[i++],
      //           this.floats[i++],
      //           this.floats[i++],
      //           this.floats[i++],
      //           this.floats[i++],
      //           this.floats[i++]
      //         );
      //       e.closePath();
      //     }
      //     n.path = e;
      //   }
      //   this.hasPaths = !0;
      // } catch (t) {
      //   this.hasPaths = !1;
      // }
    }
    static from(t) {
      const e = new Float32Array(t.arraybuffer),
        i = t.shapes.map(function (t) {
          return new yt(t.color, t.lengths);
        });
      return new Ct(i, e);
    }
    drawTo(t, e, i) {
      if (this.hasPaths)
        for (var n of this.shapes)
          e
            ? ((t.fillStyle = n.color), t.fill(n.path))
            : (i && (t.strokeStyle = n.color), t.stroke(n.path));
      else {
        let s = 0,
          r = 0;
        for (var n of this.shapes) {
          for (var o of (t.beginPath(), n.lenghts)) {
            for (r += o, t.moveTo(this.floats[s++], this.floats[s++]); s < r; )
              t.bezierCurveTo(
                this.floats[s++],
                this.floats[s++],
                this.floats[s++],
                this.floats[s++],
                this.floats[s++],
                this.floats[s++]
              );
            t.closePath();
          }
          e
            ? ((t.fillStyle = n.color), t.fill())
            : (i && (t.strokeStyle = n.color), t.stroke());
        }
      }
    }
  }
  class xt {
    constructor(t, e, i) {
      (this.name = t),
        (this.imageWidth = e),
        (this.imageHeight = i),
        (this.pieces = []);
    }
    numPoints() {
      let t = 0;
      for (var e of this.pieces) t += e.floats.length;
      return t;
    }
    append(t) {
      this.pieces.push(t);
    }
    drawTo(t) {
      for (var e of ((t.lineJoin = 'bevel'),
      (t.lineWidth = 1),
      t.beginPath(),
      t.rect(0, 0, this.imageWidth, this.imageHeight),
      t.clip(),
      [!1, !0]))
        for (var i of this.pieces) i.drawTo(t, e, !0);
    }
    drawOutlinesTo(t, e) {
      t.lineJoin = 'bevel';
      let i = 1;
      for (var n of (e > 4 && (i = 1 + 2 * f.clamp((e - 4) / 12, 0, 1)),
      (t.lineWidth = i / e),
      (t.strokeStyle = '#0FF'),
      this.pieces))
        n.drawTo(t, !1, !1);
    }
  }
  !(function (t) {
    const e = 'RESET';
    var i,
      o,
      s,
      r,
      a,
      h,
      l = [],
      c = [],
      u = !1,
      d = 0;
    function p() {
      s &&
        (s.removeEventListener('load', m), s.removeEventListener('error', g)),
        (s = void 0);
    }
    function m() {
      (r = F.flattenImage(s)),
        p(),
        (a = r.context().getImageDataFull()),
        (h = r.context().getImageDataFull()),
        w(),
        O.segmentationSetDefaultColor(zt.fromImageData(a, 0, 0));
    }
    function g(t) {
      p(), U.failedToLoadSegmentation();
    }
    function w() {
      for (var t of (h.data.set(a.data), l)) t.doEdit(h);
      b();
    }
    function b() {
      r.context().context.putImageData(h, 0, 0),
        O.segmentationNode().setSegmentation(r),
        P(!1),
        O.segmentationSetEnabled(l.length > 0, c.length > 0, S());
    }
    function v() {
      var t = '';
      for (var e of l) t = e.concatenateOpString(t);
      return 0 == t.length ? void 0 : t;
    }
    function S() {
      return l.length > 0 && l[l.length - 1].opString() != e;
    }
    function y(t) {
      t.isInside(h) &&
        t.wantsEdit(h) &&
        (c.length > 0 && (c = []),
        l.push(t),
        l.length > 300 && O.segmentationDontEditTooMuch(),
        t.doEdit(h),
        b());
    }
    function C(t, e, i) {
      const n = 4 * (e + i * t.width);
      return (
        (t.data[n + 3] << 24) |
        (t.data[n] << 16) |
        (t.data[n + 1] << 8) |
        t.data[n + 2]
      );
    }
    function x(t, e) {
      return (
        (e *= 4),
        (t.data[e + 3] << 24) |
          (t.data[e] << 16) |
          (t.data[e + 1] << 8) |
          t.data[e + 2]
      );
    }
    function P(e) {
      u
        ? e
          ? T()
          : d || (d = setTimeout(T, 500))
        : t.pinchPoints.length > 0 && ((t.pinchPoints.length = 0), A());
    }
    function A() {
      O.segmentationNode().finder.invalidate();
    }
    function T() {
      if ((d && (clearTimeout(d), (d = 0)), !h)) return;
      f.tic(), (t.pinchPoints.length = 0);
      const e = h;
      for (
        var i, n, o, s, r = 0;
        r < e.height - 1 && t.pinchPoints.length < 200;
        r++
      ) {
        (n = C(e, 0, r)), (s = C(e, 0, r + 1));
        for (var a = 1; a < e.width; a++)
          (i = n),
            (o = s),
            (n = C(e, a, r)),
            (s = C(e, a, r + 1)),
            i == o ||
              n == s ||
              (i != s && o != n) ||
              t.pinchPoints.push(new et(a, r + 1));
      }
      f.toc('SegEditor.computePinchPoints'), A();
    }
    (t.pinchPoints = []),
      (t.ensureInitialized = function (t, e, u) {
        (i = t),
          (e == o && u == v()) ||
            ((l = []),
            (c = []),
            (function (t) {
              if (t) {
                const e = t.split('\n');
                for (; e.length > 0; ) {
                  const t = e.shift();
                  if (t.length > 0) {
                    const e = E.factory(t);
                    e && l.push(e);
                  }
                }
              }
            })(u)),
          e != o && ((o = e), p(), (r = void 0), (a = void 0), (h = void 0)),
          o
            ? r
              ? w()
              : (O.segmentationNode().setProgress(50),
                ((s = new Image()).crossOrigin = 'anonymous'),
                s.addEventListener('load', m),
                s.addEventListener('error', g),
                (s.src = o))
            : (f.gaTrack('ErrorShown', 'SegEditor', 'No segmentationUrl'),
              alert(
                n.s(
                  'Terribly sorry, but we seem to have a bug preventing the segmentation editor from initializing.'
                )
              ));
      }),
      (t.getSegmentationEdits = v),
      (t.zap = function (t, e, i) {
        y(new R(t, e, i));
      }),
      (t.fill = function (t, e, i) {
        y(new M(t, e, i));
      }),
      (t.pixel = function (t, e, i) {
        y(new I(t, e, i));
      }),
      (t.color = function (t, e) {
        return zt.fromImageData(h, t, e);
      }),
      (t.isInside = function (t, e) {
        return 0 <= t && t < h.width && 0 <= e && e < h.height;
      }),
      (t.reset = function () {
        S() && y(new k());
      }),
      (t.undo = function () {
        if (l.length > 0) {
          const t = l.pop();
          c.push(t), w();
        }
      }),
      (t.redo = function () {
        if (c.length > 0) {
          const t = c.pop();
          l.push(t), t.doEdit(h), b();
        }
      }),
      (t.toggleFinder = function () {
        (u = !u), P(!0);
      }),
      (t.getShowPinchPoints = function () {
        return u;
      });
    class E {
      constructor(t, e, i) {
        (this.x = t),
          (this.y = e),
          (this.color = i),
          (this.x = 0 | t),
          (this.y = 0 | e);
      }
      isInside(t) {
        return (
          0 <= this.x && this.x < t.width && 0 <= this.y && this.y < t.height
        );
      }
      concatenateOpString(t) {
        return t + this.toString() + '\n';
      }
      toString() {
        return (
          this.opString() +
          ',' +
          this.color.toHex() +
          ',' +
          this.x +
          ',' +
          this.y
        );
      }
      static factory(t) {
        var e = t.split(','),
          i = e.shift(),
          n = zt.fromHex(e.shift()),
          o = parseInt(e.shift()),
          s = parseInt(e.shift());
        if (!isNaN(o) && !isNaN(s))
          switch (i) {
            case 'p':
              return new I(o, s, n);
            case 'f':
              return new M(o, s, n);
            case 'd':
              return new R(o, s, n);
          }
      }
    }
    class k extends E {
      constructor() {
        super(0, 0, zt.black);
      }
      opString() {
        return e;
      }
      concatenateOpString(t) {
        return '';
      }
      wantsEdit(t) {
        return !0;
      }
      doEdit(t) {
        t.data.set(a.data);
      }
    }
    class I extends E {
      opString() {
        return 'p';
      }
      wantsEdit(t) {
        return !this.color.isAtImageData(t, this.x, this.y);
      }
      doEdit(t) {
        this.color.writeToImageData(t, this.x, this.y);
      }
    }
    class M extends E {
      opString() {
        return 'f';
      }
      wantsEdit(t) {
        return !this.color.isAtImageData(t, this.x, this.y);
      }
      doEdit(t) {
        f.tic();
        const e = t.width,
          i = t.height;
        var n = this.x + this.y * t.width;
        const o = this.color.toArgb(),
          s = x(t, n);
        if (s != o) {
          const o = [];
          for (o.push(n); o.length > 0; ) {
            const n = o.pop(),
              l = n / e,
              c = n - (n % e),
              u = c + e,
              d = l > 0,
              p = l < i - 1;
            for (var r = !0, a = !0, h = n; h < u && x(t, h) == s; h++) {
              if ((this.color.writeToImageDataK(t, h), d)) {
                const i = h - e;
                r ? x(t, i) == s && (o.push(i), (r = !1)) : (r = x(t, i) != s);
              }
              if (p) {
                const i = h + e;
                a ? x(t, i) == s && (o.push(i), (a = !1)) : (a = x(t, i) != s);
              }
            }
            (r = !0), (a = !0);
            for (h = n - 1; h >= c && x(t, h) == s; h--) {
              if ((this.color.writeToImageDataK(t, h), d)) {
                const i = h - e;
                r ? x(t, i) == s && (o.push(i), (r = !1)) : (r = x(t, i) != s);
              }
              if (p) {
                const i = h + e;
                a ? x(t, i) == s && (o.push(i), (a = !1)) : (a = x(t, i) != s);
              }
            }
          }
        }
        f.toc('FloodFillEdit.doEdit');
      }
    }
    class R extends E {
      constructor() {
        super(...arguments),
          (this.pixelsX = []),
          (this.pixelsY = []),
          (this.neighborColors = []),
          (this.initialized = !1);
      }
      opString() {
        return 'd';
      }
      wantsEdit(t) {
        return !0;
      }
      doEdit(t) {
        this.initialized || this.initialize(t),
          this.neighborColors.length > 0 ? this.divide(t) : this.fill(t);
      }
      initialize(t) {
        this.color = zt.fromImageData(t, this.x, this.y);
        const e = this.color.toArgb(),
          i = new ct([0]),
          n = new zt(0, 0, 0, 127),
          o = n.toArgb();
        var s, r, a;
        this.pixelsX.push(this.x),
          this.pixelsY.push(this.y),
          n.writeToImageData(t, this.x, this.y);
        for (var h = 0; h < this.pixelsX.length; h++) {
          let c = this.pixelsX[h],
            u = this.pixelsY[h];
          for (var l = 0; l < 4; l++) {
            switch (l) {
              case 0:
                (s = c - 1), (r = u);
                break;
              case 1:
                (s = c + 1), (r = u);
                break;
              case 2:
                (s = c), (r = u - 1);
                break;
              case 3:
                (s = c), (r = u + 1);
            }
            0 <= s &&
              s < t.width &&
              0 <= r &&
              r < t.height &&
              ((a = C(t, s, r)) == e
                ? (this.pixelsX.push(s),
                  this.pixelsY.push(r),
                  n.writeToImageData(t, s, r))
                : a == o ||
                  (i.add(a) &&
                    this.neighborColors.push(zt.fromImageData(t, s, r))));
          }
        }
        this.initialized = !0;
      }
      getClosestNeighborColor(t) {
        for (
          var e = this.neighborColors[0], i = t.distanceSqr(e), n = 1;
          n < this.neighborColors.length;
          n++
        ) {
          const o = this.neighborColors[n],
            s = t.distanceSqr(o);
          s < i && ((e = o), (i = s));
        }
        return e;
      }
      divide(t) {
        const e = i.context().getImageDataFull();
        for (var n, o, s = 0; s < this.pixelsX.length; s++) {
          (n = this.pixelsX[s]), (o = this.pixelsY[s]);
          let i = zt.fromImageData(e, n, o);
          (i = this.getClosestNeighborColor(i)), i.writeToImageData(t, n, o);
        }
      }
      fill(t) {
        for (var e, i, n = 0; n < this.pixelsX.length; n++)
          (e = this.pixelsX[n]),
            (i = this.pixelsY[n]),
            this.color.writeToImageData(t, e, i);
      }
    }
  })(L || (L = {}));
  class Pt {
    showState() {}
    takeAction() {}
    disconnectedFromServer() {}
    needsConnection() {
      return !1;
    }
    goBack() {}
    goNext() {}
    canBack() {
      return !1;
    }
    canNext() {
      return !1;
    }
    cannotExit() {}
  }
  !(function (t) {
    var e,
      i,
      o,
      s,
      r,
      h = 0,
      l = 0,
      c = 1;
    const u = {};
    var d, p, m;
    let g;
    function w(t, e) {
      (i = t),
        v(e),
        o.meta().wasShrunk && a.App.ImageView.ShrunkNotification.$().show(),
        o.meta().wasTransparent &&
          a.App.ImageView.TransparencyNotification.$().show(),
        O.imageUpdated(i, e.originalFilename),
        $(window).on('beforeunload', x),
        B.goTo(e),
        a.App.force_exit.$().click(A),
        a.App.exit_app.$().click(T).removeAttr('disabled'),
        // a.App.Sidebar.ReviewResult.Download.$().attr(
        //   'href',
        //   P.shareUrl(e.id, e.secret)
        // );
        a.App.Sidebar.ReviewResult.Download.$().attr('href', '#');
      document
        .getElementById('App-Sidebar-ReviewResult-Download')
        .addEventListener('click', function (event) {
          console.log('Download SVG File');
          const blob = new Blob([ctx.getSerializedSvg(true)], {
            type: 'image/svg+xml'
          });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = originImageName.split('.')[0] + '.svg';
          document.body.appendChild(link);
          link.click();
          URL.revokeObjectURL(url);
        });
    }
    !(function (t) {
      t.Uploading = new (class extends Pt {
        showState() {
          O.showProgress(0, 0);
        }
        cannotExit() {
          return n.s(
            'Please wait for your image to finish uploading before exiting. '
          );
        }
      })();
      t.Uploaded = new (class extends Pt {
        showState() {
          O.showProgress(0, 100), O.showProgress(1, 5);
        }
        takeAction() {
          D(3, { jobId: E() });
        }
        needsConnection() {
          return !0;
        }
      })();
      t.Classifying = new (class extends Pt {
        showState() {
          O.showProgress(1, 5);
        }
        disconnectedFromServer() {
          H();
        }
        cannotExit() {
          return n.s('Please wait for your job to finish before exiting. ');
        }
      })();
      t.Classified = new (class extends Pt {
        showState() {
          O.showProgress(1, 100);
        }
        takeAction() {
          R.fullyAutomatic() ? k(t.Configured) : k(t.ImageTypeSelection);
        }
        needsConnection() {
          return !0;
        }
      })();
      t.ClassificationFailed = new (class extends Pt {
        showState() {
          O.setAppState(11);
        }
        goNext() {
          H();
        }
        canNext() {
          return !0;
        }
      })();
      t.ImageTypeSelection = new (class extends Pt {
        showState() {
          O.setAppState(3);
        }
        goBack() {
          this.canBack() && k(t.ReviewResult);
        }
        goNext() {
          k(t.ImageComplexitySelection);
        }
        canBack() {
          return I();
        }
        canNext() {
          return !0;
        }
      })();
      t.ImageComplexitySelection = new (class extends Pt {
        showState() {
          switch (r.getImageTypeE()) {
            default:
            case 1:
              O.setAppState(4);
              break;
            case 2:
              O.setAppState(5);
              break;
            case 3:
              O.setAppState(6);
          }
        }
        goBack() {
          k(t.ImageTypeSelection);
        }
        goNext() {
          k(t.PaletteYesNoSelection);
        }
        canBack() {
          return !0;
        }
        canNext() {
          return !0;
        }
      })();
      t.PaletteYesNoSelection = new (class extends Pt {
        showState() {
          O.setAppState(7);
        }
        goBack() {
          k(t.ImageComplexitySelection);
        }
        goNext() {
          r.getUsePalette() ? k(t.PickPaletteContents) : k(t.Configured);
        }
        canBack() {
          return !0;
        }
        canNext() {
          return !0;
        }
      })();
      t.PickPaletteContents = new (class extends Pt {
        showState() {
          O.setAppState(8);
        }
        goBack() {
          k(t.PaletteYesNoSelection);
        }
        goNext() {
          k(t.Configured);
        }
        canBack() {
          return !0;
        }
        canNext() {
          return !0;
        }
      })();
      t.Configured = new (class extends Pt {
        showState() {
          O.showProgress(2, 5);
        }
        takeAction() {
          if (I()) k(t.ReviewResult);
          else {
            d = r.name();
            D(4, {
              version: 0,
              vectorize: !0,
              sendResult: !(p = u[d]),
              configuration: r.toCommand(E())
            });
          }
        }
        needsConnection() {
          return !0;
        }
      })();
      t.Vectorizing = new (class extends Pt {
        showState() {
          O.showProgress(2, 5);
        }
        disconnectedFromServer() {
          V();
        }
        cannotExit() {
          return n.s('Please wait for your job to finish before exiting. ');
        }
      })();
      t.VectorizationFailed = new (class extends Pt {
        showState() {
          a.App.Sidebar.VectorizationFailed.EditSegmentation.$().toggle(
            !!r.getSegmentationEdits()
          ),
            O.setAppState(12);
        }
        goBack() {
          X();
        }
        goNext() {
          V();
        }
        canBack() {
          return !0;
        }
        canNext() {
          return !0;
        }
      })();
      t.FetchingResult = new (class extends Pt {
        showState() {
          O.setAppState(9);
        }
        disconnectedFromServer() {
          V();
        }
      })();
      t.ReviewResult = new (class extends Pt {
        showState() {
          O.setAppState(9);
        }
        goBack() {
          r.getUsePalette()
            ? k(t.PickPaletteContents)
            : k(t.PaletteYesNoSelection);
        }
        goNext() {}
        canBack() {
          return !0;
        }
        canNext() {
          return !1;
        }
      })();
      t.SegEditing = new (class extends Pt {
        showState() {
          a.App.ImageView.ShrunkNotification.$().hide(),
            a.App.ImageView.TransparencyNotification.$().hide(),
            L.ensureInitialized(
              i,
              o.getSegmentationUrl(),
              r.getSegmentationEdits()
            ),
            O.setAppState(10);
        }
        goBack() {
          a.App.ImageView.DontEditTooMuchNotification.$().hide(),
            5 == o.getUserImageState()
              ? k(t.VectorizationFailed)
              : k(t.ReviewResult);
        }
        goNext() {
          a.App.ImageView.DontEditTooMuchNotification.$().hide(),
            C(r.withSegEdits(L.getSegmentationEdits()));
        }
        canBack() {
          return !0;
        }
        canNext() {
          return !0;
        }
        cannotExit() {
          return r.getSegmentationEdits() != L.getSegmentationEdits()
            ? n.s(
                'Your segmentation edits have not been saved. Be sure to click Next before exiting to save your changes. '
              )
            : void 0;
        }
      })();
      t.FetchingSegmentationFailed = new (class extends Pt {
        showState() {
          O.setAppState(13);
        }
      })();
    })(g || (g = {})),
      (t.create = function (t, e, i, s) {
        y.uploadS3WithRetry(t, i.image, {
          url: window.Globals.s3_url,
          backupUrl: window.Globals.s3_backup_url,
          label: n.s('Uploading original image'),
          maxAge: 31536e3,
          success: () => {
            o.setHasImage(), F(), k(g.Uploaded);
          },
          progress: t => {
            O.showProgress(0, t);
          }
        }),
          w(e, i),
          k(g.Uploading);
      }),
      (t.resume = function (t, e) {
        w(t, e);
        const i = n.s('Unknown error. ');
        switch ((O.setErrorMessage(i), o.getUserImageState())) {
          case 0:
            throw 'Illegal starting state';
          case 1:
            k(g.Uploaded);
            break;
          case 2:
            k(g.Classified);
            break;
          case 3:
            k(g.ClassificationFailed);
            break;
          case 4:
            k(g.Configured);
            break;
          case 5:
            O.resultFailedToLoad(i), k(g.VectorizationFailed);
            break;
          case 6:
            k(g.SegEditing);
        }
      });
    var b = !1;
    function v(t) {
      (o = new vt(t)),
        (s = $.extend({}, o.meta())),
        O.setClassification(o.classification),
        O.setConfigurations(o);
      var e = o.getConfiguration();
      e.isEmpty() &&
        o.hasSuccessfulClassification() &&
        (e = o.classification.getConfiguration()),
        S(e);
    }
    function S(t) {
      t.getPalette().isEmpty() &&
        o.hasSuccessfulClassification() &&
        (t = t.withDefaultPalette(o.classification)),
        (r = t),
        O.setConfiguration(r);
    }
    function C(t) {
      S(t), V();
    }
    function x(t) {
      let i = e.cannotExit();
      return (
        !i &&
          M() &&
          (i = n.s(
            'Synchronizing state with server, please wait before exiting. '
          )),
        i && (t.returnValue = i),
        i
      );
    }
    function A() {
      return $(window).off('beforeunload'), B.exit(), !1;
    }
    function T() {
      return e == g.SegEditing ? e.goBack() : B.exit(), !1;
    }
    function E() {
      return ++c;
    }
    function k(t) {
      (e = t),
        O.setBackAndNext(e.canBack(), e.canNext()),
        e.showState(),
        e.takeAction();
    }
    function I() {
      return m && o.getConfiguration().equals(r) && m.name == r.name();
    }
    function M() {
      return !s.hasImage && o.meta().hasImage;
    }
    function F() {
      M() && D(2, o.meta());
    }
    function D(t, e) {
      const i = { index: ++l, command: t, body: e };
      b ||
        ((b = !0),
        _.initialize({
          imageId: o.id(),
          secret: o.secret(),
          newMessageFromServer: N,
          connectedToNewServer: z,
          disconnectedFromServer: W
        })),
        _.send(i);
    }
    function U() {
      (u[p.name] = p), O.resultUpdated(p), (m = p), k(g.ReviewResult);
    }
    function N(t) {
      const o = t;
      if (!o.body || !o.body.jobId || o.body.jobId == c) {
        switch ((o.body && (o.body.arraybuffer = t.arraybuffer), o.command)) {
          case 1:
            break;
          case 11:
            const t = o.body;
            f.gaTrack('ErrorShown', 'Panic', t.message),
              alert(
                n.s(
                  'Terribly sorry, but an unrecoverable server error has occurred:'
                ) +
                  '\n\n' +
                  t.message +
                  '\n\n' +
                  n.s('Please try again, or try another image.')
              ),
              A();
            break;
          case 3:
            k(g.Classifying);
            break;
          case 4:
            const s = o.body;
            s.version, s.vectorize && k(g.Vectorizing);
            break;
          case 5:
            const r = o.body,
              a = 5 + (95 * r.progress) / 100;
            switch (e) {
              case g.Classifying:
                O.showProgress(1, a),
                  r.finished &&
                    (v(r.userImage),
                    r.errorMessageTr
                      ? (O.setErrorMessage(r.errorMessageTr),
                        k(g.ClassificationFailed))
                      : k(g.Classified));
                break;
              case g.Vectorizing:
                O.showProgress(2, a),
                  r.finished &&
                    (v(r.userImage),
                    r.errorMessageTr
                      ? (O.setErrorMessage(r.errorMessageTr),
                        O.resultFailedToLoad(r.errorMessageTr),
                        k(g.VectorizationFailed))
                      : p
                      ? U()
                      : k(g.FetchingResult));
            }
            break;
          case 7:
            (p = new xt(d, i.width(), i.height())), O.resultProgress(1);
            break;
          case 8:
            const h = o.body;
            O.resultProgress(h.progress), p.append(Ct.from(h));
            break;
          case 9:
            U();
            break;
          case 10:
            O.setErrorMessage(
              n.s('Failed to fetch the vectorization result. ')
            ),
              k(g.VectorizationFailed);
            break;
          default:
            f.fatalErrorStr(
              n.s('Received unknown server response: "{0}".', '' + o.body)
            );
        }
        h = o.index;
      }
    }
    function z() {
      F(), e.takeAction();
    }
    function W() {
      return e.disconnectedFromServer(), l != h || M() || e.needsConnection();
    }
    function H() {
      k(g.Uploaded);
    }
    function V() {
      k(g.Configured);
    }
    function X() {
      k(g.ImageTypeSelection);
    }
    (t.setConfigurationAndGo = C),
      (t.setImageType = function (t, e) {
        S(r.withImageType(t, o.classification)),
          k(e ? g.Configured : g.ImageComplexitySelection);
      }),
      (t.setImageComplexity = function (t, e) {
        S(r.withImageComplexity(t, o.classification)),
          k(e ? g.Configured : g.PaletteYesNoSelection);
      }),
      (t.setPaletteYesNo = function (t) {
        S(r.withUsePalette(t, o.classification)),
          k(1 == t ? g.PickPaletteContents : g.Configured);
      }),
      (t.pickSuggestedPalette = function (t, e) {
        const i = r.withPalette(t, o.classification);
        i != r && S(i), e && k(g.Configured);
      }),
      (t.paletteWithoutColor = function (t) {
        S(r.withoutColor(t));
      }),
      (t.paletteWithNewColor = function (t) {
        S(r.withNewColor(t.toHex()));
      }),
      (t.paletteWithColor = function (t, e) {
        const i = e.toHex();
        r.getPalette().contains(i) || S(r.withColor(t, i));
      }),
      (t.retryClassification = H),
      (t.retryVectorization = V),
      (t.startSegEditing = function () {
        k(g.SegEditing);
      }),
      (t.handPickSettings = X),
      (t.goBack = function () {
        e.goBack();
      }),
      (t.goNext = function () {
        e.goNext();
      }),
      (t.failedToLoadSegmentation = function () {
        k(g.FetchingSegmentationFailed);
      });
  })(U || (U = {})),
    (function (t) {
      (t.MinScaleFactor = 1 / 16),
        (t.MaxScaleFactor = 16),
        (t.zoomStep = 1.2),
        (t.zoomToFitBackOff = 0.95),
        (t.configure = function (e) {
          e.MinScaleFactor && (t.MinScaleFactor = e.MinScaleFactor),
            e.MaxScaleFactor && (t.MaxScaleFactor = e.MaxScaleFactor),
            e.zoomStep && (t.zoomStep = e.zoomStep),
            e.zoomToFitBackOff && (t.zoomToFitBackOff = e.zoomToFitBackOff);
        }),
        (t.buttonFor = function (t) {
          return 1 == (1 & t.buttons)
            ? 'left'
            : 2 == (2 & t.buttons)
            ? 'right'
            : 4 == (4 & t.buttons)
            ? 'middle'
            : 'none';
        }),
        (t.addMovement = function (t, e, i) {
          (t.dx = e), (t.dy = i);
        });
    })(N || (N = {}));
  class At {
    constructor(t, e, i, n, o, s, r) {
      (this.pointerEvent = t),
        (this.x = e),
        (this.y = i),
        (this.type = n),
        (this.numTouches = o),
        (this.down = s),
        (this.root = r),
        (this.button = N.buttonFor(this.pointerEvent)),
        (this.timestamp = Date.now());
    }
    getPoint() {
      return new et(this.x, this.y);
    }
    getRoot() {
      return this.root || this;
    }
    sameXyAs(t) {
      return this.x == t.x && this.y == t.y;
    }
  }
  class Tt {
    constructor(t) {
      (this.owner = t), (this.dx = 0), (this.dy = 0), (this.scale = 1);
    }
    constrainTranslation() {}
    constrainScale(t) {
      return t;
    }
    quantizeOffset() {
      (this.dx = Math.round(this.dx)), (this.dy = Math.round(this.dy));
    }
    translateBy(t, e, i = !0) {
      (0 == t && 0 == e) ||
        ((this.dx += t),
        (this.dy += e),
        i && this.constrainTranslation(),
        this.owner.invalidate());
    }
    setScaleAndOffset(t, e, i) {
      (this.scale = t), (this.dx = e), (this.dy = i), this.owner.invalidate();
    }
    zoomBy(t) {
      1 != t && this.zoomTo(this.scale * t);
    }
    zoomTo(t) {
      this.scale != t &&
        ((this.scale = this.constrainScale(t)), this.owner.invalidate());
    }
    zoomAboutBy(t, e, i) {
      this.zoomAboutTo(t, e, this.scale * i);
    }
    zoomAboutTo(t, e, i) {
      const n = (i = this.constrainScale(i)) / this.scale;
      (this.dx = t - (t - this.dx) * n),
        (this.dy = e - (e - this.dy) * n),
        (this.scale = i),
        this.constrainTranslation(),
        this.owner.invalidate();
    }
    transformEvent(t, e) {
      const i = t.getRoot(),
        n = e ? i : t;
      return new At(
        t.pointerEvent,
        (n.x - this.dx) / this.scale,
        (n.y - this.dy) / this.scale,
        n.type,
        n.numTouches,
        t.down ? this.transformEvent(t.down, e) : void 0,
        i
      );
    }
    transformContext(t, e) {
      e
        ? t.context.setTransform(this.scale, 0, 0, this.scale, this.dx, this.dy)
        : t.context.transform(this.scale, 0, 0, this.scale, this.dx, this.dy);
    }
    transformPoint(t) {
      return new et(this.scale * t.x + this.dx, this.scale * t.y + this.dy);
    }
    transformRect(t) {
      return new nt(
        this.scale * t.left + this.dx,
        this.scale * t.top + this.dy,
        this.scale * t.right + this.dx,
        this.scale * t.bottom + this.dy
      );
    }
    inverseTransformPoint(t) {
      return new et((t.x - this.dx) / this.scale, (t.y - this.dy) / this.scale);
    }
    inverseTransformRect(t) {
      return new nt(
        (t.left - this.dx) / this.scale,
        (t.top - this.dy) / this.scale,
        (t.right - this.dx) / this.scale,
        (t.bottom - this.dy) / this.scale
      );
    }
    snapPointToCanvasPixels(t, e = 0.5, i = 0.5) {
      return this.inverseTransformPoint(this.transformPoint(t).snap(e, i));
    }
    getScale() {
      return this.scale;
    }
    getDxDy() {
      return new et(this.dx, this.dy);
    }
    getDx() {
      return this.dx;
    }
    getDy() {
      return this.dy;
    }
  }
  class Et extends Tt {
    constructor(t = 1, e = 1) {
      super(void 0),
        (this.imageWidth = t),
        (this.imageHeight = e),
        (this.views = []),
        (this.canvasPad = nt.empty()),
        (this.stickyZoom = 0),
        (this.owner = this);
    }
    constrainTranslation() {
      this.stickyZoom = 0;
      const t = 0 * this.scale + this.dx,
        e = this.imageWidth * this.scale + this.dx,
        i = this.canvasWidth / 2;
      t > i ? (this.dx -= t - i) : e < i && (this.dx -= e - i);
      const n = 0 * this.scale + this.dy,
        o = this.imageHeight * this.scale + this.dy,
        s = this.canvasHeight / 2;
      n > s ? (this.dy -= n - s) : o < s && (this.dy -= o - s);
    }
    constrainScale(t) {
      return (
        (this.stickyZoom = 0), f.clamp(t, N.MinScaleFactor, N.MaxScaleFactor)
      );
    }
    setCanvasPad(t, e, i, n) {
      this.canvasPad.set(t, e, i, n);
    }
    canvasWidthInterior() {
      return this.canvasWidth - this.canvasPad.left - this.canvasPad.right;
    }
    canvasHeightInterior() {
      return this.canvasHeight - this.canvasPad.top - this.canvasPad.bottom;
    }
    canvasCenterX() {
      return this.canvasPad.left + 0.5 * this.canvasWidthInterior();
    }
    canvasCenterY() {
      return this.canvasPad.top + 0.5 * this.canvasHeightInterior();
    }
    stopAllPanAnimations() {
      for (let t of this.views) t.stopPanAnimation();
    }
    zoomTo(t) {
      this.zoomAboutTo(this.canvasCenterX(), this.canvasCenterY(), t);
    }
    centerImagePoint(t, e) {
      (this.dx = this.canvasCenterX() - t * this.scale),
        (this.dy = this.canvasCenterY() - e * this.scale),
        this.quantizeOffset(),
        this.invalidate();
    }
    center() {
      this.centerImagePoint(0.5 * this.imageWidth, 0.5 * this.imageHeight);
    }
    zoomToFit() {
      const t =
        Math.min(
          this.canvasHeightInterior() / this.imageHeight,
          this.canvasWidthInterior() / this.imageWidth
        ) * N.zoomToFitBackOff;
      (this.scale = this.constrainScale(t)),
        this.center(),
        (this.stickyZoom = 1);
    }
    fitRect(t) {
      const e =
        Math.min(
          this.canvasHeightInterior() / t.height(),
          this.canvasWidthInterior() / t.width()
        ) * N.zoomToFitBackOff;
      this.scale = this.constrainScale(e);
      let i = t.center();
      this.centerImagePoint(i.x, i.y), (this.stickyZoom = 0);
    }
    zoom1To1() {
      (this.scale = 1), this.center(), (this.stickyZoom = 2);
    }
    dblClick() {
      switch (this.stickyZoom) {
        case 0:
        case 2:
          this.zoomToFit();
          break;
        case 1:
          this.zoom1To1();
      }
    }
    register(t) {
      this.views.push(t);
    }
    setCanvasSize(t, e, i) {
      if (t != this.canvasWidth || e != this.canvasHeight || i) {
        switch (
          (this.canvasWidth > 0 &&
            ((this.dx += 0.5 * (t - this.canvasWidth)),
            (this.dy += 0.5 * (e - this.canvasHeight))),
          (this.canvasWidth = t),
          (this.canvasHeight = e),
          this.stickyZoom)
        ) {
          case 0:
            this.constrainTranslation();
            break;
          case 1:
            this.zoomToFit();
            break;
          case 2:
            this.zoom1To1();
        }
        this.invalidate(!0);
      }
    }
    setImageSize(t, e) {
      if (t != this.imageWidth || e != this.imageHeight) {
        switch (
          ((this.imageWidth = t), (this.imageHeight = e), this.stickyZoom)
        ) {
          case 0:
            this.constrainTranslation();
            break;
          case 1:
            this.zoomToFit();
            break;
          case 2:
            this.zoom1To1();
        }
        this.invalidate(!0);
      }
    }
    invalidate(t) {
      for (let e of this.views) e.invalidate(t);
    }
  }
  class kt {
    constructor(...t) {
      (this.children = []),
        (this.transform = new Tt(this)),
        (this.visible = !0),
        (this.fixedCoordinates = !1),
        (this.handler = void 0),
        this.add(...t);
    }
    setView(t) {
      this.view = t;
      for (let e of this.children) e.setView(t);
    }
    add(...t) {
      this.children || (this.children = []), this.children.push(...t);
      for (let e of t) (e.parent = this), e.setView(this.view);
      return this;
    }
    getPropagatedScale() {
      let t = this.transform.getScale();
      return this.parent && (t *= this.parent.getPropagatedScale()), t;
    }
    getScale() {
      return this.view.getScale();
    }
    transformEvent(t) {
      return this.transform.transformEvent(t, this.fixedCoordinates);
    }
    transformEventWithAncestors(t) {
      return (
        this.parent && (t = this.parent.transformEventWithAncestors(t)),
        this.transformEvent(t)
      );
    }
    transformContext(t) {
      this.transform.transformContext(t, this.fixedCoordinates);
    }
    inFixedCoordinates(t, e) {
      t.context.save(),
        this.transform.transformContext(t, !0),
        e(),
        t.context.restore();
    }
    inCanvasCoordinates(t, e) {
      t.context.save(), t.context.resetTransform(), e(), t.context.restore();
    }
    drawTo(t) {
      if (this.visible) {
        t.context.save(), this.transformContext(t), this.drawInner(t);
        for (let e of this.children) e.drawTo(t);
        t.context.restore();
      }

      if (t.context.canvas.id === 'App-ImageView-RightCanvas') {
        if (this.visible) {
          console.log('Draw App-ImageView-RightCanvas');
          const fakeCanvas = { context: ctx };
          fakeCanvas.context.save();
          for (let e of this.children) e.drawTo(fakeCanvas);
          fakeCanvas.context.restore();
          console.log(
            'Draw App-ImageView-RightCanvas result:',
            ctx.getSerializedSvg(true)
          );
        }
      }
    }
    invalidate(t) {
      this.visible && this.view && this.view.invalidate(t);
    }
    drawInner(t) {}
    moveHandlerWithPropagation(t) {
      const e = this.transformEvent(t);
      if (this.children.length > 0)
        for (let t = this.children.length - 1; t >= 0; t--) {
          const i = this.children[t];
          if (i.visible) {
            const t = i.moveHandlerWithPropagation(e);
            if (t) return t;
          }
        }
      return this.moveHandler(e);
    }
    dblClick(t) {
      return !0;
    }
    moveHandler(t) {
      if (this.handler && this.handler.moveHandler(t)) return this;
    }
    mouseCursor(t) {
      if (this.handler) return this.handler.mouseCursor(t);
    }
  }
  class It extends kt {
    moveHandlerWithPropagation(t) {}
    moveHandler(t) {}
    mouseCursor(t) {}
  }
  class Mt extends kt {
    constructor(t) {
      super(),
        (this.camera = t),
        (this.eventHistory = []),
        (this.panPxPerMs = et.zero()),
        (this.panAnimationFrame = () => {
          if (!this.hasPanSpeed()) return;
          this.timerId = void 0;
          let t = Date.now(),
            e = t - this.lastPanFrameAt;
          if (
            ((this.lastPanFrameAt = t),
            this.camera.translateBy(
              this.panPxPerMs.x * e,
              this.panPxPerMs.y * e
            ),
            t - this.lastPanInteraction.timestamp > 150)
          ) {
            let t = (0.003 * e) / this.panPxPerMs.length();
            t >= 1
              ? (this.panPxPerMs.setXy(0, 0), this.camera.invalidate())
              : (this.panPxPerMs.plusEqualsScaled(-t, this.panPxPerMs),
                this.triggerPanAnimation());
          } else this.triggerPanAnimation();
        });
    }
    clearDeltaMoveEvent() {
      this.deltaMoveEvent = void 0;
    }
    moveHandler(t) {
      if (1 == t.type) 'left' == t.button && this.camera.stopAllPanAnimations();
      else if (2 == t.type)
        if (
          (this.camera.stopAllPanAnimations(), t.down && 'left' == t.button)
        ) {
          const e = t.getRoot();
          if (this.deltaMoveEvent)
            this.camera.translateBy(
              e.x - this.deltaMoveEvent.x,
              e.y - this.deltaMoveEvent.y
            );
          else {
            t.down.getRoot();
          }
          this.deltaMoveEvent = e;
        } else this.deltaMoveEvent = void 0;
      else
        3 == t.type &&
          (this.tryStartPanAnimation(t), (this.deltaMoveEvent = void 0));
      return this.addEventToHistory(t), this;
    }
    mouseCursor(t) {
      return t ? a.grab_closed : a.grab_open;
    }
    stopPanAnimation() {
      this.timerId &&
        (clearTimeout(this.timerId),
        (this.timerId = void 0),
        (this.lastPanFrameAt = void 0),
        this.panPxPerMs.setXy(0, 0),
        (this.lastPanInteraction = void 0),
        this.camera.invalidate());
    }
    tryStartPanAnimation(t) {
      if (
        ((this.lastPanInteraction = t), Date.now() - this.lastPinchZoomAt < 500)
      )
        return;
      let e = this.panAnimationReferenceEvent(t.timestamp - 100);
      if (e) {
        let i = Math.max(10, t.timestamp - e.timestamp);
        if (i < 500) {
          let n = 1;
          if (
            (this.panPxPerMs
              .setXy((t.x - e.x) / i, (t.y - e.y) / i)
              .capLength(1.75 * Math.sqrt(n)),
            this.hasPanSpeed())
          )
            return (
              (this.lastPanFrameAt = Date.now()),
              void this.triggerPanAnimation()
            );
        }
      }
    }
    triggerPanAnimation() {
      this.timerId || (this.timerId = setTimeout(this.panAnimationFrame, 10));
    }
    hasPanSpeed() {
      return 0 != this.panPxPerMs.lengthSqr();
    }
    panAnimationReferenceEvent(t) {
      let e = this.eventHistory,
        i = e[e.length - 1];
      if (2 == i.type) {
        for (let n = e.length - 1; n >= 0; n--) {
          let o = e[n];
          if (2 != o.type) return i;
          if (((i = o), i.timestamp < t)) return i;
        }
        return i;
      }
    }
    addEventToHistory(t) {
      let e = t.timestamp;
      for (
        this.eventHistory.push(t);
        this.eventHistory[0] && e - this.eventHistory[0].timestamp > 1e3;

      )
        this.eventHistory.shift();
    }
  }
  class Rt {
    constructor(t, e, i) {
      (this.pointerId = t),
        (this.pageX = e),
        (this.pageY = i),
        (this.pageXy = new et(this.pageX, this.pageY));
    }
  }
  class Ft {
    constructor(t, e) {
      (this.imageView = t),
        (this.isParent = e),
        (this.touchPointsMap = new Map()),
        (this.startPinchZoom = void 0);
    }
    numTouches() {
      return this.touchPointsMap.size;
    }
    dup() {
      let t = new Ft(this.imageView, !1);
      for (let e of this.touchPointsMap.values()) t.addOrUpdate(e);
      return (
        (t.pinchPageCenter = this.pinchPageCenter.dup()),
        (t.pinchWidth = this.pinchWidth),
        (t.pinchScale = this.pinchScale),
        (t.pinchDxDy = this.pinchDxDy.dup()),
        t
      );
    }
    addOrUpdate(t) {
      let e = this.numTouches();
      this.touchPointsMap.set(t.pointerId, t);
      let i = this.numTouches();
      if (2 == i) {
        this.pinchPageCenter = et.zero();
        for (let t of this.touchPointsMap.values())
          this.pinchPageCenter.plusEquals(t.pageXy);
        this.pinchPageCenter.timesEquals(0.5), (this.pinchWidth = 0);
        for (let t of this.touchPointsMap.values())
          this.pinchWidth += this.pinchPageCenter.distanceTo(t.pageXy);
        (this.pinchWidth *= 0.5),
          (this.pinchScale = this.imageView.getCamera().getScale()),
          (this.pinchDxDy = this.imageView.getCamera().getDxDy());
      }
      this.isParent && 1 == e && 2 == i && (this.startPinchZoom = this.dup());
    }
    remove(t) {
      this.touchPointsMap.delete(t),
        this.numTouches() < 2 &&
          this.startPinchZoom &&
          (this.startPinchZoom = void 0);
    }
  }
  class $t {
    constructor(t, e, i, n, s) {
      (this.camera = t),
        (this.root = e),
        (this.canvas = i),
        (this.topText = n),
        (this.bottomText = s),
        (this.visible = !1),
        (this.redrawTimeout = void 0),
        (this.lastRedrawAt = 0),
        (this.redrawRequestedAt = 0),
        (this.highDpiRatio = 1),
        (this.countWheelDeltaMod120IsZero = void 0),
        (this.countDeltaYisNotInteger = void 0),
        (this.isDiscreteDevice = !0),
        (this.mightBeDiscreteDevice = !0),
        (this.lastX = 0),
        (this.lastY = 0),
        (this.touchPointList = new Ft(this, !0)),
        (this.topTextMargin = 20),
        (this.mouseWheel = t => {
          let e = o.cast(t.originalEvent);
          this.updateIsDiscrete(e);
          const i = k.zoomDelta(t, N.zoomStep, this.isDiscreteDevice),
            n = this.canvasXyFromPageXy(t);
          this.camera.stopAllPanAnimations(),
            this.camera.zoomAboutBy(n.canvasX, n.canvasY, i);
          let s = this.getStaticLastPointerEvent();
          s && this.moveHandler(s), t.preventDefault();
        }),
        (this.pointerDown = t => {
          this.checkAddDxDy(t),
            this.touchPointList.addOrUpdate(
              new Rt(t.pointerId, t.pageX, t.pageY)
            ),
            1 == this.touchPointList.numTouches() && this.downHandler(t),
            t.isPrimary && (this.lastPrimaryPointerEvent = t),
            t.stopPropagation();
        }),
        (this.pointerMove = t => {
          this.checkAddDxDy(t),
            this.touchPointList.addOrUpdate(
              new Rt(t.pointerId, t.pageX, t.pageY)
            );
          let e = this.touchPointList.numTouches();
          if (e <= 1)
            this.moveHandler(t),
              t.isPrimary && (this.lastPrimaryPointerEvent = t);
          else if (2 == e) {
            let t = this.touchPointList.startPinchZoom.pinchPageCenter,
              e = this.canvasPointFromPagePoint(t),
              i = this.touchPointList.startPinchZoom.pinchWidth,
              n = this.touchPointList.startPinchZoom.pinchScale,
              o = this.touchPointList.pinchPageCenter,
              s =
                (this.canvasPointFromPagePoint(o),
                (n * this.touchPointList.pinchWidth) / i);
            this.getCamera().zoomAboutTo(e.x, e.y, s),
              this.clearLastPrimaryPointerEvent(),
              (this.grabLayer.lastPinchZoomAt = Date.now());
          }
          t.stopPropagation();
        }),
        (this.pointerUp = t => {
          this.checkAddDxDy(t),
            this.touchPointList.remove(t.pointerId),
            0 == this.touchPointList.numTouches() && this.upHandler(t),
            1 == this.touchPointList.numTouches() &&
              this.clearLastPrimaryPointerEvent(),
            t.stopPropagation();
        }),
        (this.pointerCancel = this.pointerUp),
        (this.pointerLeave = this.pointerUp),
        (this.contextMenu = t => {
          t.preventDefault(), t.stopPropagation();
        }),
        (this.dblClick = t => {
          let e = !0;
          if (this.lastMoveEvent) {
            let t = this.hit(this.lastMoveEvent);
            if (t) {
              let i = t.transformEventWithAncestors(this.lastMoveEvent);
              e = t.dblClick(i);
            }
          }
          e && this.camera.dblClick();
        }),
        (this.draw = () => {
          if (
            ((this.redrawTimeout = void 0),
            (this.lastRedrawAt = Date.now()),
            !this.visible)
          )
            return;
          const t = this.canvas.context();
          t.clearAll(),
            this.root.drawTo(t),
            this.topText &&
              t.drawCenteredText(this.topText, this.topTextMargin),
            this.bottomText &&
              t.drawCenteredText(
                this.bottomText,
                this.canvas.logicalHeight() - 20
              );
        }),
        this.register(),
        (this.grabLayer = new Mt(t)),
        this.grabLayer.setView(this),
        e.setView(this),
        t.register(this),
        (e.transform = t),
        this.canvas.element.setAttribute('touch-action', 'none');
    }
    getCamera() {
      return this.camera;
    }
    isDown() {
      return !!this.downNode;
    }
    getScale() {
      return this.camera.getScale();
    }
    canvasWidth() {
      return this.canvas.width();
    }
    canvasHeight() {
      return this.canvas.height();
    }
    canvasWidthLogical() {
      return this.canvas.logicalWidth();
    }
    canvasHeightLogical() {
      return this.canvas.logicalHeight();
    }
    canvasRect() {
      return new nt(0, 0, this.canvasWidth(), this.canvasHeight());
    }
    canvasRectLogical() {
      return new nt(
        0,
        0,
        this.canvasWidthLogical(),
        this.canvasHeightLogical()
      );
    }
    setIsDark(t) {
      this.canvas.$element.parent().toggleClass(a.dark_checker.name(), t);
    }
    setCanvasPad(t, e, i, n) {
      this.camera.setCanvasPad(t, e, i, n);
    }
    deregister() {
      this.canvas.$element.off('mousewheel'),
        this.canvas.element.removeEventListener(
          'pointerdown',
          this.pointerDown
        ),
        this.canvas.element.removeEventListener(
          'pointermove',
          this.pointerMove
        ),
        this.canvas.element.removeEventListener('pointerup', this.pointerUp),
        this.canvas.element.removeEventListener(
          'pointercancel',
          this.pointerCancel
        ),
        this.canvas.element.removeEventListener(
          'pointerleave',
          this.pointerLeave
        ),
        this.canvas.element.removeEventListener(
          'contextmenu',
          this.contextMenu
        ),
        this.canvas.element.removeEventListener('dblclick', this.dblClick);
    }
    register() {
      this.canvas.$element.mousewheel(this.mouseWheel),
        this.canvas.element.addEventListener('pointerdown', this.pointerDown),
        this.canvas.element.addEventListener('pointermove', this.pointerMove),
        this.canvas.element.addEventListener('pointerup', this.pointerUp),
        this.canvas.element.addEventListener(
          'pointercancel',
          this.pointerCancel
        ),
        this.canvas.element.addEventListener('pointerleave', this.pointerLeave),
        this.canvas.element.addEventListener('contextmenu', this.contextMenu),
        this.canvas.element.addEventListener('dblclick', this.dblClick);
    }
    getStaticLastPointerEvent() {
      if (this.lastPrimaryPointerEvent) {
        let t = $.extend(!0, {}, this.lastPrimaryPointerEvent);
        return N.addMovement(t, 0, 0), t;
      }
    }
    getLastMoveEvent() {
      return this.lastMoveEvent;
    }
    stopPanAnimation() {
      this.grabLayer.stopPanAnimation();
    }
    simulateMoveEvent(t) {
      (this.lastMoveEvent = void 0),
        (this.lastPrimaryPointerEvent = void 0),
        this.checkAddMoveClass(this.hit(t)),
        (this.lastMoveEvent = t),
        (this.lastPrimaryPointerEvent = t.pointerEvent);
    }
    canvasXyFromPageXy(t) {
      const e = this.canvas.$element.offset();
      return { canvasX: t.pageX - e.left, canvasY: t.pageY - e.top };
    }
    canvasPointFromPagePoint(t) {
      const e = this.canvas.$element.offset();
      return new et(t.x - e.left, t.y - e.top);
    }
    sceneMoveEvent(t, e, i) {
      const n = this.canvas.$element.offset();
      return new At(
        t,
        t.pageX - n.left,
        t.pageY - n.top,
        e,
        this.touchPointList.numTouches(),
        i
      );
    }
    updateIsDiscrete(t) {
      let e = t.wheelDelta || t.wheelDeltaY || t.wheelDeltaX,
        i = t.deltaY || t.deltaX || t.deltaZ,
        n = t.deltaMode;
      if (void 0 !== i) {
        let t = !Number.isInteger(i);
        void 0 === this.countDeltaYisNotInteger
          ? (this.countDeltaYisNotInteger = t ? $t.ThreshDeltaIsNotInteger : 0)
          : t
          ? this.countDeltaYisNotInteger++
          : (this.countDeltaYisNotInteger = 0);
      }
      if (void 0 === e) {
        let t = 0 === n;
        this.mightBeDiscreteDevice = this.isDiscreteDevice = !t;
      } else {
        let t = Math.abs(e) % 120 == 0;
        void 0 === this.countWheelDeltaMod120IsZero
          ? (this.countWheelDeltaMod120IsZero = t
              ? $t.ThreshWheelDeltaMod120IsZero
              : 0)
          : t
          ? this.countWheelDeltaMod120IsZero++
          : (this.countWheelDeltaMod120IsZero = 0),
          this.countWheelDeltaMod120IsZero >= $t.ThreshWheelDeltaMod120IsZero
            ? (this.mightBeDiscreteDevice = this.isDiscreteDevice = !0)
            : k.isMac
            ? (this.mightBeDiscreteDevice = this.isDiscreteDevice =
                this.countDeltaYisNotInteger >= $t.ThreshDeltaIsNotInteger)
            : ((this.isDiscreteDevice = !1), (this.mightBeDiscreteDevice = t));
      }
    }
    checkAddDxDy(t) {
      this.lastPrimaryPointerEvent
        ? N.addMovement(
            t,
            t.pageX - this.lastPrimaryPointerEvent.pageX,
            t.pageY - this.lastPrimaryPointerEvent.pageY
          )
        : N.addMovement(t, t.movementX || 0, t.movementY || 0);
    }
    clearLastPrimaryPointerEvent() {
      (this.lastPrimaryPointerEvent = void 0),
        this.grabLayer.clearDeltaMoveEvent();
    }
    hit(t) {
      return (this.hitNode =
        this.root.moveHandlerWithPropagation(t) ||
        this.grabLayer.moveHandler(t));
    }
    checkAddClass(t) {
      t && this.canvas.$element.addClass(t.name());
    }
    checkRemoveClass(t) {
      t && this.canvas.$element.removeClass(t.name());
    }
    removeMoveClass() {
      this.checkRemoveClass(this.moveClass), (this.moveClass = void 0);
    }
    checkAddMoveClass(t) {
      let e;
      t && (e = t.mouseCursor(!1)),
        this.moveClass != e &&
          (this.removeMoveClass(), this.checkAddClass((this.moveClass = e)));
    }
    downHandler(t) {
      if (
        (this.moveHandler(t), (this.downNode = this.hitNode), this.downNode)
      ) {
        this.canvas.element.setPointerCapture(t.pointerId),
          (this.downEvent = this.sceneMoveEvent(t, 1));
        let e = this.sceneMoveEvent(t, 1, this.downEvent);
        (e = this.downNode.transformEventWithAncestors(e)),
          this.downNode.moveHandler(e),
          a.body.$().addClass(a.noselect.name()),
          this.removeMoveClass(),
          (this.downClass = this.downNode.mouseCursor(!0)),
          this.downClass && a.body.$().addClass(this.downClass.name());
      }
    }
    moveHandler(t) {
      if (((this.lastX = t.pageX), (this.lastY = t.pageY), this.downNode)) {
        let e = this.sceneMoveEvent(t, 2, this.downEvent);
        (e = this.downNode.transformEventWithAncestors(e)),
          this.downNode.moveHandler(e);
      } else
        (this.lastMoveEvent = this.sceneMoveEvent(t, 0)),
          this.checkAddMoveClass(this.hit(this.lastMoveEvent));
    }
    upHandler(t) {
      if (this.downNode) {
        this.canvas.element.releasePointerCapture(t.pointerId),
          a.body.$().removeClass(a.noselect.name()),
          this.downClass && a.body.$().removeClass(this.downClass.name()),
          (this.downEvent = void 0),
          (this.downNode = void 0),
          (this.downClass = void 0);
        const e = this.sceneMoveEvent(t, 3);
        this.checkAddMoveClass(this.hit(e));
      } else this.moveHandler(t);
    }
    invalidate(t) {
      this.visible &&
        (t
          ? (clearTimeout(this.redrawTimeout), this.draw())
          : this.redrawTimeout ||
            ((this.redrawRequestedAt = Date.now()),
            (this.redrawTimeout = window.requestAnimationFrame(this.draw))));
    }
    invalidateMouseCursor() {
      if (this.visible)
        if (this.downNode) {
          const t = this.downNode.mouseCursor(!0);
          t != this.downClass &&
            (this.downClass && a.body.$().removeClass(this.downClass.name()),
            (this.downClass = t),
            this.downClass && a.body.$().addClass(this.downClass.name()));
        } else
          this.lastMoveEvent &&
            this.checkAddMoveClass(this.hit(this.lastMoveEvent));
    }
    show() {
      this.visible ||
        ((this.visible = !0), this.invalidate(), this.canvas.$element.show());
    }
    checkSetSize(t, e) {
      this.highDpiRatio = window.devicePixelRatio || 1;
      const i = this.canvas.checkSetSize(t, e, this.highDpiRatio);
      this.camera.setCanvasSize(t, e, i);
    }
    hide() {
      (this.visible = !1), this.canvas.$element.hide();
    }
    directDraw(t, e) {
      t.save(),
        t.context.setTransform(
          this.highDpiRatio,
          0,
          0,
          this.highDpiRatio,
          0,
          0
        ),
        e(t),
        t.restore();
    }
  }
  ($t.ThreshWheelDeltaMod120IsZero = 3),
    ($t.ThreshDeltaIsNotInteger = 3),
    (function (t) {
      (t.BigImageCutoffPoints = 5e3),
        (t.BigImageSizeMegapixels = 2),
        (t.BigImageMaxScaleFactor = 4),
        (t.BigImageScaleTimeoutMillis = 150);
    })(z || (z = {}));
  class Dt extends kt {
    constructor(t, e) {
      super(), (this.imageCanvas = t), (this.handler = e);
    }
    setImageCanvas(t) {
      (this.imageCanvas = t), this.invalidate();
    }
    drawInner(t) {
      this.imageCanvas && t.drawCanvasEx(this.imageCanvas, 0, 0);
    }
  }
  class _t extends kt {
    constructor() {
      super(...arguments),
        (this.progress0to100 = 0),
        (this.errorMessageTr = void 0);
    }
    setProgress(t) {
      (this.errorMessageTr = void 0),
        (this.progress0to100 = t),
        (this.fixedCoordinates = !0),
        this.invalidate();
    }
    setFailedToLoad(t) {
      (this.errorMessageTr = t),
        (this.fixedCoordinates = !0),
        this.invalidate();
    }
    drawProgress(t) {
      const e = t.context.canvas.width,
        i = t.context.canvas.height,
        n = Math.min(125, e / 2),
        o = Math.floor(0.5 * (i - 10)),
        s = Math.floor(0.5 * (e - n));
      this.errorMessageTr
        ? t.drawCenteredText(this.errorMessageTr, i / 2)
        : (t.setLineWidth(2),
          t.setLineCap('round'),
          t.setStrokeStyle('#265a88'),
          t.strokeRect(s, o, n, 10),
          t.setFillStyle('#FFF'),
          t.fillRect(s, o, n, 10),
          t.setFillStyle('#337ab7'),
          t.fillRect(s, o, (n * this.progress0to100 * 0.5) / 100, 10));
    }
  }
  class Bt extends _t {
    constructor(t, e) {
      super(),
        (this.result = t),
        (this.imageCanvas = e),
        (this.showBitmapAndOutlines = !1),
        (this.needsVectorRedraw = !1),
        (this.lastScale = 0),
        (this.scaleTimeout = void 0),
        (this.useBigImage = !1),
        (this.inv = () => {
          this.invalidate();
        });
    }
    setResult(t) {
      (this.result = t),
        (this.useBigImage = this.result.numPoints() > z.BigImageCutoffPoints),
        (this.bigImage = void 0),
        (this.lastScale = 0),
        (this.needsVectorRedraw = !1),
        clearTimeout(this.scaleTimeout),
        (this.scaleTimeout = void 0),
        (this.fixedCoordinates = !1),
        this.invalidate();
    }
    setProgress(t) {
      (this.result = void 0), super.setProgress(t);
    }
    setShowBitmapAndOutlines(t) {
      (this.showBitmapAndOutlines = t), this.invalidate();
    }
    moveHandler(t) {
      !t.down && this.needsVectorRedraw && this.invalidate();
    }
    getBigImage() {
      if (!this.bigImage) {
        let t = this.imageCanvas.width() * this.imageCanvas.height();
        this.bigImageScaleFactor = Math.min(
          Math.sqrt((1024 * z.BigImageSizeMegapixels * 1024) / t),
          z.BigImageMaxScaleFactor
        );
        let e = Math.round(this.bigImageScaleFactor * this.imageCanvas.width()),
          i = Math.round(this.bigImageScaleFactor * this.imageCanvas.height());
        this.bigImage = new st(e, i);
        let n = this.bigImage.context();
        n.context.scale(this.bigImageScaleFactor, this.bigImageScaleFactor),
          this.result.drawTo(n.context);
      }
      return this.bigImage;
    }
    drawInner(t) {
      if (this.result)
        if (this.showBitmapAndOutlines)
          t.drawCanvasEx(this.imageCanvas, 0, 0),
            this.result.drawOutlinesTo(t.context, this.getPropagatedScale());
        else if (this.useBigImage) {
          let e = this.getPropagatedScale(),
            i = e != this.lastScale;
          this.lastScale = e;
          let n = this.getBigImage();
          if (e < this.bigImageScaleFactor || this.view.isDown() || i) {
            this.needsVectorRedraw = e >= this.bigImageScaleFactor;
            let i = this.imageCanvas;
            t.drawCanvasEx3(
              n,
              0,
              0,
              n.width(),
              n.height(),
              0,
              0,
              i.width(),
              i.height()
            );
          } else (this.needsVectorRedraw = !1), this.result.drawTo(t.context);
          clearTimeout(this.scaleTimeout),
            (this.scaleTimeout = void 0),
            !this.view.isDown() &&
              i &&
              this.needsVectorRedraw &&
              (this.scaleTimeout = setTimeout(
                this.inv,
                z.BigImageScaleTimeoutMillis
              ));
        } else this.result.drawTo(t.context);
      else this.drawProgress(t);
    }
  }
  class Lt extends _t {
    constructor() {
      super(), (this.finder = new Ut()), this.add(this.finder);
    }
    setSegmentation(t) {
      (this.segmentation = t), (this.fixedCoordinates = !1), this.invalidate();
    }
    setProgress(t) {
      (this.segmentation = void 0), super.setProgress(t);
    }
    drawInner(t) {
      this.segmentation
        ? t.drawImage(this.segmentation.element, 0, 0)
        : this.drawProgress(t);
    }
  }
  class Ut extends It {
    constructor() {
      super(...arguments),
        (this.offset0 = new et(5, 5)),
        (this.offset1 = new et(20, 20)),
        (this.len0 = this.offset0.length()),
        (this.len1 = this.offset1.length());
    }
    drawPinchPoint(t, e, i) {
      t.beginPath(),
        t.moveTo(e.x - this.offset0.x / i, e.y - this.offset0.y / i),
        t.lineTo(e.x - this.offset1.x / i, e.y - this.offset1.y / i),
        t.setLineWidth(4 / i),
        t.setStrokeStyle('#000'),
        t.stroke(),
        t.setLineWidth(2 / i);
      const n = t.createRadialGradient(
        e.x,
        e.y,
        this.len0 / i,
        e.x,
        e.y,
        this.len1 / i
      );
      n.addColorStop(0, '#F00'),
        n.addColorStop(0.2, '#FF0'),
        t.setStrokeStyle(n),
        t.stroke();
    }
    drawInner(t) {
      const e = this.getPropagatedScale();
      for (var i of (t.setLineCap('round'), L.pinchPoints))
        this.drawPinchPoint(t, i, e);
    }
  }
  class Nt extends kt {
    constructor(t, e, i) {
      super(t, e, i),
        (this.bitmap = t),
        (this.vector = e),
        (this.segmentation = i),
        (this.showBitmap = () => {
          (this.view.topText = n.s('Original Image')),
            this.setVisible(!1, !0, !1),
            this.vector.setShowBitmapAndOutlines(!0);
        }),
        (this.showVector = () => {
          (this.view.topText = n.s('Vectorized Result')),
            this.setVisible(!1, !0, !1),
            this.vector.setShowBitmapAndOutlines(!1);
        }),
        (this.showSegmentation = () => {
          (this.view.topText = n.s('Edit Segmentation')),
            this.setVisible(!1, !1, !0);
        });
    }
    setVisible(t, e, i) {
      (this.bitmap.visible = t),
        (this.vector.visible = e),
        (this.segmentation.visible = i),
        this.invalidate();
    }
  }
  class zt {
    constructor(t, e, i, n) {
      (this.r255 = t),
        (this.g255 = e),
        (this.b255 = i),
        (this.a255 = n),
        (this.r255 = 255 & t),
        (this.g255 = 255 & e),
        (this.b255 = 255 & i),
        (this.a255 = 255 & n);
    }
    static fromCanvasContext(t, e, i) {
      return zt.fromImageData(t.getImageData(0 | e, 0 | i, 1, 1), 0, 0);
    }
    static fromImageData(t, e, i) {
      const n = 4 * ((0 | e) + (0 | i) * t.width);
      return new zt(t.data[n], t.data[n + 1], t.data[n + 2], t.data[n + 3]);
    }
    static fromHex(t) {
      const e = parseInt(t, 16);
      return new zt(e >> 16, e >> 8, e, 255);
    }
    static fromCss(t) {
      return zt.fromHex(t.substr(1));
    }
    static fromRgb(t) {
      return new zt(t >> 16, t >> 8, t, 255);
    }
    equals(t) {
      return (
        this.r255 == t.r255 &&
        this.g255 == t.g255 &&
        this.b255 == t.b255 &&
        this.a255 == t.a255
      );
    }
    distanceSqr(t) {
      const e = this.r255 - t.r255,
        i = this.g255 - t.g255,
        n = this.b255 - t.b255;
      return e * e + i * i + n * n;
    }
    distance(t) {
      return Math.sqrt(this.distanceSqr(t));
    }
    isAtImageData(t, e, i) {
      return this.isAtImageDataK(t, (0 | e) + (0 | i) * t.width);
    }
    isAtImageDataK(t, e) {
      return (
        (e *= 4),
        t.data[e] == this.r255 &&
          t.data[e + 1] == this.g255 &&
          t.data[e + 2] == this.b255 &&
          t.data[e + 3] == this.a255
      );
    }
    writeToImageData(t, e, i) {
      this.writeToImageDataK(t, (0 | e) + (0 | i) * t.width);
    }
    writeToImageDataK(t, e) {
      (e *= 4),
        (t.data[e] = this.r255),
        (t.data[e + 1] = this.g255),
        (t.data[e + 2] = this.b255),
        (t.data[e + 3] = this.a255);
    }
    toRgb() {
      return (this.r255 << 16) | (this.g255 << 8) | this.b255;
    }
    toArgb() {
      return (
        (this.a255 << 24) | (this.r255 << 16) | (this.g255 << 8) | this.b255
      );
    }
    toHex() {
      return f.hex(this.toRgb(), 6);
    }
    toCss() {
      return '#' + this.toHex();
    }
    toCssRgba() {
      return (
        'rgba(' +
        this.r255 +
        ',' +
        this.g255 +
        ',' +
        this.b255 +
        ',' +
        this.a255 / 255 +
        ')'
      );
    }
  }
  (zt.black = new zt(0, 0, 0, 255)),
    (zt.white = new zt(255, 255, 255, 255)),
    (function (t) {
      function e(t, e) {
        const i = (function (t) {
            switch (t) {
              default:
              case 1:
                return n.s('Photo');
              case 2:
                return n.s('Anti-aliased artwork');
              case 3:
                return n.s('Artwork');
            }
          })(t.getImageTypeE()),
          o = (function (t) {
            switch (t) {
              default:
              case 3:
                return n.s('High');
              case 2:
                return n.s('Medium');
              case 1:
                return n.s('Low');
            }
          })(t.getImageComplexityE());
        return t.getSegmentationEdits()
          ? n.s('{0}, {1}, {2}, Edited', i, o, e)
          : n.s('{0}, {1}, {2}', i, o, e);
      }
      (t.localizedConfigurationString = function (t) {
        return e(
          t,
          t.getUsePalette() ? n.s('Custom colors') : n.s('Unlimited colors')
        );
      }),
        (t.renderConfiguration = function (t, i, o, s) {
          let r = `<li${
            i ? " class='active'" : ''
          }><a class="${s.name()}" href='#' data-index='${o}'>`;
          return (
            (r += e(
              t,
              t.getUsePalette()
                ? t.getPalette().getSwatchesHtml(a.App.Toolbar.revert_swatch)
                : n.s('Unlimited colors')
            )),
            (r += '</a></li>\n'),
            r
          );
        }),
        (t.renderEmptyConfiguration = function () {
          return "<li class='disabled'><a href='#'>No vectorization results available yet. </a></li>";
        });
    })(W || (W = {})),
    (function (t) {
      var e,
        i,
        s,
        h,
        l,
        c,
        u,
        d,
        p,
        m,
        g,
        w,
        b = !1;
      function v(t) {
        if (
          (11 == (e = t) && (b = !0),
          a.App.Sidebar.content_pane.$().hide(),
          (function (t) {
            switch (e) {
              case 2:
                return a.App.Sidebar.Progress.Pane;
              case 3:
                return a.App.Sidebar.ImageType.Pane;
              case 4:
                return a.App.Sidebar.ImageComplexityPhoto.Pane;
              case 5:
                return a.App.Sidebar.ImageComplexityLogoAa.Pane;
              case 6:
                return a.App.Sidebar.ImageComplexityLogo.Pane;
              case 7:
                return a.App.Sidebar.PaletteYesNo.Pane;
              case 8:
                return a.App.Sidebar.PaletteContents.Pane;
              case 9:
                return a.App.Sidebar.ReviewResult.Pane;
              case 10:
                return a.App.Sidebar.SegEdit.Pane;
              case 11:
                return a.App.Sidebar.ClassificationFailed.Pane;
              case 12:
                return a.App.Sidebar.VectorizationFailed.Pane;
              case 13:
                return a.App.Sidebar.FetchingSegmentationFailed.Pane;
            }
            return a.App.Sidebar.StateMachineBug.Pane;
          })()
            .$()
            .show(),
          p)
        )
          switch (e) {
            default:
              p.handler = void 0;
              break;
            case 3:
            case 4:
            case 5:
            case 6:
              (p.handler = I), I.drawLoupeInternal();
              break;
            case 8:
              p.handler = M;
          }
        switch (e) {
          default:
            a.App.Toolbar.ResultReview.$().hide(),
              a.App.Toolbar.SegEditor.$().hide();
            break;
          case 10:
            F.initialize(),
              a.App.Toolbar.ResultReview.$().hide(),
              a.App.Toolbar.SegEditor.$().show();
            break;
          case 9:
            g.showVector(),
              a.App.Toolbar.ResultReview.$().show(),
              a.App.Toolbar.SegEditor.$().hide();
        }
        k();
      }
      (t.segmentationNode = function () {
        return g.segmentation;
      }),
        (t.segmentationSetDefaultColor = function (t) {
          F.setDefaultColor(t);
        }),
        (t.segmentationSetEnabled = function (t, e, i) {
          F.segmentationSetEnabled(t, e, i);
        }),
        (t.segmentationDontEditTooMuch = function () {
          F.segmentationDontEditTooMuch();
        }),
        (t.setAppState = v),
        (t.setErrorMessage = function (t) {
          a.App.Sidebar.job_failed_message.$().html(t);
        });
      var S = !1;
      function y() {
        S &&
          a.App.Sidebar.Progress.Vectorize.Pane.$().toggle(
            R.fullyAutomatic() || l == a.App.Sidebar.Progress.Vectorize
          );
      }
      function C() {
        return s && !s.failed();
      }
      function x(t) {
        R.splitView(t), k();
      }
      function P(t, e) {
        a.App.Toolbar.ViewBitmap.$().toggleClass(r.active.name(), t),
          a.App.Toolbar.SegEditViewBitmap.$().toggleClass(r.active.name(), t),
          a.App.Toolbar.SegEditViewVector.$().toggleClass(r.active.name(), e);
      }
      function A() {
        g.showBitmap(), P(!0, !1);
      }
      function T() {
        g.showVector(), P(!1, !0);
      }
      function E() {
        g.showSegmentation(), P(!1, !1);
      }
      function k() {
        let t = $('body');
        t.removeClass(a.App.Sidebar.bottom_mode.name());
        let n = a.App.flex_horizontal_section.$().outerWidth(),
          o = a.App.Sidebar.OuterPane.$().outerWidth() > 0.5 * n;
        if ((t.toggleClass(a.App.Sidebar.bottom_mode.name(), o), i)) {
          const n = a.App.ImageView.CanvasContainer.$().outerWidth(),
            o = a.App.ImageView.CanvasContainer.$().outerHeight();
          let s = (function (t, e) {
            function n(t) {
              return Math.min(8e3, Math.max(100, 0 | t));
            }
            let o = n(e - 88),
              s = n(t),
              r = s / 2 / o,
              a = s / (o / 2),
              h = n(i.height()),
              l = n(i.width()) / h;
            return Math.abs(l - r) <= Math.abs(l - a);
          })(n, o);
          switch (
            (t.toggleClass(a.App.ImageView.vertical_mode.name(), !s), e)
          ) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 11:
            case 12:
            default:
              m.show(), w.hide(), m.checkSetSize(n, o);
              break;
            case 9:
              R.splitView() && $(window).innerWidth() > 768
                ? (a.App.Toolbar.ViewSplit.$().addClass('active'),
                  a.App.Toolbar.ViewSingle.$().removeClass('active'),
                  m.show(),
                  w.show(),
                  s
                    ? (m.checkSetSize(Math.floor(n / 2), o),
                      w.checkSetSize(Math.ceil(n / 2), o))
                    : (m.checkSetSize(n, Math.floor(o / 2)),
                      w.checkSetSize(n, Math.ceil(o / 2))))
                : (a.App.Toolbar.ViewSplit.$().removeClass('active'),
                  a.App.Toolbar.ViewSingle.$().addClass('active'),
                  m.hide(),
                  w.show(),
                  w.checkSetSize(n, o));
              break;
            case 10:
              m.hide(), w.show(), w.checkSetSize(n, o);
          }
        }
      }
      let I, M, F;
      function D(t) {
        if (10 != e || !F.keyDownHandler(t))
          switch (t.keyCode) {
            case 49:
              x(!1);
              break;
            case 50:
              x(!0);
              break;
            case 66:
              A();
              break;
            case 86:
              T();
              break;
            case 36:
              d.zoomToFit();
              break;
            case 35:
              d.zoom1To1();
              break;
            case 33:
              d.zoomBy(1.2);
              break;
            case 34:
              d.zoomBy(1 / 1.2);
          }
      }
      function _(t) {
        if (10 != e || !F.keyUpHandler(t))
          switch (t.keyCode) {
            case 66:
            case 86:
              10 == e ? E() : T();
          }
      }
      (t.showProgress = function (t, i) {
        2 != e &&
          ((S = 0 == t),
          a.App.Sidebar.Progress.progress.$().toggle(S),
          a.App.Sidebar.Progress.FullyAutomaticContainer.$().toggle(S),
          y()),
          b && a.App.Sidebar.Progress.Upload.Pane.$().hide(),
          v(2),
          (l = (function (t) {
            switch (t) {
              case 0:
                return a.App.Sidebar.Progress.Upload;
              case 1:
                return a.App.Sidebar.Progress.Classify;
              default:
                return a.App.Sidebar.Progress.Vectorize;
            }
          })(t)),
          a.App.Sidebar.Progress.bar.$().removeClass('active'),
          l.Bar.$().addClass('active'),
          l.Pane.$().show(),
          f.progressBar(l, i);
      }),
        (t.checkShowVectorizeProgressBar = y),
        (t.setClassification = function (t) {
          const e = a.App.Sidebar.BigButton.is_recommended.name();
          a.App.Sidebar.BigButton.pane.$().removeClass(e),
            (s = t),
            C() && s.getConfiguration().addClass(e);
        }),
        (t.setConfiguration = function (t) {
          h = t;
          const e = 'active';
          if ((a.App.Sidebar.BigButton.pane.$().removeClass(e), t)) {
            t.addClass(e);
            const i = 'active';
            if (C()) {
              const t = s.getConfiguration();
              a.App.Sidebar.ReviewResult.ScanOrDrawingContainer.$().toggle(
                1 == t.getImageTypeE() && 1 == h.getImageTypeE()
              ),
                a.App.Sidebar.ReviewResult.SpotsBetweenEdgesContainer.$().toggle(
                  2 == t.getImageTypeE() && 3 == h.getImageTypeE()
                ),
                a.App.Sidebar.ReviewResult.JaggedEdgesContainer.$().toggle(
                  3 == t.getImageTypeE() && 2 == h.getImageTypeE()
                );
            }
            switch (
              (a.App.Sidebar.ReviewResult.detail_button.$().removeClass(i),
              t.getImageComplexityE())
            ) {
              case 3:
                a.App.Sidebar.ReviewResult.DetailHigh.$().addClass(i);
                break;
              case 2:
                a.App.Sidebar.ReviewResult.DetailMedium.$().addClass(i);
                break;
              default:
                a.App.Sidebar.ReviewResult.DetailLow.$().addClass(i);
            }
            t.getUsePalette()
              ? (a.App.Sidebar.ReviewResult.UnlimitedColors.$().removeClass(i),
                a.App.Sidebar.ReviewResult.CustomColors.$().addClass(i),
                a.App.Sidebar.ReviewResult.ChangeCustomPaletteContainer.$().show())
              : (a.App.Sidebar.ReviewResult.UnlimitedColors.$().addClass(i),
                a.App.Sidebar.ReviewResult.CustomColors.$().removeClass(i),
                a.App.Sidebar.ReviewResult.ChangeCustomPaletteContainer.$().hide()),
              a.App.Sidebar.ReviewResult.CustomPaletteContainer.$().html(
                t
                  .getPalette()
                  .getSwatchesHtml(
                    a.App.Sidebar.ReviewResult.custom_palette_swatch
                  )
              ),
              M.updatePalette(),
              w && (w.bottomText = W.localizedConfigurationString(t));
          }
        }),
        (t.setBackAndNext = function (t, e) {
          a.App.Sidebar.BackButton.$().toggleClass('disabled', !t),
            a.App.Sidebar.NextButton.$().toggleClass('disabled', !e);
        }),
        (t.setConfigurations = function (t) {
          var e = '';
          const i = t.getConfiguration();
          var n = 0;
          const o = t.getConfigurationsWithResult();
          for (let t of o)
            e += W.renderConfiguration(
              t,
              i.equals(t),
              n++,
              a.App.Toolbar.revert_link
            );
          const s = t.getSegEditConfiguration();
          s &&
            ((e += "<li class='divider'></li>\n"),
            (e += W.renderConfiguration(
              s,
              i.equals(s),
              -1,
              a.App.Toolbar.revert_link
            ))),
            e || (e = W.renderEmptyConfiguration()),
            a.App.Toolbar.revert_link.$().off('click'),
            a.App.Toolbar.RevertMenu.$().html(e),
            a.App.Toolbar.revert_link.$(!0).click(function (t) {
              const e = 0 | parseInt($(this).data('index'));
              e < 0
                ? U.setConfigurationAndGo(s)
                : e < o.length && U.setConfigurationAndGo(o[e]),
                t.preventDefault();
            });
        }),
        (t.imageUpdated = function (t, o) {
          i = t;
          originImageWidth = i.width();
          originImageHeight = i.height();
          originImageName = o;
          ctx.clearRect(0, 0, originImageWidth, originImageHeight);
          ctx = new C2S(originImageWidth, originImageHeight);
          const s = new st(1, 1),
            r = new st(1, 1);
          (s.element.id = a.App.ImageView.LeftCanvas.name()),
            (r.element.id = a.App.ImageView.RightCanvas.name()),
            a.App.ImageView.CanvasContainer.$().append(s.element, r.element),
            (u = o + ` (${i.width()} x ${i.height()} px)`),
            (d = new Et(i.width(), i.height())),
            (p = new Dt(i, I)),
            (m = new $t(d, p, s, n.s('Original Image'), u)),
            (g = new Nt(new Dt(i), new Bt(c, i), new Lt())),
            (w = new $t(d, g, r, void 0, u)),
            k(),
            $(window).resize(() => {
              k();
            }),
            setTimeout(function () {
              d.zoomToFit();
            }, 0),
            a.App.Sidebar.ImageType.Photo.$().click(function () {
              U.setImageType(1, !1);
            }),
            a.App.Sidebar.ImageType.LogoAA.$().click(function () {
              U.setImageType(2, !1);
            }),
            a.App.Sidebar.ImageType.Logo.$().click(function () {
              U.setImageType(3, !1);
            }),
            a.App.Sidebar.ImageComplexity.high.$().click(function () {
              U.setImageComplexity(3, !1);
            }),
            a.App.Sidebar.ImageComplexity.medium.$().click(function () {
              U.setImageComplexity(2, !1);
            }),
            a.App.Sidebar.ImageComplexity.low.$().click(function () {
              U.setImageComplexity(1, !1);
            }),
            a.App.Sidebar.PaletteYesNo.UnlimitedColors.$().click(function () {
              U.setPaletteYesNo(2);
            }),
            a.App.Sidebar.PaletteYesNo.CustomColors.$().click(function () {
              U.setPaletteYesNo(1);
            }),
            M.initialize(),
            a.App.Sidebar.ReviewResult.ProcessAsLogoAaWithCustomColorsButton.$().click(
              function () {
                U.setImageType(2, !1), U.setPaletteYesNo(1);
              }
            ),
            a.App.Sidebar.ReviewResult.WithBlendingButton.$().click(
              function () {
                U.setImageType(2, !0);
              }
            ),
            a.App.Sidebar.ReviewResult.JaggedEdgesContainer.$().click(
              function () {
                U.setImageType(3, !0);
              }
            ),
            a.App.Sidebar.ReviewResult.DetailHigh.$().click(function () {
              U.setImageComplexity(3, !0);
            }),
            a.App.Sidebar.ReviewResult.DetailMedium.$().click(function () {
              U.setImageComplexity(2, !0);
            }),
            a.App.Sidebar.ReviewResult.DetailLow.$().click(function () {
              U.setImageComplexity(1, !0);
            }),
            a.App.Sidebar.ReviewResult.UnlimitedColors.$().click(function () {
              U.setPaletteYesNo(2);
            }),
            a.App.Sidebar.ReviewResult.custom_colors.$().click(function () {
              U.setPaletteYesNo(1);
            }),
            a.App.Sidebar.ReviewResult.EditResult.$().click(() => {
              E(), U.startSegEditing();
            }),
            a.App.Sidebar.ReviewResult.RemoveBackground.$().click(function () {
              f.modal(a.App.RemoveBackgroundDialog);
            }),
            a.App.Sidebar.ReviewResult.HandPickSettings.$().click(
              U.handPickSettings
            ),
            a.App.Sidebar.VectorizationFailed.HandPickSettings.$().click(
              U.handPickSettings
            ),
            a.App.Sidebar.VectorizationFailed.EditSegmentation.$().click(
              U.startSegEditing
            ),
            a.App.Sidebar.BackButton.$().click(function () {
              U.goBack();
            }),
            a.App.Sidebar.NextButton.$().click(function () {
              U.goNext();
            }),
            a.App.Sidebar.ClassificationFailed.Retry.$().click(
              U.retryClassification
            ),
            a.App.Sidebar.VectorizationFailed.Retry.$().click(
              U.retryVectorization
            ),
            a.App.Sidebar.FetchingSegmentationFailed.Retry.$().click(
              U.startSegEditing
            ),
            new dt(
              a.App.Toolbar.ZoomIn.$(),
              function () {
                d.zoomBy(N.zoomStep);
              },
              50,
              1
            ),
            new dt(
              a.App.Toolbar.ZoomOut.$(),
              function () {
                d.zoomBy(1 / N.zoomStep);
              },
              50,
              1
            ),
            a.App.Toolbar.ZoomToFit.$().click(function () {
              d.zoomToFit();
            }),
            a.App.Toolbar.Zoom1To1.$().click(function () {
              d.zoom1To1();
            }),
            a.App.Toolbar.ViewSingle.$().click(function () {
              x(!1);
            }),
            a.App.Toolbar.ViewSplit.$().click(function () {
              x(!0);
            }),
            f.radioButton(a.App.Toolbar.ViewBitmap, A, T),
            a.App.StickySettings.fully_automatic
              .$()
              .prop('checked', R.fullyAutomatic()),
            a.App.StickySettings.fully_automatic.$().click(function () {
              let t = R.fullyAutomatic(!R.fullyAutomatic());
              a.App.StickySettings.fully_automatic.$().prop('checked', t), y();
            }),
            a.App.StickySettings.pre_crop_enabled_checkbox
              .$()
              .prop('checked', R.preCropEnabled()),
            a.App.StickySettings.pre_crop_enabled_checkbox
              .$()
              .click(function () {
                let t = R.preCropEnabled(!R.preCropEnabled());
                a.App.StickySettings.pre_crop_enabled_checkbox
                  .$()
                  .prop('checked', t);
              }),
            a.App.StickySettings.show.$().click(function () {
              return f.modal(a.App.StickySettings.Lightbox), !1;
            }),
            a.$window.keydown(D),
            a.$window.keyup(_),
            (e = 1),
            $('.navbar').hide(),
            $('.footer').hide(),
            $('.container >').hide(),
            a.App.App.$().show();
        }),
        (t.resultProgress = function (t) {
          g.vector.setProgress(t);
        }),
        (t.resultUpdated = function (t) {
          (c = t), g.vector.setResult(t);
        }),
        (t.resultFailedToLoad = function (t) {
          g.vector.setFailedToLoad(t);
        }),
        (function (t) {
          var n, s;
          function r() {
            var t = (function () {
              switch (e) {
                case 3:
                  return a.App.Sidebar.ImageType.Loupe;
                case 5:
                  return a.App.Sidebar.ImageComplexityLogoAa.Loupe;
                case 6:
                  return a.App.Sidebar.ImageComplexityLogo.Loupe;
              }
            })();
            if (t) {
              const e = t.$()[0],
                r = i.element,
                a = e.getContext('2d');
              o.set(a, 'msImageSmoothingEnabled', !1),
                (a.mozImageSmoothingEnabled = !1),
                (a.webkitImageSmoothingEnabled = !1),
                (a.imageSmoothingEnabled = !1),
                a.save();
              const h = 6,
                l = e.width / (2 * h),
                c = e.height / (2 * h),
                u = r.width,
                d = r.height,
                p = f.clamp(n || u / 2, l, u - l),
                m = f.clamp(s || d / 2, c, d - c);
              a.scale(6, 6),
                a.translate(l, c),
                a.translate(-p, -m),
                a.drawImage(i.element, 0, 0),
                a.restore();
            }
          }
          (t.moveHandler = function (t) {
            return (n = t.x), (s = t.y), requestAnimationFrame(r), !1;
          }),
            (t.drawLoupeInternal = r),
            (t.mouseCursor = function (t) {});
        })(I || (I = {})),
        (function (t) {
          const e = [
              a.App.Sidebar.PaletteContents.P2,
              a.App.Sidebar.PaletteContents.P3,
              a.App.Sidebar.PaletteContents.P4,
              a.App.Sidebar.PaletteContents.P5,
              a.App.Sidebar.PaletteContents.P6,
              a.App.Sidebar.PaletteContents.P7,
              a.App.Sidebar.PaletteContents.P8,
              a.App.Sidebar.PaletteContents.P9,
              a.App.Sidebar.PaletteContents.P10,
              a.App.Sidebar.PaletteContents.P11,
              a.App.Sidebar.PaletteContents.P12
            ],
            n = [
              a.App.Sidebar.PaletteContents.CustomColor0,
              a.App.Sidebar.PaletteContents.CustomColor1,
              a.App.Sidebar.PaletteContents.CustomColor2,
              a.App.Sidebar.PaletteContents.CustomColor3,
              a.App.Sidebar.PaletteContents.CustomColor4,
              a.App.Sidebar.PaletteContents.CustomColor5,
              a.App.Sidebar.PaletteContents.CustomColor6,
              a.App.Sidebar.PaletteContents.CustomColor7,
              a.App.Sidebar.PaletteContents.CustomColor8,
              a.App.Sidebar.PaletteContents.CustomColor9,
              a.App.Sidebar.PaletteContents.CustomColor10,
              a.App.Sidebar.PaletteContents.CustomColor11
            ];
          var o = -1,
            r = void 0;
          function l(t) {
            0 <= o && o < n.length && n[o].$().removeClass('active'),
              (o = t),
              h &&
                0 <= o &&
                o < h.getPalette().getNumColors() &&
                (n[o].$().addClass('active'),
                a.App.Sidebar.PaletteContents.eye_dropper_swatch
                  .$()
                  .css('background', h.getPalette().getCssColor(o)));
          }
          (t.moveHandler = function (t) {
            return (
              o >= 0 &&
                (0 <= t.x &&
                  t.x < i.width() &&
                  0 <= t.y &&
                  t.y < i.height() &&
                  ((r = zt.fromCanvasContext(i.context().context, t.x, t.y)),
                  a.App.Sidebar.PaletteContents.EyeDropper1.$().css(
                    'background',
                    r.toCss()
                  )),
                t.down ? r && U.paletteWithColor(o, r) : 3 == t.type && l(-1)),
              o >= 0
            );
          }),
            (t.mouseCursor = function (t) {
              if (o >= 0) return a.eyedropper_tool;
            }),
            (t.updatePalette = function () {
              if (C() && h) {
                var t = h.getPalette();
                const o = s.getPaletteList(
                    h.getImageTypeE(),
                    h.getImageComplexityE()
                  ),
                  r = o.getBestPalette();
                var i;
                for (
                  a.App.Sidebar.PaletteContents.suggested_palettes_item
                    .$()
                    .removeClass(
                      a.App.Sidebar.PaletteContents.recommended_palette.name() +
                        ' active'
                    ),
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  const n = e[i],
                    s = o.getPalette(i);
                  n
                    .$()
                    .html(
                      o
                        .getPalette(i)
                        .getSwatchesHtml(
                          a.App.Sidebar.PaletteContents.suggested_swatch
                        )
                    ),
                    s.equals(r) &&
                      n
                        .$()
                        .addClass(
                          a.App.Sidebar.PaletteContents.recommended_palette.name()
                        ),
                    s.equals(t) && n.$().addClass('active');
                }
                for (i = 0; i < t.getNumColors(); i++) {
                  const e = n[i];
                  e.$().show();
                  const o =
                    e.css() +
                    ' > ' +
                    a.App.Sidebar.PaletteContents.custom_swatch.css();
                  $(o).css('background-color', t.getCssColor(i));
                }
                for (; i < n.length; i++) {
                  n[i].$().hide();
                }
                a.App.Sidebar.PaletteContents.AddCustomColor.$().toggle(
                  t.getNumColors() < 12
                ),
                  a.App.Sidebar.PaletteContents.CustomColorsList.$().toggleClass(
                    a.App.Sidebar.PaletteContents.can_delete.name(),
                    t.getNumColors() > 2
                  );
              }
            }),
            (t.initialize = function () {
              function t(t) {
                e[t].$().click(function () {
                  l(-1), U.pickSuggestedPalette(t, !1);
                }),
                  e[t].$().dblclick(function () {
                    U.pickSuggestedPalette(t, !0);
                  });
              }
              var s;
              for (s = 0; s < e.length; s++) t(s);
              function r(t) {
                const e = n[t];
                e.$().click(function () {
                  return l(t), !1;
                }),
                  $(
                    e.css() +
                      ' ' +
                      a.App.Sidebar.PaletteContents.delete_color.css()
                  ).click(function () {
                    return (
                      U.paletteWithoutColor(t),
                      t == o ? l(-1) : t < o && l(o - 1),
                      !1
                    );
                  });
              }
              for (s = 0; s < n.length; s++) r(s);
              a.App.Sidebar.PaletteContents.AddCustomColor.$().click(
                function () {
                  const t = zt.fromCanvasContext(i.context().context, 0, 0);
                  U.paletteWithNewColor(t),
                    h && l(h.getPalette().getNumColors() - 1);
                }
              );
            });
        })(M || (M = {})),
        (function (t) {
          var e,
            i,
            n,
            o = !1,
            s = 0,
            r = zt.black,
            h = zt.black,
            l = !1;
          function c(t) {
            r.equals(t) ||
              ((r = t),
              a.App.Toolbar.ColorSwatch0.$().css('background', r.toCss()));
          }
          function u(t) {
            h.equals(t) ||
              ((h = t),
              a.App.Toolbar.ColorSwatch1.$().css('background', h.toCss()));
          }
          function d(t, i) {
            (s = t),
              (e = i),
              a.App.Toolbar.tool_button.$().removeClass('active'),
              i.$().addClass('active'),
              w.invalidateMouseCursor();
          }
          (t.moveHandler = function (t) {
            switch (s) {
              case 1:
                return 1 == t.type && L.zap(t.x, t.y, r), !0;
              case 2:
                return 1 == t.type && L.fill(t.x, t.y, r), !0;
              case 3:
                return t.down && L.pixel(t.x, t.y, r), !0;
              case 4:
                if (L.isInside(t.x, t.y)) {
                  const e = L.color(t.x, t.y);
                  t.down && c(e), u(e);
                }
                return !0;
            }
            return !1;
          }),
            (t.mouseCursor = function (t) {
              switch (s) {
                case 1:
                  return a.App.Toolbar.zap_tool;
                case 2:
                  return a.App.Toolbar.fill_tool;
                case 3:
                  return a.App.Toolbar.pixel_tool;
                case 4:
                  return a.eyedropper_tool;
              }
            }),
            (t.setDefaultColor = function (t) {
              c(t), u(t);
            }),
            (t.segmentationSetEnabled = function (t, e, i) {
              a.App.Toolbar.Undo.$().prop('disabled', !t),
                a.App.Toolbar.Redo.$().prop('disabled', !e),
                a.App.Toolbar.Reset.$().prop('disabled', !i);
            }),
            (t.segmentationDontEditTooMuch = function () {
              l ||
                (a.App.ImageView.DontEditTooMuchNotification.$().show(),
                (l = !0));
            }),
            (t.keyDownHandler = function (t) {
              switch (t.keyCode) {
                case 90:
                  return t.shiftKey ? L.redo() : L.undo(), !0;
                case 89:
                  return L.redo(), !0;
                case 16:
                  return (
                    0 != s && ((i = s), (n = e), d(0, a.App.Toolbar.Pan)), !0
                  );
              }
              return !1;
            }),
            (t.keyUpHandler = function (t) {
              return 16 === t.keyCode && (0 == s && d(i, n), !0);
            }),
            (t.initialize = function () {
              o ||
                ((o = !0),
                a.App.Toolbar.Undo.$().click(L.undo),
                a.App.Toolbar.Redo.$().click(L.redo),
                a.App.Toolbar.Reset.$().click(L.reset),
                f.radioButton(a.App.Toolbar.SegEditViewBitmap, A, E),
                f.radioButton(a.App.Toolbar.SegEditViewVector, T, E),
                a.App.Toolbar.Finder.$().click(function () {
                  L.toggleFinder(),
                    a.App.Toolbar.Finder.$().toggleClass(
                      'active',
                      L.getShowPinchPoints()
                    );
                }),
                a.App.Toolbar.Pan.$().click(function () {
                  d(0, a.App.Toolbar.Pan);
                }),
                a.App.Toolbar.Zap.$().click(function () {
                  d(1, a.App.Toolbar.Zap);
                }),
                a.App.Toolbar.Fill.$().click(function () {
                  d(2, a.App.Toolbar.Fill);
                }),
                a.App.Toolbar.Pixel.$().click(function () {
                  d(3, a.App.Toolbar.Pixel);
                }),
                a.App.Toolbar.ColorPicker.$().click(function () {
                  d(4, a.App.Toolbar.ColorPicker);
                }),
                (g.segmentation.handler = t),
                a.App.Toolbar.Pan.$().click()),
                g.showSegmentation();
            });
        })(F || (F = {}));
    })(O || (O = {})),
    (function (t) {
      let e;
      !(function (t) {
        (t[(t.paypal = 0)] = 'paypal'), (t[(t.fake = 1)] = 'fake');
      })(e || (e = {}));
      function i(t) {
        let e = [];
        function i(t, i) {
          e.push(encodeURIComponent(t) + '=' + encodeURIComponent(i));
        }
        function n(t, e) {
          if ($.isArray(e))
            $.each(e, function (e, i) {
              n(t + '[' + e + ']', i);
            });
          else if ('object' == $.type(e))
            for (let i in e) e.hasOwnProperty(i) && n(t + '.' + i, e[i]);
          else i(t, e);
        }
        i(GlobalsShared.localeQueryParameter, GlobalsShared.locale);
        for (let e in t) t.hasOwnProperty(e) && n(e, t[e]);
        return e.join('&').replace(' ', '+');
      }
      function o(t) {
        return function (e, i, n) {
          t({ error: { message: s(e, i) } });
        };
      }
      function s(t, e) {
        if (0 === t.status)
          return (
            n.s('Failed to connect to the server.') +
            '\n' +
            n.s('Please verify your network connection.') +
            '\n'
          );
        {
          const i = t.responseText.toString().substring(0, 200);
          return t.status < 200 || 299 < t.status
            ? t.statusText + ' [' + t.status + ']\n' + i
            : 'parsererror' === e
            ? n.s('Failed to parse JSON response.') + ' [' + e + ']\n' + i
            : 'timeout' === e
            ? n.s('Request time out.') + ' [' + e + ']'
            : 'abort' === e
            ? n.s('Request aborted by the server.') + ' [' + e + ']'
            : n.s('Unknown error.') + '\n' + i;
        }
      }
      function r() {
        return (
          merchantJs.settings.host +
          '/payments/v0/preapprovals/' +
          merchantJs.settings.wud +
          '/'
        );
      }
      function h(t, e) {
        let n = r() + 'payment_method?' + i(t);
        $.ajax(n, {
          dataType: 'jsonp',
          timeout: 3e4,
          success: function (t) {
            e(t);
          },
          error: o(e)
        });
      }
      let l, c, u, d;
      !(function (t) {
        let n = null,
          s = null;
        function a() {
          n && (s && (clearInterval(s), (s = null)), n.close(), (n = null));
        }
        function l(t, s, h) {
          a(),
            (n = window.open('', '_blank')),
            n.document.write('<h3>Loading...</h3>');
          var l = r() + e[t] + '?' + i(s);
          $.ajax(l, {
            dataType: 'jsonp',
            timeout: 3e4,
            success: function (t) {
              h(t);
            },
            error: o(h)
          });
        }
        t.handler = function (t) {
          return function (e, i, o) {
            l(t, e, function (t) {
              var e, r;
              !t || t.error
                ? (a(), i(t))
                : ((e = t.preapproval.processorToken.url),
                  (r = function () {
                    o(), h(t.preapproval, i);
                  }),
                  n &&
                    ((n.location.href = e),
                    n.focus(),
                    (s = setInterval(function () {
                      n.closed && (clearInterval(s), (s = null), r());
                    }, 100))));
            });
          };
        };
      })(l || (l = {})),
        (function (t) {
          (t.initialize = function () {
            return !0;
          }),
            (t.pay = function (t) {
              t({ error: { message: 'Unavailable' } });
            }),
            (t.radioButton = function () {
              return new Q('__unavailable_payment_processor__');
            }),
            (t.name = function () {
              return 'unavailable';
            });
        })(c || (c = {})),
        (function (t) {
          let e, i, n;
          (t.initialize = function () {
            return (
              'undefined' != typeof Stripe &&
              ((e = Stripe(merchantJs.settings.stripePublishableKey)),
              (i = e.elements({ locale: GlobalsShared.locale })),
              (n = i.create('card', {
                style: { base: { lineHeight: '1.429' } }
              })),
              n.mount(a.merchant.StripeCardElement.css()),
              n.on('change', function (t) {
                t && t.error
                  ? a.merchant.StripeCardErrors.$().text(t.error.message)
                  : a.merchant.StripeCardErrors.$().text('');
              }),
              n.on('focus', function () {
                a.merchant.StripeCardElement.$().addClass('focus');
              }),
              n.on('blur', function () {
                a.merchant.StripeCardElement.$().removeClass('focus');
              }),
              !0)
            );
          }),
            (t.pay = function (t) {
              g(),
                e
                  .createToken(n, {
                    name: a.merchant.StripeNameElement.$().val()
                  })
                  .then(function (e) {
                    if (e.error) t({ error: { message: e.error.message } });
                    else {
                      b();
                      const i = e.token;
                      h(
                        {
                          processor: 'stripe',
                          processorToken: { id: i.id, card: i.card },
                          preapprovalSpec: merchantJs.preapprovalSpec
                        },
                        t
                      );
                    }
                  });
            }),
            (t.radioButton = function () {
              return a.merchant.RadioStripe;
            }),
            (t.name = function () {
              return 'stripe';
            });
        })(u || (u = {})),
        (function (t) {
          let e;
          (t.initialize = function () {
            if ('undefined' != typeof braintree) {
              let t = !0;
              return (
                braintree.dropin
                  .create({
                    authorization: merchantJs.settings.braintreeTokenizationKey,
                    container: a.merchant.BraintreeDropinContainer.css(),
                    locale: GlobalsShared.locale.replace('-', '_'),
                    card: { cardholderName: !0 },
                    dataCollector: { kount: !0 }
                  })
                  .then(function (t) {
                    e = t;
                  })
                  .catch(function (e) {
                    (t = !1),
                      g(),
                      a.merchant.PaymentError.$().text(e.message).show();
                  }),
                t
              );
            }
            return !1;
          }),
            (t.pay = function (t) {
              g(),
                e.requestPaymentMethod(function (i, n) {
                  if (i) e.clearSelectedPaymentMethod(), t({ error: i });
                  else {
                    b();
                    h(
                      {
                        processor: 'braintree',
                        processorToken: n,
                        preapprovalSpec: merchantJs.preapprovalSpec
                      },
                      function (i) {
                        i.error && e.clearSelectedPaymentMethod(), t(i);
                      }
                    );
                  }
                });
            }),
            (t.radioButton = function () {
              return a.merchant.RadioBraintree;
            }),
            (t.name = function () {
              return 'braintree';
            });
        })(d || (d = {}));
      const p = l.handler(e.paypal),
        m = l.handler(e.fake);
      function g() {
        a.merchant.PaymentError.$().hide(),
          a.merchant.StripePaymentError.$().hide(),
          a.merchant.PaymentMethodFormSubmit.$().attr('disabled', 'disabled');
      }
      function f() {
        a.merchant.PaymentMethodFormSubmit.$().removeAttr('disabled');
      }
      function w(t) {
        a.merchant.PaymentError.$()
          .html('<p>' + t)
          .show(),
          f();
      }
      function b() {
        a.merchant.ShowWhenMinibrowsing.$().modal('hide'),
          a.merchant.ShowWhenCreatingPm.$().modal('show');
      }
      function v(t) {
        a.merchant.ShowWhenMinibrowsing.$().modal('hide'),
          a.merchant.ShowWhenCreatingPm.$().modal('hide'),
          null === t
            ? w('Got a null response from the server')
            : t.error
            ? w(t.error.message)
            : (a.merchant.ShowWhenSubmitting.$().modal('show'),
              y({
                streamlexPaymentToken: t.paymentMethod.streamlexPaymentToken,
                defaultPaymentMethod: S
              }));
      }
      let S = 'stripe',
        y = null;
      $(function () {
        'undefined' != typeof merchantJs &&
          (!(function (t) {
            y = t;
            let e = !1,
              i = !1;
            merchantJs.settings.braintreePrimary
              ? merchantJs.settings.canBraintree
                ? (e = !0)
                : merchantJs.settings.canStripe && (i = !0)
              : merchantJs.settings.canStripe
              ? (i = !0)
              : merchantJs.settings.canBraintree && (e = !0);
            const n = e ? d : i ? u : c,
              o = n.initialize(),
              s =
                o &&
                (merchantJs.settings.canBraintree ||
                  merchantJs.settings.canStripe ||
                  merchantJs.settings.canPaypal);
            S = n.name();
            const r = $('input[type=radio][name=paymentMethod]');
            let h = null,
              l = !1;
            r.change(function () {
              var t;
              a.merchant.CreditCardProcessorForm.$().toggle(
                n.radioButton().$().prop('checked')
              ),
                (h = $(this)),
                (l =
                  merchantJs.needZipCode &&
                  ('paypal' == (t = h.data('processor') || h.val()) ||
                    'fake' == t)),
                a.merchant.TaxSection.$().toggle(l);
            }),
              $('#paymentMethod_' + merchantJs.defaultPaymentMethod)
                .prop('checked', !0)
                .change(),
              a.merchant.AcceptTermsWrapper.$().removeClass(
                a.merchant.has_error.name()
              ),
              a.merchant.InitializingIndicator.$().hide(),
              a.merchant.SubmitSection.$().show(),
              a.merchant.PaymentMethodForm.$().submit(function () {
                S = (h && h.val()) || n.name();
                let e = !1;
                if (l) {
                  let t = /^\d{5}$/,
                    i = ('' + a.merchant.TaxPostalCode.$().val()).trim();
                  t.test(i)
                    ? (a.merchant.TaxPostalCodeFormGroup.removeClass(
                        a.merchant.has_error
                      ),
                      a.merchant.TaxLocationPostalCode.$().val(i))
                    : (a.merchant.TaxPostalCodeFormGroup.addClass(
                        a.merchant.has_error
                      ),
                      (e = !0));
                }
                if (
                  (a.merchant.AcceptTerms.$().prop('checked')
                    ? a.merchant.AcceptTermsWrapper.removeClass(
                        a.merchant.has_error
                      )
                    : (a.merchant.AcceptTermsWrapper.addClass(
                        a.merchant.has_error
                      ),
                      (e = !0)),
                  e)
                )
                  return !1;
                switch ((g(), S)) {
                  case 'stripe':
                    u.pay(v);
                    break;
                  case 'braintree':
                    d.pay(v);
                    break;
                  case 'paypal':
                    a.merchant.ShowWhenMinibrowsing.$().modal('show'),
                      p(merchantJs.preapprovalSpec, v, b);
                    break;
                  case 'fake':
                    merchantJs.settings.isTesting &&
                      (a.merchant.ShowWhenMinibrowsing.$().modal('show'),
                      m(merchantJs.preapprovalSpec, v, b));
                    break;
                  default:
                    a.merchant.ShowWhenSubmitting.$().modal('show'),
                      t({ streamlexPaymentToken: S, defaultPaymentMethod: S });
                }
                return !1;
              }),
              s
                ? f()
                : (g(),
                  o || a.merchant.FailedToLoadPaymentBackendJs.$().show());
          })(function (t) {
            a.merchant.StreamlexPaymentToken.$().val(t.streamlexPaymentToken),
              a.merchant.DefaultPaymentMethod.$().val(t.defaultPaymentMethod),
              a.merchant.PaymentForm.$().submit();
          }),
          $(window).on('load', function () {
            new Image().src = 'https://www.paypal.com/home';
          }));
      });
    })(H || (H = {})),
    (function (t) {
      function e() {
        const t = merchantJs.preapprovalSpec.currency,
          e = f.clamp(
            f.parseIntWithAlt(
              a.ProjectMerchant.NumLicenses.$().val(),
              10,
              z.MinNumLicensesInPurchase
            ),
            z.MinNumLicensesInPurchase,
            z.MaxNumLicensesInPurchase
          ),
          i = e * productPurchaseJs.centsPerLicense,
          o = i - productPurchaseJs.vmdeCreditCents,
          s = n.currencyAmount(t, o);
        (merchantJs.preapprovalSpec.cents = o),
          a.ProjectMerchant.NumLicenses.$().val('' + e),
          a.ProjectMerchant.VmdeTotal.$().html(n.currencyAmount(t, i)),
          a.ProjectMerchant.Total.$().html(s),
          a.merchant.Cents.$().val('' + o),
          merchantJs.maybeCollectSalesTax
            ? a.merchant.PaymentMethodFormSubmit.$().html(
                n.s(
                  'Buy {0} {0,plural,one{license}other{licenses}} for {1} + tax<sup>*</sup> &raquo;',
                  e,
                  s
                )
              )
            : a.merchant.PaymentMethodFormSubmit.$().html(
                n.s(
                  'Buy {0} {0,plural,one{license}other{licenses}} for {1} &raquo;',
                  e,
                  s
                )
              );
      }
      $(document).ready(function () {
        a.ProjectMerchant.NumLicenses.exists() &&
          'undefined' != typeof productPurchaseJs &&
          'undefined' != typeof merchantJs &&
          (a.ProjectMerchant.NumLicenses.$().on('input', e), e());
      });
    })(V || (V = {})),
    (function (t) {
      let e = !1,
        i = [];
      function n() {
        if (0 == i.length) (e = !1), a.$window.off('.SvgAnimation');
        else {
          const t = $(document).scrollTop(),
            e = a.$window.height(),
            n = t + e,
            o = t + 0.5 * e;
          let r = [];
          for (let t of i) {
            const e = t.Id.$().offset().top,
              i = e + t.Id.$().height();
            (o > e || n > i) && r.push(t);
          }
          for (let t of r) i.splice(i.indexOf(t), 1), s(t);
        }
      }
      t.register = function (t) {
        t.Id.$().length > 0 &&
          (e ||
            ((e = !0),
            a.$window.on('resize.SvgAnimation scroll.SvgAnimation', n)),
          i.push(t),
          n());
      };
      const o = 1.5;
      function s(t) {
        let e = new TimelineLite(),
          i = +t.Id.$().data('zoom-to-x-min') || 0,
          n = +t.Id.$().data('zoom-to-x-max') || 0,
          a = +t.Id.$().data('zoom-to-y-min') || 0,
          l = +t.Id.$().data('zoom-to-y-max') || 0,
          c = f.randomInt2(i, n),
          u = f.randomInt2(a, l),
          d = +t.Id.$().data('zoom-to-scale') || 1;
        e
          .delay(1)
          .to(t.transformable.$(), o, { svgOrigin: c + ' ' + u, scale: d })
          .to(t.Outlines.$(), o, { attr: { x: '0%' } })
          .to(t.Shapes.$(), o, { attr: { x: '0%' } }, '+=0.25')
          .to(t.Outlines.$(), 0, { attr: { x: '-100%' } })
          .to(t.Shapes.$(), 0.75, { attr: { x: '50%' } }, '+=0.25')
          .to(t.Line.$(), 0, {
            display: 'inline',
            attr: { x1: '50%', x2: '50%' }
          })
          .to(t.Labels.$(), 0, { display: 'block' })
          .eventCallback('onComplete', h, [t, !0]),
          (function (t, e) {
            t.Id.$()
              .off('click')
              .click(function () {
                h(t, !1),
                  r(t, 0.5),
                  TweenLite.to(t.Shapes.$(), 0, { attr: { x: '100%' } }),
                  e.seek(0),
                  e.kill(),
                  s(t);
              });
          })(t, e);
      }
      function r(t, e) {
        let i = (100 * e).toFixed(2) + '%';
        TweenLite.to(t.Shapes.$(), 0, { attr: { x: i } }),
          TweenLite.to(t.Line.$(), 0, { attr: { x1: i, x2: i } });
      }
      function h(t, e) {
        e
          ? t.Id.$()
              .off('mousemove mouseleave')
              .mousemove(function (e) {
                let i = (e.pageX - t.Id.$().offset().left) / t.Id.$().width();
                r(t, i);
              })
              .mouseleave(function () {
                r(t, 0.5);
              })
          : t.Id.$().off('mousemove mouseleave');
      }
    })(X || (X = {})),
    (function (t) {
      const e = a.Signon.Dialog.anscestorOf(new Z('modal-header')),
        i = 'message.signup',
        n = [];
      let o = null;
      function s(t) {
        const e = t.originalEvent,
          i = (function (t) {
            for (let e of n) if (e.contentWindow == t) return e;
            return null;
          })(e.source);
        if (i) {
          let t = parseInt(e.data);
          t > 10 && (i.height = t + 'px'),
            i.hasLoaded || ((i.hasLoaded = !0), l());
        }
      }
      function r() {
        h($(this));
      }
      function h(t) {
        const e = t.data('url');
        if (null == o || o.src != e) {
          (o =
            (function (t) {
              for (let e of n) if (e.src == t) return e;
              return null;
            })(e) ||
            (function (t) {
              let e = document.createElement('iframe');
              return (
                e.setAttribute('seamless', 'seamless'),
                (e.frameBorder = '0'),
                (e.width = '100%'),
                (e.height = '650px'),
                (e.style.backgroundColor = '#fff'),
                (e.hasLoaded = !1),
                (e.onload = function (t) {
                  (e.hasLoaded = !0), l();
                }),
                (e.src = t),
                n.push(e),
                a.Signon.IframeContainer.$().prepend(e),
                e
              );
            })(e)),
            (o.style.display = 'block');
          for (let t of n) t != o && (t.style.display = 'none');
        }
        l();
      }
      function l() {
        a.Signon.LoadingIndicator.$().toggle(!(o && o.hasLoaded));
      }
      function c() {
        const t = $(this);
        h(t), a.$window.on(i, s);
        const n = t.data('header');
        return (
          n
            ? (a.Signon.Header.$().text(n).show(),
              e.$().css('border-bottom', ''))
            : (a.Signon.Header.$().hide(), e.$().css('border-bottom', 'none')),
          a.Signon.Dialog.$().modal(),
          !1
        );
      }
      t.checkInit = function () {
        a.Signon.Dialog.$().length > 0 &&
          a.Signon.trigger.$().length > 0 &&
          (a.Signon.Dialog.$().on('hide.bs.modal', function () {
            a.$window.off(i);
          }),
          a.Signon.trigger.elements().forEach(t => {
            t.addEventListener('touchstart', r, { passive: !0 }),
              t.addEventListener('mouseover', r, { passive: !0 });
          }),
          a.Signon.trigger.$().click(c),
          a.Signon.preload.$().each(r));
      };
    })(Y || (Y = {}));
  for (let t of __jqdeferred) $(t);
  (__jqdeferred.length = 0),
    (function (t) {
      let e = null,
        i = !1;
      function s() {
        return $(window).off('beforeunload'), location.reload(), !1;
      }
      function r(e, o) {
        if (!i || t.hasRun) return;
        let s = e.type.toLowerCase().split(';')[0];
        f.spinner(!0),
          F.loadImageShrinkAndThumbnail(
            e,
            t => {
              f.gaTrack(
                'image',
                'loadFailed',
                'Type: ' +
                  s +
                  ', Ext: ' +
                  f.getExtensionWithDot(e.name).toLowerCase()
              ),
                f.fatalErrorStr(
                  n.s(
                    'Failed to read image file with name: "{0}", and type: "{1}".',
                    e.name,
                    e.type
                  )
                );
            },
            (e, i, n) => {
              f.gaTrack('image', 'uploaded', s),
                M.createUserImageSpec(
                  e,
                  'image/gif' == s,
                  i,
                  n,
                  f.fatalError,
                  e => {
                    f.spinner(!1), (t.hasRun = !0), U.create(i, n, e, o);
                  }
                );
            },
            !0
          );
      }
      function h(e, n, s) {
        if (!i || t.hasRun) return;
        f.gaTrack('image', 'fromUrl', e), f.progress(!0);
        let a = null;
        T.download({
          url: e,
          displayUrl: s,
          progress: f.progressUpdate,
          error: f.fatalErrorStr,
          success: t => {
            n && o.set(t, 'name', n), (a = t), f.progress(!1), r(a, true);
          }
        });
      }
      function l(e, n) {
        i &&
          !t.hasRun &&
          (f.gaTrack('image', 'resumed'),
          f.progress(!0),
          M.readUserImageSpec(e, n, f.fatalError, e => {
            T.download({
              url: e.image.url,
              progress: f.progressUpdate,
              error: f.fatalErrorStr,
              success: i => {
                let n = f.blobToFile(i, e.originalFilename);
                F.loadCheckRotateFlattenImage(n, f.fatalError, i => {
                  f.progress(!1), (t.hasRun = !0), U.resume(i, e);
                });
              }
            });
          }));
      }
      (t.hasRun = !1),
        (t.resumeUserImage = l),
        $(document).ready(function () {
          a.jsNotInitializedYet.removeClass(a.jsNotInitializedYet),
            (i = (function () {
              if (null == e) {
                if (((e = x.list()), e.length > 0)) {
                  let t =
                    '<h1>' +
                    n.s('Unsupported Browser') +
                    '</h1><p>' +
                    n.s(
                      'Terribly sorry, but your browser appears to be missing key feature(s) required to use this website:'
                    ) +
                    '</p><ul>';
                  for (let i = 0; i < e.length; i++)
                    t += '<li>' + e[i] + '</li>';
                  (t += '</ul>'),
                    (t +=
                      '<div>' +
                      n.s(
                        'Please try the latest version of one of these browsers instead: <b>{0}, {1}, {2}</b>.',
                        '<a href="' + z.BrowserChromeUrl + '">Chrome</a>',
                        '<a href="' + z.BrowserFirefoxUrl + '">Firefox</a>',
                        '<a href="' +
                          z.BrowserMicrosoftEdgeUrl +
                          '">Microsoft Edge</a>'
                      ) +
                      '</div>'),
                    a.App.ModernizrAlert.$().html(t).slideDown(500);
                }
                e.length > 0 &&
                  (a.body.$().addClass(a.cannot_run_app.name()),
                  a.App.starter
                    .$()
                    .attr('disabled', 'disabled')
                    .addClass('disabled'),
                  a.App.starter
                    .anscestorOf(new j('button'))
                    .$()
                    .attr('disabled', 'disabled')
                    .addClass('disabled'));
              } else
                e.length > 0 &&
                  (a.htmlBody.$().scrollTop(0), f.blink(a.App.ModernizrAlert));
              return 0 == e.length && a.App.App.$().length > 0;
            })()),
            i &&
              (R.initialize(),
              a.App.cancel_upload.$().click(s),
              b.initialize({
                monitor_file_input: a.FileInput.Field,
                monitor_paste: a.FileInput.PasteTarget,
                monitor_drag: a.body,
                hover_class: a.drop_ready,
                error: t => {
                  alert(t);
                },
                drop: t => {
                  r(t[0], !0);
                },
                pastedUrl: function (t) {
                  h(P.fetchUrl(t), void 0, t);
                },
                dropOnce: !0
              }),
              B.initialize(),
              void 0 !== window.ResumeImage &&
                l(window.ResumeImage.id, window.ResumeImage.secret),
              C.initialize(a.FileInput.UploadFromWeb.show_dialog, function (t) {
                h(P.fetchUrl(t), void 0, t);
              }),
              a.App.resume_link.$().click(function (t) {
                if (0 == t.button) {
                  let t = $(this);
                  return l(t.data('id'), t.data('secret')), !1;
                }
                return !0;
              }),
              a.App.new_from_url_link.$().click(function (t) {
                if (0 == t.button) {
                  let t = $(this);
                  return h(t.data('url'), t.data('filename')), !1;
                }
                return !0;
              }),
              a.FileInput.click_to_upload.$().click(function () {
                let t = a.FileInput.Field.el();
                (t.value = null), t.click();
              })),
            w.attachDecorated(),
            X.register(a.Hurricane),
            Y.checkInit();
        });
    })(G || (G = {}));
})('undefined' == typeof MainExport ? (MainExport = {}) : MainExport);
