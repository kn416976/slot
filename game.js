var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
    var b = function() {};
    b.prototype = a;
    return new b
};
$jscomp.underscoreProtoCanBeSet = function() {
    var a = {
            a: !0
        },
        b = {};
    try {
        return b.__proto__ = a, b.a
    } catch (d) {}
    return !1
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
    return a
} : null;
$jscomp.inherits = function(a, b) {
    a.prototype = $jscomp.objectCreate(b.prototype);
    a.prototype.constructor = a;
    if ($jscomp.setPrototypeOf) {
        var d = $jscomp.setPrototypeOf;
        d(a, b)
    } else
        for (d in b)
            if ("prototype" != d)
                if (Object.defineProperties) {
                    var c = Object.getOwnPropertyDescriptor(b, d);
                    c && Object.defineProperty(a, d, c)
                } else a[d] = b[d];
    a.superClass_ = b.prototype
};
var game_music, _audio_mute = !1;


var Boot = function() {
    return Phaser.Scene.call(this, "boot") || this
};
$jscomp.inherits(Boot, Phaser.Scene);
Boot.prototype.preload = function() {
    this.load.image("bg_menu", "images/bg_menu.png");
    this.load.spritesheet("game_title2", "images/game_title2.png", {
        frameWidth: 526,
        frameHeight: 341
    });
    this.load.image("tilebg", "images/tilebg.png");
    this.load.image("btn_start", "images/btn_start.png")
};
Boot.prototype.create = function() {
    var a = localStorage.getItem("rf_lucky_slot");
    null !== a && (game_config.cur_cash = a);
    this.scale.stopListeners();
    this.scene.start("load")
};
var Load = function() {
    return Phaser.Scene.call(this, "load") || this
};
$jscomp.inherits(Load, Phaser.Scene);
Load.prototype.preload = function() {
    var a = this;
    this.add.tileSprite(0, 0, config.width, config.height, "tilebg").setOrigin(0, 0);
    this.add.sprite(config.width / 2, config.height / 2, "bg_menu");
    this.anims.create({
        key: "title",
        frames: this.anims.generateFrameNumbers("game_title2"),
        frameRate: 5,
        repeat: -1
    });
    this.add.sprite(800, 215, "game_title2").play("title");
    var b = this.add.rectangle(config.width / 2, 500, 600, 20);
    b.setStrokeStyle(4, 16777215);
    b.alpha = .7;
    var d = this.add.rectangle(config.width / 2, 500, 590, 10, 16777215);
    d.alpha =
        .8;
    this.load.on("progress", function(a) {
        d.width = 590 * a
    });
    this.load.on("complete", function() {
        b.destroy();
        d.destroy();
        var c = draw_button(config.width / 2, 510, "start", a);
        a.tweens.add({
            targets: c,
            scaleX: .9,
            scaleY: .9,
            yoyo: !0,
            duration: 800,
            repeat: -1,
            ease: "Sine.easeInOut"
        })
    }, this);
    this.input.on("gameobjectdown", function() {
        gradle.event('menu');
        a.scene.start("menu")
    }, this);
    this.load.image("symbols", "images/symbols.png");
    this.load.image("symbols_blur", "images/symbols_blur.png");
    this.load.image("machine", "images/machine.png");
    this.load.image("bg", "images/bg.png");
    this.load.image("game_title", "images/game_title.png");
    this.load.image("btn_play", "images/btn_play.png");
    this.load.image("btn_share", "images/btn_share.png");
    this.load.image("btn_more", "images/btn_more.png");
    this.load.image("btn_about", "images/btn_about.png");
    this.load.image("btn_menu_sound", "images/btn_menu_sound.png");
    this.load.image("btn_menu_sound_off", "images/btn_menu_sound_off.png");
    this.load.image("btn_menu_music", "images/btn_menu_music.png");
    this.load.image("btn_menu_music_off", "images/btn_menu_music_off.png");
    this.load.image("footer", "images/footer.png");
    this.load.image("header", "images/header.png");
    this.load.image("money_bar", "images/money_bar.png");
    this.load.image("btn_payout", "images/btn_payout.png");
    this.load.image("btn_spin", "images/btn_spin.png");
    this.load.image("btn_max", "images/btn_max.png");
    this.load.image("btn_back", "images/btn_back.png");
    this.load.image("btn_sound", "images/btn_sound.png");
    this.load.image("btn_sound_off", "images/btn_sound_off.png");
    this.load.image("btn_music", "images/btn_music.png");
    this.load.image("btn_music_off", "images/btn_music_off.png");
    this.load.image("btn_plus_bet", "images/btn_plus_bet.png");
    this.load.image("btn_minus_bet", "images/btn_minus_bet.png");
    this.load.image("btn_plus_lines", "images/btn_plus_lines.png");
    this.load.image("btn_minus_lines", "images/btn_minus_lines.png");
    this.load.image("btn_full", "images/btn_full.png");
    this.load.image("btn_no", "images/btn_no.png");
    this.load.image("btn_yes", "images/btn_yes.png");
    this.load.image("win_prompt", "images/win_prompt.png");
    this.load.image("res_bar", "images/res_bar.png");
    this.load.image("lines_bar", "images/lines_bar.png");
    this.load.image("bet_bar", "images/bet_bar.png");
    this.load.image("paytable", "images/paytable.png");
    this.load.image("circle", "images/circle.png");
    this.load.image("line1", "images/line1.png");
    this.load.image("line2", "images/line2.png");
    this.load.image("line3", "images/line3.png");
    this.load.image("star", "images/star.png");
    this.load.image("you_win", "images/you_win.png");
    this.load.image("big_win", "images/big_win.png");
    this.load.image("light1", "images/light1.png");
    this.load.image("coin", "images/coin.png");
    this.load.image("mask", "images/mask.png");
    this.load.image("separate", "images/separate.png");
    this.load.image("about", "images/about.png");
    this.load.image("about_window", "images/about_window.png");
    this.load.spritesheet("coins", "images/coins.png", {
        frameWidth: 70,
        frameHeight: 70
    });
    this.load.spritesheet("lever", "images/lever.png", {
        frameWidth: 77,
        frameHeight: 351
    });
    this.load.spritesheet("li", "images/li.png", {
        frameWidth: 57.5,
        frameHeight: 397
    });
    this.load.audio("Slot Machine Spin Loop", "sounds/Slot Machine Spin Loop.mp3");
    this.load.audio("Slot Machine Mega Win", "sounds/Slot Machine Mega Win.mp3");
    this.load.audio("Slot Arm Start", "sounds/Slot Arm Start.mp3");
    this.load.audio("Get Coins",
        "sounds/Get Coins.mp3");
    this.load.audio("Slot line", "sounds/Slot line.mp3");
    this.load.audio("click2", "sounds/click2.mp3");
    this.load.audio("music", "sounds/music.mp3");
    this.load.audio("Button", "sounds/Button.mp3");
    this.load.audio("Bonus Lose", "sounds/Bonus Lose.mp3");
    this.load.audio("Slot coins", "sounds/Slot coins.mp3");
    this.load.audio("Slot Machine Spin Button", "sounds/Slot Machine Spin Button.mp3");
    this.load.audio("Slot Machine Bonus Lose", "sounds/Slot Machine Bonus Lose.mp3");
    for (var c = 1; 5 >= c; c++) this.load.audio("Slot Machine Stop " +
        c, "sounds/Slot Machine Stop " + c + ".mp3")
};
Load.prototype.create = function() {};
var Menu = function() {
    return Phaser.Scene.call(this, "menu") || this
};
$jscomp.inherits(Menu, Phaser.Scene);
Menu.prototype.create = function() {
    function a() {
        d = "preinfo";
        c = u.add.container(0, 0);
        c.setDepth(1);
        var a = u.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, 0);
        a.alpha = 0;
        a.name = "dark";
        u.tweens.add({
            targets: a,
            alpha: .7,
            duration: 200
        });
        var b = u.add.sprite(config.width / 2, config.height / 2, "about_window");
        b.alpha = 0;
        b.setScale(.7);
        u.tweens.add({
            targets: b,
            alpha: 1,
            duration: 400,
            scaleX: 1,
            scaleY: 1,
            ease: "Back.easeOut",
            onComplete: function() {
                d = "info"
            }
        });
        var k = u.add.sprite(config.width / 2, config.height /
            2 + 40, "about");
        k.alpha = 0;
        k.setScale(.7);
        u.tweens.add({
            targets: k,
            alpha: 1,
            duration: 400,
            scaleX: 1,
            scaleY: 1,
            ease: "Back.easeOut"
        });
        c.add([a, b, k])
    }

    function b() {
        u.tweens.add({
            targets: c,
            alpha: 0,
            duration: 300,
            onComplete: function() {
                c.destroy(!0, !0);
                d = "menu"
            }
        })
    }
    play_music("music", this);
    var d = "menu",
        c, u = this;
    this.add.tileSprite(0, 0, config.width, config.height, "tilebg").setOrigin(0, 0);
    this.add.sprite(config.width / 2, config.height / 2, "bg_menu");
    this.anims.create({
        key: "title",
        frames: this.anims.generateFrameNumbers("game_title2"),
        frameRate: 5,
        repeat: -1
    });
    var y = this.add.sprite(800, 215, "game_title2");
    y.play("title");
    this.tweens.add({
        targets: y,
        scaleX: .9,
        scaleY: .9,
        yoyo: !0,
        duration: 700,
        repeat: -1,
        ease: "Sine.easeInOut"
    });
    draw_button(800, 476, "play", this);
    draw_button(685, 585, "about", this);
    draw_button(550, 585, "share", this);
    draw_button(1300, 65, "more", this);
    y = draw_button(889, 585, "menu_music", this);
    draw_button(1019, 585, "menu_sound", this);
    game_config.music || y.setTexture("btn_menu_music_off");
    game_config.sound || y.setTexture("btn_menu_sound_off");
    this.input.on("gameobjectdown", function(b, c) {
        var k = this;
        c.button &&
            (play_sound("click2", k), this.tweens.add({
                targets: c,
                scaleX: .9,
                scaleY: .9,
                duration: 100,
                ease: "Linear",
                yoyo: !0,
                onComplete: function() {
                    d = "menu";
					switch(c.name){
						case "play":
							gradle.event('btn_play'), k.scene.start("game")
							break;
						case "menu_sound":
							switch_audio(c.name, c, k)
							break;
						case "menu_music":
							switch_audio(c.name, c, k)
							break;
						case "about":
							a();
							break;
						case "share":
							gradle.event('btn_share');
							break;
						case "more":
							gradle.event('btn_more');
							break;
					}
                }
            }))
    }, this);
    this.input.on("pointerdown", function() {
        "info" === d && b()
    })
};
var Game = function() {
    return Phaser.Scene.call(this, "game") || this
};
$jscomp.inherits(Game, Phaser.Scene);
Game.prototype.create = function() {
    function a() {
        p = game_config.cur_bet * game_config.cur_payline;
        p = Math.round(10 * p) / 10;
        S.setText(String(p))
    }

    function b() {
        C || "play" !== t || (D.setVisible(!1), E.setVisible(!1), p <= game_config.cur_cash ? (play_sound("Slot Machine Spin Button", e), gradle.event('btn_spin'), game_config.cur_cash -= p, F(0), w && w.destroy(!0, !0), x && x.destroy(), v && clearInterval(v), C = !0, t = "spin", T.play("lever_press"), play_sound("Slot Arm Start", e), d()) : 1 >= game_config.cur_cash ? O("refill") : O("nocash"))
    }

    function d() {
        R();
        var f =
            0,
            a = setInterval(function() {
                c(P[f]);
                f++;
                5 <= f && clearInterval(a)
            }, 300)
    }

    function c(f) {
        e.tweens.add({
            targets: f,
            y: 1474,
            duration: 800,
            ease: "Back.easeIn",
            onComplete: function() {
                u(f);
                0 === f.id && play_sound("Slot Machine Spin Loop", e)
            }
        })
    }

    function u(f) {
        f.y = 134;
        f.setTexture("symbols_blur");
        e.tweens.add({
            targets: f,
            y: 1474,
            duration: 500,
            ease: "Linear",
            loop: 2,
            onComplete: function() {
                y(f)
            }
        })
    }

    function y(f) {
        f.y = N("start", f.id);
        f.setTexture("symbols");
        e.tweens.add({
            targets: f,
            y: N("end", f.id),
            duration: 800,
            ease: "Back.easeOut",
            onComplete: function() {
                4 === f.id && (k(), C = !1)
            }
        });
        setTimeout(function() {
            play_sound("Slot Machine Stop " + Number(f.id + 1), e)
        }, 400)
    }

    function N(f, a) {
        return "start" === f ? -(134 * A[a] + 858) : 858 - 134 * A[a]
    }

    function R() {
        for (var a = 0; 5 > a; a++) A[a] = Math.floor(10 * Math.random());
        a = k(!0) * game_config.cur_bet;
        if (a > p) {
            var h = Math.round(100 * Math.random()),
                e = !1;
            h >= game_config.winning_rate && (e = !0);
            !e && a >= 3 * p && (h = Math.round(100 * Math.random()), h >= game_config.bigwin_rate && (e = !0));
            if (e)
                for (a = 0; 10 > a; a++) {
                    for (h = 0; 5 > h; h++) A[h] = Math.floor(10 *
                        Math.random());
                    if (k(!0) * game_config.cur_payline <= p) break
                }
        }
    }

    function k(a) {
        for (var h = [], f = [], b = [], c = 0; 3 > c; c++) {
            for (var n = [], l = 0; 5 > l; l++) {
                var d = A[l] + c;
                10 <= d && (d -= 10);
                n.push(d)
            }
            h.push(n)
        }
        c = [];
        for (n = 0; n < game_config.cur_payline; n++) {
            l = [];
            d = !1;
            for (var q = -1, g = 0; 5 > g; g++) {
                var r = game_config.paylines[n][g][0],
                    m = game_config.paylines[n][g][1],
                    k = h[r][m];
                if (0 === l.length) l.push([k, {
                    x: m,
                    y: r,
                    at: n
                }]), 0 === k && (d = !0);
                else if (k === l[g - 1][0]) l.push([k, {
                    x: m,
                    y: r,
                    at: n
                }]);
                else if (d && -1 === q) l.push([k, {
                    x: m,
                    y: r,
                    at: n
                }]), q = k, d = !1;
                else if (-1 != q)
                    if (k === q) l.push([k, {
                        x: m,
                        y: r,
                        at: n
                    }]);
                    else if (0 === k) l.push([l[g - 1][0], {
                    x: m,
                    y: r,
                    at: n
                }]);
                else break;
                else if (0 === k) l.push([l[g - 1][0], {
                    x: m,
                    y: r,
                    at: n
                }]);
                else break
            }
            c.push(l)
        }
        for (n = h = 0; n < c.length; n++)
            if (q = c[n][0], l = c[n], 2 <= l.length)
                if (0 != q[0]) {
                    if (h += game_config.payvalues[q[0]][l.length - 2], 0 < game_config.payvalues[q[0]][l.length - 2])
                        for (f.push(q[1].at), d = 0; d < l.length; d++) b.push(c[n][d][1])
                } else {
                    d = g = 0;
                    r = c[n];
                    for (m = 0; m < r.length; m++)
                        if (0 === r[m][0]) g++;
                        else {
                            d = r[m][0];
                            break
                        }
                    if (2 <= g) {
                        f.push(q[1].at);
                        for (r = 0; r < l.length; r++) b.push(c[n][r][1]);
                        h += game_config.payvalues[q[0]][g - 2]
                    }
                    if (0 < game_config.payvalues[d][l.length - 2])
                        for (f.push(q[1].at), q = 0; q < l.length; q++) b.push(c[n][q][1]);
                    h += game_config.payvalues[d][l.length - 2]
                }
        b = U(b);
        if (a) return h;
        t = "play";
        x && x.destroy();
        x = e.add.particles("star");
        for (a = 0; a < b.length; a++) c = 255 + 134 * b[a].y - 47, G.x = H + 170 * b[a].x - 47, G.y = c, x.createEmitter({
            lifespan: 900,
            speed: {
                min: 10,
                max: 30
            },
            scale: {
                start: 1,
                end: 0
            },
            emitZone: {
                type: "edge",
                source: G,
                quantity: 60
            },
            blendMode: "ADD"
        });
        0 === h &&
            play_sound("Slot Machine Bonus Lose", e);
        F(h * game_config.cur_bet);
        V(f);
        h * game_config.cur_bet > p && (D.setVisible(!0), E.setVisible(!0));
        70 < h * game_config.cur_bet && (h * game_config.cur_bet >= 4 * p ? Q("big_win") : h * game_config.cur_bet >= 3 * p && Q("you_win"))
    }

    function F(a) {
        1 < a && play_sound("Get Coins", e);
        a ? game_config.cur_cash += a : a = 0;
        a = Math.round(10 * a) / 10;
        W.setText(String(a));
        game_config.cur_cash = Math.round(10 * game_config.cur_cash) / 10;
        X.setText(String(game_config.cur_cash));
        localStorage.setItem("rf_lucky_slot", game_config.cur_cash)
    }

    function U(a) {
        return a = a.filter(function(a, e, b) {
            return e === b.findIndex(function(e) {
                return e.x === a.x && e.y === a.y
            })
        })
    }

    function V(a) {
        if (0 < a.length) var b = setTimeout(function() {
            clearTimeout(b);
            var c = a.length,
                h = 0;
            v = setInterval(function() {
                C ? w && (w.destroy(!0, !0), clearInterval(v)) : (I(!0, a[h]), h++, h >= c && (h = 0), 1 < a.length && play_sound("Slot line", e))
            }, 1E3)
        }, 1E3)
    }

    function Y() {
        e.tweens.add({
            targets: m,
            alpha: 0,
            duration: 300,
            onComplete: function() {
                m.destroy(!0, !0);
                t = "play"
            }
        })
    }

    function I(a, b) {
        function c(a) {
            for (var b = 0; 5 >
                b; b++) {
                var h = game_config.paylines[a],
                    c = H + 170 * h[b][1],
                    d = 255 + 134 * h[b][0],
                    f = void 0;
                if (4 > b) {
                    h[b][0] === h[b + 1][0] ? f = "line1" : h[b][0] > h[b + 1][0] ? f = "line2" : h[b][0] < h[b + 1][0] && (f = "line3");
                    var g = e.add.sprite(c, d, f);
                    "line1" === f ? g.setOrigin(0, .5) : "line2" === f ? g.setOrigin(0, 1) : "line3" === f && g.setOrigin(0);
                    g.setTint(h[5]);
                    g.setBlendMode(Phaser.BlendModes.ADD);
                    w.add(g)
                }
                c = e.add.sprite(c, d, "circle");
                c.setTint(h[5]);
                c.setBlendMode(Phaser.BlendModes.ADD);
                w.add(c)
            }
        }
        w.destroy(!0, !0);
        w = e.add.group();
        if (a) c(b);
        else
            for (var h =
                    0; h < game_config.cur_payline; h++) c(h)
    }

    function Q(a) {
        play_sound("Slot Machine Mega Win", e);
        t = "win";
        var b = e.add.group(),
            c = e.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, 0);
        c.alpha = 0;
        c.name = "dark";
        e.tweens.add({
            targets: c,
            alpha: .7,
            duration: 200
        });
        var d = e.add.sprite(config.width / 2, config.height / 2, "light1");
        e.tweens.add({
            targets: d,
            rotation: 6.28319,
            duration: 1E4,
            loop: -1
        });
        d.setBlendMode(Phaser.BlendModes.ADD);
        if ("big_win" === a) {
            var f = e.add.particles("coins");
            var g = f.createEmitter({
                x: config.width /
                    2,
                y: config.height + 100,
                lifespan: 3E3,
                frame: 0,
                angle: {
                    min: 235,
                    max: 300
                },
                rotate: {
                    min: 0,
                    max: 360
                },
                speed: {
                    min: 800,
                    max: 1300
                },
                gravityY: 660,
                quantity: 1,
                frequency: 99
            });
            var l = f.createEmitter({
                x: config.width / 2,
                y: config.height + 100,
                lifespan: 3E3,
                frame: 1,
                angle: {
                    min: 235,
                    max: 300
                },
                rotate: {
                    min: 0,
                    max: 360
                },
                speed: {
                    min: 800,
                    max: 1300
                },
                gravityY: 660,
                quantity: 1,
                frequency: 99
            });
            var m = f.createEmitter({
                x: config.width / 2,
                y: config.height + 100,
                lifespan: 3E3,
                frame: 2,
                angle: {
                    min: 235,
                    max: 300
                },
                rotate: {
                    min: 0,
                    max: 360
                },
                speed: {
                    min: 800,
                    max: 1300
                },
                gravityY: 660,
                quantity: 1,
                frequency: 99
            })
        }
        var k = e.add.sprite(config.width / 2, config.height / 2, a);
        k.setScale(0);
        e.tweens.add({
            targets: k,
            scaleX: 1,
            duration: 600,
            ease: "Back.easeOut",
            onComplete: function() {
                e.tweens.add({
                    targets: k,
                    scaleX: 1.1,
                    scaleY: 1.1,
                    duration: 600,
                    ease: "Sine.easeInOut",
                    yoyo: !0,
                    onComplete: function() {
                        "big_win" === a && (g.stop(), l.stop(), m.stop());
                        e.tweens.add({
                            targets: c,
                            alpha: 0,
                            duration: 300,
                            ease: "Linear"
                        });
                        e.tweens.add({
                            targets: k,
                            scaleY: 0,
                            scaleX: 0,
                            duration: 400,
                            ease: "Back.easeIn"
                        });
                        e.tweens.add({
                            targets: d,
                            scaleY: 0,
                            scaleX: 0,
                            duration: 500,
                            ease: "Back.easeIn",
                            onComplete: function() {
                                t = "play";
                                b.destroy(!0, !0);
                                "big_win" === a && setTimeout(function() {
                                    f.destroy()
                                }, 3E3)
                            }
                        })
                    }
                })
            }
        });
        e.tweens.add({
            targets: k,
            scaleY: 1,
            duration: 500,
            ease: "Back.easeOut"
        });
        b.addMultiple([c, d, k])
    }

    function O(a) {
        play_sound("Bonus Lose", e);
        t = a;
        var b = config.width / 2,
            c = config.height / 2;
        m = e.add.container(b, c);
        m.setDepth(1);
        var d = e.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, 0);
        d.alpha = 0;
        d.name = "dark";
        e.tweens.add({
            targets: d,
            alpha: .7,
            duration: 200
        });
        var g = "YOU DON'T HAVE\nENOUGH MONEY!";
        "refill" === a && (g = 'YOU DON\'T HAVE\nENOUGH MONEY!\nPress "OK" to get\n' + game_config.refill + " coins!");
        var f = e.add.sprite(config.width / 2 - b, config.height / 2 - c, "win_prompt");
        g = e.add.text(config.width / 2 - b, config.height / 2 - c, g, {
            fontFamily: "bebas",
            fontSize: 45,
            align: "center",
            color: "#FFFFFF"
        }).setOrigin(.5);
        var l = draw_button(config.width / 2 - 70 - b, config.height / 2 - c + 160, "yes", e);
        b = draw_button(config.width / 2 + 70 - b, config.height / 2 - c + 160, "no", e);
        "refill" != a && (l.setVisible(!1),
            b.setVisible(!1));
        m.add([f, g, l, b]);
        m.alpha = 0;
        m.setScale(.7);
        e.tweens.add({
            targets: m,
            alpha: 1,
            duration: 400,
            scaleX: 1,
            scaleY: 1,
            ease: "Back.easeOut",
            onComplete: function() {
                m.add(d);
                d.setPosition(0, 0);
                m.sendToBack(d);
                "nocash" === a && (t = "nocash2")
            }
        })
    }

    function J() {
        e.tweens.add({
            targets: m,
            alpha: 0,
            duration: 300,
            onComplete: function() {
                m.destroy(!0, !0);
                t = "play"
            }
        })
    }
    var p = game_config.cur_bet * game_config.cur_payline;
    p = Math.round(10 * p) / 10;
    var e = this,
        P = [],
        A = [],
        g = config.width / 2 - game_config.main.width / 2,
        H = 301 + g,
        C = !1,
        m, w =
        this.add.group(),
        t = "play",
        v;
    this.anims.create({
        key: "lever_press",
        frames: this.anims.generateFrameNumbers("lever"),
        frameRate: 25,
        yoyo: !0
    });
    this.anims.create({
        key: "li",
        frames: this.anims.generateFrameNumbers("li"),
        frameRate: 3,
        repeat: -1
    });
    this.add.tileSprite(0, 0, config.width, config.height, "tilebg").setOrigin(0, 0);
    this.add.sprite(config.width / 2, config.height / 2, "bg");
    var B = this.add.sprite(640 + g, 330, "machine"),
        T = this.add.sprite(1155 + g, 319, "lever");
    this.add.tileSprite(0, 0, config.width, 67, "header").setOrigin(0,
        0);
    this.add.sprite(config.width - 400, 0, "separate").setOrigin(0);
    this.add.sprite(400, 0, "separate").setOrigin(0);
    this.add.sprite(config.width - 220, 0, "separate").setOrigin(0);
    this.add.sprite(220, 0, "separate").setOrigin(0);
    this.add.tileSprite(0, config.height, config.width, 100, "footer").setOrigin(0, 1);
    var D = this.add.sprite(330, 400, "li");
    D.play("li");
    D.setVisible(!1);
    var E = this.add.sprite(1267, 400, "li");
    E.play("li");
    E.setVisible(!1);
    this.add.sprite(419 + g, 35, "money_bar");
    this.add.sprite(735 + g, 670, "res_bar");
    this.add.sprite(480 + g, 670, "bet_bar");
    this.add.sprite(221 + g, 670, "lines_bar");
    draw_button(1110 + g, 670, "spin", this);
    draw_button(920 + g, 670, "max", this);
    draw_button(950 + g, 35, "payout", this);
    draw_button(561 + g, 668, "plus_bet", this);
    draw_button(399 + g, 669, "minus_bet", this);
    draw_button(302 + g, 668, "plus_lines", this);
    draw_button(140 + g, 669, "minus_lines", this);
    draw_button(1100 + g, 35, "sound", this);
    var z = draw_button(1170 + g, 35, "music", this);
    draw_button(120 + g, 35, "back", this);
    draw_button(200 + g, 35, "full", this);
    game_config.music ||
        z.setTexture("btn_music_off");
    game_config.sound || z.setTexture("btn_sound_off");
    var X = this.add.text(530 + g, 35, String(game_config.cur_cash), {
            fontFamily: "bebas",
            fontSize: 30,
            align: "right",
            color: "#FFFFFF"
        }).setOrigin(1, .5),
        K = this.add.text(221 + g, 680, String(game_config.cur_payline), {
            fontFamily: "bebas",
            fontSize: 30,
            align: "center",
            color: "#FFFFFF"
        }).setOrigin(.5),
        L = this.add.text(480 + g, 680, String(game_config.cur_bet), {
            fontFamily: "bebas",
            fontSize: 30,
            align: "center",
            color: "#FFFFFF"
        }).setOrigin(.5),
        W = this.add.text(820 +
            g, 682, "0", {
                fontFamily: "bebas",
                fontSize: 30,
                align: "right",
                color: "#FFFFFF"
            }).setOrigin(1, .5),
        S = this.add.text(820 + g, 656, String(p), {
            fontFamily: "bebas",
            fontSize: 30,
            align: "right",
            color: "#FFFFFF"
        }).setOrigin(1, .5);
    B = this.add.sprite(B.x, 391, "mask").setVisible(!1);
    B = new Phaser.Display.Masks.BitmapMask(this, B);
    for (z = 0; 5 > z; z++) {
        var M = this.add.tileSprite(H + 170 * z, 858 + 134 * Math.round(7 * Math.random()), 134, 4020, "symbols");
        M.id = z;
        M.setMask(B);
        P.push(M);
        A.push(Math.floor(10 * Math.random()))
    }
    var x, G = new Phaser.Geom.Rectangle(0,
        0, 94, 94);
    this.input.on("gameobjectdown", function(c, d) {
        d.button && ("full" === d.name && (this.scale.isFullscreen ? this.scale.stopFullscreen() : this.scale.startFullscreen()), this.tweens.add({
            targets: d,
            scaleX: .9,
            scaleY: .9,
            duration: 100,
            ease: "Linear",
            yoyo: !0,
            onComplete: function() {
                if ("play" === t)
                    if ("spin" === d.name) b();
                    else if ("max" === d.name) game_config.cur_payline = game_config.paylines.length, game_config.cur_bet = game_config.bet_size[game_config.bet_size.length - 1], L.setText(String(game_config.cur_bet)), K.setText(String(game_config.cur_payline)),
                    a(), b();
                else if ("payout" === d.name) {
                    play_sound("click2", e);
                    t = "table";
                    m = e.add.container(0, 0);
                    m.setDepth(1);
                    var c = e.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, 0);
                    c.alpha = 0;
                    c.name = "dark";
                    e.tweens.add({
                        targets: c,
                        alpha: .7,
                        duration: 200
                    });
                    var f = e.add.sprite(config.width / 2, config.height / 2, "paytable");
                    f.alpha = 0;
                    f.setScale(.7);
                    e.tweens.add({
                        targets: f,
                        alpha: 1,
                        duration: 400,
                        scaleX: 1,
                        scaleY: 1,
                        ease: "Back.easeOut"
                    });
                    m.add([c, f]);
                    c = 290 + g;
                    f = 264;
                    for (var h = 0, k = 0; k < game_config.payvalues.length; k++) {
                        for (var l =
                                "", p = 3; 0 <= p; p--) l = 0 === game_config.payvalues[k][p] ? l + "-\n" : l + (String(game_config.payvalues[k][p]) + "\n");
                        l = e.add.text(c + 170 * h, f, l, {
                            fontFamily: "bebas",
                            lineSpacing: -8,
                            fontSize: 28,
                            align: "left",
                            color: "#FFFFFF"
                        }).setOrigin(0);
                        m.add(l);
                        h++;
                        5 <= h && (h = 0, f += 220)
                    }
                } else "plus_lines" === d.name ? (play_sound("Button", e), game_config.cur_payline++, game_config.cur_payline > game_config.max_payline && (game_config.cur_payline = 1), K.setText(String(game_config.cur_payline)), v && (clearInterval(v), x.destroy()), I(), a()) : "minus_lines" ===
                    d.name ? (play_sound("Button", e), game_config.cur_payline--, 1 > game_config.cur_payline && (game_config.cur_payline = game_config.max_payline), K.setText(String(game_config.cur_payline)), v && (clearInterval(v), x.destroy()), I(), a()) : "plus_bet" === d.name ? (play_sound("Button", e), game_config.bet_at++, game_config.bet_at >= game_config.bet_size.length && (game_config.bet_at = 0), game_config.cur_bet = game_config.bet_size[game_config.bet_at], L.setText(String(game_config.cur_bet)), a()) : "minus_bet" === d.name ? (play_sound("Button",
                        e), game_config.bet_at--, 0 > game_config.bet_at && (game_config.bet_at = game_config.bet_size.length - 1), game_config.cur_bet = game_config.bet_size[game_config.bet_at], L.setText(String(game_config.cur_bet)), a()) : "back" === d.name && (play_sound("click2", e), v && clearInterval(v), gradle.event('btn_close'), e.scene.start("menu"));
                else "yes" === d.name ? (play_sound("Slot coins", e), J(), game_config.cur_cash = game_config.refill, F(), gradle.event('btn_yes')) : "no" === d.name && (play_sound("click2", e), J(), gradle.event('btn_no'));
                "sound" === d.name ? (switch_audio(d.name, d, e), play_sound("click2",
                    e)) : "music" === d.name && (play_sound("click2", e), switch_audio(d.name, d, e))
            }
        }))
    }, this);
    this.input.on("pointerdown", function(a) {
        "table" === t ? (t = "wait", Y()) : "nocash2" === t && (J(), gradle.event('no_cash'))
    }, this);
    this.input.keyboard.on("keydown", function(a) {}, this)
};


function play_sound(a, b) {
    game_config.sound && !_audio_mute && b.sound.play(a)
}

function play_music(a, b) {
    var d = !0;
    game_config.music && game_music && game_music.isPlaying && (d = !1);
    d && game_config.music && (game_music = b.sound.add(a, {
        loop: !0
    }), game_music.play())
}

function stop_music() {
    "undefined" !== typeof game_music && game_music.stop()
}

function switch_audio(a, b, d) {
    "music" === a || "menu_music" === a ? game_config.music ? (game_config.music = !1, b.setTexture("btn_" + a + "_off"), stop_music()) : (game_config.music = !0, b.setTexture("btn_" + a), play_music("music", d)) : game_config.sound ? (game_config.sound = !1, b.setTexture("btn_" + a + "_off")) : (game_config.sound = !0, b.setTexture("btn_" + a))
}

function draw_button(a, b, d, c) {
    a = c.add.sprite(a, b, "btn_" + d).setInteractive();
    a.button = !0;
    a.name = d;
    return a
}

function container_add(a, b) {
    for (var d = b.length, c = 0; c < d; c++) b[c].x -= game_config.main.width / 2, b[c].y -= game_config.main.height / 2, a.add(b[c])
}
var config = {
        type: Phaser.AUTO,
        width: 1600,
        height: 720,
        scale: {
            mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
            parent: "gradle",
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene: [Boot, Load, Menu, Game]
    };

var game = new Phaser.Game(config);
