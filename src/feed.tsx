import React from "react";
import ReactDOM from "react-dom";
import WithHuge from './with-huge';

console.log("init feed");

ReactDOM.render(<Feed />, document.getElementById("feed"));

function Feed() {
  return (
    <div style={{ backgroundColor: "palegreen" }}>
      FEED <WithHuge from="feed" />
      <button onClick={() => { console.log("clicked"); }}>Click me and see console!</button>
    </div>
  );
}