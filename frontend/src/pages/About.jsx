import { useRef } from "react";
import VariableProximity from "../component/VariableProximity";

function About() {
  const containerRef = useRef(null);

  return (
    <>
      <div
        style={{
          display: "flex", // Menggunakan Flexbox
          justifyContent: "center", // Pusatkan secara horizontal
          alignItems: "center", // Pusatkan secara vertikal
          width: "100vw", // Lebar penuh layar
          height: "100vh",
        }}
      >
        <div
          ref={containerRef}
          style={{

            display: "flex", // Flexbox untuk konten di dalamnya
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "Column"
          }}
        >
          <VariableProximity
            label={"Welcome to Nineties!"}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={250}
            falloff="linear"
            style={{
                fontSize: "50px"
            }}
          />
          <br/>
          
          <VariableProximity
            label={"Discover music that brings back"}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={250}
            falloff="linear"
          />
          <VariableProximity
            label={"memories and emotions from pop and rock to R&B and jazz."}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={250}
            falloff="linear"
          />
           <VariableProximity
            label={"Every song tells a story."}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={250}
            falloff="linear"
          />
          <br />
           <VariableProximity
            label={"Listen and relive your best moments."}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={250}
            falloff="linear"
          />
        </div>
      </div>
    </>
  );
}

export default About;
