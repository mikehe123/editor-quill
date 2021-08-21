import logo from "./logo.svg";
import "./App.css";
import Editor from "./components/editor";
import Page from "./components/Page";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <RecoilNexus />
        <Page />
      </RecoilRoot>
    </div>
  );
}

export default App;
