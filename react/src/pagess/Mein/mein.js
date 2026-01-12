import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import generateColors from "../../shared/colorPaletteGenerator";
import "./mein.css";

export default function Mein() {
  const nav = useNavigate();
  const colorOfTheDay = useMemo(() => generateColors(1)[0], []);

  return (
    <div className="page main-page">
      <section className="hero">
        <div className="hero-left">
          <h1>The super fast color palettes generator!</h1>
          <p className="lead">Create beautiful color combinations quickly.</p>
          <div className="hero-actions">
            <button onClick={() => nav("/generator")} className="btn-primary">Start Generator</button>
            <button onClick={() => nav("/login")} className="btn-ghost">Sign in</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="swatch" style={{ background: `#${colorOfTheDay}` }} onClick={() => nav(`/colors/${colorOfTheDay}`)} />
          <div className="hex">#{colorOfTheDay}</div>
        </div>
      </section>
    </div>
  );
}