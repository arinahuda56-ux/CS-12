import React, { useEffect, useState, useCallback } from "react";
import generateColors from "../../shared/colorPaletteGenerator";
import "./generator.css";

const NAMES = ["Ocean", "Sunset", "Mint", "Coral", "Lavender", "Sand", "Sky"];

export default function Generator() {
  const [colors, setColors] = useState(() => generateColors(5));
  const [saved, setSaved] = useState(() => colors.map(() => false));

  const onSpace = useCallback((e) => {
    if (e.code === "Space") {
      e.preventDefault();
      setColors((prev) => generateColors(prev.length));
      setSaved((prev) => prev.map(() => false));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onSpace);
    return () => window.removeEventListener("keydown", onSpace);
  }, [onSpace]);

  const handleSave = (i) =>
    setSaved((prev) => {
      if (prev[i]) return prev;
      const next = [...prev];
      next[i] = true;
      return next;
    });

  const addAfter = (pos) => {
    setColors((prev) => {
      if (prev.length >= 7) return prev;
      const next = [...prev.slice(0, pos + 1), generateColors(1)[0], ...prev.slice(pos + 1)];
      return next.slice(0, 7);
    });
    setSaved((prev) => {
      const next = [...prev];
      next.splice(pos + 1, 0, false);
      return next.slice(0, 7);
    });
  };

  return (
    <div className="page generator-page">
      <h2>Generator</h2>
      <p className="muted">Press Space to randomize palette</p>

      <div className="palette-row">
        {colors.map((hex, idx) => (
          <React.Fragment key={hex + "-" + idx}>
            <div className="color-item" style={{ background: `#${hex}` }}>
              <div className="color-overlay">
                <div className="icons">
                  <span>★</span>
                  <span>✦</span>
                  <span>⚙</span>
                </div>

                <button className="save-heart" onClick={() => handleSave(idx)} aria-label="save">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path
                      d="M12 21s-7.5-4.9-10-8.1C-0.5 8.9 4.6 3 8.7 6.1 11 8 12 9 12 9s1-1 3.3-2.9C19.4 3 24.5 8.9 22 12.9 19.5 16.1 12 21 12 21z"
                      fill={saved[idx] ? "#000" : "none"}
                      stroke="#000"
                      strokeWidth="0.8"
                    />
                  </svg>
                </button>
              </div>

              <div className="color-footer">
                <div className="color-name">{NAMES[idx % NAMES.length]}</div>
                <div className="color-hex">#{hex}</div>
              </div>
            </div>

            {idx < colors.length - 1 && (
              <div className="between" onClick={() => addAfter(idx)} title="Add color">
                <div className="plus">+</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div style={{ marginTop: 14 }}>
        <strong>Count:</strong> {colors.length} (max 7)
      </div>
    </div>
  );
}