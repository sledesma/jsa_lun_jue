(() => {
	var t = {
			607: function (t, n, o) {
				var e,
					r =
						(this && this.__extends) ||
						((e = function (t, n) {
							return (e =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, n) {
										t.__proto__ = n;
									}) ||
								function (t, n) {
									for (var o in n)
										Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
								})(t, n);
						}),
						function (t, n) {
							if ("function" != typeof n && null !== n)
								throw new TypeError(
									"Class extends value " +
										String(n) +
										" is not a constructor or null"
								);
							function o() {
								this.constructor = t;
							}
							e(t, n),
								(t.prototype =
									null === n
										? Object.create(n)
										: ((o.prototype = n.prototype), new o()));
						});
				console.log("Hola mundo!"),
					(function (t) {
						function n() {
							return t.call(this) || this;
						}
						r(n, t),
							(n.prototype.fromArray = function (t) {
								var n = this;
								t.forEach(function (t) {
									n.push(t);
								});
							}),
							(n.prototype.getPath = function (t) {
								return this.find(function (n) {
									return n.path == t;
								});
							});
					})(Array),
					(function (t) {
						function n(n) {
							var o = t.call(this, n) || this;
							return (
								(o.links = document.querySelectorAll(o.routerLinkSelector)),
								o.registerListeners(),
								o
							);
						}
						r(n, t),
							(n.prototype.navigate = function (t) {
								location.hash = "#" + t.path;
							}),
							(n.prototype.registerListeners = function () {
								var t = this;
								(o.g.onhashchange = function (n) {
									var o = n.newURL.split("#")[1],
										e = t.paths.getPath(o);
									t.doAction(e);
								}),
									this.links.forEach(function (n) {
										n.addEventListener("click", function (o) {
											o.preventDefault();
											var e = t.paths.getPath(n.getAttribute("href"));
											t.navigate(e);
										});
									});
							});
					})(
						(function () {
							function t(t, n, o) {
								void 0 === n && (n = ".router-link"),
									void 0 === o && (o = ".router-view"),
									(this.routerLinkSelector = n),
									(this.routerViewSelector = o),
									this.paths.fromArray(t);
							}
							return (
								(t.prototype.registerListeners = function () {
									console.log("Registrando listeners");
								}),
								(t.prototype.navigate = function (t) {
									console.log("Navegando hacia la siguiente ruta: ", t.path);
								}),
								(t.prototype.doAction = function (t) {
									var n = this;
									console.log("Ejecutando la siguiente acción: ", t.action);
									var o = t.action;
									switch (o.type) {
										case "render":
											document
												.querySelectorAll(this.routerViewSelector)
												.forEach(function (t) {
													t.innerHTML = o.content;
												});
											break;
										case "lazy-load":
											var e = new XMLHttpRequest();
											e.open("GET", o.content),
												e.send(),
												(e.onload = function () {
													document
														.querySelectorAll(n.routerViewSelector)
														.forEach(function (t) {
															t.innerHTML = e.response;
														});
												});
									}
								}),
								t
							);
						})()
					);
			},
		},
		n = {};
	(n.g = (function () {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")();
		} catch (t) {
			if ("object" == typeof window) return window;
		}
	})()),
		t[607](0, {}, n);
})();
