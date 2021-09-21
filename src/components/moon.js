import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import { TextureLoader } from "three";

const Moon = ({ location, texture, link }) => {
  const moonMap = useLoader(TextureLoader, texture);

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
        onClick={(e) => window.open(link)}>
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