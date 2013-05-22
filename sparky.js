(function SPARKY() {
  "use strict";

	var ohmsLaw, sizeAmp, conFill, resistor, decibel, conBend, initiate;

	ohmsLaw = function () {

		var amps = document.getElementById("olAmps"),
			watts = document.getElementById("olWatts"),
			volts = document.getElementById("olVolts"),
			ohms = document.getElementById("olOhms");

		return {
			calculate: function () {

				var a = Math.abs(Number(amps.value)) || false,
					v = Math.abs(Number(volts.value)) || false,
					w = Math.abs(Number(watts.value)) || false,
					o = Math.abs(Number(ohms.value)) || false;

				if (!a && !v && !w && !o) {return; }
				if (!a && !v && !w) {return; }
				if (!a && !v && !o) {return; }
				if (!v && !w && !o) {return; }

				if (v) {
					if (a) {
						w = v * a;
						o = v / a;
					} else if (w) {
						a = w / v;
						o = (v * v) / w;
					} else if (o) {
						a = v / o;
						w = (v * v) / o;
					}
				} else if (w) {
					if (a) {
						v = w / a;
						o = w / (a * a);
					} else if (o) {
						v = Math.sqrt(w * o);
						a = Math.sqrt(w / o);
					}
				} else if (a) {
					if (o) {
						v = a * o;
						w = (a * a) * o;
					}
				} else {return; }

				amps.value = a.toFixed(2);
				volts.value = v.toFixed(2);
				watts.value = w.toFixed(2);
				ohms.value = o.toFixed(2);
			},

			clear: function () {
				amps.value = "";
				volts.value = "";
				watts.value = "";
				ohms.value = "";
			}
		};
	};

	sizeAmp = function () {

		var amps = document.getElementById("saAmps"),
			size = document.getElementById("saSize"),
			cu = document.getElementById("saCU"),
			au = document.getElementById("saAU");

		return {
			calculate: function () {
				var siz = size.value,
					amp = amps.value;
				if (cu.checked) {
					switch (siz) {
					case "1":
						amps.value = "15";
						break;
					case "2":
						amps.value = "20";
						break;
					case "3":
						amps.value = "30";
						break;
					case "5":
						amps.value = "75";
						break;
					case "6":
						amps.value = "95";
						break;
					case "7":
						amps.value = "110";
						break;
					case "8":
						amps.value = "130";
						break;
					case "9":
						amps.value = "150";
						break;
					case "10":
						amps.value = "170";
						break;
					case "11":
						amps.value = "195";
						break;
					case "12":
						amps.value = "225";
						break;
					case "13":
						amps.value = "260";
						break;
					case "14":
						amps.value = "290";
						break;
					case "15":
						amps.value = "320";
						break;
					case "16":
						amps.value = "350";
						break;
					case "17":
						amps.value = "430";
						break;
					case "18":
						amps.value = "535";
						break;
					default:
						(function () {
							if (amp < 16) {
								size.value = "1";
							} else if (amp < 21) {
								size.value = "2";
							} else if (amp < 31) {
								size.value = "3";
							} else if (amp < 56) {
								size.value = "4";
							} else if (amp < 76) {
								size.value = "5";
							} else if (amp < 96) {
								size.value = "6";
							} else if (amp < 111) {
								size.value = "7";
							} else if (amp < 151) {
								size.value = "9";
							} else if (amp < 171) {
								size.value = "10";
							} else if (amp < 196) {
								size.value = "11";
							} else if (amp < 226) {
								size.value = "12";
							} else if (amp < 261) {
								size.value = "13";
							} else if (amp < 291) {
								size.value = "14";
							} else if (amp < 321) {
								size.value = "15";
							} else if (amp < 351) {
								size.value = "16";
							} else if (amp < 431) {
								size.value = "17";
							} else {
								return;
							}
						}());
					}
				} else if (au.checked) {
					switch (siz) {
					case "1":
						amps.value = "10";
						break;
					case "2":
						amps.value = "15";
						break;
					case "3":
						amps.value = "25";
						break;
					case "4":
						amps.value = "45";
						break;
					case "5":
						amps.value = "60";
						break;
					case "6":
						amps.value = "75";
						break;
					case "7":
						amps.value = "85";
						break;
					case "8":
						amps.value = "100";
						break;
					case "9":
						amps.value = "115";
						break;
					case "10":
						amps.value = "135";
						break;
					case "12":
						amps.value = "175";
						break;
					case "13":
						amps.value = "205";
						break;
					case "14":
						amps.value = "230";
						break;
					case "15":
						amps.value = "255";
						break;
					case "16":
						amps.value = "280";
						break;
					case "18":
						amps.value = "435";
						break;
					default:
						(function () {
							if (amp < 11) {
								size.value = "1";
							} else if (amp < 16) {
								size.value = "2";
							} else if (amp < 26) {
								size.value = "3";
							} else if (amp < 46) {
								size.value = "4";
							} else if (amp < 61) {
								size.value = "5";
							} else if (amp < 76) {
								size.value = "6";
							} else if (amp < 86) {
								size.value = "7";
							} else if (amp < 101) {
								size.value = "8";
							} else if (amp < 116) {
								size.value = "9";
							} else if (amp < 136) {
								size.value = "10";
							} else if (amp < 151) {
								size.value = "11";
							} else if (amp < 176) {
								size.value = "12";
							} else if (amp < 206) {
								size.value = "13";
							} else if (amp < 231) {
								size.value = "14";
							} else if (amp < 256) {
								size.value = "15";
							} else if (amp < 281) {
								size.value = "16";
							} else if (amp < 351) {
								size.value = "17";
							} else if (amp < 436) {
								size.value = "18";
							} else {return; }
						}());
					}
				}
			},

			clear: function () {
				amps.value = "";
				size.value = "0";
			}
		};
	};

	conFill = function () {

		var conFillArray =
			[
				[12, 9, 5, 3, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
				[22, 16, 10, 6, 4, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
				[35, 26, 16, 9, 7, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 0],
				[61, 45, 28, 16, 12, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1],
				[84, 61, 38, 22, 16, 10, 8, 7, 5, 4, 3, 3, 2, 1, 1, 1, 1],
				[138, 101, 63, 36, 26, 16, 13, 11, 8, 7, 6, 5, 4, 3, 3, 2, 1],
				[241, 176, 111, 64, 46, 28, 24, 20, 15, 12, 10, 8, 7, 6, 5, 4, 3],
				[364, 266, 167, 96, 69, 43, 36, 30, 22, 19, 16, 13, 11, 9, 7, 6, 5],
				[476, 347, 219, 126, 91, 56, 47, 40, 29, 25, 20, 17, 14, 11, 10, 9, 6],
				[608, 443, 279, 161, 116, 71, 60, 51, 37, 32, 26, 22, 18, 15, 13, 11, 8]
			],
			conSize = document.getElementById("cfConSize"),
			wireSize = document.getElementById("cfWireSize"),
			wireNum = document.getElementById("cfWireNum");

		return {
			calculate: function () {
				var i, v, w, x, y, z,
					cS = Math.abs(Number(conSize.value)) || false,
					wS = Math.abs(Number(wireSize.value)) || false,
					wN = Math.abs(Number(wireNum.value)) || false;

				if (!cS && !wS && !wN) {return; }

				if (cS && wN) {
					for (i = 0; i <= 17; i = i + 1) {
						x = conFillArray[cS - 1][i];
						y = conFillArray[cS - 1][i + 1];
						if (wN <= x && wN > y) {
							wireSize.value = i + 1;
							return;
						}
					}
				}

				if (cS && wS) {
					z = conFillArray[cS - 1][wS - 1];
					wireNum.value = z;
					return;
				}

				if (wS && wN) {
					for (v = 0; v <= 10; v = v + 1) {
						w = conFillArray[v][wS - 1];
						if (wN <= w) {
							conSize.value = v + 1;
							return;
						}
					}
				}
			},

			clear: function () {
				conSize.value = "0";
				wireSize.value = "0";
				wireNum.value = "";
			}
		};
	};

	resistor = function () {

		var answr = document.getElementById("rsAnswer"),
			one = document.getElementById("rsOne"),
			two = document.getElementById("rsTwo"),
			three = document.getElementById("rsThree"),
			four = document.getElementById("rsFour"),
			five = document.getElementById("rsFive"),
			six = document.getElementById("rsSix"),

			findMult = function (mult) {
				switch (mult) {
				case "0":
					mult = 0.01;
					break;
				case "1":
					mult = 0.1;
					break;
				case "2":
					mult = 1;
					break;
				case "3":
					mult = 10;
					break;
				case "4":
					mult = 100;
					break;
				case "5":
					mult = 1000;
					break;
				case "6":
					mult = 10000;
					break;
				case "7":
					mult = 100000;
					break;
				case "8":
					mult = 1000000;
					break;
				case "9":
					mult = 10000000;
					break;
				}
				return mult;
			},

			findTol = function (tol) {
				switch (tol) {
				case "0":
					tol = "+/- 10%";
					break;
				case "1":
					tol = "+/- 5%";
					break;
				case "2":
					tol = "+/- 2%";
					break;
				case "3":
					tol = "+/- 1%";
					break;
				case "4":
					tol = "+/- 0.5%";
					break;
				case "5":
					tol = "+/- 0.25%";
					break;
				case "6":
					tol = "+/- 0.1%";
					break;
				}
				return tol;
			},

			findTemp = function (temp) {
				switch (temp) {
				case "1":
					temp = "100 ppm";
					break;
				case "2":
					temp = "50 ppm";
					break;
				case "3":
					temp = "25 ppm";
					break;
				case "4":
					temp = "15 ppm";
					break;
				}
				return temp;
			};

		return {
			calculate: function () {
				var a, b, c, d, e, f, g, h, i, j, k, l;

				// find four
				if (five.value === "0" && six.value === "0") {
					a = (Number(one.value) + 1) * 10;
					b = Number(two.value) + 1;
					c = three.value;
					d = four.value;
					e = findMult(c);
					f = ((a + b) * e);
					g = findTol(d);

					if (f >= 1000) {
						h = (f / 1000) + " k";
					} else {
						h = f.toFixed(2);
					}

					answr.innerHTML = (h + "  " + g);

				// find five
				} else if (five.value !== "0" && six.value === "0") {
					a = (Number(one.value) + 1) * 100;
					b = (Number(two.value) + 1) * 10;
					c = (Number(three.value) + 1);
					d = four.value;
					e = five.value;
					f = findMult(d);
					g = (a + b) * f;
					h = Number(e) - 1;
					i = findTol(String(h));

					if (g >= 1000) {
						j = (g / 1000) + " k";
					} else {
						j = g.toFixed(2);
					}

					answr.innerHTML = (j + "  " + i);

				// find six
				} else if (five.value !== "0" && six.value !== "0") {
					a = (Number(one.value) + 1) * 100;
					b = (Number(two.value) + 1) * 10;
					c = (Number(three.value) + 1);
					d = four.value;
					e = five.value;
					f = six.value;
					g = findMult(d);
					h = (a + b + c) * g;
					i = Number(e) - 1;
					j = findTol(String(i));
					k = findTemp(f);

					if (h >= 1000) {
						l = (h / 1000) + " k";
					} else {
						l = h.toFixed(2);
					}

					answr.innerHTML = (l + "  " + j + "  @ " + k);

				} else {
					answr.innerHTML = "";
				}
			},

			clear: function () {
				one.value = "0";
				two.value = "0";
				three.value = "0";
				four.value = "0";
				five.value = "0";
				six.value = "0";
				answr.innerHTML = "";
			}
		};
	};

	decibel = function () {

		var decibels = document.getElementById("dbDecibels"),
			watts = document.getElementById("dbWatts");

		return {
			calculate: function () {
				var dVal = Math.abs(Number(decibels.value)) || false,
					wVal = Math.abs(Number(watts.value)) || false;

				if (!dVal && !wVal) {
					return;
				}
				if (dVal) {
					wVal = Math.pow(10, (dVal / 10));
				} else {
					dVal = 10 * (Math.LOG10E * Math.log(wVal));
				}

				decibels.value = dVal.toFixed(2);
				watts.value = wVal.toFixed(2);
			},

			clear: function () {
				decibels.value = "";
				watts.value = "";
			}
		};
	};

	conBend = function () {

		var len = document.getElementById("cbLength"),
			off = document.getElementById("cbOffset"),
			deg = document.getElementById("cbDegree");

		return {
			calculate: function () {
				var o = Math.abs(Number(off.value)) || false,
					d = deg.value,
					m;

				switch (d) {
				case "0":
					m = 6;
					break;
				case "1":
					m = 2.6;
					break;
				case "2":
					m = 2;
					break;
				case "3":
					m = 1.4;
					break;
				case "4":
					m = 1.2;
					break;
				}

				if (o) {
					len.innerHTML = ((o * m).toFixed(2)) + " in.";
				} else {
					return;
				}
			},

			clear: function () {
				len.innerHTML = "";
				off.value = "";
				deg.value = "0";
			}
		};
	};

	initiate = function () {

		var ol, sa, cf, rs, db, cb;

		ol = ohmsLaw();
		sa = sizeAmp();
		cf = conFill();
		rs = resistor();
		db = decibel();
		cb = conBend();

		document.getElementById("olCalc").addEventListener("click", ol.calculate, false);
		document.getElementById("olClear").addEventListener("click", ol.clear, false);
		document.getElementById("saCalc").addEventListener("click", sa.calculate, false);
		document.getElementById("saClear").addEventListener("click", sa.clear, false);
		document.getElementById("cfCalc").addEventListener("click", cf.calculate, false);
		document.getElementById("cfClear").addEventListener("click", cf.clear, false);
		document.getElementById("rsCalc").addEventListener("click", rs.calculate, false);
		document.getElementById("rsClear").addEventListener("click", rs.clear, false);
		document.getElementById("dbCalc").addEventListener("click", db.calculate, false);
		document.getElementById("dbClear").addEventListener("click", db.clear, false);
		document.getElementById("cbCalc").addEventListener("click", cb.calculate, false);
		document.getElementById("cbClear").addEventListener("click", cb.clear, false);
	};

	window.addEventListener("load", initiate, false);

}());
