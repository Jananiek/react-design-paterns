import React from "react";
export const ControlledOnBoardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
}) => {
  const goToNext = (stepData) => {
    if(currentIndex+1>children.length){
      onFinish(stepData)
    }else{
      onNext(stepData);
    }
    
  };
  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
};
