import { useState } from "react";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { UncontrolledModal } from "./UncontrolledModal";


function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <>
    <p>Uncontrolled Form</p>
      <UncontrolledForm />
      <p>Controlled Form</p>
      <ControlledForm />

      <p>Uncontrolled Modal</p>
      <UncontrolledModal />

      <p>Controlled Modal</p>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={()=>setShouldShowModal(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={()=>setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

export default App;
