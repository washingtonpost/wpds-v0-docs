import React from "react";
import { ReactSVG } from "react-svg";
import Tokens from "@washingtonpost/wpds-theme/src/wpds.tokens.json";
export default function inlineSVG({ path }) {
	function hexToRgbA(hex) {
		var c;
		if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
			c = hex.substring(1).split("");
			if (c.length == 3) {
				c = [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c = "0x" + c.join("");
			let rgba =
				"rgba(" +
				[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
				",1)";
			return lookUpValue(rgba);
		}
		if (hex == "white") {
			return "var(--wpds-colors-gray600)";
		}
		if (hex == "black") {
			return "var(--wpds-colors-gray0)";
		} else {
			// console.log("Bad Hex");
		}
	}

	function lookUpValue(rgba) {
		for (var token in Tokens.color.light) {
			if (Tokens.color.light[token].hasOwnProperty("value")) {
				const tokenValue = Tokens.color.light[token].value.replaceAll(
					" ",
					""
				);
				if (rgba == tokenValue) {
					return `var(--wpds-colors-${token})`;
				}
			}
		}
	}
	return (
		<ReactSVG
			beforeInjection={(svg) => {
				const paths = svg.querySelectorAll("path");
				paths.forEach((i) => {
					i.setAttribute("fill", hexToRgbA(i.getAttribute("fill")));
				});
				const lines = svg.querySelectorAll("line");
				lines.forEach((i) => {
					i.setAttribute(
						"stroke",
						hexToRgbA(i.getAttribute("stroke"))
					);
				});
				const rects = svg.querySelectorAll("rect");
				rects.forEach((i) => {
					i.setAttribute("fill", hexToRgbA(i.getAttribute("fill")));
				});
				//TODO need to account for primitives circle, ellipse, polyline, polygon
			}}
			src={path}
		/>
	);
}
