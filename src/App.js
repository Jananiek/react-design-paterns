import { useState } from "react";
import { UncontrolledOnBoardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => {
  return (
    <>
      <h1>Step 1</h1>
      <button onClick={() => goToNext({ name: "John" })}>Next</button>
    </>
  );
};
const StepTwo = ({ goToNext }) => {
  return (
    <>
      <h1>Step 2</h1>
      <button onClick={() => goToNext({ age: 30 })}>Next</button>
    </>
  );
};
const StepThree = ({ goToNext }) => {
  return (
    <>
      <h1>Step 3</h1>
      <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
    </>
  );
};
function App() {
  return (
    <UncontrolledOnBoardingFlow
      onFinish={data => {
        console.log(data);
        alert("finish onboarding");
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnBoardingFlow>
  );
}

export default App;
