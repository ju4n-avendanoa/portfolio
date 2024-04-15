"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function StarsBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: "0px",
        zIndex: "0",
        width: "100vw",
      }}
    >
      <Canvas>
        <Stars radius={70} count={1800} factor={6} fade speed={2} />
      </Canvas>
    </div>
  );
}

export default StarsBackground;
