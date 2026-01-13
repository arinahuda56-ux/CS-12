import React from "react";
import { useParams } from "react-router-dom";
import "./specialcolor.css";

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function rgbToCmyk({ r, g, b }) {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const k = 1 - Math.max(rn, gn, bn);
  if (k === 1) return { c: 0, m: 0, y: 0, k: 1 };
  const c = (1 - rn - k) / (1 - k);
  const m = (1 - gn - k) / (1 - k);
  const y = (1 - bn - k) / (1 - k);
  return { c, m, y, k };
}
function rgbToHsl({ r, g, b }) {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn: h = (gn - bn) / d + (gn < bn ? 6 : 0); break;
      case gn: h = (bn - rn) / d + 2; break;
      default: h = (rn - gn) / d + 4;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}
function rgbToHsv({ r, g, b }) {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    switch (max) {
      case rn: h = (gn - bn) / d + (gn < bn ? 6 : 0); break;
      case gn: h = (bn - rn) / d + 2; break;
      default: h = (rn - gn) / d + 4;
    }
    h /= 6;
  }
  const s = max === 0 ? 0 : d / max;
  const v = max;
  return { h: Math.round(h * 360), s: Math.round(s * 100), v: Math.round(v * 100) };
}

export default function SpecialColor() {
  const { colorHex } = useParams();
  const hex = colorHex ? (colorHex.startsWith("#") ? colorHex : `#${colorHex}`) : "#FFFFFF";
  const rgb = hexToRgb(hex);
  const cmyk = rgbToCmyk(rgb);
  const hsl = rgbToHsl(rgb);
  const hsv = rgbToHsv(rgb);

  return (
    <div className="page special-color">
      <h2>Color {hex.toUpperCase()}</h2>
      <div className="special-top">
        <div className="preview" style={{ background: hex }} />
        <div className="conversion">
          <table>
            <tbody>
              <tr><td>HEX</td><td>{hex.toUpperCase()}</td></tr>
              <tr><td>RGB</td><td>{`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}</td></tr>
              <tr><td>CMYK</td><td>{`cmyk(${Math.round(cmyk.c*100)}%, ${Math.round(cmyk.m*100)}%, ${Math.round(cmyk.y*100)}%, ${Math.round(cmyk.k*100)}%)`}</td></tr>
              <tr><td>HSB (HSV)</td><td>{`hsb(${hsv.h}°, ${hsv.s}%, ${hsv.v}%)`}</td></tr>
              <tr><td>HSL</td><td>{`hsl(${hsl.h}°, ${hsl.s}%, ${hsl.l}%)`}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <section style={{ marginTop: 20 }}>
        <h4>Details</h4>
        <div>Author: Demo</div>
      </section>
    </div>
  );
}