import React, { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

import VenusSurfaceMap from "../assets/textures/8k_venus_surface.jpg";
import VenusAtmosphereMap from "../assets/textures/4k_venus_atmosphere.jpg";
import { TextureLoader } from "three";

const Venus = () => {
    const [venusSurfaceMap, venusAtmosphereMap] = useLoader(
        TextureLoader, [VenusSurfaceMap, VenusAtmosphereMap]);

    const surfaceRef = useRef();
    const atmosphereRef = useRef();

    useFrame(({ clock }) => {
        const timeElapsed = clock.getElapsedTime()
        surfaceRef.current.rotation.y = timeElapsed / 6;
        atmosphereRef.current.rotation.y = timeElapsed / 6;
    })

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
            <mesh ref={surfaceRef} position={[0, 0, 2]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    map={venusSurfaceMap}
                    metalness={0.4}
                    roughness={0.7}
                />
            </mesh>
            <mesh ref={atmosphereRef} position={[0, 0, 2]}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshStandardMaterial
                    map={venusAtmosphereMap}
                    opacity={0.3}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </>
    )
};

export default Venus;