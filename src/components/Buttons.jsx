import { useState, useEffect } from "react";
import './Buttons.css'; 

import char1 from "../assets/pic/char1.png";
import char2 from "../assets/pic/char2.png";
import char3 from "../assets/pic/char3.png";

const CHARS = [char1, char2, char3];

// Accept props passed down from the ProjectDeck
export default function Buttons({ projects = [], activeIndex = 0, onSelect }) {
  const [mounted, setMounted] = useState(false);
  // Tracks hover independently of the deck's activeIndex so the bar highlight
  // never waits on the deck's own transition guard to catch up.
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const highlightIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  return (
    <div className="sc-root" role="navigation">
      {projects.map((item, i) => (
        <div
          key={item.id}
          className={`sc-bar-outer ${highlightIndex === i ? "active" : ""} ${mounted ? "mounted" : ""}`}
        >
          <div className="sc-bar-red" />

          <div
            className="sc-bar"
            // Highlight immediately; still ask the deck to jump, but its own
            // guard against mid-transition jumps no longer blocks the visual.
            onMouseEnter={() => {
              setHoverIndex(i);
              onSelect && onSelect(i);
            }}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Using modulo (%) ensures it safely loops back to char1 if you have more than 3 projects */}
            <img className="sc-char" src={CHARS[i % CHARS.length]} alt="" />
            <div className="sc-bar-fill" />
            <div className="sc-bar-shade" />
            
            <div className="sc-bar-content">
              <div className="sc-role">
                <span className="sc-role-month" data-text={item.year.split("/")[0]}>{item.year.split("/")[0]}</span>
                <span className="sc-role-year" data-text={item.year.split("/")[1]}>{item.year.split("/")[1]}</span>
              </div>
              <div className="sc-main">
                <div className="sc-main-top">
                  {/* Pulls the label directly from your project data */}
                  <div className="sc-label">{item.title}</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
}