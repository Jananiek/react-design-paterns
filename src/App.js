import { useState } from "react";
import { ControlledOnBoardingFlow } from "./ControlledOnboardingFlow";
import {UncontrolledOnBoardingFlow}  from "./UncontrolledOnboardingFlow"

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
      <p>Congratulations you are eligible for senior discount</p>
      <button onClick={() => goToNext({})}>Next</button>
    </>
  );
};

const StepFour = ({ goToNext }) => {
  return (
    <>
      <h1>Step 4</h1>
      <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
    </>
  );
};
function App() {
  const [onBoardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const onNext = stepData => {
    const nextIndex=(currentIndex + 1)

    const updatedData={
        ...onBoardingData,
        ...stepData
    }
    console.log(updatedData)
        setCurrentIndex(nextIndex);
   
    setOnboardingData(updatedData)
    
  };
  return (
    <>
    <h2>Uncontrolled Flow</h2>
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
    <h2>Controlled flow</h2>
    <ControlledOnBoardingFlow currentIndex={currentIndex} onNext={onNext}
      onFinish={data => {
        console.log(data);
        alert("finish onboarding");
      }}
    >
      <StepOne />
      <StepTwo />
      {onBoardingData.age>60 && <StepThree />}
      <StepFour/>
    </ControlledOnBoardingFlow></>
   
  );
}

export default App;
