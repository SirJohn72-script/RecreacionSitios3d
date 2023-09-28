import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Cars, Floor } from "./Model";
import { Lights } from "./Light";
import { AddShadows } from "./Shadows";
import { GsapAnimation } from "../gsap/GsapAnimation";

import { useRef } from "react";

export default function Scene() {
  const controlsRef = useRef<any>(null);

  return (
    <div className='w-[100%] h-[100vh]'>
      <Canvas shadows camera={{ fov: 40, position: [0, 5, 0], zoom: 1 }}>
        <Cars modelPath='/HeroModel.glb' />
        <Floor modelPath='/HeroFloor.glb' />

        <OrbitControls
          ref={controlsRef}
          target={[0, 0, -0.1]}
          enableDamping={false}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />

        <Environment preset='apartment' />

        <Lights />
        <AddShadows />

        <GsapAnimation controlsRef={controlsRef} />
      </Canvas>
    </div>
  );
}
