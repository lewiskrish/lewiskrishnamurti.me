import React from "react";
import * as THREE from 'three';
import Roboto_Regular from "../assets/fonts/Roboto_Regular.json";

const Text = () => {
  const font = new THREE.FontLoader().parse(Roboto_Regular);

  const textOptions = {
    font,
    size: 0.2,
    height: 0
  };

  return (
    <>
      <mesh position={[-1.07,1,3]}>
        <textGeometry args={["Lewis Krishnamurti", textOptions]} />
        <meshPhongMaterial color="#ffffff" flatShading="true"/>
      </mesh>
    </>
  )
}

export default Text;