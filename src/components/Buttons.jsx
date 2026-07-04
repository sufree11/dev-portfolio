import { useState, useEffect } from "react";
import './Buttons.css'; 

import char1 from "../assets/pic/char1.png";
import char2 from "../assets/pic/char2.png";
import char3 from "../assets/pic/char3.png";

const CHARS = [char1, char2, char3];
const ROLES = [{ text: "ONE" }, { text: "TWO" }, { text: "THREE" }, { text: "FOUR" }, { text: "FIVE" }, { text: "SIX" }];

// Accept props passed down from the ProjectDeck
export default function Buttons({ projects = [], activeIndex = 0, onSelect }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="sc-root" role="navigation">
      {projects.map((item, i) => (
        <div
          key={item.id}
          className={`sc-bar-outer ${activeIndex === i ? "active" : ""} ${mounted ? "mounted" : ""}`}
        >
          <div className="sc-bar-red" />
          
          <div
            className="sc-bar"
            // Trigger the deck's jumpTo function when hovered
            onMouseEnter={() => onSelect && onSelect(i)}
          >
            {/* Using modulo (%) ensures it safely loops back to char1 if you have more than 3 projects */}
            <img className="sc-char" src={CHARS[i % CHARS.length]} alt="" />
            <div className="sc-bar-fill" />
            <div className="sc-bar-shade" />
            
            <div className="sc-bar-content">
              <div className="sc-role">{ROLES[i % ROLES.length].text}</div>
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