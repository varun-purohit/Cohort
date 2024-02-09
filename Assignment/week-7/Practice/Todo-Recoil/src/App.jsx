import { useState } from "react";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Todo />
        <Filter />
      </RecoilRoot>
    </>
  );
}

function Todo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Todos</button>
    </div>
  );
}

function Filter() {
  return <input type="text" placeholder="Filter Todos" />;
}

export default App;
