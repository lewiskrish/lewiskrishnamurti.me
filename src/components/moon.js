import React, { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import MoonMap from "../assets/textures/8k_moon.jpg";
import { TextureLoader } from "three";

const Moon = () => {
  const moonMap = useLoader(TextureLoader, MoonMap);
  
  const moonRef = useRef();

  useFrame(({ clock }) => {
    moonRef.current.rotation.y = clock.getElapsedTime() / 6;
  })

  const { viewport } = useThree();

  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={moonRef} position={[0, 0 ,2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={moonMap}
        />
      </mesh>
    </>
  )
};

export default Moon;