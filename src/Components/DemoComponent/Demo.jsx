import files from "../../files.json";
import Directory from "../Directory";

const Demo = () => {
  return (
    <div className="demo">
      <h1>Hello CodeSandbox</h1>
      <h2>Directory Explorer</h2>
      <div className="spacing">
        <Directory files={files} />
      </div>
    </div>
  );
};

export default Demo;
