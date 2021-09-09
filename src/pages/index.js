import * as React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Suspense } from "react";
import { GlobalStyle } from "../components/layout";
import Venus from "../components/venus";
import Moon from "../components/moon";
import Text from "../components/text";

const CanvasWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  position: relative;

  .text {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    width: 100%;
    top: 10%;
  }
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <CanvasWrapper>
        <Canvas>
          <Suspense fallback={<Html><Loader
            type="Grid" timeout={5000}/>
          </Html>}>
            <Text />
            <Moon location={[2, 0, 2]} />
            <Venus />
          </Suspense>
        </Canvas>
      </CanvasWrapper>
    </>
  );
}

export default IndexPage;