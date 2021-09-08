import * as React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { GlobalStyle } from "../components/layout";
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
          <Suspense fallback={null}>
            <Text />
            <Moon />
          </Suspense>
        </Canvas>
      </CanvasWrapper>
    </>
  );
}

export default IndexPage;