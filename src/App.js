import Button from "./Components/Button";
import { ChildToParent } from "./Components/ChildToParent";
import CountExample from "./Components/Count";
import { ParentToChild } from "./Components/ParentToChild";
import { Siblings } from "./Components/Siblings";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>State uplifting</h1>
      <ParentToChild />
      {/* <ChildToParent /> */}
      {/* <Siblings /> */}
      {/* <Button text="Hello World!" />
      <CountExample /> */}
    </div>
  );
}
