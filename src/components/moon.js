import React, { useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import MoonMap from "../assets/textures/8k_moon.jpg";
import { TextureLoader } from "three";

const Moon = ({ location }) => {
  const moonMap = useLoader(TextureLoader, MoonMap);

  const moonRef = useRef();

  useFrame(({ clock }) => {
    moonRef.current.rotation.y = clock.getElapsedTime();
  })

  const [hovered, setHover] = useState(false)

  return (
    <>
      <mesh
        ref={moonRef} 
        position={location} 
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        onClick={(e) => window.open("https://github.com/lewiskrish")}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          map={moonMap}
          color={hovered ? "red" : "white"}
        />
      </mesh>
    </>
  )
};

export default Moon;