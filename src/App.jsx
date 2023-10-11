import React, { useState } from "react";
import {
  CalciteButton,
  CalciteIcon,
  CalciteSlider,
} from "@esri/calcite-components-react";
import "@esri/calcite-components/dist/calcite/calcite.css";

function App() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <>
      <h1>
        React Template
        <CalciteIcon icon="banana" />
      </h1>
      <p>
        This is a sample using Calcite Components React!{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/Esri/calcite-components-examples/tree/master/react#why-not-just-use-the-web-components-directly"
        >
          Why not just use the web components directly?
        </a>
      </p>
      <CalciteSlider
        min={1}
        max={100}
        value={sliderValue}
        step={1}
        onCalciteSliderInput={({ target: { value } }) =>
          typeof value === "number" && setSliderValue(value)
        }
      />
      <p>The slider currently has a value of {sliderValue}.</p>
      <CalciteButton onClick={() => setSliderValue(0)}>Clear</CalciteButton>
    </>
  );
}

export default App;
