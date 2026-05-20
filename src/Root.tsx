import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadSyne } from "@remotion/google-fonts/Syne";
import React from "react";
import { Composition } from "remotion";
import "./styles.css";
import {
  ConcorreAIPresentation,
  DURATION_IN_FRAMES,
  FPS,
} from "./ConcorreAIPresentation";

const { fontFamily: interFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const { fontFamily: syneFamily } = loadSyne("normal", {
  weights: ["700", "800"],
  subsets: ["latin"],
});

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <style>{`
        :root {
          --font-sans: ${interFamily};
          --font-display: ${syneFamily};
        }
        * {
          font-family: ${interFamily}, system-ui, sans-serif;
        }
        .font-display {
          font-family: ${syneFamily}, ${interFamily}, sans-serif;
        }
      `}</style>
      <Composition
        id="ConcorreAI"
        component={ConcorreAIPresentation}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
