import React from "react";
import { useThree } from '@react-three/fiber'
import * as THREE from 'three';
import SW from "../assets/fonts/sw.json";

const Text = () => {
  const font = new THREE.FontLoader().parse(SW);

  const textOptions = {
    font,
    size: 0.2,
    height: 0
  };

  const { viewport } = useThree();

  return (
    <>
      <mesh position={[-1.07,1,3]}>
        <textGeometry args={["Lewis Krishnamurti", textOptions]} />
        <meshPhongMaterial color="#e5b13a" flatShading="true"/>
      </mesh>
    </>
  )
}

export default Text;