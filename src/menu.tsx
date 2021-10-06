import React from "react";
import ReactDOM from "react-dom";
import Small from "./small";
import WithHuge from "./with-huge";
import somePackage from "./some-package";

console.log("init menu");

somePackage();

ReactDOM.render(<Menu />, document.getElementById("menu"));

window.onload = () => console.log("onload");

function Menu() {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      MENU Build Time - {process.env.BUILD_TIME}
      <Small />
      <WithHuge from="menu" />
    </div>
  );
}
