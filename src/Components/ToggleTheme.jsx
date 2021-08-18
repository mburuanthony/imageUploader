import React from "react";

function ToggleTheme({ theme, toggleTheme }) {
  return (
    <div onClick={toggleTheme} className="toggle">
      {theme === "light" ? (
        <span className="material-icons" style={{ fontSize: "40px" }}>
          dark_mode
        </span>
      ) : (
        <span
          className="material-icons"
          style={{ color: "#fff", fontSize: "40px" }}
        >
          light_mode
        </span>
      )}
    </div>
  );
}

export default ToggleTheme;
