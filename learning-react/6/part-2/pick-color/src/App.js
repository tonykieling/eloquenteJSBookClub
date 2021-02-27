import AddColorFormUncontrolledComponent from "./components/AddColorForm-uncontrolled-component";
import AddColorFormControlledComponent from "./components/AddColorForm-controlled-component";
import AddColorForm from "./components/AddColorForm.js";

export default function App() {
  return (
    <div>
      <AddColorFormUncontrolledComponent />
      <AddColorFormControlledComponent />
      <AddColorForm />
    </div>
  );
}

