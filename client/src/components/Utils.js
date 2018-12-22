import React from "react";
import "./../styles/Utils.css";

export const Logo = () => (
  <div
    style={{
      margin: "1rem auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <img
      src={require("./../images/sgp_logo.png")}
      style={{ width: `300px`, margin: ".5em auto .3em" }}
    />
  </div>
);

export const Tips = () => (
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>
);
