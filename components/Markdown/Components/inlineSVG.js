import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import Tokens from "@washingtonpost/wpds-theme/src/wpds.tokens.json";
export default function inlineSVG({ path, title, description, width, height }) {
  const Size = { height: height ? height : 150, width: width ? width : 300 };

  function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      let rgba =
        "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)";
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
        const tokenValue = Tokens.color.light[token].value.replaceAll(" ", "");
        if (rgba == tokenValue) {
          return `var(--wpds-colors-${token})`;
        }
      }
    }
  }
  return (
    <>
      <ReactSVG
        aria-label={description}
        beforeInjection={(svg) => {
          const titleTag = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "title"
          );
          titleTag.innerHTML = title; //require title to be passed
          svg.prepend(title);
          svg.setAttribute("style", `max-width:${Size.width}`);
          svg.setAttribute("style", `max-height:${Size.height}`);
          svg.setAttribute("width", Size.width);
          svg.setAttribute("height", Size.height);
          const paths = svg.querySelectorAll("path");
          paths.forEach((i) => {
            i.setAttribute("fill", hexToRgbA(i.getAttribute("fill")));
          });
          const lines = svg.querySelectorAll("line");
          lines.forEach((i) => {
            i.setAttribute("stroke", hexToRgbA(i.getAttribute("stroke")));
          });
          const rects = svg.querySelectorAll("rect");
          rects.forEach((i) => {
            i.setAttribute("fill", hexToRgbA(i.getAttribute("fill")));
          });
          //TODO need to account for primitives circle, ellipse, polyline, polygon
        }}
        fallback={() => <span>Error while loading image</span>}
        src={path}
      />
    </>
  );
}
