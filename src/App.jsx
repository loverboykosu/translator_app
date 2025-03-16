import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-blue-500">hello</h1>
      <button className="bg-blue-500">Button A</button>
    </>
  );
}

export default App;
