import React, { useEffect, useState } from "react";
import loadHuge from "./loadHuge";

export default function WithHuge({ from }: { from: string; }) {
  const [hugeSize, setHugeSize] = useState(0);

  useEffect(() => {
    loadHuge(from).then(setHugeSize);
  }, []);

  return (
    <span style={{ backgroundColor: "paleturquoise" }}>
      <style>{`
        .blink {
          animation: blinker 1s linear infinite;
        }

        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
      `}</style>
      {
        !hugeSize
          ? <span className="blink">Huge is loading...</span>
          : <span>Huge loaded. Size: {hugeSize}</span>
      }
    </span>);
}
